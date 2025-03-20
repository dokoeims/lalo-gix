import React, { createContext, useState, useContext, useEffect } from 'react';
import audioPlayer from './audioPlayer';

// Create context
const AudioContext = createContext();

// Provider component
export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  useEffect(() => {
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
      },
      onProgress: ({ current, duration, progress }) => {
        setCurrentTime(current);
        setDuration(duration);
        setProgress(progress);
      }
    });
    
    // Clean up on unmount
    return () => {
      audioPlayer.destroy();
    };
  }, []);
  
  // Play a track
  const playTrack = (track) => {
    audioPlayer.playTrack(track);
  };
  
  // Toggle play/pause
  const togglePlayPause = () => {
    audioPlayer.togglePlayPause();
  };
  
  // Stop playback
  const stopPlayback = () => {
    audioPlayer.stop();
  };
  
  // Seek to position
  const seekTo = (position) => {
    audioPlayer.seek(position);
  };
  
  // Format time in MM:SS
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === Infinity) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  // Context value
  const value = {
    currentTrack,
    isPlaying,
    progress,
    duration,
    currentTime,
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
