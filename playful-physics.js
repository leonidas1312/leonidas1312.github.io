/* Playful background floats — circles & shapes drift gently with overlapping
   sine waves. No collisions. GPU-composited via translate3d. Lifecycle is
   tied to the `data-bg="mono"` mode and honors prefers-reduced-motion and
   tab visibility. */
(function () {
  const SELECTOR =
    '.qbg-play .pp-circle, .qbg-play .pp-ring, .qbg-play .pp-blob, .qbg-play .pp-dot';
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');

  let raf = 0;
  let bodies = [];
  let active = false;
  let t0 = 0;

  function setup() {
    const container = document.querySelector('.qbg-play');
    if (!container) return false;

    bodies.length = 0;
    const els = container.querySelectorAll(SELECTOR);
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (getComputedStyle(el).display === 'none') continue;

      // Take over from any CSS animation cleanly.
      el.style.animation = 'none';
      el.style.transition = 'none';
      el.style.willChange = 'transform';

      const w = el.offsetWidth || 16;
      const h = el.offsetHeight || 16;
      const size = Math.max(w, h);

      // Amplitude scales with size but stays gentle. Smaller dots get
      // smaller travel, larger circles get a little more — capped so the
      // shape never wanders far from where layout placed it.
      const ampY = Math.min(Math.max(size * 0.10, 4), 16);
      const ampX = ampY * 0.6;

      bodies.push({
        el,
        ampX,
        ampY,
        // Each shape gets its own slow rhythm so the field never marches in step.
        periodA: (10 + ((i * 1.71) % 8)) * 1000,
        periodB: (15 + ((i * 2.37) % 10)) * 1000,
        phaseA: (i * 0.91) % (Math.PI * 2),
        phaseB: (i * 1.37) % (Math.PI * 2),
      });
    }
    return bodies.length > 0;
  }

  function getMotion() {
    const v = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--motion')
    );
    return isFinite(v) && v > 0 ? v : 1;
  }

  function frame(now) {
    if (!active) return;
    const t = (now - t0) * getMotion();
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      const dx =
        b.ampX *
        Math.sin((t / b.periodA) * Math.PI * 2 + b.phaseA);
      const dy =
        b.ampY *
        Math.sin((t / b.periodB) * Math.PI * 2 + b.phaseB);
      b.el.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`;
    }
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (active) return;
    if (REDUCED.matches) return;
    if (document.hidden) return;
    if (!setup()) return;
    active = true;
    t0 = performance.now();
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    active = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    for (let i = 0; i < bodies.length; i++) {
      const el = bodies[i].el;
      el.style.transform = '';
      el.style.animation = '';
      el.style.transition = '';
      el.style.willChange = '';
    }
    bodies.length = 0;
  }

  function isMono() {
    const bg = document.documentElement.dataset.bg;
    return bg === 'mono' || !bg;
  }

  function reconcile() {
    if (isMono() && !REDUCED.matches) {
      // Wait two frames so layout settles after a mode switch.
      stop();
      requestAnimationFrame(() => requestAnimationFrame(start));
    } else {
      stop();
    }
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () =>
      setTimeout(reconcile, 80)
    );
  } else {
    setTimeout(reconcile, 80);
  }

  // React to background-mode changes
  new MutationObserver(reconcile).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-bg'],
  });

  // Debounced resize → recompute amplitudes for the new layout
  let resizeT = 0;
  window.addEventListener('resize', () => {
    if (!active && !isMono()) return;
    clearTimeout(resizeT);
    resizeT = setTimeout(reconcile, 180);
  });

  // Pause when the tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (active) {
        active = false;
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
      }
    } else if (isMono() && bodies.length && !REDUCED.matches) {
      active = true;
      t0 = performance.now();
      raf = requestAnimationFrame(frame);
    }
  });

  // React to reduced-motion preference changes
  if (typeof REDUCED.addEventListener === 'function') {
    REDUCED.addEventListener('change', reconcile);
  } else if (typeof REDUCED.addListener === 'function') {
    REDUCED.addListener(reconcile);
  }
})();
