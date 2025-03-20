import React, { useEffect, useRef, useState } from 'react';
import { loadSoundCloudAPI, initializeWidget, getTrackUrlByTitle } from '../utils/soundcloudIntegration';

const SoundCloudPlayer = ({ trackTitle, autoPlay = false }) => {
  const iframeRef = useRef(null);
  const [widget, setWidget] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trackUrl, setTrackUrl] = useState('');
  
  // Load SoundCloud API and initialize widget
  useEffect(() => {
    let mounted = true;
    
    const initializeSoundCloud = async () => {
      try {
        await loadSoundCloudAPI();
        
        if (!mounted) return;
        
        // Get track URL from the title
        const url = getTrackUrlByTitle(trackTitle);
        if (url) {
          setTrackUrl(url);
        }
      } catch (error) {
        console.error('Error initializing SoundCloud:', error);
      }
    };
    
    initializeSoundCloud();
    
    return () => {
      mounted = false;
    };
  }, [trackTitle]);
  
  // Initialize widget once we have a track URL
  useEffect(() => {
    if (!trackUrl || !iframeRef.current) return;
    
    // Create the iframe
    iframeRef.current.innerHTML = `
      <iframe
        id="sc-widget"
        src="https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5722&auto_play=${autoPlay}&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
      ></iframe>
    `;
    
    // Initialize widget once iframe is loaded
    const iframe = document.getElementById('sc-widget');
    if (iframe) {
      const scWidget = initializeWidget(iframe, {
        onReady: () => {
          setWidget(scWidget);
          setIsLoaded(true);
          if (autoPlay) {
            setIsPlaying(true);
          }
        },
        onPlay: () => {
          setIsPlaying(true);
        },
        onPause: () => {
          setIsPlaying(false);
        },
        onFinish: () => {
          setIsPlaying(false);
        },
        onProgress: (data) => {
          // Handle progress data if needed
        }
      });
    }
  }, [trackUrl, autoPlay]);
  
  // Exposed controls
  const togglePlay = () => {
    if (!widget) return;
    
    if (isPlaying) {
      widget.pause();
    } else {
      widget.play();
    }
  };
  
  return (
    <div className="soundcloud-player">
      <div ref={iframeRef} className="iframe-container"></div>
      
      {!isLoaded && (
        <div className="loading-state h-40 bg-white bg-opacity-5 rounded-md flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading player...</div>
        </div>
      )}
      
      {/* You can add custom controls here if needed */}
      {/* <div className="custom-controls mt-4 flex items-center space-x-4">
        <button 
          onClick={togglePlay} 
          className="play-button bg-accent px-4 py-2 rounded-full"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div> */}
    </div>
  );
};

export default SoundCloudPlayer;
