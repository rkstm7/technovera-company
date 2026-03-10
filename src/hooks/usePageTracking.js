import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, initScrollTracking, initTimeTracking } from '../utils/analytics';

/**
 * Custom hook to track page views and user engagement
 * Add this to your main App component
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname + location.search);

    // Initialize scroll tracking
    const cleanupScroll = initScrollTracking();

    // Initialize time tracking
    const cleanupTime = initTimeTracking();

    // Cleanup on unmount
    return () => {
      if (cleanupScroll) cleanupScroll();
      if (cleanupTime) cleanupTime();
    };
  }, [location]);
};
