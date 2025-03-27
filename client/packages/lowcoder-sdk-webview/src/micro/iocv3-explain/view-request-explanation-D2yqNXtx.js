import { u as x, a as y, b as S, r as j, j as t, l as v } from "./micro-config-C_rJxvYJ.js";
import { u as P } from "./get-explains-CeyRvbje.js";
import { c as T, A as b } from "./datetime-BWZbrOGu.js";
import { A } from "./table-Bfzmvi9r.js";
import { A as N } from "./tag-CayhBlbO.js";
function O() {
  const l = x(), i = new URLSearchParams(l.search), d = y(), { theme: c } = S(), o = i.get("criteria") || "", [r, u] = j.useState(
    i.get("lazyState") ? JSON.parse(i.get("lazyState") || "") : {
      first: 0,
      rows: 10,
      page: 1,
      filters: {},
      sortField: "",
      sortOrder: void 0,
      multiSortMeta: void 0
    }
  ), h = [
    {
      columnProps: {
        field: "ordinalNumber",
        header: "STT",
        align: "left",
        body: (e, { rowIndex: n }) => /* @__PURE__ */ t.jsx("span", { children: n + 1 })
      },
      show: !0
    },
    {
      columnProps: {
        field: "content",
        header: "Nội dung yêu cầu giải trình",
        body: (e) => {
          var a;
          const n = ((a = e.content) == null ? void 0 : a.length) > 500 ? e.content.substring(0, 500) + "..." : e.content;
          return /* @__PURE__ */ t.jsx("span", { children: n });
        }
      },
      minWidth: "150px",
      maxWidth: "300px",
      show: !0
    },
    {
      columnProps: {
        field: "createdAt",
        header: "Thời gian tạo",
        body: (e) => /* @__PURE__ */ t.jsx("span", { children: T(e.createdAt, v.DATE_TIME) })
      },
      show: !0
    },
    {
      columnProps: {
        field: "statusName",
        header: "Trạng thái",
        body: (e) => /* @__PURE__ */ t.jsx("div", { className: "flex", children: /* @__PURE__ */ t.jsx(
          N,
          {
            value: e == null ? void 0 : e.statusName,
            style: {
              color: c === "light" ? e == null ? void 0 : e.statusColorCode : e == null ? void 0 : e.colorCodeDarkMode,
              border: "1px solid " + (c === "light" ? e == null ? void 0 : e.statusColorCode : e == null ? void 0 : e.colorCodeDarkMode),
              background: "transparent"
            }
          }
        ) })
      },
      minWidth: "170px",
      show: !0
    }
  ], m = (e) => {
    u(e);
  }, { data: s, isLoading: p } = P({
    page: Math.ceil(r.first / r.rows) + 1,
    size: r.rows,
    isOnlyParent: 1,
    criteria: o
  }), g = (e) => {
    const n = new URLSearchParams({ lazyState: JSON.stringify(r) });
    d(`/explain/detail?id=${e.id}&criteria=${o}&${n}`);
  }, f = (e) => /* @__PURE__ */ t.jsx("div", { className: "flex gap-2 justify-center items-center", children: /* @__PURE__ */ t.jsx(b, { variant: "iview", onClick: () => g(e) }) });
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx("div", { className: "card", children: /* @__PURE__ */ t.jsx(
    A,
    {
      hasActions: !0,
      actionSchema: {
        columnProps: {
          header: "Thao tác",
          body: f,
          align: "center"
        }
      },
      tableTitle: "Danh sách yêu cầu giải trình công việc của chỉ tiêu " + o,
      value: (s == null ? void 0 : s.data) || [],
      headerSchema: h,
      onPage: m,
      alwaysShowPaginator: !!(s != null && s.totalElement),
      first: r.first,
      rows: r.rows,
      rowsPerPageOptions: [10, 20, 50, 100],
      loading: p,
      totalRecords: s == null ? void 0 : s.totalElement,
      emptyMessage: /* @__PURE__ */ t.jsx("div", { children: "Không có dữ liệu" })
    }
  ) }) });
}
export {
  O as ViewExplain
};
