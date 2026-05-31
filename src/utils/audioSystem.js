class AudioSystem {
  constructor() {
    this.ctx = null;
    this.frutiger = null;
    this.lmfao = null;
    this.gaga = null;
    this.mii = null;
    this.jeffrey = null; // New Corte audio
    this.nasa = null; // New NASA audio

    this.frutigerNode = null;
    this.lmfaoNode = null;
    this.gagaNode = null;
    this.miiNode = null;
    this.jeffreyNode = null;
    this.nasaNode = null;

    this.frutigerFilter = null;
    this.lmfaoFilter = null;
    this.gagaFilter = null;
    this.miiFilter = null;
    this.jeffreyFilter = null;
    this.nasaFilter = null;

    this.frutigerGain = null;
    this.lmfaoGain = null;
    this.gagaGain = null;
    this.miiGain = null;
    this.jeffreyGain = null;
    this.nasaGain = null;

    this.activeTrack = null; 
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    this.frutiger = new Audio('/frutiger.mp3');
    this.frutiger.loop = true;
    this.frutiger.crossOrigin = 'anonymous';

    this.lmfao = new Audio('/LMFAO.mp3');
    this.lmfao.loop = true;
    this.lmfao.crossOrigin = 'anonymous';

    this.gaga = new Audio('/gaga.mp3');
    this.gaga.loop = true;
    this.gaga.crossOrigin = 'anonymous';

    this.mii = new Audio('/mii.mp3');
    this.mii.loop = true;
    this.mii.crossOrigin = 'anonymous';

    this.jeffrey = new Audio('/jeffrey.mp3');
    this.jeffrey.loop = true;
    this.jeffrey.crossOrigin = 'anonymous';

    this.nasa = new Audio('/nasa.mp3');
    this.nasa.loop = true;
    this.nasa.crossOrigin = 'anonymous';

    // Route elements through Web Audio API
    this.frutigerNode = this.ctx.createMediaElementSource(this.frutiger);
    this.lmfaoNode = this.ctx.createMediaElementSource(this.lmfao);
    this.gagaNode = this.ctx.createMediaElementSource(this.gaga);
    this.miiNode = this.ctx.createMediaElementSource(this.mii);
    this.jeffreyNode = this.ctx.createMediaElementSource(this.jeffrey);
    this.nasaNode = this.ctx.createMediaElementSource(this.nasa);

    // Create lowpass filters for the "desenfoque" muffling effect
    this.frutigerFilter = this.ctx.createBiquadFilter();
    this.lmfaoFilter = this.ctx.createBiquadFilter();
    this.gagaFilter = this.ctx.createBiquadFilter();
    this.miiFilter = this.ctx.createBiquadFilter();
    this.jeffreyFilter = this.ctx.createBiquadFilter();
    this.nasaFilter = this.ctx.createBiquadFilter();

    [this.frutigerFilter, this.lmfaoFilter, this.gagaFilter, this.miiFilter, this.jeffreyFilter, this.nasaFilter].forEach(f => {
      f.type = 'lowpass';
      f.Q.value = 1.0;
      f.frequency.setValueAtTime(300, this.ctx.currentTime); // start blurry
    });

    // Create gain nodes for volume crossfades
    this.frutigerGain = this.ctx.createGain();
    this.lmfaoGain = this.ctx.createGain();
    this.gagaGain = this.ctx.createGain();
    this.miiGain = this.ctx.createGain();
    this.jeffreyGain = this.ctx.createGain();
    this.nasaGain = this.ctx.createGain();

    [this.frutigerGain, this.lmfaoGain, this.gagaGain, this.miiGain, this.jeffreyGain, this.nasaGain].forEach(g => {
      g.gain.setValueAtTime(0, this.ctx.currentTime); // start silent
    });

    // Connect node chains: Source -> Filter -> Gain -> Destination
    this._setupChain(this.frutigerNode, this.frutigerFilter, this.frutigerGain);
    this._setupChain(this.lmfaoNode, this.lmfaoFilter, this.lmfaoGain);
    this._setupChain(this.gagaNode, this.gagaFilter, this.gagaGain);
    this._setupChain(this.miiNode, this.miiFilter, this.miiGain);
    this._setupChain(this.jeffreyNode, this.jeffreyFilter, this.jeffreyGain);
    this._setupChain(this.nasaNode, this.nasaFilter, this.nasaGain);

    this.initialized = true;
  }

  _setupChain(source, filter, gain) {
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
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
    this.mii.play().catch(e => console.log("Playback error Mii", e));
    this.jeffrey.play().catch(e => console.log("Playback error Jeffrey", e));
    this.nasa.play().catch(e => console.log("Playback error Nasa", e));

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
    if (this.ctx.state === 'suspended') this.ctx.resume();
    gainNode.gain.cancelScheduledValues(now);
    gainNode.gain.setTargetAtTime(0.0001, now, 0.3); // Uses exponential approach, no need for start value

    filterNode.frequency.cancelScheduledValues(now);
    filterNode.frequency.setTargetAtTime(300, now, 0.3);
  }

  _openAndFadeUp(gainNode, filterNode, now) {
    if (this.ctx.state === 'suspended') this.ctx.resume();
    gainNode.gain.cancelScheduledValues(now);
    gainNode.gain.setTargetAtTime(1.0, now, 0.3);

    filterNode.frequency.cancelScheduledValues(now);
    filterNode.frequency.setTargetAtTime(20000, now, 0.3);
  }

  _muffleAllExcept(activeGain) {
    const now = this.ctx.currentTime;
    const targets = [
      {g: this.frutigerGain, f: this.frutigerFilter},
      {g: this.lmfaoGain, f: this.lmfaoFilter},
      {g: this.gagaGain, f: this.gagaFilter},
      {g: this.miiGain, f: this.miiFilter},
      {g: this.jeffreyGain, f: this.jeffreyFilter},
      {g: this.nasaGain, f: this.nasaFilter}
    ];

    targets.forEach(t => {
      if (t.g !== activeGain) {
        this._muffleAndFadeDown(t.g, t.f, now);
      } else {
        this._openAndFadeUp(t.g, t.f, now);
      }
    });
  }

  switchToStarvibe() {
    if (!this.initialized || this.activeTrack === 'lmfao') return;
    this.activeTrack = 'lmfao';
    this.lmfao.play().catch(e => console.log("Play error LMFAO on switch", e));

    if (this.lmfao && this.lmfao.readyState >= 1 && this.lmfao.currentTime < 15) {
      this.lmfao.currentTime = 15.5; 
    }
    this._muffleAllExcept(this.lmfaoGain);
  }

  switchToMain() {
    if (!this.initialized || this.activeTrack === 'frutiger') return;
    this.activeTrack = 'frutiger';
    this.frutiger.play().catch(e => console.log("Play error Frutiger on switch", e));
    this._muffleAllExcept(this.frutigerGain);
  }

  switchToCrisis() {
    if (!this.initialized || this.activeTrack === 'gaga') return;
    this.activeTrack = 'gaga';
    
    if (this.gaga && this.gaga.readyState >= 1 && this.gaga.currentTime < 10) {
      this.gaga.currentTime = 32.5; 
    }
    
    this.gaga.play().catch(e => console.log("Play error Gaga on switch", e));
    this._muffleAllExcept(this.gagaGain);
  }

  switchToReglamentos() {
    if (!this.initialized || this.activeTrack === 'mii') return;
    this.activeTrack = 'mii';
    this.mii.play().catch(e => console.log("Play error Mii on switch", e));
    this._muffleAllExcept(this.miiGain);
  }

  switchToCorte() {
    if (!this.initialized || this.activeTrack === 'jeffrey') return;
    this.activeTrack = 'jeffrey';
    this.jeffrey.play().catch(e => console.log("Play error Jeffrey on switch", e));
    this._muffleAllExcept(this.jeffreyGain);
  }

  switchToNasa() {
    if (!this.initialized || this.activeTrack === 'nasa') return;
    this.activeTrack = 'nasa';
    this.nasa.play().catch(e => console.log("Play error Nasa on switch", e));
    this._muffleAllExcept(this.nasaGain);
  }

  pauseAll() {
    if (!this.initialized) return;
    this.activeTrack = null;
    const now = this.ctx.currentTime;
    
    [this.frutigerGain, this.lmfaoGain, this.gagaGain, this.miiGain, this.jeffreyGain, this.nasaGain].forEach((g, i) => {
      const f = [this.frutigerFilter, this.lmfaoFilter, this.gagaFilter, this.miiFilter, this.jeffreyFilter, this.nasaFilter][i];
      this._muffleAndFadeDown(g, f, now);
    });
  }
}

const audioSystem = new AudioSystem();
export default audioSystem;
