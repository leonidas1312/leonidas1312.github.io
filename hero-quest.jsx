// Greek beach ambient scene — Aegean sea, soft sun, drifting sailboat,
// distant island, gentle waves. Pure CSS-driven motion.

const HeroQuest = () => {
  return (
    <div className="qbg-beach" aria-hidden="true">
      {/* sky gradient */}
      <div className="bch-sky" />

      {/* sun */}
      <div className="bch-sun">
        <div className="bch-sun-halo" />
        <div className="bch-sun-disc" />
      </div>

      {/* far seagulls */}
      <div className="bch-gull bch-g1" />
      <div className="bch-gull bch-g2" />
      <div className="bch-gull bch-g3" />

      {/* distant island */}
      <svg className="bch-island" viewBox="0 0 320 80" preserveAspectRatio="none">
        <path d="M 0 80 L 30 38 L 70 56 L 110 22 L 160 50 L 210 28 L 260 52 L 300 36 L 320 80 Z" fill="#7a8aa0" opacity="0.55"/>
      </svg>

      {/* sea */}
      <div className="bch-sea">
        <span className="bch-wave w1" />
        <span className="bch-wave w2" />
        <span className="bch-wave w3" />
        <span className="bch-wave w4" />
      </div>

      {/* sailboat */}
      <div className="bch-boat">
        <div className="bch-boat-bob">
          <svg viewBox="0 0 60 50" width="60" height="50">
            {/* sail */}
            <path d="M 30 4 L 30 38 L 50 38 Z" fill="#fff" stroke="#3b6fa6" strokeWidth="0.8"/>
            <path d="M 30 4 L 30 38 L 12 38 Z" fill="#f4f4f0" stroke="#3b6fa6" strokeWidth="0.8"/>
            {/* mast */}
            <line x1="30" y1="2" x2="30" y2="40" stroke="#5a3a1a" strokeWidth="1.2"/>
            {/* hull */}
            <path d="M 6 40 L 54 40 L 48 48 L 12 48 Z" fill="#3b6fa6" stroke="#1f4470" strokeWidth="0.8"/>
            <line x1="6" y1="42" x2="54" y2="42" stroke="#fff" strokeWidth="0.6" opacity="0.6"/>
          </svg>
        </div>
      </div>

      {/* whitewashed cycladic house at right */}
      <svg className="bch-house" viewBox="0 0 90 70" preserveAspectRatio="none">
        {/* main block */}
        <rect x="6" y="22" width="60" height="40" fill="#fafafa" stroke="#d8d4cc" strokeWidth="0.6"/>
        {/* dome */}
        <path d="M 24 22 Q 36 0 48 22 Z" fill="#3b6fa6" stroke="#1f4470" strokeWidth="0.6"/>
        {/* tower */}
        <rect x="32" y="14" width="8" height="10" fill="#fff" stroke="#d8d4cc" strokeWidth="0.4"/>
        {/* small windows */}
        <rect x="14" y="36" width="6" height="8" fill="#3b6fa6" opacity="0.6"/>
        <rect x="50" y="36" width="6" height="8" fill="#3b6fa6" opacity="0.6"/>
        {/* door */}
        <rect x="32" y="46" width="8" height="16" fill="#3b6fa6" opacity="0.85"/>
        {/* annex */}
        <rect x="60" y="36" width="22" height="26" fill="#fafafa" stroke="#d8d4cc" strokeWidth="0.5"/>
        <path d="M 60 36 L 71 26 L 82 36 Z" fill="#fafafa" stroke="#d8d4cc" strokeWidth="0.5"/>
      </svg>

      {/* sand foreground */}
      <div className="bch-sand">
        <span className="bch-pebble p1" />
        <span className="bch-pebble p2" />
        <span className="bch-pebble p3" />
      </div>

      {/* foam line where sea meets sand */}
      <div className="bch-foam" />
    </div>
  );
};

window.HeroQuest = HeroQuest;
