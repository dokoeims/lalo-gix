import React, { useRef, useEffect } from 'react';
import { initializeGSAP, createScrollAnimation } from '../utils/initializeGSAP';
import { useAudio } from '../contexts/AudioContext';
import CantStopThisFeelingAudio from '../assets/audios/cant_stop_this_feeling.mp3';
import TraslacionAudio from '../assets/audios/traslacion.mp3';
import DanosCausaNaturalAudio from '../assets/audios/danos_causa_natural.mp3';
import FalloCorazonAudio from '../assets/audios/fallo_corazon.mp3';
import UnPoquitoMasAudio from '../assets/audios/un_poquito_mas.mp3';
import ParsecAudio from '../assets/audios/parsec.mp3';
import CantStopThisFeelingCover from '../assets/covers/cant_stop_this_feeling.jpg';
import TraslacionCover from '../assets/covers/traslacion.jpg';
import DanosCausaNaturalCover from '../assets/covers/danos_causa_natural.jpg';
import FalloCorazonCover from '../assets/covers/fallo_corazon.jpg';
import UnPoquitoMasCover from '../assets/covers/un_poquito_mas.jpg';
import ParsecCover from '../assets/covers/parsec.jpg';

// Placeholder album data
const albums = [
  {
    id: 102,
    title: "CAN'T STOP THIS FEELING (GOING DOWN)",
    type: 'SINGLE',
    year: '2021',
    coverImage: CantStopThisFeelingCover,
    tracks: [
      { 
        id: 202, 
        title: "Can't Stop This Feeling (Going Down)",
        duration: '0:30', 
        album: "Can't Stop This Feeling (Going Down) - Single",
        audioUrl: CantStopThisFeelingAudio,
        spotifyUrl: 'https://open.spotify.com/track/2R12hIKqax4p9pOVuYmEDQ',
        appleMusicUrl: 'https://music.apple.com/mx/album/croak/1802811045?i=1802811046',
        tidalUrl: 'https://tidal.com/browse/track/424566323',
        youtubeMusicUrl: 'https://music.youtube.com/watch?v=MkxLJmHn-c4&si=x__jU7VhUuiDme9q',
        amazonMusicUrl: 'https://music.amazon.com.mx/tracks/B0F1SDXWW3',
        soundcloudUrl: 'https://soundcloud.com/lalo-gix/croak',
      },
    ]
  },
  {
    id: 104,
    title: 'DAÑOS CAUSA NATURAL',
    type: 'SINGLE',
    year: '2021',
    coverImage: DanosCausaNaturalCover,
    tracks: [
      { id: 204, title: 'Daños Causa Natural', duration: '0:30', album: 'Danos Causa Natural - Single', audioUrl: DanosCausaNaturalAudio,
        spotifyUrl: 'https://open.spotify.com/track/2R12hIKqax4p9pOVuYmEDQ',
        appleMusicUrl: 'https://music.apple.com/mx/album/croak/1802811045?i=1802811046',
        tidalUrl: 'https://tidal.com/browse/track/424566323',
        youtubeMusicUrl: 'https://music.youtube.com/watch?v=MkxLJmHn-c4&si=x__jU7VhUuiDme9q',
        amazonMusicUrl: 'https://music.amazon.com.mx/tracks/B0F1SDXWW3',
        soundcloudUrl: 'https://soundcloud.com/lalo-gix/croak',
      },
    ],
  },
  {
    id: 105,
    title: 'FALLO CORAZÓN',
    type: 'SINGLE',
    year: '2025',
    coverImage: FalloCorazonCover,
    tracks: [
      { id: 205, title: 'Fallo Corazón', duration: '0:30', album: 'Fallo Corazón - Single', audioUrl: FalloCorazonAudio,
      },
    ],
  },
  {
    id: 106,
    title: 'UN POQUITO MÁS',
    type: 'SINGLE',
    year: '2025',
    coverImage: UnPoquitoMasCover,
    tracks: [
      { id: 206, title: 'Un Poquito Más', duration: '0:30', album: 'Un Poquito Más - Single', audioUrl: UnPoquitoMasAudio,
      },
    ],
  },
  {
    id: 103,
    title: 'TRASLACIÓN',
    type: 'SINGLE',
    year: '2025',
    coverImage: TraslacionCover,
    tracks: [
      { id: 203, title: 'Traslacion', duration: '0:30', album: 'Traslacion - Single', audioUrl: TraslacionAudio,
        spotifyUrl: 'https://open.spotify.com/track/2R12hIKqax4p9pOVuYmEDQ',
        appleMusicUrl: 'https://music.apple.com/mx/album/croak/1802811045?i=1802811046',
        tidalUrl: 'https://tidal.com/browse/track/424566323',
        youtubeMusicUrl: 'https://music.youtube.com/watch?v=MkxLJmHn-c4&si=x__jU7VhUuiDme9q',
        amazonMusicUrl: 'https://music.amazon.com.mx/tracks/B0F1SDXWW3',
        soundcloudUrl: 'https://soundcloud.com/lalo-gix/croak',
      },
    ]
  },
  {
    id: 107,
    title: 'PARSEC',
    type: 'SINGLE',
    year: '2020',
    coverImage: ParsecCover,
    tracks: [
      { id: 207, title: 'Parsec', duration: '0:30', album: 'Parsec - Single', audioUrl: ParsecAudio,
      },
    ],
  }
];

const MusicSection = () => {
  const sectionRef = useRef(null);
  const playerRef = useRef(null);
  const albumGridRef = useRef(null);
  
  const { 
    currentTrack, 
    isPlaying, 
    isFading,
    progress, 
    currentTime, 
    duration, 
    remainingTime,
    formatTime, 
    playTrack, 
    togglePlayPause,
    seekTo
  } = useAudio();
  
  useEffect(() => {
    const { gsap } = initializeGSAP();
    
    const section = sectionRef.current;
    const player = playerRef.current;
    const albumGrid = albumGridRef.current;
    
    if (!section || !player || !albumGrid) return;
    
    try {
      // Animation for section title
      const titleElement = section.querySelector('h2');
      if (titleElement) {
        createScrollAnimation(
          titleElement,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          { trigger: section }
        );
      }
      
      // Player animation
      createScrollAnimation(
        player,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 },
        { trigger: section }
      );
      
      // Waveform animation
      const waveformElement = player.querySelector('.waveform');
      if (waveformElement) {
        createScrollAnimation(
          waveformElement,
          { scaleX: 0 },
          { scaleX: 1, duration: 1, delay: 0.6, ease: 'power3.out' },
          { trigger: section }
        );
      }
      
      // Album grid animation
      const albumItems = albumGrid.querySelectorAll('.album-item');
      if (albumItems.length) {
        createScrollAnimation(
          albumItems,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4 },
          { trigger: albumGrid }
        );
      }
      
      // Animate waveform continuously
      const waveBars = player.querySelectorAll('.wave-bar');
      if (waveBars.length) {
        gsap.to(
          waveBars,
          {
            scaleY: 'random(0.3, 1)',
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: {
              each: 0.05,
              from: 'random'
            }
          }
        );
      }
    } catch (error) {
      console.error('Error in MusicSection animations:', error);
    }
  }, []);
  
  // Handle album play
  const handleAlbumPlay = (album) => {
    // Play the first track of the album
    if (album.tracks && album.tracks.length > 0) {
      playTrack(album.tracks[0]);
    }
  };
  
  // Handle progress bar click for seeking
  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const bounds = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - bounds.left) / bounds.width;
    const seekTime = duration * clickPosition;
    seekTo(seekTime);
  };
  
  return (
    <section 
      id="music" 
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-dark-bg to-light-bg"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-12">MÚSICA</h2>
        
        {/* Audio Player */}
        <div 
          ref={playerRef}
          className="bg-white bg-opacity-5 rounded-lg p-6 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            {/* Play/pause button */}
            <button 
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isPlaying 
                  ? 'bg-accent text-white' 
                  : 'bg-accent bg-opacity-20 text-white'
              }`}
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              disabled={!currentTrack}
            >
              {isPlaying ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            {/* Track info */}
            <div>
              <p className="text-xs text-gray-400">
                {currentTrack 
                  ? (isFading 
                      ? 'BAJANDO VOLUMEN' 
                      : (remainingTime && remainingTime <= 8 && remainingTime > 5 && !isFading
                          ? 'FINALIZANDO PRONTO' 
                          : 'SONANDO AHORA')
                    )
                  : 'SELECCIONA UNA CANCIÓN'
                }
              </p>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                {currentTrack ? currentTrack.title : 'No track selected'}
                {isFading ? (
                  <span className="text-xs text-accent bg-accent bg-opacity-10 px-2 py-1 rounded-full animate-pulse">
                    Fade out
                  </span>
                ) : remainingTime && remainingTime <= 8 && remainingTime > 5 && !isFading ? (
                  <span className="text-xs text-yellow-400 bg-yellow-400 bg-opacity-10 px-2 py-1 rounded-full">
                    Ending soon
                  </span>
                ) : null}
              </h3>
              <p className="text-sm text-gray-300">
                {currentTrack ? currentTrack.album : ''}
              </p>
            </div>
          </div>
          
          {/* Waveform visualization */}
          <div className={`relative h-16 mb-2 waveform origin-left ${isFading ? 'fade-progress-glow' : ''}`}>
            <div className="absolute inset-0 flex items-center">
              {/* Generate 100 wave bars */}
              {[...Array(100)].map((_, index) => (
                <div 
                  key={index}
                  className={`wave-bar h-8 w-1 mx-px ${
                    currentTrack && index < progress 
                      ? `bg-accent ${
                         isFading 
                           ? 'wave-fade-animation' 
                           : remainingTime && remainingTime <= 8 && remainingTime > 5 && !isFading 
                             ? 'wave-ending-soon' 
                             : 'opacity-70'
                       }` 
                      : 'bg-accent opacity-20'
                  }`}
                  style={{ 
                    transform: `scaleY(${Math.random() * 0.7 + 0.3})`,
                    animationPlayState: isPlaying ? 'running' : 'paused',
                    '--wave-height': `${Math.random() * 0.7 + 0.3}`,
                    opacity: isFading ? undefined : (index < progress ? 0.7 : 0.2)
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Progress bar */}
          <div 
            className="relative h-1 bg-white bg-opacity-10 rounded-full mb-2 cursor-pointer"
            onClick={handleProgressClick}
          >
            <div 
              className={`absolute top-0 left-0 h-full bg-accent rounded-full ${
                isFading 
                  ? 'fade-pulse' 
                  : remainingTime && remainingTime <= 8 && remainingTime > 5 && !isFading 
                    ? 'pulse-yellow' 
                    : ''
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>{currentTrack ? currentTrack.duration : '0:00'}</span>
          </div>
        </div>
        
        {/* Discography title */}
        <h3 className="text-xl font-montserrat font-medium mb-8">DISCOGRAFÍA</h3>
        
        {/* Album grid */}
        <div 
          ref={albumGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {albums.map(album => (
            <div key={album.id} className="album-item group">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
                <img 
                  src={album.coverImage} 
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    className="w-16 h-16 rounded-full bg-accent bg-opacity-80 flex items-center justify-center hover-play-button"
                    aria-label={`Play ${album.title}`}
                    onClick={() => handleAlbumPlay(album)}
                  >
                    <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <h4 className="text-lg font-medium text-center">{album.title}</h4>
              <p className="text-sm text-gray-400 text-center">{album.type} • {album.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
