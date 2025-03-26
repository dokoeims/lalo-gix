import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { initializeGSAP } from '../utils/initializeGSAP';
import { ARTIST_INFO, HERO_SECTION, STREAMING_PLATFORMS } from '../config/artistConfig';

const HeroSection = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    // Initialize GSAP
    const { gsap } = initializeGSAP();
    
    const heroElement = heroRef.current;
    const imageElement = imageRef.current;
    
    if (!heroElement) return;
    
    try {
      // Initial animation
      const animElements = heroElement.querySelectorAll('.animate-hero');
      if (animElements.length) {
        gsap.fromTo(
          animElements,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
        );
      }
      
      // GSAP-based parallax effect
      if (imageElement) {
        gsap.to(imageElement, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroElement,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    } catch (error) {
      console.error('HeroSection animation error:', error);
    }
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div 
        ref={imageRef}
        className="absolute top-0 left-0 w-full h-full z-0 parallax-bg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 to-dark-bg"></div>
        <img 
          src={HERO_SECTION.backgroundImage} 
          alt={`${ARTIST_INFO.name} performing`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Streaming Platform Icons */}
      <div className="absolute top-20 right-2 sm:right-8 flex flex-col space-y-4 z-40">
        {Object.values(STREAMING_PLATFORMS).map(platform => (
          <a 
            key={platform.name}
            href={platform.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
          >
            <img src={platform.icon} alt={platform.name} className="w-5 h-5" />
          </a>
        ))}
      </div>
      
      
      {/* Main content */}
      <div className="relative z-30 text-center px-4">
        {/* Circular profile image */}
        <div className="animate-hero relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-accent overflow-hidden mb-12">
          <img 
            src={HERO_SECTION.profileImage}
            alt={ARTIST_INFO.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Tagline */}
        <h2 className="animate-hero font-montserrat font-light text-lg md:text-2xl mb-12 tracking-wider">
          {t('heroSection.tagline')}
        </h2>
        
        {/* CTA Button */}
        <a 
          href="#latest-release" 
          className="animate-hero inline-block px-8 py-3 rounded-full bg-accent bg-opacity-10 border border-accent text-white hover:bg-opacity-20 transition-all duration-300"
        >
          {t('heroSection.cta')}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
