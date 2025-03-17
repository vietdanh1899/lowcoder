import { m as f, a as U, R as y, r as C, F as h, j as s } from "./micro-config-C_rJxvYJ.js";
import { e as X, g as z, f as H } from "./combo-box-JSkXZHpO.js";
import { u as S, a as q } from "./index-DrZbATc5.js";
import { u as V, c as J, A as c } from "./datetime-BWZbrOGu.js";
import { r as Z, m as D } from "./index-BiSBPJYS.js";
import { A as ee, a as te, b as se } from "./input-rM9ejZ0L.js";
import { A as ie } from "./table-Bfzmvi9r.js";
import { A as ne } from "./confirm-dialog-l-kJ-IQx.js";
import { A as E } from "./tag-CayhBlbO.js";
import { S as ae } from "./schedule-new-s7NL1MRx.js";
const le = (n) => f.delete(`/rs/news/${n}`), oe = "DELETE_NEW", re = () => S({
  mutationKey: [oe],
  mutationFn: (n) => le(n)
}), ce = (n) => f.get("/rs/news", { params: n }), de = "GET_NEWS", ue = (n) => V({
  queryKey: [de, n],
  queryFn: () => ce(n)
}), he = (n) => f.post(`/rs/news/post/${n}`), me = "POST_NEW", fe = () => S({
  mutationKey: [me],
  mutationFn: (n) => he(n)
}), pe = (n) => f.post(`/rs/news/take-back/${n}`), ge = "TAKE_BACK_NEW", ve = () => S({
  mutationKey: [ge],
  mutationFn: (n) => pe(n)
});
function Me() {
  const n = U(), { showToast: d } = q(), [i, o] = y.useState({
    id: void 0,
    loading: !1,
    visible: !1,
    message: "",
    header: "",
    acceptLabel: "",
    acceptAction: 0,
    acceptIcon: "",
    severity: void 0
  }), [N, x] = C.useState({
    id: void 0,
    visible: !1,
    scheduledDeliveryDate: void 0
  }), T = re(), j = ve(), A = fe(), [l, p] = C.useState({
    first: 0,
    rows: 10,
    page: 1,
    filters: {
      title: { value: null, matchMode: h.CONTAINS },
      newsCategoryId: { value: null, matchMode: h.EQUALS },
      priorityId: { value: null, matchMode: h.EQUALS },
      newsStatusId: { value: null, matchMode: h.EQUALS },
      expiryDate: { value: null, matchMode: h.DATE_IS }
    },
    sortField: "",
    sortOrder: void 0,
    multiSortMeta: void 0
  }), {
    data: r,
    isLoading: k,
    refetch: m
  } = ue({
    page: Math.ceil(l.first / l.rows) + 1,
    size: l.rows,
    ...Object.entries({
      orderBy: l.sortField,
      orderDirection: Z(l.sortOrder),
      ...Object.entries(l.filters ?? {}).filter(([e, t]) => t.value != null).map(([e, t]) => {
        const a = t;
        return a.matchMode === h.DATE_IS ? { [e]: J(a.value, "DD/MM/YYYY") } : { [e]: a.value };
      }).reduce(
        (e, t) => ({ ...e, ...t }),
        {}
      )
    }).filter(([e, t]) => t != null && t !== "").reduce((e, [t, a]) => ({ ...e, [t]: a }), {})
  }), { data: g } = X(), { data: v } = z(), { data: u } = H(), b = (e) => {
    let t = [];
    return e.field === "newsCategoryId" ? t = (v == null ? void 0 : v.data) || [] : e.field === "priorityId" ? t = (u == null ? void 0 : u.data) || [] : t = (g == null ? void 0 : g.data) || [], /* @__PURE__ */ s.jsx(
      te,
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
        onChange: (a) => e.filterApplyCallback(a.value)
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
          ee,
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
        field: "newsCategoryId",
        header: "Chuyên mục",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        filterElement: b,
        body: (e) => /* @__PURE__ */ s.jsx("span", { children: e == null ? void 0 : e.newsCategoryName })
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
          var a;
          const t = (a = u == null ? void 0 : u.data) == null ? void 0 : a.find((R) => R.id === e.priorityId);
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
          se,
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
    }
  ];
  function M(e) {
    n(`detail/${e.id}`);
  }
  function I(e) {
    n(`update/${e.id}`);
  }
  function w(e) {
    o({
      ...i,
      visible: !0,
      loading: !1,
      message: `Hành động này sẽ gỡ thông báo <b>${e == null ? void 0 : e.title}</b> trên danh sách và không thể hoàn tác được.`,
      header: "Xóa thông báo",
      acceptLabel: "Xóa",
      acceptIcon: "ti ti-trash",
      severity: "danger",
      id: e.id,
      acceptAction: 0
    });
  }
  function B(e) {
    o({
      ...i,
      visible: !0,
      loading: !1,
      message: `Bạn có chắc chắn muốn đăng tin thông báo <b>${e == null ? void 0 : e.title}</b>?`,
      header: "Đăng tin thông báo",
      acceptLabel: "Xác nhận",
      acceptIcon: "ti ti-check",
      severity: void 0,
      id: e.id,
      acceptAction: 2
    });
  }
  function P(e) {
    o({
      ...i,
      visible: !0,
      loading: !1,
      message: `Bạn có chắc chắn muốn thu hồi thông báo <b>${e == null ? void 0 : e.title}</b>?`,
      header: "Thu hồi thông báo",
      acceptLabel: "Xác nhận",
      acceptIcon: "ti ti-check",
      severity: void 0,
      id: e.id,
      acceptAction: 1
    });
  }
  const L = (e) => /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2 justify-end items-center", children: [
    /* @__PURE__ */ s.jsx(c, { variant: "iview", onClick: () => M(e) }),
    e.newsStatusId === 1 && /* @__PURE__ */ s.jsx(
      c,
      {
        variant: "icon",
        icon: "ti ti-arrow-back-up",
        tooltip: "Thu hồi",
        onClick: () => P(e)
      }
    ),
    e.newsStatusId !== 1 && /* @__PURE__ */ s.jsx(c, { variant: "iupdate", onClick: () => I(e) }),
    e.newsStatusId !== 1 && /* @__PURE__ */ s.jsx(
      c,
      {
        variant: "icon",
        icon: "ti ti-clock-cog",
        tooltip: "Hẹn giờ gửi thông báo",
        onClick: () => x({
          id: e.id,
          visible: !0,
          scheduledDeliveryDate: e.scheduledDeliveryDate
        })
      }
    ),
    e.newsStatusId !== 1 && /* @__PURE__ */ s.jsx(c, { variant: "idelete", onClick: () => w(e) }),
    e.newsStatusId !== 1 && /* @__PURE__ */ s.jsx(
      c,
      {
        variant: "icon",
        icon: "ti ti-send-2",
        tooltip: "Đăng",
        onClick: () => B(e)
      }
    )
  ] }), _ = (e) => {
    p(e);
  }, O = y.useCallback((e) => {
    p((t) => t.filters !== e.filters ? {
      ...t,
      first: 0,
      page: 1,
      filters: e.filters
    } : t);
  }, []), K = y.useCallback(
    (e) => {
      p({
        ...l,
        first: 0,
        page: 1,
        sortField: e.orderBy,
        sortOrder: D(e.orderDirection)
      });
    },
    [l]
  );
  function W() {
    n("create");
  }
  function $() {
    o({ ...i, loading: !0, visible: !1 }), j.mutate(i.id.toString(), {
      onSettled: () => {
        o({ ...i, loading: !1, visible: !1 });
      },
      onSuccess: (e) => {
        m(), d({
          code: e.code,
          detail: e.message
        });
      },
      onError: (e) => {
        var t, a;
        d({
          code: (t = e.response) == null ? void 0 : t.data.code,
          detail: (a = e.response) == null ? void 0 : a.data.message
        });
      }
    });
  }
  function Y() {
    o({ ...i, loading: !0, visible: !1 }), A.mutate(i.id.toString(), {
      onSettled: () => {
        o({ ...i, loading: !1, visible: !1 });
      },
      onSuccess: (e) => {
        m(), d({
          code: e.code,
          detail: e.message
        });
      },
      onError: (e) => {
        var t, a;
        d({
          code: (t = e.response) == null ? void 0 : t.data.code,
          detail: (a = e.response) == null ? void 0 : a.data.message
        });
      }
    });
  }
  const G = () => {
    o({ ...i, loading: !0, visible: !1 }), T.mutate(i.id.toString(), {
      onSettled: () => {
        o({ ...i, loading: !1, visible: !1 });
      },
      onSuccess: (e) => {
        m(), d({
          code: e.code,
          detail: e.message
        });
      },
      onError: (e) => {
        var t, a;
        d({
          code: (t = e.response) == null ? void 0 : t.data.code,
          detail: (a = e.response) == null ? void 0 : a.data.message
        });
      }
    });
  };
  function Q() {
    i.acceptAction === 0 ? G() : i.acceptAction === 1 ? $() : Y();
  }
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("div", { className: "card", children: /* @__PURE__ */ s.jsx(
      ie,
      {
        hasActions: !0,
        actionSchema: {
          columnProps: {
            header: "Thao tác",
            body: L,
            align: "right"
          },
          width: "8rem",
          minWidth: "8rem"
        },
        tableTitle: "Danh sách thông báo",
        buttonsTemplate: /* @__PURE__ */ s.jsx("div", { className: "flex justify-between items-center gap-4", children: /* @__PURE__ */ s.jsx(c, { variant: "create", onClick: W }) }),
        value: (r == null ? void 0 : r.data) || [],
        headerSchema: F,
        filters: l.filters,
        filterDisplay: "row",
        onFilter: O,
        onPage: _,
        alwaysShowPaginator: !!(r != null && r.totalElement),
        first: l.first,
        rows: l.rows,
        rowsPerPageOptions: [10, 20, 50, 100],
        loading: k,
        totalRecords: r == null ? void 0 : r.totalElement,
        emptyMessage: /* @__PURE__ */ s.jsx("div", { children: "Không có dữ liệu" }),
        onSort: K
      }
    ) }),
    /* @__PURE__ */ s.jsx(
      ne,
      {
        message: i.message,
        header: i.header,
        icon: "ti ti-alert-triangle",
        acceptLabel: i.acceptLabel,
        loading: i.loading,
        acceptIcon: i.acceptIcon,
        accept: () => {
          Q();
        },
        rejectLabel: "Hủy",
        reject: () => {
          o({ ...i, visible: !1, loading: !1 });
        },
        rejectIcon: "ti ti-x",
        acceptButtonProps: { severity: i.severity },
        loading: i.loading,
        visible: i.visible
      }
    ),
    /* @__PURE__ */ s.jsx(ae, { formState: N, setFormState: x, refetch: m })
  ] });
}
export {
  Me as News
};
