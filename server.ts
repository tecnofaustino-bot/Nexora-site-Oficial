import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Server-side Gemini client initialization
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }



  // In-memory analytics event store (capped at 1000 items)
  const analyticsEvents: Array<{
    id: string;
    type: string;
    name: string;
    sectionId?: string;
    timestamp: number;
    timeFormatted: string;
    metadata?: Record<string, any>;
  }> = [];

  // API Route: Ingest analytics events
  app.post('/api/analytics/events', (req, res) => {
    try {
      const incoming = Array.isArray(req.body.events)
        ? req.body.events
        : req.body.event
        ? [req.body.event]
        : [];

      for (const item of incoming) {
        if (item && item.type) {
          analyticsEvents.unshift({
            id: item.id || `ev-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
            type: item.type,
            name: item.name || 'Evento sem nome',
            sectionId: item.sectionId,
            timestamp: item.timestamp || Date.now(),
            timeFormatted: item.timeFormatted || new Date().toTimeString().split(' ')[0],
            metadata: item.metadata || {},
          });
        }
      }

      // Keep only the last 1000 events
      if (analyticsEvents.length > 1000) {
        analyticsEvents.length = 1000;
      }

      return res.json({ success: true, totalRecorded: analyticsEvents.length });
    } catch (err: any) {
      console.error('Error logging analytics events:', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // API Route: Aggregated analytics statistics
  app.get('/api/analytics/stats', (req, res) => {
    try {
      const viewsBySection: Record<string, number> = {};
      const clicksByCta: Record<string, number> = {};
      let totalSectionViews = 0;
      let totalCtaClicks = 0;

      for (const ev of analyticsEvents) {
        if (ev.type === 'section_view') {
          totalSectionViews++;
          const sec = ev.sectionId || ev.name;
          viewsBySection[sec] = (viewsBySection[sec] || 0) + 1;
        } else if (ev.type === 'cta_click') {
          totalCtaClicks++;
          const btn = ev.metadata?.buttonText || ev.name;
          clicksByCta[btn] = (clicksByCta[btn] || 0) + 1;
        }
      }

      const overallCtr =
        totalSectionViews > 0
          ? Number(((totalCtaClicks / totalSectionViews) * 100).toFixed(1))
          : 0;

      return res.json({
        success: true,
        totalEvents: analyticsEvents.length,
        totalSectionViews,
        totalCtaClicks,
        overallCtr,
        viewsBySection,
        clicksByCta,
        recentEvents: analyticsEvents.slice(0, 50),
        lastUpdated: Date.now(),
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // API Route: Reset analytics data
  app.post('/api/analytics/reset', (req, res) => {
    analyticsEvents.length = 0;
    return res.json({ success: true, message: 'Métricas de analytics limpas com sucesso.' });
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'nexora-fullstack' });
  });

  // Development: Vite middleware; Production: Static files
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nexora applet running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
