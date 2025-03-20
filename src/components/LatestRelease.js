import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAudio } from '../utils/AudioContext';

// Latest release data
const latestRelease = {
  title: 'NEBULA DREAMS',
  type: 'EP',
  releaseDate: 'Oct 2024',
  coverImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?q=80&w=2070',
  description: 'A journey through ambient soundscapes and experimental electronic rhythms. This EP represents a new direction in Lalo Gix\'s exploration of sound, combining ethereal textures with pulsating beats.',
  tracks: [
    { id: 101, title: 'Cosmic Journey', duration: '3:42', album: 'Nebula Dreams EP' },
    { id: 102, title: 'Stellar Waves', duration: '4:15', album: 'Nebula Dreams EP' },
    { id: 103, title: 'Nebula Drift', duration: '5:30', album: 'Nebula Dreams EP' },
    { id: 104, title: 'Astral Projection', duration: '6:08', album: 'Nebula Dreams EP' }
  ]
};

const LatestRelease = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  
  const { playTrack } = useAudio();
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const section = sectionRef.current;
    const card = cardRef.current;
    
    // Animation for the section title
    gsap.fromTo(
      section.querySelector('h2'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    // Glass card animation
    gsap.fromTo(
      card,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    // Content elements animation
    gsap.fromTo(
      card.querySelectorAll('.animate-in'),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);
  
  // Play the first track from the release
  const handlePlay = () => {
    if (latestRelease.tracks && latestRelease.tracks.length > 0) {
      playTrack(latestRelease.tracks[0]);
    }
  };
  
  return (
    <section 
      id="latest-release" 
      ref={sectionRef}
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-12">LATEST RELEASE</h2>
        
        {/* Glass card */}
        <div 
          ref={cardRef}
          className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-8 max-w-5xl"
        >
          {/* Album artwork */}
          <div className="animate-in flex-shrink-0 w-full md:w-64 h-64 bg-gray-800 rounded overflow-hidden">
            <img 
              src={latestRelease.coverImage}
              alt={latestRelease.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Album info */}
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="animate-in text-2xl md:text-3xl font-montserrat font-bold mb-2">{latestRelease.title}</h3>
              <p className="animate-in text-gray-400 mb-6">{latestRelease.type} • Released {latestRelease.releaseDate}</p>
              <p className="animate-in text-gray-300 mb-8 max-w-lg">
                {latestRelease.description}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              {/* Play button */}
              <button 
                className="animate-in flex items-center justify-center w-12 h-12 rounded-full bg-accent bg-opacity-20 border border-accent hover:bg-opacity-30 transition-all duration-300"
                aria-label="Play Nebula Dreams"
                onClick={handlePlay}
              >
                <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              
              {/* Streaming platform links */}
              <div className="animate-in flex flex-wrap gap-3">
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  Spotify
                </a>
                <a 
                  href="https://music.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  Apple
                </a>
                <a 
                  href="https://soundcloud.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  SoundCloud
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestRelease;
