import { r as t, j as u } from "./micro-config-C_rJxvYJ.js";
const g = ({ severity: a = "success", value: c = "", style: r }) => {
  const [s, e] = t.useState(
    r ?? {
      color: "var(--green-900)",
      // border: '1px solid ' + 'var(--green-900)',
      background: "var(--green-100)"
    }
  );
  t.useEffect(() => {
    a && n();
  }, [a]), t.useEffect(() => {
    r && e((o) => ({ ...o, ...r }));
  }, [r]);
  const n = () => {
    switch (a) {
      case "success":
        e({
          color: "var(--green-900)",
          // border: '1px solid ' + 'var(--green-900)',
          background: "var(--green-100)"
        });
        break;
      case "unsuccess":
        e({
          color: "var(--bluegray-900)",
          // border: '1px solid ' + 'var(--bluegray-900)',
          background: "var(--bluegray-50)"
        });
        break;
      case "lock":
        e({
          color: "var(--red-900)",
          // border: '1px solid ' + 'var(--red-900)',
          background: "var(--red-100)"
        });
        break;
      default:
        e({});
        break;
    }
  };
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "text-center font-medium text-sm inline",
      style: {
        width: "fit-content",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        lineHeight: "initial",
        ...s
      },
      children: c
    }
  );
};
export {
  g as A
};
