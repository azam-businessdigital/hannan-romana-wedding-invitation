/**
 * Luxury Audio Controller with HTML5 audio playback and synthesized ambient harp/chime fallback
 * ensuring audio works flawlessly across mobile devices even if external network audio is restricted.
 */
class LuxuryAudioController {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private audioContext: AudioContext | null = null;
  private synthInterval: number | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();
  private isMuted: boolean = false;

  constructor() {
    // Initialized on demand
  }

  public init(musicUrl: string) {
    if (this.audio) {
      if (this.audio.src !== musicUrl) {
        this.audio.src = musicUrl;
      }
      return;
    }

    try {
      this.audio = new Audio(musicUrl);
      this.audio.preload = 'none';
      this.audio.loop = true;
      this.audio.volume = 0.40; // Soft and elegant

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('error', () => {
        // Fallback to ambient Web Audio synth if MP3 stream is unreachable
        if (this.isPlaying) {
          this.startSynthAmbience();
        }
      });
    } catch {
      // Audio element not supported, synth fallback will be used
    }
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.add(cb);
    cb(this.isPlaying);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach(cb => cb(this.isPlaying));
  }

  public async play(musicUrl?: string): Promise<boolean> {
    if (musicUrl && !this.audio) {
      this.init(musicUrl);
    }

    this.isMuted = false;

    if (this.audio) {
      try {
        await this.audio.play();
        this.isPlaying = true;
        this.notify();
        return true;
      } catch {
        // Autoplay policy or format block; trigger pleasant ambient synth chime loop
        this.startSynthAmbience();
        this.isPlaying = true;
        this.notify();
        return true;
      }
    } else {
      this.startSynthAmbience();
      this.isPlaying = true;
      this.notify();
      return true;
    }
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
    }
    this.stopSynthAmbience();
    this.isPlaying = false;
    this.notify();
  }

  public toggle(musicUrl?: string) {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play(musicUrl);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Ambient peaceful pentatonic chime generator using Web Audio API
   * Generates warm, subtle meditative wedding palace tones
   */
  private startSynthAmbience() {
    if (this.synthInterval) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioContext || this.audioContext.state === 'closed') {
        this.audioContext = new AudioCtx();
      }
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      // Elegant soothing Raag / Pentatonic frequencies: D4, F#4, A4, B4, C#5, D5
      const notes = [293.66, 369.99, 440.0, 493.88, 554.37, 587.33, 739.99];

      const playNote = () => {
        if (!this.audioContext || this.audioContext.state !== 'running' || !this.isPlaying) return;
        const ctx = this.audioContext;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm sine wave with subtle overtones
        osc.type = 'sine';
        const noteFreq = notes[Math.floor(Math.random() * notes.length)];
        osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

        // Soft attack, gentle decay like a distant santoor or piano
        const now = ctx.currentTime;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.04, now + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.5);
      };

      playNote();
      this.synthInterval = window.setInterval(() => {
        if (Math.random() > 0.25) {
          playNote();
        }
      }, 1600);
    } catch {
      // AudioContext unavailable
    }
  }

  private stopSynthAmbience() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

export const luxuryAudio = new LuxuryAudioController();
