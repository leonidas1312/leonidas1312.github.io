// Animated background. Multiple visual modes — switch via data-bg attribute on :root.
//   mono     — minimal monochrome: faint lattice + slow drifting orbs
//   spectrum — bright color field: large soft blobs in red/blue/green/violet that drift
//   aurora   — flowing wide ribbons in magenta/teal/violet, like northern lights
//   confetti — colorful dots scattered + slow parallax drift
// Motion intensity scales animation durations.

const QuantumBg = ({ intensity = 0.6 }) => {
  const dur = (base) => `${base / Math.max(0.15, intensity)}s`;
  return (
    <div className="qbg" aria-hidden="true">
      {/* MONO — playful colorful shapes */}
      <div className="qbg-mono">
        <svg className="qbg-lattice" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="lattice" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="latticeMask" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="latticeFade">
              <rect width="1200" height="800" fill="url(#latticeMask)" />
            </mask>
          </defs>
          <rect width="1200" height="800" fill="url(#lattice)" mask="url(#latticeFade)" />
        </svg>

        {/* Memphis-style colorful playful scene */}
        <div className="qbg-play">
          <span className="pp pp-circle  pp-blue"   />
          <span className="pp pp-square  pp-red"    />
          <span className="pp pp-triangle pp-green" />
          <span className="pp pp-ring    pp-purple" />
          <span className="pp pp-blob    pp-black"  />
          <span className="pp pp-dot     pp-blue"   />
          <span className="pp pp-dot     pp-red"    />
          <span className="pp pp-dot     pp-purple" />
          <span className="pp pp-dot     pp-green"  />
          <svg className="pp pp-squiggle pp-stroke-purple" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path d="M 0 20 Q 25 0 50 20 T 100 20 T 150 20 T 200 20"
                  fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <svg className="pp pp-squiggle pp-stroke-green" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path d="M 0 20 Q 25 0 50 20 T 100 20 T 150 20 T 200 20"
                  fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="pp pp-cross pp-black" />
          <span className="pp pp-cross pp-red" />
          <span className="pp pp-bar pp-blue" />
          <span className="pp pp-bar pp-green" />
        </div>
      </div>

      {/* SPECTRUM — soft color blobs, slow float */}
      <div className="qbg-spectrum">
        <span className="blob b1" style={{ animationDuration: dur(28) }} />
        <span className="blob b2" style={{ animationDuration: dur(34) }} />
        <span className="blob b3" style={{ animationDuration: dur(40) }} />
        <span className="blob b4" style={{ animationDuration: dur(46) }} />
      </div>

      {/* AURORA — wide ribbons, drifting */}
      <div className="qbg-aurora">
        <span className="ribbon r1" style={{ animationDuration: dur(22) }} />
        <span className="ribbon r2" style={{ animationDuration: dur(30) }} />
        <span className="ribbon r3" style={{ animationDuration: dur(36) }} />
      </div>

      {/* QUEST — pixel hero adventure */}
      <div className="qbg-quest-wrap">
        {window.HeroQuest && <window.HeroQuest />}
      </div>

      {/* CONFETTI — sparse colored dots */}
      <div className="qbg-confetti">
        {Array.from({ length: 36 }).map((_, i) => {
          const palette = [
            'oklch(0.78 0.18 25)',
            'oklch(0.80 0.15 200)',
            'oklch(0.80 0.16 145)',
            'oklch(0.78 0.18 320)',
            'oklch(0.82 0.16 80)',
          ];
          const x = ((i * 97) % 100);
          const y = ((i * 53) % 100);
          const c = palette[i % palette.length];
          const r = (i % 4 === 0) ? 6 : (i % 3 === 0) ? 4 : 3;
          return (
            <span
              key={i}
              className="dot"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: r, height: r,
                background: c,
                animationDuration: dur(10 + (i % 7)),
                animationDelay: `${(i * 0.2)}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

window.QuantumBg = QuantumBg;
