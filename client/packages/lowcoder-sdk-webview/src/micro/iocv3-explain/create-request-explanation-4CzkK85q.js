import { m as ie, u as oe, r as le, b as de, j as e, o as d } from "./micro-config-C_rJxvYJ.js";
import { b as ce, c as ge, d as ue } from "./combo-box-JSkXZHpO.js";
import { u as he, a as me, b as pe, F as c, t as ye, z as i } from "./index-DrZbATc5.js";
import { u as Ae, C as xe } from "./upload-multiple-files-CbiCYeuN.js";
import { A as h, c as p } from "./datetime-BWZbrOGu.js";
import { c as C } from "./input-rM9ejZ0L.js";
import { A as N } from "./table-Bfzmvi9r.js";
/* empty css                       */
const fe = (a) => ie.post("/alm/explanation", a), je = "CREATE_EXPLAIN";
function De() {
  return he({ mutationKey: [je], mutationFn: fe });
}
const be = i.object({
  sortOrder: i.number(),
  agencyAssignedId: i.number({ message: "Vui lòng chọn đơn vị!" }).nullable().refine((a) => a, { message: "Vui lòng chọn đơn vị!" }),
  startDate: i.date({ invalid_type_error: "Ngày bắt đầu không hợp lệ" }).nullable().refine((a) => a, { message: "Vui lòng chọn ngày bắt đầu!" }).refine((a) => a && a > /* @__PURE__ */ new Date(), {
    message: "Ngày bắt đầu phải lớn hơn ngày hiện tại!"
  }),
  endDate: i.date({ invalid_type_error: "Ngày kết thúc không hợp lệ" }).nullable().refine((a) => a, { message: "Vui lòng chọn ngày kết thúc!" })
}).refine((a) => !a.startDate || !a.endDate || a.endDate > a.startDate, {
  message: "Ngày kết thúc phải lớn hơn ngày bắt đầu!",
  path: ["endDate"]
}), Ne = i.object({
  sortOrder: i.number(),
  userAssignedId: i.number({ message: "Vui lòng chọn họ và tên!" }).nullable().refine((a) => a, { message: "Vui lòng chọn họ và tên!" }),
  startDate: i.date({ invalid_type_error: "Ngày kết thúc không hợp lệ" }).nullable().refine((a) => a, { message: "Vui lòng chọn ngày bắt đầu!" }).refine((a) => a && a > /* @__PURE__ */ new Date(), {
    message: "Ngày bắt đầu phải lớn hơn ngày hiện tại!"
  }),
  endDate: i.date({ invalid_type_error: "Ngày kết thúc không hợp lệ" }).nullable().refine((a) => a, { message: "Vui lòng chọn ngày kết thúc!" })
}).refine((a) => !a.startDate || !a.endDate || a.endDate > a.startDate, {
  message: "Ngày kết thúc phải lớn hơn ngày bắt đầu!",
  path: ["endDate"]
}), we = /^[0-9]{10,15}$/, Te = i.object({
  sortOrder: i.number(),
  phoneAssignedId: i.string().nullable().refine((a) => a === null || we.test(a), {
    message: "Số điện thoại không hợp lệ!"
    // 'Invalid phone number!' in Vietnamese
  })
}), ve = i.object({
  content: i.string().trim().min(1, { message: "Vui lòng nhập nội dung yêu cầu giải trình!" }),
  mediaFile: i.custom(),
  agencyAssigneds: i.array(be),
  userAssigneds: i.array(Ne),
  phoneAssigneds: i.array(Te)
}), P = {
  content: "",
  mediaFile: null,
  agencyAssigneds: [],
  userAssigneds: [],
  phoneAssigneds: []
};
function Le() {
  const a = oe(), [I, y] = le.useState(!1), k = Ae(), L = De(), { showToast: A } = me(), { imageCaptured: w } = de(), T = new URLSearchParams(a.search), v = parseInt(T.get("id") || "138"), S = T.get("criteria") || "", { control: o, handleSubmit: O, getValues: l, trigger: x, reset: m, watch: u, setValue: f } = pe({
    mode: "all",
    defaultValues: P,
    resolver: ye(ve)
  }), E = u("agencyAssigneds"), _ = u("userAssigneds"), F = u("phoneAssigneds"), { data: j } = ce(), { data: D } = ge(), { data: b } = ue(v.toString());
  function U(n) {
    if (console.log(n.phoneAssigneds.map((t) => t.phoneAssignedId)), n.agencyAssigneds.length === 0 && n.userAssigneds.length === 0) {
      A({
        code: 400,
        detail: "Vui lòng thêm đơn vị hoặc cá nhân nhận yêu cầu giải trình"
      });
      return;
    }
    y(!0);
    const s = {
      fieldId: v,
      criteria: S,
      mediaFile: n.mediaFile ? JSON.stringify(n.mediaFile) : null,
      content: n.content,
      agencyAssigneds: n.agencyAssigneds.map((t) => ({
        ...t,
        startDate: p(t.startDate),
        endDate: p(t.endDate)
      })),
      userAssigneds: n.userAssigneds.map((t) => ({
        ...t,
        startDate: p(t.startDate),
        endDate: p(t.endDate)
      })),
      phoneNumbers: n.phoneAssigneds.map((t) => t.phoneAssignedId).filter((t) => t !== null)
    };
    L.mutate(s, {
      onSuccess: (t) => {
        y(!1), A({
          code: t.code,
          detail: t.message,
          onSuccess: () => {
            m(P);
          }
        });
      },
      onError: (t) => {
        var r, g;
        A({
          code: (r = t.response) == null ? void 0 : r.data.code,
          detail: (g = t.response) == null ? void 0 : g.data.message,
          onError: () => y(!1)
        });
      }
    });
  }
  const V = (n) => {
    var t;
    const s = Object.keys(n)[0];
    (t = document.getElementById(s)) == null || t.focus();
  }, $ = async () => {
    const n = await x(["agencyAssigneds"]), s = l("agencyAssigneds");
    n && f("agencyAssigneds", [
      ...s,
      {
        sortOrder: s.length + 1,
        agencyAssignedId: null,
        startDate: null,
        endDate: null
      }
    ]);
  }, q = async () => {
    const n = await x(["userAssigneds"]), s = l("userAssigneds");
    n && f("userAssigneds", [
      ...s,
      {
        sortOrder: s.length + 1,
        userAssignedId: null,
        startDate: null,
        endDate: null
      }
    ]);
  }, R = async () => {
    const n = await x(["phoneAssigneds"]), s = l("phoneAssigneds");
    n && f("phoneAssigneds", [
      ...s,
      {
        sortOrder: s.length + 1,
        phoneAssignedId: null
      }
    ]);
  }, W = (n) => {
    let s = l("agencyAssigneds");
    s = s.filter((t, r) => r !== n).map((t, r) => ({
      ...t,
      sortOrder: r + 1
    })), m({
      ...l(),
      agencyAssigneds: s
    });
  }, M = (n) => {
    let s = l("userAssigneds");
    s = s.filter((t, r) => r !== n).map((t, r) => ({
      ...t,
      sortOrder: r + 1
    })), m({
      ...l(),
      userAssigneds: s
    });
  }, X = (n) => {
    let s = l("phoneAssigneds");
    s = s.filter((t, r) => r !== n).map((t, r) => ({
      ...t,
      sortOrder: r + 1
    })), m({
      ...l(),
      phoneAssigneds: s
    });
  }, G = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx(
    c,
    {
      name: `agencyAssigneds.${s}.agencyAssignedId`,
      control: o,
      type: d.SELECT,
      options: j == null ? void 0 : j.data,
      required: !0
    }
  ), H = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx(
    c,
    {
      name: `userAssigneds.${s}.userAssignedId`,
      control: o,
      type: d.SELECT,
      options: D == null ? void 0 : D.data,
      selectProps: {
        optionLabel: "fullName"
      },
      required: !0
    }
  ), B = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx(c, { name: `phoneAssigneds.${s}.phoneAssignedId`, control: o, type: d.TEXT }), z = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx(c, { name: `agencyAssigneds.${s}.startDate`, control: o, type: d.CALENDAR }), J = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx(c, { name: `userAssigneds.${s}.startDate`, control: o, type: d.CALENDAR }), K = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx(c, { name: `agencyAssigneds.${s}.endDate`, control: o, type: d.CALENDAR }), Y = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx(c, { name: `userAssigneds.${s}.endDate`, control: o, type: d.CALENDAR }), Q = (n, { rowIndex: s }) => {
    const t = u(`agencyAssigneds.${s}.startDate`), r = u(`agencyAssigneds.${s}.endDate`), g = t && r ? Math.ceil((new Date(r).getTime() - new Date(t).getTime()) / (1e3 * 60 * 60 * 24)) : 0;
    return /* @__PURE__ */ e.jsx("span", { className: "flex justify-center mt-4", children: g > 0 ? g : "" });
  }, Z = (n, { rowIndex: s }) => {
    const t = u(`userAssigneds.${s}.startDate`), r = u(`userAssigneds.${s}.endDate`), g = t && r ? Math.ceil((new Date(r).getTime() - new Date(t).getTime()) / (1e3 * 60 * 60 * 24)) : 0;
    return /* @__PURE__ */ e.jsx("span", { className: "flex justify-center mt-4", children: g > 0 ? g : "" });
  }, ee = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx("div", { className: "flex justify-end mt-2", children: /* @__PURE__ */ e.jsx(h, { variant: "idelete", onClick: () => W(s) }) }), se = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx("div", { className: "flex justify-end mt-2", children: /* @__PURE__ */ e.jsx(h, { variant: "idelete", onClick: () => M(s) }) }), ne = (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx("div", { className: "flex justify-end mt-2", children: /* @__PURE__ */ e.jsx(h, { variant: "idelete", onClick: () => X(s) }) }), te = [
    {
      columnProps: {
        field: "sortOrder",
        header: "STT",
        align: "center",
        body: (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ e.jsx("span", { children: s + 1 }) })
      },
      show: !0
    },
    {
      columnProps: {
        field: "agencyAssignedId",
        header: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Đơn vị ",
          /* @__PURE__ */ e.jsx("span", { className: "required" })
        ] }),
        body: G
      },
      show: !0,
      maxWidth: "30rem"
    },
    {
      columnProps: {
        field: "startDate",
        header: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Ngày bắt đầu ",
          /* @__PURE__ */ e.jsx("span", { className: "required" })
        ] }),
        body: z
      },
      show: !0,
      minWidth: "15rem"
    },
    {
      columnProps: {
        field: "endDate",
        header: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Ngày kết thúc ",
          /* @__PURE__ */ e.jsx("span", { className: "required" })
        ] }),
        body: K
      },
      show: !0,
      minWidth: "15rem"
    },
    {
      columnProps: {
        header: "Số ngày xử lý",
        body: Q,
        align: "right"
      },
      show: !0,
      minWidth: "9rem"
    }
  ], ae = [
    {
      columnProps: {
        field: "sortOrder",
        header: "STT",
        align: "center",
        body: (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ e.jsx("span", { children: s + 1 }) })
      },
      show: !0
    },
    {
      columnProps: {
        field: "agencyAssignedId",
        header: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Họ và tên ",
          /* @__PURE__ */ e.jsx("span", { className: "required" })
        ] }),
        body: H
      },
      show: !0,
      maxWidth: "30rem"
    },
    {
      columnProps: {
        field: "startDate",
        header: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Ngày bắt đầu ",
          /* @__PURE__ */ e.jsx("span", { className: "required" })
        ] }),
        body: J
      },
      show: !0,
      minWidth: "15rem"
    },
    {
      columnProps: {
        field: "endDate",
        header: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Ngày kết thúc ",
          /* @__PURE__ */ e.jsx("span", { className: "required" })
        ] }),
        body: Y
      },
      show: !0,
      minWidth: "15rem"
    },
    { columnProps: { header: "Số ngày xử lý", body: Z, align: "right" }, show: !0, minWidth: "9rem" }
  ], re = [
    {
      columnProps: {
        field: "sortOrder",
        header: "STT",
        align: "center",
        body: (n, { rowIndex: s }) => /* @__PURE__ */ e.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ e.jsx("span", { children: s + 1 }) })
      },
      show: !0
    },
    {
      columnProps: {
        field: "phoneAssignedId",
        header: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Số điện thoại ",
          /* @__PURE__ */ e.jsx("span", { className: "required" })
        ] }),
        body: B
      },
      show: !0,
      maxWidth: "30rem"
    }
  ];
  return /* @__PURE__ */ e.jsx(
    xe,
    {
      cardTitle: "Thêm mới yêu cầu giải trình",
      body: /* @__PURE__ */ e.jsxs("div", { className: "flex gap-6 flex-col xl:flex-row", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "w-full xl:w-4/12", children: [
          /* @__PURE__ */ e.jsx(C, { label: "Loại cảnh báo", inputId: "fieldId", children: /* @__PURE__ */ e.jsx("b", { children: b == null ? void 0 : b.data.name }) }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-6", children: /* @__PURE__ */ e.jsx(C, { label: "Chỉ tiêu", inputId: "criteria", children: /* @__PURE__ */ e.jsx("b", { children: S }) }) }),
          /* @__PURE__ */ e.jsx("div", { className: "mt-6", children: /* @__PURE__ */ e.jsx(
            c,
            {
              name: "mediaFile",
              control: o,
              type: d.FILE,
              label: "Tệp đính kèm",
              required: !0,
              uploadProps: {
                ...w ? { initialFiles: [w] } : {},
                accept: ".pdf, .png, .gif, .jpg, .jpeg",
                uploadFileMutation: k,
                autoUpload: !0,
                multiple: !0
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ e.jsx(
            c,
            {
              name: "content",
              control: o,
              type: d.TEXTAREA,
              label: "Nội dung yêu cầu giải trình",
              required: !0
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ e.jsx(
              h,
              {
                icon: "ti ti-plus",
                label: "Thêm đơn vị yêu cầu giải trình",
                outlined: !0,
                onClick: $
              }
            ),
            E.length > 0 && /* @__PURE__ */ e.jsx(
              N,
              {
                headerSchema: te,
                rowClassName: () => "align-top",
                hasActions: !0,
                actionSchema: {
                  columnProps: {
                    header: "Thao tác",
                    body: ee,
                    align: "right"
                  }
                },
                value: E,
                paginator: !1,
                first: 0
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ e.jsx(
              h,
              {
                icon: "ti ti-plus",
                label: "Thêm cá nhân yêu cầu giải trình",
                outlined: !0,
                onClick: q
              }
            ),
            _.length > 0 && /* @__PURE__ */ e.jsx(
              N,
              {
                headerSchema: ae,
                rowClassName: () => "align-top",
                hasActions: !0,
                actionSchema: {
                  columnProps: {
                    header: "Thao tác",
                    body: se,
                    align: "right"
                  }
                },
                value: _,
                paginator: !1,
                first: 0
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ e.jsx(
              h,
              {
                icon: "ti ti-plus",
                label: "Thêm số điện thoại thông báo yêu cầu giải trình",
                outlined: !0,
                onClick: R
              }
            ),
            F.length > 0 && /* @__PURE__ */ e.jsx(
              N,
              {
                headerSchema: re,
                rowClassName: () => "align-top",
                hasActions: !0,
                actionSchema: {
                  columnProps: {
                    header: "Thao tác",
                    body: ne,
                    align: "right"
                  }
                },
                value: F,
                paginator: !1,
                first: 0
              }
            )
          ] })
        ] })
      ] }),
      footer: /* @__PURE__ */ e.jsx("div", { className: "flex justify-center gap-2 mt-6", children: /* @__PURE__ */ e.jsx(
        h,
        {
          icon: "ti ti-check",
          label: "Yêu cầu giải trình",
          loading: I,
          onClick: O(U, V)
        }
      ) })
    }
  );
}
export {
  Le as CreateExplain
};
