// Page components — project-led portfolio. Single-viewport pages.

const Pill = ({ children }) => <span className="pill">{children}</span>;

const PageHeader = ({ kicker, title, sub }) => (
  <header className="page-head">
    <div className="ph-kicker">{kicker}</div>
    <h1 className="ph-title">{title}</h1>
    {sub && <p className="ph-sub">{sub}</p>}
  </header>
);

// Expandable abstract block
const Expandable = ({ label = "Abstract", children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`expandable ${open ? "open" : ""}`}>
      <button className="ex-toggle" onClick={() => setOpen(!open)}>
        <span className="ex-mark">{open ? "−" : "+"}</span>
        <span>{label}</span>
      </button>
      {open && <div className="ex-body">{children}</div>}
    </div>
  );
};

// Decorative SVG glyphs that sit behind each home paragraph
const ParaGlyph = ({ kind }) => {
  if (kind === "bloch") {
    return (
      <svg className="para-glyph" viewBox="0 0 240 240" aria-hidden="true">
        <circle cx="120" cy="120" r="92" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55"/>
        <ellipse cx="120" cy="120" rx="92" ry="30" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.4"/>
        <ellipse cx="120" cy="120" rx="30" ry="92" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.4"/>
        <line x1="120" y1="28" x2="120" y2="212" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
        <line x1="28" y1="120" x2="212" y2="120" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
        <line x1="120" y1="120" x2="184" y2="60" stroke="currentColor" strokeWidth="1.6" opacity="1"/>
        <circle cx="184" cy="60" r="3.4" fill="currentColor"/>
        <text x="190" y="54" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="currentColor" opacity="0.85">|ψ⟩</text>
      </svg>
    );
  }
  if (kind === "forge") {
    return (
      <svg className="para-glyph" viewBox="0 0 240 240" aria-hidden="true">
        <rect x="18" y="58" width="74" height="124" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.55"/>
        <line x1="26" y1="74" x2="80" y2="74" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
        <line x1="26" y1="92" x2="68" y2="92" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
        <line x1="26" y1="106" x2="80" y2="106" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
        <line x1="26" y1="120" x2="60" y2="120" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
        <line x1="26" y1="134" x2="76" y2="134" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
        <line x1="26" y1="148" x2="50" y2="148" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
        <line x1="26" y1="162" x2="70" y2="162" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
        <rect x="148" y="58" width="74" height="124" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.55"/>
        <text x="156" y="80" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="currentColor" opacity="0.85">$ run</text>
        <text x="156" y="98" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor" opacity="0.55">→ ok</text>
        <line x1="156" y1="112" x2="214" y2="112" stroke="currentColor" strokeWidth="0.5" opacity="0.45"/>
        <line x1="156" y1="126" x2="200" y2="126" stroke="currentColor" strokeWidth="0.5" opacity="0.45"/>
        <line x1="156" y1="140" x2="208" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.45"/>
        <line x1="156" y1="154" x2="190" y2="154" stroke="currentColor" strokeWidth="0.5" opacity="0.45"/>
        <path d="M92 120 C108 120, 132 120, 148 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.95"/>
        <polygon points="146,116 154,120 146,124" fill="currentColor"/>
      </svg>
    );
  }
  // network
  return (
    <svg className="para-glyph" viewBox="0 0 240 240" aria-hidden="true">
      <circle cx="120" cy="120" r="86" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35"/>
      <circle cx="120" cy="120" r="56" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
      <circle cx="120" cy="120" r="28" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const x = 120 + Math.cos(a) * 86;
        const y = 120 + Math.sin(a) * 86;
        return <circle key={`n${i}`} cx={x} cy={y} r={i % 3 === 0 ? 4 : 2.6} fill="currentColor" opacity={i % 3 === 0 ? 1 : 0.7}/>;
      })}
      {[[0,3],[1,4],[2,5],[3,6],[4,7],[0,5]].map(([a,b], i) => {
        const aa = (a / 8) * Math.PI * 2 - Math.PI / 2;
        const bb = (b / 8) * Math.PI * 2 - Math.PI / 2;
        return <line key={`e${i}`}
          x1={120 + Math.cos(aa) * 86} y1={120 + Math.sin(aa) * 86}
          x2={120 + Math.cos(bb) * 86} y2={120 + Math.sin(bb) * 86}
          stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>;
      })}
      <circle cx="120" cy="120" r="4" fill="currentColor"/>
    </svg>
  );
};

const PARA_GLYPHS = ["bloch", "forge", "network"];

// ── HOME ──────────────────────────────────────────────────────────────────
const Home = ({ data, go }) => (
  <div className="page page-home" data-screen-label="Home">
    <div className="hero-grid">
      <div className="hero-col">
        <div className="hero-prose hero-prose-rich">
          <div className="para para-name">
            <p className="hero-name-lead">Ioannis D. Leonidas</p>
          </div>
          <div className="para para-lead">
            <p className="hero-lead">
              Quantum scientist <span className="amp">&amp;</span> <em>engineer</em>.
            </p>
          </div>

          <div className="para">
            <p className="hero-sub">
              I work somewhere between{" "}
              <span className="hl">quantum computing</span>,{" "}
              <span className="hl">AI systems</span>,{" "}
              <span className="hl">GPUs</span>, and{" "}
              <span className="hl">optimization problems</span> where the math is
              not just pretty but has to survive contact with{" "}
              <em>business logic</em>.
            </p>
          </div>

          <div className="para para-final">
            <p className="hero-sub">
              I'm interested in the point where{" "}
              <span className="hl">QPUs</span> bring the{" "}
              <em>weird physics</em>,{" "}
              <span className="hl">GPUs</span> bring the{" "}
              <em>brute force</em>, and{" "}
              <span className="hl-strong">software makes them useful</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-spacer" />
    </div>
  </div>
);

// ── PROJECTS ──────────────────────────────────────────────────────────────
const ProjectsPage = ({ data }) => {
  const [active, setActive] = React.useState(data.projects[0].id);
  const project = data.projects.find(p => p.id === active) || data.projects[0];
  return (
    <div className="page page-fit" data-screen-label="Open source">
      <header className="page-head compact">
        <h1 className="ph-title sm">Open source</h1>
      </header>
      <div className="work-layout compact no-filter">
        <aside className="work-sidebar">
          <ul className="work-list">
            {data.projects.map(p => (
              <li key={p.id}>
                <button
                  className={`work-item ${active===p.id?"active":""}`}
                  onClick={()=>setActive(p.id)}>
                  <span className="wi-year">{p.year}</span>
                  <span className="wi-name">{p.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <article className="work-detail">
          <div className="wd-body">
            <div className="wd-top">
              <span className="wd-kind">{project.kind}</span>
              <span className="wd-access open">Open source</span>
            </div>
            <h2 className="wd-name">{project.name}</h2>
            <p className="wd-tag">{project.tagline}</p>
            <p className="wd-desc">{project.body}</p>
            {project.stack && project.stack.length > 0 && (
              <div className="wd-stack">
                <span className="wd-stack-label">Stack</span>
                <ul className="wd-stack-list">
                  {project.stack.map(s => <li key={s} className="wd-chip">{s}</li>)}
                </ul>
              </div>
            )}
            {project.url ? (
              <a className="wd-link" href={project.url} target="_blank" rel="noreferrer">
                <span>↗</span><span>{project.link}</span>
              </a>
            ) : (
              <div className="wd-link disabled">
                <span>○</span><span>{project.link}</span>
              </div>
            )}
            <div className="wd-figure compact">
              <ProjectFigure id={project.id} />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

// ── WRITING ──────────────────────────────────────────────────────────────
const WritingPage = ({ data }) => {
  const items = [
    ...data.publications.map(p => ({
      id: p.id,
      kind: "Publication",
      year: p.year,
      title: p.title,
      tag: p.venue,
      authors: p.authors,
      meta: `doi:${p.doi}`,
      abstract: p.abstract,
      linkLabel: `doi.org/${p.doi}`,
      url: p.url,
      group: "publications",
    })),
    ...data.theses.map(t => ({
      id: t.id,
      kind: t.kind,
      year: t.year,
      title: t.title,
      tag: t.org,
      authors: null,
      meta: null,
      abstract: t.abstract,
      linkLabel: "Read at TUC library",
      url: t.url,
      group: "theses",
    })),
  ];
  const [active, setActive] = React.useState(items[0].id);
  const sel = items.find(i => i.id === active) || items[0];
  const pubs = items.filter(i => i.group === "publications");
  const theses = items.filter(i => i.group === "theses");

  const SidebarList = ({ rows }) => (
    <ul className="work-list">
      {rows.map(it => (
        <li key={it.id}>
          <button
            className={`work-item ${active === it.id ? "active" : ""}`}
            onClick={() => setActive(it.id)}>
            <span className="wi-year">{it.year}</span>
            <span className="wi-name">{it.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="page page-fit" data-screen-label="Publications">
      <header className="page-head compact">
        <h1 className="ph-title sm">Publications</h1>
      </header>
      <div className="work-layout compact no-filter">
        <aside className="work-sidebar pubs-sidebar">
          <div className="work-group">
            <div className="work-group-title">Publications</div>
            <SidebarList rows={pubs} />
          </div>
          <div className="work-group">
            <div className="work-group-title">Theses</div>
            <SidebarList rows={theses} />
          </div>
          <div className="work-group dist-group">
            <div className="work-group-title">Distinctions</div>
            <ul className="link-list">
              {data.links.map((l, i) => (
                <li key={i}>
                  <a href={l.url} target="_blank" rel="noreferrer" className="link-row">
                    <span className="lr-arrow">↗</span>
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="work-detail">
          <div className="wd-body">
            <div className="wd-top">
              <span className="wd-kind">{sel.kind}</span>
              {sel.meta && <span>{sel.meta}</span>}
            </div>
            <h2 className="wd-name">{sel.title}</h2>
            <p className="wd-tag">
              {sel.authors && <span className="wd-authors-inline">{sel.authors} · </span>}
              {sel.tag}
            </p>
            <p className="wd-desc">{sel.abstract}</p>
            <a className="wd-link" href={sel.url} target="_blank" rel="noreferrer">
              <span>↗</span><span>{sel.linkLabel}</span>
            </a>
            <div className="wd-figure compact">
              <PublicationFigure id={sel.id} />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

// ── CONTACT ──────────────────────────────────────────────────────────────
const ContactPage = ({ data }) => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="page page-fit page-center" data-screen-label="Contact">
      <header className="page-head compact">
        <h1 className="ph-title sm">Contact</h1>
      </header>
      <div className="contact-meta">
        <button className="contact-row" onClick={copy}>
          <span className="cr-label">email</span>
          <span className="cr-value">{data.email}</span>
          <span className="cr-action">{copied ? "✓ copied" : "copy"}</span>
        </button>
        <a className="contact-row" href={`https://github.com/${data.github}`} target="_blank" rel="noreferrer">
          <span className="cr-label">github</span>
          <span className="cr-value">{data.github}</span>
          <span className="cr-action">↗</span>
        </a>
        <a className="contact-row" href={data.linkedin} target="_blank" rel="noreferrer">
          <span className="cr-label">linkedin</span>
          <span className="cr-value">{data.linkedinHandle}</span>
          <span className="cr-action">↗</span>
        </a>
        <a className="contact-row" href={data.scholar} target="_blank" rel="noreferrer">
          <span className="cr-label">scholar</span>
          <span className="cr-value">{data.scholarHandle}</span>
          <span className="cr-action">↗</span>
        </a>
      </div>
    </div>
  );
};

Object.assign(window, {
  Home, ProjectsPage, WritingPage, ContactPage, PageHeader,
});
