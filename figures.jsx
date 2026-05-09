// Project figures — minimalist SVGs that hint at architecture/idea.
// All consume `currentColor` so they pick up theme tokens.

const Frame = ({ children, label, viewBox = "0 0 400 220" }) => (
  <svg viewBox={viewBox} className="fig" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <rect x="0.5" y="0.5" width={viewBox.split(" ")[2] - 1} height={viewBox.split(" ")[3] - 1} fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25"/>
    {label && (
      <text x="14" y="22" fontFamily="var(--f-mono)" fontSize="9"
            fill="currentColor" opacity="0.55" letterSpacing="1.2">
        {label}
      </text>
    )}
    {children}
  </svg>
);

// QUBOTS — composition: problem ⨉ optimizer → result, with shareable artifacts
const QubotsFigure = () => (
  <Frame label="QUBOTS · COMPOSE → RUN → SHARE">
    <g fontFamily="var(--f-mono)" fontSize="10" fill="currentColor">
      {/* Problem node */}
      <g transform="translate(40,80)">
        <rect width="100" height="60" fill="none" stroke="currentColor" strokeWidth="0.8"/>
        <text x="50" y="26" textAnchor="middle" opacity="0.55" fontSize="8">PROBLEM</text>
        <text x="50" y="44" textAnchor="middle" fill="var(--accent)" fontSize="11">VRPTW</text>
      </g>
      {/* Optimizer node */}
      <g transform="translate(40,150)">
        <rect width="100" height="40" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
        <text x="50" y="18" textAnchor="middle" opacity="0.55" fontSize="8">OPTIMIZER</text>
        <text x="50" y="32" textAnchor="middle" fontSize="10">QAOA · GA · Tabu</text>
      </g>
      {/* arrows to runtime */}
      <path d="M 140 110 C 175 110, 175 170, 210 170" fill="none" stroke="var(--accent)" strokeWidth="1"/>
      <path d="M 140 170 C 175 170, 175 170, 210 170" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.6"/>
      {/* runtime */}
      <g transform="translate(210,140)">
        <rect width="80" height="60" fill="none" stroke="var(--accent)" strokeWidth="1"/>
        <text x="40" y="22" textAnchor="middle" opacity="0.55" fontSize="8">RUNTIME</text>
        <text x="40" y="40" textAnchor="middle" fill="var(--accent)" fontSize="10">.optimize()</text>
        <circle cx="40" cy="50" r="2" fill="var(--accent)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite"/>
        </circle>
      </g>
      {/* result */}
      <g transform="translate(310,150)">
        <rect width="70" height="40" fill="none" stroke="currentColor" strokeWidth="0.8"/>
        <text x="35" y="18" textAnchor="middle" opacity="0.55" fontSize="8">RESULT</text>
        <text x="35" y="32" textAnchor="middle" fontSize="10" fill="var(--accent)">obj ↓</text>
      </g>
      <path d="M 290 170 L 310 170" fill="none" stroke="var(--accent)" strokeWidth="1"/>

      {/* shared registry header */}
      <g transform="translate(40,40)">
        <text opacity="0.55" fontSize="8">REGISTRY · github / pypi</text>
        <line x1="0" y1="6" x2="340" y2="6" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
      </g>
      {/* artifact pills */}
      {[
        { x:  10, t: "auto-problem" },
        { x: 100, t: "auto-optimizer" },
        { x: 195, t: "benchmark" },
        { x: 270, t: "pipeline" },
      ].map((p,i)=>(
        <g key={i} transform={`translate(${40+p.x},54)`}>
          <rect width="78" height="14" rx="7" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
          <text x="39" y="10" textAnchor="middle" fontSize="8" opacity="0.85">{p.t}</text>
        </g>
      ))}
    </g>
  </Frame>
);

// AUTORESEARCH — minimization run: discarded vs kept vs running best
const AutoresearchFigure = () => {
  const W = 320, H = 138, X0 = 50, Y0 = 38;
  const N = 130;

  // deterministic pseudo-random
  const rand = (s) => {
    let x = Math.sin(s * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  };

  // generate experiments: most are noisy, some are kept improvements
  // score range: ~1.7 down to ~0.13 (lower is better)
  const points = [];
  let best = 1.7;
  const keptIdx = new Set([0, 1, 3, 5, 7, 10, 13, 15, 17, 19, 22, 28, 33, 41, 49, 88]);
  for (let i = 0; i < N; i++) {
    let score;
    if (keptIdx.has(i)) {
      // monotone decreasing kept improvements
      const decay = Math.exp(-i / 12);
      score = 0.13 + (1.6 * decay) + (rand(i) - 0.5) * 0.04;
      best = Math.min(best, score);
    } else {
      // discarded: scattered above the running best, mostly higher
      const floor = Math.max(best, 0.18);
      score = floor + rand(i + 100) * (1.0 - i/N * 0.6) + 0.05;
      if (score > 1.65) score = 1.65 - rand(i+200) * 0.3;
    }
    points.push({ i, score, kept: keptIdx.has(i), best });
  }

  // axes
  const yMin = 0, yMax = 1.8;
  const xMax = N;
  const sx = (i) => X0 + (i / xMax) * W;
  const sy = (s) => Y0 + H - ((s - yMin) / (yMax - yMin)) * H;

  // running best step path
  let bestSoFar = 1.8;
  const stepPts = [];
  for (let i = 0; i < N; i++) {
    if (points[i].kept && points[i].score < bestSoFar) {
      stepPts.push([i, bestSoFar]); // horizontal segment to here
      stepPts.push([i, points[i].score]); // drop down
      bestSoFar = points[i].score;
    }
  }
  stepPts.push([N - 1, bestSoFar]);
  const stepD = stepPts.map((p, idx) => `${idx===0?"M":"L"} ${sx(p[0])} ${sy(p[1])}`).join(" ");

  // y ticks
  const yTicks = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6];
  const xTicks = [0, 20, 40, 60, 80, 100, 120];

  return (
    <Frame label="AUTORESEARCH PROGRESS · 130 EXPERIMENTS · 16 KEPT">
      {/* gridlines */}
      {yTicks.map((t, i) => (
        <line key={`yg${i}`} x1={X0} y1={sy(t)} x2={X0+W} y2={sy(t)}
              stroke="currentColor" strokeWidth="0.4" opacity="0.18"/>
      ))}
      {xTicks.map((t, i) => (
        <line key={`xg${i}`} x1={sx(t)} y1={Y0} x2={sx(t)} y2={Y0+H}
              stroke="currentColor" strokeWidth="0.4" opacity="0.12"/>
      ))}

      {/* axes */}
      <line x1={X0} y1={Y0} x2={X0} y2={Y0+H} stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <line x1={X0} y1={Y0+H} x2={X0+W} y2={Y0+H} stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>

      {/* y tick labels */}
      {yTicks.map((t, i) => (
        <text key={`yt${i}`} x={X0-5} y={sy(t)+3} textAnchor="end"
              fontFamily="var(--f-mono)" fontSize="7" fill="currentColor" opacity="0.65">
          {t.toFixed(1)}
        </text>
      ))}
      {/* x tick labels */}
      {xTicks.map((t, i) => (
        <text key={`xt${i}`} x={sx(t)} y={Y0+H+10} textAnchor="middle"
              fontFamily="var(--f-mono)" fontSize="7" fill="currentColor" opacity="0.65">
          {t}
        </text>
      ))}

      {/* axis labels */}
      <text x={10} y={Y0+H/2} textAnchor="middle"
            transform={`rotate(-90, 10, ${Y0+H/2})`}
            fontFamily="var(--f-mono)" fontSize="8" fill="currentColor" opacity="0.75">
        Score (lower is better)
      </text>
      <text x={X0+W/2} y={Y0+H+22} textAnchor="middle"
            fontFamily="var(--f-mono)" fontSize="8" fill="currentColor" opacity="0.75">
        Experiment #
      </text>

      {/* discarded points */}
      {points.filter(p => !p.kept).map((p, i) => (
        <circle key={`d${i}`} cx={sx(p.i)} cy={sy(p.score)} r="1.6"
                fill="currentColor" opacity="0.28"/>
      ))}

      {/* running best step line */}
      <path d={stepD} fill="none" stroke="var(--accent)" strokeWidth="1.4" opacity="0.95"/>

      {/* kept points (on top) */}
      {points.filter(p => p.kept).map((p, i) => (
        <circle key={`k${i}`} cx={sx(p.i)} cy={sy(p.score)} r="2.4"
                fill="var(--accent)" stroke="var(--bg-2)" strokeWidth="0.6"/>
      ))}

      {/* legend */}
      <g fontFamily="var(--f-mono)" fontSize="7" fill="currentColor" transform={`translate(${X0+W-86}, ${Y0-12})`}>
        <circle cx="3" cy="0" r="1.6" fill="currentColor" opacity="0.4"/>
        <text x="9" y="2.5" opacity="0.75">Discarded</text>
        <circle cx="50" cy="0" r="2.2" fill="var(--accent)"/>
        <text x="56" y="2.5" opacity="0.85">Kept</text>
        <line x1="0" y1="9" x2="6" y2="9" stroke="var(--accent)" strokeWidth="1.4"/>
        <text x="9" y="11.5" opacity="0.85">Running best</text>
      </g>
    </Frame>
  );
};

// RASTION — services / hub architecture
const RastionFigure = () => (
  <Frame label="RASTION-HUB · SERVICES">
    <g fontFamily="var(--f-mono)" fontSize="10" fill="currentColor">
      {/* clients top */}
      <g transform="translate(30,40)">
        {["Web UI","Qubots SDK","AI agent"].map((t,i)=>(
          <g key={i} transform={`translate(${i*120},0)`}>
            <rect width="100" height="26" fill="none" stroke="currentColor" strokeWidth="0.7"/>
            <text x="50" y="17" textAnchor="middle" fontSize="10">{t}</text>
          </g>
        ))}
      </g>
      {/* arrows down */}
      {[0,1,2].map(i=>(
        <path key={i} d={`M ${80+i*120} 66 L ${80+i*120} 92`} stroke="var(--accent)" strokeWidth="1"/>
      ))}
      {/* api gateway */}
      <g transform="translate(30,92)">
        <rect width="340" height="22" fill="none" stroke="var(--accent)" strokeWidth="1"/>
        <text x="170" y="15" textAnchor="middle" fontSize="10" fill="var(--accent)">REST · MCP gateway</text>
      </g>
      {/* services row */}
      <g transform="translate(30,128)">
        {[
          { t: "registry", a: "components" },
          { t: "orchestrator", a: "runs" },
          { t: "store", a: "results" },
        ].map((s,i)=>(
          <g key={i} transform={`translate(${i*120},0)`}>
            <rect width="100" height="46" fill="none" stroke="currentColor" strokeWidth="0.7"/>
            <text x="50" y="20" textAnchor="middle" fontSize="10">{s.t}</text>
            <text x="50" y="35" textAnchor="middle" fontSize="8" opacity="0.55">{s.a}</text>
          </g>
        ))}
      </g>
      {/* db */}
      <g transform="translate(150,186)">
        <ellipse cx="50" cy="6" rx="50" ry="6" fill="none" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="0" y1="6" x2="0" y2="14" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="100" y1="6" x2="100" y2="14" stroke="currentColor" strokeWidth="0.7"/>
        <ellipse cx="50" cy="14" rx="50" ry="6" fill="none" stroke="currentColor" strokeWidth="0.7"/>
        <text x="50" y="11" textAnchor="middle" fontSize="9" opacity="0.7">postgres</text>
      </g>
      {/* connectors */}
      {[0,1,2].map(i=>(
        <line key={i} x1={80+i*120} y1={174} x2={200} y2={188} stroke="currentColor" strokeWidth="0.5" opacity="0.45"/>
      ))}
    </g>
  </Frame>
);

// OPTIMIZATION-AGENTS — agent loop
const OptAgentsFigure = () => (
  <Frame label="OPTIMIZATION-AGENTS · LOOP">
    <g fontFamily="var(--f-mono)" fontSize="10" fill="currentColor">
      {/* center: LLM */}
      <g transform="translate(160,90)">
        <rect width="80" height="40" fill="none" stroke="var(--accent)" strokeWidth="1"/>
        <text x="40" y="18" textAnchor="middle" fontSize="9" opacity="0.6">PLANNER</text>
        <text x="40" y="32" textAnchor="middle" fontSize="10" fill="var(--accent)">LLM</text>
      </g>
      {/* nodes around */}
      {[
        { x: 30,  y: 50,  t: "1 · perceive", s: "instance read" },
        { x: 290, y: 50,  t: "2 · choose",   s: "select solver" },
        { x: 290, y: 150, t: "3 · execute",  s: "solver.run()" },
        { x: 30,  y: 150, t: "4 · reflect",  s: "score & adapt" },
      ].map((n,i)=>(
        <g key={i} transform={`translate(${n.x},${n.y})`}>
          <rect width="80" height="40" fill="none" stroke="currentColor" strokeWidth="0.7"/>
          <text x="40" y="16" textAnchor="middle" fontSize="9" opacity="0.6">{n.t}</text>
          <text x="40" y="30" textAnchor="middle" fontSize="9">{n.s}</text>
        </g>
      ))}
      {/* loop arrows */}
      <path d="M 110 70 C 140 70, 150 90, 160 100" fill="none" stroke="var(--accent)" strokeWidth="0.8"/>
      <path d="M 240 100 C 260 90, 280 70, 290 70" fill="none" stroke="var(--accent)" strokeWidth="0.8"/>
      <path d="M 290 170 C 260 170, 250 130, 240 120" fill="none" stroke="var(--accent)" strokeWidth="0.8"/>
      <path d="M 160 120 C 150 130, 140 170, 110 170" fill="none" stroke="var(--accent)" strokeWidth="0.8"/>
      {/* center pulse */}
      <circle cx="200" cy="110" r="3" fill="var(--accent)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite"/>
      </circle>
    </g>
  </Frame>
);

// OR-MCP — protocol bridge
const OrMcpFigure = () => (
  <Frame label="OR-MCP-TOOLS · PROTOCOL BRIDGE">
    <g fontFamily="var(--f-mono)" fontSize="10" fill="currentColor">
      {/* AI assistant left */}
      <g transform="translate(20,80)">
        <rect width="90" height="60" fill="none" stroke="currentColor" strokeWidth="0.8"/>
        <text x="45" y="22" textAnchor="middle" fontSize="9" opacity="0.6">AI ASSISTANT</text>
        <text x="45" y="40" textAnchor="middle" fontSize="10">Claude · GPT</text>
        <text x="45" y="52" textAnchor="middle" fontSize="9" opacity="0.55">natural language</text>
      </g>
      {/* MCP gateway center */}
      <g transform="translate(150,70)">
        <rect width="100" height="80" fill="none" stroke="var(--accent)" strokeWidth="1"/>
        <text x="50" y="22" textAnchor="middle" fontSize="9" opacity="0.6">MCP SERVER</text>
        <text x="50" y="42" textAnchor="middle" fontSize="11" fill="var(--accent)">or-mcp</text>
        <text x="50" y="60" textAnchor="middle" fontSize="9" opacity="0.65">tool router</text>
        {/* mini tools */}
        {[0,1,2].map(i=>(
          <circle key={i} cx={20+i*15} cy="72" r="2" fill="var(--accent)" opacity={0.4 + i*0.2}/>
        ))}
      </g>
      {/* OR tools right */}
      <g transform="translate(290,40)">
        {["solve_tsp","route_vrp","schedule","assign","pack"].map((t,i)=>(
          <g key={i} transform={`translate(0,${i*26})`}>
            <rect width="90" height="20" fill="none" stroke="currentColor" strokeWidth="0.6"/>
            <text x="8" y="14" fontSize="10" fill="var(--accent)">{t}</text>
            <text x="78" y="14" textAnchor="end" fontSize="9" opacity="0.5">()</text>
          </g>
        ))}
      </g>
      {/* arrows */}
      <path d="M 110 110 L 150 110" stroke="var(--accent)" strokeWidth="1" markerEnd="url(#ar)"/>
      <path d="M 250 110 L 290 70"  stroke="var(--accent)" strokeWidth="0.8" opacity="0.7"/>
      <path d="M 250 110 L 290 110" stroke="var(--accent)" strokeWidth="0.8" opacity="0.85"/>
      <path d="M 250 110 L 290 150" stroke="var(--accent)" strokeWidth="0.8" opacity="0.7"/>
      <defs>
        <marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L 10 5 L 0 10 z" fill="var(--accent)"/>
        </marker>
      </defs>
    </g>
  </Frame>
);

const ProjectFigure = ({ id }) => {
  if (id === "qubots") return <QubotsFigure/>;
  if (id === "autoresearch") return <AutoresearchFigure/>;
  if (id === "rastion") return <RastionFigure/>;
  if (id === "opt-agents") return <OptAgentsFigure/>;
  if (id === "or-mcp") return <OrMcpFigure/>;
  return null;
};

window.ProjectFigure = ProjectFigure;
