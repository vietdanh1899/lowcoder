import { m as f, u as q, a as R, r as j, p as W, j as t, o as p } from "./micro-config-C_rJxvYJ.js";
import { g as G, f as O } from "./combo-box-JSkXZHpO.js";
import { u as S, a as B, b as K, F as c, t as U, z as r } from "./index-DrZbATc5.js";
import { u as $, e as J, A as v, c as w } from "./datetime-BWZbrOGu.js";
import { u as z, C as Q } from "./upload-multiple-files-CbiCYeuN.js";
import { C as H } from "./CloseModalConfirm-C1j36dl_.js";
const X = (e) => e.id ? f.put(`/rs/news/update/post/${e.id}`, e) : f.post("/rs/news/post", e), Z = "CREATE_NEW";
function ee() {
  return S({ mutationKey: [Z], mutationFn: X });
}
const te = (e) => f.get(`/rs/news/${e}`), se = "GET_NEW", ae = (e) => $({
  queryKey: [se, e],
  queryFn: e ? () => te(e) : () => Promise.resolve({ data: null }),
  enabled: !!e
}), ne = (e) => e.id ? f.put(`/rs/news/update/save-draft/${e.id}`, e) : f.post("/rs/news/save-draft", e), ie = "SAVE_DRAFT_NEW";
function oe() {
  return S({ mutationKey: [ie], mutationFn: ne });
}
const re = r.object({
  title: r.string().trim().min(1, { message: "Vui lòng nhập tiêu đề!" }),
  content: r.string().trim().min(1, { message: "Vui lòng nhập nội dung!" }),
  newsCategoryId: r.number().nullable().refine((e) => e, { message: "Vui lòng chọn chuyên mục!" }),
  priorityId: r.number().nullable().refine((e) => e, { message: "Vui lòng chọn mức độ!" }),
  expiryDate: r.date({ invalid_type_error: "Ngày hết hạn không hợp lệ!" }).nullable().refine((e) => e, { message: "Vui lòng nhập ngày hết hạn!" }),
  mediaFiles: r.custom()
}), T = {
  title: "",
  content: "",
  newsCategoryId: null,
  priorityId: null,
  expiryDate: null,
  mediaFiles: null
};
function fe() {
  const e = q(), g = R(), [E, y] = j.useState(!1), { showToast: b } = B(), [I, h] = j.useState(!1), { id: u } = W();
  let a = "create";
  e.pathname.includes("/detail/") ? a = "detail" : e.pathname.includes("/update/") && (a = "update");
  const { control: l, handleSubmit: C, reset: x, getFieldState: A } = K({
    mode: "all",
    defaultValues: T,
    resolver: U(re)
  }), M = z(), _ = ee(), k = oe(), { data: s } = ae(u), { data: N } = G(), { data: F } = O();
  j.useEffect(() => {
    s && x({
      title: s.data.title,
      content: s.data.content,
      newsCategoryId: s.data.newsCategoryId,
      priorityId: s.data.priorityId,
      expiryDate: J(s.data.expiryDate),
      mediaFiles: s.data.mediaFiles
    });
  }, [s, x]);
  function L(n) {
    const o = {
      ...n,
      expiryDate: w(n.expiryDate || void 0, "DD/MM/YYYY"),
      mediaFiles: JSON.stringify(n.mediaFiles),
      isPublic: 0,
      id: u ? parseInt(u) : void 0
    };
    k.mutate(o, {
      onSettled: () => {
        y(!1);
      },
      onSuccess: () => {
        g(-1);
      },
      onError: (i) => {
        var d, m;
        b({
          code: (d = i.response) == null ? void 0 : d.data.code,
          detail: (m = i.response) == null ? void 0 : m.data.message
        });
      }
    });
  }
  function D(n) {
    var i;
    const o = Object.keys(n)[0];
    (i = document.getElementById(o)) == null || i.focus();
  }
  function P(n) {
    y(!0);
    const o = {
      ...n,
      expiryDate: w(n.expiryDate || void 0, "DD/MM/YYYY"),
      mediaFiles: JSON.stringify(n.mediaFiles),
      isPublic: 0,
      id: u ? parseInt(u) : void 0
    };
    _.mutate(o, {
      onSettled: () => {
        y(!1);
      },
      onSuccess: () => {
        g(-1);
      },
      onError: (i) => {
        var d, m;
        b({
          code: (d = i.response) == null ? void 0 : d.data.code,
          detail: (m = i.response) == null ? void 0 : m.data.message
        });
      }
    });
  }
  const V = () => {
    a !== "detail" && Y() ? h(!0) : g(-1);
  };
  function Y() {
    return Object.keys(T).some((o) => A(o).isDirty);
  }
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      Q,
      {
        cardTitle: a === "create" ? "Thêm mới thông báo" : a === "update" ? "Cập nhật thông báo " + (s == null ? void 0 : s.data.title) : "Chi tiết thông báo " + (s == null ? void 0 : s.data.title),
        body: /* @__PURE__ */ t.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
          /* @__PURE__ */ t.jsx("div", { className: "col-span-12", children: /* @__PURE__ */ t.jsx(c, { name: "title", label: "Tiêu đề", control: l, required: !0, autoFocus: !0, mode: a }) }),
          /* @__PURE__ */ t.jsx("div", { className: "col-span-12", children: /* @__PURE__ */ t.jsx(
            c,
            {
              name: "content",
              label: "Nội dung",
              control: l,
              type: p.EDITOR,
              required: !0,
              mode: a
            }
          ) }),
          /* @__PURE__ */ t.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ t.jsx(
            c,
            {
              name: "newsCategoryId",
              control: l,
              type: p.SELECT,
              options: (N == null ? void 0 : N.data) || [],
              label: "Chuyên mục",
              required: !0,
              mode: a
            }
          ) }),
          /* @__PURE__ */ t.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ t.jsx(
            c,
            {
              name: "priorityId",
              control: l,
              type: p.SELECT,
              options: (F == null ? void 0 : F.data) || [],
              label: "Mức độ",
              required: !0,
              mode: a
            }
          ) }),
          /* @__PURE__ */ t.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ t.jsx(
            c,
            {
              name: "expiryDate",
              control: l,
              type: p.CALENDAR,
              label: "Ngày hết hạn",
              required: !0,
              mode: a
            }
          ) }),
          /* @__PURE__ */ t.jsx("div", { className: "col-span-12", children: /* @__PURE__ */ t.jsx(
            c,
            {
              name: "mediaFiles",
              control: l,
              type: p.FILE,
              multiple: !0,
              label: "Tệp đính kèm",
              uploadProps: {
                accept: ".pdf, .doc, .docx, .jpg, .png, .jpeg",
                uploadFileMutation: M,
                autoUpload: !0,
                multiple: !0
              },
              mode: a
            }
          ) })
        ] }),
        footer: /* @__PURE__ */ t.jsxs("div", { className: "flex justify-center gap-2 mt-6", children: [
          /* @__PURE__ */ t.jsx(v, { variant: "close", severity: "secondary", onClick: V }),
          a !== "detail" && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(
              v,
              {
                icon: "ti ti-check",
                label: "Lưu nháp",
                className: "p-button-outlined",
                loading: E,
                onClick: C(L, D)
              }
            ),
            /* @__PURE__ */ t.jsx(
              v,
              {
                icon: "ti ti-send-2",
                label: "Đăng tin",
                loading: E,
                onClick: C(P, D)
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ t.jsx(
      H,
      {
        visible: I,
        acceptAction: () => {
          h(!1), g(-1), x();
        },
        rejectAction: () => h(!1)
      }
    )
  ] });
}
export {
  fe as NewForm
};
