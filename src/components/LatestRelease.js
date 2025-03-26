import React, { useRef, useEffect } from 'react';
import { createScrollAnimation } from '../utils/initializeGSAP';
import { useAudio } from '../contexts/AudioContext';
import CroakCover from '../assets/covers/croak.jpg';
import CroakAudio from '../assets/audios/croak.mp3';

// Latest release data
const latestRelease = {
  title: 'CROAK',
  type: 'SENCILLO',
  releaseDate: 'Noviembre 2020',
  coverImage: CroakCover,
  description: 'Eran el dúo dinámico de la laguna, hasta que el amor se escurrió entre sus patas. Ahora, una salta sin mirar atrás, mientras la otra sigue atrapada en el lodo de los recuerdos. 🐸💔',
  tracks: [
    { 
      id: 101, 
      title: 'Croak', 
      duration: '0:30', 
      album: 'Croak - Single',
      audioUrl: CroakAudio,
      spotifyUrl: 'https://open.spotify.com/track/2R12hIKqax4p9pOVuYmEDQ',
      appleMusicUrl: 'https://music.apple.com/mx/album/croak/1802811045?i=1802811046',
      tidalUrl: 'https://tidal.com/browse/track/424566323',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=MkxLJmHn-c4&si=x__jU7VhUuiDme9q',
      amazonMusicUrl: 'https://music.amazon.com.mx/tracks/B0F1SDXWW3',
      soundcloudUrl: 'https://soundcloud.com/lalo-gix/croak',
    },
  ]
};

const LatestRelease = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  
  const { playTrack } = useAudio();
  
  useEffect(() => {
    
    const section = sectionRef.current;
    const card = cardRef.current;
    
    if (!section || !card) return;
    
    try {
      // Animation for the section title
      const titleElement = section.querySelector('h2');
      if (titleElement) {
        createScrollAnimation(
          titleElement,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          { trigger: section }
        );
      }
      
      // Glass card animation
      createScrollAnimation(
        card,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 },
        { trigger: section }
      );
      
      // Content elements animation
      const animElements = card.querySelectorAll('.animate-in');
      if (animElements.length) {
        createScrollAnimation(
          animElements,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4 },
          { trigger: section }
        );
      }
    } catch (error) {
      console.error('Error in LatestRelease animations:', error);
    }
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
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-12">SENCILLO MÁS POPULAR</h2>
        
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
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Album info */}
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="animate-in text-2xl md:text-3xl font-montserrat font-bold mb-2">{latestRelease.title}</h3>
              <p className="animate-in text-gray-400 mb-6">{latestRelease.type} • {latestRelease.releaseDate}</p>
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
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              
              {/* Streaming platform links */}
              <div className="animate-in flex flex-wrap gap-3">
                <a 
                  href={latestRelease.tracks[0].soundcloudUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  SoundCloud
                </a>
                <a 
                  href={latestRelease.tracks[0].spotifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  Spotify
                </a>
                <a 
                  href={latestRelease.tracks[0].appleMusicUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  Apple
                </a>
                <a 
                  href={latestRelease.tracks[0].tidalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  Tidal
                </a>
                
                <a 
                  href={latestRelease.tracks[0].youtubeMusicUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  YouTube
                </a>
                <a 
                  href={latestRelease.tracks[0].amazonMusicUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-15 transition-all duration-300 text-sm"
                >
                  Amazon
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
