// Analytics System for DarkSpark
interface TrackingEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom?: Record<string, any>;
}

class Analytics {
  private static instance: Analytics;
  private events: TrackingEvent[] = [];

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  track(event: TrackingEvent) {
    this.events.push(event);
    
    // Send to Google Analytics if available
    if (typeof gtag !== "undefined") {
      gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom
      });
    }

    // Send to custom endpoint
    this.sendToCustomEndpoint(event);
    
    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  private async sendToCustomEndpoint(event: TrackingEvent) {
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.error("Analytics error:", error);
    }
  }

  trackScroll(depth: number) {
    this.track({
      event: "scroll",
      category: "engagement",
      action: "scroll_depth",
      value: depth
    });
  }

  trackInteraction(element: string, action: string) {
    this.track({
      event: "interaction",
      category: "engagement",
      action: action,
      label: element
    });
  }

  trackTimeOnPage(seconds: number) {
    this.track({
      event: "timing",
      category: "engagement",
      action: "time_on_page",
      value: seconds
    });
  }

  trackCTA(button: string, section: string) {
    this.track({
      event: "cta_click",
      category: "conversion",
      action: "button_click",
      label: `${section}_${button}`
    });
  }

  trackFormSubmission(form: string) {
    this.track({
      event: "form_submit",
      category: "conversion",
      action: "form_submission",
      label: form
    });
  }

  trackVideoView(video: string, duration: number) {
    this.track({
      event: "video_view",
      category: "engagement",
      action: "video_watch",
      label: video,
      value: duration
    });
  }

  trackAchievement(achievement: string) {
    this.track({
      event: "achievement",
      category: "gamification",
      action: "achievement_unlocked",
      label: achievement
    });
  }
}

export const analytics = Analytics.getInstance();

// Web Vitals tracking
export function trackWebVitals() {
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(analytics.track.bind(analytics));
      getFID(analytics.track.bind(analytics));
      getFCP(analytics.track.bind(analytics));
      getLCP(analytics.track.bind(analytics));
      getTTFB(analytics.track.bind(analytics));
    });
  }
}

// Auto-tracking setup
export function setupAutoTracking() {
  if (typeof window === 'undefined') return;

  // Track page views
  let startTime = Date.now();
  
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    analytics.trackTimeOnPage(timeOnPage);
  });

  // Track scroll depth
  let maxScrollDepth = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    if (scrollPercent > maxScrollDepth) {
      maxScrollDepth = scrollPercent;
      analytics.trackScroll(scrollPercent);
    }
  });

  // Track CTA clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const button = target.closest('button, a');
    
    if (button) {
      const text = button.textContent?.trim();
      const section = button.closest('section')?.id || 'unknown';
      
      if (text && (text.includes('Contato') || text.includes('Demo') || text.includes('Implementar'))) {
        analytics.trackCTA(text, section);
      }
    }
  });
}
