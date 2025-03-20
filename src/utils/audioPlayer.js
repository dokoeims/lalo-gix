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
  }

  // Set up event listeners
  setCallbacks(callbacks) {
    const { onPlay, onPause, onStop, onEnd, onProgress } = callbacks;
    this.onPlayCallback = onPlay;
    this.onPauseCallback = onPause;
    this.onStopCallback = onStop;
    this.onEndCallback = onEnd;
    this.onProgressCallback = onProgress;
  }

  // Load and play a track
  playTrack(track) {
    // Stop current track if one is playing
    if (this.sound) {
      this.sound.stop();
      this.sound.unload();
      this.sound = null;
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
      },
      onpause: () => {
        this.isPlaying = false;
        if (this.onPauseCallback) this.onPauseCallback();
        this._stopProgressTimer();
      },
      onstop: () => {
        this.isPlaying = false;
        if (this.onStopCallback) this.onStopCallback();
        this._stopProgressTimer();
      },
      onend: () => {
        this.isPlaying = false;
        if (this.onEndCallback) this.onEndCallback();
        this._stopProgressTimer();
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
    this.sound.stop();
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

  // Clean up
  destroy() {
    this._stopProgressTimer();
    if (this.sound) {
      this.sound.stop();
      this.sound.unload();
      this.sound = null;
    }
  }
}

// Create a singleton instance
const audioPlayer = new AudioPlayer();

export default audioPlayer;
