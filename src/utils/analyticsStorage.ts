import { AnalyticsEvent, AnalyticsSummary } from '../types/analytics';

const STORAGE_KEY_EVENTS = 'nexora_analytics_events';
const STORAGE_KEY_STATS = 'nexora_analytics_stats';
const MAX_LOCAL_EVENTS = 250;

/**
 * Format current timestamp to HH:mm:ss
 */
export function formatTime(ts: number = Date.now()): string {
  const d = new Date(ts);
  return d.toTimeString().split(' ')[0];
}

/**
 * Retrieve stored events from LocalStorage
 */
export function getStoredEvents(): AnalyticsEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_EVENTS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Failed to parse stored analytics events:', err);
    return [];
  }
}

/**
 * Save event to LocalStorage and trigger asynchronous API sync
 */
export function recordLocalEvent(event: AnalyticsEvent): AnalyticsEvent[] {
  try {
    const existing = getStoredEvents();
    // Prepend latest event, cap at MAX_LOCAL_EVENTS
    const updated = [event, ...existing].slice(0, MAX_LOCAL_EVENTS);
    localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(updated));

    // Send to server API in background (fire and forget)
    sendEventToApi(event);

    return updated;
  } catch (err) {
    console.warn('Failed to record analytics event to LocalStorage:', err);
    return [];
  }
}

/**
 * Send an event or batch of events to the Express server API
 */
export async function sendEventToApi(eventOrEvents: AnalyticsEvent | AnalyticsEvent[]): Promise<boolean> {
  try {
    const payload = Array.isArray(eventOrEvents) ? eventOrEvents : [eventOrEvents];
    const res = await fetch('/api/analytics/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ events: payload }),
    });
    return res.ok;
  } catch (err) {
    // Silently handle offline/network issues
    return false;
  }
}

/**
 * Fetch aggregated statistics from server API
 */
export async function fetchServerStats(): Promise<AnalyticsSummary | null> {
  try {
    const res = await fetch('/api/analytics/stats');
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (err) {
    return null;
  }
}

/**
 * Compute summary directly from local events as an offline fallback
 */
export function computeLocalSummary(events: AnalyticsEvent[]): AnalyticsSummary {
  const viewsBySection: Record<string, number> = {};
  const clicksByCta: Record<string, number> = {};
  let totalSectionViews = 0;
  let totalCtaClicks = 0;

  events.forEach((ev) => {
    if (ev.type === 'section_view') {
      totalSectionViews++;
      const s = ev.sectionId || ev.name;
      viewsBySection[s] = (viewsBySection[s] || 0) + 1;
    } else if (ev.type === 'cta_click') {
      totalCtaClicks++;
      const btn = ev.metadata?.buttonText || ev.name;
      clicksByCta[btn] = (clicksByCta[btn] || 0) + 1;
    }
  });

  const overallCtr =
    totalSectionViews > 0
      ? Number(((totalCtaClicks / totalSectionViews) * 100).toFixed(1))
      : 0;

  return {
    totalEvents: events.length,
    totalSectionViews,
    totalCtaClicks,
    overallCtr,
    viewsBySection,
    clicksByCta,
    recentEvents: events.slice(0, 50),
    lastUpdated: Date.now(),
  };
}

/**
 * Clear LocalStorage events and optionally reset server
 */
export async function clearAllAnalytics(): Promise<void> {
  try {
    localStorage.removeItem(STORAGE_KEY_EVENTS);
    localStorage.removeItem(STORAGE_KEY_STATS);
    await fetch('/api/analytics/reset', { method: 'POST' });
  } catch (err) {
    console.warn('Failed to clear analytics:', err);
  }
}
