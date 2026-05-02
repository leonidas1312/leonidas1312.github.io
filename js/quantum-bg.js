// Subtle ambient quantum-themed background.
// Layered: drifting phase circles (Bloch shadows), faint lattice grid,
// a single tracing electron path. All SVG. Motion intensity is configurable.

const QuantumBg = ({
  intensity = 0.6,
  accent = "200"
}) => {
  // intensity: 0 → static, 1 → lively. We map to durations.
  const dur = base => `${base / Math.max(0.15, intensity)}s`;
  const accentColor = `oklch(0.78 0.13 ${accent})`;
  return /*#__PURE__*/React.createElement("div", {
    className: "qbg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "qbg-lattice",
    viewBox: "0 0 1200 800",
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "lattice",
    width: "48",
    height: "48",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48 0 L 0 0 0 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "0.5"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "latticeMask",
    cx: "50%",
    cy: "40%",
    r: "70%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "white",
    stopOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "white",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("mask", {
    id: "latticeFade"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "1200",
    height: "800",
    fill: "url(#latticeMask)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "1200",
    height: "800",
    fill: "url(#lattice)",
    mask: "url(#latticeFade)"
  })), /*#__PURE__*/React.createElement("svg", {
    className: "qbg-rings",
    viewBox: "-200 -200 400 400"
  }, /*#__PURE__*/React.createElement("g", {
    style: {
      animation: `qbgSpin ${dur(120)} linear infinite`
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "0",
    cy: "0",
    rx: "180",
    ry: "70",
    fill: "none",
    stroke: accentColor,
    strokeOpacity: "0.35",
    strokeWidth: "0.6"
  })), /*#__PURE__*/React.createElement("g", {
    style: {
      animation: `qbgSpinR ${dur(95)} linear infinite`
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "0",
    cy: "0",
    rx: "180",
    ry: "70",
    fill: "none",
    stroke: "currentColor",
    strokeOpacity: "0.18",
    strokeWidth: "0.5",
    transform: "rotate(60)"
  })), /*#__PURE__*/React.createElement("g", {
    style: {
      animation: `qbgSpin ${dur(160)} linear infinite`
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "0",
    cy: "0",
    rx: "180",
    ry: "70",
    fill: "none",
    stroke: "currentColor",
    strokeOpacity: "0.18",
    strokeWidth: "0.5",
    transform: "rotate(-60)"
  })), /*#__PURE__*/React.createElement("g", {
    style: {
      animation: `qbgSpin ${dur(28)} linear infinite`
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "180",
    cy: "0",
    r: "2.5",
    fill: accentColor
  }))), /*#__PURE__*/React.createElement("svg", {
    className: "qbg-nodes",
    viewBox: "0 0 600 400"
  }, Array.from({
    length: 14
  }).map((_, i) => {
    const x = i * 73 % 600;
    const y = i * 137 % 400;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x,
      cy: y,
      r: i % 5 === 0 ? 1.6 : 1,
      fill: "currentColor",
      opacity: i % 3 === 0 ? 0.5 : 0.25,
      style: {
        animation: `qbgPulse ${dur(6 + i % 5)}s ease-in-out infinite`,
        animationDelay: `${i * 0.3}s`
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "qbg-noise"
  }));
};
window.QuantumBg = QuantumBg;