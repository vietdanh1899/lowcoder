import { r as d, c as Et, P as Nt, C as Ue, d as Pt, e as At, U as It, f as mt, O as Y, g as Z, D, I as be, h as vt, i as ze, T as Tn, j as a, k as jn, l as Ze, m as xt, n as Pe, o as De, u as kt, a as Cn, b as wt } from "./micro-config-C_rJxvYJ.js";
import { C as _t, a as Sn, u as En, c as ae, A as L, b as Ot, d as gt } from "./datetime-BWZbrOGu.js";
import { u as Nn, a as Ae, b as rt, F as Fe, t as it, z as le } from "./index-DrZbATc5.js";
import { C as Pn, c as F } from "./input-rM9ejZ0L.js";
import { u as An, C as In } from "./upload-multiple-files-CbiCYeuN.js";
import { A as Le } from "./confirm-dialog-l-kJ-IQx.js";
import { A as et } from "./tag-CayhBlbO.js";
import { A as Ke } from "./dialog-CtujszD-.js";
import { A as Ht } from "./table-Bfzmvi9r.js";
function tt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function xn(e) {
  if (Array.isArray(e)) return tt(e);
}
function kn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Bt(e, t) {
  if (e) {
    if (typeof e == "string") return tt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tt(e, t);
  }
}
function wn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _n(e) {
  return xn(e) || kn(e) || Bt(e) || wn();
}
function Ee(e) {
  "@babel/helpers - typeof";
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ee(e);
}
function On(e, t) {
  if (Ee(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Ee(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hn(e) {
  var t = On(e, "string");
  return Ee(t) === "symbol" ? t : String(t);
}
function Rt(e, t, n) {
  return t = Hn(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Bn(e) {
  if (Array.isArray(e)) return e;
}
function Rn(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, i, h, g, p = [], j = !0, I = !1;
    try {
      if (h = (n = n.call(e)).next, t !== 0) for (; !(j = (o = h.call(n)).done) && (p.push(o.value), p.length !== t); j = !0) ;
    } catch (k) {
      I = !0, i = k;
    } finally {
      try {
        if (!j && n.return != null && (g = n.return(), Object(g) !== g)) return;
      } finally {
        if (I) throw i;
      }
    }
    return p;
  }
}
function Dn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Se(e, t) {
  return Bn(e) || Rn(e, t) || Bt(e, t) || Dn();
}
function yt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yt(Object(n), !0).forEach(function(o) {
      Rt(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
var Fn = {
  navcontent: "p-tabview-nav-content",
  nav: "p-tabview-nav",
  inkbar: "p-tabview-ink-bar",
  panelcontainer: function(t) {
    var n = t.props;
    return Z("p-tabview-panels", n.panelContainerClassName);
  },
  prevbutton: "p-tabview-nav-prev p-tabview-nav-btn p-link",
  nextbutton: "p-tabview-nav-next p-tabview-nav-btn p-link",
  root: function(t) {
    var n = t.props;
    return Z("p-tabview p-component", {
      "p-tabview-scrollable": n.scrollable
    });
  },
  navcontainer: "p-tabview-nav-container",
  tab: {
    header: function(t) {
      var n = t.selected, o = t.disabled, i = t.headerClassName, h = t._className;
      return Z("p-unselectable-text", {
        "p-tabview-selected p-highlight": n,
        "p-disabled": o
      }, i, h);
    },
    headertitle: "p-tabview-title",
    headeraction: "p-tabview-nav-link",
    closeIcon: "p-tabview-close",
    content: function(t) {
      var n = t.props, o = t.selected, i = t.getTabProp, h = t.tab, g = t.isSelected, p = t.shouldUseTab, j = t.index;
      return p(h, j) && (!n.renderActiveOnly || g(j)) ? Z(i(h, "contentClassName"), i(h, "className"), "p-tabview-panel", {
        "p-hidden": !o
      }) : void 0;
    }
  }
}, Ln = {
  tab: {
    header: function(t) {
      var n = t.headerStyle, o = t._style;
      return Oe(Oe({}, n || {}), o || {});
    },
    content: function(t) {
      var n = t.props, o = t.getTabProp, i = t.tab, h = t.isSelected, g = t.shouldUseTab, p = t.index;
      return g(i, p) && (!n.renderActiveOnly || h(p)) ? Oe(Oe({}, o(i, "contentStyle") || {}), o(i, "style") || {}) : void 0;
    }
  }
}, He = Ue.extend({
  defaultProps: {
    __TYPE: "TabView",
    id: null,
    activeIndex: 0,
    className: null,
    onBeforeTabChange: null,
    onBeforeTabClose: null,
    onTabChange: null,
    onTabClose: null,
    panelContainerClassName: null,
    panelContainerStyle: null,
    renderActiveOnly: !0,
    scrollable: !1,
    style: null,
    children: void 0
  },
  css: {
    classes: Fn,
    inlineStyles: Ln
  }
}), me = Ue.extend({
  defaultProps: {
    __TYPE: "TabPanel",
    children: void 0,
    className: null,
    closable: !1,
    closeIcon: null,
    contentClassName: null,
    contentStyle: null,
    disabled: !1,
    header: null,
    headerClassName: null,
    headerStyle: null,
    headerTemplate: null,
    leftIcon: null,
    nextButton: null,
    prevButton: null,
    rightIcon: null,
    style: null,
    visible: !0
  },
  getCProp: function(t, n) {
    return Y.getComponentProp(t, n, me.defaultProps);
  },
  getCProps: function(t) {
    return Y.getComponentProps(t, me.defaultProps);
  },
  getCOtherProps: function(t) {
    return Y.getComponentDiffProps(t, me.defaultProps);
  }
});
function Tt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tt(Object(n), !0).forEach(function(o) {
      Rt(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
var Dt = function() {
}, Ft = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = Et(), o = d.useContext(Nt), i = He.getProps(e, o), h = d.useState(i.id), g = Se(h, 2), p = g[0], j = g[1], I = d.useState(!0), k = Se(I, 2), w = k[0], $ = k[1], _ = d.useState(!1), B = Se(_, 2), O = B[0], S = B[1], N = d.useState([]), v = Se(N, 2), P = v[0], f = v[1], R = d.useState(i.activeIndex), r = Se(R, 2), E = r[0], ee = r[1], ce = d.useRef(null), M = d.useRef(null), te = d.useRef(null), re = d.useRef(null), ie = d.useRef(null), C = d.useRef(null), H = d.useRef({}), q = i.onTabChange ? i.activeIndex : E, J = d.Children.count(i.children), xe = {
    props: i,
    state: {
      id: p,
      isPrevButtonDisabled: w,
      isNextButtonDisabled: O,
      hiddenTabsState: P,
      activeIndex: E
    }
  }, de = He.setMetaData(Be({}, xe)), U = de.ptm, ge = de.ptmo, K = de.cx, ke = de.sx, qe = de.isUnstyled;
  Pt(He.css.styles, qe, {
    name: "tabview"
  });
  var ne = function(s, c, u) {
    var m = {
      props: s.props,
      parent: xe,
      context: {
        index: u,
        count: J,
        first: u === 0,
        last: u === J - 1,
        active: u == E,
        disabled: X(s, "disabled")
      }
    };
    return n(U("tab.".concat(c), {
      tab: m
    }), U("tabpanel.".concat(c), {
      tabpanel: m
    }), U("tabpanel.".concat(c), m), ge(X(s, "pt"), c, m));
  }, ue = function(s) {
    return s === q;
  }, X = function(s, c) {
    return me.getCProp(s, c);
  }, x = function(s) {
    return s && X(s, "visible") && Y.isValidChild(s, "TabPanel") && P.every(function(c) {
      return c !== s.key;
    });
  }, l = function(s) {
    var c = d.Children.map(i.children, function(u, m) {
      if (x(u))
        return {
          tab: u,
          index: m
        };
    });
    return c.find(function(u) {
      var m = u.tab, W = u.index;
      return !X(m, "disabled") && W >= s;
    }) || c.reverse().find(function(u) {
      var m = u.tab, W = u.index;
      return !X(m, "disabled") && s > W;
    });
  }, b = function(s, c) {
    s.preventDefault();
    var u = i.onBeforeTabClose, m = i.onTabClose, W = i.children, he = W[c].key;
    u && u({
      originalEvent: s,
      index: c
    }) === !1 || (f([].concat(_n(P), [he])), m && m({
      originalEvent: s,
      index: c
    }));
  }, y = function(s, c, u) {
    A(s, c, u);
  }, A = function(s, c, u) {
    if (s && s.preventDefault(), !X(c, "disabled")) {
      if (i.onBeforeTabChange && i.onBeforeTabChange({
        originalEvent: s,
        index: u
      }) === !1)
        return;
      i.onTabChange ? i.onTabChange({
        originalEvent: s,
        index: u
      }) : ee(u);
    }
    je({
      index: u
    });
  }, V = function(s, c, u) {
    switch (s.code) {
      case "ArrowLeft":
        Q(s);
        break;
      case "ArrowRight":
        G(s);
        break;
      case "Home":
        oe(s);
        break;
      case "End":
        fe(s);
        break;
      case "PageDown":
        ye(s);
        break;
      case "PageUp":
        Te(s);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        Ve(s, c, u);
        break;
    }
  }, G = function(s) {
    var c = we(s.target.parentElement);
    c ? se(c) : oe(s), s.preventDefault();
  }, Q = function(s) {
    var c = _e(s.target.parentElement);
    c ? se(c) : fe(s), s.preventDefault();
  }, oe = function(s) {
    var c = Xe();
    se(c), s.preventDefault();
  }, fe = function(s) {
    var c = We();
    se(c), s.preventDefault();
  }, ye = function(s) {
    je({
      index: d.Children.count(i.children) - 1
    }), s.preventDefault();
  }, Te = function(s) {
    je({
      index: 0
    }), s.preventDefault();
  }, Ve = function(s, c, u) {
    A(s, c, u), s.preventDefault();
  }, we = function T(s) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = c ? s : s.nextElementSibling;
    return u ? D.getAttribute(u, "data-p-disabled") || D.getAttribute(u, "data-pc-section") === "inkbar" ? T(u) : D.findSingle(u, '[data-pc-section="headeraction"]') : null;
  }, _e = function T(s) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = c ? s : s.previousElementSibling;
    return u ? D.getAttribute(u, "data-p-disabled") || D.getAttribute(u, "data-pc-section") === "inkbar" ? T(u) : D.findSingle(u, '[data-pc-section="headeraction"]') : null;
  }, Xe = function() {
    return we(te.current.firstElementChild, !0);
  }, We = function() {
    return _e(te.current.lastElementChild, !0);
  }, se = function(s) {
    s && (D.focus(s), je({
      element: s
    }));
  }, Vt = function() {
    var s = H.current["tab_".concat(q)];
    re.current.style.width = D.getWidth(s) + "px", re.current.style.left = D.getOffset(s).left - D.getOffset(te.current).left + "px";
  }, je = function(s) {
    var c = s.index, u = s.element, m = u || H.current["tab_".concat(c)];
    m && m.scrollIntoView && m.scrollIntoView({
      block: "nearest"
    });
  }, ot = function() {
    var s = M.current, c = s.scrollLeft, u = s.scrollWidth, m = D.getWidth(M.current);
    $(c === 0), S(parseInt(c) === u - m);
  }, Xt = function(s) {
    i.scrollable && ot(), s.preventDefault();
  }, st = function() {
    return [ie.current, C.current].reduce(function(s, c) {
      return c ? s + D.getWidth(c) : s;
    }, 0);
  }, Wt = function() {
    var s = D.getWidth(M.current) - st(), c = M.current.scrollLeft - s;
    M.current.scrollLeft = c <= 0 ? 0 : c;
  }, Yt = function() {
    var s = D.getWidth(M.current) - st(), c = M.current.scrollLeft + s, u = M.current.scrollWidth - s;
    M.current.scrollLeft = c >= u ? u : c;
  }, Jt = function() {
    $(!0), S(!1), f([]), i.onTabChange ? i.onTabChange({
      index: q
    }) : ee(i.activeIndex);
  };
  d.useEffect(function() {
    Vt(), ot();
  }), At(function() {
    p || j(It());
  }), mt(function() {
    if (Y.isNotEmpty(P)) {
      var T = l(P[P.length - 1]);
      T && y(null, T.tab, T.index);
    }
  }, [P]), mt(function() {
    i.activeIndex !== E && je({
      index: i.activeIndex
    });
  }, [i.activeIndex]), d.useImperativeHandle(t, function() {
    return {
      props: i,
      reset: Jt,
      getElement: function() {
        return ce.current;
      }
    };
  });
  var Gt = function(s, c) {
    var u = ue(c), m = me.getCProps(s), W = m.headerStyle, he = m.headerClassName, Ye = m.style, Je = m.className, Ge = m.disabled, lt = m.leftIcon, ct = m.rightIcon, cn = m.header, dt = m.headerTemplate, dn = m.closable, un = m.closeIcon, fn = p + "_header_" + c, ut = p + c + "_content", hn = Ge || !u ? -1 : 0, ft = lt && be.getJSXIcon(lt, void 0, {
      props: i
    }), pn = n({
      className: K("tab.headertitle")
    }, ne(s, "headertitle", c)), ht = /* @__PURE__ */ d.createElement("span", pn, cn), pt = ct && be.getJSXIcon(ct, void 0, {
      props: i
    }), bt = n({
      className: K("tab.closeIcon"),
      onClick: function(z) {
        return b(z, c);
      }
    }, ne(s, "closeIcon", c)), bn = un || /* @__PURE__ */ d.createElement(Tn, bt), mn = dn ? be.getJSXIcon(bn, Be({}, bt), {
      props: i
    }) : null, vn = n({
      id: fn,
      role: "tab",
      className: K("tab.headeraction"),
      tabIndex: hn,
      "aria-controls": ut,
      "aria-selected": u,
      "aria-disabled": Ge,
      onClick: function(z) {
        return y(z, s, c);
      },
      onKeyDown: function(z) {
        return V(z, s, c);
      }
    }, ne(s, "headeraction", c)), Qe = (
      // eslint-disable /
      /* @__PURE__ */ d.createElement("a", vn, ft, ht, pt, mn, /* @__PURE__ */ d.createElement(ze, null))
    );
    if (dt) {
      var gn = {
        className: "p-tabview-nav-link",
        titleClassName: "p-tabview-title",
        onClick: function(z) {
          return y(z, s, c);
        },
        onKeyDown: function(z) {
          return V(z, s, c);
        },
        leftIconElement: ft,
        titleElement: ht,
        rightIconElement: pt,
        element: Qe,
        props: i,
        index: c,
        selected: u,
        ariaControls: ut
      };
      Qe = Y.getJSXElement(dt, gn);
    }
    var yn = n({
      ref: function(z) {
        return H.current["tab_".concat(c)] = z;
      },
      className: K("tab.header", {
        selected: u,
        disabled: Ge,
        headerClassName: he,
        _className: Je
      }),
      style: ke("tab.header", {
        headerStyle: W,
        _style: Ye
      }),
      role: "presentation"
    }, ne(s, "root", c), ne(s, "header", c));
    return /* @__PURE__ */ d.createElement("li", yn, Qe);
  }, Qt = function() {
    return d.Children.map(i.children, function(s, c) {
      if (x(s))
        return Gt(s, c);
    });
  }, zt = function() {
    var s = Qt(), c = n({
      id: p + "_navcontent",
      ref: M,
      className: K("navcontent"),
      style: i.style,
      onScroll: Xt
    }, U("navcontent")), u = n({
      ref: te,
      className: K("nav"),
      role: "tablist"
    }, U("nav")), m = n({
      ref: re,
      "aria-hidden": "true",
      role: "presentation",
      className: K("inkbar")
    }, U("inkbar"));
    return /* @__PURE__ */ d.createElement("div", c, /* @__PURE__ */ d.createElement("ul", u, s, /* @__PURE__ */ d.createElement("li", m)));
  }, Zt = function() {
    var s = n({
      className: K("panelcontainer"),
      style: i.panelContainerStyle
    }, U("panelcontainer")), c = d.Children.map(i.children, function(u, m) {
      if (x(u) && (!i.renderActiveOnly || ue(m))) {
        var W = ue(m), he = p + m + "_content", Ye = p + "_header_" + m, Je = n({
          id: he,
          className: K("tab.content", {
            props: i,
            selected: W,
            getTabProp: X,
            tab: u,
            isSelected: ue,
            shouldUseTab: x,
            index: m
          }),
          style: ke("tab.content", {
            props: i,
            getTabProp: X,
            tab: u,
            isSelected: ue,
            shouldUseTab: x,
            index: m
          }),
          role: "tabpanel",
          "aria-labelledby": Ye
        }, me.getCOtherProps(u), ne(u, "root", m), ne(u, "content", m));
        return /* @__PURE__ */ d.createElement("div", Je, i.renderActiveOnly ? W && X(u, "children") : X(u, "children"));
      }
    });
    return /* @__PURE__ */ d.createElement("div", s, c);
  }, en = function() {
    var s = n({
      "aria-hidden": "true"
    }, U("previcon")), c = i.prevButton || /* @__PURE__ */ d.createElement(Pn, s), u = be.getJSXIcon(c, Be({}, s), {
      props: i
    }), m = n({
      ref: ie,
      type: "button",
      className: K("prevbutton"),
      "aria-label": vt("previousPageLabel"),
      onClick: function(he) {
        return Wt();
      }
    }, U("prevbutton"));
    return i.scrollable && !w ? /* @__PURE__ */ d.createElement("button", m, u, /* @__PURE__ */ d.createElement(ze, null)) : null;
  }, tn = function() {
    var s = n({
      "aria-hidden": "true"
    }, U("nexticon")), c = i.nextButton || /* @__PURE__ */ d.createElement(_t, s), u = be.getJSXIcon(c, Be({}, s), {
      props: i
    }), m = n({
      ref: C,
      type: "button",
      className: K("nextbutton"),
      "aria-label": vt("nextPageLabel"),
      onClick: function(he) {
        return Yt();
      }
    }, U("nextbutton"));
    if (i.scrollable && !O)
      return /* @__PURE__ */ d.createElement("button", m, u, /* @__PURE__ */ d.createElement(ze, null));
  }, nn = n({
    id: p,
    ref: ce,
    style: i.style,
    className: Z(i.className, K("root"))
  }, He.getOtherProps(i), U("root")), an = n({
    className: K("navcontainer")
  }, U("navcontainer")), rn = zt(), on = Zt(), sn = en(), ln = tn();
  return /* @__PURE__ */ d.createElement("div", nn, /* @__PURE__ */ d.createElement("div", an, sn, rn, ln), on);
});
Dt.displayName = "TabPanel";
Ft.displayName = "TabView";
const $n = ({ tabPanels: e, ...t }) => /* @__PURE__ */ a.jsx(Ft, { ...t, children: e == null ? void 0 : e.map((n, o) => /* @__PURE__ */ a.jsx(Dt, { ...e[o] }, o)) });
function $e() {
  return $e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, $e.apply(this, arguments);
}
function nt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function Un(e) {
  if (Array.isArray(e)) return nt(e);
}
function Kn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lt(e, t) {
  if (e) {
    if (typeof e == "string") return nt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nt(e, t);
  }
}
function Mn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qn(e) {
  return Un(e) || Kn(e) || Lt(e) || Mn();
}
function Ne(e) {
  "@babel/helpers - typeof";
  return Ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ne(e);
}
function Vn(e, t) {
  if (Ne(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Ne(o) !== "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xn(e) {
  var t = Vn(e, "string");
  return Ne(t) === "symbol" ? t : String(t);
}
function Wn(e, t, n) {
  return t = Xn(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Yn(e) {
  if (Array.isArray(e)) return e;
}
function Jn(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, i, h, g, p = [], j = !0, I = !1;
    try {
      if (h = (n = n.call(e)).next, t !== 0) for (; !(j = (o = h.call(n)).done) && (p.push(o.value), p.length !== t); j = !0) ;
    } catch (k) {
      I = !0, i = k;
    } finally {
      try {
        if (!j && n.return != null && (g = n.return(), Object(g) !== g)) return;
      } finally {
        if (I) throw i;
      }
    }
    return p;
  }
}
function Gn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jt(e, t) {
  return Yn(e) || Jn(e, t) || Lt(e, t) || Gn();
}
var Qn = {
  root: "p-accordion p-component",
  accordiontab: {
    root: function(t) {
      var n = t.selected;
      return Z("p-accordion-tab", {
        "p-accordion-tab-active": n
      });
    },
    content: "p-accordion-content",
    header: function(t) {
      var n = t.selected, o = t.getTabProp, i = t.tab;
      return Z("p-accordion-header", {
        "p-highlight": n,
        "p-disabled": o(i, "disabled")
      });
    },
    headeraction: "p-accordion-header-link",
    headericon: "p-accordion-toggle-icon",
    headertitle: "p-accordion-header-text",
    toggleablecontent: "p-toggleable-content",
    transition: "p-toggleable-content"
  }
}, zn = `
@layer primereact {
    .p-accordion-header-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        user-select: none;
        position: relative;
        text-decoration: none;
    }
    
    .p-accordion-header-link:focus {
        z-index: 1;
    }
    
    .p-accordion-header-text {
        line-height: 1;
        width: 100%;
    }
}
`, Re = Ue.extend({
  defaultProps: {
    __TYPE: "Accordion",
    id: null,
    activeIndex: null,
    className: null,
    style: null,
    multiple: !1,
    expandIcon: null,
    collapseIcon: null,
    transitionOptions: null,
    onTabOpen: null,
    onTabClose: null,
    onTabChange: null,
    children: void 0
  },
  css: {
    classes: Qn,
    styles: zn
  }
}), ve = Ue.extend({
  defaultProps: {
    __TYPE: "AccordionTab",
    className: null,
    contentClassName: null,
    contentStyle: null,
    disabled: !1,
    header: null,
    headerClassName: null,
    headerStyle: null,
    headerTemplate: null,
    style: null,
    tabIndex: 0,
    children: void 0
  },
  getCProp: function(t, n) {
    return Y.getComponentProp(t, n, ve.defaultProps);
  },
  getCProps: function(t) {
    return Y.getComponentProps(t, ve.defaultProps);
  },
  getCOtherProps: function(t) {
    return Y.getComponentDiffProps(t, ve.defaultProps);
  }
});
function Ct(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ct(Object(n), !0).forEach(function(o) {
      Wn(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
var $t = function() {
}, Ut = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = Et(), o = d.useContext(Nt), i = Re.getProps(e, o), h = d.useState(i.id), g = jt(h, 2), p = g[0], j = g[1], I = d.useState(i.activeIndex), k = jt(I, 2), w = k[0], $ = k[1], _ = d.useRef(null), B = i.onTabChange ? i.activeIndex : w, O = d.Children.count(i.children), S = {
    props: i,
    state: {
      id: p,
      activeIndex: w
    }
  }, N = Re.setMetaData(pe({}, S)), v = N.ptm, P = N.ptmo, f = N.cx, R = N.isUnstyled;
  Pt(Re.css.styles, R, {
    name: "accordion"
  });
  var r = function(l, b) {
    return ve.getCProp(l, b);
  }, E = function(l, b, y) {
    var A = {
      // props: atProps, /* @todo */
      parent: S,
      context: {
        index: y,
        count: O,
        first: y === 0,
        last: y === O - 1,
        selected: ge(y),
        disabled: r(l, "disabled")
      }
    };
    return n(v("tab.".concat(b), {
      tab: A
    }), v("accordiontab.".concat(b), {
      accordiontab: A
    }), v("accordiontab.".concat(b), A), P(r(l, "pt"), b, A));
  }, ee = function(l, b, y) {
    ce(l, b, y);
  }, ce = function(l, b, y) {
    if (!r(b, "disabled")) {
      var A = ge(y), V = null;
      if (i.multiple) {
        var G = B || [];
        V = A ? G.filter(function(oe) {
          return oe !== y;
        }) : [].concat(qn(G), [y]);
      } else
        V = A ? null : y;
      var Q = A ? i.onTabClose : i.onTabOpen;
      Q && Q({
        originalEvent: l,
        index: y
      }), i.onTabChange ? i.onTabChange({
        originalEvent: l,
        index: V
      }) : $(V);
    }
    l.preventDefault();
  }, M = function(l, b, y) {
    switch (l.code) {
      case "ArrowDown":
        te(l);
        break;
      case "ArrowUp":
        re(l);
        break;
      case "Home":
        ie(l);
        break;
      case "End":
        C(l);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        H(l, b, y);
        break;
    }
  }, te = function(l) {
    var b = q(l.target.parentElement.parentElement);
    b ? U(b) : ie(l), l.preventDefault();
  }, re = function(l) {
    var b = J(l.target.parentElement.parentElement);
    b ? U(b) : C(l), l.preventDefault();
  }, ie = function(l) {
    var b = xe();
    U(b), l.preventDefault();
  }, C = function(l) {
    var b = de();
    U(b), l.preventDefault();
  }, H = function(l, b, y) {
    ce(l, b, y), l.preventDefault();
  }, q = function x(l) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, y = b ? l : l.nextElementSibling, A = D.findSingle(y, '[data-pc-section="header"]');
    return A ? D.getAttribute(A, "data-p-disabled") ? x(A.parentElement) : D.findSingle(A, '[data-pc-section="headeraction"]') : null;
  }, J = function x(l) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, y = b ? l : l.previousElementSibling, A = D.findSingle(y, '[data-pc-section="header"]');
    return A ? D.getAttribute(A, "data-p-disabled") ? x(A.parentElement) : D.findSingle(A, '[data-pc-section="headeraction"]') : null;
  }, xe = function() {
    return q(_.current.firstElementChild, !0);
  }, de = function() {
    return J(_.current.lastElementChild, !0);
  }, U = function(l) {
    l && D.focus(l);
  }, ge = function(l) {
    return i.multiple && Array.isArray(B) ? B && B.some(function(b) {
      return b === l;
    }) : B === l;
  };
  if (d.useImperativeHandle(t, function() {
    return {
      props: i,
      getElement: function() {
        return _.current;
      }
    };
  }), At(function() {
    p || j(It());
  }), !p)
    return null;
  var K = function(l, b, y) {
    var A = pe(pe({}, r(l, "style") || {}), r(l, "headerStyle") || {}), V = p + "_header_" + y, G = p + "_content_" + y, Q = r(l, "disabled") ? -1 : r(l, "tabIndex"), oe = n({
      className: f("accordiontab.headertitle")
    }, E(l, "headertitle", y)), fe = ve.getCProps(l), ye = r(l, "headerTemplate") ? Y.getJSXElement(r(l, "headerTemplate"), fe) : /* @__PURE__ */ d.createElement("span", oe, Y.getJSXElement(r(l, "header"), fe)), Te = n({
      "aria-hidden": "true",
      className: f("accordiontab.headericon")
    }, E(l, "headericon", y)), Ve = b ? i.collapseIcon || /* @__PURE__ */ d.createElement(Sn, Te) : i.expandIcon || /* @__PURE__ */ d.createElement(_t, Te), we = be.getJSXIcon(Ve, pe({}, Te), {
      props: i,
      selected: b
    }), _e = n({
      className: Z(r(l, "headerClassName"), r(l, "className"), f("accordiontab.header", {
        selected: b,
        getTabProp: r,
        tab: l
      })),
      style: A,
      "data-p-highlight": b,
      "data-p-disabled": r(l, "disabled")
    }, E(l, "header", y)), Xe = n({
      id: V,
      href: "#" + G,
      className: f("accordiontab.headeraction"),
      role: "button",
      tabIndex: Q,
      onClick: function(se) {
        return ee(se, l, y);
      },
      onKeyDown: function(se) {
        return M(se, l, y);
      },
      "aria-disabled": r(l, "disabled"),
      "aria-controls": G,
      "aria-expanded": b
    }, E(l, "headeraction", y));
    return /* @__PURE__ */ d.createElement("div", _e, /* @__PURE__ */ d.createElement("a", Xe, we, ye));
  }, ke = function(l, b, y) {
    var A = pe(pe({}, r(l, "style") || {}), r(l, "contentStyle") || {}), V = p + "_content_" + y, G = p + "_header_" + y, Q = /* @__PURE__ */ d.createRef(), oe = n({
      id: V,
      ref: Q,
      className: Z(r(l, "contentClassName"), r(l, "className"), f("accordiontab.toggleablecontent")),
      style: A,
      role: "region",
      "aria-labelledby": G
    }, E(l, "toggleablecontent", y)), fe = n({
      className: f("accordiontab.content")
    }, E(l, "content", y)), ye = n({
      classNames: f("accordiontab.transition"),
      timeout: {
        enter: 1e3,
        exit: 450
      },
      in: b,
      unmountOnExit: !0,
      options: i.transitionOptions
    }, E(l, "transition", y));
    return /* @__PURE__ */ d.createElement(jn, $e({
      nodeRef: Q
    }, ye), /* @__PURE__ */ d.createElement("div", oe, /* @__PURE__ */ d.createElement("div", fe, r(l, "children"))));
  }, qe = function(l, b) {
    if (Y.isValidChild(l, "AccordionTab")) {
      var y = p + "_" + b, A = ge(b), V = K(l, A, b), G = ke(l, A, b), Q = n({
        key: y,
        className: f("accordiontab.root", {
          selected: A
        })
      }, ve.getCOtherProps(l), E(l, "root", b));
      return /* @__PURE__ */ d.createElement("div", Q, V, G);
    }
    return null;
  }, ne = function() {
    return d.Children.map(i.children, qe);
  }, ue = ne(), X = n({
    className: Z(i.className, f("root")),
    style: i.style
  }, Re.getOtherProps(i), v("root"));
  return /* @__PURE__ */ d.createElement("div", $e({
    id: p,
    ref: _
  }, X), ue);
});
$t.displayName = "AccordionTab";
Ut.displayName = "Accordion";
const Zn = ({ accordionTabs: e, ...t }) => /* @__PURE__ */ a.jsx(Ut, { ...t, children: e == null ? void 0 : e.map((n, o) => /* @__PURE__ */ a.jsx($t, { ...e[o] }, o)) }), ea = (e) => xt.get(`/alm/explanation/${e}`), ta = "GET_REQUEST_EXPLAIN";
function Kt(e) {
  const t = (n, o) => !n && !o ? "" : n ? o ? `${n} - ${o}` : n : o;
  return En({
    queryKey: [ta, e],
    queryFn: () => ea(e),
    select: (n) => {
      var o, i;
      return {
        ...n.data,
        results: n.data.results.map((h, g) => ({
          ...h,
          header: `Kết quả xử lý lần ${n.data.results.length - g}`
        })),
        reportingUnits: ((o = n.data) == null ? void 0 : o.subExplanations.filter((h) => h.agencyAssignedId !== null).map((h, g) => ({
          ...h,
          ordinalNumber: g + 1,
          startDateTime: ae(h.startDateTime),
          endDateTime: ae(h.endDateTime),
          workflowResultCreatedAt: ae(h.workflowResultCreatedAt, Ze.DATE_TIME)
        }))) || [],
        reportingUsers: ((i = n.data) == null ? void 0 : i.subExplanations.filter((h) => h.userAssignedId !== null).map((h, g) => ({
          ...h,
          ordinalNumber: g + 1,
          startDateTime: ae(h.startDateTime),
          endDateTime: ae(h.endDateTime),
          workflowResultCreatedAt: ae(h.workflowResultCreatedAt, Ze.DATE_TIME)
        }))) || [],
        timelines: n.data.timeline.filter((h) => h.updatedBy !== null).map((h, g) => ({
          ...h,
          ordinalNumber: g + 1,
          handlerName: t(h.updatedByName, h.agenciesUpdatedName),
          updatedAt: ae(h.updatedAt, Ze.DATE_TIME)
        }))
      };
    }
  });
}
const na = "SUBMIT_EXPLAIN", aa = (e) => xt.post(`/alm/explanation/submit/${e.id}`, e);
function Ie() {
  return Nn({ mutationKey: [na], mutationFn: (e) => aa(e) });
}
const Me = ({ visible: e, acceptAction: t, rejectAction: n }) => /* @__PURE__ */ a.jsx(
  Le,
  {
    message: "Các thay đổi vẫn chưa được lưu, bạn có chắc chắn muốn đóng?",
    header: "Đóng màn hình",
    icon: "ti ti-alert-triangle",
    acceptLabel: "Đóng màn hình",
    accept: () => {
      t();
    },
    acceptIcon: "ti ti-check",
    rejectLabel: "Huỷ",
    reject: () => {
      n();
    },
    rejectIcon: "ti ti-x",
    loading: !1,
    visible: e
  }
), ra = le.object({
  content: le.string().min(1, { message: "Vui lòng nhập nội dung!" }),
  mediaFile: le.custom()
}), ia = {
  content: "",
  mediaFile: null
};
function Mt({ approveState: e, setApproveState: t, refetch: n, isSubRequest: o }) {
  const { user: i } = Pe(), [h, g] = d.useState(!1), { showToast: p } = Ae(), { control: j, handleSubmit: I, reset: k } = rt({
    defaultValues: ia,
    resolver: it(ra)
  }), w = Ie();
  function $(O) {
    const S = {
      id: e.id,
      buttonSubmitType: "10",
      isEndTask: "true",
      flowId: 0,
      data: {
        updatedBy: i.id
      },
      timeLine: {
        updatedBy: i.id,
        elementName: "Đã duyệt kết quả giải trình",
        content: O.content
      },
      results: {
        isNew: 0,
        status: "Đã duyệt kết quả giải trình",
        extraContent: O.content,
        confirmedAt: Ot(/* @__PURE__ */ new Date()),
        updatedBy: i.id
      }
    }, N = {
      ...S,
      data: {
        ...S.data,
        btn_key_code: o ? "duyet_ket_qua_con" : "duyet_ket_qua_cha",
        statusId: o ? 11 : 7
      }
    };
    w.mutate(N, {
      onSuccess: (v) => {
        p({
          code: v.code,
          detail: v.message,
          onSuccess: () => {
            t({ id: "", loading: !1, visible: !1 }), k(), n();
          },
          onError: () => t({ ...e, loading: !1, visible: !0 })
        });
      },
      onError: (v) => {
        var P, f;
        p({
          code: (P = v.response) == null ? void 0 : P.data.code,
          detail: (f = v.response) == null ? void 0 : f.data.message,
          onError: () => t({ ...e, loading: !1, visible: !0 })
        });
      }
    });
  }
  const _ = (O) => {
    var N;
    const S = Object.keys(O)[0];
    (N = document.getElementById(S)) == null || N.focus();
  }, B = () => {
    j.getFieldState("content").isDirty ? g(!0) : (t({ id: "", loading: !1, visible: !1 }), k());
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ke,
      {
        header: /* @__PURE__ */ a.jsx("span", { className: "block text-xl font-bold w-full", children: "Phê duyệt nội dung giải trình" }),
        visible: e.visible,
        blockScroll: !0,
        style: { width: "50vw" },
        onHide: B,
        footer: /* @__PURE__ */ a.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ a.jsx(L, { variant: "close", onClick: B }),
          /* @__PURE__ */ a.jsx(
            L,
            {
              icon: "ti ti-check",
              label: "Phê duyệt",
              loading: e.loading,
              onClick: I($, _)
            }
          )
        ] }),
        children: /* @__PURE__ */ a.jsx(Fe, { name: "content", control: j, type: De.TEXTAREA, label: "Nội dung", required: !0 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      Me,
      {
        visible: h,
        acceptAction: () => {
          g(!1), t({ id: "", loading: !1, visible: !1 }), k();
        },
        rejectAction: () => g(!1)
      }
    )
  ] });
}
const oa = ({
  explain: e,
  setHistoryState: t,
  setCancelExplanationState: n,
  setRejectExplanationState: o,
  setApproveState: i,
  setReceptionState: h,
  setExplainState: g,
  setRejectReceptionState: p,
  criteria: j
}) => {
  var _, B, O, S, N, v, P;
  const I = kt(), k = new URLSearchParams(I.search), w = Cn(), $ = () => {
    w(j ? `/explain/view?criteria=${j}&${k}` : `/explain?${k}`);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "flex justify-center mt-6 gap-4", children: [
    /* @__PURE__ */ a.jsx(L, { variant: "close", onClick: () => $() }),
    !!(e != null && e.parentId) && /* @__PURE__ */ a.jsx(
      L,
      {
        label: "Xem lịch sử xử lý",
        icon: "ti ti-history",
        className: "p-button-outlined",
        onClick: () => t({ loading: !1, visible: !0 })
      },
      "viewHistory"
    ),
    ((_ = e == null ? void 0 : e.conditions) == null ? void 0 : _.includes("huy")) && /* @__PURE__ */ a.jsx(
      L,
      {
        label: "Huỷ yêu cầu giải trình",
        icon: "ti ti-trash",
        severity: "danger",
        className: "p-button-outlined",
        onClick: () => n({ loading: !1, visible: !0 })
      }
    ),
    ((B = e == null ? void 0 : e.conditions) == null ? void 0 : B.includes("tu_choi_ket_qua")) && /* @__PURE__ */ a.jsx(
      L,
      {
        label: "Từ chối phê duyệt",
        icon: "ti ti-x",
        severity: "danger",
        className: "p-button-outlined",
        onClick: () => o({
          id: e.id,
          loading: !1,
          visible: !0
        })
      }
    ),
    ((O = e == null ? void 0 : e.conditions) == null ? void 0 : O.includes("duyet_ket_qua_con")) && /* @__PURE__ */ a.jsx(
      L,
      {
        label: "Phê duyệt",
        icon: "ti ti-check",
        onClick: () => i({ id: e.id, loading: !1, visible: !0 })
      }
    ),
    ((S = e == null ? void 0 : e.conditions) == null ? void 0 : S.includes("duyet_ket_qua_cha")) && /* @__PURE__ */ a.jsx(
      L,
      {
        label: "Phê duyệt",
        icon: "ti ti-check",
        onClick: () => i({ id: e.id, loading: !1, visible: !0 })
      }
    ),
    ((N = e == null ? void 0 : e.conditions) == null ? void 0 : N.includes("tu_choi")) && /* @__PURE__ */ a.jsx(
      L,
      {
        label: "Từ chối tiếp nhận",
        icon: "ti ti-x",
        severity: "danger",
        className: "p-button-outlined",
        onClick: () => p({
          id: e.id,
          loading: !1,
          visible: !0
        })
      }
    ),
    ((v = e == null ? void 0 : e.conditions) == null ? void 0 : v.includes("tiep_nhan")) && /* @__PURE__ */ a.jsx(
      L,
      {
        label: "Tiếp nhận",
        icon: "ti ti-check",
        onClick: () => h({ loading: !1, visible: !0 })
      }
    ),
    ((P = e == null ? void 0 : e.conditions) == null ? void 0 : P.includes("giai_trinh")) && /* @__PURE__ */ a.jsx(
      L,
      {
        label: "Giải trình",
        icon: "ti ti-check",
        onClick: () => g({ loading: !1, visible: !0 })
      }
    )
  ] });
}, sa = le.object({
  content: le.string().min(1, { message: "Vui lòng nhập nội dung giải trình!" }),
  mediaFile: le.custom()
}), la = {
  content: "",
  mediaFile: null
};
function ca({ id: e, explainState: t, setExplainState: n, refetch: o }) {
  const { user: i } = Pe(), { showToast: h } = Ae(), [g, p] = d.useState(!1), { control: j, handleSubmit: I, reset: k } = rt({
    defaultValues: la,
    resolver: it(sa)
  }), w = An(), $ = Ie();
  function _(S) {
    n({ loading: !0, visible: !0 });
    const N = {
      id: e,
      buttonSubmitType: "10",
      isEndTask: "true",
      flowId: 0,
      data: {
        btn_key_code: "giai_trinh",
        statusId: 10,
        updatedBy: i.id
      },
      timeLine: {
        updatedBy: i.id,
        elementName: "Đã giải trình",
        content: S.content
      },
      results: {
        isNew: 1,
        status: "Đã gửi kết quả giải trình",
        content: S.content,
        mediaFile: S.mediaFile ? JSON.stringify(S.mediaFile) : null,
        createdBy: i.id
      }
    };
    $.mutate(N, {
      onSuccess: (v) => {
        h({
          code: v.code,
          detail: v.message,
          onSuccess: () => {
            n({ loading: !1, visible: !1 }), k(), o();
          },
          onError: () => n({ loading: !1, visible: !0 })
        });
      },
      onError: (v) => {
        var P, f;
        h({
          code: (P = v.response) == null ? void 0 : P.data.code,
          detail: (f = v.response) == null ? void 0 : f.data.message,
          onError: () => n({ loading: !1, visible: !0 })
        });
      }
    });
  }
  const B = (S) => {
    var v;
    const N = Object.keys(S)[0];
    (v = document.getElementById(N)) == null || v.focus();
  }, O = () => {
    j.getFieldState("content").isDirty ? p(!0) : (n({ loading: !1, visible: !1 }), k());
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      Ke,
      {
        header: /* @__PURE__ */ a.jsx("span", { className: "block text-xl font-bold w-full", children: "Giải trình" }),
        visible: t.visible,
        blockScroll: !0,
        style: { width: "50vw" },
        onHide: O,
        footer: /* @__PURE__ */ a.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ a.jsx(L, { variant: "close", onClick: O }),
          /* @__PURE__ */ a.jsx(
            L,
            {
              icon: "ti ti-check",
              label: "Giải trình",
              loading: t.loading,
              onClick: I(_, B)
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ a.jsx(Fe, { name: "content", control: j, type: De.TEXTAREA, label: "Nội dung giải trình", required: !0 }),
          /* @__PURE__ */ a.jsx("div", { className: "mt-6", children: /* @__PURE__ */ a.jsx(
            Fe,
            {
              name: "mediaFile",
              control: j,
              type: De.FILE,
              label: "Tệp đính kèm",
              uploadProps: {
                accept: ".pdf, .png, .gif, .jpg, .jpeg",
                uploadFileMutation: w,
                autoUpload: !0,
                multiple: !0
              }
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      Me,
      {
        visible: g,
        acceptAction: () => {
          p(!1), n({ loading: !1, visible: !1 }), k();
        },
        rejectAction: () => p(!1)
      }
    )
  ] });
}
function qt({ id: e, dialog: t, setDialog: n }) {
  const { data: o } = Kt(e), i = [
    {
      columnProps: {
        field: "ordinalNumber",
        header: "STT",
        align: "center"
      },
      show: !0
    },
    {
      columnProps: {
        field: "elementName",
        header: "Bước xử lý"
      },
      show: !0
    },
    {
      columnProps: {
        field: "handlerName",
        header: "Người xử lý"
      },
      show: !0
    },
    {
      columnProps: {
        field: "updatedAt",
        header: "Thời gian xử lý",
        body: (h) => h.updatedAt
      },
      show: !0
    },
    {
      columnProps: {
        field: "content",
        header: "Nội dung xử lý"
      },
      show: !0
    }
  ];
  return /* @__PURE__ */ a.jsxs(
    Ke,
    {
      header: "Lịch sử xử lý yêu cầu giải trình của " + (o != null && o.agencyAssignedId ? o == null ? void 0 : o.agencyAssignedName : (o == null ? void 0 : o.userAssignedName) || ""),
      visible: t.visible,
      blockScroll: !0,
      style: { width: "80vw", maxHeight: "80vh", overflowY: "scroll" },
      onHide: () => {
        n({ id: t.id, loading: !1, visible: !1 });
      },
      children: [
        /* @__PURE__ */ a.jsx(
          Ht,
          {
            hasActions: !0,
            value: (o == null ? void 0 : o.timelines) || [],
            headerSchema: i,
            paginator: !1,
            emptyMessage: /* @__PURE__ */ a.jsx("div", { children: "Không có dữ liệu" })
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: "flex justify-end mt-6 gap-4", children: /* @__PURE__ */ a.jsx(
          L,
          {
            variant: "close",
            onClick: () => n({ id: t.id, loading: !1, visible: !1 })
          }
        ) })
      ]
    }
  );
}
const da = (e) => le.object({
  content: le.string().min(1, {
    message: e ? "Vui lòng nhập lý do từ chối phê duyệt!" : "Vui lòng nhập lý do từ chối tiếp nhận!"
  })
}), ua = {
  content: ""
};
function at({ approve: e, formState: t, setFormState: n, refetch: o }) {
  const { user: i } = Pe(), { showToast: h } = Ae(), [g, p] = d.useState(!1), j = da(e), { control: I, handleSubmit: k, reset: w } = rt({
    defaultValues: ua,
    resolver: it(j)
  }), $ = Ie();
  function _(S) {
    if (n({ ...t, loading: !0 }), e) {
      const N = {
        id: t.id || "",
        buttonSubmitType: "10",
        isEndTask: "true",
        flowId: 0,
        data: {
          btn_key_code: "tu_choi_ket_qua",
          statusId: 13,
          updatedBy: i.id
        },
        timeLine: {
          updatedBy: i.id,
          elementName: "Đã từ chối phê duyệt kết quả giải trình",
          content: S.content
        },
        results: {
          isNew: 0,
          status: "Đã từ chối kết quả giải trình",
          extraContent: S.content,
          confirmedAt: Ot(/* @__PURE__ */ new Date()),
          updatedBy: i.id
        }
      };
      $.mutate(N, {
        onSuccess: (v) => {
          h({
            code: v.code,
            detail: v.message,
            onSuccess: () => {
              n({ ...t, loading: !1, visible: !1 }), o();
            },
            onError: () => n({ ...t, loading: !1, visible: !0 })
          });
        },
        onError: (v) => {
          var P, f;
          h({
            code: (P = v.response) == null ? void 0 : P.data.code,
            detail: (f = v.response) == null ? void 0 : f.data.message,
            onError: () => n({ ...t, loading: !1, visible: !0 })
          });
        }
      });
    } else {
      const N = {
        id: t.id || "",
        buttonSubmitType: "1",
        isEndTask: "true",
        flowId: 0,
        data: {
          btn_key_code: "tu_choi",
          statusId: 12,
          updatedBy: i.id
        },
        timeLine: {
          updatedBy: i.id,
          elementName: "Đã từ chối tiếp nhận",
          content: S.content,
          type: "EXPLANATION"
        },
        results: {}
      };
      $.mutate(N, {
        onSuccess: (v) => {
          h({
            code: v.code,
            detail: v.message,
            onSuccess: () => {
              n({ ...t, loading: !1, visible: !1 }), w(), o();
            },
            onError: () => n({ ...t, loading: !1, visible: !0 })
          });
        },
        onError: (v) => {
          var P, f;
          h({
            code: (P = v.response) == null ? void 0 : P.data.code,
            detail: (f = v.response) == null ? void 0 : f.data.message,
            onError: () => n({ ...t, loading: !1, visible: !0 })
          });
        }
      });
    }
  }
  const B = (S) => {
    var v;
    const N = Object.keys(S)[0];
    (v = document.getElementById(N)) == null || v.focus();
  }, O = () => {
    I.getFieldState("content").isDirty ? p(!0) : (n({ ...t, loading: !1, visible: !1 }), w());
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ke,
      {
        header: /* @__PURE__ */ a.jsx("span", { className: "block text-xl font-bold w-full", children: e ? "Từ chối phê duyệt nội dung giải trình" : "Từ chối tiếp nhận yêu cầu giải trình" }),
        visible: t.visible,
        blockScroll: !0,
        style: { width: "50vw" },
        onHide: O,
        footer: /* @__PURE__ */ a.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ a.jsx(L, { variant: "close", onClick: O }),
          /* @__PURE__ */ a.jsx(
            L,
            {
              icon: "ti ti-trash",
              label: e ? "Từ chối phê duyệt" : "Từ chối tiếp nhận",
              severity: "danger",
              loading: t.loading,
              onClick: k(_, B)
            }
          )
        ] }),
        children: /* @__PURE__ */ a.jsx(
          Fe,
          {
            name: "content",
            control: I,
            type: De.TEXTAREA,
            label: e ? "Lý do từ chối" : "Lý do từ chối tiếp nhận",
            required: !0
          }
        )
      }
    ),
    /* @__PURE__ */ a.jsx(
      Me,
      {
        visible: g,
        acceptAction: () => {
          p(!1), n({ ...t, loading: !1, visible: !1 }), w();
        },
        rejectAction: () => p(!1)
      }
    )
  ] });
}
function St({ explain: e, refetch: t }) {
  const { showToast: n } = Ae(), { theme: o } = wt(), { user: i } = Pe(), h = Ie(), [g, p] = d.useState(!1), [j, I] = d.useState({
    loading: !1,
    visible: !1,
    id: "",
    subName: ""
  }), [k, w] = d.useState({
    loading: !1,
    visible: !1,
    id: ""
  }), [$, _] = d.useState({
    loading: !1,
    visible: !1,
    id: ""
  }), [B, O] = d.useState({
    id: void 0,
    loading: !1,
    visible: !1
  }), S = [
    {
      columnProps: {
        field: "ordinalNumber",
        header: "STT",
        align: "center"
      },
      show: !0
    },
    {
      columnProps: {
        field: "agencyAssignedName",
        header: "Đơn vị giải trình"
      },
      show: e.isUnit
    },
    {
      columnProps: {
        field: "userAssignedName",
        header: "Cá nhân giải trình"
      },
      show: !e.isUnit
    },
    {
      columnProps: {
        field: "workflowResultContent",
        header: "Nội dung giải trình",
        body: (f) => {
          var r;
          const R = ((r = f.content) == null ? void 0 : r.length) > 500 ? f.content.substring(0, 500) + "..." : f.content;
          return /* @__PURE__ */ a.jsx("span", { children: R });
        }
      },
      maxWidth: "300px",
      show: !0
    },
    {
      columnProps: {
        field: "workflowResultCreatedByName",
        header: "Người xử lý"
      },
      show: e.isUnit
    },
    {
      columnProps: {
        field: "startDateTime",
        header: "Ngày bắt đầu"
      },
      show: !0
    },
    {
      columnProps: {
        field: "endDateTime",
        header: "Ngày kết thúc"
      },
      show: !0
    },
    {
      columnProps: {
        field: "workflowResultCreatedAt",
        header: "Thời gian gửi giải trình"
      },
      show: !0
    },
    {
      columnProps: {
        field: "workflowResultMediaFile.fileName",
        header: "Tệp đính kèm",
        body: (f) => {
          var R;
          return ((R = f.workflowResultMediaFile) == null ? void 0 : R.length) > 0 ? f.workflowResultMediaFile.map((r, E) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("a", { href: r.mediaHost + r.path, target: "_blank", rel: "noreferrer", children: r.fileName }, E),
            /* @__PURE__ */ a.jsx("br", {})
          ] })) : "";
        }
      },
      show: !0
    },
    {
      columnProps: {
        field: "statusName",
        header: "Trạng thái",
        body: (f) => /* @__PURE__ */ a.jsx("div", { className: "flex", children: /* @__PURE__ */ a.jsx(
          et,
          {
            value: f == null ? void 0 : f.statusName,
            style: {
              color: o === "light" ? f == null ? void 0 : f.statusColorCode : f == null ? void 0 : f.colorCodeDarkMode,
              border: "1px solid " + (o === "light" ? f == null ? void 0 : f.statusColorCode : f == null ? void 0 : f.colorCodeDarkMode),
              background: "transparent"
            }
          }
        ) })
      },
      minWidth: "170px",
      show: !0
    }
  ], N = (f) => {
    var r, E, ee;
    const R = [];
    return (r = f.conditions) != null && r.includes("duyet_ket_qua_con") && R.push(
      /* @__PURE__ */ a.jsx(
        L,
        {
          variant: "icon",
          icon: "ti ti-pencil-check",
          tooltip: "Phê duyệt",
          onClick: () => _({ id: f.id, loading: !1, visible: !0 })
        },
        "approve"
      )
    ), (E = f.conditions) != null && E.includes("tu_choi_ket_qua") && R.push(
      /* @__PURE__ */ a.jsx(
        L,
        {
          variant: "icon",
          icon: "ti ti-ban",
          tooltip: "Từ chối phê duyệt",
          onClick: () => w({ id: f.id, loading: !1, visible: !0 })
        },
        "rejectApproval"
      )
    ), R.push(
      /* @__PURE__ */ a.jsx(
        L,
        {
          variant: "icon",
          icon: "ti ti-history",
          tooltip: "Xem lịch sử xử lý",
          onClick: () => O({ id: f.id, loading: !1, visible: !0 })
        },
        "viewHistory"
      )
    ), (ee = f.conditions) != null && ee.includes("huy") && R.push(
      /* @__PURE__ */ a.jsx(
        L,
        {
          variant: "idelete",
          tooltip: "Huỷ yêu cầu giải trình",
          onClick: () => v(f)
        },
        "cancelRequest"
      )
    ), /* @__PURE__ */ a.jsx("div", { className: "flex gap-2 justify-center items-center", children: R });
  };
  function v(f) {
    I({
      id: f.id,
      subName: e.isUnit ? f.agencyAssignedName : f.userAssignedName,
      loading: !1,
      visible: !0
    });
  }
  function P() {
    I({ ...j, loading: !0 });
    const f = {
      id: j.id,
      buttonSubmitType: "10",
      isEndTask: "true",
      flowId: 0,
      data: {
        btn_key_code: "huy",
        statusId: 14,
        updatedBy: i.id
      },
      timeLine: {
        updatedBy: i.id,
        elementName: "Huỷ yêu cầu giải trình"
      },
      results: {}
    };
    h.mutate(f, {
      onSuccess: (R) => {
        n({
          code: R.code,
          detail: R.message,
          onSuccess: () => {
            I({ ...j, loading: !1, visible: !1 }), t();
          },
          onError: () => I({ ...j, visible: !0 })
        });
      },
      onError: (R) => {
        var r, E;
        n({
          code: (r = R.response) == null ? void 0 : r.data.code,
          detail: (E = R.response) == null ? void 0 : E.data.message,
          onError: () => I({ ...j, loading: !1, visible: !0 })
        });
      }
    });
  }
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "card", children: /* @__PURE__ */ a.jsx(
      Ht,
      {
        hasActions: !0,
        actionSchema: {
          columnProps: {
            header: "Thao tác",
            body: N,
            align: "right"
          }
        },
        tableTitle: `Danh sách ${e.isUnit ? "đơn vị" : "cá nhân"} giải trình`,
        value: e.subExplanations,
        headerSchema: S,
        paginator: !1,
        emptyMessage: /* @__PURE__ */ a.jsx("div", { children: "Không có dữ liệu" })
      }
    ) }),
    /* @__PURE__ */ a.jsx(
      Le,
      {
        message: `Bạn có chắc chắn muốn huỷ yêu cầu giải trình tới <b>${j.subName}</b> này?`,
        header: "Xác nhận",
        icon: "ti ti-alert-triangle",
        acceptLabel: "Hủy yêu cầu giải trình",
        severity: "danger",
        accept: () => {
          P();
        },
        acceptIcon: "ti ti-trash",
        rejectLabel: "Huỷ",
        reject: () => {
          I({ ...j, visible: !1 });
        },
        rejectIcon: "ti ti-x",
        acceptButtonProps: { severity: "danger" },
        loading: j.loading,
        visible: j.visible
      }
    ),
    /* @__PURE__ */ a.jsx(
      Mt,
      {
        approveState: $,
        setApproveState: _,
        refetch: t,
        isSubRequest: !0
      }
    ),
    /* @__PURE__ */ a.jsx(
      at,
      {
        approve: !0,
        formState: k,
        setFormState: w,
        refetch: t
      }
    ),
    /* @__PURE__ */ a.jsx(qt, { id: B.id || "", dialog: B, setDialog: O }),
    /* @__PURE__ */ a.jsx(
      Me,
      {
        visible: g,
        acceptAction: () => {
          p(!1), _({ ...$, loading: !1, visible: !1 }), w((f) => ({ ...f, loading: !1, visible: !1 }));
        },
        rejectAction: () => p(!1)
      }
    )
  ] });
}
function ja() {
  var te, re, ie;
  const { showToast: e } = Ae(), { theme: t } = wt(), n = kt(), o = new URLSearchParams(n.search), i = o.get("id"), h = o.get("criteria"), { user: g } = Pe(), p = Ie(), [j, I] = d.useState({
    loading: !1,
    visible: !1
  }), [k, w] = d.useState({
    loading: !1,
    visible: !1
  }), [$, _] = d.useState({
    loading: !1,
    visible: !1
  }), [B, O] = d.useState({
    loading: !1,
    visible: !1,
    id: ""
  }), [S, N] = d.useState({
    loading: !1,
    visible: !1,
    id: ""
  }), [v, P] = d.useState({
    loading: !1,
    visible: !1,
    id: ""
  }), [f, R] = d.useState({
    loading: !1,
    visible: !1
  }), { data: r, refetch: E } = Kt(i);
  function ee() {
    w({ loading: !0, visible: !0 });
    const C = {
      id: i,
      buttonSubmitType: "10",
      isEndTask: "true",
      flowId: 0,
      data: {
        btn_key_code: "huy",
        statusId: 14,
        updatedBy: g.id
      },
      timeLine: {
        updatedBy: g.id,
        elementName: "Huỷ yêu cầu giải trình"
      },
      results: {}
    };
    p.mutate(C, {
      onSuccess: (H) => {
        e({
          code: H.code,
          detail: H.message,
          onSuccess: () => {
            w({ loading: !1, visible: !1 }), E();
          },
          onError: () => w({ loading: !1, visible: !0 })
        });
      },
      onError: (H) => {
        var q, J;
        e({
          code: (q = H.response) == null ? void 0 : q.data.code,
          detail: (J = H.response) == null ? void 0 : J.data.message,
          onError: () => w({ loading: !1, visible: !0 })
        });
      }
    });
  }
  function ce() {
    const C = {
      id: i,
      buttonSubmitType: "1",
      isEndTask: "true",
      flowId: 0,
      data: {
        btn_key_code: "tiep_nhan",
        statusId: 9,
        updatedBy: g.id
      },
      timeLine: {
        updatedBy: g.id,
        elementName: "Đã tiếp nhận",
        type: "EXPLANATION"
      },
      results: {}
    };
    p.mutate(C, {
      onSuccess: (H) => {
        e({
          code: H.code,
          detail: H.message,
          onSuccess: () => {
            _({ loading: !1, visible: !1 }), E();
          },
          onError: () => _({ loading: !1, visible: !0 })
        });
      },
      onError: (H) => {
        var q, J;
        e({
          code: (q = H.response) == null ? void 0 : q.data.code,
          detail: (J = H.response) == null ? void 0 : J.data.message,
          onError: () => _({ loading: !1, visible: !0 })
        });
      }
    });
  }
  const M = r == null ? void 0 : r.results.map((C) => ({
    header: C.header,
    children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
      /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Người xử lý", inputId: "createdByNameagencyAssignedName", children: /* @__PURE__ */ a.jsxs("b", { children: [
        C.createdByName,
        " - ",
        C.agenciesCreatedName
      ] }) }) }),
      /* @__PURE__ */ a.jsx("div", { className: "col-span-8", children: /* @__PURE__ */ a.jsx(F, { label: "Thời gian gửi giải trình", inputId: "createdAt", children: /* @__PURE__ */ a.jsx("b", { children: C.createdAt ? gt(C.createdAt).format("DD/MM/YYYY HH:mm:ss") : "-" }) }) }),
      /* @__PURE__ */ a.jsx("div", { className: "col-span-12", children: /* @__PURE__ */ a.jsx(F, { label: "Nội dung giải trình", inputId: "content", children: /* @__PURE__ */ a.jsx("b", { children: C.content ? C.content : "-" }) }) }),
      /* @__PURE__ */ a.jsx("div", { className: "col-span-12", children: /* @__PURE__ */ a.jsx(F, { label: "Tệp đính kèm", inputId: "mediaFile", children: C.mediaFile && C.mediaFile.length ? C.mediaFile.map((H, q) => /* @__PURE__ */ a.jsx("a", { href: H.mediaHost + H.path, target: "_blank", rel: "noreferrer", children: H.fileName }, q)) : "-" }) }),
      C.updatedBy && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Người phê duyệt", inputId: "updatedByNameagencyAssignedName", children: /* @__PURE__ */ a.jsxs("b", { children: [
          C.updatedByName,
          " - ",
          C.agenciesUpdatedName
        ] }) }) }),
        /* @__PURE__ */ a.jsx("div", { className: "col-span-8", children: /* @__PURE__ */ a.jsx(F, { label: "Trạng thái", inputId: "status", children: /* @__PURE__ */ a.jsx("b", { children: C.status || "-" }) }) }),
        /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Thời gian phê duyệt", inputId: "updatedAt", children: /* @__PURE__ */ a.jsx("b", { children: C.updatedAt ? gt(C.updatedAt).format("DD/MM/YYYY HH:mm:ss") : "-" }) }) }),
        /* @__PURE__ */ a.jsx("div", { className: "col-span-12", children: /* @__PURE__ */ a.jsx(F, { label: "Nội dung phê duyệt", inputId: "updatedAt", children: /* @__PURE__ */ a.jsx("b", { children: C.extraContent || "-" }) }) })
      ] })
    ] })
  }));
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      In,
      {
        cardTitle: "Chi tiết yêu cầu giải trình",
        body: r != null && r.parentId ? /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(
          $n,
          {
            tabPanels: [
              {
                header: "Thông tin chung",
                children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
                  /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Chỉ tiêu", inputId: "criteria", children: /* @__PURE__ */ a.jsx("b", { children: (r == null ? void 0 : r.criteria) || "-" }) }) }),
                  /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Loại cảnh báo", inputId: "fieldName", children: /* @__PURE__ */ a.jsx("b", { children: (r == null ? void 0 : r.fieldName) || "-" }) }) }),
                  /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Trạng thái", inputId: "statusName", children: r != null && r.statusName ? /* @__PURE__ */ a.jsx(
                    et,
                    {
                      value: r == null ? void 0 : r.statusName,
                      style: {
                        color: t === "light" ? r == null ? void 0 : r.statusColorCode : r == null ? void 0 : r.colorCodeDarkMode,
                        border: "1px solid " + (t === "light" ? r == null ? void 0 : r.statusColorCode : r == null ? void 0 : r.colorCodeDarkMode),
                        background: "transparent"
                      }
                    }
                  ) : "-" }) }),
                  /* @__PURE__ */ a.jsx("div", { className: "col-span-8", children: /* @__PURE__ */ a.jsx(F, { label: "Nội dung yêu cầu giải trình", inputId: "content", children: /* @__PURE__ */ a.jsx("b", { children: (r == null ? void 0 : r.content) || "-" }) }) }),
                  /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Tệp đính kèm", inputId: "mediaFile", children: r != null && r.mediaFile && r.mediaFile.length ? (ie = r == null ? void 0 : r.mediaFile) == null ? void 0 : ie.map((C, H) => /* @__PURE__ */ a.jsx("a", { href: C.mediaHost + C.path, target: "_blank", rel: "noreferrer", children: C.fileName }, H)) : "-" }) }),
                  /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Ngày bắt đầu", inputId: "startDateTime", children: /* @__PURE__ */ a.jsxs("b", { children: [
                    r != null && r.startDateTime ? ae(r == null ? void 0 : r.startDateTime) : "-",
                    " "
                  ] }) }) }),
                  /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Ngày kết thúc", inputId: "endDateTime", children: /* @__PURE__ */ a.jsx("b", { children: r != null && r.endDateTime ? ae(r == null ? void 0 : r.endDateTime) : "-" }) }) })
                ] })
              },
              {
                header: "Kết quả xử lý",
                children: /* @__PURE__ */ a.jsx(a.Fragment, { children: r != null && r.results.length ? /* @__PURE__ */ a.jsx(Zn, { accordionTabs: M }) : /* @__PURE__ */ a.jsx("span", { children: "Không có dữ liệu" }) })
              }
            ]
          }
        ) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
            /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Chỉ tiêu", inputId: "criteria", children: /* @__PURE__ */ a.jsx("b", { children: (r == null ? void 0 : r.criteria) || "-" }) }) }),
            /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Loại cảnh báo", inputId: "fieldName", children: /* @__PURE__ */ a.jsx("b", { children: (r == null ? void 0 : r.fieldName) || "-" }) }) }),
            /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Trạng thái", inputId: "statusName", children: r != null && r.statusName ? /* @__PURE__ */ a.jsx(
              et,
              {
                value: r == null ? void 0 : r.statusName,
                style: {
                  color: t === "light" ? r == null ? void 0 : r.statusColorCode : r == null ? void 0 : r.colorCodeDarkMode,
                  border: "1px solid " + (t === "light" ? r == null ? void 0 : r.statusColorCode : r == null ? void 0 : r.colorCodeDarkMode),
                  background: "transparent"
                }
              }
            ) : "-" }) }),
            /* @__PURE__ */ a.jsx("div", { className: "col-span-8", children: /* @__PURE__ */ a.jsx(F, { label: "Nội dung yêu cầu giải trình", inputId: "content", children: /* @__PURE__ */ a.jsx("b", { children: (r == null ? void 0 : r.content) || "-" }) }) }),
            /* @__PURE__ */ a.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ a.jsx(F, { label: "Tệp đính kèm", inputId: "mediaFile", children: r != null && r.mediaFile && (r != null && r.mediaFile.length) ? (te = r == null ? void 0 : r.mediaFile) == null ? void 0 : te.map((C, H) => /* @__PURE__ */ a.jsx("a", { href: C.mediaHost + C.path, target: "_blank", rel: "noreferrer", children: C.fileName }, H)) : "-" }) })
          ] }),
          (r == null ? void 0 : r.reportingUnits) && (r == null ? void 0 : r.reportingUnits.length) > 0 && /* @__PURE__ */ a.jsx("div", { className: "mt-6", children: /* @__PURE__ */ a.jsx(
            St,
            {
              explain: { isUnit: !0, subExplanations: (r == null ? void 0 : r.reportingUnits) || [] },
              refetch: () => E()
            }
          ) }),
          (r == null ? void 0 : r.reportingUsers) && ((re = r == null ? void 0 : r.reportingUsers) == null ? void 0 : re.length) > 0 && /* @__PURE__ */ a.jsx("div", { className: "mt-6", children: /* @__PURE__ */ a.jsx(
            St,
            {
              explain: { isUnit: !1, subExplanations: (r == null ? void 0 : r.reportingUsers) || [] },
              refetch: () => E()
            }
          ) })
        ] }),
        footer: /* @__PURE__ */ a.jsx(
          oa,
          {
            explain: r,
            setHistoryState: R,
            setCancelExplanationState: w,
            setRejectExplanationState: O,
            setApproveState: P,
            setReceptionState: _,
            setExplainState: I,
            setRejectReceptionState: N,
            criteria: h
          }
        )
      }
    ),
    /* @__PURE__ */ a.jsx(
      Le,
      {
        message: "Bạn có chắc chắn muốn huỷ yêu cầu giải trình này?",
        header: "Xác nhận",
        icon: "ti ti-alert-triangle",
        acceptLabel: "Hủy yêu cầu giải trình",
        severity: "danger",
        accept: () => {
          ee();
        },
        acceptIcon: "ti ti-trash",
        rejectLabel: "Huỷ",
        reject: () => {
          w({ visible: !1, loading: !1 });
        },
        rejectIcon: "ti ti-x",
        acceptButtonProps: { severity: "danger" },
        loading: k.loading,
        visible: k.visible
      }
    ),
    /* @__PURE__ */ a.jsx(
      Le,
      {
        message: "Bạn có chắc chắn muốn tiếp nhận yêu cầu giải trình này?",
        header: "Tiếp nhận yêu cầu giải trình",
        icon: "ti ti-alert-triangle",
        acceptLabel: "Tiếp nhận",
        accept: () => {
          ce();
        },
        acceptIcon: "ti ti-check",
        rejectLabel: "Huỷ",
        reject: () => {
          _({ visible: !1, loading: !1 });
        },
        rejectIcon: "ti ti-x",
        loading: $.loading,
        visible: $.visible
      }
    ),
    /* @__PURE__ */ a.jsx(qt, { id: i, dialog: f, setDialog: R }),
    /* @__PURE__ */ a.jsx(
      Mt,
      {
        approveState: v,
        setApproveState: P,
        refetch: E,
        isSubRequest: !!(r != null && r.parentId)
      }
    ),
    /* @__PURE__ */ a.jsx(
      at,
      {
        approve: !0,
        formState: B,
        setFormState: O,
        refetch: E
      }
    ),
    /* @__PURE__ */ a.jsx(
      at,
      {
        approve: !1,
        formState: S,
        setFormState: N,
        refetch: E
      }
    ),
    /* @__PURE__ */ a.jsx(ca, { id: i, explainState: j, setExplainState: I, refetch: E })
  ] });
}
export {
  ja as DetailExplain
};
