/**
 * Google Analytics Helper Functions
 * Track page views, events, and conversions
 */

// Track page view
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  trackEvent('click', 'Button', buttonName);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('submit', 'Form', formName);
};

// Track phone number clicks
export const trackPhoneClick = () => {
  trackEvent('click', 'Contact', 'Phone Number');
};

// Track email clicks
export const trackEmailClick = () => {
  trackEvent('click', 'Contact', 'Email');
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  trackEvent('click', 'Contact', 'WhatsApp');
};

// Track service page views
export const trackServiceView = (serviceName) => {
  trackEvent('view', 'Service', serviceName);
};

// Track blog post views
export const trackBlogView = (blogTitle) => {
  trackEvent('view', 'Blog', blogTitle);
};

// Track downloads
export const trackDownload = (fileName) => {
  trackEvent('download', 'File', fileName);
};

// Track outbound links
export const trackOutboundLink = (url) => {
  trackEvent('click', 'Outbound Link', url);
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll', 'Engagement', `${percentage}%`);
};

// Track time on page
export const trackTimeOnPage = (seconds) => {
  trackEvent('timing', 'Engagement', 'Time on Page', seconds);
};

// Track conversions
export const trackConversion = (conversionType, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: import.meta.env.VITE_GA_TRACKING_ID,
      value: value,
      currency: 'INR',
      transaction_id: Date.now().toString(),
      conversion_type: conversionType,
    });
  }
};

// Initialize scroll tracking
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let scrollDepths = [25, 50, 75, 100];
  let trackedDepths = new Set();

  const handleScroll = () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    scrollDepths.forEach((depth) => {
      if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);
        trackScrollDepth(depth);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
};

// Initialize time tracking
export const initTimeTracking = () => {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();

  const trackTime = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackTimeOnPage(timeSpent);
  };

  // Track time when user leaves page
  window.addEventListener('beforeunload', trackTime);

  return () => window.removeEventListener('beforeunload', trackTime);
};
