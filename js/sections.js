function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Page components — multi-page portfolio.
// Each page is a self-contained route rendered by App.

const SectionLabel = ({
  n,
  name
}) => /*#__PURE__*/React.createElement("div", {
  className: "section-label"
}, /*#__PURE__*/React.createElement("span", {
  className: "sl-mark"
}, "\xA7"), /*#__PURE__*/React.createElement("span", {
  className: "sl-num"
}, n), /*#__PURE__*/React.createElement("span", {
  className: "sl-divider"
}), /*#__PURE__*/React.createElement("span", {
  className: "sl-name"
}, name));
const Pill = ({
  children
}) => /*#__PURE__*/React.createElement("span", {
  className: "pill"
}, children);
const PageHeader = ({
  kicker,
  title,
  sub
}) => /*#__PURE__*/React.createElement("header", {
  className: "page-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "ph-kicker"
}, kicker), /*#__PURE__*/React.createElement("h1", {
  className: "ph-title"
}, title), sub && /*#__PURE__*/React.createElement("p", {
  className: "ph-sub"
}, sub));

// ── HOME ──────────────────────────────────────────────────────────────────
const Home = ({
  data,
  go
}) => /*#__PURE__*/React.createElement("div", {
  className: "page page-home",
  "data-screen-label": "Home"
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-coords"
}, /*#__PURE__*/React.createElement("span", null, data.coords.lat), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, data.coords.lng), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "THESSALONIKI")), /*#__PURE__*/React.createElement("div", {
  className: "hero-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-portrait"
}, /*#__PURE__*/React.createElement("div", {
  className: "portrait-frame"
}, /*#__PURE__*/React.createElement("div", {
  className: "portrait-photo"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/portrait-sm.png",
  alt: "Ioannis D. Leonidas"
})), /*#__PURE__*/React.createElement("div", {
  className: "portrait-meta"
}, /*#__PURE__*/React.createElement("span", null, "IDL \xB7 2026")))), /*#__PURE__*/React.createElement("div", {
  className: "hero-text"
}, /*#__PURE__*/React.createElement("h1", {
  className: "hero-title"
}, /*#__PURE__*/React.createElement("span", {
  className: "hero-line"
}, "Building the bridge between"), /*#__PURE__*/React.createElement("span", {
  className: "hero-line italic"
}, "quantum research"), /*#__PURE__*/React.createElement("span", {
  className: "hero-line"
}, "and software you can ", /*#__PURE__*/React.createElement("em", null, "actually ship"), ".")), /*#__PURE__*/React.createElement("p", {
  className: "hero-sub"
}, data.about), /*#__PURE__*/React.createElement("div", {
  className: "hero-actions"
}, /*#__PURE__*/React.createElement("a", {
  className: "btn primary",
  href: `mailto:${data.email}`
}, /*#__PURE__*/React.createElement("span", null, "Get in touch"), /*#__PURE__*/React.createElement("span", {
  className: "btn-arrow"
}, "\u2192")), /*#__PURE__*/React.createElement("a", {
  className: "btn ghost",
  href: `https://github.com/${data.github}`,
  target: "_blank",
  rel: "noreferrer"
}, "github/", data.github)))));

// ── EXPERIENCE ────────────────────────────────────────────────────────────
const ExperiencePage = ({
  data
}) => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    "data-screen-label": "Experience"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    kicker: "\xA7 EXPERIENCE",
    title: /*#__PURE__*/React.createElement("span", null, "A ", /*#__PURE__*/React.createElement("em", null, "timeline"), " of building & researching."),
    sub: "Five years across academia, deep-tech startups and EU-funded R&D."
  }), /*#__PURE__*/React.createElement("div", {
    className: "xp-list"
  }, data.experience.map((x, i) => {
    const isOpen = open === i;
    const OrgWrap = x.url ? "a" : "div";
    const orgProps = x.url ? {
      href: x.url,
      target: "_blank",
      rel: "noreferrer"
    } : {};
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `xp-row ${isOpen ? "open" : ""}`,
      onClick: () => setOpen(i)
    }, /*#__PURE__*/React.createElement("div", {
      className: "xp-year"
    }, x.year), /*#__PURE__*/React.createElement("div", {
      className: "xp-logo"
    }, /*#__PURE__*/React.createElement(OrgLogo, {
      id: x.logo
    })), /*#__PURE__*/React.createElement("div", {
      className: "xp-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "xp-head"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "xp-role"
    }, x.role), /*#__PURE__*/React.createElement(OrgWrap, _extends({
      className: "xp-org"
    }, orgProps, {
      onClick: e => e.stopPropagation()
    }), /*#__PURE__*/React.createElement("span", null, x.org), /*#__PURE__*/React.createElement("span", {
      className: "xp-sep"
    }, "/"), /*#__PURE__*/React.createElement("span", {
      className: "xp-where"
    }, x.where), x.url && /*#__PURE__*/React.createElement("span", {
      className: "xp-ext"
    }, "\u2197"))), /*#__PURE__*/React.createElement("div", {
      className: "xp-body"
    }, /*#__PURE__*/React.createElement("p", null, x.body), /*#__PURE__*/React.createElement("div", {
      className: "xp-tags"
    }, x.tags.map(t => /*#__PURE__*/React.createElement(Pill, {
      key: t
    }, t))))), /*#__PURE__*/React.createElement("div", {
      className: "xp-marker"
    }, /*#__PURE__*/React.createElement("span", null, isOpen ? "−" : "+")));
  })));
};

// ── WORK / PROJECTS ───────────────────────────────────────────────────────
const WorkPage = ({
  data
}) => {
  const [filter, setFilter] = React.useState("all");
  const [active, setActive] = React.useState(data.projects[0].id);
  const filtered = filter === "all" ? data.projects : data.projects.filter(p => p.kind === filter);
  const project = data.projects.find(p => p.id === active) || filtered[0];
  const kinds = ["all", "framework", "research", "system"];
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    "data-screen-label": "Work"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    kicker: "\xA7 SELECTED WORK",
    title: /*#__PURE__*/React.createElement("span", null, "Things I've ", /*#__PURE__*/React.createElement("em", null, "built"), ".")
  }), /*#__PURE__*/React.createElement("div", {
    className: "work-layout"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "work-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter"
  }, kinds.map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: `filter-btn ${filter === k ? "active" : ""}`,
    onClick: () => setFilter(k)
  }, k))), /*#__PURE__*/React.createElement("ul", {
    className: "work-list"
  }, filtered.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.id
  }, /*#__PURE__*/React.createElement("button", {
    className: `work-item ${active === p.id ? "active" : ""}`,
    onClick: () => setActive(p.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "wi-year"
  }, p.year), /*#__PURE__*/React.createElement("span", {
    className: "wi-name"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: `wi-access ${p.access}`
  }, p.access === "open" ? "● open" : "○ closed")))))), /*#__PURE__*/React.createElement("article", {
    className: "work-detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wd-figure"
  }, /*#__PURE__*/React.createElement(ProjectFigure, {
    id: project.id
  })), /*#__PURE__*/React.createElement("div", {
    className: "wd-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wd-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wd-kind"
  }, project.kind), /*#__PURE__*/React.createElement("span", {
    className: `wd-access ${project.access}`
  }, project.access === "open" ? "Open source" : "Closed source")), /*#__PURE__*/React.createElement("h2", {
    className: "wd-name"
  }, project.name), /*#__PURE__*/React.createElement("p", {
    className: "wd-tag"
  }, project.tagline), /*#__PURE__*/React.createElement("p", {
    className: "wd-desc"
  }, project.body), /*#__PURE__*/React.createElement("div", {
    className: "wd-stack"
  }, project.stack.map(s => /*#__PURE__*/React.createElement(Pill, {
    key: s
  }, s))), project.url ? /*#__PURE__*/React.createElement("a", {
    className: "wd-link",
    href: project.url,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("span", null, "\u2197"), /*#__PURE__*/React.createElement("span", null, project.link)) : /*#__PURE__*/React.createElement("div", {
    className: "wd-link disabled"
  }, /*#__PURE__*/React.createElement("span", null, "\u25CB"), /*#__PURE__*/React.createElement("span", null, project.link))))));
};

// ── WRITING ──────────────────────────────────────────────────────────────
const WritingPage = ({
  data
}) => /*#__PURE__*/React.createElement("div", {
  className: "page",
  "data-screen-label": "Writing"
}, /*#__PURE__*/React.createElement(PageHeader, {
  kicker: "\xA7 WRITING & TALKS",
  title: /*#__PURE__*/React.createElement("span", null, "Papers, ", /*#__PURE__*/React.createElement("em", null, "talks"), " & awards.")
}), /*#__PURE__*/React.createElement("div", {
  className: "writing-grid"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", {
  className: "sub-title"
}, "Publications"), /*#__PURE__*/React.createElement("ul", {
  className: "pub-list"
}, data.publications.map((p, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  className: "pub"
}, /*#__PURE__*/React.createElement("div", {
  className: "pub-year"
}, p.year), /*#__PURE__*/React.createElement("div", {
  className: "pub-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "pub-authors"
}, p.authors), /*#__PURE__*/React.createElement("a", {
  className: "pub-title",
  href: p.url,
  target: "_blank",
  rel: "noreferrer"
}, p.title, " ", /*#__PURE__*/React.createElement("span", {
  className: "ext"
}, "\u2197")), /*#__PURE__*/React.createElement("div", {
  className: "pub-venue"
}, /*#__PURE__*/React.createElement("em", null, p.venue), " \xB7 doi:", p.doi))))), /*#__PURE__*/React.createElement("h3", {
  className: "sub-title",
  style: {
    marginTop: 48
  }
}, "Where the work landed"), /*#__PURE__*/React.createElement("ul", {
  className: "link-list"
}, data.links.map((l, i) => /*#__PURE__*/React.createElement("li", {
  key: i
}, /*#__PURE__*/React.createElement("a", {
  href: l.url,
  target: "_blank",
  rel: "noreferrer",
  className: "link-row"
}, /*#__PURE__*/React.createElement("span", {
  className: "lr-arrow"
}, "\u2197"), /*#__PURE__*/React.createElement("span", null, l.label), /*#__PURE__*/React.createElement("span", {
  className: "lr-host"
}, new URL(l.url).hostname.replace("www.", ""))))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", {
  className: "sub-title"
}, "Talks & awards"), /*#__PURE__*/React.createElement("ul", {
  className: "talk-list"
}, data.talks.map((t, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  className: "talk"
}, /*#__PURE__*/React.createElement("div", {
  className: "talk-year"
}, t.year), /*#__PURE__*/React.createElement("div", {
  className: "talk-body"
}, t.url ? /*#__PURE__*/React.createElement("a", {
  className: "talk-what",
  href: t.url,
  target: "_blank",
  rel: "noreferrer"
}, t.what, " ", /*#__PURE__*/React.createElement("span", {
  className: "ext"
}, "\u2197")) : /*#__PURE__*/React.createElement("div", {
  className: "talk-what"
}, t.what), /*#__PURE__*/React.createElement("div", {
  className: "talk-detail"
}, t.detail))))))));

// ── OPEN SOURCE ───────────────────────────────────────────────────────────
const RepoCard = ({
  r
}) => /*#__PURE__*/React.createElement("a", {
  className: "repo",
  href: r.url,
  target: "_blank",
  rel: "noreferrer"
}, /*#__PURE__*/React.createElement("div", {
  className: "repo-head"
}, /*#__PURE__*/React.createElement("span", {
  className: "repo-icon"
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 16 16",
  width: "14",
  height: "14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.16-.89-1.16-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.74-3.65 3.94.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"
}))), /*#__PURE__*/React.createElement("span", {
  className: "repo-name"
}, r.repo), /*#__PURE__*/React.createElement("span", {
  className: "repo-lang"
}, /*#__PURE__*/React.createElement("span", {
  className: "repo-dot"
}), " ", r.lang)), /*#__PURE__*/React.createElement("div", {
  className: "repo-tag"
}, r.tagline), /*#__PURE__*/React.createElement("p", {
  className: "repo-body"
}, r.body), /*#__PURE__*/React.createElement("div", {
  className: "repo-topics"
}, r.topics.map(t => /*#__PURE__*/React.createElement("span", {
  key: t,
  className: "repo-topic"
}, t))), /*#__PURE__*/React.createElement("div", {
  className: "repo-foot"
}, /*#__PURE__*/React.createElement("span", null, "\u2197 ", r.url.replace("https://", ""))));
const OpenSourcePage = ({
  data
}) => /*#__PURE__*/React.createElement("div", {
  className: "page",
  "data-screen-label": "OpenSource"
}, /*#__PURE__*/React.createElement(PageHeader, {
  kicker: "\xA7 OPEN SOURCE",
  title: /*#__PURE__*/React.createElement("span", null, "Code I've ", /*#__PURE__*/React.createElement("em", null, "shipped"), " in the open.")
}), /*#__PURE__*/React.createElement("section", {
  className: "os-block"
}, /*#__PURE__*/React.createElement("div", {
  className: "repo-grid"
}, data.openSource.own.map((r, i) => /*#__PURE__*/React.createElement(RepoCard, {
  key: i,
  r: r
})))), /*#__PURE__*/React.createElement("div", {
  className: "reading-foot"
}, /*#__PURE__*/React.createElement("span", {
  className: "rf-mark"
}, "\u220E"), /*#__PURE__*/React.createElement("span", null, "See all on ", /*#__PURE__*/React.createElement("a", {
  href: `https://github.com/${data.github}`,
  target: "_blank",
  rel: "noreferrer"
}, "github/", data.github), ".")));

// ── EDUCATION ────────────────────────────────────────────────────────────
const EducationPage = ({
  data
}) => /*#__PURE__*/React.createElement("div", {
  className: "page",
  "data-screen-label": "Education"
}, /*#__PURE__*/React.createElement(PageHeader, {
  kicker: "\xA7 EDUCATION",
  title: /*#__PURE__*/React.createElement("span", null, "Where I ", /*#__PURE__*/React.createElement("em", null, "learned"), " the craft.")
}), /*#__PURE__*/React.createElement("div", {
  className: "edu-list"
}, data.education.map((e, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "edu-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "edu-year"
}, e.year), /*#__PURE__*/React.createElement("div", {
  className: "edu-body"
}, /*#__PURE__*/React.createElement("h3", null, e.degree), /*#__PURE__*/React.createElement("div", {
  className: "edu-org"
}, e.org), /*#__PURE__*/React.createElement("div", {
  className: "edu-thesis"
}, /*#__PURE__*/React.createElement("span", {
  className: "et-label"
}, "Thesis \u2014"), " ", /*#__PURE__*/React.createElement("em", null, e.thesis)), e.links && e.links.length > 0 && /*#__PURE__*/React.createElement("ul", {
  className: "edu-links"
}, e.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
  key: j
}, /*#__PURE__*/React.createElement("a", {
  href: l.url,
  target: "_blank",
  rel: "noreferrer",
  className: "link-row"
}, /*#__PURE__*/React.createElement("span", {
  className: "lr-arrow"
}, "\u2197"), /*#__PURE__*/React.createElement("span", null, l.label))))))))));

// ── CONTACT ──────────────────────────────────────────────────────────────
const ContactPage = ({
  data
}) => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    "data-screen-label": "Contact"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    kicker: "\xA7 CONTACT",
    title: /*#__PURE__*/React.createElement("span", null, "Let's ", /*#__PURE__*/React.createElement("em", null, "talk"), ".")
  }), /*#__PURE__*/React.createElement("div", {
    className: "contact-meta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "contact-row",
    onClick: copy
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-label"
  }, "email"), /*#__PURE__*/React.createElement("span", {
    className: "cr-value"
  }, data.email), /*#__PURE__*/React.createElement("span", {
    className: "cr-action"
  }, copied ? "✓ copied" : "copy")), /*#__PURE__*/React.createElement("a", {
    className: "contact-row",
    href: `https://github.com/${data.github}`,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-label"
  }, "github"), /*#__PURE__*/React.createElement("span", {
    className: "cr-value"
  }, data.github), /*#__PURE__*/React.createElement("span", {
    className: "cr-action"
  }, "\u2197")), /*#__PURE__*/React.createElement("a", {
    className: "contact-row",
    href: data.linkedin,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-label"
  }, "linkedin"), /*#__PURE__*/React.createElement("span", {
    className: "cr-value"
  }, data.linkedinHandle), /*#__PURE__*/React.createElement("span", {
    className: "cr-action"
  }, "\u2197")), /*#__PURE__*/React.createElement("div", {
    className: "contact-row static"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-label"
  }, "based"), /*#__PURE__*/React.createElement("span", {
    className: "cr-value"
  }, data.location), /*#__PURE__*/React.createElement("span", {
    className: "cr-action"
  }, data.coords.lat, " \xB7 ", data.coords.lng))), /*#__PURE__*/React.createElement("div", {
    className: "contact-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "cf-label"
  }, "Languages"), /*#__PURE__*/React.createElement("div", {
    className: "cf-line"
  }, data.languages.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l.name, " ", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014 ", l.level))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "cf-label"
  }, "Outside work"), /*#__PURE__*/React.createElement("div", {
    className: "cf-line"
  }, data.personal.join(" · ")))));
};
Object.assign(window, {
  Home,
  ExperiencePage,
  WorkPage,
  WritingPage,
  OpenSourcePage,
  EducationPage,
  ContactPage,
  SectionLabel,
  PageHeader
});