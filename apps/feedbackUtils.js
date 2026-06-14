/* feedbackUtils.js — audio-visual feedback shared across all apps */

(function () {
  // ── Audio (Web Audio API) ─────────────────────────────────────────────────

  function getAudioCtx() {
    if (!window._feedbackAudioCtx) {
      window._feedbackAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return window._feedbackAudioCtx;
  }

  function playTone(ctx, freq, type, startTime, duration, gainPeak) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(gainPeak, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  // Do-Mi-Sol ascending chord (~0.55s)
  function playCorrect() {
    try {
      const ctx = getAudioCtx();
      const t = ctx.currentTime;
      playTone(ctx, 523.25, 'sine', t,        0.45, 0.35); // Do5
      playTone(ctx, 659.25, 'sine', t + 0.10, 0.40, 0.30); // Mi5
      playTone(ctx, 783.99, 'sine', t + 0.20, 0.35, 0.28); // Sol5
    } catch (e) { /* silently ignore if AudioContext unavailable */ }
  }

  // Short falling sawtooth (~0.4s)
  function playIncorrect() {
    try {
      const ctx = getAudioCtx();
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(160, t + 0.35);
      gain.gain.setValueAtTime(0.22, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
      osc.start(t);
      osc.stop(t + 0.4);
    } catch (e) { /* silently ignore */ }
  }

  // ── Confetti ──────────────────────────────────────────────────────────────

  function launchConfetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const PARTICLE_COUNT = 60;
    const DURATION_MS    = 1800;
    const COLORS = ['#3B7DD8','#D64045','#3A9E6F','#F59E0B','#A855F7','#EC4899'];

    const canvas = document.createElement('canvas');
    canvas.style.cssText = [
      'position:fixed', 'top:0', 'left:0', 'width:100%', 'height:100%',
      'pointer-events:none', 'z-index:9999'
    ].join(';');
    document.body.appendChild(canvas);

    const W = canvas.width  = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: -10 - Math.random() * 60,
      vx: (Math.random() - 0.5) * 2.5,
      vy: 2 + Math.random() * 3,
      w: 7 + Math.random() * 6,
      h: 4 + Math.random() * 4,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: 1
    }));

    const start = performance.now();

    function frame(now) {
      const elapsed = now - start;
      const progress = elapsed / DURATION_MS;
      ctx.clearRect(0, 0, W, H);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        p.opacity = Math.max(0, 1 - Math.pow(progress, 2));

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (elapsed < DURATION_MS) {
        requestAnimationFrame(frame);
      } else {
        canvas.remove();
      }
    }

    requestAnimationFrame(frame);
  }

  // ── Exports ───────────────────────────────────────────────────────────────
  window.playCorrect   = playCorrect;
  window.playIncorrect = playIncorrect;
  window.launchConfetti = launchConfetti;
})();
