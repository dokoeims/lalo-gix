import React, { useEffect, useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import SafeComponent from './components/SafeComponent';
import Loading from './components/Loading';
import HeroSection from './components/HeroSection';
import { AudioProvider } from './contexts/AudioContext';
import { initializeGSAP, createScrollAnimation } from './utils/initializeGSAP';
import { shouldEnableAnimations, isMobile } from './utils/deviceDetection';

// Lazy load non-critical components
const LatestRelease = lazy(() => import('./components/LatestRelease'));
const MusicSection = lazy(() => import('./components/MusicSection'));
const BioSection = lazy(() => import('./components/BioSection'));
const EventsSection = lazy(() => import('./components/EventsSection'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Footer = lazy(() => import('./components/Footer'));
const MiniPlayer = lazy(() => import('./components/MiniPlayer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    const { gsap } = initializeGSAP();
    
    // Initialize animations after a short delay to ensure DOM is fully rendered
    const animationTimer = setTimeout(() => {
      try {
        // Check if we should enable advanced animations
        const enableAnimations = typeof window !== 'undefined' ? shouldEnableAnimations() : false;
        const isMobileDevice = typeof window !== 'undefined' ? isMobile() : false;

        // Initialize animations
        const sections = document.querySelectorAll('section');
        
        if (enableAnimations) {
          sections.forEach(section => {
            if (section) {
              const animateElements = section.querySelectorAll('.animate-in');
              if (animateElements.length) {
                createScrollAnimation(
                  animateElements,
                  { y: 50, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
                  { trigger: section }
                );
              }
            }
          });
          
          // Parallax effect on hero image - only on non-mobile devices
          if (!isMobileDevice) {
            const parallaxBgs = document.querySelectorAll('.parallax-bg');
            if (parallaxBgs.length) {
              gsap.to('.parallax-bg', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                  trigger: '.parallax-bg',
                  start: 'top top',
                  end: 'bottom top',
                  scrub: true
                }
              });
            }
          }
        } else {
          // Just fade in elements without animations for low-power devices
          gsap.set('.animate-in, .animate-hero', { opacity: 1, clearProps: 'all' });
        }
      } catch (error) {
        console.error('Animation setup error:', error);
        // Make sure content is visible even if animations fail
        try {
          document.querySelectorAll('.animate-in, .animate-hero').forEach(el => {
            el.style.opacity = 1;
          });
        } catch (e) {
          // Last resort fallback
        }
      }
      
      // Hide loading screen after animations are set up
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(animationTimer);
  }, []);

  return (
    <ErrorBoundary>
      <AudioProvider>
        <div className="App min-h-screen text-white">
          {isLoading && <Loading />}
          <Header />
          <main>
            <SafeComponent component={HeroSection} fallback={<div className="h-screen bg-dark-bg"></div>} />
            <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loading /></div>}>
              <SafeComponent component={LatestRelease} />
              <SafeComponent component={MusicSection} />
              <SafeComponent component={BioSection} />
              <SafeComponent component={EventsSection} />
              <SafeComponent component={Newsletter} />
            </Suspense>
          </main>
          <Suspense fallback={<div className="h-40"></div>}>
            <SafeComponent component={Footer} />
            <SafeComponent component={MiniPlayer} />
          </Suspense>
        </div>
      </AudioProvider>
    </ErrorBoundary>
  );
}

export default App;
