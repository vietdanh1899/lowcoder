import { m as j, R as x, r as E, j as t, o as w } from "./micro-config-C_rJxvYJ.js";
import { u as N, a as S, b as H, t as Y, F as A, z as h } from "./index-DrZbATc5.js";
import { A as m, d as C } from "./datetime-BWZbrOGu.js";
import { A as F } from "./dialog-CtujszD-.js";
const M = (e) => j.post(`/rs/news/scheduled/${e.id}`, { scheduledDeliveryDate: e.scheduledDeliveryDate }), T = "SCHEDULE_NEW", k = () => N({
  mutationKey: [T],
  mutationFn: M
}), L = h.object({
  scheduledDeliveryDate: h.date().nullable().refine((e) => e, { message: "Vui lòng nhập thời gian gửi thông báo!" })
}), R = {
  scheduledDeliveryDate: null
};
function U({ formState: e, setFormState: l, refetch: D }) {
  const [p, o] = x.useState(!1), { showToast: n } = S(), { control: v, handleSubmit: g, reset: d, setValue: c } = H({
    defaultValues: R,
    resolver: Y(L)
  }), f = k();
  E.useEffect(() => {
    e.scheduledDeliveryDate && c("scheduledDeliveryDate", new Date(e.scheduledDeliveryDate));
  }, [e, c]);
  const y = (i) => {
    var s;
    const a = Object.keys(i)[0];
    (s = document.getElementById(a)) == null || s.focus();
  };
  function b(i) {
    o(!0);
    const a = {
      id: e.id.toString(),
      scheduledDeliveryDate: C(i.scheduledDeliveryDate).format("DD/MM/YYYY HH:mm:ss")
    };
    f.mutate(a, {
      onSettled: () => {
        o(!1);
      },
      onSuccess: (s) => {
        d(), l({ visible: !1 }), D(), n({
          code: s.code,
          detail: s.message
        });
      },
      onError: (s) => {
        var r, u;
        n({
          code: (r = s.response) == null ? void 0 : r.data.code,
          detail: (u = s.response) == null ? void 0 : u.data.message
        });
      }
    });
  }
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
    F,
    {
      header: "Hẹn giờ gửi thông báo",
      visible: e.visible,
      style: { minWidth: "500px" },
      onHide: () => l({ visible: !1 }),
      blockScroll: !0,
      footer: /* @__PURE__ */ t.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ t.jsx(
          m,
          {
            variant: "close",
            onClick: () => {
              d(), l({ visible: !1 });
            }
          }
        ),
        /* @__PURE__ */ t.jsx(
          m,
          {
            icon: "ti ti-plus",
            label: "Thêm",
            loading: p,
            onClick: g(b, y)
          }
        )
      ] }),
      children: /* @__PURE__ */ t.jsx("div", { className: "p-6", children: /* @__PURE__ */ t.jsx(
        A,
        {
          type: w.CALENDAR,
          name: "scheduledDeliveryDate",
          label: "Thời gian gửi thông báo",
          control: v,
          required: !0,
          placeholder: "DD/MM/YYYY HH:mm:ss",
          calendarProps: {
            showTime: !0,
            showSeconds: !0
          }
        }
      ) })
    }
  ) });
}
export {
  U as S
};
