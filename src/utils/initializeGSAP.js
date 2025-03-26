import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GSAPShim, ScrollTriggerShim } from './gsapShim';

/**
 * Initialize GSAP and register the ScrollTrigger plugin
 * This should be called at the start of the application
 */
export const initializeGSAP = () => {
  try {
    // Register the ScrollTrigger plugin only once
    if (!gsap.plugins || !gsap.plugins.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    // Configure GSAP defaults
    gsap.config({
      nullTargetWarn: false, // Suppress warnings about null targets
      force3D: true // Force 3D transformations for better performance
    });
    
    return { gsap, ScrollTrigger };
  } catch (error) {
    console.error('Failed to initialize GSAP:', error);
    // Return shims if real GSAP fails
    return { gsap: GSAPShim, ScrollTrigger: ScrollTriggerShim };
  }
};

/**
 * Create a scroll-triggered animation
 * 
 * @param {HTMLElement|String} element - The element to animate
 * @param {Object} fromVars - Starting properties
 * @param {Object} toVars - Ending properties
 * @param {Object} triggerOptions - ScrollTrigger options
 */
export const createScrollAnimation = (element, fromVars, toVars, triggerOptions = {}) => {
  if (!element) return null;
  
  try {
    const { gsap } = initializeGSAP();
    
    const defaultOptions = {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none'
    };
    
    const combinedOptions = { ...defaultOptions, ...triggerOptions };
    
    return gsap.fromTo(
      element,
      fromVars,
      {
        ...toVars,
        scrollTrigger: combinedOptions
      }
    );
  } catch (error) {
    console.error('Error creating scroll animation:', error);
    return null;
  }
};

const gsapUtils = { initializeGSAP, createScrollAnimation };

export default gsapUtils;
