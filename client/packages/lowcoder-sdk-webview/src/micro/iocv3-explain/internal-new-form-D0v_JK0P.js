import { m as x, u as q, a as M, r as f, p as k, j as e, o as l } from "./micro-config-C_rJxvYJ.js";
import { b as P, f as U } from "./combo-box-JSkXZHpO.js";
import { u as V, e as G, A as F, c as O } from "./datetime-BWZbrOGu.js";
import { u as W, a as Y, b as B, F as r, t as K, z as s } from "./index-DrZbATc5.js";
import { u as $, C as z } from "./upload-multiple-files-CbiCYeuN.js";
import { C as J } from "./CloseModalConfirm-C1j36dl_.js";
const Q = (t) => x.get(`/rs/internal-news/${t}`), H = "GET_INTERNAL_NEW", X = (t) => V({
  queryKey: [H, t],
  queryFn: t ? () => Q(t) : () => Promise.resolve({ data: null }),
  enabled: !!t
}), Z = (t) => t.id ? x.put(`/rs/internal-news/${t.id}`, t) : x.post("/rs/internal-news", t), ee = "UPSERT_INTERNAL_NEW";
function te() {
  return W({ mutationKey: [ee], mutationFn: Z });
}
const ne = s.object({
  title: s.string().trim().min(1, { message: "Vui lòng nhập tiêu đề!" }),
  content: s.string().trim().min(1, { message: "Vui lòng nhập nội dung!" }),
  category: s.string().trim().min(1, { message: "Vui lòng chọn loại truyền thông!" }),
  priorityId: s.number().nullable().refine((t) => t, { message: "Vui lòng chọn chuyên mục!" }),
  agencyAssignedId: s.number().nullable().refine((t) => t, { message: "Vui lòng chọn phòng ban nhận!" }),
  expiryDate: s.date({ invalid_type_error: "Ngày hết hạn không hợp lệ!" }).nullable().refine((t) => t, { message: "Vui lòng nhập ngày hết hạn!" }),
  mediaFiles: s.custom()
}), I = {
  title: "",
  content: "",
  category: "",
  agencyAssignedId: null,
  priorityId: null,
  expiryDate: null,
  mediaFiles: null
};
function ce() {
  const t = q(), u = M(), [E, N] = f.useState(!1), { showToast: v } = Y(), [T, m] = f.useState(!1), { id: p } = k();
  let a = "create";
  t.pathname.includes("/detail/") ? a = "detail" : t.pathname.includes("/update/") && (a = "update");
  const { control: i, handleSubmit: C, reset: g, getFieldState: A } = B({
    mode: "all",
    defaultValues: I,
    resolver: K(ne)
  }), D = $(), S = te(), { data: n } = X(p), { data: y } = P(), { data: h } = U();
  f.useEffect(() => {
    n && g({
      title: n.data.title,
      content: n.data.content,
      category: n.data.category,
      expiryDate: G(n.data.expiryDate),
      priorityId: n.data.priorityId,
      agencyAssignedId: n.data.agencyAssignedId,
      mediaFiles: n.data.mediaFiles
    });
  }, [n, g]);
  function L(o) {
    var d;
    const c = Object.keys(o)[0];
    (d = document.getElementById(c)) == null || d.focus();
  }
  function w(o) {
    N(!0);
    const c = {
      ...o,
      expiryDate: O(o.expiryDate || void 0, "DD/MM/YYYY"),
      mediaFiles: JSON.stringify(o.mediaFiles),
      id: p ? parseInt(p) : void 0
    };
    S.mutate(c, {
      onSettled: () => {
        N(!1);
      },
      onSuccess: () => {
        u(-1);
      },
      onError: (d) => {
        var b, j;
        v({
          code: (b = d.response) == null ? void 0 : b.data.code,
          detail: (j = d.response) == null ? void 0 : j.data.message
        });
      }
    });
  }
  const R = () => {
    a !== "detail" && _() ? m(!0) : u(-1);
  };
  function _() {
    return Object.keys(I).some((c) => A(c).isDirty);
  }
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      z,
      {
        cardTitle: a === "create" ? "Thêm mới truyền thông nội bộ" : a === "update" ? "Cập nhật truyền thông nội bộ " + (n == null ? void 0 : n.data.title) : "Chi tiết truyền thông nội bộ " + (n == null ? void 0 : n.data.title),
        body: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "col-span-6", children: /* @__PURE__ */ e.jsx(r, { name: "title", label: "Tiêu đề", control: i, required: !0, autoFocus: !0, mode: a }) }),
          /* @__PURE__ */ e.jsx("div", { className: "col-span-6", children: /* @__PURE__ */ e.jsx(
            r,
            {
              name: "expiryDate",
              control: i,
              type: l.CALENDAR,
              label: "Ngày hết hạn",
              required: !0,
              mode: a
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "col-span-12", children: /* @__PURE__ */ e.jsx(
            r,
            {
              name: "content",
              label: "Nội dung",
              control: i,
              type: l.EDITOR,
              required: !0,
              mode: a
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
            r,
            {
              name: "category",
              control: i,
              type: l.RADIO,
              options: [
                { id: "Thông báo", name: "Thông báo" },
                { id: "Cảnh báo", name: "Cảnh báo" }
              ],
              label: "Loại truyền thông",
              required: !0,
              mode: a
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
            r,
            {
              name: "priorityId",
              control: i,
              type: l.SELECT,
              options: (h == null ? void 0 : h.data) || [],
              label: "Mức độ",
              required: !0,
              mode: a
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ e.jsx(
            r,
            {
              name: "agencyAssignedId",
              control: i,
              type: l.SELECT,
              options: (y == null ? void 0 : y.data) || [],
              label: "Phòng ban nhận",
              required: !0,
              mode: a
            }
          ) }),
          /* @__PURE__ */ e.jsx("div", { className: "col-span-12", children: /* @__PURE__ */ e.jsx(
            r,
            {
              name: "mediaFiles",
              control: i,
              type: l.FILE,
              multiple: !0,
              label: "Tệp đính kèm",
              uploadProps: {
                accept: ".pdf, .doc, .docx, .jpg, .png, .jpeg",
                uploadFileMutation: D,
                autoUpload: !0,
                multiple: !0
              },
              mode: a
            }
          ) })
        ] }),
        footer: /* @__PURE__ */ e.jsxs("div", { className: "flex justify-center gap-2 mt-6", children: [
          /* @__PURE__ */ e.jsx(F, { variant: "close", severity: "secondary", onClick: R }),
          a !== "detail" && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
            F,
            {
              variant: a === "create" ? "create" : "update",
              loading: E,
              onClick: C(w, L)
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      J,
      {
        visible: T,
        acceptAction: () => {
          m(!1), u(-1), g();
        },
        rejectAction: () => m(!1)
      }
    )
  ] });
}
export {
  ce as InternalNewForm
};
