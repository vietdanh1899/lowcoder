import { j as n } from "./micro-config-C_rJxvYJ.js";
import { A as a } from "./confirm-dialog-l-kJ-IQx.js";
const r = ({ visible: e, acceptAction: c, rejectAction: t }) => /* @__PURE__ */ n.jsx(
  a,
  {
    message: "Các thay đổi vẫn chưa được lưu, bạn có chắc chắn muốn đóng?",
    header: "Đóng màn hình",
    icon: "ti ti-alert-triangle",
    acceptLabel: "Đóng màn hình",
    accept: () => {
      c();
    },
    acceptIcon: "ti ti-check",
    rejectLabel: "Huỷ",
    reject: () => {
      t();
    },
    rejectIcon: "ti ti-x",
    loading: !1,
    visible: e
  }
);
export {
  r as C
};
