import React, { useEffect, useRef } from 'react';
import { initializeGSAP } from '../utils/initializeGSAP';
import HeroImage from '../assets/covers/danos_causa_natural.jpg';
import CircularProfileImage from '../assets/artist_profile.jpg';
import AppleSVGLogo from '../assets/streaming_icons/Apple_Music_Icon_wht_sm_073120.svg';
import TidalSVGLogo from '../assets/streaming_icons/icons8-tidal.svg';
import AmazonMusicSVGLogo from '../assets/streaming_icons/icons8-amazon-music.svg';
import SoundCloudSVGLogo from '../assets/streaming_icons/icons8-soundcloud-logo.svg';
import SpotifySVGLogo from '../assets/streaming_icons/icons8-spotify-logo.svg';
import YoutubeSVGLogo from '../assets/streaming_icons/icons8-youtube-music.svg';

const HeroSection = () => {
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
          src={HeroImage} 
          alt="Lalo Gix performing"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Social Media Icons */}
      <div className="absolute top-20 right-2 sm:right-8 flex flex-col space-y-4 z-40">
        <a 
          href="https://on.soundcloud.com/YrNvtUJVVFx6T1MCA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <img src={SoundCloudSVGLogo} alt="SoundCloud" className="w-5 h-5" />
        </a>
        <a 
          href="https://open.spotify.com/playlist/0rNqNAfvMJmgcFIf2K8p2v" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <img src={SpotifySVGLogo} alt="Spotify" className="w-5 h-5" />
        </a>
        <a 
          href="https://music.apple.com/mx/artist/lalo-gix/1802348702" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <img src={AppleSVGLogo} alt="Apple Music" className="w-5 h-5" />
        </a>
        <a 
          href="https://tidal.com/browse/playlist/05b3f02c-7c2b-4041-9c55-ee46e4d1f06e" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <img src={TidalSVGLogo} alt="Tidal" className="w-5 h-5" />  
        </a>
        <a 
          href="https://music.youtube.com/playlist?list=PLHIvrTlxasADGC6Eb55HBsM59pN-3v2sb&si=d6U8JX_RbJrmadUq" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <img src={YoutubeSVGLogo} alt="Youtube" className="w-5 h-5" />
        </a>
        
        <a 
          href="https://music.amazon.com.mx/artists/B0F1KL7LL4" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-hero w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
        >
          <img src={AmazonMusicSVGLogo} alt="Amazon Music" className="w-5 h-5" />
        </a>
        
        
      </div>
      
      
      {/* Main content */}
      <div className="relative z-30 text-center px-4">
        {/* Circular profile image */}
        <div className="animate-hero relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-accent overflow-hidden mb-12">
          <img 
            src={CircularProfileImage}
            alt="Lalo Gix"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Tagline */}
        <h2 className="animate-hero font-montserrat font-light text-lg md:text-2xl mb-12 tracking-wider">
        LALO GIX - SONIDOS IMPERFECTOS
        </h2>
        
        {/* CTA Button */}
        <a 
          href="#latest-release" 
          className="animate-hero inline-block px-8 py-3 rounded-full bg-accent bg-opacity-10 border border-accent text-white hover:bg-opacity-20 transition-all duration-300"
        >
          ESCUCHA LO MÁS POPULAR
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
