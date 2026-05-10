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

// ── PUBLICATION FIGURES ────────────────────────────────────────────────
// VRPTW · qubit-efficient encoding (2024 publication)
const VrptwQubitFigure = () => {
  const D = { x: 95, y: 110 };
  const routes = [
    { c: "#5b9bf2", nodes: [{x: 65, y: 50, l: "10"}, {x: 90, y: 38, l: "11"}, {x: 120, y: 55, l: "9"}] },
    { c: "#48b46b", nodes: [{x: 38, y: 92, l: "2"},  {x: 50, y: 130, l: "4"}, {x: 30, y: 152, l: "3"}] },
    { c: "#f29044", nodes: [{x: 122, y: 100, l: "5"}, {x: 138, y: 80, l: "6"}, {x: 152, y: 65, l: "7"}, {x: 138, y: 48, l: "8"}] },
    { c: "#e8c84d", nodes: [{x: 65, y: 156, l: "14"}, {x: 95, y: 168, l: "12"}, {x: 130, y: 148, l: "13"}] },
  ];

  const rows = [
    { txt: "{D,10,11,9,D}",  c: "#5b9bf2", n: 1, x: "x₀" },
    { txt: "{D,2,4,3,D}",    c: "#48b46b", n: 2, x: "x₁" },
    { txt: "{D,6,5,7,8,D}",  c: "#f29044", n: 3, x: "x₂" },
    { txt: "{D,14,12,13,D}", c: "#e8c84d", n: 4, x: "x₃" },
  ];

  return (
    <Frame label="VRPTW · QUBIT-EFFICIENT ENCODING">
      <g fontFamily="var(--f-mono)" fill="currentColor">
        {routes.map((r, i) => {
          const pts = [D, ...r.nodes, D];
          const d = pts.map((p, j) => `${j === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
          return <path key={`r${i}`} d={d} fill="none" stroke={r.c} strokeWidth="1.4" opacity="0.9"/>;
        })}
        {routes.map((r, i) => r.nodes.map((n, k) => (
          <g key={`n${i}-${k}`}>
            <circle cx={n.x} cy={n.y} r="6.5" fill="var(--bg)" stroke="currentColor" strokeWidth="0.7"/>
            <text x={n.x} y={n.y + 2.4} textAnchor="middle" fontSize="6.5">{n.l}</text>
          </g>
        )))}
        <circle cx={D.x} cy={D.y} r="6" fill="var(--accent)" stroke="var(--bg)" strokeWidth="1"/>
        <text x={D.x + 11} y={D.y + 2.5} fontSize="8" opacity="0.9">Depot</text>

        <line x1="195" y1="38" x2="195" y2="195" stroke="currentColor" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 4"/>

        <text x="215" y="46" fontSize="8.5" opacity="0.6">ROUTES → BINARY VARS</text>
        {rows.map((r, i) => (
          <g key={`row${i}`} transform={`translate(215, ${64 + i * 22})`}>
            <text x="0" y="9" fontSize="7.5" opacity="0.85">{r.txt}</text>
            <rect x="80" y="-2" width="50" height="14" fill={r.c} opacity="0.95" rx="1.5"/>
            <text x="105" y="8" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="600">Route {r.n}</text>
            <line x1="134" y1="5" x2="152" y2="5" stroke="var(--accent)" strokeWidth="0.9" markerEnd="url(#vrp-ar)"/>
            <text x="158" y="9" fontSize="9" fill="var(--accent)" fontWeight="500">{r.x}</text>
          </g>
        ))}

        <text x="215" y="172" fontSize="8" opacity="0.85">Optimal: x = [1,1,1,1]ᵀ</text>
        <text x="215" y="186" fontSize="7.5" opacity="0.55">x_i ∈ {`{0,1}`} · n qubits = log₂(N)+1</text>
      </g>
      <defs>
        <marker id="vrp-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L 10 5 L 0 10 z" fill="var(--accent)"/>
        </marker>
      </defs>
    </Frame>
  );
};

// MSc thesis · QUBO + minimal encoding + RL enhancement (2023)
const MscThesisFigure = () => (
  <Frame label="QUBO · MINIMAL ENCODING · RL ENHANCEMENT">
    <g fontFamily="var(--f-mono)" fill="currentColor">
      {/* QUBO matrix */}
      <g transform="translate(20, 46)">
        <rect width="60" height="46" fill="none" stroke="currentColor" strokeWidth="0.7"/>
        {Array.from({length: 5}).map((_, r) =>
          Array.from({length: 6}).map((_, c) => (
            <circle key={`m${r}-${c}`} cx={6 + c * 9.5} cy={6 + r * 8.5} r="1.6"
              fill={(r + c) % 3 === 0 ? "var(--accent)" : "currentColor"}
              opacity={(r+c)%3===0 ? 0.95 : 0.4}/>
          ))
        )}
        <text x="30" y="58" textAnchor="middle" fontSize="7.5" opacity="0.6">QUBO matrix</text>
      </g>

      <line x1="84" y1="69" x2="112" y2="69" stroke="var(--accent)" strokeWidth="1" markerEnd="url(#msc-ar)"/>

      {/* minimal encoding */}
      <g transform="translate(115, 42)">
        <rect width="105" height="58" fill="none" stroke="var(--accent)" strokeWidth="0.9"/>
        <text x="52" y="13" textAnchor="middle" fontSize="7" opacity="0.6">MINIMAL ENCODING</text>
        {["x₀|00⟩", "x₁|01⟩", "x₂|10⟩", "x₃|11⟩"].map((t, i) => (
          <text key={i} x={6 + i * 25} y="32" fontSize="7" fill="var(--accent)">{t}</text>
        ))}
        <text x="52" y="48" textAnchor="middle" fontSize="7" opacity="0.7">3 qubits · n_c = 4</text>
      </g>

      <line x1="223" y1="69" x2="248" y2="69" stroke="var(--accent)" strokeWidth="1" markerEnd="url(#msc-ar)"/>

      {/* QPU circuit */}
      <g transform="translate(252, 42)">
        <rect width="78" height="58" fill="none" stroke="currentColor" strokeWidth="0.7"/>
        <text x="39" y="13" textAnchor="middle" fontSize="7" opacity="0.6">CPU / QPU</text>
        {[0, 1, 2, 3].map(r => (
          <line key={r} x1="6" y1={22 + r * 7} x2="72" y2={22 + r * 7}
            stroke="currentColor" strokeWidth="0.4" opacity="0.45"/>
        ))}
        {[10, 24, 38, 52].map((x, i) => (
          <rect key={`g1${i}`} x={x} y={18 + (i % 2) * 7} width="6" height="6"
            fill="var(--accent)" opacity="0.85"/>
        ))}
        <rect x="60" y="18" width="6" height="13" fill="var(--accent)" opacity="0.55"/>
        <text x="39" y="52" textAnchor="middle" fontSize="6.5" opacity="0.65">θ → C_me(θ)</text>
      </g>

      {/* ADAM */}
      <g transform="translate(335, 42)">
        <rect width="50" height="58" fill="none" stroke="currentColor" strokeWidth="0.7"/>
        <text x="25" y="14" textAnchor="middle" fontSize="6.5" opacity="0.65">ADAM</text>
        <text x="25" y="32" textAnchor="middle" fontSize="9" fill="var(--accent)">min</text>
        <text x="25" y="46" textAnchor="middle" fontSize="6.5" opacity="0.55">C_me(θ)</text>
      </g>

      {/* updating feedback arrow */}
      <path d="M 360 100 C 360 116, 200 116, 200 102" fill="none" stroke="currentColor"
        strokeWidth="0.5" strokeDasharray="2 3" opacity="0.55"/>

      {/* RL bottom row header */}
      <g transform="translate(20, 122)">
        <text fontSize="7" opacity="0.65">GPU-ENHANCED RL SEARCH</text>
        <line x1="0" y1="6" x2="365" y2="6" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
      </g>

      {/* Exploration */}
      <g transform="translate(20, 138)">
        <rect width="100" height="56" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <text x="50" y="13" textAnchor="middle" fontSize="6.5" opacity="0.6">EXPLORATION</text>
        {[0.40, 0.72, 0.50, 0.92, 0.32, 0.62].map((h, i) => (
          <rect key={i} x={10 + i * 14} y={48 - h * 26} width="10" height={h * 26}
            fill="var(--accent)" opacity="0.7"/>
        ))}
        <text x="50" y="54" textAnchor="middle" fontSize="6" opacity="0.55">softmax(R) → sample</text>
      </g>

      {/* Exploitation */}
      <g transform="translate(135, 138)">
        <rect width="100" height="56" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <text x="50" y="13" textAnchor="middle" fontSize="6.5" opacity="0.6">EXPLOITATION</text>
        {[0.55, 0.46, 0.86, 0.40, 0.65, 0.52].map((h, i) => (
          <rect key={i} x={10 + i * 14} y={48 - h * 26} width="10" height={h * 26}
            fill={i === 2 ? "var(--accent)" : "currentColor"}
            opacity={i === 2 ? 0.95 : 0.4}/>
        ))}
        <text x="50" y="54" textAnchor="middle" fontSize="6" opacity="0.55">argmax UCB</text>
      </g>

      {/* Reward / leaderboard */}
      <g transform="translate(250, 138)">
        <rect width="135" height="56" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <text x="68" y="13" textAnchor="middle" fontSize="6.5" opacity="0.6">REWARD · LEADERBOARD</text>
        <path d="M 8 46 C 30 42, 50 30, 75 24 S 115 18, 128 17"
          fill="none" stroke="var(--accent)" strokeWidth="1.3"/>
        <line x1="8" y1="32" x2="128" y2="32" stroke="currentColor" strokeWidth="0.3"
          strokeDasharray="2 2" opacity="0.4"/>
        <text x="124" y="30" textAnchor="end" fontSize="5.5" opacity="0.55">99th pct</text>
        <text x="68" y="54" textAnchor="middle" fontSize="6" opacity="0.55">cost C ↓ over time</text>
      </g>

      <defs>
        <marker id="msc-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L 10 5 L 0 10 z" fill="var(--accent)"/>
        </marker>
      </defs>
    </g>
  </Frame>
);

// Diploma thesis · QAOA / Gibbs objective convergence (2021)
const DiplomaThesisFigure = () => {
  const X0 = 56, Y0 = 38, W = 290, H = 132;
  const xMax = 7, yMax = 2.7;
  const sx = (p) => X0 + ((p - 1) / (xMax - 1)) * W;
  const sy = (v) => Y0 + H - (v / yMax) * H;

  const curves = [
    { eta: "η=500",  c: "#3a3a3a", pts: [2.55, 1.10, 0.66, 0.36, 0.20, 0.10, 0.05] },
    { eta: "η=250",  c: "#d4b73a", pts: [2.50, 1.08, 0.60, 0.34, 0.19, 0.09, 0.045] },
    { eta: "η=100",  c: "#9e4ec9", pts: [2.50, 1.06, 0.58, 0.34, 0.19, 0.09, 0.04] },
    { eta: "η=50",   c: "#22cdd1", pts: [2.50, 1.06, 0.58, 0.34, 0.19, 0.09, 0.04] },
    { eta: "η=1",    c: "#3fb364", pts: [2.50, 1.04, 0.58, 0.32, 0.18, 0.08, 0.03] },
    { eta: "η=0.1",  c: "#e64545", pts: [1.95, 0.90, 0.50, 0.30, 0.16, 0.08, 0.03] },
    { eta: "η=0.01", c: "#3da6ff", pts: [0.42, 0.18, 0.13, 0.10, 0.07, 0.04, 0.02] },
  ];

  return (
    <Frame label="QAOA · GIBBS OBJECTIVE FUNCTION f(η)">
      <g fontFamily="var(--f-mono)" fill="currentColor">
        {/* gridlines */}
        {[0, 0.5, 1.0, 1.5, 2.0, 2.5].map((t, i) => (
          <line key={`yg${i}`} x1={X0} y1={sy(t)} x2={X0+W} y2={sy(t)}
            stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
        ))}
        {[1,2,3,4,5,6,7].map((t, i) => (
          <line key={`xg${i}`} x1={sx(t)} y1={Y0} x2={sx(t)} y2={Y0+H}
            stroke="currentColor" strokeWidth="0.3" opacity="0.12"/>
        ))}

        {/* axes */}
        <line x1={X0} y1={Y0} x2={X0} y2={Y0+H} stroke="currentColor" strokeWidth="0.7" opacity="0.65"/>
        <line x1={X0} y1={Y0+H} x2={X0+W} y2={Y0+H} stroke="currentColor" strokeWidth="0.7" opacity="0.65"/>

        {/* y ticks */}
        {[0, 0.5, 1.0, 1.5, 2.0, 2.5].map((t, i) => (
          <text key={`yt${i}`} x={X0 - 5} y={sy(t) + 3} textAnchor="end" fontSize="7" opacity="0.65">{t.toFixed(1)}</text>
        ))}
        {[1,2,3,4,5,6,7].map((t, i) => (
          <text key={`xt${i}`} x={sx(t)} y={Y0+H+11} textAnchor="middle" fontSize="7" opacity="0.65">{t}</text>
        ))}

        {/* axis labels */}
        <text x="14" y={Y0+H/2} textAnchor="middle"
          transform={`rotate(-90, 14, ${Y0+H/2})`}
          fontSize="7.5" opacity="0.75">Gibbs objective f(η)</text>
        <text x={X0+W/2} y={Y0+H+22} textAnchor="middle" fontSize="7.5" opacity="0.75">QAOA depth p</text>

        {/* curves */}
        {curves.map((c, ci) => {
          const d = c.pts.map((v, i) => `${i === 0 ? "M" : "L"} ${sx(i+1)} ${sy(v)}`).join(" ");
          return (
            <g key={`c${ci}`}>
              <path d={d} fill="none" stroke={c.c} strokeWidth="1.05"
                strokeDasharray="3 2.5" opacity="0.9"/>
              {c.pts.map((v, i) => (
                <polygon key={i}
                  points={`${sx(i+1)},${sy(v) - 3.2} ${sx(i+1) - 2.7},${sy(v) + 1.8} ${sx(i+1) + 2.7},${sy(v) + 1.8}`}
                  fill={c.c} opacity="0.95"/>
              ))}
            </g>
          );
        })}

        {/* legend */}
        <g transform={`translate(${X0+W-72}, ${Y0+6})`}>
          <rect x="-4" y="-4" width="76" height={curves.length * 11 + 6}
            fill="var(--bg)" stroke="currentColor" strokeWidth="0.4" opacity="0.85"/>
          {curves.map((c, i) => (
            <g key={`l${i}`} transform={`translate(0, ${i * 11})`}>
              <line x1="0" y1="3" x2="14" y2="3" stroke={c.c} strokeWidth="1.1" strokeDasharray="3 2.5"/>
              <polygon points="7,1 5,5 9,5" fill={c.c}/>
              <text x="20" y="5.5" fontSize="6.5" opacity="0.9">{c.eta}</text>
            </g>
          ))}
        </g>
      </g>
    </Frame>
  );
};

const PublicationFigure = ({ id }) => {
  if (id === "vrptw-pub-2024") return <VrptwQubitFigure/>;
  if (id === "msc-thesis-2023") return <MscThesisFigure/>;
  if (id === "diploma-thesis-2021") return <DiplomaThesisFigure/>;
  return null;
};

window.ProjectFigure = ProjectFigure;
window.PublicationFigure = PublicationFigure;
