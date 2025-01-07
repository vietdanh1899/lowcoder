var fa = Object.defineProperty, da = Object.defineProperties;
var ga = Object.getOwnPropertyDescriptors;
var fr = Object.getOwnPropertySymbols;
var Vi = Object.prototype.hasOwnProperty, Wi = Object.prototype.propertyIsEnumerable;
var Rs = (n, t, e) => t in n ? fa(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, H = (n, t) => {
  for (var e in t || (t = {}))
    Vi.call(t, e) && Rs(n, e, t[e]);
  if (fr)
    for (var e of fr(t))
      Wi.call(t, e) && Rs(n, e, t[e]);
  return n;
}, fe = (n, t) => da(n, ga(t));
var ks = (n, t) => {
  var e = {};
  for (var r in n)
    Vi.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && fr)
    for (var r of fr(n))
      t.indexOf(r) < 0 && Wi.call(n, r) && (e[r] = n[r]);
  return e;
};
var x = (n, t, e) => (Rs(n, typeof t != "symbol" ? t + "" : t, e), e);
import { c as Xt, g as Xl } from "./33eb31a7.js";
var pa = typeof global == "object" && global && global.Object === Object && global;
const Yl = pa;
var ma = typeof self == "object" && self && self.Object === Object && self, ba = Yl || ma || Function("return this")();
const Rt = ba;
var ya = Rt.Symbol;
const te = ya;
var Jl = Object.prototype, va = Jl.hasOwnProperty, Ea = Jl.toString, pn = te ? te.toStringTag : void 0;
function Aa(n) {
  var t = va.call(n, pn), e = n[pn];
  try {
    n[pn] = void 0;
    var r = !0;
  } catch (i) {
  }
  var s = Ea.call(n);
  return r && (t ? n[pn] = e : delete n[pn]), s;
}
var Na = Object.prototype, wa = Na.toString;
function Ta(n) {
  return wa.call(n);
}
var xa = "[object Null]", La = "[object Undefined]", Zi = te ? te.toStringTag : void 0;
function We(n) {
  return n == null ? n === void 0 ? La : xa : Zi && Zi in Object(n) ? Aa(n) : Ta(n);
}
function Ut(n) {
  return n != null && typeof n == "object";
}
var Sa = Array.isArray;
const ge = Sa;
function ee(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
function Ql(n) {
  return n;
}
var _a = "[object AsyncFunction]", Oa = "[object Function]", qa = "[object GeneratorFunction]", Ca = "[object Proxy]";
function Ei(n) {
  if (!ee(n))
    return !1;
  var t = We(n);
  return t == Oa || t == qa || t == _a || t == Ca;
}
var Ia = Rt["__core-js_shared__"];
const Bs = Ia;
var Xi = function() {
  var n = /[^.]+$/.exec(Bs && Bs.keys && Bs.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function Ra(n) {
  return !!Xi && Xi in n;
}
var ka = Function.prototype, Ba = ka.toString;
function be(n) {
  if (n != null) {
    try {
      return Ba.call(n);
    } catch (t) {
    }
    try {
      return n + "";
    } catch (t) {
    }
  }
  return "";
}
var Ma = /[\\^$.*+?()[\]{}|]/g, $a = /^\[object .+?Constructor\]$/, Da = Function.prototype, Pa = Object.prototype, ja = Da.toString, Ua = Pa.hasOwnProperty, Fa = RegExp(
  "^" + ja.call(Ua).replace(Ma, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ha(n) {
  if (!ee(n) || Ra(n))
    return !1;
  var t = Ei(n) ? Fa : $a;
  return t.test(be(n));
}
function za(n, t) {
  return n == null ? void 0 : n[t];
}
function ye(n, t) {
  var e = za(n, t);
  return Ha(e) ? e : void 0;
}
var Ga = ye(Rt, "WeakMap");
const Ws = Ga;
var Yi = Object.create, Ka = function() {
  function n() {
  }
  return function(t) {
    if (!ee(t))
      return {};
    if (Yi)
      return Yi(t);
    n.prototype = t;
    var e = new n();
    return n.prototype = void 0, e;
  };
}();
const Va = Ka;
function Wa(n, t, e) {
  switch (e.length) {
    case 0:
      return n.call(t);
    case 1:
      return n.call(t, e[0]);
    case 2:
      return n.call(t, e[0], e[1]);
    case 3:
      return n.call(t, e[0], e[1], e[2]);
  }
  return n.apply(t, e);
}
function to(n, t) {
  var e = -1, r = n.length;
  for (t || (t = Array(r)); ++e < r; )
    t[e] = n[e];
  return t;
}
var Za = 800, Xa = 16, Ya = Date.now;
function Ja(n) {
  var t = 0, e = 0;
  return function() {
    var r = Ya(), s = Xa - (r - e);
    if (e = r, s > 0) {
      if (++t >= Za)
        return arguments[0];
    } else
      t = 0;
    return n.apply(void 0, arguments);
  };
}
function Qa(n) {
  return function() {
    return n;
  };
}
var tc = function() {
  try {
    var n = ye(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch (t) {
  }
}();
const Nr = tc;
var ec = Nr ? function(n, t) {
  return Nr(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Qa(t),
    writable: !0
  });
} : Ql;
const nc = ec;
var rc = Ja(nc);
const sc = rc;
function ic(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r && t(n[e], e, n) !== !1; )
    ;
  return n;
}
var lc = 9007199254740991, oc = /^(?:0|[1-9]\d*)$/;
function eo(n, t) {
  var e = typeof n;
  return t = t == null ? lc : t, !!t && (e == "number" || e != "symbol" && oc.test(n)) && n > -1 && n % 1 == 0 && n < t;
}
function Ai(n, t, e) {
  t == "__proto__" && Nr ? Nr(n, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : n[t] = e;
}
function Cn(n, t) {
  return n === t || n !== n && t !== t;
}
var ac = Object.prototype, cc = ac.hasOwnProperty;
function no(n, t, e) {
  var r = n[t];
  (!(cc.call(n, t) && Cn(r, e)) || e === void 0 && !(t in n)) && Ai(n, t, e);
}
function In(n, t, e, r) {
  var s = !e;
  e || (e = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var a = t[i], c = r ? r(e[a], n[a], a, e, n) : void 0;
    c === void 0 && (c = n[a]), s ? Ai(e, a, c) : no(e, a, c);
  }
  return e;
}
var Ji = Math.max;
function uc(n, t, e) {
  return t = Ji(t === void 0 ? n.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, i = Ji(r.length - t, 0), o = Array(i); ++s < i; )
      o[s] = r[t + s];
    s = -1;
    for (var a = Array(t + 1); ++s < t; )
      a[s] = r[s];
    return a[t] = e(o), Wa(n, this, a);
  };
}
function hc(n, t) {
  return sc(uc(n, t, Ql), n + "");
}
var fc = 9007199254740991;
function ro(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= fc;
}
function _r(n) {
  return n != null && ro(n.length) && !Ei(n);
}
function dc(n, t, e) {
  if (!ee(e))
    return !1;
  var r = typeof t;
  return (r == "number" ? _r(e) && eo(t, e.length) : r == "string" && t in e) ? Cn(e[t], n) : !1;
}
function gc(n) {
  return hc(function(t, e) {
    var r = -1, s = e.length, i = s > 1 ? e[s - 1] : void 0, o = s > 2 ? e[2] : void 0;
    for (i = n.length > 3 && typeof i == "function" ? (s--, i) : void 0, o && dc(e[0], e[1], o) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++r < s; ) {
      var a = e[r];
      a && n(t, a, r, i);
    }
    return t;
  });
}
var pc = Object.prototype;
function Ni(n) {
  var t = n && n.constructor, e = typeof t == "function" && t.prototype || pc;
  return n === e;
}
function mc(n, t) {
  for (var e = -1, r = Array(n); ++e < n; )
    r[e] = t(e);
  return r;
}
var bc = "[object Arguments]";
function Qi(n) {
  return Ut(n) && We(n) == bc;
}
var so = Object.prototype, yc = so.hasOwnProperty, vc = so.propertyIsEnumerable, Ec = Qi(function() {
  return arguments;
}()) ? Qi : function(n) {
  return Ut(n) && yc.call(n, "callee") && !vc.call(n, "callee");
};
const Zs = Ec;
function Ac() {
  return !1;
}
var io = typeof exports == "object" && exports && !exports.nodeType && exports, tl = io && typeof module == "object" && module && !module.nodeType && module, Nc = tl && tl.exports === io, el = Nc ? Rt.Buffer : void 0, wc = el ? el.isBuffer : void 0, Tc = wc || Ac;
const Nn = Tc;
var xc = "[object Arguments]", Lc = "[object Array]", Sc = "[object Boolean]", _c = "[object Date]", Oc = "[object Error]", qc = "[object Function]", Cc = "[object Map]", Ic = "[object Number]", Rc = "[object Object]", kc = "[object RegExp]", Bc = "[object Set]", Mc = "[object String]", $c = "[object WeakMap]", Dc = "[object ArrayBuffer]", Pc = "[object DataView]", jc = "[object Float32Array]", Uc = "[object Float64Array]", Fc = "[object Int8Array]", Hc = "[object Int16Array]", zc = "[object Int32Array]", Gc = "[object Uint8Array]", Kc = "[object Uint8ClampedArray]", Vc = "[object Uint16Array]", Wc = "[object Uint32Array]", F = {};
F[jc] = F[Uc] = F[Fc] = F[Hc] = F[zc] = F[Gc] = F[Kc] = F[Vc] = F[Wc] = !0;
F[xc] = F[Lc] = F[Dc] = F[Sc] = F[Pc] = F[_c] = F[Oc] = F[qc] = F[Cc] = F[Ic] = F[Rc] = F[kc] = F[Bc] = F[Mc] = F[$c] = !1;
function Zc(n) {
  return Ut(n) && ro(n.length) && !!F[We(n)];
}
function wi(n) {
  return function(t) {
    return n(t);
  };
}
var lo = typeof exports == "object" && exports && !exports.nodeType && exports, yn = lo && typeof module == "object" && module && !module.nodeType && module, Xc = yn && yn.exports === lo, Ms = Xc && Yl.process, Yc = function() {
  try {
    var n = yn && yn.require && yn.require("util").types;
    return n || Ms && Ms.binding && Ms.binding("util");
  } catch (t) {
  }
}();
const He = Yc;
var nl = He && He.isTypedArray, Jc = nl ? wi(nl) : Zc;
const Ti = Jc;
var Qc = Object.prototype, tu = Qc.hasOwnProperty;
function oo(n, t) {
  var e = ge(n), r = !e && Zs(n), s = !e && !r && Nn(n), i = !e && !r && !s && Ti(n), o = e || r || s || i, a = o ? mc(n.length, String) : [], c = a.length;
  for (var h in n)
    (t || tu.call(n, h)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    eo(h, c))) && a.push(h);
  return a;
}
function ao(n, t) {
  return function(e) {
    return n(t(e));
  };
}
var eu = ao(Object.keys, Object);
const nu = eu;
var ru = Object.prototype, su = ru.hasOwnProperty;
function iu(n) {
  if (!Ni(n))
    return nu(n);
  var t = [];
  for (var e in Object(n))
    su.call(n, e) && e != "constructor" && t.push(e);
  return t;
}
function xi(n) {
  return _r(n) ? oo(n) : iu(n);
}
function lu(n) {
  var t = [];
  if (n != null)
    for (var e in Object(n))
      t.push(e);
  return t;
}
var ou = Object.prototype, au = ou.hasOwnProperty;
function cu(n) {
  if (!ee(n))
    return lu(n);
  var t = Ni(n), e = [];
  for (var r in n)
    r == "constructor" && (t || !au.call(n, r)) || e.push(r);
  return e;
}
function Rn(n) {
  return _r(n) ? oo(n, !0) : cu(n);
}
var uu = ye(Object, "create");
const wn = uu;
function hu() {
  this.__data__ = wn ? wn(null) : {}, this.size = 0;
}
function fu(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var du = "__lodash_hash_undefined__", gu = Object.prototype, pu = gu.hasOwnProperty;
function mu(n) {
  var t = this.__data__;
  if (wn) {
    var e = t[n];
    return e === du ? void 0 : e;
  }
  return pu.call(t, n) ? t[n] : void 0;
}
var bu = Object.prototype, yu = bu.hasOwnProperty;
function vu(n) {
  var t = this.__data__;
  return wn ? t[n] !== void 0 : yu.call(t, n);
}
var Eu = "__lodash_hash_undefined__";
function Au(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = wn && t === void 0 ? Eu : t, this;
}
function pe(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
pe.prototype.clear = hu;
pe.prototype.delete = fu;
pe.prototype.get = mu;
pe.prototype.has = vu;
pe.prototype.set = Au;
function Nu() {
  this.__data__ = [], this.size = 0;
}
function Or(n, t) {
  for (var e = n.length; e--; )
    if (Cn(n[e][0], t))
      return e;
  return -1;
}
var wu = Array.prototype, Tu = wu.splice;
function xu(n) {
  var t = this.__data__, e = Or(t, n);
  if (e < 0)
    return !1;
  var r = t.length - 1;
  return e == r ? t.pop() : Tu.call(t, e, 1), --this.size, !0;
}
function Lu(n) {
  var t = this.__data__, e = Or(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function Su(n) {
  return Or(this.__data__, n) > -1;
}
function _u(n, t) {
  var e = this.__data__, r = Or(e, n);
  return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this;
}
function zt(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
zt.prototype.clear = Nu;
zt.prototype.delete = xu;
zt.prototype.get = Lu;
zt.prototype.has = Su;
zt.prototype.set = _u;
var Ou = ye(Rt, "Map");
const Tn = Ou;
function qu() {
  this.size = 0, this.__data__ = {
    hash: new pe(),
    map: new (Tn || zt)(),
    string: new pe()
  };
}
function Cu(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function qr(n, t) {
  var e = n.__data__;
  return Cu(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function Iu(n) {
  var t = qr(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function Ru(n) {
  return qr(this, n).get(n);
}
function ku(n) {
  return qr(this, n).has(n);
}
function Bu(n, t) {
  var e = qr(this, n), r = e.size;
  return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
}
function ve(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
ve.prototype.clear = qu;
ve.prototype.delete = Iu;
ve.prototype.get = Ru;
ve.prototype.has = ku;
ve.prototype.set = Bu;
function co(n, t) {
  for (var e = -1, r = t.length, s = n.length; ++e < r; )
    n[s + e] = t[e];
  return n;
}
var Mu = ao(Object.getPrototypeOf, Object);
const Li = Mu;
var $u = "[object Object]", Du = Function.prototype, Pu = Object.prototype, uo = Du.toString, ju = Pu.hasOwnProperty, Uu = uo.call(Object);
function Fu(n) {
  if (!Ut(n) || We(n) != $u)
    return !1;
  var t = Li(n);
  if (t === null)
    return !0;
  var e = ju.call(t, "constructor") && t.constructor;
  return typeof e == "function" && e instanceof e && uo.call(e) == Uu;
}
function Hu() {
  this.__data__ = new zt(), this.size = 0;
}
function zu(n) {
  var t = this.__data__, e = t.delete(n);
  return this.size = t.size, e;
}
function Gu(n) {
  return this.__data__.get(n);
}
function Ku(n) {
  return this.__data__.has(n);
}
var Vu = 200;
function Wu(n, t) {
  var e = this.__data__;
  if (e instanceof zt) {
    var r = e.__data__;
    if (!Tn || r.length < Vu - 1)
      return r.push([n, t]), this.size = ++e.size, this;
    e = this.__data__ = new ve(r);
  }
  return e.set(n, t), this.size = e.size, this;
}
function Ot(n) {
  var t = this.__data__ = new zt(n);
  this.size = t.size;
}
Ot.prototype.clear = Hu;
Ot.prototype.delete = zu;
Ot.prototype.get = Gu;
Ot.prototype.has = Ku;
Ot.prototype.set = Wu;
function Zu(n, t) {
  return n && In(t, xi(t), n);
}
function Xu(n, t) {
  return n && In(t, Rn(t), n);
}
var ho = typeof exports == "object" && exports && !exports.nodeType && exports, rl = ho && typeof module == "object" && module && !module.nodeType && module, Yu = rl && rl.exports === ho, sl = Yu ? Rt.Buffer : void 0, il = sl ? sl.allocUnsafe : void 0;
function fo(n, t) {
  if (t)
    return n.slice();
  var e = n.length, r = il ? il(e) : new n.constructor(e);
  return n.copy(r), r;
}
function Ju(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length, s = 0, i = []; ++e < r; ) {
    var o = n[e];
    t(o, e, n) && (i[s++] = o);
  }
  return i;
}
function go() {
  return [];
}
var Qu = Object.prototype, th = Qu.propertyIsEnumerable, ll = Object.getOwnPropertySymbols, eh = ll ? function(n) {
  return n == null ? [] : (n = Object(n), Ju(ll(n), function(t) {
    return th.call(n, t);
  }));
} : go;
const Si = eh;
function nh(n, t) {
  return In(n, Si(n), t);
}
var rh = Object.getOwnPropertySymbols, sh = rh ? function(n) {
  for (var t = []; n; )
    co(t, Si(n)), n = Li(n);
  return t;
} : go;
const po = sh;
function ih(n, t) {
  return In(n, po(n), t);
}
function mo(n, t, e) {
  var r = t(n);
  return ge(n) ? r : co(r, e(n));
}
function Xs(n) {
  return mo(n, xi, Si);
}
function lh(n) {
  return mo(n, Rn, po);
}
var oh = ye(Rt, "DataView");
const Ys = oh;
var ah = ye(Rt, "Promise");
const Js = ah;
var ch = ye(Rt, "Set");
const Qs = ch;
var ol = "[object Map]", uh = "[object Object]", al = "[object Promise]", cl = "[object Set]", ul = "[object WeakMap]", hl = "[object DataView]", hh = be(Ys), fh = be(Tn), dh = be(Js), gh = be(Qs), ph = be(Ws), de = We;
(Ys && de(new Ys(new ArrayBuffer(1))) != hl || Tn && de(new Tn()) != ol || Js && de(Js.resolve()) != al || Qs && de(new Qs()) != cl || Ws && de(new Ws()) != ul) && (de = function(n) {
  var t = We(n), e = t == uh ? n.constructor : void 0, r = e ? be(e) : "";
  if (r)
    switch (r) {
      case hh:
        return hl;
      case fh:
        return ol;
      case dh:
        return al;
      case gh:
        return cl;
      case ph:
        return ul;
    }
  return t;
});
const xn = de;
var mh = Object.prototype, bh = mh.hasOwnProperty;
function yh(n) {
  var t = n.length, e = new n.constructor(t);
  return t && typeof n[0] == "string" && bh.call(n, "index") && (e.index = n.index, e.input = n.input), e;
}
var vh = Rt.Uint8Array;
const wr = vh;
function _i(n) {
  var t = new n.constructor(n.byteLength);
  return new wr(t).set(new wr(n)), t;
}
function Eh(n, t) {
  var e = t ? _i(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.byteLength);
}
var Ah = /\w*$/;
function Nh(n) {
  var t = new n.constructor(n.source, Ah.exec(n));
  return t.lastIndex = n.lastIndex, t;
}
var fl = te ? te.prototype : void 0, dl = fl ? fl.valueOf : void 0;
function wh(n) {
  return dl ? Object(dl.call(n)) : {};
}
function bo(n, t) {
  var e = t ? _i(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.length);
}
var Th = "[object Boolean]", xh = "[object Date]", Lh = "[object Map]", Sh = "[object Number]", _h = "[object RegExp]", Oh = "[object Set]", qh = "[object String]", Ch = "[object Symbol]", Ih = "[object ArrayBuffer]", Rh = "[object DataView]", kh = "[object Float32Array]", Bh = "[object Float64Array]", Mh = "[object Int8Array]", $h = "[object Int16Array]", Dh = "[object Int32Array]", Ph = "[object Uint8Array]", jh = "[object Uint8ClampedArray]", Uh = "[object Uint16Array]", Fh = "[object Uint32Array]";
function Hh(n, t, e) {
  var r = n.constructor;
  switch (t) {
    case Ih:
      return _i(n);
    case Th:
    case xh:
      return new r(+n);
    case Rh:
      return Eh(n, e);
    case kh:
    case Bh:
    case Mh:
    case $h:
    case Dh:
    case Ph:
    case jh:
    case Uh:
    case Fh:
      return bo(n, e);
    case Lh:
      return new r();
    case Sh:
    case qh:
      return new r(n);
    case _h:
      return Nh(n);
    case Oh:
      return new r();
    case Ch:
      return wh(n);
  }
}
function yo(n) {
  return typeof n.constructor == "function" && !Ni(n) ? Va(Li(n)) : {};
}
var zh = "[object Map]";
function Gh(n) {
  return Ut(n) && xn(n) == zh;
}
var gl = He && He.isMap, Kh = gl ? wi(gl) : Gh;
const Vh = Kh;
var Wh = "[object Set]";
function Zh(n) {
  return Ut(n) && xn(n) == Wh;
}
var pl = He && He.isSet, Xh = pl ? wi(pl) : Zh;
const Yh = Xh;
var Jh = 1, Qh = 2, tf = 4, vo = "[object Arguments]", ef = "[object Array]", nf = "[object Boolean]", rf = "[object Date]", sf = "[object Error]", Eo = "[object Function]", lf = "[object GeneratorFunction]", of = "[object Map]", af = "[object Number]", Ao = "[object Object]", cf = "[object RegExp]", uf = "[object Set]", hf = "[object String]", ff = "[object Symbol]", df = "[object WeakMap]", gf = "[object ArrayBuffer]", pf = "[object DataView]", mf = "[object Float32Array]", bf = "[object Float64Array]", yf = "[object Int8Array]", vf = "[object Int16Array]", Ef = "[object Int32Array]", Af = "[object Uint8Array]", Nf = "[object Uint8ClampedArray]", wf = "[object Uint16Array]", Tf = "[object Uint32Array]", j = {};
j[vo] = j[ef] = j[gf] = j[pf] = j[nf] = j[rf] = j[mf] = j[bf] = j[yf] = j[vf] = j[Ef] = j[of] = j[af] = j[Ao] = j[cf] = j[uf] = j[hf] = j[ff] = j[Af] = j[Nf] = j[wf] = j[Tf] = !0;
j[sf] = j[Eo] = j[df] = !1;
function vr(n, t, e, r, s, i) {
  var o, a = t & Jh, c = t & Qh, h = t & tf;
  if (e && (o = s ? e(n, r, s, i) : e(n)), o !== void 0)
    return o;
  if (!ee(n))
    return n;
  var d = ge(n);
  if (d) {
    if (o = yh(n), !a)
      return to(n, o);
  } else {
    var m = xn(n), g = m == Eo || m == lf;
    if (Nn(n))
      return fo(n, a);
    if (m == Ao || m == vo || g && !s) {
      if (o = c || g ? {} : yo(n), !a)
        return c ? ih(n, Xu(o, n)) : nh(n, Zu(o, n));
    } else {
      if (!j[m])
        return s ? n : {};
      o = Hh(n, m, a);
    }
  }
  i || (i = new Ot());
  var p = i.get(n);
  if (p)
    return p;
  i.set(n, o), Yh(n) ? n.forEach(function(v) {
    o.add(vr(v, t, e, v, n, i));
  }) : Vh(n) && n.forEach(function(v, y) {
    o.set(y, vr(v, t, e, y, n, i));
  });
  var b = h ? c ? lh : Xs : c ? Rn : xi, E = d ? void 0 : b(n);
  return ic(E || n, function(v, y) {
    E && (y = v, v = n[y]), no(o, y, vr(v, t, e, y, n, i));
  }), o;
}
var xf = 1, Lf = 4;
function je(n) {
  return vr(n, xf | Lf);
}
var Sf = "__lodash_hash_undefined__";
function _f(n) {
  return this.__data__.set(n, Sf), this;
}
function Of(n) {
  return this.__data__.has(n);
}
function Tr(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.__data__ = new ve(); ++t < e; )
    this.add(n[t]);
}
Tr.prototype.add = Tr.prototype.push = _f;
Tr.prototype.has = Of;
function qf(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r; )
    if (t(n[e], e, n))
      return !0;
  return !1;
}
function Cf(n, t) {
  return n.has(t);
}
var If = 1, Rf = 2;
function No(n, t, e, r, s, i) {
  var o = e & If, a = n.length, c = t.length;
  if (a != c && !(o && c > a))
    return !1;
  var h = i.get(n), d = i.get(t);
  if (h && d)
    return h == t && d == n;
  var m = -1, g = !0, p = e & Rf ? new Tr() : void 0;
  for (i.set(n, t), i.set(t, n); ++m < a; ) {
    var b = n[m], E = t[m];
    if (r)
      var v = o ? r(E, b, m, t, n, i) : r(b, E, m, n, t, i);
    if (v !== void 0) {
      if (v)
        continue;
      g = !1;
      break;
    }
    if (p) {
      if (!qf(t, function(y, w) {
        if (!Cf(p, w) && (b === y || s(b, y, e, r, i)))
          return p.push(w);
      })) {
        g = !1;
        break;
      }
    } else if (!(b === E || s(b, E, e, r, i))) {
      g = !1;
      break;
    }
  }
  return i.delete(n), i.delete(t), g;
}
function kf(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r, s) {
    e[++t] = [s, r];
  }), e;
}
function Bf(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r) {
    e[++t] = r;
  }), e;
}
var Mf = 1, $f = 2, Df = "[object Boolean]", Pf = "[object Date]", jf = "[object Error]", Uf = "[object Map]", Ff = "[object Number]", Hf = "[object RegExp]", zf = "[object Set]", Gf = "[object String]", Kf = "[object Symbol]", Vf = "[object ArrayBuffer]", Wf = "[object DataView]", ml = te ? te.prototype : void 0, $s = ml ? ml.valueOf : void 0;
function Zf(n, t, e, r, s, i, o) {
  switch (e) {
    case Wf:
      if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
        return !1;
      n = n.buffer, t = t.buffer;
    case Vf:
      return !(n.byteLength != t.byteLength || !i(new wr(n), new wr(t)));
    case Df:
    case Pf:
    case Ff:
      return Cn(+n, +t);
    case jf:
      return n.name == t.name && n.message == t.message;
    case Hf:
    case Gf:
      return n == t + "";
    case Uf:
      var a = kf;
    case zf:
      var c = r & Mf;
      if (a || (a = Bf), n.size != t.size && !c)
        return !1;
      var h = o.get(n);
      if (h)
        return h == t;
      r |= $f, o.set(n, t);
      var d = No(a(n), a(t), r, s, i, o);
      return o.delete(n), d;
    case Kf:
      if ($s)
        return $s.call(n) == $s.call(t);
  }
  return !1;
}
var Xf = 1, Yf = Object.prototype, Jf = Yf.hasOwnProperty;
function Qf(n, t, e, r, s, i) {
  var o = e & Xf, a = Xs(n), c = a.length, h = Xs(t), d = h.length;
  if (c != d && !o)
    return !1;
  for (var m = c; m--; ) {
    var g = a[m];
    if (!(o ? g in t : Jf.call(t, g)))
      return !1;
  }
  var p = i.get(n), b = i.get(t);
  if (p && b)
    return p == t && b == n;
  var E = !0;
  i.set(n, t), i.set(t, n);
  for (var v = o; ++m < c; ) {
    g = a[m];
    var y = n[g], w = t[g];
    if (r)
      var T = o ? r(w, y, g, t, n, i) : r(y, w, g, n, t, i);
    if (!(T === void 0 ? y === w || s(y, w, e, r, i) : T)) {
      E = !1;
      break;
    }
    v || (v = g == "constructor");
  }
  if (E && !v) {
    var _ = n.constructor, L = t.constructor;
    _ != L && "constructor" in n && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof L == "function" && L instanceof L) && (E = !1);
  }
  return i.delete(n), i.delete(t), E;
}
var td = 1, bl = "[object Arguments]", yl = "[object Array]", dr = "[object Object]", ed = Object.prototype, vl = ed.hasOwnProperty;
function nd(n, t, e, r, s, i) {
  var o = ge(n), a = ge(t), c = o ? yl : xn(n), h = a ? yl : xn(t);
  c = c == bl ? dr : c, h = h == bl ? dr : h;
  var d = c == dr, m = h == dr, g = c == h;
  if (g && Nn(n)) {
    if (!Nn(t))
      return !1;
    o = !0, d = !1;
  }
  if (g && !d)
    return i || (i = new Ot()), o || Ti(n) ? No(n, t, e, r, s, i) : Zf(n, t, c, e, r, s, i);
  if (!(e & td)) {
    var p = d && vl.call(n, "__wrapped__"), b = m && vl.call(t, "__wrapped__");
    if (p || b) {
      var E = p ? n.value() : n, v = b ? t.value() : t;
      return i || (i = new Ot()), s(E, v, e, r, i);
    }
  }
  return g ? (i || (i = new Ot()), Qf(n, t, e, r, s, i)) : !1;
}
function wo(n, t, e, r, s) {
  return n === t ? !0 : n == null || t == null || !Ut(n) && !Ut(t) ? n !== n && t !== t : nd(n, t, e, r, wo, s);
}
function rd(n) {
  return function(t, e, r) {
    for (var s = -1, i = Object(t), o = r(t), a = o.length; a--; ) {
      var c = o[n ? a : ++s];
      if (e(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var sd = rd();
const id = sd;
function ti(n, t, e) {
  (e !== void 0 && !Cn(n[t], e) || e === void 0 && !(t in n)) && Ai(n, t, e);
}
function ld(n) {
  return Ut(n) && _r(n);
}
function ei(n, t) {
  if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
    return n[t];
}
function od(n) {
  return In(n, Rn(n));
}
function ad(n, t, e, r, s, i, o) {
  var a = ei(n, e), c = ei(t, e), h = o.get(c);
  if (h) {
    ti(n, e, h);
    return;
  }
  var d = i ? i(a, c, e + "", n, t, o) : void 0, m = d === void 0;
  if (m) {
    var g = ge(c), p = !g && Nn(c), b = !g && !p && Ti(c);
    d = c, g || p || b ? ge(a) ? d = a : ld(a) ? d = to(a) : p ? (m = !1, d = fo(c, !0)) : b ? (m = !1, d = bo(c, !0)) : d = [] : Fu(c) || Zs(c) ? (d = a, Zs(a) ? d = od(a) : (!ee(a) || Ei(a)) && (d = yo(c))) : m = !1;
  }
  m && (o.set(c, d), s(d, c, r, i, o), o.delete(c)), ti(n, e, d);
}
function To(n, t, e, r, s) {
  n !== t && id(t, function(i, o) {
    if (s || (s = new Ot()), ee(i))
      ad(n, t, o, e, To, r, s);
    else {
      var a = r ? r(ei(n, o), i, o + "", n, t, s) : void 0;
      a === void 0 && (a = i), ti(n, o, a);
    }
  }, Rn);
}
function Oi(n, t) {
  return wo(n, t);
}
var cd = gc(function(n, t, e) {
  To(n, t, e);
});
const Qt = cd;
var q = /* @__PURE__ */ ((n) => (n[n.TYPE = 3] = "TYPE", n[n.LEVEL = 12] = "LEVEL", n[n.ATTRIBUTE = 13] = "ATTRIBUTE", n[n.BLOT = 14] = "BLOT", n[n.INLINE = 7] = "INLINE", n[n.BLOCK = 11] = "BLOCK", n[n.BLOCK_BLOT = 10] = "BLOCK_BLOT", n[n.INLINE_BLOT = 6] = "INLINE_BLOT", n[n.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", n[n.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", n[n.ANY = 15] = "ANY", n))(q || {});
class Ct {
  constructor(t, e, r = {}) {
    this.attrName = t, this.keyName = e;
    const s = q.TYPE & q.ATTRIBUTE;
    this.scope = r.scope != null ? (
      // Ignore type bits, force attribute bit
      r.scope & q.LEVEL | s
    ) : q.ATTRIBUTE, r.whitelist != null && (this.whitelist = r.whitelist);
  }
  static keys(t) {
    return Array.from(t.attributes).map((e) => e.name);
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.setAttribute(this.keyName, e), !0) : !1;
  }
  canAdd(t, e) {
    return this.whitelist == null ? !0 : typeof e == "string" ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1;
  }
  remove(t) {
    t.removeAttribute(this.keyName);
  }
  value(t) {
    const e = t.getAttribute(this.keyName);
    return this.canAdd(t, e) && e ? e : "";
  }
}
class Ue extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const xo = class ni {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(t, e = !1) {
    if (t == null)
      return null;
    if (this.blots.has(t))
      return this.blots.get(t) || null;
    if (e) {
      let r = null;
      try {
        r = t.parentNode;
      } catch (s) {
        return null;
      }
      return this.find(r, e);
    }
    return null;
  }
  create(t, e, r) {
    const s = this.query(e);
    if (s == null)
      throw new Ue(`Unable to create ${e} blot`);
    const i = s, o = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(r)
    ), a = new i(t, o, r);
    return ni.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return ni.find(t, e);
  }
  query(t, e = q.ANY) {
    let r;
    return typeof t == "string" ? r = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? r = this.types.text : typeof t == "number" ? t & q.LEVEL & q.BLOCK ? r = this.types.block : t & q.LEVEL & q.INLINE && (r = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((s) => (r = this.classes[s], !!r)), r = r || this.tags[t.tagName]), r == null ? null : "scope" in r && e & q.LEVEL & r.scope && e & q.TYPE & r.scope ? r : null;
  }
  register(...t) {
    return t.map((e) => {
      const r = "blotName" in e, s = "attrName" in e;
      if (!r && !s)
        throw new Ue("Invalid definition");
      if (r && e.blotName === "abstract")
        throw new Ue("Cannot register abstract class");
      const i = r ? e.blotName : s ? e.attrName : void 0;
      return this.types[i] = e, s ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : r && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((o) => o.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((o) => {
        (this.tags[o] == null || e.className == null) && (this.tags[o] = e);
      }))), e;
    });
  }
};
xo.blots = /* @__PURE__ */ new WeakMap();
let ze = xo;
function El(n, t) {
  return (n.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
class ud extends Ct {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0) : !1;
  }
  remove(t) {
    El(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (El(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
const Nt = ud;
function Ds(n) {
  const t = n.split("-"), e = t.slice(1).map((r) => r[0].toUpperCase() + r.slice(1)).join("");
  return t[0] + e;
}
class hd extends Ct {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[Ds(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[Ds(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[Ds(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
const ne = hd;
class fd {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = ze.find(this.domNode);
    if (t == null)
      return;
    const e = Ct.keys(this.domNode), r = Nt.keys(this.domNode), s = ne.keys(this.domNode);
    e.concat(r).concat(s).forEach((i) => {
      const o = t.scroll.query(i, q.ATTRIBUTE);
      o instanceof Ct && (this.attributes[o.attrName] = o);
    });
  }
  copy(t) {
    Object.keys(this.attributes).forEach((e) => {
      const r = this.attributes[e].value(this.domNode);
      t.format(e, r);
    });
  }
  move(t) {
    this.copy(t), Object.keys(this.attributes).forEach((e) => {
      this.attributes[e].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (t, e) => (t[e] = this.attributes[e].value(this.domNode), t),
      {}
    );
  }
}
const Cr = fd, Lo = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, ze.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new Ue("Blot definition missing tagName");
    let e, r;
    return Array.isArray(this.tagName) ? (typeof t == "string" ? (r = t.toUpperCase(), parseInt(r, 10).toString() === r && (r = parseInt(r, 10))) : typeof t == "number" && (r = t), typeof r == "number" ? e = document.createElement(this.tagName[r - 1]) : r && this.tagName.indexOf(r) > -1 ? e = document.createElement(r) : e = document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const t = this.domNode.cloneNode(!1);
    return this.scroll.create(t);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), ze.blots.delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, r, s) {
    const i = this.isolate(t, e);
    if (this.scroll.query(r, q.BLOT) != null && s)
      i.wrap(r, s);
    else if (this.scroll.query(r, q.ATTRIBUTE) != null) {
      const o = this.scroll.create(this.statics.scope);
      i.wrap(o), o.format(r, s);
    }
  }
  insertAt(t, e, r) {
    const s = r == null ? this.scroll.create("text", e) : this.scroll.create(e, r), i = this.split(t);
    this.parent.insertBefore(s, i || void 0);
  }
  isolate(t, e) {
    const r = this.split(t);
    if (r == null)
      throw new Error("Attempt to isolate at end");
    return r.split(e), r;
  }
  length() {
    return 1;
  }
  offset(t = this.parent) {
    return this.parent == null || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
  }
  optimize(t) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    return this.parent != null && (this.parent.insertBefore(r, this.next || void 0), this.remove()), r;
  }
  split(t, e) {
    return t === 0 ? this : this.next;
  }
  update(t, e) {
  }
  wrap(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    if (this.parent != null && this.parent.insertBefore(r, this.next || void 0), typeof r.appendChild != "function")
      throw new Ue(`Cannot wrap ${t}`);
    return r.appendChild(this), r;
  }
};
Lo.blotName = "abstract";
let So = Lo;
const _o = class extends So {
  /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */
  static value(t) {
    return !0;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(t, e) {
    return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(t, e) {
    let r = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t > 0 && (r += 1), [this.parent.domNode, r];
  }
  /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
_o.scope = q.INLINE_BLOT;
let dd = _o;
const Q = dd;
class gd {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...t) {
    if (this.insertBefore(t[0], null), t.length > 1) {
      const e = t.slice(1);
      this.append(...e);
    }
  }
  at(t) {
    const e = this.iterator();
    let r = e();
    for (; r && t > 0; )
      t -= 1, r = e();
    return r;
  }
  contains(t) {
    const e = this.iterator();
    let r = e();
    for (; r; ) {
      if (r === t)
        return !0;
      r = e();
    }
    return !1;
  }
  indexOf(t) {
    const e = this.iterator();
    let r = e(), s = 0;
    for (; r; ) {
      if (r === t)
        return s;
      s += 1, r = e();
    }
    return -1;
  }
  insertBefore(t, e) {
    t != null && (this.remove(t), t.next = e, e != null ? (t.prev = e.prev, e.prev != null && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : this.tail != null ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
  }
  offset(t) {
    let e = 0, r = this.head;
    for (; r != null; ) {
      if (r === t)
        return e;
      e += r.length(), r = r.next;
    }
    return -1;
  }
  remove(t) {
    this.contains(t) && (t.prev != null && (t.prev.next = t.next), t.next != null && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
  }
  iterator(t = this.head) {
    return () => {
      const e = t;
      return t != null && (t = t.next), e;
    };
  }
  find(t, e = !1) {
    const r = this.iterator();
    let s = r();
    for (; s; ) {
      const i = s.length();
      if (t < i || e && t === i && (s.next == null || s.next.length() !== 0))
        return [s, t];
      t -= i, s = r();
    }
    return [null, 0];
  }
  forEach(t) {
    const e = this.iterator();
    let r = e();
    for (; r; )
      t(r), r = e();
  }
  forEachAt(t, e, r) {
    if (e <= 0)
      return;
    const [s, i] = this.find(t);
    let o = t - i;
    const a = this.iterator(s);
    let c = a();
    for (; c && o < t + e; ) {
      const h = c.length();
      t > o ? r(
        c,
        t - o,
        Math.min(e, o + h - t)
      ) : r(c, 0, Math.min(h, t + e - o)), o += h, c = a();
    }
  }
  map(t) {
    return this.reduce((e, r) => (e.push(t(r)), e), []);
  }
  reduce(t, e) {
    const r = this.iterator();
    let s = r();
    for (; s; )
      e = t(e, s), s = r();
    return e;
  }
}
function Al(n, t) {
  const e = t.find(n);
  if (e)
    return e;
  try {
    return t.create(n);
  } catch (r) {
    const s = t.create(q.INLINE);
    return Array.from(n.childNodes).forEach((i) => {
      s.domNode.appendChild(i);
    }), n.parentNode && n.parentNode.replaceChild(s.domNode, n), s.attach(), s;
  }
}
const Oo = class Zt extends So {
  constructor(t, e) {
    super(t, e), this.uiNode = null, this.build();
  }
  appendChild(t) {
    this.insertBefore(t);
  }
  attach() {
    super.attach(), this.children.forEach((t) => {
      t.attach();
    });
  }
  attachUI(t) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, Zt.uiClass && this.uiNode.classList.add(Zt.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new gd(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = Al(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof Ue)
          return;
        throw e;
      }
    });
  }
  deleteAt(t, e) {
    if (t === 0 && e === this.length())
      return this.remove();
    this.children.forEachAt(t, e, (r, s, i) => {
      r.deleteAt(s, i);
    });
  }
  descendant(t, e = 0) {
    const [r, s] = this.children.find(e);
    return t.blotName == null && t(r) || t.blotName != null && r instanceof t ? [r, s] : r instanceof Zt ? r.descendant(t, s) : [null, -1];
  }
  descendants(t, e = 0, r = Number.MAX_VALUE) {
    let s = [], i = r;
    return this.children.forEachAt(
      e,
      r,
      (o, a, c) => {
        (t.blotName == null && t(o) || t.blotName != null && o instanceof t) && s.push(o), o instanceof Zt && (s = s.concat(
          o.descendants(t, a, i)
        )), i -= c;
      }
    ), s;
  }
  detach() {
    this.children.forEach((t) => {
      t.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let t = !1;
    this.children.forEach((e) => {
      t || this.statics.allowedChildren.some(
        (r) => e instanceof r
      ) || (e.statics.scope === q.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof Zt ? e.unwrap() : e.remove());
    });
  }
  formatAt(t, e, r, s) {
    this.children.forEachAt(t, e, (i, o, a) => {
      i.formatAt(o, a, r, s);
    });
  }
  insertAt(t, e, r) {
    const [s, i] = this.children.find(t);
    if (s)
      s.insertAt(i, e, r);
    else {
      const o = r == null ? this.scroll.create("text", e) : this.scroll.create(e, r);
      this.appendChild(o);
    }
  }
  insertBefore(t, e) {
    t.parent != null && t.parent.children.remove(t);
    let r = null;
    this.children.insertBefore(t, e || null), t.parent = this, e != null && (r = e.domNode), (this.domNode.parentNode !== t.domNode || this.domNode.nextSibling !== r) && this.domNode.insertBefore(t.domNode, r), t.attach();
  }
  length() {
    return this.children.reduce((t, e) => t + e.length(), 0);
  }
  moveChildren(t, e) {
    this.children.forEach((r) => {
      t.insertBefore(r, e);
    });
  }
  optimize(t) {
    if (super.optimize(t), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const e = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(e);
      } else
        this.remove();
  }
  path(t, e = !1) {
    const [r, s] = this.children.find(t, e), i = [[this, t]];
    return r instanceof Zt ? i.concat(r.path(s, e)) : (r != null && i.push([r, s]), i);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    return r instanceof Zt && this.moveChildren(r), super.replaceWith(r);
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const r = this.clone();
    return this.parent && this.parent.insertBefore(r, this.next || void 0), this.children.forEachAt(t, this.length(), (s, i, o) => {
      const a = s.split(i, e);
      a != null && r.appendChild(a);
    }), r;
  }
  splitAfter(t) {
    const e = this.clone();
    for (; t.next != null; )
      e.appendChild(t.next);
    return this.parent && this.parent.insertBefore(e, this.next || void 0), e;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(t, e) {
    const r = [], s = [];
    t.forEach((i) => {
      i.target === this.domNode && i.type === "childList" && (r.push(...i.addedNodes), s.push(...i.removedNodes));
    }), s.forEach((i) => {
      if (i.parentNode != null && // @ts-expect-error Fix me later
      i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const o = this.scroll.find(i);
      o != null && (o.domNode.parentNode == null || o.domNode.parentNode === this.domNode) && o.detach();
    }), r.filter((i) => i.parentNode === this.domNode && i !== this.uiNode).sort((i, o) => i === o ? 0 : i.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i) => {
      let o = null;
      i.nextSibling != null && (o = this.scroll.find(i.nextSibling));
      const a = Al(i, this.scroll);
      (a.next !== o || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, o || void 0));
    }), this.enforceAllowedChildren();
  }
};
Oo.uiClass = "";
let pd = Oo;
const Et = pd;
function md(n, t) {
  if (Object.keys(n).length !== Object.keys(t).length)
    return !1;
  for (const e in n)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
const ke = class Be extends Et {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query(Be.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Cr(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((r) => {
        r instanceof Be || (r = r.wrap(Be.blotName, !0)), this.attributes.copy(r);
      }), this.unwrap();
    else {
      const r = this.scroll.query(t, q.INLINE);
      if (r == null)
        return;
      r instanceof Ct ? this.attributes.attribute(r, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, r, s) {
    this.formats()[r] != null || this.scroll.query(r, q.ATTRIBUTE) ? this.isolate(t, e).format(r, s) : super.formatAt(t, e, r, s);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const r = this.next;
    r instanceof Be && r.prev === this && md(e, r.formats()) && (r.moveChildren(this), r.remove());
  }
  replaceWith(t, e) {
    const r = super.replaceWith(t, e);
    return this.attributes.copy(r), r;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(t, e) {
    const r = super.wrap(t, e);
    return r instanceof Be && this.attributes.move(r), r;
  }
};
ke.allowedChildren = [ke, Q], ke.blotName = "inline", ke.scope = q.INLINE_BLOT, ke.tagName = "SPAN";
let bd = ke;
const qi = bd, Me = class ri extends Et {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query(ri.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Cr(this.domNode);
  }
  format(t, e) {
    const r = this.scroll.query(t, q.BLOCK);
    r != null && (r instanceof Ct ? this.attributes.attribute(r, e) : t === this.statics.blotName && !e ? this.replaceWith(ri.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, r, s) {
    this.scroll.query(r, q.BLOCK) != null ? this.format(r, s) : super.formatAt(t, e, r, s);
  }
  insertAt(t, e, r) {
    if (r == null || this.scroll.query(e, q.INLINE) != null)
      super.insertAt(t, e, r);
    else {
      const s = this.split(t);
      if (s != null) {
        const i = this.scroll.create(e, r);
        s.parent.insertBefore(i, s);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t, e) {
    const r = super.replaceWith(t, e);
    return this.attributes.copy(r), r;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
};
Me.blotName = "block", Me.scope = q.BLOCK_BLOT, Me.tagName = "P", Me.allowedChildren = [
  qi,
  Me,
  Q
];
let yd = Me;
const Ln = yd, si = class extends Et {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e), this.enforceAllowedChildren();
  }
  formatAt(t, e, r, s) {
    super.formatAt(t, e, r, s), this.enforceAllowedChildren();
  }
  insertAt(t, e, r) {
    super.insertAt(t, e, r), this.enforceAllowedChildren();
  }
  optimize(t) {
    super.optimize(t), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
si.blotName = "container", si.scope = q.BLOCK_BLOT;
let vd = si;
const Ir = vd;
class Ed extends Q {
  static formats(t, e) {
  }
  format(t, e) {
    super.formatAt(0, this.length(), t, e);
  }
  formatAt(t, e, r, s) {
    t === 0 && e === this.length() ? this.format(r, s) : super.formatAt(t, e, r, s);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
}
const lt = Ed, Ad = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, Nd = 100, $e = class extends Et {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((r) => {
      this.update(r);
    }), this.observer.observe(this.domNode, Ad), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const r = this.registry.find(t, e);
    return r ? r.scroll === this ? r : e ? this.find(r.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = q.ANY) {
    return this.registry.query(t, e);
  }
  register(...t) {
    return this.registry.register(...t);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(t, e) {
    this.update(), t === 0 && e === this.length() ? this.children.forEach((r) => {
      r.remove();
    }) : super.deleteAt(t, e);
  }
  formatAt(t, e, r, s) {
    this.update(), super.formatAt(t, e, r, s);
  }
  insertAt(t, e, r) {
    this.update(), super.insertAt(t, e, r);
  }
  optimize(t = [], e = {}) {
    super.optimize(e);
    const r = e.mutationsMap || /* @__PURE__ */ new WeakMap();
    let s = Array.from(this.observer.takeRecords());
    for (; s.length > 0; )
      t.push(s.pop());
    const i = (c, h = !0) => {
      c == null || c === this || c.domNode.parentNode != null && (r.has(c.domNode) || r.set(c.domNode, []), h && i(c.parent));
    }, o = (c) => {
      r.has(c.domNode) && (c instanceof Et && c.children.forEach(o), r.delete(c.domNode), c.optimize(e));
    };
    let a = t;
    for (let c = 0; a.length > 0; c += 1) {
      if (c >= Nd)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((h) => {
        const d = this.find(h.target, !0);
        d != null && (d.domNode === h.target && (h.type === "childList" ? (i(this.find(h.previousSibling, !1)), Array.from(h.addedNodes).forEach((m) => {
          const g = this.find(m, !1);
          i(g, !1), g instanceof Et && g.children.forEach((p) => {
            i(p, !1);
          });
        })) : h.type === "attributes" && i(d.prev)), i(d));
      }), this.children.forEach(o), a = Array.from(this.observer.takeRecords()), s = a.slice(); s.length > 0; )
        t.push(s.pop());
    }
  }
  update(t, e = {}) {
    t = t || this.observer.takeRecords();
    const r = /* @__PURE__ */ new WeakMap();
    t.map((s) => {
      const i = this.find(s.target, !0);
      return i == null ? null : r.has(i.domNode) ? (r.get(i.domNode).push(s), null) : (r.set(i.domNode, [s]), i);
    }).forEach((s) => {
      s != null && s !== this && r.has(s.domNode) && s.update(r.get(s.domNode) || [], e);
    }), e.mutationsMap = r, r.has(this.domNode) && super.update(r.get(this.domNode), e), this.optimize(t, e);
  }
};
$e.blotName = "scroll", $e.defaultChild = Ln, $e.allowedChildren = [Ln, Ir], $e.scope = q.BLOCK_BLOT, $e.tagName = "DIV";
let wd = $e;
const Ci = wd, ii = class qo extends Q {
  static create(t) {
    return document.createTextNode(t);
  }
  static value(t) {
    return t.data;
  }
  constructor(t, e) {
    super(t, e), this.text = this.statics.value(this.domNode);
  }
  deleteAt(t, e) {
    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
  }
  index(t, e) {
    return this.domNode === t ? e : -1;
  }
  insertAt(t, e, r) {
    r == null ? (this.text = this.text.slice(0, t) + e + this.text.slice(t), this.domNode.data = this.text) : super.insertAt(t, e, r);
  }
  length() {
    return this.text.length;
  }
  optimize(t) {
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof qo && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t, e = !1) {
    return [this.domNode, t];
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const r = this.scroll.create(this.domNode.splitText(t));
    return this.parent.insertBefore(r, this.next || void 0), this.text = this.statics.value(this.domNode), r;
  }
  update(t, e) {
    t.some((r) => r.type === "characterData" && r.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
ii.blotName = "text", ii.scope = q.INLINE_BLOT;
let Td = ii;
const xr = Td, xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: Ct,
  AttributorStore: Cr,
  BlockBlot: Ln,
  ClassAttributor: Nt,
  ContainerBlot: Ir,
  EmbedBlot: lt,
  InlineBlot: qi,
  LeafBlot: Q,
  ParentBlot: Et,
  Registry: ze,
  Scope: q,
  ScrollBlot: Ci,
  StyleAttributor: ne,
  TextBlot: xr
}, Symbol.toStringTag, { value: "Module" }));
var li = { exports: {} }, it = -1, nt = 1, K = 0;
function Sn(n, t, e, r, s) {
  if (n === t)
    return n ? [[K, n]] : [];
  if (e != null) {
    var i = kd(n, t, e);
    if (i)
      return i;
  }
  var o = Ii(n, t), a = n.substring(0, o);
  n = n.substring(o), t = t.substring(o), o = Rr(n, t);
  var c = n.substring(n.length - o);
  n = n.substring(0, n.length - o), t = t.substring(0, t.length - o);
  var h = Ld(n, t);
  return a && h.unshift([K, a]), c && h.push([K, c]), Ri(h, s), r && Od(h), h;
}
function Ld(n, t) {
  var e;
  if (!n)
    return [[nt, t]];
  if (!t)
    return [[it, n]];
  var r = n.length > t.length ? n : t, s = n.length > t.length ? t : n, i = r.indexOf(s);
  if (i !== -1)
    return e = [
      [nt, r.substring(0, i)],
      [K, s],
      [nt, r.substring(i + s.length)]
    ], n.length > t.length && (e[0][0] = e[2][0] = it), e;
  if (s.length === 1)
    return [
      [it, n],
      [nt, t]
    ];
  var o = _d(n, t);
  if (o) {
    var a = o[0], c = o[1], h = o[2], d = o[3], m = o[4], g = Sn(a, h), p = Sn(c, d);
    return g.concat([[K, m]], p);
  }
  return Sd(n, t);
}
function Sd(n, t) {
  for (var e = n.length, r = t.length, s = Math.ceil((e + r) / 2), i = s, o = 2 * s, a = new Array(o), c = new Array(o), h = 0; h < o; h++)
    a[h] = -1, c[h] = -1;
  a[i + 1] = 0, c[i + 1] = 0;
  for (var d = e - r, m = d % 2 !== 0, g = 0, p = 0, b = 0, E = 0, v = 0; v < s; v++) {
    for (var y = -v + g; y <= v - p; y += 2) {
      var w = i + y, T;
      y === -v || y !== v && a[w - 1] < a[w + 1] ? T = a[w + 1] : T = a[w - 1] + 1;
      for (var _ = T - y; T < e && _ < r && n.charAt(T) === t.charAt(_); )
        T++, _++;
      if (a[w] = T, T > e)
        p += 2;
      else if (_ > r)
        g += 2;
      else if (m) {
        var L = i + d - y;
        if (L >= 0 && L < o && c[L] !== -1) {
          var I = e - c[L];
          if (T >= I)
            return Nl(n, t, T, _);
        }
      }
    }
    for (var B = -v + b; B <= v - E; B += 2) {
      var L = i + B, I;
      B === -v || B !== v && c[L - 1] < c[L + 1] ? I = c[L + 1] : I = c[L - 1] + 1;
      for (var U = I - B; I < e && U < r && n.charAt(e - I - 1) === t.charAt(r - U - 1); )
        I++, U++;
      if (c[L] = I, I > e)
        E += 2;
      else if (U > r)
        b += 2;
      else if (!m) {
        var w = i + d - B;
        if (w >= 0 && w < o && a[w] !== -1) {
          var T = a[w], _ = i + T - w;
          if (I = e - I, T >= I)
            return Nl(n, t, T, _);
        }
      }
    }
  }
  return [
    [it, n],
    [nt, t]
  ];
}
function Nl(n, t, e, r) {
  var s = n.substring(0, e), i = t.substring(0, r), o = n.substring(e), a = t.substring(r), c = Sn(s, i), h = Sn(o, a);
  return c.concat(h);
}
function Ii(n, t) {
  if (!n || !t || n.charAt(0) !== t.charAt(0))
    return 0;
  for (var e = 0, r = Math.min(n.length, t.length), s = r, i = 0; e < s; )
    n.substring(i, s) == t.substring(i, s) ? (e = s, i = e) : r = s, s = Math.floor((r - e) / 2 + e);
  return Co(n.charCodeAt(s - 1)) && s--, s;
}
function wl(n, t) {
  var e = n.length, r = t.length;
  if (e == 0 || r == 0)
    return 0;
  e > r ? n = n.substring(e - r) : e < r && (t = t.substring(0, e));
  var s = Math.min(e, r);
  if (n == t)
    return s;
  for (var i = 0, o = 1; ; ) {
    var a = n.substring(s - o), c = t.indexOf(a);
    if (c == -1)
      return i;
    o += c, (c == 0 || n.substring(s - o) == t.substring(0, o)) && (i = o, o++);
  }
}
function Rr(n, t) {
  if (!n || !t || n.slice(-1) !== t.slice(-1))
    return 0;
  for (var e = 0, r = Math.min(n.length, t.length), s = r, i = 0; e < s; )
    n.substring(n.length - s, n.length - i) == t.substring(t.length - s, t.length - i) ? (e = s, i = e) : r = s, s = Math.floor((r - e) / 2 + e);
  return Io(n.charCodeAt(n.length - s)) && s--, s;
}
function _d(n, t) {
  var e = n.length > t.length ? n : t, r = n.length > t.length ? t : n;
  if (e.length < 4 || r.length * 2 < e.length)
    return null;
  function s(p, b, E) {
    for (var v = p.substring(E, E + Math.floor(p.length / 4)), y = -1, w = "", T, _, L, I; (y = b.indexOf(v, y + 1)) !== -1; ) {
      var B = Ii(
        p.substring(E),
        b.substring(y)
      ), U = Rr(
        p.substring(0, E),
        b.substring(0, y)
      );
      w.length < U + B && (w = b.substring(y - U, y) + b.substring(y, y + B), T = p.substring(0, E - U), _ = p.substring(E + B), L = b.substring(0, y - U), I = b.substring(y + B));
    }
    return w.length * 2 >= p.length ? [
      T,
      _,
      L,
      I,
      w
    ] : null;
  }
  var i = s(
    e,
    r,
    Math.ceil(e.length / 4)
  ), o = s(
    e,
    r,
    Math.ceil(e.length / 2)
  ), a;
  if (!i && !o)
    return null;
  o ? i ? a = i[4].length > o[4].length ? i : o : a = o : a = i;
  var c, h, d, m;
  n.length > t.length ? (c = a[0], h = a[1], d = a[2], m = a[3]) : (d = a[0], m = a[1], c = a[2], h = a[3]);
  var g = a[4];
  return [c, h, d, m, g];
}
function Od(n) {
  for (var t = !1, e = [], r = 0, s = null, i = 0, o = 0, a = 0, c = 0, h = 0; i < n.length; )
    n[i][0] == K ? (e[r++] = i, o = c, a = h, c = 0, h = 0, s = n[i][1]) : (n[i][0] == nt ? c += n[i][1].length : h += n[i][1].length, s && s.length <= Math.max(o, a) && s.length <= Math.max(c, h) && (n.splice(e[r - 1], 0, [
      it,
      s
    ]), n[e[r - 1] + 1][0] = nt, r--, r--, i = r > 0 ? e[r - 1] : -1, o = 0, a = 0, c = 0, h = 0, s = null, t = !0)), i++;
  for (t && Ri(n), Id(n), i = 1; i < n.length; ) {
    if (n[i - 1][0] == it && n[i][0] == nt) {
      var d = n[i - 1][1], m = n[i][1], g = wl(d, m), p = wl(m, d);
      g >= p ? (g >= d.length / 2 || g >= m.length / 2) && (n.splice(i, 0, [
        K,
        m.substring(0, g)
      ]), n[i - 1][1] = d.substring(
        0,
        d.length - g
      ), n[i + 1][1] = m.substring(g), i++) : (p >= d.length / 2 || p >= m.length / 2) && (n.splice(i, 0, [
        K,
        d.substring(0, p)
      ]), n[i - 1][0] = nt, n[i - 1][1] = m.substring(
        0,
        m.length - p
      ), n[i + 1][0] = it, n[i + 1][1] = d.substring(p), i++), i++;
    }
    i++;
  }
}
var Tl = /[^a-zA-Z0-9]/, xl = /\s/, Ll = /[\r\n]/, qd = /\n\r?\n$/, Cd = /^\r?\n\r?\n/;
function Id(n) {
  function t(p, b) {
    if (!p || !b)
      return 6;
    var E = p.charAt(p.length - 1), v = b.charAt(0), y = E.match(Tl), w = v.match(Tl), T = y && E.match(xl), _ = w && v.match(xl), L = T && E.match(Ll), I = _ && v.match(Ll), B = L && p.match(qd), U = I && b.match(Cd);
    return B || U ? 5 : L || I ? 4 : y && !T && _ ? 3 : T || _ ? 2 : y || w ? 1 : 0;
  }
  for (var e = 1; e < n.length - 1; ) {
    if (n[e - 1][0] == K && n[e + 1][0] == K) {
      var r = n[e - 1][1], s = n[e][1], i = n[e + 1][1], o = Rr(r, s);
      if (o) {
        var a = s.substring(s.length - o);
        r = r.substring(0, r.length - o), s = a + s.substring(0, s.length - o), i = a + i;
      }
      for (var c = r, h = s, d = i, m = t(r, s) + t(s, i); s.charAt(0) === i.charAt(0); ) {
        r += s.charAt(0), s = s.substring(1) + i.charAt(0), i = i.substring(1);
        var g = t(r, s) + t(s, i);
        g >= m && (m = g, c = r, h = s, d = i);
      }
      n[e - 1][1] != c && (c ? n[e - 1][1] = c : (n.splice(e - 1, 1), e--), n[e][1] = h, d ? n[e + 1][1] = d : (n.splice(e + 1, 1), e--));
    }
    e++;
  }
}
function Ri(n, t) {
  n.push([K, ""]);
  for (var e = 0, r = 0, s = 0, i = "", o = "", a; e < n.length; ) {
    if (e < n.length - 1 && !n[e][1]) {
      n.splice(e, 1);
      continue;
    }
    switch (n[e][0]) {
      case nt:
        s++, o += n[e][1], e++;
        break;
      case it:
        r++, i += n[e][1], e++;
        break;
      case K:
        var c = e - s - r - 1;
        if (t) {
          if (c >= 0 && ko(n[c][1])) {
            var h = n[c][1].slice(-1);
            if (n[c][1] = n[c][1].slice(
              0,
              -1
            ), i = h + i, o = h + o, !n[c][1]) {
              n.splice(c, 1), e--;
              var d = c - 1;
              n[d] && n[d][0] === nt && (s++, o = n[d][1] + o, d--), n[d] && n[d][0] === it && (r++, i = n[d][1] + i, d--), c = d;
            }
          }
          if (Ro(n[e][1])) {
            var h = n[e][1].charAt(0);
            n[e][1] = n[e][1].slice(1), i += h, o += h;
          }
        }
        if (e < n.length - 1 && !n[e][1]) {
          n.splice(e, 1);
          break;
        }
        if (i.length > 0 || o.length > 0) {
          i.length > 0 && o.length > 0 && (a = Ii(o, i), a !== 0 && (c >= 0 ? n[c][1] += o.substring(
            0,
            a
          ) : (n.splice(0, 0, [
            K,
            o.substring(0, a)
          ]), e++), o = o.substring(a), i = i.substring(a)), a = Rr(o, i), a !== 0 && (n[e][1] = o.substring(o.length - a) + n[e][1], o = o.substring(
            0,
            o.length - a
          ), i = i.substring(
            0,
            i.length - a
          )));
          var m = s + r;
          i.length === 0 && o.length === 0 ? (n.splice(e - m, m), e = e - m) : i.length === 0 ? (n.splice(e - m, m, [nt, o]), e = e - m + 1) : o.length === 0 ? (n.splice(e - m, m, [it, i]), e = e - m + 1) : (n.splice(
            e - m,
            m,
            [it, i],
            [nt, o]
          ), e = e - m + 2);
        }
        e !== 0 && n[e - 1][0] === K ? (n[e - 1][1] += n[e][1], n.splice(e, 1)) : e++, s = 0, r = 0, i = "", o = "";
        break;
    }
  }
  n[n.length - 1][1] === "" && n.pop();
  var g = !1;
  for (e = 1; e < n.length - 1; )
    n[e - 1][0] === K && n[e + 1][0] === K && (n[e][1].substring(
      n[e][1].length - n[e - 1][1].length
    ) === n[e - 1][1] ? (n[e][1] = n[e - 1][1] + n[e][1].substring(
      0,
      n[e][1].length - n[e - 1][1].length
    ), n[e + 1][1] = n[e - 1][1] + n[e + 1][1], n.splice(e - 1, 1), g = !0) : n[e][1].substring(0, n[e + 1][1].length) == n[e + 1][1] && (n[e - 1][1] += n[e + 1][1], n[e][1] = n[e][1].substring(n[e + 1][1].length) + n[e + 1][1], n.splice(e + 1, 1), g = !0)), e++;
  g && Ri(n, t);
}
function Co(n) {
  return n >= 55296 && n <= 56319;
}
function Io(n) {
  return n >= 56320 && n <= 57343;
}
function Ro(n) {
  return Io(n.charCodeAt(0));
}
function ko(n) {
  return Co(n.charCodeAt(n.length - 1));
}
function Rd(n) {
  for (var t = [], e = 0; e < n.length; e++)
    n[e][1].length > 0 && t.push(n[e]);
  return t;
}
function Ps(n, t, e, r) {
  return ko(n) || Ro(r) ? null : Rd([
    [K, n],
    [it, t],
    [nt, e],
    [K, r]
  ]);
}
function kd(n, t, e) {
  var r = typeof e == "number" ? { index: e, length: 0 } : e.oldRange, s = typeof e == "number" ? null : e.newRange, i = n.length, o = t.length;
  if (r.length === 0 && (s === null || s.length === 0)) {
    var a = r.index, c = n.slice(0, a), h = n.slice(a), d = s ? s.index : null;
    t: {
      var m = a + o - i;
      if (d !== null && d !== m || m < 0 || m > o)
        break t;
      var g = t.slice(0, m), p = t.slice(m);
      if (p !== h)
        break t;
      var b = Math.min(a, m), E = c.slice(0, b), v = g.slice(0, b);
      if (E !== v)
        break t;
      var y = c.slice(b), w = g.slice(b);
      return Ps(E, y, w, h);
    }
    t: {
      if (d !== null && d !== a)
        break t;
      var T = a, g = t.slice(0, T), p = t.slice(T);
      if (g !== c)
        break t;
      var _ = Math.min(i - T, o - T), L = h.slice(h.length - _), I = p.slice(p.length - _);
      if (L !== I)
        break t;
      var y = h.slice(0, h.length - _), w = p.slice(0, p.length - _);
      return Ps(c, y, w, L);
    }
  }
  if (r.length > 0 && s && s.length === 0)
    t: {
      var E = n.slice(0, r.index), L = n.slice(r.index + r.length), b = E.length, _ = L.length;
      if (o < b + _)
        break t;
      var v = t.slice(0, b), I = t.slice(o - _);
      if (E !== v || L !== I)
        break t;
      var y = n.slice(b, i - _), w = t.slice(b, o - _);
      return Ps(E, y, w, L);
    }
  return null;
}
function kr(n, t, e, r) {
  return Sn(n, t, e, r, !0);
}
kr.INSERT = nt;
kr.DELETE = it;
kr.EQUAL = K;
var Bd = kr, Lr = { exports: {} };
Lr.exports;
(function(n, t) {
  var e = 200, r = "__lodash_hash_undefined__", s = 9007199254740991, i = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", c = "[object Date]", h = "[object Error]", d = "[object Function]", m = "[object GeneratorFunction]", g = "[object Map]", p = "[object Number]", b = "[object Object]", E = "[object Promise]", v = "[object RegExp]", y = "[object Set]", w = "[object String]", T = "[object Symbol]", _ = "[object WeakMap]", L = "[object ArrayBuffer]", I = "[object DataView]", B = "[object Float32Array]", U = "[object Float64Array]", Bt = "[object Int8Array]", Kt = "[object Int16Array]", re = "[object Int32Array]", se = "[object Uint8Array]", Dn = "[object Uint8ClampedArray]", Pn = "[object Uint16Array]", jn = "[object Uint32Array]", Pr = /[\\^$.*+?()[\]{}|]/g, jr = /\w*$/, Ur = /^\[object .+?Constructor\]$/, Fr = /^(?:0|[1-9]\d*)$/, D = {};
  D[i] = D[o] = D[L] = D[I] = D[a] = D[c] = D[B] = D[U] = D[Bt] = D[Kt] = D[re] = D[g] = D[p] = D[b] = D[v] = D[y] = D[w] = D[T] = D[se] = D[Dn] = D[Pn] = D[jn] = !0, D[h] = D[d] = D[_] = !1;
  var Hr = typeof Xt == "object" && Xt && Xt.Object === Object && Xt, zr = typeof self == "object" && self && self.Object === Object && self, dt = Hr || zr || Function("return this")(), Un = t && !t.nodeType && t, P = Un && !0 && n && !n.nodeType && n, Fn = P && P.exports === Un;
  function Gr(l, u) {
    return l.set(u[0], u[1]), l;
  }
  function gt(l, u) {
    return l.add(u), l;
  }
  function Hn(l, u) {
    for (var f = -1, A = l ? l.length : 0; ++f < A && u(l[f], f, l) !== !1; )
      ;
    return l;
  }
  function zn(l, u) {
    for (var f = -1, A = u.length, R = l.length; ++f < A; )
      l[R + f] = u[f];
    return l;
  }
  function Ze(l, u, f, A) {
    var R = -1, C = l ? l.length : 0;
    for (A && C && (f = l[++R]); ++R < C; )
      f = u(f, l[R], R, l);
    return f;
  }
  function Xe(l, u) {
    for (var f = -1, A = Array(l); ++f < l; )
      A[f] = u(f);
    return A;
  }
  function Gn(l, u) {
    return l == null ? void 0 : l[u];
  }
  function Ye(l) {
    var u = !1;
    if (l != null && typeof l.toString != "function")
      try {
        u = !!(l + "");
      } catch (f) {
      }
    return u;
  }
  function Kn(l) {
    var u = -1, f = Array(l.size);
    return l.forEach(function(A, R) {
      f[++u] = [R, A];
    }), f;
  }
  function Je(l, u) {
    return function(f) {
      return l(u(f));
    };
  }
  function Vn(l) {
    var u = -1, f = Array(l.size);
    return l.forEach(function(A) {
      f[++u] = A;
    }), f;
  }
  var Kr = Array.prototype, Vr = Function.prototype, we = Object.prototype, Qe = dt["__core-js_shared__"], Wn = function() {
    var l = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), Zn = Vr.toString, Tt = we.hasOwnProperty, Te = we.toString, Wr = RegExp(
    "^" + Zn.call(Tt).replace(Pr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ie = Fn ? dt.Buffer : void 0, xe = dt.Symbol, tn = dt.Uint8Array, ot = Je(Object.getPrototypeOf, Object), Xn = Object.create, Yn = we.propertyIsEnumerable, Zr = Kr.splice, en = Object.getOwnPropertySymbols, Le = ie ? ie.isBuffer : void 0, Jn = Je(Object.keys, Object), Se = mt(dt, "DataView"), le = mt(dt, "Map"), pt = mt(dt, "Promise"), _e = mt(dt, "Set"), nn = mt(dt, "WeakMap"), oe = mt(Object, "create"), rn = et(Se), ae = et(le), sn = et(pt), ln = et(_e), on = et(nn), Vt = xe ? xe.prototype : void 0, Qn = Vt ? Vt.valueOf : void 0;
  function Mt(l) {
    var u = -1, f = l ? l.length : 0;
    for (this.clear(); ++u < f; ) {
      var A = l[u];
      this.set(A[0], A[1]);
    }
  }
  function Xr() {
    this.__data__ = oe ? oe(null) : {};
  }
  function Yr(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function Jr(l) {
    var u = this.__data__;
    if (oe) {
      var f = u[l];
      return f === r ? void 0 : f;
    }
    return Tt.call(u, l) ? u[l] : void 0;
  }
  function tr(l) {
    var u = this.__data__;
    return oe ? u[l] !== void 0 : Tt.call(u, l);
  }
  function an(l, u) {
    var f = this.__data__;
    return f[l] = oe && u === void 0 ? r : u, this;
  }
  Mt.prototype.clear = Xr, Mt.prototype.delete = Yr, Mt.prototype.get = Jr, Mt.prototype.has = tr, Mt.prototype.set = an;
  function V(l) {
    var u = -1, f = l ? l.length : 0;
    for (this.clear(); ++u < f; ) {
      var A = l[u];
      this.set(A[0], A[1]);
    }
  }
  function Qr() {
    this.__data__ = [];
  }
  function ts(l) {
    var u = this.__data__, f = qe(u, l);
    if (f < 0)
      return !1;
    var A = u.length - 1;
    return f == A ? u.pop() : Zr.call(u, f, 1), !0;
  }
  function es(l) {
    var u = this.__data__, f = qe(u, l);
    return f < 0 ? void 0 : u[f][1];
  }
  function ns(l) {
    return qe(this.__data__, l) > -1;
  }
  function rs(l, u) {
    var f = this.__data__, A = qe(f, l);
    return A < 0 ? f.push([l, u]) : f[A][1] = u, this;
  }
  V.prototype.clear = Qr, V.prototype.delete = ts, V.prototype.get = es, V.prototype.has = ns, V.prototype.set = rs;
  function X(l) {
    var u = -1, f = l ? l.length : 0;
    for (this.clear(); ++u < f; ) {
      var A = l[u];
      this.set(A[0], A[1]);
    }
  }
  function ss() {
    this.__data__ = {
      hash: new Mt(),
      map: new (le || V)(),
      string: new Mt()
    };
  }
  function is(l) {
    return ue(this, l).delete(l);
  }
  function ls(l) {
    return ue(this, l).get(l);
  }
  function os(l) {
    return ue(this, l).has(l);
  }
  function as(l, u) {
    return ue(this, l).set(l, u), this;
  }
  X.prototype.clear = ss, X.prototype.delete = is, X.prototype.get = ls, X.prototype.has = os, X.prototype.set = as;
  function rt(l) {
    this.__data__ = new V(l);
  }
  function cs() {
    this.__data__ = new V();
  }
  function us(l) {
    return this.__data__.delete(l);
  }
  function hs(l) {
    return this.__data__.get(l);
  }
  function fs(l) {
    return this.__data__.has(l);
  }
  function ds(l, u) {
    var f = this.__data__;
    if (f instanceof V) {
      var A = f.__data__;
      if (!le || A.length < e - 1)
        return A.push([l, u]), this;
      f = this.__data__ = new X(A);
    }
    return f.set(l, u), this;
  }
  rt.prototype.clear = cs, rt.prototype.delete = us, rt.prototype.get = hs, rt.prototype.has = fs, rt.prototype.set = ds;
  function Oe(l, u) {
    var f = fn(l) || Ie(l) ? Xe(l.length, String) : [], A = f.length, R = !!A;
    for (var C in l)
      (u || Tt.call(l, C)) && !(R && (C == "length" || Ss(C, A))) && f.push(C);
    return f;
  }
  function er(l, u, f) {
    var A = l[u];
    (!(Tt.call(l, u) && lr(A, f)) || f === void 0 && !(u in l)) && (l[u] = f);
  }
  function qe(l, u) {
    for (var f = l.length; f--; )
      if (lr(l[f][0], u))
        return f;
    return -1;
  }
  function xt(l, u) {
    return l && hn(u, gn(u), l);
  }
  function cn(l, u, f, A, R, C, k) {
    var M;
    if (A && (M = C ? A(l, R, C, k) : A(l)), M !== void 0)
      return M;
    if (!St(l))
      return l;
    var z = fn(l);
    if (z) {
      if (M = xs(l), !u)
        return Ns(l, M);
    } else {
      var $ = Dt(l), Y = $ == d || $ == m;
      if (or(l))
        return Ce(l, u);
      if ($ == b || $ == i || Y && !C) {
        if (Ye(l))
          return C ? l : {};
        if (M = Lt(Y ? {} : l), !u)
          return ws(l, xt(M, l));
      } else {
        if (!D[$])
          return C ? l : {};
        M = Ls(l, $, cn, u);
      }
    }
    k || (k = new rt());
    var st = k.get(l);
    if (st)
      return st;
    if (k.set(l, M), !z)
      var G = f ? Ts(l) : gn(l);
    return Hn(G || l, function(J, W) {
      G && (W = J, J = l[W]), er(M, W, cn(J, u, f, A, W, l, k));
    }), M;
  }
  function gs(l) {
    return St(l) ? Xn(l) : {};
  }
  function ps(l, u, f) {
    var A = u(l);
    return fn(l) ? A : zn(A, f(l));
  }
  function ms(l) {
    return Te.call(l);
  }
  function bs(l) {
    if (!St(l) || Os(l))
      return !1;
    var u = dn(l) || Ye(l) ? Wr : Ur;
    return u.test(et(l));
  }
  function ys(l) {
    if (!sr(l))
      return Jn(l);
    var u = [];
    for (var f in Object(l))
      Tt.call(l, f) && f != "constructor" && u.push(f);
    return u;
  }
  function Ce(l, u) {
    if (u)
      return l.slice();
    var f = new l.constructor(l.length);
    return l.copy(f), f;
  }
  function un(l) {
    var u = new l.constructor(l.byteLength);
    return new tn(u).set(new tn(l)), u;
  }
  function ce(l, u) {
    var f = u ? un(l.buffer) : l.buffer;
    return new l.constructor(f, l.byteOffset, l.byteLength);
  }
  function nr(l, u, f) {
    var A = u ? f(Kn(l), !0) : Kn(l);
    return Ze(A, Gr, new l.constructor());
  }
  function rr(l) {
    var u = new l.constructor(l.source, jr.exec(l));
    return u.lastIndex = l.lastIndex, u;
  }
  function vs(l, u, f) {
    var A = u ? f(Vn(l), !0) : Vn(l);
    return Ze(A, gt, new l.constructor());
  }
  function Es(l) {
    return Qn ? Object(Qn.call(l)) : {};
  }
  function As(l, u) {
    var f = u ? un(l.buffer) : l.buffer;
    return new l.constructor(f, l.byteOffset, l.length);
  }
  function Ns(l, u) {
    var f = -1, A = l.length;
    for (u || (u = Array(A)); ++f < A; )
      u[f] = l[f];
    return u;
  }
  function hn(l, u, f, A) {
    f || (f = {});
    for (var R = -1, C = u.length; ++R < C; ) {
      var k = u[R], M = A ? A(f[k], l[k], k, f, l) : void 0;
      er(f, k, M === void 0 ? l[k] : M);
    }
    return f;
  }
  function ws(l, u) {
    return hn(l, $t(l), u);
  }
  function Ts(l) {
    return ps(l, gn, $t);
  }
  function ue(l, u) {
    var f = l.__data__;
    return _s(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function mt(l, u) {
    var f = Gn(l, u);
    return bs(f) ? f : void 0;
  }
  var $t = en ? Je(en, Object) : Cs, Dt = ms;
  (Se && Dt(new Se(new ArrayBuffer(1))) != I || le && Dt(new le()) != g || pt && Dt(pt.resolve()) != E || _e && Dt(new _e()) != y || nn && Dt(new nn()) != _) && (Dt = function(l) {
    var u = Te.call(l), f = u == b ? l.constructor : void 0, A = f ? et(f) : void 0;
    if (A)
      switch (A) {
        case rn:
          return I;
        case ae:
          return g;
        case sn:
          return E;
        case ln:
          return y;
        case on:
          return _;
      }
    return u;
  });
  function xs(l) {
    var u = l.length, f = l.constructor(u);
    return u && typeof l[0] == "string" && Tt.call(l, "index") && (f.index = l.index, f.input = l.input), f;
  }
  function Lt(l) {
    return typeof l.constructor == "function" && !sr(l) ? gs(ot(l)) : {};
  }
  function Ls(l, u, f, A) {
    var R = l.constructor;
    switch (u) {
      case L:
        return un(l);
      case a:
      case c:
        return new R(+l);
      case I:
        return ce(l, A);
      case B:
      case U:
      case Bt:
      case Kt:
      case re:
      case se:
      case Dn:
      case Pn:
      case jn:
        return As(l, A);
      case g:
        return nr(l, A, f);
      case p:
      case w:
        return new R(l);
      case v:
        return rr(l);
      case y:
        return vs(l, A, f);
      case T:
        return Es(l);
    }
  }
  function Ss(l, u) {
    return u = u == null ? s : u, !!u && (typeof l == "number" || Fr.test(l)) && l > -1 && l % 1 == 0 && l < u;
  }
  function _s(l) {
    var u = typeof l;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? l !== "__proto__" : l === null;
  }
  function Os(l) {
    return !!Wn && Wn in l;
  }
  function sr(l) {
    var u = l && l.constructor, f = typeof u == "function" && u.prototype || we;
    return l === f;
  }
  function et(l) {
    if (l != null) {
      try {
        return Zn.call(l);
      } catch (u) {
      }
      try {
        return l + "";
      } catch (u) {
      }
    }
    return "";
  }
  function ir(l) {
    return cn(l, !0, !0);
  }
  function lr(l, u) {
    return l === u || l !== l && u !== u;
  }
  function Ie(l) {
    return qs(l) && Tt.call(l, "callee") && (!Yn.call(l, "callee") || Te.call(l) == i);
  }
  var fn = Array.isArray;
  function Re(l) {
    return l != null && ar(l.length) && !dn(l);
  }
  function qs(l) {
    return cr(l) && Re(l);
  }
  var or = Le || Is;
  function dn(l) {
    var u = St(l) ? Te.call(l) : "";
    return u == d || u == m;
  }
  function ar(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= s;
  }
  function St(l) {
    var u = typeof l;
    return !!l && (u == "object" || u == "function");
  }
  function cr(l) {
    return !!l && typeof l == "object";
  }
  function gn(l) {
    return Re(l) ? Oe(l) : ys(l);
  }
  function Cs() {
    return [];
  }
  function Is() {
    return !1;
  }
  n.exports = ir;
})(Lr, Lr.exports);
var Bo = Lr.exports, Sr = { exports: {} };
Sr.exports;
(function(n, t) {
  var e = 200, r = "__lodash_hash_undefined__", s = 1, i = 2, o = 9007199254740991, a = "[object Arguments]", c = "[object Array]", h = "[object AsyncFunction]", d = "[object Boolean]", m = "[object Date]", g = "[object Error]", p = "[object Function]", b = "[object GeneratorFunction]", E = "[object Map]", v = "[object Number]", y = "[object Null]", w = "[object Object]", T = "[object Promise]", _ = "[object Proxy]", L = "[object RegExp]", I = "[object Set]", B = "[object String]", U = "[object Symbol]", Bt = "[object Undefined]", Kt = "[object WeakMap]", re = "[object ArrayBuffer]", se = "[object DataView]", Dn = "[object Float32Array]", Pn = "[object Float64Array]", jn = "[object Int8Array]", Pr = "[object Int16Array]", jr = "[object Int32Array]", Ur = "[object Uint8Array]", Fr = "[object Uint8ClampedArray]", D = "[object Uint16Array]", Hr = "[object Uint32Array]", zr = /[\\^$.*+?()[\]{}|]/g, dt = /^\[object .+?Constructor\]$/, Un = /^(?:0|[1-9]\d*)$/, P = {};
  P[Dn] = P[Pn] = P[jn] = P[Pr] = P[jr] = P[Ur] = P[Fr] = P[D] = P[Hr] = !0, P[a] = P[c] = P[re] = P[d] = P[se] = P[m] = P[g] = P[p] = P[E] = P[v] = P[w] = P[L] = P[I] = P[B] = P[Kt] = !1;
  var Fn = typeof Xt == "object" && Xt && Xt.Object === Object && Xt, Gr = typeof self == "object" && self && self.Object === Object && self, gt = Fn || Gr || Function("return this")(), Hn = t && !t.nodeType && t, zn = Hn && !0 && n && !n.nodeType && n, Ze = zn && zn.exports === Hn, Xe = Ze && Fn.process, Gn = function() {
    try {
      return Xe && Xe.binding && Xe.binding("util");
    } catch (l) {
    }
  }(), Ye = Gn && Gn.isTypedArray;
  function Kn(l, u) {
    for (var f = -1, A = l == null ? 0 : l.length, R = 0, C = []; ++f < A; ) {
      var k = l[f];
      u(k, f, l) && (C[R++] = k);
    }
    return C;
  }
  function Je(l, u) {
    for (var f = -1, A = u.length, R = l.length; ++f < A; )
      l[R + f] = u[f];
    return l;
  }
  function Vn(l, u) {
    for (var f = -1, A = l == null ? 0 : l.length; ++f < A; )
      if (u(l[f], f, l))
        return !0;
    return !1;
  }
  function Kr(l, u) {
    for (var f = -1, A = Array(l); ++f < l; )
      A[f] = u(f);
    return A;
  }
  function Vr(l) {
    return function(u) {
      return l(u);
    };
  }
  function we(l, u) {
    return l.has(u);
  }
  function Qe(l, u) {
    return l == null ? void 0 : l[u];
  }
  function Wn(l) {
    var u = -1, f = Array(l.size);
    return l.forEach(function(A, R) {
      f[++u] = [R, A];
    }), f;
  }
  function Zn(l, u) {
    return function(f) {
      return l(u(f));
    };
  }
  function Tt(l) {
    var u = -1, f = Array(l.size);
    return l.forEach(function(A) {
      f[++u] = A;
    }), f;
  }
  var Te = Array.prototype, Wr = Function.prototype, ie = Object.prototype, xe = gt["__core-js_shared__"], tn = Wr.toString, ot = ie.hasOwnProperty, Xn = function() {
    var l = /[^.]+$/.exec(xe && xe.keys && xe.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), Yn = ie.toString, Zr = RegExp(
    "^" + tn.call(ot).replace(zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), en = Ze ? gt.Buffer : void 0, Le = gt.Symbol, Jn = gt.Uint8Array, Se = ie.propertyIsEnumerable, le = Te.splice, pt = Le ? Le.toStringTag : void 0, _e = Object.getOwnPropertySymbols, nn = en ? en.isBuffer : void 0, oe = Zn(Object.keys, Object), rn = $t(gt, "DataView"), ae = $t(gt, "Map"), sn = $t(gt, "Promise"), ln = $t(gt, "Set"), on = $t(gt, "WeakMap"), Vt = $t(Object, "create"), Qn = et(rn), Mt = et(ae), Xr = et(sn), Yr = et(ln), Jr = et(on), tr = Le ? Le.prototype : void 0, an = tr ? tr.valueOf : void 0;
  function V(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var A = l[u];
      this.set(A[0], A[1]);
    }
  }
  function Qr() {
    this.__data__ = Vt ? Vt(null) : {}, this.size = 0;
  }
  function ts(l) {
    var u = this.has(l) && delete this.__data__[l];
    return this.size -= u ? 1 : 0, u;
  }
  function es(l) {
    var u = this.__data__;
    if (Vt) {
      var f = u[l];
      return f === r ? void 0 : f;
    }
    return ot.call(u, l) ? u[l] : void 0;
  }
  function ns(l) {
    var u = this.__data__;
    return Vt ? u[l] !== void 0 : ot.call(u, l);
  }
  function rs(l, u) {
    var f = this.__data__;
    return this.size += this.has(l) ? 0 : 1, f[l] = Vt && u === void 0 ? r : u, this;
  }
  V.prototype.clear = Qr, V.prototype.delete = ts, V.prototype.get = es, V.prototype.has = ns, V.prototype.set = rs;
  function X(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var A = l[u];
      this.set(A[0], A[1]);
    }
  }
  function ss() {
    this.__data__ = [], this.size = 0;
  }
  function is(l) {
    var u = this.__data__, f = Ce(u, l);
    if (f < 0)
      return !1;
    var A = u.length - 1;
    return f == A ? u.pop() : le.call(u, f, 1), --this.size, !0;
  }
  function ls(l) {
    var u = this.__data__, f = Ce(u, l);
    return f < 0 ? void 0 : u[f][1];
  }
  function os(l) {
    return Ce(this.__data__, l) > -1;
  }
  function as(l, u) {
    var f = this.__data__, A = Ce(f, l);
    return A < 0 ? (++this.size, f.push([l, u])) : f[A][1] = u, this;
  }
  X.prototype.clear = ss, X.prototype.delete = is, X.prototype.get = ls, X.prototype.has = os, X.prototype.set = as;
  function rt(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var A = l[u];
      this.set(A[0], A[1]);
    }
  }
  function cs() {
    this.size = 0, this.__data__ = {
      hash: new V(),
      map: new (ae || X)(),
      string: new V()
    };
  }
  function us(l) {
    var u = mt(this, l).delete(l);
    return this.size -= u ? 1 : 0, u;
  }
  function hs(l) {
    return mt(this, l).get(l);
  }
  function fs(l) {
    return mt(this, l).has(l);
  }
  function ds(l, u) {
    var f = mt(this, l), A = f.size;
    return f.set(l, u), this.size += f.size == A ? 0 : 1, this;
  }
  rt.prototype.clear = cs, rt.prototype.delete = us, rt.prototype.get = hs, rt.prototype.has = fs, rt.prototype.set = ds;
  function Oe(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.__data__ = new rt(); ++u < f; )
      this.add(l[u]);
  }
  function er(l) {
    return this.__data__.set(l, r), this;
  }
  function qe(l) {
    return this.__data__.has(l);
  }
  Oe.prototype.add = Oe.prototype.push = er, Oe.prototype.has = qe;
  function xt(l) {
    var u = this.__data__ = new X(l);
    this.size = u.size;
  }
  function cn() {
    this.__data__ = new X(), this.size = 0;
  }
  function gs(l) {
    var u = this.__data__, f = u.delete(l);
    return this.size = u.size, f;
  }
  function ps(l) {
    return this.__data__.get(l);
  }
  function ms(l) {
    return this.__data__.has(l);
  }
  function bs(l, u) {
    var f = this.__data__;
    if (f instanceof X) {
      var A = f.__data__;
      if (!ae || A.length < e - 1)
        return A.push([l, u]), this.size = ++f.size, this;
      f = this.__data__ = new rt(A);
    }
    return f.set(l, u), this.size = f.size, this;
  }
  xt.prototype.clear = cn, xt.prototype.delete = gs, xt.prototype.get = ps, xt.prototype.has = ms, xt.prototype.set = bs;
  function ys(l, u) {
    var f = Ie(l), A = !f && lr(l), R = !f && !A && Re(l), C = !f && !A && !R && cr(l), k = f || A || R || C, M = k ? Kr(l.length, String) : [], z = M.length;
    for (var $ in l)
      (u || ot.call(l, $)) && !(k && // Safari 9 has enumerable `arguments.length` in strict mode.
      ($ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      R && ($ == "offset" || $ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C && ($ == "buffer" || $ == "byteLength" || $ == "byteOffset") || // Skip index properties.
      Ls($, z))) && M.push($);
    return M;
  }
  function Ce(l, u) {
    for (var f = l.length; f--; )
      if (ir(l[f][0], u))
        return f;
    return -1;
  }
  function un(l, u, f) {
    var A = u(l);
    return Ie(l) ? A : Je(A, f(l));
  }
  function ce(l) {
    return l == null ? l === void 0 ? Bt : y : pt && pt in Object(l) ? Dt(l) : sr(l);
  }
  function nr(l) {
    return St(l) && ce(l) == a;
  }
  function rr(l, u, f, A, R) {
    return l === u ? !0 : l == null || u == null || !St(l) && !St(u) ? l !== l && u !== u : vs(l, u, f, A, rr, R);
  }
  function vs(l, u, f, A, R, C) {
    var k = Ie(l), M = Ie(u), z = k ? c : Lt(l), $ = M ? c : Lt(u);
    z = z == a ? w : z, $ = $ == a ? w : $;
    var Y = z == w, st = $ == w, G = z == $;
    if (G && Re(l)) {
      if (!Re(u))
        return !1;
      k = !0, Y = !1;
    }
    if (G && !Y)
      return C || (C = new xt()), k || cr(l) ? hn(l, u, f, A, R, C) : ws(l, u, z, f, A, R, C);
    if (!(f & s)) {
      var J = Y && ot.call(l, "__wrapped__"), W = st && ot.call(u, "__wrapped__");
      if (J || W) {
        var Wt = J ? l.value() : l, Pt = W ? u.value() : u;
        return C || (C = new xt()), R(Wt, Pt, f, A, C);
      }
    }
    return G ? (C || (C = new xt()), Ts(l, u, f, A, R, C)) : !1;
  }
  function Es(l) {
    if (!ar(l) || _s(l))
      return !1;
    var u = or(l) ? Zr : dt;
    return u.test(et(l));
  }
  function As(l) {
    return St(l) && dn(l.length) && !!P[ce(l)];
  }
  function Ns(l) {
    if (!Os(l))
      return oe(l);
    var u = [];
    for (var f in Object(l))
      ot.call(l, f) && f != "constructor" && u.push(f);
    return u;
  }
  function hn(l, u, f, A, R, C) {
    var k = f & s, M = l.length, z = u.length;
    if (M != z && !(k && z > M))
      return !1;
    var $ = C.get(l);
    if ($ && C.get(u))
      return $ == u;
    var Y = -1, st = !0, G = f & i ? new Oe() : void 0;
    for (C.set(l, u), C.set(u, l); ++Y < M; ) {
      var J = l[Y], W = u[Y];
      if (A)
        var Wt = k ? A(W, J, Y, u, l, C) : A(J, W, Y, l, u, C);
      if (Wt !== void 0) {
        if (Wt)
          continue;
        st = !1;
        break;
      }
      if (G) {
        if (!Vn(u, function(Pt, he) {
          if (!we(G, he) && (J === Pt || R(J, Pt, f, A, C)))
            return G.push(he);
        })) {
          st = !1;
          break;
        }
      } else if (!(J === W || R(J, W, f, A, C))) {
        st = !1;
        break;
      }
    }
    return C.delete(l), C.delete(u), st;
  }
  function ws(l, u, f, A, R, C, k) {
    switch (f) {
      case se:
        if (l.byteLength != u.byteLength || l.byteOffset != u.byteOffset)
          return !1;
        l = l.buffer, u = u.buffer;
      case re:
        return !(l.byteLength != u.byteLength || !C(new Jn(l), new Jn(u)));
      case d:
      case m:
      case v:
        return ir(+l, +u);
      case g:
        return l.name == u.name && l.message == u.message;
      case L:
      case B:
        return l == u + "";
      case E:
        var M = Wn;
      case I:
        var z = A & s;
        if (M || (M = Tt), l.size != u.size && !z)
          return !1;
        var $ = k.get(l);
        if ($)
          return $ == u;
        A |= i, k.set(l, u);
        var Y = hn(M(l), M(u), A, R, C, k);
        return k.delete(l), Y;
      case U:
        if (an)
          return an.call(l) == an.call(u);
    }
    return !1;
  }
  function Ts(l, u, f, A, R, C) {
    var k = f & s, M = ue(l), z = M.length, $ = ue(u), Y = $.length;
    if (z != Y && !k)
      return !1;
    for (var st = z; st--; ) {
      var G = M[st];
      if (!(k ? G in u : ot.call(u, G)))
        return !1;
    }
    var J = C.get(l);
    if (J && C.get(u))
      return J == u;
    var W = !0;
    C.set(l, u), C.set(u, l);
    for (var Wt = k; ++st < z; ) {
      G = M[st];
      var Pt = l[G], he = u[G];
      if (A)
        var Ki = k ? A(he, Pt, G, u, l, C) : A(Pt, he, G, l, u, C);
      if (!(Ki === void 0 ? Pt === he || R(Pt, he, f, A, C) : Ki)) {
        W = !1;
        break;
      }
      Wt || (Wt = G == "constructor");
    }
    if (W && !Wt) {
      var ur = l.constructor, hr = u.constructor;
      ur != hr && "constructor" in l && "constructor" in u && !(typeof ur == "function" && ur instanceof ur && typeof hr == "function" && hr instanceof hr) && (W = !1);
    }
    return C.delete(l), C.delete(u), W;
  }
  function ue(l) {
    return un(l, gn, xs);
  }
  function mt(l, u) {
    var f = l.__data__;
    return Ss(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function $t(l, u) {
    var f = Qe(l, u);
    return Es(f) ? f : void 0;
  }
  function Dt(l) {
    var u = ot.call(l, pt), f = l[pt];
    try {
      l[pt] = void 0;
      var A = !0;
    } catch (C) {
    }
    var R = Yn.call(l);
    return A && (u ? l[pt] = f : delete l[pt]), R;
  }
  var xs = _e ? function(l) {
    return l == null ? [] : (l = Object(l), Kn(_e(l), function(u) {
      return Se.call(l, u);
    }));
  } : Cs, Lt = ce;
  (rn && Lt(new rn(new ArrayBuffer(1))) != se || ae && Lt(new ae()) != E || sn && Lt(sn.resolve()) != T || ln && Lt(new ln()) != I || on && Lt(new on()) != Kt) && (Lt = function(l) {
    var u = ce(l), f = u == w ? l.constructor : void 0, A = f ? et(f) : "";
    if (A)
      switch (A) {
        case Qn:
          return se;
        case Mt:
          return E;
        case Xr:
          return T;
        case Yr:
          return I;
        case Jr:
          return Kt;
      }
    return u;
  });
  function Ls(l, u) {
    return u = u == null ? o : u, !!u && (typeof l == "number" || Un.test(l)) && l > -1 && l % 1 == 0 && l < u;
  }
  function Ss(l) {
    var u = typeof l;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? l !== "__proto__" : l === null;
  }
  function _s(l) {
    return !!Xn && Xn in l;
  }
  function Os(l) {
    var u = l && l.constructor, f = typeof u == "function" && u.prototype || ie;
    return l === f;
  }
  function sr(l) {
    return Yn.call(l);
  }
  function et(l) {
    if (l != null) {
      try {
        return tn.call(l);
      } catch (u) {
      }
      try {
        return l + "";
      } catch (u) {
      }
    }
    return "";
  }
  function ir(l, u) {
    return l === u || l !== l && u !== u;
  }
  var lr = nr(function() {
    return arguments;
  }()) ? nr : function(l) {
    return St(l) && ot.call(l, "callee") && !Se.call(l, "callee");
  }, Ie = Array.isArray;
  function fn(l) {
    return l != null && dn(l.length) && !or(l);
  }
  var Re = nn || Is;
  function qs(l, u) {
    return rr(l, u);
  }
  function or(l) {
    if (!ar(l))
      return !1;
    var u = ce(l);
    return u == p || u == b || u == h || u == _;
  }
  function dn(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function ar(l) {
    var u = typeof l;
    return l != null && (u == "object" || u == "function");
  }
  function St(l) {
    return l != null && typeof l == "object";
  }
  var cr = Ye ? Vr(Ye) : As;
  function gn(l) {
    return fn(l) ? ys(l) : Ns(l);
  }
  function Cs() {
    return [];
  }
  function Is() {
    return !1;
  }
  n.exports = qs;
})(Sr, Sr.exports);
var Mo = Sr.exports, ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
const Md = Bo, $d = Mo;
var oi;
(function(n) {
  function t(i = {}, o = {}, a = !1) {
    typeof i != "object" && (i = {}), typeof o != "object" && (o = {});
    let c = Md(o);
    a || (c = Object.keys(c).reduce((h, d) => (c[d] != null && (h[d] = c[d]), h), {}));
    for (const h in i)
      i[h] !== void 0 && o[h] === void 0 && (c[h] = i[h]);
    return Object.keys(c).length > 0 ? c : void 0;
  }
  n.compose = t;
  function e(i = {}, o = {}) {
    typeof i != "object" && (i = {}), typeof o != "object" && (o = {});
    const a = Object.keys(i).concat(Object.keys(o)).reduce((c, h) => ($d(i[h], o[h]) || (c[h] = o[h] === void 0 ? null : o[h]), c), {});
    return Object.keys(a).length > 0 ? a : void 0;
  }
  n.diff = e;
  function r(i = {}, o = {}) {
    i = i || {};
    const a = Object.keys(o).reduce((c, h) => (o[h] !== i[h] && i[h] !== void 0 && (c[h] = o[h]), c), {});
    return Object.keys(i).reduce((c, h) => (i[h] !== o[h] && o[h] === void 0 && (c[h] = null), c), a);
  }
  n.invert = r;
  function s(i, o, a = !1) {
    if (typeof i != "object")
      return o;
    if (typeof o != "object")
      return;
    if (!a)
      return o;
    const c = Object.keys(o).reduce((h, d) => (i[d] === void 0 && (h[d] = o[d]), h), {});
    return Object.keys(c).length > 0 ? c : void 0;
  }
  n.transform = s;
})(oi || (oi = {}));
ki.default = oi;
var Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
var ai;
(function(n) {
  function t(e) {
    return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
  }
  n.length = t;
})(ai || (ai = {}));
Br.default = ai;
var Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
const Sl = Br;
class Dd {
  constructor(t) {
    this.ops = t, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(t) {
    t || (t = 1 / 0);
    const e = this.ops[this.index];
    if (e) {
      const r = this.offset, s = Sl.default.length(e);
      if (t >= s - r ? (t = s - r, this.index += 1, this.offset = 0) : this.offset += t, typeof e.delete == "number")
        return { delete: t };
      {
        const i = {};
        return e.attributes && (i.attributes = e.attributes), typeof e.retain == "number" ? i.retain = t : typeof e.retain == "object" && e.retain !== null ? i.retain = e.retain : typeof e.insert == "string" ? i.insert = e.insert.substr(r, t) : i.insert = e.insert, i;
      }
    } else
      return { retain: 1 / 0 };
  }
  peek() {
    return this.ops[this.index];
  }
  peekLength() {
    return this.ops[this.index] ? Sl.default.length(this.ops[this.index]) - this.offset : 1 / 0;
  }
  peekType() {
    const t = this.ops[this.index];
    return t ? typeof t.delete == "number" ? "delete" : typeof t.retain == "number" || typeof t.retain == "object" && t.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const t = this.offset, e = this.index, r = this.next(), s = this.ops.slice(this.index);
        return this.offset = t, this.index = e, [r].concat(s);
      }
    } else
      return [];
  }
}
Bi.default = Dd;
(function(n, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AttributeMap = t.OpIterator = t.Op = void 0;
  const e = Bd, r = Bo, s = Mo, i = ki;
  t.AttributeMap = i.default;
  const o = Br;
  t.Op = o.default;
  const a = Bi;
  t.OpIterator = a.default;
  const c = String.fromCharCode(0), h = (m, g) => {
    if (typeof m != "object" || m === null)
      throw new Error(`cannot retain a ${typeof m}`);
    if (typeof g != "object" || g === null)
      throw new Error(`cannot retain a ${typeof g}`);
    const p = Object.keys(m)[0];
    if (!p || p !== Object.keys(g)[0])
      throw new Error(`embed types not matched: ${p} != ${Object.keys(g)[0]}`);
    return [p, m[p], g[p]];
  };
  class d {
    constructor(g) {
      Array.isArray(g) ? this.ops = g : g != null && Array.isArray(g.ops) ? this.ops = g.ops : this.ops = [];
    }
    static registerEmbed(g, p) {
      this.handlers[g] = p;
    }
    static unregisterEmbed(g) {
      delete this.handlers[g];
    }
    static getHandler(g) {
      const p = this.handlers[g];
      if (!p)
        throw new Error(`no handlers for embed type "${g}"`);
      return p;
    }
    insert(g, p) {
      const b = {};
      return typeof g == "string" && g.length === 0 ? this : (b.insert = g, p != null && typeof p == "object" && Object.keys(p).length > 0 && (b.attributes = p), this.push(b));
    }
    delete(g) {
      return g <= 0 ? this : this.push({ delete: g });
    }
    retain(g, p) {
      if (typeof g == "number" && g <= 0)
        return this;
      const b = { retain: g };
      return p != null && typeof p == "object" && Object.keys(p).length > 0 && (b.attributes = p), this.push(b);
    }
    push(g) {
      let p = this.ops.length, b = this.ops[p - 1];
      if (g = r(g), typeof b == "object") {
        if (typeof g.delete == "number" && typeof b.delete == "number")
          return this.ops[p - 1] = { delete: b.delete + g.delete }, this;
        if (typeof b.delete == "number" && g.insert != null && (p -= 1, b = this.ops[p - 1], typeof b != "object"))
          return this.ops.unshift(g), this;
        if (s(g.attributes, b.attributes)) {
          if (typeof g.insert == "string" && typeof b.insert == "string")
            return this.ops[p - 1] = { insert: b.insert + g.insert }, typeof g.attributes == "object" && (this.ops[p - 1].attributes = g.attributes), this;
          if (typeof g.retain == "number" && typeof b.retain == "number")
            return this.ops[p - 1] = { retain: b.retain + g.retain }, typeof g.attributes == "object" && (this.ops[p - 1].attributes = g.attributes), this;
        }
      }
      return p === this.ops.length ? this.ops.push(g) : this.ops.splice(p, 0, g), this;
    }
    chop() {
      const g = this.ops[this.ops.length - 1];
      return g && typeof g.retain == "number" && !g.attributes && this.ops.pop(), this;
    }
    filter(g) {
      return this.ops.filter(g);
    }
    forEach(g) {
      this.ops.forEach(g);
    }
    map(g) {
      return this.ops.map(g);
    }
    partition(g) {
      const p = [], b = [];
      return this.forEach((E) => {
        (g(E) ? p : b).push(E);
      }), [p, b];
    }
    reduce(g, p) {
      return this.ops.reduce(g, p);
    }
    changeLength() {
      return this.reduce((g, p) => p.insert ? g + o.default.length(p) : p.delete ? g - p.delete : g, 0);
    }
    length() {
      return this.reduce((g, p) => g + o.default.length(p), 0);
    }
    slice(g = 0, p = 1 / 0) {
      const b = [], E = new a.default(this.ops);
      let v = 0;
      for (; v < p && E.hasNext(); ) {
        let y;
        v < g ? y = E.next(g - v) : (y = E.next(p - v), b.push(y)), v += o.default.length(y);
      }
      return new d(b);
    }
    compose(g) {
      const p = new a.default(this.ops), b = new a.default(g.ops), E = [], v = b.peek();
      if (v != null && typeof v.retain == "number" && v.attributes == null) {
        let w = v.retain;
        for (; p.peekType() === "insert" && p.peekLength() <= w; )
          w -= p.peekLength(), E.push(p.next());
        v.retain - w > 0 && b.next(v.retain - w);
      }
      const y = new d(E);
      for (; p.hasNext() || b.hasNext(); )
        if (b.peekType() === "insert")
          y.push(b.next());
        else if (p.peekType() === "delete")
          y.push(p.next());
        else {
          const w = Math.min(p.peekLength(), b.peekLength()), T = p.next(w), _ = b.next(w);
          if (_.retain) {
            const L = {};
            if (typeof T.retain == "number")
              L.retain = typeof _.retain == "number" ? w : _.retain;
            else if (typeof _.retain == "number")
              T.retain == null ? L.insert = T.insert : L.retain = T.retain;
            else {
              const B = T.retain == null ? "insert" : "retain", [U, Bt, Kt] = h(T[B], _.retain), re = d.getHandler(U);
              L[B] = {
                [U]: re.compose(Bt, Kt, B === "retain")
              };
            }
            const I = i.default.compose(T.attributes, _.attributes, typeof T.retain == "number");
            if (I && (L.attributes = I), y.push(L), !b.hasNext() && s(y.ops[y.ops.length - 1], L)) {
              const B = new d(p.rest());
              return y.concat(B).chop();
            }
          } else
            typeof _.delete == "number" && (typeof T.retain == "number" || typeof T.retain == "object" && T.retain !== null) && y.push(_);
        }
      return y.chop();
    }
    concat(g) {
      const p = new d(this.ops.slice());
      return g.ops.length > 0 && (p.push(g.ops[0]), p.ops = p.ops.concat(g.ops.slice(1))), p;
    }
    diff(g, p) {
      if (this.ops === g.ops)
        return new d();
      const b = [this, g].map((T) => T.map((_) => {
        if (_.insert != null)
          return typeof _.insert == "string" ? _.insert : c;
        const L = T === g ? "on" : "with";
        throw new Error("diff() called " + L + " non-document");
      }).join("")), E = new d(), v = e(b[0], b[1], p, !0), y = new a.default(this.ops), w = new a.default(g.ops);
      return v.forEach((T) => {
        let _ = T[1].length;
        for (; _ > 0; ) {
          let L = 0;
          switch (T[0]) {
            case e.INSERT:
              L = Math.min(w.peekLength(), _), E.push(w.next(L));
              break;
            case e.DELETE:
              L = Math.min(_, y.peekLength()), y.next(L), E.delete(L);
              break;
            case e.EQUAL:
              L = Math.min(y.peekLength(), w.peekLength(), _);
              const I = y.next(L), B = w.next(L);
              s(I.insert, B.insert) ? E.retain(L, i.default.diff(I.attributes, B.attributes)) : E.push(B).delete(L);
              break;
          }
          _ -= L;
        }
      }), E.chop();
    }
    eachLine(g, p = `
`) {
      const b = new a.default(this.ops);
      let E = new d(), v = 0;
      for (; b.hasNext(); ) {
        if (b.peekType() !== "insert")
          return;
        const y = b.peek(), w = o.default.length(y) - b.peekLength(), T = typeof y.insert == "string" ? y.insert.indexOf(p, w) - w : -1;
        if (T < 0)
          E.push(b.next());
        else if (T > 0)
          E.push(b.next(T));
        else {
          if (g(E, b.next(1).attributes || {}, v) === !1)
            return;
          v += 1, E = new d();
        }
      }
      E.length() > 0 && g(E, {}, v);
    }
    invert(g) {
      const p = new d();
      return this.reduce((b, E) => {
        if (E.insert)
          p.delete(o.default.length(E));
        else {
          if (typeof E.retain == "number" && E.attributes == null)
            return p.retain(E.retain), b + E.retain;
          if (E.delete || typeof E.retain == "number") {
            const v = E.delete || E.retain;
            return g.slice(b, b + v).forEach((w) => {
              E.delete ? p.push(w) : E.retain && E.attributes && p.retain(o.default.length(w), i.default.invert(E.attributes, w.attributes));
            }), b + v;
          } else if (typeof E.retain == "object" && E.retain !== null) {
            const v = g.slice(b, b + 1), y = new a.default(v.ops).next(), [w, T, _] = h(E.retain, y.insert), L = d.getHandler(w);
            return p.retain({ [w]: L.invert(T, _) }, i.default.invert(E.attributes, y.attributes)), b + 1;
          }
        }
        return b;
      }, 0), p.chop();
    }
    transform(g, p = !1) {
      if (p = !!p, typeof g == "number")
        return this.transformPosition(g, p);
      const b = g, E = new a.default(this.ops), v = new a.default(b.ops), y = new d();
      for (; E.hasNext() || v.hasNext(); )
        if (E.peekType() === "insert" && (p || v.peekType() !== "insert"))
          y.retain(o.default.length(E.next()));
        else if (v.peekType() === "insert")
          y.push(v.next());
        else {
          const w = Math.min(E.peekLength(), v.peekLength()), T = E.next(w), _ = v.next(w);
          if (T.delete)
            continue;
          if (_.delete)
            y.push(_);
          else {
            const L = T.retain, I = _.retain;
            let B = typeof I == "object" && I !== null ? I : w;
            if (typeof L == "object" && L !== null && typeof I == "object" && I !== null) {
              const U = Object.keys(L)[0];
              if (U === Object.keys(I)[0]) {
                const Bt = d.getHandler(U);
                Bt && (B = {
                  [U]: Bt.transform(L[U], I[U], p)
                });
              }
            }
            y.retain(B, i.default.transform(T.attributes, _.attributes, p));
          }
        }
      return y.chop();
    }
    transformPosition(g, p = !1) {
      p = !!p;
      const b = new a.default(this.ops);
      let E = 0;
      for (; b.hasNext() && E <= g; ) {
        const v = b.peekLength(), y = b.peekType();
        if (b.next(), y === "delete") {
          g -= Math.min(v, g - E);
          continue;
        } else
          y === "insert" && (E < g || !p) && (g += v);
        E += v;
      }
      return g;
    }
  }
  d.Op = o.default, d.OpIterator = a.default, d.AttributeMap = i.default, d.handlers = {}, t.default = d, n.exports = d, n.exports.default = d;
})(li, li.exports);
var ft = li.exports;
const O = /* @__PURE__ */ Xl(ft);
class wt extends lt {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
wt.blotName = "break";
wt.tagName = "BR";
let At = class extends xr {
};
function Mr(n) {
  return n.replace(/[&<>"']/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t]);
}
const _t = class _t extends qi {
  static compare(t, e) {
    const r = _t.order.indexOf(t), s = _t.order.indexOf(e);
    return r >= 0 || s >= 0 ? r - s : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, r, s) {
    if (_t.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, q.BLOT)) {
      const i = this.isolate(t, e);
      s && i.wrap(r, s);
    } else
      super.formatAt(t, e, r, s);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof _t && _t.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e), e.wrap(this);
    }
  }
};
x(_t, "allowedChildren", [_t, wt, lt, At]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
x(_t, "order", [
  "cursor",
  "inline",
  // Must be lower
  "link",
  // Chrome wants <a> to be lower
  "underline",
  "strike",
  "italic",
  "bold",
  "script",
  "code"
  // Must be higher
]);
let It = _t;
const _l = 1;
class Z extends Ln {
  constructor() {
    super(...arguments);
    x(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = $o(this)), this.cache.delta;
  }
  deleteAt(e, r) {
    super.deleteAt(e, r), this.cache = {};
  }
  formatAt(e, r, s, i) {
    r <= 0 || (this.scroll.query(s, q.BLOCK) ? e + r === this.length() && this.format(s, i) : super.formatAt(e, Math.min(r, this.length() - e - 1), s, i), this.cache = {});
  }
  insertAt(e, r, s) {
    if (s != null) {
      super.insertAt(e, r, s), this.cache = {};
      return;
    }
    if (r.length === 0)
      return;
    const i = r.split(`
`), o = i.shift();
    o.length > 0 && (e < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e, this.length() - 1), o) : this.children.tail.insertAt(this.children.tail.length(), o), this.cache = {});
    let a = this;
    i.reduce((c, h) => (a = a.split(c, !0), a.insertAt(0, h), h.length), e + o.length);
  }
  insertBefore(e, r) {
    const {
      head: s
    } = this.children;
    super.insertBefore(e, r), s instanceof wt && s.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + _l), this.cache.length;
  }
  moveChildren(e, r) {
    super.moveChildren(e, r), this.cache = {};
  }
  optimize(e) {
    super.optimize(e), this.cache = {};
  }
  path(e) {
    return super.path(e, !0);
  }
  removeChild(e) {
    super.removeChild(e), this.cache = {};
  }
  split(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (r && (e === 0 || e >= this.length() - _l)) {
      const i = this.clone();
      return e === 0 ? (this.parent.insertBefore(i, this), this) : (this.parent.insertBefore(i, this.next), i);
    }
    const s = super.split(e, r);
    return this.cache = {}, s;
  }
}
Z.blotName = "block";
Z.tagName = "P";
Z.defaultChild = wt;
Z.allowedChildren = [wt, It, lt, At];
class ht extends lt {
  attach() {
    super.attach(), this.attributes = new Cr(this.domNode);
  }
  delta() {
    return new O().insert(this.value(), H(H({}, this.formats()), this.attributes.values()));
  }
  format(t, e) {
    const r = this.scroll.query(t, q.BLOCK_ATTRIBUTE);
    r != null && this.attributes.attribute(r, e);
  }
  formatAt(t, e, r, s) {
    this.format(r, s);
  }
  insertAt(t, e, r) {
    if (r != null) {
      super.insertAt(t, e, r);
      return;
    }
    const s = e.split(`
`), i = s.pop(), o = s.map((c) => {
      const h = this.scroll.create(Z.blotName);
      return h.insertAt(0, c), h;
    }), a = this.split(t);
    o.forEach((c) => {
      this.parent.insertBefore(c, a);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), a);
  }
}
ht.scope = q.BLOCK_BLOT;
function $o(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.descendants(Q).reduce((e, r) => r.length() === 0 ? e : e.insert(r.value(), ct(r, {}, t)), new O()).insert(`
`, ct(n));
}
function ct(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return n == null || ("formats" in n && typeof n.formats == "function" && (t = H(H({}, t), n.formats()), e && delete t["code-token"]), n.parent == null || n.parent.statics.blotName === "scroll" || n.parent.statics.scope !== n.statics.scope) ? t : ct(n.parent, t, e);
}
const at = class at extends lt {
  // Zero width no break space
  static value() {
  }
  constructor(t, e, r) {
    super(t, e), this.selection = r, this.textNode = document.createTextNode(at.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(t, e) {
    if (this.savedLength !== 0) {
      super.format(t, e);
      return;
    }
    let r = this, s = 0;
    for (; r != null && r.statics.scope !== q.BLOCK_BLOT; )
      s += r.offset(r.parent), r = r.parent;
    r != null && (this.savedLength = at.CONTENTS.length, r.optimize(), r.formatAt(s, at.CONTENTS.length, t, e), this.savedLength = 0);
  }
  index(t, e) {
    return t === this.textNode ? 0 : super.index(t, e);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null)
      return null;
    const t = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const e = this.prev instanceof At ? this.prev : null, r = e ? e.length() : 0, s = this.next instanceof At ? this.next : null, i = s ? s.text : "", {
      textNode: o
    } = this, a = o.data.split(at.CONTENTS).join("");
    o.data = at.CONTENTS;
    let c;
    if (e)
      c = e, (a || s) && (e.insertAt(e.length(), a + i), s && s.remove());
    else if (s)
      c = s, s.insertAt(0, a);
    else {
      const h = document.createTextNode(a);
      c = this.scroll.create(h), this.parent.insertBefore(c, this);
    }
    if (this.remove(), t) {
      const h = (g, p) => e && g === e.domNode ? p : g === o ? r + p - 1 : s && g === s.domNode ? r + a.length + p : null, d = h(t.start.node, t.start.offset), m = h(t.end.node, t.end.offset);
      if (d !== null && m !== null)
        return {
          startNode: c.domNode,
          startOffset: d,
          endNode: c.domNode,
          endOffset: m
        };
    }
    return null;
  }
  update(t, e) {
    if (t.some((r) => r.type === "characterData" && r.target === this.textNode)) {
      const r = this.restore();
      r && (e.range = r);
    }
  }
  // Avoid .ql-cursor being a descendant of `<a/>`.
  // The reason is Safari pushes down `<a/>` on text insertion.
  // That will cause DOM nodes not sync with the model.
  //
  // For example ({I} is the caret), given the markup:
  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
  // And then "x" will be inserted after `<a/>`:
  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
  optimize(t) {
    super.optimize(t);
    let {
      parent: e
    } = this;
    for (; e; ) {
      if (e.domNode.tagName === "A") {
        this.savedLength = at.CONTENTS.length, e.isolate(this.offset(e), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e = e.parent;
    }
  }
  value() {
    return "";
  }
};
x(at, "blotName", "cursor"), x(at, "className", "ql-cursor"), x(at, "tagName", "span"), x(at, "CONTENTS", "\uFEFF");
let Ge = at;
var Do = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (e = !1));
  function s(c, h, d) {
    this.fn = c, this.context = h, this.once = d || !1;
  }
  function i(c, h, d, m, g) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var p = new s(d, m || c, g), b = e ? e + h : h;
    return c._events[b] ? c._events[b].fn ? c._events[b] = [c._events[b], p] : c._events[b].push(p) : (c._events[b] = p, c._eventsCount++), c;
  }
  function o(c, h) {
    --c._eventsCount === 0 ? c._events = new r() : delete c._events[h];
  }
  function a() {
    this._events = new r(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], d, m;
    if (this._eventsCount === 0)
      return h;
    for (m in d = this._events)
      t.call(d, m) && h.push(e ? m.slice(1) : m);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(d)) : h;
  }, a.prototype.listeners = function(h) {
    var d = e ? e + h : h, m = this._events[d];
    if (!m)
      return [];
    if (m.fn)
      return [m.fn];
    for (var g = 0, p = m.length, b = new Array(p); g < p; g++)
      b[g] = m[g].fn;
    return b;
  }, a.prototype.listenerCount = function(h) {
    var d = e ? e + h : h, m = this._events[d];
    return m ? m.fn ? 1 : m.length : 0;
  }, a.prototype.emit = function(h, d, m, g, p, b) {
    var E = e ? e + h : h;
    if (!this._events[E])
      return !1;
    var v = this._events[E], y = arguments.length, w, T;
    if (v.fn) {
      switch (v.once && this.removeListener(h, v.fn, void 0, !0), y) {
        case 1:
          return v.fn.call(v.context), !0;
        case 2:
          return v.fn.call(v.context, d), !0;
        case 3:
          return v.fn.call(v.context, d, m), !0;
        case 4:
          return v.fn.call(v.context, d, m, g), !0;
        case 5:
          return v.fn.call(v.context, d, m, g, p), !0;
        case 6:
          return v.fn.call(v.context, d, m, g, p, b), !0;
      }
      for (T = 1, w = new Array(y - 1); T < y; T++)
        w[T - 1] = arguments[T];
      v.fn.apply(v.context, w);
    } else {
      var _ = v.length, L;
      for (T = 0; T < _; T++)
        switch (v[T].once && this.removeListener(h, v[T].fn, void 0, !0), y) {
          case 1:
            v[T].fn.call(v[T].context);
            break;
          case 2:
            v[T].fn.call(v[T].context, d);
            break;
          case 3:
            v[T].fn.call(v[T].context, d, m);
            break;
          case 4:
            v[T].fn.call(v[T].context, d, m, g);
            break;
          default:
            if (!w)
              for (L = 1, w = new Array(y - 1); L < y; L++)
                w[L - 1] = arguments[L];
            v[T].fn.apply(v[T].context, w);
        }
    }
    return !0;
  }, a.prototype.on = function(h, d, m) {
    return i(this, h, d, m, !1);
  }, a.prototype.once = function(h, d, m) {
    return i(this, h, d, m, !0);
  }, a.prototype.removeListener = function(h, d, m, g) {
    var p = e ? e + h : h;
    if (!this._events[p])
      return this;
    if (!d)
      return o(this, p), this;
    var b = this._events[p];
    if (b.fn)
      b.fn === d && (!g || b.once) && (!m || b.context === m) && o(this, p);
    else {
      for (var E = 0, v = [], y = b.length; E < y; E++)
        (b[E].fn !== d || g && !b[E].once || m && b[E].context !== m) && v.push(b[E]);
      v.length ? this._events[p] = v.length === 1 ? v[0] : v : o(this, p);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var d;
    return h ? (d = e ? e + h : h, this._events[d] && o(this, d)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, n.exports = a;
})(Do);
var Pd = Do.exports;
const jd = /* @__PURE__ */ Xl(Pd), ci = /* @__PURE__ */ new WeakMap(), ui = ["error", "warn", "log", "info"];
let hi = "warn";
function Po(n) {
  if (hi && ui.indexOf(n) <= ui.indexOf(hi)) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      e[r - 1] = arguments[r];
    console[n](...e);
  }
}
function Gt(n) {
  return ui.reduce((t, e) => (t[e] = Po.bind(console, e, n), t), {});
}
Gt.level = (n) => {
  hi = n;
};
Po.level = Gt.level;
const js = Gt("quill:events"), Ud = ["selectionchange", "mousedown", "mouseup", "click"];
Ud.forEach((n) => {
  document.addEventListener(n, function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s) => {
      const i = ci.get(s);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class S extends jd {
  constructor() {
    super(), this.domListeners = {}, this.on("error", js.error);
  }
  emit() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return js.log.call(js, ...e), super.emit(...e);
  }
  handleDOM(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
      r[s - 1] = arguments[s];
    (this.domListeners[t.type] || []).forEach((i) => {
      let {
        node: o,
        handler: a
      } = i;
      (t.target === o || o.contains(t.target)) && a(t, ...r);
    });
  }
  listenDOM(t, e, r) {
    this.domListeners[t] || (this.domListeners[t] = []), this.domListeners[t].push({
      node: e,
      handler: r
    });
  }
}
x(S, "events", {
  EDITOR_CHANGE: "editor-change",
  SCROLL_BEFORE_UPDATE: "scroll-before-update",
  SCROLL_BLOT_MOUNT: "scroll-blot-mount",
  SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
  SCROLL_OPTIMIZE: "scroll-optimize",
  SCROLL_UPDATE: "scroll-update",
  SCROLL_EMBED_UPDATE: "scroll-embed-update",
  SELECTION_CHANGE: "selection-change",
  TEXT_CHANGE: "text-change",
  COMPOSITION_BEFORE_START: "composition-before-start",
  COMPOSITION_START: "composition-start",
  COMPOSITION_BEFORE_END: "composition-before-end",
  COMPOSITION_END: "composition-end"
}), x(S, "sources", {
  API: "api",
  SILENT: "silent",
  USER: "user"
});
const Us = Gt("quill:selection");
class me {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t, this.length = e;
  }
}
class Fd {
  constructor(t, e) {
    this.emitter = e, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new me(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, S.sources.USER), 1);
    }), this.emitter.on(S.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus())
        return;
      const r = this.getNativeRange();
      r != null && r.start.node !== this.cursor.textNode && this.emitter.once(S.events.SCROLL_UPDATE, (s, i) => {
        try {
          this.root.contains(r.start.node) && this.root.contains(r.end.node) && this.setNativeRange(r.start.node, r.start.offset, r.end.node, r.end.offset);
          const o = i.some((a) => a.type === "characterData" || a.type === "childList" || a.type === "attributes" && a.target === this.root);
          this.update(o ? S.sources.SILENT : s);
        } catch (o) {
        }
      });
    }), this.emitter.on(S.events.SCROLL_OPTIMIZE, (r, s) => {
      if (s.range) {
        const {
          startNode: i,
          startOffset: o,
          endNode: a,
          endOffset: c
        } = s.range;
        this.setNativeRange(i, o, a, c), this.update(S.sources.SILENT);
      }
    }), this.update(S.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(S.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }), this.emitter.on(S.events.COMPOSITION_END, () => {
      if (this.composing = !1, this.cursor.parent) {
        const t = this.cursor.restore();
        if (!t)
          return;
        setTimeout(() => {
          this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = !1, this.update(S.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: !0
    }), this.setRange(this.savedRange));
  }
  format(t, e) {
    this.scroll.update();
    const r = this.getNativeRange();
    if (!(r == null || !r.native.collapsed || this.scroll.query(t, q.BLOCK))) {
      if (r.start.node !== this.cursor.textNode) {
        const s = this.scroll.find(r.start.node, !1);
        if (s == null)
          return;
        if (s instanceof Q) {
          const i = s.split(r.start.offset);
          s.parent.insertBefore(this.cursor, i);
        } else
          s.insertBefore(this.cursor, r.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const r = this.scroll.length();
    t = Math.min(t, r - 1), e = Math.min(t + e, r - 1) - t;
    let s, [i, o] = this.scroll.leaf(t);
    if (i == null)
      return null;
    if (e > 0 && o === i.length()) {
      const [d] = this.scroll.leaf(t + 1);
      if (d) {
        const [m] = this.scroll.line(t), [g] = this.scroll.line(t + 1);
        m === g && (i = d, o = 0);
      }
    }
    [s, o] = i.position(o, !0);
    const a = document.createRange();
    if (e > 0)
      return a.setStart(s, o), [i, o] = this.scroll.leaf(t + e), i == null ? null : ([s, o] = i.position(o, !0), a.setEnd(s, o), a.getBoundingClientRect());
    let c = "left", h;
    if (s instanceof Text) {
      if (!s.data.length)
        return null;
      o < s.data.length ? (a.setStart(s, o), a.setEnd(s, o + 1)) : (a.setStart(s, o - 1), a.setEnd(s, o), c = "right"), h = a.getBoundingClientRect();
    } else {
      if (!(i.domNode instanceof Element))
        return null;
      h = i.domNode.getBoundingClientRect(), o > 0 && (c = "right");
    }
    return {
      bottom: h.top + h.height,
      height: h.height,
      left: h[c],
      right: h[c],
      top: h.top,
      width: 0
    };
  }
  getNativeRange() {
    const t = document.getSelection();
    if (t == null || t.rangeCount <= 0)
      return null;
    const e = t.getRangeAt(0);
    if (e == null)
      return null;
    const r = this.normalizeNative(e);
    return Us.info("getNativeRange", r), r;
  }
  getRange() {
    const t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected)
      return [null, null];
    const e = this.getNativeRange();
    return e == null ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && Fs(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    const e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    const r = e.map((o) => {
      const [a, c] = o, h = this.scroll.find(a, !0), d = h.offset(this.scroll);
      return c === 0 ? d : h instanceof Q ? d + h.index(a, c) : d + h.length();
    }), s = Math.min(Math.max(...r), this.scroll.length() - 1), i = Math.min(s, ...r);
    return new me(i, s - i);
  }
  normalizeNative(t) {
    if (!Fs(this.root, t.startContainer) || !t.collapsed && !Fs(this.root, t.endContainer))
      return null;
    const e = {
      start: {
        node: t.startContainer,
        offset: t.startOffset
      },
      end: {
        node: t.endContainer,
        offset: t.endOffset
      },
      native: t
    };
    return [e.start, e.end].forEach((r) => {
      let {
        node: s,
        offset: i
      } = r;
      for (; !(s instanceof Text) && s.childNodes.length > 0; )
        if (s.childNodes.length > i)
          s = s.childNodes[i], i = 0;
        else if (s.childNodes.length === i)
          s = s.lastChild, s instanceof Text ? i = s.data.length : s.childNodes.length > 0 ? i = s.childNodes.length : i = s.childNodes.length + 1;
        else
          break;
      r.node = s, r.offset = i;
    }), e;
  }
  rangeToNative(t) {
    const e = this.scroll.length(), r = (s, i) => {
      s = Math.min(e - 1, s);
      const [o, a] = this.scroll.leaf(s);
      return o ? o.position(a, i) : [null, -1];
    };
    return [...r(t.index, !1), ...r(t.index + t.length, !0)];
  }
  setNativeRange(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (Us.info("setNativeRange", t, e, r, s), t != null && (this.root.parentNode == null || t.parentNode == null || // @ts-expect-error Fix me later
    r.parentNode == null))
      return;
    const o = document.getSelection();
    if (o != null)
      if (t != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: !0
        });
        const {
          native: a
        } = this.getNativeRange() || {};
        if (a == null || i || t !== a.startContainer || e !== a.startOffset || r !== a.endContainer || s !== a.endOffset) {
          t instanceof Element && t.tagName === "BR" && (e = Array.from(t.parentNode.childNodes).indexOf(t), t = t.parentNode), r instanceof Element && r.tagName === "BR" && (s = Array.from(r.parentNode.childNodes).indexOf(r), r = r.parentNode);
          const c = document.createRange();
          c.setStart(t, e), c.setEnd(r, s), o.removeAllRanges(), o.addRange(c);
        }
      } else
        o.removeAllRanges(), this.root.blur();
  }
  setRange(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : S.sources.API;
    if (typeof e == "string" && (r = e, e = !1), Us.info("setRange", t), t != null) {
      const s = this.rangeToNative(t);
      this.setNativeRange(...s, e);
    } else
      this.setNativeRange(null);
    this.update(r);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S.sources.USER;
    const e = this.lastRange, [r, s] = this.getRange();
    if (this.lastRange = r, this.lastNative = s, this.lastRange != null && (this.savedRange = this.lastRange), !Oi(e, this.lastRange)) {
      if (!this.composing && s != null && s.native.collapsed && s.start.node !== this.cursor.textNode) {
        const o = this.cursor.restore();
        o && this.setNativeRange(o.startNode, o.startOffset, o.endNode, o.endOffset);
      }
      const i = [S.events.SELECTION_CHANGE, je(this.lastRange), je(e), t];
      this.emitter.emit(S.events.EDITOR_CHANGE, ...i), t !== S.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function Fs(n, t) {
  try {
    t.parentNode;
  } catch (e) {
    return !1;
  }
  return n.contains(t);
}
const Hd = /^[ -~]*$/;
class zd {
  constructor(t) {
    this.scroll = t, this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    const r = Ol(t), s = new O();
    return Kd(r.ops.slice()).reduce((o, a) => {
      const c = ft.Op.length(a);
      let h = a.attributes || {}, d = !1, m = !1;
      if (a.insert != null) {
        if (s.retain(c), typeof a.insert == "string") {
          const b = a.insert;
          m = !b.endsWith(`
`) && (e <= o || !!this.scroll.descendant(ht, o)[0]), this.scroll.insertAt(o, b);
          const [E, v] = this.scroll.line(o);
          let y = Qt({}, ct(E));
          if (E instanceof Z) {
            const [w] = E.descendant(Q, v);
            w && (y = Qt(y, ct(w)));
          }
          h = ft.AttributeMap.diff(y, h) || {};
        } else if (typeof a.insert == "object") {
          const b = Object.keys(a.insert)[0];
          if (b == null)
            return o;
          const E = this.scroll.query(b, q.INLINE) != null;
          if (E)
            (e <= o || this.scroll.descendant(ht, o)[0]) && (m = !0);
          else if (o > 0) {
            const [v, y] = this.scroll.descendant(Q, o - 1);
            v instanceof At ? v.value()[y] !== `
` && (d = !0) : v instanceof lt && v.statics.scope === q.INLINE_BLOT && (d = !0);
          }
          if (this.scroll.insertAt(o, b, a.insert[b]), E) {
            const [v] = this.scroll.descendant(Q, o);
            if (v) {
              const y = Qt({}, ct(v));
              h = ft.AttributeMap.diff(y, h) || {};
            }
          }
        }
        e += c;
      } else if (s.push(a), a.retain !== null && typeof a.retain == "object") {
        const b = Object.keys(a.retain)[0];
        if (b == null)
          return o;
        this.scroll.updateEmbedAt(o, b, a.retain[b]);
      }
      Object.keys(h).forEach((b) => {
        this.scroll.formatAt(o, c, b, h[b]);
      });
      const g = d ? 1 : 0, p = m ? 1 : 0;
      return e += g + p, s.retain(g), s.delete(p), o + c + g + p;
    }, 0), s.reduce((o, a) => typeof a.delete == "number" ? (this.scroll.deleteAt(o, a.delete), o) : o + ft.Op.length(a), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(r);
  }
  deleteText(t, e) {
    return this.scroll.deleteAt(t, e), this.update(new O().retain(t).delete(e));
  }
  formatLine(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(r).forEach((i) => {
      this.scroll.lines(t, Math.max(e, 1)).forEach((o) => {
        o.format(i, r[i]);
      });
    }), this.scroll.optimize();
    const s = new O().retain(t).retain(e, je(r));
    return this.update(s);
  }
  formatText(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(r).forEach((i) => {
      this.scroll.formatAt(t, e, i, r[i]);
    });
    const s = new O().retain(t).retain(e, je(r));
    return this.update(s);
  }
  getContents(t, e) {
    return this.delta.slice(t, t + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t, e) => t.concat(e.delta()), new O());
  }
  getFormat(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = [], s = [];
    e === 0 ? this.scroll.path(t).forEach((a) => {
      const [c] = a;
      c instanceof Z ? r.push(c) : c instanceof Q && s.push(c);
    }) : (r = this.scroll.lines(t, e), s = this.scroll.descendants(Q, t, e));
    const [i, o] = [r, s].map((a) => {
      const c = a.shift();
      if (c == null)
        return {};
      let h = ct(c);
      for (; Object.keys(h).length > 0; ) {
        const d = a.shift();
        if (d == null)
          return h;
        h = Gd(ct(d), h);
      }
      return h;
    });
    return H(H({}, i), o);
  }
  getHTML(t, e) {
    const [r, s] = this.scroll.line(t);
    if (r) {
      const i = r.length();
      return r.length() >= s + e && !(s === 0 && e === i) ? _n(r, s, e, !0) : _n(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter((r) => typeof r.insert == "string").map((r) => r.insert).join("");
  }
  insertContents(t, e) {
    const r = Ol(e), s = new O().retain(t).concat(r);
    return this.scroll.insertContents(t, r), this.update(s);
  }
  insertEmbed(t, e, r) {
    return this.scroll.insertAt(t, e, r), this.update(new O().retain(t).insert({
      [e]: r
    }));
  }
  insertText(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e = e.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(t, e), Object.keys(r).forEach((s) => {
      this.scroll.formatAt(t, e.length, s, r[s]);
    }), this.update(new O().retain(t).insert(e, je(r)));
  }
  isBlank() {
    if (this.scroll.children.length === 0)
      return !0;
    if (this.scroll.children.length > 1)
      return !1;
    const t = this.scroll.children.head;
    if ((t == null ? void 0 : t.statics.blotName) !== Z.blotName)
      return !1;
    const e = t;
    return e.children.length > 1 ? !1 : e.children.head instanceof wt;
  }
  removeFormat(t, e) {
    const r = this.getText(t, e), [s, i] = this.scroll.line(t + e);
    let o = 0, a = new O();
    s != null && (o = s.length() - i, a = s.delta().slice(i, i + o - 1).insert(`
`));
    const h = this.getContents(t, e + o).diff(new O().insert(r).concat(a)), d = new O().retain(t).concat(h);
    return this.applyDelta(d);
  }
  update(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const s = this.delta;
    if (e.length === 1 && e[0].type === "characterData" && // @ts-expect-error Fix me later
    e[0].target.data.match(Hd) && this.scroll.find(e[0].target)) {
      const i = this.scroll.find(e[0].target), o = ct(i), a = i.offset(this.scroll), c = e[0].oldValue.replace(Ge.CONTENTS, ""), h = new O().insert(c), d = new O().insert(i.value()), m = r && {
        oldRange: ql(r.oldRange, -a),
        newRange: ql(r.newRange, -a)
      };
      t = new O().retain(a).concat(h.diff(d, m)).reduce((p, b) => b.insert ? p.insert(b.insert, o) : p.push(b), new O()), this.delta = s.compose(t);
    } else
      this.delta = this.getDelta(), (!t || !Oi(s.compose(t), this.delta)) && (t = s.diff(this.delta, r));
    return t;
  }
}
function De(n, t, e) {
  if (n.length === 0) {
    const [p] = Hs(e.pop());
    return t <= 0 ? `</li></${p}>` : `</li></${p}>${De([], t - 1, e)}`;
  }
  const [{
    child: r,
    offset: s,
    length: i,
    indent: o,
    type: a
  }, ...c] = n, [h, d] = Hs(a);
  if (o > t)
    return e.push(a), o === t + 1 ? `<${h}><li${d}>${_n(r, s, i)}${De(c, o, e)}` : `<${h}><li>${De(n, t + 1, e)}`;
  const m = e[e.length - 1];
  if (o === t && a === m)
    return `</li><li${d}>${_n(r, s, i)}${De(c, o, e)}`;
  const [g] = Hs(e.pop());
  return `</li></${g}>${De(n, t - 1, e)}`;
}
function _n(n, t, e) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in n && typeof n.html == "function")
    return n.html(t, e);
  if (n instanceof At)
    return Mr(n.value().slice(t, t + e));
  if (n instanceof Et) {
    if (n.statics.blotName === "list-container") {
      const h = [];
      return n.children.forEachAt(t, e, (d, m, g) => {
        const p = "formats" in d && typeof d.formats == "function" ? d.formats() : {};
        h.push({
          child: d,
          offset: m,
          length: g,
          indent: p.indent || 0,
          type: p.list
        });
      }), De(h, -1, []);
    }
    const s = [];
    if (n.children.forEachAt(t, e, (h, d, m) => {
      s.push(_n(h, d, m));
    }), r || n.statics.blotName === "list")
      return s.join("");
    const {
      outerHTML: i,
      innerHTML: o
    } = n.domNode, [a, c] = i.split(`>${o}<`);
    return a === "<table" ? `<table style="border: 1px solid #000;">${s.join("")}<${c}` : `${a}>${s.join("")}<${c}`;
  }
  return n.domNode instanceof Element ? n.domNode.outerHTML : "";
}
function Gd(n, t) {
  return Object.keys(t).reduce((e, r) => {
    if (n[r] == null)
      return e;
    const s = t[r];
    return s === n[r] ? e[r] = s : Array.isArray(s) ? s.indexOf(n[r]) < 0 ? e[r] = s.concat([n[r]]) : e[r] = s : e[r] = [s, n[r]], e;
  }, {});
}
function Hs(n) {
  const t = n === "ordered" ? "ol" : "ul";
  switch (n) {
    case "checked":
      return [t, ' data-list="checked"'];
    case "unchecked":
      return [t, ' data-list="unchecked"'];
    default:
      return [t, ""];
  }
}
function Ol(n) {
  return n.reduce((t, e) => {
    if (typeof e.insert == "string") {
      const r = e.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
      return t.insert(r, e.attributes);
    }
    return t.push(e);
  }, new O());
}
function ql(n, t) {
  let {
    index: e,
    length: r
  } = n;
  return new me(e + t, r);
}
function Kd(n) {
  const t = [];
  return n.forEach((e) => {
    typeof e.insert == "string" ? e.insert.split(`
`).forEach((s, i) => {
      i && t.push({
        insert: `
`,
        attributes: e.attributes
      }), s && t.push({
        insert: s,
        attributes: e.attributes
      });
    }) : t.push(e);
  }), t;
}
class jo {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t, this.options = e;
  }
}
x(jo, "DEFAULTS", {});
const kt = jo, gr = "\uFEFF";
class Mi extends lt {
  constructor(t, e) {
    super(t, e), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((r) => {
      this.contentNode.appendChild(r);
    }), this.leftGuard = document.createTextNode(gr), this.rightGuard = document.createTextNode(gr), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e = null, r;
    const s = t.data.split(gr).join("");
    if (t === this.leftGuard)
      if (this.prev instanceof At) {
        const i = this.prev.length();
        this.prev.insertAt(i, s), e = {
          startNode: this.prev.domNode,
          startOffset: i + s.length
        };
      } else
        r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this), e = {
          startNode: r,
          startOffset: s.length
        };
    else
      t === this.rightGuard && (this.next instanceof At ? (this.next.insertAt(0, s), e = {
        startNode: this.next.domNode,
        startOffset: s.length
      }) : (r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this.next), e = {
        startNode: r,
        startOffset: s.length
      }));
    return t.data = gr, e;
  }
  update(t, e) {
    t.forEach((r) => {
      if (r.type === "characterData" && (r.target === this.leftGuard || r.target === this.rightGuard)) {
        const s = this.restore(r.target);
        s && (e.range = s);
      }
    });
  }
}
class Vd {
  constructor(t, e) {
    x(this, "isComposing", !1);
    this.scroll = t, this.emitter = e, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (t) => {
      this.isComposing || this.handleCompositionStart(t);
    }), this.scroll.domNode.addEventListener("compositionend", (t) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(t);
      });
    });
  }
  handleCompositionStart(t) {
    const e = t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
    e && !(e instanceof Mi) && (this.emitter.emit(S.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(S.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(S.events.COMPOSITION_BEFORE_END, t), this.scroll.batchEnd(), this.emitter.emit(S.events.COMPOSITION_END, t), this.isComposing = !1;
  }
}
const En = class En {
  constructor(t, e) {
    x(this, "modules", {});
    this.quill = t, this.options = e;
  }
  init() {
    Object.keys(this.options.modules).forEach((t) => {
      this.modules[t] == null && this.addModule(t);
    });
  }
  addModule(t) {
    const e = this.quill.constructor.import(`modules/${t}`);
    return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t];
  }
};
x(En, "DEFAULTS", {
  modules: {}
}), x(En, "themes", {
  default: En
});
let Ke = En;
const Wd = (n) => n.parentElement || n.getRootNode().host || null, Zd = (n) => {
  const t = n.getBoundingClientRect(), e = "offsetWidth" in n && Math.abs(t.width) / n.offsetWidth || 1, r = "offsetHeight" in n && Math.abs(t.height) / n.offsetHeight || 1;
  return {
    top: t.top,
    right: t.left + n.clientWidth * e,
    bottom: t.top + n.clientHeight * r,
    left: t.left
  };
}, pr = (n) => {
  const t = parseInt(n, 10);
  return Number.isNaN(t) ? 0 : t;
}, Cl = (n, t, e, r, s, i) => n < e && t > r ? 0 : n < e ? -(e - n + s) : t > r ? t - n > r - e ? n + s - e : t - r + i : 0, Xd = (n, t) => {
  var i, o, a, c, h;
  const e = n.ownerDocument;
  let r = t, s = n;
  for (; s; ) {
    const d = s === e.body, m = d ? {
      top: 0,
      right: (o = (i = window.visualViewport) == null ? void 0 : i.width) != null ? o : e.documentElement.clientWidth,
      bottom: (c = (a = window.visualViewport) == null ? void 0 : a.height) != null ? c : e.documentElement.clientHeight,
      left: 0
    } : Zd(s), g = getComputedStyle(s), p = Cl(r.left, r.right, m.left, m.right, pr(g.scrollPaddingLeft), pr(g.scrollPaddingRight)), b = Cl(r.top, r.bottom, m.top, m.bottom, pr(g.scrollPaddingTop), pr(g.scrollPaddingBottom));
    if (p || b)
      if (d)
        (h = e.defaultView) == null || h.scrollBy(p, b);
      else {
        const {
          scrollLeft: E,
          scrollTop: v
        } = s;
        b && (s.scrollTop += b), p && (s.scrollLeft += p);
        const y = s.scrollLeft - E, w = s.scrollTop - v;
        r = {
          left: r.left - y,
          top: r.top - w,
          right: r.right - y,
          bottom: r.bottom - w
        };
      }
    s = d || g.position === "fixed" ? null : Wd(s);
  }
}, Yd = 100, Jd = ["block", "break", "cursor", "inline", "scroll", "text"], Qd = (n, t, e) => {
  const r = new ze();
  return Jd.forEach((s) => {
    const i = t.query(s);
    i && r.register(i);
  }), n.forEach((s) => {
    var a;
    let i = t.query(s);
    i || e.error(`Cannot register "${s}" specified in "formats" config. Are you sure it was registered?`);
    let o = 0;
    for (; i; )
      if (r.register(i), i = "blotName" in i && (a = i.requiredContainer) != null ? a : null, o += 1, o > Yd) {
        e.error(`Cycle detected in registering blot requiredContainer: "${s}"`);
        break;
      }
  }), r;
}, Fe = Gt("quill"), mr = new ze();
Et.uiClass = "ql-ui";
const yt = class yt {
  static debug(t) {
    t === !0 && (t = "log"), Gt.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return ci.get(t) || mr.find(t, e);
  }
  static import(t) {
    return this.imports[t] == null && Fe.error(`Cannot import ${t}. Are you sure it was registered?`), this.imports[t];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = !!(!(arguments.length <= 1) && arguments[1]), r = "attrName" in t ? t.attrName : t.blotName;
      typeof r == "string" ? this.register(`formats/${r}`, t, e) : Object.keys(t).forEach((s) => {
        this.register(s, t[s], e);
      });
    } else {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1], r = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t] != null && !r && Fe.warn(`Overwriting ${t} with`, e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && e && typeof e != "boolean" && e.blotName !== "abstract" && mr.register(e), typeof e.register == "function" && e.register(mr);
    }
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = tg(t, e), this.container = this.options.container, this.container == null) {
      Fe.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && yt.debug(this.options.debug);
    const r = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", ci.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new S();
    const s = Ci.blotName, i = this.options.registry.query(s);
    if (!i || !("blotName" in i))
      throw new Error(`Cannot initialize Quill without "${s}" blot`);
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new zd(this.scroll), this.selection = new Fd(this.scroll, this.emitter), this.composition = new Vd(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(S.events.EDITOR_CHANGE, (o) => {
      o === S.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(S.events.SCROLL_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), d = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      bt.call(this, () => this.editor.update(null, a, d), o);
    }), this.emitter.on(S.events.SCROLL_EMBED_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), d = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      bt.call(this, () => {
        const m = new O().retain(o.offset(this)).retain({
          [o.statics.blotName]: a
        });
        return this.editor.update(m, [], d);
      }, yt.sources.USER);
    }), r) {
      const o = this.clipboard.convert({
        html: `${r}<p><br></p>`,
        text: `
`
      });
      this.setContents(o);
    }
    this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
  }
  addContainer(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof t == "string") {
      const r = t;
      t = document.createElement("div"), t.classList.add(r);
    }
    return this.container.insertBefore(t, e), t;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t, e, r) {
    return [t, e, , r] = jt(t, e, r), bt.call(this, () => this.editor.deleteText(t, e), r, t, -1 * e);
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(t) {
    this.allowReadOnlyEdits = !0;
    const e = t();
    return this.allowReadOnlyEdits = !1, e;
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
  }
  focus() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), t.preventScroll || this.scrollSelectionIntoView();
  }
  format(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : S.sources.API;
    return bt.call(this, () => {
      const s = this.getSelection(!0);
      let i = new O();
      if (s == null)
        return i;
      if (this.scroll.query(t, q.BLOCK))
        i = this.editor.formatLine(s.index, s.length, {
          [t]: e
        });
      else {
        if (s.length === 0)
          return this.selection.format(t, e), i;
        i = this.editor.formatText(s.index, s.length, {
          [t]: e
        });
      }
      return this.setSelection(s, S.sources.SILENT), i;
    }, r);
  }
  formatLine(t, e, r, s, i) {
    let o;
    return [t, e, o, i] = jt(
      t,
      e,
      // @ts-expect-error
      r,
      s,
      i
    ), bt.call(this, () => this.editor.formatLine(t, e, o), i, t, 0);
  }
  formatText(t, e, r, s, i) {
    let o;
    return [t, e, o, i] = jt(
      // @ts-expect-error
      t,
      e,
      r,
      s,
      i
    ), bt.call(this, () => this.editor.formatText(t, e, o), i, t, 0);
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = null;
    if (typeof t == "number" ? r = this.selection.getBounds(t, e) : r = this.selection.getBounds(t.index, t.length), !r)
      return null;
    const s = this.container.getBoundingClientRect();
    return {
      bottom: r.bottom - s.top,
      height: r.height,
      left: r.left - s.left,
      right: r.right - s.left,
      top: r.top - s.top,
      width: r.width
    };
  }
  getContents() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - t;
    return [t, e] = jt(t, e), this.editor.getContents(t, e);
  }
  getFormat() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof t == "number" ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
  }
  getIndex(t) {
    return t.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t) {
    return this.scroll.leaf(t);
  }
  getLine(t) {
    return this.scroll.line(t);
  }
  getLines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof t != "number" ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
  }
  getModule(t) {
    return this.theme.modules[t];
  }
  getSelection() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e != null ? e : this.getLength() - t), [t, e] = jt(t, e), this.editor.getHTML(t, e);
  }
  getText() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e != null ? e : this.getLength() - t), [t, e] = jt(t, e), this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : yt.sources.API;
    return bt.call(this, () => this.editor.insertEmbed(t, e, r), s, t);
  }
  insertText(t, e, r, s, i) {
    let o;
    return [t, , o, i] = jt(t, 0, r, s, i), bt.call(this, () => this.editor.insertText(t, e, o), i, t, e.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(t, e, r) {
    return [t, e, , r] = jt(t, e, r), bt.call(this, () => this.editor.removeFormat(t, e), r, t);
  }
  scrollRectIntoView(t) {
    Xd(this.root, t);
  }
  /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
  }
  /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */
  scrollSelectionIntoView() {
    const t = this.selection.lastRange, e = t && this.selection.getBounds(t.index, t.length);
    e && this.scrollRectIntoView(e);
  }
  setContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.sources.API;
    return bt.call(this, () => {
      t = new O(t);
      const r = this.getLength(), s = this.editor.deleteText(0, r), i = this.editor.insertContents(0, t), o = this.editor.deleteText(this.getLength() - 1, 1);
      return s.compose(i).compose(o);
    }, e);
  }
  setSelection(t, e, r) {
    t == null ? this.selection.setRange(null, e || yt.sources.API) : ([t, e, , r] = jt(t, e, r), this.selection.setRange(new me(Math.max(0, t), e), r), r !== S.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.sources.API;
    const r = new O().insert(t);
    return this.setContents(r, e);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S.sources.USER;
    const e = this.scroll.update(t);
    return this.selection.update(t), e;
  }
  updateContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.sources.API;
    return bt.call(this, () => (t = new O(t), this.editor.applyDelta(t)), e, !0);
  }
};
x(yt, "DEFAULTS", {
  bounds: null,
  modules: {
    clipboard: !0,
    keyboard: !0,
    history: !0,
    uploader: !0
  },
  placeholder: "",
  readOnly: !1,
  registry: mr,
  theme: "default"
}), x(yt, "events", S.events), x(yt, "sources", S.sources), x(yt, "version", "2.0.2"), x(yt, "imports", {
  delta: O,
  parchment: xd,
  "core/module": kt,
  "core/theme": Ke
});
let N = yt;
function Il(n) {
  return typeof n == "string" ? document.querySelector(n) : n;
}
function zs(n) {
  return Object.entries(n != null ? n : {}).reduce((t, e) => {
    let [r, s] = e;
    return fe(H({}, t), {
      [r]: s === !0 ? {} : s
    });
  }, {});
}
function Rl(n) {
  return Object.fromEntries(Object.entries(n).filter((t) => t[1] !== void 0));
}
function tg(n, t) {
  const e = Il(n);
  if (!e)
    throw new Error("Invalid Quill container");
  const s = !t.theme || t.theme === N.DEFAULTS.theme ? Ke : N.import(`themes/${t.theme}`);
  if (!s)
    throw new Error(`Invalid theme ${t.theme}. Did you register it?`);
  const p = N.DEFAULTS, {
    modules: i
  } = p, o = ks(p, [
    "modules"
  ]), b = s.DEFAULTS, {
    modules: a
  } = b, c = ks(b, [
    "modules"
  ]);
  let h = zs(t.modules);
  h != null && h.toolbar && h.toolbar.constructor !== Object && (h = fe(H({}, h), {
    toolbar: {
      container: h.toolbar
    }
  }));
  const d = Qt({}, zs(i), zs(a), h), m = H(H(H({}, o), Rl(c)), Rl(t));
  let g = t.registry;
  return g ? t.formats && Fe.warn('Ignoring "formats" option because "registry" is specified') : g = t.formats ? Qd(t.formats, m.registry, Fe) : m.registry, fe(H({}, m), {
    registry: g,
    container: e,
    theme: s,
    modules: Object.entries(d).reduce((E, v) => {
      let [y, w] = v;
      if (!w)
        return E;
      const T = N.import(`modules/${y}`);
      return T == null ? (Fe.error(`Cannot load ${y} module. Are you sure you registered it?`), E) : fe(H({}, E), {
        // @ts-expect-error
        [y]: Qt({}, T.DEFAULTS || {}, w)
      });
    }, {}),
    bounds: Il(m.bounds)
  });
}
function bt(n, t, e, r) {
  if (!this.isEnabled() && t === S.sources.USER && !this.allowReadOnlyEdits)
    return new O();
  let s = e == null ? null : this.getSelection();
  const i = this.editor.delta, o = n();
  if (s != null && (e === !0 && (e = s.index), r == null ? s = kl(s, o, t) : r !== 0 && (s = kl(s, e, r, t)), this.setSelection(s, S.sources.SILENT)), o.length() > 0) {
    const a = [S.events.TEXT_CHANGE, o, i, t];
    this.emitter.emit(S.events.EDITOR_CHANGE, ...a), t !== S.sources.SILENT && this.emitter.emit(...a);
  }
  return o;
}
function jt(n, t, e, r, s) {
  let i = {};
  return typeof n.index == "number" && typeof n.length == "number" ? typeof t != "number" ? (s = r, r = e, e = t, t = n.length, n = n.index) : (t = n.length, n = n.index) : typeof t != "number" && (s = r, r = e, e = t, t = 0), typeof e == "object" ? (i = e, s = r) : typeof e == "string" && (r != null ? i[e] = r : s = e), s = s || S.sources.API, [n, t, i, s];
}
function kl(n, t, e, r) {
  const s = typeof e == "number" ? e : 0;
  if (n == null)
    return null;
  let i, o;
  return t && typeof t.transformPosition == "function" ? [i, o] = [n.index, n.index + n.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t.transformPosition(a, r !== S.sources.USER)
  )) : [i, o] = [n.index, n.index + n.length].map((a) => a < t || a === t && r === S.sources.USER ? a : s >= 0 ? a + s : Math.max(t, a + s)), new me(i, o - i);
}
class Ee extends Ir {
}
function Bl(n) {
  return n instanceof Z || n instanceof ht;
}
function Ml(n) {
  return typeof n.updateContent == "function";
}
class Pe extends Ci {
  constructor(t, e, r) {
    let {
      emitter: s
    } = r;
    super(t, e), this.emitter = s, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i) => this.handleDragStart(i));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch)
      return;
    const t = this.batch;
    this.batch = !1, this.update(t);
  }
  emitMount(t) {
    this.emitter.emit(S.events.SCROLL_BLOT_MOUNT, t);
  }
  emitUnmount(t) {
    this.emitter.emit(S.events.SCROLL_BLOT_UNMOUNT, t);
  }
  emitEmbedUpdate(t, e) {
    this.emitter.emit(S.events.SCROLL_EMBED_UPDATE, t, e);
  }
  deleteAt(t, e) {
    const [r, s] = this.line(t), [i] = this.line(t + e);
    if (super.deleteAt(t, e), i != null && r !== i && s > 0) {
      if (r instanceof ht || i instanceof ht) {
        this.optimize();
        return;
      }
      const o = i.children.head instanceof wt ? null : i.children.head;
      r.moveChildren(i, o), r.remove();
    }
    this.optimize();
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.domNode.setAttribute("contenteditable", t ? "true" : "false");
  }
  formatAt(t, e, r, s) {
    super.formatAt(t, e, r, s), this.optimize();
  }
  insertAt(t, e, r) {
    if (t >= this.length())
      if (r == null || this.scroll.query(e, q.BLOCK) == null) {
        const s = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(s), r == null && e.endsWith(`
`) ? s.insertAt(0, e.slice(0, -1), r) : s.insertAt(0, e, r);
      } else {
        const s = this.scroll.create(e, r);
        this.appendChild(s);
      }
    else
      super.insertAt(t, e, r);
    this.optimize();
  }
  insertBefore(t, e) {
    if (t.statics.scope === q.INLINE_BLOT) {
      const r = this.scroll.create(this.statics.defaultChild.blotName);
      r.appendChild(t), super.insertBefore(r, e);
    } else
      super.insertBefore(t, e);
  }
  insertContents(t, e) {
    const r = this.deltaToRenderBlocks(e.concat(new O().insert(`
`))), s = r.pop();
    if (s == null)
      return;
    this.batchStart();
    const i = r.shift();
    if (i) {
      const c = i.type === "block" && (i.delta.length() === 0 || !this.descendant(ht, t)[0] && t < this.length()), h = i.type === "block" ? i.delta : new O().insert({
        [i.key]: i.value
      });
      Gs(this, t, h);
      const d = i.type === "block" ? 1 : 0, m = t + h.length() + d;
      c && this.insertAt(m - 1, `
`);
      const g = ct(this.line(t)[0]), p = ft.AttributeMap.diff(g, i.attributes) || {};
      Object.keys(p).forEach((b) => {
        this.formatAt(m - 1, 1, b, p[b]);
      }), t = m;
    }
    let [o, a] = this.children.find(t);
    if (r.length && (o && (o = o.split(a), a = 0), r.forEach((c) => {
      if (c.type === "block") {
        const h = this.createBlock(c.attributes, o || void 0);
        Gs(h, 0, c.delta);
      } else {
        const h = this.create(c.key, c.value);
        this.insertBefore(h, o || void 0), Object.keys(c.attributes).forEach((d) => {
          h.format(d, c.attributes[d]);
        });
      }
    })), s.type === "block" && s.delta.length()) {
      const c = o ? o.offset(o.scroll) + a : this.length();
      Gs(this, c, s.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(t) {
    const e = this.path(t).pop();
    if (!e)
      return [null, -1];
    const [r, s] = e;
    return r instanceof Q ? [r, s] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(Bl, t);
  }
  lines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const r = (s, i, o) => {
      let a = [], c = o;
      return s.children.forEachAt(i, o, (h, d, m) => {
        Bl(h) ? a.push(h) : h instanceof Ir && (a = a.concat(r(h, d, c))), c -= m;
      }), a;
    };
    return r(this, t, e);
  }
  optimize() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(t, e), t.length > 0 && this.emitter.emit(S.events.SCROLL_OPTIMIZE, t, e));
  }
  path(t) {
    return super.path(t).slice(1);
  }
  remove() {
  }
  update(t) {
    if (this.batch) {
      Array.isArray(t) && (this.batch = this.batch.concat(t));
      return;
    }
    let e = S.sources.USER;
    typeof t == "string" && (e = t), Array.isArray(t) || (t = this.observer.takeRecords()), t = t.filter((r) => {
      let {
        target: s
      } = r;
      const i = this.find(s, !0);
      return i && !Ml(i);
    }), t.length > 0 && this.emitter.emit(S.events.SCROLL_BEFORE_UPDATE, e, t), super.update(t.concat([])), t.length > 0 && this.emitter.emit(S.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, r) {
    const [s] = this.descendant((i) => i instanceof ht, t);
    s && s.statics.blotName === e && Ml(s) && s.updateContent(r);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    const e = [];
    let r = new O();
    return t.forEach((s) => {
      var o;
      const i = s == null ? void 0 : s.insert;
      if (i)
        if (typeof i == "string") {
          const a = i.split(`
`);
          a.slice(0, -1).forEach((h) => {
            var d;
            r.insert(h, s.attributes), e.push({
              type: "block",
              delta: r,
              attributes: (d = s.attributes) != null ? d : {}
            }), r = new O();
          });
          const c = a[a.length - 1];
          c && r.insert(c, s.attributes);
        } else {
          const a = Object.keys(i)[0];
          if (!a)
            return;
          this.query(a, q.INLINE) ? r.push(s) : (r.length() && e.push({
            type: "block",
            delta: r,
            attributes: {}
          }), r = new O(), e.push({
            type: "blockEmbed",
            key: a,
            value: i[a],
            attributes: (o = s.attributes) != null ? o : {}
          }));
        }
    }), r.length() && e.push({
      type: "block",
      delta: r,
      attributes: {}
    }), e;
  }
  createBlock(t, e) {
    let r;
    const s = {};
    Object.entries(t).forEach((a) => {
      let [c, h] = a;
      this.query(c, q.BLOCK & q.BLOT) != null ? r = c : s[c] = h;
    });
    const i = this.create(r || this.statics.defaultChild.blotName, r ? t[r] : void 0);
    this.insertBefore(i, e || void 0);
    const o = i.length();
    return Object.entries(s).forEach((a) => {
      let [c, h] = a;
      i.formatAt(0, o, c, h);
    }), i;
  }
}
x(Pe, "blotName", "scroll"), x(Pe, "className", "ql-editor"), x(Pe, "tagName", "DIV"), x(Pe, "defaultChild", Z), x(Pe, "allowedChildren", [Z, ht, Ee]);
function Gs(n, t, e) {
  e.reduce((r, s) => {
    const i = ft.Op.length(s);
    let o = s.attributes || {};
    if (s.insert != null) {
      if (typeof s.insert == "string") {
        const a = s.insert;
        n.insertAt(r, a);
        const [c] = n.descendant(Q, r), h = ct(c);
        o = ft.AttributeMap.diff(h, o) || {};
      } else if (typeof s.insert == "object") {
        const a = Object.keys(s.insert)[0];
        if (a == null)
          return r;
        if (n.insertAt(r, a, s.insert[a]), n.scroll.query(a, q.INLINE) != null) {
          const [h] = n.descendant(Q, r), d = ct(h);
          o = ft.AttributeMap.diff(d, o) || {};
        }
      }
    }
    return Object.keys(o).forEach((a) => {
      n.formatAt(r, i, a, o[a]);
    }), r + i;
  }, t);
}
const $i = {
  scope: q.BLOCK,
  whitelist: ["right", "center", "justify"]
}, eg = new Ct("align", "align", $i), Uo = new Nt("align", "ql-align", $i), Fo = new ne("align", "text-align", $i);
class Ho extends ne {
  value(t) {
    let e = super.value(t);
    return e.startsWith("rgb(") ? (e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${e.split(",").map((s) => `00${parseInt(s, 10).toString(16)}`.slice(-2)).join("")}`) : e;
  }
}
const ng = new Nt("color", "ql-color", {
  scope: q.INLINE
}), Di = new Ho("color", "color", {
  scope: q.INLINE
}), rg = new Nt("background", "ql-bg", {
  scope: q.INLINE
}), Pi = new Ho("background", "background-color", {
  scope: q.INLINE
});
class Ae extends Ee {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("spellcheck", "false"), e;
  }
  code(t, e) {
    return this.children.map((r) => r.length() <= 1 ? "" : r.domNode.innerText).join(`
`).slice(t, t + e);
  }
  html(t, e) {
    return `<pre>
${Mr(this.code(t, e))}
</pre>`;
  }
}
class tt extends Z {
  static register() {
    N.register(Ae);
  }
}
x(tt, "TAB", "  ");
class ji extends It {
}
ji.blotName = "code";
ji.tagName = "CODE";
tt.blotName = "code-block";
tt.className = "ql-code-block";
tt.tagName = "DIV";
Ae.blotName = "code-block-container";
Ae.className = "ql-code-block-container";
Ae.tagName = "DIV";
Ae.allowedChildren = [tt];
tt.allowedChildren = [At, wt, Ge];
tt.requiredContainer = Ae;
const Ui = {
  scope: q.BLOCK,
  whitelist: ["rtl"]
}, zo = new Ct("direction", "dir", Ui), Go = new Nt("direction", "ql-direction", Ui), Ko = new ne("direction", "direction", Ui), Vo = {
  scope: q.INLINE,
  whitelist: ["serif", "monospace"]
}, Wo = new Nt("font", "ql-font", Vo);
class sg extends ne {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
const Zo = new sg("font", "font-family", Vo), Xo = new Nt("size", "ql-size", {
  scope: q.INLINE,
  whitelist: ["small", "large", "huge"]
}), Yo = new ne("size", "font-size", {
  scope: q.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), ig = Gt("quill:keyboard"), lg = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class $r extends kt {
  static match(t, e) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((r) => !!e[r] !== t[r] && e[r] !== null) ? !1 : e.key === t.key || e.key === t.which;
  }
  constructor(t, e) {
    super(t, e), this.bindings = {}, Object.keys(this.options.bindings).forEach((r) => {
      this.options.bindings[r] && this.addBinding(this.options.bindings[r]);
    }), this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter), this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0,
      suffix: /^.?$/
    }, this.handleDelete)), this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: !0,
      offset: 0
    }, this.handleBackspace), this.listen();
  }
  addBinding(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = ag(t);
    if (s == null) {
      ig.warn("Attempted to add invalid keyboard binding", s);
      return;
    }
    typeof e == "function" && (e = {
      handler: e
    }), typeof r == "function" && (r = {
      handler: r
    }), (Array.isArray(s.key) ? s.key : [s.key]).forEach((o) => {
      const a = H(H(fe(H({}, s), {
        key: o
      }), e), r);
      this.bindings[a.key] = this.bindings[a.key] || [], this.bindings[a.key].push(a);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t) => {
      if (t.defaultPrevented || t.isComposing || t.keyCode === 229 && (t.key === "Enter" || t.key === "Backspace"))
        return;
      const s = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((y) => $r.match(t, y));
      if (s.length === 0)
        return;
      const i = N.find(t.target, !0);
      if (i && i.scroll !== this.quill.scroll)
        return;
      const o = this.quill.getSelection();
      if (o == null || !this.quill.hasFocus())
        return;
      const [a, c] = this.quill.getLine(o.index), [h, d] = this.quill.getLeaf(o.index), [m, g] = o.length === 0 ? [h, d] : this.quill.getLeaf(o.index + o.length), p = h instanceof xr ? h.value().slice(0, d) : "", b = m instanceof xr ? m.value().slice(g) : "", E = {
        collapsed: o.length === 0,
        // @ts-expect-error Fix me later
        empty: o.length === 0 && a.length() <= 1,
        format: this.quill.getFormat(o),
        line: a,
        offset: c,
        prefix: p,
        suffix: b,
        event: t
      };
      s.some((y) => {
        if (y.collapsed != null && y.collapsed !== E.collapsed || y.empty != null && y.empty !== E.empty || y.offset != null && y.offset !== E.offset)
          return !1;
        if (Array.isArray(y.format)) {
          if (y.format.every((w) => E.format[w] == null))
            return !1;
        } else if (typeof y.format == "object" && !Object.keys(y.format).every((w) => y.format[w] === !0 ? E.format[w] != null : y.format[w] === !1 ? E.format[w] == null : Oi(y.format[w], E.format[w])))
          return !1;
        return y.prefix != null && !y.prefix.test(E.prefix) || y.suffix != null && !y.suffix.test(E.suffix) ? !1 : y.handler.call(this, o, E, y) !== !0;
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    const r = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (t.index === 0 || this.quill.getLength() <= 1)
      return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let o = new O().retain(t.index - r).delete(r);
    if (e.offset === 0) {
      const [a] = this.quill.getLine(t.index - 1);
      if (a && !(a.statics.blotName === "block" && a.length() <= 1)) {
        const h = i.formats(), d = this.quill.getFormat(t.index - 1, 1);
        if (s = ft.AttributeMap.diff(h, d) || {}, Object.keys(s).length > 0) {
          const m = new O().retain(t.index + i.length() - 2).retain(1, s);
          o = o.compose(m);
        }
      }
    }
    this.quill.updateContents(o, N.sources.USER), this.quill.focus();
  }
  handleDelete(t, e) {
    const r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - r)
      return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let o = new O().retain(t.index).delete(r);
    if (e.offset >= i.length() - 1) {
      const [a] = this.quill.getLine(t.index + 1);
      if (a) {
        const c = i.formats(), h = this.quill.getFormat(t.index, 1);
        s = ft.AttributeMap.diff(c, h) || {}, Object.keys(s).length > 0 && (o = o.retain(a.length() - 1).retain(1, s));
      }
    }
    this.quill.updateContents(o, N.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t) {
    Fi({
      range: t,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t, e) {
    const r = Object.keys(e.format).reduce((i, o) => (this.quill.scroll.query(o, q.BLOCK) && !Array.isArray(e.format[o]) && (i[o] = e.format[o]), i), {}), s = new O().retain(t.index).delete(t.length).insert(`
`, r);
    this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(t.index + 1, N.sources.SILENT), this.quill.focus();
  }
}
const og = {
  bindings: {
    bold: Ks("bold"),
    italic: Ks("italic"),
    underline: Ks("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(n, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", N.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(n, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", N.sources.USER), !1);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(n, t) {
        t.format.indent != null ? this.quill.format("indent", "-1", N.sources.USER) : t.format.list != null && this.quill.format("list", !1, N.sources.USER);
      }
    },
    "indent code-block": $l(!0),
    "outdent code-block": $l(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(n) {
        this.quill.deleteText(n.index - 1, 1, N.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(n, t) {
        if (t.format.table)
          return !0;
        this.quill.history.cutoff();
        const e = new O().retain(n.index).delete(n.length).insert("	");
        return this.quill.updateContents(e, N.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index + 1, N.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, N.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(n, t) {
        const e = {
          list: !1
        };
        t.format.indent && (e.indent = !1), this.quill.formatLine(n.index, n.length, e, N.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: {
        list: "checked"
      },
      handler(n) {
        const [t, e] = this.quill.getLine(n.index), r = fe(H({}, t.formats()), {
          list: "checked"
        }), s = new O().retain(n.index).insert(`
`, r).retain(t.length() - e - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(n.index + 1, N.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(n, t) {
        const [e, r] = this.quill.getLine(n.index), s = new O().retain(n.index).insert(`
`, t.format).retain(e.length() - r - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(n.index + 1, N.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {
      }
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {
      }
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(n) {
        const t = this.quill.getModule("table");
        if (t) {
          const [e, r, s, i] = t.getTable(n), o = cg(e, r, s, i);
          if (o == null)
            return;
          let a = e.offset();
          if (o < 0) {
            const c = new O().retain(a).insert(`
`);
            this.quill.updateContents(c, N.sources.USER), this.quill.setSelection(n.index + 1, n.length, N.sources.SILENT);
          } else if (o > 0) {
            a += e.length();
            const c = new O().retain(a).insert(`
`);
            this.quill.updateContents(c, N.sources.USER), this.quill.setSelection(a, N.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(n, t) {
        const {
          event: e,
          line: r
        } = t, s = r.offset(this.quill.scroll);
        e.shiftKey ? this.quill.setSelection(s - 1, N.sources.USER) : this.quill.setSelection(s + r.length(), N.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: {
        "code-block": !1,
        blockquote: !1,
        table: !1
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(n, t) {
        if (this.quill.scroll.query("list") == null)
          return !0;
        const {
          length: e
        } = t.prefix, [r, s] = this.quill.getLine(n.index);
        if (s > e)
          return !0;
        let i;
        switch (t.prefix.trim()) {
          case "[]":
          case "[ ]":
            i = "unchecked";
            break;
          case "[x]":
            i = "checked";
            break;
          case "-":
          case "*":
            i = "bullet";
            break;
          default:
            i = "ordered";
        }
        this.quill.insertText(n.index, " ", N.sources.USER), this.quill.history.cutoff();
        const o = new O().retain(n.index - s).delete(e + 1).retain(r.length() - 2 - s).retain(1, {
          list: i
        });
        return this.quill.updateContents(o, N.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index - e, N.sources.SILENT), !1;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(n) {
        const [t, e] = this.quill.getLine(n.index);
        let r = 2, s = t;
        for (; s != null && s.length() <= 1 && s.formats()["code-block"]; )
          if (s = s.prev, r -= 1, r <= 0) {
            const i = new O().retain(n.index + t.length() - e - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, N.sources.USER), this.quill.setSelection(n.index - 1, N.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": br("ArrowLeft", !1),
    "embed left shift": br("ArrowLeft", !0),
    "embed right": br("ArrowRight", !1),
    "embed right shift": br("ArrowRight", !0),
    "table down": Dl(!1),
    "table up": Dl(!0)
  }
};
$r.DEFAULTS = og;
function $l(n) {
  return {
    key: "Tab",
    shiftKey: !n,
    format: {
      "code-block": !0
    },
    handler(t, e) {
      let {
        event: r
      } = e;
      const s = this.quill.scroll.query("code-block"), {
        TAB: i
      } = s;
      if (t.length === 0 && !r.shiftKey) {
        this.quill.insertText(t.index, i, N.sources.USER), this.quill.setSelection(t.index + i.length, N.sources.SILENT);
        return;
      }
      const o = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t);
      let {
        index: a,
        length: c
      } = t;
      o.forEach((h, d) => {
        n ? (h.insertAt(0, i), d === 0 ? a += i.length : c += i.length) : h.domNode.textContent.startsWith(i) && (h.deleteAt(0, i.length), d === 0 ? a -= i.length : c -= i.length);
      }), this.quill.update(N.sources.USER), this.quill.setSelection(a, c, N.sources.SILENT);
    }
  };
}
function br(n, t) {
  return {
    key: n,
    shiftKey: t,
    altKey: null,
    [n === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(r) {
      let {
        index: s
      } = r;
      n === "ArrowRight" && (s += r.length + 1);
      const [i] = this.quill.getLeaf(s);
      return i instanceof lt ? (n === "ArrowLeft" ? t ? this.quill.setSelection(r.index - 1, r.length + 1, N.sources.USER) : this.quill.setSelection(r.index - 1, N.sources.USER) : t ? this.quill.setSelection(r.index, r.length + 1, N.sources.USER) : this.quill.setSelection(r.index + r.length + 1, N.sources.USER), !1) : !0;
    }
  };
}
function Ks(n) {
  return {
    key: n[0],
    shortKey: !0,
    handler(t, e) {
      this.quill.format(n, !e.format[n], N.sources.USER);
    }
  };
}
function Dl(n) {
  return {
    key: n ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(t, e) {
      const r = n ? "prev" : "next", s = e.line, i = s.parent[r];
      if (i != null) {
        if (i.statics.blotName === "table-row") {
          let o = i.children.head, a = s;
          for (; a.prev != null; )
            a = a.prev, o = o.next;
          const c = o.offset(this.quill.scroll) + Math.min(e.offset, o.length() - 1);
          this.quill.setSelection(c, 0, N.sources.USER);
        }
      } else {
        const o = s.table()[r];
        o != null && (n ? this.quill.setSelection(o.offset(this.quill.scroll) + o.length() - 1, 0, N.sources.USER) : this.quill.setSelection(o.offset(this.quill.scroll), 0, N.sources.USER));
      }
      return !1;
    }
  };
}
function ag(n) {
  if (typeof n == "string" || typeof n == "number")
    n = {
      key: n
    };
  else if (typeof n == "object")
    n = je(n);
  else
    return null;
  return n.shortKey && (n[lg] = n.shortKey, delete n.shortKey), n;
}
function Fi(n) {
  let {
    quill: t,
    range: e
  } = n;
  const r = t.getLines(e);
  let s = {};
  if (r.length > 1) {
    const i = r[0].formats(), o = r[r.length - 1].formats();
    s = ft.AttributeMap.diff(o, i) || {};
  }
  t.deleteText(e, N.sources.USER), Object.keys(s).length > 0 && t.formatLine(e.index, 1, s, N.sources.USER), t.setSelection(e.index, N.sources.SILENT);
}
function cg(n, t, e, r) {
  return t.prev == null && t.next == null ? e.prev == null && e.next == null ? r === 0 ? -1 : 1 : e.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
const ug = /font-weight:\s*normal/, hg = ["P", "OL", "UL"], Pl = (n) => n && hg.includes(n.tagName), fg = (n) => {
  Array.from(n.querySelectorAll("br")).filter((t) => Pl(t.previousElementSibling) && Pl(t.nextElementSibling)).forEach((t) => {
    var e;
    (e = t.parentNode) == null || e.removeChild(t);
  });
}, dg = (n) => {
  Array.from(n.querySelectorAll('b[style*="font-weight"]')).filter((t) => {
    var e;
    return (e = t.getAttribute("style")) == null ? void 0 : e.match(ug);
  }).forEach((t) => {
    var r;
    const e = n.createDocumentFragment();
    e.append(...t.childNodes), (r = t.parentNode) == null || r.replaceChild(e, t);
  });
};
function gg(n) {
  n.querySelector('[id^="docs-internal-guid-"]') && (dg(n), fg(n));
}
const pg = /\bmso-list:[^;]*ignore/i, mg = /\bmso-list:[^;]*\bl(\d+)/i, bg = /\bmso-list:[^;]*\blevel(\d+)/i, yg = (n, t) => {
  const e = n.getAttribute("style"), r = e == null ? void 0 : e.match(mg);
  if (!r)
    return null;
  const s = Number(r[1]), i = e == null ? void 0 : e.match(bg), o = i ? Number(i[1]) : 1, a = new RegExp(`@list l${s}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = t.match(a), h = c && c[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s,
    indent: o,
    type: h,
    element: n
  };
}, vg = (n) => {
  var o, a;
  const t = Array.from(n.querySelectorAll("[style*=mso-list]")), e = [], r = [];
  t.forEach((c) => {
    (c.getAttribute("style") || "").match(pg) ? e.push(c) : r.push(c);
  }), e.forEach((c) => {
    var h;
    return (h = c.parentNode) == null ? void 0 : h.removeChild(c);
  });
  const s = n.documentElement.innerHTML, i = r.map((c) => yg(c, s)).filter((c) => c);
  for (; i.length; ) {
    const c = [];
    let h = i.shift();
    for (; h; )
      c.push(h), h = i.length && ((o = i[0]) == null ? void 0 : o.element) === h.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === h.id ? i.shift() : null;
    const d = document.createElement("ul");
    c.forEach((p) => {
      const b = document.createElement("li");
      b.setAttribute("data-list", p.type), p.indent > 1 && b.setAttribute("class", `ql-indent-${p.indent - 1}`), b.innerHTML = p.element.innerHTML, d.appendChild(b);
    });
    const m = (a = c[0]) == null ? void 0 : a.element, {
      parentNode: g
    } = m != null ? m : {};
    m && (g == null || g.replaceChild(d, m)), c.slice(1).forEach((p) => {
      let {
        element: b
      } = p;
      g == null || g.removeChild(b);
    });
  }
};
function Eg(n) {
  n.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && vg(n);
}
const Ag = [Eg, gg], Ng = (n) => {
  n.documentElement && Ag.forEach((t) => {
    t(n);
  });
}, wg = Gt("quill:clipboard"), Tg = [[Node.TEXT_NODE, Mg], [Node.TEXT_NODE, Ul], ["br", Og], [Node.ELEMENT_NODE, Ul], [Node.ELEMENT_NODE, _g], [Node.ELEMENT_NODE, Sg], [Node.ELEMENT_NODE, kg], ["li", Ig], ["ol, ul", Rg], ["pre", qg], ["tr", Bg], ["b", Vs("bold")], ["i", Vs("italic")], ["strike", Vs("strike")], ["style", Cg]], xg = [eg, zo].reduce((n, t) => (n[t.keyName] = t, n), {}), jl = [Fo, Pi, Di, Ko, Zo, Yo].reduce((n, t) => (n[t.keyName] = t, n), {});
class Jo extends kt {
  constructor(t, e) {
    var r;
    super(t, e), this.quill.root.addEventListener("copy", (s) => this.onCaptureCopy(s, !1)), this.quill.root.addEventListener("cut", (s) => this.onCaptureCopy(s, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], Tg.concat((r = this.options.matchers) != null ? r : []).forEach((s) => {
      let [i, o] = s;
      this.addMatcher(i, o);
    });
  }
  addMatcher(t, e) {
    this.matchers.push([t, e]);
  }
  convert(t) {
    let {
      html: e,
      text: r
    } = t, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s[tt.blotName])
      return new O().insert(r || "", {
        [tt.blotName]: s[tt.blotName]
      });
    if (!e)
      return new O().insert(r || "", s);
    const i = this.convertHTML(e);
    return kn(i, `
`) && (i.ops[i.ops.length - 1].attributes == null || s.table) ? i.compose(new O().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(t) {
    Ng(t);
  }
  convertHTML(t) {
    const e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    const r = e.body, s = /* @__PURE__ */ new WeakMap(), [i, o] = this.prepareMatching(r, s);
    return Hi(this.quill.scroll, r, i, o, s);
  }
  dangerouslyPasteHTML(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N.sources.API;
    if (typeof t == "string") {
      const s = this.convert({
        html: t,
        text: ""
      });
      this.quill.setContents(s, e), this.quill.setSelection(0, N.sources.SILENT);
    } else {
      const s = this.convert({
        html: e,
        text: ""
      });
      this.quill.updateContents(new O().retain(t).concat(s), r), this.quill.setSelection(t + s.length(), N.sources.SILENT);
    }
  }
  onCaptureCopy(t) {
    var o, a;
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (t.defaultPrevented)
      return;
    t.preventDefault();
    const [r] = this.quill.selection.getRange();
    if (r == null)
      return;
    const {
      html: s,
      text: i
    } = this.onCopy(r, e);
    (o = t.clipboardData) == null || o.setData("text/plain", i), (a = t.clipboardData) == null || a.setData("text/html", s), e && Fi({
      range: r,
      quill: this.quill
    });
  }
  /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */
  normalizeURIList(t) {
    return t.split(/\r?\n/).filter((e) => e[0] !== "#").join(`
`);
  }
  onCapturePaste(t) {
    var o, a, c, h, d;
    if (t.defaultPrevented || !this.quill.isEnabled())
      return;
    t.preventDefault();
    const e = this.quill.getSelection(!0);
    if (e == null)
      return;
    const r = (o = t.clipboardData) == null ? void 0 : o.getData("text/html");
    let s = (a = t.clipboardData) == null ? void 0 : a.getData("text/plain");
    if (!r && !s) {
      const m = (c = t.clipboardData) == null ? void 0 : c.getData("text/uri-list");
      m && (s = this.normalizeURIList(m));
    }
    const i = Array.from(((h = t.clipboardData) == null ? void 0 : h.files) || []);
    if (!r && i.length > 0) {
      this.quill.uploader.upload(e, i);
      return;
    }
    if (r && i.length > 0) {
      const m = new DOMParser().parseFromString(r, "text/html");
      if (m.body.childElementCount === 1 && ((d = m.body.firstElementChild) == null ? void 0 : d.tagName) === "IMG") {
        this.quill.uploader.upload(e, i);
        return;
      }
    }
    this.onPaste(e, {
      html: r,
      text: s
    });
  }
  onCopy(t) {
    const e = this.quill.getText(t);
    return {
      html: this.quill.getSemanticHTML(t),
      text: e
    };
  }
  onPaste(t, e) {
    let {
      text: r,
      html: s
    } = e;
    const i = this.quill.getFormat(t.index), o = this.convert({
      text: r,
      html: s
    }, i);
    wg.log("onPaste", o, {
      text: r,
      html: s
    });
    const a = new O().retain(t.index).delete(t.length).concat(o);
    this.quill.updateContents(a, N.sources.USER), this.quill.setSelection(a.length() - t.length, N.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(t, e) {
    const r = [], s = [];
    return this.matchers.forEach((i) => {
      const [o, a] = i;
      switch (o) {
        case Node.TEXT_NODE:
          s.push(a);
          break;
        case Node.ELEMENT_NODE:
          r.push(a);
          break;
        default:
          Array.from(t.querySelectorAll(o)).forEach((c) => {
            if (e.has(c)) {
              const h = e.get(c);
              h == null || h.push(a);
            } else
              e.set(c, [a]);
          });
          break;
      }
    }), [r, s];
  }
}
x(Jo, "DEFAULTS", {
  matchers: []
});
function Ne(n, t, e, r) {
  return r.query(t) ? n.reduce((s, i) => {
    if (!i.insert)
      return s;
    if (i.attributes && i.attributes[t])
      return s.push(i);
    const o = e ? {
      [t]: e
    } : {};
    return s.insert(i.insert, H(H({}, o), i.attributes));
  }, new O()) : n;
}
function kn(n, t) {
  let e = "";
  for (let r = n.ops.length - 1; r >= 0 && e.length < t.length; --r) {
    const s = n.ops[r];
    if (typeof s.insert != "string")
      break;
    e = s.insert + e;
  }
  return e.slice(-1 * t.length) === t;
}
function Yt(n, t) {
  if (!(n instanceof Element))
    return !1;
  const e = t.query(n);
  return e && e.prototype instanceof lt ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(n.tagName.toLowerCase());
}
function Lg(n, t) {
  return n.previousElementSibling && n.nextElementSibling && !Yt(n.previousElementSibling, t) && !Yt(n.nextElementSibling, t);
}
const yr = /* @__PURE__ */ new WeakMap();
function Qo(n) {
  return n == null ? !1 : (yr.has(n) || (n.tagName === "PRE" ? yr.set(n, !0) : yr.set(n, Qo(n.parentNode))), yr.get(n));
}
function Hi(n, t, e, r, s) {
  return t.nodeType === t.TEXT_NODE ? r.reduce((i, o) => o(t, i, n), new O()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((i, o) => {
    let a = Hi(n, o, e, r, s);
    return o.nodeType === t.ELEMENT_NODE && (a = e.reduce((c, h) => h(o, c, n), a), a = (s.get(o) || []).reduce((c, h) => h(o, c, n), a)), i.concat(a);
  }, new O()) : new O();
}
function Vs(n) {
  return (t, e, r) => Ne(e, n, !0, r);
}
function Sg(n, t, e) {
  const r = Ct.keys(n), s = Nt.keys(n), i = ne.keys(n), o = {};
  return r.concat(s).concat(i).forEach((a) => {
    let c = e.query(a, q.ATTRIBUTE);
    c != null && (o[c.attrName] = c.value(n), o[c.attrName]) || (c = xg[a], c != null && (c.attrName === a || c.keyName === a) && (o[c.attrName] = c.value(n) || void 0), c = jl[a], c != null && (c.attrName === a || c.keyName === a) && (c = jl[a], o[c.attrName] = c.value(n) || void 0));
  }), Object.entries(o).reduce((a, c) => {
    let [h, d] = c;
    return Ne(a, h, d, e);
  }, t);
}
function _g(n, t, e) {
  const r = e.query(n);
  if (r == null)
    return t;
  if (r.prototype instanceof lt) {
    const s = {}, i = r.value(n);
    if (i != null)
      return s[r.blotName] = i, new O().insert(s, r.formats(n, e));
  } else if (r.prototype instanceof Ln && !kn(t, `
`) && t.insert(`
`), "blotName" in r && "formats" in r && typeof r.formats == "function")
    return Ne(t, r.blotName, r.formats(n, e), e);
  return t;
}
function Og(n, t) {
  return kn(t, `
`) || t.insert(`
`), t;
}
function qg(n, t, e) {
  const r = e.query("code-block"), s = r && "formats" in r && typeof r.formats == "function" ? r.formats(n, e) : !0;
  return Ne(t, "code-block", s, e);
}
function Cg() {
  return new O();
}
function Ig(n, t, e) {
  const r = e.query(n);
  if (r == null || // @ts-expect-error
  r.blotName !== "list" || !kn(t, `
`))
    return t;
  let s = -1, i = n.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (s += 1), i = i.parentNode;
  return s <= 0 ? t : t.reduce((o, a) => a.insert ? a.attributes && typeof a.attributes.indent == "number" ? o.push(a) : o.insert(a.insert, H({
    indent: s
  }, a.attributes || {})) : o, new O());
}
function Rg(n, t, e) {
  const r = n;
  let s = r.tagName === "OL" ? "ordered" : "bullet";
  const i = r.getAttribute("data-checked");
  return i && (s = i === "true" ? "checked" : "unchecked"), Ne(t, "list", s, e);
}
function Ul(n, t, e) {
  if (!kn(t, `
`)) {
    if (Yt(n, e) && (n.childNodes.length > 0 || n instanceof HTMLParagraphElement))
      return t.insert(`
`);
    if (t.length() > 0 && n.nextSibling) {
      let r = n.nextSibling;
      for (; r != null; ) {
        if (Yt(r, e))
          return t.insert(`
`);
        const s = e.query(r);
        if (s && s.prototype instanceof ht)
          return t.insert(`
`);
        r = r.firstChild;
      }
    }
  }
  return t;
}
function kg(n, t, e) {
  var i;
  const r = {}, s = n.style || {};
  return s.fontStyle === "italic" && (r.italic = !0), s.textDecoration === "underline" && (r.underline = !0), s.textDecoration === "line-through" && (r.strike = !0), ((i = s.fontWeight) != null && i.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s.fontWeight, 10) >= 700) && (r.bold = !0), t = Object.entries(r).reduce((o, a) => {
    let [c, h] = a;
    return Ne(o, c, h, e);
  }, t), parseFloat(s.textIndent || 0) > 0 ? new O().insert("	").concat(t) : t;
}
function Bg(n, t, e) {
  var s, i;
  const r = ((s = n.parentElement) == null ? void 0 : s.tagName) === "TABLE" ? n.parentElement : (i = n.parentElement) == null ? void 0 : i.parentElement;
  if (r != null) {
    const a = Array.from(r.querySelectorAll("tr")).indexOf(n) + 1;
    return Ne(t, "table", a, e);
  }
  return t;
}
function Mg(n, t, e) {
  var s;
  let r = n.data;
  if (((s = n.parentElement) == null ? void 0 : s.tagName) === "O:P")
    return t.insert(r.trim());
  if (!Qo(n)) {
    if (r.trim().length === 0 && r.includes(`
`) && !Lg(n, e))
      return t;
    const i = (o, a) => {
      const c = a.replace(/[^\u00a0]/g, "");
      return c.length < 1 && o ? " " : c;
    };
    r = r.replace(/\r\n/g, " ").replace(/\n/g, " "), r = r.replace(/\s\s+/g, i.bind(i, !0)), (n.previousSibling == null && n.parentElement != null && Yt(n.parentElement, e) || n.previousSibling instanceof Element && Yt(n.previousSibling, e)) && (r = r.replace(/^\s+/, i.bind(i, !1))), (n.nextSibling == null && n.parentElement != null && Yt(n.parentElement, e) || n.nextSibling instanceof Element && Yt(n.nextSibling, e)) && (r = r.replace(/\s+$/, i.bind(i, !1)));
  }
  return t.insert(r);
}
class ta extends kt {
  constructor(e, r) {
    super(e, r);
    x(this, "lastRecorded", 0);
    x(this, "ignoreChange", !1);
    x(this, "stack", {
      undo: [],
      redo: []
    });
    x(this, "currentRange", null);
    this.quill.on(N.events.EDITOR_CHANGE, (s, i, o, a) => {
      s === N.events.SELECTION_CHANGE ? i && a !== N.sources.SILENT && (this.currentRange = i) : s === N.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === N.sources.USER ? this.record(i, o) : this.transform(i)), this.currentRange = fi(this.currentRange, i));
    }), this.quill.keyboard.addBinding({
      key: "z",
      shortKey: !0
    }, this.undo.bind(this)), this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: !0,
      shiftKey: !0
    }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: !0
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (s) => {
      s.inputType === "historyUndo" ? (this.undo(), s.preventDefault()) : s.inputType === "historyRedo" && (this.redo(), s.preventDefault());
    });
  }
  change(e, r) {
    if (this.stack[e].length === 0)
      return;
    const s = this.stack[e].pop();
    if (!s)
      return;
    const i = this.quill.getContents(), o = s.delta.invert(i);
    this.stack[r].push({
      delta: o,
      range: fi(s.range, o)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(s.delta, N.sources.USER), this.ignoreChange = !1, this.restoreSelection(s);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(e, r) {
    if (e.ops.length === 0)
      return;
    this.stack.redo = [];
    let s = e.invert(r), i = this.currentRange;
    const o = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > o && this.stack.undo.length > 0
    ) {
      const a = this.stack.undo.pop();
      a && (s = s.compose(a.delta), i = a.range);
    } else
      this.lastRecorded = o;
    s.length() !== 0 && (this.stack.undo.push({
      delta: s,
      range: i
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(e) {
    Fl(this.stack.undo, e), Fl(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e) {
    if (e.range)
      this.quill.setSelection(e.range, N.sources.USER);
    else {
      const r = Dg(this.quill.scroll, e.delta);
      this.quill.setSelection(r, N.sources.USER);
    }
  }
}
x(ta, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
});
function Fl(n, t) {
  let e = t;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = n[r];
    n[r] = {
      delta: e.transform(s.delta, !0),
      range: s.range && fi(s.range, e)
    }, e = s.delta.transform(e), n[r].delta.length() === 0 && n.splice(r, 1);
  }
}
function $g(n, t) {
  const e = t.ops[t.ops.length - 1];
  return e == null ? !1 : e.insert != null ? typeof e.insert == "string" && e.insert.endsWith(`
`) : e.attributes != null ? Object.keys(e.attributes).some((r) => n.query(r, q.BLOCK) != null) : !1;
}
function Dg(n, t) {
  const e = t.reduce((s, i) => s + (i.delete || 0), 0);
  let r = t.length() - e;
  return $g(n, t) && (r -= 1), r;
}
function fi(n, t) {
  if (!n)
    return n;
  const e = t.transformPosition(n.index), r = t.transformPosition(n.index + n.length);
  return {
    index: e,
    length: r - e
  };
}
class ea extends kt {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("drop", (r) => {
      var o;
      r.preventDefault();
      let s = null;
      if (document.caretRangeFromPoint)
        s = document.caretRangeFromPoint(r.clientX, r.clientY);
      else if (document.caretPositionFromPoint) {
        const a = document.caretPositionFromPoint(r.clientX, r.clientY);
        s = document.createRange(), s.setStart(a.offsetNode, a.offset), s.setEnd(a.offsetNode, a.offset);
      }
      const i = s && t.selection.normalizeNative(s);
      if (i) {
        const a = t.selection.normalizedToRange(i);
        (o = r.dataTransfer) != null && o.files && this.upload(a, r.dataTransfer.files);
      }
    });
  }
  upload(t, e) {
    const r = [];
    Array.from(e).forEach((s) => {
      var i;
      s && ((i = this.options.mimetypes) != null && i.includes(s.type)) && r.push(s);
    }), r.length > 0 && this.options.handler.call(this, t, r);
  }
}
ea.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(n, t) {
    if (!this.quill.scroll.query("image"))
      return;
    const e = t.map((r) => new Promise((s) => {
      const i = new FileReader();
      i.onload = () => {
        s(i.result);
      }, i.readAsDataURL(r);
    }));
    Promise.all(e).then((r) => {
      const s = r.reduce((i, o) => i.insert({
        image: o
      }), new O().retain(n.index).delete(n.length));
      this.quill.updateContents(s, S.sources.USER), this.quill.setSelection(n.index + r.length, S.sources.SILENT);
    });
  }
};
const Pg = ["insertText", "insertReplacementText"];
class jg extends kt {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("beforeinput", (r) => {
      this.handleBeforeInput(r);
    }), /Android/i.test(navigator.userAgent) || t.on(N.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t) {
    Fi({
      range: t,
      quill: this.quill
    });
  }
  replaceText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (t.length === 0)
      return !1;
    if (e) {
      const r = this.quill.getFormat(t.index, 1);
      this.deleteRange(t), this.quill.updateContents(new O().retain(t.index).insert(e, r), N.sources.USER);
    } else
      this.deleteRange(t);
    return this.quill.setSelection(t.index + e.length, 0, N.sources.SILENT), !0;
  }
  handleBeforeInput(t) {
    if (this.quill.composition.isComposing || t.defaultPrevented || !Pg.includes(t.inputType))
      return;
    const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || e.collapsed === !0)
      return;
    const r = Ug(t);
    if (r == null)
      return;
    const s = this.quill.selection.normalizeNative(e), i = s ? this.quill.selection.normalizedToRange(s) : null;
    i && this.replaceText(i, r) && t.preventDefault();
  }
  handleCompositionStart() {
    const t = this.quill.getSelection();
    t && this.replaceText(t);
  }
}
function Ug(n) {
  var t;
  return typeof n.data == "string" ? n.data : (t = n.dataTransfer) != null && t.types.includes("text/plain") ? n.dataTransfer.getData("text/plain") : null;
}
const Fg = /Mac/i.test(navigator.platform), Hg = 100, zg = (n) => !!(n.key === "ArrowLeft" || n.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
n.key === "ArrowUp" || n.key === "ArrowDown" || n.key === "Home" || Fg && n.key === "a" && n.ctrlKey === !0);
class Gg extends kt {
  constructor(e, r) {
    super(e, r);
    x(this, "isListening", !1);
    x(this, "selectionChangeDeadline", 0);
    this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(e, r) {
        let {
          line: s,
          event: i
        } = r;
        if (!(s instanceof Et) || !s.uiNode)
          return !0;
        const o = getComputedStyle(s.domNode).direction === "rtl";
        return o && i.key !== "ArrowRight" || !o && i.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (i.shiftKey ? 1 : 0), N.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e) => {
      !e.defaultPrevented && zg(e) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + Hg, this.isListening)
      return;
    this.isListening = !0;
    const e = () => {
      this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", e, {
      once: !0
    });
  }
  handleSelectionChange() {
    const e = document.getSelection();
    if (!e)
      return;
    const r = e.getRangeAt(0);
    if (r.collapsed !== !0 || r.startOffset !== 0)
      return;
    const s = this.quill.scroll.find(r.startContainer);
    if (!(s instanceof Et) || !s.uiNode)
      return;
    const i = document.createRange();
    i.setStartAfter(s.uiNode), i.setEndAfter(s.uiNode), e.removeAllRanges(), e.addRange(i);
  }
}
N.register({
  "blots/block": Z,
  "blots/block/embed": ht,
  "blots/break": wt,
  "blots/container": Ee,
  "blots/cursor": Ge,
  "blots/embed": Mi,
  "blots/inline": It,
  "blots/scroll": Pe,
  "blots/text": At,
  "modules/clipboard": Jo,
  "modules/history": ta,
  "modules/keyboard": $r,
  "modules/uploader": ea,
  "modules/input": jg,
  "modules/uiNode": Gg
});
class Kg extends Nt {
  add(t, e) {
    let r = 0;
    if (e === "+1" || e === "-1") {
      const s = this.value(t) || 0;
      r = e === "+1" ? s + 1 : s - 1;
    } else
      typeof e == "number" && (r = e);
    return r === 0 ? (this.remove(t), !0) : super.add(t, r.toString());
  }
  canAdd(t, e) {
    return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10));
  }
  value(t) {
    return parseInt(super.value(t), 10) || void 0;
  }
}
const Vg = new Kg("indent", "ql-indent", {
  scope: q.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class di extends Z {
}
x(di, "blotName", "blockquote"), x(di, "tagName", "blockquote");
class gi extends Z {
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
x(gi, "blotName", "header"), x(gi, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
class Bn extends Ee {
}
Bn.blotName = "list-container";
Bn.tagName = "OL";
class Mn extends Z {
  static create(t) {
    const e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    N.register(Bn);
  }
  constructor(t, e) {
    super(t, e);
    const r = e.ownerDocument.createElement("span"), s = (i) => {
      if (!t.isEnabled())
        return;
      const o = this.statics.formats(e, t);
      o === "checked" ? (this.format("list", "unchecked"), i.preventDefault()) : o === "unchecked" && (this.format("list", "checked"), i.preventDefault());
    };
    r.addEventListener("mousedown", s), r.addEventListener("touchstart", s), this.attachUI(r);
  }
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : super.format(t, e);
  }
}
Mn.blotName = "list";
Mn.tagName = "LI";
Bn.allowedChildren = [Mn];
Mn.requiredContainer = Bn;
class On extends It {
  static create() {
    return super.create();
  }
  static formats() {
    return !0;
  }
  optimize(t) {
    super.optimize(t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
}
x(On, "blotName", "bold"), x(On, "tagName", ["STRONG", "B"]);
class pi extends On {
}
x(pi, "blotName", "italic"), x(pi, "tagName", ["EM", "I"]);
class Jt extends It {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("href", this.sanitize(t)), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", "_blank"), e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return na(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t !== this.statics.blotName || !e ? super.format(t, e) : this.domNode.setAttribute("href", this.constructor.sanitize(e));
  }
}
x(Jt, "blotName", "link"), x(Jt, "tagName", "A"), x(Jt, "SANITIZED_URL", "about:blank"), x(Jt, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function na(n, t) {
  const e = document.createElement("a");
  e.href = n;
  const r = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(r) > -1;
}
class mi extends It {
  static create(t) {
    return t === "super" ? document.createElement("sup") : t === "sub" ? document.createElement("sub") : super.create(t);
  }
  static formats(t) {
    if (t.tagName === "SUB")
      return "sub";
    if (t.tagName === "SUP")
      return "super";
  }
}
x(mi, "blotName", "script"), x(mi, "tagName", ["SUB", "SUP"]);
class bi extends On {
}
x(bi, "blotName", "strike"), x(bi, "tagName", ["S", "STRIKE"]);
class yi extends It {
}
x(yi, "blotName", "underline"), x(yi, "tagName", "U");
class Er extends Mi {
  static create(t) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const e = super.create(t);
    return typeof t == "string" && (window.katex.render(t, e, {
      throwOnError: !1,
      errorColor: "#f00"
    }), e.setAttribute("data-value", t)), e;
  }
  static value(t) {
    return t.getAttribute("data-value");
  }
  html() {
    const {
      formula: t
    } = this.value();
    return `<span>${t}</span>`;
  }
}
x(Er, "blotName", "formula"), x(Er, "className", "ql-formula"), x(Er, "tagName", "SPAN");
const Hl = ["alt", "height", "width"];
class vi extends lt {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Hl.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static sanitize(t) {
    return na(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Hl.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
}
x(vi, "blotName", "image"), x(vi, "tagName", "IMG");
const zl = ["height", "width"];
class Ar extends ht {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return zl.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static sanitize(t) {
    return Jt.sanitize(t);
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    zl.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
  html() {
    const {
      video: t
    } = this.value();
    return `<a href="${t}">${t}</a>`;
  }
}
x(Ar, "blotName", "video"), x(Ar, "className", "ql-video"), x(Ar, "tagName", "IFRAME");
const bn = new Nt("code-token", "hljs", {
  scope: q.INLINE
});
class Ft extends It {
  static formats(t, e) {
    for (; t != null && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(tt.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, r) {
    super(t, e, r), bn.add(this.domNode, r);
  }
  format(t, e) {
    t !== Ft.blotName ? super.format(t, e) : e ? bn.add(this.domNode, e) : (bn.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), bn.value(this.domNode) || this.unwrap();
  }
}
Ft.blotName = "code-token";
Ft.className = "ql-token";
class ut extends tt {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("data-language", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-language", e) : super.format(t, e);
  }
  replaceWith(t, e) {
    return this.formatAt(0, this.length(), Ft.blotName, !1), super.replaceWith(t, e);
  }
}
class vn extends Ae {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(t, e) {
    t === ut.blotName && (this.forceNext = !0, this.children.forEach((r) => {
      r.format(t, e);
    }));
  }
  formatAt(t, e, r, s) {
    r === ut.blotName && (this.forceNext = !0), super.formatAt(t, e, r, s);
  }
  highlight(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null)
      return;
    const s = `${Array.from(this.domNode.childNodes).filter((o) => o !== this.uiNode).map((o) => o.textContent).join(`
`)}
`, i = ut.formats(this.children.head.domNode);
    if (e || this.forceNext || this.cachedText !== s) {
      if (s.trim().length > 0 || this.cachedText == null) {
        const o = this.children.reduce((c, h) => c.concat($o(h, !1)), new O()), a = t(s, i);
        o.diff(a).reduce((c, h) => {
          let {
            retain: d,
            attributes: m
          } = h;
          return d ? (m && Object.keys(m).forEach((g) => {
            [ut.blotName, Ft.blotName].includes(g) && this.formatAt(c, d, g, m[g]);
          }), c + d) : c;
        }, 0);
      }
      this.cachedText = s, this.forceNext = !1;
    }
  }
  html(t, e) {
    const [r] = this.children.find(t);
    return `<pre data-language="${r ? ut.formats(r.domNode) : "plain"}">
${Mr(this.code(t, e))}
</pre>`;
  }
  optimize(t) {
    if (super.optimize(t), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e = ut.formats(this.children.head.domNode);
      e !== this.uiNode.value && (this.uiNode.value = e);
    }
  }
}
vn.allowedChildren = [ut];
ut.requiredContainer = vn;
ut.allowedChildren = [Ft, Ge, At, wt];
const Wg = (n, t, e) => {
  if (typeof n.versionString == "string") {
    const r = n.versionString.split(".")[0];
    if (parseInt(r, 10) >= 11)
      return n.highlight(e, {
        language: t
      }).value;
  }
  return n.highlight(t, e).value;
};
class ra extends kt {
  static register() {
    N.register(Ft, !0), N.register(ut, !0), N.register(vn, !0);
  }
  constructor(t, e) {
    if (super(t, e), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((r, s) => {
      let {
        key: i
      } = s;
      return r[i] = !0, r;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(N.events.SCROLL_BLOT_MOUNT, (t) => {
      if (!(t instanceof vn))
        return;
      const e = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((r) => {
        let {
          key: s,
          label: i
        } = r;
        const o = e.ownerDocument.createElement("option");
        o.textContent = i, o.setAttribute("value", s), e.appendChild(o);
      }), e.addEventListener("change", () => {
        t.format(ut.blotName, e.value), this.quill.root.focus(), this.highlight(t, !0);
      }), t.uiNode == null && (t.attachUI(e), t.children.head && (e.value = ut.formats(t.children.head.domNode)));
    });
  }
  initTimer() {
    let t = null;
    this.quill.on(N.events.SCROLL_OPTIMIZE, () => {
      t && clearTimeout(t), t = setTimeout(() => {
        this.highlight(), t = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing)
      return;
    this.quill.update(N.sources.USER);
    const r = this.quill.getSelection();
    (t == null ? this.quill.scroll.descendants(vn) : [t]).forEach((i) => {
      i.highlight(this.highlightBlot, e);
    }), this.quill.update(N.sources.SILENT), r != null && this.quill.setSelection(r, N.sources.SILENT);
  }
  highlightBlot(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e = this.languages[e] ? e : "plain", e === "plain")
      return Mr(t).split(`
`).reduce((s, i, o) => (o !== 0 && s.insert(`
`, {
        [tt.blotName]: e
      }), s.insert(i)), new O());
    const r = this.quill.root.ownerDocument.createElement("div");
    return r.classList.add(tt.className), r.innerHTML = Wg(this.options.hljs, e, t), Hi(this.quill.scroll, r, [(s, i) => {
      const o = bn.value(s);
      return o ? i.compose(new O().retain(i.length(), {
        [Ft.blotName]: o
      })) : i;
    }], [(s, i) => s.data.split(`
`).reduce((o, a, c) => (c !== 0 && o.insert(`
`, {
      [tt.blotName]: e
    }), o.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
ra.DEFAULTS = {
  hljs: (() => window.hljs)(),
  interval: 1e3,
  languages: [{
    key: "plain",
    label: "Plain"
  }, {
    key: "bash",
    label: "Bash"
  }, {
    key: "cpp",
    label: "C++"
  }, {
    key: "cs",
    label: "C#"
  }, {
    key: "css",
    label: "CSS"
  }, {
    key: "diff",
    label: "Diff"
  }, {
    key: "xml",
    label: "HTML/XML"
  }, {
    key: "java",
    label: "Java"
  }, {
    key: "javascript",
    label: "JavaScript"
  }, {
    key: "markdown",
    label: "Markdown"
  }, {
    key: "php",
    label: "PHP"
  }, {
    key: "python",
    label: "Python"
  }, {
    key: "ruby",
    label: "Ruby"
  }, {
    key: "sql",
    label: "SQL"
  }]
};
const An = class An extends Z {
  static create(t) {
    const e = super.create();
    return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", zi()), e;
  }
  static formats(t) {
    if (t.hasAttribute("data-row"))
      return t.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t, e) {
    t === An.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
};
x(An, "blotName", "table"), x(An, "tagName", "TD");
let vt = An;
class Ht extends Ee {
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const t = this.children.head.formats(), e = this.children.tail.formats(), r = this.next.children.head.formats(), s = this.next.children.tail.formats();
      return t.table === e.table && t.table === r.table && t.table === s.table;
    }
    return !1;
  }
  optimize(t) {
    super.optimize(t), this.children.forEach((e) => {
      if (e.next == null)
        return;
      const r = e.formats(), s = e.next.formats();
      if (r.table !== s.table) {
        const i = this.splitAfter(e);
        i && i.optimize(), this.prev && this.prev.optimize();
      }
    });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
}
x(Ht, "blotName", "table-row"), x(Ht, "tagName", "TR");
class qt extends Ee {
}
x(qt, "blotName", "table-body"), x(qt, "tagName", "TBODY");
class Ve extends Ee {
  balanceCells() {
    const t = this.descendants(Ht), e = t.reduce((r, s) => Math.max(s.children.length, r), 0);
    t.forEach((r) => {
      new Array(e - r.children.length).fill(0).forEach(() => {
        let s;
        r.children.head != null && (s = vt.formats(r.children.head.domNode));
        const i = this.scroll.create(vt.blotName, s);
        r.appendChild(i), i.optimize();
      });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    const [e] = this.descendant(qt);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t);
      s != null && s.remove();
    });
  }
  insertColumn(t) {
    const [e] = this.descendant(qt);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t), i = vt.formats(r.children.head.domNode), o = this.scroll.create(vt.blotName, i);
      r.insertBefore(o, s);
    });
  }
  insertRow(t) {
    const [e] = this.descendant(qt);
    if (e == null || e.children.head == null)
      return;
    const r = zi(), s = this.scroll.create(Ht.blotName);
    e.children.head.children.forEach(() => {
      const o = this.scroll.create(vt.blotName, r);
      s.appendChild(o);
    });
    const i = e.children.at(t);
    e.insertBefore(s, i);
  }
  rows() {
    const t = this.children.head;
    return t == null ? [] : t.children.map((e) => e);
  }
}
x(Ve, "blotName", "table-container"), x(Ve, "tagName", "TABLE");
Ve.allowedChildren = [qt];
qt.requiredContainer = Ve;
qt.allowedChildren = [Ht];
Ht.requiredContainer = qt;
Ht.allowedChildren = [vt];
vt.requiredContainer = Ht;
function zi() {
  return `row-${Math.random().toString(36).slice(2, 6)}`;
}
class Zg extends kt {
  static register() {
    N.register(vt), N.register(Ht), N.register(qt), N.register(Ve);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(Ve).forEach((t) => {
      t.balanceCells();
    });
  }
  deleteColumn() {
    const [t, , e] = this.getTable();
    e != null && (t.deleteColumn(e.cellOffset()), this.quill.update(N.sources.USER));
  }
  deleteRow() {
    const [, t] = this.getTable();
    t != null && (t.remove(), this.quill.update(N.sources.USER));
  }
  deleteTable() {
    const [t] = this.getTable();
    if (t == null)
      return;
    const e = t.offset();
    t.remove(), this.quill.update(N.sources.USER), this.quill.setSelection(e, N.sources.SILENT);
  }
  getTable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t == null)
      return [null, null, null, -1];
    const [e, r] = this.quill.getLine(t.index);
    if (e == null || e.statics.blotName !== vt.blotName)
      return [null, null, null, -1];
    const s = e.parent;
    return [s.parent.parent, s, e, r];
  }
  insertColumn(t) {
    const e = this.quill.getSelection();
    if (!e)
      return;
    const [r, s, i] = this.getTable(e);
    if (i == null)
      return;
    const o = i.cellOffset();
    r.insertColumn(o + t), this.quill.update(N.sources.USER);
    let a = s.rowOffset();
    t === 0 && (a += 1), this.quill.setSelection(e.index + a, e.length, N.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(t) {
    const e = this.quill.getSelection();
    if (!e)
      return;
    const [r, s, i] = this.getTable(e);
    if (i == null)
      return;
    const o = s.rowOffset();
    r.insertRow(o + t), this.quill.update(N.sources.USER), t > 0 ? this.quill.setSelection(e, N.sources.SILENT) : this.quill.setSelection(e.index + s.children.length, e.length, N.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(t, e) {
    const r = this.quill.getSelection();
    if (r == null)
      return;
    const s = new Array(t).fill(0).reduce((i) => {
      const o = new Array(e).fill(`
`).join("");
      return i.insert(o, {
        table: zi()
      });
    }, new O().retain(r.index));
    this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(r.index, N.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(N.events.SCROLL_OPTIMIZE, (t) => {
      t.some((e) => ["TD", "TR", "TBODY", "TABLE"].includes(e.target.tagName) ? (this.quill.once(N.events.TEXT_CHANGE, (r, s, i) => {
        i === N.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const Gl = Gt("quill:toolbar");
class Gi extends kt {
  constructor(t, e) {
    var r, s;
    if (super(t, e), Array.isArray(this.options.container)) {
      const i = document.createElement("div");
      i.setAttribute("role", "toolbar"), Xg(i, this.options.container), (s = (r = t.container) == null ? void 0 : r.parentNode) == null || s.insertBefore(i, t.container), this.container = i;
    } else
      typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Gl.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i) => {
      var a;
      const o = (a = this.options.handlers) == null ? void 0 : a[i];
      o && this.addHandler(i, o);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i) => {
      this.attach(i);
    }), this.quill.on(N.events.EDITOR_CHANGE, () => {
      const [i] = this.quill.selection.getRange();
      this.update(i);
    });
  }
  addHandler(t, e) {
    this.handlers[t] = e;
  }
  attach(t) {
    let e = Array.from(t.classList).find((s) => s.indexOf("ql-") === 0);
    if (!e)
      return;
    if (e = e.slice(3), t.tagName === "BUTTON" && t.setAttribute("type", "button"), this.handlers[e] == null && this.quill.scroll.query(e) == null) {
      Gl.warn("ignoring attaching to nonexistent format", e, t);
      return;
    }
    const r = t.tagName === "SELECT" ? "change" : "click";
    t.addEventListener(r, (s) => {
      let i;
      if (t.tagName === "SELECT") {
        if (t.selectedIndex < 0)
          return;
        const a = t.options[t.selectedIndex];
        a.hasAttribute("selected") ? i = !1 : i = a.value || !1;
      } else
        t.classList.contains("ql-active") ? i = !1 : i = t.value || !t.hasAttribute("value"), s.preventDefault();
      this.quill.focus();
      const [o] = this.quill.selection.getRange();
      if (this.handlers[e] != null)
        this.handlers[e].call(this, i);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(e).prototype instanceof lt
      ) {
        if (i = prompt(`Enter ${e}`), !i)
          return;
        this.quill.updateContents(new O().retain(o.index).delete(o.length).insert({
          [e]: i
        }), N.sources.USER);
      } else
        this.quill.format(e, i, N.sources.USER);
      this.update(o);
    }), this.controls.push([e, t]);
  }
  update(t) {
    const e = t == null ? {} : this.quill.getFormat(t);
    this.controls.forEach((r) => {
      const [s, i] = r;
      if (i.tagName === "SELECT") {
        let o = null;
        if (t == null)
          o = null;
        else if (e[s] == null)
          o = i.querySelector("option[selected]");
        else if (!Array.isArray(e[s])) {
          let a = e[s];
          typeof a == "string" && (a = a.replace(/"/g, '\\"')), o = i.querySelector(`option[value="${a}"]`);
        }
        o == null ? (i.value = "", i.selectedIndex = -1) : o.selected = !0;
      } else if (t == null)
        i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
      else if (i.hasAttribute("value")) {
        const o = e[s], a = o === i.getAttribute("value") || o != null && o.toString() === i.getAttribute("value") || o == null && !i.getAttribute("value");
        i.classList.toggle("ql-active", a), i.setAttribute("aria-pressed", a.toString());
      } else {
        const o = e[s] != null;
        i.classList.toggle("ql-active", o), i.setAttribute("aria-pressed", o.toString());
      }
    });
  }
}
Gi.DEFAULTS = {};
function Kl(n, t, e) {
  const r = document.createElement("button");
  r.setAttribute("type", "button"), r.classList.add(`ql-${t}`), r.setAttribute("aria-pressed", "false"), e != null ? (r.value = e, r.setAttribute("aria-label", `${t}: ${e}`)) : r.setAttribute("aria-label", t), n.appendChild(r);
}
function Xg(n, t) {
  Array.isArray(t[0]) || (t = [t]), t.forEach((e) => {
    const r = document.createElement("span");
    r.classList.add("ql-formats"), e.forEach((s) => {
      if (typeof s == "string")
        Kl(r, s);
      else {
        const i = Object.keys(s)[0], o = s[i];
        Array.isArray(o) ? Yg(r, i, o) : Kl(r, i, o);
      }
    }), n.appendChild(r);
  });
}
function Yg(n, t, e) {
  const r = document.createElement("select");
  r.classList.add(`ql-${t}`), e.forEach((s) => {
    const i = document.createElement("option");
    s !== !1 ? i.setAttribute("value", String(s)) : i.setAttribute("selected", "selected"), r.appendChild(i);
  }), n.appendChild(r);
}
Gi.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const n = this.quill.getSelection();
      if (n != null)
        if (n.length === 0) {
          const t = this.quill.getFormat();
          Object.keys(t).forEach((e) => {
            this.quill.scroll.query(e, q.INLINE) != null && this.quill.format(e, !1, N.sources.USER);
          });
        } else
          this.quill.removeFormat(n.index, n.length, N.sources.USER);
    },
    direction(n) {
      const {
        align: t
      } = this.quill.getFormat();
      n === "rtl" && t == null ? this.quill.format("align", "right", N.sources.USER) : !n && t === "right" && this.quill.format("align", !1, N.sources.USER), this.quill.format("direction", n, N.sources.USER);
    },
    indent(n) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t), r = parseInt(e.indent || 0, 10);
      if (n === "+1" || n === "-1") {
        let s = n === "+1" ? 1 : -1;
        e.direction === "rtl" && (s *= -1), this.quill.format("indent", r + s, N.sources.USER);
      }
    },
    link(n) {
      n === !0 && (n = prompt("Enter link URL:")), this.quill.format("link", n, N.sources.USER);
    },
    list(n) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t);
      n === "check" ? e.list === "checked" || e.list === "unchecked" ? this.quill.format("list", !1, N.sources.USER) : this.quill.format("list", "unchecked", N.sources.USER) : this.quill.format("list", n, N.sources.USER);
    }
  }
};
const Jg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', Qg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', tp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', ep = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', np = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', rp = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', sp = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', ip = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', Vl = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', lp = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', op = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', ap = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', cp = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', up = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', hp = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', fp = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', dp = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', gp = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', pp = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', mp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', bp = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', yp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', vp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', Ep = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', Ap = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', Np = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', wp = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', Tp = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', xp = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', Lp = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', Sp = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', _p = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', Op = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', qn = {
  align: {
    "": Jg,
    center: Qg,
    right: tp,
    justify: ep
  },
  background: np,
  blockquote: rp,
  bold: sp,
  clean: ip,
  code: Vl,
  "code-block": Vl,
  color: lp,
  direction: {
    "": op,
    rtl: ap
  },
  formula: cp,
  header: {
    1: up,
    2: hp,
    3: fp,
    4: dp,
    5: gp,
    6: pp
  },
  italic: mp,
  image: bp,
  indent: {
    "+1": yp,
    "-1": vp
  },
  link: Ep,
  list: {
    bullet: Ap,
    check: Np,
    ordered: wp
  },
  script: {
    sub: Tp,
    super: xp
  },
  strike: Lp,
  table: Sp,
  underline: _p,
  video: Op
}, qp = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Wl = 0;
function Zl(n, t) {
  n.setAttribute(t, `${n.getAttribute(t) !== "true"}`);
}
class Dr {
  constructor(t) {
    this.select = t, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), e.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), Zl(this.label, "aria-expanded"), Zl(this.options, "aria-hidden");
  }
  buildItem(t) {
    const e = document.createElement("span");
    e.tabIndex = "0", e.setAttribute("role", "button"), e.classList.add("ql-picker-item");
    const r = t.getAttribute("value");
    return r && e.setAttribute("data-value", r), t.textContent && e.setAttribute("data-label", t.textContent), e.addEventListener("click", () => {
      this.selectItem(e, !0);
    }), e.addEventListener("keydown", (s) => {
      switch (s.key) {
        case "Enter":
          this.selectItem(e, !0), s.preventDefault();
          break;
        case "Escape":
          this.escape(), s.preventDefault();
          break;
      }
    }), e;
  }
  buildLabel() {
    const t = document.createElement("span");
    return t.classList.add("ql-picker-label"), t.innerHTML = qp, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
  }
  buildOptions() {
    const t = document.createElement("span");
    t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = `ql-picker-options-${Wl}`, Wl += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, Array.from(this.select.options).forEach((e) => {
      const r = this.buildItem(e);
      t.appendChild(r), e.selected === !0 && this.selectItem(r);
    }), this.container.appendChild(t);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((t) => {
      this.container.setAttribute(t.name, t.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const r = this.container.querySelector(".ql-selected");
    t !== r && (r != null && r.classList.remove("ql-selected"), t != null && (t.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t.parentNode.children).indexOf(t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let t;
    if (this.select.selectedIndex > -1) {
      const r = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      t = this.select.options[this.select.selectedIndex], this.selectItem(r);
    } else
      this.selectItem(null);
    const e = t != null && t !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", e);
  }
}
class sa extends Dr {
  constructor(t, e) {
    super(t), this.label.innerHTML = e, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((r) => {
      r.classList.add("ql-primary");
    });
  }
  buildItem(t) {
    const e = super.buildItem(t);
    return e.style.backgroundColor = t.getAttribute("value") || "", e;
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const r = this.label.querySelector(".ql-color-label"), s = t && t.getAttribute("data-value") || "";
    r && (r.tagName === "line" ? r.style.stroke = s : r.style.fill = s);
  }
}
class ia extends Dr {
  constructor(t, e) {
    super(t), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((r) => {
      r.innerHTML = e[r.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const r = t || this.defaultItem;
    if (r != null) {
      if (this.label.innerHTML === r.innerHTML)
        return;
      this.label.innerHTML = r.innerHTML;
    }
  }
}
const Cp = (n) => {
  const {
    overflowY: t
  } = getComputedStyle(n, null);
  return t !== "visible" && t !== "clip";
};
class la {
  constructor(t, e) {
    this.quill = t, this.boundsContainer = e || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Cp(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t) {
    const e = t.left + t.width / 2 - this.root.offsetWidth / 2, r = t.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${e}px`, this.root.style.top = `${r}px`, this.root.classList.remove("ql-flip");
    const s = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect();
    let o = 0;
    if (i.right > s.right && (o = s.right - i.right, this.root.style.left = `${e + o}px`), i.left < s.left && (o = s.left - i.left, this.root.style.left = `${e + o}px`), i.bottom > s.bottom) {
      const a = i.bottom - i.top, c = t.bottom - t.top + a;
      this.root.style.top = `${r - c}px`, this.root.classList.add("ql-flip");
    }
    return o;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
}
const Ip = [!1, "center", "right", "justify"], Rp = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], kp = [!1, "serif", "monospace"], Bp = ["1", "2", "3", !1], Mp = ["small", !1, "large", "huge"];
class $n extends Ke {
  constructor(t, e) {
    super(t, e);
    const r = (s) => {
      if (!document.body.contains(t.root)) {
        document.body.removeEventListener("click", r);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(s.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i) => {
        i.container.contains(s.target) || i.close();
      });
    };
    t.emitter.listenDOM("click", document.body, r);
  }
  addModule(t) {
    const e = super.addModule(t);
    return t === "toolbar" && this.extendToolbar(e), e;
  }
  buildButtons(t, e) {
    Array.from(t).forEach((r) => {
      (r.getAttribute("class") || "").split(/\s+/).forEach((i) => {
        if (i.startsWith("ql-") && (i = i.slice(3), e[i] != null))
          if (i === "direction")
            r.innerHTML = e[i][""] + e[i].rtl;
          else if (typeof e[i] == "string")
            r.innerHTML = e[i];
          else {
            const o = r.value || "";
            o != null && e[i][o] && (r.innerHTML = e[i][o]);
          }
      });
    });
  }
  buildPickers(t, e) {
    this.pickers = Array.from(t).map((s) => {
      if (s.classList.contains("ql-align") && (s.querySelector("option") == null && mn(s, Ip), typeof e.align == "object"))
        return new ia(s, e.align);
      if (s.classList.contains("ql-background") || s.classList.contains("ql-color")) {
        const i = s.classList.contains("ql-background") ? "background" : "color";
        return s.querySelector("option") == null && mn(s, Rp, i === "background" ? "#ffffff" : "#000000"), new sa(s, e[i]);
      }
      return s.querySelector("option") == null && (s.classList.contains("ql-font") ? mn(s, kp) : s.classList.contains("ql-header") ? mn(s, Bp) : s.classList.contains("ql-size") && mn(s, Mp)), new Dr(s);
    });
    const r = () => {
      this.pickers.forEach((s) => {
        s.update();
      });
    };
    this.quill.on(S.events.EDITOR_CHANGE, r);
  }
}
$n.DEFAULTS = Qt({}, Ke.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let n = this.container.querySelector("input.ql-image[type=file]");
          n == null && (n = document.createElement("input"), n.setAttribute("type", "file"), n.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), n.classList.add("ql-image"), n.addEventListener("change", () => {
            const t = this.quill.getSelection(!0);
            this.quill.uploader.upload(t, n.files), n.value = "";
          }), this.container.appendChild(n)), n.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
class oa extends la {
  constructor(t, e) {
    super(t, e), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (t) => {
      t.key === "Enter" ? (this.save(), t.preventDefault()) : t.key === "Escape" && (this.cancel(), t.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null)
      return;
    e != null ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const r = this.quill.getBounds(this.quill.selection.savedRange);
    r != null && this.position(r), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t}`) || ""), this.root.setAttribute("data-mode", t);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: !0
    });
  }
  save() {
    let {
      value: t
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: e
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, S.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, S.sources.USER)), this.quill.root.scrollTop = e;
        break;
      }
      case "video":
        t = $p(t);
      case "formula": {
        if (!t)
          break;
        const e = this.quill.getSelection(!0);
        if (e != null) {
          const r = e.index + e.length;
          this.quill.insertEmbed(
            r,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            t,
            S.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(r + 1, " ", S.sources.USER), this.quill.setSelection(r + 2, S.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
}
function $p(n) {
  let t = n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0` : (t = n.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/` : n;
}
function mn(n, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  t.forEach((r) => {
    const s = document.createElement("option");
    r === e ? s.setAttribute("selected", "selected") : s.setAttribute("value", String(r)), n.appendChild(s);
  });
}
const Dp = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class aa extends oa {
  constructor(t, e) {
    super(t, e), this.quill.on(S.events.EDITOR_CHANGE, (r, s, i, o) => {
      if (r === S.events.SELECTION_CHANGE)
        if (s != null && s.length > 0 && o === S.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
          const a = this.quill.getLines(s.index, s.length);
          if (a.length === 1) {
            const c = this.quill.getBounds(s);
            c != null && this.position(c);
          } else {
            const c = a[a.length - 1], h = this.quill.getIndex(c), d = Math.min(c.length() - 1, s.index + s.length - h), m = this.quill.getBounds(new me(h, d));
            m != null && this.position(m);
          }
        } else
          document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(S.events.SCROLL_OPTIMIZE, () => {
      setTimeout(() => {
        if (this.root.classList.contains("ql-hidden"))
          return;
        const t = this.quill.getSelection();
        if (t != null) {
          const e = this.quill.getBounds(t);
          e != null && this.position(e);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(t) {
    const e = super.position(t), r = this.root.querySelector(".ql-tooltip-arrow");
    return r.style.marginLeft = "", e !== 0 && (r.style.marginLeft = `${-1 * e - r.offsetWidth / 2}px`), e;
  }
}
x(aa, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
class ca extends $n {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Dp), super(t, e), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    this.tooltip = new aa(this.quill, this.options.bounds), t.container != null && (this.tooltip.root.appendChild(t.container), this.buildButtons(t.container.querySelectorAll("button"), qn), this.buildPickers(t.container.querySelectorAll("select"), qn));
  }
}
ca.DEFAULTS = Qt({}, $n.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          n ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, N.sources.USER);
        }
      }
    }
  }
});
const Pp = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class ua extends oa {
  constructor() {
    super(...arguments);
    x(this, "preview", this.root.querySelector("a.ql-preview"));
  }
  listen() {
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (e) => {
      if (this.linkRange != null) {
        const r = this.linkRange;
        this.restoreFocus(), this.quill.formatText(r, "link", !1, S.sources.USER), delete this.linkRange;
      }
      e.preventDefault(), this.hide();
    }), this.quill.on(S.events.SELECTION_CHANGE, (e, r, s) => {
      if (e != null) {
        if (e.length === 0 && s === S.sources.USER) {
          const [i, o] = this.quill.scroll.descendant(Jt, e.index);
          if (i != null) {
            this.linkRange = new me(e.index - o, i.length());
            const a = Jt.formats(i.domNode);
            this.preview.textContent = a, this.preview.setAttribute("href", a), this.show();
            const c = this.quill.getBounds(this.linkRange);
            c != null && this.position(c);
            return;
          }
        } else
          delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
}
x(ua, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
class ha extends $n {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Pp), super(t, e), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    t.container != null && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), qn), this.buildPickers(t.container.querySelectorAll("select"), qn), this.tooltip = new ua(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, r) => {
      t.handlers.link.call(t, !r.format.link);
    }));
  }
}
ha.DEFAULTS = Qt({}, $n.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          if (n) {
            const t = this.quill.getSelection();
            if (t == null || t.length === 0)
              return;
            let e = this.quill.getText(t);
            /^\S+@\S+\.\S+$/.test(e) && e.indexOf("mailto:") !== 0 && (e = `mailto:${e}`);
            const {
              tooltip: r
            } = this.quill.theme;
            r.edit("link", e);
          } else
            this.quill.format("link", !1, N.sources.USER);
        }
      }
    }
  }
});
N.register({
  "attributors/attribute/direction": zo,
  "attributors/class/align": Uo,
  "attributors/class/background": rg,
  "attributors/class/color": ng,
  "attributors/class/direction": Go,
  "attributors/class/font": Wo,
  "attributors/class/size": Xo,
  "attributors/style/align": Fo,
  "attributors/style/background": Pi,
  "attributors/style/color": Di,
  "attributors/style/direction": Ko,
  "attributors/style/font": Zo,
  "attributors/style/size": Yo
}, !0);
N.register({
  "formats/align": Uo,
  "formats/direction": Go,
  "formats/indent": Vg,
  "formats/background": Pi,
  "formats/color": Di,
  "formats/font": Wo,
  "formats/size": Xo,
  "formats/blockquote": di,
  "formats/code-block": tt,
  "formats/header": gi,
  "formats/list": Mn,
  "formats/bold": On,
  "formats/code": ji,
  "formats/italic": pi,
  "formats/link": Jt,
  "formats/script": mi,
  "formats/strike": bi,
  "formats/underline": yi,
  "formats/formula": Er,
  "formats/image": vi,
  "formats/video": Ar,
  "modules/syntax": ra,
  "modules/table": Zg,
  "modules/toolbar": Gi,
  "themes/bubble": ca,
  "themes/snow": ha,
  "ui/icons": qn,
  "ui/picker": Dr,
  "ui/icon-picker": ia,
  "ui/color-picker": sa,
  "ui/tooltip": la
}, !0);
export {
  kt as Module,
  xd as Parchment,
  me as Range,
  N as default
};
