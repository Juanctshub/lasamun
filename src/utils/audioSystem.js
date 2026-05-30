class AudioSystem {
  constructor() {
    this.ctx = null;
    this.frutiger = null;
    this.lmfao = null;
    this.gaga = null;
    this.frutigerNode = null;
    this.lmfaoNode = null;
    this.gagaNode = null;
    this.frutigerFilter = null;
    this.lmfaoFilter = null;
    this.gagaFilter = null;
    this.frutigerGain = null;
    this.lmfaoGain = null;
    this.gagaGain = null;
    this.activeTrack = null; // 'frutiger', 'lmfao', or 'gaga'
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

    this.gaga = new Audio('/gaga.mp3');
    this.gaga.loop = true;
    this.gaga.crossOrigin = 'anonymous';

    // Route elements through Web Audio API
    this.frutigerNode = this.ctx.createMediaElementSource(this.frutiger);
    this.lmfaoNode = this.ctx.createMediaElementSource(this.lmfao);
    this.gagaNode = this.ctx.createMediaElementSource(this.gaga);

    // Create lowpass filters for the "desenfoque" muffling effect
    this.frutigerFilter = this.ctx.createBiquadFilter();
    this.frutigerFilter.type = 'lowpass';
    this.frutigerFilter.Q.value = 1.0;
    this.frutigerFilter.frequency.setValueAtTime(300, this.ctx.currentTime); // start blurry

    this.lmfaoFilter = this.ctx.createBiquadFilter();
    this.lmfaoFilter.type = 'lowpass';
    this.lmfaoFilter.Q.value = 1.0;
    this.lmfaoFilter.frequency.setValueAtTime(300, this.ctx.currentTime); // start blurry

    this.gagaFilter = this.ctx.createBiquadFilter();
    this.gagaFilter.type = 'lowpass';
    this.gagaFilter.Q.value = 1.0;
    this.gagaFilter.frequency.setValueAtTime(300, this.ctx.currentTime); // start blurry

    // Create gain nodes for volume crossfades
    this.frutigerGain = this.ctx.createGain();
    this.frutigerGain.gain.setValueAtTime(0, this.ctx.currentTime); // start silent

    this.lmfaoGain = this.ctx.createGain();
    this.lmfaoGain.gain.setValueAtTime(0, this.ctx.currentTime); // start silent

    this.gagaGain = this.ctx.createGain();
    this.gagaGain.gain.setValueAtTime(0, this.ctx.currentTime); // start silent

    // Connect node chains: Source -> Filter -> Gain -> Destination
    this.frutigerNode.connect(this.frutigerFilter);
    this.frutigerFilter.connect(this.frutigerGain);
    this.frutigerGain.connect(this.ctx.destination);

    this.lmfaoNode.connect(this.lmfaoFilter);
    this.lmfaoFilter.connect(this.lmfaoGain);
    this.lmfaoGain.connect(this.ctx.destination);

    this.gagaNode.connect(this.gagaFilter);
    this.gagaFilter.connect(this.gagaGain);
    this.gagaGain.connect(this.ctx.destination);

    this.initialized = true;
  }

  async startExperience() {
    this.init();
    if (!this.initialized) return;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    // Start playback for all so they pre-buffer.
    this.frutiger.play().catch(e => console.log("Playback error Frutiger", e));
    this.lmfao.play().catch(e => console.log("Playback error LMFAO", e));
    this.gaga.play().catch(e => console.log("Playback error Gaga", e));

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

  _muffleAndFadeDown(gainNode, filterNode, now) {
    gainNode.gain.cancelScheduledValues(now);
    gainNode.gain.setValueAtTime(gainNode.gain.value || 0, now);
    gainNode.gain.linearRampToValueAtTime(0.0, now + 1.5);

    filterNode.frequency.cancelScheduledValues(now);
    filterNode.frequency.setValueAtTime(filterNode.frequency.value || 20000, now);
    filterNode.frequency.exponentialRampToValueAtTime(300, now + 1.5);
  }

  _openAndFadeUp(gainNode, filterNode, now) {
    gainNode.gain.cancelScheduledValues(now);
    gainNode.gain.setValueAtTime(gainNode.gain.value || 0, now);
    gainNode.gain.linearRampToValueAtTime(1.0, now + 1.5);

    filterNode.frequency.cancelScheduledValues(now);
    filterNode.frequency.setValueAtTime(filterNode.frequency.value || 300, now);
    filterNode.frequency.exponentialRampToValueAtTime(20000, now + 1.5);
  }

  switchToStarvibe() {
    if (!this.initialized || this.activeTrack === 'lmfao') return;
    this.activeTrack = 'lmfao';

    const now = this.ctx.currentTime;
    this.lmfao.play().catch(e => console.log("Play error LMFAO on switch", e));

    // Jump exactly to the drop if near beginning
    if (this.lmfao && this.lmfao.readyState >= 1 && this.lmfao.currentTime < 15) {
      this.lmfao.currentTime = 15.5; 
    }

    this._muffleAndFadeDown(this.frutigerGain, this.frutigerFilter, now);
    this._muffleAndFadeDown(this.gagaGain, this.gagaFilter, now);
    this._openAndFadeUp(this.lmfaoGain, this.lmfaoFilter, now);
  }

  switchToMain() {
    if (!this.initialized || this.activeTrack === 'frutiger') return;
    this.activeTrack = 'frutiger';

    const now = this.ctx.currentTime;
    this.frutiger.play().catch(e => console.log("Play error Frutiger on switch", e));

    this._muffleAndFadeDown(this.lmfaoGain, this.lmfaoFilter, now);
    this._muffleAndFadeDown(this.gagaGain, this.gagaFilter, now);
    this._openAndFadeUp(this.frutigerGain, this.frutigerFilter, now);
  }

  switchToCrisis() {
    if (!this.initialized || this.activeTrack === 'gaga') return;
    this.activeTrack = 'gaga';

    const now = this.ctx.currentTime;
    this.gaga.play().catch(e => console.log("Play error Gaga on switch", e));

    this._muffleAndFadeDown(this.frutigerGain, this.frutigerFilter, now);
    this._muffleAndFadeDown(this.lmfaoGain, this.lmfaoFilter, now);
    
    // Smoothly fade up Gaga
    this._openAndFadeUp(this.gagaGain, this.gagaFilter, now);
  }
}

const audioSystem = new AudioSystem();
export default audioSystem;
