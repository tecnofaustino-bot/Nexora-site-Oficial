/**
 * Type definitions for analytics and monitoring system
 */

export type AnalyticsEventType = 'section_view' | 'cta_click' | 'page_view' | 'video_play';

export interface AnalyticsEvent {
  id: string;
  type: AnalyticsEventType;
  name: string; // e.g. "Hero Section", "Hero Primary CTA"
  sectionId?: string; // e.g. "hero", "oferta", "cta-final"
  timestamp: number;
  timeFormatted: string; // e.g. "13:24:10"
  metadata?: {
    buttonText?: string;
    targetUrl?: string;
    sectionName?: string;
    dwellTimeSeconds?: number;
    viewportWidth?: number;
    referrer?: string;
    [key: string]: any;
  };
}

export interface AnalyticsSummary {
  totalEvents: number;
  totalSectionViews: number;
  totalCtaClicks: number;
  overallCtr: number; // percentage (0 - 100)
  viewsBySection: Record<string, number>;
  clicksByCta: Record<string, number>;
  recentEvents: AnalyticsEvent[];
  lastUpdated: number;
}
