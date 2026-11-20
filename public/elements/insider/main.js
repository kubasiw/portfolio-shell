//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /-\w/g, T = te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, E = te((e) => e.replace(re, "-$1").toLowerCase()), ie = te((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = te((e) => e ? `on${ie(e)}` : ""), D = (e, t) => !Object.is(e, t), oe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, O = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, se = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ce = (e) => {
	let t = g(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, le, ue = () => le ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function de(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? he(r) : de(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var fe = /;(?![^(]*\))/g, pe = /:([^]+)/, me = /\/\*[^]*?\*\//g;
function he(e) {
	let t = {};
	return e.replace(me, "").split(fe).forEach((e) => {
		if (e) {
			let n = e.split(pe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function k(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = k(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ge = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _e = /* @__PURE__ */ e(ge);
ge + "";
function ve(e) {
	return !!e || e === "";
}
function ye(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = be(e[r], t[r]);
	return n;
}
function be(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? ye(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !be(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
var xe = (e) => !!(e && e.__v_isRef === !0), A = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? xe(e) ? A(e.value) : JSON.stringify(e, Se, 2) : String(e), Se = (e, t) => xe(t) ? Se(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ce(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ce(e)) } : _(t) ? Ce(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Ce = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, j, we = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && j && (j.active ? (this.parent = j, this.index = (j.scopes || (j.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = j;
			try {
				return j = this, e();
			} finally {
				j = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = j, j = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (j === this) j = this.prevScope;
			else {
				let e = j;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Te() {
	return j;
}
var M, Ee = /* @__PURE__ */ new WeakSet(), De = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && (j.active ? j.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ee.has(this) && (Ee.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || je(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ue(this), Pe(this);
		let e = M, t = N;
		M = this, N = !0;
		try {
			return this.fn();
		} finally {
			Fe(this), M = e, N = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Re(e);
			this.deps = this.depsTail = void 0, Ue(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ee.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ie(this) && this.run();
	}
	get dirty() {
		return Ie(this);
	}
}, Oe = 0, ke, Ae;
function je(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ae, Ae = e;
		return;
	}
	e.next = ke, ke = e;
}
function Me() {
	Oe++;
}
function Ne() {
	if (--Oe > 0) return;
	if (Ae) {
		let e = Ae;
		for (Ae = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; ke;) {
		let t = ke;
		for (ke = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Pe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fe(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Re(r), ze(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ie(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Le(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Le(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === We) || (e.globalVersion = We, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ie(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = N;
	M = e, N = !0;
	try {
		Pe(e);
		let n = e.fn(e._value);
		(t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, N = r, Fe(e), e.flags &= -3;
	}
}
function Re(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Re(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function ze(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var N = !0, Be = [];
function Ve() {
	Be.push(N), N = !1;
}
function He() {
	let e = Be.pop();
	N = e === void 0 || e;
}
function Ue(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var We = 0, Ge = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ke = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !N || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new Ge(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, qe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, We++, this.notify(e);
	}
	notify(e) {
		Me();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ne();
		}
	}
};
function qe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) qe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Je = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ Symbol(""), Xe = /* @__PURE__ */ Symbol(""), Ze = /* @__PURE__ */ Symbol("");
function P(e, t, n) {
	if (N && M) {
		let t = Je.get(e);
		t || Je.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ke()), r.map = t, r.key = n), r.track();
	}
}
function Qe(e, t, n, r, i, a) {
	let o = Je.get(e);
	if (!o) {
		We++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Me(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === Ze || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(Ze)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Ye)), f(e) && s(o.get(Xe)));
				break;
			case "delete":
				i || (s(o.get(Ye)), f(e) && s(o.get(Xe)));
				break;
			case "set": f(e) && s(o.get(Ye));
		}
	}
	Ne();
}
function $e(e) {
	let t = /* @__PURE__ */ L(e);
	return t === e ? t : (P(t, "iterate", Ze), /* @__PURE__ */ I(e) ? t : t.map(R));
}
function et(e) {
	return P(e = /* @__PURE__ */ L(e), "iterate", Ze), e;
}
function F(e, t) {
	return /* @__PURE__ */ It(e) ? zt(/* @__PURE__ */ Ft(e) ? R(t) : t) : R(t);
}
var tt = {
	__proto__: null,
	[Symbol.iterator]() {
		return nt(this, Symbol.iterator, (e) => F(this, e));
	},
	concat(...e) {
		return $e(this).concat(...e.map((e) => d(e) ? $e(e) : e));
	},
	entries() {
		return nt(this, "entries", (e) => (e[1] = F(this, e[1]), e));
	},
	every(e, t) {
		return it(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return it(this, "filter", e, t, (e) => e.map((e) => F(this, e)), arguments);
	},
	find(e, t) {
		return it(this, "find", e, t, (e) => F(this, e), arguments);
	},
	findIndex(e, t) {
		return it(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return it(this, "findLast", e, t, (e) => F(this, e), arguments);
	},
	findLastIndex(e, t) {
		return it(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return it(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ot(this, "includes", e);
	},
	indexOf(...e) {
		return ot(this, "indexOf", e);
	},
	join(e) {
		return $e(this).join(e);
	},
	lastIndexOf(...e) {
		return ot(this, "lastIndexOf", e);
	},
	map(e, t) {
		return it(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return st(this, "pop");
	},
	push(...e) {
		return st(this, "push", e);
	},
	reduce(e, ...t) {
		return at(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return at(this, "reduceRight", e, t);
	},
	shift() {
		return st(this, "shift");
	},
	some(e, t) {
		return it(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return st(this, "splice", e);
	},
	toReversed() {
		return $e(this).toReversed();
	},
	toSorted(e) {
		return $e(this).toSorted(e);
	},
	toSpliced(...e) {
		return $e(this).toSpliced(...e);
	},
	unshift(...e) {
		return st(this, "unshift", e);
	},
	values() {
		return nt(this, "values", (e) => F(this, e));
	}
};
function nt(e, t, n) {
	let r = et(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ I(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var rt = Array.prototype;
function it(e, t, n, r, i, a) {
	let o = et(e), s = o !== e && !/* @__PURE__ */ I(e), c = o[t];
	if (c !== rt[t]) {
		let t = c.apply(e, a);
		return s ? R(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, F(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function at(e, t, n, r) {
	let i = et(e), a = i !== e && !/* @__PURE__ */ I(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = F(e, t)), n.call(this, t, F(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? F(e, c) : c;
}
function ot(e, t, n) {
	let r = /* @__PURE__ */ L(e);
	P(r, "iterate", Ze);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Lt(n[0]) ? (n[0] = /* @__PURE__ */ L(n[0]), r[t](...n)) : i;
}
function st(e, t, n = []) {
	Ve(), Me();
	let r = (/* @__PURE__ */ L(e))[t].apply(e, n);
	return Ne(), He(), r;
}
var ct = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), lt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function ut(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ L(this);
	return P(t, "has", e), t.hasOwnProperty(e);
}
var dt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? kt : Ot : i ? Dt : Et).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = tt[t])) return e;
			if (t === "hasOwnProperty") return ut;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ z(e) ? e : n);
		if ((_(t) ? lt.has(t) : ct(t)) || (r || P(e, "get", t), i)) return o;
		if (/* @__PURE__ */ z(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Nt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Nt(o) : /* @__PURE__ */ jt(o) : o;
	}
}, ft = class extends dt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ It(i);
			if (!/* @__PURE__ */ I(n) && !/* @__PURE__ */ It(n) && (i = /* @__PURE__ */ L(i), n = /* @__PURE__ */ L(n)), !a && /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ z(e) ? e : r);
		return e === /* @__PURE__ */ L(r) && s && (o ? D(n, i) && Qe(e, "set", t, n, i) : Qe(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && Qe(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !lt.has(t)) && P(e, "has", t), n;
	}
	ownKeys(e) {
		return P(e, "iterate", d(e) ? "length" : Ye), Reflect.ownKeys(e);
	}
}, pt = class extends dt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, mt = /* @__PURE__ */ new ft(), ht = /* @__PURE__ */ new pt(), gt = /* @__PURE__ */ new ft(!0), _t = (e) => e, vt = (e) => Reflect.getPrototypeOf(e);
function yt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ L(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? _t : t ? zt : R;
		return !t && P(a, "iterate", l ? Xe : Ye), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function bt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function xt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ L(r), a = /* @__PURE__ */ L(n);
			e || (D(n, a) && P(i, "get", n), P(i, "get", a));
			let { has: o } = vt(i), s = t ? _t : e ? zt : R;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && P(/* @__PURE__ */ L(t), "iterate", Ye), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ L(n), i = /* @__PURE__ */ L(t);
			return e || (D(t, i) && P(r, "has", t), P(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ L(a), s = t ? _t : e ? zt : R;
			return !e && P(o, "iterate", Ye), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: bt("add"),
		set: bt("set"),
		delete: bt("delete"),
		clear: bt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ L(this), r = vt(n), i = /* @__PURE__ */ L(e), a = !t && !/* @__PURE__ */ I(e) && !/* @__PURE__ */ It(e) ? i : e;
			return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), Qe(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ I(n) && !/* @__PURE__ */ It(n) && (n = /* @__PURE__ */ L(n));
			let r = /* @__PURE__ */ L(this), { has: i, get: a } = vt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ L(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? D(n, s) && Qe(r, "set", e, n, s) : Qe(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ L(this), { has: n, get: r } = vt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ L(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && Qe(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ L(this), t = e.size !== 0, n = e.clear();
			return t && Qe(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = yt(r, e, t);
	}), n;
}
function St(e, t) {
	let n = xt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Ct = { get: /* @__PURE__ */ St(!1, !1) }, wt = { get: /* @__PURE__ */ St(!1, !0) }, Tt = { get: /* @__PURE__ */ St(!0, !1) }, Et = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap();
function At(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
	return /* @__PURE__ */ It(e) ? e : Pt(e, !1, mt, Ct, Et);
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
	return Pt(e, !1, gt, wt, Dt);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
	return Pt(e, !0, ht, Tt, Ot);
}
function Pt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = At(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
	return /* @__PURE__ */ It(e) ? /* @__PURE__ */ Ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function L(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ L(t) : e;
}
function Rt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && O(e, "__v_skip", !0), e;
}
var R = (e) => v(e) ? /* @__PURE__ */ jt(e) : e, zt = (e) => v(e) ? /* @__PURE__ */ Nt(e) : e;
// @__NO_SIDE_EFFECTS__
function z(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	return Bt(e, !1);
}
function Bt(e, t) {
	return /* @__PURE__ */ z(e) ? e : new Vt(e, t);
}
var Vt = class {
	constructor(e, t) {
		this.dep = new Ke(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ L(e), this._value = t ? e : R(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ I(e) || /* @__PURE__ */ It(e);
		e = n ? e : /* @__PURE__ */ L(e), D(e, t) && (this._rawValue = e, this._value = n ? e : R(e), this.dep.trigger());
	}
};
function V(e) {
	return /* @__PURE__ */ z(e) ? e.value : e;
}
var Ht = {
	get: (e, t, n) => t === "__v_raw" ? e : V(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Ut(e) {
	return /* @__PURE__ */ Ft(e) ? e : new Proxy(e, Ht);
}
var Wt = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ke(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = We - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return je(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Le(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function Gt(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new Wt(r, i, n);
}
var Kt = {}, qt = /* @__PURE__ */ new WeakMap(), Jt = void 0;
function Yt(e, t = !1, n = Jt) {
	if (n) {
		let t = qt.get(n);
		t || qt.set(n, t = []), t.push(e);
	}
}
function Xt(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ I(e) || o === !1 || o === 0 ? Zt(e, 1) : Zt(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ z(e) ? (g = () => e.value, y = /* @__PURE__ */ I(e)) : /* @__PURE__ */ Ft(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ft(e) || /* @__PURE__ */ I(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ z(e)) return e.value;
		if (/* @__PURE__ */ Ft(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ve();
			try {
				_();
			} finally {
				He();
			}
		}
		let t = Jt;
		Jt = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			Jt = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => Zt(e(), t);
	}
	let x = Te(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(Kt) : Kt, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (n) {
			let t = m.run();
			if (e || o || y || (b ? t.some((e, t) => D(e, C[t])) : D(t, C))) {
				_ && _();
				let e = Jt;
				Jt = m;
				try {
					let e = [
						t,
						C === Kt ? void 0 : b && C[0] === Kt ? [] : C,
						v
					];
					C = t, f ? f(n, 3, e) : n(...e);
				} finally {
					Jt = e;
				}
			}
		} else m.run();
	};
	return u && u(w), m = new De(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => Yt(e, !1, m), _ = m.onStop = () => {
		let e = qt.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			qt.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function Zt(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ z(e)) Zt(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) Zt(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		Zt(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) Zt(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Zt(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function Qt(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		$t(e, t, n);
	}
}
function H(e, t, n, r) {
	if (h(e)) {
		let i = Qt(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			$t(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(H(e[a], t, n, r));
		return i;
	}
}
function $t(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			Ve(), Qt(o, null, 10, [
				e,
				i,
				a
			]), He();
			return;
		}
	}
	en(e, r, a, i, s);
}
function en(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var U = [], tn = -1, nn = [], rn = null, an = 0, on = /* @__PURE__ */ Promise.resolve(), sn = null;
function cn(e) {
	let t = sn || on;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function ln(e) {
	let t = tn + 1, n = U.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = U[r], a = hn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function un(e) {
	if (!(e.flags & 1)) {
		let t = hn(e), n = U[U.length - 1];
		!n || !(e.flags & 2) && t >= hn(n) ? U.push(e) : U.splice(ln(t), 0, e), e.flags |= 1, dn();
	}
}
function dn() {
	sn ||= on.then(gn);
}
function fn(e) {
	d(e) ? nn.push(...e) : rn && e.id === -1 ? rn.splice(an + 1, 0, e) : e.flags & 1 || (nn.push(e), e.flags |= 1), dn();
}
function pn(e, t, n = tn + 1) {
	for (; n < U.length; n++) {
		let t = U[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			U.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function mn(e) {
	if (nn.length) {
		let e = [...new Set(nn)].sort((e, t) => hn(e) - hn(t));
		if (nn.length = 0, rn) {
			rn.push(...e);
			return;
		}
		for (rn = e, an = 0; an < rn.length; an++) {
			let e = rn[an];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		rn = null, an = 0;
	}
}
var hn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function gn(e) {
	try {
		for (tn = 0; tn < U.length; tn++) {
			let e = U[tn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Qt(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; tn < U.length; tn++) {
			let e = U[tn];
			e && (e.flags &= -2);
		}
		tn = -1, U.length = 0, mn(e), sn = null, (U.length || nn.length) && gn(e);
	}
}
var _n = null, vn = null;
function yn(e) {
	let t = _n;
	return _n = e, vn = e && e.type.__scopeId || null, t;
}
function bn(e, t = _n, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ci(-1);
		let i = yn(t), a = bi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = bi.length; e > a; e--) xi();
			yn(i), r._d && Ci(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function xn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ve(), H(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), He());
	}
}
function Sn(e, t) {
	if ($) {
		let n = $.provides, r = $.parent && $.parent.provides;
		r === n && (n = $.provides = Object.create(r)), n[e] = t;
	}
}
function Cn(e, t, n = !1) {
	let r = Hi();
	if (r || Or) {
		let i = Or ? Or._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var wn = /* @__PURE__ */ Symbol.for("v-scx"), Tn = () => Cn(wn);
function En(e, t, n) {
	return Dn(e, t, n);
}
function Dn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (Ji) {
		if (c === "sync") {
			let e = Tn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = $;
	u.call = (e, t, n) => H(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		G(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : un(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = Xt(e, n, u);
	return Ji && (f ? f.push(h) : d && h()), h;
}
function On(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? kn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Gi(this), s = Dn(i, a.bind(r), n);
	return o(), s;
}
function kn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var An = /* @__PURE__ */ Symbol("_vte"), jn = (e) => e.__isTeleport, Mn = /* @__PURE__ */ Symbol("_leaveCb");
function Nn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Nn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Pn(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Fn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function In(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Ln = /* @__PURE__ */ new WeakMap();
function Rn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Rn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (Bn(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Rn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? ra(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ L(v), b = v === t ? i : (e) => !In(_, e) && u(y, e), x = (e, t) => !(t && In(_, t));
	if (m != null && m !== p) {
		if (zn(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ z(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) Qt(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ z(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), Ln.delete(e);
				};
				t.id = -1, Ln.set(e, t), G(t, r);
			} else zn(e), i();
		}
	}
}
function zn(e) {
	let t = Ln.get(e);
	t && (t.flags |= 8, Ln.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var Bn = (e) => !!e.type.__asyncLoader, Vn = (e) => e.type.__isKeepAlive;
function Hn(e, t) {
	Wn(e, "a", t);
}
function Un(e, t) {
	Wn(e, "da", t);
}
function Wn(e, t, n = $) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Kn(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Vn(e.parent.vnode) && Gn(r, t, n, e), e = e.parent;
	}
}
function Gn(e, t, n, r) {
	let i = Kn(t, e, r, !0);
	$n(() => {
		c(r[t], i);
	}, n);
}
function Kn(e, t, n = $, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ve();
			let i = Gi(n), a = H(t, n, e, r);
			return i(), He(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var qn = (e) => (t, n = $) => {
	(!Ji || e === "sp") && Kn(e, (...e) => t(...e), n);
}, Jn = qn("bm"), Yn = qn("m"), Xn = qn("bu"), Zn = qn("u"), Qn = qn("bum"), $n = qn("um"), er = qn("sp"), tr = qn("rtg"), nr = qn("rtc");
function rr(e, t = $) {
	Kn("ec", e, t);
}
var ir = /* @__PURE__ */ Symbol.for("v-ndc");
function ar(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Ft(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ I(e), s = /* @__PURE__ */ It(e), e = et(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? zt(R(e[n])) : R(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (v(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
var or = (e) => e ? qi(e) ? ra(e) : or(e.parent) : null, sr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => or(e.parent),
	$root: (e) => or(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => gr(e),
	$forceUpdate: (e) => e.f ||= () => {
		un(e.update);
	},
	$nextTick: (e) => e.n ||= cn.bind(e.proxy),
	$watch: (e) => On.bind(e)
}), cr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), lr = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (cr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else dr && (s[n] = 0);
		}
		let d = sr[n], f, p;
		if (d) return n === "$attrs" && P(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return cr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || cr(n, c) || u(o, c) || u(i, c) || u(sr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function ur(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var dr = !0;
function fr(e) {
	let t = gr(e), n = e.proxy, i = e.ctx;
	dr = !1, t.beforeCreate && mr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: E, inheritAttrs: ie, components: ae, directives: D, filters: oe } = t;
	if (u && pr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ jt(t));
	}
	if (dr = !0, o) for (let e in o) {
		let t = o[e], a = aa({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) hr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Sn(t, e[t]);
		});
	}
	f && mr(f, e, "c");
	function O(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(Jn, p), O(Yn, m), O(Xn, g), O(Zn, _), O(Hn, y), O(Un, b), O(rr, T), O(nr, te), O(tr, ne), O(Qn, S), O($n, w), O(er, re), d(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === r && (e.render = ee), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), D && (e.directives = D), re && Fn(e);
}
function pr(e, t, n = r) {
	d(e) && (e = xr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Cn(r.from || n, r.default, !0) : Cn(r.from || n) : Cn(r), /* @__PURE__ */ z(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function mr(e, t, n) {
	H(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function hr(e, t, n, r) {
	let i = r.includes(".") ? kn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && En(i, n);
	} else if (h(e)) En(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => hr(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) && En(i, r, e);
	}
}
function gr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => _r(c, e, o, !0)), _r(c, t, o)), v(t) && a.set(t, c), c;
}
function _r(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && _r(e, a, n, !0), i && i.forEach((t) => _r(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = vr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var vr = {
	data: yr,
	props: Cr,
	emits: Cr,
	methods: Sr,
	computed: Sr,
	beforeCreate: W,
	created: W,
	beforeMount: W,
	mounted: W,
	beforeUpdate: W,
	updated: W,
	beforeDestroy: W,
	beforeUnmount: W,
	destroyed: W,
	unmounted: W,
	activated: W,
	deactivated: W,
	errorCaptured: W,
	serverPrefetch: W,
	components: Sr,
	directives: Sr,
	watch: wr,
	provide: yr,
	inject: br
};
function yr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function br(e, t) {
	return Sr(xr(e), xr(t));
}
function xr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function W(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Sr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Cr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), ur(e), ur(t ?? {})) : t;
}
function wr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = W(e[r], t[r]);
	return n;
}
function Tr() {
	return {
		app: null,
		config: {
			isNativeTag: i,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Er = 0;
function Dr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Tr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Er++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: sa,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || Z(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, ra(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (H(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Or;
				Or = l;
				try {
					return e();
				} finally {
					Or = t;
				}
			}
		};
		return l;
	};
}
var Or = null, kr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${E(t)}Modifiers`];
function Ar(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && kr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(se)));
	let c, l = i[c = ae(n)] || i[c = ae(T(n))];
	!l && o && (l = i[c = ae(E(n))]), l && H(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, H(u, e, 6, a);
	}
}
var jr = /* @__PURE__ */ new WeakMap();
function Mr(e, t, n = !1) {
	let r = n ? jr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Mr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Nr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, E(t)) || u(e, t));
}
function Pr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = yn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Pi(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Pi(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : Fr(c);
		}
	} catch (t) {
		bi.length = 0, $t(t, e, 1), v = Z(vi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = Ir(y, a)), b = Mi(b, y, !1, !0));
	}
	return n.dirs && (b = Mi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Nn(b, n.transition), v = b, yn(_), v;
}
var Fr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Ir = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Lr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Rr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (zr(o, r, n) && !Nr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Rr(r, o, l) : !!o;
	return !1;
}
function Rr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (zr(t, e, a) && !Nr(n, a)) return !0;
	}
	return !1;
}
function zr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !be(r, i) : r !== i;
}
function Br({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Vr = {}, Hr = () => Object.create(Vr), Ur = (e) => Object.getPrototypeOf(e) === Vr;
function Wr(e, t, n, r = !1) {
	let i = {}, a = Hr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Kr(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Mt(i) : e.type.props ? i : a, e.attrs = a;
}
function Gr(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ L(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Nr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = T(o);
					i[t] = qr(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		Kr(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = E(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = qr(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && Qe(e.attrs, "set", "");
}
function Kr(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = T(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Nr(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ L(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = qr(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function qr(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Gi(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === E(n)) && (r = !0));
	}
	return r;
}
var Jr = /* @__PURE__ */ new WeakMap();
function Yr(e, r, i = !1) {
	let a = i ? Jr : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = Yr(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = T(c[e]);
		Xr(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = T(e);
		if (Xr(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function Xr(e) {
	return e[0] !== "$" && !ee(e);
}
var Zr = (e) => e === "_" || e === "_ctx" || e === "$stable", Qr = (e) => d(e) ? e.map(Pi) : [Pi(e)], $r = (e, t, n) => {
	if (t._n) return t;
	let r = bn((...e) => Qr(t(...e)), n);
	return r._c = !1, r;
}, ei = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Zr(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = $r(n, i, r);
		else if (i != null) {
			let e = Qr(i);
			t[n] = () => e;
		}
	}
}, ti = (e, t) => {
	let n = Qr(t);
	e.slots.default = () => n;
}, ni = (e, t, n) => {
	for (let r in t) (n || !Zr(r)) && (e[r] = t[r]);
}, ri = (e, t, n) => {
	let r = e.slots = Hr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ni(r, t, n), n && O(r, "_", e, !0)) : ei(t, r);
	} else t && ti(e, t);
}, ii = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : ni(a, n, r) : (o = !n.$stable, ei(n, a)), s = n;
	} else n && (ti(e, n), s = { default: 1 });
	if (o) for (let e in a) !Zr(e) && s[e] == null && delete a[e];
}, G = gi;
function ai(e) {
	return oi(e);
}
function oi(e, i) {
	let a = ue();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Di(e, t) && (r = ye(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case _i:
				y(e, t, n, r);
				break;
			case vi:
				b(e, t, n, r);
				break;
			case yi:
				e ?? x(t, n, r, o);
				break;
			case K:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? D(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, A);
		}
		u != null && i ? Rn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Rn(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, si(e, a), s, u), _ && xn(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ri(f, r, e);
		}
		_ && xn(e, null, r, "beforeMount");
		let v = li(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && G(() => {
			try {
				f && Ri(f, r, e), v && g.enter(d), _ && xn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || hi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Fi(e[l]) : Pi(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, re = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && ci(r, !1), (g = h.onVnodeBeforeUpdate) && Ri(g, r, n, e), f && xn(n, e, r, "beforeUpdate"), r && ci(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, r, i, si(n, a), o) : s || de(e, n, l, null, r, i, si(n, a), o, !1), u > 0) {
			if (u & 16) ie(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ie(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && G(() => {
			g && Ri(g, r, n, e), f && xn(n, e, r, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === K || !Di(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, ie = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && ui(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, D = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : O(t, n, r, i, a, o, c) : se(e, t, c);
	}, O = (e, t, n, r, i, a, o) => {
		let s = e.component = Vi(e, r, i);
		if (Vn(e) && (s.ctx.renderer = A), Yi(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = Z(vi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, se = (e, t, n) => {
		let r = t.component = e.component;
		if (Lr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			le(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = fi(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							G(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				ci(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ri(d, s, t, c), ci(e, !0);
				let f = Pr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ye(p), e, i, a), t.el = f.el, u === null && Br(e, f.el), r && G(r, i), (d = t.props && t.props.onVnodeUpdated) && G(() => Ri(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Bn(t);
				if (ci(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && Ri(o, d, t), ci(e, !0), s && Ce) {
					let t = () => {
						e.subTree = Pr(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Pr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && G(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					G(() => Ri(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Bn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && G(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new De(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => un(u), ci(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Gr(e, t.props, r, n), ii(e, t.children, n), Ve(), pn(e), He();
	}, de = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, fe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? Fi(t[p]) : Pi(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : T(t, r, i, a, o, s, c, l, f);
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Fi(t[u]) : Pi(t[u]);
			if (Di(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Fi(t[p]) : Pi(t[p]);
			if (Di(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Fi(t[u]) : Pi(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Fi(t[u]) : Pi(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					he(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Di(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? he(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? di(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || mi(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(n, r, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, A);
			return;
		}
		if (c === K) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === yi) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[Mn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), G(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[Mn];
				a._isLeaving && a[Mn](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ve(), Rn(s, null, n, e, !0), He()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Bn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ri(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && xn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, A, r) : l && !l.hasOnce && (a !== K || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === K && d & 384 || !i && u & 16) && ve(c, t, n), r && k(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && G(() => {
			_ && Ri(_, t, e), h && xn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, k = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === K) {
			ge(n, r);
			return;
		}
		if (t === yi) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, _e = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		pi(c), pi(l), r && oe(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && G(s, t), G(() => {
			e.isUnmounted = !0;
		}, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[An];
		return n ? h(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, pn(r), mn(), !1);
	}, A = {
		p: v,
		um: he,
		m: me,
		r: k,
		mt: O,
		mc: T,
		pc: de,
		pbc: E,
		n: ye,
		o: e
	}, Se, Ce;
	return i && ([Se, Ce] = i(A)), {
		render: xe,
		hydrate: Se,
		createApp: Dr(xe, Se)
	};
}
function si({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ci({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function li(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ui(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Fi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && ui(t, a)), a.type === _i && (a.patchFlag === -1 && (a = i[e] = Fi(a)), a.el = t.el), a.type === vi && !a.el && (a.el = t.el);
	}
}
function di(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function fi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : fi(t);
}
function pi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function mi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? mi(t.subTree) : null;
}
var hi = (e) => e.__isSuspense;
function gi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : fn(e);
}
var K = /* @__PURE__ */ Symbol.for("v-fgt"), _i = /* @__PURE__ */ Symbol.for("v-txt"), vi = /* @__PURE__ */ Symbol.for("v-cmt"), yi = /* @__PURE__ */ Symbol.for("v-stc"), bi = [], q = null;
function J(e = !1) {
	bi.push(q = e ? null : []);
}
function xi() {
	bi.pop(), q = bi[bi.length - 1] || null;
}
var Si = 1;
function Ci(e, t = !1) {
	Si += e, e < 0 && q && t && (q.hasOnce = !0);
}
function wi(e) {
	return e.dynamicChildren = Si > 0 ? q || n : null, xi(), Si > 0 && q && q.push(e), e;
}
function Y(e, t, n, r, i, a) {
	return wi(X(e, t, n, r, i, a, !0));
}
function Ti(e, t, n, r, i) {
	return wi(Z(e, t, n, r, i, !0));
}
function Ei(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Di(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Oi = ({ key: e }) => e ?? null, ki = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ z(e) || h(e) ? {
	i: _n,
	r: e,
	k: t,
	f: !!n
} : e);
function X(e, t = null, n = null, r = 0, i = null, a = e === K ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Oi(t),
		ref: t && ki(t),
		scopeId: vn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: _n
	};
	return s ? (Ii(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Si > 0 && !o && q && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && q.push(c), c;
}
var Z = Ai;
function Ai(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === ir) && (e = vi), Ei(e)) {
		let r = Mi(e, t, !0);
		return n && Ii(r, n), Si > 0 && !a && q && (r.shapeFlag & 6 ? q[q.indexOf(e)] = r : q.push(r)), r.patchFlag = -2, r;
	}
	if (ia(e) && (e = e.__vccOpts), t) {
		t = ji(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = k(e)), v(n) && (/* @__PURE__ */ Lt(n) && !d(n) && (n = s({}, n)), t.style = de(n));
	}
	let o = g(e) ? 1 : hi(e) ? 128 : jn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return X(e, t, n, r, i, o, a, !0);
}
function ji(e) {
	return e ? /* @__PURE__ */ Lt(e) || Ur(e) ? s({}, e) : e : null;
}
function Mi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Li(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Oi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(ki(t)) : [a, ki(t)] : ki(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== K ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Mi(e.ssContent),
		ssFallback: e.ssFallback && Mi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Nn(u, c.clone(u)), u;
}
function Ni(e = " ", t = 0) {
	return Z(_i, null, e, t);
}
function Q(e = "", t = !1) {
	return t ? (J(), Ti(vi, null, e)) : Z(vi, null, e);
}
function Pi(e) {
	return e == null || typeof e == "boolean" ? Z(vi) : d(e) ? Z(K, null, e.slice()) : Ei(e) ? Fi(e) : Z(_i, null, String(e));
}
function Fi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mi(e);
}
function Ii(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Ii(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Ur(t) ? t._ctx = _n : r === 3 && _n && (_n.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else if (h(t)) {
		if (r & 65) {
			Ii(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: _n
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Ni(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Li(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = de([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ri(e, t, n, r = null) {
	H(e, t, 7, [n, r]);
}
var zi = Tr(), Bi = 0;
function Vi(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || zi, o = {
		uid: Bi++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new we(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Yr(i, a),
		emitsOptions: Mr(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Ar.bind(null, o), e.ce && e.ce(o), o;
}
var $ = null, Hi = () => $ || _n, Ui, Wi;
{
	let e = ue(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ui = t("__VUE_INSTANCE_SETTERS__", (e) => $ = e), Wi = t("__VUE_SSR_SETTERS__", (e) => Ji = e);
}
var Gi = (e) => {
	let t = $;
	return Ui(e), e.scope.on(), () => {
		e.scope.off(), Ui(t);
	};
}, Ki = () => {
	$ && $.scope.off(), Ui(null);
};
function qi(e) {
	return e.vnode.shapeFlag & 4;
}
var Ji = !1;
function Yi(e, t = !1, n = !1) {
	t && Wi(t);
	let { props: r, children: i } = e.vnode, a = qi(e);
	Wr(e, r, a, t), ri(e, i, n || t);
	let o = a ? Xi(e, t) : void 0;
	return t && Wi(!1), o;
}
function Xi(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, lr);
	let { setup: r } = n;
	if (r) {
		Ve();
		let n = e.setupContext = r.length > 1 ? na(e) : null, i = Gi(e), a = Qt(r, e, 0, [e.props, n]), o = y(a);
		if (He(), i(), (o || e.sp) && !Bn(e) && Fn(e), o) {
			if (a.then(Ki, Ki), t) return a.then((n) => {
				Zi(e, n, t);
			}).catch((t) => {
				$t(t, e, 0);
			});
			e.asyncDep = a;
		} else Zi(e, a, t);
	} else ea(e, t);
}
function Zi(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Ut(t)), ea(e, n);
}
var Qi, $i;
function ea(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && Qi && !i.render) {
			let t = i.template || gr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = Qi(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o));
			}
		}
		e.render = i.render || r, $i && $i(e);
	}
	{
		let t = Gi(e);
		Ve();
		try {
			fr(e);
		} finally {
			He(), t();
		}
	}
}
var ta = { get(e, t) {
	return P(e, "get", ""), e[t];
} };
function na(e) {
	return {
		attrs: new Proxy(e.attrs, ta),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ra(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Ut(Rt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in sr) return sr[n](e);
		},
		has(e, t) {
			return t in e || t in sr;
		}
	}) : e.proxy;
}
function ia(e) {
	return h(e) && "__vccOpts" in e;
}
var aa = (e, t) => /* @__PURE__ */ Gt(e, t, Ji);
function oa(e, t, n) {
	try {
		Ci(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? Ei(t) ? Z(e, null, [t]) : Z(e, t) : Z(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ei(n) && (n = [n]), Z(e, t, n));
	} finally {
		Ci(1);
	}
}
var sa = "3.5.40", ca = void 0, la = typeof window < "u" && window.trustedTypes;
if (la) try {
	ca = /* @__PURE__ */ la.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ua = ca ? (e) => ca.createHTML(e) : (e) => e, da = "http://www.w3.org/2000/svg", fa = "http://www.w3.org/1998/Math/MathML", pa = typeof document < "u" ? document : null, ma = pa && /* @__PURE__ */ pa.createElement("template"), ha = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? pa.createElementNS(da, e) : t === "mathml" ? pa.createElementNS(fa, e) : n ? pa.createElement(e, { is: n }) : pa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => pa.createTextNode(e),
	createComment: (e) => pa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => pa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			ma.innerHTML = ua(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = ma.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ga = /* @__PURE__ */ Symbol("_vtc");
function _a(e, t, n) {
	let r = e[ga];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var va = /* @__PURE__ */ Symbol("_vod"), ya = /* @__PURE__ */ Symbol("_vsh"), ba = /* @__PURE__ */ Symbol(""), xa = /(?:^|;)\s*display\s*:/;
function Sa(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? wa(r, t, "");
		}
		else for (let e in t) n[e] ?? wa(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? wa(r, i, "") : Oa(e, i, !g(t) && t ? t[i] : void 0, o) || wa(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[ba];
			e && (n += ";" + e), r.cssText = n, a = xa.test(n);
		}
	} else t && e.removeAttribute("style");
	va in e && (e[va] = a ? r.display : "", e[ya] && (r.display = "none"));
}
var Ca = /\s*!important$/;
function wa(e, t, n) {
	if (d(n)) n.forEach((n) => wa(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Da(e, t);
		Ca.test(n) ? e.setProperty(E(r), n.replace(Ca, ""), "important") : e[r] = n;
	}
}
var Ta = [
	"Webkit",
	"Moz",
	"ms"
], Ea = {};
function Da(e, t) {
	let n = Ea[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return Ea[t] = r;
	r = ie(r);
	for (let n = 0; n < Ta.length; n++) {
		let i = Ta[n] + r;
		if (i in e) return Ea[t] = i;
	}
	return t;
}
function Oa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var ka = "http://www.w3.org/1999/xlink";
function Aa(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ka, t.slice(6, t.length)) : e.setAttributeNS(ka, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function ja(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ua(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ma(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Na(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Pa = /* @__PURE__ */ Symbol("_vei");
function Fa(e, t, n, r, i = null) {
	let a = e[Pa] || (e[Pa] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ra(t);
		r ? Ma(e, n, a[t] = Ha(r, i), s) : o && (Na(e, n, o, s), a[t] = void 0);
	}
}
var Ia = /(Once|Passive|Capture)$/, La = /^on:?(?:Once|Passive|Capture)$/;
function Ra(e) {
	let t, n;
	for (; (n = e.match(Ia)) && !La.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : E(e.slice(2)), t];
}
var za = 0, Ba = /* @__PURE__ */ Promise.resolve(), Va = () => za ||= (Ba.then(() => za = 0), Date.now());
function Ha(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (d(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && H(e, t, 5, a);
			}
		} else H(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Va(), n;
}
var Ua = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wa = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? _a(e, r, c) : t === "style" ? Sa(e, n, r) : a(t) ? o(t) || Fa(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ga(e, t, r, c)) ? (ja(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Aa(e, t, r, c, s, t !== "value")) : e._isVueCE && (Ka(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? ja(e, T(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Aa(e, t, r, c));
};
function Ga(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ua(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Ua(t) && g(n) ? !1 : t in e;
}
function Ka(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var qa = {};
// @__NO_SIDE_EFFECTS__
function Ja(e, t, n) {
	let r = /* @__PURE__ */ Pn(e, t);
	C(r) && (r = s({}, r, t));
	class i extends Xa {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var Ya = typeof HTMLElement < "u" ? HTMLElement : class {}, Xa = class e extends Ya {
	constructor(e, t = {}, n = to) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== to ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(s({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			this._pendingResolve = void 0, this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, cn(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !d(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = ce(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[T(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._mount(e);
		}, t = this._def.__asyncLoader;
		t ? this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}) : e(this._def);
	}
	_mount(e) {
		this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) u(this, e) || Object.defineProperty(this, e, { get: () => V(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = d(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(T)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : qa, r = T(e);
		t && this._numberProps && this._numberProps[r] && (n = ce(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === qa ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(E(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(E(e), t + "") : t || this.removeAttribute(E(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), eo(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = Z(this._def, s(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, C(t[0]) ? s({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), E(e) !== e && t(E(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
}, Za = /* @__PURE__ */ s({ patchProp: Wa }, ha), Qa;
function $a() {
	return Qa ||= ai(Za);
}
var eo = ((...e) => {
	$a().render(...e);
}), to = ((...e) => {
	let t = $a().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = ro(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, no(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function no(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ro(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/components/StoryCard.vue?vue&type=script&setup=true&lang.ts
var io = { class: "story-card" }, ao = { class: "story-card__meta" }, oo = { class: "story-card__category" }, so = { class: "story-card__headline" }, co = { class: "story-card__body" }, lo = {
	key: 0,
	class: "story-card__disclaimer"
}, uo = {
	key: 1,
	class: "story-card__read"
}, fo = ["checked"], po = /*@__PURE__*/ Pn({
	__name: "StoryCard",
	props: {
		category: { type: String },
		headline: { type: String },
		body: { type: String },
		kind: {
			default: "news",
			type: String
		},
		sentiment: {
			default: "neutral",
			type: String
		},
		read: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["toggle-read"],
	setup(e) {
		return (t, n) => (J(), Y("article", io, [
			X("div", ao, [X("span", oo, A(e.category), 1), e.sentiment === "neutral" ? Q("", !0) : (J(), Y("span", {
				key: 0,
				class: k(["story-card__sentiment", `story-card__sentiment--${e.sentiment}`])
			}, A(e.sentiment === "up" ? "▲" : "▼"), 3))]),
			X("h2", so, A(e.headline), 1),
			X("p", co, A(e.body), 1),
			e.kind === "ai-suggestion" ? (J(), Y("div", lo, " SUGESTIA AI · NIE PORADA ")) : Q("", !0),
			e.kind === "news" ? (J(), Y("label", uo, [X("input", {
				type: "checkbox",
				checked: e.read,
				onChange: n[0] ||= (e) => t.$emit("toggle-read")
			}, null, 40, fo), n[1] ||= Ni(" Przeczytane ", -1)])) : Q("", !0)
		]));
	}
}), mo = ".story-card[data-v-aa48fdf2]{border:1px solid var(--insider-hairline-strong);background:var(--insider-bg);border-radius:.5rem;flex-direction:column;width:min(360px,100%);height:340px;padding:1.5rem;display:flex}.story-card__meta[data-v-aa48fdf2]{flex:none;justify-content:space-between;align-items:center;margin-bottom:.75rem;display:flex}.story-card__category[data-v-aa48fdf2]{font-family:var(--insider-font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--insider-accent);font-size:.75rem}.story-card__sentiment[data-v-aa48fdf2]{font-family:var(--insider-font-mono);font-size:.85rem}.story-card__sentiment--up[data-v-aa48fdf2]{color:var(--insider-up)}.story-card__sentiment--down[data-v-aa48fdf2]{color:var(--insider-down)}.story-card__headline[data-v-aa48fdf2]{font-family:var(--insider-font-sans);color:var(--insider-text-primary);flex:none;margin:0 0 .5rem;font-size:1.25rem;font-weight:700}.story-card__body[data-v-aa48fdf2]{min-height:0;color:var(--insider-text-secondary);flex:auto;margin:0;font-size:.95rem;line-height:1.5;overflow-y:auto}.story-card__disclaimer[data-v-aa48fdf2]{border-top:1px solid var(--insider-hairline);font-family:var(--insider-font-mono);letter-spacing:.06em;color:var(--insider-accent);flex:none;margin-top:1rem;padding-top:.75rem;font-size:.7rem}.story-card__read[data-v-aa48fdf2]{border-top:1px solid var(--insider-hairline);font-family:var(--insider-font-mono);color:var(--insider-text-secondary);cursor:pointer;flex:none;align-items:center;gap:.4rem;margin-top:.85rem;padding-top:.6rem;font-size:.75rem;display:flex}", ho = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, go = /*#__PURE__*/ ho(po, [["styles", [mo]], ["__scopeId", "data-v-aa48fdf2"]]), _o = "insider:suggestions-cache", vo = 864e5;
function yo() {
	try {
		let e = localStorage.getItem(_o);
		return e ? JSON.parse(e) : null;
	} catch {
		return null;
	}
}
function bo(e) {
	try {
		localStorage.setItem(_o, JSON.stringify(e));
	} catch {}
}
function xo(e, t) {
	let n = Date.now() - e.cachedAt < vo, r = t === null || e.newsTimestamp === null || t <= e.newsTimestamp;
	return n && r;
}
function So() {
	let e = /* @__PURE__ */ B(null), t = /* @__PURE__ */ B(!1), n = /* @__PURE__ */ B(null);
	async function r(r, i, a = {}) {
		if (!a.force) {
			let t = yo();
			if (t && xo(t, i)) {
				e.value = t.result;
				return;
			}
		}
		if (a.cacheOnly) return;
		let o = r.filter((e) => e.kind === "news").map((e) => ({
			category: e.category,
			headline: e.headline,
			body: e.body
		}));
		if (!o.length) {
			n.value = "Brak newsów do analizy — najpierw zbierz informacje.";
			return;
		}
		t.value = !0, n.value = null;
		try {
			let t = await fetch("/api/suggestions", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ articles: o })
			});
			if (!t.ok) {
				let e = await t.json().catch(() => null);
				throw Error(e?.error ?? `Backend odpowiedział ${t.status}.`);
			}
			let n = await t.json();
			e.value = n, bo({
				result: n,
				newsTimestamp: i,
				cachedAt: Date.now()
			});
		} catch (e) {
			n.value = e instanceof Error ? e.message : "Nieznany błąd generowania sugestii.";
		} finally {
			t.value = !1;
		}
	}
	return {
		result: e,
		isLoading: t,
		error: n,
		generate: r
	};
}
//#endregion
//#region src/components/SuggestionCard.vue?vue&type=script&setup=true&lang.ts
var Co = { class: "suggestion-card__meta" }, wo = { class: "suggestion-card__category" }, To = { class: "suggestion-card__name" }, Eo = { class: "suggestion-card__thesis" }, Do = /*#__PURE__*/ ho(/* @__PURE__ */ Pn({
	__name: "SuggestionCard",
	props: {
		name: { type: String },
		thesis: { type: String },
		relatedCategory: { type: String },
		horizon: { type: String }
	},
	setup(e) {
		return (t, n) => (J(), Y("article", { class: k(["suggestion-card", `suggestion-card--${e.horizon}`]) }, [
			X("div", Co, [X("span", wo, A(e.relatedCategory), 1)]),
			X("h3", To, A(e.name), 1),
			X("p", Eo, A(e.thesis), 1),
			n[0] ||= X("div", { class: "suggestion-card__disclaimer" }, "SUGESTIA AI · NIE PORADA", -1)
		], 2));
	}
}), [["styles", [".suggestion-card[data-v-ad61752e]{border:1px solid var(--insider-hairline-strong);background:var(--insider-bg);border-left-width:3px;border-radius:.5rem;width:100%;padding:1.25rem}.suggestion-card--quick-trade[data-v-ad61752e]{border-left-color:var(--insider-accent)}.suggestion-card--hold-longer[data-v-ad61752e]{border-left-color:var(--insider-hairline-strong)}.suggestion-card__meta[data-v-ad61752e]{font-family:var(--insider-font-mono);margin-bottom:.5rem;font-size:.75rem}.suggestion-card__category[data-v-ad61752e]{color:var(--insider-text-secondary)}.suggestion-card__name[data-v-ad61752e]{font-family:var(--insider-font-sans);color:var(--insider-text-primary);margin:0 0 .4rem;font-size:1.05rem;font-weight:700}.suggestion-card__thesis[data-v-ad61752e]{color:var(--insider-text-secondary);margin:0;font-size:.9rem;line-height:1.5}.suggestion-card__disclaimer[data-v-ad61752e]{border-top:1px solid var(--insider-hairline);font-family:var(--insider-font-mono);letter-spacing:.06em;color:var(--insider-accent);margin-top:.85rem;padding-top:.6rem;font-size:.65rem}"]], ["__scopeId", "data-v-ad61752e"]]), Oo = { class: "suggestions-panel" }, ko = {
	key: 0,
	class: "suggestions-panel__disabled"
}, Ao = ["disabled"], jo = {
	key: 2,
	class: "suggestions-panel__error"
}, Mo = { class: "suggestions-panel__generated-at" }, No = { class: "suggestions-panel__group" }, Po = {
	key: 0,
	class: "suggestions-panel__empty"
}, Fo = { class: "suggestions-panel__group" }, Io = {
	key: 0,
	class: "suggestions-panel__empty"
}, Lo = /*#__PURE__*/ ho(/* @__PURE__ */ Pn({
	__name: "SuggestionsPanel",
	props: {
		stories: { type: Array },
		newsTimestamp: { type: [Number, null] }
	},
	setup(e) {
		let t = e, { result: n, isLoading: r, error: i, generate: a } = So();
		Yn(() => {});
		function o() {
			a(t.stories, t.newsTimestamp, { force: !!n.value });
		}
		return (e, t) => (J(), Y("section", Oo, [
			t[2] ||= X("p", { class: "suggestions-panel__intro" }, " Konkretne spółki/ETF-y jako pomysły inwestycyjne na bazie zebranych newsów — nie porada, wyłącznie materiał do dalszego zbadania. ", -1),
			V(!1) ? (J(), Y("button", {
				key: 1,
				type: "button",
				class: "suggestions-panel__generate",
				disabled: V(r),
				onClick: o
			}, A(V(r) ? "ANALIZA…" : V(n) ? "ODŚWIEŻ SUGESTIE AI" : "GENERUJ SUGESTIE AI"), 9, Ao)) : (J(), Y("p", ko, " Sugestie AI są wyłączone w tej wersji demo — wymagają backendu z kluczem Anthropic, który nie jest tu uruchomiony. Cały kod (backend + prompt) jest w repozytorium. ")),
			V(i) ? (J(), Y("p", jo, A(V(i)), 1)) : Q("", !0),
			V(n) ? (J(), Y(K, { key: 3 }, [
				X("p", Mo, " Wygenerowano " + A(new Date(V(n).generatedAt).toLocaleTimeString("pl-PL")) + " · zapamiętane na 24h lub do nowych newsów ", 1),
				X("div", No, [
					t[0] ||= X("h2", { class: "suggestions-panel__group-title" }, "⚡ SZYBKI STRZAŁ · 1-3 dni", -1),
					V(n).quickTrade.length ? Q("", !0) : (J(), Y("p", Po, " Brak wyraźnego świeżego katalizatora w bieżących newsach. ")),
					(J(!0), Y(K, null, ar(V(n).quickTrade, (e, t) => (J(), Ti(Do, {
						key: `quick-${t}`,
						horizon: "quick-trade",
						name: e.name,
						thesis: e.thesis,
						"related-category": e.relatedCategory
					}, null, 8, [
						"name",
						"thesis",
						"related-category"
					]))), 128))
				]),
				X("div", Fo, [
					t[1] ||= X("h2", { class: "suggestions-panel__group-title" }, "📌 DO POTRZYMANIA · do końca tygodnia", -1),
					V(n).holdLonger.length ? Q("", !0) : (J(), Y("p", Io, " Brak wyraźnego szerszego trendu w bieżących newsach. ")),
					(J(!0), Y(K, null, ar(V(n).holdLonger, (e, t) => (J(), Ti(Do, {
						key: `hold-${t}`,
						horizon: "hold-longer",
						name: e.name,
						thesis: e.thesis,
						"related-category": e.relatedCategory
					}, null, 8, [
						"name",
						"thesis",
						"related-category"
					]))), 128))
				])
			], 64)) : Q("", !0)
		]));
	}
}), [["styles", [".suggestions-panel[data-v-91c0f2d4]{flex-direction:column;align-items:center;gap:1rem;width:min(360px,100%);display:flex}.suggestions-panel__intro[data-v-91c0f2d4]{color:var(--insider-text-secondary);text-align:center;margin:0;font-size:.85rem;line-height:1.5}.suggestions-panel__generate[data-v-91c0f2d4]{border:1px solid var(--insider-accent);width:100%;color:var(--insider-accent);font-family:var(--insider-font-mono);letter-spacing:.08em;cursor:pointer;background:0 0;border-radius:.5rem;padding:.85rem;font-size:.85rem;font-weight:600}.suggestions-panel__generate[data-v-91c0f2d4]:disabled{opacity:.6;cursor:default}.suggestions-panel__disabled[data-v-91c0f2d4]{border:1px dashed var(--insider-text-secondary);color:var(--insider-text-secondary);text-align:center;border-radius:.5rem;margin:0;padding:.85rem;font-size:.8rem;line-height:1.5}.suggestions-panel__error[data-v-91c0f2d4]{color:var(--insider-down);text-align:center;font-size:.85rem}.suggestions-panel__generated-at[data-v-91c0f2d4]{font-family:var(--insider-font-mono);color:var(--insider-text-secondary);margin:0;font-size:.7rem}.suggestions-panel__group[data-v-91c0f2d4]{flex-direction:column;gap:.75rem;width:100%;display:flex}.suggestions-panel__group-title[data-v-91c0f2d4]{font-family:var(--insider-font-mono);letter-spacing:.06em;color:var(--insider-text-primary);margin:0;font-size:.75rem}.suggestions-panel__empty[data-v-91c0f2d4]{color:var(--insider-text-secondary);margin:0;font-size:.85rem}"]], ["__scopeId", "data-v-91c0f2d4"]]), Ro = {
	key: 0,
	class: "ticker-bar"
}, zo = { class: "ticker-bar__track" }, Bo = { class: "ticker-bar__symbol" }, Vo = { class: "ticker-bar__price" }, Ho = /*#__PURE__*/ ho(/* @__PURE__ */ Pn({
	__name: "TickerBar",
	props: { quotes: { type: Array } },
	setup(e) {
		let t = e, n = aa(() => [...t.quotes, ...t.quotes]);
		return (t, r) => e.quotes.length ? (J(), Y("div", Ro, [X("div", zo, [(J(!0), Y(K, null, ar(n.value, (e, t) => (J(), Y("span", {
			key: `${e.symbol}-${t}`,
			class: "ticker-bar__item"
		}, [
			X("span", Bo, A(e.symbol), 1),
			X("span", Vo, A(e.price.toFixed(2)), 1),
			X("span", { class: k(["ticker-bar__change", e.changePercent >= 0 ? "ticker-bar__change--up" : "ticker-bar__change--down"]) }, A(e.changePercent >= 0 ? "▲" : "▼") + " " + A(Math.abs(e.changePercent).toFixed(2)) + "% ", 3)
		]))), 128))])])) : Q("", !0);
	}
}), [["styles", [".ticker-bar[data-v-25b7b3c9]{border-bottom:1px solid var(--insider-hairline);width:100%;max-width:360px;padding-bottom:.75rem;overflow:hidden}.ticker-bar__track[data-v-25b7b3c9]{gap:1.5rem;width:max-content;animation:20s linear infinite ticker-scroll-25b7b3c9;display:flex}@keyframes ticker-scroll-25b7b3c9{0%{transform:translate(0)}to{transform:translate(-50%)}}.ticker-bar__item[data-v-25b7b3c9]{font-family:var(--insider-font-mono);white-space:nowrap;align-items:baseline;gap:.4rem;font-size:.8rem;display:flex}.ticker-bar__symbol[data-v-25b7b3c9]{color:var(--insider-text-primary);font-weight:600}.ticker-bar__price[data-v-25b7b3c9]{color:var(--insider-text-secondary)}.ticker-bar__change--up[data-v-25b7b3c9]{color:var(--insider-up)}.ticker-bar__change--down[data-v-25b7b3c9]{color:var(--insider-down)}"]], ["__scopeId", "data-v-25b7b3c9"]]), Uo = { class: "world-clocks" }, Wo = { class: "world-clocks__city" }, Go = { class: "world-clocks__time" }, Ko = { class: "world-clocks__date" }, qo = /*#__PURE__*/ ho(/* @__PURE__ */ Pn({
	__name: "WorldClocks",
	setup(e) {
		let t = [
			{
				code: "WAW",
				timeZone: "Europe/Warsaw",
				openMinutes: 540,
				closeMinutes: 1020
			},
			{
				code: "LON",
				timeZone: "Europe/London",
				openMinutes: 480,
				closeMinutes: 990
			},
			{
				code: "NYC",
				timeZone: "America/New_York",
				openMinutes: 570,
				closeMinutes: 960
			},
			{
				code: "TYO",
				timeZone: "Asia/Tokyo",
				openMinutes: 540,
				closeMinutes: 900
			}
		], n = /* @__PURE__ */ B(/* @__PURE__ */ new Date()), r;
		Yn(() => {
			r = setInterval(() => {
				n.value = /* @__PURE__ */ new Date();
			}, 1e3);
		}), Qn(() => {
			r && clearInterval(r);
		});
		function i(e, t) {
			let n = new Intl.DateTimeFormat("en-US", {
				timeZone: t,
				weekday: "short",
				hour: "numeric",
				minute: "numeric",
				hourCycle: "h23"
			}).formatToParts(e), r = Object.fromEntries(n.map((e) => [e.type, e.value]));
			return {
				weekday: r.weekday ?? "",
				minutesOfDay: Number(r.hour) * 60 + Number(r.minute)
			};
		}
		let a = aa(() => t.map((e) => {
			let { weekday: t, minutesOfDay: r } = i(n.value, e.timeZone), a = t !== "Sat" && t !== "Sun" && r >= e.openMinutes && r < e.closeMinutes;
			return {
				code: e.code,
				isOpen: a,
				time: new Intl.DateTimeFormat("pl-PL", {
					timeZone: e.timeZone,
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					hourCycle: "h23"
				}).format(n.value),
				date: new Intl.DateTimeFormat("pl-PL", {
					timeZone: e.timeZone,
					day: "2-digit",
					month: "2-digit"
				}).format(n.value)
			};
		}));
		return (e, t) => (J(), Y("div", Uo, [(J(!0), Y(K, null, ar(a.value, (e) => (J(), Y("div", {
			key: e.code,
			class: "world-clocks__item"
		}, [
			X("span", Wo, [X("span", { class: k(["world-clocks__dot", e.isOpen ? "world-clocks__dot--open" : "world-clocks__dot--closed"]) }, null, 2), Ni(" " + A(e.code), 1)]),
			X("span", Go, A(e.time), 1),
			X("span", Ko, A(e.date), 1)
		]))), 128))]));
	}
}), [["styles", [".world-clocks[data-v-a259cd2e]{border-bottom:1px solid var(--insider-hairline);grid-template-columns:repeat(4,1fr);gap:.5rem;width:100%;max-width:360px;padding-bottom:1rem;display:grid}.world-clocks__item[data-v-a259cd2e]{font-family:var(--insider-font-mono);flex-direction:column;align-items:center;gap:.15rem;min-width:0;display:flex}.world-clocks__city[data-v-a259cd2e]{letter-spacing:.05em;color:var(--insider-text-secondary);align-items:center;gap:.3rem;font-size:.65rem;font-weight:600;display:flex}.world-clocks__dot[data-v-a259cd2e]{border-radius:50%;flex:none;width:.35rem;height:.35rem}.world-clocks__dot--open[data-v-a259cd2e]{background:var(--insider-up)}.world-clocks__dot--closed[data-v-a259cd2e]{background:var(--insider-text-secondary)}.world-clocks__time[data-v-a259cd2e]{color:var(--insider-text-primary);font-size:.85rem;font-weight:600}.world-clocks__date[data-v-a259cd2e]{color:var(--insider-text-secondary);font-size:.6rem}"]], ["__scopeId", "data-v-a259cd2e"]]), Jo = "https://finnhub.io/api/v1";
function Yo() {
	return "d9llbm9r01qomrv3p220d9llbm9r01qomrv3p22g";
}
//#endregion
//#region src/composables/useFinnhubNews.ts
var Xo = 8;
function Zo(e) {
	return {
		id: String(e.id),
		category: e.source || e.category || "Rynek",
		headline: e.headline,
		body: e.summary || "Źródło nie podało podsumowania.",
		kind: "news",
		sentiment: "neutral",
		url: e.url
	};
}
function Qo() {
	let e = /* @__PURE__ */ B([]), t = /* @__PURE__ */ B(!1), n = /* @__PURE__ */ B(null), r = /* @__PURE__ */ B(null);
	async function i() {
		t.value = !0, n.value = null;
		try {
			let t = Yo(), n = await fetch(`${Jo}/news?category=general&token=${t}`);
			if (!n.ok) throw Error(`Finnhub odpowiedział ${n.status} przy pobieraniu newsów.`);
			let i = (await n.json()).slice(0, Xo);
			e.value = i.map(Zo), r.value = i[0]?.datetime ?? null;
		} catch (e) {
			n.value = e instanceof Error ? e.message : "Nieznany błąd pobierania newsów.";
		} finally {
			t.value = !1;
		}
	}
	return {
		stories: e,
		isLoading: t,
		error: n,
		latestPublishedAt: r,
		load: i
	};
}
//#endregion
//#region src/composables/useTicker.ts
var $o = [
	"AAPL",
	"NVDA",
	"MSFT",
	"TSLA",
	"GOOGL"
];
function es() {
	let e = /* @__PURE__ */ B([]), t = /* @__PURE__ */ B(!1), n = /* @__PURE__ */ B(null);
	async function r() {
		t.value = !0, n.value = null;
		try {
			let t = Yo();
			e.value = await Promise.all($o.map(async (e) => {
				let n = await fetch(`${Jo}/quote?symbol=${e}&token=${t}`);
				if (!n.ok) throw Error(`Finnhub odpowiedział ${n.status} dla ${e}.`);
				let r = await n.json();
				return {
					symbol: e,
					price: r.c,
					changePercent: r.dp
				};
			}));
		} catch (e) {
			n.value = e instanceof Error ? e.message : "Nieznany błąd pobierania kursów.";
		} finally {
			t.value = !1;
		}
	}
	return {
		quotes: e,
		isLoading: t,
		error: n,
		load: r
	};
}
//#endregion
//#region src/App.vue?vue&type=script&setup=true&lang.ts
var ts = { class: "app-shell" }, ns = { class: "app-shell__header" }, rs = { class: "app-shell__header-inner" }, is = {
	key: 0,
	class: "app-shell__live"
}, as = { class: "app-shell__content" }, os = {
	key: 1,
	class: "app-shell__boot"
}, ss = {
	key: 0,
	class: "app-shell__error"
}, cs = {
	key: 1,
	class: "app-shell__error"
}, ls = { class: "app-shell__tabs" }, us = {
	key: 0,
	class: "app-shell__tab-lock"
}, ds = { class: "app-shell__nav" }, fs = ["disabled"], ps = { class: "app-shell__nav-count" }, ms = ["disabled"], hs = {
	key: 0,
	class: "app-shell__locked"
}, gs = { class: "app-shell__locked-actions" }, _s = {
	key: 0,
	class: "app-shell__bypass-confirm"
}, vs = {
	key: 0,
	class: "app-shell__bypass-notice"
}, ys = 700, bs = 50, xs = /*#__PURE__*/ ho(/* @__PURE__ */ Pn({
	__name: "App",
	setup(e) {
		let t = [
			"ŁĄCZENIE Z FINNHUB…",
			"POBIERANIE NEWSÓW…",
			"AKTUALIZACJA KURSÓW…"
		], { stories: n, error: r, latestPublishedAt: i, load: a } = Qo(), { quotes: o, error: s, load: c } = es(), l = /* @__PURE__ */ B("idle"), u = /* @__PURE__ */ B("newsy"), d = /* @__PURE__ */ B(0), f;
		async function p() {
			l.value = "loading", d.value = 0, f = setInterval(() => {
				d.value = (d.value + 1) % t.length;
			}, ys), await Promise.all([a(), c()]), f && clearInterval(f), l.value = "ready";
		}
		let m = /* @__PURE__ */ B(0), h = aa(() => n.value[m.value]);
		function g() {
			m.value < n.value.length - 1 && (m.value += 1);
		}
		function _() {
			m.value > 0 && --m.value;
		}
		let v = /* @__PURE__ */ B(/* @__PURE__ */ new Set()), y = aa(() => n.value.filter((e) => v.value.has(e.id)).length), b = aa(() => n.value.length > 0 && y.value === n.value.length);
		function x(e) {
			let t = new Set(v.value);
			t.has(e) ? t.delete(e) : t.add(e), v.value = t;
		}
		let S = /* @__PURE__ */ B(!1), C = /* @__PURE__ */ B(!1), w = aa(() => b.value || S.value);
		function ee() {
			C.value = !0;
		}
		function te() {
			S.value = !0, C.value = !1;
		}
		function ne() {
			C.value = !1;
		}
		let T = null;
		function re(e) {
			T = e.touches[0]?.clientX ?? null;
		}
		function E(e) {
			if (T === null) return;
			let t = (e.changedTouches[0]?.clientX ?? T) - T;
			t > bs ? _() : t < -50 && g(), T = null;
		}
		return (e, a) => (J(), Y("div", ts, [
			X("header", ns, [X("div", rs, [a[5] ||= X("span", { class: "app-shell__brand" }, "INSIDER", -1), l.value === "ready" ? (J(), Y("span", is, [...a[4] ||= [X("span", { class: "app-shell__live-dot" }, null, -1), Ni("LIVE ", -1)]])) : Q("", !0)]), a[6] ||= X("a", {
				href: "https://kubsiw.com",
				target: "_blank",
				rel: "noreferrer",
				class: "portfolio-stamp"
			}, [X("span", { class: "portfolio-stamp__main" }, "⚡ PROJEKT PORTFOLIO"), X("span", { class: "portfolio-stamp__sub" }, "Kuba S. →")], -1)]),
			X("main", as, [Z(qo), l.value === "idle" ? (J(), Y(K, { key: 0 }, [a[7] ||= X("p", { class: "app-shell__pitch" }, " Insiderskie newsy rynkowe i pomysły inwestycyjne AI (szybki strzał / do potrzymania) dla małych inwestorów — jedno kliknięcie, żeby zebrać dane na żywo. ", -1), X("button", {
				type: "button",
				class: "app-shell__collect",
				onClick: p
			}, " ▶ ZBIERZ INFORMACJE ")], 64)) : l.value === "loading" ? (J(), Y("p", os, A(t[d.value]), 1)) : (J(), Y(K, { key: 2 }, [
				Z(Ho, { quotes: V(o) }, null, 8, ["quotes"]),
				V(s) ? (J(), Y("p", ss, A(V(s)), 1)) : Q("", !0),
				V(r) ? (J(), Y("p", cs, A(V(r)), 1)) : Q("", !0),
				X("nav", ls, [X("button", {
					type: "button",
					class: k(["app-shell__tab", { "app-shell__tab--active": u.value === "newsy" }]),
					onClick: a[0] ||= (e) => u.value = "newsy"
				}, " NEWSY ", 2), X("button", {
					type: "button",
					class: k(["app-shell__tab", { "app-shell__tab--active": u.value === "sugestie" }]),
					onClick: a[1] ||= (e) => u.value = "sugestie"
				}, [a[8] ||= Ni(" SUGESTIE ", -1), w.value ? Q("", !0) : (J(), Y("span", us, "🔒 " + A(y.value) + "/" + A(V(n).length), 1))], 2)]),
				u.value === "newsy" ? (J(), Y(K, { key: 2 }, [h.value ? (J(), Y(K, { key: 0 }, [(J(), Ti(go, {
					key: h.value.id,
					category: h.value.category,
					headline: h.value.headline,
					body: h.value.body,
					kind: h.value.kind,
					sentiment: h.value.sentiment,
					read: v.value.has(h.value.id),
					onTouchstart: re,
					onTouchend: E,
					onToggleRead: a[2] ||= (e) => x(h.value.id)
				}, null, 8, [
					"category",
					"headline",
					"body",
					"kind",
					"sentiment",
					"read"
				])), X("nav", ds, [
					X("button", {
						type: "button",
						class: "app-shell__nav-button",
						disabled: m.value === 0,
						onClick: _
					}, " ‹ ", 8, fs),
					X("span", ps, A(m.value + 1) + " / " + A(V(n).length), 1),
					X("button", {
						type: "button",
						class: "app-shell__nav-button",
						disabled: m.value === V(n).length - 1,
						onClick: g
					}, " › ", 8, ms)
				])], 64)) : Q("", !0)], 64)) : (J(), Y(K, { key: 3 }, [w.value ? (J(), Y(K, { key: 1 }, [b.value ? Q("", !0) : (J(), Y("p", vs, " ⚠️ Pokazano bez potwierdzenia przeczytania wszystkich newsów (" + A(y.value) + "/" + A(V(n).length) + "). ", 1)), Z(Lo, {
					stories: V(n),
					"news-timestamp": V(i)
				}, null, 8, ["stories", "news-timestamp"])], 64)) : (J(), Y("div", hs, [
					X("p", null, " 🔒 Przeczytaj wszystkie newsy (" + A(y.value) + "/" + A(V(n).length) + "), aby odblokować sugestie AI. ", 1),
					X("div", gs, [X("button", {
						type: "button",
						class: "app-shell__locked-back",
						onClick: a[3] ||= (e) => u.value = "newsy"
					}, " WRÓĆ DO NEWSÓW "), X("button", {
						type: "button",
						class: "app-shell__locked-bypass",
						onClick: ee
					}, " MIMO TO POKAŻ SUGESTIE ")]),
					C.value ? (J(), Y("div", _s, [a[9] ||= X("p", null, " Czy na pewno? Bez pełnego kontekstu newsów sugestie mogą być mniej trafne. ", -1), X("div", { class: "app-shell__bypass-confirm-actions" }, [X("button", {
						type: "button",
						class: "app-shell__bypass-confirm-yes",
						onClick: te
					}, " TAK, POKAŻ "), X("button", {
						type: "button",
						class: "app-shell__bypass-confirm-no",
						onClick: ne
					}, " ANULUJ ")])])) : Q("", !0)
				]))], 64))
			], 64))]),
			a[10] ||= X("footer", { class: "app-shell__footer" }, [X("p", { class: "app-shell__footer-line" }, "Dane rynkowe: Finnhub · Sugestie: Claude AI"), X("p", { class: "app-shell__footer-disclaimer" }, " Wyłącznie materiał edukacyjny — nie jest to porada inwestycyjna. ")], -1)
		]));
	}
}), [["styles", [".app-shell[data-v-a682c592]{flex-direction:column;min-height:100vh;display:flex}.app-shell__content[data-v-a682c592]{flex-direction:column;flex:1 0 auto;align-items:center;gap:1.5rem;padding:1.5rem 1rem 2rem;display:flex}.app-shell__header[data-v-a682c592]{z-index:10;background:var(--insider-hairline);border-top:2px solid var(--insider-accent);border-bottom:1px solid var(--insider-hairline-strong);justify-content:center;width:100%;padding:.85rem 1rem;display:flex;position:sticky;top:0}.app-shell__header-inner[data-v-a682c592]{justify-content:space-between;align-items:center;width:100%;max-width:360px;display:flex}.app-shell__brand[data-v-a682c592]{font-family:var(--insider-font-mono);letter-spacing:.25em;color:var(--insider-text-primary);font-size:.9rem}.app-shell__live[data-v-a682c592]{font-family:var(--insider-font-mono);letter-spacing:.08em;color:var(--insider-up);align-items:center;gap:.3rem;font-size:.65rem;display:flex}.app-shell__live-dot[data-v-a682c592]{background:var(--insider-up);border-radius:50%;width:.4rem;height:.4rem;animation:1.6s ease-in-out infinite live-pulse-a682c592}@keyframes live-pulse-a682c592{0%,to{opacity:1}50%{opacity:.25}}.portfolio-stamp[data-v-a682c592]{--stamp-purple:#863bff;text-align:center;border:3px double var(--stamp-purple);background:var(--insider-bg);color:var(--stamp-purple);line-height:1.3;font-family:var(--insider-font-mono);text-transform:uppercase;flex-direction:column;align-items:center;padding:4px 10px;text-decoration:none;display:flex;position:absolute;bottom:-16px;right:12px;transform:rotate(5deg)}.portfolio-stamp[data-v-a682c592]:hover{background:color-mix(in srgb, var(--stamp-purple) 14%, var(--insider-bg))}.portfolio-stamp__main[data-v-a682c592]{letter-spacing:.04em;font-size:.6rem;font-weight:700}.portfolio-stamp__sub[data-v-a682c592]{letter-spacing:.06em;font-size:.5rem}@media (width<=480px){.portfolio-stamp[data-v-a682c592]{right:6px;transform:rotate(5deg)scale(.85)}}.app-shell__pitch[data-v-a682c592]{text-align:center;max-width:360px;color:var(--insider-text-secondary);font-size:.9rem;line-height:1.5}.app-shell__collect[data-v-a682c592]{background:var(--insider-accent);color:var(--insider-bg);font-family:var(--insider-font-mono);letter-spacing:.08em;cursor:pointer;border:none;border-radius:.5rem;padding:.9rem 1.75rem;font-size:.9rem;font-weight:700}.app-shell__boot[data-v-a682c592]{font-family:var(--insider-font-mono);letter-spacing:.08em;color:var(--insider-accent);font-size:.85rem}.app-shell__boot[data-v-a682c592]:after{content:\"_\";animation:1s step-start infinite boot-cursor-blink-a682c592}@keyframes boot-cursor-blink-a682c592{50%{opacity:0}}.app-shell__error[data-v-a682c592]{color:var(--insider-down);text-align:center;max-width:360px;font-size:.85rem}.app-shell__tabs[data-v-a682c592]{border-bottom:1px solid var(--insider-hairline);width:100%;max-width:360px;display:flex}.app-shell__tab[data-v-a682c592]{color:var(--insider-text-secondary);font-family:var(--insider-font-mono);letter-spacing:.08em;cursor:pointer;background:0 0;border:none;border-bottom:2px solid #0000;flex-direction:column;flex:1 1 0;align-items:center;gap:.2rem;padding:.6rem .1rem;font-size:.8rem;transition:background-color .15s,color .15s;display:flex}.app-shell__tab[data-v-a682c592]:hover{color:var(--insider-text-primary);background-color:color-mix(in srgb, var(--insider-text-primary) 6%, transparent)}.app-shell__tab--active[data-v-a682c592]{color:var(--insider-text-primary);border-bottom-color:var(--insider-accent)}.app-shell__tab-lock[data-v-a682c592]{letter-spacing:.02em;color:var(--insider-text-secondary);font-size:.6rem}.app-shell__locked[data-v-a682c592]{text-align:center;flex-direction:column;align-items:center;gap:1rem;max-width:360px;display:flex}.app-shell__locked p[data-v-a682c592]{color:var(--insider-text-secondary);margin:0;font-size:.9rem;line-height:1.5}.app-shell__locked-actions[data-v-a682c592]{flex-wrap:wrap;justify-content:center;gap:.75rem;display:flex}.app-shell__locked-back[data-v-a682c592],.app-shell__locked-bypass[data-v-a682c592]{border:1px solid var(--insider-hairline-strong);color:var(--insider-text-primary);font-family:var(--insider-font-mono);letter-spacing:.06em;cursor:pointer;background:0 0;border-radius:.5rem;padding:.6rem 1.25rem;font-size:.8rem}.app-shell__locked-bypass[data-v-a682c592]{color:var(--insider-text-secondary);border-color:var(--insider-hairline)}.app-shell__bypass-confirm[data-v-a682c592]{border:1px solid var(--insider-hairline-strong);border-radius:.5rem;flex-direction:column;align-items:center;gap:.75rem;padding:1rem;display:flex}.app-shell__bypass-confirm p[data-v-a682c592]{color:var(--insider-text-secondary)}.app-shell__bypass-confirm-actions[data-v-a682c592]{gap:.75rem;display:flex}.app-shell__bypass-confirm-yes[data-v-a682c592]{border:1px solid var(--insider-accent);color:var(--insider-accent);font-family:var(--insider-font-mono);letter-spacing:.06em;cursor:pointer;background:0 0;border-radius:.5rem;padding:.5rem 1rem;font-size:.75rem}.app-shell__bypass-confirm-no[data-v-a682c592]{border:1px solid var(--insider-hairline-strong);color:var(--insider-text-secondary);font-family:var(--insider-font-mono);letter-spacing:.06em;cursor:pointer;background:0 0;border-radius:.5rem;padding:.5rem 1rem;font-size:.75rem}.app-shell__bypass-notice[data-v-a682c592]{text-align:center;max-width:360px;color:var(--insider-text-secondary);font-size:.8rem}.app-shell__nav[data-v-a682c592]{align-items:center;gap:1rem;display:flex}.app-shell__nav-button[data-v-a682c592]{border:1px solid var(--insider-hairline-strong);width:2.5rem;height:2.5rem;color:var(--insider-text-primary);cursor:pointer;background:0 0;border-radius:50%;font-size:1.25rem;line-height:1}.app-shell__nav-button[data-v-a682c592]:disabled{color:var(--insider-text-secondary);border-color:var(--insider-hairline);cursor:default}.app-shell__nav-count[data-v-a682c592]{font-family:var(--insider-font-mono);color:var(--insider-text-secondary);font-size:.8rem}.app-shell__footer[data-v-a682c592]{z-index:10;background:var(--insider-hairline);border-top:1px solid var(--insider-hairline-strong);flex-direction:column;flex:none;align-items:center;gap:.35rem;width:100%;padding:1.25rem 1rem;display:flex;position:sticky;bottom:0}.app-shell__footer-line[data-v-a682c592]{font-family:var(--insider-font-mono);letter-spacing:.04em;color:var(--insider-text-secondary);margin:0;font-size:.7rem}.app-shell__footer-disclaimer[data-v-a682c592]{color:var(--insider-text-secondary);margin:0;font-size:.7rem}"]], ["__scopeId", "data-v-a682c592"]]), Ss = ":root,:host{--insider-bg:#0a0e14;--insider-text-primary:#eef1f4;--insider-text-secondary:#7c8794;--insider-hairline:#1c222b;--insider-hairline-strong:#2a3138;--insider-accent:#ffb020;--insider-up:#2fbf71;--insider-down:#e5484d;--insider-font-mono:ui-monospace, \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, monospace;--insider-font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif}", Cs = "insider-app", ws = /* @__PURE__ */ Ja(/* @__PURE__ */ Pn({
	name: "InsiderAppRoot",
	render: () => oa(xs)
}), { styles: [Ss, "\n  :host {\n    display: block;\n    box-sizing: border-box;\n    background: var(--insider-bg);\n    color: var(--insider-text-primary);\n    font-family: var(--insider-font-sans);\n    line-height: normal;\n    -webkit-font-smoothing: antialiased;\n  }\n  :host *, :host *::before, :host *::after { box-sizing: border-box; }\n"] });
customElements.get(Cs) || customElements.define(Cs, ws);
//#endregion
