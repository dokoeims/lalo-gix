import React, { useRef, useEffect } from 'react';
import { initializeGSAP, createScrollAnimation } from '../utils/initializeGSAP';
import { useAudio } from '../utils/AudioContext';

// Placeholder album data
const albums = [
  {
    id: 1,
    title: 'NEBULA DREAMS',
    type: 'EP',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?q=80&w=2070',
    tracks: [
      { id: 101, title: 'Cosmic Journey', duration: '3:42', album: 'Nebula Dreams EP' },
      { id: 102, title: 'Stellar Waves', duration: '4:15', album: 'Nebula Dreams EP' },
      { id: 103, title: 'Nebula Drift', duration: '5:30', album: 'Nebula Dreams EP' },
      { id: 104, title: 'Astral Projection', duration: '6:08', album: 'Nebula Dreams EP' }
    ]
  },
  {
    id: 2,
    title: 'COSMIC ECHOES',
    type: 'Album',
    year: '2023',
    coverImage: 'https://images.unsplash.com/photo-1614102073832-030967418971?q=80&w=2069',
    tracks: [
      { id: 201, title: 'Pulse Wave', duration: '4:20', album: 'Cosmic Echoes' },
      { id: 202, title: 'Cosmic Resonance', duration: '3:55', album: 'Cosmic Echoes' }
    ]
  },
  {
    id: 3,
    title: 'MIDNIGHT PULSE',
    type: 'EP',
    year: '2022',
    coverImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070',
    tracks: [
      { id: 301, title: 'Midnight Glow', duration: '3:47', album: 'Midnight Pulse EP' },
      { id: 302, title: 'Electric Dreams', duration: '4:32', album: 'Midnight Pulse EP' }
    ]
  },
  {
    id: 4,
    title: 'DIGITAL DREAMS',
    type: 'Single',
    year: '2022',
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070',
    tracks: [
      { id: 401, title: 'Digital Dreams', duration: '3:25', album: 'Digital Dreams Single' }
    ]
  },
  {
    id: 5,
    title: 'LUNAR PHASE',
    type: 'EP',
    year: '2021',
    coverImage: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?q=80&w=2148',
    tracks: [
      { id: 501, title: 'Lunar Orbit', duration: '5:12', album: 'Lunar Phase EP' },
      { id: 502, title: 'Phase Shift', duration: '4:40', album: 'Lunar Phase EP' }
    ]
  },
  {
    id: 6,
    title: 'ELECTRIC SOUL',
    type: 'Album',
    year: '2020',
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070',
    tracks: [
      { id: 601, title: 'Electric Soul', duration: '4:15', album: 'Electric Soul' },
      { id: 602, title: 'Neon Lights', duration: '3:55', album: 'Electric Soul' }
    ]
  }
];

const MusicSection = () => {
  const sectionRef = useRef(null);
  const playerRef = useRef(null);
  const albumGridRef = useRef(null);
  
  const { 
    currentTrack, 
    isPlaying, 
    progress, 
    currentTime, 
    duration, 
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
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-12">MUSIC</h2>
        
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
                {currentTrack ? 'NOW PLAYING' : 'SELECT A TRACK'}
              </p>
              <h3 className="text-lg font-semibold">
                {currentTrack ? currentTrack.title : 'No track selected'}
              </h3>
              <p className="text-sm text-gray-300">
                {currentTrack ? currentTrack.album : ''}
              </p>
            </div>
          </div>
          
          {/* Waveform visualization */}
          <div className="relative h-16 mb-2 waveform origin-left">
            <div className="absolute inset-0 flex items-center">
              {/* Generate 100 wave bars */}
              {[...Array(100)].map((_, index) => (
                <div 
                  key={index}
                  className={`wave-bar h-8 w-1 mx-px ${
                    currentTrack && index < progress 
                      ? 'bg-accent opacity-70' 
                      : 'bg-accent opacity-20'
                  }`}
                  style={{ 
                    transform: `scaleY(${Math.random() * 0.7 + 0.3})`,
                    animationPlayState: isPlaying ? 'running' : 'paused'
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
              className="absolute top-0 left-0 h-full bg-accent rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>{currentTrack ? currentTrack.duration : '0:00'}</span>
          </div>
        </div>
        
        {/* Discography title */}
        <h3 className="text-xl font-montserrat font-medium mb-8">DISCOGRAPHY</h3>
        
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
