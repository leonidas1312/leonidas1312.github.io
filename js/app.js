const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accentHue": 215,
  "density": 1,
  "motion": 0.6
} /*EDITMODE-END*/;
const ROUTES = [{
  id: "home",
  label: "Home"
}, {
  id: "experience",
  label: "Experience"
}, {
  id: "work",
  label: "Work"
}, {
  id: "writing",
  label: "Writing"
}, {
  id: "opensource",
  label: "Open source"
}, {
  id: "education",
  label: "Education"
}, {
  id: "contact",
  label: "Contact"
}];
function getRouteFromHash() {
  const h = (location.hash || "").replace("#/", "").replace("#", "");
  return ROUTES.find(r => r.id === h) ? h : "home";
}
function Topbar({
  route,
  go,
  theme,
  onToggle
}) {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);
  const t = time.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Athens'
  });
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-brand",
    onClick: () => go("home")
  }, /*#__PURE__*/React.createElement("span", {
    className: "glyph-mini"
  }), /*#__PURE__*/React.createElement("span", null, "I.D.L.")), /*#__PURE__*/React.createElement("nav", {
    className: "tb-nav"
  }, ROUTES.filter(r => r.id !== "home").map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    className: route === r.id ? "active" : "",
    onClick: () => go(r.id)
  }, r.label))), /*#__PURE__*/React.createElement("div", {
    className: "tb-side"
  }, /*#__PURE__*/React.createElement("span", {
    className: "clock"
  }, "EET \xB7 ", t), /*#__PURE__*/React.createElement("button", {
    className: "theme-toggle",
    "aria-label": "toggle theme",
    onClick: onToggle
  })));
}
function App() {
  const data = window.PORTFOLIO;
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState(getRouteFromHash());

  // Sync route ↔ hash
  React.useEffect(() => {
    const onHash = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const go = React.useCallback(id => {
    location.hash = "#/" + id;
    setRoute(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  // Apply CSS variables from tweaks
  React.useEffect(() => {
    document.documentElement.dataset.theme = tw.theme;
    document.documentElement.style.setProperty('--accent-h', tw.accentHue);
    document.documentElement.style.setProperty('--density', tw.density);
    document.documentElement.style.setProperty('--motion', tw.motion);
  }, [tw]);
  const toggleTheme = () => setTweak('theme', tw.theme === 'dark' ? 'light' : 'dark');
  const renderRoute = () => {
    switch (route) {
      case "experience":
        return /*#__PURE__*/React.createElement(ExperiencePage, {
          data: data
        });
      case "work":
        return /*#__PURE__*/React.createElement(WorkPage, {
          data: data
        });
      case "writing":
        return /*#__PURE__*/React.createElement(WritingPage, {
          data: data
        });
      case "opensource":
        return /*#__PURE__*/React.createElement(OpenSourcePage, {
          data: data
        });
      case "education":
        return /*#__PURE__*/React.createElement(EducationPage, {
          data: data
        });
      case "contact":
        return /*#__PURE__*/React.createElement(ContactPage, {
          data: data
        });
      default:
        return /*#__PURE__*/React.createElement(Home, {
          data: data,
          go: go
        });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(QuantumBg, {
    intensity: tw.motion,
    accent: tw.accentHue
  }), /*#__PURE__*/React.createElement(Topbar, {
    route: route,
    go: go,
    theme: tw.theme,
    onToggle: toggleTheme
  }), /*#__PURE__*/React.createElement("main", {
    className: "shell",
    key: route
  }, renderRoute()), /*#__PURE__*/React.createElement("footer", {
    className: "app-footer"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Ioannis D. Leonidas"), /*#__PURE__*/React.createElement("span", {
    className: "fb-mid"
  }, "\"If you think you understand quantum mechanics, you don't understand quantum mechanics.\" \u2014 Richard Feynman"), /*#__PURE__*/React.createElement("span", null, "Thessaloniki \xB7 Greece")), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Theme"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Mode",
    value: tw.theme,
    onChange: v => setTweak('theme', v),
    options: [{
      label: 'Dark',
      value: 'dark'
    }, {
      label: 'Light',
      value: 'light'
    }]
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Accent hue",
    min: 0,
    max: 360,
    step: 5,
    value: tw.accentHue,
    onChange: v => setTweak('accentHue', v),
    suffix: "\xB0"
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Layout"
  }, /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Density",
    min: 0.7,
    max: 1.3,
    step: 0.05,
    value: tw.density,
    onChange: v => setTweak('density', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Motion",
    min: 0,
    max: 1.2,
    step: 0.05,
    value: tw.motion,
    onChange: v => setTweak('motion', v)
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));