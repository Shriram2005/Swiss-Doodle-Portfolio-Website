/**
 * SWISS × CUTE HAND-DRAWN INTERACTIVE ENGINE
 * Handles Audio Synthesis, Themes, Interactive Stamps, Live Clock, and UI Helpers
 */

// 1. Web Audio API Cute Sound Effects (Zero external audio files needed!)
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('sound_muted') === 'true';
    this.initAudio();
  }

  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    } catch (e) {
      console.warn('AudioContext not supported');
    }
  }

  ensureContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop(freq = 600, type = 'sine') {
    if (this.muted || !this.ctx) return;
    this.ensureContext();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {}
  }

  playCuteClick() {
    this.playPop(520, 'triangle');
  }

  playStamp() {
    this.playPop(340, 'sine');
    setTimeout(() => this.playPop(680, 'sine'), 50);
  }

  playSuccess() {
    this.playPop(440, 'sine');
    setTimeout(() => this.playPop(660, 'sine'), 80);
    setTimeout(() => this.playPop(880, 'sine'), 160);
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('sound_muted', this.muted);
    return this.muted;
  }
}

const sfx = new SoundFX();

// 2. Theme Switcher (Warm Notebook -> Swiss Poster -> Midnight Blueprint)
const themes = ['default', 'swiss', 'midnight'];
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio_theme') || 'default';
  applyTheme(savedTheme);

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      sfx.playCuteClick();
      const current = document.documentElement.getAttribute('data-theme') || 'default';
      const nextIdx = (themes.indexOf(current) + 1) % themes.length;
      const nextTheme = themes[nextIdx];
      applyTheme(nextTheme);
    });
  }
}

function applyTheme(theme) {
  if (theme === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  localStorage.setItem('portfolio_theme', theme);
  
  const icon = document.getElementById('theme-icon');
  if (icon) {
    if (theme === 'default') icon.textContent = '🎨';
    else if (theme === 'swiss') icon.textContent = '🇨🇭';
    else icon.textContent = '🌙';
  }
}

// 3. Audio Toggle Button
function initAudioToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (!soundBtn) return;

  const updateIcon = () => {
    soundBtn.textContent = sfx.muted ? '🔇' : '🔊';
    soundBtn.title = sfx.muted ? 'Unmute cute sound effects' : 'Mute sound effects';
  };
  updateIcon();

  soundBtn.addEventListener('click', () => {
    const isMuted = sfx.toggleMute();
    updateIcon();
    if (!isMuted) sfx.playCuteClick();
  });
}

// 4. Interactive Sticker & Stamp Playground
let currentStamp = '⭐️';
let stampModeActive = true;

function initStampPlayground() {
  const stampBtns = document.querySelectorAll('.stamp-btn');
  stampBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      sfx.playCuteClick();
      stampBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      currentStamp = btn.getAttribute('data-stamp') || '⭐️';
    });
  });

  const clearBtn = document.getElementById('clear-stamps-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      sfx.playCuteClick();
      document.querySelectorAll('.placed-stamp').forEach(el => el.remove());
    });
  }

  // Stamp anywhere on container when clicking on white space
  document.addEventListener('click', (e) => {
    // Prevent stamping if clicking on buttons, links, inputs, or navbar
    if (e.target.closest('button, a, input, textarea, select, nav, .stamp-selector, .modal-content')) {
      return;
    }

    if (!stampModeActive) return;

    createStampAt(e.pageX, e.pageY, currentStamp);
    sfx.playStamp();
  });
}

function createStampAt(x, y, emoji) {
  const stamp = document.createElement('div');
  stamp.className = 'placed-stamp';
  stamp.textContent = emoji;
  const rotation = Math.floor(Math.random() * 40) - 20;
  stamp.style.setProperty('--rot', `${rotation}deg`);
  stamp.style.left = `${x}px`;
  stamp.style.top = `${y}px`;
  document.body.appendChild(stamp);
}

// 5. Live Nashik Local Time Indicator
function initLiveClock() {
  const clockEl = document.getElementById('nashik-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format to Indian Standard Time (Asia/Kolkata)
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    clockEl.textContent = now.toLocaleTimeString('en-US', options) + ' IST (Nashik)';
  }
  update();
  setInterval(update, 1000);
}

// 6. Mobile Menu Toggle
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      sfx.playCuteClick();
      navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

// 7. Interactive Copy-to-Clipboard Helper
function copyTextToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    sfx.playSuccess();
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = '<span>Copied! ✨</span>';
    btnElement.style.backgroundColor = 'var(--accent-mint)';
    setTimeout(() => {
      btnElement.innerHTML = originalText;
      btnElement.style.backgroundColor = '';
    }, 2000);
  }).catch(() => {
    alert('Copied to clipboard: ' + text);
  });
}

// 8. General Button Audio Listeners
function initButtonSounds() {
  document.querySelectorAll('.btn, .nav-link, .sticker').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      // subtle hover feedback
    });
    btn.addEventListener('click', () => {
      sfx.playCuteClick();
    });
  });
}

// 9. Interactive Avatar Wiggle Easter Egg
function initAvatarEasterEgg() {
  const avatar = document.querySelector('.hero-visual-card');
  if (avatar) {
    avatar.addEventListener('click', () => {
      sfx.playPop(780, 'sine');
      avatar.style.transform = 'scale(1.08) rotate(-4deg)';
      setTimeout(() => {
        avatar.style.transform = '';
      }, 350);
    });
  }
}

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAudioToggle();
  initStampPlayground();
  initLiveClock();
  initMobileNav();
  initButtonSounds();
  initAvatarEasterEgg();
});
