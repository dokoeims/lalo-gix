/**
 * This file provides shims for GSAP and ScrollTrigger in case they're not properly loaded
 * It helps prevent errors from crashing the application
 */

// Create a no-op ScrollTrigger shim
const ScrollTriggerShim = {
  create: () => ({
    kill: () => {}
  }),
  refresh: () => {},
  update: () => {},
  defaults: () => {},
  scrollerProxy: () => {},
  matchMedia: () => ({
    add: () => {},
    revert: () => {}
  }),
  getAll: () => [],
  kill: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  scrollTop: (value) => value || 0,
  batch: () => {},
  isInViewport: () => false,
  isTouch: false,
  saveStyles: () => {},
  revert: () => {},
  config: () => {},
  sort: () => {},
  clearMatchMedia: () => {},
  observe: () => ({ unobserve: () => {} }),
  normalizeScroll: () => {},
  disable: () => {},
  enable: () => {},
  register: () => {},
  version: '0.0.0'
};

// Create a no-op GSAP shim
const GSAPShim = {
  to: () => ({ kill: () => {} }),
  from: () => ({ kill: () => {} }),
  fromTo: () => ({ kill: () => {} }),
  set: () => {},
  registerPlugin: () => {},
  timeline: () => ({
    to: () => ({}),
    from: () => ({}),
    fromTo: () => ({}),
    kill: () => {}
  }),
  config: { autoSleep: 120, force3D: true },
  getProperty: () => 0,
  registerEffect: () => {},
  core: {
    getCache: () => ({})
  },
  plugins: {}
};

export { ScrollTriggerShim, GSAPShim };
