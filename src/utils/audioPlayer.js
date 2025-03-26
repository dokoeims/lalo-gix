import { Howl } from 'howler';

// This is a simple audio player service that uses Howler.js
// For a real application, you would integrate with actual music files or streaming services

class AudioPlayer {
  constructor() {
    this.sound = null;
    this.isPlaying = false;
    this.currentTrack = null;
    this.onPlayCallback = null;
    this.onPauseCallback = null;
    this.onStopCallback = null;
    this.onEndCallback = null;
    this.onProgressCallback = null;
    this.onFadingCallback = null;
    this.fadeOutTimer = null;
    this.endDetectionTimer = null;
    this.isFading = false;
    this.fadeTimeBeforeEnd = 5.0; // Segundos antes del final para iniciar el fade out
  }

  // Set up event listeners
  setCallbacks(callbacks) {
    const { onPlay, onPause, onStop, onEnd, onProgress, onFading } = callbacks;
    this.onPlayCallback = onPlay;
    this.onPauseCallback = onPause;
    this.onStopCallback = onStop;
    this.onEndCallback = onEnd;
    this.onProgressCallback = onProgress;
    this.onFadingCallback = onFading;
  }

  // Load and play a track
  playTrack(track) {
    // Stop current track if one is playing
    if (this.sound) {
      this.stop();
    }

    // For demo purposes, we'll use a placeholder for the audio URL
    // In a real app, this would be the track's actual audio file URL
    const audioUrl = track.audioUrl || 'https://cdn.example.com/placeholder-audio.mp3';

    // Create a new Howl instance
    this.sound = new Howl({
      src: [audioUrl],
      html5: true, // Use HTML5 Audio for streaming
      preload: true,
      autoplay: false,
      volume: 1.0,
      onplay: () => {
        this.isPlaying = true;
        this.currentTrack = track;
        if (this.onPlayCallback) this.onPlayCallback(track);
        this._startProgressTimer();
        
        // Start the end detection timer to check for approaching end
        this._startEndDetectionTimer();
      },
      onpause: () => {
        this.isPlaying = false;
        if (this.onPauseCallback) this.onPauseCallback();
        this._stopProgressTimer();
        this._stopEndDetectionTimer();
      },
      onstop: () => {
        this.isPlaying = false;
        if (this.onStopCallback) this.onStopCallback();
        this._stopProgressTimer();
        this._stopEndDetectionTimer();
      },
      onend: () => {
        // Solo si de alguna manera no se activó el fade out antes
        if (!this.isFading) {
          this.isPlaying = false;
          if (this.onEndCallback) this.onEndCallback();
          this._stopProgressTimer();
          this._stopEndDetectionTimer();
        }
      },
      onloaderror: (id, error) => {
        console.error('Error loading audio:', error);
      },
      onplayerror: (id, error) => {
        console.error('Error playing audio:', error);
      }
    });

    // Play the sound
    this.sound.play();
  }

  // Toggle play/pause
  togglePlayPause() {
    if (!this.sound) return;

    if (this.isPlaying) {
      this.sound.pause();
    } else {
      this.sound.play();
    }
  }

  // Stop playback
  stop() {
    if (!this.sound) return;
    
    // If we're in the middle of a fade out, clear it
    if (this.fadeOutTimer) {
      clearInterval(this.fadeOutTimer);
      this.fadeOutTimer = null;
    }
    
    this._stopEndDetectionTimer();
    this.isFading = false;
    
    // Reset volume before stopping in case we were in a fade
    try {
      this.sound.volume(1.0);
      this.sound.stop();
      this.sound.unload();
      this.sound = null;
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  }

  // Set volume (0 to 1)
  setVolume(volume) {
    if (!this.sound) return;
    this.sound.volume(volume);
  }

  // Seek to position (in seconds)
  seek(position) {
    if (!this.sound) return;
    this.sound.seek(position);
  }

  // Get current position
  getCurrentPosition() {
    if (!this.sound) return 0;
    return this.sound.seek();
  }

  // Get duration
  getDuration() {
    if (!this.sound) return 0;
    return this.sound.duration();
  }

  // Start progress timer to report progress
  _startProgressTimer() {
    this.progressTimer = setInterval(() => {
      if (this.sound && this.onProgressCallback) {
        const current = this.getCurrentPosition();
        const duration = this.getDuration();
        const progress = (current / duration) * 100;
        this.onProgressCallback({
          current,
          duration,
          progress
        });
      }
    }, 500); // Update every 500ms
  }

  // Stop progress timer
  _stopProgressTimer() {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
  }

  // Start timer to detect when audio is approaching its end
  _startEndDetectionTimer() {
    this._stopEndDetectionTimer(); // Clear any existing timer
    
    this.endDetectionTimer = setInterval(() => {
      if (!this.sound || !this.isPlaying) return;
      
      try {
        const current = this.getCurrentPosition();
        const duration = this.getDuration();
        
        // Si estamos a menos de X segundos del final y no estamos ya en fade out
        if (duration - current <= this.fadeTimeBeforeEnd && !this.isFading) {
          // Comenzar fade out
          this._fadeOut();
        }
      } catch (error) {
        console.error('Error in end detection timer:', error);
      }
    }, 100); // Revisar más frecuentemente que el progress timer
  }
  
  // Stop end detection timer
  _stopEndDetectionTimer() {
    if (this.endDetectionTimer) {
      clearInterval(this.endDetectionTimer);
      this.endDetectionTimer = null;
    }
  }

  // Fade out the audio
  _fadeOut() {
    if (!this.sound || this.isFading) return;
    
    this.isFading = true;
    
    // Notify that fading has begun
    if (this.onFadingCallback) this.onFadingCallback(true);
    
    // Get current volume
    const initialVolume = this.sound.volume();
    const fadeSteps = 20; // Number of steps for a smooth fade
    const fadeTime = 4500; // Fade duration in ms (90% de los 5 segundos)
    const fadeInterval = fadeTime / fadeSteps;
    const volumeStep = initialVolume / fadeSteps;
    
    let currentStep = 0;
    
    this.fadeOutTimer = setInterval(() => {
      currentStep++;
      
      if (currentStep >= fadeSteps) {
        // Cleanup after fade
        clearInterval(this.fadeOutTimer);
        this.fadeOutTimer = null;
        
        // Reset volume for next playback
        this.sound.volume(initialVolume);
        
        // Now we can actually stop and consider the track ended
        this.isPlaying = false;
        this._stopProgressTimer();
        this._stopEndDetectionTimer();
        this.isFading = false;
        
        // Detener explícitamente la reproducción
        if (this.sound) {
          this.sound.stop();
        }
        
        // Call the end callback after fade is complete
        if (this.onEndCallback) this.onEndCallback();
        
        // Notify that fading has ended
        if (this.onFadingCallback) this.onFadingCallback(false);
      } else {
        // Continue fading
        const newVolume = initialVolume - (volumeStep * currentStep);
        if (this.sound) {
          this.sound.volume(Math.max(0, newVolume));
        }
      }
    }, fadeInterval);
  }
  
  // Clean up
  destroy() {
    this._stopProgressTimer();
    this._stopEndDetectionTimer();
    
    // Clear any active fade out
    if (this.fadeOutTimer) {
      clearInterval(this.fadeOutTimer);
      this.fadeOutTimer = null;
    }
    
    if (this.sound) {
      this.sound.stop();
      this.sound.unload();
      this.sound = null;
    }
    
    this.isFading = false;
  }
}

// Create a singleton instance
const audioPlayer = new AudioPlayer();

export default audioPlayer;
