import { j as s, m as o } from "./micro-config-C_rJxvYJ.js";
import { u as l } from "./index-DrZbATc5.js";
const c = ({ styleClass: t, cardTitle: e, body: i, footer: a, footerStyle: n }) => /* @__PURE__ */ s.jsxs("div", { className: `card ${t}`, children: [
  e && /* @__PURE__ */ s.jsx("h5", { className: "mb-6", children: e }),
  /* @__PURE__ */ s.jsx("div", { children: i }),
  /* @__PURE__ */ s.jsx("div", { className: "flex justify-center gap-2 mt-6", style: n, children: /* @__PURE__ */ s.jsx("div", { children: a }) })
] }), r = (t) => o.post("/media/multi-files/upload", t), u = "UPLOAD_FILES";
function p() {
  return l({ mutationKey: [u], mutationFn: r });
}
export {
  c as C,
  p as u
};
