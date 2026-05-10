// Portfolio data — public, project-led. No CV-shaped fields.
const PORTFOLIO = {
  name: "Ioannis D. Leonidas",
  short: "I.D.L.",
  role: "Quantum Computing · Optimization · AI",
  location: "Thessaloniki, Greece",
  coords: { lat: "40.640° N", lng: "22.943° E" },
  email: "gleonidas303@gmail.com",
  github: "leonidas1312",
  linkedin: "https://www.linkedin.com/in/ioannis-d-leonidas-712bba275/",
  linkedinHandle: "ioannis-d-leonidas",
  scholar: "https://scholar.google.com/citations?user=im6eij8AAAAJ&hl=en",
  scholarHandle: "Ioannis D. Leonidas",

  about:
    "Quantum scientist and engineer.\n\nI work somewhere between quantum computing, AI systems, GPUs, and optimization problems where the math is not just pretty but has to survive contact with business logic.\n\nBasically: I like research-grade ideas, but I care even more about making them run.",

  threads: [
    { tag: "Quantum optimization", body: "Variational + qubit-efficient methods for routing, scheduling, allocation." },
    { tag: "Hybrid systems",       body: "Pipelines that mix classical, quantum and quantum-inspired solvers behind one API." },
    { tag: "Open frameworks",      body: "Tooling that lets researchers and engineers actually share solvers and problems." },
    { tag: "AI for OR",            body: "LLM agents and MCP servers that drive operations-research tools end-to-end." },
  ],

  projects: [
    {
      id: "autoresearch",
      year: "2026",
      name: "autoresearch-or",
      tagline: "TSP heuristics under fixed time budgets.",
      body:
        "Inspired by karpathy/autoresearch. The basic idea is to let the agent improve a fixed benchmarked solver loop by editing optimize.py: for each benchmark instance, it can tune or rewrite the solver logic used for that instance, and it can also reallocate slices of a single total run budget across the instances in the tier to drive the aggregate score down. Three benchmark sizes are considered — small, medium, and large — built from TSPLIB95 and the University of Waterloo TSP data collection. For small the experiments found the optimal known tour in 4 out of 5 instances; medium and large are still largely open work.",
      stack: ["Python"],
      link: "github.com/leonidas1312/autoresearch-or",
      url: "https://github.com/leonidas1312/autoresearch-or",
      kind: "research",
    },
    {
      id: "qubots",
      year: "2026",
      name: "Qubots",
      tagline: "An open framework for collaborative optimization.",
      body:
        "Open framework where optimization problems and solvers are reusable, shareable artifacts. Compose hybrid pipelines visually; benchmark across classical, quantum and quantum-inspired backends. The goal is to make swapping a solver as cheap as swapping a model in scikit-learn, so the comparison is the contribution. Apache 2.0, on PyPI.",
      stack: ["Python"],
      link: "github.com/leonidas1312/qubots",
      url: "https://github.com/leonidas1312/qubots",
      kind: "framework",
    },
    {
      id: "rastion",
      year: "2025",
      name: "Rastion",
      tagline: "Hub & runtime for Qubots workflows.",
      body:
        "Backend services powering the Rastion hub — component registry, execution orchestration, and the API surface that connects Qubots workflows to AI agents. Designed so that publishing a new solver, kicking off a benchmark, or wiring an agent into the pipeline are all the same shape of operation against the same registry.",
      stack: ["Python", "TypeScript"],
      link: "github.com/leonidas1312/rastion-hub",
      url: "https://github.com/leonidas1312/rastion-hub",
      kind: "platform",
    },
    {
      id: "opt-agents",
      year: "2025",
      name: "optimization-agents",
      tagline: "AI agents specialised for optimization.",
      body:
        "Agent loops that plan, configure and execute optimization runs — bridges between LLM reasoning and concrete solver invocations. The agent picks a solver, sets parameters, reads back the result, and decides whether to refine, retry, or stop, with the whole trace kept inspectable instead of hidden behind a black box.",
      stack: ["Python"],
      link: "github.com/leonidas1312/optimization-agents",
      url: "https://github.com/leonidas1312/optimization-agents",
      kind: "tooling",
    },
    {
      id: "or-mcp",
      year: "2025",
      name: "or-mcp-tools",
      tagline: "MCP servers for operations research.",
      body:
        "Model Context Protocol servers that give AI assistants access to OR tooling — automatic tool selection and invocation from natural language. Each tool exposes a typed contract the model can reason about, so the assistant fails honestly when a problem is out of scope rather than confidently producing the wrong call.",
      stack: ["Python"],
      link: "github.com/leonidas1312/or-mcp-tools",
      url: "https://github.com/leonidas1312/or-mcp-tools",
      kind: "tooling",
    },
  ],

  publications: [
    {
      id: "vrptw-pub-2024",
      year: "2024",
      authors: "Leonidas, I.D. et al.",
      title:
        "Qubit Efficient Quantum Algorithms for the Vehicle Routing Problem on Noisy Intermediate-Scale Quantum Processors.",
      venue: "Advanced Quantum Technologies, Wiley",
      doi: "10.1002/qute.202300309",
      url: "https://doi.org/10.1002/qute.202300309",
      abstract:
        "The vehicle routing problem with time windows (VRPTW) is a common optimization problem faced within the logistics industry. In this work, the use of a previously-introduced qubit encoding scheme is explored to reduce the number of qubits, to evaluate the effectiveness of Noisy Intermediate-Scale Quantum (NISQ) devices when applied to industry relevant optimization problems. A quantum variational approach is applied to a testbed of multiple VRPTW instances ranging from 11 to 3964 routes. These intances are formulated as quadratic unconstrained binary optimization (QUBO) problems based on realistic shipping scenarios. The results are compared with standard binary-to-qubit mappings after executing on simulators as well as various quantum hardware platforms, including IBMQ, AWS (Rigetti), and IonQ. These results are benchmarked against the classical solver, Gurobi. The approach can find approximate solutions to the VRPTW comparable to those obtained from quantum algorithms using the full encoding, despite the reduction in qubits required. These results suggest that using the encoding scheme to fit larger problem sizes into fewer qubits is a promising step in using NISQ devices to find approximate solutions for industry-based optimization problems, although additional resources are still required to eke out the performance from larger problem sizes.",
    },
  ],

  theses: [
    {
      id: "msc-thesis-2023",
      year: "2023",
      kind: "MSc Thesis",
      title: "Qubit-Efficient Quantum Optimization in Routing & Scheduling.",
      org: "Technical University of Crete · in collaboration with the Centre for Quantum Technologies (CQT), Singapore",
      url: "https://dias.library.tuc.gr/entities/publication/4f4fbb80-ad02-4eb0-b738-6ea9a191f27f",
      abstract:
        "This thesis presents a novel approach for solving route and scheduling problems of the Quadratic Unconstrained Binary Optimization (QUBO) type using a novel quantum algorithm developed with collaborators at the Centre for Quantum Technologies in Singapore. The algorithm allows the mapping of classical binary variables to log2(N) + 1 qubits allowing for implementation of industrial level problems in near term quantum computers. We start the work by attacking a problem from the shipping industry known as the Vehicle Routing Problem with Time Windows (VRPTW), which we first cast in QUBO format. We then study how to adapt the qubit efficient algorithm to the problem at hand for different parameter regimes and constraints and design the relevant quantum circuits. We run the circuits on simulators first and pick the optimal ones to implement on real quantum computers on the cloud using superconducting and ion based qubits from provided by AWS (IONQ, Riggetti) and IBMQ. We demonstrate that is possible to solve problem instances of 128 and 3964 classical variables using only 8 and 13 qubits, well beyond capabilities of standard approaches based on the quantum approximate optimization algorithm (QAOA). We benchmark our results with the standard binary-to-qubit mappings used in QAOA and standard commercial solvers such as Gurobi find excellent agreement. Next, we introduce a novel reinforcement learning (RL) enhancement algorithm that can be used on top of our qubit efficient encoding to further enhance the quality of solutions obtained. In the final two chapters, we formulate as QUBO and then solve two more optimization problems from the aviation industry, namely the Tail Assignment Problem (TAP) and the Flight Gate Assignment (FGA) to test the effectiveness of the enhanced algorithm in tackling problems up to 25000 classical variables. Our simulator results show that using the enhanced RL pipeline one can find solutions belonging to the top 1% of the solution space.",
    },
    {
      id: "diploma-thesis-2021",
      year: "2021",
      kind: "Diploma Thesis",
      title: "Quantum approximate optimization algorithms and applications.",
      org: "Technical University of Crete",
      url: "https://dias.library.tuc.gr/entities/publication/d1b2167a-6f8b-4743-8b74-8f694f164ee4",
      abstract:
        "In this thesis we start by defining the basic components that bring together a quantum circuit. We explain basic gates, the concept of entanglement and why these are important for the construction of quantum algorithms. Then we proceed by analyzing two basic quantum algorithms (Deutsch-Josza and Grover's algorithms), which are the earliest in quantum computing and illustrate the notion of a quantum speed up. Next, we analyse the basic approaches for quantum optimization, including the notions of quantum annealing and adiabatic quantum computing, and analyze the first main algorithm of this thesis which is the Quantum Approximate Optimization Algorithm (QAOA). We also introduce and explain the Variational Quantum Eigensolver (VQE) and its hardware efficient version, which does not require specific gates decomposition and compare it with QAOA on the context of solving MAXCUT problems. In the final part, we analyze QAOA on a more industrial optimization setting, and solve instances of the Tail Assignment Problem for assigning planes in different routes. For this problem we test QAOA using the conventional method of minimizing the expectation value of the cost Hamiltonian and discuss the results. Finally, we also apply solve the problem by an another method based on minimizing the Gibbs objective function where we see improvements in the success probability. We analyse the inner workings of the algorithms, discuss the results and compare the various methods for different problem sizes and instances. We run our quantum algorithms in simulators, with noise and ideal ones, as well as on and prototype quantum hardware available in the cloud in IBM Q and analyze the performance for different problem sizes and qubit numbers.",
    },
  ],

  links: [
    {
      label: "CQT Research Highlight — Vehicle routing, efficient qubits",
      url: "https://www.cqt.sg/highlight/2024-06-vehicle-routing-efficient-qubits/",
    },
    {
      label: "TUC ECE — Publication announcement",
      url: "https://www.ece.tuc.gr/en/distinctions/item/publication-of-the-postgraduate-thesis-of-a-graduate-student-of-the-ece-school-in-a-high-level-international-research-journal",
    },
  ],
};

window.PORTFOLIO = PORTFOLIO;
