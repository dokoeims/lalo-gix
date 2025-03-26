import React, { useEffect, useRef } from 'react';
import { useAudio } from '../contexts/AudioContext';
import { gsap } from 'gsap';

const MiniPlayer = () => {
  const { 
    currentTrack, 
    isPlaying, 
    progress, 
    formatTime, 
    currentTime, 
    togglePlayPause,
    stopPlayback
  } = useAudio();
  
  const playerRef = useRef(null);
  
  useEffect(() => {
    const player = playerRef.current;
    
    if (currentTrack && player) {
      // Show the player when a track is selected
      gsap.fromTo(
        player,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    } else if (player) {
      // Hide the player when no track is selected
      gsap.to(
        player,
        { y: 100, opacity: 0, duration: 0.4, ease: 'power2.in' }
      );
    }
  }, [currentTrack]);
  
  if (!currentTrack) return null;
  
  return (
    <div 
      ref={playerRef}
      className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-lg z-40 p-3 border-t border-gray-800"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          
          <div>
            <p className="font-medium text-sm">{currentTrack.title}</p>
            <p className="text-gray-400 text-xs">{currentTrack.album}</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center flex-grow max-w-md mx-8">
          <span className="text-xs text-gray-400 mr-2 w-10">{formatTime(currentTime)}</span>
          <div className="relative flex-grow h-1 bg-white bg-opacity-10 rounded-full mx-2">
            <div 
              className="absolute top-0 left-0 h-full bg-accent rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-400 ml-2 w-10">{currentTrack.duration}</span>
        </div>
        
        <button
          onClick={stopPlayback}
          className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center"
          aria-label="Close player"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MiniPlayer;
