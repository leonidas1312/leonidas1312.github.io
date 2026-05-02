// Org logos — real bitmap marks, framed in a dark chip so they read
// well in both dark and light themes.

const LOGO_SRC = {
  k3y: "assets/logo-k3y.png",
  angelq: "assets/logo-angelq.png",
  cqt: "assets/logo-cqt.png",
  tuc: "assets/logo-tuc.png"
};

// CQT and TUC marks have white/light backgrounds in their assets — invert the
// chip background for those so the art doesn't disappear.
const LOGO_BG = {
  k3y: "dark",
  angelq: "dark",
  cqt: "light",
  tuc: "light"
};
const OrgLogo = ({
  id
}) => {
  const src = LOGO_SRC[id];
  if (!src) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `org-chip org-chip--${LOGO_BG[id] || "dark"}`
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    className: "org-logo-img"
  }));
};
window.OrgLogo = OrgLogo;