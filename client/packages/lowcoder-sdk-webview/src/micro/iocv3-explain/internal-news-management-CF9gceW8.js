import { m as f, a as Q, R as v, r as N, F as u, j as s } from "./micro-config-C_rJxvYJ.js";
import { e as U, f as X } from "./combo-box-JSkXZHpO.js";
import { u as y, a as z } from "./index-DrZbATc5.js";
import { u as q, c as H, A as h } from "./datetime-BWZbrOGu.js";
import { r as V, m as J } from "./index-BiSBPJYS.js";
import { A as Z, a as D, b as ee } from "./input-rM9ejZ0L.js";
import { A as te } from "./table-Bfzmvi9r.js";
import { A as ne } from "./confirm-dialog-l-kJ-IQx.js";
import { A as E } from "./tag-CayhBlbO.js";
import { S as se } from "./schedule-new-s7NL1MRx.js";
const ae = (a) => f.delete(`/rs/internal-news/${a}`), ie = "DELETE_INTERNAL_NEW", le = () => y({
  mutationKey: [ie],
  mutationFn: (a) => ae(a)
}), re = (a) => f.get("/rs/internal-news", { params: a }), oe = "GET_INTERNAL_NEWS", ce = (a) => q({
  queryKey: [oe, a],
  queryFn: () => re(a)
}), de = (a) => f.post(`/rs/internal-news/post/${a}`), ue = "POST_INTERNAL_NEW", he = () => y({
  mutationKey: [ue],
  mutationFn: (a) => de(a)
}), me = (a) => f.post(`/rs/internal-news/take-back/${a}`), fe = "TAKE_BACK_INTERNAL_NEW", pe = () => y({
  mutationKey: [fe],
  mutationFn: (a) => me(a)
});
function Fe() {
  const a = Q(), { showToast: c } = z(), [n, r] = v.useState({
    id: void 0,
    loading: !1,
    visible: !1,
    message: "",
    header: "",
    acceptLabel: "",
    acceptAction: 0,
    acceptIcon: "",
    severity: void 0
  }), [S, T] = N.useState({
    id: void 0,
    visible: !1,
    scheduledDeliveryDate: void 0
  }), A = le(), x = pe(), I = he(), [l, p] = N.useState({
    first: 0,
    rows: 10,
    page: 1,
    filters: {
      title: { value: null, matchMode: u.CONTAINS },
      category: { value: null, matchMode: u.EQUALS },
      priorityId: { value: null, matchMode: u.EQUALS },
      newsStatusId: { value: null, matchMode: u.EQUALS },
      expiryDate: { value: null, matchMode: u.DATE_IS }
    },
    sortField: "",
    sortOrder: void 0,
    multiSortMeta: void 0
  }), {
    data: o,
    isLoading: C,
    refetch: m
  } = ce({
    page: Math.ceil(l.first / l.rows) + 1,
    size: l.rows,
    ...Object.entries({
      orderBy: l.sortField,
      orderDirection: V(l.sortOrder),
      ...Object.entries(l.filters ?? {}).filter(([e, t]) => t.value != null).map(([e, t]) => {
        const i = t;
        return i.matchMode === u.DATE_IS ? { [e]: H(i.value, "DD/MM/YYYY") } : { [e]: i.value };
      }).reduce(
        (e, t) => ({ ...e, ...t }),
        {}
      )
    }).filter(([e, t]) => t != null && t !== "").reduce((e, [t, i]) => ({ ...e, [t]: i }), {})
  }), { data: g } = U(), { data: d } = X(), b = (e) => {
    let t = [];
    return e.field === "category" ? t = [
      { id: "Thông báo", name: "Thông báo" },
      { id: "Cảnh báo", name: "Cảnh báo" }
    ] : e.field === "priorityId" ? t = (d == null ? void 0 : d.data) || [] : t = (g == null ? void 0 : g.data) || [], /* @__PURE__ */ s.jsx(
      D,
      {
        value: e.value,
        options: t,
        optionLabel: "name",
        optionValue: "id",
        showClear: e.value,
        emptyMessage: "Không có dữ liệu",
        emptyFilterMessage: "Không có dữ liệu",
        filter: !0,
        placeholder: "-- Tất cả --",
        onChange: (i) => e.filterApplyCallback(i.value)
      }
    );
  }, F = [
    {
      columnProps: {
        field: "ordinalNumber",
        header: "STT",
        align: "center",
        body: (e, { rowIndex: t }) => /* @__PURE__ */ s.jsx("div", { className: "flex justify-center", children: t + 1 })
      },
      show: !0,
      width: "4rem",
      minWidth: "4rem"
    },
    {
      columnProps: {
        field: "title",
        header: "Tiêu đề",
        sortable: !0,
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        filterElement: (e) => /* @__PURE__ */ s.jsx(
          Z,
          {
            value: e.value,
            showClear: !0,
            iconClass: "pi pi-search",
            onChange: (t) => e.filterApplyCallback(t.target.value)
          }
        )
      },
      show: !0
    },
    {
      columnProps: {
        field: "category",
        header: "Loại truyền thông",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        filterElement: b
      },
      show: !0
    },
    {
      columnProps: {
        field: "expiryDate",
        header: "Ngày hết hạn",
        sortable: !0,
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        filterElement: (e) => /* @__PURE__ */ s.jsx(
          ee,
          {
            selectionMode: "single",
            className: "w-20",
            value: e.value,
            onChange: (t) => e.filterApplyCallback(t),
            dateFormat: "dd/mm/yy",
            placeholder: "DD/MM/YYYY",
            showIcon: !0,
            showClear: !0
          }
        )
      },
      show: !0
    },
    {
      columnProps: {
        field: "priorityId",
        header: "Mức độ",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        filterElement: b,
        body: (e) => {
          var i;
          const t = (i = d == null ? void 0 : d.data) == null ? void 0 : i.find((G) => G.id === e.priorityId);
          return /* @__PURE__ */ s.jsx("div", { className: "flex", children: /* @__PURE__ */ s.jsx(
            E,
            {
              value: e == null ? void 0 : e.priorityName,
              style: {
                color: t == null ? void 0 : t.colorCode,
                border: `1px solid ${t == null ? void 0 : t.colorCode}`,
                background: "transparent"
              }
            }
          ) });
        }
      },
      show: !0
    },
    {
      columnProps: {
        field: "newsStatusId",
        header: "Trạng thái",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        filterElement: b,
        body: (e) => {
          let t = {
            color: "#661814",
            border: "1px solid #661814",
            background: "#FFD0CE"
          };
          return e.newsStatusId === 1 ? t = {
            color: "#0E4F26",
            border: "1px solid #0E4F26",
            background: "#CAF1D8"
          } : e.newsStatusId === 2 && (t = {
            color: "#282E38",
            border: "1px solid #282E38",
            background: "#F7F8F9"
          }), /* @__PURE__ */ s.jsx("div", { className: "flex", children: /* @__PURE__ */ s.jsx(E, { value: e == null ? void 0 : e.newsStatusName, style: t }) });
        }
      },
      show: !0
    }
  ];
  function j(e) {
    a(`detail/${e.id}`);
  }
  function k(e) {
    a(`update/${e.id}`);
  }
  function M(e) {
    r({
      ...n,
      visible: !0,
      loading: !1,
      message: `Hành động này sẽ gỡ truyền thông nội bộ <b>${e == null ? void 0 : e.title}</b> trên danh sách và không thể hoàn tác được.`,
      header: "Xóa truyền thông nội bộ",
      acceptLabel: "Xóa",
      acceptIcon: "ti ti-trash",
      severity: "danger",
      id: e.id,
      acceptAction: 0
    });
  }
  function w(e) {
    r({
      ...n,
      visible: !0,
      loading: !1,
      message: `Bạn có chắc chắn muốn đăng tin truyền thông nội bộ <b>${e == null ? void 0 : e.title}</b>?`,
      header: "Đăng tin truyền thông nội bộ",
      acceptLabel: "Xác nhận",
      acceptIcon: "ti ti-check",
      severity: void 0,
      id: e.id,
      acceptAction: 2
    });
  }
  function L(e) {
    r({
      ...n,
      visible: !0,
      loading: !1,
      message: `Bạn có chắc chắn muốn thu hồi truyền thông nội bộ <b>${e == null ? void 0 : e.title}</b>?`,
      header: "Thu hồi truyền thông nội bộ",
      acceptLabel: "Xác nhận",
      acceptIcon: "ti ti-check",
      severity: void 0,
      id: e.id,
      acceptAction: 1
    });
  }
  const _ = (e) => /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2 justify-end items-center", children: [
    /* @__PURE__ */ s.jsx(h, { variant: "iview", onClick: () => j(e) }),
    e.newsStatusId === 1 && /* @__PURE__ */ s.jsx(
      h,
      {
        variant: "icon",
        icon: "ti ti-arrow-back-up",
        tooltip: "Thu hồi",
        onClick: () => L(e)
      }
    ),
    e.newsStatusId !== 1 && /* @__PURE__ */ s.jsx(h, { variant: "iupdate", onClick: () => k(e) }),
    e.newsStatusId !== 1 && /* @__PURE__ */ s.jsx(h, { variant: "idelete", onClick: () => M(e) }),
    e.newsStatusId !== 1 && /* @__PURE__ */ s.jsx(
      h,
      {
        variant: "icon",
        icon: "ti ti-send-2",
        tooltip: "Đăng",
        onClick: () => w(e)
      }
    )
  ] }), B = (e) => {
    p(e);
  }, P = v.useCallback((e) => {
    p((t) => t.filters !== e.filters ? {
      ...t,
      first: 0,
      page: 1,
      filters: e.filters
    } : t);
  }, []), O = v.useCallback(
    (e) => {
      p({
        ...l,
        first: 0,
        page: 1,
        sortField: e.orderBy,
        sortOrder: J(e.orderDirection)
      });
    },
    [l]
  );
  function R() {
    a("create");
  }
  function K() {
    r({ ...n, loading: !0, visible: !1 }), x.mutate(n.id.toString(), {
      onSettled: () => {
        r({ ...n, loading: !1, visible: !1 });
      },
      onSuccess: (e) => {
        m(), c({
          code: e.code,
          detail: e.message
        });
      },
      onError: (e) => {
        var t, i;
        c({
          code: (t = e.response) == null ? void 0 : t.data.code,
          detail: (i = e.response) == null ? void 0 : i.data.message
        });
      }
    });
  }
  function W() {
    r({ ...n, loading: !0, visible: !1 }), I.mutate(n.id.toString(), {
      onSettled: () => {
        r({ ...n, loading: !1, visible: !1 });
      },
      onSuccess: (e) => {
        m(), c({
          code: e.code,
          detail: e.message
        });
      },
      onError: (e) => {
        var t, i;
        c({
          code: (t = e.response) == null ? void 0 : t.data.code,
          detail: (i = e.response) == null ? void 0 : i.data.message
        });
      }
    });
  }
  const $ = () => {
    r({ ...n, loading: !0, visible: !1 }), A.mutate(n.id.toString(), {
      onSettled: () => {
        r({ ...n, loading: !1, visible: !1 });
      },
      onSuccess: (e) => {
        m(), c({
          code: e.code,
          detail: e.message
        });
      },
      onError: (e) => {
        var t, i;
        c({
          code: (t = e.response) == null ? void 0 : t.data.code,
          detail: (i = e.response) == null ? void 0 : i.data.message
        });
      }
    });
  };
  function Y() {
    n.acceptAction === 0 ? $() : n.acceptAction === 1 ? K() : W();
  }
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("div", { className: "card", children: /* @__PURE__ */ s.jsx(
      te,
      {
        hasActions: !0,
        actionSchema: {
          columnProps: {
            header: "Thao tác",
            body: _,
            align: "right"
          },
          width: "8rem",
          minWidth: "8rem"
        },
        tableTitle: "Danh sách truyền thông nội bộ",
        buttonsTemplate: /* @__PURE__ */ s.jsx("div", { className: "flex justify-between items-center gap-4", children: /* @__PURE__ */ s.jsx(h, { variant: "create", onClick: R }) }),
        value: (o == null ? void 0 : o.data) || [],
        headerSchema: F,
        filters: l.filters,
        filterDisplay: "row",
        onFilter: P,
        onPage: B,
        alwaysShowPaginator: !!(o != null && o.totalElement),
        first: l.first,
        rows: l.rows,
        rowsPerPageOptions: [10, 20, 50, 100],
        loading: C,
        totalRecords: o == null ? void 0 : o.totalElement,
        emptyMessage: /* @__PURE__ */ s.jsx("div", { children: "Không có dữ liệu" }),
        onSort: O
      }
    ) }),
    /* @__PURE__ */ s.jsx(
      ne,
      {
        message: n.message,
        header: n.header,
        icon: "ti ti-alert-triangle",
        acceptLabel: n.acceptLabel,
        loading: n.loading,
        acceptIcon: n.acceptIcon,
        accept: () => {
          Y();
        },
        rejectLabel: "Hủy",
        reject: () => {
          r({ ...n, visible: !1, loading: !1 });
        },
        rejectIcon: "ti ti-x",
        acceptButtonProps: { severity: n.severity },
        loading: n.loading,
        visible: n.visible
      }
    ),
    /* @__PURE__ */ s.jsx(se, { formState: S, setFormState: T, refetch: m })
  ] });
}
export {
  Fe as InternalNews
};
