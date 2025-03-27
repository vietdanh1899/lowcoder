import { m as e } from "./micro-config-C_rJxvYJ.js";
import { u as t } from "./datetime-BWZbrOGu.js";
const o = () => e.get("/rs/combo-box/agencies"), r = "GET_AGENCIES";
function F() {
  return t({
    queryKey: [r],
    queryFn: o
  });
}
const n = () => e.get("/usr/combo-box/ioc-accounts"), u = "GET_ACCOUNTS";
function I() {
  return t({
    queryKey: [u],
    queryFn: n
  });
}
const c = (s) => e.get(`/alm/combo-box/fields/${s}`), E = "GET_FIELD";
function N(s) {
  return t({
    queryKey: [E, s],
    queryFn: () => c(s)
  });
}
const S = () => e.get("/alm/combo-box/fields"), T = "GET_FIELDS";
function l() {
  return t({
    queryKey: [T],
    queryFn: () => S()
  });
}
const a = () => e.get("/alm/combo-box/workflow/status", { params: { type: "EXPLANATION" } }), i = "GET_STATUSES";
function f() {
  return t({
    queryKey: [i],
    queryFn: () => a()
  });
}
const G = () => e.get("/rs/combo-box/news-status"), y = "GET_NEWS_STATUSES", C = () => t({
  queryKey: [y],
  queryFn: G
}), g = () => e.get("/rs/combo-box/news-category"), _ = "GET_NEWS_CATEGORIES", x = () => t({
  queryKey: [_],
  queryFn: g
}), m = () => e.get("/rs/combo-box/alarm-priorities"), b = "GET_PRIORITIES", w = () => t({
  queryKey: [b],
  queryFn: m
});
export {
  f as a,
  F as b,
  I as c,
  N as d,
  C as e,
  w as f,
  x as g,
  l as u
};
