// Portfolio data — single source of truth
const PORTFOLIO = {
  name: "Ioannis D. Leonidas",
  short: "I.D.L.",
  role: "Quantum Computing · Optimization · AI",
  location: "Thessaloniki, Greece",
  coords: {
    lat: "40.640° N",
    lng: "22.943° E"
  },
  email: "gleonidas303@gmail.com",
  github: "leonidas1312",
  linkedin: "https://www.linkedin.com/in/ioannis-d-leonidas-712bba275/",
  linkedinHandle: "ioannis-d-leonidas",
  about: "Quantum scientist and engineer. I design hybrid quantum–classical algorithms for real-world optimization, scheduling and routing problems — and ship them as deployable software. My work sits at the intersection of variational quantum algorithms, reinforcement learning and applied optimization.",
  now: ["Leading Quantum–AI development at K3Y Labs under Horizon Europe.", "Building Qubots — an open framework for collaborative optimization research.", "Exploring qubit-efficient methods for industrial routing and scheduling."],
  experience: [{
    year: "2025 —",
    role: "Senior AI Engineer",
    org: "K3Y Labs",
    where: "Greece",
    url: "https://k3y.bg",
    logo: "k3y",
    body: "Lead Quantum–AI development across EU-funded Horizon Europe programs. Design ML algorithms for anomaly and intrusion detection; introduce hybrid quantum–classical optimization and QML modules into the AI stack.",
    tags: ["Horizon Europe", "QML", "Anomaly detection", "Hybrid optimization"]
  }, {
    year: "2022 — 2024",
    role: "Quantum Optimization Scientist",
    org: "AngelQ",
    where: "Remote",
    url: "https://angelq.io",
    logo: "angelq",
    body: "Built a Quantum Optimization-as-a-Service framework for problem-independent optimization via proprietary hybrid algorithms. Applied research on routing, scheduling and resource allocation using variational methods, metaheuristics and quantum-inspired solvers. Deployed experiments on NISQ devices via Qiskit, PennyLane, AWS Braket and IonQ.",
    tags: ["QOaaS", "Variational", "QSVM", "QRL", "NISQ"]
  }, {
    year: "2022",
    role: "Research Fellow",
    org: "Centre for Quantum Technologies (CQT)",
    where: "Singapore",
    url: "https://www.cqt.sg",
    logo: "cqt",
    body: "MSc thesis collaboration with CQT scientists on qubit-efficient variational quantum algorithms for large-scale combinatorial optimization, focused on the Vehicle Routing Problem with Time Windows (VRPTW). Published in Advanced Quantum Technologies (Wiley).",
    tags: ["VRPTW", "Qubit-efficient", "Wiley publication"]
  }, {
    year: "2021 — 2022",
    role: "Researcher",
    org: "Technical University of Crete",
    where: "Greece",
    url: "https://www.tuc.gr/en",
    logo: "tuc",
    body: "Horizon EU Quantum Computational Fluid Dynamics (QCFD) project — developed and benchmarked VQE, QAOA and qubit-efficient heuristics for PDE-based optimization. Teaching assistant for Quantum Mechanics and Physics, mentoring students on Qiskit-based optimization and quantum ML.",
    tags: ["VQE", "QAOA", "QCFD", "Teaching"]
  }],
  projects: [{
    id: "qubots",
    year: "2025",
    name: "Qubots Framework",
    tagline: "HuggingFace meets n8n — for optimization.",
    body: "Open-source framework where optimization problems and solvers are reusable, shareable artifacts. Compose hybrid pipelines visually; benchmark across classical, quantum and quantum-inspired backends.",
    stack: ["Python", "PennyLane", "Qiskit", "D-Wave Ocean"],
    link: "github.com/leonidas1312/qubots",
    url: "https://github.com/leonidas1312/qubots",
    kind: "framework",
    access: "open"
  }, {
    id: "vrptw",
    year: "2024",
    name: "Qubit-Efficient VRPTW",
    tagline: "Vehicle routing on NISQ hardware.",
    body: "Variational quantum algorithms for the Vehicle Routing Problem with Time Windows, using sub-linear qubit encodings. Benchmarked across IBM, IonQ and simulator backends. Published in Advanced Quantum Technologies.",
    stack: ["Qiskit", "AWS Braket", "IonQ"],
    link: "doi.org/10.1002/qute.202300309",
    url: "https://doi.org/10.1002/qute.202300309",
    kind: "research",
    access: "open"
  }, {
    id: "qoaas",
    year: "2023",
    name: "QOaaS Engine",
    tagline: "Optimization-as-a-Service.",
    body: "Problem-independent solver service combining variational quantum algorithms, metaheuristics and quantum-inspired methods behind a unified API. Used internally for routing, scheduling and resource allocation studies.",
    stack: ["Python", "PennyLane", "Bayesian Opt"],
    link: "AngelQ · proprietary",
    kind: "system",
    access: "closed"
  }, {
    id: "qrl",
    year: "2023",
    name: "Quantum Recommender",
    tagline: "QSVM-driven recommendation prototype.",
    body: "Recommendation system built on quantum support vector machines, with a quantum reinforcement learning policy for online ranking adjustment. Comparative study against classical baselines.",
    stack: ["PennyLane", "PyTorch"],
    link: "AngelQ · proprietary",
    kind: "research",
    access: "closed"
  }],
  publications: [{
    year: "2024",
    authors: "Leonidas, I.D. et al.",
    title: "Qubit Efficient Quantum Algorithms for the Vehicle Routing Problem on Noisy Intermediate-Scale Quantum Processors.",
    venue: "Advanced Quantum Technologies, Wiley",
    doi: "10.1002/qute.202300309",
    url: "https://doi.org/10.1002/qute.202300309"
  }],
  // Coverage / external links — playful name in UI
  links: [{
    label: "CQT Research Highlight — Vehicle routing, efficient qubits",
    url: "https://www.cqt.sg/highlight/2024-06-vehicle-routing-efficient-qubits/"
  }, {
    label: "TUC ECE Publication Announcement",
    url: "https://www.ece.tuc.gr/en/distinctions/item/publication-of-the-postgraduate-thesis-of-a-graduate-student-of-the-ece-school-in-a-high-level-international-research-journal"
  }],
  talks: [{
    year: "2025",
    what: "APS March Meeting",
    detail: "“Qubit-Efficient Optimization” — contributed talk.",
    url: "https://meetings-archive.aps.org/smt/2025/MAR-N14/5"
  }, {
    year: "2025",
    what: "Optimization4All",
    detail: "Guest speaker — “Qubots: Open source optimization framework”.",
    url: "https://github.com/leonidas1312/qubots"
  }, {
    year: "2022",
    what: "Quantum Future Academy",
    detail: "Greece Representative.",
    url: "https://info.quantentechnologien.de/public/a_27384_3j1WC/file/data/139_2022-05-09_QFA_Reminder_and_Information_on_QFA_schedule.pdf"
  }, {
    year: "2022",
    what: "TUC Scholarship of Excellence",
    detail: "Awarded by the Technical University of Crete.",
    url: "https://www.ece.tuc.gr/en/news/item/8719-tuc-scholarship-of-excellence-2022"
  }],
  education: [{
    year: "2021 — 2023",
    degree: "MSc, Electrical & Computer Engineering",
    org: "Technical University of Crete",
    thesis: "Qubit-Efficient Quantum Optimization in Routing & Scheduling.",
    links: [{
      label: "MSc Thesis (TUC DIAS)",
      url: "https://dias.library.tuc.gr/entities/publication/4f4fbb80-ad02-4eb0-b738-6ea9a191f27f"
    }, {
      label: "Published in Advanced Quantum Technologies",
      url: "https://doi.org/10.1002/qute.202300309"
    }, {
      label: "CQT Research Highlight",
      url: "https://www.cqt.sg/highlight/2024-06-vehicle-routing-efficient-qubits/"
    }]
  }, {
    year: "2014 — 2021",
    degree: "BSc + MEng, Electrical & Computer Engineering",
    org: "Technical University of Crete",
    thesis: "Quantum approximate optimization algorithms and applications.",
    links: [{
      label: "Diploma Thesis (TUC DIAS)",
      url: "https://dias.library.tuc.gr/entities/publication/d1b2167a-6f8b-4743-8b74-8f694f164ee4"
    }]
  }],
  openSource: {
    own: [{
      name: "qubots",
      tagline: "Visual workflow designer & runtime for optimization.",
      body: "Drag-and-drop interface plus Python / CLI tools to compose, share and execute optimization workflows. Modular AutoProblem / AutoOptimizer components, MCP-compatible AI-agent integration, Docker-based local dev environment. Apache 2.0, on PyPI.",
      url: "https://github.com/leonidas1312/qubots",
      repo: "leonidas1312/qubots",
      lang: "Python",
      topics: ["optimization", "workflow", "MCP", "framework"]
    }, {
      name: "rastion-hub",
      tagline: "Backend services for the Rastion platform.",
      body: "Python services powering the Rastion hub — component registry, execution orchestration, and the API surface that connects Qubots workflows to AI agents.",
      url: "https://github.com/leonidas1312/rastion-hub",
      repo: "leonidas1312/rastion-hub",
      lang: "Python",
      topics: ["platform", "registry", "API"]
    }, {
      name: "rastion",
      tagline: "Rastion platform — Python core.",
      body: "The Python side of Rastion: SDK + agent integrations that pair with the Qubots framework. Where optimization runs, AI agents and the hub meet.",
      url: "https://github.com/leonidas1312/rastion",
      repo: "leonidas1312/rastion",
      lang: "Python",
      topics: ["SDK", "agents", "optimization"]
    }, {
      name: "platform",
      tagline: "Web frontend for the Rastion platform.",
      body: "TypeScript web UI for browsing components, running workflows visually and inspecting results. Pairs with the rastion-hub backend.",
      url: "https://github.com/leonidas1312/platform",
      repo: "leonidas1312/platform",
      lang: "TypeScript",
      topics: ["web", "frontend", "workflows"]
    }, {
      name: "Rastion/rastion",
      tagline: "Rastion organization — main repo.",
      body: "The org-level home for Rastion. Where the public-facing surface of the project lives.",
      url: "https://github.com/Rastion/rastion",
      repo: "Rastion/rastion",
      lang: "TypeScript",
      topics: ["org", "platform"]
    }, {
      name: "or-mcp-tools",
      tagline: "MCP servers for operations research.",
      body: "A collection of Model Context Protocol servers giving AI assistants access to operations-research optimization tools — automatic tool selection and invocation from natural language.",
      url: "https://github.com/leonidas1312/or-mcp-tools",
      repo: "leonidas1312/or-mcp-tools",
      lang: "Python",
      topics: ["MCP", "operations-research", "AI-tools"]
    }, {
      name: "optimization-agents",
      tagline: "AI agents specialized for optimization tasks.",
      body: "Python implementations of agent loops that plan, configure and execute optimization runs — bridges between LLM reasoning and concrete solver invocations.",
      url: "https://github.com/leonidas1312/optimization-agents",
      repo: "leonidas1312/optimization-agents",
      lang: "Python",
      topics: ["agents", "LLM", "optimization"]
    }, {
      name: "autoresearch-or",
      tagline: "Autoresearch for TSP under fixed time budgets.",
      body: "Autoresearch experiments on the Travelling Salesman Problem — improving heuristics under a fixed time budget. Jupyter notebooks documenting the runs and results.",
      url: "https://github.com/leonidas1312/autoresearch-or",
      repo: "leonidas1312/autoresearch-or",
      lang: "Jupyter Notebook",
      topics: ["TSP", "heuristics", "autoresearch"]
    }, {
      name: "project-weaver",
      tagline: "Experimental TypeScript tooling.",
      body: "Side experiment around project scaffolding and component weaving — exploring patterns later folded back into the Rastion platform UI.",
      url: "https://github.com/leonidas1312/project-weaver",
      repo: "leonidas1312/project-weaver",
      lang: "TypeScript",
      topics: ["tooling", "experiment"]
    }, {
      name: "job-hunting",
      tagline: "Personal automation for the job search.",
      body: "Small utilities I built around tracking applications and parsing listings — a living scratchpad rather than a polished product.",
      url: "https://github.com/leonidas1312/job-hunting",
      repo: "leonidas1312/job-hunting",
      lang: "Python",
      topics: ["automation", "utilities"]
    }],
    contributions: [{
      name: "docs",
      tagline: "Documentation site for Rastion / Qubots.",
      body: "MDX-powered docs covering tutorials, API reference and best practices for the Qubots ecosystem. Published at docs.rastion.com.",
      url: "https://github.com/leonidas1312/docs",
      repo: "leonidas1312/docs",
      lang: "MDX",
      topics: ["docs", "tutorials", "MDX"]
    }, {
      name: "mintlify-docs",
      tagline: "Mintlify-themed documentation source.",
      body: "Companion docs source rendered through Mintlify — alternate presentation of the Qubots / Rastion reference material.",
      url: "https://github.com/leonidas1312/mintlify-docs",
      repo: "leonidas1312/mintlify-docs",
      lang: "MDX",
      topics: ["docs", "mintlify"]
    }, {
      name: "qubots (disouzam fork)",
      tagline: "Community fork of qubots.",
      body: "External fork of the Qubots framework — collaborated on issues and tracked downstream changes the maintainer surfaced from real-world usage.",
      url: "https://github.com/disouzam/qubots",
      repo: "disouzam/qubots",
      lang: "Python",
      topics: ["fork", "community", "qubots"]
    }]
  },
  reading: [{
    month: "Apr 2026",
    papers: [{
      title: "Provably efficient learning of phases of matter via dissipative evolutions",
      authors: "Onorati, Rouzé, França, Watson",
      venue: "arXiv:2311.07506",
      tag: "QML",
      note: "Sample-efficient learning bounds via Lindbladian dynamics — relevant for QSVM-style ansätze."
    }, {
      title: "Quantum policy iteration via amplitude estimation and Grover search",
      authors: "Wiedemann, Hein, Udluft, Mendl",
      venue: "arXiv:2206.04741",
      tag: "QRL",
      note: "Reading alongside Sutton & Barto — building intuition for QRL convergence."
    }]
  }, {
    month: "Mar 2026",
    papers: [{
      title: "Bench-marking the variational quantum eigensolver on the IonQ Aria QPU",
      authors: "Various",
      venue: "Phys. Rev. Applied",
      tag: "Benchmarks",
      note: "Useful baseline numbers for K3Y hardware-aware experiments."
    }, {
      title: "Hybrid Quantum Reinforcement Learning for Combinatorial Optimization",
      authors: "Cherrat et al.",
      venue: "arXiv:2305.07730",
      tag: "QRL",
      note: "Closest published work to the recommender prototype I built at AngelQ."
    }, {
      title: "On the practical usefulness of the Hardware-Efficient Ansatz",
      authors: "Leone et al.",
      venue: "Quantum 2024",
      tag: "Variational",
      note: "Sharp critique — informs Qubots benchmark suite design."
    }]
  }, {
    month: "Feb 2026",
    papers: [{
      title: "QAOA for combinatorial optimization: a unified perspective",
      authors: "Blekos et al.",
      venue: "Physics Reports",
      tag: "QAOA",
      note: "Excellent survey — borrowed framing for a Qubots tutorial."
    }, {
      title: "Tensor network contractions for #SAT and beyond",
      authors: "Gray, Kourtis",
      venue: "Quantum 2021",
      tag: "Tensor Nets",
      note: "Re-read — comparing against quantum-inspired baselines."
    }]
  }, {
    month: "Jan 2026",
    papers: [{
      title: "The complexity of NISQ",
      authors: "Chen, Cotler, Huang, Li",
      venue: "Nat. Commun. 2023",
      tag: "Theory",
      note: "Sets boundaries on what NISQ-era qubit-efficient methods can actually achieve."
    }, {
      title: "Solving routing problems with hybrid digital-analog quantum algorithms",
      authors: "Various",
      venue: "Quantum Sci. Technol.",
      tag: "Routing",
      note: "Comparing methodology to my VRPTW paper."
    }]
  }],
  interests: ["Quantum Optimization", "Hybrid Quantum–Classical Systems", "Quantum Machine Learning", "Variational Algorithms", "Tensor Network Models", "Quantum Reinforcement Learning", "Applied Quantum Optimization"],
  languages: [{
    name: "English",
    level: "C2 — Fluent"
  }, {
    name: "Greek",
    level: "Native"
  }],
  personal: ["Chess", "Football", "Running", "Hiking"]
};
window.PORTFOLIO = PORTFOLIO;