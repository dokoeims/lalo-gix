/**
 * Utility functions for device and browser detection
 */

// Check if the user is on a mobile device
export const isMobile = () => {
  // Check if window exists (for SSR)
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
    (window.innerWidth <= 768);
};

// Check if the browser supports smooth scrolling
export const supportsSmoothScroll = () => {
  // Check if window exists (for SSR)
  if (typeof window === 'undefined') return false;
  
  return 'scrollBehavior' in document.documentElement.style;
};

// Check browser performance capabilities
export const hasGoodPerformance = () => {
  // Check if window exists (for SSR)
  if (typeof window === 'undefined') return false;
  
  // Factors that indicate good performance
  const hasHighRefreshScreen = window.matchMedia('(min-resolution: 2dppx)').matches;
  const hasLargeScreen = window.innerWidth >= 1200 && window.innerHeight >= 800;
  const hasGoodCPU = !isMobile() || navigator.hardwareConcurrency > 4;
  
  return hasGoodCPU && (hasLargeScreen || !hasHighRefreshScreen);
};

// Should we enable advanced animations?
export const shouldEnableAnimations = () => {
  // If user has set a preference, respect it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) return false;
  
  // If performance might be an issue, be conservative with animations
  return hasGoodPerformance();
};

const deviceDetection = {
  isMobile,
  supportsSmoothScroll,
  hasGoodPerformance,
  shouldEnableAnimations
};

export default deviceDetection;
