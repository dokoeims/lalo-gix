// This is a utility for integrating with SoundCloud's widget API
// In a real application, you would need to register for a SoundCloud API key

// Mock SoundCloud track URLs for testing purposes
export const soundcloudTracks = {
  'Cosmic Journey': 'https://soundcloud.com/electronic-gems/cosmic-journey',
  'Stellar Waves': 'https://soundcloud.com/electronic-gems/stellar-waves',
  'Nebula Drift': 'https://soundcloud.com/electronic-gems/nebula-drift',
  'Astral Projection': 'https://soundcloud.com/electronic-gems/astral-projection',
  'Pulse Wave': 'https://soundcloud.com/electronic-gems/pulse-wave',
  'Cosmic Resonance': 'https://soundcloud.com/electronic-gems/cosmic-resonance',
  'Midnight Glow': 'https://soundcloud.com/electronic-gems/midnight-glow',
  'Electric Dreams': 'https://soundcloud.com/electronic-gems/electric-dreams',
  'Digital Dreams': 'https://soundcloud.com/electronic-gems/digital-dreams',
  'Lunar Orbit': 'https://soundcloud.com/electronic-gems/lunar-orbit',
  'Phase Shift': 'https://soundcloud.com/electronic-gems/phase-shift',
  'Electric Soul': 'https://soundcloud.com/electronic-gems/electric-soul',
  'Neon Lights': 'https://soundcloud.com/electronic-gems/neon-lights'
};

// Generate embed code for a SoundCloud track
export const getTrackEmbedCode = (trackUrl) => {
  if (!trackUrl) return null;
  
  // Replace with actual SoundCloud track URL
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5722&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
  
  return {
    html: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="${embedUrl}"></iframe>`,
    url: embedUrl
  };
};

// Load the SoundCloud Widget API script
export const loadSoundCloudAPI = () => {
  return new Promise((resolve, reject) => {
    if (window.SC) {
      resolve(window.SC);
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    
    script.onload = () => {
      if (window.SC) {
        resolve(window.SC);
      } else {
        reject(new Error('SoundCloud API failed to load'));
      }
    };
    
    script.onerror = () => {
      reject(new Error('Error loading SoundCloud API'));
    };
    
    document.body.appendChild(script);
  });
};

// Initialize a SoundCloud widget
export const initializeWidget = (iframeElement, callbacks = {}) => {
  if (!window.SC || !iframeElement) return null;
  
  const widget = window.SC.Widget(iframeElement);
  
  // Set up event listeners
  widget.bind(window.SC.Widget.Events.READY, () => {
    if (callbacks.onReady) callbacks.onReady(widget);
  });
  
  widget.bind(window.SC.Widget.Events.PLAY, () => {
    if (callbacks.onPlay) callbacks.onPlay();
  });
  
  widget.bind(window.SC.Widget.Events.PAUSE, () => {
    if (callbacks.onPause) callbacks.onPause();
  });
  
  widget.bind(window.SC.Widget.Events.FINISH, () => {
    if (callbacks.onFinish) callbacks.onFinish();
  });
  
  widget.bind(window.SC.Widget.Events.PLAY_PROGRESS, (data) => {
    if (callbacks.onProgress) callbacks.onProgress(data);
  });
  
  return widget;
};

// Get a track URL by title (for mock data)
export const getTrackUrlByTitle = (title) => {
  return soundcloudTracks[title] || null;
};

// Play a track in a SoundCloud widget
export const playTrack = (widget, trackUrl) => {
  if (!widget || !trackUrl) return;
  
  widget.load(trackUrl, {
    auto_play: true,
    show_artwork: false
  });
};
