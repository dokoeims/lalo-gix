import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import audioPlayer from '../utils/audioPlayer';

// Create context
const AudioContext = createContext();

// Provider component
export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  
  // Initialize player callbacks with error handling
  useEffect(() => {
    try {
      // Set up audio player callbacks
      audioPlayer.setCallbacks({
        onPlay: (track) => {
          setCurrentTrack(track);
          setIsPlaying(true);
        },
        onPause: () => {
          setIsPlaying(false);
        },
        onStop: () => {
          setIsPlaying(false);
        },
        onEnd: () => {
          setIsPlaying(false);
          setProgress(100);
          setRemainingTime(0);
        },
        onFading: (fadingState) => {
          setIsFading(fadingState);
          // Durante el fade out, todavía consideramos que el track se está reproduciendo
          // para efectos de UI, aunque el volumen esté disminuyendo
          if (fadingState) {
            setIsPlaying(true);
          }
        },
        onProgress: ({ current, duration, progress }) => {
          setCurrentTime(current);
          setDuration(duration);
          setProgress(progress);
          
          // Calcular tiempo restante
          const remaining = duration - current;
          setRemainingTime(remaining);
        }
      });
    } catch (error) {
      console.error('Error setting up audio callbacks:', error);
    }
    
    // Clean up on unmount
    return () => {
      try {
        audioPlayer.destroy();
      } catch (error) {
        console.error('Error destroying audio player:', error);
      }
    };
  }, []);
  
  // Play a track
  const playTrack = useCallback((track) => {
    try {
      audioPlayer.playTrack(track);
    } catch (error) {
      console.error('Error playing track:', error);
    }
  }, []);
  
  // Toggle play/pause
  const togglePlayPause = useCallback(() => {
    try {
      audioPlayer.togglePlayPause();
    } catch (error) {
      console.error('Error toggling playback:', error);
    }
  }, []);
  
  // Stop playback
  const stopPlayback = useCallback(() => {
    try {
      audioPlayer.stop();
    } catch (error) {
      console.error('Error stopping playback:', error);
    }
  }, []);
  
  // Seek to position
  const seekTo = useCallback((position) => {
    try {
      audioPlayer.seek(position);
    } catch (error) {
      console.error('Error seeking to position:', error);
    }
  }, []);
  
  // Format time in MM:SS
  const formatTime = useCallback((seconds) => {
    if (isNaN(seconds) || seconds === Infinity) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }, []);
  
  // Context value
  const value = {
    currentTrack,
    isPlaying,
    progress,
    duration,
    currentTime,
    isFading,
    remainingTime,
    formatTime,
    playTrack,
    togglePlayPause,
    stopPlayback,
    seekTo
  };
  
  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};

// Custom hook to use the audio context
export const useAudio = () => useContext(AudioContext);

export default AudioContext;
