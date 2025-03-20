import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LatestRelease from './components/LatestRelease';
import MusicSection from './components/MusicSection';
import BioSection from './components/BioSection';
import EventsSection from './components/EventsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MiniPlayer from './components/MiniPlayer';
import { AudioProvider } from './utils/AudioContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      gsap.fromTo(
        section.querySelectorAll('.animate-in'),
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
    
    // Parallax effect on hero image
    gsap.to('.parallax-bg', {
      y: (i, el) => -parseFloat(el.getAttribute('data-speed')) * ScrollTrigger.scrollTop(),
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <AudioProvider>
      <div className="App min-h-screen text-white">
        <Header />
        <main>
          <HeroSection />
          <LatestRelease />
          <MusicSection />
          <BioSection />
          <EventsSection />
          <Newsletter />
        </main>
        <Footer />
        <MiniPlayer />
      </div>
    </AudioProvider>
  );
}

export default App;
