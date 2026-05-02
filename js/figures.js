// Rich SVG figures used as project "screenshots".

const QubotsFigure = () => {
  // Token classes: kw=keyword, str=string, fn=function, var=variable, com=comment
  const Tok = ({
    k,
    children
  }) => /*#__PURE__*/React.createElement("span", {
    className: `tk tk-${k}`
  }, children);
  const lines = [/*#__PURE__*/React.createElement("span", {
    key: "l1"
  }, /*#__PURE__*/React.createElement(Tok, {
    k: "kw"
  }, "from"), " ", /*#__PURE__*/React.createElement(Tok, {
    k: "mod"
  }, "qubots"), " ", /*#__PURE__*/React.createElement(Tok, {
    k: "kw"
  }, "import"), " ", /*#__PURE__*/React.createElement(Tok, {
    k: "cls"
  }, "AutoProblem"), ", ", /*#__PURE__*/React.createElement(Tok, {
    k: "cls"
  }, "AutoOptimizer")), /*#__PURE__*/React.createElement("span", {
    key: "l2"
  }, "\xA0"), /*#__PURE__*/React.createElement("span", {
    key: "l3"
  }, /*#__PURE__*/React.createElement(Tok, {
    k: "var"
  }, "problem"), "   ", /*#__PURE__*/React.createElement(Tok, {
    k: "op"
  }, "="), " ", /*#__PURE__*/React.createElement(Tok, {
    k: "cls"
  }, "AutoProblem"), ".", /*#__PURE__*/React.createElement(Tok, {
    k: "fn"
  }, "from_repo"), "(", /*#__PURE__*/React.createElement(Tok, {
    k: "str"
  }, "\"examples/one_max_problem\""), ")"), /*#__PURE__*/React.createElement("span", {
    key: "l4"
  }, /*#__PURE__*/React.createElement(Tok, {
    k: "var"
  }, "optimizer"), " ", /*#__PURE__*/React.createElement(Tok, {
    k: "op"
  }, "="), " ", /*#__PURE__*/React.createElement(Tok, {
    k: "cls"
  }, "AutoOptimizer"), ".", /*#__PURE__*/React.createElement(Tok, {
    k: "fn"
  }, "from_repo"), "(", /*#__PURE__*/React.createElement(Tok, {
    k: "str"
  }, "\"examples/random_search\""), ")"), /*#__PURE__*/React.createElement("span", {
    key: "l5"
  }, "\xA0"), /*#__PURE__*/React.createElement("span", {
    key: "l6"
  }, /*#__PURE__*/React.createElement(Tok, {
    k: "var"
  }, "result"), "    ", /*#__PURE__*/React.createElement(Tok, {
    k: "op"
  }, "="), " ", /*#__PURE__*/React.createElement(Tok, {
    k: "var"
  }, "optimizer"), ".", /*#__PURE__*/React.createElement(Tok, {
    k: "fn"
  }, "optimize"), "(", /*#__PURE__*/React.createElement(Tok, {
    k: "var"
  }, "problem"), ")"), /*#__PURE__*/React.createElement("span", {
    key: "l7"
  }, /*#__PURE__*/React.createElement(Tok, {
    k: "fn"
  }, "print"), "(", /*#__PURE__*/React.createElement(Tok, {
    k: "var"
  }, "result"), ".best_value, ", /*#__PURE__*/React.createElement(Tok, {
    k: "var"
  }, "result"), ".best_solution)")];
  return /*#__PURE__*/React.createElement("div", {
    className: "code-window"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-chrome"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-dot cw-dot--r"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cw-dot cw-dot--y"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cw-dot cw-dot--g"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cw-title"
  }, "qubots \u2014 example.py"), /*#__PURE__*/React.createElement("span", {
    className: "cw-lang"
  }, "PY")), /*#__PURE__*/React.createElement("pre", {
    className: "cw-body"
  }, /*#__PURE__*/React.createElement("code", null, lines.map((line, i) => /*#__PURE__*/React.createElement("span", {
    className: "cw-line",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-ln"
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    className: "cw-code"
  }, line))))), /*#__PURE__*/React.createElement("div", {
    className: "cw-output"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-prompt"
  }, "\u203A"), /*#__PURE__*/React.createElement("span", {
    className: "cw-out-text"
  }, "20  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]")));
};
const VRPFigure = () => /*#__PURE__*/React.createElement("div", {
  className: "fig-image-wrap"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/vrptw-figure.png",
  alt: "VRPTW mapping to a quantum optimization problem",
  className: "fig-image"
}));
const QOaaSFigure = () => {
  const curves = [{
    d: "M 60,40 L 69,55 L 78,72 L 87,80 L 96,90 L 105,98 L 114,108 L 123,116 L 132,124 L 141,130 L 150,138 L 159,144 L 168,148 L 177,152 L 186,158 L 195,162 L 204,168 L 213,172 L 222,174 L 231,176 L 240,178 L 249,180 L 258,180 L 267,182 L 276,184 L 285,184 L 294,186 L 303,186 L 312,186 L 321,188 L 330,188 L 339,188 L 348,190 L 357,190 L 366,190",
    color: "var(--accent)",
    label: "Quantum hybrid"
  }, {
    d: "M 60,40 L 69,50 L 78,62 L 87,72 L 96,82 L 105,90 L 114,100 L 123,108 L 132,116 L 141,122 L 150,128 L 159,134 L 168,140 L 177,146 L 186,150 L 195,154 L 204,158 L 213,162 L 222,164 L 231,168 L 240,170 L 249,172 L 258,174 L 267,176 L 276,176 L 285,178 L 294,180 L 303,180 L 312,182 L 321,182 L 330,184 L 339,184 L 348,184 L 357,186 L 366,186",
    color: "currentColor",
    label: "Variational"
  }, {
    d: "M 60,40 L 69,46 L 78,54 L 87,62 L 96,70 L 105,76 L 114,84 L 123,90 L 132,96 L 141,102 L 150,108 L 159,112 L 168,118 L 177,122 L 186,126 L 195,130 L 204,134 L 213,138 L 222,140 L 231,142 L 240,144 L 249,146 L 258,148 L 267,150 L 276,150 L 285,152 L 294,152 L 303,154 L 312,154 L 321,156 L 330,156 L 339,156 L 348,156 L 357,158 L 366,158",
    color: "currentColor",
    label: "Classical baseline",
    opacity: 0.5
  }];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 240",
    className: "fig"
  }, /*#__PURE__*/React.createElement("text", {
    x: "60",
    y: "18",
    fontFamily: "var(--f-mono)",
    fontSize: "9",
    fill: "currentColor",
    opacity: "0.7"
  }, "\u2191 objective (lower is better)"), /*#__PURE__*/React.createElement("line", {
    x1: "60",
    y1: "30",
    x2: "60",
    y2: "220",
    stroke: "currentColor",
    strokeWidth: "0.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "60",
    y1: "220",
    x2: "380",
    y2: "220",
    stroke: "currentColor",
    strokeWidth: "0.6"
  }), curves.map((c, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: c.d,
    fill: "none",
    stroke: c.color,
    strokeWidth: i === 0 ? 1.6 : 1.2,
    opacity: c.opacity ?? (i === 0 ? 1 : 0.7)
  })), /*#__PURE__*/React.createElement("g", {
    fontFamily: "var(--f-mono)",
    fontSize: "9",
    fill: "currentColor"
  }, curves.map((c, i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    transform: `translate(${260},${44 + i * 14})`
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "14",
    y2: "0",
    stroke: c.color,
    strokeWidth: "1.6",
    opacity: c.opacity ?? 1
  }), /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "3",
    opacity: "0.85"
  }, c.label)))), /*#__PURE__*/React.createElement("text", {
    x: "220",
    y: "236",
    textAnchor: "middle",
    fontFamily: "var(--f-mono)",
    fontSize: "10",
    fill: "currentColor",
    opacity: "0.75"
  }, "iterations \u2192"), /*#__PURE__*/React.createElement("text", {
    x: "70",
    y: "20",
    fontFamily: "var(--f-mono)",
    fontSize: "9",
    fill: "currentColor",
    opacity: "0"
  }));
};
const QRLFigure = () => {
  const cells = [];
  for (let r = 0; r < 7; r++) for (let c = 0; c < 14; c++) {
    const v = (Math.sin(r * 0.7) + Math.cos(c * 0.5) + Math.sin((r + c) * 0.4)) / 3;
    const a = (v + 1) / 2;
    cells.push({
      r,
      c,
      a
    });
  }
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 240",
    className: "fig"
  }, /*#__PURE__*/React.createElement("text", {
    x: "14",
    y: "36",
    fontFamily: "var(--f-mono)",
    fontSize: "9",
    fill: "currentColor",
    opacity: "0.75"
  }, "\u2191 users"), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "44",
    x2: "50",
    y2: "212",
    stroke: "currentColor",
    strokeWidth: "0.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "212",
    x2: "370",
    y2: "212",
    stroke: "currentColor",
    strokeWidth: "0.6"
  }), cells.map((cell, i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: 54 + cell.c * 22,
    y: 50 + cell.r * 22,
    width: "20",
    height: "20",
    fill: cell.a > 0.6 ? "var(--accent)" : "currentColor",
    opacity: cell.a > 0.6 ? cell.a : cell.a * 0.5
  })), [0, 1, 2, 3, 4, 5, 6].map(r => /*#__PURE__*/React.createElement("line", {
    key: "yt" + r,
    x1: "48",
    y1: 60 + r * 22,
    x2: "50",
    y2: 60 + r * 22,
    stroke: "currentColor",
    strokeWidth: "0.6"
  })), [0, 2, 4, 6, 8, 10, 12].map(c => /*#__PURE__*/React.createElement("line", {
    key: "xt" + c,
    x1: 64 + c * 22,
    y1: "212",
    x2: 64 + c * 22,
    y2: "214",
    stroke: "currentColor",
    strokeWidth: "0.6"
  })), /*#__PURE__*/React.createElement("text", {
    x: "210",
    y: "230",
    textAnchor: "middle",
    fontFamily: "var(--f-mono)",
    fontSize: "10",
    fill: "currentColor",
    opacity: "0.75"
  }, "items \u2192"), /*#__PURE__*/React.createElement("text", {
    x: "200",
    y: "20",
    textAnchor: "middle",
    fontFamily: "var(--f-mono)",
    fontSize: "9",
    fill: "currentColor",
    opacity: "0.55"
  }, "QSVM kernel \xB7 user \xD7 item similarity"));
};
const ProjectFigure = ({
  id
}) => {
  if (id === "qubots") return /*#__PURE__*/React.createElement(QubotsFigure, null);
  if (id === "vrptw") return /*#__PURE__*/React.createElement(VRPFigure, null);
  if (id === "qoaas") return /*#__PURE__*/React.createElement(QOaaSFigure, null);
  if (id === "qrl") return /*#__PURE__*/React.createElement(QRLFigure, null);
  return null;
};
window.ProjectFigure = ProjectFigure;