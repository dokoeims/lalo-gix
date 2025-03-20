import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    const imageElement = imageRef.current;
    
    // Initial animation
    gsap.fromTo(
      heroElement.querySelectorAll('.animate-hero'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
    );
    
    // Parallax effect
    if (imageElement) {
      const handleParallax = () => {
        const scrollPosition = window.scrollY;
        const parallaxValue = scrollPosition * 0.4;
        
        gsap.to(imageElement, {
          y: parallaxValue,
          ease: 'none',
          overwrite: 'auto'
        });
      };
      
      window.addEventListener('scroll', handleParallax);
      
      return () => {
        window.removeEventListener('scroll', handleParallax);
      };
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
        data-speed="0.2"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 to-dark-bg"></div>
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070" 
          alt="Lalo Gix performing"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Social Media Icons */}
      <div className="absolute top-40 right-8 flex flex-col space-y-4 z-10">
        <a 
          href="https://spotify.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </a>
        <a 
          href="https://soundcloud.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.4 0.4c-0.4 0-0.8 0.3-0.8 0.8v13.8c0 0.4 0.3 0.8 0.8 0.8s0.8-0.3 0.8-0.8V1.2c0-0.4-0.4-0.8-0.8-0.8zM8 3.9c-0.4 0-0.8 0.3-0.8 0.8v10.3c0 0.4 0.3 0.8 0.8 0.8s0.8-0.3 0.8-0.8V4.7c0-0.5-0.4-0.8-0.8-0.8zM14.8 3.9c-0.4 0-0.8 0.3-0.8 0.8v10.3c0 0.4 0.3 0.8 0.8 0.8s0.8-0.3 0.8-0.8V4.7c0-0.5-0.4-0.8-0.8-0.8zM4.5 5.6c-0.4 0-0.8 0.3-0.8 0.8v8.6c0 0.4 0.3 0.8 0.8 0.8s0.8-0.3 0.8-0.8V6.4c0-0.5-0.3-0.8-0.8-0.8zM18.3 5.6c-0.4 0-0.8 0.3-0.8 0.8v8.6c0 0.4 0.3 0.8 0.8 0.8s0.8-0.3 0.8-0.8V6.4c0-0.5-0.4-0.8-0.8-0.8zM1 8.6c-0.4 0-0.8 0.3-0.8 0.8v5.6c0 0.4 0.3 0.8 0.8 0.8s0.8-0.3 0.8-0.8V9.4c0-0.5-0.4-0.8-0.8-0.8zM21.8 8.6c-0.4 0-0.8 0.3-0.8 0.8v5.6c0 0.4 0.3 0.8 0.8 0.8s0.8-0.3 0.8-0.8V9.4c0-0.5-0.4-0.8-0.8-0.8z"/>
          </svg>
        </a>
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Circular profile image */}
        <div className="animate-hero relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-accent overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
            alt="Lalo Gix"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Tagline */}
        <h2 className="animate-hero font-montserrat font-light text-lg md:text-2xl mb-12 tracking-wider">
          BLENDING RHYTHMS | CREATING EMOTIONS | DEFINING SOUNDS
        </h2>
        
        {/* CTA Button */}
        <a 
          href="#latest-release" 
          className="animate-hero inline-block px-8 py-3 rounded-full bg-accent bg-opacity-10 border border-accent text-white hover:bg-opacity-20 transition-all duration-300"
        >
          LATEST RELEASE
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
