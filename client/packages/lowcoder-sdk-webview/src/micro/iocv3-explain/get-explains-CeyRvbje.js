import { u as t } from "./datetime-BWZbrOGu.js";
import { m as n } from "./micro-config-C_rJxvYJ.js";
const r = (e) => n.get("/alm/explanation", { params: e }), s = "GET_REQUEST_EXPLAINS", o = (e) => t({
  queryKey: [s, e],
  queryFn: () => r(e)
});
export {
  o as u
};
