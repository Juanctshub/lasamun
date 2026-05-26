class AudioSystem {
  constructor() {
    this.ctx = null;
    this.frutiger = null;
    this.lmfao = null;
    this.frutigerNode = null;
    this.lmfaoNode = null;
    this.frutigerFilter = null;
    this.lmfaoFilter = null;
    this.frutigerGain = null;
    this.lmfaoGain = null;
    this.activeTrack = null; // 'frutiger' or 'lmfao'
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    // Create HTML Audio Elements
    this.frutiger = new Audio('/frutiger.mp3');
    this.frutiger.loop = true;
    this.frutiger.crossOrigin = 'anonymous';

    this.lmfao = new Audio('/LMFAO.mp3');
    this.lmfao.loop = true;
    this.lmfao.crossOrigin = 'anonymous';

    // Route elements through Web Audio API
    this.frutigerNode = this.ctx.createMediaElementSource(this.frutiger);
    this.lmfaoNode = this.ctx.createMediaElementSource(this.lmfao);

    // Create lowpass filters for the "desenfoque" muffling effect
    this.frutigerFilter = this.ctx.createBiquadFilter();
    this.frutigerFilter.type = 'lowpass';
    this.frutigerFilter.Q.value = 1.0;
    this.frutigerFilter.frequency.setValueAtTime(300, this.ctx.currentTime); // start blurry

    this.lmfaoFilter = this.ctx.createBiquadFilter();
    this.lmfaoFilter.type = 'lowpass';
    this.lmfaoFilter.Q.value = 1.0;
    this.lmfaoFilter.frequency.setValueAtTime(300, this.ctx.currentTime); // start blurry

    // Create gain nodes for volume crossfades
    this.frutigerGain = this.ctx.createGain();
    this.frutigerGain.gain.setValueAtTime(0, this.ctx.currentTime); // start silent

    this.lmfaoGain = this.ctx.createGain();
    this.lmfaoGain.gain.setValueAtTime(0, this.ctx.currentTime); // start silent

    // Connect node chains: Source -> Filter -> Gain -> Destination
    this.frutigerNode.connect(this.frutigerFilter);
    this.frutigerFilter.connect(this.frutigerGain);
    this.frutigerGain.connect(this.ctx.destination);

    this.lmfaoNode.connect(this.lmfaoFilter);
    this.lmfaoFilter.connect(this.lmfaoGain);
    this.lmfaoGain.connect(this.ctx.destination);

    this.initialized = true;
  }

  async startExperience() {
    this.init();
    if (!this.initialized) return;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    // Start playback for both so they buffer, keep LMFAO volume zero
    this.frutiger.play().catch(e => console.log("Playback error Frutiger", e));
    this.lmfao.play().catch(e => console.log("Playback error LMFAO", e));
    this.lmfao.volume = 0; // safety

    this.activeTrack = 'frutiger';

    // Initial fade in + sweep open filter (Aclarando!)
    const now = this.ctx.currentTime;
    
    // Smoothly fade in volume over 1.5 seconds
    this.frutigerGain.gain.cancelScheduledValues(now);
    this.frutigerGain.gain.setValueAtTime(0, now);
    this.frutigerGain.gain.linearRampToValueAtTime(1.0, now + 1.5);

    // Smoothly sweep open lowpass filter from 300Hz to 20000Hz over 2.5 seconds (Aclarando!)
    this.frutigerFilter.frequency.cancelScheduledValues(now);
    this.frutigerFilter.frequency.setValueAtTime(300, now);
    this.frutigerFilter.frequency.exponentialRampToValueAtTime(20000, now + 2.5);
  }

  switchToStarvibe() {
    if (!this.initialized || this.activeTrack === 'lmfao') return;
    this.activeTrack = 'lmfao';

    const now = this.ctx.currentTime;

    // Skip the slow intro speech of LMFAO to jump straight to the energetic beat drop!
    if (this.lmfao && this.lmfao.currentTime < 15) {
      this.lmfao.currentTime = 15.5; // Jump exactly to the drop
    }

    // --- Muffle & Fade Down Frutiger ---
    this.frutigerGain.gain.cancelScheduledValues(now);
    this.frutigerGain.gain.setValueAtTime(this.frutigerGain.gain.value || 0, now);
    this.frutigerGain.gain.linearRampToValueAtTime(0.0, now + 1.5);

    this.frutigerFilter.frequency.cancelScheduledValues(now);
    this.frutigerFilter.frequency.setValueAtTime(this.frutigerFilter.frequency.value || 20000, now);
    this.frutigerFilter.frequency.exponentialRampToValueAtTime(300, now + 1.5);

    // --- Open & Fade Up LMFAO ---
    this.lmfaoGain.gain.cancelScheduledValues(now);
    this.lmfaoGain.gain.setValueAtTime(this.lmfaoGain.gain.value || 0, now);
    this.lmfaoGain.gain.linearRampToValueAtTime(1.0, now + 1.5);

    this.lmfaoFilter.frequency.cancelScheduledValues(now);
    this.lmfaoFilter.frequency.setValueAtTime(this.lmfaoFilter.frequency.value || 300, now);
    this.lmfaoFilter.frequency.exponentialRampToValueAtTime(20000, now + 1.5);
  }

  switchToMain() {
    if (!this.initialized || this.activeTrack === 'frutiger') return;
    this.activeTrack = 'frutiger';

    const now = this.ctx.currentTime;

    // --- Muffle & Fade Down LMFAO ---
    this.lmfaoGain.gain.cancelScheduledValues(now);
    this.lmfaoGain.gain.setValueAtTime(this.lmfaoGain.gain.value || 0, now);
    this.lmfaoGain.gain.linearRampToValueAtTime(0.0, now + 1.5);

    this.lmfaoFilter.frequency.cancelScheduledValues(now);
    this.lmfaoFilter.frequency.setValueAtTime(this.lmfaoFilter.frequency.value || 20000, now);
    this.lmfaoFilter.frequency.exponentialRampToValueAtTime(300, now + 1.5);

    // --- Open & Fade Up Frutiger ---
    this.frutigerGain.gain.cancelScheduledValues(now);
    this.frutigerGain.gain.setValueAtTime(this.frutigerGain.gain.value || 0, now);
    this.frutigerGain.gain.linearRampToValueAtTime(1.0, now + 1.5);

    this.frutigerFilter.frequency.cancelScheduledValues(now);
    this.frutigerFilter.frequency.setValueAtTime(this.frutigerFilter.frequency.value || 300, now);
    this.frutigerFilter.frequency.exponentialRampToValueAtTime(20000, now + 1.5);
  }
}

const audioSystem = new AudioSystem();
export default audioSystem;
