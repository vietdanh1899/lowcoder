import { u as S, a as j, b as E, r as P, F as n, R as g, j as r } from "./micro-config-C_rJxvYJ.js";
import { u as B, a as O } from "./combo-box-JSkXZHpO.js";
import { u as k } from "./get-explains-CeyRvbje.js";
import { r as I, m as W } from "./index-BiSBPJYS.js";
import { c as o, A as L } from "./datetime-BWZbrOGu.js";
import { A as R, a as y, b as z } from "./input-rM9ejZ0L.js";
import { A as V } from "./table-Bfzmvi9r.js";
import { A as U } from "./tag-CayhBlbO.js";
/* empty css                       */
function Z() {
  const C = S(), h = new URLSearchParams(C.search), v = j(), { theme: f } = E(), [a, u] = P.useState(
    h.get("lazyState") ? JSON.parse(h.get("lazyState") || "") : {
      first: 0,
      rows: 10,
      page: 1,
      filters: {
        criteria: { value: null, matchMode: n.CONTAINS },
        fieldId: { value: null, matchMode: n.EQUALS },
        createdByName: { value: null, matchMode: n.CONTAINS },
        content: { value: null, matchMode: n.CONTAINS },
        agencyAssignedName: { value: null, matchMode: n.CONTAINS },
        assignedByName: { value: null, matchMode: n.CONTAINS },
        startDateTime: { value: null, matchMode: n.DATE_BEFORE },
        endDateTime: { value: null, matchMode: n.DATE_AFTER },
        statusId: { value: null, matchMode: n.EQUALS }
      },
      sortField: "",
      sortOrder: void 0,
      multiSortMeta: void 0
    }
  ), { data: s, isLoading: b } = k({
    page: Math.ceil(a.first / a.rows) + 1,
    size: a.rows,
    orderBy: a.sortField,
    orderDirection: I(a.sortOrder),
    ...Object.entries(a.filters ?? {}).filter(([, e]) => e.value).map(([e, t]) => {
      const l = t;
      return e === "startDateTime" && l.value ? { startDate: o(l.value) } : e === "endDateTime" && l.value ? { endDate: o(l.value) } : { [e]: l.value };
    }).reduce(
      (e, t) => ({ ...e, ...t }),
      {}
    )
  }), { data: d } = B(), { data: c } = O(), N = (e) => {
    const t = [{ id: "", name: "-- Tất cả --" }, ...(d == null ? void 0 : d.data) || []], l = e.value || "";
    return /* @__PURE__ */ r.jsx(
      y,
      {
        value: l,
        options: t,
        optionLabel: "name",
        showClear: l !== "",
        defaultValue: "",
        optionValue: "id",
        onChange: (m) => e.filterApplyCallback(m.value)
      }
    );
  }, i = (e) => /* @__PURE__ */ r.jsx(
    R,
    {
      value: e.value,
      autoFocus: e.field === "criteria",
      showClear: !0,
      iconClass: "pi pi-search",
      onChange: (t) => e.filterApplyCallback(t.target.value.trim())
    }
  ), p = (e) => /* @__PURE__ */ r.jsx(
    z,
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
  ), T = [
    {
      columnProps: {
        field: "ordinalNumber",
        header: "STT",
        align: "center",
        body: (e, { rowIndex: t }) => /* @__PURE__ */ r.jsx("div", { className: "flex justify-center", children: t + 1 })
      },
      show: !0,
      width: "4rem",
      minWidth: "4rem"
    },
    {
      columnProps: {
        field: "criteria",
        header: "Chỉ tiêu",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        filterElement: i
      },
      show: !0,
      sortableColumn: !0,
      width: "12rem",
      minWidth: "12rem"
    },
    {
      columnProps: {
        field: "fieldId",
        header: "Loại cảnh báo",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        body: (e) => /* @__PURE__ */ r.jsx("span", { children: e.fieldName }),
        filterElement: N
      },
      show: !0,
      sortableColumn: !0,
      width: "16rem",
      minWidth: "16rem"
    },
    {
      columnProps: {
        field: "createdByName",
        header: "Người tạo yêu cầu",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        body: (e) => /* @__PURE__ */ r.jsxs("span", { children: [
          e.createdByName,
          " - ",
          e.agencyName
        ] }),
        filterElement: i
      },
      show: !0,
      width: "16rem",
      minWidth: "16rem"
    },
    {
      columnProps: {
        field: "createdAt",
        header: "Ngày tạo",
        body: (e) => /* @__PURE__ */ r.jsx("span", { children: o(e.createdAt) })
      },
      show: !0,
      width: "8rem",
      minWidth: "8rem"
    },
    {
      columnProps: {
        field: "content",
        header: "Nội dung yêu cầu",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        body: (e) => {
          var l;
          const t = ((l = e.content) == null ? void 0 : l.length) > 500 ? e.content.substring(0, 500) + "..." : e.content;
          return /* @__PURE__ */ r.jsx("span", { children: t });
        },
        filterElement: i
      },
      show: !0,
      width: "16rem",
      minWidth: "16rem"
    },
    {
      columnProps: {
        field: "agencyAssignedName",
        header: "Đơn vị nhận yêu cầu",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        filterElement: i
      },
      show: !0,
      width: "16rem",
      minWidth: "16rem"
    },
    {
      columnProps: {
        field: "assignedByName",
        header: "Cá nhân nhận yêu cầu",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        body: (e) => /* @__PURE__ */ r.jsx("span", { children: e.userAssignedName }),
        filterElement: i
      },
      show: !0,
      width: "16rem",
      minWidth: "16rem"
    },
    {
      columnProps: {
        field: "startDateTime",
        header: "Ngày bắt đầu",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        body: (e) => /* @__PURE__ */ r.jsx("span", { children: o(e.startDateTime) }),
        filterElement: p
      },
      show: !0,
      sortableColumn: !0,
      width: "14rem",
      minWidth: "14rem"
    },
    {
      columnProps: {
        field: "endDateTime",
        header: "Ngày kết thúc",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        body: (e) => /* @__PURE__ */ r.jsx("span", { children: o(e.endDateTime) }),
        filterElement: p
      },
      show: !0,
      sortableColumn: !0,
      width: "14rem",
      minWidth: "14rem"
    },
    {
      columnProps: {
        field: "statusId",
        header: "Trạng thái",
        filter: !0,
        showClearButton: !1,
        showFilterMenu: !1,
        body: (e) => /* @__PURE__ */ r.jsx("div", { className: "flex", children: /* @__PURE__ */ r.jsx(
          U,
          {
            value: e == null ? void 0 : e.statusName,
            style: {
              color: f === "light" ? e == null ? void 0 : e.statusColorCode : e == null ? void 0 : e.colorCodeDarkMode,
              border: "1px solid " + (f === "light" ? e == null ? void 0 : e.statusColorCode : e == null ? void 0 : e.colorCodeDarkMode),
              background: "transparent"
            }
          }
        ) }),
        filterElement: (e) => {
          const t = [{ id: "", name: "-- Tất cả --" }, ...(c == null ? void 0 : c.data) || []], l = e.value || "";
          return /* @__PURE__ */ r.jsx(
            y,
            {
              value: l,
              options: t,
              optionLabel: "name",
              optionValue: "id",
              showClear: l !== "",
              onChange: (m) => e.filterApplyCallback(m.value)
            }
          );
        }
      },
      show: !0,
      width: "12rem",
      minWidth: "12rem"
    }
  ], w = (e) => {
    const t = new URLSearchParams({ lazyState: JSON.stringify(a) });
    v(`/explain/detail?id=${e.id}&${t.toString()}`);
  }, A = (e) => {
    u(e);
  }, M = (e) => /* @__PURE__ */ r.jsx("div", { className: "flex gap-2 justify-end items-center", children: /* @__PURE__ */ r.jsx(L, { variant: "iview", onClick: () => w(e) }) }), x = g.useCallback(
    (e) => {
      u({
        ...a,
        first: 0,
        page: 1,
        sortField: e.orderBy,
        sortOrder: W(e.orderDirection)
      });
    },
    [a]
  ), F = g.useCallback((e) => {
    u((t) => t.filters !== e.filters ? {
      ...t,
      first: 0,
      page: 1,
      filters: e.filters
    } : t);
  }, []);
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx("div", { className: "card explain", children: /* @__PURE__ */ r.jsx(
    V,
    {
      hasActions: !0,
      actionSchema: {
        columnProps: {
          header: "Thao tác",
          body: M,
          align: "right",
          frozen: !0,
          alignFrozen: "right",
          style: { backgroundColor: "var(--surface-card)" }
        }
      },
      tableTitle: "Danh sách yêu cầu giải trình công việc",
      scrollable: !0,
      value: (s == null ? void 0 : s.data) || [],
      headerSchema: T,
      filters: a.filters,
      filterDisplay: "row",
      onFilter: F,
      onPage: A,
      alwaysShowPaginator: !!(s != null && s.totalElement),
      first: a.first,
      rows: a.rows,
      rowsPerPageOptions: [10, 20, 50, 100],
      loading: b,
      totalRecords: s == null ? void 0 : s.totalElement,
      emptyMessage: /* @__PURE__ */ r.jsx("div", { children: "Không có dữ liệu" }),
      onSort: x
    }
  ) }) });
}
export {
  Z as ExplainManagement
};
