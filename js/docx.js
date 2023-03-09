/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
		? define([], t)
		: "object" == typeof exports
		? (exports.docx = t())
		: (e.docx = t());
})(this, function () {
	return (() => {
		var e = {
				9742: (e, t) => {
					"use strict";
					(t.byteLength = function (e) {
						var t = u(e),
							r = t[0],
							n = t[1];
						return (3 * (r + n)) / 4 - n;
					}),
						(t.toByteArray = function (e) {
							var t,
								r,
								i = u(e),
								s = i[0],
								a = i[1],
								c = new o(
									(function (e, t, r) {
										return (3 * (t + r)) / 4 - r;
									})(0, s, a)
								),
								l = 0,
								p = a > 0 ? s - 4 : s;
							for (r = 0; r < p; r += 4)
								(t =
									(n[e.charCodeAt(r)] << 18) |
									(n[e.charCodeAt(r + 1)] << 12) |
									(n[e.charCodeAt(r + 2)] << 6) |
									n[e.charCodeAt(r + 3)]),
									(c[l++] = (t >> 16) & 255),
									(c[l++] = (t >> 8) & 255),
									(c[l++] = 255 & t);
							return (
								2 === a &&
									((t =
										(n[e.charCodeAt(r)] << 2) |
										(n[e.charCodeAt(r + 1)] >> 4)),
									(c[l++] = 255 & t)),
								1 === a &&
									((t =
										(n[e.charCodeAt(r)] << 10) |
										(n[e.charCodeAt(r + 1)] << 4) |
										(n[e.charCodeAt(r + 2)] >> 2)),
									(c[l++] = (t >> 8) & 255),
									(c[l++] = 255 & t)),
								c
							);
						}),
						(t.fromByteArray = function (e) {
							for (
								var t,
									n = e.length,
									o = n % 3,
									i = [],
									s = 16383,
									a = 0,
									u = n - o;
								a < u;
								a += s
							)
								i.push(c(e, a, a + s > u ? u : a + s));
							return (
								1 === o
									? ((t = e[n - 1]),
									  i.push(
											r[t >> 2] + r[(t << 4) & 63] + "=="
									  ))
									: 2 === o &&
									  ((t = (e[n - 2] << 8) + e[n - 1]),
									  i.push(
											r[t >> 10] +
												r[(t >> 4) & 63] +
												r[(t << 2) & 63] +
												"="
									  )),
								i.join("")
							);
						});
					for (
						var r = [],
							n = [],
							o =
								"undefined" != typeof Uint8Array
									? Uint8Array
									: Array,
							i =
								"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
							s = 0,
							a = i.length;
						s < a;
						++s
					)
						(r[s] = i[s]), (n[i.charCodeAt(s)] = s);
					function u(e) {
						var t = e.length;
						if (t % 4 > 0)
							throw new Error(
								"Invalid string. Length must be a multiple of 4"
							);
						var r = e.indexOf("=");
						return (
							-1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)]
						);
					}
					function c(e, t, n) {
						for (var o, i, s = [], a = t; a < n; a += 3)
							(o =
								((e[a] << 16) & 16711680) +
								((e[a + 1] << 8) & 65280) +
								(255 & e[a + 2])),
								s.push(
									r[((i = o) >> 18) & 63] +
										r[(i >> 12) & 63] +
										r[(i >> 6) & 63] +
										r[63 & i]
								);
						return s.join("");
					}
					(n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
				},
				8764: (e, t, r) => {
					"use strict";
					const n = r(9742),
						o = r(645),
						i =
							"function" == typeof Symbol &&
							"function" == typeof Symbol.for
								? Symbol.for("nodejs.util.inspect.custom")
								: null;
					(t.Buffer = u),
						(t.SlowBuffer = function (e) {
							return +e != e && (e = 0), u.alloc(+e);
						}),
						(t.INSPECT_MAX_BYTES = 50);
					const s = 2147483647;
					function a(e) {
						if (e > s)
							throw new RangeError(
								'The value "' +
									e +
									'" is invalid for option "size"'
							);
						const t = new Uint8Array(e);
						return Object.setPrototypeOf(t, u.prototype), t;
					}
					function u(e, t, r) {
						if ("number" == typeof e) {
							if ("string" == typeof t)
								throw new TypeError(
									'The "string" argument must be of type string. Received type number'
								);
							return p(e);
						}
						return c(e, t, r);
					}
					function c(e, t, r) {
						if ("string" == typeof e)
							return (function (e, t) {
								if (
									(("string" == typeof t && "" !== t) ||
										(t = "utf8"),
									!u.isEncoding(t))
								)
									throw new TypeError(
										"Unknown encoding: " + t
									);
								const r = 0 | m(e, t);
								let n = a(r);
								const o = n.write(e, t);
								return o !== r && (n = n.slice(0, o)), n;
							})(e, t);
						if (ArrayBuffer.isView(e))
							return (function (e) {
								if ($(e, Uint8Array)) {
									const t = new Uint8Array(e);
									return d(
										t.buffer,
										t.byteOffset,
										t.byteLength
									);
								}
								return h(e);
							})(e);
						if (null == e)
							throw new TypeError(
								"The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
									typeof e
							);
						if (
							$(e, ArrayBuffer) ||
							(e && $(e.buffer, ArrayBuffer))
						)
							return d(e, t, r);
						if (
							"undefined" != typeof SharedArrayBuffer &&
							($(e, SharedArrayBuffer) ||
								(e && $(e.buffer, SharedArrayBuffer)))
						)
							return d(e, t, r);
						if ("number" == typeof e)
							throw new TypeError(
								'The "value" argument must not be of type number. Received type number'
							);
						const n = e.valueOf && e.valueOf();
						if (null != n && n !== e) return u.from(n, t, r);
						const o = (function (e) {
							if (u.isBuffer(e)) {
								const t = 0 | f(e.length),
									r = a(t);
								return 0 === r.length || e.copy(r, 0, 0, t), r;
							}
							return void 0 !== e.length
								? "number" != typeof e.length || Z(e.length)
									? a(0)
									: h(e)
								: "Buffer" === e.type && Array.isArray(e.data)
								? h(e.data)
								: void 0;
						})(e);
						if (o) return o;
						if (
							"undefined" != typeof Symbol &&
							null != Symbol.toPrimitive &&
							"function" == typeof e[Symbol.toPrimitive]
						)
							return u.from(
								e[Symbol.toPrimitive]("string"),
								t,
								r
							);
						throw new TypeError(
							"The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
								typeof e
						);
					}
					function l(e) {
						if ("number" != typeof e)
							throw new TypeError(
								'"size" argument must be of type number'
							);
						if (e < 0)
							throw new RangeError(
								'The value "' +
									e +
									'" is invalid for option "size"'
							);
					}
					function p(e) {
						return l(e), a(e < 0 ? 0 : 0 | f(e));
					}
					function h(e) {
						const t = e.length < 0 ? 0 : 0 | f(e.length),
							r = a(t);
						for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
						return r;
					}
					function d(e, t, r) {
						if (t < 0 || e.byteLength < t)
							throw new RangeError(
								'"offset" is outside of buffer bounds'
							);
						if (e.byteLength < t + (r || 0))
							throw new RangeError(
								'"length" is outside of buffer bounds'
							);
						let n;
						return (
							(n =
								void 0 === t && void 0 === r
									? new Uint8Array(e)
									: void 0 === r
									? new Uint8Array(e, t)
									: new Uint8Array(e, t, r)),
							Object.setPrototypeOf(n, u.prototype),
							n
						);
					}
					function f(e) {
						if (e >= s)
							throw new RangeError(
								"Attempt to allocate Buffer larger than maximum size: 0x" +
									s.toString(16) +
									" bytes"
							);
						return 0 | e;
					}
					function m(e, t) {
						if (u.isBuffer(e)) return e.length;
						if (ArrayBuffer.isView(e) || $(e, ArrayBuffer))
							return e.byteLength;
						if ("string" != typeof e)
							throw new TypeError(
								'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
									typeof e
							);
						const r = e.length,
							n = arguments.length > 2 && !0 === arguments[2];
						if (!n && 0 === r) return 0;
						let o = !1;
						for (;;)
							switch (t) {
								case "ascii":
								case "latin1":
								case "binary":
									return r;
								case "utf8":
								case "utf-8":
									return V(e).length;
								case "ucs2":
								case "ucs-2":
								case "utf16le":
								case "utf-16le":
									return 2 * r;
								case "hex":
									return r >>> 1;
								case "base64":
									return K(e).length;
								default:
									if (o) return n ? -1 : V(e).length;
									(t = ("" + t).toLowerCase()), (o = !0);
							}
					}
					function g(e, t, r) {
						let n = !1;
						if (
							((void 0 === t || t < 0) && (t = 0),
							t > this.length)
						)
							return "";
						if (
							((void 0 === r || r > this.length) &&
								(r = this.length),
							r <= 0)
						)
							return "";
						if ((r >>>= 0) <= (t >>>= 0)) return "";
						for (e || (e = "utf8"); ; )
							switch (e) {
								case "hex":
									return R(this, t, r);
								case "utf8":
								case "utf-8":
									return S(this, t, r);
								case "ascii":
									return P(this, t, r);
								case "latin1":
								case "binary":
									return C(this, t, r);
								case "base64":
									return O(this, t, r);
								case "ucs2":
								case "ucs-2":
								case "utf16le":
								case "utf-16le":
									return I(this, t, r);
								default:
									if (n)
										throw new TypeError(
											"Unknown encoding: " + e
										);
									(e = (e + "").toLowerCase()), (n = !0);
							}
					}
					function b(e, t, r) {
						const n = e[t];
						(e[t] = e[r]), (e[r] = n);
					}
					function y(e, t, r, n, o) {
						if (0 === e.length) return -1;
						if (
							("string" == typeof r
								? ((n = r), (r = 0))
								: r > 2147483647
								? (r = 2147483647)
								: r < -2147483648 && (r = -2147483648),
							Z((r = +r)) && (r = o ? 0 : e.length - 1),
							r < 0 && (r = e.length + r),
							r >= e.length)
						) {
							if (o) return -1;
							r = e.length - 1;
						} else if (r < 0) {
							if (!o) return -1;
							r = 0;
						}
						if (
							("string" == typeof t && (t = u.from(t, n)),
							u.isBuffer(t))
						)
							return 0 === t.length ? -1 : w(e, t, r, n, o);
						if ("number" == typeof t)
							return (
								(t &= 255),
								"function" ==
								typeof Uint8Array.prototype.indexOf
									? o
										? Uint8Array.prototype.indexOf.call(
												e,
												t,
												r
										  )
										: Uint8Array.prototype.lastIndexOf.call(
												e,
												t,
												r
										  )
									: w(e, [t], r, n, o)
							);
						throw new TypeError(
							"val must be string, number or Buffer"
						);
					}
					function w(e, t, r, n, o) {
						let i,
							s = 1,
							a = e.length,
							u = t.length;
						if (
							void 0 !== n &&
							("ucs2" === (n = String(n).toLowerCase()) ||
								"ucs-2" === n ||
								"utf16le" === n ||
								"utf-16le" === n)
						) {
							if (e.length < 2 || t.length < 2) return -1;
							(s = 2), (a /= 2), (u /= 2), (r /= 2);
						}
						function c(e, t) {
							return 1 === s ? e[t] : e.readUInt16BE(t * s);
						}
						if (o) {
							let n = -1;
							for (i = r; i < a; i++)
								if (c(e, i) === c(t, -1 === n ? 0 : i - n)) {
									if ((-1 === n && (n = i), i - n + 1 === u))
										return n * s;
								} else -1 !== n && (i -= i - n), (n = -1);
						} else
							for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
								let r = !0;
								for (let n = 0; n < u; n++)
									if (c(e, i + n) !== c(t, n)) {
										r = !1;
										break;
									}
								if (r) return i;
							}
						return -1;
					}
					function v(e, t, r, n) {
						r = Number(r) || 0;
						const o = e.length - r;
						n ? (n = Number(n)) > o && (n = o) : (n = o);
						const i = t.length;
						let s;
						for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) {
							const n = parseInt(t.substr(2 * s, 2), 16);
							if (Z(n)) return s;
							e[r + s] = n;
						}
						return s;
					}
					function _(e, t, r, n) {
						return q(V(t, e.length - r), e, r, n);
					}
					function x(e, t, r, n) {
						return q(
							(function (e) {
								const t = [];
								for (let r = 0; r < e.length; ++r)
									t.push(255 & e.charCodeAt(r));
								return t;
							})(t),
							e,
							r,
							n
						);
					}
					function E(e, t, r, n) {
						return q(K(t), e, r, n);
					}
					function T(e, t, r, n) {
						return q(
							(function (e, t) {
								let r, n, o;
								const i = [];
								for (
									let s = 0;
									s < e.length && !((t -= 2) < 0);
									++s
								)
									(r = e.charCodeAt(s)),
										(n = r >> 8),
										(o = r % 256),
										i.push(o),
										i.push(n);
								return i;
							})(t, e.length - r),
							e,
							r,
							n
						);
					}
					function O(e, t, r) {
						return 0 === t && r === e.length
							? n.fromByteArray(e)
							: n.fromByteArray(e.slice(t, r));
					}
					function S(e, t, r) {
						r = Math.min(e.length, r);
						const n = [];
						let o = t;
						for (; o < r; ) {
							const t = e[o];
							let i = null,
								s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
							if (o + s <= r) {
								let r, n, a, u;
								switch (s) {
									case 1:
										t < 128 && (i = t);
										break;
									case 2:
										(r = e[o + 1]),
											128 == (192 & r) &&
												((u =
													((31 & t) << 6) | (63 & r)),
												u > 127 && (i = u));
										break;
									case 3:
										(r = e[o + 1]),
											(n = e[o + 2]),
											128 == (192 & r) &&
												128 == (192 & n) &&
												((u =
													((15 & t) << 12) |
													((63 & r) << 6) |
													(63 & n)),
												u > 2047 &&
													(u < 55296 || u > 57343) &&
													(i = u));
										break;
									case 4:
										(r = e[o + 1]),
											(n = e[o + 2]),
											(a = e[o + 3]),
											128 == (192 & r) &&
												128 == (192 & n) &&
												128 == (192 & a) &&
												((u =
													((15 & t) << 18) |
													((63 & r) << 12) |
													((63 & n) << 6) |
													(63 & a)),
												u > 65535 &&
													u < 1114112 &&
													(i = u));
								}
							}
							null === i
								? ((i = 65533), (s = 1))
								: i > 65535 &&
								  ((i -= 65536),
								  n.push(((i >>> 10) & 1023) | 55296),
								  (i = 56320 | (1023 & i))),
								n.push(i),
								(o += s);
						}
						return (function (e) {
							const t = e.length;
							if (t <= A)
								return String.fromCharCode.apply(String, e);
							let r = "",
								n = 0;
							for (; n < t; )
								r += String.fromCharCode.apply(
									String,
									e.slice(n, (n += A))
								);
							return r;
						})(n);
					}
					(t.kMaxLength = s),
						(u.TYPED_ARRAY_SUPPORT = (function () {
							try {
								const e = new Uint8Array(1),
									t = {
										foo: function () {
											return 42;
										},
									};
								return (
									Object.setPrototypeOf(
										t,
										Uint8Array.prototype
									),
									Object.setPrototypeOf(e, t),
									42 === e.foo()
								);
							} catch (e) {
								return !1;
							}
						})()),
						u.TYPED_ARRAY_SUPPORT ||
							"undefined" == typeof console ||
							"function" != typeof console.error ||
							console.error(
								"This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
							),
						Object.defineProperty(u.prototype, "parent", {
							enumerable: !0,
							get: function () {
								if (u.isBuffer(this)) return this.buffer;
							},
						}),
						Object.defineProperty(u.prototype, "offset", {
							enumerable: !0,
							get: function () {
								if (u.isBuffer(this)) return this.byteOffset;
							},
						}),
						(u.poolSize = 8192),
						(u.from = function (e, t, r) {
							return c(e, t, r);
						}),
						Object.setPrototypeOf(
							u.prototype,
							Uint8Array.prototype
						),
						Object.setPrototypeOf(u, Uint8Array),
						(u.alloc = function (e, t, r) {
							return (function (e, t, r) {
								return (
									l(e),
									e <= 0
										? a(e)
										: void 0 !== t
										? "string" == typeof r
											? a(e).fill(t, r)
											: a(e).fill(t)
										: a(e)
								);
							})(e, t, r);
						}),
						(u.allocUnsafe = function (e) {
							return p(e);
						}),
						(u.allocUnsafeSlow = function (e) {
							return p(e);
						}),
						(u.isBuffer = function (e) {
							return (
								null != e &&
								!0 === e._isBuffer &&
								e !== u.prototype
							);
						}),
						(u.compare = function (e, t) {
							if (
								($(e, Uint8Array) &&
									(e = u.from(e, e.offset, e.byteLength)),
								$(t, Uint8Array) &&
									(t = u.from(t, t.offset, t.byteLength)),
								!u.isBuffer(e) || !u.isBuffer(t))
							)
								throw new TypeError(
									'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
								);
							if (e === t) return 0;
							let r = e.length,
								n = t.length;
							for (let o = 0, i = Math.min(r, n); o < i; ++o)
								if (e[o] !== t[o]) {
									(r = e[o]), (n = t[o]);
									break;
								}
							return r < n ? -1 : n < r ? 1 : 0;
						}),
						(u.isEncoding = function (e) {
							switch (String(e).toLowerCase()) {
								case "hex":
								case "utf8":
								case "utf-8":
								case "ascii":
								case "latin1":
								case "binary":
								case "base64":
								case "ucs2":
								case "ucs-2":
								case "utf16le":
								case "utf-16le":
									return !0;
								default:
									return !1;
							}
						}),
						(u.concat = function (e, t) {
							if (!Array.isArray(e))
								throw new TypeError(
									'"list" argument must be an Array of Buffers'
								);
							if (0 === e.length) return u.alloc(0);
							let r;
							if (void 0 === t)
								for (t = 0, r = 0; r < e.length; ++r)
									t += e[r].length;
							const n = u.allocUnsafe(t);
							let o = 0;
							for (r = 0; r < e.length; ++r) {
								let t = e[r];
								if ($(t, Uint8Array))
									o + t.length > n.length
										? (u.isBuffer(t) || (t = u.from(t)),
										  t.copy(n, o))
										: Uint8Array.prototype.set.call(
												n,
												t,
												o
										  );
								else {
									if (!u.isBuffer(t))
										throw new TypeError(
											'"list" argument must be an Array of Buffers'
										);
									t.copy(n, o);
								}
								o += t.length;
							}
							return n;
						}),
						(u.byteLength = m),
						(u.prototype._isBuffer = !0),
						(u.prototype.swap16 = function () {
							const e = this.length;
							if (e % 2 != 0)
								throw new RangeError(
									"Buffer size must be a multiple of 16-bits"
								);
							for (let t = 0; t < e; t += 2) b(this, t, t + 1);
							return this;
						}),
						(u.prototype.swap32 = function () {
							const e = this.length;
							if (e % 4 != 0)
								throw new RangeError(
									"Buffer size must be a multiple of 32-bits"
								);
							for (let t = 0; t < e; t += 4)
								b(this, t, t + 3), b(this, t + 1, t + 2);
							return this;
						}),
						(u.prototype.swap64 = function () {
							const e = this.length;
							if (e % 8 != 0)
								throw new RangeError(
									"Buffer size must be a multiple of 64-bits"
								);
							for (let t = 0; t < e; t += 8)
								b(this, t, t + 7),
									b(this, t + 1, t + 6),
									b(this, t + 2, t + 5),
									b(this, t + 3, t + 4);
							return this;
						}),
						(u.prototype.toString = function () {
							const e = this.length;
							return 0 === e
								? ""
								: 0 === arguments.length
								? S(this, 0, e)
								: g.apply(this, arguments);
						}),
						(u.prototype.toLocaleString = u.prototype.toString),
						(u.prototype.equals = function (e) {
							if (!u.isBuffer(e))
								throw new TypeError(
									"Argument must be a Buffer"
								);
							return this === e || 0 === u.compare(this, e);
						}),
						(u.prototype.inspect = function () {
							let e = "";
							const r = t.INSPECT_MAX_BYTES;
							return (
								(e = this.toString("hex", 0, r)
									.replace(/(.{2})/g, "$1 ")
									.trim()),
								this.length > r && (e += " ... "),
								"<Buffer " + e + ">"
							);
						}),
						i && (u.prototype[i] = u.prototype.inspect),
						(u.prototype.compare = function (e, t, r, n, o) {
							if (
								($(e, Uint8Array) &&
									(e = u.from(e, e.offset, e.byteLength)),
								!u.isBuffer(e))
							)
								throw new TypeError(
									'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
										typeof e
								);
							if (
								(void 0 === t && (t = 0),
								void 0 === r && (r = e ? e.length : 0),
								void 0 === n && (n = 0),
								void 0 === o && (o = this.length),
								t < 0 ||
									r > e.length ||
									n < 0 ||
									o > this.length)
							)
								throw new RangeError("out of range index");
							if (n >= o && t >= r) return 0;
							if (n >= o) return -1;
							if (t >= r) return 1;
							if (this === e) return 0;
							let i = (o >>>= 0) - (n >>>= 0),
								s = (r >>>= 0) - (t >>>= 0);
							const a = Math.min(i, s),
								c = this.slice(n, o),
								l = e.slice(t, r);
							for (let e = 0; e < a; ++e)
								if (c[e] !== l[e]) {
									(i = c[e]), (s = l[e]);
									break;
								}
							return i < s ? -1 : s < i ? 1 : 0;
						}),
						(u.prototype.includes = function (e, t, r) {
							return -1 !== this.indexOf(e, t, r);
						}),
						(u.prototype.indexOf = function (e, t, r) {
							return y(this, e, t, r, !0);
						}),
						(u.prototype.lastIndexOf = function (e, t, r) {
							return y(this, e, t, r, !1);
						}),
						(u.prototype.write = function (e, t, r, n) {
							if (void 0 === t)
								(n = "utf8"), (r = this.length), (t = 0);
							else if (void 0 === r && "string" == typeof t)
								(n = t), (r = this.length), (t = 0);
							else {
								if (!isFinite(t))
									throw new Error(
										"Buffer.write(string, encoding, offset[, length]) is no longer supported"
									);
								(t >>>= 0),
									isFinite(r)
										? ((r >>>= 0),
										  void 0 === n && (n = "utf8"))
										: ((n = r), (r = void 0));
							}
							const o = this.length - t;
							if (
								((void 0 === r || r > o) && (r = o),
								(e.length > 0 && (r < 0 || t < 0)) ||
									t > this.length)
							)
								throw new RangeError(
									"Attempt to write outside buffer bounds"
								);
							n || (n = "utf8");
							let i = !1;
							for (;;)
								switch (n) {
									case "hex":
										return v(this, e, t, r);
									case "utf8":
									case "utf-8":
										return _(this, e, t, r);
									case "ascii":
									case "latin1":
									case "binary":
										return x(this, e, t, r);
									case "base64":
										return E(this, e, t, r);
									case "ucs2":
									case "ucs-2":
									case "utf16le":
									case "utf-16le":
										return T(this, e, t, r);
									default:
										if (i)
											throw new TypeError(
												"Unknown encoding: " + n
											);
										(n = ("" + n).toLowerCase()), (i = !0);
								}
						}),
						(u.prototype.toJSON = function () {
							return {
								type: "Buffer",
								data: Array.prototype.slice.call(
									this._arr || this,
									0
								),
							};
						});
					const A = 4096;
					function P(e, t, r) {
						let n = "";
						r = Math.min(e.length, r);
						for (let o = t; o < r; ++o)
							n += String.fromCharCode(127 & e[o]);
						return n;
					}
					function C(e, t, r) {
						let n = "";
						r = Math.min(e.length, r);
						for (let o = t; o < r; ++o)
							n += String.fromCharCode(e[o]);
						return n;
					}
					function R(e, t, r) {
						const n = e.length;
						(!t || t < 0) && (t = 0),
							(!r || r < 0 || r > n) && (r = n);
						let o = "";
						for (let n = t; n < r; ++n) o += Y[e[n]];
						return o;
					}
					function I(e, t, r) {
						const n = e.slice(t, r);
						let o = "";
						for (let e = 0; e < n.length - 1; e += 2)
							o += String.fromCharCode(n[e] + 256 * n[e + 1]);
						return o;
					}
					function N(e, t, r) {
						if (e % 1 != 0 || e < 0)
							throw new RangeError("offset is not uint");
						if (e + t > r)
							throw new RangeError(
								"Trying to access beyond buffer length"
							);
					}
					function M(e, t, r, n, o, i) {
						if (!u.isBuffer(e))
							throw new TypeError(
								'"buffer" argument must be a Buffer instance'
							);
						if (t > o || t < i)
							throw new RangeError(
								'"value" argument is out of bounds'
							);
						if (r + n > e.length)
							throw new RangeError("Index out of range");
					}
					function k(e, t, r, n, o) {
						H(t, n, o, e, r, 7);
						let i = Number(t & BigInt(4294967295));
						(e[r++] = i),
							(i >>= 8),
							(e[r++] = i),
							(i >>= 8),
							(e[r++] = i),
							(i >>= 8),
							(e[r++] = i);
						let s = Number((t >> BigInt(32)) & BigInt(4294967295));
						return (
							(e[r++] = s),
							(s >>= 8),
							(e[r++] = s),
							(s >>= 8),
							(e[r++] = s),
							(s >>= 8),
							(e[r++] = s),
							r
						);
					}
					function D(e, t, r, n, o) {
						H(t, n, o, e, r, 7);
						let i = Number(t & BigInt(4294967295));
						(e[r + 7] = i),
							(i >>= 8),
							(e[r + 6] = i),
							(i >>= 8),
							(e[r + 5] = i),
							(i >>= 8),
							(e[r + 4] = i);
						let s = Number((t >> BigInt(32)) & BigInt(4294967295));
						return (
							(e[r + 3] = s),
							(s >>= 8),
							(e[r + 2] = s),
							(s >>= 8),
							(e[r + 1] = s),
							(s >>= 8),
							(e[r] = s),
							r + 8
						);
					}
					function j(e, t, r, n, o, i) {
						if (r + n > e.length)
							throw new RangeError("Index out of range");
						if (r < 0) throw new RangeError("Index out of range");
					}
					function F(e, t, r, n, i) {
						return (
							(t = +t),
							(r >>>= 0),
							i || j(e, 0, r, 4),
							o.write(e, t, r, n, 23, 4),
							r + 4
						);
					}
					function B(e, t, r, n, i) {
						return (
							(t = +t),
							(r >>>= 0),
							i || j(e, 0, r, 8),
							o.write(e, t, r, n, 52, 8),
							r + 8
						);
					}
					(u.prototype.slice = function (e, t) {
						const r = this.length;
						(e = ~~e) < 0
							? (e += r) < 0 && (e = 0)
							: e > r && (e = r),
							(t = void 0 === t ? r : ~~t) < 0
								? (t += r) < 0 && (t = 0)
								: t > r && (t = r),
							t < e && (t = e);
						const n = this.subarray(e, t);
						return Object.setPrototypeOf(n, u.prototype), n;
					}),
						(u.prototype.readUintLE = u.prototype.readUIntLE =
							function (e, t, r) {
								(e >>>= 0),
									(t >>>= 0),
									r || N(e, t, this.length);
								let n = this[e],
									o = 1,
									i = 0;
								for (; ++i < t && (o *= 256); )
									n += this[e + i] * o;
								return n;
							}),
						(u.prototype.readUintBE = u.prototype.readUIntBE =
							function (e, t, r) {
								(e >>>= 0),
									(t >>>= 0),
									r || N(e, t, this.length);
								let n = this[e + --t],
									o = 1;
								for (; t > 0 && (o *= 256); )
									n += this[e + --t] * o;
								return n;
							}),
						(u.prototype.readUint8 = u.prototype.readUInt8 =
							function (e, t) {
								return (
									(e >>>= 0),
									t || N(e, 1, this.length),
									this[e]
								);
							}),
						(u.prototype.readUint16LE = u.prototype.readUInt16LE =
							function (e, t) {
								return (
									(e >>>= 0),
									t || N(e, 2, this.length),
									this[e] | (this[e + 1] << 8)
								);
							}),
						(u.prototype.readUint16BE = u.prototype.readUInt16BE =
							function (e, t) {
								return (
									(e >>>= 0),
									t || N(e, 2, this.length),
									(this[e] << 8) | this[e + 1]
								);
							}),
						(u.prototype.readUint32LE = u.prototype.readUInt32LE =
							function (e, t) {
								return (
									(e >>>= 0),
									t || N(e, 4, this.length),
									(this[e] |
										(this[e + 1] << 8) |
										(this[e + 2] << 16)) +
										16777216 * this[e + 3]
								);
							}),
						(u.prototype.readUint32BE = u.prototype.readUInt32BE =
							function (e, t) {
								return (
									(e >>>= 0),
									t || N(e, 4, this.length),
									16777216 * this[e] +
										((this[e + 1] << 16) |
											(this[e + 2] << 8) |
											this[e + 3])
								);
							}),
						(u.prototype.readBigUInt64LE = Q(function (e) {
							z((e >>>= 0), "offset");
							const t = this[e],
								r = this[e + 7];
							(void 0 !== t && void 0 !== r) ||
								G(e, this.length - 8);
							const n =
									t +
									256 * this[++e] +
									65536 * this[++e] +
									this[++e] * 2 ** 24,
								o =
									this[++e] +
									256 * this[++e] +
									65536 * this[++e] +
									r * 2 ** 24;
							return BigInt(n) + (BigInt(o) << BigInt(32));
						})),
						(u.prototype.readBigUInt64BE = Q(function (e) {
							z((e >>>= 0), "offset");
							const t = this[e],
								r = this[e + 7];
							(void 0 !== t && void 0 !== r) ||
								G(e, this.length - 8);
							const n =
									t * 2 ** 24 +
									65536 * this[++e] +
									256 * this[++e] +
									this[++e],
								o =
									this[++e] * 2 ** 24 +
									65536 * this[++e] +
									256 * this[++e] +
									r;
							return (BigInt(n) << BigInt(32)) + BigInt(o);
						})),
						(u.prototype.readIntLE = function (e, t, r) {
							(e >>>= 0), (t >>>= 0), r || N(e, t, this.length);
							let n = this[e],
								o = 1,
								i = 0;
							for (; ++i < t && (o *= 256); )
								n += this[e + i] * o;
							return (
								(o *= 128),
								n >= o && (n -= Math.pow(2, 8 * t)),
								n
							);
						}),
						(u.prototype.readIntBE = function (e, t, r) {
							(e >>>= 0), (t >>>= 0), r || N(e, t, this.length);
							let n = t,
								o = 1,
								i = this[e + --n];
							for (; n > 0 && (o *= 256); )
								i += this[e + --n] * o;
							return (
								(o *= 128),
								i >= o && (i -= Math.pow(2, 8 * t)),
								i
							);
						}),
						(u.prototype.readInt8 = function (e, t) {
							return (
								(e >>>= 0),
								t || N(e, 1, this.length),
								128 & this[e]
									? -1 * (255 - this[e] + 1)
									: this[e]
							);
						}),
						(u.prototype.readInt16LE = function (e, t) {
							(e >>>= 0), t || N(e, 2, this.length);
							const r = this[e] | (this[e + 1] << 8);
							return 32768 & r ? 4294901760 | r : r;
						}),
						(u.prototype.readInt16BE = function (e, t) {
							(e >>>= 0), t || N(e, 2, this.length);
							const r = this[e + 1] | (this[e] << 8);
							return 32768 & r ? 4294901760 | r : r;
						}),
						(u.prototype.readInt32LE = function (e, t) {
							return (
								(e >>>= 0),
								t || N(e, 4, this.length),
								this[e] |
									(this[e + 1] << 8) |
									(this[e + 2] << 16) |
									(this[e + 3] << 24)
							);
						}),
						(u.prototype.readInt32BE = function (e, t) {
							return (
								(e >>>= 0),
								t || N(e, 4, this.length),
								(this[e] << 24) |
									(this[e + 1] << 16) |
									(this[e + 2] << 8) |
									this[e + 3]
							);
						}),
						(u.prototype.readBigInt64LE = Q(function (e) {
							z((e >>>= 0), "offset");
							const t = this[e],
								r = this[e + 7];
							(void 0 !== t && void 0 !== r) ||
								G(e, this.length - 8);
							const n =
								this[e + 4] +
								256 * this[e + 5] +
								65536 * this[e + 6] +
								(r << 24);
							return (
								(BigInt(n) << BigInt(32)) +
								BigInt(
									t +
										256 * this[++e] +
										65536 * this[++e] +
										this[++e] * 2 ** 24
								)
							);
						})),
						(u.prototype.readBigInt64BE = Q(function (e) {
							z((e >>>= 0), "offset");
							const t = this[e],
								r = this[e + 7];
							(void 0 !== t && void 0 !== r) ||
								G(e, this.length - 8);
							const n =
								(t << 24) +
								65536 * this[++e] +
								256 * this[++e] +
								this[++e];
							return (
								(BigInt(n) << BigInt(32)) +
								BigInt(
									this[++e] * 2 ** 24 +
										65536 * this[++e] +
										256 * this[++e] +
										r
								)
							);
						})),
						(u.prototype.readFloatLE = function (e, t) {
							return (
								(e >>>= 0),
								t || N(e, 4, this.length),
								o.read(this, e, !0, 23, 4)
							);
						}),
						(u.prototype.readFloatBE = function (e, t) {
							return (
								(e >>>= 0),
								t || N(e, 4, this.length),
								o.read(this, e, !1, 23, 4)
							);
						}),
						(u.prototype.readDoubleLE = function (e, t) {
							return (
								(e >>>= 0),
								t || N(e, 8, this.length),
								o.read(this, e, !0, 52, 8)
							);
						}),
						(u.prototype.readDoubleBE = function (e, t) {
							return (
								(e >>>= 0),
								t || N(e, 8, this.length),
								o.read(this, e, !1, 52, 8)
							);
						}),
						(u.prototype.writeUintLE = u.prototype.writeUIntLE =
							function (e, t, r, n) {
								(e = +e),
									(t >>>= 0),
									(r >>>= 0),
									n ||
										M(
											this,
											e,
											t,
											r,
											Math.pow(2, 8 * r) - 1,
											0
										);
								let o = 1,
									i = 0;
								for (this[t] = 255 & e; ++i < r && (o *= 256); )
									this[t + i] = (e / o) & 255;
								return t + r;
							}),
						(u.prototype.writeUintBE = u.prototype.writeUIntBE =
							function (e, t, r, n) {
								(e = +e),
									(t >>>= 0),
									(r >>>= 0),
									n ||
										M(
											this,
											e,
											t,
											r,
											Math.pow(2, 8 * r) - 1,
											0
										);
								let o = r - 1,
									i = 1;
								for (
									this[t + o] = 255 & e;
									--o >= 0 && (i *= 256);

								)
									this[t + o] = (e / i) & 255;
								return t + r;
							}),
						(u.prototype.writeUint8 = u.prototype.writeUInt8 =
							function (e, t, r) {
								return (
									(e = +e),
									(t >>>= 0),
									r || M(this, e, t, 1, 255, 0),
									(this[t] = 255 & e),
									t + 1
								);
							}),
						(u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
							function (e, t, r) {
								return (
									(e = +e),
									(t >>>= 0),
									r || M(this, e, t, 2, 65535, 0),
									(this[t] = 255 & e),
									(this[t + 1] = e >>> 8),
									t + 2
								);
							}),
						(u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
							function (e, t, r) {
								return (
									(e = +e),
									(t >>>= 0),
									r || M(this, e, t, 2, 65535, 0),
									(this[t] = e >>> 8),
									(this[t + 1] = 255 & e),
									t + 2
								);
							}),
						(u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
							function (e, t, r) {
								return (
									(e = +e),
									(t >>>= 0),
									r || M(this, e, t, 4, 4294967295, 0),
									(this[t + 3] = e >>> 24),
									(this[t + 2] = e >>> 16),
									(this[t + 1] = e >>> 8),
									(this[t] = 255 & e),
									t + 4
								);
							}),
						(u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
							function (e, t, r) {
								return (
									(e = +e),
									(t >>>= 0),
									r || M(this, e, t, 4, 4294967295, 0),
									(this[t] = e >>> 24),
									(this[t + 1] = e >>> 16),
									(this[t + 2] = e >>> 8),
									(this[t + 3] = 255 & e),
									t + 4
								);
							}),
						(u.prototype.writeBigUInt64LE = Q(function (e, t = 0) {
							return k(
								this,
								e,
								t,
								BigInt(0),
								BigInt("0xffffffffffffffff")
							);
						})),
						(u.prototype.writeBigUInt64BE = Q(function (e, t = 0) {
							return D(
								this,
								e,
								t,
								BigInt(0),
								BigInt("0xffffffffffffffff")
							);
						})),
						(u.prototype.writeIntLE = function (e, t, r, n) {
							if (((e = +e), (t >>>= 0), !n)) {
								const n = Math.pow(2, 8 * r - 1);
								M(this, e, t, r, n - 1, -n);
							}
							let o = 0,
								i = 1,
								s = 0;
							for (this[t] = 255 & e; ++o < r && (i *= 256); )
								e < 0 &&
									0 === s &&
									0 !== this[t + o - 1] &&
									(s = 1),
									(this[t + o] = (((e / i) >> 0) - s) & 255);
							return t + r;
						}),
						(u.prototype.writeIntBE = function (e, t, r, n) {
							if (((e = +e), (t >>>= 0), !n)) {
								const n = Math.pow(2, 8 * r - 1);
								M(this, e, t, r, n - 1, -n);
							}
							let o = r - 1,
								i = 1,
								s = 0;
							for (
								this[t + o] = 255 & e;
								--o >= 0 && (i *= 256);

							)
								e < 0 &&
									0 === s &&
									0 !== this[t + o + 1] &&
									(s = 1),
									(this[t + o] = (((e / i) >> 0) - s) & 255);
							return t + r;
						}),
						(u.prototype.writeInt8 = function (e, t, r) {
							return (
								(e = +e),
								(t >>>= 0),
								r || M(this, e, t, 1, 127, -128),
								e < 0 && (e = 255 + e + 1),
								(this[t] = 255 & e),
								t + 1
							);
						}),
						(u.prototype.writeInt16LE = function (e, t, r) {
							return (
								(e = +e),
								(t >>>= 0),
								r || M(this, e, t, 2, 32767, -32768),
								(this[t] = 255 & e),
								(this[t + 1] = e >>> 8),
								t + 2
							);
						}),
						(u.prototype.writeInt16BE = function (e, t, r) {
							return (
								(e = +e),
								(t >>>= 0),
								r || M(this, e, t, 2, 32767, -32768),
								(this[t] = e >>> 8),
								(this[t + 1] = 255 & e),
								t + 2
							);
						}),
						(u.prototype.writeInt32LE = function (e, t, r) {
							return (
								(e = +e),
								(t >>>= 0),
								r || M(this, e, t, 4, 2147483647, -2147483648),
								(this[t] = 255 & e),
								(this[t + 1] = e >>> 8),
								(this[t + 2] = e >>> 16),
								(this[t + 3] = e >>> 24),
								t + 4
							);
						}),
						(u.prototype.writeInt32BE = function (e, t, r) {
							return (
								(e = +e),
								(t >>>= 0),
								r || M(this, e, t, 4, 2147483647, -2147483648),
								e < 0 && (e = 4294967295 + e + 1),
								(this[t] = e >>> 24),
								(this[t + 1] = e >>> 16),
								(this[t + 2] = e >>> 8),
								(this[t + 3] = 255 & e),
								t + 4
							);
						}),
						(u.prototype.writeBigInt64LE = Q(function (e, t = 0) {
							return k(
								this,
								e,
								t,
								-BigInt("0x8000000000000000"),
								BigInt("0x7fffffffffffffff")
							);
						})),
						(u.prototype.writeBigInt64BE = Q(function (e, t = 0) {
							return D(
								this,
								e,
								t,
								-BigInt("0x8000000000000000"),
								BigInt("0x7fffffffffffffff")
							);
						})),
						(u.prototype.writeFloatLE = function (e, t, r) {
							return F(this, e, t, !0, r);
						}),
						(u.prototype.writeFloatBE = function (e, t, r) {
							return F(this, e, t, !1, r);
						}),
						(u.prototype.writeDoubleLE = function (e, t, r) {
							return B(this, e, t, !0, r);
						}),
						(u.prototype.writeDoubleBE = function (e, t, r) {
							return B(this, e, t, !1, r);
						}),
						(u.prototype.copy = function (e, t, r, n) {
							if (!u.isBuffer(e))
								throw new TypeError(
									"argument should be a Buffer"
								);
							if (
								(r || (r = 0),
								n || 0 === n || (n = this.length),
								t >= e.length && (t = e.length),
								t || (t = 0),
								n > 0 && n < r && (n = r),
								n === r)
							)
								return 0;
							if (0 === e.length || 0 === this.length) return 0;
							if (t < 0)
								throw new RangeError(
									"targetStart out of bounds"
								);
							if (r < 0 || r >= this.length)
								throw new RangeError("Index out of range");
							if (n < 0)
								throw new RangeError("sourceEnd out of bounds");
							n > this.length && (n = this.length),
								e.length - t < n - r && (n = e.length - t + r);
							const o = n - r;
							return (
								this === e &&
								"function" ==
									typeof Uint8Array.prototype.copyWithin
									? this.copyWithin(t, r, n)
									: Uint8Array.prototype.set.call(
											e,
											this.subarray(r, n),
											t
									  ),
								o
							);
						}),
						(u.prototype.fill = function (e, t, r, n) {
							if ("string" == typeof e) {
								if (
									("string" == typeof t
										? ((n = t), (t = 0), (r = this.length))
										: "string" == typeof r &&
										  ((n = r), (r = this.length)),
									void 0 !== n && "string" != typeof n)
								)
									throw new TypeError(
										"encoding must be a string"
									);
								if ("string" == typeof n && !u.isEncoding(n))
									throw new TypeError(
										"Unknown encoding: " + n
									);
								if (1 === e.length) {
									const t = e.charCodeAt(0);
									(("utf8" === n && t < 128) ||
										"latin1" === n) &&
										(e = t);
								}
							} else
								"number" == typeof e
									? (e &= 255)
									: "boolean" == typeof e && (e = Number(e));
							if (t < 0 || this.length < t || this.length < r)
								throw new RangeError("Out of range index");
							if (r <= t) return this;
							let o;
							if (
								((t >>>= 0),
								(r = void 0 === r ? this.length : r >>> 0),
								e || (e = 0),
								"number" == typeof e)
							)
								for (o = t; o < r; ++o) this[o] = e;
							else {
								const i = u.isBuffer(e) ? e : u.from(e, n),
									s = i.length;
								if (0 === s)
									throw new TypeError(
										'The value "' +
											e +
											'" is invalid for argument "value"'
									);
								for (o = 0; o < r - t; ++o)
									this[o + t] = i[o % s];
							}
							return this;
						});
					const L = {};
					function U(e, t, r) {
						L[e] = class extends r {
							constructor() {
								super(),
									Object.defineProperty(this, "message", {
										value: t.apply(this, arguments),
										writable: !0,
										configurable: !0,
									}),
									(this.name = `${this.name} [${e}]`),
									this.stack,
									delete this.name;
							}
							get code() {
								return e;
							}
							set code(e) {
								Object.defineProperty(this, "code", {
									configurable: !0,
									enumerable: !0,
									value: e,
									writable: !0,
								});
							}
							toString() {
								return `${this.name} [${e}]: ${this.message}`;
							}
						};
					}
					function X(e) {
						let t = "",
							r = e.length;
						const n = "-" === e[0] ? 1 : 0;
						for (; r >= n + 4; r -= 3)
							t = `_${e.slice(r - 3, r)}${t}`;
						return `${e.slice(0, r)}${t}`;
					}
					function H(e, t, r, n, o, i) {
						if (e > r || e < t) {
							const n = "bigint" == typeof t ? "n" : "";
							let o;
							throw (
								((o =
									i > 3
										? 0 === t || t === BigInt(0)
											? `>= 0${n} and < 2${n} ** ${
													8 * (i + 1)
											  }${n}`
											: `>= -(2${n} ** ${
													8 * (i + 1) - 1
											  }${n}) and < 2 ** ${
													8 * (i + 1) - 1
											  }${n}`
										: `>= ${t}${n} and <= ${r}${n}`),
								new L.ERR_OUT_OF_RANGE("value", o, e))
							);
						}
						!(function (e, t, r) {
							z(t, "offset"),
								(void 0 !== e[t] && void 0 !== e[t + r]) ||
									G(t, e.length - (r + 1));
						})(n, o, i);
					}
					function z(e, t) {
						if ("number" != typeof e)
							throw new L.ERR_INVALID_ARG_TYPE(t, "number", e);
					}
					function G(e, t, r) {
						if (Math.floor(e) !== e)
							throw (
								(z(e, r),
								new L.ERR_OUT_OF_RANGE(
									r || "offset",
									"an integer",
									e
								))
							);
						if (t < 0) throw new L.ERR_BUFFER_OUT_OF_BOUNDS();
						throw new L.ERR_OUT_OF_RANGE(
							r || "offset",
							`>= ${r ? 1 : 0} and <= ${t}`,
							e
						);
					}
					U(
						"ERR_BUFFER_OUT_OF_BOUNDS",
						function (e) {
							return e
								? `${e} is outside of buffer bounds`
								: "Attempt to access memory outside buffer bounds";
						},
						RangeError
					),
						U(
							"ERR_INVALID_ARG_TYPE",
							function (e, t) {
								return `The "${e}" argument must be of type number. Received type ${typeof t}`;
							},
							TypeError
						),
						U(
							"ERR_OUT_OF_RANGE",
							function (e, t, r) {
								let n = `The value of "${e}" is out of range.`,
									o = r;
								return (
									Number.isInteger(r) && Math.abs(r) > 2 ** 32
										? (o = X(String(r)))
										: "bigint" == typeof r &&
										  ((o = String(r)),
										  (r > BigInt(2) ** BigInt(32) ||
												r <
													-(
														BigInt(2) ** BigInt(32)
													)) &&
												(o = X(o)),
										  (o += "n")),
									(n += ` It must be ${t}. Received ${o}`),
									n
								);
							},
							RangeError
						);
					const W = /[^+/0-9A-Za-z-_]/g;
					function V(e, t) {
						let r;
						t = t || 1 / 0;
						const n = e.length;
						let o = null;
						const i = [];
						for (let s = 0; s < n; ++s) {
							if (
								((r = e.charCodeAt(s)), r > 55295 && r < 57344)
							) {
								if (!o) {
									if (r > 56319) {
										(t -= 3) > -1 && i.push(239, 191, 189);
										continue;
									}
									if (s + 1 === n) {
										(t -= 3) > -1 && i.push(239, 191, 189);
										continue;
									}
									o = r;
									continue;
								}
								if (r < 56320) {
									(t -= 3) > -1 && i.push(239, 191, 189),
										(o = r);
									continue;
								}
								r = 65536 + (((o - 55296) << 10) | (r - 56320));
							} else o && (t -= 3) > -1 && i.push(239, 191, 189);
							if (((o = null), r < 128)) {
								if ((t -= 1) < 0) break;
								i.push(r);
							} else if (r < 2048) {
								if ((t -= 2) < 0) break;
								i.push((r >> 6) | 192, (63 & r) | 128);
							} else if (r < 65536) {
								if ((t -= 3) < 0) break;
								i.push(
									(r >> 12) | 224,
									((r >> 6) & 63) | 128,
									(63 & r) | 128
								);
							} else {
								if (!(r < 1114112))
									throw new Error("Invalid code point");
								if ((t -= 4) < 0) break;
								i.push(
									(r >> 18) | 240,
									((r >> 12) & 63) | 128,
									((r >> 6) & 63) | 128,
									(63 & r) | 128
								);
							}
						}
						return i;
					}
					function K(e) {
						return n.toByteArray(
							(function (e) {
								if (
									(e = (e = e.split("=")[0])
										.trim()
										.replace(W, "")).length < 2
								)
									return "";
								for (; e.length % 4 != 0; ) e += "=";
								return e;
							})(e)
						);
					}
					function q(e, t, r, n) {
						let o;
						for (
							o = 0;
							o < n && !(o + r >= t.length || o >= e.length);
							++o
						)
							t[o + r] = e[o];
						return o;
					}
					function $(e, t) {
						return (
							e instanceof t ||
							(null != e &&
								null != e.constructor &&
								null != e.constructor.name &&
								e.constructor.name === t.name)
						);
					}
					function Z(e) {
						return e != e;
					}
					const Y = (function () {
						const e = "0123456789abcdef",
							t = new Array(256);
						for (let r = 0; r < 16; ++r) {
							const n = 16 * r;
							for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
						}
						return t;
					})();
					function Q(e) {
						return "undefined" == typeof BigInt ? J : e;
					}
					function J() {
						throw new Error("BigInt not supported");
					}
				},
				7187: (e) => {
					"use strict";
					var t,
						r = "object" == typeof Reflect ? Reflect : null,
						n =
							r && "function" == typeof r.apply
								? r.apply
								: function (e, t, r) {
										return Function.prototype.apply.call(
											e,
											t,
											r
										);
								  };
					t =
						r && "function" == typeof r.ownKeys
							? r.ownKeys
							: Object.getOwnPropertySymbols
							? function (e) {
									return Object.getOwnPropertyNames(e).concat(
										Object.getOwnPropertySymbols(e)
									);
							  }
							: function (e) {
									return Object.getOwnPropertyNames(e);
							  };
					var o =
						Number.isNaN ||
						function (e) {
							return e != e;
						};
					function i() {
						i.init.call(this);
					}
					(e.exports = i),
						(e.exports.once = function (e, t) {
							return new Promise(function (r, n) {
								function o(r) {
									e.removeListener(t, i), n(r);
								}
								function i() {
									"function" == typeof e.removeListener &&
										e.removeListener("error", o),
										r([].slice.call(arguments));
								}
								m(e, t, i, { once: !0 }),
									"error" !== t &&
										(function (e, t, r) {
											"function" == typeof e.on &&
												m(e, "error", t, { once: !0 });
										})(e, o);
							});
						}),
						(i.EventEmitter = i),
						(i.prototype._events = void 0),
						(i.prototype._eventsCount = 0),
						(i.prototype._maxListeners = void 0);
					var s = 10;
					function a(e) {
						if ("function" != typeof e)
							throw new TypeError(
								'The "listener" argument must be of type Function. Received type ' +
									typeof e
							);
					}
					function u(e) {
						return void 0 === e._maxListeners
							? i.defaultMaxListeners
							: e._maxListeners;
					}
					function c(e, t, r, n) {
						var o, i, s, c;
						if (
							(a(r),
							void 0 === (i = e._events)
								? ((i = e._events = Object.create(null)),
								  (e._eventsCount = 0))
								: (void 0 !== i.newListener &&
										(e.emit(
											"newListener",
											t,
											r.listener ? r.listener : r
										),
										(i = e._events)),
								  (s = i[t])),
							void 0 === s)
						)
							(s = i[t] = r), ++e._eventsCount;
						else if (
							("function" == typeof s
								? (s = i[t] = n ? [r, s] : [s, r])
								: n
								? s.unshift(r)
								: s.push(r),
							(o = u(e)) > 0 && s.length > o && !s.warned)
						) {
							s.warned = !0;
							var l = new Error(
								"Possible EventEmitter memory leak detected. " +
									s.length +
									" " +
									String(t) +
									" listeners added. Use emitter.setMaxListeners() to increase limit"
							);
							(l.name = "MaxListenersExceededWarning"),
								(l.emitter = e),
								(l.type = t),
								(l.count = s.length),
								(c = l),
								console && console.warn && console.warn(c);
						}
						return e;
					}
					function l() {
						if (!this.fired)
							return (
								this.target.removeListener(
									this.type,
									this.wrapFn
								),
								(this.fired = !0),
								0 === arguments.length
									? this.listener.call(this.target)
									: this.listener.apply(
											this.target,
											arguments
									  )
							);
					}
					function p(e, t, r) {
						var n = {
								fired: !1,
								wrapFn: void 0,
								target: e,
								type: t,
								listener: r,
							},
							o = l.bind(n);
						return (o.listener = r), (n.wrapFn = o), o;
					}
					function h(e, t, r) {
						var n = e._events;
						if (void 0 === n) return [];
						var o = n[t];
						return void 0 === o
							? []
							: "function" == typeof o
							? r
								? [o.listener || o]
								: [o]
							: r
							? (function (e) {
									for (
										var t = new Array(e.length), r = 0;
										r < t.length;
										++r
									)
										t[r] = e[r].listener || e[r];
									return t;
							  })(o)
							: f(o, o.length);
					}
					function d(e) {
						var t = this._events;
						if (void 0 !== t) {
							var r = t[e];
							if ("function" == typeof r) return 1;
							if (void 0 !== r) return r.length;
						}
						return 0;
					}
					function f(e, t) {
						for (var r = new Array(t), n = 0; n < t; ++n)
							r[n] = e[n];
						return r;
					}
					function m(e, t, r, n) {
						if ("function" == typeof e.on)
							n.once ? e.once(t, r) : e.on(t, r);
						else {
							if ("function" != typeof e.addEventListener)
								throw new TypeError(
									'The "emitter" argument must be of type EventEmitter. Received type ' +
										typeof e
								);
							e.addEventListener(t, function o(i) {
								n.once && e.removeEventListener(t, o), r(i);
							});
						}
					}
					Object.defineProperty(i, "defaultMaxListeners", {
						enumerable: !0,
						get: function () {
							return s;
						},
						set: function (e) {
							if ("number" != typeof e || e < 0 || o(e))
								throw new RangeError(
									'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
										e +
										"."
								);
							s = e;
						},
					}),
						(i.init = function () {
							(void 0 !== this._events &&
								this._events !==
									Object.getPrototypeOf(this)._events) ||
								((this._events = Object.create(null)),
								(this._eventsCount = 0)),
								(this._maxListeners =
									this._maxListeners || void 0);
						}),
						(i.prototype.setMaxListeners = function (e) {
							if ("number" != typeof e || e < 0 || o(e))
								throw new RangeError(
									'The value of "n" is out of range. It must be a non-negative number. Received ' +
										e +
										"."
								);
							return (this._maxListeners = e), this;
						}),
						(i.prototype.getMaxListeners = function () {
							return u(this);
						}),
						(i.prototype.emit = function (e) {
							for (var t = [], r = 1; r < arguments.length; r++)
								t.push(arguments[r]);
							var o = "error" === e,
								i = this._events;
							if (void 0 !== i) o = o && void 0 === i.error;
							else if (!o) return !1;
							if (o) {
								var s;
								if (
									(t.length > 0 && (s = t[0]),
									s instanceof Error)
								)
									throw s;
								var a = new Error(
									"Unhandled error." +
										(s ? " (" + s.message + ")" : "")
								);
								throw ((a.context = s), a);
							}
							var u = i[e];
							if (void 0 === u) return !1;
							if ("function" == typeof u) n(u, this, t);
							else {
								var c = u.length,
									l = f(u, c);
								for (r = 0; r < c; ++r) n(l[r], this, t);
							}
							return !0;
						}),
						(i.prototype.addListener = function (e, t) {
							return c(this, e, t, !1);
						}),
						(i.prototype.on = i.prototype.addListener),
						(i.prototype.prependListener = function (e, t) {
							return c(this, e, t, !0);
						}),
						(i.prototype.once = function (e, t) {
							return a(t), this.on(e, p(this, e, t)), this;
						}),
						(i.prototype.prependOnceListener = function (e, t) {
							return (
								a(t),
								this.prependListener(e, p(this, e, t)),
								this
							);
						}),
						(i.prototype.removeListener = function (e, t) {
							var r, n, o, i, s;
							if ((a(t), void 0 === (n = this._events)))
								return this;
							if (void 0 === (r = n[e])) return this;
							if (r === t || r.listener === t)
								0 == --this._eventsCount
									? (this._events = Object.create(null))
									: (delete n[e],
									  n.removeListener &&
											this.emit(
												"removeListener",
												e,
												r.listener || t
											));
							else if ("function" != typeof r) {
								for (o = -1, i = r.length - 1; i >= 0; i--)
									if (r[i] === t || r[i].listener === t) {
										(s = r[i].listener), (o = i);
										break;
									}
								if (o < 0) return this;
								0 === o
									? r.shift()
									: (function (e, t) {
											for (; t + 1 < e.length; t++)
												e[t] = e[t + 1];
											e.pop();
									  })(r, o),
									1 === r.length && (n[e] = r[0]),
									void 0 !== n.removeListener &&
										this.emit("removeListener", e, s || t);
							}
							return this;
						}),
						(i.prototype.off = i.prototype.removeListener),
						(i.prototype.removeAllListeners = function (e) {
							var t, r, n;
							if (void 0 === (r = this._events)) return this;
							if (void 0 === r.removeListener)
								return (
									0 === arguments.length
										? ((this._events = Object.create(null)),
										  (this._eventsCount = 0))
										: void 0 !== r[e] &&
										  (0 == --this._eventsCount
												? (this._events =
														Object.create(null))
												: delete r[e]),
									this
								);
							if (0 === arguments.length) {
								var o,
									i = Object.keys(r);
								for (n = 0; n < i.length; ++n)
									"removeListener" !== (o = i[n]) &&
										this.removeAllListeners(o);
								return (
									this.removeAllListeners("removeListener"),
									(this._events = Object.create(null)),
									(this._eventsCount = 0),
									this
								);
							}
							if ("function" == typeof (t = r[e]))
								this.removeListener(e, t);
							else if (void 0 !== t)
								for (n = t.length - 1; n >= 0; n--)
									this.removeListener(e, t[n]);
							return this;
						}),
						(i.prototype.listeners = function (e) {
							return h(this, e, !0);
						}),
						(i.prototype.rawListeners = function (e) {
							return h(this, e, !1);
						}),
						(i.listenerCount = function (e, t) {
							return "function" == typeof e.listenerCount
								? e.listenerCount(t)
								: d.call(e, t);
						}),
						(i.prototype.listenerCount = d),
						(i.prototype.eventNames = function () {
							return this._eventsCount > 0 ? t(this._events) : [];
						});
				},
				645: (e, t) => {
					(t.read = function (e, t, r, n, o) {
						var i,
							s,
							a = 8 * o - n - 1,
							u = (1 << a) - 1,
							c = u >> 1,
							l = -7,
							p = r ? o - 1 : 0,
							h = r ? -1 : 1,
							d = e[t + p];
						for (
							p += h, i = d & ((1 << -l) - 1), d >>= -l, l += a;
							l > 0;
							i = 256 * i + e[t + p], p += h, l -= 8
						);
						for (
							s = i & ((1 << -l) - 1), i >>= -l, l += n;
							l > 0;
							s = 256 * s + e[t + p], p += h, l -= 8
						);
						if (0 === i) i = 1 - c;
						else {
							if (i === u)
								return s ? NaN : (1 / 0) * (d ? -1 : 1);
							(s += Math.pow(2, n)), (i -= c);
						}
						return (d ? -1 : 1) * s * Math.pow(2, i - n);
					}),
						(t.write = function (e, t, r, n, o, i) {
							var s,
								a,
								u,
								c = 8 * i - o - 1,
								l = (1 << c) - 1,
								p = l >> 1,
								h =
									23 === o
										? Math.pow(2, -24) - Math.pow(2, -77)
										: 0,
								d = n ? 0 : i - 1,
								f = n ? 1 : -1,
								m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
							for (
								t = Math.abs(t),
									isNaN(t) || t === 1 / 0
										? ((a = isNaN(t) ? 1 : 0), (s = l))
										: ((s = Math.floor(
												Math.log(t) / Math.LN2
										  )),
										  t * (u = Math.pow(2, -s)) < 1 &&
												(s--, (u *= 2)),
										  (t +=
												s + p >= 1
													? h / u
													: h * Math.pow(2, 1 - p)) *
												u >=
												2 && (s++, (u /= 2)),
										  s + p >= l
												? ((a = 0), (s = l))
												: s + p >= 1
												? ((a =
														(t * u - 1) *
														Math.pow(2, o)),
												  (s += p))
												: ((a =
														t *
														Math.pow(2, p - 1) *
														Math.pow(2, o)),
												  (s = 0)));
								o >= 8;
								e[r + d] = 255 & a, d += f, a /= 256, o -= 8
							);
							for (
								s = (s << o) | a, c += o;
								c > 0;
								e[r + d] = 255 & s, d += f, s /= 256, c -= 8
							);
							e[r + d - f] |= 128 * m;
						});
				},
				5717: (e) => {
					"function" == typeof Object.create
						? (e.exports = function (e, t) {
								t &&
									((e.super_ = t),
									(e.prototype = Object.create(t.prototype, {
										constructor: {
											value: e,
											enumerable: !1,
											writable: !0,
											configurable: !0,
										},
									})));
						  })
						: (e.exports = function (e, t) {
								if (t) {
									e.super_ = t;
									var r = function () {};
									(r.prototype = t.prototype),
										(e.prototype = new r()),
										(e.prototype.constructor = e);
								}
						  });
				},
				5733: (e, t, r) => {
					e.exports = (function e(t, r, n) {
						function o(s, a) {
							if (!r[s]) {
								if (!t[s]) {
									if (i) return i(s, !0);
									var u = new Error(
										"Cannot find module '" + s + "'"
									);
									throw ((u.code = "MODULE_NOT_FOUND"), u);
								}
								var c = (r[s] = { exports: {} });
								t[s][0].call(
									c.exports,
									function (e) {
										return o(t[s][1][e] || e);
									},
									c,
									c.exports,
									e,
									t,
									r,
									n
								);
							}
							return r[s].exports;
						}
						for (var i = void 0, s = 0; s < n.length; s++) o(n[s]);
						return o;
					})(
						{
							1: [
								function (e, t, r) {
									"use strict";
									var n = e("./utils"),
										o = e("./support"),
										i =
											"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
									(r.encode = function (e) {
										for (
											var t,
												r,
												o,
												s,
												a,
												u,
												c,
												l = [],
												p = 0,
												h = e.length,
												d = h,
												f = "string" !== n.getTypeOf(e);
											p < e.length;

										)
											(d = h - p),
												(o = f
													? ((t = e[p++]),
													  (r = p < h ? e[p++] : 0),
													  p < h ? e[p++] : 0)
													: ((t = e.charCodeAt(p++)),
													  (r =
															p < h
																? e.charCodeAt(
																		p++
																  )
																: 0),
													  p < h
															? e.charCodeAt(p++)
															: 0)),
												(s = t >> 2),
												(a = ((3 & t) << 4) | (r >> 4)),
												(u =
													1 < d
														? ((15 & r) << 2) |
														  (o >> 6)
														: 64),
												(c = 2 < d ? 63 & o : 64),
												l.push(
													i.charAt(s) +
														i.charAt(a) +
														i.charAt(u) +
														i.charAt(c)
												);
										return l.join("");
									}),
										(r.decode = function (e) {
											var t,
												r,
												n,
												s,
												a,
												u,
												c = 0,
												l = 0,
												p = "data:";
											if (e.substr(0, p.length) === p)
												throw new Error(
													"Invalid base64 input, it looks like a data url."
												);
											var h,
												d =
													(3 *
														(e = e.replace(
															/[^A-Za-z0-9\+\/\=]/g,
															""
														)).length) /
													4;
											if (
												(e.charAt(e.length - 1) ===
													i.charAt(64) && d--,
												e.charAt(e.length - 2) ===
													i.charAt(64) && d--,
												d % 1 != 0)
											)
												throw new Error(
													"Invalid base64 input, bad content length."
												);
											for (
												h = o.uint8array
													? new Uint8Array(0 | d)
													: new Array(0 | d);
												c < e.length;

											)
												(t =
													(i.indexOf(e.charAt(c++)) <<
														2) |
													((s = i.indexOf(
														e.charAt(c++)
													)) >>
														4)),
													(r =
														((15 & s) << 4) |
														((a = i.indexOf(
															e.charAt(c++)
														)) >>
															2)),
													(n =
														((3 & a) << 6) |
														(u = i.indexOf(
															e.charAt(c++)
														))),
													(h[l++] = t),
													64 !== a && (h[l++] = r),
													64 !== u && (h[l++] = n);
											return h;
										});
								},
								{ "./support": 30, "./utils": 32 },
							],
							2: [
								function (e, t, r) {
									"use strict";
									var n = e("./external"),
										o = e("./stream/DataWorker"),
										i = e("./stream/Crc32Probe"),
										s = e("./stream/DataLengthProbe");
									function a(e, t, r, n, o) {
										(this.compressedSize = e),
											(this.uncompressedSize = t),
											(this.crc32 = r),
											(this.compression = n),
											(this.compressedContent = o);
									}
									(a.prototype = {
										getContentWorker: function () {
											var e = new o(
													n.Promise.resolve(
														this.compressedContent
													)
												)
													.pipe(
														this.compression.uncompressWorker()
													)
													.pipe(new s("data_length")),
												t = this;
											return (
												e.on("end", function () {
													if (
														this.streamInfo
															.data_length !==
														t.uncompressedSize
													)
														throw new Error(
															"Bug : uncompressed data size mismatch"
														);
												}),
												e
											);
										},
										getCompressedWorker: function () {
											return new o(
												n.Promise.resolve(
													this.compressedContent
												)
											)
												.withStreamInfo(
													"compressedSize",
													this.compressedSize
												)
												.withStreamInfo(
													"uncompressedSize",
													this.uncompressedSize
												)
												.withStreamInfo(
													"crc32",
													this.crc32
												)
												.withStreamInfo(
													"compression",
													this.compression
												);
										},
									}),
										(a.createWorkerFrom = function (
											e,
											t,
											r
										) {
											return e
												.pipe(new i())
												.pipe(new s("uncompressedSize"))
												.pipe(t.compressWorker(r))
												.pipe(new s("compressedSize"))
												.withStreamInfo(
													"compression",
													t
												);
										}),
										(t.exports = a);
								},
								{
									"./external": 6,
									"./stream/Crc32Probe": 25,
									"./stream/DataLengthProbe": 26,
									"./stream/DataWorker": 27,
								},
							],
							3: [
								function (e, t, r) {
									"use strict";
									var n = e("./stream/GenericWorker");
									(r.STORE = {
										magic: "\0\0",
										compressWorker: function (e) {
											return new n("STORE compression");
										},
										uncompressWorker: function () {
											return new n("STORE decompression");
										},
									}),
										(r.DEFLATE = e("./flate"));
								},
								{ "./flate": 7, "./stream/GenericWorker": 28 },
							],
							4: [
								function (e, t, r) {
									"use strict";
									var n = e("./utils"),
										o = (function () {
											for (
												var e, t = [], r = 0;
												r < 256;
												r++
											) {
												e = r;
												for (var n = 0; n < 8; n++)
													e =
														1 & e
															? 3988292384 ^
															  (e >>> 1)
															: e >>> 1;
												t[r] = e;
											}
											return t;
										})();
									t.exports = function (e, t) {
										return void 0 !== e && e.length
											? "string" !== n.getTypeOf(e)
												? (function (e, t, r, n) {
														var i = o,
															s = 0 + r;
														e ^= -1;
														for (
															var a = 0;
															a < s;
															a++
														)
															e =
																(e >>> 8) ^
																i[
																	255 &
																		(e ^
																			t[
																				a
																			])
																];
														return -1 ^ e;
												  })(0 | t, e, e.length)
												: (function (e, t, r, n) {
														var i = o,
															s = 0 + r;
														e ^= -1;
														for (
															var a = 0;
															a < s;
															a++
														)
															e =
																(e >>> 8) ^
																i[
																	255 &
																		(e ^
																			t.charCodeAt(
																				a
																			))
																];
														return -1 ^ e;
												  })(0 | t, e, e.length)
											: 0;
									};
								},
								{ "./utils": 32 },
							],
							5: [
								function (e, t, r) {
									"use strict";
									(r.base64 = !1),
										(r.binary = !1),
										(r.dir = !1),
										(r.createFolders = !0),
										(r.date = null),
										(r.compression = null),
										(r.compressionOptions = null),
										(r.comment = null),
										(r.unixPermissions = null),
										(r.dosPermissions = null);
								},
								{},
							],
							6: [
								function (e, t, r) {
									"use strict";
									var n;
									(n =
										"undefined" != typeof Promise
											? Promise
											: e("lie")),
										(t.exports = { Promise: n });
								},
								{ lie: 37 },
							],
							7: [
								function (e, t, r) {
									"use strict";
									var n =
											"undefined" != typeof Uint8Array &&
											"undefined" != typeof Uint16Array &&
											"undefined" != typeof Uint32Array,
										o = e("pako"),
										i = e("./utils"),
										s = e("./stream/GenericWorker"),
										a = n ? "uint8array" : "array";
									function u(e, t) {
										s.call(this, "FlateWorker/" + e),
											(this._pako = null),
											(this._pakoAction = e),
											(this._pakoOptions = t),
											(this.meta = {});
									}
									(r.magic = "\b\0"),
										i.inherits(u, s),
										(u.prototype.processChunk = function (
											e
										) {
											(this.meta = e.meta),
												null === this._pako &&
													this._createPako(),
												this._pako.push(
													i.transformTo(a, e.data),
													!1
												);
										}),
										(u.prototype.flush = function () {
											s.prototype.flush.call(this),
												null === this._pako &&
													this._createPako(),
												this._pako.push([], !0);
										}),
										(u.prototype.cleanUp = function () {
											s.prototype.cleanUp.call(this),
												(this._pako = null);
										}),
										(u.prototype._createPako = function () {
											this._pako = new o[
												this._pakoAction
											]({
												raw: !0,
												level:
													this._pakoOptions.level ||
													-1,
											});
											var e = this;
											this._pako.onData = function (t) {
												e.push({
													data: t,
													meta: e.meta,
												});
											};
										}),
										(r.compressWorker = function (e) {
											return new u("Deflate", e);
										}),
										(r.uncompressWorker = function () {
											return new u("Inflate", {});
										});
								},
								{
									"./stream/GenericWorker": 28,
									"./utils": 32,
									pako: 38,
								},
							],
							8: [
								function (e, t, r) {
									"use strict";
									function n(e, t) {
										var r,
											n = "";
										for (r = 0; r < t; r++)
											(n += String.fromCharCode(255 & e)),
												(e >>>= 8);
										return n;
									}
									function o(e, t, r, o, s, l) {
										var p,
											h,
											d = e.file,
											f = e.compression,
											m = l !== a.utf8encode,
											g = i.transformTo(
												"string",
												l(d.name)
											),
											b = i.transformTo(
												"string",
												a.utf8encode(d.name)
											),
											y = d.comment,
											w = i.transformTo("string", l(y)),
											v = i.transformTo(
												"string",
												a.utf8encode(y)
											),
											_ = b.length !== d.name.length,
											x = v.length !== y.length,
											E = "",
											T = "",
											O = "",
											S = d.dir,
											A = d.date,
											P = {
												crc32: 0,
												compressedSize: 0,
												uncompressedSize: 0,
											};
										(t && !r) ||
											((P.crc32 = e.crc32),
											(P.compressedSize =
												e.compressedSize),
											(P.uncompressedSize =
												e.uncompressedSize));
										var C = 0;
										t && (C |= 8),
											m || (!_ && !x) || (C |= 2048);
										var R = 0,
											I = 0;
										S && (R |= 16),
											"UNIX" === s
												? ((I = 798),
												  (R |= (function (e, t) {
														var r = e;
														return (
															e ||
																(r = t
																	? 16893
																	: 33204),
															(65535 & r) << 16
														);
												  })(d.unixPermissions, S)))
												: ((I = 20),
												  (R |= (function (e) {
														return 63 & (e || 0);
												  })(d.dosPermissions))),
											(p = A.getUTCHours()),
											(p <<= 6),
											(p |= A.getUTCMinutes()),
											(p <<= 5),
											(p |= A.getUTCSeconds() / 2),
											(h = A.getUTCFullYear() - 1980),
											(h <<= 4),
											(h |= A.getUTCMonth() + 1),
											(h <<= 5),
											(h |= A.getUTCDate()),
											_ &&
												((T = n(1, 1) + n(u(g), 4) + b),
												(E +=
													"up" + n(T.length, 2) + T)),
											x &&
												((O = n(1, 1) + n(u(w), 4) + v),
												(E +=
													"uc" + n(O.length, 2) + O));
										var N = "";
										return (
											(N += "\n\0"),
											(N += n(C, 2)),
											(N += f.magic),
											(N += n(p, 2)),
											(N += n(h, 2)),
											(N += n(P.crc32, 4)),
											(N += n(P.compressedSize, 4)),
											(N += n(P.uncompressedSize, 4)),
											(N += n(g.length, 2)),
											(N += n(E.length, 2)),
											{
												fileRecord:
													c.LOCAL_FILE_HEADER +
													N +
													g +
													E,
												dirRecord:
													c.CENTRAL_FILE_HEADER +
													n(I, 2) +
													N +
													n(w.length, 2) +
													"\0\0\0\0" +
													n(R, 4) +
													n(o, 4) +
													g +
													E +
													w,
											}
										);
									}
									var i = e("../utils"),
										s = e("../stream/GenericWorker"),
										a = e("../utf8"),
										u = e("../crc32"),
										c = e("../signature");
									function l(e, t, r, n) {
										s.call(this, "ZipFileWorker"),
											(this.bytesWritten = 0),
											(this.zipComment = t),
											(this.zipPlatform = r),
											(this.encodeFileName = n),
											(this.streamFiles = e),
											(this.accumulate = !1),
											(this.contentBuffer = []),
											(this.dirRecords = []),
											(this.currentSourceOffset = 0),
											(this.entriesCount = 0),
											(this.currentFile = null),
											(this._sources = []);
									}
									i.inherits(l, s),
										(l.prototype.push = function (e) {
											var t = e.meta.percent || 0,
												r = this.entriesCount,
												n = this._sources.length;
											this.accumulate
												? this.contentBuffer.push(e)
												: ((this.bytesWritten +=
														e.data.length),
												  s.prototype.push.call(this, {
														data: e.data,
														meta: {
															currentFile:
																this
																	.currentFile,
															percent: r
																? (t +
																		100 *
																			(r -
																				n -
																				1)) /
																  r
																: 100,
														},
												  }));
										}),
										(l.prototype.openedSource = function (
											e
										) {
											(this.currentSourceOffset =
												this.bytesWritten),
												(this.currentFile =
													e.file.name);
											var t =
												this.streamFiles && !e.file.dir;
											if (t) {
												var r = o(
													e,
													t,
													!1,
													this.currentSourceOffset,
													this.zipPlatform,
													this.encodeFileName
												);
												this.push({
													data: r.fileRecord,
													meta: { percent: 0 },
												});
											} else this.accumulate = !0;
										}),
										(l.prototype.closedSource = function (
											e
										) {
											this.accumulate = !1;
											var t =
													this.streamFiles &&
													!e.file.dir,
												r = o(
													e,
													t,
													!0,
													this.currentSourceOffset,
													this.zipPlatform,
													this.encodeFileName
												);
											if (
												(this.dirRecords.push(
													r.dirRecord
												),
												t)
											)
												this.push({
													data: (function (e) {
														return (
															c.DATA_DESCRIPTOR +
															n(e.crc32, 4) +
															n(
																e.compressedSize,
																4
															) +
															n(
																e.uncompressedSize,
																4
															)
														);
													})(e),
													meta: { percent: 100 },
												});
											else
												for (
													this.push({
														data: r.fileRecord,
														meta: { percent: 0 },
													});
													this.contentBuffer.length;

												)
													this.push(
														this.contentBuffer.shift()
													);
											this.currentFile = null;
										}),
										(l.prototype.flush = function () {
											for (
												var e = this.bytesWritten,
													t = 0;
												t < this.dirRecords.length;
												t++
											)
												this.push({
													data: this.dirRecords[t],
													meta: { percent: 100 },
												});
											var r = this.bytesWritten - e,
												o = (function (e, t, r, o, s) {
													var a = i.transformTo(
														"string",
														s(o)
													);
													return (
														c.CENTRAL_DIRECTORY_END +
														"\0\0\0\0" +
														n(e, 2) +
														n(e, 2) +
														n(t, 4) +
														n(r, 4) +
														n(a.length, 2) +
														a
													);
												})(
													this.dirRecords.length,
													r,
													e,
													this.zipComment,
													this.encodeFileName
												);
											this.push({
												data: o,
												meta: { percent: 100 },
											});
										}),
										(l.prototype.prepareNextSource =
											function () {
												(this.previous =
													this._sources.shift()),
													this.openedSource(
														this.previous.streamInfo
													),
													this.isPaused
														? this.previous.pause()
														: this.previous.resume();
											}),
										(l.prototype.registerPrevious =
											function (e) {
												this._sources.push(e);
												var t = this;
												return (
													e.on("data", function (e) {
														t.processChunk(e);
													}),
													e.on("end", function () {
														t.closedSource(
															t.previous
																.streamInfo
														),
															t._sources.length
																? t.prepareNextSource()
																: t.end();
													}),
													e.on("error", function (e) {
														t.error(e);
													}),
													this
												);
											}),
										(l.prototype.resume = function () {
											return (
												!!s.prototype.resume.call(
													this
												) &&
												(!this.previous &&
												this._sources.length
													? (this.prepareNextSource(),
													  !0)
													: this.previous ||
													  this._sources.length ||
													  this.generatedError
													? void 0
													: (this.end(), !0))
											);
										}),
										(l.prototype.error = function (e) {
											var t = this._sources;
											if (
												!s.prototype.error.call(this, e)
											)
												return !1;
											for (var r = 0; r < t.length; r++)
												try {
													t[r].error(e);
												} catch (e) {}
											return !0;
										}),
										(l.prototype.lock = function () {
											s.prototype.lock.call(this);
											for (
												var e = this._sources, t = 0;
												t < e.length;
												t++
											)
												e[t].lock();
										}),
										(t.exports = l);
								},
								{
									"../crc32": 4,
									"../signature": 23,
									"../stream/GenericWorker": 28,
									"../utf8": 31,
									"../utils": 32,
								},
							],
							9: [
								function (e, t, r) {
									"use strict";
									var n = e("../compressions"),
										o = e("./ZipFileWorker");
									r.generateWorker = function (e, t, r) {
										var i = new o(
												t.streamFiles,
												r,
												t.platform,
												t.encodeFileName
											),
											s = 0;
										try {
											e.forEach(function (e, r) {
												s++;
												var o = (function (e, t) {
														var r = e || t,
															o = n[r];
														if (!o)
															throw new Error(
																r +
																	" is not a valid compression method !"
															);
														return o;
													})(
														r.options.compression,
														t.compression
													),
													a =
														r.options
															.compressionOptions ||
														t.compressionOptions ||
														{},
													u = r.dir,
													c = r.date;
												r._compressWorker(o, a)
													.withStreamInfo("file", {
														name: e,
														dir: u,
														date: c,
														comment:
															r.comment || "",
														unixPermissions:
															r.unixPermissions,
														dosPermissions:
															r.dosPermissions,
													})
													.pipe(i);
											}),
												(i.entriesCount = s);
										} catch (e) {
											i.error(e);
										}
										return i;
									};
								},
								{ "../compressions": 3, "./ZipFileWorker": 8 },
							],
							10: [
								function (e, t, r) {
									"use strict";
									function n() {
										if (!(this instanceof n))
											return new n();
										if (arguments.length)
											throw new Error(
												"The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."
											);
										(this.files = Object.create(null)),
											(this.comment = null),
											(this.root = ""),
											(this.clone = function () {
												var e = new n();
												for (var t in this)
													"function" !=
														typeof this[t] &&
														(e[t] = this[t]);
												return e;
											});
									}
									((n.prototype = e("./object")).loadAsync =
										e("./load")),
										(n.support = e("./support")),
										(n.defaults = e("./defaults")),
										(n.version = "3.7.1"),
										(n.loadAsync = function (e, t) {
											return new n().loadAsync(e, t);
										}),
										(n.external = e("./external")),
										(t.exports = n);
								},
								{
									"./defaults": 5,
									"./external": 6,
									"./load": 11,
									"./object": 15,
									"./support": 30,
								},
							],
							11: [
								function (e, t, r) {
									"use strict";
									var n = e("./utils"),
										o = e("./external"),
										i = e("./utf8"),
										s = e("./zipEntries"),
										a = e("./stream/Crc32Probe"),
										u = e("./nodejsUtils");
									function c(e) {
										return new o.Promise(function (t, r) {
											var n = e.decompressed
												.getContentWorker()
												.pipe(new a());
											n.on("error", function (e) {
												r(e);
											})
												.on("end", function () {
													n.streamInfo.crc32 !==
													e.decompressed.crc32
														? r(
																new Error(
																	"Corrupted zip : CRC32 mismatch"
																)
														  )
														: t();
												})
												.resume();
										});
									}
									t.exports = function (e, t) {
										var r = this;
										return (
											(t = n.extend(t || {}, {
												base64: !1,
												checkCRC32: !1,
												optimizedBinaryString: !1,
												createFolders: !1,
												decodeFileName: i.utf8decode,
											})),
											u.isNode && u.isStream(e)
												? o.Promise.reject(
														new Error(
															"JSZip can't accept a stream when loading a zip file."
														)
												  )
												: n
														.prepareContent(
															"the loaded zip file",
															e,
															!0,
															t.optimizedBinaryString,
															t.base64
														)
														.then(function (e) {
															var r = new s(t);
															return r.load(e), r;
														})
														.then(function (e) {
															var r = [
																	o.Promise.resolve(
																		e
																	),
																],
																n = e.files;
															if (t.checkCRC32)
																for (
																	var i = 0;
																	i <
																	n.length;
																	i++
																)
																	r.push(
																		c(n[i])
																	);
															return o.Promise.all(
																r
															);
														})
														.then(function (e) {
															for (
																var n =
																		e.shift(),
																	o = n.files,
																	i = 0;
																i < o.length;
																i++
															) {
																var s = o[i];
																r.file(
																	s.fileNameStr,
																	s.decompressed,
																	{
																		binary: !0,
																		optimizedBinaryString:
																			!0,
																		date: s.date,
																		dir: s.dir,
																		comment:
																			s
																				.fileCommentStr
																				.length
																				? s.fileCommentStr
																				: null,
																		unixPermissions:
																			s.unixPermissions,
																		dosPermissions:
																			s.dosPermissions,
																		createFolders:
																			t.createFolders,
																	}
																);
															}
															return (
																n.zipComment
																	.length &&
																	(r.comment =
																		n.zipComment),
																r
															);
														})
										);
									};
								},
								{
									"./external": 6,
									"./nodejsUtils": 14,
									"./stream/Crc32Probe": 25,
									"./utf8": 31,
									"./utils": 32,
									"./zipEntries": 33,
								},
							],
							12: [
								function (e, t, r) {
									"use strict";
									var n = e("../utils"),
										o = e("../stream/GenericWorker");
									function i(e, t) {
										o.call(
											this,
											"Nodejs stream input adapter for " +
												e
										),
											(this._upstreamEnded = !1),
											this._bindStream(t);
									}
									n.inherits(i, o),
										(i.prototype._bindStream = function (
											e
										) {
											var t = this;
											(this._stream = e).pause(),
												e
													.on("data", function (e) {
														t.push({
															data: e,
															meta: {
																percent: 0,
															},
														});
													})
													.on("error", function (e) {
														t.isPaused
															? (this.generatedError =
																	e)
															: t.error(e);
													})
													.on("end", function () {
														t.isPaused
															? (t._upstreamEnded =
																	!0)
															: t.end();
													});
										}),
										(i.prototype.pause = function () {
											return (
												!!o.prototype.pause.call(
													this
												) && (this._stream.pause(), !0)
											);
										}),
										(i.prototype.resume = function () {
											return (
												!!o.prototype.resume.call(
													this
												) &&
												(this._upstreamEnded
													? this.end()
													: this._stream.resume(),
												!0)
											);
										}),
										(t.exports = i);
								},
								{
									"../stream/GenericWorker": 28,
									"../utils": 32,
								},
							],
							13: [
								function (e, t, r) {
									"use strict";
									var n = e("readable-stream").Readable;
									function o(e, t, r) {
										n.call(this, t), (this._helper = e);
										var o = this;
										e.on("data", function (e, t) {
											o.push(e) || o._helper.pause(),
												r && r(t);
										})
											.on("error", function (e) {
												o.emit("error", e);
											})
											.on("end", function () {
												o.push(null);
											});
									}
									e("../utils").inherits(o, n),
										(o.prototype._read = function () {
											this._helper.resume();
										}),
										(t.exports = o);
								},
								{ "../utils": 32, "readable-stream": 16 },
							],
							14: [
								function (e, t, r) {
									"use strict";
									t.exports = {
										isNode: "undefined" != typeof Buffer,
										newBufferFrom: function (e, t) {
											if (
												Buffer.from &&
												Buffer.from !== Uint8Array.from
											)
												return Buffer.from(e, t);
											if ("number" == typeof e)
												throw new Error(
													'The "data" argument must not be a number'
												);
											return new Buffer(e, t);
										},
										allocBuffer: function (e) {
											if (Buffer.alloc)
												return Buffer.alloc(e);
											var t = new Buffer(e);
											return t.fill(0), t;
										},
										isBuffer: function (e) {
											return Buffer.isBuffer(e);
										},
										isStream: function (e) {
											return (
												e &&
												"function" == typeof e.on &&
												"function" == typeof e.pause &&
												"function" == typeof e.resume
											);
										},
									};
								},
								{},
							],
							15: [
								function (e, t, r) {
									"use strict";
									function n(e, t, r) {
										var n,
											o = i.getTypeOf(t),
											a = i.extend(r || {}, u);
										(a.date = a.date || new Date()),
											null !== a.compression &&
												(a.compression =
													a.compression.toUpperCase()),
											"string" ==
												typeof a.unixPermissions &&
												(a.unixPermissions = parseInt(
													a.unixPermissions,
													8
												)),
											a.unixPermissions &&
												16384 & a.unixPermissions &&
												(a.dir = !0),
											a.dosPermissions &&
												16 & a.dosPermissions &&
												(a.dir = !0),
											a.dir && (e = m(e)),
											a.createFolders &&
												(n = f(e)) &&
												g.call(this, n, !0);
										var p =
											"string" === o &&
											!1 === a.binary &&
											!1 === a.base64;
										(r && void 0 !== r.binary) ||
											(a.binary = !p),
											((t instanceof c &&
												0 === t.uncompressedSize) ||
												a.dir ||
												!t ||
												0 === t.length) &&
												((a.base64 = !1),
												(a.binary = !0),
												(t = ""),
												(a.compression = "STORE"),
												(o = "string"));
										var b;
										b =
											t instanceof c || t instanceof s
												? t
												: h.isNode && h.isStream(t)
												? new d(e, t)
												: i.prepareContent(
														e,
														t,
														a.binary,
														a.optimizedBinaryString,
														a.base64
												  );
										var y = new l(e, b, a);
										this.files[e] = y;
									}
									var o = e("./utf8"),
										i = e("./utils"),
										s = e("./stream/GenericWorker"),
										a = e("./stream/StreamHelper"),
										u = e("./defaults"),
										c = e("./compressedObject"),
										l = e("./zipObject"),
										p = e("./generate"),
										h = e("./nodejsUtils"),
										d = e(
											"./nodejs/NodejsStreamInputAdapter"
										),
										f = function (e) {
											"/" === e.slice(-1) &&
												(e = e.substring(
													0,
													e.length - 1
												));
											var t = e.lastIndexOf("/");
											return 0 < t
												? e.substring(0, t)
												: "";
										},
										m = function (e) {
											return (
												"/" !== e.slice(-1) &&
													(e += "/"),
												e
											);
										},
										g = function (e, t) {
											return (
												(t =
													void 0 !== t
														? t
														: u.createFolders),
												(e = m(e)),
												this.files[e] ||
													n.call(this, e, null, {
														dir: !0,
														createFolders: t,
													}),
												this.files[e]
											);
										};
									function b(e) {
										return (
											"[object RegExp]" ===
											Object.prototype.toString.call(e)
										);
									}
									var y = {
										load: function () {
											throw new Error(
												"This method has been removed in JSZip 3.0, please check the upgrade guide."
											);
										},
										forEach: function (e) {
											var t, r, n;
											for (t in this.files)
												(n = this.files[t]),
													(r = t.slice(
														this.root.length,
														t.length
													)) &&
														t.slice(
															0,
															this.root.length
														) === this.root &&
														e(r, n);
										},
										filter: function (e) {
											var t = [];
											return (
												this.forEach(function (r, n) {
													e(r, n) && t.push(n);
												}),
												t
											);
										},
										file: function (e, t, r) {
											if (1 !== arguments.length)
												return (
													(e = this.root + e),
													n.call(this, e, t, r),
													this
												);
											if (b(e)) {
												var o = e;
												return this.filter(function (
													e,
													t
												) {
													return !t.dir && o.test(e);
												});
											}
											var i = this.files[this.root + e];
											return i && !i.dir ? i : null;
										},
										folder: function (e) {
											if (!e) return this;
											if (b(e))
												return this.filter(function (
													t,
													r
												) {
													return r.dir && e.test(t);
												});
											var t = this.root + e,
												r = g.call(this, t),
												n = this.clone();
											return (n.root = r.name), n;
										},
										remove: function (e) {
											e = this.root + e;
											var t = this.files[e];
											if (
												(t ||
													("/" !== e.slice(-1) &&
														(e += "/"),
													(t = this.files[e])),
												t && !t.dir)
											)
												delete this.files[e];
											else
												for (
													var r = this.filter(
															function (t, r) {
																return (
																	r.name.slice(
																		0,
																		e.length
																	) === e
																);
															}
														),
														n = 0;
													n < r.length;
													n++
												)
													delete this.files[
														r[n].name
													];
											return this;
										},
										generate: function (e) {
											throw new Error(
												"This method has been removed in JSZip 3.0, please check the upgrade guide."
											);
										},
										generateInternalStream: function (e) {
											var t,
												r = {};
											try {
												if (
													(((r = i.extend(e || {}, {
														streamFiles: !1,
														compression: "STORE",
														compressionOptions:
															null,
														type: "",
														platform: "DOS",
														comment: null,
														mimeType:
															"application/zip",
														encodeFileName:
															o.utf8encode,
													})).type =
														r.type.toLowerCase()),
													(r.compression =
														r.compression.toUpperCase()),
													"binarystring" === r.type &&
														(r.type = "string"),
													!r.type)
												)
													throw new Error(
														"No output type specified."
													);
												i.checkSupport(r.type),
													("darwin" !== r.platform &&
														"freebsd" !==
															r.platform &&
														"linux" !==
															r.platform &&
														"sunos" !==
															r.platform) ||
														(r.platform = "UNIX"),
													"win32" === r.platform &&
														(r.platform = "DOS");
												var n =
													r.comment ||
													this.comment ||
													"";
												t = p.generateWorker(
													this,
													r,
													n
												);
											} catch (e) {
												(t = new s("error")).error(e);
											}
											return new a(
												t,
												r.type || "string",
												r.mimeType
											);
										},
										generateAsync: function (e, t) {
											return this.generateInternalStream(
												e
											).accumulate(t);
										},
										generateNodeStream: function (e, t) {
											return (
												(e = e || {}).type ||
													(e.type = "nodebuffer"),
												this.generateInternalStream(
													e
												).toNodejsStream(t)
											);
										},
									};
									t.exports = y;
								},
								{
									"./compressedObject": 2,
									"./defaults": 5,
									"./generate": 9,
									"./nodejs/NodejsStreamInputAdapter": 12,
									"./nodejsUtils": 14,
									"./stream/GenericWorker": 28,
									"./stream/StreamHelper": 29,
									"./utf8": 31,
									"./utils": 32,
									"./zipObject": 35,
								},
							],
							16: [
								function (e, t, r) {
									t.exports = e("stream");
								},
								{ stream: void 0 },
							],
							17: [
								function (e, t, r) {
									"use strict";
									var n = e("./DataReader");
									function o(e) {
										n.call(this, e);
										for (
											var t = 0;
											t < this.data.length;
											t++
										)
											e[t] = 255 & e[t];
									}
									e("../utils").inherits(o, n),
										(o.prototype.byteAt = function (e) {
											return this.data[this.zero + e];
										}),
										(o.prototype.lastIndexOfSignature =
											function (e) {
												for (
													var t = e.charCodeAt(0),
														r = e.charCodeAt(1),
														n = e.charCodeAt(2),
														o = e.charCodeAt(3),
														i = this.length - 4;
													0 <= i;
													--i
												)
													if (
														this.data[i] === t &&
														this.data[i + 1] ===
															r &&
														this.data[i + 2] ===
															n &&
														this.data[i + 3] === o
													)
														return i - this.zero;
												return -1;
											}),
										(o.prototype.readAndCheckSignature =
											function (e) {
												var t = e.charCodeAt(0),
													r = e.charCodeAt(1),
													n = e.charCodeAt(2),
													o = e.charCodeAt(3),
													i = this.readData(4);
												return (
													t === i[0] &&
													r === i[1] &&
													n === i[2] &&
													o === i[3]
												);
											}),
										(o.prototype.readData = function (e) {
											if ((this.checkOffset(e), 0 === e))
												return [];
											var t = this.data.slice(
												this.zero + this.index,
												this.zero + this.index + e
											);
											return (this.index += e), t;
										}),
										(t.exports = o);
								},
								{ "../utils": 32, "./DataReader": 18 },
							],
							18: [
								function (e, t, r) {
									"use strict";
									var n = e("../utils");
									function o(e) {
										(this.data = e),
											(this.length = e.length),
											(this.index = 0),
											(this.zero = 0);
									}
									(o.prototype = {
										checkOffset: function (e) {
											this.checkIndex(this.index + e);
										},
										checkIndex: function (e) {
											if (
												this.length < this.zero + e ||
												e < 0
											)
												throw new Error(
													"End of data reached (data length = " +
														this.length +
														", asked index = " +
														e +
														"). Corrupted zip ?"
												);
										},
										setIndex: function (e) {
											this.checkIndex(e),
												(this.index = e);
										},
										skip: function (e) {
											this.setIndex(this.index + e);
										},
										byteAt: function (e) {},
										readInt: function (e) {
											var t,
												r = 0;
											for (
												this.checkOffset(e),
													t = this.index + e - 1;
												t >= this.index;
												t--
											)
												r = (r << 8) + this.byteAt(t);
											return (this.index += e), r;
										},
										readString: function (e) {
											return n.transformTo(
												"string",
												this.readData(e)
											);
										},
										readData: function (e) {},
										lastIndexOfSignature: function (e) {},
										readAndCheckSignature: function (e) {},
										readDate: function () {
											var e = this.readInt(4);
											return new Date(
												Date.UTC(
													1980 + ((e >> 25) & 127),
													((e >> 21) & 15) - 1,
													(e >> 16) & 31,
													(e >> 11) & 31,
													(e >> 5) & 63,
													(31 & e) << 1
												)
											);
										},
									}),
										(t.exports = o);
								},
								{ "../utils": 32 },
							],
							19: [
								function (e, t, r) {
									"use strict";
									var n = e("./Uint8ArrayReader");
									function o(e) {
										n.call(this, e);
									}
									e("../utils").inherits(o, n),
										(o.prototype.readData = function (e) {
											this.checkOffset(e);
											var t = this.data.slice(
												this.zero + this.index,
												this.zero + this.index + e
											);
											return (this.index += e), t;
										}),
										(t.exports = o);
								},
								{ "../utils": 32, "./Uint8ArrayReader": 21 },
							],
							20: [
								function (e, t, r) {
									"use strict";
									var n = e("./DataReader");
									function o(e) {
										n.call(this, e);
									}
									e("../utils").inherits(o, n),
										(o.prototype.byteAt = function (e) {
											return this.data.charCodeAt(
												this.zero + e
											);
										}),
										(o.prototype.lastIndexOfSignature =
											function (e) {
												return (
													this.data.lastIndexOf(e) -
													this.zero
												);
											}),
										(o.prototype.readAndCheckSignature =
											function (e) {
												return e === this.readData(4);
											}),
										(o.prototype.readData = function (e) {
											this.checkOffset(e);
											var t = this.data.slice(
												this.zero + this.index,
												this.zero + this.index + e
											);
											return (this.index += e), t;
										}),
										(t.exports = o);
								},
								{ "../utils": 32, "./DataReader": 18 },
							],
							21: [
								function (e, t, r) {
									"use strict";
									var n = e("./ArrayReader");
									function o(e) {
										n.call(this, e);
									}
									e("../utils").inherits(o, n),
										(o.prototype.readData = function (e) {
											if ((this.checkOffset(e), 0 === e))
												return new Uint8Array(0);
											var t = this.data.subarray(
												this.zero + this.index,
												this.zero + this.index + e
											);
											return (this.index += e), t;
										}),
										(t.exports = o);
								},
								{ "../utils": 32, "./ArrayReader": 17 },
							],
							22: [
								function (e, t, r) {
									"use strict";
									var n = e("../utils"),
										o = e("../support"),
										i = e("./ArrayReader"),
										s = e("./StringReader"),
										a = e("./NodeBufferReader"),
										u = e("./Uint8ArrayReader");
									t.exports = function (e) {
										var t = n.getTypeOf(e);
										return (
											n.checkSupport(t),
											"string" !== t || o.uint8array
												? "nodebuffer" === t
													? new a(e)
													: o.uint8array
													? new u(
															n.transformTo(
																"uint8array",
																e
															)
													  )
													: new i(
															n.transformTo(
																"array",
																e
															)
													  )
												: new s(e)
										);
									};
								},
								{
									"../support": 30,
									"../utils": 32,
									"./ArrayReader": 17,
									"./NodeBufferReader": 19,
									"./StringReader": 20,
									"./Uint8ArrayReader": 21,
								},
							],
							23: [
								function (e, t, r) {
									"use strict";
									(r.LOCAL_FILE_HEADER = "PK"),
										(r.CENTRAL_FILE_HEADER = "PK"),
										(r.CENTRAL_DIRECTORY_END = "PK"),
										(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR =
											"PK"),
										(r.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
										(r.DATA_DESCRIPTOR = "PK\b");
								},
								{},
							],
							24: [
								function (e, t, r) {
									"use strict";
									var n = e("./GenericWorker"),
										o = e("../utils");
									function i(e) {
										n.call(this, "ConvertWorker to " + e),
											(this.destType = e);
									}
									o.inherits(i, n),
										(i.prototype.processChunk = function (
											e
										) {
											this.push({
												data: o.transformTo(
													this.destType,
													e.data
												),
												meta: e.meta,
											});
										}),
										(t.exports = i);
								},
								{ "../utils": 32, "./GenericWorker": 28 },
							],
							25: [
								function (e, t, r) {
									"use strict";
									var n = e("./GenericWorker"),
										o = e("../crc32");
									function i() {
										n.call(this, "Crc32Probe"),
											this.withStreamInfo("crc32", 0);
									}
									e("../utils").inherits(i, n),
										(i.prototype.processChunk = function (
											e
										) {
											(this.streamInfo.crc32 = o(
												e.data,
												this.streamInfo.crc32 || 0
											)),
												this.push(e);
										}),
										(t.exports = i);
								},
								{
									"../crc32": 4,
									"../utils": 32,
									"./GenericWorker": 28,
								},
							],
							26: [
								function (e, t, r) {
									"use strict";
									var n = e("../utils"),
										o = e("./GenericWorker");
									function i(e) {
										o.call(
											this,
											"DataLengthProbe for " + e
										),
											(this.propName = e),
											this.withStreamInfo(e, 0);
									}
									n.inherits(i, o),
										(i.prototype.processChunk = function (
											e
										) {
											if (e) {
												var t =
													this.streamInfo[
														this.propName
													] || 0;
												this.streamInfo[this.propName] =
													t + e.data.length;
											}
											o.prototype.processChunk.call(
												this,
												e
											);
										}),
										(t.exports = i);
								},
								{ "../utils": 32, "./GenericWorker": 28 },
							],
							27: [
								function (e, t, r) {
									"use strict";
									var n = e("../utils"),
										o = e("./GenericWorker");
									function i(e) {
										o.call(this, "DataWorker");
										var t = this;
										(this.dataIsReady = !1),
											(this.index = 0),
											(this.max = 0),
											(this.data = null),
											(this.type = ""),
											(this._tickScheduled = !1),
											e.then(
												function (e) {
													(t.dataIsReady = !0),
														(t.data = e),
														(t.max =
															(e && e.length) ||
															0),
														(t.type =
															n.getTypeOf(e)),
														t.isPaused ||
															t._tickAndRepeat();
												},
												function (e) {
													t.error(e);
												}
											);
									}
									n.inherits(i, o),
										(i.prototype.cleanUp = function () {
											o.prototype.cleanUp.call(this),
												(this.data = null);
										}),
										(i.prototype.resume = function () {
											return (
												!!o.prototype.resume.call(
													this
												) &&
												(!this._tickScheduled &&
													this.dataIsReady &&
													((this._tickScheduled = !0),
													n.delay(
														this._tickAndRepeat,
														[],
														this
													)),
												!0)
											);
										}),
										(i.prototype._tickAndRepeat =
											function () {
												(this._tickScheduled = !1),
													this.isPaused ||
														this.isFinished ||
														(this._tick(),
														this.isFinished ||
															(n.delay(
																this
																	._tickAndRepeat,
																[],
																this
															),
															(this._tickScheduled =
																!0)));
											}),
										(i.prototype._tick = function () {
											if (
												this.isPaused ||
												this.isFinished
											)
												return !1;
											var e = null,
												t = Math.min(
													this.max,
													this.index + 16384
												);
											if (this.index >= this.max)
												return this.end();
											switch (this.type) {
												case "string":
													e = this.data.substring(
														this.index,
														t
													);
													break;
												case "uint8array":
													e = this.data.subarray(
														this.index,
														t
													);
													break;
												case "array":
												case "nodebuffer":
													e = this.data.slice(
														this.index,
														t
													);
											}
											return (
												(this.index = t),
												this.push({
													data: e,
													meta: {
														percent: this.max
															? (this.index /
																	this.max) *
															  100
															: 0,
													},
												})
											);
										}),
										(t.exports = i);
								},
								{ "../utils": 32, "./GenericWorker": 28 },
							],
							28: [
								function (e, t, r) {
									"use strict";
									function n(e) {
										(this.name = e || "default"),
											(this.streamInfo = {}),
											(this.generatedError = null),
											(this.extraStreamInfo = {}),
											(this.isPaused = !0),
											(this.isFinished = !1),
											(this.isLocked = !1),
											(this._listeners = {
												data: [],
												end: [],
												error: [],
											}),
											(this.previous = null);
									}
									(n.prototype = {
										push: function (e) {
											this.emit("data", e);
										},
										end: function () {
											if (this.isFinished) return !1;
											this.flush();
											try {
												this.emit("end"),
													this.cleanUp(),
													(this.isFinished = !0);
											} catch (e) {
												this.emit("error", e);
											}
											return !0;
										},
										error: function (e) {
											return (
												!this.isFinished &&
												(this.isPaused
													? (this.generatedError = e)
													: ((this.isFinished = !0),
													  this.emit("error", e),
													  this.previous &&
															this.previous.error(
																e
															),
													  this.cleanUp()),
												!0)
											);
										},
										on: function (e, t) {
											return (
												this._listeners[e].push(t), this
											);
										},
										cleanUp: function () {
											(this.streamInfo =
												this.generatedError =
												this.extraStreamInfo =
													null),
												(this._listeners = []);
										},
										emit: function (e, t) {
											if (this._listeners[e])
												for (
													var r = 0;
													r <
													this._listeners[e].length;
													r++
												)
													this._listeners[e][r].call(
														this,
														t
													);
										},
										pipe: function (e) {
											return e.registerPrevious(this);
										},
										registerPrevious: function (e) {
											if (this.isLocked)
												throw new Error(
													"The stream '" +
														this +
														"' has already been used."
												);
											(this.streamInfo = e.streamInfo),
												this.mergeStreamInfo(),
												(this.previous = e);
											var t = this;
											return (
												e.on("data", function (e) {
													t.processChunk(e);
												}),
												e.on("end", function () {
													t.end();
												}),
												e.on("error", function (e) {
													t.error(e);
												}),
												this
											);
										},
										pause: function () {
											return (
												!this.isPaused &&
												!this.isFinished &&
												((this.isPaused = !0),
												this.previous &&
													this.previous.pause(),
												!0)
											);
										},
										resume: function () {
											if (
												!this.isPaused ||
												this.isFinished
											)
												return !1;
											var e = (this.isPaused = !1);
											return (
												this.generatedError &&
													(this.error(
														this.generatedError
													),
													(e = !0)),
												this.previous &&
													this.previous.resume(),
												!e
											);
										},
										flush: function () {},
										processChunk: function (e) {
											this.push(e);
										},
										withStreamInfo: function (e, t) {
											return (
												(this.extraStreamInfo[e] = t),
												this.mergeStreamInfo(),
												this
											);
										},
										mergeStreamInfo: function () {
											for (var e in this.extraStreamInfo)
												this.extraStreamInfo.hasOwnProperty(
													e
												) &&
													(this.streamInfo[e] =
														this.extraStreamInfo[
															e
														]);
										},
										lock: function () {
											if (this.isLocked)
												throw new Error(
													"The stream '" +
														this +
														"' has already been used."
												);
											(this.isLocked = !0),
												this.previous &&
													this.previous.lock();
										},
										toString: function () {
											var e = "Worker " + this.name;
											return this.previous
												? this.previous + " -> " + e
												: e;
										},
									}),
										(t.exports = n);
								},
								{},
							],
							29: [
								function (e, t, r) {
									"use strict";
									var n = e("../utils"),
										o = e("./ConvertWorker"),
										i = e("./GenericWorker"),
										s = e("../base64"),
										a = e("../support"),
										u = e("../external"),
										c = null;
									if (a.nodestream)
										try {
											c = e(
												"../nodejs/NodejsStreamOutputAdapter"
											);
										} catch (e) {}
									function l(e, t, r) {
										var s = t;
										switch (t) {
											case "blob":
											case "arraybuffer":
												s = "uint8array";
												break;
											case "base64":
												s = "string";
										}
										try {
											(this._internalType = s),
												(this._outputType = t),
												(this._mimeType = r),
												n.checkSupport(s),
												(this._worker = e.pipe(
													new o(s)
												)),
												e.lock();
										} catch (e) {
											(this._worker = new i("error")),
												this._worker.error(e);
										}
									}
									(l.prototype = {
										accumulate: function (e) {
											return (function (e, t) {
												return new u.Promise(function (
													r,
													o
												) {
													var i = [],
														a = e._internalType,
														u = e._outputType,
														c = e._mimeType;
													e.on(
														"data",
														function (e, r) {
															i.push(e),
																t && t(r);
														}
													)
														.on(
															"error",
															function (e) {
																(i = []), o(e);
															}
														)
														.on("end", function () {
															try {
																var e =
																	(function (
																		e,
																		t,
																		r
																	) {
																		switch (
																			e
																		) {
																			case "blob":
																				return n.newBlob(
																					n.transformTo(
																						"arraybuffer",
																						t
																					),
																					r
																				);
																			case "base64":
																				return s.encode(
																					t
																				);
																			default:
																				return n.transformTo(
																					e,
																					t
																				);
																		}
																	})(
																		u,
																		(function (
																			e,
																			t
																		) {
																			var r,
																				n = 0,
																				o =
																					null,
																				i = 0;
																			for (
																				r = 0;
																				r <
																				t.length;
																				r++
																			)
																				i +=
																					t[
																						r
																					]
																						.length;
																			switch (
																				e
																			) {
																				case "string":
																					return t.join(
																						""
																					);
																				case "array":
																					return Array.prototype.concat.apply(
																						[],
																						t
																					);
																				case "uint8array":
																					for (
																						o =
																							new Uint8Array(
																								i
																							),
																							r = 0;
																						r <
																						t.length;
																						r++
																					)
																						o.set(
																							t[
																								r
																							],
																							n
																						),
																							(n +=
																								t[
																									r
																								]
																									.length);
																					return o;
																				case "nodebuffer":
																					return Buffer.concat(
																						t
																					);
																				default:
																					throw new Error(
																						"concat : unsupported type '" +
																							e +
																							"'"
																					);
																			}
																		})(
																			a,
																			i
																		),
																		c
																	);
																r(e);
															} catch (e) {
																o(e);
															}
															i = [];
														})
														.resume();
												});
											})(this, e);
										},
										on: function (e, t) {
											var r = this;
											return (
												"data" === e
													? this._worker.on(
															e,
															function (e) {
																t.call(
																	r,
																	e.data,
																	e.meta
																);
															}
													  )
													: this._worker.on(
															e,
															function () {
																n.delay(
																	t,
																	arguments,
																	r
																);
															}
													  ),
												this
											);
										},
										resume: function () {
											return (
												n.delay(
													this._worker.resume,
													[],
													this._worker
												),
												this
											);
										},
										pause: function () {
											return this._worker.pause(), this;
										},
										toNodejsStream: function (e) {
											if (
												(n.checkSupport("nodestream"),
												"nodebuffer" !==
													this._outputType)
											)
												throw new Error(
													this._outputType +
														" is not supported by this method"
												);
											return new c(
												this,
												{
													objectMode:
														"nodebuffer" !==
														this._outputType,
												},
												e
											);
										},
									}),
										(t.exports = l);
								},
								{
									"../base64": 1,
									"../external": 6,
									"../nodejs/NodejsStreamOutputAdapter": 13,
									"../support": 30,
									"../utils": 32,
									"./ConvertWorker": 24,
									"./GenericWorker": 28,
								},
							],
							30: [
								function (e, t, r) {
									"use strict";
									if (
										((r.base64 = !0),
										(r.array = !0),
										(r.string = !0),
										(r.arraybuffer =
											"undefined" != typeof ArrayBuffer &&
											"undefined" != typeof Uint8Array),
										(r.nodebuffer =
											"undefined" != typeof Buffer),
										(r.uint8array =
											"undefined" != typeof Uint8Array),
										"undefined" == typeof ArrayBuffer)
									)
										r.blob = !1;
									else {
										var n = new ArrayBuffer(0);
										try {
											r.blob =
												0 ===
												new Blob([n], {
													type: "application/zip",
												}).size;
										} catch (e) {
											try {
												var o = new (self.BlobBuilder ||
													self.WebKitBlobBuilder ||
													self.MozBlobBuilder ||
													self.MSBlobBuilder)();
												o.append(n),
													(r.blob =
														0 ===
														o.getBlob(
															"application/zip"
														).size);
											} catch (e) {
												r.blob = !1;
											}
										}
									}
									try {
										r.nodestream =
											!!e("readable-stream").Readable;
									} catch (e) {
										r.nodestream = !1;
									}
								},
								{ "readable-stream": 16 },
							],
							31: [
								function (e, t, r) {
									"use strict";
									for (
										var n = e("./utils"),
											o = e("./support"),
											i = e("./nodejsUtils"),
											s = e("./stream/GenericWorker"),
											a = new Array(256),
											u = 0;
										u < 256;
										u++
									)
										a[u] =
											252 <= u
												? 6
												: 248 <= u
												? 5
												: 240 <= u
												? 4
												: 224 <= u
												? 3
												: 192 <= u
												? 2
												: 1;
									function c() {
										s.call(this, "utf-8 decode"),
											(this.leftOver = null);
									}
									function l() {
										s.call(this, "utf-8 encode");
									}
									(a[254] = a[254] = 1),
										(r.utf8encode = function (e) {
											return o.nodebuffer
												? i.newBufferFrom(e, "utf-8")
												: (function (e) {
														var t,
															r,
															n,
															i,
															s,
															a = e.length,
															u = 0;
														for (i = 0; i < a; i++)
															55296 ==
																(64512 &
																	(r =
																		e.charCodeAt(
																			i
																		))) &&
																i + 1 < a &&
																56320 ==
																	(64512 &
																		(n =
																			e.charCodeAt(
																				i +
																					1
																			))) &&
																((r =
																	65536 +
																	((r -
																		55296) <<
																		10) +
																	(n -
																		56320)),
																i++),
																(u +=
																	r < 128
																		? 1
																		: r <
																		  2048
																		? 2
																		: r <
																		  65536
																		? 3
																		: 4);
														for (
															t = o.uint8array
																? new Uint8Array(
																		u
																  )
																: new Array(u),
																i = s = 0;
															s < u;
															i++
														)
															55296 ==
																(64512 &
																	(r =
																		e.charCodeAt(
																			i
																		))) &&
																i + 1 < a &&
																56320 ==
																	(64512 &
																		(n =
																			e.charCodeAt(
																				i +
																					1
																			))) &&
																((r =
																	65536 +
																	((r -
																		55296) <<
																		10) +
																	(n -
																		56320)),
																i++),
																r < 128
																	? (t[s++] =
																			r)
																	: (r < 2048
																			? (t[
																					s++
																			  ] =
																					192 |
																					(r >>>
																						6))
																			: (r <
																			  65536
																					? (t[
																							s++
																					  ] =
																							224 |
																							(r >>>
																								12))
																					: ((t[
																							s++
																					  ] =
																							240 |
																							(r >>>
																								18)),
																					  (t[
																							s++
																					  ] =
																							128 |
																							((r >>>
																								12) &
																								63))),
																			  (t[
																					s++
																			  ] =
																					128 |
																					((r >>>
																						6) &
																						63))),
																	  (t[s++] =
																			128 |
																			(63 &
																				r)));
														return t;
												  })(e);
										}),
										(r.utf8decode = function (e) {
											return o.nodebuffer
												? n
														.transformTo(
															"nodebuffer",
															e
														)
														.toString("utf-8")
												: (function (e) {
														var t,
															r,
															o,
															i,
															s = e.length,
															u = new Array(
																2 * s
															);
														for (t = r = 0; t < s; )
															if (
																(o = e[t++]) <
																128
															)
																u[r++] = o;
															else if (
																4 < (i = a[o])
															)
																(u[
																	r++
																] = 65533),
																	(t +=
																		i - 1);
															else {
																for (
																	o &=
																		2 === i
																			? 31
																			: 3 ===
																			  i
																			? 15
																			: 7;
																	1 < i &&
																	t < s;

																)
																	(o =
																		(o <<
																			6) |
																		(63 &
																			e[
																				t++
																			])),
																		i--;
																1 < i
																	? (u[
																			r++
																	  ] = 65533)
																	: o < 65536
																	? (u[r++] =
																			o)
																	: ((o -= 65536),
																	  (u[r++] =
																			55296 |
																			((o >>
																				10) &
																				1023)),
																	  (u[r++] =
																			56320 |
																			(1023 &
																				o)));
															}
														return (
															u.length !== r &&
																(u.subarray
																	? (u =
																			u.subarray(
																				0,
																				r
																			))
																	: (u.length =
																			r)),
															n.applyFromCharCode(
																u
															)
														);
												  })(
														(e = n.transformTo(
															o.uint8array
																? "uint8array"
																: "array",
															e
														))
												  );
										}),
										n.inherits(c, s),
										(c.prototype.processChunk = function (
											e
										) {
											var t = n.transformTo(
												o.uint8array
													? "uint8array"
													: "array",
												e.data
											);
											if (
												this.leftOver &&
												this.leftOver.length
											) {
												if (o.uint8array) {
													var i = t;
													(t = new Uint8Array(
														i.length +
															this.leftOver.length
													)).set(this.leftOver, 0),
														t.set(
															i,
															this.leftOver.length
														);
												} else
													t = this.leftOver.concat(t);
												this.leftOver = null;
											}
											var s = (function (e, t) {
													var r;
													for (
														(t = t || e.length) >
															e.length &&
															(t = e.length),
															r = t - 1;
														0 <= r &&
														128 == (192 & e[r]);

													)
														r--;
													return r < 0 || 0 === r
														? t
														: r + a[e[r]] > t
														? r
														: t;
												})(t),
												u = t;
											s !== t.length &&
												(o.uint8array
													? ((u = t.subarray(0, s)),
													  (this.leftOver =
															t.subarray(
																s,
																t.length
															)))
													: ((u = t.slice(0, s)),
													  (this.leftOver = t.slice(
															s,
															t.length
													  )))),
												this.push({
													data: r.utf8decode(u),
													meta: e.meta,
												});
										}),
										(c.prototype.flush = function () {
											this.leftOver &&
												this.leftOver.length &&
												(this.push({
													data: r.utf8decode(
														this.leftOver
													),
													meta: {},
												}),
												(this.leftOver = null));
										}),
										(r.Utf8DecodeWorker = c),
										n.inherits(l, s),
										(l.prototype.processChunk = function (
											e
										) {
											this.push({
												data: r.utf8encode(e.data),
												meta: e.meta,
											});
										}),
										(r.Utf8EncodeWorker = l);
								},
								{
									"./nodejsUtils": 14,
									"./stream/GenericWorker": 28,
									"./support": 30,
									"./utils": 32,
								},
							],
							32: [
								function (e, t, r) {
									"use strict";
									var n = e("./support"),
										o = e("./base64"),
										i = e("./nodejsUtils"),
										s = e("set-immediate-shim"),
										a = e("./external");
									function u(e) {
										return e;
									}
									function c(e, t) {
										for (var r = 0; r < e.length; ++r)
											t[r] = 255 & e.charCodeAt(r);
										return t;
									}
									r.newBlob = function (e, t) {
										r.checkSupport("blob");
										try {
											return new Blob([e], { type: t });
										} catch (r) {
											try {
												var n = new (self.BlobBuilder ||
													self.WebKitBlobBuilder ||
													self.MozBlobBuilder ||
													self.MSBlobBuilder)();
												return (
													n.append(e), n.getBlob(t)
												);
											} catch (e) {
												throw new Error(
													"Bug : can't construct the Blob."
												);
											}
										}
									};
									var l = {
										stringifyByChunk: function (e, t, r) {
											var n = [],
												o = 0,
												i = e.length;
											if (i <= r)
												return String.fromCharCode.apply(
													null,
													e
												);
											for (; o < i; )
												"array" === t ||
												"nodebuffer" === t
													? n.push(
															String.fromCharCode.apply(
																null,
																e.slice(
																	o,
																	Math.min(
																		o + r,
																		i
																	)
																)
															)
													  )
													: n.push(
															String.fromCharCode.apply(
																null,
																e.subarray(
																	o,
																	Math.min(
																		o + r,
																		i
																	)
																)
															)
													  ),
													(o += r);
											return n.join("");
										},
										stringifyByChar: function (e) {
											for (
												var t = "", r = 0;
												r < e.length;
												r++
											)
												t += String.fromCharCode(e[r]);
											return t;
										},
										applyCanBeUsed: {
											uint8array: (function () {
												try {
													return (
														n.uint8array &&
														1 ===
															String.fromCharCode.apply(
																null,
																new Uint8Array(
																	1
																)
															).length
													);
												} catch (e) {
													return !1;
												}
											})(),
											nodebuffer: (function () {
												try {
													return (
														n.nodebuffer &&
														1 ===
															String.fromCharCode.apply(
																null,
																i.allocBuffer(1)
															).length
													);
												} catch (e) {
													return !1;
												}
											})(),
										},
									};
									function p(e) {
										var t = 65536,
											n = r.getTypeOf(e),
											o = !0;
										if (
											("uint8array" === n
												? (o =
														l.applyCanBeUsed
															.uint8array)
												: "nodebuffer" === n &&
												  (o =
														l.applyCanBeUsed
															.nodebuffer),
											o)
										)
											for (; 1 < t; )
												try {
													return l.stringifyByChunk(
														e,
														n,
														t
													);
												} catch (e) {
													t = Math.floor(t / 2);
												}
										return l.stringifyByChar(e);
									}
									function h(e, t) {
										for (var r = 0; r < e.length; r++)
											t[r] = e[r];
										return t;
									}
									r.applyFromCharCode = p;
									var d = {};
									(d.string = {
										string: u,
										array: function (e) {
											return c(e, new Array(e.length));
										},
										arraybuffer: function (e) {
											return d.string.uint8array(e)
												.buffer;
										},
										uint8array: function (e) {
											return c(
												e,
												new Uint8Array(e.length)
											);
										},
										nodebuffer: function (e) {
											return c(
												e,
												i.allocBuffer(e.length)
											);
										},
									}),
										(d.array = {
											string: p,
											array: u,
											arraybuffer: function (e) {
												return new Uint8Array(e).buffer;
											},
											uint8array: function (e) {
												return new Uint8Array(e);
											},
											nodebuffer: function (e) {
												return i.newBufferFrom(e);
											},
										}),
										(d.arraybuffer = {
											string: function (e) {
												return p(new Uint8Array(e));
											},
											array: function (e) {
												return h(
													new Uint8Array(e),
													new Array(e.byteLength)
												);
											},
											arraybuffer: u,
											uint8array: function (e) {
												return new Uint8Array(e);
											},
											nodebuffer: function (e) {
												return i.newBufferFrom(
													new Uint8Array(e)
												);
											},
										}),
										(d.uint8array = {
											string: p,
											array: function (e) {
												return h(
													e,
													new Array(e.length)
												);
											},
											arraybuffer: function (e) {
												return e.buffer;
											},
											uint8array: u,
											nodebuffer: function (e) {
												return i.newBufferFrom(e);
											},
										}),
										(d.nodebuffer = {
											string: p,
											array: function (e) {
												return h(
													e,
													new Array(e.length)
												);
											},
											arraybuffer: function (e) {
												return d.nodebuffer.uint8array(
													e
												).buffer;
											},
											uint8array: function (e) {
												return h(
													e,
													new Uint8Array(e.length)
												);
											},
											nodebuffer: u,
										}),
										(r.transformTo = function (e, t) {
											if (((t = t || ""), !e)) return t;
											r.checkSupport(e);
											var n = r.getTypeOf(t);
											return d[n][e](t);
										}),
										(r.getTypeOf = function (e) {
											return "string" == typeof e
												? "string"
												: "[object Array]" ===
												  Object.prototype.toString.call(
														e
												  )
												? "array"
												: n.nodebuffer && i.isBuffer(e)
												? "nodebuffer"
												: n.uint8array &&
												  e instanceof Uint8Array
												? "uint8array"
												: n.arraybuffer &&
												  e instanceof ArrayBuffer
												? "arraybuffer"
												: void 0;
										}),
										(r.checkSupport = function (e) {
											if (!n[e.toLowerCase()])
												throw new Error(
													e +
														" is not supported by this platform"
												);
										}),
										(r.MAX_VALUE_16BITS = 65535),
										(r.MAX_VALUE_32BITS = -1),
										(r.pretty = function (e) {
											var t,
												r,
												n = "";
											for (
												r = 0;
												r < (e || "").length;
												r++
											)
												n +=
													"\\x" +
													((t = e.charCodeAt(r)) < 16
														? "0"
														: "") +
													t
														.toString(16)
														.toUpperCase();
											return n;
										}),
										(r.delay = function (e, t, r) {
											s(function () {
												e.apply(r || null, t || []);
											});
										}),
										(r.inherits = function (e, t) {
											function r() {}
											(r.prototype = t.prototype),
												(e.prototype = new r());
										}),
										(r.extend = function () {
											var e,
												t,
												r = {};
											for (
												e = 0;
												e < arguments.length;
												e++
											)
												for (t in arguments[e])
													arguments[e].hasOwnProperty(
														t
													) &&
														void 0 === r[t] &&
														(r[t] =
															arguments[e][t]);
											return r;
										}),
										(r.prepareContent = function (
											e,
											t,
											i,
											s,
											u
										) {
											return a.Promise.resolve(t)
												.then(function (e) {
													return n.blob &&
														(e instanceof Blob ||
															-1 !==
																[
																	"[object File]",
																	"[object Blob]",
																].indexOf(
																	Object.prototype.toString.call(
																		e
																	)
																)) &&
														"undefined" !=
															typeof FileReader
														? new a.Promise(
																function (
																	t,
																	r
																) {
																	var n =
																		new FileReader();
																	(n.onload =
																		function (
																			e
																		) {
																			t(
																				e
																					.target
																					.result
																			);
																		}),
																		(n.onerror =
																			function (
																				e
																			) {
																				r(
																					e
																						.target
																						.error
																				);
																			}),
																		n.readAsArrayBuffer(
																			e
																		);
																}
														  )
														: e;
												})
												.then(function (t) {
													var l = r.getTypeOf(t);
													return l
														? ("arraybuffer" === l
																? (t =
																		r.transformTo(
																			"uint8array",
																			t
																		))
																: "string" ===
																		l &&
																  (u
																		? (t =
																				o.decode(
																					t
																				))
																		: i &&
																		  !0 !==
																				s &&
																		  (t =
																				(function (
																					e
																				) {
																					return c(
																						e,
																						n.uint8array
																							? new Uint8Array(
																									e.length
																							  )
																							: new Array(
																									e.length
																							  )
																					);
																				})(
																					t
																				))),
														  t)
														: a.Promise.reject(
																new Error(
																	"Can't read the data of '" +
																		e +
																		"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
																)
														  );
												});
										});
								},
								{
									"./base64": 1,
									"./external": 6,
									"./nodejsUtils": 14,
									"./support": 30,
									"set-immediate-shim": 54,
								},
							],
							33: [
								function (e, t, r) {
									"use strict";
									var n = e("./reader/readerFor"),
										o = e("./utils"),
										i = e("./signature"),
										s = e("./zipEntry"),
										a = (e("./utf8"), e("./support"));
									function u(e) {
										(this.files = []),
											(this.loadOptions = e);
									}
									(u.prototype = {
										checkSignature: function (e) {
											if (
												!this.reader.readAndCheckSignature(
													e
												)
											) {
												this.reader.index -= 4;
												var t =
													this.reader.readString(4);
												throw new Error(
													"Corrupted zip or bug: unexpected signature (" +
														o.pretty(t) +
														", expected " +
														o.pretty(e) +
														")"
												);
											}
										},
										isSignature: function (e, t) {
											var r = this.reader.index;
											this.reader.setIndex(e);
											var n =
												this.reader.readString(4) === t;
											return this.reader.setIndex(r), n;
										},
										readBlockEndOfCentral: function () {
											(this.diskNumber =
												this.reader.readInt(2)),
												(this.diskWithCentralDirStart =
													this.reader.readInt(2)),
												(this.centralDirRecordsOnThisDisk =
													this.reader.readInt(2)),
												(this.centralDirRecords =
													this.reader.readInt(2)),
												(this.centralDirSize =
													this.reader.readInt(4)),
												(this.centralDirOffset =
													this.reader.readInt(4)),
												(this.zipCommentLength =
													this.reader.readInt(2));
											var e = this.reader.readData(
													this.zipCommentLength
												),
												t = a.uint8array
													? "uint8array"
													: "array",
												r = o.transformTo(t, e);
											this.zipComment =
												this.loadOptions.decodeFileName(
													r
												);
										},
										readBlockZip64EndOfCentral:
											function () {
												(this.zip64EndOfCentralSize =
													this.reader.readInt(8)),
													this.reader.skip(4),
													(this.diskNumber =
														this.reader.readInt(4)),
													(this.diskWithCentralDirStart =
														this.reader.readInt(4)),
													(this.centralDirRecordsOnThisDisk =
														this.reader.readInt(8)),
													(this.centralDirRecords =
														this.reader.readInt(8)),
													(this.centralDirSize =
														this.reader.readInt(8)),
													(this.centralDirOffset =
														this.reader.readInt(8)),
													(this.zip64ExtensibleData =
														{});
												for (
													var e,
														t,
														r,
														n =
															this
																.zip64EndOfCentralSize -
															44;
													0 < n;

												)
													(e =
														this.reader.readInt(2)),
														(t =
															this.reader.readInt(
																4
															)),
														(r =
															this.reader.readData(
																t
															)),
														(this.zip64ExtensibleData[
															e
														] = {
															id: e,
															length: t,
															value: r,
														});
											},
										readBlockZip64EndOfCentralLocator:
											function () {
												if (
													((this.diskWithZip64CentralDirStart =
														this.reader.readInt(4)),
													(this.relativeOffsetEndOfZip64CentralDir =
														this.reader.readInt(8)),
													(this.disksCount =
														this.reader.readInt(4)),
													1 < this.disksCount)
												)
													throw new Error(
														"Multi-volumes zip are not supported"
													);
											},
										readLocalFiles: function () {
											var e, t;
											for (
												e = 0;
												e < this.files.length;
												e++
											)
												(t = this.files[e]),
													this.reader.setIndex(
														t.localHeaderOffset
													),
													this.checkSignature(
														i.LOCAL_FILE_HEADER
													),
													t.readLocalPart(
														this.reader
													),
													t.handleUTF8(),
													t.processAttributes();
										},
										readCentralDir: function () {
											var e;
											for (
												this.reader.setIndex(
													this.centralDirOffset
												);
												this.reader.readAndCheckSignature(
													i.CENTRAL_FILE_HEADER
												);

											)
												(e = new s(
													{ zip64: this.zip64 },
													this.loadOptions
												)).readCentralPart(this.reader),
													this.files.push(e);
											if (
												this.centralDirRecords !==
													this.files.length &&
												0 !== this.centralDirRecords &&
												0 === this.files.length
											)
												throw new Error(
													"Corrupted zip or bug: expected " +
														this.centralDirRecords +
														" records in central dir, got " +
														this.files.length
												);
										},
										readEndOfCentral: function () {
											var e =
												this.reader.lastIndexOfSignature(
													i.CENTRAL_DIRECTORY_END
												);
											if (e < 0)
												throw this.isSignature(
													0,
													i.LOCAL_FILE_HEADER
												)
													? new Error(
															"Corrupted zip: can't find end of central directory"
													  )
													: new Error(
															"Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
													  );
											this.reader.setIndex(e);
											var t = e;
											if (
												(this.checkSignature(
													i.CENTRAL_DIRECTORY_END
												),
												this.readBlockEndOfCentral(),
												this.diskNumber ===
													o.MAX_VALUE_16BITS ||
													this
														.diskWithCentralDirStart ===
														o.MAX_VALUE_16BITS ||
													this
														.centralDirRecordsOnThisDisk ===
														o.MAX_VALUE_16BITS ||
													this.centralDirRecords ===
														o.MAX_VALUE_16BITS ||
													this.centralDirSize ===
														o.MAX_VALUE_32BITS ||
													this.centralDirOffset ===
														o.MAX_VALUE_32BITS)
											) {
												if (
													((this.zip64 = !0),
													(e =
														this.reader.lastIndexOfSignature(
															i.ZIP64_CENTRAL_DIRECTORY_LOCATOR
														)) < 0)
												)
													throw new Error(
														"Corrupted zip: can't find the ZIP64 end of central directory locator"
													);
												if (
													(this.reader.setIndex(e),
													this.checkSignature(
														i.ZIP64_CENTRAL_DIRECTORY_LOCATOR
													),
													this.readBlockZip64EndOfCentralLocator(),
													!this.isSignature(
														this
															.relativeOffsetEndOfZip64CentralDir,
														i.ZIP64_CENTRAL_DIRECTORY_END
													) &&
														((this.relativeOffsetEndOfZip64CentralDir =
															this.reader.lastIndexOfSignature(
																i.ZIP64_CENTRAL_DIRECTORY_END
															)),
														this
															.relativeOffsetEndOfZip64CentralDir <
															0))
												)
													throw new Error(
														"Corrupted zip: can't find the ZIP64 end of central directory"
													);
												this.reader.setIndex(
													this
														.relativeOffsetEndOfZip64CentralDir
												),
													this.checkSignature(
														i.ZIP64_CENTRAL_DIRECTORY_END
													),
													this.readBlockZip64EndOfCentral();
											}
											var r =
												this.centralDirOffset +
												this.centralDirSize;
											this.zip64 &&
												((r += 20),
												(r +=
													12 +
													this
														.zip64EndOfCentralSize));
											var n = t - r;
											if (0 < n)
												this.isSignature(
													t,
													i.CENTRAL_FILE_HEADER
												) || (this.reader.zero = n);
											else if (n < 0)
												throw new Error(
													"Corrupted zip: missing " +
														Math.abs(n) +
														" bytes."
												);
										},
										prepareReader: function (e) {
											this.reader = n(e);
										},
										load: function (e) {
											this.prepareReader(e),
												this.readEndOfCentral(),
												this.readCentralDir(),
												this.readLocalFiles();
										},
									}),
										(t.exports = u);
								},
								{
									"./reader/readerFor": 22,
									"./signature": 23,
									"./support": 30,
									"./utf8": 31,
									"./utils": 32,
									"./zipEntry": 34,
								},
							],
							34: [
								function (e, t, r) {
									"use strict";
									var n = e("./reader/readerFor"),
										o = e("./utils"),
										i = e("./compressedObject"),
										s = e("./crc32"),
										a = e("./utf8"),
										u = e("./compressions"),
										c = e("./support");
									function l(e, t) {
										(this.options = e),
											(this.loadOptions = t);
									}
									(l.prototype = {
										isEncrypted: function () {
											return 1 == (1 & this.bitFlag);
										},
										useUTF8: function () {
											return (
												2048 == (2048 & this.bitFlag)
											);
										},
										readLocalPart: function (e) {
											var t, r;
											if (
												(e.skip(22),
												(this.fileNameLength =
													e.readInt(2)),
												(r = e.readInt(2)),
												(this.fileName = e.readData(
													this.fileNameLength
												)),
												e.skip(r),
												-1 === this.compressedSize ||
													-1 ===
														this.uncompressedSize)
											)
												throw new Error(
													"Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
												);
											if (
												null ===
												(t = (function (e) {
													for (var t in u)
														if (
															u.hasOwnProperty(
																t
															) &&
															u[t].magic === e
														)
															return u[t];
													return null;
												})(this.compressionMethod))
											)
												throw new Error(
													"Corrupted zip : compression " +
														o.pretty(
															this
																.compressionMethod
														) +
														" unknown (inner file : " +
														o.transformTo(
															"string",
															this.fileName
														) +
														")"
												);
											this.decompressed = new i(
												this.compressedSize,
												this.uncompressedSize,
												this.crc32,
												t,
												e.readData(this.compressedSize)
											);
										},
										readCentralPart: function (e) {
											(this.versionMadeBy = e.readInt(2)),
												e.skip(2),
												(this.bitFlag = e.readInt(2)),
												(this.compressionMethod =
													e.readString(2)),
												(this.date = e.readDate()),
												(this.crc32 = e.readInt(4)),
												(this.compressedSize =
													e.readInt(4)),
												(this.uncompressedSize =
													e.readInt(4));
											var t = e.readInt(2);
											if (
												((this.extraFieldsLength =
													e.readInt(2)),
												(this.fileCommentLength =
													e.readInt(2)),
												(this.diskNumberStart =
													e.readInt(2)),
												(this.internalFileAttributes =
													e.readInt(2)),
												(this.externalFileAttributes =
													e.readInt(4)),
												(this.localHeaderOffset =
													e.readInt(4)),
												this.isEncrypted())
											)
												throw new Error(
													"Encrypted zip are not supported"
												);
											e.skip(t),
												this.readExtraFields(e),
												this.parseZIP64ExtraField(e),
												(this.fileComment = e.readData(
													this.fileCommentLength
												));
										},
										processAttributes: function () {
											(this.unixPermissions = null),
												(this.dosPermissions = null);
											var e = this.versionMadeBy >> 8;
											(this.dir = !!(
												16 & this.externalFileAttributes
											)),
												0 == e &&
													(this.dosPermissions =
														63 &
														this
															.externalFileAttributes),
												3 == e &&
													(this.unixPermissions =
														(this
															.externalFileAttributes >>
															16) &
														65535),
												this.dir ||
													"/" !==
														this.fileNameStr.slice(
															-1
														) ||
													(this.dir = !0);
										},
										parseZIP64ExtraField: function (e) {
											if (this.extraFields[1]) {
												var t = n(
													this.extraFields[1].value
												);
												this.uncompressedSize ===
													o.MAX_VALUE_32BITS &&
													(this.uncompressedSize =
														t.readInt(8)),
													this.compressedSize ===
														o.MAX_VALUE_32BITS &&
														(this.compressedSize =
															t.readInt(8)),
													this.localHeaderOffset ===
														o.MAX_VALUE_32BITS &&
														(this.localHeaderOffset =
															t.readInt(8)),
													this.diskNumberStart ===
														o.MAX_VALUE_32BITS &&
														(this.diskNumberStart =
															t.readInt(4));
											}
										},
										readExtraFields: function (e) {
											var t,
												r,
												n,
												o =
													e.index +
													this.extraFieldsLength;
											for (
												this.extraFields ||
												(this.extraFields = {});
												e.index + 4 < o;

											)
												(t = e.readInt(2)),
													(r = e.readInt(2)),
													(n = e.readData(r)),
													(this.extraFields[t] = {
														id: t,
														length: r,
														value: n,
													});
											e.setIndex(o);
										},
										handleUTF8: function () {
											var e = c.uint8array
												? "uint8array"
												: "array";
											if (this.useUTF8())
												(this.fileNameStr =
													a.utf8decode(
														this.fileName
													)),
													(this.fileCommentStr =
														a.utf8decode(
															this.fileComment
														));
											else {
												var t =
													this.findExtraFieldUnicodePath();
												if (null !== t)
													this.fileNameStr = t;
												else {
													var r = o.transformTo(
														e,
														this.fileName
													);
													this.fileNameStr =
														this.loadOptions.decodeFileName(
															r
														);
												}
												var n =
													this.findExtraFieldUnicodeComment();
												if (null !== n)
													this.fileCommentStr = n;
												else {
													var i = o.transformTo(
														e,
														this.fileComment
													);
													this.fileCommentStr =
														this.loadOptions.decodeFileName(
															i
														);
												}
											}
										},
										findExtraFieldUnicodePath: function () {
											var e = this.extraFields[28789];
											if (e) {
												var t = n(e.value);
												return 1 !== t.readInt(1) ||
													s(this.fileName) !==
														t.readInt(4)
													? null
													: a.utf8decode(
															t.readData(
																e.length - 5
															)
													  );
											}
											return null;
										},
										findExtraFieldUnicodeComment:
											function () {
												var e = this.extraFields[25461];
												if (e) {
													var t = n(e.value);
													return 1 !== t.readInt(1) ||
														s(this.fileComment) !==
															t.readInt(4)
														? null
														: a.utf8decode(
																t.readData(
																	e.length - 5
																)
														  );
												}
												return null;
											},
									}),
										(t.exports = l);
								},
								{
									"./compressedObject": 2,
									"./compressions": 3,
									"./crc32": 4,
									"./reader/readerFor": 22,
									"./support": 30,
									"./utf8": 31,
									"./utils": 32,
								},
							],
							35: [
								function (e, t, r) {
									"use strict";
									function n(e, t, r) {
										(this.name = e),
											(this.dir = r.dir),
											(this.date = r.date),
											(this.comment = r.comment),
											(this.unixPermissions =
												r.unixPermissions),
											(this.dosPermissions =
												r.dosPermissions),
											(this._data = t),
											(this._dataBinary = r.binary),
											(this.options = {
												compression: r.compression,
												compressionOptions:
													r.compressionOptions,
											});
									}
									var o = e("./stream/StreamHelper"),
										i = e("./stream/DataWorker"),
										s = e("./utf8"),
										a = e("./compressedObject"),
										u = e("./stream/GenericWorker");
									n.prototype = {
										internalStream: function (e) {
											var t = null,
												r = "string";
											try {
												if (!e)
													throw new Error(
														"No output type specified."
													);
												var n =
													"string" ===
														(r = e.toLowerCase()) ||
													"text" === r;
												("binarystring" !== r &&
													"text" !== r) ||
													(r = "string"),
													(t =
														this._decompressWorker());
												var i = !this._dataBinary;
												i &&
													!n &&
													(t = t.pipe(
														new s.Utf8EncodeWorker()
													)),
													!i &&
														n &&
														(t = t.pipe(
															new s.Utf8DecodeWorker()
														));
											} catch (e) {
												(t = new u("error")).error(e);
											}
											return new o(t, r, "");
										},
										async: function (e, t) {
											return this.internalStream(
												e
											).accumulate(t);
										},
										nodeStream: function (e, t) {
											return this.internalStream(
												e || "nodebuffer"
											).toNodejsStream(t);
										},
										_compressWorker: function (e, t) {
											if (
												this._data instanceof a &&
												this._data.compression.magic ===
													e.magic
											)
												return this._data.getCompressedWorker();
											var r = this._decompressWorker();
											return (
												this._dataBinary ||
													(r = r.pipe(
														new s.Utf8EncodeWorker()
													)),
												a.createWorkerFrom(r, e, t)
											);
										},
										_decompressWorker: function () {
											return this._data instanceof a
												? this._data.getContentWorker()
												: this._data instanceof u
												? this._data
												: new i(this._data);
										},
									};
									for (
										var c = [
												"asText",
												"asBinary",
												"asNodeBuffer",
												"asUint8Array",
												"asArrayBuffer",
											],
											l = function () {
												throw new Error(
													"This method has been removed in JSZip 3.0, please check the upgrade guide."
												);
											},
											p = 0;
										p < c.length;
										p++
									)
										n.prototype[c[p]] = l;
									t.exports = n;
								},
								{
									"./compressedObject": 2,
									"./stream/DataWorker": 27,
									"./stream/GenericWorker": 28,
									"./stream/StreamHelper": 29,
									"./utf8": 31,
								},
							],
							36: [
								function (e, t, n) {
									(function (e) {
										"use strict";
										var r,
											n,
											o =
												e.MutationObserver ||
												e.WebKitMutationObserver;
										if (o) {
											var i = 0,
												s = new o(l),
												a =
													e.document.createTextNode(
														""
													);
											s.observe(a, { characterData: !0 }),
												(r = function () {
													a.data = i = ++i % 2;
												});
										} else if (
											e.setImmediate ||
											void 0 === e.MessageChannel
										)
											r =
												"document" in e &&
												"onreadystatechange" in
													e.document.createElement(
														"script"
													)
													? function () {
															var t =
																e.document.createElement(
																	"script"
																);
															(t.onreadystatechange =
																function () {
																	l(),
																		(t.onreadystatechange =
																			null),
																		t.parentNode.removeChild(
																			t
																		),
																		(t =
																			null);
																}),
																e.document.documentElement.appendChild(
																	t
																);
													  }
													: function () {
															setTimeout(l, 0);
													  };
										else {
											var u = new e.MessageChannel();
											(u.port1.onmessage = l),
												(r = function () {
													u.port2.postMessage(0);
												});
										}
										var c = [];
										function l() {
											var e, t;
											n = !0;
											for (var r = c.length; r; ) {
												for (
													t = c, c = [], e = -1;
													++e < r;

												)
													t[e]();
												r = c.length;
											}
											n = !1;
										}
										t.exports = function (e) {
											1 !== c.push(e) || n || r();
										};
									}.call(
										this,
										void 0 !== r.g
											? r.g
											: "undefined" != typeof self
											? self
											: "undefined" != typeof window
											? window
											: {}
									));
								},
								{},
							],
							37: [
								function (e, t, r) {
									"use strict";
									var n = e("immediate");
									function o() {}
									var i = {},
										s = ["REJECTED"],
										a = ["FULFILLED"],
										u = ["PENDING"];
									function c(e) {
										if ("function" != typeof e)
											throw new TypeError(
												"resolver must be a function"
											);
										(this.state = u),
											(this.queue = []),
											(this.outcome = void 0),
											e !== o && d(this, e);
									}
									function l(e, t, r) {
										(this.promise = e),
											"function" == typeof t &&
												((this.onFulfilled = t),
												(this.callFulfilled =
													this.otherCallFulfilled)),
											"function" == typeof r &&
												((this.onRejected = r),
												(this.callRejected =
													this.otherCallRejected));
									}
									function p(e, t, r) {
										n(function () {
											var n;
											try {
												n = t(r);
											} catch (n) {
												return i.reject(e, n);
											}
											n === e
												? i.reject(
														e,
														new TypeError(
															"Cannot resolve promise with itself"
														)
												  )
												: i.resolve(e, n);
										});
									}
									function h(e) {
										var t = e && e.then;
										if (
											e &&
											("object" == typeof e ||
												"function" == typeof e) &&
											"function" == typeof t
										)
											return function () {
												t.apply(e, arguments);
											};
									}
									function d(e, t) {
										var r = !1;
										function n(t) {
											r || ((r = !0), i.reject(e, t));
										}
										function o(t) {
											r || ((r = !0), i.resolve(e, t));
										}
										var s = f(function () {
											t(o, n);
										});
										"error" === s.status && n(s.value);
									}
									function f(e, t) {
										var r = {};
										try {
											(r.value = e(t)),
												(r.status = "success");
										} catch (e) {
											(r.status = "error"), (r.value = e);
										}
										return r;
									}
									((t.exports = c).prototype.finally =
										function (e) {
											if ("function" != typeof e)
												return this;
											var t = this.constructor;
											return this.then(
												function (r) {
													return t
														.resolve(e())
														.then(function () {
															return r;
														});
												},
												function (r) {
													return t
														.resolve(e())
														.then(function () {
															throw r;
														});
												}
											);
										}),
										(c.prototype.catch = function (e) {
											return this.then(null, e);
										}),
										(c.prototype.then = function (e, t) {
											if (
												("function" != typeof e &&
													this.state === a) ||
												("function" != typeof t &&
													this.state === s)
											)
												return this;
											var r = new this.constructor(o);
											return (
												this.state !== u
													? p(
															r,
															this.state === a
																? e
																: t,
															this.outcome
													  )
													: this.queue.push(
															new l(r, e, t)
													  ),
												r
											);
										}),
										(l.prototype.callFulfilled = function (
											e
										) {
											i.resolve(this.promise, e);
										}),
										(l.prototype.otherCallFulfilled =
											function (e) {
												p(
													this.promise,
													this.onFulfilled,
													e
												);
											}),
										(l.prototype.callRejected = function (
											e
										) {
											i.reject(this.promise, e);
										}),
										(l.prototype.otherCallRejected =
											function (e) {
												p(
													this.promise,
													this.onRejected,
													e
												);
											}),
										(i.resolve = function (e, t) {
											var r = f(h, t);
											if ("error" === r.status)
												return i.reject(e, r.value);
											var n = r.value;
											if (n) d(e, n);
											else {
												(e.state = a), (e.outcome = t);
												for (
													var o = -1,
														s = e.queue.length;
													++o < s;

												)
													e.queue[o].callFulfilled(t);
											}
											return e;
										}),
										(i.reject = function (e, t) {
											(e.state = s), (e.outcome = t);
											for (
												var r = -1, n = e.queue.length;
												++r < n;

											)
												e.queue[r].callRejected(t);
											return e;
										}),
										(c.resolve = function (e) {
											return e instanceof this
												? e
												: i.resolve(new this(o), e);
										}),
										(c.reject = function (e) {
											var t = new this(o);
											return i.reject(t, e);
										}),
										(c.all = function (e) {
											var t = this;
											if (
												"[object Array]" !==
												Object.prototype.toString.call(
													e
												)
											)
												return this.reject(
													new TypeError(
														"must be an array"
													)
												);
											var r = e.length,
												n = !1;
											if (!r) return this.resolve([]);
											for (
												var s = new Array(r),
													a = 0,
													u = -1,
													c = new this(o);
												++u < r;

											)
												l(e[u], u);
											return c;
											function l(e, o) {
												t.resolve(e).then(
													function (e) {
														(s[o] = e),
															++a !== r ||
																n ||
																((n = !0),
																i.resolve(
																	c,
																	s
																));
													},
													function (e) {
														n ||
															((n = !0),
															i.reject(c, e));
													}
												);
											}
										}),
										(c.race = function (e) {
											if (
												"[object Array]" !==
												Object.prototype.toString.call(
													e
												)
											)
												return this.reject(
													new TypeError(
														"must be an array"
													)
												);
											var t = e.length,
												r = !1;
											if (!t) return this.resolve([]);
											for (
												var n, s = -1, a = new this(o);
												++s < t;

											)
												(n = e[s]),
													this.resolve(n).then(
														function (e) {
															r ||
																((r = !0),
																i.resolve(
																	a,
																	e
																));
														},
														function (e) {
															r ||
																((r = !0),
																i.reject(a, e));
														}
													);
											return a;
										});
								},
								{ immediate: 36 },
							],
							38: [
								function (e, t, r) {
									"use strict";
									var n = {};
									(0, e("./lib/utils/common").assign)(
										n,
										e("./lib/deflate"),
										e("./lib/inflate"),
										e("./lib/zlib/constants")
									),
										(t.exports = n);
								},
								{
									"./lib/deflate": 39,
									"./lib/inflate": 40,
									"./lib/utils/common": 41,
									"./lib/zlib/constants": 44,
								},
							],
							39: [
								function (e, t, r) {
									"use strict";
									var n = e("./zlib/deflate"),
										o = e("./utils/common"),
										i = e("./utils/strings"),
										s = e("./zlib/messages"),
										a = e("./zlib/zstream"),
										u = Object.prototype.toString;
									function c(e) {
										if (!(this instanceof c))
											return new c(e);
										this.options = o.assign(
											{
												level: -1,
												method: 8,
												chunkSize: 16384,
												windowBits: 15,
												memLevel: 8,
												strategy: 0,
												to: "",
											},
											e || {}
										);
										var t = this.options;
										t.raw && 0 < t.windowBits
											? (t.windowBits = -t.windowBits)
											: t.gzip &&
											  0 < t.windowBits &&
											  t.windowBits < 16 &&
											  (t.windowBits += 16),
											(this.err = 0),
											(this.msg = ""),
											(this.ended = !1),
											(this.chunks = []),
											(this.strm = new a()),
											(this.strm.avail_out = 0);
										var r = n.deflateInit2(
											this.strm,
											t.level,
											t.method,
											t.windowBits,
											t.memLevel,
											t.strategy
										);
										if (0 !== r) throw new Error(s[r]);
										if (
											(t.header &&
												n.deflateSetHeader(
													this.strm,
													t.header
												),
											t.dictionary)
										) {
											var l;
											if (
												((l =
													"string" ==
													typeof t.dictionary
														? i.string2buf(
																t.dictionary
														  )
														: "[object ArrayBuffer]" ===
														  u.call(t.dictionary)
														? new Uint8Array(
																t.dictionary
														  )
														: t.dictionary),
												0 !==
													(r = n.deflateSetDictionary(
														this.strm,
														l
													)))
											)
												throw new Error(s[r]);
											this._dict_set = !0;
										}
									}
									function l(e, t) {
										var r = new c(t);
										if ((r.push(e, !0), r.err))
											throw r.msg || s[r.err];
										return r.result;
									}
									(c.prototype.push = function (e, t) {
										var r,
											s,
											a = this.strm,
											c = this.options.chunkSize;
										if (this.ended) return !1;
										(s = t === ~~t ? t : !0 === t ? 4 : 0),
											"string" == typeof e
												? (a.input = i.string2buf(e))
												: "[object ArrayBuffer]" ===
												  u.call(e)
												? (a.input = new Uint8Array(e))
												: (a.input = e),
											(a.next_in = 0),
											(a.avail_in = a.input.length);
										do {
											if (
												(0 === a.avail_out &&
													((a.output = new o.Buf8(c)),
													(a.next_out = 0),
													(a.avail_out = c)),
												1 !== (r = n.deflate(a, s)) &&
													0 !== r)
											)
												return (
													this.onEnd(r),
													!(this.ended = !0)
												);
											(0 !== a.avail_out &&
												(0 !== a.avail_in ||
													(4 !== s && 2 !== s))) ||
												("string" === this.options.to
													? this.onData(
															i.buf2binstring(
																o.shrinkBuf(
																	a.output,
																	a.next_out
																)
															)
													  )
													: this.onData(
															o.shrinkBuf(
																a.output,
																a.next_out
															)
													  ));
										} while (
											(0 < a.avail_in ||
												0 === a.avail_out) &&
											1 !== r
										);
										return 4 === s
											? ((r = n.deflateEnd(this.strm)),
											  this.onEnd(r),
											  (this.ended = !0),
											  0 === r)
											: 2 !== s ||
													(this.onEnd(0),
													!(a.avail_out = 0));
									}),
										(c.prototype.onData = function (e) {
											this.chunks.push(e);
										}),
										(c.prototype.onEnd = function (e) {
											0 === e &&
												("string" === this.options.to
													? (this.result =
															this.chunks.join(
																""
															))
													: (this.result =
															o.flattenChunks(
																this.chunks
															))),
												(this.chunks = []),
												(this.err = e),
												(this.msg = this.strm.msg);
										}),
										(r.Deflate = c),
										(r.deflate = l),
										(r.deflateRaw = function (e, t) {
											return (
												((t = t || {}).raw = !0),
												l(e, t)
											);
										}),
										(r.gzip = function (e, t) {
											return (
												((t = t || {}).gzip = !0),
												l(e, t)
											);
										});
								},
								{
									"./utils/common": 41,
									"./utils/strings": 42,
									"./zlib/deflate": 46,
									"./zlib/messages": 51,
									"./zlib/zstream": 53,
								},
							],
							40: [
								function (e, t, r) {
									"use strict";
									var n = e("./zlib/inflate"),
										o = e("./utils/common"),
										i = e("./utils/strings"),
										s = e("./zlib/constants"),
										a = e("./zlib/messages"),
										u = e("./zlib/zstream"),
										c = e("./zlib/gzheader"),
										l = Object.prototype.toString;
									function p(e) {
										if (!(this instanceof p))
											return new p(e);
										this.options = o.assign(
											{
												chunkSize: 16384,
												windowBits: 0,
												to: "",
											},
											e || {}
										);
										var t = this.options;
										t.raw &&
											0 <= t.windowBits &&
											t.windowBits < 16 &&
											((t.windowBits = -t.windowBits),
											0 === t.windowBits &&
												(t.windowBits = -15)),
											!(
												0 <= t.windowBits &&
												t.windowBits < 16
											) ||
												(e && e.windowBits) ||
												(t.windowBits += 32),
											15 < t.windowBits &&
												t.windowBits < 48 &&
												0 == (15 & t.windowBits) &&
												(t.windowBits |= 15),
											(this.err = 0),
											(this.msg = ""),
											(this.ended = !1),
											(this.chunks = []),
											(this.strm = new u()),
											(this.strm.avail_out = 0);
										var r = n.inflateInit2(
											this.strm,
											t.windowBits
										);
										if (r !== s.Z_OK) throw new Error(a[r]);
										(this.header = new c()),
											n.inflateGetHeader(
												this.strm,
												this.header
											);
									}
									function h(e, t) {
										var r = new p(t);
										if ((r.push(e, !0), r.err))
											throw r.msg || a[r.err];
										return r.result;
									}
									(p.prototype.push = function (e, t) {
										var r,
											a,
											u,
											c,
											p,
											h,
											d = this.strm,
											f = this.options.chunkSize,
											m = this.options.dictionary,
											g = !1;
										if (this.ended) return !1;
										(a =
											t === ~~t
												? t
												: !0 === t
												? s.Z_FINISH
												: s.Z_NO_FLUSH),
											"string" == typeof e
												? (d.input = i.binstring2buf(e))
												: "[object ArrayBuffer]" ===
												  l.call(e)
												? (d.input = new Uint8Array(e))
												: (d.input = e),
											(d.next_in = 0),
											(d.avail_in = d.input.length);
										do {
											if (
												(0 === d.avail_out &&
													((d.output = new o.Buf8(f)),
													(d.next_out = 0),
													(d.avail_out = f)),
												(r = n.inflate(
													d,
													s.Z_NO_FLUSH
												)) === s.Z_NEED_DICT &&
													m &&
													((h =
														"string" == typeof m
															? i.string2buf(m)
															: "[object ArrayBuffer]" ===
															  l.call(m)
															? new Uint8Array(m)
															: m),
													(r = n.inflateSetDictionary(
														this.strm,
														h
													))),
												r === s.Z_BUF_ERROR &&
													!0 === g &&
													((r = s.Z_OK), (g = !1)),
												r !== s.Z_STREAM_END &&
													r !== s.Z_OK)
											)
												return (
													this.onEnd(r),
													!(this.ended = !0)
												);
											d.next_out &&
												((0 !== d.avail_out &&
													r !== s.Z_STREAM_END &&
													(0 !== d.avail_in ||
														(a !== s.Z_FINISH &&
															a !==
																s.Z_SYNC_FLUSH))) ||
													("string" ===
													this.options.to
														? ((u = i.utf8border(
																d.output,
																d.next_out
														  )),
														  (c = d.next_out - u),
														  (p = i.buf2string(
																d.output,
																u
														  )),
														  (d.next_out = c),
														  (d.avail_out = f - c),
														  c &&
																o.arraySet(
																	d.output,
																	d.output,
																	u,
																	c,
																	0
																),
														  this.onData(p))
														: this.onData(
																o.shrinkBuf(
																	d.output,
																	d.next_out
																)
														  ))),
												0 === d.avail_in &&
													0 === d.avail_out &&
													(g = !0);
										} while (
											(0 < d.avail_in ||
												0 === d.avail_out) &&
											r !== s.Z_STREAM_END
										);
										return (
											r === s.Z_STREAM_END &&
												(a = s.Z_FINISH),
											a === s.Z_FINISH
												? ((r = n.inflateEnd(
														this.strm
												  )),
												  this.onEnd(r),
												  (this.ended = !0),
												  r === s.Z_OK)
												: a !== s.Z_SYNC_FLUSH ||
												  (this.onEnd(s.Z_OK),
												  !(d.avail_out = 0))
										);
									}),
										(p.prototype.onData = function (e) {
											this.chunks.push(e);
										}),
										(p.prototype.onEnd = function (e) {
											e === s.Z_OK &&
												("string" === this.options.to
													? (this.result =
															this.chunks.join(
																""
															))
													: (this.result =
															o.flattenChunks(
																this.chunks
															))),
												(this.chunks = []),
												(this.err = e),
												(this.msg = this.strm.msg);
										}),
										(r.Inflate = p),
										(r.inflate = h),
										(r.inflateRaw = function (e, t) {
											return (
												((t = t || {}).raw = !0),
												h(e, t)
											);
										}),
										(r.ungzip = h);
								},
								{
									"./utils/common": 41,
									"./utils/strings": 42,
									"./zlib/constants": 44,
									"./zlib/gzheader": 47,
									"./zlib/inflate": 49,
									"./zlib/messages": 51,
									"./zlib/zstream": 53,
								},
							],
							41: [
								function (e, t, r) {
									"use strict";
									var n =
										"undefined" != typeof Uint8Array &&
										"undefined" != typeof Uint16Array &&
										"undefined" != typeof Int32Array;
									(r.assign = function (e) {
										for (
											var t = Array.prototype.slice.call(
												arguments,
												1
											);
											t.length;

										) {
											var r = t.shift();
											if (r) {
												if ("object" != typeof r)
													throw new TypeError(
														r + "must be non-object"
													);
												for (var n in r)
													r.hasOwnProperty(n) &&
														(e[n] = r[n]);
											}
										}
										return e;
									}),
										(r.shrinkBuf = function (e, t) {
											return e.length === t
												? e
												: e.subarray
												? e.subarray(0, t)
												: ((e.length = t), e);
										});
									var o = {
											arraySet: function (e, t, r, n, o) {
												if (t.subarray && e.subarray)
													e.set(
														t.subarray(r, r + n),
														o
													);
												else
													for (var i = 0; i < n; i++)
														e[o + i] = t[r + i];
											},
											flattenChunks: function (e) {
												var t, r, n, o, i, s;
												for (
													t = n = 0, r = e.length;
													t < r;
													t++
												)
													n += e[t].length;
												for (
													s = new Uint8Array(n),
														t = o = 0,
														r = e.length;
													t < r;
													t++
												)
													(i = e[t]),
														s.set(i, o),
														(o += i.length);
												return s;
											},
										},
										i = {
											arraySet: function (e, t, r, n, o) {
												for (var i = 0; i < n; i++)
													e[o + i] = t[r + i];
											},
											flattenChunks: function (e) {
												return [].concat.apply([], e);
											},
										};
									(r.setTyped = function (e) {
										e
											? ((r.Buf8 = Uint8Array),
											  (r.Buf16 = Uint16Array),
											  (r.Buf32 = Int32Array),
											  r.assign(r, o))
											: ((r.Buf8 = Array),
											  (r.Buf16 = Array),
											  (r.Buf32 = Array),
											  r.assign(r, i));
									}),
										r.setTyped(n);
								},
								{},
							],
							42: [
								function (e, t, r) {
									"use strict";
									var n = e("./common"),
										o = !0,
										i = !0;
									try {
										String.fromCharCode.apply(null, [0]);
									} catch (e) {
										o = !1;
									}
									try {
										String.fromCharCode.apply(
											null,
											new Uint8Array(1)
										);
									} catch (e) {
										i = !1;
									}
									for (
										var s = new n.Buf8(256), a = 0;
										a < 256;
										a++
									)
										s[a] =
											252 <= a
												? 6
												: 248 <= a
												? 5
												: 240 <= a
												? 4
												: 224 <= a
												? 3
												: 192 <= a
												? 2
												: 1;
									function u(e, t) {
										if (
											t < 65537 &&
											((e.subarray && i) ||
												(!e.subarray && o))
										)
											return String.fromCharCode.apply(
												null,
												n.shrinkBuf(e, t)
											);
										for (var r = "", s = 0; s < t; s++)
											r += String.fromCharCode(e[s]);
										return r;
									}
									(s[254] = s[254] = 1),
										(r.string2buf = function (e) {
											var t,
												r,
												o,
												i,
												s,
												a = e.length,
												u = 0;
											for (i = 0; i < a; i++)
												55296 ==
													(64512 &
														(r =
															e.charCodeAt(i))) &&
													i + 1 < a &&
													56320 ==
														(64512 &
															(o = e.charCodeAt(
																i + 1
															))) &&
													((r =
														65536 +
														((r - 55296) << 10) +
														(o - 56320)),
													i++),
													(u +=
														r < 128
															? 1
															: r < 2048
															? 2
															: r < 65536
															? 3
															: 4);
											for (
												t = new n.Buf8(u), i = s = 0;
												s < u;
												i++
											)
												55296 ==
													(64512 &
														(r =
															e.charCodeAt(i))) &&
													i + 1 < a &&
													56320 ==
														(64512 &
															(o = e.charCodeAt(
																i + 1
															))) &&
													((r =
														65536 +
														((r - 55296) << 10) +
														(o - 56320)),
													i++),
													r < 128
														? (t[s++] = r)
														: (r < 2048
																? (t[s++] =
																		192 |
																		(r >>>
																			6))
																: (r < 65536
																		? (t[
																				s++
																		  ] =
																				224 |
																				(r >>>
																					12))
																		: ((t[
																				s++
																		  ] =
																				240 |
																				(r >>>
																					18)),
																		  (t[
																				s++
																		  ] =
																				128 |
																				((r >>>
																					12) &
																					63))),
																  (t[s++] =
																		128 |
																		((r >>>
																			6) &
																			63))),
														  (t[s++] =
																128 |
																(63 & r)));
											return t;
										}),
										(r.buf2binstring = function (e) {
											return u(e, e.length);
										}),
										(r.binstring2buf = function (e) {
											for (
												var t = new n.Buf8(e.length),
													r = 0,
													o = t.length;
												r < o;
												r++
											)
												t[r] = e.charCodeAt(r);
											return t;
										}),
										(r.buf2string = function (e, t) {
											var r,
												n,
												o,
												i,
												a = t || e.length,
												c = new Array(2 * a);
											for (r = n = 0; r < a; )
												if ((o = e[r++]) < 128)
													c[n++] = o;
												else if (4 < (i = s[o]))
													(c[n++] = 65533),
														(r += i - 1);
												else {
													for (
														o &=
															2 === i
																? 31
																: 3 === i
																? 15
																: 7;
														1 < i && r < a;

													)
														(o =
															(o << 6) |
															(63 & e[r++])),
															i--;
													1 < i
														? (c[n++] = 65533)
														: o < 65536
														? (c[n++] = o)
														: ((o -= 65536),
														  (c[n++] =
																55296 |
																((o >> 10) &
																	1023)),
														  (c[n++] =
																56320 |
																(1023 & o)));
												}
											return u(c, n);
										}),
										(r.utf8border = function (e, t) {
											var r;
											for (
												(t = t || e.length) >
													e.length && (t = e.length),
													r = t - 1;
												0 <= r && 128 == (192 & e[r]);

											)
												r--;
											return r < 0 || 0 === r
												? t
												: r + s[e[r]] > t
												? r
												: t;
										});
								},
								{ "./common": 41 },
							],
							43: [
								function (e, t, r) {
									"use strict";
									t.exports = function (e, t, r, n) {
										for (
											var o = (65535 & e) | 0,
												i = ((e >>> 16) & 65535) | 0,
												s = 0;
											0 !== r;

										) {
											for (
												r -= s = 2e3 < r ? 2e3 : r;
												(i =
													(i +
														(o =
															(o + t[n++]) | 0)) |
													0),
													--s;

											);
											(o %= 65521), (i %= 65521);
										}
										return o | (i << 16) | 0;
									};
								},
								{},
							],
							44: [
								function (e, t, r) {
									"use strict";
									t.exports = {
										Z_NO_FLUSH: 0,
										Z_PARTIAL_FLUSH: 1,
										Z_SYNC_FLUSH: 2,
										Z_FULL_FLUSH: 3,
										Z_FINISH: 4,
										Z_BLOCK: 5,
										Z_TREES: 6,
										Z_OK: 0,
										Z_STREAM_END: 1,
										Z_NEED_DICT: 2,
										Z_ERRNO: -1,
										Z_STREAM_ERROR: -2,
										Z_DATA_ERROR: -3,
										Z_BUF_ERROR: -5,
										Z_NO_COMPRESSION: 0,
										Z_BEST_SPEED: 1,
										Z_BEST_COMPRESSION: 9,
										Z_DEFAULT_COMPRESSION: -1,
										Z_FILTERED: 1,
										Z_HUFFMAN_ONLY: 2,
										Z_RLE: 3,
										Z_FIXED: 4,
										Z_DEFAULT_STRATEGY: 0,
										Z_BINARY: 0,
										Z_TEXT: 1,
										Z_UNKNOWN: 2,
										Z_DEFLATED: 8,
									};
								},
								{},
							],
							45: [
								function (e, t, r) {
									"use strict";
									var n = (function () {
										for (
											var e, t = [], r = 0;
											r < 256;
											r++
										) {
											e = r;
											for (var n = 0; n < 8; n++)
												e =
													1 & e
														? 3988292384 ^ (e >>> 1)
														: e >>> 1;
											t[r] = e;
										}
										return t;
									})();
									t.exports = function (e, t, r, o) {
										var i = n,
											s = o + r;
										e ^= -1;
										for (var a = o; a < s; a++)
											e = (e >>> 8) ^ i[255 & (e ^ t[a])];
										return -1 ^ e;
									};
								},
								{},
							],
							46: [
								function (e, t, r) {
									"use strict";
									var n,
										o = e("../utils/common"),
										i = e("./trees"),
										s = e("./adler32"),
										a = e("./crc32"),
										u = e("./messages"),
										c = -2,
										l = 258,
										p = 262,
										h = 113;
									function d(e, t) {
										return (e.msg = u[t]), t;
									}
									function f(e) {
										return (e << 1) - (4 < e ? 9 : 0);
									}
									function m(e) {
										for (var t = e.length; 0 <= --t; )
											e[t] = 0;
									}
									function g(e) {
										var t = e.state,
											r = t.pending;
										r > e.avail_out && (r = e.avail_out),
											0 !== r &&
												(o.arraySet(
													e.output,
													t.pending_buf,
													t.pending_out,
													r,
													e.next_out
												),
												(e.next_out += r),
												(t.pending_out += r),
												(e.total_out += r),
												(e.avail_out -= r),
												(t.pending -= r),
												0 === t.pending &&
													(t.pending_out = 0));
									}
									function b(e, t) {
										i._tr_flush_block(
											e,
											0 <= e.block_start
												? e.block_start
												: -1,
											e.strstart - e.block_start,
											t
										),
											(e.block_start = e.strstart),
											g(e.strm);
									}
									function y(e, t) {
										e.pending_buf[e.pending++] = t;
									}
									function w(e, t) {
										(e.pending_buf[e.pending++] =
											(t >>> 8) & 255),
											(e.pending_buf[e.pending++] =
												255 & t);
									}
									function v(e, t) {
										var r,
											n,
											o = e.max_chain_length,
											i = e.strstart,
											s = e.prev_length,
											a = e.nice_match,
											u =
												e.strstart > e.w_size - p
													? e.strstart -
													  (e.w_size - p)
													: 0,
											c = e.window,
											h = e.w_mask,
											d = e.prev,
											f = e.strstart + l,
											m = c[i + s - 1],
											g = c[i + s];
										e.prev_length >= e.good_match &&
											(o >>= 2),
											a > e.lookahead &&
												(a = e.lookahead);
										do {
											if (
												c[(r = t) + s] === g &&
												c[r + s - 1] === m &&
												c[r] === c[i] &&
												c[++r] === c[i + 1]
											) {
												(i += 2), r++;
												do {} while (
													c[++i] === c[++r] &&
													c[++i] === c[++r] &&
													c[++i] === c[++r] &&
													c[++i] === c[++r] &&
													c[++i] === c[++r] &&
													c[++i] === c[++r] &&
													c[++i] === c[++r] &&
													c[++i] === c[++r] &&
													i < f
												);
												if (
													((n = l - (f - i)),
													(i = f - l),
													s < n)
												) {
													if (
														((e.match_start = t),
														a <= (s = n))
													)
														break;
													(m = c[i + s - 1]),
														(g = c[i + s]);
												}
											}
										} while (
											(t = d[t & h]) > u &&
											0 != --o
										);
										return s <= e.lookahead
											? s
											: e.lookahead;
									}
									function _(e) {
										var t,
											r,
											n,
											i,
											u,
											c,
											l,
											h,
											d,
											f,
											m = e.w_size;
										do {
											if (
												((i =
													e.window_size -
													e.lookahead -
													e.strstart),
												e.strstart >= m + (m - p))
											) {
												for (
													o.arraySet(
														e.window,
														e.window,
														m,
														m,
														0
													),
														e.match_start -= m,
														e.strstart -= m,
														e.block_start -= m,
														t = r = e.hash_size;
													(n = e.head[--t]),
														(e.head[t] =
															m <= n ? n - m : 0),
														--r;

												);
												for (
													t = r = m;
													(n = e.prev[--t]),
														(e.prev[t] =
															m <= n ? n - m : 0),
														--r;

												);
												i += m;
											}
											if (0 === e.strm.avail_in) break;
											if (
												((c = e.strm),
												(l = e.window),
												(h = e.strstart + e.lookahead),
												(f = void 0),
												(d = i) < (f = c.avail_in) &&
													(f = d),
												(r =
													0 === f
														? 0
														: ((c.avail_in -= f),
														  o.arraySet(
																l,
																c.input,
																c.next_in,
																f,
																h
														  ),
														  1 === c.state.wrap
																? (c.adler = s(
																		c.adler,
																		l,
																		f,
																		h
																  ))
																: 2 ===
																		c.state
																			.wrap &&
																  (c.adler = a(
																		c.adler,
																		l,
																		f,
																		h
																  )),
														  (c.next_in += f),
														  (c.total_in += f),
														  f)),
												(e.lookahead += r),
												e.lookahead + e.insert >= 3)
											)
												for (
													u = e.strstart - e.insert,
														e.ins_h = e.window[u],
														e.ins_h =
															((e.ins_h <<
																e.hash_shift) ^
																e.window[
																	u + 1
																]) &
															e.hash_mask;
													e.insert &&
													((e.ins_h =
														((e.ins_h <<
															e.hash_shift) ^
															e.window[
																u + 3 - 1
															]) &
														e.hash_mask),
													(e.prev[u & e.w_mask] =
														e.head[e.ins_h]),
													(e.head[e.ins_h] = u),
													u++,
													e.insert--,
													!(
														e.lookahead + e.insert <
														3
													));

												);
										} while (
											e.lookahead < p &&
											0 !== e.strm.avail_in
										);
									}
									function x(e, t) {
										for (var r, n; ; ) {
											if (e.lookahead < p) {
												if (
													(_(e),
													e.lookahead < p && 0 === t)
												)
													return 1;
												if (0 === e.lookahead) break;
											}
											if (
												((r = 0),
												e.lookahead >= 3 &&
													((e.ins_h =
														((e.ins_h <<
															e.hash_shift) ^
															e.window[
																e.strstart +
																	3 -
																	1
															]) &
														e.hash_mask),
													(r = e.prev[
														e.strstart & e.w_mask
													] =
														e.head[e.ins_h]),
													(e.head[e.ins_h] =
														e.strstart)),
												0 !== r &&
													e.strstart - r <=
														e.w_size - p &&
													(e.match_length = v(e, r)),
												e.match_length >= 3)
											)
												if (
													((n = i._tr_tally(
														e,
														e.strstart -
															e.match_start,
														e.match_length - 3
													)),
													(e.lookahead -=
														e.match_length),
													e.match_length <=
														e.max_lazy_match &&
														e.lookahead >= 3)
												) {
													for (
														e.match_length--;
														e.strstart++,
															(e.ins_h =
																((e.ins_h <<
																	e.hash_shift) ^
																	e.window[
																		e.strstart +
																			3 -
																			1
																	]) &
																e.hash_mask),
															(r = e.prev[
																e.strstart &
																	e.w_mask
															] =
																e.head[
																	e.ins_h
																]),
															(e.head[e.ins_h] =
																e.strstart),
															0 !=
																--e.match_length;

													);
													e.strstart++;
												} else
													(e.strstart +=
														e.match_length),
														(e.match_length = 0),
														(e.ins_h =
															e.window[
																e.strstart
															]),
														(e.ins_h =
															((e.ins_h <<
																e.hash_shift) ^
																e.window[
																	e.strstart +
																		1
																]) &
															e.hash_mask);
											else
												(n = i._tr_tally(
													e,
													0,
													e.window[e.strstart]
												)),
													e.lookahead--,
													e.strstart++;
											if (
												n &&
												(b(e, !1),
												0 === e.strm.avail_out)
											)
												return 1;
										}
										return (
											(e.insert =
												e.strstart < 2
													? e.strstart
													: 2),
											4 === t
												? (b(e, !0),
												  0 === e.strm.avail_out
														? 3
														: 4)
												: e.last_lit &&
												  (b(e, !1),
												  0 === e.strm.avail_out)
												? 1
												: 2
										);
									}
									function E(e, t) {
										for (var r, n, o; ; ) {
											if (e.lookahead < p) {
												if (
													(_(e),
													e.lookahead < p && 0 === t)
												)
													return 1;
												if (0 === e.lookahead) break;
											}
											if (
												((r = 0),
												e.lookahead >= 3 &&
													((e.ins_h =
														((e.ins_h <<
															e.hash_shift) ^
															e.window[
																e.strstart +
																	3 -
																	1
															]) &
														e.hash_mask),
													(r = e.prev[
														e.strstart & e.w_mask
													] =
														e.head[e.ins_h]),
													(e.head[e.ins_h] =
														e.strstart)),
												(e.prev_length =
													e.match_length),
												(e.prev_match = e.match_start),
												(e.match_length = 2),
												0 !== r &&
													e.prev_length <
														e.max_lazy_match &&
													e.strstart - r <=
														e.w_size - p &&
													((e.match_length = v(e, r)),
													e.match_length <= 5 &&
														(1 === e.strategy ||
															(3 ===
																e.match_length &&
																4096 <
																	e.strstart -
																		e.match_start)) &&
														(e.match_length = 2)),
												e.prev_length >= 3 &&
													e.match_length <=
														e.prev_length)
											) {
												for (
													o =
														e.strstart +
														e.lookahead -
														3,
														n = i._tr_tally(
															e,
															e.strstart -
																1 -
																e.prev_match,
															e.prev_length - 3
														),
														e.lookahead -=
															e.prev_length - 1,
														e.prev_length -= 2;
													++e.strstart <= o &&
														((e.ins_h =
															((e.ins_h <<
																e.hash_shift) ^
																e.window[
																	e.strstart +
																		3 -
																		1
																]) &
															e.hash_mask),
														(r = e.prev[
															e.strstart &
																e.w_mask
														] =
															e.head[e.ins_h]),
														(e.head[e.ins_h] =
															e.strstart)),
														0 != --e.prev_length;

												);
												if (
													((e.match_available = 0),
													(e.match_length = 2),
													e.strstart++,
													n &&
														(b(e, !1),
														0 === e.strm.avail_out))
												)
													return 1;
											} else if (e.match_available) {
												if (
													((n = i._tr_tally(
														e,
														0,
														e.window[e.strstart - 1]
													)) && b(e, !1),
													e.strstart++,
													e.lookahead--,
													0 === e.strm.avail_out)
												)
													return 1;
											} else
												(e.match_available = 1),
													e.strstart++,
													e.lookahead--;
										}
										return (
											e.match_available &&
												((n = i._tr_tally(
													e,
													0,
													e.window[e.strstart - 1]
												)),
												(e.match_available = 0)),
											(e.insert =
												e.strstart < 2
													? e.strstart
													: 2),
											4 === t
												? (b(e, !0),
												  0 === e.strm.avail_out
														? 3
														: 4)
												: e.last_lit &&
												  (b(e, !1),
												  0 === e.strm.avail_out)
												? 1
												: 2
										);
									}
									function T(e, t, r, n, o) {
										(this.good_length = e),
											(this.max_lazy = t),
											(this.nice_length = r),
											(this.max_chain = n),
											(this.func = o);
									}
									function O() {
										(this.strm = null),
											(this.status = 0),
											(this.pending_buf = null),
											(this.pending_buf_size = 0),
											(this.pending_out = 0),
											(this.pending = 0),
											(this.wrap = 0),
											(this.gzhead = null),
											(this.gzindex = 0),
											(this.method = 8),
											(this.last_flush = -1),
											(this.w_size = 0),
											(this.w_bits = 0),
											(this.w_mask = 0),
											(this.window = null),
											(this.window_size = 0),
											(this.prev = null),
											(this.head = null),
											(this.ins_h = 0),
											(this.hash_size = 0),
											(this.hash_bits = 0),
											(this.hash_mask = 0),
											(this.hash_shift = 0),
											(this.block_start = 0),
											(this.match_length = 0),
											(this.prev_match = 0),
											(this.match_available = 0),
											(this.strstart = 0),
											(this.match_start = 0),
											(this.lookahead = 0),
											(this.prev_length = 0),
											(this.max_chain_length = 0),
											(this.max_lazy_match = 0),
											(this.level = 0),
											(this.strategy = 0),
											(this.good_match = 0),
											(this.nice_match = 0),
											(this.dyn_ltree = new o.Buf16(
												1146
											)),
											(this.dyn_dtree = new o.Buf16(122)),
											(this.bl_tree = new o.Buf16(78)),
											m(this.dyn_ltree),
											m(this.dyn_dtree),
											m(this.bl_tree),
											(this.l_desc = null),
											(this.d_desc = null),
											(this.bl_desc = null),
											(this.bl_count = new o.Buf16(16)),
											(this.heap = new o.Buf16(573)),
											m(this.heap),
											(this.heap_len = 0),
											(this.heap_max = 0),
											(this.depth = new o.Buf16(573)),
											m(this.depth),
											(this.l_buf = 0),
											(this.lit_bufsize = 0),
											(this.last_lit = 0),
											(this.d_buf = 0),
											(this.opt_len = 0),
											(this.static_len = 0),
											(this.matches = 0),
											(this.insert = 0),
											(this.bi_buf = 0),
											(this.bi_valid = 0);
									}
									function S(e) {
										var t;
										return e && e.state
											? ((e.total_in = e.total_out = 0),
											  (e.data_type = 2),
											  ((t = e.state).pending = 0),
											  (t.pending_out = 0),
											  t.wrap < 0 && (t.wrap = -t.wrap),
											  (t.status = t.wrap ? 42 : h),
											  (e.adler = 2 === t.wrap ? 0 : 1),
											  (t.last_flush = 0),
											  i._tr_init(t),
											  0)
											: d(e, c);
									}
									function A(e) {
										var t = S(e);
										return (
											0 === t &&
												(function (e) {
													(e.window_size =
														2 * e.w_size),
														m(e.head),
														(e.max_lazy_match =
															n[
																e.level
															].max_lazy),
														(e.good_match =
															n[
																e.level
															].good_length),
														(e.nice_match =
															n[
																e.level
															].nice_length),
														(e.max_chain_length =
															n[
																e.level
															].max_chain),
														(e.strstart = 0),
														(e.block_start = 0),
														(e.lookahead = 0),
														(e.insert = 0),
														(e.match_length =
															e.prev_length =
																2),
														(e.match_available = 0),
														(e.ins_h = 0);
												})(e.state),
											t
										);
									}
									function P(e, t, r, n, i, s) {
										if (!e) return c;
										var a = 1;
										if (
											(-1 === t && (t = 6),
											n < 0
												? ((a = 0), (n = -n))
												: 15 < n &&
												  ((a = 2), (n -= 16)),
											i < 1 ||
												9 < i ||
												8 !== r ||
												n < 8 ||
												15 < n ||
												t < 0 ||
												9 < t ||
												s < 0 ||
												4 < s)
										)
											return d(e, c);
										8 === n && (n = 9);
										var u = new O();
										return (
											((e.state = u).strm = e),
											(u.wrap = a),
											(u.gzhead = null),
											(u.w_bits = n),
											(u.w_size = 1 << u.w_bits),
											(u.w_mask = u.w_size - 1),
											(u.hash_bits = i + 7),
											(u.hash_size = 1 << u.hash_bits),
											(u.hash_mask = u.hash_size - 1),
											(u.hash_shift = ~~(
												(u.hash_bits + 3 - 1) /
												3
											)),
											(u.window = new o.Buf8(
												2 * u.w_size
											)),
											(u.head = new o.Buf16(u.hash_size)),
											(u.prev = new o.Buf16(u.w_size)),
											(u.lit_bufsize = 1 << (i + 6)),
											(u.pending_buf_size =
												4 * u.lit_bufsize),
											(u.pending_buf = new o.Buf8(
												u.pending_buf_size
											)),
											(u.d_buf = 1 * u.lit_bufsize),
											(u.l_buf = 3 * u.lit_bufsize),
											(u.level = t),
											(u.strategy = s),
											(u.method = r),
											A(e)
										);
									}
									(n = [
										new T(0, 0, 0, 0, function (e, t) {
											var r = 65535;
											for (
												r > e.pending_buf_size - 5 &&
												(r = e.pending_buf_size - 5);
												;

											) {
												if (e.lookahead <= 1) {
													if (
														(_(e),
														0 === e.lookahead &&
															0 === t)
													)
														return 1;
													if (0 === e.lookahead)
														break;
												}
												(e.strstart += e.lookahead),
													(e.lookahead = 0);
												var n = e.block_start + r;
												if (
													(0 === e.strstart ||
														e.strstart >= n) &&
													((e.lookahead =
														e.strstart - n),
													(e.strstart = n),
													b(e, !1),
													0 === e.strm.avail_out)
												)
													return 1;
												if (
													e.strstart -
														e.block_start >=
														e.w_size - p &&
													(b(e, !1),
													0 === e.strm.avail_out)
												)
													return 1;
											}
											return (
												(e.insert = 0),
												4 === t
													? (b(e, !0),
													  0 === e.strm.avail_out
															? 3
															: 4)
													: (e.strstart >
															e.block_start &&
															(b(e, !1),
															e.strm.avail_out),
													  1)
											);
										}),
										new T(4, 4, 8, 4, x),
										new T(4, 5, 16, 8, x),
										new T(4, 6, 32, 32, x),
										new T(4, 4, 16, 16, E),
										new T(8, 16, 32, 32, E),
										new T(8, 16, 128, 128, E),
										new T(8, 32, 128, 256, E),
										new T(32, 128, 258, 1024, E),
										new T(32, 258, 258, 4096, E),
									]),
										(r.deflateInit = function (e, t) {
											return P(e, t, 8, 15, 8, 0);
										}),
										(r.deflateInit2 = P),
										(r.deflateReset = A),
										(r.deflateResetKeep = S),
										(r.deflateSetHeader = function (e, t) {
											return e && e.state
												? 2 !== e.state.wrap
													? c
													: ((e.state.gzhead = t), 0)
												: c;
										}),
										(r.deflate = function (e, t) {
											var r, o, s, u;
											if (
												!e ||
												!e.state ||
												5 < t ||
												t < 0
											)
												return e ? d(e, c) : c;
											if (
												((o = e.state),
												!e.output ||
													(!e.input &&
														0 !== e.avail_in) ||
													(666 === o.status &&
														4 !== t))
											)
												return d(
													e,
													0 === e.avail_out ? -5 : c
												);
											if (
												((o.strm = e),
												(r = o.last_flush),
												(o.last_flush = t),
												42 === o.status)
											)
												if (2 === o.wrap)
													(e.adler = 0),
														y(o, 31),
														y(o, 139),
														y(o, 8),
														o.gzhead
															? (y(
																	o,
																	(o.gzhead
																		.text
																		? 1
																		: 0) +
																		(o
																			.gzhead
																			.hcrc
																			? 2
																			: 0) +
																		(o
																			.gzhead
																			.extra
																			? 4
																			: 0) +
																		(o
																			.gzhead
																			.name
																			? 8
																			: 0) +
																		(o
																			.gzhead
																			.comment
																			? 16
																			: 0)
															  ),
															  y(
																	o,
																	255 &
																		o.gzhead
																			.time
															  ),
															  y(
																	o,
																	(o.gzhead
																		.time >>
																		8) &
																		255
															  ),
															  y(
																	o,
																	(o.gzhead
																		.time >>
																		16) &
																		255
															  ),
															  y(
																	o,
																	(o.gzhead
																		.time >>
																		24) &
																		255
															  ),
															  y(
																	o,
																	9 ===
																		o.level
																		? 2
																		: 2 <=
																				o.strategy ||
																		  o.level <
																				2
																		? 4
																		: 0
															  ),
															  y(
																	o,
																	255 &
																		o.gzhead
																			.os
															  ),
															  o.gzhead.extra &&
																	o.gzhead
																		.extra
																		.length &&
																	(y(
																		o,
																		255 &
																			o
																				.gzhead
																				.extra
																				.length
																	),
																	y(
																		o,
																		(o
																			.gzhead
																			.extra
																			.length >>
																			8) &
																			255
																	)),
															  o.gzhead.hcrc &&
																	(e.adler =
																		a(
																			e.adler,
																			o.pending_buf,
																			o.pending,
																			0
																		)),
															  (o.gzindex = 0),
															  (o.status = 69))
															: (y(o, 0),
															  y(o, 0),
															  y(o, 0),
															  y(o, 0),
															  y(o, 0),
															  y(
																	o,
																	9 ===
																		o.level
																		? 2
																		: 2 <=
																				o.strategy ||
																		  o.level <
																				2
																		? 4
																		: 0
															  ),
															  y(o, 3),
															  (o.status = h));
												else {
													var p =
														(8 +
															((o.w_bits - 8) <<
																4)) <<
														8;
													(p |=
														(2 <= o.strategy ||
														o.level < 2
															? 0
															: o.level < 6
															? 1
															: 6 === o.level
															? 2
															: 3) << 6),
														0 !== o.strstart &&
															(p |= 32),
														(p += 31 - (p % 31)),
														(o.status = h),
														w(o, p),
														0 !== o.strstart &&
															(w(
																o,
																e.adler >>> 16
															),
															w(
																o,
																65535 & e.adler
															)),
														(e.adler = 1);
												}
											if (69 === o.status)
												if (o.gzhead.extra) {
													for (
														s = o.pending;
														o.gzindex <
															(65535 &
																o.gzhead.extra
																	.length) &&
														(o.pending !==
															o.pending_buf_size ||
															(o.gzhead.hcrc &&
																o.pending > s &&
																(e.adler = a(
																	e.adler,
																	o.pending_buf,
																	o.pending -
																		s,
																	s
																)),
															g(e),
															(s = o.pending),
															o.pending !==
																o.pending_buf_size));

													)
														y(
															o,
															255 &
																o.gzhead.extra[
																	o.gzindex
																]
														),
															o.gzindex++;
													o.gzhead.hcrc &&
														o.pending > s &&
														(e.adler = a(
															e.adler,
															o.pending_buf,
															o.pending - s,
															s
														)),
														o.gzindex ===
															o.gzhead.extra
																.length &&
															((o.gzindex = 0),
															(o.status = 73));
												} else o.status = 73;
											if (73 === o.status)
												if (o.gzhead.name) {
													s = o.pending;
													do {
														if (
															o.pending ===
																o.pending_buf_size &&
															(o.gzhead.hcrc &&
																o.pending > s &&
																(e.adler = a(
																	e.adler,
																	o.pending_buf,
																	o.pending -
																		s,
																	s
																)),
															g(e),
															(s = o.pending),
															o.pending ===
																o.pending_buf_size)
														) {
															u = 1;
															break;
														}
														(u =
															o.gzindex <
															o.gzhead.name.length
																? 255 &
																  o.gzhead.name.charCodeAt(
																		o.gzindex++
																  )
																: 0),
															y(o, u);
													} while (0 !== u);
													o.gzhead.hcrc &&
														o.pending > s &&
														(e.adler = a(
															e.adler,
															o.pending_buf,
															o.pending - s,
															s
														)),
														0 === u &&
															((o.gzindex = 0),
															(o.status = 91));
												} else o.status = 91;
											if (91 === o.status)
												if (o.gzhead.comment) {
													s = o.pending;
													do {
														if (
															o.pending ===
																o.pending_buf_size &&
															(o.gzhead.hcrc &&
																o.pending > s &&
																(e.adler = a(
																	e.adler,
																	o.pending_buf,
																	o.pending -
																		s,
																	s
																)),
															g(e),
															(s = o.pending),
															o.pending ===
																o.pending_buf_size)
														) {
															u = 1;
															break;
														}
														(u =
															o.gzindex <
															o.gzhead.comment
																.length
																? 255 &
																  o.gzhead.comment.charCodeAt(
																		o.gzindex++
																  )
																: 0),
															y(o, u);
													} while (0 !== u);
													o.gzhead.hcrc &&
														o.pending > s &&
														(e.adler = a(
															e.adler,
															o.pending_buf,
															o.pending - s,
															s
														)),
														0 === u &&
															(o.status = 103);
												} else o.status = 103;
											if (
												(103 === o.status &&
													(o.gzhead.hcrc
														? (o.pending + 2 >
																o.pending_buf_size &&
																g(e),
														  o.pending + 2 <=
																o.pending_buf_size &&
																(y(
																	o,
																	255 &
																		e.adler
																),
																y(
																	o,
																	(e.adler >>
																		8) &
																		255
																),
																(e.adler = 0),
																(o.status = h)))
														: (o.status = h)),
												0 !== o.pending)
											) {
												if ((g(e), 0 === e.avail_out))
													return (
														(o.last_flush = -1), 0
													);
											} else if (
												0 === e.avail_in &&
												f(t) <= f(r) &&
												4 !== t
											)
												return d(e, -5);
											if (
												666 === o.status &&
												0 !== e.avail_in
											)
												return d(e, -5);
											if (
												0 !== e.avail_in ||
												0 !== o.lookahead ||
												(0 !== t && 666 !== o.status)
											) {
												var v =
													2 === o.strategy
														? (function (e, t) {
																for (
																	var r;
																	;

																) {
																	if (
																		0 ===
																			e.lookahead &&
																		(_(e),
																		0 ===
																			e.lookahead)
																	) {
																		if (
																			0 ===
																			t
																		)
																			return 1;
																		break;
																	}
																	if (
																		((e.match_length = 0),
																		(r =
																			i._tr_tally(
																				e,
																				0,
																				e
																					.window[
																					e
																						.strstart
																				]
																			)),
																		e.lookahead--,
																		e.strstart++,
																		r &&
																			(b(
																				e,
																				!1
																			),
																			0 ===
																				e
																					.strm
																					.avail_out))
																	)
																		return 1;
																}
																return (
																	(e.insert = 0),
																	4 === t
																		? (b(
																				e,
																				!0
																		  ),
																		  0 ===
																		  e.strm
																				.avail_out
																				? 3
																				: 4)
																		: e.last_lit &&
																		  (b(
																				e,
																				!1
																		  ),
																		  0 ===
																				e
																					.strm
																					.avail_out)
																		? 1
																		: 2
																);
														  })(o, t)
														: 3 === o.strategy
														? (function (e, t) {
																for (
																	var r,
																		n,
																		o,
																		s,
																		a =
																			e.window;
																	;

																) {
																	if (
																		e.lookahead <=
																		l
																	) {
																		if (
																			(_(
																				e
																			),
																			e.lookahead <=
																				l &&
																				0 ===
																					t)
																		)
																			return 1;
																		if (
																			0 ===
																			e.lookahead
																		)
																			break;
																	}
																	if (
																		((e.match_length = 0),
																		e.lookahead >=
																			3 &&
																			0 <
																				e.strstart &&
																			(n =
																				a[
																					(o =
																						e.strstart -
																						1)
																				]) ===
																				a[
																					++o
																				] &&
																			n ===
																				a[
																					++o
																				] &&
																			n ===
																				a[
																					++o
																				])
																	) {
																		s =
																			e.strstart +
																			l;
																		do {} while (
																			n ===
																				a[
																					++o
																				] &&
																			n ===
																				a[
																					++o
																				] &&
																			n ===
																				a[
																					++o
																				] &&
																			n ===
																				a[
																					++o
																				] &&
																			n ===
																				a[
																					++o
																				] &&
																			n ===
																				a[
																					++o
																				] &&
																			n ===
																				a[
																					++o
																				] &&
																			n ===
																				a[
																					++o
																				] &&
																			o <
																				s
																		);
																		(e.match_length =
																			l -
																			(s -
																				o)),
																			e.match_length >
																				e.lookahead &&
																				(e.match_length =
																					e.lookahead);
																	}
																	if (
																		(e.match_length >=
																		3
																			? ((r =
																					i._tr_tally(
																						e,
																						1,
																						e.match_length -
																							3
																					)),
																			  (e.lookahead -=
																					e.match_length),
																			  (e.strstart +=
																					e.match_length),
																			  (e.match_length = 0))
																			: ((r =
																					i._tr_tally(
																						e,
																						0,
																						e
																							.window[
																							e
																								.strstart
																						]
																					)),
																			  e.lookahead--,
																			  e.strstart++),
																		r &&
																			(b(
																				e,
																				!1
																			),
																			0 ===
																				e
																					.strm
																					.avail_out))
																	)
																		return 1;
																}
																return (
																	(e.insert = 0),
																	4 === t
																		? (b(
																				e,
																				!0
																		  ),
																		  0 ===
																		  e.strm
																				.avail_out
																				? 3
																				: 4)
																		: e.last_lit &&
																		  (b(
																				e,
																				!1
																		  ),
																		  0 ===
																				e
																					.strm
																					.avail_out)
																		? 1
																		: 2
																);
														  })(o, t)
														: n[o.level].func(o, t);
												if (
													((3 !== v && 4 !== v) ||
														(o.status = 666),
													1 === v || 3 === v)
												)
													return (
														0 === e.avail_out &&
															(o.last_flush = -1),
														0
													);
												if (
													2 === v &&
													(1 === t
														? i._tr_align(o)
														: 5 !== t &&
														  (i._tr_stored_block(
																o,
																0,
																0,
																!1
														  ),
														  3 === t &&
																(m(o.head),
																0 ===
																	o.lookahead &&
																	((o.strstart = 0),
																	(o.block_start = 0),
																	(o.insert = 0)))),
													g(e),
													0 === e.avail_out)
												)
													return (
														(o.last_flush = -1), 0
													);
											}
											return 4 !== t
												? 0
												: o.wrap <= 0
												? 1
												: (2 === o.wrap
														? (y(o, 255 & e.adler),
														  y(
																o,
																(e.adler >> 8) &
																	255
														  ),
														  y(
																o,
																(e.adler >>
																	16) &
																	255
														  ),
														  y(
																o,
																(e.adler >>
																	24) &
																	255
														  ),
														  y(
																o,
																255 & e.total_in
														  ),
														  y(
																o,
																(e.total_in >>
																	8) &
																	255
														  ),
														  y(
																o,
																(e.total_in >>
																	16) &
																	255
														  ),
														  y(
																o,
																(e.total_in >>
																	24) &
																	255
														  ))
														: (w(o, e.adler >>> 16),
														  w(
																o,
																65535 & e.adler
														  )),
												  g(e),
												  0 < o.wrap &&
														(o.wrap = -o.wrap),
												  0 !== o.pending ? 0 : 1);
										}),
										(r.deflateEnd = function (e) {
											var t;
											return e && e.state
												? 42 !== (t = e.state.status) &&
												  69 !== t &&
												  73 !== t &&
												  91 !== t &&
												  103 !== t &&
												  t !== h &&
												  666 !== t
													? d(e, c)
													: ((e.state = null),
													  t === h ? d(e, -3) : 0)
												: c;
										}),
										(r.deflateSetDictionary = function (
											e,
											t
										) {
											var r,
												n,
												i,
												a,
												u,
												l,
												p,
												h,
												d = t.length;
											if (!e || !e.state) return c;
											if (
												2 ===
													(a = (r = e.state).wrap) ||
												(1 === a && 42 !== r.status) ||
												r.lookahead
											)
												return c;
											for (
												1 === a &&
													(e.adler = s(
														e.adler,
														t,
														d,
														0
													)),
													r.wrap = 0,
													d >= r.w_size &&
														(0 === a &&
															(m(r.head),
															(r.strstart = 0),
															(r.block_start = 0),
															(r.insert = 0)),
														(h = new o.Buf8(
															r.w_size
														)),
														o.arraySet(
															h,
															t,
															d - r.w_size,
															r.w_size,
															0
														),
														(t = h),
														(d = r.w_size)),
													u = e.avail_in,
													l = e.next_in,
													p = e.input,
													e.avail_in = d,
													e.next_in = 0,
													e.input = t,
													_(r);
												r.lookahead >= 3;

											) {
												for (
													n = r.strstart,
														i = r.lookahead - 2;
													(r.ins_h =
														((r.ins_h <<
															r.hash_shift) ^
															r.window[
																n + 3 - 1
															]) &
														r.hash_mask),
														(r.prev[n & r.w_mask] =
															r.head[r.ins_h]),
														(r.head[r.ins_h] = n),
														n++,
														--i;

												);
												(r.strstart = n),
													(r.lookahead = 2),
													_(r);
											}
											return (
												(r.strstart += r.lookahead),
												(r.block_start = r.strstart),
												(r.insert = r.lookahead),
												(r.lookahead = 0),
												(r.match_length =
													r.prev_length =
														2),
												(r.match_available = 0),
												(e.next_in = l),
												(e.input = p),
												(e.avail_in = u),
												(r.wrap = a),
												0
											);
										}),
										(r.deflateInfo =
											"pako deflate (from Nodeca project)");
								},
								{
									"../utils/common": 41,
									"./adler32": 43,
									"./crc32": 45,
									"./messages": 51,
									"./trees": 52,
								},
							],
							47: [
								function (e, t, r) {
									"use strict";
									t.exports = function () {
										(this.text = 0),
											(this.time = 0),
											(this.xflags = 0),
											(this.os = 0),
											(this.extra = null),
											(this.extra_len = 0),
											(this.name = ""),
											(this.comment = ""),
											(this.hcrc = 0),
											(this.done = !1);
									};
								},
								{},
							],
							48: [
								function (e, t, r) {
									"use strict";
									t.exports = function (e, t) {
										var r,
											n,
											o,
											i,
											s,
											a,
											u,
											c,
											l,
											p,
											h,
											d,
											f,
											m,
											g,
											b,
											y,
											w,
											v,
											_,
											x,
											E,
											T,
											O,
											S;
										(r = e.state),
											(n = e.next_in),
											(O = e.input),
											(o = n + (e.avail_in - 5)),
											(i = e.next_out),
											(S = e.output),
											(s = i - (t - e.avail_out)),
											(a = i + (e.avail_out - 257)),
											(u = r.dmax),
											(c = r.wsize),
											(l = r.whave),
											(p = r.wnext),
											(h = r.window),
											(d = r.hold),
											(f = r.bits),
											(m = r.lencode),
											(g = r.distcode),
											(b = (1 << r.lenbits) - 1),
											(y = (1 << r.distbits) - 1);
										e: do {
											f < 15 &&
												((d += O[n++] << f),
												(f += 8),
												(d += O[n++] << f),
												(f += 8)),
												(w = m[d & b]);
											t: for (;;) {
												if (
													((d >>>= v = w >>> 24),
													(f -= v),
													0 == (v = (w >>> 16) & 255))
												)
													S[i++] = 65535 & w;
												else {
													if (!(16 & v)) {
														if (0 == (64 & v)) {
															w =
																m[
																	(65535 &
																		w) +
																		(d &
																			((1 <<
																				v) -
																				1))
																];
															continue t;
														}
														if (32 & v) {
															r.mode = 12;
															break e;
														}
														(e.msg =
															"invalid literal/length code"),
															(r.mode = 30);
														break e;
													}
													(_ = 65535 & w),
														(v &= 15) &&
															(f < v &&
																((d +=
																	O[n++] <<
																	f),
																(f += 8)),
															(_ +=
																d &
																((1 << v) - 1)),
															(d >>>= v),
															(f -= v)),
														f < 15 &&
															((d += O[n++] << f),
															(f += 8),
															(d += O[n++] << f),
															(f += 8)),
														(w = g[d & y]);
													r: for (;;) {
														if (
															((d >>>= v =
																w >>> 24),
															(f -= v),
															!(
																16 &
																(v =
																	(w >>> 16) &
																	255)
															))
														) {
															if (0 == (64 & v)) {
																w =
																	g[
																		(65535 &
																			w) +
																			(d &
																				((1 <<
																					v) -
																					1))
																	];
																continue r;
															}
															(e.msg =
																"invalid distance code"),
																(r.mode = 30);
															break e;
														}
														if (
															((x = 65535 & w),
															f < (v &= 15) &&
																((d +=
																	O[n++] <<
																	f),
																(f += 8) < v &&
																	((d +=
																		O[
																			n++
																		] << f),
																	(f += 8))),
															u <
																(x +=
																	d &
																	((1 << v) -
																		1)))
														) {
															(e.msg =
																"invalid distance too far back"),
																(r.mode = 30);
															break e;
														}
														if (
															((d >>>= v),
															(f -= v),
															(v = i - s) < x)
														) {
															if (
																l <
																	(v =
																		x -
																		v) &&
																r.sane
															) {
																(e.msg =
																	"invalid distance too far back"),
																	(r.mode = 30);
																break e;
															}
															if (
																((T = h),
																(E = 0) === p)
															) {
																if (
																	((E +=
																		c - v),
																	v < _)
																) {
																	for (
																		_ -= v;
																		(S[
																			i++
																		] =
																			h[
																				E++
																			]),
																			--v;

																	);
																	(E = i - x),
																		(T = S);
																}
															} else if (p < v) {
																if (
																	((E +=
																		c +
																		p -
																		v),
																	(v -= p) <
																		_)
																) {
																	for (
																		_ -= v;
																		(S[
																			i++
																		] =
																			h[
																				E++
																			]),
																			--v;

																	);
																	if (
																		((E = 0),
																		p < _)
																	) {
																		for (
																			_ -=
																				v =
																					p;
																			(S[
																				i++
																			] =
																				h[
																					E++
																				]),
																				--v;

																		);
																		(E =
																			i -
																			x),
																			(T =
																				S);
																	}
																}
															} else if (
																((E += p - v),
																v < _)
															) {
																for (
																	_ -= v;
																	(S[i++] =
																		h[E++]),
																		--v;

																);
																(E = i - x),
																	(T = S);
															}
															for (; 2 < _; )
																(S[i++] =
																	T[E++]),
																	(S[i++] =
																		T[E++]),
																	(S[i++] =
																		T[E++]),
																	(_ -= 3);
															_ &&
																((S[i++] =
																	T[E++]),
																1 < _ &&
																	(S[i++] =
																		T[
																			E++
																		]));
														} else {
															for (
																E = i - x;
																(S[i++] =
																	S[E++]),
																	(S[i++] =
																		S[E++]),
																	(S[i++] =
																		S[E++]),
																	2 <
																		(_ -= 3);

															);
															_ &&
																((S[i++] =
																	S[E++]),
																1 < _ &&
																	(S[i++] =
																		S[
																			E++
																		]));
														}
														break;
													}
												}
												break;
											}
										} while (n < o && i < a);
										(n -= _ = f >> 3),
											(d &= (1 << (f -= _ << 3)) - 1),
											(e.next_in = n),
											(e.next_out = i),
											(e.avail_in =
												n < o
													? o - n + 5
													: 5 - (n - o)),
											(e.avail_out =
												i < a
													? a - i + 257
													: 257 - (i - a)),
											(r.hold = d),
											(r.bits = f);
									};
								},
								{},
							],
							49: [
								function (e, t, r) {
									"use strict";
									var n = e("../utils/common"),
										o = e("./adler32"),
										i = e("./crc32"),
										s = e("./inffast"),
										a = e("./inftrees"),
										u = -2;
									function c(e) {
										return (
											((e >>> 24) & 255) +
											((e >>> 8) & 65280) +
											((65280 & e) << 8) +
											((255 & e) << 24)
										);
									}
									function l() {
										(this.mode = 0),
											(this.last = !1),
											(this.wrap = 0),
											(this.havedict = !1),
											(this.flags = 0),
											(this.dmax = 0),
											(this.check = 0),
											(this.total = 0),
											(this.head = null),
											(this.wbits = 0),
											(this.wsize = 0),
											(this.whave = 0),
											(this.wnext = 0),
											(this.window = null),
											(this.hold = 0),
											(this.bits = 0),
											(this.length = 0),
											(this.offset = 0),
											(this.extra = 0),
											(this.lencode = null),
											(this.distcode = null),
											(this.lenbits = 0),
											(this.distbits = 0),
											(this.ncode = 0),
											(this.nlen = 0),
											(this.ndist = 0),
											(this.have = 0),
											(this.next = null),
											(this.lens = new n.Buf16(320)),
											(this.work = new n.Buf16(288)),
											(this.lendyn = null),
											(this.distdyn = null),
											(this.sane = 0),
											(this.back = 0),
											(this.was = 0);
									}
									function p(e) {
										var t;
										return e && e.state
											? ((t = e.state),
											  (e.total_in =
													e.total_out =
													t.total =
														0),
											  (e.msg = ""),
											  t.wrap && (e.adler = 1 & t.wrap),
											  (t.mode = 1),
											  (t.last = 0),
											  (t.havedict = 0),
											  (t.dmax = 32768),
											  (t.head = null),
											  (t.hold = 0),
											  (t.bits = 0),
											  (t.lencode = t.lendyn =
													new n.Buf32(852)),
											  (t.distcode = t.distdyn =
													new n.Buf32(592)),
											  (t.sane = 1),
											  (t.back = -1),
											  0)
											: u;
									}
									function h(e) {
										var t;
										return e && e.state
											? (((t = e.state).wsize = 0),
											  (t.whave = 0),
											  (t.wnext = 0),
											  p(e))
											: u;
									}
									function d(e, t) {
										var r, n;
										return e && e.state
											? ((n = e.state),
											  t < 0
													? ((r = 0), (t = -t))
													: ((r = 1 + (t >> 4)),
													  t < 48 && (t &= 15)),
											  t && (t < 8 || 15 < t)
													? u
													: (null !== n.window &&
															n.wbits !== t &&
															(n.window = null),
													  (n.wrap = r),
													  (n.wbits = t),
													  h(e)))
											: u;
									}
									function f(e, t) {
										var r, n;
										return e
											? ((n = new l()),
											  ((e.state = n).window = null),
											  0 !== (r = d(e, t)) &&
													(e.state = null),
											  r)
											: u;
									}
									var m,
										g,
										b = !0;
									function y(e) {
										if (b) {
											var t;
											for (
												m = new n.Buf32(512),
													g = new n.Buf32(32),
													t = 0;
												t < 144;

											)
												e.lens[t++] = 8;
											for (; t < 256; ) e.lens[t++] = 9;
											for (; t < 280; ) e.lens[t++] = 7;
											for (; t < 288; ) e.lens[t++] = 8;
											for (
												a(
													1,
													e.lens,
													0,
													288,
													m,
													0,
													e.work,
													{ bits: 9 }
												),
													t = 0;
												t < 32;

											)
												e.lens[t++] = 5;
											a(2, e.lens, 0, 32, g, 0, e.work, {
												bits: 5,
											}),
												(b = !1);
										}
										(e.lencode = m),
											(e.lenbits = 9),
											(e.distcode = g),
											(e.distbits = 5);
									}
									function w(e, t, r, o) {
										var i,
											s = e.state;
										return (
											null === s.window &&
												((s.wsize = 1 << s.wbits),
												(s.wnext = 0),
												(s.whave = 0),
												(s.window = new n.Buf8(
													s.wsize
												))),
											o >= s.wsize
												? (n.arraySet(
														s.window,
														t,
														r - s.wsize,
														s.wsize,
														0
												  ),
												  (s.wnext = 0),
												  (s.whave = s.wsize))
												: (o <
														(i =
															s.wsize -
															s.wnext) && (i = o),
												  n.arraySet(
														s.window,
														t,
														r - o,
														i,
														s.wnext
												  ),
												  (o -= i)
														? (n.arraySet(
																s.window,
																t,
																r - o,
																o,
																0
														  ),
														  (s.wnext = o),
														  (s.whave = s.wsize))
														: ((s.wnext += i),
														  s.wnext === s.wsize &&
																(s.wnext = 0),
														  s.whave < s.wsize &&
																(s.whave +=
																	i))),
											0
										);
									}
									(r.inflateReset = h),
										(r.inflateReset2 = d),
										(r.inflateResetKeep = p),
										(r.inflateInit = function (e) {
											return f(e, 15);
										}),
										(r.inflateInit2 = f),
										(r.inflate = function (e, t) {
											var r,
												l,
												p,
												h,
												d,
												f,
												m,
												g,
												b,
												v,
												_,
												x,
												E,
												T,
												O,
												S,
												A,
												P,
												C,
												R,
												I,
												N,
												M,
												k,
												D = 0,
												j = new n.Buf8(4),
												F = [
													16, 17, 18, 0, 8, 7, 9, 6,
													10, 5, 11, 4, 12, 3, 13, 2,
													14, 1, 15,
												];
											if (
												!e ||
												!e.state ||
												!e.output ||
												(!e.input && 0 !== e.avail_in)
											)
												return u;
											12 === (r = e.state).mode &&
												(r.mode = 13),
												(d = e.next_out),
												(p = e.output),
												(m = e.avail_out),
												(h = e.next_in),
												(l = e.input),
												(f = e.avail_in),
												(g = r.hold),
												(b = r.bits),
												(v = f),
												(_ = m),
												(N = 0);
											e: for (;;)
												switch (r.mode) {
													case 1:
														if (0 === r.wrap) {
															r.mode = 13;
															break;
														}
														for (; b < 16; ) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														if (
															2 & r.wrap &&
															35615 === g
														) {
															(j[(r.check = 0)] =
																255 & g),
																(j[1] =
																	(g >>> 8) &
																	255),
																(r.check = i(
																	r.check,
																	j,
																	2,
																	0
																)),
																(b = g = 0),
																(r.mode = 2);
															break;
														}
														if (
															((r.flags = 0),
															r.head &&
																(r.head.done =
																	!1),
															!(1 & r.wrap) ||
																(((255 & g) <<
																	8) +
																	(g >> 8)) %
																	31)
														) {
															(e.msg =
																"incorrect header check"),
																(r.mode = 30);
															break;
														}
														if (8 != (15 & g)) {
															(e.msg =
																"unknown compression method"),
																(r.mode = 30);
															break;
														}
														if (
															((b -= 4),
															(I =
																8 +
																(15 &
																	(g >>>= 4))),
															0 === r.wbits)
														)
															r.wbits = I;
														else if (I > r.wbits) {
															(e.msg =
																"invalid window size"),
																(r.mode = 30);
															break;
														}
														(r.dmax = 1 << I),
															(e.adler = r.check =
																1),
															(r.mode =
																512 & g
																	? 10
																	: 12),
															(b = g = 0);
														break;
													case 2:
														for (; b < 16; ) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														if (
															((r.flags = g),
															8 !=
																(255 & r.flags))
														) {
															(e.msg =
																"unknown compression method"),
																(r.mode = 30);
															break;
														}
														if (57344 & r.flags) {
															(e.msg =
																"unknown header flags set"),
																(r.mode = 30);
															break;
														}
														r.head &&
															(r.head.text =
																(g >> 8) & 1),
															512 & r.flags &&
																((j[0] =
																	255 & g),
																(j[1] =
																	(g >>> 8) &
																	255),
																(r.check = i(
																	r.check,
																	j,
																	2,
																	0
																))),
															(b = g = 0),
															(r.mode = 3);
													case 3:
														for (; b < 32; ) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														r.head &&
															(r.head.time = g),
															512 & r.flags &&
																((j[0] =
																	255 & g),
																(j[1] =
																	(g >>> 8) &
																	255),
																(j[2] =
																	(g >>> 16) &
																	255),
																(j[3] =
																	(g >>> 24) &
																	255),
																(r.check = i(
																	r.check,
																	j,
																	4,
																	0
																))),
															(b = g = 0),
															(r.mode = 4);
													case 4:
														for (; b < 16; ) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														r.head &&
															((r.head.xflags =
																255 & g),
															(r.head.os =
																g >> 8)),
															512 & r.flags &&
																((j[0] =
																	255 & g),
																(j[1] =
																	(g >>> 8) &
																	255),
																(r.check = i(
																	r.check,
																	j,
																	2,
																	0
																))),
															(b = g = 0),
															(r.mode = 5);
													case 5:
														if (1024 & r.flags) {
															for (; b < 16; ) {
																if (0 === f)
																	break e;
																f--,
																	(g +=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															(r.length = g),
																r.head &&
																	(r.head.extra_len =
																		g),
																512 & r.flags &&
																	((j[0] =
																		255 &
																		g),
																	(j[1] =
																		(g >>>
																			8) &
																		255),
																	(r.check =
																		i(
																			r.check,
																			j,
																			2,
																			0
																		))),
																(b = g = 0);
														} else
															r.head &&
																(r.head.extra =
																	null);
														r.mode = 6;
													case 6:
														if (
															1024 & r.flags &&
															(f <
																(x =
																	r.length) &&
																(x = f),
															x &&
																(r.head &&
																	((I =
																		r.head
																			.extra_len -
																		r.length),
																	r.head
																		.extra ||
																		(r.head.extra =
																			new Array(
																				r.head.extra_len
																			)),
																	n.arraySet(
																		r.head
																			.extra,
																		l,
																		h,
																		x,
																		I
																	)),
																512 & r.flags &&
																	(r.check =
																		i(
																			r.check,
																			l,
																			x,
																			h
																		)),
																(f -= x),
																(h += x),
																(r.length -=
																	x)),
															r.length)
														)
															break e;
														(r.length = 0),
															(r.mode = 7);
													case 7:
														if (2048 & r.flags) {
															if (0 === f)
																break e;
															for (
																x = 0;
																(I =
																	l[h + x++]),
																	r.head &&
																		I &&
																		r.length <
																			65536 &&
																		(r.head.name +=
																			String.fromCharCode(
																				I
																			)),
																	I && x < f;

															);
															if (
																(512 &
																	r.flags &&
																	(r.check =
																		i(
																			r.check,
																			l,
																			x,
																			h
																		)),
																(f -= x),
																(h += x),
																I)
															)
																break e;
														} else
															r.head &&
																(r.head.name =
																	null);
														(r.length = 0),
															(r.mode = 8);
													case 8:
														if (4096 & r.flags) {
															if (0 === f)
																break e;
															for (
																x = 0;
																(I =
																	l[h + x++]),
																	r.head &&
																		I &&
																		r.length <
																			65536 &&
																		(r.head.comment +=
																			String.fromCharCode(
																				I
																			)),
																	I && x < f;

															);
															if (
																(512 &
																	r.flags &&
																	(r.check =
																		i(
																			r.check,
																			l,
																			x,
																			h
																		)),
																(f -= x),
																(h += x),
																I)
															)
																break e;
														} else
															r.head &&
																(r.head.comment =
																	null);
														r.mode = 9;
													case 9:
														if (512 & r.flags) {
															for (; b < 16; ) {
																if (0 === f)
																	break e;
																f--,
																	(g +=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															if (
																g !==
																(65535 &
																	r.check)
															) {
																(e.msg =
																	"header crc mismatch"),
																	(r.mode = 30);
																break;
															}
															b = g = 0;
														}
														r.head &&
															((r.head.hcrc =
																(r.flags >> 9) &
																1),
															(r.head.done = !0)),
															(e.adler = r.check =
																0),
															(r.mode = 12);
														break;
													case 10:
														for (; b < 32; ) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														(e.adler = r.check =
															c(g)),
															(b = g = 0),
															(r.mode = 11);
													case 11:
														if (0 === r.havedict)
															return (
																(e.next_out =
																	d),
																(e.avail_out =
																	m),
																(e.next_in = h),
																(e.avail_in =
																	f),
																(r.hold = g),
																(r.bits = b),
																2
															);
														(e.adler = r.check = 1),
															(r.mode = 12);
													case 12:
														if (5 === t || 6 === t)
															break e;
													case 13:
														if (r.last) {
															(g >>>= 7 & b),
																(b -= 7 & b),
																(r.mode = 27);
															break;
														}
														for (; b < 3; ) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														switch (
															((r.last = 1 & g),
															(b -= 1),
															3 & (g >>>= 1))
														) {
															case 0:
																r.mode = 14;
																break;
															case 1:
																if (
																	(y(r),
																	(r.mode = 20),
																	6 !== t)
																)
																	break;
																(g >>>= 2),
																	(b -= 2);
																break e;
															case 2:
																r.mode = 17;
																break;
															case 3:
																(e.msg =
																	"invalid block type"),
																	(r.mode = 30);
														}
														(g >>>= 2), (b -= 2);
														break;
													case 14:
														for (
															g >>>= 7 & b,
																b -= 7 & b;
															b < 32;

														) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														if (
															(65535 & g) !=
															((g >>> 16) ^ 65535)
														) {
															(e.msg =
																"invalid stored block lengths"),
																(r.mode = 30);
															break;
														}
														if (
															((r.length =
																65535 & g),
															(b = g = 0),
															(r.mode = 15),
															6 === t)
														)
															break e;
													case 15:
														r.mode = 16;
													case 16:
														if ((x = r.length)) {
															if (
																(f < x &&
																	(x = f),
																m < x &&
																	(x = m),
																0 === x)
															)
																break e;
															n.arraySet(
																p,
																l,
																h,
																x,
																d
															),
																(f -= x),
																(h += x),
																(m -= x),
																(d += x),
																(r.length -= x);
															break;
														}
														r.mode = 12;
														break;
													case 17:
														for (; b < 14; ) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														if (
															((r.nlen =
																257 + (31 & g)),
															(g >>>= 5),
															(b -= 5),
															(r.ndist =
																1 + (31 & g)),
															(g >>>= 5),
															(b -= 5),
															(r.ncode =
																4 + (15 & g)),
															(g >>>= 4),
															(b -= 4),
															286 < r.nlen ||
																30 < r.ndist)
														) {
															(e.msg =
																"too many length or distance symbols"),
																(r.mode = 30);
															break;
														}
														(r.have = 0),
															(r.mode = 18);
													case 18:
														for (
															;
															r.have < r.ncode;

														) {
															for (; b < 3; ) {
																if (0 === f)
																	break e;
																f--,
																	(g +=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															(r.lens[
																F[r.have++]
															] = 7 & g),
																(g >>>= 3),
																(b -= 3);
														}
														for (; r.have < 19; )
															r.lens[
																F[r.have++]
															] = 0;
														if (
															((r.lencode =
																r.lendyn),
															(r.lenbits = 7),
															(M = {
																bits: r.lenbits,
															}),
															(N = a(
																0,
																r.lens,
																0,
																19,
																r.lencode,
																0,
																r.work,
																M
															)),
															(r.lenbits =
																M.bits),
															N)
														) {
															(e.msg =
																"invalid code lengths set"),
																(r.mode = 30);
															break;
														}
														(r.have = 0),
															(r.mode = 19);
													case 19:
														for (
															;
															r.have <
															r.nlen + r.ndist;

														) {
															for (
																;
																(S =
																	((D =
																		r
																			.lencode[
																			g &
																				((1 <<
																					r.lenbits) -
																					1)
																		]) >>>
																		16) &
																	255),
																	(A =
																		65535 &
																		D),
																	!(
																		(O =
																			D >>>
																			24) <=
																		b
																	);

															) {
																if (0 === f)
																	break e;
																f--,
																	(g +=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															if (A < 16)
																(g >>>= O),
																	(b -= O),
																	(r.lens[
																		r.have++
																	] = A);
															else {
																if (16 === A) {
																	for (
																		k =
																			O +
																			2;
																		b < k;

																	) {
																		if (
																			0 ===
																			f
																		)
																			break e;
																		f--,
																			(g +=
																				l[
																					h++
																				] <<
																				b),
																			(b += 8);
																	}
																	if (
																		((g >>>=
																			O),
																		(b -=
																			O),
																		0 ===
																			r.have)
																	) {
																		(e.msg =
																			"invalid bit length repeat"),
																			(r.mode = 30);
																		break;
																	}
																	(I =
																		r.lens[
																			r.have -
																				1
																		]),
																		(x =
																			3 +
																			(3 &
																				g)),
																		(g >>>= 2),
																		(b -= 2);
																} else if (
																	17 === A
																) {
																	for (
																		k =
																			O +
																			3;
																		b < k;

																	) {
																		if (
																			0 ===
																			f
																		)
																			break e;
																		f--,
																			(g +=
																				l[
																					h++
																				] <<
																				b),
																			(b += 8);
																	}
																	(b -= O),
																		(I = 0),
																		(x =
																			3 +
																			(7 &
																				(g >>>=
																					O))),
																		(g >>>= 3),
																		(b -= 3);
																} else {
																	for (
																		k =
																			O +
																			7;
																		b < k;

																	) {
																		if (
																			0 ===
																			f
																		)
																			break e;
																		f--,
																			(g +=
																				l[
																					h++
																				] <<
																				b),
																			(b += 8);
																	}
																	(b -= O),
																		(I = 0),
																		(x =
																			11 +
																			(127 &
																				(g >>>=
																					O))),
																		(g >>>= 7),
																		(b -= 7);
																}
																if (
																	r.have + x >
																	r.nlen +
																		r.ndist
																) {
																	(e.msg =
																		"invalid bit length repeat"),
																		(r.mode = 30);
																	break;
																}
																for (; x--; )
																	r.lens[
																		r.have++
																	] = I;
															}
														}
														if (30 === r.mode)
															break;
														if (0 === r.lens[256]) {
															(e.msg =
																"invalid code -- missing end-of-block"),
																(r.mode = 30);
															break;
														}
														if (
															((r.lenbits = 9),
															(M = {
																bits: r.lenbits,
															}),
															(N = a(
																1,
																r.lens,
																0,
																r.nlen,
																r.lencode,
																0,
																r.work,
																M
															)),
															(r.lenbits =
																M.bits),
															N)
														) {
															(e.msg =
																"invalid literal/lengths set"),
																(r.mode = 30);
															break;
														}
														if (
															((r.distbits = 6),
															(r.distcode =
																r.distdyn),
															(M = {
																bits: r.distbits,
															}),
															(N = a(
																2,
																r.lens,
																r.nlen,
																r.ndist,
																r.distcode,
																0,
																r.work,
																M
															)),
															(r.distbits =
																M.bits),
															N)
														) {
															(e.msg =
																"invalid distances set"),
																(r.mode = 30);
															break;
														}
														if (
															((r.mode = 20),
															6 === t)
														)
															break e;
													case 20:
														r.mode = 21;
													case 21:
														if (
															6 <= f &&
															258 <= m
														) {
															(e.next_out = d),
																(e.avail_out =
																	m),
																(e.next_in = h),
																(e.avail_in =
																	f),
																(r.hold = g),
																(r.bits = b),
																s(e, _),
																(d =
																	e.next_out),
																(p = e.output),
																(m =
																	e.avail_out),
																(h = e.next_in),
																(l = e.input),
																(f =
																	e.avail_in),
																(g = r.hold),
																(b = r.bits),
																12 === r.mode &&
																	(r.back =
																		-1);
															break;
														}
														for (
															r.back = 0;
															(S =
																((D =
																	r.lencode[
																		g &
																			((1 <<
																				r.lenbits) -
																				1)
																	]) >>>
																	16) &
																255),
																(A = 65535 & D),
																!(
																	(O =
																		D >>>
																		24) <= b
																);

														) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														if (
															S &&
															0 == (240 & S)
														) {
															for (
																P = O,
																	C = S,
																	R = A;
																(S =
																	((D =
																		r
																			.lencode[
																			R +
																				((g &
																					((1 <<
																						(P +
																							C)) -
																						1)) >>
																					P)
																		]) >>>
																		16) &
																	255),
																	(A =
																		65535 &
																		D),
																	!(
																		P +
																			(O =
																				D >>>
																				24) <=
																		b
																	);

															) {
																if (0 === f)
																	break e;
																f--,
																	(g +=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															(g >>>= P),
																(b -= P),
																(r.back += P);
														}
														if (
															((g >>>= O),
															(b -= O),
															(r.back += O),
															(r.length = A),
															0 === S)
														) {
															r.mode = 26;
															break;
														}
														if (32 & S) {
															(r.back = -1),
																(r.mode = 12);
															break;
														}
														if (64 & S) {
															(e.msg =
																"invalid literal/length code"),
																(r.mode = 30);
															break;
														}
														(r.extra = 15 & S),
															(r.mode = 22);
													case 22:
														if (r.extra) {
															for (
																k = r.extra;
																b < k;

															) {
																if (0 === f)
																	break e;
																f--,
																	(g +=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															(r.length +=
																g &
																((1 <<
																	r.extra) -
																	1)),
																(g >>>=
																	r.extra),
																(b -= r.extra),
																(r.back +=
																	r.extra);
														}
														(r.was = r.length),
															(r.mode = 23);
													case 23:
														for (
															;
															(S =
																((D =
																	r.distcode[
																		g &
																			((1 <<
																				r.distbits) -
																				1)
																	]) >>>
																	16) &
																255),
																(A = 65535 & D),
																!(
																	(O =
																		D >>>
																		24) <= b
																);

														) {
															if (0 === f)
																break e;
															f--,
																(g +=
																	l[h++] <<
																	b),
																(b += 8);
														}
														if (0 == (240 & S)) {
															for (
																P = O,
																	C = S,
																	R = A;
																(S =
																	((D =
																		r
																			.distcode[
																			R +
																				((g &
																					((1 <<
																						(P +
																							C)) -
																						1)) >>
																					P)
																		]) >>>
																		16) &
																	255),
																	(A =
																		65535 &
																		D),
																	!(
																		P +
																			(O =
																				D >>>
																				24) <=
																		b
																	);

															) {
																if (0 === f)
																	break e;
																f--,
																	(g +=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															(g >>>= P),
																(b -= P),
																(r.back += P);
														}
														if (
															((g >>>= O),
															(b -= O),
															(r.back += O),
															64 & S)
														) {
															(e.msg =
																"invalid distance code"),
																(r.mode = 30);
															break;
														}
														(r.offset = A),
															(r.extra = 15 & S),
															(r.mode = 24);
													case 24:
														if (r.extra) {
															for (
																k = r.extra;
																b < k;

															) {
																if (0 === f)
																	break e;
																f--,
																	(g +=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															(r.offset +=
																g &
																((1 <<
																	r.extra) -
																	1)),
																(g >>>=
																	r.extra),
																(b -= r.extra),
																(r.back +=
																	r.extra);
														}
														if (r.offset > r.dmax) {
															(e.msg =
																"invalid distance too far back"),
																(r.mode = 30);
															break;
														}
														r.mode = 25;
													case 25:
														if (0 === m) break e;
														if (
															((x = _ - m),
															r.offset > x)
														) {
															if (
																(x =
																	r.offset -
																	x) >
																	r.whave &&
																r.sane
															) {
																(e.msg =
																	"invalid distance too far back"),
																	(r.mode = 30);
																break;
															}
															(E =
																x > r.wnext
																	? ((x -=
																			r.wnext),
																	  r.wsize -
																			x)
																	: r.wnext -
																	  x),
																x > r.length &&
																	(x =
																		r.length),
																(T = r.window);
														} else
															(T = p),
																(E =
																	d -
																	r.offset),
																(x = r.length);
														for (
															m < x && (x = m),
																m -= x,
																r.length -= x;
															(p[d++] = T[E++]),
																--x;

														);
														0 === r.length &&
															(r.mode = 21);
														break;
													case 26:
														if (0 === m) break e;
														(p[d++] = r.length),
															m--,
															(r.mode = 21);
														break;
													case 27:
														if (r.wrap) {
															for (; b < 32; ) {
																if (0 === f)
																	break e;
																f--,
																	(g |=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															if (
																((_ -= m),
																(e.total_out +=
																	_),
																(r.total += _),
																_ &&
																	(e.adler =
																		r.check =
																			r.flags
																				? i(
																						r.check,
																						p,
																						_,
																						d -
																							_
																				  )
																				: o(
																						r.check,
																						p,
																						_,
																						d -
																							_
																				  )),
																(_ = m),
																(r.flags
																	? g
																	: c(g)) !==
																	r.check)
															) {
																(e.msg =
																	"incorrect data check"),
																	(r.mode = 30);
																break;
															}
															b = g = 0;
														}
														r.mode = 28;
													case 28:
														if (r.wrap && r.flags) {
															for (; b < 32; ) {
																if (0 === f)
																	break e;
																f--,
																	(g +=
																		l[
																			h++
																		] << b),
																	(b += 8);
															}
															if (
																g !==
																(4294967295 &
																	r.total)
															) {
																(e.msg =
																	"incorrect length check"),
																	(r.mode = 30);
																break;
															}
															b = g = 0;
														}
														r.mode = 29;
													case 29:
														N = 1;
														break e;
													case 30:
														N = -3;
														break e;
													case 31:
														return -4;
													default:
														return u;
												}
											return (
												(e.next_out = d),
												(e.avail_out = m),
												(e.next_in = h),
												(e.avail_in = f),
												(r.hold = g),
												(r.bits = b),
												(r.wsize ||
													(_ !== e.avail_out &&
														r.mode < 30 &&
														(r.mode < 27 ||
															4 !== t))) &&
												w(
													e,
													e.output,
													e.next_out,
													_ - e.avail_out
												)
													? ((r.mode = 31), -4)
													: ((v -= e.avail_in),
													  (_ -= e.avail_out),
													  (e.total_in += v),
													  (e.total_out += _),
													  (r.total += _),
													  r.wrap &&
															_ &&
															(e.adler = r.check =
																r.flags
																	? i(
																			r.check,
																			p,
																			_,
																			e.next_out -
																				_
																	  )
																	: o(
																			r.check,
																			p,
																			_,
																			e.next_out -
																				_
																	  )),
													  (e.data_type =
															r.bits +
															(r.last ? 64 : 0) +
															(12 === r.mode
																? 128
																: 0) +
															(20 === r.mode ||
															15 === r.mode
																? 256
																: 0)),
													  ((0 == v && 0 === _) ||
															4 === t) &&
															0 === N &&
															(N = -5),
													  N)
											);
										}),
										(r.inflateEnd = function (e) {
											if (!e || !e.state) return u;
											var t = e.state;
											return (
												t.window && (t.window = null),
												(e.state = null),
												0
											);
										}),
										(r.inflateGetHeader = function (e, t) {
											var r;
											return e && e.state
												? 0 == (2 & (r = e.state).wrap)
													? u
													: (((r.head = t).done = !1),
													  0)
												: u;
										}),
										(r.inflateSetDictionary = function (
											e,
											t
										) {
											var r,
												n = t.length;
											return e && e.state
												? 0 !== (r = e.state).wrap &&
												  11 !== r.mode
													? u
													: 11 === r.mode &&
													  o(1, t, n, 0) !== r.check
													? -3
													: w(e, t, n, n)
													? ((r.mode = 31), -4)
													: ((r.havedict = 1), 0)
												: u;
										}),
										(r.inflateInfo =
											"pako inflate (from Nodeca project)");
								},
								{
									"../utils/common": 41,
									"./adler32": 43,
									"./crc32": 45,
									"./inffast": 48,
									"./inftrees": 50,
								},
							],
							50: [
								function (e, t, r) {
									"use strict";
									var n = e("../utils/common"),
										o = [
											3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15,
											17, 19, 23, 27, 31, 35, 43, 51, 59,
											67, 83, 99, 115, 131, 163, 195, 227,
											258, 0, 0,
										],
										i = [
											16, 16, 16, 16, 16, 16, 16, 16, 17,
											17, 17, 17, 18, 18, 18, 18, 19, 19,
											19, 19, 20, 20, 20, 20, 21, 21, 21,
											21, 16, 72, 78,
										],
										s = [
											1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33,
											49, 65, 97, 129, 193, 257, 385, 513,
											769, 1025, 1537, 2049, 3073, 4097,
											6145, 8193, 12289, 16385, 24577, 0,
											0,
										],
										a = [
											16, 16, 16, 16, 17, 17, 18, 18, 19,
											19, 20, 20, 21, 21, 22, 22, 23, 23,
											24, 24, 25, 25, 26, 26, 27, 27, 28,
											28, 29, 29, 64, 64,
										];
									t.exports = function (
										e,
										t,
										r,
										u,
										c,
										l,
										p,
										h
									) {
										var d,
											f,
											m,
											g,
											b,
											y,
											w,
											v,
											_,
											x = h.bits,
											E = 0,
											T = 0,
											O = 0,
											S = 0,
											A = 0,
											P = 0,
											C = 0,
											R = 0,
											I = 0,
											N = 0,
											M = null,
											k = 0,
											D = new n.Buf16(16),
											j = new n.Buf16(16),
											F = null,
											B = 0;
										for (E = 0; E <= 15; E++) D[E] = 0;
										for (T = 0; T < u; T++) D[t[r + T]]++;
										for (
											A = x, S = 15;
											1 <= S && 0 === D[S];
											S--
										);
										if ((S < A && (A = S), 0 === S))
											return (
												(c[l++] = 20971520),
												(c[l++] = 20971520),
												(h.bits = 1),
												0
											);
										for (O = 1; O < S && 0 === D[O]; O++);
										for (
											A < O && (A = O), E = R = 1;
											E <= 15;
											E++
										)
											if (((R <<= 1), (R -= D[E]) < 0))
												return -1;
										if (0 < R && (0 === e || 1 !== S))
											return -1;
										for (j[1] = 0, E = 1; E < 15; E++)
											j[E + 1] = j[E] + D[E];
										for (T = 0; T < u; T++)
											0 !== t[r + T] &&
												(p[j[t[r + T]]++] = T);
										if (
											((y =
												0 === e
													? ((M = F = p), 19)
													: 1 === e
													? ((M = o),
													  (k -= 257),
													  (F = i),
													  (B -= 257),
													  256)
													: ((M = s), (F = a), -1)),
											(E = O),
											(b = l),
											(C = T = N = 0),
											(m = -1),
											(g = (I = 1 << (P = A)) - 1),
											(1 === e && 852 < I) ||
												(2 === e && 592 < I))
										)
											return 1;
										for (;;) {
											for (
												w = E - C,
													_ =
														p[T] < y
															? ((v = 0), p[T])
															: p[T] > y
															? ((v =
																	F[
																		B + p[T]
																	]),
															  M[k + p[T]])
															: ((v = 96), 0),
													d = 1 << (E - C),
													O = f = 1 << P;
												(c[b + (N >> C) + (f -= d)] =
													(w << 24) |
													(v << 16) |
													_ |
													0),
													0 !== f;

											);
											for (d = 1 << (E - 1); N & d; )
												d >>= 1;
											if (
												(0 !== d
													? ((N &= d - 1), (N += d))
													: (N = 0),
												T++,
												0 == --D[E])
											) {
												if (E === S) break;
												E = t[r + p[T]];
											}
											if (A < E && (N & g) !== m) {
												for (
													0 === C && (C = A),
														b += O,
														R = 1 << (P = E - C);
													P + C < S &&
													!((R -= D[P + C]) <= 0);

												)
													P++, (R <<= 1);
												if (
													((I += 1 << P),
													(1 === e && 852 < I) ||
														(2 === e && 592 < I))
												)
													return 1;
												c[(m = N & g)] =
													(A << 24) |
													(P << 16) |
													(b - l) |
													0;
											}
										}
										return (
											0 !== N &&
												(c[b + N] =
													((E - C) << 24) |
													(64 << 16) |
													0),
											(h.bits = A),
											0
										);
									};
								},
								{ "../utils/common": 41 },
							],
							51: [
								function (e, t, r) {
									"use strict";
									t.exports = {
										2: "need dictionary",
										1: "stream end",
										0: "",
										"-1": "file error",
										"-2": "stream error",
										"-3": "data error",
										"-4": "insufficient memory",
										"-5": "buffer error",
										"-6": "incompatible version",
									};
								},
								{},
							],
							52: [
								function (e, t, r) {
									"use strict";
									var n = e("../utils/common");
									function o(e) {
										for (var t = e.length; 0 <= --t; )
											e[t] = 0;
									}
									var i = 256,
										s = 286,
										a = 30,
										u = 15,
										c = [
											0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
											2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
											5, 5, 5, 5, 0,
										],
										l = [
											0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4,
											5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
											10, 11, 11, 12, 12, 13, 13,
										],
										p = [
											0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
											0, 0, 0, 0, 2, 3, 7,
										],
										h = [
											16, 17, 18, 0, 8, 7, 9, 6, 10, 5,
											11, 4, 12, 3, 13, 2, 14, 1, 15,
										],
										d = new Array(576);
									o(d);
									var f = new Array(60);
									o(f);
									var m = new Array(512);
									o(m);
									var g = new Array(256);
									o(g);
									var b = new Array(29);
									o(b);
									var y,
										w,
										v,
										_ = new Array(a);
									function x(e, t, r, n, o) {
										(this.static_tree = e),
											(this.extra_bits = t),
											(this.extra_base = r),
											(this.elems = n),
											(this.max_length = o),
											(this.has_stree = e && e.length);
									}
									function E(e, t) {
										(this.dyn_tree = e),
											(this.max_code = 0),
											(this.stat_desc = t);
									}
									function T(e) {
										return e < 256
											? m[e]
											: m[256 + (e >>> 7)];
									}
									function O(e, t) {
										(e.pending_buf[e.pending++] = 255 & t),
											(e.pending_buf[e.pending++] =
												(t >>> 8) & 255);
									}
									function S(e, t, r) {
										e.bi_valid > 16 - r
											? ((e.bi_buf |=
													(t << e.bi_valid) & 65535),
											  O(e, e.bi_buf),
											  (e.bi_buf =
													t >> (16 - e.bi_valid)),
											  (e.bi_valid += r - 16))
											: ((e.bi_buf |=
													(t << e.bi_valid) & 65535),
											  (e.bi_valid += r));
									}
									function A(e, t, r) {
										S(e, r[2 * t], r[2 * t + 1]);
									}
									function P(e, t) {
										for (
											var r = 0;
											(r |= 1 & e),
												(e >>>= 1),
												(r <<= 1),
												0 < --t;

										);
										return r >>> 1;
									}
									function C(e, t, r) {
										var n,
											o,
											i = new Array(16),
											s = 0;
										for (n = 1; n <= u; n++)
											i[n] = s = (s + r[n - 1]) << 1;
										for (o = 0; o <= t; o++) {
											var a = e[2 * o + 1];
											0 !== a &&
												(e[2 * o] = P(i[a]++, a));
										}
									}
									function R(e) {
										var t;
										for (t = 0; t < s; t++)
											e.dyn_ltree[2 * t] = 0;
										for (t = 0; t < a; t++)
											e.dyn_dtree[2 * t] = 0;
										for (t = 0; t < 19; t++)
											e.bl_tree[2 * t] = 0;
										(e.dyn_ltree[512] = 1),
											(e.opt_len = e.static_len = 0),
											(e.last_lit = e.matches = 0);
									}
									function I(e) {
										8 < e.bi_valid
											? O(e, e.bi_buf)
											: 0 < e.bi_valid &&
											  (e.pending_buf[e.pending++] =
													e.bi_buf),
											(e.bi_buf = 0),
											(e.bi_valid = 0);
									}
									function N(e, t, r, n) {
										var o = 2 * t,
											i = 2 * r;
										return (
											e[o] < e[i] ||
											(e[o] === e[i] && n[t] <= n[r])
										);
									}
									function M(e, t, r) {
										for (
											var n = e.heap[r], o = r << 1;
											o <= e.heap_len &&
											(o < e.heap_len &&
												N(
													t,
													e.heap[o + 1],
													e.heap[o],
													e.depth
												) &&
												o++,
											!N(t, n, e.heap[o], e.depth));

										)
											(e.heap[r] = e.heap[o]),
												(r = o),
												(o <<= 1);
										e.heap[r] = n;
									}
									function k(e, t, r) {
										var n,
											o,
											s,
											a,
											u = 0;
										if (0 !== e.last_lit)
											for (
												;
												(n =
													(e.pending_buf[
														e.d_buf + 2 * u
													] <<
														8) |
													e.pending_buf[
														e.d_buf + 2 * u + 1
													]),
													(o =
														e.pending_buf[
															e.l_buf + u
														]),
													u++,
													0 === n
														? A(e, o, t)
														: (A(
																e,
																(s = g[o]) +
																	i +
																	1,
																t
														  ),
														  0 !== (a = c[s]) &&
																S(
																	e,
																	(o -= b[s]),
																	a
																),
														  A(e, (s = T(--n)), r),
														  0 !== (a = l[s]) &&
																S(
																	e,
																	(n -= _[s]),
																	a
																)),
													u < e.last_lit;

											);
										A(e, 256, t);
									}
									function D(e, t) {
										var r,
											n,
											o,
											i = t.dyn_tree,
											s = t.stat_desc.static_tree,
											a = t.stat_desc.has_stree,
											c = t.stat_desc.elems,
											l = -1;
										for (
											e.heap_len = 0,
												e.heap_max = 573,
												r = 0;
											r < c;
											r++
										)
											0 !== i[2 * r]
												? ((e.heap[++e.heap_len] = l =
														r),
												  (e.depth[r] = 0))
												: (i[2 * r + 1] = 0);
										for (; e.heap_len < 2; )
											(i[
												2 *
													(o = e.heap[++e.heap_len] =
														l < 2 ? ++l : 0)
											] = 1),
												(e.depth[o] = 0),
												e.opt_len--,
												a &&
													(e.static_len -=
														s[2 * o + 1]);
										for (
											t.max_code = l, r = e.heap_len >> 1;
											1 <= r;
											r--
										)
											M(e, i, r);
										for (
											o = c;
											(r = e.heap[1]),
												(e.heap[1] =
													e.heap[e.heap_len--]),
												M(e, i, 1),
												(n = e.heap[1]),
												(e.heap[--e.heap_max] = r),
												(e.heap[--e.heap_max] = n),
												(i[2 * o] =
													i[2 * r] + i[2 * n]),
												(e.depth[o] =
													(e.depth[r] >= e.depth[n]
														? e.depth[r]
														: e.depth[n]) + 1),
												(i[2 * r + 1] = i[2 * n + 1] =
													o),
												(e.heap[1] = o++),
												M(e, i, 1),
												2 <= e.heap_len;

										);
										(e.heap[--e.heap_max] = e.heap[1]),
											(function (e, t) {
												var r,
													n,
													o,
													i,
													s,
													a,
													c = t.dyn_tree,
													l = t.max_code,
													p = t.stat_desc.static_tree,
													h = t.stat_desc.has_stree,
													d = t.stat_desc.extra_bits,
													f = t.stat_desc.extra_base,
													m = t.stat_desc.max_length,
													g = 0;
												for (i = 0; i <= u; i++)
													e.bl_count[i] = 0;
												for (
													c[
														2 * e.heap[e.heap_max] +
															1
													] = 0,
														r = e.heap_max + 1;
													r < 573;
													r++
												)
													m <
														(i =
															c[
																2 *
																	c[
																		2 *
																			(n =
																				e
																					.heap[
																					r
																				]) +
																			1
																	] +
																	1
															] + 1) &&
														((i = m), g++),
														(c[2 * n + 1] = i),
														l < n ||
															(e.bl_count[i]++,
															(s = 0),
															f <= n &&
																(s = d[n - f]),
															(a = c[2 * n]),
															(e.opt_len +=
																a * (i + s)),
															h &&
																(e.static_len +=
																	a *
																	(p[
																		2 * n +
																			1
																	] +
																		s)));
												if (0 !== g) {
													do {
														for (
															i = m - 1;
															0 === e.bl_count[i];

														)
															i--;
														e.bl_count[i]--,
															(e.bl_count[
																i + 1
															] += 2),
															e.bl_count[m]--,
															(g -= 2);
													} while (0 < g);
													for (i = m; 0 !== i; i--)
														for (
															n = e.bl_count[i];
															0 !== n;

														)
															l <
																(o =
																	e.heap[
																		--r
																	]) ||
																(c[
																	2 * o + 1
																] !== i &&
																	((e.opt_len +=
																		(i -
																			c[
																				2 *
																					o +
																					1
																			]) *
																		c[
																			2 *
																				o
																		]),
																	(c[
																		2 * o +
																			1
																	] = i)),
																n--);
												}
											})(e, t),
											C(i, l, e.bl_count);
									}
									function j(e, t, r) {
										var n,
											o,
											i = -1,
											s = t[1],
											a = 0,
											u = 7,
											c = 4;
										for (
											0 === s && ((u = 138), (c = 3)),
												t[2 * (r + 1) + 1] = 65535,
												n = 0;
											n <= r;
											n++
										)
											(o = s),
												(s = t[2 * (n + 1) + 1]),
												(++a < u && o === s) ||
													(a < c
														? (e.bl_tree[2 * o] +=
																a)
														: 0 !== o
														? (o !== i &&
																e.bl_tree[
																	2 * o
																]++,
														  e.bl_tree[32]++)
														: a <= 10
														? e.bl_tree[34]++
														: e.bl_tree[36]++,
													(i = o),
													(c =
														(a = 0) === s
															? ((u = 138), 3)
															: o === s
															? ((u = 6), 3)
															: ((u = 7), 4)));
									}
									function F(e, t, r) {
										var n,
											o,
											i = -1,
											s = t[1],
											a = 0,
											u = 7,
											c = 4;
										for (
											0 === s && ((u = 138), (c = 3)),
												n = 0;
											n <= r;
											n++
										)
											if (
												((o = s),
												(s = t[2 * (n + 1) + 1]),
												!(++a < u && o === s))
											) {
												if (a < c)
													for (
														;
														A(e, o, e.bl_tree),
															0 != --a;

													);
												else
													0 !== o
														? (o !== i &&
																(A(
																	e,
																	o,
																	e.bl_tree
																),
																a--),
														  A(e, 16, e.bl_tree),
														  S(e, a - 3, 2))
														: a <= 10
														? (A(e, 17, e.bl_tree),
														  S(e, a - 3, 3))
														: (A(e, 18, e.bl_tree),
														  S(e, a - 11, 7));
												(i = o),
													(c =
														(a = 0) === s
															? ((u = 138), 3)
															: o === s
															? ((u = 6), 3)
															: ((u = 7), 4));
											}
									}
									o(_);
									var B = !1;
									function L(e, t, r, o) {
										S(e, 0 + (o ? 1 : 0), 3),
											(function (e, t, r, o) {
												I(e),
													O(e, r),
													O(e, ~r),
													n.arraySet(
														e.pending_buf,
														e.window,
														t,
														r,
														e.pending
													),
													(e.pending += r);
											})(e, t, r);
									}
									(r._tr_init = function (e) {
										B ||
											((function () {
												var e,
													t,
													r,
													n,
													o,
													i = new Array(16);
												for (n = r = 0; n < 28; n++)
													for (
														b[n] = r, e = 0;
														e < 1 << c[n];
														e++
													)
														g[r++] = n;
												for (
													g[r - 1] = n, n = o = 0;
													n < 16;
													n++
												)
													for (
														_[n] = o, e = 0;
														e < 1 << l[n];
														e++
													)
														m[o++] = n;
												for (o >>= 7; n < a; n++)
													for (
														_[n] = o << 7, e = 0;
														e < 1 << (l[n] - 7);
														e++
													)
														m[256 + o++] = n;
												for (t = 0; t <= u; t++)
													i[t] = 0;
												for (e = 0; e <= 143; )
													(d[2 * e + 1] = 8),
														e++,
														i[8]++;
												for (; e <= 255; )
													(d[2 * e + 1] = 9),
														e++,
														i[9]++;
												for (; e <= 279; )
													(d[2 * e + 1] = 7),
														e++,
														i[7]++;
												for (; e <= 287; )
													(d[2 * e + 1] = 8),
														e++,
														i[8]++;
												for (
													C(d, 287, i), e = 0;
													e < a;
													e++
												)
													(f[2 * e + 1] = 5),
														(f[2 * e] = P(e, 5));
												(y = new x(d, c, 257, s, u)),
													(w = new x(f, l, 0, a, u)),
													(v = new x(
														new Array(0),
														p,
														0,
														19,
														7
													));
											})(),
											(B = !0)),
											(e.l_desc = new E(e.dyn_ltree, y)),
											(e.d_desc = new E(e.dyn_dtree, w)),
											(e.bl_desc = new E(e.bl_tree, v)),
											(e.bi_buf = 0),
											(e.bi_valid = 0),
											R(e);
									}),
										(r._tr_stored_block = L),
										(r._tr_flush_block = function (
											e,
											t,
											r,
											n
										) {
											var o,
												s,
												a = 0;
											0 < e.level
												? (2 === e.strm.data_type &&
														(e.strm.data_type =
															(function (e) {
																var t,
																	r = 4093624447;
																for (
																	t = 0;
																	t <= 31;
																	t++,
																		r >>>= 1
																)
																	if (
																		1 & r &&
																		0 !==
																			e
																				.dyn_ltree[
																				2 *
																					t
																			]
																	)
																		return 0;
																if (
																	0 !==
																		e
																			.dyn_ltree[18] ||
																	0 !==
																		e
																			.dyn_ltree[20] ||
																	0 !==
																		e
																			.dyn_ltree[26]
																)
																	return 1;
																for (
																	t = 32;
																	t < i;
																	t++
																)
																	if (
																		0 !==
																		e
																			.dyn_ltree[
																			2 *
																				t
																		]
																	)
																		return 1;
																return 0;
															})(e)),
												  D(e, e.l_desc),
												  D(e, e.d_desc),
												  (a = (function (e) {
														var t;
														for (
															j(
																e,
																e.dyn_ltree,
																e.l_desc
																	.max_code
															),
																j(
																	e,
																	e.dyn_dtree,
																	e.d_desc
																		.max_code
																),
																D(e, e.bl_desc),
																t = 18;
															3 <= t &&
															0 ===
																e.bl_tree[
																	2 * h[t] + 1
																];
															t--
														);
														return (
															(e.opt_len +=
																3 * (t + 1) +
																5 +
																5 +
																4),
															t
														);
												  })(e)),
												  (o =
														(e.opt_len + 3 + 7) >>>
														3),
												  (s =
														(e.static_len +
															3 +
															7) >>>
														3) <= o && (o = s))
												: (o = s = r + 5),
												r + 4 <= o && -1 !== t
													? L(e, t, r, n)
													: 4 === e.strategy ||
													  s === o
													? (S(e, 2 + (n ? 1 : 0), 3),
													  k(e, d, f))
													: (S(e, 4 + (n ? 1 : 0), 3),
													  (function (e, t, r, n) {
															var o;
															for (
																S(
																	e,
																	t - 257,
																	5
																),
																	S(
																		e,
																		r - 1,
																		5
																	),
																	S(
																		e,
																		n - 4,
																		4
																	),
																	o = 0;
																o < n;
																o++
															)
																S(
																	e,
																	e.bl_tree[
																		2 *
																			h[
																				o
																			] +
																			1
																	],
																	3
																);
															F(
																e,
																e.dyn_ltree,
																t - 1
															),
																F(
																	e,
																	e.dyn_dtree,
																	r - 1
																);
													  })(
															e,
															e.l_desc.max_code +
																1,
															e.d_desc.max_code +
																1,
															a + 1
													  ),
													  k(
															e,
															e.dyn_ltree,
															e.dyn_dtree
													  )),
												R(e),
												n && I(e);
										}),
										(r._tr_tally = function (e, t, r) {
											return (
												(e.pending_buf[
													e.d_buf + 2 * e.last_lit
												] = (t >>> 8) & 255),
												(e.pending_buf[
													e.d_buf + 2 * e.last_lit + 1
												] = 255 & t),
												(e.pending_buf[
													e.l_buf + e.last_lit
												] = 255 & r),
												e.last_lit++,
												0 === t
													? e.dyn_ltree[2 * r]++
													: (e.matches++,
													  t--,
													  e.dyn_ltree[
															2 * (g[r] + i + 1)
													  ]++,
													  e.dyn_dtree[2 * T(t)]++),
												e.last_lit === e.lit_bufsize - 1
											);
										}),
										(r._tr_align = function (e) {
											S(e, 2, 3),
												A(e, 256, d),
												(function (e) {
													16 === e.bi_valid
														? (O(e, e.bi_buf),
														  (e.bi_buf = 0),
														  (e.bi_valid = 0))
														: 8 <= e.bi_valid &&
														  ((e.pending_buf[
																e.pending++
														  ] = 255 & e.bi_buf),
														  (e.bi_buf >>= 8),
														  (e.bi_valid -= 8));
												})(e);
										});
								},
								{ "../utils/common": 41 },
							],
							53: [
								function (e, t, r) {
									"use strict";
									t.exports = function () {
										(this.input = null),
											(this.next_in = 0),
											(this.avail_in = 0),
											(this.total_in = 0),
											(this.output = null),
											(this.next_out = 0),
											(this.avail_out = 0),
											(this.total_out = 0),
											(this.msg = ""),
											(this.state = null),
											(this.data_type = 2),
											(this.adler = 0);
									};
								},
								{},
							],
							54: [
								function (e, t, r) {
									"use strict";
									t.exports =
										"function" == typeof setImmediate
											? setImmediate
											: function () {
													var e = [].slice.apply(
														arguments
													);
													e.splice(1, 0, 0),
														setTimeout.apply(
															null,
															e
														);
											  };
								},
								{},
							],
						},
						{},
						[10]
					)(10);
				},
				4155: (e) => {
					var t,
						r,
						n = (e.exports = {});
					function o() {
						throw new Error("setTimeout has not been defined");
					}
					function i() {
						throw new Error("clearTimeout has not been defined");
					}
					function s(e) {
						if (t === setTimeout) return setTimeout(e, 0);
						if ((t === o || !t) && setTimeout)
							return (t = setTimeout), setTimeout(e, 0);
						try {
							return t(e, 0);
						} catch (r) {
							try {
								return t.call(null, e, 0);
							} catch (r) {
								return t.call(this, e, 0);
							}
						}
					}
					!(function () {
						try {
							t =
								"function" == typeof setTimeout
									? setTimeout
									: o;
						} catch (e) {
							t = o;
						}
						try {
							r =
								"function" == typeof clearTimeout
									? clearTimeout
									: i;
						} catch (e) {
							r = i;
						}
					})();
					var a,
						u = [],
						c = !1,
						l = -1;
					function p() {
						c &&
							a &&
							((c = !1),
							a.length ? (u = a.concat(u)) : (l = -1),
							u.length && h());
					}
					function h() {
						if (!c) {
							var e = s(p);
							c = !0;
							for (var t = u.length; t; ) {
								for (a = u, u = []; ++l < t; ) a && a[l].run();
								(l = -1), (t = u.length);
							}
							(a = null),
								(c = !1),
								(function (e) {
									if (r === clearTimeout)
										return clearTimeout(e);
									if ((r === i || !r) && clearTimeout)
										return (
											(r = clearTimeout), clearTimeout(e)
										);
									try {
										r(e);
									} catch (t) {
										try {
											return r.call(null, e);
										} catch (t) {
											return r.call(this, e);
										}
									}
								})(e);
						}
					}
					function d(e, t) {
						(this.fun = e), (this.array = t);
					}
					function f() {}
					(n.nextTick = function (e) {
						var t = new Array(arguments.length - 1);
						if (arguments.length > 1)
							for (var r = 1; r < arguments.length; r++)
								t[r - 1] = arguments[r];
						u.push(new d(e, t)), 1 !== u.length || c || s(h);
					}),
						(d.prototype.run = function () {
							this.fun.apply(null, this.array);
						}),
						(n.title = "browser"),
						(n.browser = !0),
						(n.env = {}),
						(n.argv = []),
						(n.version = ""),
						(n.versions = {}),
						(n.on = f),
						(n.addListener = f),
						(n.once = f),
						(n.off = f),
						(n.removeListener = f),
						(n.removeAllListeners = f),
						(n.emit = f),
						(n.prependListener = f),
						(n.prependOnceListener = f),
						(n.listeners = function (e) {
							return [];
						}),
						(n.binding = function (e) {
							throw new Error("process.binding is not supported");
						}),
						(n.cwd = function () {
							return "/";
						}),
						(n.chdir = function (e) {
							throw new Error("process.chdir is not supported");
						}),
						(n.umask = function () {
							return 0;
						});
				},
				9509: (e, t, r) => {
					var n = r(8764),
						o = n.Buffer;
					function i(e, t) {
						for (var r in e) t[r] = e[r];
					}
					function s(e, t, r) {
						return o(e, t, r);
					}
					o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
						? (e.exports = n)
						: (i(n, t), (t.Buffer = s)),
						i(o, s),
						(s.from = function (e, t, r) {
							if ("number" == typeof e)
								throw new TypeError(
									"Argument must not be a number"
								);
							return o(e, t, r);
						}),
						(s.alloc = function (e, t, r) {
							if ("number" != typeof e)
								throw new TypeError(
									"Argument must be a number"
								);
							var n = o(e);
							return (
								void 0 !== t
									? "string" == typeof r
										? n.fill(t, r)
										: n.fill(t)
									: n.fill(0),
								n
							);
						}),
						(s.allocUnsafe = function (e) {
							if ("number" != typeof e)
								throw new TypeError(
									"Argument must be a number"
								);
							return o(e);
						}),
						(s.allocUnsafeSlow = function (e) {
							if ("number" != typeof e)
								throw new TypeError(
									"Argument must be a number"
								);
							return n.SlowBuffer(e);
						});
				},
				6099: (e, t, r) => {
					!(function (e) {
						(e.parser = function (e, t) {
							return new o(e, t);
						}),
							(e.SAXParser = o),
							(e.SAXStream = s),
							(e.createStream = function (e, t) {
								return new s(e, t);
							}),
							(e.MAX_BUFFER_LENGTH = 65536);
						var t,
							n = [
								"comment",
								"sgmlDecl",
								"textNode",
								"tagName",
								"doctype",
								"procInstName",
								"procInstBody",
								"entity",
								"attribName",
								"attribValue",
								"cdata",
								"script",
							];
						function o(t, r) {
							if (!(this instanceof o)) return new o(t, r);
							var i = this;
							!(function (e) {
								for (var t = 0, r = n.length; t < r; t++)
									e[n[t]] = "";
							})(i),
								(i.q = i.c = ""),
								(i.bufferCheckPosition = e.MAX_BUFFER_LENGTH),
								(i.opt = r || {}),
								(i.opt.lowercase =
									i.opt.lowercase || i.opt.lowercasetags),
								(i.looseCase = i.opt.lowercase
									? "toLowerCase"
									: "toUpperCase"),
								(i.tags = []),
								(i.closed = i.closedRoot = i.sawRoot = !1),
								(i.tag = i.error = null),
								(i.strict = !!t),
								(i.noscript = !(!t && !i.opt.noscript)),
								(i.state = x.BEGIN),
								(i.strictEntities = i.opt.strictEntities),
								(i.ENTITIES = i.strictEntities
									? Object.create(e.XML_ENTITIES)
									: Object.create(e.ENTITIES)),
								(i.attribList = []),
								i.opt.xmlns && (i.ns = Object.create(c)),
								(i.trackPosition = !1 !== i.opt.position),
								i.trackPosition &&
									(i.position = i.line = i.column = 0),
								T(i, "onready");
						}
						(e.EVENTS = [
							"text",
							"processinginstruction",
							"sgmldeclaration",
							"doctype",
							"comment",
							"opentagstart",
							"attribute",
							"opentag",
							"closetag",
							"opencdata",
							"cdata",
							"closecdata",
							"error",
							"end",
							"ready",
							"script",
							"opennamespace",
							"closenamespace",
						]),
							Object.create ||
								(Object.create = function (e) {
									function t() {}
									return (t.prototype = e), new t();
								}),
							Object.keys ||
								(Object.keys = function (e) {
									var t = [];
									for (var r in e)
										e.hasOwnProperty(r) && t.push(r);
									return t;
								}),
							(o.prototype = {
								end: function () {
									C(this);
								},
								write: function (t) {
									var r = this;
									if (this.error) throw this.error;
									if (r.closed)
										return P(
											r,
											"Cannot write after close. Assign an onready handler."
										);
									if (null === t) return C(r);
									"object" == typeof t && (t = t.toString());
									for (
										var o = 0, i = "";
										(i = B(t, o++)), (r.c = i), i;

									)
										switch (
											(r.trackPosition &&
												(r.position++,
												"\n" === i
													? (r.line++, (r.column = 0))
													: r.column++),
											r.state)
										) {
											case x.BEGIN:
												if (
													((r.state =
														x.BEGIN_WHITESPACE),
													"\ufeff" === i)
												)
													continue;
												F(r, i);
												continue;
											case x.BEGIN_WHITESPACE:
												F(r, i);
												continue;
											case x.TEXT:
												if (
													r.sawRoot &&
													!r.closedRoot
												) {
													for (
														var s = o - 1;
														i &&
														"<" !== i &&
														"&" !== i;

													)
														(i = B(t, o++)) &&
															r.trackPosition &&
															(r.position++,
															"\n" === i
																? (r.line++,
																  (r.column = 0))
																: r.column++);
													r.textNode += t.substring(
														s,
														o - 1
													);
												}
												"<" !== i ||
												(r.sawRoot &&
													r.closedRoot &&
													!r.strict)
													? (f(i) ||
															(r.sawRoot &&
																!r.closedRoot) ||
															R(
																r,
																"Text data outside of root node."
															),
													  "&" === i
															? (r.state =
																	x.TEXT_ENTITY)
															: (r.textNode += i))
													: ((r.state = x.OPEN_WAKA),
													  (r.startTagPosition =
															r.position));
												continue;
											case x.SCRIPT:
												"<" === i
													? (r.state =
															x.SCRIPT_ENDING)
													: (r.script += i);
												continue;
											case x.SCRIPT_ENDING:
												"/" === i
													? (r.state = x.CLOSE_TAG)
													: ((r.script += "<" + i),
													  (r.state = x.SCRIPT));
												continue;
											case x.OPEN_WAKA:
												if ("!" === i)
													(r.state = x.SGML_DECL),
														(r.sgmlDecl = "");
												else if (f(i));
												else if (b(l, i))
													(r.state = x.OPEN_TAG),
														(r.tagName = i);
												else if ("/" === i)
													(r.state = x.CLOSE_TAG),
														(r.tagName = "");
												else if ("?" === i)
													(r.state = x.PROC_INST),
														(r.procInstName =
															r.procInstBody =
																"");
												else {
													if (
														(R(r, "Unencoded <"),
														r.startTagPosition + 1 <
															r.position)
													) {
														var a =
															r.position -
															r.startTagPosition;
														i =
															new Array(a).join(
																" "
															) + i;
													}
													(r.textNode += "<" + i),
														(r.state = x.TEXT);
												}
												continue;
											case x.SGML_DECL:
												"[CDATA[" ===
												(r.sgmlDecl + i).toUpperCase()
													? (O(r, "onopencdata"),
													  (r.state = x.CDATA),
													  (r.sgmlDecl = ""),
													  (r.cdata = ""))
													: r.sgmlDecl + i === "--"
													? ((r.state = x.COMMENT),
													  (r.comment = ""),
													  (r.sgmlDecl = ""))
													: "DOCTYPE" ===
													  (
															r.sgmlDecl + i
													  ).toUpperCase()
													? ((r.state = x.DOCTYPE),
													  (r.doctype ||
															r.sawRoot) &&
															R(
																r,
																"Inappropriately located doctype declaration"
															),
													  (r.doctype = ""),
													  (r.sgmlDecl = ""))
													: ">" === i
													? (O(
															r,
															"onsgmldeclaration",
															r.sgmlDecl
													  ),
													  (r.sgmlDecl = ""),
													  (r.state = x.TEXT))
													: m(i)
													? ((r.state =
															x.SGML_DECL_QUOTED),
													  (r.sgmlDecl += i))
													: (r.sgmlDecl += i);
												continue;
											case x.SGML_DECL_QUOTED:
												i === r.q &&
													((r.state = x.SGML_DECL),
													(r.q = "")),
													(r.sgmlDecl += i);
												continue;
											case x.DOCTYPE:
												">" === i
													? ((r.state = x.TEXT),
													  O(
															r,
															"ondoctype",
															r.doctype
													  ),
													  (r.doctype = !0))
													: ((r.doctype += i),
													  "[" === i
															? (r.state =
																	x.DOCTYPE_DTD)
															: m(i) &&
															  ((r.state =
																	x.DOCTYPE_QUOTED),
															  (r.q = i)));
												continue;
											case x.DOCTYPE_QUOTED:
												(r.doctype += i),
													i === r.q &&
														((r.q = ""),
														(r.state = x.DOCTYPE));
												continue;
											case x.DOCTYPE_DTD:
												(r.doctype += i),
													"]" === i
														? (r.state = x.DOCTYPE)
														: m(i) &&
														  ((r.state =
																x.DOCTYPE_DTD_QUOTED),
														  (r.q = i));
												continue;
											case x.DOCTYPE_DTD_QUOTED:
												(r.doctype += i),
													i === r.q &&
														((r.state =
															x.DOCTYPE_DTD),
														(r.q = ""));
												continue;
											case x.COMMENT:
												"-" === i
													? (r.state =
															x.COMMENT_ENDING)
													: (r.comment += i);
												continue;
											case x.COMMENT_ENDING:
												"-" === i
													? ((r.state =
															x.COMMENT_ENDED),
													  (r.comment = A(
															r.opt,
															r.comment
													  )),
													  r.comment &&
															O(
																r,
																"oncomment",
																r.comment
															),
													  (r.comment = ""))
													: ((r.comment += "-" + i),
													  (r.state = x.COMMENT));
												continue;
											case x.COMMENT_ENDED:
												">" !== i
													? (R(
															r,
															"Malformed comment"
													  ),
													  (r.comment += "--" + i),
													  (r.state = x.COMMENT))
													: (r.state = x.TEXT);
												continue;
											case x.CDATA:
												"]" === i
													? (r.state = x.CDATA_ENDING)
													: (r.cdata += i);
												continue;
											case x.CDATA_ENDING:
												"]" === i
													? (r.state =
															x.CDATA_ENDING_2)
													: ((r.cdata += "]" + i),
													  (r.state = x.CDATA));
												continue;
											case x.CDATA_ENDING_2:
												">" === i
													? (r.cdata &&
															O(
																r,
																"oncdata",
																r.cdata
															),
													  O(r, "onclosecdata"),
													  (r.cdata = ""),
													  (r.state = x.TEXT))
													: "]" === i
													? (r.cdata += "]")
													: ((r.cdata += "]]" + i),
													  (r.state = x.CDATA));
												continue;
											case x.PROC_INST:
												"?" === i
													? (r.state =
															x.PROC_INST_ENDING)
													: f(i)
													? (r.state =
															x.PROC_INST_BODY)
													: (r.procInstName += i);
												continue;
											case x.PROC_INST_BODY:
												if (!r.procInstBody && f(i))
													continue;
												"?" === i
													? (r.state =
															x.PROC_INST_ENDING)
													: (r.procInstBody += i);
												continue;
											case x.PROC_INST_ENDING:
												">" === i
													? (O(
															r,
															"onprocessinginstruction",
															{
																name: r.procInstName,
																body: r.procInstBody,
															}
													  ),
													  (r.procInstName =
															r.procInstBody =
																""),
													  (r.state = x.TEXT))
													: ((r.procInstBody +=
															"?" + i),
													  (r.state =
															x.PROC_INST_BODY));
												continue;
											case x.OPEN_TAG:
												b(p, i)
													? (r.tagName += i)
													: (I(r),
													  ">" === i
															? k(r)
															: "/" === i
															? (r.state =
																	x.OPEN_TAG_SLASH)
															: (f(i) ||
																	R(
																		r,
																		"Invalid character in tag name"
																	),
															  (r.state =
																	x.ATTRIB)));
												continue;
											case x.OPEN_TAG_SLASH:
												">" === i
													? (k(r, !0), D(r))
													: (R(
															r,
															"Forward-slash in opening tag not followed by >"
													  ),
													  (r.state = x.ATTRIB));
												continue;
											case x.ATTRIB:
												if (f(i)) continue;
												">" === i
													? k(r)
													: "/" === i
													? (r.state =
															x.OPEN_TAG_SLASH)
													: b(l, i)
													? ((r.attribName = i),
													  (r.attribValue = ""),
													  (r.state = x.ATTRIB_NAME))
													: R(
															r,
															"Invalid attribute name"
													  );
												continue;
											case x.ATTRIB_NAME:
												"=" === i
													? (r.state = x.ATTRIB_VALUE)
													: ">" === i
													? (R(
															r,
															"Attribute without value"
													  ),
													  (r.attribValue =
															r.attribName),
													  M(r),
													  k(r))
													: f(i)
													? (r.state =
															x.ATTRIB_NAME_SAW_WHITE)
													: b(p, i)
													? (r.attribName += i)
													: R(
															r,
															"Invalid attribute name"
													  );
												continue;
											case x.ATTRIB_NAME_SAW_WHITE:
												if ("=" === i)
													r.state = x.ATTRIB_VALUE;
												else {
													if (f(i)) continue;
													R(
														r,
														"Attribute without value"
													),
														(r.tag.attributes[
															r.attribName
														] = ""),
														(r.attribValue = ""),
														O(r, "onattribute", {
															name: r.attribName,
															value: "",
														}),
														(r.attribName = ""),
														">" === i
															? k(r)
															: b(l, i)
															? ((r.attribName =
																	i),
															  (r.state =
																	x.ATTRIB_NAME))
															: (R(
																	r,
																	"Invalid attribute name"
															  ),
															  (r.state =
																	x.ATTRIB));
												}
												continue;
											case x.ATTRIB_VALUE:
												if (f(i)) continue;
												m(i)
													? ((r.q = i),
													  (r.state =
															x.ATTRIB_VALUE_QUOTED))
													: (R(
															r,
															"Unquoted attribute value"
													  ),
													  (r.state =
															x.ATTRIB_VALUE_UNQUOTED),
													  (r.attribValue = i));
												continue;
											case x.ATTRIB_VALUE_QUOTED:
												if (i !== r.q) {
													"&" === i
														? (r.state =
																x.ATTRIB_VALUE_ENTITY_Q)
														: (r.attribValue += i);
													continue;
												}
												M(r),
													(r.q = ""),
													(r.state =
														x.ATTRIB_VALUE_CLOSED);
												continue;
											case x.ATTRIB_VALUE_CLOSED:
												f(i)
													? (r.state = x.ATTRIB)
													: ">" === i
													? k(r)
													: "/" === i
													? (r.state =
															x.OPEN_TAG_SLASH)
													: b(l, i)
													? (R(
															r,
															"No whitespace between attributes"
													  ),
													  (r.attribName = i),
													  (r.attribValue = ""),
													  (r.state = x.ATTRIB_NAME))
													: R(
															r,
															"Invalid attribute name"
													  );
												continue;
											case x.ATTRIB_VALUE_UNQUOTED:
												if (!g(i)) {
													"&" === i
														? (r.state =
																x.ATTRIB_VALUE_ENTITY_U)
														: (r.attribValue += i);
													continue;
												}
												M(r),
													">" === i
														? k(r)
														: (r.state = x.ATTRIB);
												continue;
											case x.CLOSE_TAG:
												if (r.tagName)
													">" === i
														? D(r)
														: b(p, i)
														? (r.tagName += i)
														: r.script
														? ((r.script +=
																"</" +
																r.tagName),
														  (r.tagName = ""),
														  (r.state = x.SCRIPT))
														: (f(i) ||
																R(
																	r,
																	"Invalid tagname in closing tag"
																),
														  (r.state =
																x.CLOSE_TAG_SAW_WHITE));
												else {
													if (f(i)) continue;
													y(l, i)
														? r.script
															? ((r.script +=
																	"</" + i),
															  (r.state =
																	x.SCRIPT))
															: R(
																	r,
																	"Invalid tagname in closing tag."
															  )
														: (r.tagName = i);
												}
												continue;
											case x.CLOSE_TAG_SAW_WHITE:
												if (f(i)) continue;
												">" === i
													? D(r)
													: R(
															r,
															"Invalid characters in closing tag"
													  );
												continue;
											case x.TEXT_ENTITY:
											case x.ATTRIB_VALUE_ENTITY_Q:
											case x.ATTRIB_VALUE_ENTITY_U:
												var u, c;
												switch (r.state) {
													case x.TEXT_ENTITY:
														(u = x.TEXT),
															(c = "textNode");
														break;
													case x.ATTRIB_VALUE_ENTITY_Q:
														(u =
															x.ATTRIB_VALUE_QUOTED),
															(c = "attribValue");
														break;
													case x.ATTRIB_VALUE_ENTITY_U:
														(u =
															x.ATTRIB_VALUE_UNQUOTED),
															(c = "attribValue");
												}
												";" === i
													? ((r[c] += j(r)),
													  (r.entity = ""),
													  (r.state = u))
													: b(
															r.entity.length
																? d
																: h,
															i
													  )
													? (r.entity += i)
													: (R(
															r,
															"Invalid character in entity name"
													  ),
													  (r[c] +=
															"&" + r.entity + i),
													  (r.entity = ""),
													  (r.state = u));
												continue;
											default:
												throw new Error(
													r,
													"Unknown state: " + r.state
												);
										}
									return (
										r.position >= r.bufferCheckPosition &&
											(function (t) {
												for (
													var r = Math.max(
															e.MAX_BUFFER_LENGTH,
															10
														),
														o = 0,
														i = 0,
														s = n.length;
													i < s;
													i++
												) {
													var a = t[n[i]].length;
													if (a > r)
														switch (n[i]) {
															case "textNode":
																S(t);
																break;
															case "cdata":
																O(
																	t,
																	"oncdata",
																	t.cdata
																),
																	(t.cdata =
																		"");
																break;
															case "script":
																O(
																	t,
																	"onscript",
																	t.script
																),
																	(t.script =
																		"");
																break;
															default:
																P(
																	t,
																	"Max buffer length exceeded: " +
																		n[i]
																);
														}
													o = Math.max(o, a);
												}
												var u = e.MAX_BUFFER_LENGTH - o;
												t.bufferCheckPosition =
													u + t.position;
											})(r),
										r
									);
								},
								resume: function () {
									return (this.error = null), this;
								},
								close: function () {
									return this.write(null);
								},
								flush: function () {
									var e;
									S((e = this)),
										"" !== e.cdata &&
											(O(e, "oncdata", e.cdata),
											(e.cdata = "")),
										"" !== e.script &&
											(O(e, "onscript", e.script),
											(e.script = ""));
								},
							});
						try {
							t = r(2830).Stream;
						} catch (e) {
							t = function () {};
						}
						var i = e.EVENTS.filter(function (e) {
							return "error" !== e && "end" !== e;
						});
						function s(e, r) {
							if (!(this instanceof s)) return new s(e, r);
							t.apply(this),
								(this._parser = new o(e, r)),
								(this.writable = !0),
								(this.readable = !0);
							var n = this;
							(this._parser.onend = function () {
								n.emit("end");
							}),
								(this._parser.onerror = function (e) {
									n.emit("error", e),
										(n._parser.error = null);
								}),
								(this._decoder = null),
								i.forEach(function (e) {
									Object.defineProperty(n, "on" + e, {
										get: function () {
											return n._parser["on" + e];
										},
										set: function (t) {
											if (!t)
												return (
													n.removeAllListeners(e),
													(n._parser["on" + e] = t),
													t
												);
											n.on(e, t);
										},
										enumerable: !0,
										configurable: !1,
									});
								});
						}
						(s.prototype = Object.create(t.prototype, {
							constructor: { value: s },
						})),
							(s.prototype.write = function (e) {
								if (
									"function" == typeof Buffer &&
									"function" == typeof Buffer.isBuffer &&
									Buffer.isBuffer(e)
								) {
									if (!this._decoder) {
										var t = r(2553).s;
										this._decoder = new t("utf8");
									}
									e = this._decoder.write(e);
								}
								return (
									this._parser.write(e.toString()),
									this.emit("data", e),
									!0
								);
							}),
							(s.prototype.end = function (e) {
								return (
									e && e.length && this.write(e),
									this._parser.end(),
									!0
								);
							}),
							(s.prototype.on = function (e, r) {
								var n = this;
								return (
									n._parser["on" + e] ||
										-1 === i.indexOf(e) ||
										(n._parser["on" + e] = function () {
											var t =
												1 === arguments.length
													? [arguments[0]]
													: Array.apply(
															null,
															arguments
													  );
											t.splice(0, 0, e),
												n.emit.apply(n, t);
										}),
									t.prototype.on.call(n, e, r)
								);
							});
						var a = "http://www.w3.org/XML/1998/namespace",
							u = "http://www.w3.org/2000/xmlns/",
							c = { xml: a, xmlns: u },
							l =
								/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
							p =
								/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
							h =
								/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
							d =
								/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
						function f(e) {
							return (
								" " === e ||
								"\n" === e ||
								"\r" === e ||
								"\t" === e
							);
						}
						function m(e) {
							return '"' === e || "'" === e;
						}
						function g(e) {
							return ">" === e || f(e);
						}
						function b(e, t) {
							return e.test(t);
						}
						function y(e, t) {
							return !b(e, t);
						}
						var w,
							v,
							_,
							x = 0;
						for (var E in ((e.STATE = {
							BEGIN: x++,
							BEGIN_WHITESPACE: x++,
							TEXT: x++,
							TEXT_ENTITY: x++,
							OPEN_WAKA: x++,
							SGML_DECL: x++,
							SGML_DECL_QUOTED: x++,
							DOCTYPE: x++,
							DOCTYPE_QUOTED: x++,
							DOCTYPE_DTD: x++,
							DOCTYPE_DTD_QUOTED: x++,
							COMMENT_STARTING: x++,
							COMMENT: x++,
							COMMENT_ENDING: x++,
							COMMENT_ENDED: x++,
							CDATA: x++,
							CDATA_ENDING: x++,
							CDATA_ENDING_2: x++,
							PROC_INST: x++,
							PROC_INST_BODY: x++,
							PROC_INST_ENDING: x++,
							OPEN_TAG: x++,
							OPEN_TAG_SLASH: x++,
							ATTRIB: x++,
							ATTRIB_NAME: x++,
							ATTRIB_NAME_SAW_WHITE: x++,
							ATTRIB_VALUE: x++,
							ATTRIB_VALUE_QUOTED: x++,
							ATTRIB_VALUE_CLOSED: x++,
							ATTRIB_VALUE_UNQUOTED: x++,
							ATTRIB_VALUE_ENTITY_Q: x++,
							ATTRIB_VALUE_ENTITY_U: x++,
							CLOSE_TAG: x++,
							CLOSE_TAG_SAW_WHITE: x++,
							SCRIPT: x++,
							SCRIPT_ENDING: x++,
						}),
						(e.XML_ENTITIES = {
							amp: "&",
							gt: ">",
							lt: "<",
							quot: '"',
							apos: "'",
						}),
						(e.ENTITIES = {
							amp: "&",
							gt: ">",
							lt: "<",
							quot: '"',
							apos: "'",
							AElig: 198,
							Aacute: 193,
							Acirc: 194,
							Agrave: 192,
							Aring: 197,
							Atilde: 195,
							Auml: 196,
							Ccedil: 199,
							ETH: 208,
							Eacute: 201,
							Ecirc: 202,
							Egrave: 200,
							Euml: 203,
							Iacute: 205,
							Icirc: 206,
							Igrave: 204,
							Iuml: 207,
							Ntilde: 209,
							Oacute: 211,
							Ocirc: 212,
							Ograve: 210,
							Oslash: 216,
							Otilde: 213,
							Ouml: 214,
							THORN: 222,
							Uacute: 218,
							Ucirc: 219,
							Ugrave: 217,
							Uuml: 220,
							Yacute: 221,
							aacute: 225,
							acirc: 226,
							aelig: 230,
							agrave: 224,
							aring: 229,
							atilde: 227,
							auml: 228,
							ccedil: 231,
							eacute: 233,
							ecirc: 234,
							egrave: 232,
							eth: 240,
							euml: 235,
							iacute: 237,
							icirc: 238,
							igrave: 236,
							iuml: 239,
							ntilde: 241,
							oacute: 243,
							ocirc: 244,
							ograve: 242,
							oslash: 248,
							otilde: 245,
							ouml: 246,
							szlig: 223,
							thorn: 254,
							uacute: 250,
							ucirc: 251,
							ugrave: 249,
							uuml: 252,
							yacute: 253,
							yuml: 255,
							copy: 169,
							reg: 174,
							nbsp: 160,
							iexcl: 161,
							cent: 162,
							pound: 163,
							curren: 164,
							yen: 165,
							brvbar: 166,
							sect: 167,
							uml: 168,
							ordf: 170,
							laquo: 171,
							not: 172,
							shy: 173,
							macr: 175,
							deg: 176,
							plusmn: 177,
							sup1: 185,
							sup2: 178,
							sup3: 179,
							acute: 180,
							micro: 181,
							para: 182,
							middot: 183,
							cedil: 184,
							ordm: 186,
							raquo: 187,
							frac14: 188,
							frac12: 189,
							frac34: 190,
							iquest: 191,
							times: 215,
							divide: 247,
							OElig: 338,
							oelig: 339,
							Scaron: 352,
							scaron: 353,
							Yuml: 376,
							fnof: 402,
							circ: 710,
							tilde: 732,
							Alpha: 913,
							Beta: 914,
							Gamma: 915,
							Delta: 916,
							Epsilon: 917,
							Zeta: 918,
							Eta: 919,
							Theta: 920,
							Iota: 921,
							Kappa: 922,
							Lambda: 923,
							Mu: 924,
							Nu: 925,
							Xi: 926,
							Omicron: 927,
							Pi: 928,
							Rho: 929,
							Sigma: 931,
							Tau: 932,
							Upsilon: 933,
							Phi: 934,
							Chi: 935,
							Psi: 936,
							Omega: 937,
							alpha: 945,
							beta: 946,
							gamma: 947,
							delta: 948,
							epsilon: 949,
							zeta: 950,
							eta: 951,
							theta: 952,
							iota: 953,
							kappa: 954,
							lambda: 955,
							mu: 956,
							nu: 957,
							xi: 958,
							omicron: 959,
							pi: 960,
							rho: 961,
							sigmaf: 962,
							sigma: 963,
							tau: 964,
							upsilon: 965,
							phi: 966,
							chi: 967,
							psi: 968,
							omega: 969,
							thetasym: 977,
							upsih: 978,
							piv: 982,
							ensp: 8194,
							emsp: 8195,
							thinsp: 8201,
							zwnj: 8204,
							zwj: 8205,
							lrm: 8206,
							rlm: 8207,
							ndash: 8211,
							mdash: 8212,
							lsquo: 8216,
							rsquo: 8217,
							sbquo: 8218,
							ldquo: 8220,
							rdquo: 8221,
							bdquo: 8222,
							dagger: 8224,
							Dagger: 8225,
							bull: 8226,
							hellip: 8230,
							permil: 8240,
							prime: 8242,
							Prime: 8243,
							lsaquo: 8249,
							rsaquo: 8250,
							oline: 8254,
							frasl: 8260,
							euro: 8364,
							image: 8465,
							weierp: 8472,
							real: 8476,
							trade: 8482,
							alefsym: 8501,
							larr: 8592,
							uarr: 8593,
							rarr: 8594,
							darr: 8595,
							harr: 8596,
							crarr: 8629,
							lArr: 8656,
							uArr: 8657,
							rArr: 8658,
							dArr: 8659,
							hArr: 8660,
							forall: 8704,
							part: 8706,
							exist: 8707,
							empty: 8709,
							nabla: 8711,
							isin: 8712,
							notin: 8713,
							ni: 8715,
							prod: 8719,
							sum: 8721,
							minus: 8722,
							lowast: 8727,
							radic: 8730,
							prop: 8733,
							infin: 8734,
							ang: 8736,
							and: 8743,
							or: 8744,
							cap: 8745,
							cup: 8746,
							int: 8747,
							there4: 8756,
							sim: 8764,
							cong: 8773,
							asymp: 8776,
							ne: 8800,
							equiv: 8801,
							le: 8804,
							ge: 8805,
							sub: 8834,
							sup: 8835,
							nsub: 8836,
							sube: 8838,
							supe: 8839,
							oplus: 8853,
							otimes: 8855,
							perp: 8869,
							sdot: 8901,
							lceil: 8968,
							rceil: 8969,
							lfloor: 8970,
							rfloor: 8971,
							lang: 9001,
							rang: 9002,
							loz: 9674,
							spades: 9824,
							clubs: 9827,
							hearts: 9829,
							diams: 9830,
						}),
						Object.keys(e.ENTITIES).forEach(function (t) {
							var r = e.ENTITIES[t],
								n =
									"number" == typeof r
										? String.fromCharCode(r)
										: r;
							e.ENTITIES[t] = n;
						}),
						e.STATE))
							e.STATE[e.STATE[E]] = E;
						function T(e, t, r) {
							e[t] && e[t](r);
						}
						function O(e, t, r) {
							e.textNode && S(e), T(e, t, r);
						}
						function S(e) {
							(e.textNode = A(e.opt, e.textNode)),
								e.textNode && T(e, "ontext", e.textNode),
								(e.textNode = "");
						}
						function A(e, t) {
							return (
								e.trim && (t = t.trim()),
								e.normalize && (t = t.replace(/\s+/g, " ")),
								t
							);
						}
						function P(e, t) {
							return (
								S(e),
								e.trackPosition &&
									(t +=
										"\nLine: " +
										e.line +
										"\nColumn: " +
										e.column +
										"\nChar: " +
										e.c),
								(t = new Error(t)),
								(e.error = t),
								T(e, "onerror", t),
								e
							);
						}
						function C(e) {
							return (
								e.sawRoot &&
									!e.closedRoot &&
									R(e, "Unclosed root tag"),
								e.state !== x.BEGIN &&
									e.state !== x.BEGIN_WHITESPACE &&
									e.state !== x.TEXT &&
									P(e, "Unexpected end"),
								S(e),
								(e.c = ""),
								(e.closed = !0),
								T(e, "onend"),
								o.call(e, e.strict, e.opt),
								e
							);
						}
						function R(e, t) {
							if ("object" != typeof e || !(e instanceof o))
								throw new Error("bad call to strictFail");
							e.strict && P(e, t);
						}
						function I(e) {
							e.strict || (e.tagName = e.tagName[e.looseCase]());
							var t = e.tags[e.tags.length - 1] || e,
								r = (e.tag = {
									name: e.tagName,
									attributes: {},
								});
							e.opt.xmlns && (r.ns = t.ns),
								(e.attribList.length = 0),
								O(e, "onopentagstart", r);
						}
						function N(e, t) {
							var r = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
								n = r[0],
								o = r[1];
							return (
								t && "xmlns" === e && ((n = "xmlns"), (o = "")),
								{ prefix: n, local: o }
							);
						}
						function M(e) {
							if (
								(e.strict ||
									(e.attribName =
										e.attribName[e.looseCase]()),
								-1 !== e.attribList.indexOf(e.attribName) ||
									e.tag.attributes.hasOwnProperty(
										e.attribName
									))
							)
								e.attribName = e.attribValue = "";
							else {
								if (e.opt.xmlns) {
									var t = N(e.attribName, !0),
										r = t.prefix,
										n = t.local;
									if ("xmlns" === r)
										if ("xml" === n && e.attribValue !== a)
											R(
												e,
												"xml: prefix must be bound to " +
													a +
													"\nActual: " +
													e.attribValue
											);
										else if (
											"xmlns" === n &&
											e.attribValue !== u
										)
											R(
												e,
												"xmlns: prefix must be bound to " +
													u +
													"\nActual: " +
													e.attribValue
											);
										else {
											var o = e.tag,
												i =
													e.tags[e.tags.length - 1] ||
													e;
											o.ns === i.ns &&
												(o.ns = Object.create(i.ns)),
												(o.ns[n] = e.attribValue);
										}
									e.attribList.push([
										e.attribName,
										e.attribValue,
									]);
								} else
									(e.tag.attributes[e.attribName] =
										e.attribValue),
										O(e, "onattribute", {
											name: e.attribName,
											value: e.attribValue,
										});
								e.attribName = e.attribValue = "";
							}
						}
						function k(e, t) {
							if (e.opt.xmlns) {
								var r = e.tag,
									n = N(e.tagName);
								(r.prefix = n.prefix),
									(r.local = n.local),
									(r.uri = r.ns[n.prefix] || ""),
									r.prefix &&
										!r.uri &&
										(R(
											e,
											"Unbound namespace prefix: " +
												JSON.stringify(e.tagName)
										),
										(r.uri = n.prefix));
								var o = e.tags[e.tags.length - 1] || e;
								r.ns &&
									o.ns !== r.ns &&
									Object.keys(r.ns).forEach(function (t) {
										O(e, "onopennamespace", {
											prefix: t,
											uri: r.ns[t],
										});
									});
								for (
									var i = 0, s = e.attribList.length;
									i < s;
									i++
								) {
									var a = e.attribList[i],
										u = a[0],
										c = a[1],
										l = N(u, !0),
										p = l.prefix,
										h = l.local,
										d = "" === p ? "" : r.ns[p] || "",
										f = {
											name: u,
											value: c,
											prefix: p,
											local: h,
											uri: d,
										};
									p &&
										"xmlns" !== p &&
										!d &&
										(R(
											e,
											"Unbound namespace prefix: " +
												JSON.stringify(p)
										),
										(f.uri = p)),
										(e.tag.attributes[u] = f),
										O(e, "onattribute", f);
								}
								e.attribList.length = 0;
							}
							(e.tag.isSelfClosing = !!t),
								(e.sawRoot = !0),
								e.tags.push(e.tag),
								O(e, "onopentag", e.tag),
								t ||
									(e.noscript ||
									"script" !== e.tagName.toLowerCase()
										? (e.state = x.TEXT)
										: (e.state = x.SCRIPT),
									(e.tag = null),
									(e.tagName = "")),
								(e.attribName = e.attribValue = ""),
								(e.attribList.length = 0);
						}
						function D(e) {
							if (!e.tagName)
								return (
									R(e, "Weird empty close tag."),
									(e.textNode += "</>"),
									void (e.state = x.TEXT)
								);
							if (e.script) {
								if ("script" !== e.tagName)
									return (
										(e.script += "</" + e.tagName + ">"),
										(e.tagName = ""),
										void (e.state = x.SCRIPT)
									);
								O(e, "onscript", e.script), (e.script = "");
							}
							var t = e.tags.length,
								r = e.tagName;
							e.strict || (r = r[e.looseCase]());
							for (var n = r; t-- && e.tags[t].name !== n; )
								R(e, "Unexpected close tag");
							if (t < 0)
								return (
									R(e, "Unmatched closing tag: " + e.tagName),
									(e.textNode += "</" + e.tagName + ">"),
									void (e.state = x.TEXT)
								);
							e.tagName = r;
							for (var o = e.tags.length; o-- > t; ) {
								var i = (e.tag = e.tags.pop());
								(e.tagName = e.tag.name),
									O(e, "onclosetag", e.tagName);
								var s = {};
								for (var a in i.ns) s[a] = i.ns[a];
								var u = e.tags[e.tags.length - 1] || e;
								e.opt.xmlns &&
									i.ns !== u.ns &&
									Object.keys(i.ns).forEach(function (t) {
										var r = i.ns[t];
										O(e, "onclosenamespace", {
											prefix: t,
											uri: r,
										});
									});
							}
							0 === t && (e.closedRoot = !0),
								(e.tagName = e.attribValue = e.attribName = ""),
								(e.attribList.length = 0),
								(e.state = x.TEXT);
						}
						function j(e) {
							var t,
								r = e.entity,
								n = r.toLowerCase(),
								o = "";
							return e.ENTITIES[r]
								? e.ENTITIES[r]
								: e.ENTITIES[n]
								? e.ENTITIES[n]
								: ("#" === (r = n).charAt(0) &&
										("x" === r.charAt(1)
											? ((r = r.slice(2)),
											  (o = (t = parseInt(
													r,
													16
											  )).toString(16)))
											: ((r = r.slice(1)),
											  (o = (t = parseInt(
													r,
													10
											  )).toString(10)))),
								  (r = r.replace(/^0+/, "")),
								  isNaN(t) || o.toLowerCase() !== r
										? (R(e, "Invalid character entity"),
										  "&" + e.entity + ";")
										: String.fromCodePoint(t));
						}
						function F(e, t) {
							"<" === t
								? ((e.state = x.OPEN_WAKA),
								  (e.startTagPosition = e.position))
								: f(t) ||
								  (R(e, "Non-whitespace before first tag."),
								  (e.textNode = t),
								  (e.state = x.TEXT));
						}
						function B(e, t) {
							var r = "";
							return t < e.length && (r = e.charAt(t)), r;
						}
						(x = e.STATE),
							String.fromCodePoint ||
								((w = String.fromCharCode),
								(v = Math.floor),
								(_ = function () {
									var e,
										t,
										r = 16384,
										n = [],
										o = -1,
										i = arguments.length;
									if (!i) return "";
									for (var s = ""; ++o < i; ) {
										var a = Number(arguments[o]);
										if (
											!isFinite(a) ||
											a < 0 ||
											a > 1114111 ||
											v(a) !== a
										)
											throw RangeError(
												"Invalid code point: " + a
											);
										a <= 65535
											? n.push(a)
											: ((e =
													55296 +
													((a -= 65536) >> 10)),
											  (t = (a % 1024) + 56320),
											  n.push(e, t)),
											(o + 1 === i || n.length > r) &&
												((s += w.apply(null, n)),
												(n.length = 0));
									}
									return s;
								}),
								Object.defineProperty
									? Object.defineProperty(
											String,
											"fromCodePoint",
											{
												value: _,
												configurable: !0,
												writable: !0,
											}
									  )
									: (String.fromCodePoint = _));
					})(t);
				},
				2830: (e, t, r) => {
					e.exports = o;
					var n = r(7187).EventEmitter;
					function o() {
						n.call(this);
					}
					r(5717)(o, n),
						(o.Readable = r(6577)),
						(o.Writable = r(323)),
						(o.Duplex = r(8656)),
						(o.Transform = r(4473)),
						(o.PassThrough = r(2366)),
						(o.finished = r(1086)),
						(o.pipeline = r(6472)),
						(o.Stream = o),
						(o.prototype.pipe = function (e, t) {
							var r = this;
							function o(t) {
								e.writable &&
									!1 === e.write(t) &&
									r.pause &&
									r.pause();
							}
							function i() {
								r.readable && r.resume && r.resume();
							}
							r.on("data", o),
								e.on("drain", i),
								e._isStdio ||
									(t && !1 === t.end) ||
									(r.on("end", a), r.on("close", u));
							var s = !1;
							function a() {
								s || ((s = !0), e.end());
							}
							function u() {
								s ||
									((s = !0),
									"function" == typeof e.destroy &&
										e.destroy());
							}
							function c(e) {
								if ((l(), 0 === n.listenerCount(this, "error")))
									throw e;
							}
							function l() {
								r.removeListener("data", o),
									e.removeListener("drain", i),
									r.removeListener("end", a),
									r.removeListener("close", u),
									r.removeListener("error", c),
									e.removeListener("error", c),
									r.removeListener("end", l),
									r.removeListener("close", l),
									e.removeListener("close", l);
							}
							return (
								r.on("error", c),
								e.on("error", c),
								r.on("end", l),
								r.on("close", l),
								e.on("close", l),
								e.emit("pipe", r),
								e
							);
						});
				},
				8106: (e) => {
					"use strict";
					var t = {};
					function r(e, r, n) {
						n || (n = Error);
						var o = (function (e) {
							var t, n;
							function o(t, n, o) {
								return (
									e.call(
										this,
										(function (e, t, n) {
											return "string" == typeof r
												? r
												: r(e, t, n);
										})(t, n, o)
									) || this
								);
							}
							return (
								(n = e),
								((t = o).prototype = Object.create(
									n.prototype
								)),
								(t.prototype.constructor = t),
								(t.__proto__ = n),
								o
							);
						})(n);
						(o.prototype.name = n.name),
							(o.prototype.code = e),
							(t[e] = o);
					}
					function n(e, t) {
						if (Array.isArray(e)) {
							var r = e.length;
							return (
								(e = e.map(function (e) {
									return String(e);
								})),
								r > 2
									? "one of "
											.concat(t, " ")
											.concat(
												e.slice(0, r - 1).join(", "),
												", or "
											) + e[r - 1]
									: 2 === r
									? "one of "
											.concat(t, " ")
											.concat(e[0], " or ")
											.concat(e[1])
									: "of ".concat(t, " ").concat(e[0])
							);
						}
						return "of ".concat(t, " ").concat(String(e));
					}
					r(
						"ERR_INVALID_OPT_VALUE",
						function (e, t) {
							return (
								'The value "' +
								t +
								'" is invalid for option "' +
								e +
								'"'
							);
						},
						TypeError
					),
						r(
							"ERR_INVALID_ARG_TYPE",
							function (e, t, r) {
								var o, i, s, a, u;
								if (
									("string" == typeof t &&
									((i = "not "), t.substr(0, i.length) === i)
										? ((o = "must not be"),
										  (t = t.replace(/^not /, "")))
										: (o = "must be"),
									(function (e, t, r) {
										return (
											(void 0 === r || r > e.length) &&
												(r = e.length),
											e.substring(r - t.length, r) === t
										);
									})(e, " argument"))
								)
									s = "The "
										.concat(e, " ")
										.concat(o, " ")
										.concat(n(t, "type"));
								else {
									var c =
										("number" != typeof u && (u = 0),
										u + ".".length > (a = e).length ||
										-1 === a.indexOf(".", u)
											? "argument"
											: "property");
									s = 'The "'
										.concat(e, '" ')
										.concat(c, " ")
										.concat(o, " ")
										.concat(n(t, "type"));
								}
								return s + ". Received type ".concat(typeof r);
							},
							TypeError
						),
						r(
							"ERR_STREAM_PUSH_AFTER_EOF",
							"stream.push() after EOF"
						),
						r("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
							return "The " + e + " method is not implemented";
						}),
						r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
						r("ERR_STREAM_DESTROYED", function (e) {
							return (
								"Cannot call " +
								e +
								" after a stream was destroyed"
							);
						}),
						r(
							"ERR_MULTIPLE_CALLBACK",
							"Callback called multiple times"
						),
						r(
							"ERR_STREAM_CANNOT_PIPE",
							"Cannot pipe, not readable"
						),
						r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
						r(
							"ERR_STREAM_NULL_VALUES",
							"May not write null values to stream",
							TypeError
						),
						r(
							"ERR_UNKNOWN_ENCODING",
							function (e) {
								return "Unknown encoding: " + e;
							},
							TypeError
						),
						r(
							"ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
							"stream.unshift() after end event"
						),
						(e.exports.q = t);
				},
				8656: (e, t, r) => {
					"use strict";
					var n = r(4155),
						o =
							Object.keys ||
							function (e) {
								var t = [];
								for (var r in e) t.push(r);
								return t;
							};
					e.exports = l;
					var i = r(6577),
						s = r(323);
					r(5717)(l, i);
					for (var a = o(s.prototype), u = 0; u < a.length; u++) {
						var c = a[u];
						l.prototype[c] || (l.prototype[c] = s.prototype[c]);
					}
					function l(e) {
						if (!(this instanceof l)) return new l(e);
						i.call(this, e),
							s.call(this, e),
							(this.allowHalfOpen = !0),
							e &&
								(!1 === e.readable && (this.readable = !1),
								!1 === e.writable && (this.writable = !1),
								!1 === e.allowHalfOpen &&
									((this.allowHalfOpen = !1),
									this.once("end", p)));
					}
					function p() {
						this._writableState.ended || n.nextTick(h, this);
					}
					function h(e) {
						e.end();
					}
					Object.defineProperty(
						l.prototype,
						"writableHighWaterMark",
						{
							enumerable: !1,
							get: function () {
								return this._writableState.highWaterMark;
							},
						}
					),
						Object.defineProperty(l.prototype, "writableBuffer", {
							enumerable: !1,
							get: function () {
								return (
									this._writableState &&
									this._writableState.getBuffer()
								);
							},
						}),
						Object.defineProperty(l.prototype, "writableLength", {
							enumerable: !1,
							get: function () {
								return this._writableState.length;
							},
						}),
						Object.defineProperty(l.prototype, "destroyed", {
							enumerable: !1,
							get: function () {
								return (
									void 0 !== this._readableState &&
									void 0 !== this._writableState &&
									this._readableState.destroyed &&
									this._writableState.destroyed
								);
							},
							set: function (e) {
								void 0 !== this._readableState &&
									void 0 !== this._writableState &&
									((this._readableState.destroyed = e),
									(this._writableState.destroyed = e));
							},
						});
				},
				2366: (e, t, r) => {
					"use strict";
					e.exports = o;
					var n = r(4473);
					function o(e) {
						if (!(this instanceof o)) return new o(e);
						n.call(this, e);
					}
					r(5717)(o, n),
						(o.prototype._transform = function (e, t, r) {
							r(null, e);
						});
				},
				6577: (e, t, r) => {
					"use strict";
					var n,
						o = r(4155);
					(e.exports = O),
						(O.ReadableState = T),
						r(7187).EventEmitter;
					var i,
						s = function (e, t) {
							return e.listeners(t).length;
						},
						a = r(3194),
						u = r(8764).Buffer,
						c = r.g.Uint8Array || function () {},
						l = r(964);
					i = l && l.debuglog ? l.debuglog("stream") : function () {};
					var p,
						h,
						d,
						f = r(9686),
						m = r(1029),
						g = r(94).getHighWaterMark,
						b = r(8106).q,
						y = b.ERR_INVALID_ARG_TYPE,
						w = b.ERR_STREAM_PUSH_AFTER_EOF,
						v = b.ERR_METHOD_NOT_IMPLEMENTED,
						_ = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
					r(5717)(O, a);
					var x = m.errorOrDestroy,
						E = ["error", "close", "destroy", "pause", "resume"];
					function T(e, t, o) {
						(n = n || r(8656)),
							(e = e || {}),
							"boolean" != typeof o && (o = t instanceof n),
							(this.objectMode = !!e.objectMode),
							o &&
								(this.objectMode =
									this.objectMode || !!e.readableObjectMode),
							(this.highWaterMark = g(
								this,
								e,
								"readableHighWaterMark",
								o
							)),
							(this.buffer = new f()),
							(this.length = 0),
							(this.pipes = null),
							(this.pipesCount = 0),
							(this.flowing = null),
							(this.ended = !1),
							(this.endEmitted = !1),
							(this.reading = !1),
							(this.sync = !0),
							(this.needReadable = !1),
							(this.emittedReadable = !1),
							(this.readableListening = !1),
							(this.resumeScheduled = !1),
							(this.paused = !0),
							(this.emitClose = !1 !== e.emitClose),
							(this.autoDestroy = !!e.autoDestroy),
							(this.destroyed = !1),
							(this.defaultEncoding =
								e.defaultEncoding || "utf8"),
							(this.awaitDrain = 0),
							(this.readingMore = !1),
							(this.decoder = null),
							(this.encoding = null),
							e.encoding &&
								(p || (p = r(2553).s),
								(this.decoder = new p(e.encoding)),
								(this.encoding = e.encoding));
					}
					function O(e) {
						if (((n = n || r(8656)), !(this instanceof O)))
							return new O(e);
						var t = this instanceof n;
						(this._readableState = new T(e, this, t)),
							(this.readable = !0),
							e &&
								("function" == typeof e.read &&
									(this._read = e.read),
								"function" == typeof e.destroy &&
									(this._destroy = e.destroy)),
							a.call(this);
					}
					function S(e, t, r, n, o) {
						i("readableAddChunk", t);
						var s,
							a = e._readableState;
						if (null === t)
							(a.reading = !1),
								(function (e, t) {
									if ((i("onEofChunk"), !t.ended)) {
										if (t.decoder) {
											var r = t.decoder.end();
											r &&
												r.length &&
												(t.buffer.push(r),
												(t.length += t.objectMode
													? 1
													: r.length));
										}
										(t.ended = !0),
											t.sync
												? R(e)
												: ((t.needReadable = !1),
												  t.emittedReadable ||
														((t.emittedReadable =
															!0),
														I(e)));
									}
								})(e, a);
						else if (
							(o ||
								(s = (function (e, t) {
									var r, n;
									return (
										(n = t),
										u.isBuffer(n) ||
											n instanceof c ||
											"string" == typeof t ||
											void 0 === t ||
											e.objectMode ||
											(r = new y(
												"chunk",
												[
													"string",
													"Buffer",
													"Uint8Array",
												],
												t
											)),
										r
									);
								})(a, t)),
							s)
						)
							x(e, s);
						else if (a.objectMode || (t && t.length > 0))
							if (
								("string" == typeof t ||
									a.objectMode ||
									Object.getPrototypeOf(t) === u.prototype ||
									(t = (function (e) {
										return u.from(e);
									})(t)),
								n)
							)
								a.endEmitted ? x(e, new _()) : A(e, a, t, !0);
							else if (a.ended) x(e, new w());
							else {
								if (a.destroyed) return !1;
								(a.reading = !1),
									a.decoder && !r
										? ((t = a.decoder.write(t)),
										  a.objectMode || 0 !== t.length
												? A(e, a, t, !1)
												: N(e, a))
										: A(e, a, t, !1);
							}
						else n || ((a.reading = !1), N(e, a));
						return (
							!a.ended &&
							(a.length < a.highWaterMark || 0 === a.length)
						);
					}
					function A(e, t, r, n) {
						t.flowing && 0 === t.length && !t.sync
							? ((t.awaitDrain = 0), e.emit("data", r))
							: ((t.length += t.objectMode ? 1 : r.length),
							  n ? t.buffer.unshift(r) : t.buffer.push(r),
							  t.needReadable && R(e)),
							N(e, t);
					}
					Object.defineProperty(O.prototype, "destroyed", {
						enumerable: !1,
						get: function () {
							return (
								void 0 !== this._readableState &&
								this._readableState.destroyed
							);
						},
						set: function (e) {
							this._readableState &&
								(this._readableState.destroyed = e);
						},
					}),
						(O.prototype.destroy = m.destroy),
						(O.prototype._undestroy = m.undestroy),
						(O.prototype._destroy = function (e, t) {
							t(e);
						}),
						(O.prototype.push = function (e, t) {
							var r,
								n = this._readableState;
							return (
								n.objectMode
									? (r = !0)
									: "string" == typeof e &&
									  ((t = t || n.defaultEncoding) !==
											n.encoding &&
											((e = u.from(e, t)), (t = "")),
									  (r = !0)),
								S(this, e, t, !1, r)
							);
						}),
						(O.prototype.unshift = function (e) {
							return S(this, e, null, !0, !1);
						}),
						(O.prototype.isPaused = function () {
							return !1 === this._readableState.flowing;
						}),
						(O.prototype.setEncoding = function (e) {
							p || (p = r(2553).s);
							var t = new p(e);
							(this._readableState.decoder = t),
								(this._readableState.encoding =
									this._readableState.decoder.encoding);
							for (
								var n = this._readableState.buffer.head, o = "";
								null !== n;

							)
								(o += t.write(n.data)), (n = n.next);
							return (
								this._readableState.buffer.clear(),
								"" !== o && this._readableState.buffer.push(o),
								(this._readableState.length = o.length),
								this
							);
						});
					var P = 1073741824;
					function C(e, t) {
						return e <= 0 || (0 === t.length && t.ended)
							? 0
							: t.objectMode
							? 1
							: e != e
							? t.flowing && t.length
								? t.buffer.head.data.length
								: t.length
							: (e > t.highWaterMark &&
									(t.highWaterMark = (function (e) {
										return (
											e >= P
												? (e = P)
												: (e--,
												  (e |= e >>> 1),
												  (e |= e >>> 2),
												  (e |= e >>> 4),
												  (e |= e >>> 8),
												  (e |= e >>> 16),
												  e++),
											e
										);
									})(e)),
							  e <= t.length
									? e
									: t.ended
									? t.length
									: ((t.needReadable = !0), 0));
					}
					function R(e) {
						var t = e._readableState;
						i("emitReadable", t.needReadable, t.emittedReadable),
							(t.needReadable = !1),
							t.emittedReadable ||
								(i("emitReadable", t.flowing),
								(t.emittedReadable = !0),
								o.nextTick(I, e));
					}
					function I(e) {
						var t = e._readableState;
						i("emitReadable_", t.destroyed, t.length, t.ended),
							t.destroyed ||
								(!t.length && !t.ended) ||
								(e.emit("readable"), (t.emittedReadable = !1)),
							(t.needReadable =
								!t.flowing &&
								!t.ended &&
								t.length <= t.highWaterMark),
							F(e);
					}
					function N(e, t) {
						t.readingMore ||
							((t.readingMore = !0), o.nextTick(M, e, t));
					}
					function M(e, t) {
						for (
							;
							!t.reading &&
							!t.ended &&
							(t.length < t.highWaterMark ||
								(t.flowing && 0 === t.length));

						) {
							var r = t.length;
							if (
								(i("maybeReadMore read 0"),
								e.read(0),
								r === t.length)
							)
								break;
						}
						t.readingMore = !1;
					}
					function k(e) {
						var t = e._readableState;
						(t.readableListening = e.listenerCount("readable") > 0),
							t.resumeScheduled && !t.paused
								? (t.flowing = !0)
								: e.listenerCount("data") > 0 && e.resume();
					}
					function D(e) {
						i("readable nexttick read 0"), e.read(0);
					}
					function j(e, t) {
						i("resume", t.reading),
							t.reading || e.read(0),
							(t.resumeScheduled = !1),
							e.emit("resume"),
							F(e),
							t.flowing && !t.reading && e.read(0);
					}
					function F(e) {
						var t = e._readableState;
						for (
							i("flow", t.flowing);
							t.flowing && null !== e.read();

						);
					}
					function B(e, t) {
						return 0 === t.length
							? null
							: (t.objectMode
									? (r = t.buffer.shift())
									: !e || e >= t.length
									? ((r = t.decoder
											? t.buffer.join("")
											: 1 === t.buffer.length
											? t.buffer.first()
											: t.buffer.concat(t.length)),
									  t.buffer.clear())
									: (r = t.buffer.consume(e, t.decoder)),
							  r);
						var r;
					}
					function L(e) {
						var t = e._readableState;
						i("endReadable", t.endEmitted),
							t.endEmitted ||
								((t.ended = !0), o.nextTick(U, t, e));
					}
					function U(e, t) {
						if (
							(i("endReadableNT", e.endEmitted, e.length),
							!e.endEmitted &&
								0 === e.length &&
								((e.endEmitted = !0),
								(t.readable = !1),
								t.emit("end"),
								e.autoDestroy))
						) {
							var r = t._writableState;
							(!r || (r.autoDestroy && r.finished)) &&
								t.destroy();
						}
					}
					function X(e, t) {
						for (var r = 0, n = e.length; r < n; r++)
							if (e[r] === t) return r;
						return -1;
					}
					(O.prototype.read = function (e) {
						i("read", e), (e = parseInt(e, 10));
						var t = this._readableState,
							r = e;
						if (
							(0 !== e && (t.emittedReadable = !1),
							0 === e &&
								t.needReadable &&
								((0 !== t.highWaterMark
									? t.length >= t.highWaterMark
									: t.length > 0) ||
									t.ended))
						)
							return (
								i("read: emitReadable", t.length, t.ended),
								0 === t.length && t.ended ? L(this) : R(this),
								null
							);
						if (0 === (e = C(e, t)) && t.ended)
							return 0 === t.length && L(this), null;
						var n,
							o = t.needReadable;
						return (
							i("need readable", o),
							(0 === t.length ||
								t.length - e < t.highWaterMark) &&
								i("length less than watermark", (o = !0)),
							t.ended || t.reading
								? i("reading or ended", (o = !1))
								: o &&
								  (i("do read"),
								  (t.reading = !0),
								  (t.sync = !0),
								  0 === t.length && (t.needReadable = !0),
								  this._read(t.highWaterMark),
								  (t.sync = !1),
								  t.reading || (e = C(r, t))),
							null === (n = e > 0 ? B(e, t) : null)
								? ((t.needReadable =
										t.length <= t.highWaterMark),
								  (e = 0))
								: ((t.length -= e), (t.awaitDrain = 0)),
							0 === t.length &&
								(t.ended || (t.needReadable = !0),
								r !== e && t.ended && L(this)),
							null !== n && this.emit("data", n),
							n
						);
					}),
						(O.prototype._read = function (e) {
							x(this, new v("_read()"));
						}),
						(O.prototype.pipe = function (e, t) {
							var r = this,
								n = this._readableState;
							switch (n.pipesCount) {
								case 0:
									n.pipes = e;
									break;
								case 1:
									n.pipes = [n.pipes, e];
									break;
								default:
									n.pipes.push(e);
							}
							(n.pipesCount += 1),
								i("pipe count=%d opts=%j", n.pipesCount, t);
							var a =
								(t && !1 === t.end) ||
								e === o.stdout ||
								e === o.stderr
									? m
									: u;
							function u() {
								i("onend"), e.end();
							}
							n.endEmitted ? o.nextTick(a) : r.once("end", a),
								e.on("unpipe", function t(o, s) {
									i("onunpipe"),
										o === r &&
											s &&
											!1 === s.hasUnpiped &&
											((s.hasUnpiped = !0),
											i("cleanup"),
											e.removeListener("close", d),
											e.removeListener("finish", f),
											e.removeListener("drain", c),
											e.removeListener("error", h),
											e.removeListener("unpipe", t),
											r.removeListener("end", u),
											r.removeListener("end", m),
											r.removeListener("data", p),
											(l = !0),
											!n.awaitDrain ||
												(e._writableState &&
													!e._writableState
														.needDrain) ||
												c());
								});
							var c = (function (e) {
								return function () {
									var t = e._readableState;
									i("pipeOnDrain", t.awaitDrain),
										t.awaitDrain && t.awaitDrain--,
										0 === t.awaitDrain &&
											s(e, "data") &&
											((t.flowing = !0), F(e));
								};
							})(r);
							e.on("drain", c);
							var l = !1;
							function p(t) {
								i("ondata");
								var o = e.write(t);
								i("dest.write", o),
									!1 === o &&
										(((1 === n.pipesCount &&
											n.pipes === e) ||
											(n.pipesCount > 1 &&
												-1 !== X(n.pipes, e))) &&
											!l &&
											(i(
												"false write response, pause",
												n.awaitDrain
											),
											n.awaitDrain++),
										r.pause());
							}
							function h(t) {
								i("onerror", t),
									m(),
									e.removeListener("error", h),
									0 === s(e, "error") && x(e, t);
							}
							function d() {
								e.removeListener("finish", f), m();
							}
							function f() {
								i("onfinish"),
									e.removeListener("close", d),
									m();
							}
							function m() {
								i("unpipe"), r.unpipe(e);
							}
							return (
								r.on("data", p),
								(function (e, t, r) {
									if ("function" == typeof e.prependListener)
										return e.prependListener(t, r);
									e._events && e._events.error
										? Array.isArray(e._events.error)
											? e._events.error.unshift(r)
											: (e._events.error = [
													r,
													e._events.error,
											  ])
										: e.on(t, r);
								})(e, "error", h),
								e.once("close", d),
								e.once("finish", f),
								e.emit("pipe", r),
								n.flowing || (i("pipe resume"), r.resume()),
								e
							);
						}),
						(O.prototype.unpipe = function (e) {
							var t = this._readableState,
								r = { hasUnpiped: !1 };
							if (0 === t.pipesCount) return this;
							if (1 === t.pipesCount)
								return (
									(e && e !== t.pipes) ||
										(e || (e = t.pipes),
										(t.pipes = null),
										(t.pipesCount = 0),
										(t.flowing = !1),
										e && e.emit("unpipe", this, r)),
									this
								);
							if (!e) {
								var n = t.pipes,
									o = t.pipesCount;
								(t.pipes = null),
									(t.pipesCount = 0),
									(t.flowing = !1);
								for (var i = 0; i < o; i++)
									n[i].emit("unpipe", this, {
										hasUnpiped: !1,
									});
								return this;
							}
							var s = X(t.pipes, e);
							return (
								-1 === s ||
									(t.pipes.splice(s, 1),
									(t.pipesCount -= 1),
									1 === t.pipesCount &&
										(t.pipes = t.pipes[0]),
									e.emit("unpipe", this, r)),
								this
							);
						}),
						(O.prototype.on = function (e, t) {
							var r = a.prototype.on.call(this, e, t),
								n = this._readableState;
							return (
								"data" === e
									? ((n.readableListening =
											this.listenerCount("readable") > 0),
									  !1 !== n.flowing && this.resume())
									: "readable" === e &&
									  (n.endEmitted ||
											n.readableListening ||
											((n.readableListening =
												n.needReadable =
													!0),
											(n.flowing = !1),
											(n.emittedReadable = !1),
											i(
												"on readable",
												n.length,
												n.reading
											),
											n.length
												? R(this)
												: n.reading ||
												  o.nextTick(D, this))),
								r
							);
						}),
						(O.prototype.addListener = O.prototype.on),
						(O.prototype.removeListener = function (e, t) {
							var r = a.prototype.removeListener.call(this, e, t);
							return "readable" === e && o.nextTick(k, this), r;
						}),
						(O.prototype.removeAllListeners = function (e) {
							var t = a.prototype.removeAllListeners.apply(
								this,
								arguments
							);
							return (
								("readable" !== e && void 0 !== e) ||
									o.nextTick(k, this),
								t
							);
						}),
						(O.prototype.resume = function () {
							var e = this._readableState;
							return (
								e.flowing ||
									(i("resume"),
									(e.flowing = !e.readableListening),
									(function (e, t) {
										t.resumeScheduled ||
											((t.resumeScheduled = !0),
											o.nextTick(j, e, t));
									})(this, e)),
								(e.paused = !1),
								this
							);
						}),
						(O.prototype.pause = function () {
							return (
								i(
									"call pause flowing=%j",
									this._readableState.flowing
								),
								!1 !== this._readableState.flowing &&
									(i("pause"),
									(this._readableState.flowing = !1),
									this.emit("pause")),
								(this._readableState.paused = !0),
								this
							);
						}),
						(O.prototype.wrap = function (e) {
							var t = this,
								r = this._readableState,
								n = !1;
							for (var o in (e.on("end", function () {
								if ((i("wrapped end"), r.decoder && !r.ended)) {
									var e = r.decoder.end();
									e && e.length && t.push(e);
								}
								t.push(null);
							}),
							e.on("data", function (o) {
								i("wrapped data"),
									r.decoder && (o = r.decoder.write(o)),
									(r.objectMode && null == o) ||
										((r.objectMode || (o && o.length)) &&
											(t.push(o) ||
												((n = !0), e.pause())));
							}),
							e))
								void 0 === this[o] &&
									"function" == typeof e[o] &&
									(this[o] = (function (t) {
										return function () {
											return e[t].apply(e, arguments);
										};
									})(o));
							for (var s = 0; s < E.length; s++)
								e.on(E[s], this.emit.bind(this, E[s]));
							return (
								(this._read = function (t) {
									i("wrapped _read", t),
										n && ((n = !1), e.resume());
								}),
								this
							);
						}),
						"function" == typeof Symbol &&
							(O.prototype[Symbol.asyncIterator] = function () {
								return void 0 === h && (h = r(828)), h(this);
							}),
						Object.defineProperty(
							O.prototype,
							"readableHighWaterMark",
							{
								enumerable: !1,
								get: function () {
									return this._readableState.highWaterMark;
								},
							}
						),
						Object.defineProperty(O.prototype, "readableBuffer", {
							enumerable: !1,
							get: function () {
								return (
									this._readableState &&
									this._readableState.buffer
								);
							},
						}),
						Object.defineProperty(O.prototype, "readableFlowing", {
							enumerable: !1,
							get: function () {
								return this._readableState.flowing;
							},
							set: function (e) {
								this._readableState &&
									(this._readableState.flowing = e);
							},
						}),
						(O._fromList = B),
						Object.defineProperty(O.prototype, "readableLength", {
							enumerable: !1,
							get: function () {
								return this._readableState.length;
							},
						}),
						"function" == typeof Symbol &&
							(O.from = function (e, t) {
								return (
									void 0 === d && (d = r(1265)), d(O, e, t)
								);
							});
				},
				4473: (e, t, r) => {
					"use strict";
					e.exports = l;
					var n = r(8106).q,
						o = n.ERR_METHOD_NOT_IMPLEMENTED,
						i = n.ERR_MULTIPLE_CALLBACK,
						s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
						a = n.ERR_TRANSFORM_WITH_LENGTH_0,
						u = r(8656);
					function c(e, t) {
						var r = this._transformState;
						r.transforming = !1;
						var n = r.writecb;
						if (null === n) return this.emit("error", new i());
						(r.writechunk = null),
							(r.writecb = null),
							null != t && this.push(t),
							n(e);
						var o = this._readableState;
						(o.reading = !1),
							(o.needReadable || o.length < o.highWaterMark) &&
								this._read(o.highWaterMark);
					}
					function l(e) {
						if (!(this instanceof l)) return new l(e);
						u.call(this, e),
							(this._transformState = {
								afterTransform: c.bind(this),
								needTransform: !1,
								transforming: !1,
								writecb: null,
								writechunk: null,
								writeencoding: null,
							}),
							(this._readableState.needReadable = !0),
							(this._readableState.sync = !1),
							e &&
								("function" == typeof e.transform &&
									(this._transform = e.transform),
								"function" == typeof e.flush &&
									(this._flush = e.flush)),
							this.on("prefinish", p);
					}
					function p() {
						var e = this;
						"function" != typeof this._flush ||
						this._readableState.destroyed
							? h(this, null, null)
							: this._flush(function (t, r) {
									h(e, t, r);
							  });
					}
					function h(e, t, r) {
						if (t) return e.emit("error", t);
						if ((null != r && e.push(r), e._writableState.length))
							throw new a();
						if (e._transformState.transforming) throw new s();
						return e.push(null);
					}
					r(5717)(l, u),
						(l.prototype.push = function (e, t) {
							return (
								(this._transformState.needTransform = !1),
								u.prototype.push.call(this, e, t)
							);
						}),
						(l.prototype._transform = function (e, t, r) {
							r(new o("_transform()"));
						}),
						(l.prototype._write = function (e, t, r) {
							var n = this._transformState;
							if (
								((n.writecb = r),
								(n.writechunk = e),
								(n.writeencoding = t),
								!n.transforming)
							) {
								var o = this._readableState;
								(n.needTransform ||
									o.needReadable ||
									o.length < o.highWaterMark) &&
									this._read(o.highWaterMark);
							}
						}),
						(l.prototype._read = function (e) {
							var t = this._transformState;
							null === t.writechunk || t.transforming
								? (t.needTransform = !0)
								: ((t.transforming = !0),
								  this._transform(
										t.writechunk,
										t.writeencoding,
										t.afterTransform
								  ));
						}),
						(l.prototype._destroy = function (e, t) {
							u.prototype._destroy.call(this, e, function (e) {
								t(e);
							});
						});
				},
				323: (e, t, r) => {
					"use strict";
					var n,
						o = r(4155);
					function i(e) {
						var t = this;
						(this.next = null),
							(this.entry = null),
							(this.finish = function () {
								!(function (e, t, r) {
									var n = e.entry;
									for (e.entry = null; n; ) {
										var o = n.callback;
										t.pendingcb--,
											o(undefined),
											(n = n.next);
									}
									t.corkedRequestsFree.next = e;
								})(t, e);
							});
					}
					(e.exports = O), (O.WritableState = T);
					var s,
						a = { deprecate: r(4927) },
						u = r(3194),
						c = r(8764).Buffer,
						l = r.g.Uint8Array || function () {},
						p = r(1029),
						h = r(94).getHighWaterMark,
						d = r(8106).q,
						f = d.ERR_INVALID_ARG_TYPE,
						m = d.ERR_METHOD_NOT_IMPLEMENTED,
						g = d.ERR_MULTIPLE_CALLBACK,
						b = d.ERR_STREAM_CANNOT_PIPE,
						y = d.ERR_STREAM_DESTROYED,
						w = d.ERR_STREAM_NULL_VALUES,
						v = d.ERR_STREAM_WRITE_AFTER_END,
						_ = d.ERR_UNKNOWN_ENCODING,
						x = p.errorOrDestroy;
					function E() {}
					function T(e, t, s) {
						(n = n || r(8656)),
							(e = e || {}),
							"boolean" != typeof s && (s = t instanceof n),
							(this.objectMode = !!e.objectMode),
							s &&
								(this.objectMode =
									this.objectMode || !!e.writableObjectMode),
							(this.highWaterMark = h(
								this,
								e,
								"writableHighWaterMark",
								s
							)),
							(this.finalCalled = !1),
							(this.needDrain = !1),
							(this.ending = !1),
							(this.ended = !1),
							(this.finished = !1),
							(this.destroyed = !1);
						var a = !1 === e.decodeStrings;
						(this.decodeStrings = !a),
							(this.defaultEncoding =
								e.defaultEncoding || "utf8"),
							(this.length = 0),
							(this.writing = !1),
							(this.corked = 0),
							(this.sync = !0),
							(this.bufferProcessing = !1),
							(this.onwrite = function (e) {
								!(function (e, t) {
									var r = e._writableState,
										n = r.sync,
										i = r.writecb;
									if ("function" != typeof i) throw new g();
									if (
										((function (e) {
											(e.writing = !1),
												(e.writecb = null),
												(e.length -= e.writelen),
												(e.writelen = 0);
										})(r),
										t)
									)
										!(function (e, t, r, n, i) {
											--t.pendingcb,
												r
													? (o.nextTick(i, n),
													  o.nextTick(I, e, t),
													  (e._writableState.errorEmitted =
															!0),
													  x(e, n))
													: (i(n),
													  (e._writableState.errorEmitted =
															!0),
													  x(e, n),
													  I(e, t));
										})(e, r, n, t, i);
									else {
										var s = C(r) || e.destroyed;
										s ||
											r.corked ||
											r.bufferProcessing ||
											!r.bufferedRequest ||
											P(e, r),
											n
												? o.nextTick(A, e, r, s, i)
												: A(e, r, s, i);
									}
								})(t, e);
							}),
							(this.writecb = null),
							(this.writelen = 0),
							(this.bufferedRequest = null),
							(this.lastBufferedRequest = null),
							(this.pendingcb = 0),
							(this.prefinished = !1),
							(this.errorEmitted = !1),
							(this.emitClose = !1 !== e.emitClose),
							(this.autoDestroy = !!e.autoDestroy),
							(this.bufferedRequestCount = 0),
							(this.corkedRequestsFree = new i(this));
					}
					function O(e) {
						var t = this instanceof (n = n || r(8656));
						if (!t && !s.call(O, this)) return new O(e);
						(this._writableState = new T(e, this, t)),
							(this.writable = !0),
							e &&
								("function" == typeof e.write &&
									(this._write = e.write),
								"function" == typeof e.writev &&
									(this._writev = e.writev),
								"function" == typeof e.destroy &&
									(this._destroy = e.destroy),
								"function" == typeof e.final &&
									(this._final = e.final)),
							u.call(this);
					}
					function S(e, t, r, n, o, i, s) {
						(t.writelen = n),
							(t.writecb = s),
							(t.writing = !0),
							(t.sync = !0),
							t.destroyed
								? t.onwrite(new y("write"))
								: r
								? e._writev(o, t.onwrite)
								: e._write(o, i, t.onwrite),
							(t.sync = !1);
					}
					function A(e, t, r, n) {
						r ||
							(function (e, t) {
								0 === t.length &&
									t.needDrain &&
									((t.needDrain = !1), e.emit("drain"));
							})(e, t),
							t.pendingcb--,
							n(),
							I(e, t);
					}
					function P(e, t) {
						t.bufferProcessing = !0;
						var r = t.bufferedRequest;
						if (e._writev && r && r.next) {
							var n = t.bufferedRequestCount,
								o = new Array(n),
								s = t.corkedRequestsFree;
							s.entry = r;
							for (var a = 0, u = !0; r; )
								(o[a] = r),
									r.isBuf || (u = !1),
									(r = r.next),
									(a += 1);
							(o.allBuffers = u),
								S(e, t, !0, t.length, o, "", s.finish),
								t.pendingcb++,
								(t.lastBufferedRequest = null),
								s.next
									? ((t.corkedRequestsFree = s.next),
									  (s.next = null))
									: (t.corkedRequestsFree = new i(t)),
								(t.bufferedRequestCount = 0);
						} else {
							for (; r; ) {
								var c = r.chunk,
									l = r.encoding,
									p = r.callback;
								if (
									(S(
										e,
										t,
										!1,
										t.objectMode ? 1 : c.length,
										c,
										l,
										p
									),
									(r = r.next),
									t.bufferedRequestCount--,
									t.writing)
								)
									break;
							}
							null === r && (t.lastBufferedRequest = null);
						}
						(t.bufferedRequest = r), (t.bufferProcessing = !1);
					}
					function C(e) {
						return (
							e.ending &&
							0 === e.length &&
							null === e.bufferedRequest &&
							!e.finished &&
							!e.writing
						);
					}
					function R(e, t) {
						e._final(function (r) {
							t.pendingcb--,
								r && x(e, r),
								(t.prefinished = !0),
								e.emit("prefinish"),
								I(e, t);
						});
					}
					function I(e, t) {
						var r = C(t);
						if (
							r &&
							((function (e, t) {
								t.prefinished ||
									t.finalCalled ||
									("function" != typeof e._final ||
									t.destroyed
										? ((t.prefinished = !0),
										  e.emit("prefinish"))
										: (t.pendingcb++,
										  (t.finalCalled = !0),
										  o.nextTick(R, e, t)));
							})(e, t),
							0 === t.pendingcb &&
								((t.finished = !0),
								e.emit("finish"),
								t.autoDestroy))
						) {
							var n = e._readableState;
							(!n || (n.autoDestroy && n.endEmitted)) &&
								e.destroy();
						}
						return r;
					}
					r(5717)(O, u),
						(T.prototype.getBuffer = function () {
							for (var e = this.bufferedRequest, t = []; e; )
								t.push(e), (e = e.next);
							return t;
						}),
						(function () {
							try {
								Object.defineProperty(T.prototype, "buffer", {
									get: a.deprecate(
										function () {
											return this.getBuffer();
										},
										"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
										"DEP0003"
									),
								});
							} catch (e) {}
						})(),
						"function" == typeof Symbol &&
						Symbol.hasInstance &&
						"function" ==
							typeof Function.prototype[Symbol.hasInstance]
							? ((s = Function.prototype[Symbol.hasInstance]),
							  Object.defineProperty(O, Symbol.hasInstance, {
									value: function (e) {
										return (
											!!s.call(this, e) ||
											(this === O &&
												e &&
												e._writableState instanceof T)
										);
									},
							  }))
							: (s = function (e) {
									return e instanceof this;
							  }),
						(O.prototype.pipe = function () {
							x(this, new b());
						}),
						(O.prototype.write = function (e, t, r) {
							var n,
								i = this._writableState,
								s = !1,
								a =
									!i.objectMode &&
									((n = e), c.isBuffer(n) || n instanceof l);
							return (
								a &&
									!c.isBuffer(e) &&
									(e = (function (e) {
										return c.from(e);
									})(e)),
								"function" == typeof t && ((r = t), (t = null)),
								a
									? (t = "buffer")
									: t || (t = i.defaultEncoding),
								"function" != typeof r && (r = E),
								i.ending
									? (function (e, t) {
											var r = new v();
											x(e, r), o.nextTick(t, r);
									  })(this, r)
									: (a ||
											(function (e, t, r, n) {
												var i;
												return (
													null === r
														? (i = new w())
														: "string" ==
																typeof r ||
														  t.objectMode ||
														  (i = new f(
																"chunk",
																[
																	"string",
																	"Buffer",
																],
																r
														  )),
													!i ||
														(x(e, i),
														o.nextTick(n, i),
														!1)
												);
											})(this, i, e, r)) &&
									  (i.pendingcb++,
									  (s = (function (e, t, r, n, o, i) {
											if (!r) {
												var s = (function (e, t, r) {
													return (
														e.objectMode ||
															!1 ===
																e.decodeStrings ||
															"string" !=
																typeof t ||
															(t = c.from(t, r)),
														t
													);
												})(t, n, o);
												n !== s &&
													((r = !0),
													(o = "buffer"),
													(n = s));
											}
											var a = t.objectMode ? 1 : n.length;
											t.length += a;
											var u = t.length < t.highWaterMark;
											if (
												(u || (t.needDrain = !0),
												t.writing || t.corked)
											) {
												var l = t.lastBufferedRequest;
												(t.lastBufferedRequest = {
													chunk: n,
													encoding: o,
													isBuf: r,
													callback: i,
													next: null,
												}),
													l
														? (l.next =
																t.lastBufferedRequest)
														: (t.bufferedRequest =
																t.lastBufferedRequest),
													(t.bufferedRequestCount += 1);
											} else S(e, t, !1, a, n, o, i);
											return u;
									  })(this, i, a, e, t, r))),
								s
							);
						}),
						(O.prototype.cork = function () {
							this._writableState.corked++;
						}),
						(O.prototype.uncork = function () {
							var e = this._writableState;
							e.corked &&
								(e.corked--,
								e.writing ||
									e.corked ||
									e.bufferProcessing ||
									!e.bufferedRequest ||
									P(this, e));
						}),
						(O.prototype.setDefaultEncoding = function (e) {
							if (
								("string" == typeof e && (e = e.toLowerCase()),
								!(
									[
										"hex",
										"utf8",
										"utf-8",
										"ascii",
										"binary",
										"base64",
										"ucs2",
										"ucs-2",
										"utf16le",
										"utf-16le",
										"raw",
									].indexOf((e + "").toLowerCase()) > -1
								))
							)
								throw new _(e);
							return (
								(this._writableState.defaultEncoding = e), this
							);
						}),
						Object.defineProperty(O.prototype, "writableBuffer", {
							enumerable: !1,
							get: function () {
								return (
									this._writableState &&
									this._writableState.getBuffer()
								);
							},
						}),
						Object.defineProperty(
							O.prototype,
							"writableHighWaterMark",
							{
								enumerable: !1,
								get: function () {
									return this._writableState.highWaterMark;
								},
							}
						),
						(O.prototype._write = function (e, t, r) {
							r(new m("_write()"));
						}),
						(O.prototype._writev = null),
						(O.prototype.end = function (e, t, r) {
							var n = this._writableState;
							return (
								"function" == typeof e
									? ((r = e), (e = null), (t = null))
									: "function" == typeof t &&
									  ((r = t), (t = null)),
								null != e && this.write(e, t),
								n.corked && ((n.corked = 1), this.uncork()),
								n.ending ||
									(function (e, t, r) {
										(t.ending = !0),
											I(e, t),
											r &&
												(t.finished
													? o.nextTick(r)
													: e.once("finish", r)),
											(t.ended = !0),
											(e.writable = !1);
									})(this, n, r),
								this
							);
						}),
						Object.defineProperty(O.prototype, "writableLength", {
							enumerable: !1,
							get: function () {
								return this._writableState.length;
							},
						}),
						Object.defineProperty(O.prototype, "destroyed", {
							enumerable: !1,
							get: function () {
								return (
									void 0 !== this._writableState &&
									this._writableState.destroyed
								);
							},
							set: function (e) {
								this._writableState &&
									(this._writableState.destroyed = e);
							},
						}),
						(O.prototype.destroy = p.destroy),
						(O.prototype._undestroy = p.undestroy),
						(O.prototype._destroy = function (e, t) {
							t(e);
						});
				},
				828: (e, t, r) => {
					"use strict";
					var n,
						o = r(4155);
					function i(e, t, r) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = r),
							e
						);
					}
					var s = r(1086),
						a = Symbol("lastResolve"),
						u = Symbol("lastReject"),
						c = Symbol("error"),
						l = Symbol("ended"),
						p = Symbol("lastPromise"),
						h = Symbol("handlePromise"),
						d = Symbol("stream");
					function f(e, t) {
						return { value: e, done: t };
					}
					function m(e) {
						var t = e[a];
						if (null !== t) {
							var r = e[d].read();
							null !== r &&
								((e[p] = null),
								(e[a] = null),
								(e[u] = null),
								t(f(r, !1)));
						}
					}
					function g(e) {
						o.nextTick(m, e);
					}
					var b = Object.getPrototypeOf(function () {}),
						y = Object.setPrototypeOf(
							(i(
								(n = {
									get stream() {
										return this[d];
									},
									next: function () {
										var e = this,
											t = this[c];
										if (null !== t)
											return Promise.reject(t);
										if (this[l])
											return Promise.resolve(
												f(void 0, !0)
											);
										if (this[d].destroyed)
											return new Promise(function (t, r) {
												o.nextTick(function () {
													e[c]
														? r(e[c])
														: t(f(void 0, !0));
												});
											});
										var r,
											n = this[p];
										if (n)
											r = new Promise(
												(function (e, t) {
													return function (r, n) {
														e.then(function () {
															t[l]
																? r(
																		f(
																			void 0,
																			!0
																		)
																  )
																: t[h](r, n);
														}, n);
													};
												})(n, this)
											);
										else {
											var i = this[d].read();
											if (null !== i)
												return Promise.resolve(
													f(i, !1)
												);
											r = new Promise(this[h]);
										}
										return (this[p] = r), r;
									},
								}),
								Symbol.asyncIterator,
								function () {
									return this;
								}
							),
							i(n, "return", function () {
								var e = this;
								return new Promise(function (t, r) {
									e[d].destroy(null, function (e) {
										e ? r(e) : t(f(void 0, !0));
									});
								});
							}),
							n),
							b
						);
					e.exports = function (e) {
						var t,
							r = Object.create(
								y,
								(i((t = {}), d, { value: e, writable: !0 }),
								i(t, a, { value: null, writable: !0 }),
								i(t, u, { value: null, writable: !0 }),
								i(t, c, { value: null, writable: !0 }),
								i(t, l, {
									value: e._readableState.endEmitted,
									writable: !0,
								}),
								i(t, h, {
									value: function (e, t) {
										var n = r[d].read();
										n
											? ((r[p] = null),
											  (r[a] = null),
											  (r[u] = null),
											  e(f(n, !1)))
											: ((r[a] = e), (r[u] = t));
									},
									writable: !0,
								}),
								t)
							);
						return (
							(r[p] = null),
							s(e, function (e) {
								if (
									e &&
									"ERR_STREAM_PREMATURE_CLOSE" !== e.code
								) {
									var t = r[u];
									return (
										null !== t &&
											((r[p] = null),
											(r[a] = null),
											(r[u] = null),
											t(e)),
										void (r[c] = e)
									);
								}
								var n = r[a];
								null !== n &&
									((r[p] = null),
									(r[a] = null),
									(r[u] = null),
									n(f(void 0, !0))),
									(r[l] = !0);
							}),
							e.on("readable", g.bind(null, r)),
							r
						);
					};
				},
				9686: (e, t, r) => {
					"use strict";
					function n(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(
										e,
										t
									).enumerable;
								})),
								r.push.apply(r, n);
						}
						return r;
					}
					function o(e, t, r) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = r),
							e
						);
					}
					function i(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							(n.enumerable = n.enumerable || !1),
								(n.configurable = !0),
								"value" in n && (n.writable = !0),
								Object.defineProperty(e, n.key, n);
						}
					}
					var s = r(8764).Buffer,
						a = r(9862).inspect,
						u = (a && a.custom) || "inspect";
					e.exports = (function () {
						function e() {
							!(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError(
										"Cannot call a class as a function"
									);
							})(this, e),
								(this.head = null),
								(this.tail = null),
								(this.length = 0);
						}
						var t, r;
						return (
							(t = e),
							(r = [
								{
									key: "push",
									value: function (e) {
										var t = { data: e, next: null };
										this.length > 0
											? (this.tail.next = t)
											: (this.head = t),
											(this.tail = t),
											++this.length;
									},
								},
								{
									key: "unshift",
									value: function (e) {
										var t = { data: e, next: this.head };
										0 === this.length && (this.tail = t),
											(this.head = t),
											++this.length;
									},
								},
								{
									key: "shift",
									value: function () {
										if (0 !== this.length) {
											var e = this.head.data;
											return (
												1 === this.length
													? (this.head = this.tail =
															null)
													: (this.head =
															this.head.next),
												--this.length,
												e
											);
										}
									},
								},
								{
									key: "clear",
									value: function () {
										(this.head = this.tail = null),
											(this.length = 0);
									},
								},
								{
									key: "join",
									value: function (e) {
										if (0 === this.length) return "";
										for (
											var t = this.head, r = "" + t.data;
											(t = t.next);

										)
											r += e + t.data;
										return r;
									},
								},
								{
									key: "concat",
									value: function (e) {
										if (0 === this.length)
											return s.alloc(0);
										for (
											var t,
												r,
												n,
												o = s.allocUnsafe(e >>> 0),
												i = this.head,
												a = 0;
											i;

										)
											(t = i.data),
												(r = o),
												(n = a),
												s.prototype.copy.call(t, r, n),
												(a += i.data.length),
												(i = i.next);
										return o;
									},
								},
								{
									key: "consume",
									value: function (e, t) {
										var r;
										return (
											e < this.head.data.length
												? ((r = this.head.data.slice(
														0,
														e
												  )),
												  (this.head.data =
														this.head.data.slice(
															e
														)))
												: (r =
														e ===
														this.head.data.length
															? this.shift()
															: t
															? this._getString(e)
															: this._getBuffer(
																	e
															  )),
											r
										);
									},
								},
								{
									key: "first",
									value: function () {
										return this.head.data;
									},
								},
								{
									key: "_getString",
									value: function (e) {
										var t = this.head,
											r = 1,
											n = t.data;
										for (e -= n.length; (t = t.next); ) {
											var o = t.data,
												i = e > o.length ? o.length : e;
											if (
												(i === o.length
													? (n += o)
													: (n += o.slice(0, e)),
												0 == (e -= i))
											) {
												i === o.length
													? (++r,
													  t.next
															? (this.head =
																	t.next)
															: (this.head =
																	this.tail =
																		null))
													: ((this.head = t),
													  (t.data = o.slice(i)));
												break;
											}
											++r;
										}
										return (this.length -= r), n;
									},
								},
								{
									key: "_getBuffer",
									value: function (e) {
										var t = s.allocUnsafe(e),
											r = this.head,
											n = 1;
										for (
											r.data.copy(t), e -= r.data.length;
											(r = r.next);

										) {
											var o = r.data,
												i = e > o.length ? o.length : e;
											if (
												(o.copy(t, t.length - e, 0, i),
												0 == (e -= i))
											) {
												i === o.length
													? (++n,
													  r.next
															? (this.head =
																	r.next)
															: (this.head =
																	this.tail =
																		null))
													: ((this.head = r),
													  (r.data = o.slice(i)));
												break;
											}
											++n;
										}
										return (this.length -= n), t;
									},
								},
								{
									key: u,
									value: function (e, t) {
										return a(
											this,
											(function (e) {
												for (
													var t = 1;
													t < arguments.length;
													t++
												) {
													var r =
														null != arguments[t]
															? arguments[t]
															: {};
													t % 2
														? n(
																Object(r),
																!0
														  ).forEach(function (
																t
														  ) {
																o(e, t, r[t]);
														  })
														: Object.getOwnPropertyDescriptors
														? Object.defineProperties(
																e,
																Object.getOwnPropertyDescriptors(
																	r
																)
														  )
														: n(Object(r)).forEach(
																function (t) {
																	Object.defineProperty(
																		e,
																		t,
																		Object.getOwnPropertyDescriptor(
																			r,
																			t
																		)
																	);
																}
														  );
												}
												return e;
											})({}, t, {
												depth: 0,
												customInspect: !1,
											})
										);
									},
								},
							]),
							r && i(t.prototype, r),
							e
						);
					})();
				},
				1029: (e, t, r) => {
					"use strict";
					var n = r(4155);
					function o(e, t) {
						s(e, t), i(e);
					}
					function i(e) {
						(e._writableState && !e._writableState.emitClose) ||
							(e._readableState && !e._readableState.emitClose) ||
							e.emit("close");
					}
					function s(e, t) {
						e.emit("error", t);
					}
					e.exports = {
						destroy: function (e, t) {
							var r = this,
								a =
									this._readableState &&
									this._readableState.destroyed,
								u =
									this._writableState &&
									this._writableState.destroyed;
							return a || u
								? (t
										? t(e)
										: e &&
										  (this._writableState
												? this._writableState
														.errorEmitted ||
												  ((this._writableState.errorEmitted =
														!0),
												  n.nextTick(s, this, e))
												: n.nextTick(s, this, e)),
								  this)
								: (this._readableState &&
										(this._readableState.destroyed = !0),
								  this._writableState &&
										(this._writableState.destroyed = !0),
								  this._destroy(e || null, function (e) {
										!t && e
											? r._writableState
												? r._writableState.errorEmitted
													? n.nextTick(i, r)
													: ((r._writableState.errorEmitted =
															!0),
													  n.nextTick(o, r, e))
												: n.nextTick(o, r, e)
											: t
											? (n.nextTick(i, r), t(e))
											: n.nextTick(i, r);
								  }),
								  this);
						},
						undestroy: function () {
							this._readableState &&
								((this._readableState.destroyed = !1),
								(this._readableState.reading = !1),
								(this._readableState.ended = !1),
								(this._readableState.endEmitted = !1)),
								this._writableState &&
									((this._writableState.destroyed = !1),
									(this._writableState.ended = !1),
									(this._writableState.ending = !1),
									(this._writableState.finalCalled = !1),
									(this._writableState.prefinished = !1),
									(this._writableState.finished = !1),
									(this._writableState.errorEmitted = !1));
						},
						errorOrDestroy: function (e, t) {
							var r = e._readableState,
								n = e._writableState;
							(r && r.autoDestroy) || (n && n.autoDestroy)
								? e.destroy(t)
								: e.emit("error", t);
						},
					};
				},
				1086: (e, t, r) => {
					"use strict";
					var n = r(8106).q.ERR_STREAM_PREMATURE_CLOSE;
					function o() {}
					e.exports = function e(t, r, i) {
						if ("function" == typeof r) return e(t, null, r);
						r || (r = {}),
							(i = (function (e) {
								var t = !1;
								return function () {
									if (!t) {
										t = !0;
										for (
											var r = arguments.length,
												n = new Array(r),
												o = 0;
											o < r;
											o++
										)
											n[o] = arguments[o];
										e.apply(this, n);
									}
								};
							})(i || o));
						var s = r.readable || (!1 !== r.readable && t.readable),
							a = r.writable || (!1 !== r.writable && t.writable),
							u = function () {
								t.writable || l();
							},
							c = t._writableState && t._writableState.finished,
							l = function () {
								(a = !1), (c = !0), s || i.call(t);
							},
							p = t._readableState && t._readableState.endEmitted,
							h = function () {
								(s = !1), (p = !0), a || i.call(t);
							},
							d = function (e) {
								i.call(t, e);
							},
							f = function () {
								var e;
								return s && !p
									? ((t._readableState &&
											t._readableState.ended) ||
											(e = new n()),
									  i.call(t, e))
									: a && !c
									? ((t._writableState &&
											t._writableState.ended) ||
											(e = new n()),
									  i.call(t, e))
									: void 0;
							},
							m = function () {
								t.req.on("finish", l);
							};
						return (
							(function (e) {
								return (
									e.setHeader && "function" == typeof e.abort
								);
							})(t)
								? (t.on("complete", l),
								  t.on("abort", f),
								  t.req ? m() : t.on("request", m))
								: a &&
								  !t._writableState &&
								  (t.on("end", u), t.on("close", u)),
							t.on("end", h),
							t.on("finish", l),
							!1 !== r.error && t.on("error", d),
							t.on("close", f),
							function () {
								t.removeListener("complete", l),
									t.removeListener("abort", f),
									t.removeListener("request", m),
									t.req && t.req.removeListener("finish", l),
									t.removeListener("end", u),
									t.removeListener("close", u),
									t.removeListener("finish", l),
									t.removeListener("end", h),
									t.removeListener("error", d),
									t.removeListener("close", f);
							}
						);
					};
				},
				1265: (e) => {
					e.exports = function () {
						throw new Error(
							"Readable.from is not available in the browser"
						);
					};
				},
				6472: (e, t, r) => {
					"use strict";
					var n,
						o = r(8106).q,
						i = o.ERR_MISSING_ARGS,
						s = o.ERR_STREAM_DESTROYED;
					function a(e) {
						if (e) throw e;
					}
					function u(e, t, o, i) {
						i = (function (e) {
							var t = !1;
							return function () {
								t || ((t = !0), e.apply(void 0, arguments));
							};
						})(i);
						var a = !1;
						e.on("close", function () {
							a = !0;
						}),
							void 0 === n && (n = r(1086)),
							n(e, { readable: t, writable: o }, function (e) {
								if (e) return i(e);
								(a = !0), i();
							});
						var u = !1;
						return function (t) {
							if (!a && !u)
								return (
									(u = !0),
									(function (e) {
										return (
											e.setHeader &&
											"function" == typeof e.abort
										);
									})(e)
										? e.abort()
										: "function" == typeof e.destroy
										? e.destroy()
										: void i(t || new s("pipe"))
								);
						};
					}
					function c(e) {
						e();
					}
					function l(e, t) {
						return e.pipe(t);
					}
					function p(e) {
						return e.length
							? "function" != typeof e[e.length - 1]
								? a
								: e.pop()
							: a;
					}
					e.exports = function () {
						for (
							var e = arguments.length, t = new Array(e), r = 0;
							r < e;
							r++
						)
							t[r] = arguments[r];
						var n,
							o = p(t);
						if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
							throw new i("streams");
						var s = t.map(function (e, r) {
							var i = r < t.length - 1;
							return u(e, i, r > 0, function (e) {
								n || (n = e),
									e && s.forEach(c),
									i || (s.forEach(c), o(n));
							});
						});
						return t.reduce(l);
					};
				},
				94: (e, t, r) => {
					"use strict";
					var n = r(8106).q.ERR_INVALID_OPT_VALUE;
					e.exports = {
						getHighWaterMark: function (e, t, r, o) {
							var i = (function (e, t, r) {
								return null != e.highWaterMark
									? e.highWaterMark
									: t
									? e[r]
									: null;
							})(t, o, r);
							if (null != i) {
								if (
									!isFinite(i) ||
									Math.floor(i) !== i ||
									i < 0
								)
									throw new n(o ? r : "highWaterMark", i);
								return Math.floor(i);
							}
							return e.objectMode ? 16 : 16384;
						},
					};
				},
				3194: (e, t, r) => {
					e.exports = r(7187).EventEmitter;
				},
				2553: (e, t, r) => {
					"use strict";
					var n = r(9509).Buffer,
						o =
							n.isEncoding ||
							function (e) {
								switch ((e = "" + e) && e.toLowerCase()) {
									case "hex":
									case "utf8":
									case "utf-8":
									case "ascii":
									case "binary":
									case "base64":
									case "ucs2":
									case "ucs-2":
									case "utf16le":
									case "utf-16le":
									case "raw":
										return !0;
									default:
										return !1;
								}
							};
					function i(e) {
						var t;
						switch (
							((this.encoding = (function (e) {
								var t = (function (e) {
									if (!e) return "utf8";
									for (var t; ; )
										switch (e) {
											case "utf8":
											case "utf-8":
												return "utf8";
											case "ucs2":
											case "ucs-2":
											case "utf16le":
											case "utf-16le":
												return "utf16le";
											case "latin1":
											case "binary":
												return "latin1";
											case "base64":
											case "ascii":
											case "hex":
												return e;
											default:
												if (t) return;
												(e = ("" + e).toLowerCase()),
													(t = !0);
										}
								})(e);
								if (
									"string" != typeof t &&
									(n.isEncoding === o || !o(e))
								)
									throw new Error("Unknown encoding: " + e);
								return t || e;
							})(e)),
							this.encoding)
						) {
							case "utf16le":
								(this.text = u), (this.end = c), (t = 4);
								break;
							case "utf8":
								(this.fillLast = a), (t = 4);
								break;
							case "base64":
								(this.text = l), (this.end = p), (t = 3);
								break;
							default:
								return (this.write = h), void (this.end = d);
						}
						(this.lastNeed = 0),
							(this.lastTotal = 0),
							(this.lastChar = n.allocUnsafe(t));
					}
					function s(e) {
						return e <= 127
							? 0
							: e >> 5 == 6
							? 2
							: e >> 4 == 14
							? 3
							: e >> 3 == 30
							? 4
							: e >> 6 == 2
							? -1
							: -2;
					}
					function a(e) {
						var t = this.lastTotal - this.lastNeed,
							r = (function (e, t, r) {
								if (128 != (192 & t[0]))
									return (e.lastNeed = 0), "�";
								if (e.lastNeed > 1 && t.length > 1) {
									if (128 != (192 & t[1]))
										return (e.lastNeed = 1), "�";
									if (
										e.lastNeed > 2 &&
										t.length > 2 &&
										128 != (192 & t[2])
									)
										return (e.lastNeed = 2), "�";
								}
							})(this, e);
						return void 0 !== r
							? r
							: this.lastNeed <= e.length
							? (e.copy(this.lastChar, t, 0, this.lastNeed),
							  this.lastChar.toString(
									this.encoding,
									0,
									this.lastTotal
							  ))
							: (e.copy(this.lastChar, t, 0, e.length),
							  void (this.lastNeed -= e.length));
					}
					function u(e, t) {
						if ((e.length - t) % 2 == 0) {
							var r = e.toString("utf16le", t);
							if (r) {
								var n = r.charCodeAt(r.length - 1);
								if (n >= 55296 && n <= 56319)
									return (
										(this.lastNeed = 2),
										(this.lastTotal = 4),
										(this.lastChar[0] = e[e.length - 2]),
										(this.lastChar[1] = e[e.length - 1]),
										r.slice(0, -1)
									);
							}
							return r;
						}
						return (
							(this.lastNeed = 1),
							(this.lastTotal = 2),
							(this.lastChar[0] = e[e.length - 1]),
							e.toString("utf16le", t, e.length - 1)
						);
					}
					function c(e) {
						var t = e && e.length ? this.write(e) : "";
						if (this.lastNeed) {
							var r = this.lastTotal - this.lastNeed;
							return t + this.lastChar.toString("utf16le", 0, r);
						}
						return t;
					}
					function l(e, t) {
						var r = (e.length - t) % 3;
						return 0 === r
							? e.toString("base64", t)
							: ((this.lastNeed = 3 - r),
							  (this.lastTotal = 3),
							  1 === r
									? (this.lastChar[0] = e[e.length - 1])
									: ((this.lastChar[0] = e[e.length - 2]),
									  (this.lastChar[1] = e[e.length - 1])),
							  e.toString("base64", t, e.length - r));
					}
					function p(e) {
						var t = e && e.length ? this.write(e) : "";
						return this.lastNeed
							? t +
									this.lastChar.toString(
										"base64",
										0,
										3 - this.lastNeed
									)
							: t;
					}
					function h(e) {
						return e.toString(this.encoding);
					}
					function d(e) {
						return e && e.length ? this.write(e) : "";
					}
					(t.s = i),
						(i.prototype.write = function (e) {
							if (0 === e.length) return "";
							var t, r;
							if (this.lastNeed) {
								if (void 0 === (t = this.fillLast(e)))
									return "";
								(r = this.lastNeed), (this.lastNeed = 0);
							} else r = 0;
							return r < e.length
								? t
									? t + this.text(e, r)
									: this.text(e, r)
								: t || "";
						}),
						(i.prototype.end = function (e) {
							var t = e && e.length ? this.write(e) : "";
							return this.lastNeed ? t + "�" : t;
						}),
						(i.prototype.text = function (e, t) {
							var r = (function (e, t, r) {
								var n = t.length - 1;
								if (n < r) return 0;
								var o = s(t[n]);
								return o >= 0
									? (o > 0 && (e.lastNeed = o - 1), o)
									: --n < r || -2 === o
									? 0
									: (o = s(t[n])) >= 0
									? (o > 0 && (e.lastNeed = o - 2), o)
									: --n < r || -2 === o
									? 0
									: (o = s(t[n])) >= 0
									? (o > 0 &&
											(2 === o
												? (o = 0)
												: (e.lastNeed = o - 3)),
									  o)
									: 0;
							})(this, e, t);
							if (!this.lastNeed) return e.toString("utf8", t);
							this.lastTotal = r;
							var n = e.length - (r - this.lastNeed);
							return (
								e.copy(this.lastChar, 0, n),
								e.toString("utf8", t, n)
							);
						}),
						(i.prototype.fillLast = function (e) {
							if (this.lastNeed <= e.length)
								return (
									e.copy(
										this.lastChar,
										this.lastTotal - this.lastNeed,
										0,
										this.lastNeed
									),
									this.lastChar.toString(
										this.encoding,
										0,
										this.lastTotal
									)
								);
							e.copy(
								this.lastChar,
								this.lastTotal - this.lastNeed,
								0,
								e.length
							),
								(this.lastNeed -= e.length);
						});
				},
				5524: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.uniqueId =
							t.uniqueNumericId =
							t.convertInchesToTwip =
							t.convertMillimetersToTwip =
								void 0);
					const n = r(2961);
					let o = 0;
					(t.convertMillimetersToTwip = (e) =>
						Math.floor((e / 25.4) * 72 * 20)),
						(t.convertInchesToTwip = (e) =>
							Math.floor(72 * e * 20)),
						(t.uniqueNumericId = () => ++o),
						(t.uniqueId = () => (0, n.nanoid)().toLowerCase());
				},
				3599: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Formatter = void 0),
						(t.Formatter = class {
							format(e, t = {}) {
								const r = e.prepForXml(t);
								if (r) return r;
								throw Error(
									"XMLComponent did not format correctly"
								);
							}
						});
				},
				6117: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(3689), t);
				},
				697: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ImageReplacer = void 0),
						(t.ImageReplacer = class {
							replace(e, t, r) {
								let n = e;
								return (
									t.forEach((e, t) => {
										n = n.replace(
											new RegExp(`{${e.fileName}}`, "g"),
											(r + t).toString()
										);
									}),
									n
								);
							}
							getMediaData(e, t) {
								return t.Array.filter(
									(t) => e.search(`{${t.fileName}}`) > 0
								);
							}
						});
				},
				1399: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Compiler = void 0);
					const n = r(5733),
						o = r(3479),
						i = r(3599),
						s = r(697),
						a = r(9347);
					t.Compiler = class {
						constructor() {
							(this.formatter = new i.Formatter()),
								(this.imageReplacer = new s.ImageReplacer()),
								(this.numberingReplacer =
									new a.NumberingReplacer());
						}
						compile(e, t) {
							const r = new n(),
								o = this.xmlifyFile(e, t);
							for (const e in o) {
								if (!o[e]) continue;
								const t = o[e];
								if (Array.isArray(t))
									for (const e of t) r.file(e.path, e.data);
								else r.file(t.path, t.data);
							}
							for (const t of e.Media.Array) {
								const e = t.stream;
								r.file(`word/media/${t.fileName}`, e);
							}
							return r;
						}
						xmlifyFile(e, t) {
							const r =
									e.Document.Relationships.RelationshipCount +
									1,
								n = o(
									this.formatter.format(e.Document.View, {
										viewWrapper: e.Document,
										file: e,
									}),
									{
										indent: t,
										declaration: {
											standalone: "yes",
											encoding: "UTF-8",
										},
									}
								),
								i = this.imageReplacer.getMediaData(n, e.Media);
							return {
								Relationships: {
									data: (() => (
										i.forEach((t, n) => {
											e.Document.Relationships.createRelationship(
												r + n,
												"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
												`media/${t.fileName}`
											);
										}),
										o(
											this.formatter.format(
												e.Document.Relationships,
												{
													viewWrapper: e.Document,
													file: e,
												}
											),
											{
												indent: t,
												declaration: {
													encoding: "UTF-8",
												},
											}
										)
									))(),
									path: "word/_rels/document.xml.rels",
								},
								Document: {
									data: (() => {
										const t = this.imageReplacer.replace(
											n,
											i,
											r
										);
										return this.numberingReplacer.replace(
											t,
											e.Numbering.ConcreteNumbering
										);
									})(),
									path: "word/document.xml",
								},
								Styles: {
									data: (() => {
										const r = o(
											this.formatter.format(e.Styles, {
												viewWrapper: e.Document,
												file: e,
											}),
											{
												indent: t,
												declaration: {
													standalone: "yes",
													encoding: "UTF-8",
												},
											}
										);
										return this.numberingReplacer.replace(
											r,
											e.Numbering.ConcreteNumbering
										);
									})(),
									path: "word/styles.xml",
								},
								Properties: {
									data: o(
										this.formatter.format(
											e.CoreProperties,
											{ viewWrapper: e.Document, file: e }
										),
										{
											indent: t,
											declaration: {
												standalone: "yes",
												encoding: "UTF-8",
											},
										}
									),
									path: "docProps/core.xml",
								},
								Numbering: {
									data: o(
										this.formatter.format(e.Numbering, {
											viewWrapper: e.Document,
											file: e,
										}),
										{
											indent: t,
											declaration: {
												standalone: "yes",
												encoding: "UTF-8",
											},
										}
									),
									path: "word/numbering.xml",
								},
								FileRelationships: {
									data: o(
										this.formatter.format(
											e.FileRelationships,
											{ viewWrapper: e.Document, file: e }
										),
										{
											indent: t,
											declaration: { encoding: "UTF-8" },
										}
									),
									path: "_rels/.rels",
								},
								HeaderRelationships: e.Headers.map((r, n) => {
									const i = o(
										this.formatter.format(r.View, {
											viewWrapper: r,
											file: e,
										}),
										{
											indent: t,
											declaration: { encoding: "UTF-8" },
										}
									);
									return (
										this.imageReplacer
											.getMediaData(i, e.Media)
											.forEach((e, t) => {
												r.Relationships.createRelationship(
													t,
													"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
													`media/${e.fileName}`
												);
											}),
										{
											data: o(
												this.formatter.format(
													r.Relationships,
													{ viewWrapper: r, file: e }
												),
												{
													indent: t,
													declaration: {
														encoding: "UTF-8",
													},
												}
											),
											path: `word/_rels/header${
												n + 1
											}.xml.rels`,
										}
									);
								}),
								FooterRelationships: e.Footers.map((r, n) => {
									const i = o(
										this.formatter.format(r.View, {
											viewWrapper: r,
											file: e,
										}),
										{
											indent: t,
											declaration: { encoding: "UTF-8" },
										}
									);
									return (
										this.imageReplacer
											.getMediaData(i, e.Media)
											.forEach((e, t) => {
												r.Relationships.createRelationship(
													t,
													"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
													`media/${e.fileName}`
												);
											}),
										{
											data: o(
												this.formatter.format(
													r.Relationships,
													{ viewWrapper: r, file: e }
												),
												{
													indent: t,
													declaration: {
														encoding: "UTF-8",
													},
												}
											),
											path: `word/_rels/footer${
												n + 1
											}.xml.rels`,
										}
									);
								}),
								Headers: e.Headers.map((r, n) => {
									const i = o(
											this.formatter.format(r.View, {
												viewWrapper: r,
												file: e,
											}),
											{
												indent: t,
												declaration: {
													encoding: "UTF-8",
												},
											}
										),
										s = this.imageReplacer.getMediaData(
											i,
											e.Media
										);
									return {
										data: this.imageReplacer.replace(
											i,
											s,
											0
										),
										path: `word/header${n + 1}.xml`,
									};
								}),
								Footers: e.Footers.map((r, n) => {
									const i = o(
											this.formatter.format(r.View, {
												viewWrapper: r,
												file: e,
											}),
											{
												indent: t,
												declaration: {
													encoding: "UTF-8",
												},
											}
										),
										s = this.imageReplacer.getMediaData(
											i,
											e.Media
										);
									return {
										data: this.imageReplacer.replace(
											i,
											s,
											0
										),
										path: `word/footer${n + 1}.xml`,
									};
								}),
								ContentTypes: {
									data: o(
										this.formatter.format(e.ContentTypes, {
											viewWrapper: e.Document,
											file: e,
										}),
										{
											indent: t,
											declaration: { encoding: "UTF-8" },
										}
									),
									path: "[Content_Types].xml",
								},
								CustomProperties: {
									data: o(
										this.formatter.format(
											e.CustomProperties,
											{ viewWrapper: e.Document, file: e }
										),
										{
											indent: t,
											declaration: {
												standalone: "yes",
												encoding: "UTF-8",
											},
										}
									),
									path: "docProps/custom.xml",
								},
								AppProperties: {
									data: o(
										this.formatter.format(e.AppProperties, {
											viewWrapper: e.Document,
											file: e,
										}),
										{
											indent: t,
											declaration: {
												standalone: "yes",
												encoding: "UTF-8",
											},
										}
									),
									path: "docProps/app.xml",
								},
								FootNotes: {
									data: o(
										this.formatter.format(
											e.FootNotes.View,
											{
												viewWrapper: e.FootNotes,
												file: e,
											}
										),
										{
											indent: t,
											declaration: { encoding: "UTF-8" },
										}
									),
									path: "word/footnotes.xml",
								},
								FootNotesRelationships: {
									data: o(
										this.formatter.format(
											e.FootNotes.Relationships,
											{
												viewWrapper: e.FootNotes,
												file: e,
											}
										),
										{
											indent: t,
											declaration: { encoding: "UTF-8" },
										}
									),
									path: "word/_rels/footnotes.xml.rels",
								},
								Settings: {
									data: o(
										this.formatter.format(e.Settings, {
											viewWrapper: e.Document,
											file: e,
										}),
										{
											indent: t,
											declaration: {
												standalone: "yes",
												encoding: "UTF-8",
											},
										}
									),
									path: "word/settings.xml",
								},
							};
						}
					};
				},
				9347: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.NumberingReplacer = void 0),
						(t.NumberingReplacer = class {
							replace(e, t) {
								let r = e;
								for (const e of t)
									r = r.replace(
										new RegExp(
											`{${e.reference}-${e.instance}}`,
											"g"
										),
										e.numId.toString()
									);
								return r;
							}
						});
				},
				3689: function (e, t, r) {
					"use strict";
					var n =
						(this && this.__awaiter) ||
						function (e, t, r, n) {
							return new (r || (r = Promise))(function (o, i) {
								function s(e) {
									try {
										u(n.next(e));
									} catch (e) {
										i(e);
									}
								}
								function a(e) {
									try {
										u(n.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function u(e) {
									var t;
									e.done
										? o(e.value)
										: ((t = e.value),
										  t instanceof r
												? t
												: new r(function (e) {
														e(t);
												  })).then(s, a);
								}
								u((n = n.apply(e, t || [])).next());
							});
						};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Packer = void 0);
					const o = r(1399);
					class i {
						static toBuffer(e, t) {
							return n(this, void 0, void 0, function* () {
								const r = this.compiler.compile(e, t);
								return yield r.generateAsync({
									type: "nodebuffer",
									mimeType:
										"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
									compression: "DEFLATE",
								});
							});
						}
						static toBase64String(e, t) {
							return n(this, void 0, void 0, function* () {
								const r = this.compiler.compile(e, t);
								return yield r.generateAsync({
									type: "base64",
									mimeType:
										"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
									compression: "DEFLATE",
								});
							});
						}
						static toBlob(e, t) {
							return n(this, void 0, void 0, function* () {
								const r = this.compiler.compile(e, t);
								return yield r.generateAsync({
									type: "blob",
									mimeType:
										"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
									compression: "DEFLATE",
								});
							});
						}
					}
					(t.Packer = i), (i.compiler = new o.Compiler());
				},
				4546: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.AppPropertiesAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									xmlns: "xmlns",
									vt: "xmlns:vt",
								});
						}
					}
					t.AppPropertiesAttributes = o;
				},
				2378: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.AppProperties = void 0);
					const n = r(2451),
						o = r(4546);
					class i extends n.XmlComponent {
						constructor() {
							super("Properties"),
								this.root.push(
									new o.AppPropertiesAttributes({
										xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
										vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
									})
								);
						}
					}
					t.AppProperties = i;
				},
				5620: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.BorderStyle = t.BorderElement = void 0);
					const n = r(2451),
						o = r(459);
					class i extends n.XmlComponent {
						constructor(
							e,
							{ color: t, size: r, space: n, style: i }
						) {
							super(e),
								this.root.push(
									new s({
										style: i,
										color:
											void 0 === t
												? void 0
												: (0, o.hexColorValue)(t),
										size:
											void 0 === r
												? void 0
												: (0,
												  o.eighthPointMeasureValue)(r),
										space:
											void 0 === n
												? void 0
												: (0, o.pointMeasureValue)(n),
									})
								);
						}
					}
					t.BorderElement = i;
					class s extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									style: "w:val",
									color: "w:color",
									size: "w:sz",
									space: "w:space",
								});
						}
					}
					var a;
					((a = t.BorderStyle || (t.BorderStyle = {})).SINGLE =
						"single"),
						(a.DASH_DOT_STROKED = "dashDotStroked"),
						(a.DASHED = "dashed"),
						(a.DASH_SMALL_GAP = "dashSmallGap"),
						(a.DOT_DASH = "dotDash"),
						(a.DOT_DOT_DASH = "dotDotDash"),
						(a.DOTTED = "dotted"),
						(a.DOUBLE = "double"),
						(a.DOUBLE_WAVE = "doubleWave"),
						(a.INSET = "inset"),
						(a.NIL = "nil"),
						(a.NONE = "none"),
						(a.OUTSET = "outset"),
						(a.THICK = "thick"),
						(a.THICK_THIN_LARGE_GAP = "thickThinLargeGap"),
						(a.THICK_THIN_MEDIUM_GAP = "thickThinMediumGap"),
						(a.THICK_THIN_SMALL_GAP = "thickThinSmallGap"),
						(a.THIN_THICK_LARGE_GAP = "thinThickLargeGap"),
						(a.THIN_THICK_MEDIUM_GAP = "thinThickMediumGap"),
						(a.THIN_THICK_SMALL_GAP = "thinThickSmallGap"),
						(a.THIN_THICK_THIN_LARGE_GAP = "thinThickThinLargeGap"),
						(a.THIN_THICK_THIN_MEDIUM_GAP =
							"thinThickThinMediumGap"),
						(a.THIN_THICK_THIN_SMALL_GAP = "thinThickThinSmallGap"),
						(a.THREE_D_EMBOSS = "threeDEmboss"),
						(a.THREE_D_ENGRAVE = "threeDEngrave"),
						(a.TRIPLE = "triple"),
						(a.WAVE = "wave");
				},
				5328: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(5620), t);
				},
				6963: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ContentTypeAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { xmlns: "xmlns" });
						}
					}
					t.ContentTypeAttributes = o;
				},
				8351: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ContentTypes = void 0);
					const n = r(2451),
						o = r(6963),
						i = r(6445),
						s = r(5425);
					class a extends n.XmlComponent {
						constructor() {
							super("Types"),
								this.root.push(
									new o.ContentTypeAttributes({
										xmlns: "http://schemas.openxmlformats.org/package/2006/content-types",
									})
								),
								this.root.push(
									new i.Default("image/png", "png")
								),
								this.root.push(
									new i.Default("image/jpeg", "jpeg")
								),
								this.root.push(
									new i.Default("image/jpeg", "jpg")
								),
								this.root.push(
									new i.Default("image/bmp", "bmp")
								),
								this.root.push(
									new i.Default("image/gif", "gif")
								),
								this.root.push(
									new i.Default(
										"application/vnd.openxmlformats-package.relationships+xml",
										"rels"
									)
								),
								this.root.push(
									new i.Default("application/xml", "xml")
								),
								this.root.push(
									new s.Override(
										"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml",
										"/word/document.xml"
									)
								),
								this.root.push(
									new s.Override(
										"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml",
										"/word/styles.xml"
									)
								),
								this.root.push(
									new s.Override(
										"application/vnd.openxmlformats-package.core-properties+xml",
										"/docProps/core.xml"
									)
								),
								this.root.push(
									new s.Override(
										"application/vnd.openxmlformats-officedocument.custom-properties+xml",
										"/docProps/custom.xml"
									)
								),
								this.root.push(
									new s.Override(
										"application/vnd.openxmlformats-officedocument.extended-properties+xml",
										"/docProps/app.xml"
									)
								),
								this.root.push(
									new s.Override(
										"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml",
										"/word/numbering.xml"
									)
								),
								this.root.push(
									new s.Override(
										"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml",
										"/word/footnotes.xml"
									)
								),
								this.root.push(
									new s.Override(
										"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml",
										"/word/settings.xml"
									)
								);
						}
						addFooter(e) {
							this.root.push(
								new s.Override(
									"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml",
									`/word/footer${e}.xml`
								)
							);
						}
						addHeader(e) {
							this.root.push(
								new s.Override(
									"application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml",
									`/word/header${e}.xml`
								)
							);
						}
					}
					t.ContentTypes = a;
				},
				3942: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DefaultAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									contentType: "ContentType",
									extension: "Extension",
								});
						}
					}
					t.DefaultAttributes = o;
				},
				6445: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Default = void 0);
					const n = r(2451),
						o = r(3942);
					class i extends n.XmlComponent {
						constructor(e, t) {
							super("Default"),
								this.root.push(
									new o.DefaultAttributes({
										contentType: e,
										extension: t,
									})
								);
						}
					}
					t.Default = i;
				},
				4348: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.OverrideAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									contentType: "ContentType",
									partName: "PartName",
								});
						}
					}
					t.OverrideAttributes = o;
				},
				5425: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Override = void 0);
					const n = r(2451),
						o = r(4348);
					class i extends n.XmlComponent {
						constructor(e, t) {
							super("Override"),
								this.root.push(
									new o.OverrideAttributes({
										contentType: e,
										partName: t,
									})
								);
						}
					}
					t.Override = i;
				},
				9349: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(2429), t);
				},
				2429: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.CoreProperties = void 0);
					const n = r(2451),
						o = r(7627),
						i = r(459);
					class s extends n.XmlComponent {
						constructor(e) {
							super("cp:coreProperties"),
								this.root.push(
									new o.DocumentAttributes({
										cp: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
										dc: "http://purl.org/dc/elements/1.1/",
										dcterms: "http://purl.org/dc/terms/",
										dcmitype:
											"http://purl.org/dc/dcmitype/",
										xsi: "http://www.w3.org/2001/XMLSchema-instance",
									})
								),
								e.title &&
									this.root.push(
										new n.StringContainer(
											"dc:title",
											e.title
										)
									),
								e.subject &&
									this.root.push(
										new n.StringContainer(
											"dc:subject",
											e.subject
										)
									),
								e.creator &&
									this.root.push(
										new n.StringContainer(
											"dc:creator",
											e.creator
										)
									),
								e.keywords &&
									this.root.push(
										new n.StringContainer(
											"cp:keywords",
											e.keywords
										)
									),
								e.description &&
									this.root.push(
										new n.StringContainer(
											"dc:description",
											e.description
										)
									),
								e.lastModifiedBy &&
									this.root.push(
										new n.StringContainer(
											"cp:lastModifiedBy",
											e.lastModifiedBy
										)
									),
								e.revision &&
									this.root.push(
										new n.StringContainer(
											"cp:revision",
											e.revision
										)
									),
								this.root.push(new a("dcterms:created")),
								this.root.push(new a("dcterms:modified"));
						}
					}
					t.CoreProperties = s;
					class a extends n.XmlComponent {
						constructor(e) {
							super(e),
								this.root.push(
									new o.DocumentAttributes({
										type: "dcterms:W3CDTF",
									})
								),
								this.root.push(
									(0, i.dateTimeValue)(new Date())
								);
						}
					}
				},
				7312: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.CustomPropertiesAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									xmlns: "xmlns",
									vt: "xmlns:vt",
								});
						}
					}
					t.CustomPropertiesAttributes = o;
				},
				45: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.CustomProperties = void 0);
					const n = r(2451),
						o = r(7312),
						i = r(5587);
					class s extends n.XmlComponent {
						constructor(e) {
							super("Properties"),
								(this.properties = []),
								this.root.push(
									new o.CustomPropertiesAttributes({
										xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
										vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
									})
								),
								(this.nextId = 2);
							for (const t of e) this.addCustomProperty(t);
						}
						prepForXml(e) {
							return (
								this.properties.forEach((e) =>
									this.root.push(e)
								),
								super.prepForXml(e)
							);
						}
						addCustomProperty(e) {
							this.properties.push(
								new i.CustomProperty(this.nextId++, e)
							);
						}
					}
					t.CustomProperties = s;
				},
				2455: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.CustomPropertyAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									fmtid: "fmtid",
									pid: "pid",
									name: "name",
								});
						}
					}
					t.CustomPropertyAttributes = o;
				},
				5587: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.CustomPropertyValue = t.CustomProperty = void 0);
					const n = r(2451),
						o = r(2455);
					class i extends n.XmlComponent {
						constructor(e, t) {
							super("property"),
								this.root.push(
									new o.CustomPropertyAttributes({
										fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
										pid: e.toString(),
										name: t.name,
									})
								),
								this.root.push(new s(t.value));
						}
					}
					t.CustomProperty = i;
					class s extends n.XmlComponent {
						constructor(e) {
							super("vt:lpwstr"), this.root.push(e);
						}
					}
					t.CustomPropertyValue = s;
				},
				1157: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(45), t),
						o(r(5587), t);
				},
				7249: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DocumentWrapper = void 0);
					const n = r(6593),
						o = r(7224);
					t.DocumentWrapper = class {
						constructor(e) {
							(this.document = new n.Document(e)),
								(this.relationships = new o.Relationships());
						}
						get View() {
							return this.document;
						}
						get Relationships() {
							return this.relationships;
						}
					};
				},
				6693: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Body = void 0);
					const n = r(2451),
						o = r(7559),
						i = r(7748);
					class s extends n.XmlComponent {
						constructor() {
							super("w:body"), (this.sections = []);
						}
						addSection(e) {
							const t = this.sections.pop();
							this.root.push(this.createSectionParagraph(t)),
								this.sections.push(new i.SectionProperties(e));
						}
						prepForXml(e) {
							return (
								1 === this.sections.length &&
									(this.root.splice(0, 1),
									this.root.push(this.sections.pop())),
								super.prepForXml(e)
							);
						}
						push(e) {
							this.root.push(e);
						}
						createSectionParagraph(e) {
							const t = new o.Paragraph({}),
								r = new o.ParagraphProperties({});
							return r.push(e), t.addChildElement(r), t;
						}
					}
					t.Body = s;
				},
				5290: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(6693), t),
						o(r(3778), t);
				},
				3778: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(7748), t),
						o(r(243), t);
				},
				3014: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Column = t.ColumnAttributes = void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									width: "w:w",
									space: "w:space",
								});
						}
					}
					t.ColumnAttributes = i;
					class s extends o.XmlComponent {
						constructor({ width: e, space: t }) {
							super("w:col"),
								this.root.push(
									new i({
										width: (0, n.twipsMeasureValue)(e),
										space:
											void 0 === t
												? void 0
												: (0, n.twipsMeasureValue)(t),
									})
								);
						}
					}
					t.Column = s;
				},
				1770: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Columns = t.ColumnsAttributes = void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									space: "w:space",
									count: "w:num",
									separate: "w:sep",
									equalWidth: "w:equalWidth",
								});
						}
					}
					t.ColumnsAttributes = i;
					class s extends o.XmlComponent {
						constructor({
							space: e,
							count: t,
							separate: r,
							equalWidth: o,
							children: s,
						}) {
							super("w:cols"),
								this.root.push(
									new i({
										space:
											void 0 === e
												? void 0
												: (0, n.twipsMeasureValue)(e),
										count:
											void 0 === t
												? void 0
												: (0, n.decimalNumber)(t),
										separate: r,
										equalWidth: o,
									})
								),
								!o &&
									s &&
									s.forEach((e) => this.addChildElement(e));
						}
					}
					t.Columns = s;
				},
				2062: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DocumentGrid = t.DocGridAttributes = void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { linePitch: "w:linePitch" });
						}
					}
					t.DocGridAttributes = i;
					class s extends o.XmlComponent {
						constructor(e) {
							super("w:docGrid"),
								this.root.push(
									new i({
										linePitch: (0, n.decimalNumber)(e),
									})
								);
						}
					}
					t.DocumentGrid = s;
				},
				9719: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.HeaderFooterReference =
							t.HeaderFooterType =
							t.HeaderFooterReferenceType =
								void 0);
					const n = r(2451);
					var o, i;
					!(function (e) {
						(e.DEFAULT = "default"),
							(e.FIRST = "first"),
							(e.EVEN = "even");
					})(
						(o =
							t.HeaderFooterReferenceType ||
							(t.HeaderFooterReferenceType = {}))
					);
					class s extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { type: "w:type", id: "r:id" });
						}
					}
					((i =
						t.HeaderFooterType ||
						(t.HeaderFooterType = {})).HEADER =
						"w:headerReference"),
						(i.FOOTER = "w:footerReference");
					class a extends n.XmlComponent {
						constructor(e, t) {
							super(e),
								this.root.push(
									new s({
										type: t.type || o.DEFAULT,
										id: `rId${t.id}`,
									})
								);
						}
					}
					t.HeaderFooterReference = a;
				},
				243: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(3014), t),
						o(r(1770), t),
						o(r(2062), t),
						o(r(7649), t),
						o(r(7797), t),
						o(r(6527), t),
						o(r(7189), t),
						o(r(6527), t),
						o(r(7067), t),
						o(r(5849), t),
						o(r(9719), t);
				},
				7067: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.LineNumberType =
							t.LineNumberAttributes =
							t.LineNumberRestartFormat =
								void 0);
					const n = r(459),
						o = r(2451);
					var i;
					((i =
						t.LineNumberRestartFormat ||
						(t.LineNumberRestartFormat = {})).NEW_PAGE = "newPage"),
						(i.NEW_SECTION = "newSection"),
						(i.CONTINUOUS = "continuous");
					class s extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									countBy: "w:countBy",
									start: "w:start",
									restart: "w:restart",
									distance: "w:distance",
								});
						}
					}
					t.LineNumberAttributes = s;
					class a extends o.XmlComponent {
						constructor({
							countBy: e,
							start: t,
							restart: r,
							distance: o,
						}) {
							super("w:lnNumType"),
								this.root.push(
									new s({
										countBy:
											void 0 === e
												? void 0
												: (0, n.decimalNumber)(e),
										start:
											void 0 === t
												? void 0
												: (0, n.decimalNumber)(t),
										restart: r,
										distance:
											void 0 === o
												? void 0
												: (0, n.twipsMeasureValue)(o),
									})
								);
						}
					}
					t.LineNumberType = a;
				},
				6527: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PageBorders =
							t.PageBorderZOrder =
							t.PageBorderOffsetFrom =
							t.PageBorderDisplay =
								void 0);
					const n = r(5328),
						o = r(2451);
					var i, s, a;
					((a =
						t.PageBorderDisplay ||
						(t.PageBorderDisplay = {})).ALL_PAGES = "allPages"),
						(a.FIRST_PAGE = "firstPage"),
						(a.NOT_FIRST_PAGE = "notFirstPage"),
						((s =
							t.PageBorderOffsetFrom ||
							(t.PageBorderOffsetFrom = {})).PAGE = "page"),
						(s.TEXT = "text"),
						((i =
							t.PageBorderZOrder ||
							(t.PageBorderZOrder = {})).BACK = "back"),
						(i.FRONT = "front");
					class u extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									display: "w:display",
									offsetFrom: "w:offsetFrom",
									zOrder: "w:zOrder",
								});
						}
					}
					class c extends o.IgnoreIfEmptyXmlComponent {
						constructor(e) {
							super("w:pgBorders"),
								e &&
									(e.pageBorders
										? this.root.push(
												new u({
													display:
														e.pageBorders.display,
													offsetFrom:
														e.pageBorders
															.offsetFrom,
													zOrder: e.pageBorders
														.zOrder,
												})
										  )
										: this.root.push(new u({})),
									e.pageBorderTop &&
										this.root.push(
											new n.BorderElement(
												"w:top",
												e.pageBorderTop
											)
										),
									e.pageBorderLeft &&
										this.root.push(
											new n.BorderElement(
												"w:left",
												e.pageBorderLeft
											)
										),
									e.pageBorderBottom &&
										this.root.push(
											new n.BorderElement(
												"w:bottom",
												e.pageBorderBottom
											)
										),
									e.pageBorderRight &&
										this.root.push(
											new n.BorderElement(
												"w:right",
												e.pageBorderRight
											)
										));
						}
					}
					t.PageBorders = c;
				},
				7189: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PageMargin = t.PageMarginAttributes = void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									top: "w:top",
									right: "w:right",
									bottom: "w:bottom",
									left: "w:left",
									header: "w:header",
									footer: "w:footer",
									gutter: "w:gutter",
								});
						}
					}
					t.PageMarginAttributes = i;
					class s extends o.XmlComponent {
						constructor(e, t, r, o, s, a, u) {
							super("w:pgMar"),
								this.root.push(
									new i({
										top: (0, n.signedTwipsMeasureValue)(e),
										right: (0, n.twipsMeasureValue)(t),
										bottom: (0, n.signedTwipsMeasureValue)(
											r
										),
										left: (0, n.twipsMeasureValue)(o),
										header: (0, n.twipsMeasureValue)(s),
										footer: (0, n.twipsMeasureValue)(a),
										gutter: (0, n.twipsMeasureValue)(u),
									})
								);
						}
					}
					t.PageMargin = s;
				},
				7797: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PageNumberType =
							t.PageNumberTypeAttributes =
							t.PageNumberSeparator =
								void 0);
					const n = r(459),
						o = r(2451);
					var i;
					((i =
						t.PageNumberSeparator ||
						(t.PageNumberSeparator = {})).HYPHEN = "hyphen"),
						(i.PERIOD = "period"),
						(i.COLON = "colon"),
						(i.EM_DASH = "emDash"),
						(i.EN_DASH = "endash");
					class s extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									start: "w:start",
									formatType: "w:fmt",
									separator: "w:chapSep",
								});
						}
					}
					t.PageNumberTypeAttributes = s;
					class a extends o.XmlComponent {
						constructor({ start: e, formatType: t, separator: r }) {
							super("w:pgNumType"),
								this.root.push(
									new s({
										start:
											void 0 === e
												? void 0
												: (0, n.decimalNumber)(e),
										formatType: t,
										separator: r,
									})
								);
						}
					}
					t.PageNumberType = a;
				},
				7649: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PageSize =
							t.PageSizeAttributes =
							t.PageOrientation =
								void 0);
					const n = r(459),
						o = r(2451);
					var i;
					!(function (e) {
						(e.PORTRAIT = "portrait"), (e.LANDSCAPE = "landscape");
					})((i = t.PageOrientation || (t.PageOrientation = {})));
					class s extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									width: "w:w",
									height: "w:h",
									orientation: "w:orient",
								});
						}
					}
					t.PageSizeAttributes = s;
					class a extends o.XmlComponent {
						constructor(e, t, r) {
							super("w:pgSz");
							const o = r === i.LANDSCAPE,
								a = (0, n.twipsMeasureValue)(e),
								u = (0, n.twipsMeasureValue)(t);
							this.root.push(
								new s({
									width: o ? u : a,
									height: o ? a : u,
									orientation: r,
								})
							);
						}
					}
					t.PageSize = a;
				},
				5849: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Type =
							t.SectionTypeAttributes =
							t.SectionType =
								void 0);
					const n = r(2451);
					var o;
					((o = t.SectionType || (t.SectionType = {})).NEXT_PAGE =
						"nextPage"),
						(o.NEXT_COLUMN = "nextColumn"),
						(o.CONTINUOUS = "continuous"),
						(o.EVEN_PAGE = "evenPage"),
						(o.ODD_PAGE = "oddPage");
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { val: "w:val" });
						}
					}
					t.SectionTypeAttributes = i;
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:type"), this.root.push(new i({ val: e }));
						}
					}
					t.Type = s;
				},
				7748: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SectionProperties =
							t.sectionPageSizeDefaults =
							t.sectionMarginDefaults =
								void 0);
					const n = r(4087),
						o = r(2451),
						i = r(9719),
						s = r(1770),
						a = r(2062),
						u = r(7067),
						c = r(6527),
						l = r(7189),
						p = r(7797),
						h = r(7649),
						d = r(5849);
					(t.sectionMarginDefaults = {
						TOP: "1in",
						RIGHT: "1in",
						BOTTOM: "1in",
						LEFT: "1in",
						HEADER: 708,
						FOOTER: 708,
						GUTTER: 0,
					}),
						(t.sectionPageSizeDefaults = {
							WIDTH: 11906,
							HEIGHT: 16838,
							ORIENTATION: h.PageOrientation.PORTRAIT,
						});
					class f extends o.XmlComponent {
						constructor({
							page: {
								size: {
									width: e = t.sectionPageSizeDefaults.WIDTH,
									height: r = t.sectionPageSizeDefaults
										.HEIGHT,
									orientation: f = t.sectionPageSizeDefaults
										.ORIENTATION,
								} = {},
								margin: {
									top: m = t.sectionMarginDefaults.TOP,
									right: g = t.sectionMarginDefaults.RIGHT,
									bottom: b = t.sectionMarginDefaults.BOTTOM,
									left: y = t.sectionMarginDefaults.LEFT,
									header: w = t.sectionMarginDefaults.HEADER,
									footer: v = t.sectionMarginDefaults.FOOTER,
									gutter: _ = t.sectionMarginDefaults.GUTTER,
								} = {},
								pageNumbers: x = {},
								borders: E,
							} = {},
							grid: { linePitch: T = 360 } = {},
							headerWrapperGroup: O = {},
							footerWrapperGroup: S = {},
							lineNumbers: A,
							titlePage: P,
							verticalAlign: C,
							column: R,
							type: I,
						} = {}) {
							super("w:sectPr"),
								this.addHeaderFooterGroup(
									i.HeaderFooterType.HEADER,
									O
								),
								this.addHeaderFooterGroup(
									i.HeaderFooterType.FOOTER,
									S
								),
								I && this.root.push(new d.Type(I)),
								this.root.push(new h.PageSize(e, r, f)),
								this.root.push(
									new l.PageMargin(m, g, b, y, w, v, _)
								),
								E && this.root.push(new c.PageBorders(E)),
								A && this.root.push(new u.LineNumberType(A)),
								this.root.push(new p.PageNumberType(x)),
								R && this.root.push(new s.Columns(R)),
								C &&
									this.root.push(
										new n.VerticalAlignElement(C)
									),
								void 0 !== P &&
									this.root.push(
										new o.OnOffElement("w:titlePg", P)
									),
								this.root.push(new a.DocumentGrid(T));
						}
						addHeaderFooterGroup(e, t) {
							t.default &&
								this.root.push(
									new i.HeaderFooterReference(e, {
										type: i.HeaderFooterReferenceType
											.DEFAULT,
										id: t.default.View.ReferenceId,
									})
								),
								t.first &&
									this.root.push(
										new i.HeaderFooterReference(e, {
											type: i.HeaderFooterReferenceType
												.FIRST,
											id: t.first.View.ReferenceId,
										})
									),
								t.even &&
									this.root.push(
										new i.HeaderFooterReference(e, {
											type: i.HeaderFooterReferenceType
												.EVEN,
											id: t.even.View.ReferenceId,
										})
									);
						}
					}
					t.SectionProperties = f;
				},
				7627: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DocumentAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									wpc: "xmlns:wpc",
									mc: "xmlns:mc",
									o: "xmlns:o",
									r: "xmlns:r",
									m: "xmlns:m",
									v: "xmlns:v",
									wp14: "xmlns:wp14",
									wp: "xmlns:wp",
									w10: "xmlns:w10",
									w: "xmlns:w",
									w14: "xmlns:w14",
									w15: "xmlns:w15",
									wpg: "xmlns:wpg",
									wpi: "xmlns:wpi",
									wne: "xmlns:wne",
									wps: "xmlns:wps",
									Ignorable: "mc:Ignorable",
									cp: "xmlns:cp",
									dc: "xmlns:dc",
									dcterms: "xmlns:dcterms",
									dcmitype: "xmlns:dcmitype",
									xsi: "xmlns:xsi",
									type: "xsi:type",
								});
						}
					}
					t.DocumentAttributes = o;
				},
				2844: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DocumentBackground = t.DocumentBackgroundAttributes =
							void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									color: "w:color",
									themeColor: "w:themeColor",
									themeShade: "w:themeShade",
									themeTint: "w:themeTint",
								});
						}
					}
					t.DocumentBackgroundAttributes = i;
					class s extends o.XmlComponent {
						constructor(e) {
							super("w:background"),
								this.root.push(
									new i({
										color: (0, n.hexColorValue)(
											e.color ? e.color : "FFFFFF"
										),
										themeColor: e.themeColor,
										themeShade:
											void 0 === e.themeShade
												? void 0
												: (0, n.uCharHexNumber)(
														e.themeShade
												  ),
										themeTint:
											void 0 === e.themeTint
												? void 0
												: (0, n.uCharHexNumber)(
														e.themeTint
												  ),
									})
								);
						}
					}
					t.DocumentBackground = s;
				},
				8736: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(2844), t);
				},
				3504: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Document = void 0);
					const n = r(2451),
						o = r(5290),
						i = r(7627),
						s = r(8736);
					class a extends n.XmlComponent {
						constructor(e) {
							super("w:document"),
								this.root.push(
									new i.DocumentAttributes({
										wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
										mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
										o: "urn:schemas-microsoft-com:office:office",
										r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
										m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
										v: "urn:schemas-microsoft-com:vml",
										wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
										wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
										w10: "urn:schemas-microsoft-com:office:word",
										w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
										w14: "http://schemas.microsoft.com/office/word/2010/wordml",
										w15: "http://schemas.microsoft.com/office/word/2012/wordml",
										wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
										wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
										wne: "http://schemas.microsoft.com/office/word/2006/wordml",
										wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
										Ignorable: "w14 w15 wp14",
									})
								),
								(this.body = new o.Body()),
								this.root.push(
									new s.DocumentBackground(e.background)
								),
								this.root.push(this.body);
						}
						add(e) {
							return this.body.push(e), this;
						}
						get Body() {
							return this.body;
						}
					}
					t.Document = a;
				},
				6593: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(3504), t),
						o(r(7627), t),
						o(r(5290), t),
						o(r(8736), t);
				},
				1668: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.AnchorAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									distT: "distT",
									distB: "distB",
									distL: "distL",
									distR: "distR",
									allowOverlap: "allowOverlap",
									behindDoc: "behindDoc",
									layoutInCell: "layoutInCell",
									locked: "locked",
									relativeHeight: "relativeHeight",
									simplePos: "simplePos",
								});
						}
					}
					t.AnchorAttributes = o;
				},
				9128: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Anchor = void 0);
					const n = r(2451),
						o = r(1178),
						i = r(3344),
						s = r(1712),
						a = r(9779),
						u = r(1384),
						c = r(2215),
						l = r(4924),
						p = r(1668);
					class h extends n.XmlComponent {
						constructor(e, t, r) {
							super("wp:anchor");
							const n = Object.assign(
								{
									allowOverlap: !0,
									behindDocument: !1,
									lockAnchor: !1,
									layoutInCell: !0,
									verticalPosition: {},
									horizontalPosition: {},
								},
								r.floating
							);
							if (
								(this.root.push(
									new p.AnchorAttributes({
										distT:
											(n.margins && n.margins.top) || 0,
										distB:
											(n.margins && n.margins.bottom) ||
											0,
										distL:
											(n.margins && n.margins.left) || 0,
										distR:
											(n.margins && n.margins.right) || 0,
										simplePos: "0",
										allowOverlap:
											!0 === n.allowOverlap ? "1" : "0",
										behindDoc:
											!0 === n.behindDocument ? "1" : "0",
										locked: !0 === n.lockAnchor ? "1" : "0",
										layoutInCell:
											!0 === n.layoutInCell ? "1" : "0",
										relativeHeight: n.zIndex
											? n.zIndex
											: t.emus.y,
									})
								),
								this.root.push(new o.SimplePos()),
								this.root.push(
									new o.HorizontalPosition(
										n.horizontalPosition
									)
								),
								this.root.push(
									new o.VerticalPosition(n.verticalPosition)
								),
								this.root.push(
									new c.Extent(t.emus.x, t.emus.y)
								),
								this.root.push(new u.EffectExtent()),
								void 0 !== r.floating &&
									void 0 !== r.floating.wrap)
							)
								switch (r.floating.wrap.type) {
									case s.TextWrappingType.SQUARE:
										this.root.push(
											new s.WrapSquare(
												r.floating.wrap,
												r.floating.margins
											)
										);
										break;
									case s.TextWrappingType.TIGHT:
										this.root.push(
											new s.WrapTight(r.floating.margins)
										);
										break;
									case s.TextWrappingType.TOP_AND_BOTTOM:
										this.root.push(
											new s.WrapTopAndBottom(
												r.floating.margins
											)
										);
										break;
									case s.TextWrappingType.NONE:
									default:
										this.root.push(new s.WrapNone());
								}
							else this.root.push(new s.WrapNone());
							this.root.push(new a.DocProperties()),
								this.root.push(new l.GraphicFrameProperties()),
								this.root.push(new i.Graphic(e, t));
						}
					}
					t.Anchor = h;
				},
				2439: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(9128), t),
						o(r(1668), t);
				},
				2578: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DocPropertiesAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									id: "id",
									name: "name",
									descr: "descr",
								});
						}
					}
					t.DocPropertiesAttributes = o;
				},
				9779: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DocProperties = void 0);
					const n = r(2451),
						o = r(2578);
					class i extends n.XmlComponent {
						constructor() {
							super("wp:docPr"),
								this.root.push(
									new o.DocPropertiesAttributes({
										id: 0,
										name: "",
										descr: "",
									})
								);
						}
					}
					t.DocProperties = i;
				},
				5180: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Drawing = void 0);
					const n = r(2451),
						o = r(2439),
						i = r(8683);
					class s extends n.XmlComponent {
						constructor(e, t = {}) {
							super("w:drawing"),
								t.floating
									? this.root.push(
											new o.Anchor(e, e.transformation, t)
									  )
									: ((this.inline = new i.Inline(
											e,
											e.transformation
									  )),
									  this.root.push(this.inline));
						}
					}
					t.Drawing = s;
				},
				1050: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.EffectExtentAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									b: "b",
									l: "l",
									r: "r",
									t: "t",
								});
						}
					}
					t.EffectExtentAttributes = o;
				},
				1384: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.EffectExtent = void 0);
					const n = r(2451),
						o = r(1050);
					class i extends n.XmlComponent {
						constructor() {
							super("wp:effectExtent"),
								this.root.push(
									new o.EffectExtentAttributes({
										b: 0,
										l: 0,
										r: 0,
										t: 0,
									})
								);
						}
					}
					t.EffectExtent = i;
				},
				488: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ExtentAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { cx: "cx", cy: "cy" });
						}
					}
					t.ExtentAttributes = o;
				},
				2215: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Extent = void 0);
					const n = r(2451),
						o = r(488);
					class i extends n.XmlComponent {
						constructor(e, t) {
							super("wp:extent"),
								(this.attributes = new o.ExtentAttributes({
									cx: e,
									cy: t,
								})),
								this.root.push(this.attributes);
						}
					}
					t.Extent = i;
				},
				8982: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Align = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("wp:align"), this.root.push(e);
						}
					}
					t.Align = o;
				},
				4146: (e, t) => {
					"use strict";
					var r, n;
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.VerticalPositionRelativeFrom =
							t.HorizontalPositionRelativeFrom =
								void 0),
						((n =
							t.HorizontalPositionRelativeFrom ||
							(t.HorizontalPositionRelativeFrom = {})).CHARACTER =
							"character"),
						(n.COLUMN = "column"),
						(n.INSIDE_MARGIN = "insideMargin"),
						(n.LEFT_MARGIN = "leftMargin"),
						(n.MARGIN = "margin"),
						(n.OUTSIDE_MARGIN = "outsideMargin"),
						(n.PAGE = "page"),
						(n.RIGHT_MARGIN = "rightMargin"),
						((r =
							t.VerticalPositionRelativeFrom ||
							(t.VerticalPositionRelativeFrom =
								{})).BOTTOM_MARGIN = "bottomMargin"),
						(r.INSIDE_MARGIN = "insideMargin"),
						(r.LINE = "line"),
						(r.MARGIN = "margin"),
						(r.OUTSIDE_MARGIN = "outsideMargin"),
						(r.PAGE = "page"),
						(r.PARAGRAPH = "paragraph"),
						(r.TOP_MARGIN = "topMargin");
				},
				1806: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.HorizontalPosition = void 0);
					const n = r(2451),
						o = r(8982),
						i = r(4146),
						s = r(5102);
					class a extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									relativeFrom: "relativeFrom",
								});
						}
					}
					class u extends n.XmlComponent {
						constructor(e) {
							if (
								(super("wp:positionH"),
								this.root.push(
									new a({
										relativeFrom:
											e.relative ||
											i.HorizontalPositionRelativeFrom
												.PAGE,
									})
								),
								e.align)
							)
								this.root.push(new o.Align(e.align));
							else {
								if (void 0 === e.offset)
									throw new Error(
										"There is no configuration provided for floating position (Align or offset)"
									);
								this.root.push(new s.PositionOffset(e.offset));
							}
						}
					}
					t.HorizontalPosition = u;
				},
				1178: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(4146), t),
						o(r(4050), t),
						o(r(1806), t),
						o(r(5935), t);
				},
				5102: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PositionOffset = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("wp:posOffset"), this.root.push(e.toString());
						}
					}
					t.PositionOffset = o;
				},
				4050: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SimplePos = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { x: "x", y: "y" });
						}
					}
					class i extends n.XmlComponent {
						constructor() {
							super("wp:simplePos"),
								this.root.push(new o({ x: 0, y: 0 }));
						}
					}
					t.SimplePos = i;
				},
				5935: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.VerticalPosition = void 0);
					const n = r(2451),
						o = r(8982),
						i = r(4146),
						s = r(5102);
					class a extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									relativeFrom: "relativeFrom",
								});
						}
					}
					class u extends n.XmlComponent {
						constructor(e) {
							if (
								(super("wp:positionV"),
								this.root.push(
									new a({
										relativeFrom:
											e.relative ||
											i.VerticalPositionRelativeFrom.PAGE,
									})
								),
								e.align)
							)
								this.root.push(new o.Align(e.align));
							else {
								if (void 0 === e.offset)
									throw new Error(
										"There is no configuration provided for floating position (Align or offset)"
									);
								this.root.push(new s.PositionOffset(e.offset));
							}
						}
					}
					t.VerticalPosition = u;
				},
				5506: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.GraphicFrameLockAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									xmlns: "xmlns:a",
									noChangeAspect: "noChangeAspect",
								});
						}
					}
					t.GraphicFrameLockAttributes = o;
				},
				8460: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.GraphicFrameLocks = void 0);
					const n = r(2451),
						o = r(5506);
					class i extends n.XmlComponent {
						constructor() {
							super("a:graphicFrameLocks"),
								this.root.push(
									new o.GraphicFrameLockAttributes({
										xmlns: "http://schemas.openxmlformats.org/drawingml/2006/main",
										noChangeAspect: 1,
									})
								);
						}
					}
					t.GraphicFrameLocks = i;
				},
				4924: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.GraphicFrameProperties = void 0);
					const n = r(2451),
						o = r(8460);
					class i extends n.XmlComponent {
						constructor() {
							super("wp:cNvGraphicFramePr"),
								this.root.push(new o.GraphicFrameLocks());
						}
					}
					t.GraphicFrameProperties = i;
				},
				6876: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(5180), t),
						o(r(1712), t),
						o(r(1178), t);
				},
				5842: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.GraphicDataAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { uri: "uri" });
						}
					}
					t.GraphicDataAttributes = o;
				},
				9902: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.GraphicData = void 0);
					const n = r(2451),
						o = r(5842),
						i = r(8806);
					class s extends n.XmlComponent {
						constructor(e, t) {
							super("a:graphicData"),
								this.root.push(
									new o.GraphicDataAttributes({
										uri: "http://schemas.openxmlformats.org/drawingml/2006/picture",
									})
								),
								(this.pic = new i.Pic(e, t)),
								this.root.push(this.pic);
						}
					}
					t.GraphicData = s;
				},
				5729: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(9902), t);
				},
				2554: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.BlipFill = void 0);
					const n = r(2451),
						o = r(7156),
						i = r(3829),
						s = r(7099);
					class a extends n.XmlComponent {
						constructor(e) {
							super("pic:blipFill"),
								this.root.push(new o.Blip(e)),
								this.root.push(new i.SourceRectangle()),
								this.root.push(new s.Stretch());
						}
					}
					t.BlipFill = a;
				},
				7156: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Blip = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									embed: "r:embed",
									cstate: "cstate",
								});
						}
					}
					class i extends n.XmlComponent {
						constructor(e) {
							super("a:blip"),
								this.root.push(
									new o({
										embed: `rId{${e.fileName}}`,
										cstate: "none",
									})
								);
						}
					}
					t.Blip = i;
				},
				3829: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SourceRectangle = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("a:srcRect");
						}
					}
					t.SourceRectangle = o;
				},
				7099: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Stretch = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("a:fillRect");
						}
					}
					class i extends n.XmlComponent {
						constructor() {
							super("a:stretch"), this.root.push(new o());
						}
					}
					t.Stretch = i;
				},
				8806: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(5826), t);
				},
				907: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ChildNonVisualProperties = void 0);
					const n = r(2451),
						o = r(9467);
					class i extends n.XmlComponent {
						constructor() {
							super("pic:cNvPicPr"),
								this.root.push(new o.PicLocks());
						}
					}
					t.ChildNonVisualProperties = i;
				},
				2702: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PicLocksAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									noChangeAspect: "noChangeAspect",
									noChangeArrowheads: "noChangeArrowheads",
								});
						}
					}
					t.PicLocksAttributes = o;
				},
				9467: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PicLocks = void 0);
					const n = r(2451),
						o = r(2702);
					class i extends n.XmlComponent {
						constructor() {
							super("a:picLocks"),
								this.root.push(
									new o.PicLocksAttributes({
										noChangeAspect: 1,
										noChangeArrowheads: 1,
									})
								);
						}
					}
					t.PicLocks = i;
				},
				3105: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.NonVisualPicProperties = void 0);
					const n = r(2451),
						o = r(907),
						i = r(7703);
					class s extends n.XmlComponent {
						constructor() {
							super("pic:nvPicPr"),
								this.root.push(new i.NonVisualProperties()),
								this.root.push(
									new o.ChildNonVisualProperties()
								);
						}
					}
					t.NonVisualPicProperties = s;
				},
				2829: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.NonVisualPropertiesAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									id: "id",
									name: "name",
									descr: "descr",
								});
						}
					}
					t.NonVisualPropertiesAttributes = o;
				},
				7703: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.NonVisualProperties = void 0);
					const n = r(2451),
						o = r(2829);
					class i extends n.XmlComponent {
						constructor() {
							super("pic:cNvPr"),
								this.root.push(
									new o.NonVisualPropertiesAttributes({
										id: 0,
										name: "",
										descr: "",
									})
								);
						}
					}
					t.NonVisualProperties = i;
				},
				5665: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PicAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { xmlns: "xmlns:pic" });
						}
					}
					t.PicAttributes = o;
				},
				5826: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Pic = void 0);
					const n = r(2451),
						o = r(2554),
						i = r(3105),
						s = r(5665),
						a = r(6369);
					class u extends n.XmlComponent {
						constructor(e, t) {
							super("pic:pic"),
								this.root.push(
									new s.PicAttributes({
										xmlns: "http://schemas.openxmlformats.org/drawingml/2006/picture",
									})
								),
								this.root.push(new i.NonVisualPicProperties()),
								this.root.push(new o.BlipFill(e)),
								this.root.push(new a.ShapeProperties(t));
						}
					}
					t.Pic = u;
				},
				8269: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ExtentsAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { cx: "cx", cy: "cy" });
						}
					}
					t.ExtentsAttributes = o;
				},
				9905: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Extents = void 0);
					const n = r(2451),
						o = r(8269);
					class i extends n.XmlComponent {
						constructor(e, t) {
							super("a:ext"),
								(this.attributes = new o.ExtentsAttributes({
									cx: e,
									cy: t,
								})),
								this.root.push(this.attributes);
						}
					}
					t.Extents = i;
				},
				2499: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Form = t.FormAttributes = void 0);
					const n = r(2451),
						o = r(9905),
						i = r(2243);
					class s extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									flipVertical: "flipV",
									flipHorizontal: "flipH",
									rotation: "rot",
								});
						}
					}
					t.FormAttributes = s;
					class a extends n.XmlComponent {
						constructor(e) {
							var t, r;
							super("a:xfrm"),
								this.root.push(
									new s({
										flipVertical:
											null === (t = e.flip) ||
											void 0 === t
												? void 0
												: t.vertical,
										flipHorizontal:
											null === (r = e.flip) ||
											void 0 === r
												? void 0
												: r.horizontal,
										rotation: e.rotation,
									})
								),
								(this.extents = new o.Extents(
									e.emus.x,
									e.emus.y
								)),
								this.root.push(new i.Offset()),
								this.root.push(this.extents);
						}
					}
					t.Form = a;
				},
				7879: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(2499), t);
				},
				6856: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.OffsetAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { x: "x", y: "y" });
						}
					}
					t.OffsetAttributes = o;
				},
				2243: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Offset = void 0);
					const n = r(2451),
						o = r(6856);
					class i extends n.XmlComponent {
						constructor() {
							super("a:off"),
								this.root.push(
									new o.OffsetAttributes({ x: 0, y: 0 })
								);
						}
					}
					t.Offset = i;
				},
				2526: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.AdjustmentValues = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("a:avLst");
						}
					}
					t.AdjustmentValues = o;
				},
				9065: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PresetGeometryAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { prst: "prst" });
						}
					}
					t.PresetGeometryAttributes = o;
				},
				6325: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PresetGeometry = void 0);
					const n = r(2451),
						o = r(2526),
						i = r(9065);
					class s extends n.XmlComponent {
						constructor() {
							super("a:prstGeom"),
								this.root.push(
									new i.PresetGeometryAttributes({
										prst: "rect",
									})
								),
								this.root.push(new o.AdjustmentValues());
						}
					}
					t.PresetGeometry = s;
				},
				9493: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ShapePropertiesAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { bwMode: "bwMode" });
						}
					}
					t.ShapePropertiesAttributes = o;
				},
				6369: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ShapeProperties = void 0);
					const n = r(2451),
						o = r(7879),
						i = r(6325),
						s = r(9493);
					class a extends n.XmlComponent {
						constructor(e) {
							super("pic:spPr"),
								this.root.push(
									new s.ShapePropertiesAttributes({
										bwMode: "auto",
									})
								),
								(this.form = new o.Form(e)),
								this.root.push(this.form),
								this.root.push(new i.PresetGeometry());
						}
					}
					t.ShapeProperties = a;
				},
				1104: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Graphic = void 0);
					const n = r(2451),
						o = r(5729);
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { a: "xmlns:a" });
						}
					}
					class s extends n.XmlComponent {
						constructor(e, t) {
							super("a:graphic"),
								this.root.push(
									new i({
										a: "http://schemas.openxmlformats.org/drawingml/2006/main",
									})
								),
								(this.data = new o.GraphicData(e, t)),
								this.root.push(this.data);
						}
					}
					t.Graphic = s;
				},
				3344: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(1104), t);
				},
				8683: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(4947), t);
				},
				2340: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.InlineAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									distT: "distT",
									distB: "distB",
									distL: "distL",
									distR: "distR",
								});
						}
					}
					t.InlineAttributes = o;
				},
				4947: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Inline = void 0);
					const n = r(2451),
						o = r(9779),
						i = r(1384),
						s = r(2215),
						a = r(4924),
						u = r(3344),
						c = r(2340);
					class l extends n.XmlComponent {
						constructor(e, t) {
							super("wp:inline"),
								this.root.push(
									new c.InlineAttributes({
										distT: 0,
										distB: 0,
										distL: 0,
										distR: 0,
									})
								),
								(this.extent = new s.Extent(
									t.emus.x,
									t.emus.y
								)),
								(this.graphic = new u.Graphic(e, t)),
								this.root.push(this.extent),
								this.root.push(new i.EffectExtent()),
								this.root.push(new o.DocProperties()),
								this.root.push(new a.GraphicFrameProperties()),
								this.root.push(this.graphic);
						}
					}
					t.Inline = l;
				},
				1712: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(2256), t),
						o(r(3520), t),
						o(r(2543), t),
						o(r(305), t),
						o(r(2615), t);
				},
				2256: (e, t) => {
					"use strict";
					var r, n;
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TextWrappingSide = t.TextWrappingType = void 0),
						((n = t.TextWrappingType || (t.TextWrappingType = {}))[
							(n.NONE = 0)
						] = "NONE"),
						(n[(n.SQUARE = 1)] = "SQUARE"),
						(n[(n.TIGHT = 2)] = "TIGHT"),
						(n[(n.TOP_AND_BOTTOM = 3)] = "TOP_AND_BOTTOM"),
						((r =
							t.TextWrappingSide ||
							(t.TextWrappingSide = {})).BOTH_SIDES =
							"bothSides"),
						(r.LEFT = "left"),
						(r.RIGHT = "right"),
						(r.LARGEST = "largest");
				},
				3520: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.WrapNone = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("wp:wrapNone");
						}
					}
					t.WrapNone = o;
				},
				2543: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.WrapSquare = void 0);
					const n = r(2451),
						o = r(1712);
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									distT: "distT",
									distB: "distB",
									distL: "distL",
									distR: "distR",
									wrapText: "wrapText",
								});
						}
					}
					class s extends n.XmlComponent {
						constructor(
							e,
							t = { top: 0, bottom: 0, left: 0, right: 0 }
						) {
							super("wp:wrapSquare"),
								this.root.push(
									new i({
										wrapText:
											e.side ||
											o.TextWrappingSide.BOTH_SIDES,
										distT: t.top,
										distB: t.bottom,
										distL: t.left,
										distR: t.right,
									})
								);
						}
					}
					t.WrapSquare = s;
				},
				305: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.WrapTight = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									distT: "distT",
									distB: "distB",
								});
						}
					}
					class i extends n.XmlComponent {
						constructor(e = { top: 0, bottom: 0 }) {
							super("wp:wrapTight"),
								this.root.push(
									new o({ distT: e.top, distB: e.bottom })
								);
						}
					}
					t.WrapTight = i;
				},
				2615: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.WrapTopAndBottom = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									distT: "distT",
									distB: "distB",
								});
						}
					}
					class i extends n.XmlComponent {
						constructor(e = { top: 0, bottom: 0 }) {
							super("wp:wrapTopAndBottom"),
								this.root.push(
									new o({ distT: e.top, distB: e.bottom })
								);
						}
					}
					t.WrapTopAndBottom = i;
				},
				2637: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.WORKAROUND = void 0),
						(t.WORKAROUND = "");
				},
				3528: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.File = void 0);
					const n = r(2378),
						o = r(8351),
						i = r(9349),
						s = r(1157),
						a = r(7249),
						u = r(3778),
						c = r(7158),
						l = r(4860),
						p = r(1117),
						h = r(6276),
						d = r(146),
						f = r(7224),
						m = r(9694),
						g = r(5703),
						b = r(5258),
						y = r(2202);
					t.File = class {
						constructor(e, t = {}) {
							var r, u, c, p, w, v;
							if (
								((this.currentRelationshipId = 1),
								(this.headers = []),
								(this.footers = []),
								(this.coreProperties = new i.CoreProperties(
									Object.assign(Object.assign({}, e), {
										creator:
											null !== (r = e.creator) &&
											void 0 !== r
												? r
												: "Un-named",
										revision:
											null !== (u = e.revision) &&
											void 0 !== u
												? u
												: "1",
										lastModifiedBy:
											null !== (c = e.lastModifiedBy) &&
											void 0 !== c
												? c
												: "Un-named",
									})
								)),
								(this.numbering = new d.Numbering(
									e.numbering ? e.numbering : { config: [] }
								)),
								(this.fileRelationships =
									new f.Relationships()),
								(this.customProperties = new s.CustomProperties(
									null !== (p = e.customProperties) &&
									void 0 !== p
										? p
										: []
								)),
								(this.appProperties = new n.AppProperties()),
								(this.footnotesWrapper =
									new l.FootnotesWrapper()),
								(this.contentTypes = new o.ContentTypes()),
								(this.documentWrapper = new a.DocumentWrapper({
									background: e.background || {},
								})),
								(this.settings = new m.Settings({
									compatabilityModeVersion:
										e.compatabilityModeVersion,
									evenAndOddHeaders:
										!!e.evenAndOddHeaderAndFooters,
									trackRevisions:
										null === (w = e.features) ||
										void 0 === w
											? void 0
											: w.trackRevisions,
									updateFields:
										null === (v = e.features) ||
										void 0 === v
											? void 0
											: v.updateFields,
								})),
								(this.media =
									t.template && t.template.media
										? t.template.media
										: new h.Media()),
								t.template &&
									(this.currentRelationshipId =
										t.template.currentRelationshipId + 1),
								t.template && e.externalStyles)
							)
								throw Error(
									"can not use both template and external styles"
								);
							if (t.template) {
								const e = new b.ExternalStylesFactory();
								this.styles = e.newInstance(t.template.styles);
							} else if (e.externalStyles) {
								const t = new b.ExternalStylesFactory();
								this.styles = t.newInstance(e.externalStyles);
							} else if (e.styles) {
								const t =
									new y.DefaultStylesFactory().newInstance(
										e.styles.default
									);
								this.styles = new g.Styles(
									Object.assign(
										Object.assign({}, t),
										e.styles
									)
								);
							} else {
								const e = new y.DefaultStylesFactory();
								this.styles = new g.Styles(e.newInstance());
							}
							if (
								(this.addDefaultRelationships(),
								t.template && t.template.headers)
							)
								for (const e of t.template.headers)
									this.addHeaderToDocument(e.header, e.type);
							if (t.template && t.template.footers)
								for (const e of t.template.footers)
									this.addFooterToDocument(e.footer, e.type);
							for (const t of e.sections) this.addSection(t);
							if (e.footnotes)
								for (const t in e.footnotes)
									this.footnotesWrapper.View.createFootNote(
										parseFloat(t),
										e.footnotes[t].children
									);
						}
						addSection({
							headers: e = {},
							footers: t = {},
							children: r,
							properties: n,
						}) {
							this.documentWrapper.View.Body.addSection(
								Object.assign(Object.assign({}, n), {
									headerWrapperGroup: {
										default: e.default
											? this.createHeader(e.default)
											: void 0,
										first: e.first
											? this.createHeader(e.first)
											: void 0,
										even: e.even
											? this.createHeader(e.even)
											: void 0,
									},
									footerWrapperGroup: {
										default: t.default
											? this.createFooter(t.default)
											: void 0,
										first: t.first
											? this.createFooter(t.first)
											: void 0,
										even: t.even
											? this.createFooter(t.even)
											: void 0,
									},
								})
							);
							for (const e of r) this.documentWrapper.View.add(e);
						}
						createHeader(e) {
							const t = new p.HeaderWrapper(
								this.media,
								this.currentRelationshipId++
							);
							for (const r of e.options.children) t.add(r);
							return this.addHeaderToDocument(t), t;
						}
						createFooter(e) {
							const t = new c.FooterWrapper(
								this.media,
								this.currentRelationshipId++
							);
							for (const r of e.options.children) t.add(r);
							return this.addFooterToDocument(t), t;
						}
						addHeaderToDocument(
							e,
							t = u.HeaderFooterReferenceType.DEFAULT
						) {
							this.headers.push({ header: e, type: t }),
								this.documentWrapper.Relationships.createRelationship(
									e.View.ReferenceId,
									"http://schemas.openxmlformats.org/officeDocument/2006/relationships/header",
									`header${this.headers.length}.xml`
								),
								this.contentTypes.addHeader(
									this.headers.length
								);
						}
						addFooterToDocument(
							e,
							t = u.HeaderFooterReferenceType.DEFAULT
						) {
							this.footers.push({ footer: e, type: t }),
								this.documentWrapper.Relationships.createRelationship(
									e.View.ReferenceId,
									"http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer",
									`footer${this.footers.length}.xml`
								),
								this.contentTypes.addFooter(
									this.footers.length
								);
						}
						addDefaultRelationships() {
							this.fileRelationships.createRelationship(
								1,
								"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
								"word/document.xml"
							),
								this.fileRelationships.createRelationship(
									2,
									"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
									"docProps/core.xml"
								),
								this.fileRelationships.createRelationship(
									3,
									"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
									"docProps/app.xml"
								),
								this.fileRelationships.createRelationship(
									4,
									"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
									"docProps/custom.xml"
								),
								this.documentWrapper.Relationships.createRelationship(
									this.currentRelationshipId++,
									"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
									"styles.xml"
								),
								this.documentWrapper.Relationships.createRelationship(
									this.currentRelationshipId++,
									"http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering",
									"numbering.xml"
								),
								this.documentWrapper.Relationships.createRelationship(
									this.currentRelationshipId++,
									"http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes",
									"footnotes.xml"
								),
								this.documentWrapper.Relationships.createRelationship(
									this.currentRelationshipId++,
									"http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings",
									"settings.xml"
								);
						}
						get Document() {
							return this.documentWrapper;
						}
						get Styles() {
							return this.styles;
						}
						get CoreProperties() {
							return this.coreProperties;
						}
						get Numbering() {
							return this.numbering;
						}
						get Media() {
							return this.media;
						}
						get FileRelationships() {
							return this.fileRelationships;
						}
						get Headers() {
							return this.headers.map((e) => e.header);
						}
						get Footers() {
							return this.footers.map((e) => e.footer);
						}
						get ContentTypes() {
							return this.contentTypes;
						}
						get CustomProperties() {
							return this.customProperties;
						}
						get AppProperties() {
							return this.appProperties;
						}
						get FootNotes() {
							return this.footnotesWrapper;
						}
						get Settings() {
							return this.settings;
						}
					};
				},
				7158: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FooterWrapper = void 0);
					const n = r(1657),
						o = r(7224);
					t.FooterWrapper = class {
						constructor(e, t, r) {
							(this.media = e),
								(this.footer = new n.Footer(t, r)),
								(this.relationships = new o.Relationships());
						}
						add(e) {
							this.footer.add(e);
						}
						addChildElement(e) {
							this.footer.addChildElement(e);
						}
						get View() {
							return this.footer;
						}
						get Relationships() {
							return this.relationships;
						}
						get Media() {
							return this.media;
						}
					};
				},
				6146: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FooterAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									wpc: "xmlns:wpc",
									mc: "xmlns:mc",
									o: "xmlns:o",
									r: "xmlns:r",
									m: "xmlns:m",
									v: "xmlns:v",
									wp14: "xmlns:wp14",
									wp: "xmlns:wp",
									w10: "xmlns:w10",
									w: "xmlns:w",
									w14: "xmlns:w14",
									w15: "xmlns:w15",
									wpg: "xmlns:wpg",
									wpi: "xmlns:wpi",
									wne: "xmlns:wne",
									wps: "xmlns:wps",
									cp: "xmlns:cp",
									dc: "xmlns:dc",
									dcterms: "xmlns:dcterms",
									dcmitype: "xmlns:dcmitype",
									xsi: "xmlns:xsi",
									type: "xsi:type",
								});
						}
					}
					t.FooterAttributes = o;
				},
				1657: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Footer = void 0);
					const n = r(2451),
						o = r(6146);
					class i extends n.InitializableXmlComponent {
						constructor(e, t) {
							super("w:ftr", t),
								(this.refId = e),
								t ||
									this.root.push(
										new o.FooterAttributes({
											wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
											mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
											o: "urn:schemas-microsoft-com:office:office",
											r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
											m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
											v: "urn:schemas-microsoft-com:vml",
											wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
											wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
											w10: "urn:schemas-microsoft-com:office:word",
											w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
											w14: "http://schemas.microsoft.com/office/word/2010/wordml",
											w15: "http://schemas.microsoft.com/office/word/2012/wordml",
											wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
											wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
											wne: "http://schemas.microsoft.com/office/word/2006/wordml",
											wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
										})
									);
						}
						get ReferenceId() {
							return this.refId;
						}
						add(e) {
							this.root.push(e);
						}
					}
					t.Footer = i;
				},
				4860: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FootnotesWrapper = void 0);
					const n = r(9272),
						o = r(7224);
					t.FootnotesWrapper = class {
						constructor() {
							(this.footnotess = new n.FootNotes()),
								(this.relationships = new o.Relationships());
						}
						get View() {
							return this.footnotess;
						}
						get Relationships() {
							return this.relationships;
						}
					};
				},
				8301: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FootnoteAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { type: "w:type", id: "w:id" });
						}
					}
					t.FootnoteAttributes = o;
				},
				8742: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Footnote = t.FootnoteType = void 0);
					const n = r(2451),
						o = r(8301),
						i = r(532);
					var s;
					((s = t.FootnoteType || (t.FootnoteType = {})).SEPERATOR =
						"separator"),
						(s.CONTINUATION_SEPERATOR = "continuationSeparator");
					class a extends n.XmlComponent {
						constructor(e) {
							super("w:footnote"),
								this.root.push(
									new o.FootnoteAttributes({
										type: e.type,
										id: e.id,
									})
								);
							for (let t = 0; t < e.children.length; t++) {
								const r = e.children[t];
								0 === t &&
									r.addRunToFront(new i.FootnoteRefRun()),
									this.root.push(r);
							}
						}
					}
					t.Footnote = a;
				},
				378: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(7009), t);
				},
				9388: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ContinuationSeperatorRun = void 0);
					const n = r(4827),
						o = r(8974);
					class i extends n.Run {
						constructor() {
							super({}),
								this.root.push(new o.ContinuationSeperator());
						}
					}
					t.ContinuationSeperatorRun = i;
				},
				8974: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ContinuationSeperator = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("w:continuationSeparator");
						}
					}
					t.ContinuationSeperator = o;
				},
				532: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FootnoteRefRun = void 0);
					const n = r(4827),
						o = r(1078);
					class i extends n.Run {
						constructor() {
							super({ style: "FootnoteReference" }),
								this.root.push(new o.FootnoteRef());
						}
					}
					t.FootnoteRefRun = i;
				},
				1078: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FootnoteRef = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("w:footnoteRef");
						}
					}
					t.FootnoteRef = o;
				},
				7009: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(4375), t);
				},
				4375: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FootnoteReferenceRun =
							t.FootnoteReference =
							t.FootNoteReferenceRunAttributes =
								void 0);
					const n = r(6902),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { id: "w:id" });
						}
					}
					t.FootNoteReferenceRunAttributes = i;
					class s extends o.XmlComponent {
						constructor(e) {
							super("w:footnoteReference"),
								this.root.push(new i({ id: e }));
						}
					}
					t.FootnoteReference = s;
					class a extends n.Run {
						constructor(e) {
							super({ style: "FootnoteReference" }),
								this.root.push(new s(e));
						}
					}
					t.FootnoteReferenceRun = a;
				},
				6238: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SeperatorRun = void 0);
					const n = r(4827),
						o = r(239);
					class i extends n.Run {
						constructor() {
							super({}), this.root.push(new o.Seperator());
						}
					}
					t.SeperatorRun = i;
				},
				239: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Seperator = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("w:separator");
						}
					}
					t.Seperator = o;
				},
				1249: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FootnotesAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									wpc: "xmlns:wpc",
									mc: "xmlns:mc",
									o: "xmlns:o",
									r: "xmlns:r",
									m: "xmlns:m",
									v: "xmlns:v",
									wp14: "xmlns:wp14",
									wp: "xmlns:wp",
									w10: "xmlns:w10",
									w: "xmlns:w",
									w14: "xmlns:w14",
									w15: "xmlns:w15",
									wpg: "xmlns:wpg",
									wpi: "xmlns:wpi",
									wne: "xmlns:wne",
									wps: "xmlns:wps",
									Ignorable: "mc:Ignorable",
								});
						}
					}
					t.FootnotesAttributes = o;
				},
				9272: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FootNotes = void 0);
					const n = r(2451),
						o = r(4827),
						i = r(8742),
						s = r(9388),
						a = r(6238),
						u = r(1249);
					class c extends n.XmlComponent {
						constructor() {
							super("w:footnotes"),
								this.root.push(
									new u.FootnotesAttributes({
										wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
										mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
										o: "urn:schemas-microsoft-com:office:office",
										r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
										m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
										v: "urn:schemas-microsoft-com:vml",
										wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
										wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
										w10: "urn:schemas-microsoft-com:office:word",
										w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
										w14: "http://schemas.microsoft.com/office/word/2010/wordml",
										w15: "http://schemas.microsoft.com/office/word/2012/wordml",
										wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
										wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
										wne: "http://schemas.microsoft.com/office/word/2006/wordml",
										wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
										Ignorable: "w14 w15 wp14",
									})
								);
							const e = new i.Footnote({
								id: -1,
								type: i.FootnoteType.SEPERATOR,
								children: [
									new o.Paragraph({
										spacing: {
											after: 0,
											line: 240,
											lineRule: o.LineRuleType.AUTO,
										},
										children: [new a.SeperatorRun()],
									}),
								],
							});
							this.root.push(e);
							const t = new i.Footnote({
								id: 0,
								type: i.FootnoteType.CONTINUATION_SEPERATOR,
								children: [
									new o.Paragraph({
										spacing: {
											after: 0,
											line: 240,
											lineRule: o.LineRuleType.AUTO,
										},
										children: [
											new s.ContinuationSeperatorRun(),
										],
									}),
								],
							});
							this.root.push(t);
						}
						createFootNote(e, t) {
							const r = new i.Footnote({ id: e, children: t });
							this.root.push(r);
						}
					}
					t.FootNotes = c;
				},
				2766: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(9272), t),
						o(r(378), t);
				},
				1117: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.HeaderWrapper = void 0);
					const n = r(3646),
						o = r(7224);
					t.HeaderWrapper = class {
						constructor(e, t, r) {
							(this.media = e),
								(this.header = new n.Header(t, r)),
								(this.relationships = new o.Relationships());
						}
						add(e) {
							return this.header.add(e), this;
						}
						addChildElement(e) {
							this.header.addChildElement(e);
						}
						get View() {
							return this.header;
						}
						get Relationships() {
							return this.relationships;
						}
						get Media() {
							return this.media;
						}
					};
				},
				4793: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Footer = t.Header = void 0),
						(t.Header = class {
							constructor(e = { children: [] }) {
								this.options = e;
							}
						}),
						(t.Footer = class {
							constructor(e = { children: [] }) {
								this.options = e;
							}
						});
				},
				4716: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.HeaderAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									wpc: "xmlns:wpc",
									mc: "xmlns:mc",
									o: "xmlns:o",
									r: "xmlns:r",
									m: "xmlns:m",
									v: "xmlns:v",
									wp14: "xmlns:wp14",
									wp: "xmlns:wp",
									w10: "xmlns:w10",
									w: "xmlns:w",
									w14: "xmlns:w14",
									w15: "xmlns:w15",
									wpg: "xmlns:wpg",
									wpi: "xmlns:wpi",
									wne: "xmlns:wne",
									wps: "xmlns:wps",
									cp: "xmlns:cp",
									dc: "xmlns:dc",
									dcterms: "xmlns:dcterms",
									dcmitype: "xmlns:dcmitype",
									xsi: "xmlns:xsi",
									type: "xsi:type",
									cx: "xmlns:cx",
									cx1: "xmlns:cx1",
									cx2: "xmlns:cx2",
									cx3: "xmlns:cx3",
									cx4: "xmlns:cx4",
									cx5: "xmlns:cx5",
									cx6: "xmlns:cx6",
									cx7: "xmlns:cx7",
									cx8: "xmlns:cx8",
									w16cid: "xmlns:w16cid",
									w16se: "xmlns:w16se",
								});
						}
					}
					t.HeaderAttributes = o;
				},
				3646: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Header = void 0);
					const n = r(2451),
						o = r(4716);
					class i extends n.InitializableXmlComponent {
						constructor(e, t) {
							super("w:hdr", t),
								(this.refId = e),
								t ||
									this.root.push(
										new o.HeaderAttributes({
											wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
											mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
											o: "urn:schemas-microsoft-com:office:office",
											r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
											m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
											v: "urn:schemas-microsoft-com:vml",
											wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
											wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
											w10: "urn:schemas-microsoft-com:office:word",
											w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
											w14: "http://schemas.microsoft.com/office/word/2010/wordml",
											w15: "http://schemas.microsoft.com/office/word/2012/wordml",
											wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
											wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
											wne: "http://schemas.microsoft.com/office/word/2006/wordml",
											wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
											cx: "http://schemas.microsoft.com/office/drawing/2014/chartex",
											cx1: "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
											cx2: "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
											cx3: "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
											cx4: "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
											cx5: "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
											cx6: "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
											cx7: "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
											cx8: "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
											w16cid: "http://schemas.microsoft.com/office/word/2016/wordml/cid",
											w16se: "http://schemas.microsoft.com/office/word/2015/wordml/symex",
										})
									);
						}
						get ReferenceId() {
							return this.refId;
						}
						add(e) {
							this.root.push(e);
						}
					}
					t.Header = i;
				},
				7559: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(4827), t),
						o(r(5), t),
						o(r(3528), t),
						o(r(2637), t),
						o(r(146), t),
						o(r(6276), t),
						o(r(6876), t),
						o(r(6593), t),
						o(r(8613), t),
						o(r(5703), t),
						o(r(5205), t),
						o(r(2451), t),
						o(r(1117), t),
						o(r(7158), t),
						o(r(4793), t),
						o(r(2766), t),
						o(r(699), t),
						o(r(2969), t),
						o(r(5328), t),
						o(r(459), t),
						o(r(4087), t);
				},
				6740: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.WORKAROUND2 = void 0),
						(t.WORKAROUND2 = "");
				},
				6276: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(7117), t),
						o(r(6740), t);
				},
				7117: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Media = void 0);
					const n = r(5524);
					t.Media = class {
						constructor() {
							this.map = new Map();
						}
						addMedia(e, t) {
							const r = `${(0, n.uniqueId)()}.png`,
								o = {
									stream:
										"string" == typeof e
											? this.convertDataURIToBinary(e)
											: e,
									fileName: r,
									transformation: {
										pixels: {
											x: Math.round(t.width),
											y: Math.round(t.height),
										},
										emus: {
											x: Math.round(9525 * t.width),
											y: Math.round(9525 * t.height),
										},
										flip: t.flip,
										rotation: t.rotation
											? 6e4 * t.rotation
											: void 0,
									},
								};
							return this.map.set(r, o), o;
						}
						addImage(e, t) {
							this.map.set(e, t);
						}
						get Array() {
							return Array.from(this.map.values());
						}
						convertDataURIToBinary(e) {
							const t = ";base64,",
								n = e.indexOf(t) + t.length;
							return "function" == typeof atob
								? new Uint8Array(
										atob(e.substring(n))
											.split("")
											.map((e) => e.charCodeAt(0))
								  )
								: new (r(8764).Buffer)(e, "base64");
						}
					};
				},
				9808: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.AbstractNumbering = void 0);
					const n = r(459),
						o = r(2451),
						i = r(1160),
						s = r(5349);
					class a extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									abstractNumId: "w:abstractNumId",
									restartNumberingAfterBreak:
										"w15:restartNumberingAfterBreak",
								});
						}
					}
					class u extends o.XmlComponent {
						constructor(e, t) {
							super("w:abstractNum"),
								this.root.push(
									new a({
										abstractNumId: (0, n.decimalNumber)(e),
										restartNumberingAfterBreak: 0,
									})
								),
								this.root.push(
									new s.MultiLevelType("hybridMultilevel")
								),
								(this.id = e);
							for (const e of t) this.root.push(new i.Level(e));
						}
					}
					t.AbstractNumbering = u;
				},
				146: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(1283), t),
						o(r(9808), t),
						o(r(1160), t),
						o(r(9138), t);
				},
				1160: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.LevelForOverride =
							t.Level =
							t.LevelBase =
							t.LevelSuffix =
							t.LevelFormat =
								void 0);
					const n = r(459),
						o = r(2451),
						i = r(7654),
						s = r(3434),
						a = r(1972);
					var u, c;
					((u = t.LevelFormat || (t.LevelFormat = {})).BULLET =
						"bullet"),
						(u.CARDINAL_TEXT = "cardinalText"),
						(u.CHICAGO = "chicago"),
						(u.DECIMAL = "decimal"),
						(u.DECIMAL_ENCLOSED_CIRCLE = "decimalEnclosedCircle"),
						(u.DECIMAL_ENCLOSED_FULLSTOP =
							"decimalEnclosedFullstop"),
						(u.DECIMAL_ENCLOSED_PARENTHESES =
							"decimalEnclosedParen"),
						(u.DECIMAL_ZERO = "decimalZero"),
						(u.LOWER_LETTER = "lowerLetter"),
						(u.LOWER_ROMAN = "lowerRoman"),
						(u.NONE = "none"),
						(u.ORDINAL_TEXT = "ordinalText"),
						(u.UPPER_LETTER = "upperLetter"),
						(u.UPPER_ROMAN = "upperRoman");
					class l extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									ilvl: "w:ilvl",
									tentative: "w15:tentative",
								});
						}
					}
					class p extends o.XmlComponent {
						constructor(e) {
							super("w:numFmt"),
								this.root.push(new o.Attributes({ val: e }));
						}
					}
					class h extends o.XmlComponent {
						constructor(e) {
							super("w:lvlText"),
								this.root.push(new o.Attributes({ val: e }));
						}
					}
					class d extends o.XmlComponent {
						constructor(e) {
							super("w:lvlJc"),
								this.root.push(new o.Attributes({ val: e }));
						}
					}
					((c = t.LevelSuffix || (t.LevelSuffix = {})).NOTHING =
						"nothing"),
						(c.SPACE = "space"),
						(c.TAB = "tab");
					class f extends o.XmlComponent {
						constructor(e) {
							super("w:suff"),
								this.root.push(new o.Attributes({ val: e }));
						}
					}
					class m extends o.XmlComponent {
						constructor({
							level: e,
							format: t,
							text: r,
							alignment: u = i.AlignmentType.START,
							start: c = 1,
							style: m,
							suffix: g,
						}) {
							super("w:lvl"),
								this.root.push(
									new o.NumberValueElement(
										"w:start",
										(0, n.decimalNumber)(c)
									)
								),
								t && this.root.push(new p(t)),
								g && this.root.push(new f(g)),
								r && this.root.push(new h(r)),
								this.root.push(new d(u)),
								(this.paragraphProperties =
									new s.ParagraphProperties(
										m && m.paragraph
									)),
								(this.runProperties = new a.RunProperties(
									m && m.run
								)),
								this.root.push(this.paragraphProperties),
								this.root.push(this.runProperties),
								this.root.push(
									new l({
										ilvl: (0, n.decimalNumber)(e),
										tentative: 1,
									})
								);
						}
					}
					(t.LevelBase = m),
						(t.Level = class extends m {
							constructor(e) {
								super(e);
							}
						}),
						(t.LevelForOverride = class extends m {});
				},
				5349: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MultiLevelType = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("w:multiLevelType"),
								this.root.push(new n.Attributes({ val: e }));
						}
					}
					t.MultiLevelType = o;
				},
				9138: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.LevelOverride = t.ConcreteNumbering = void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlComponent {
						constructor(e) {
							super("w:abstractNumId"),
								this.root.push(new o.Attributes({ val: e }));
						}
					}
					class s extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { numId: "w:numId" });
						}
					}
					class a extends o.XmlComponent {
						constructor(e) {
							super("w:num"),
								(this.numId = e.numId),
								(this.reference = e.reference),
								(this.instance = e.instance),
								this.root.push(
									new s({
										numId: (0, n.decimalNumber)(e.numId),
									})
								),
								this.root.push(
									new i((0, n.decimalNumber)(e.abstractNumId))
								),
								e.overrideLevel &&
									this.root.push(
										new c(
											e.overrideLevel.num,
											e.overrideLevel.start
										)
									);
						}
					}
					t.ConcreteNumbering = a;
					class u extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { ilvl: "w:ilvl" });
						}
					}
					class c extends o.XmlComponent {
						constructor(e, t) {
							super("w:lvlOverride"),
								this.root.push(new u({ ilvl: e })),
								void 0 !== t && this.root.push(new p(t));
						}
					}
					t.LevelOverride = c;
					class l extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { val: "w:val" });
						}
					}
					class p extends o.XmlComponent {
						constructor(e) {
							super("w:startOverride"),
								this.root.push(new l({ val: e }));
						}
					}
				},
				1283: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Numbering = void 0);
					const n = r(5524),
						o = r(4827),
						i = r(2451),
						s = r(7627),
						a = r(9808),
						u = r(1160),
						c = r(9138);
					class l extends i.XmlComponent {
						constructor(e) {
							super("w:numbering"),
								(this.abstractNumberingMap = new Map()),
								(this.concreteNumberingMap = new Map()),
								(this.referenceConfigMap = new Map()),
								this.root.push(
									new s.DocumentAttributes({
										wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
										mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
										o: "urn:schemas-microsoft-com:office:office",
										r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
										m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
										v: "urn:schemas-microsoft-com:vml",
										wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
										wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
										w10: "urn:schemas-microsoft-com:office:word",
										w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
										w14: "http://schemas.microsoft.com/office/word/2010/wordml",
										w15: "http://schemas.microsoft.com/office/word/2012/wordml",
										wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
										wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
										wne: "http://schemas.microsoft.com/office/word/2006/wordml",
										wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
										Ignorable: "w14 w15 wp14",
									})
								);
							const t = new a.AbstractNumbering(
								(0, n.uniqueNumericId)(),
								[
									{
										level: 0,
										format: u.LevelFormat.BULLET,
										text: "●",
										alignment: o.AlignmentType.LEFT,
										style: {
											paragraph: {
												indent: {
													left: (0,
													n.convertInchesToTwip)(0.5),
													hanging: (0,
													n.convertInchesToTwip)(
														0.25
													),
												},
											},
										},
									},
									{
										level: 1,
										format: u.LevelFormat.BULLET,
										text: "○",
										alignment: o.AlignmentType.LEFT,
										style: {
											paragraph: {
												indent: {
													left: (0,
													n.convertInchesToTwip)(1),
													hanging: (0,
													n.convertInchesToTwip)(
														0.25
													),
												},
											},
										},
									},
									{
										level: 2,
										format: u.LevelFormat.BULLET,
										text: "■",
										alignment: o.AlignmentType.LEFT,
										style: {
											paragraph: {
												indent: {
													left: 2160,
													hanging: (0,
													n.convertInchesToTwip)(
														0.25
													),
												},
											},
										},
									},
									{
										level: 3,
										format: u.LevelFormat.BULLET,
										text: "●",
										alignment: o.AlignmentType.LEFT,
										style: {
											paragraph: {
												indent: {
													left: 2880,
													hanging: (0,
													n.convertInchesToTwip)(
														0.25
													),
												},
											},
										},
									},
									{
										level: 4,
										format: u.LevelFormat.BULLET,
										text: "○",
										alignment: o.AlignmentType.LEFT,
										style: {
											paragraph: {
												indent: {
													left: 3600,
													hanging: (0,
													n.convertInchesToTwip)(
														0.25
													),
												},
											},
										},
									},
									{
										level: 5,
										format: u.LevelFormat.BULLET,
										text: "■",
										alignment: o.AlignmentType.LEFT,
										style: {
											paragraph: {
												indent: {
													left: 4320,
													hanging: (0,
													n.convertInchesToTwip)(
														0.25
													),
												},
											},
										},
									},
									{
										level: 6,
										format: u.LevelFormat.BULLET,
										text: "●",
										alignment: o.AlignmentType.LEFT,
										style: {
											paragraph: {
												indent: {
													left: 5040,
													hanging: (0,
													n.convertInchesToTwip)(
														0.25
													),
												},
											},
										},
									},
									{
										level: 7,
										format: u.LevelFormat.BULLET,
										text: "●",
										alignment: o.AlignmentType.LEFT,
										style: {
											paragraph: {
												indent: {
													left: 5760,
													hanging: (0,
													n.convertInchesToTwip)(
														0.25
													),
												},
											},
										},
									},
									{
										level: 8,
										format: u.LevelFormat.BULLET,
										text: "●",
										alignment: o.AlignmentType.LEFT,
										style: {
											paragraph: {
												indent: {
													left: 6480,
													hanging: (0,
													n.convertInchesToTwip)(
														0.25
													),
												},
											},
										},
									},
								]
							);
							this.concreteNumberingMap.set(
								"default-bullet-numbering",
								new c.ConcreteNumbering({
									numId: 1,
									abstractNumId: t.id,
									reference: "default-bullet-numbering",
									instance: 0,
									overrideLevel: { num: 0, start: 1 },
								})
							),
								this.abstractNumberingMap.set(
									"default-bullet-numbering",
									t
								);
							for (const t of e.config)
								this.abstractNumberingMap.set(
									t.reference,
									new a.AbstractNumbering(
										(0, n.uniqueNumericId)(),
										t.levels
									)
								),
									this.referenceConfigMap.set(
										t.reference,
										t.levels
									);
						}
						prepForXml(e) {
							for (const e of this.abstractNumberingMap.values())
								this.root.push(e);
							for (const e of this.concreteNumberingMap.values())
								this.root.push(e);
							return super.prepForXml(e);
						}
						createConcreteNumberingInstance(e, t) {
							const r = this.abstractNumberingMap.get(e);
							if (!r) return;
							const o = `${e}-${t}`;
							if (this.concreteNumberingMap.has(o)) return;
							const i = {
									numId: (0, n.uniqueNumericId)(),
									abstractNumId: r.id,
									reference: e,
									instance: t,
									overrideLevel: { num: 0, start: 1 },
								},
								s = this.referenceConfigMap.get(e),
								a = s && s[0].start;
							a &&
								Number.isInteger(a) &&
								(i.overrideLevel = { num: 0, start: a }),
								this.concreteNumberingMap.set(
									o,
									new c.ConcreteNumbering(i)
								);
						}
						get ConcreteNumbering() {
							return Array.from(
								this.concreteNumberingMap.values()
							);
						}
						get ReferenceConfig() {
							return Array.from(this.referenceConfigMap.values());
						}
					}
					t.Numbering = l;
				},
				5778: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Alignment =
							t.AlignmentAttributes =
							t.AlignmentType =
								void 0);
					const n = r(2451);
					var o;
					((o = t.AlignmentType || (t.AlignmentType = {})).START =
						"start"),
						(o.END = "end"),
						(o.CENTER = "center"),
						(o.BOTH = "both"),
						(o.JUSTIFIED = "both"),
						(o.DISTRIBUTE = "distribute"),
						(o.LEFT = "left"),
						(o.RIGHT = "right");
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { val: "w:val" });
						}
					}
					t.AlignmentAttributes = i;
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:jc"), this.root.push(new i({ val: e }));
						}
					}
					t.Alignment = s;
				},
				7942: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ThematicBreak = t.Border = void 0);
					const n = r(5328),
						o = r(2451);
					class i extends o.IgnoreIfEmptyXmlComponent {
						constructor(e) {
							super("w:pBdr"),
								e.top &&
									this.root.push(
										new n.BorderElement("w:top", e.top)
									),
								e.bottom &&
									this.root.push(
										new n.BorderElement(
											"w:bottom",
											e.bottom
										)
									),
								e.left &&
									this.root.push(
										new n.BorderElement("w:left", e.left)
									),
								e.right &&
									this.root.push(
										new n.BorderElement("w:right", e.right)
									);
						}
					}
					t.Border = i;
					class s extends o.XmlComponent {
						constructor() {
							super("w:pBdr");
							const e = new n.BorderElement("w:bottom", {
								color: "auto",
								space: 1,
								style: n.BorderStyle.SINGLE,
								size: 6,
							});
							this.root.push(e);
						}
					}
					t.ThematicBreak = s;
				},
				9884: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PageBreakBefore =
							t.ColumnBreak =
							t.PageBreak =
								void 0);
					const n = r(2451),
						o = r(6902);
					var i;
					!(function (e) {
						(e.COLUMN = "column"), (e.PAGE = "page");
					})(i || (i = {}));
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:br"),
								this.root.push(new n.Attributes({ type: e }));
						}
					}
					class a extends o.Run {
						constructor() {
							super({}), this.root.push(new s(i.PAGE));
						}
					}
					t.PageBreak = a;
					class u extends o.Run {
						constructor() {
							super({}), this.root.push(new s(i.COLUMN));
						}
					}
					t.ColumnBreak = u;
					class c extends n.XmlComponent {
						constructor() {
							super("w:pageBreakBefore");
						}
					}
					t.PageBreakBefore = c;
				},
				2639: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Indent = void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									start: "w:start",
									end: "w:end",
									left: "w:left",
									right: "w:right",
									hanging: "w:hanging",
									firstLine: "w:firstLine",
								});
						}
					}
					class s extends o.XmlComponent {
						constructor({
							start: e,
							end: t,
							left: r,
							right: o,
							hanging: s,
							firstLine: a,
						}) {
							super("w:ind"),
								this.root.push(
									new i({
										start:
											void 0 === e
												? void 0
												: (0,
												  n.signedTwipsMeasureValue)(e),
										end:
											void 0 === t
												? void 0
												: (0,
												  n.signedTwipsMeasureValue)(t),
										left:
											void 0 === r
												? void 0
												: (0,
												  n.signedTwipsMeasureValue)(r),
										right:
											void 0 === o
												? void 0
												: (0,
												  n.signedTwipsMeasureValue)(o),
										hanging:
											void 0 === s
												? void 0
												: (0, n.twipsMeasureValue)(s),
										firstLine:
											void 0 === a
												? void 0
												: (0, n.twipsMeasureValue)(a),
									})
								);
						}
					}
					t.Indent = s;
				},
				7654: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(5778), t),
						o(r(7942), t),
						o(r(2639), t),
						o(r(9884), t),
						o(r(4200), t),
						o(r(6923), t),
						o(r(317), t),
						o(r(3538), t);
				},
				4200: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Spacing = t.LineRuleType = void 0);
					const n = r(2451);
					var o;
					((o = t.LineRuleType || (t.LineRuleType = {})).AT_LEAST =
						"atLeast"),
						(o.EXACTLY = "exactly"),
						(o.AUTO = "auto");
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									after: "w:after",
									before: "w:before",
									line: "w:line",
									lineRule: "w:lineRule",
								});
						}
					}
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:spacing"), this.root.push(new i(e));
						}
					}
					t.Spacing = s;
				},
				6923: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Style = t.HeadingLevel = void 0);
					const n = r(2451);
					var o;
					((o = t.HeadingLevel || (t.HeadingLevel = {})).HEADING_1 =
						"Heading1"),
						(o.HEADING_2 = "Heading2"),
						(o.HEADING_3 = "Heading3"),
						(o.HEADING_4 = "Heading4"),
						(o.HEADING_5 = "Heading5"),
						(o.HEADING_6 = "Heading6"),
						(o.TITLE = "Title");
					class i extends n.XmlComponent {
						constructor(e) {
							super("w:pStyle"),
								this.root.push(new n.Attributes({ val: e }));
						}
					}
					t.Style = i;
				},
				317: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TabStopItem =
							t.TabAttributes =
							t.TabStopPosition =
							t.LeaderType =
							t.TabStopType =
							t.TabStop =
								void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e, t, r) {
							super("w:tabs"), this.root.push(new c(e, t, r));
						}
					}
					var i, s, a;
					(t.TabStop = o),
						((a = t.TabStopType || (t.TabStopType = {})).LEFT =
							"left"),
						(a.RIGHT = "right"),
						(a.CENTER = "center"),
						(a.BAR = "bar"),
						(a.CLEAR = "clear"),
						(a.DECIMAL = "decimal"),
						(a.END = "end"),
						(a.NUM = "num"),
						(a.START = "start"),
						((s = t.LeaderType || (t.LeaderType = {})).DOT = "dot"),
						(s.HYPHEN = "hyphen"),
						(s.MIDDLE_DOT = "middleDot"),
						(s.NONE = "none"),
						(s.UNDERSCORE = "underscore"),
						((i = t.TabStopPosition || (t.TabStopPosition = {}))[
							(i.MAX = 9026)
						] = "MAX");
					class u extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									val: "w:val",
									pos: "w:pos",
									leader: "w:leader",
								});
						}
					}
					t.TabAttributes = u;
					class c extends n.XmlComponent {
						constructor(e, t, r) {
							super("w:tab"),
								this.root.push(
									new u({ val: e, pos: t, leader: r })
								);
						}
					}
					t.TabStopItem = c;
				},
				3538: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.NumberProperties = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e, t) {
							super("w:numPr"),
								this.root.push(new i(t)),
								this.root.push(new s(e));
						}
					}
					t.NumberProperties = o;
					class i extends n.XmlComponent {
						constructor(e) {
							super("w:ilvl"),
								this.root.push(new n.Attributes({ val: e }));
						}
					}
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:numId"),
								this.root.push(
									new n.Attributes({
										val:
											"string" == typeof e ? `{${e}}` : e,
									})
								);
						}
					}
				},
				9889: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FrameProperties =
							t.FramePropertiesAttributes =
							t.FrameWrap =
							t.FrameAnchorType =
							t.DropCapType =
								void 0);
					const n = r(2451);
					var o, i, s;
					((s = t.DropCapType || (t.DropCapType = {})).NONE = "none"),
						(s.DROP = "drop"),
						(s.MARGIN = "margin"),
						((i =
							t.FrameAnchorType ||
							(t.FrameAnchorType = {})).MARGIN = "margin"),
						(i.PAGE = "page"),
						(i.TEXT = "text"),
						((o = t.FrameWrap || (t.FrameWrap = {})).AROUND =
							"around"),
						(o.AUTO = "auto"),
						(o.NONE = "none"),
						(o.NOT_BESIDE = "notBeside"),
						(o.THROUGH = "through"),
						(o.TIGHT = "tight");
					class a extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									anchorLock: "w:anchorLock",
									dropCap: "w:dropCap",
									width: "w:w",
									height: "w:h",
									x: "w:x",
									y: "w:y",
									anchorHorizontal: "w:hAnchor",
									anchorVertical: "w:vAnchor",
									spaceHorizontal: "w:hSpace",
									spaceVertical: "w:vSpace",
									rule: "w:hRule",
									alignmentX: "w:xAlign",
									alignmentY: "w:yAlign",
									lines: "w:lines",
									wrap: "w:wrap",
								});
						}
					}
					t.FramePropertiesAttributes = a;
					class u extends n.XmlComponent {
						constructor(e) {
							var t, r;
							super("w:framePr"),
								this.root.push(
									new a({
										anchorLock: e.anchorLock,
										dropCap: e.dropCap,
										width: e.width,
										height: e.height,
										x: e.position.x,
										y: e.position.y,
										anchorHorizontal: e.anchor.horizontal,
										anchorVertical: e.anchor.vertical,
										spaceHorizontal:
											null === (t = e.space) ||
											void 0 === t
												? void 0
												: t.horizontal,
										spaceVertical:
											null === (r = e.space) ||
											void 0 === r
												? void 0
												: r.vertical,
										rule: e.rule,
										alignmentX: e.alignment.x,
										alignmentY: e.alignment.y,
										lines: e.lines,
										wrap: e.wrap,
									})
								);
						}
					}
					t.FrameProperties = u;
				},
				6464: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(9889), t);
				},
				4827: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(7654), t),
						o(r(1859), t),
						o(r(3434), t),
						o(r(6902), t),
						o(r(2805), t),
						o(r(3723), t),
						o(r(6464), t);
				},
				361: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.BookmarkEndAttributes = t.BookmarkStartAttributes =
							void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { id: "w:id", name: "w:name" });
						}
					}
					t.BookmarkStartAttributes = o;
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { id: "w:id" });
						}
					}
					t.BookmarkEndAttributes = i;
				},
				703: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.BookmarkEnd = t.BookmarkStart = t.Bookmark = void 0);
					const n = r(5524),
						o = r(2451),
						i = r(361);
					t.Bookmark = class {
						constructor(e) {
							const t = (0, n.uniqueId)();
							(this.start = new s(e.id, t)),
								(this.children = e.children),
								(this.end = new a(t));
						}
					};
					class s extends o.XmlComponent {
						constructor(e, t) {
							super("w:bookmarkStart");
							const r = new i.BookmarkStartAttributes({
								name: e,
								id: t,
							});
							this.root.push(r);
						}
					}
					t.BookmarkStart = s;
					class a extends o.XmlComponent {
						constructor(e) {
							super("w:bookmarkEnd");
							const t = new i.BookmarkEndAttributes({ id: e });
							this.root.push(t);
						}
					}
					t.BookmarkEnd = a;
				},
				2472: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.HyperlinkAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									id: "r:id",
									history: "w:history",
									anchor: "w:anchor",
								});
						}
					}
					t.HyperlinkAttributes = o;
				},
				7794: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ExternalHyperlink =
							t.InternalHyperlink =
							t.ConcreteHyperlink =
							t.HyperlinkType =
								void 0);
					const n = r(5524),
						o = r(2451),
						i = r(2472);
					var s;
					((s = t.HyperlinkType || (t.HyperlinkType = {})).INTERNAL =
						"INTERNAL"),
						(s.EXTERNAL = "EXTERNAL");
					class a extends o.XmlComponent {
						constructor(e, t, r) {
							super("w:hyperlink"), (this.linkId = t);
							const n = {
									history: 1,
									anchor: r || void 0,
									id: r ? void 0 : `rId${this.linkId}`,
								},
								o = new i.HyperlinkAttributes(n);
							this.root.push(o),
								e.forEach((e) => {
									this.root.push(e);
								});
						}
					}
					(t.ConcreteHyperlink = a),
						(t.InternalHyperlink = class extends a {
							constructor(e) {
								super(e.children, (0, n.uniqueId)(), e.anchor);
							}
						}),
						(t.ExternalHyperlink = class {
							constructor(e) {
								this.options = e;
							}
						});
				},
				2805: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(7794), t),
						o(r(703), t),
						o(r(7254), t),
						o(r(1488), t);
				},
				7254: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.OutlineLevel = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("w:outlineLvl"),
								(this.level = e),
								this.root.push(new n.Attributes({ val: e }));
						}
					}
					t.OutlineLevel = o;
				},
				1140: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PageReferenceFieldInstruction = void 0);
					const n = r(5321),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { space: "xml:space" });
						}
					}
					class s extends o.XmlComponent {
						constructor(e, t = {}) {
							super("w:instrText"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								);
							let r = `PAGEREF ${e}`;
							t.hyperlink && (r = `${r} \\h`),
								t.useRelativePosition && (r = `${r} \\p`),
								this.root.push(r);
						}
					}
					t.PageReferenceFieldInstruction = s;
				},
				1488: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.PageReference = void 0);
					const n = r(3178),
						o = r(6902),
						i = r(1140);
					class s extends o.Run {
						constructor(e, t = {}) {
							super({
								children: [
									new n.Begin(!0),
									new i.PageReferenceFieldInstruction(e, t),
									new n.End(),
								],
							});
						}
					}
					t.PageReference = s;
				},
				454: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(6721), t),
						o(r(4063), t),
						o(r(6507), t),
						o(r(6412), t);
				},
				6412: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathAngledBrackets = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(5664);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:d"),
								this.root.push(
									new i.MathBracketProperties({
										beginningCharacter: "〈",
										endingCharacter: "〉",
									})
								),
								this.root.push(new o.MathBase(e.children));
						}
					}
					t.MathAngledBrackets = s;
				},
				4981: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathBeginningCharacter = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { character: "m:val" });
						}
					}
					class i extends n.XmlComponent {
						constructor(e) {
							super("m:begChr"),
								this.root.push(new o({ character: e }));
						}
					}
					t.MathBeginningCharacter = i;
				},
				5664: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathBracketProperties = void 0);
					const n = r(2451),
						o = r(4981),
						i = r(6886);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:dPr"),
								e &&
									(this.root.push(
										new o.MathBeginningCharacter(
											e.beginningCharacter
										)
									),
									this.root.push(
										new i.MathEndingCharacter(
											e.endingCharacter
										)
									));
						}
					}
					t.MathBracketProperties = s;
				},
				6507: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathCurlyBrackets = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(5664);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:d"),
								this.root.push(
									new i.MathBracketProperties({
										beginningCharacter: "{",
										endingCharacter: "}",
									})
								),
								this.root.push(new o.MathBase(e.children));
						}
					}
					t.MathCurlyBrackets = s;
				},
				6886: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathEndingCharacter = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { character: "m:val" });
						}
					}
					class i extends n.XmlComponent {
						constructor(e) {
							super("m:endChr"),
								this.root.push(new o({ character: e }));
						}
					}
					t.MathEndingCharacter = i;
				},
				6721: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathRoundBrackets = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(5664);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:d"),
								this.root.push(new i.MathBracketProperties()),
								this.root.push(new o.MathBase(e.children));
						}
					}
					t.MathRoundBrackets = s;
				},
				4063: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSquareBrackets = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(5664);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:d"),
								this.root.push(
									new i.MathBracketProperties({
										beginningCharacter: "[",
										endingCharacter: "]",
									})
								),
								this.root.push(new o.MathBase(e.children));
						}
					}
					t.MathSquareBrackets = s;
				},
				1762: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(159), t),
						o(r(6014), t),
						o(r(2754), t);
				},
				6014: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathDenominator = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("m:den");
							for (const t of e) this.root.push(t);
						}
					}
					t.MathDenominator = o;
				},
				159: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathFraction = void 0);
					const n = r(2451),
						o = r(6014),
						i = r(2754);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:f"),
								this.root.push(
									new i.MathNumerator(e.numerator)
								),
								this.root.push(
									new o.MathDenominator(e.denominator)
								);
						}
					}
					t.MathFraction = s;
				},
				2754: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathNumerator = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("m:num");
							for (const t of e) this.root.push(t);
						}
					}
					t.MathNumerator = o;
				},
				8516: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(8058), t),
						o(r(6699), t),
						o(r(5881), t);
				},
				6699: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathFunctionName = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("m:fName");
							for (const t of e) this.root.push(t);
						}
					}
					t.MathFunctionName = o;
				},
				5881: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathFunctionProperties = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("m:funcPr");
						}
					}
					t.MathFunctionProperties = o;
				},
				8058: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathFunction = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(6699),
						s = r(5881);
					class a extends n.XmlComponent {
						constructor(e) {
							super("m:func"),
								this.root.push(new s.MathFunctionProperties()),
								this.root.push(new i.MathFunctionName(e.name)),
								this.root.push(new o.MathBase(e.children));
						}
					}
					t.MathFunction = a;
				},
				3723: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(9098), t),
						o(r(4127), t),
						o(r(1762), t),
						o(r(4114), t),
						o(r(7017), t),
						o(r(2071), t),
						o(r(1590), t),
						o(r(8516), t),
						o(r(454), t);
				},
				2071: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.WORKAROUND4 = void 0),
						(t.WORKAROUND4 = "");
				},
				4127: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathRun = void 0);
					const n = r(2451),
						o = r(787);
					class i extends n.XmlComponent {
						constructor(e) {
							super("m:r"), this.root.push(new o.MathText(e));
						}
					}
					t.MathRun = i;
				},
				787: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathText = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("m:t"), this.root.push(e);
						}
					}
					t.MathText = o;
				},
				9098: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Math = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("m:oMath");
							for (const t of e.children) this.root.push(t);
						}
					}
					t.Math = o;
				},
				4114: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(8910), t),
						o(r(8406), t),
						o(r(2981), t),
						o(r(8431), t),
						o(r(7817), t),
						o(r(1426), t),
						o(r(1427), t);
				},
				8910: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathAccentCharacter = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { accent: "m:val" });
						}
					}
					class i extends n.XmlComponent {
						constructor(e) {
							super("m:chr"),
								this.root.push(new o({ accent: e }));
						}
					}
					t.MathAccentCharacter = i;
				},
				8406: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathBase = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("m:e");
							for (const t of e) this.root.push(t);
						}
					}
					t.MathBase = o;
				},
				2981: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathLimitLocation = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { value: "m:val" });
						}
					}
					class i extends n.XmlComponent {
						constructor() {
							super("m:limLoc"),
								this.root.push(new o({ value: "undOvr" }));
						}
					}
					t.MathLimitLocation = i;
				},
				8431: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathNArayProperties = void 0);
					const n = r(2451),
						o = r(8910),
						i = r(2981),
						s = r(5449),
						a = r(1069);
					class u extends n.XmlComponent {
						constructor(e, t, r) {
							super("m:naryPr"),
								this.root.push(new o.MathAccentCharacter(e)),
								this.root.push(new i.MathLimitLocation()),
								t ||
									this.root.push(new a.MathSuperScriptHide()),
								r || this.root.push(new s.MathSubScriptHide());
						}
					}
					t.MathNArayProperties = u;
				},
				5449: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSubScriptHide = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { hide: "m:val" });
						}
					}
					class i extends n.XmlComponent {
						constructor() {
							super("m:subHide"),
								this.root.push(new o({ hide: 1 }));
						}
					}
					t.MathSubScriptHide = i;
				},
				7817: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSubScriptElement = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("m:sub");
							for (const t of e) this.root.push(t);
						}
					}
					t.MathSubScriptElement = o;
				},
				1426: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSum = void 0);
					const n = r(2451),
						o = r(8406),
						i = r(8431),
						s = r(7817),
						a = r(1427);
					class u extends n.XmlComponent {
						constructor(e) {
							super("m:nary"),
								this.root.push(
									new i.MathNArayProperties(
										"∑",
										!!e.superScript,
										!!e.subScript
									)
								),
								e.subScript &&
									this.root.push(
										new s.MathSubScriptElement(e.subScript)
									),
								e.superScript &&
									this.root.push(
										new a.MathSuperScriptElement(
											e.superScript
										)
									),
								this.root.push(new o.MathBase(e.children));
						}
					}
					t.MathSum = u;
				},
				1069: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSuperScriptHide = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { hide: "m:val" });
						}
					}
					class i extends n.XmlComponent {
						constructor() {
							super("m:supHide"),
								this.root.push(new o({ hide: 1 }));
						}
					}
					t.MathSuperScriptHide = i;
				},
				1427: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSuperScriptElement = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("m:sup");
							for (const t of e) this.root.push(t);
						}
					}
					t.MathSuperScriptElement = o;
				},
				1590: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(1659), t),
						o(r(6391), t),
						o(r(8344), t);
				},
				3210: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathDegreeHide = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { hide: "m:val" });
						}
					}
					class i extends n.XmlComponent {
						constructor() {
							super("m:degHide"),
								this.root.push(new o({ hide: 1 }));
						}
					}
					t.MathDegreeHide = i;
				},
				1659: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathDegree = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							if ((super("m:deg"), e))
								for (const t of e) this.root.push(t);
						}
					}
					t.MathDegree = o;
				},
				8344: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathRadicalProperties = void 0);
					const n = r(2451),
						o = r(3210);
					class i extends n.XmlComponent {
						constructor(e) {
							super("m:radPr"),
								e || this.root.push(new o.MathDegreeHide());
						}
					}
					t.MathRadicalProperties = i;
				},
				6391: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathRadical = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(1659),
						s = r(8344);
					class a extends n.XmlComponent {
						constructor(e) {
							super("m:rad"),
								this.root.push(
									new s.MathRadicalProperties(!!e.degree)
								),
								this.root.push(new i.MathDegree(e.degree)),
								this.root.push(new o.MathBase(e.children));
						}
					}
					t.MathRadical = a;
				},
				7017: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(35), t),
						o(r(9680), t),
						o(r(573), t),
						o(r(6274), t);
				},
				6274: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(6977), t),
						o(r(3003), t);
				},
				3003: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathPreSubSuperScriptProperties = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("m:sPrePr");
						}
					}
					t.MathPreSubSuperScriptProperties = o;
				},
				6977: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathPreSubSuperScript = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(3003);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:sPre"),
								this.root.push(
									new i.MathPreSubSuperScriptProperties()
								),
								this.root.push(new o.MathBase(e.children)),
								this.root.push(
									new o.MathSubScriptElement(e.subScript)
								),
								this.root.push(
									new o.MathSuperScriptElement(e.superScript)
								);
						}
					}
					t.MathPreSubSuperScript = s;
				},
				9680: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(8507), t),
						o(r(476), t);
				},
				476: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSubScriptProperties = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("m:sSubPr");
						}
					}
					t.MathSubScriptProperties = o;
				},
				8507: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSubScript = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(476);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:sSub"),
								this.root.push(new i.MathSubScriptProperties()),
								this.root.push(new o.MathBase(e.children)),
								this.root.push(
									new o.MathSubScriptElement(e.subScript)
								);
						}
					}
					t.MathSubScript = s;
				},
				573: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(9442), t),
						o(r(7137), t);
				},
				7137: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSubSuperScriptProperties = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("m:sSubSupPr");
						}
					}
					t.MathSubSuperScriptProperties = o;
				},
				9442: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSubSuperScript = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(7137);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:sSubSup"),
								this.root.push(
									new i.MathSubSuperScriptProperties()
								),
								this.root.push(new o.MathBase(e.children)),
								this.root.push(
									new o.MathSubScriptElement(e.subScript)
								),
								this.root.push(
									new o.MathSuperScriptElement(e.superScript)
								);
						}
					}
					t.MathSubSuperScript = s;
				},
				35: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(2901), t),
						o(r(4912), t);
				},
				4912: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSuperScriptProperties = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("m:sSupPr");
						}
					}
					t.MathSuperScriptProperties = o;
				},
				2901: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.MathSuperScript = void 0);
					const n = r(2451),
						o = r(4114),
						i = r(4912);
					class s extends n.XmlComponent {
						constructor(e) {
							super("m:sSup"),
								this.root.push(
									new i.MathSuperScriptProperties()
								),
								this.root.push(new o.MathBase(e.children)),
								this.root.push(
									new o.MathSuperScriptElement(e.superScript)
								);
						}
					}
					t.MathSuperScript = s;
				},
				1859: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Paragraph = void 0);
					const n = r(5524),
						o = r(2451),
						i = r(9522),
						s = r(2805),
						a = r(3434),
						u = r(6902);
					class c extends o.XmlComponent {
						constructor(e) {
							if ((super("w:p"), "string" == typeof e))
								return (
									(this.properties =
										new a.ParagraphProperties({})),
									this.root.push(this.properties),
									this.root.push(new u.TextRun(e)),
									this
								);
							if (
								((this.properties = new a.ParagraphProperties(
									e
								)),
								this.root.push(this.properties),
								e.text && this.root.push(new u.TextRun(e.text)),
								e.children)
							)
								for (const t of e.children)
									if (t instanceof s.Bookmark) {
										this.root.push(t.start);
										for (const e of t.children)
											this.root.push(e);
										this.root.push(t.end);
									} else this.root.push(t);
						}
						prepForXml(e) {
							for (const t of this.root)
								if (t instanceof s.ExternalHyperlink) {
									const r = this.root.indexOf(t),
										o = new s.ConcreteHyperlink(
											t.options.children,
											(0, n.uniqueId)()
										);
									e.viewWrapper.Relationships.createRelationship(
										o.linkId,
										"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
										t.options.link,
										i.TargetModeType.EXTERNAL
									),
										(this.root[r] = o);
								}
							return super.prepForXml(e);
						}
						addRunToFront(e) {
							return this.root.splice(1, 0, e), this;
						}
					}
					t.Paragraph = c;
				},
				3434: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ParagraphProperties = void 0);
					const n = r(2451),
						o = r(7249),
						i = r(8613),
						s = r(5778),
						a = r(7942),
						u = r(9884),
						c = r(2639),
						l = r(4200),
						p = r(6923),
						h = r(317),
						d = r(3538),
						f = r(9889),
						m = r(2805);
					class g extends n.IgnoreIfEmptyXmlComponent {
						constructor(e) {
							var t, r;
							if (
								(super("w:pPr"),
								(this.numberingReferences = []),
								!e)
							)
								return this;
							if (
								(e.heading && this.push(new p.Style(e.heading)),
								e.bullet &&
									this.push(new p.Style("ListParagraph")),
								e.numbering &&
									(e.style ||
										e.heading ||
										e.numbering.custom ||
										this.push(
											new p.Style("ListParagraph")
										)),
								e.style && this.push(new p.Style(e.style)),
								void 0 !== e.keepNext &&
									this.push(
										new n.OnOffElement(
											"w:keepNext",
											e.keepNext
										)
									),
								void 0 !== e.keepLines &&
									this.push(
										new n.OnOffElement(
											"w:keepLines",
											e.keepLines
										)
									),
								e.pageBreakBefore &&
									this.push(new u.PageBreakBefore()),
								e.frame &&
									this.push(new f.FrameProperties(e.frame)),
								void 0 !== e.widowControl &&
									this.push(
										new n.OnOffElement(
											"w:widowControl",
											e.widowControl
										)
									),
								e.bullet &&
									this.push(
										new d.NumberProperties(
											1,
											e.bullet.level
										)
									),
								e.numbering &&
									(this.numberingReferences.push({
										reference: e.numbering.reference,
										instance:
											null !==
												(t = e.numbering.instance) &&
											void 0 !== t
												? t
												: 0,
									}),
									this.push(
										new d.NumberProperties(
											`${e.numbering.reference}-${
												null !==
													(r =
														e.numbering.instance) &&
												void 0 !== r
													? r
													: 0
											}`,
											e.numbering.level
										)
									)),
								e.border && this.push(new a.Border(e.border)),
								e.thematicBreak &&
									this.push(new a.ThematicBreak()),
								e.shading &&
									this.push(new i.Shading(e.shading)),
								e.rightTabStop &&
									this.push(
										new h.TabStop(
											h.TabStopType.RIGHT,
											e.rightTabStop
										)
									),
								e.tabStops)
							)
								for (const t of e.tabStops)
									this.push(
										new h.TabStop(
											t.type,
											t.position,
											t.leader
										)
									);
							e.leftTabStop &&
								this.push(
									new h.TabStop(
										h.TabStopType.LEFT,
										e.leftTabStop
									)
								),
								void 0 !== e.bidirectional &&
									this.push(
										new n.OnOffElement(
											"w:bidi",
											e.contextualSpacing
										)
									),
								e.spacing &&
									this.push(new l.Spacing(e.spacing)),
								e.indent && this.push(new c.Indent(e.indent)),
								void 0 !== e.contextualSpacing &&
									this.push(
										new n.OnOffElement(
											"w:contextualSpacing",
											e.contextualSpacing
										)
									),
								e.alignment &&
									this.push(new s.Alignment(e.alignment)),
								void 0 !== e.outlineLevel &&
									this.push(
										new m.OutlineLevel(e.outlineLevel)
									),
								void 0 !== e.suppressLineNumbers &&
									this.push(
										new n.OnOffElement(
											"w:suppressLineNumbers",
											e.suppressLineNumbers
										)
									);
						}
						push(e) {
							this.root.push(e);
						}
						prepForXml(e) {
							if (e.viewWrapper instanceof o.DocumentWrapper)
								for (const t of this.numberingReferences)
									e.file.Numbering.createConcreteNumberingInstance(
										t.reference,
										t.instance
									);
							return super.prepForXml(e);
						}
					}
					t.ParagraphProperties = g;
				},
				6724: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Break = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("w:br");
						}
					}
					t.Break = o;
				},
				3846: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DotEmphasisMark =
							t.EmphasisMark =
							t.BaseEmphasisMark =
							t.EmphasisMarkType =
								void 0);
					const n = r(2451);
					var o;
					!(function (e) {
						e.DOT = "dot";
					})((o = t.EmphasisMarkType || (t.EmphasisMarkType = {})));
					class i extends n.XmlComponent {
						constructor(e) {
							super("w:em"),
								this.root.push(new n.Attributes({ val: e }));
						}
					}
					(t.BaseEmphasisMark = i),
						(t.EmphasisMark = class extends i {
							constructor(e = o.DOT) {
								super(e);
							}
						}),
						(t.DotEmphasisMark = class extends i {
							constructor() {
								super(o.DOT);
							}
						});
				},
				3178: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.End = t.Separate = t.Begin = void 0);
					const n = r(2451);
					var o;
					!(function (e) {
						(e.BEGIN = "begin"),
							(e.END = "end"),
							(e.SEPARATE = "separate");
					})(o || (o = {}));
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									type: "w:fldCharType",
									dirty: "w:dirty",
								});
						}
					}
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:fldChar"),
								this.root.push(
									new i({ type: o.BEGIN, dirty: e })
								);
						}
					}
					t.Begin = s;
					class a extends n.XmlComponent {
						constructor(e) {
							super("w:fldChar"),
								this.root.push(
									new i({ type: o.SEPARATE, dirty: e })
								);
						}
					}
					t.Separate = a;
					class u extends n.XmlComponent {
						constructor(e) {
							super("w:fldChar"),
								this.root.push(
									new i({ type: o.END, dirty: e })
								);
						}
					}
					t.End = u;
				},
				9588: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.HighlightComplexScript =
							t.Highlight =
							t.Color =
							t.CharacterSpacing =
								void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlComponent {
						constructor(e) {
							super("w:spacing"),
								this.root.push(
									new o.Attributes({
										val: (0, n.signedTwipsMeasureValue)(e),
									})
								);
						}
					}
					t.CharacterSpacing = i;
					class s extends o.XmlComponent {
						constructor(e) {
							super("w:color"),
								this.root.push(
									new o.Attributes({
										val: (0, n.hexColorValue)(e),
									})
								);
						}
					}
					t.Color = s;
					class a extends o.XmlComponent {
						constructor(e) {
							super("w:highlight"),
								this.root.push(new o.Attributes({ val: e }));
						}
					}
					t.Highlight = a;
					class u extends o.XmlComponent {
						constructor(e) {
							super("w:highlightCs"),
								this.root.push(new o.Attributes({ val: e }));
						}
					}
					t.HighlightComplexScript = u;
				},
				2413: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ImageRun = void 0);
					const n = r(5524),
						o = r(6876),
						i = r(6902);
					class s extends i.Run {
						constructor(e) {
							super({}), (this.key = `${(0, n.uniqueId)()}.png`);
							const t =
								"string" == typeof e.data
									? this.convertDataURIToBinary(e.data)
									: e.data;
							this.imageData = {
								stream: t,
								fileName: this.key,
								transformation: {
									pixels: {
										x: Math.round(e.transformation.width),
										y: Math.round(e.transformation.height),
									},
									emus: {
										x: Math.round(
											9525 * e.transformation.width
										),
										y: Math.round(
											9525 * e.transformation.height
										),
									},
									flip: e.transformation.flip,
									rotation: e.transformation.rotation
										? 6e4 * e.transformation.rotation
										: void 0,
								},
							};
							const r = new o.Drawing(this.imageData, {
								floating: e.floating,
							});
							this.root.push(r);
						}
						prepForXml(e) {
							return (
								e.file.Media.addImage(this.key, this.imageData),
								super.prepForXml(e)
							);
						}
						convertDataURIToBinary(e) {
							const t = ";base64,",
								n = e.indexOf(t) + t.length;
							return "function" == typeof atob
								? new Uint8Array(
										atob(e.substring(n))
											.split("")
											.map((e) => e.charCodeAt(0))
								  )
								: new (r(8764).Buffer)(e, "base64");
						}
					}
					t.ImageRun = s;
				},
				6902: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(2076), t),
						o(r(1972), t),
						o(r(2468), t),
						o(r(1877), t),
						o(r(2413), t),
						o(r(6149), t),
						o(r(6706), t),
						o(r(104), t),
						o(r(3846), t),
						o(r(6210), t),
						o(r(7803), t);
				},
				8503: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.NumberOfPagesSection =
							t.NumberOfPages =
							t.Page =
								void 0);
					const n = r(5321),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { space: "xml:space" });
						}
					}
					class s extends o.XmlComponent {
						constructor() {
							super("w:instrText"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								),
								this.root.push("PAGE");
						}
					}
					t.Page = s;
					class a extends o.XmlComponent {
						constructor() {
							super("w:instrText"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								),
								this.root.push("NUMPAGES");
						}
					}
					t.NumberOfPages = a;
					class u extends o.XmlComponent {
						constructor() {
							super("w:instrText"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								),
								this.root.push("SECTIONPAGES");
						}
					}
					t.NumberOfPagesSection = u;
				},
				1972: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.RunProperties = void 0);
					const n = r(8613),
						o = r(2451),
						i = r(3846),
						s = r(9588),
						a = r(6149),
						u = r(2737),
						c = r(104);
					class l extends o.IgnoreIfEmptyXmlComponent {
						constructor(e) {
							var t, r;
							if ((super("w:rPr"), !e)) return;
							void 0 !== e.bold &&
								this.push(new o.OnOffElement("w:b", e.bold)),
								((void 0 === e.boldComplexScript &&
									void 0 !== e.bold) ||
									e.boldComplexScript) &&
									this.push(
										new o.OnOffElement(
											"w:bCs",
											null !==
												(t = e.boldComplexScript) &&
											void 0 !== t
												? t
												: e.bold
										)
									),
								void 0 !== e.italics &&
									this.push(
										new o.OnOffElement("w:i", e.italics)
									),
								((void 0 === e.italicsComplexScript &&
									void 0 !== e.italics) ||
									e.italicsComplexScript) &&
									this.push(
										new o.OnOffElement(
											"w:iCs",
											null !==
												(r = e.italicsComplexScript) &&
											void 0 !== r
												? r
												: e.italics
										)
									),
								e.underline &&
									this.push(
										new c.Underline(
											e.underline.type,
											e.underline.color
										)
									),
								e.emphasisMark &&
									this.push(
										new i.EmphasisMark(e.emphasisMark.type)
									),
								e.color && this.push(new s.Color(e.color)),
								void 0 !== e.size &&
									this.push(
										new o.HpsMeasureElement("w:sz", e.size)
									);
							const l =
								void 0 === e.sizeComplexScript ||
								!0 === e.sizeComplexScript
									? e.size
									: e.sizeComplexScript;
							l &&
								this.push(new o.HpsMeasureElement("w:szCs", l)),
								void 0 !== e.rightToLeft &&
									this.push(
										new o.OnOffElement(
											"w:rtl",
											e.rightToLeft
										)
									),
								void 0 !== e.smallCaps
									? this.push(
											new o.OnOffElement(
												"w:smallCaps",
												e.smallCaps
											)
									  )
									: void 0 !== e.allCaps &&
									  this.push(
											new o.OnOffElement(
												"w:caps",
												e.allCaps
											)
									  ),
								void 0 !== e.strike &&
									this.push(
										new o.OnOffElement("w:strike", e.strike)
									),
								void 0 !== e.doubleStrike &&
									this.push(
										new o.OnOffElement(
											"w:dstrike",
											e.doubleStrike
										)
									),
								e.subScript && this.push(new u.SubScript()),
								e.superScript && this.push(new u.SuperScript()),
								e.style &&
									this.push(
										new o.StringValueElement(
											"w:rStyle",
											e.style
										)
									),
								e.font &&
									("string" == typeof e.font
										? this.push(new a.RunFonts(e.font))
										: "name" in e.font
										? this.push(
												new a.RunFonts(
													e.font.name,
													e.font.hint
												)
										  )
										: this.push(new a.RunFonts(e.font))),
								e.highlight &&
									this.push(new s.Highlight(e.highlight));
							const p =
								void 0 === e.highlightComplexScript ||
								!0 === e.highlightComplexScript
									? e.highlight
									: e.highlightComplexScript;
							p && this.push(new s.HighlightComplexScript(p)),
								e.characterSpacing &&
									this.push(
										new s.CharacterSpacing(
											e.characterSpacing
										)
									),
								void 0 !== e.emboss &&
									this.push(
										new o.OnOffElement("w:emboss", e.emboss)
									),
								void 0 !== e.imprint &&
									this.push(
										new o.OnOffElement(
											"w:imprint",
											e.imprint
										)
									),
								e.shading &&
									this.push(new n.Shading(e.shading));
						}
						push(e) {
							this.root.push(e);
						}
					}
					t.RunProperties = l;
				},
				1689: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Symbol = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									char: "w:char",
									symbolfont: "w:font",
								});
						}
					}
					class i extends n.XmlComponent {
						constructor(e = "", t = "Wingdings") {
							super("w:sym"),
								this.root.push(
									new o({ char: e, symbolfont: t })
								);
						}
					}
					t.Symbol = i;
				},
				9291: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Text = void 0);
					const n = r(5321),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { space: "xml:space" });
						}
					}
					class s extends o.XmlComponent {
						constructor(e) {
							super("w:t"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								),
								this.root.push(e);
						}
					}
					t.Text = s;
				},
				6149: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.RunFonts = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									ascii: "w:ascii",
									cs: "w:cs",
									eastAsia: "w:eastAsia",
									hAnsi: "w:hAnsi",
									hint: "w:hint",
								});
						}
					}
					class i extends n.XmlComponent {
						constructor(e, t) {
							if ((super("w:rFonts"), "string" == typeof e)) {
								const r = e;
								this.root.push(
									new o({
										ascii: r,
										cs: r,
										eastAsia: r,
										hAnsi: r,
										hint: t,
									})
								);
							} else {
								const t = e;
								this.root.push(new o(t));
							}
						}
					}
					t.RunFonts = i;
				},
				2076: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Run = t.PageNumber = void 0);
					const n = r(2451),
						o = r(6724),
						i = r(3178),
						s = r(8503),
						a = r(1972),
						u = r(9291);
					var c;
					!(function (e) {
						(e.CURRENT = "CURRENT"),
							(e.TOTAL_PAGES = "TOTAL_PAGES"),
							(e.TOTAL_PAGES_IN_SECTION =
								"TOTAL_PAGES_IN_SECTION");
					})((c = t.PageNumber || (t.PageNumber = {})));
					class l extends n.XmlComponent {
						constructor(e) {
							if (
								(super("w:r"),
								(this.properties = new a.RunProperties(e)),
								this.root.push(this.properties),
								e.break)
							)
								for (let t = 0; t < e.break; t++)
									this.root.push(new o.Break());
							if (e.children)
								for (const t of e.children)
									if ("string" != typeof t) this.root.push(t);
									else
										switch (t) {
											case c.CURRENT:
												this.root.push(new i.Begin()),
													this.root.push(
														new s.Page()
													),
													this.root.push(
														new i.Separate()
													),
													this.root.push(new i.End());
												break;
											case c.TOTAL_PAGES:
												this.root.push(new i.Begin()),
													this.root.push(
														new s.NumberOfPages()
													),
													this.root.push(
														new i.Separate()
													),
													this.root.push(new i.End());
												break;
											case c.TOTAL_PAGES_IN_SECTION:
												this.root.push(new i.Begin()),
													this.root.push(
														new s.NumberOfPagesSection()
													),
													this.root.push(
														new i.Separate()
													),
													this.root.push(new i.End());
												break;
											default:
												this.root.push(new u.Text(t));
										}
							else e.text && this.root.push(new u.Text(e.text));
						}
					}
					t.Run = l;
				},
				2737: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SubScript =
							t.SuperScript =
							t.VerticalAlign =
								void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e) {
							super("w:vertAlign"),
								this.root.push(new n.Attributes({ val: e }));
						}
					}
					(t.VerticalAlign = o),
						(t.SuperScript = class extends o {
							constructor() {
								super("superscript");
							}
						}),
						(t.SubScript = class extends o {
							constructor() {
								super("subscript");
							}
						});
				},
				2393: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SequentialIdentifierInstruction = void 0);
					const n = r(5321),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { space: "xml:space" });
						}
					}
					class s extends o.XmlComponent {
						constructor(e) {
							super("w:instrText"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								),
								this.root.push(`SEQ ${e}`);
						}
					}
					t.SequentialIdentifierInstruction = s;
				},
				6706: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SequentialIdentifier = void 0);
					const n = r(6902),
						o = r(3178),
						i = r(2393);
					class s extends n.Run {
						constructor(e) {
							super({}),
								this.root.push(new o.Begin(!0)),
								this.root.push(
									new i.SequentialIdentifierInstruction(e)
								),
								this.root.push(new o.Separate()),
								this.root.push(new o.End());
						}
					}
					t.SequentialIdentifier = s;
				},
				7803: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SimpleMailMergeField = t.SimpleField = void 0);
					const n = r(2451),
						o = r(2468);
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { instr: "w:instr" });
						}
					}
					class s extends n.XmlComponent {
						constructor(e, t) {
							super("w:fldSimple"),
								this.root.push(new i({ instr: e })),
								void 0 !== t &&
									this.root.push(new o.TextRun(t));
						}
					}
					(t.SimpleField = s),
						(t.SimpleMailMergeField = class extends s {
							constructor(e) {
								super(` MERGEFIELD ${e} `, `«${e}»`);
							}
						});
				},
				1877: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SymbolRun = void 0);
					const n = r(2076),
						o = r(1689);
					class i extends n.Run {
						constructor(e) {
							if ("string" == typeof e)
								return (
									super({}),
									void this.root.push(new o.Symbol(e))
								);
							super(e),
								this.root.push(
									new o.Symbol(e.char, e.symbolfont)
								);
						}
					}
					t.SymbolRun = i;
				},
				6210: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Tab = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("w:tab");
						}
					}
					t.Tab = o;
				},
				2468: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TextRun = void 0);
					const n = r(2076),
						o = r(9291);
					class i extends n.Run {
						constructor(e) {
							if ("string" == typeof e)
								return (
									super({}),
									this.root.push(new o.Text(e)),
									this
								);
							super(e);
						}
					}
					t.TextRun = i;
				},
				104: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Underline = t.UnderlineType = void 0);
					const n = r(459),
						o = r(2451);
					var i;
					!(function (e) {
						(e.SINGLE = "single"),
							(e.WORDS = "words"),
							(e.DOUBLE = "double"),
							(e.THICK = "thick"),
							(e.DOTTED = "dotted"),
							(e.DOTTEDHEAVY = "dottedHeavy"),
							(e.DASH = "dash"),
							(e.DASHEDHEAVY = "dashedHeavy"),
							(e.DASHLONG = "dashLong"),
							(e.DASHLONGHEAVY = "dashLongHeavy"),
							(e.DOTDASH = "dotDash"),
							(e.DASHDOTHEAVY = "dashDotHeavy"),
							(e.DOTDOTDASH = "dotDotDash"),
							(e.DASHDOTDOTHEAVY = "dashDotDotHeavy"),
							(e.WAVE = "wave"),
							(e.WAVYHEAVY = "wavyHeavy"),
							(e.WAVYDOUBLE = "wavyDouble");
					})((i = t.UnderlineType || (t.UnderlineType = {})));
					class s extends o.XmlComponent {
						constructor(e = i.SINGLE, t) {
							super("w:u"),
								this.root.push(
									new o.Attributes({
										val: e,
										color:
											void 0 === t
												? void 0
												: (0, n.hexColorValue)(t),
									})
								);
						}
					}
					t.Underline = s;
				},
				282: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.RelationshipsAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { xmlns: "xmlns" });
						}
					}
					t.RelationshipsAttributes = o;
				},
				7224: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(3561), t);
				},
				9464: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.RelationshipAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									id: "Id",
									type: "Type",
									target: "Target",
									targetMode: "TargetMode",
								});
						}
					}
					t.RelationshipAttributes = o;
				},
				9522: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Relationship = t.TargetModeType = void 0);
					const n = r(2451),
						o = r(9464);
					(t.TargetModeType || (t.TargetModeType = {})).EXTERNAL =
						"External";
					class i extends n.XmlComponent {
						constructor(e, t, r, n) {
							super("Relationship"),
								this.root.push(
									new o.RelationshipAttributes({
										id: e,
										type: t,
										target: r,
										targetMode: n,
									})
								);
						}
					}
					t.Relationship = i;
				},
				3561: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Relationships = void 0);
					const n = r(2451),
						o = r(282),
						i = r(9522);
					class s extends n.XmlComponent {
						constructor() {
							super("Relationships"),
								this.root.push(
									new o.RelationshipsAttributes({
										xmlns: "http://schemas.openxmlformats.org/package/2006/relationships",
									})
								);
						}
						addRelationship(e) {
							this.root.push(e);
						}
						createRelationship(e, t, r, n) {
							const o = new i.Relationship(`rId${e}`, t, r, n);
							return this.addRelationship(o), o;
						}
						get RelationshipCount() {
							return this.root.length - 1;
						}
					}
					t.Relationships = s;
				},
				5192: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.CompatibilitySetting =
							t.CompatibilitySettingAttributes =
								void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									version: "w:val",
									name: "w:name",
									uri: "w:uri",
								});
						}
					}
					t.CompatibilitySettingAttributes = o;
					class i extends n.XmlComponent {
						constructor(e) {
							super("w:compatSetting"),
								this.root.push(
									new o({
										version: e,
										uri: "http://schemas.microsoft.com/office/word",
										name: "compatibilityMode",
									})
								);
						}
					}
					t.CompatibilitySetting = i;
				},
				2201: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Compatibility = void 0);
					const n = r(2451),
						o = r(5192);
					class i extends n.XmlComponent {
						constructor(e) {
							super("w:compat"),
								void 0 !== e.doNotExpandShiftReturn &&
									this.root.push(
										new n.OnOffElement(
											"w:doNotExpandShiftReturn",
											e.doNotExpandShiftReturn
										)
									),
								e.version &&
									this.root.push(
										new o.CompatibilitySetting(e.version)
									);
						}
					}
					t.Compatibility = i;
				},
				9694: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(4110), t);
				},
				4110: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Settings = t.SettingsAttributes = void 0);
					const n = r(2451),
						o = r(2201);
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									wpc: "xmlns:wpc",
									mc: "xmlns:mc",
									o: "xmlns:o",
									r: "xmlns:r",
									m: "xmlns:m",
									v: "xmlns:v",
									wp14: "xmlns:wp14",
									wp: "xmlns:wp",
									w10: "xmlns:w10",
									w: "xmlns:w",
									w14: "xmlns:w14",
									w15: "xmlns:w15",
									wpg: "xmlns:wpg",
									wpi: "xmlns:wpi",
									wne: "xmlns:wne",
									wps: "xmlns:wps",
									Ignorable: "mc:Ignorable",
								});
						}
					}
					t.SettingsAttributes = i;
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:settings"),
								this.root.push(
									new i({
										wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
										mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
										o: "urn:schemas-microsoft-com:office:office",
										r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
										m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
										v: "urn:schemas-microsoft-com:vml",
										wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
										wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
										w10: "urn:schemas-microsoft-com:office:word",
										w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
										w14: "http://schemas.microsoft.com/office/word/2010/wordml",
										w15: "http://schemas.microsoft.com/office/word/2012/wordml",
										wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
										wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
										wne: "http://schemas.microsoft.com/office/word/2006/wordml",
										wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
										Ignorable: "w14 w15 wp14",
									})
								),
								this.root.push(
									new n.OnOffElement(
										"w:displayBackgroundShape",
										!0
									)
								),
								void 0 !== e.trackRevisions &&
									this.root.push(
										new n.OnOffElement(
											"w:trackRevisions",
											e.trackRevisions
										)
									),
								void 0 !== e.evenAndOddHeaders &&
									this.root.push(
										new n.OnOffElement(
											"w:evenAndOddHeaders",
											e.evenAndOddHeaders
										)
									),
								void 0 !== e.updateFields &&
									this.root.push(
										new n.OnOffElement(
											"w:updateFields",
											e.updateFields
										)
									),
								this.root.push(
									new o.Compatibility({
										version:
											e.compatabilityModeVersion || 15,
									})
								);
						}
					}
					t.Settings = s;
				},
				8613: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(4533), t);
				},
				4533: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ShadingType = t.Shading = void 0);
					const n = r(2451),
						o = r(459);
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									fill: "w:fill",
									color: "w:color",
									type: "w:val",
								});
						}
					}
					class s extends n.XmlComponent {
						constructor({ fill: e, color: t, type: r }) {
							super("w:shd"),
								this.root.push(
									new i({
										fill:
											void 0 === e
												? void 0
												: (0, o.hexColorValue)(e),
										color:
											void 0 === t
												? void 0
												: (0, o.hexColorValue)(t),
										type: r,
									})
								);
						}
					}
					var a;
					(t.Shading = s),
						((a = t.ShadingType || (t.ShadingType = {})).CLEAR =
							"clear"),
						(a.DIAGONAL_CROSS = "diagCross"),
						(a.DIAGONAL_STRIPE = "diagStripe"),
						(a.HORIZONTAL_CROSS = "horzCross"),
						(a.HORIZONTAL_STRIPE = "horzStripe"),
						(a.NIL = "nil"),
						(a.PERCENT_5 = "pct5"),
						(a.PERCENT_10 = "pct10"),
						(a.PERCENT_12 = "pct12"),
						(a.PERCENT_15 = "pct15"),
						(a.PERCENT_20 = "pct20"),
						(a.PERCENT_25 = "pct25"),
						(a.PERCENT_30 = "pct30"),
						(a.PERCENT_35 = "pct35"),
						(a.PERCENT_37 = "pct37"),
						(a.PERCENT_40 = "pct40"),
						(a.PERCENT_45 = "pct45"),
						(a.PERCENT_50 = "pct50"),
						(a.PERCENT_55 = "pct55"),
						(a.PERCENT_60 = "pct60"),
						(a.PERCENT_62 = "pct62"),
						(a.PERCENT_65 = "pct65"),
						(a.PERCENT_70 = "pct70"),
						(a.PERCENT_75 = "pct75"),
						(a.PERCENT_80 = "pct80"),
						(a.PERCENT_85 = "pct85"),
						(a.PERCENT_87 = "pct87"),
						(a.PERCENT_90 = "pct90"),
						(a.PERCENT_95 = "pct95"),
						(a.REVERSE_DIAGONAL_STRIPE = "reverseDiagStripe"),
						(a.SOLID = "solid"),
						(a.THIN_DIAGONAL_CROSS = "thinDiagCross"),
						(a.THIN_DIAGONAL_STRIPE = "thinDiagStripe"),
						(a.THIN_HORIZONTAL_CROSS = "thinHorzCross"),
						(a.THIN_REVERSE_DIAGONAL_STRIPE =
							"thinReverseDiagStripe"),
						(a.THIN_VERTICAL_STRIPE = "thinVertStripe"),
						(a.VERTICAL_STRIPE = "vertStripe");
				},
				1420: (e, t) => {
					"use strict";
					var r, n;
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.VerticalPositionAlign = t.HorizontalPositionAlign =
							void 0),
						((n =
							t.HorizontalPositionAlign ||
							(t.HorizontalPositionAlign = {})).CENTER =
							"center"),
						(n.INSIDE = "inside"),
						(n.LEFT = "left"),
						(n.OUTSIDE = "outside"),
						(n.RIGHT = "right"),
						((r =
							t.VerticalPositionAlign ||
							(t.VerticalPositionAlign = {})).BOTTOM = "bottom"),
						(r.CENTER = "center"),
						(r.INSIDE = "inside"),
						(r.OUTSIDE = "outside"),
						(r.TOP = "top");
				},
				2969: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(1420), t),
						o(r(7321), t);
				},
				7321: (e, t) => {
					"use strict";
					var r;
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.NumberFormat = void 0),
						((r = t.NumberFormat || (t.NumberFormat = {})).DECIMAL =
							"decimal"),
						(r.UPPER_ROMAN = "upperRoman"),
						(r.LOWER_ROMAN = "lowerRoman"),
						(r.UPPER_LETTER = "upperLetter"),
						(r.LOWER_LETTER = "lowerLetter"),
						(r.ORDINAL = "ordinal"),
						(r.CARDINAL_TEXT = "cardinalText"),
						(r.ORDINAL_TEXT = "ordinalText"),
						(r.HEX = "hex"),
						(r.CHICAGO = "chicago"),
						(r.IDEOGRAPH_DIGITAL = "ideographDigital"),
						(r.JAPANESE_COUNTING = "japaneseCounting"),
						(r.AIUEO = "aiueo"),
						(r.IROHA = "iroha"),
						(r.DECIMAL_FULL_WIDTH = "decimalFullWidth"),
						(r.DECIMAL_HALF_WIDTH = "decimalHalfWidth"),
						(r.JAPANESE_LEGAL = "japaneseLegal"),
						(r.JAPANESE_DIGITAL_TEN_THOUSAND =
							"japaneseDigitalTenThousand"),
						(r.DECIMAL_ENCLOSED_CIRCLE = "decimalEnclosedCircle"),
						(r.DECIMAL_FULL_WIDTH_2 = "decimalFullWidth2"),
						(r.AIUEO_FULL_WIDTH = "aiueoFullWidth"),
						(r.IROHA_FULL_WIDTH = "irohaFullWidth"),
						(r.DECIMAL_ZERO = "decimalZero"),
						(r.BULLET = "bullet"),
						(r.GANADA = "ganada"),
						(r.CHOSUNG = "chosung"),
						(r.DECIMAL_ENCLOSED_FULL_STOP =
							"decimalEnclosedFullstop"),
						(r.DECIMAL_ENCLOSED_PAREN = "decimalEnclosedParen"),
						(r.DECIMAL_ENCLOSED_CIRCLE_CHINESE =
							"decimalEnclosedCircleChinese"),
						(r.IDEOGRAPH_ENCLOSED_CIRCLE =
							"ideographEnclosedCircle"),
						(r.IDEOGRAPH_TRADITIONAL = "ideographTraditional"),
						(r.IDEOGRAPH_ZODIAC = "ideographZodiac"),
						(r.IDEOGRAPH_ZODIAC_TRADITIONAL =
							"ideographZodiacTraditional"),
						(r.TAIWANESE_COUNTING = "taiwaneseCounting"),
						(r.IDEOGRAPH_LEGAL_TRADITIONAL =
							"ideographLegalTraditional"),
						(r.TAIWANESE_COUNTING_THOUSAND =
							"taiwaneseCountingThousand"),
						(r.TAIWANESE_DIGITAL = "taiwaneseDigital"),
						(r.CHINESE_COUNTING = "chineseCounting"),
						(r.CHINESE_LEGAL_SIMPLIFIED = "chineseLegalSimplified"),
						(r.CHINESE_COUNTING_TEN_THOUSAND =
							"chineseCountingThousand"),
						(r.KOREAN_DIGITAL = "koreanDigital"),
						(r.KOREAN_COUNTING = "koreanCounting"),
						(r.KOREAN_LEGAL = "koreanLegal"),
						(r.KOREAN_DIGITAL_2 = "koreanDigital2"),
						(r.VIETNAMESE_COUNTING = "vietnameseCounting"),
						(r.RUSSIAN_LOWER = "russianLower"),
						(r.RUSSIAN_UPPER = "russianUpper"),
						(r.NONE = "none"),
						(r.NUMBER_IN_DASH = "numberInDash"),
						(r.HEBREW_1 = "hebrew1"),
						(r.HEBREW_2 = "hebrew2"),
						(r.ARABIC_ALPHA = "arabicAlpha"),
						(r.ARABIC_ABJAD = "arabicAbjad"),
						(r.HINDI_VOWELS = "hindiVowels"),
						(r.HINDI_CONSONANTS = "hindiConsonants"),
						(r.HINDI_NUMBERS = "hindiNumbers"),
						(r.HINDI_COUNTING = "hindiCounting"),
						(r.THAI_LETTERS = "thaiLetters"),
						(r.THAI_NUMBERS = "thaiNumbers"),
						(r.THAI_COUNTING = "thaiCounting"),
						(r.BAHT_TEXT = "bahtText"),
						(r.DOLLAR_TEXT = "dollarText");
				},
				5321: (e, t) => {
					"use strict";
					var r;
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SpaceType = void 0),
						((r = t.SpaceType || (t.SpaceType = {})).DEFAULT =
							"default"),
						(r.PRESERVE = "preserve");
				},
				5452: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DocumentDefaults = void 0);
					const n = r(2451),
						o = r(7697),
						i = r(5011);
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:docDefaults"),
								(this.runPropertiesDefaults =
									new i.RunPropertiesDefaults(e.run)),
								(this.paragraphPropertiesDefaults =
									new o.ParagraphPropertiesDefaults(
										e.paragraph
									)),
								this.root.push(this.runPropertiesDefaults),
								this.root.push(
									this.paragraphPropertiesDefaults
								);
						}
					}
					t.DocumentDefaults = s;
				},
				6441: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(7697), t),
						o(r(5011), t),
						o(r(5452), t);
				},
				7697: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ParagraphPropertiesDefaults = void 0);
					const n = r(3434),
						o = r(2451);
					class i extends o.XmlComponent {
						constructor(e) {
							super("w:pPrDefault"),
								this.root.push(new n.ParagraphProperties(e));
						}
					}
					t.ParagraphPropertiesDefaults = i;
				},
				5011: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.RunPropertiesDefaults = void 0);
					const n = r(1972),
						o = r(2451);
					class i extends o.XmlComponent {
						constructor(e) {
							super("w:rPrDefault"),
								this.root.push(new n.RunProperties(e));
						}
					}
					t.RunPropertiesDefaults = i;
				},
				5258: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ExternalStylesFactory = void 0);
					const n = r(2451),
						o = r(7888),
						i = r(5703);
					t.ExternalStylesFactory = class {
						newInstance(e) {
							const t = (0, o.xml2js)(e, { compact: !1 });
							let r;
							for (const e of t.elements || [])
								"w:styles" === e.name && (r = e);
							if (void 0 === r)
								throw new Error("can not find styles element");
							const s = r.elements || [];
							return new i.Styles({
								initialStyles:
									new n.ImportedRootElementAttributes(
										r.attributes
									),
								importedStyles: s.map((e) =>
									(0, n.convertToXmlComponent)(e)
								),
							});
						}
					};
				},
				2202: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DefaultStylesFactory = void 0);
					const n = r(7627),
						o = r(6441),
						i = r(6631);
					t.DefaultStylesFactory = class {
						newInstance(e = {}) {
							var t;
							return {
								initialStyles: new n.DocumentAttributes({
									mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
									r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
									w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
									w14: "http://schemas.microsoft.com/office/word/2010/wordml",
									w15: "http://schemas.microsoft.com/office/word/2012/wordml",
									Ignorable: "w14 w15",
								}),
								importedStyles: [
									new o.DocumentDefaults(
										null !== (t = e.document) &&
										void 0 !== t
											? t
											: {}
									),
									new i.TitleStyle(
										Object.assign(
											{ run: { size: 56 } },
											e.title
										)
									),
									new i.Heading1Style(
										Object.assign(
											{
												run: {
													color: "2E74B5",
													size: 32,
												},
											},
											e.heading1
										)
									),
									new i.Heading2Style(
										Object.assign(
											{
												run: {
													color: "2E74B5",
													size: 26,
												},
											},
											e.heading2
										)
									),
									new i.Heading3Style(
										Object.assign(
											{
												run: {
													color: "1F4D78",
													size: 24,
												},
											},
											e.heading3
										)
									),
									new i.Heading4Style(
										Object.assign(
											{
												run: {
													color: "2E74B5",
													italics: !0,
												},
											},
											e.heading4
										)
									),
									new i.Heading5Style(
										Object.assign(
											{ run: { color: "2E74B5" } },
											e.heading5
										)
									),
									new i.Heading6Style(
										Object.assign(
											{ run: { color: "1F4D78" } },
											e.heading6
										)
									),
									new i.StrongStyle(
										Object.assign(
											{ run: { bold: !0 } },
											e.strong
										)
									),
									new i.ListParagraph(e.listParagraph || {}),
									new i.HyperlinkStyle(e.hyperlink || {}),
									new i.FootnoteReferenceStyle(
										e.footnoteReference || {}
									),
									new i.FootnoteText(e.footnoteText || {}),
									new i.FootnoteTextChar(
										e.footnoteTextChar || {}
									),
								],
							};
						}
					};
				},
				5703: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(6785), t),
						o(r(8056), t),
						o(r(4232), t),
						o(r(6441), t);
				},
				8056: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.StyleForCharacter = void 0);
					const n = r(1972),
						o = r(3176);
					class i extends o.Style {
						constructor(e) {
							super(
								{ type: "character", styleId: e.id },
								Object.assign(
									{ uiPriority: 99, unhideWhenUsed: !0 },
									e
								)
							),
								(this.runProperties = new n.RunProperties(
									e.run
								)),
								this.root.push(this.runProperties);
						}
					}
					t.StyleForCharacter = i;
				},
				2063: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.RsId =
							t.TableProperties =
							t.UiPriority =
							t.Name =
								void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { val: "w:val" });
						}
					}
					class s extends o.XmlComponent {
						constructor(e) {
							super("w:name"), this.root.push(new i({ val: e }));
						}
					}
					t.Name = s;
					class a extends o.XmlComponent {
						constructor(e) {
							super("w:uiPriority"),
								this.root.push(
									new i({ val: (0, n.decimalNumber)(e) })
								);
						}
					}
					t.UiPriority = a;
					class u extends o.XmlComponent {}
					t.TableProperties = u;
					class c extends o.XmlComponent {}
					t.RsId = c;
				},
				1401: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.HyperlinkStyle =
							t.FootnoteTextChar =
							t.FootnoteReferenceStyle =
							t.FootnoteText =
							t.ListParagraph =
							t.StrongStyle =
							t.Heading6Style =
							t.Heading5Style =
							t.Heading4Style =
							t.Heading3Style =
							t.Heading2Style =
							t.Heading1Style =
							t.TitleStyle =
							t.HeadingStyle =
								void 0);
					const n = r(104),
						o = r(4827),
						i = r(8056),
						s = r(4232);
					class a extends s.StyleForParagraph {
						constructor(e) {
							super(
								Object.assign(Object.assign({}, e), {
									basedOn: "Normal",
									next: "Normal",
									quickFormat: !0,
								})
							);
						}
					}
					(t.HeadingStyle = a),
						(t.TitleStyle = class extends a {
							constructor(e) {
								super(
									Object.assign(Object.assign({}, e), {
										id: "Title",
										name: "Title",
									})
								);
							}
						}),
						(t.Heading1Style = class extends a {
							constructor(e) {
								super(
									Object.assign(Object.assign({}, e), {
										id: "Heading1",
										name: "Heading 1",
									})
								);
							}
						}),
						(t.Heading2Style = class extends a {
							constructor(e) {
								super(
									Object.assign(Object.assign({}, e), {
										id: "Heading2",
										name: "Heading 2",
									})
								);
							}
						}),
						(t.Heading3Style = class extends a {
							constructor(e) {
								super(
									Object.assign(Object.assign({}, e), {
										id: "Heading3",
										name: "Heading 3",
									})
								);
							}
						}),
						(t.Heading4Style = class extends a {
							constructor(e) {
								super(
									Object.assign(Object.assign({}, e), {
										id: "Heading4",
										name: "Heading 4",
									})
								);
							}
						}),
						(t.Heading5Style = class extends a {
							constructor(e) {
								super(
									Object.assign(Object.assign({}, e), {
										id: "Heading5",
										name: "Heading 5",
									})
								);
							}
						}),
						(t.Heading6Style = class extends a {
							constructor(e) {
								super(
									Object.assign(Object.assign({}, e), {
										id: "Heading6",
										name: "Heading 6",
									})
								);
							}
						}),
						(t.StrongStyle = class extends a {
							constructor(e) {
								super(
									Object.assign(Object.assign({}, e), {
										id: "Strong",
										name: "Strong",
									})
								);
							}
						});
					class u extends s.StyleForParagraph {
						constructor(e) {
							super(
								Object.assign(Object.assign({}, e), {
									id: "ListParagraph",
									name: "List Paragraph",
									basedOn: "Normal",
									quickFormat: !0,
								})
							);
						}
					}
					t.ListParagraph = u;
					class c extends s.StyleForParagraph {
						constructor(e) {
							super(
								Object.assign(Object.assign({}, e), {
									id: "FootnoteText",
									name: "footnote text",
									link: "FootnoteTextChar",
									basedOn: "Normal",
									uiPriority: 99,
									semiHidden: !0,
									unhideWhenUsed: !0,
									paragraph: {
										spacing: {
											after: 0,
											line: 240,
											lineRule: o.LineRuleType.AUTO,
										},
									},
									run: { size: 20 },
								})
							);
						}
					}
					t.FootnoteText = c;
					class l extends i.StyleForCharacter {
						constructor(e) {
							super(
								Object.assign(Object.assign({}, e), {
									id: "FootnoteReference",
									name: "footnote reference",
									basedOn: "DefaultParagraphFont",
									semiHidden: !0,
									run: { superScript: !0 },
								})
							);
						}
					}
					t.FootnoteReferenceStyle = l;
					class p extends i.StyleForCharacter {
						constructor(e) {
							super(
								Object.assign(Object.assign({}, e), {
									id: "FootnoteTextChar",
									name: "Footnote Text Char",
									basedOn: "DefaultParagraphFont",
									link: "FootnoteText",
									semiHidden: !0,
									run: { size: 20 },
								})
							);
						}
					}
					t.FootnoteTextChar = p;
					class h extends i.StyleForCharacter {
						constructor(e) {
							super(
								Object.assign(Object.assign({}, e), {
									id: "Hyperlink",
									name: "Hyperlink",
									basedOn: "DefaultParagraphFont",
									run: {
										color: "0563C1",
										underline: {
											type: n.UnderlineType.SINGLE,
										},
									},
								})
							);
						}
					}
					t.HyperlinkStyle = h;
				},
				6631: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(3176), t),
						o(r(4232), t),
						o(r(8056), t),
						o(r(1401), t);
				},
				4232: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.StyleForParagraph = void 0);
					const n = r(4827),
						o = r(1972),
						i = r(3176);
					class s extends i.Style {
						constructor(e) {
							super({ type: "paragraph", styleId: e.id }, e),
								(this.paragraphProperties =
									new n.ParagraphProperties(e.paragraph)),
								(this.runProperties = new o.RunProperties(
									e.run
								)),
								this.root.push(this.paragraphProperties),
								this.root.push(this.runProperties);
						}
					}
					t.StyleForParagraph = s;
				},
				3176: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Style = void 0);
					const n = r(2451),
						o = r(2063);
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									type: "w:type",
									styleId: "w:styleId",
									default: "w:default",
									customStyle: "w:customStyle",
								});
						}
					}
					class s extends n.XmlComponent {
						constructor(e, t) {
							super("w:style"),
								this.root.push(new i(e)),
								t.name && this.root.push(new o.Name(t.name)),
								t.basedOn &&
									this.root.push(
										new n.StringValueElement(
											"w:basedOn",
											t.basedOn
										)
									),
								t.next &&
									this.root.push(
										new n.StringValueElement(
											"w:next",
											t.next
										)
									),
								t.link &&
									this.root.push(
										new n.StringValueElement(
											"w:link",
											t.link
										)
									),
								void 0 !== t.uiPriority &&
									this.root.push(
										new o.UiPriority(t.uiPriority)
									),
								void 0 !== t.semiHidden &&
									this.root.push(
										new n.OnOffElement(
											"w:semiHidden",
											t.semiHidden
										)
									),
								void 0 !== t.unhideWhenUsed &&
									this.root.push(
										new n.OnOffElement(
											"w:unhideWhenUsed",
											t.unhideWhenUsed
										)
									),
								void 0 !== t.quickFormat &&
									this.root.push(
										new n.OnOffElement(
											"w:qFormat",
											t.quickFormat
										)
									);
						}
					}
					t.Style = s;
				},
				6785: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Styles = void 0);
					const n = r(2451),
						o = r(6631);
					class i extends n.XmlComponent {
						constructor(e) {
							if (
								(super("w:styles"),
								e.initialStyles &&
									this.root.push(e.initialStyles),
								e.importedStyles)
							)
								for (const t of e.importedStyles)
									this.root.push(t);
							if (e.paragraphStyles)
								for (const t of e.paragraphStyles)
									this.root.push(new o.StyleForParagraph(t));
							if (e.characterStyles)
								for (const t of e.characterStyles)
									this.root.push(new o.StyleForCharacter(t));
						}
					}
					t.Styles = i;
				},
				7823: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Alias = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { alias: "w:val" });
						}
					}
					class i extends n.XmlComponent {
						constructor(e) {
							super("w:alias"),
								this.root.push(new o({ alias: e }));
						}
					}
					t.Alias = i;
				},
				1233: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.FieldInstruction = void 0);
					const n = r(5321),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { space: "xml:space" });
						}
					}
					class s extends o.XmlComponent {
						constructor(e = {}) {
							super("w:instrText"),
								(this.properties = e),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								);
							let t = "TOC";
							this.properties.captionLabel &&
								(t = `${t} \\a "${this.properties.captionLabel}"`),
								this.properties.entriesFromBookmark &&
									(t = `${t} \\b "${this.properties.entriesFromBookmark}"`),
								this.properties.captionLabelIncludingNumbers &&
									(t = `${t} \\c "${this.properties.captionLabelIncludingNumbers}"`),
								this.properties
									.sequenceAndPageNumbersSeparator &&
									(t = `${t} \\d "${this.properties.sequenceAndPageNumbersSeparator}"`),
								this.properties.tcFieldIdentifier &&
									(t = `${t} \\f "${this.properties.tcFieldIdentifier}"`),
								this.properties.hyperlink && (t = `${t} \\h`),
								this.properties.tcFieldLevelRange &&
									(t = `${t} \\l "${this.properties.tcFieldLevelRange}"`),
								this.properties.pageNumbersEntryLevelsRange &&
									(t = `${t} \\n "${this.properties.pageNumbersEntryLevelsRange}"`),
								this.properties.headingStyleRange &&
									(t = `${t} \\o "${this.properties.headingStyleRange}"`),
								this.properties.entryAndPageNumberSeparator &&
									(t = `${t} \\p "${this.properties.entryAndPageNumberSeparator}"`),
								this.properties.seqFieldIdentifierForPrefix &&
									(t = `${t} \\s "${this.properties.seqFieldIdentifierForPrefix}"`),
								this.properties.stylesWithLevels &&
									this.properties.stylesWithLevels.length &&
									(t = `${t} \\t "${this.properties.stylesWithLevels
										.map((e) => `${e.styleName},${e.level}`)
										.join(",")}"`),
								this.properties
									.useAppliedParagraphOutlineLevel &&
									(t = `${t} \\u`),
								this.properties.preserveTabInEntries &&
									(t = `${t} \\w`),
								this.properties.preserveNewLineInEntries &&
									(t = `${t} \\x`),
								this.properties
									.hideTabAndPageNumbersInWebView &&
									(t = `${t} \\z`),
								this.root.push(t);
						}
					}
					t.FieldInstruction = s;
				},
				5205: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(5080), t),
						o(r(1072), t);
				},
				1844: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.StructuredDocumentTagContent = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor() {
							super("w:sdtContent");
						}
					}
					t.StructuredDocumentTagContent = o;
				},
				6191: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.StructuredDocumentTagProperties = void 0);
					const n = r(2451),
						o = r(7823);
					class i extends n.XmlComponent {
						constructor(e) {
							super("w:sdtPr"), this.root.push(new o.Alias(e));
						}
					}
					t.StructuredDocumentTagProperties = i;
				},
				1072: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.StyleLevel = void 0),
						(t.StyleLevel = class {
							constructor(e, t) {
								(this.styleName = e), (this.level = t);
							}
						});
				},
				5080: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableOfContents = void 0);
					const n = r(4827),
						o = r(6902),
						i = r(3178),
						s = r(2451),
						a = r(1233),
						u = r(1844),
						c = r(6191);
					class l extends s.XmlComponent {
						constructor(e = "Table of Contents", t) {
							super("w:sdt"),
								this.root.push(
									new c.StructuredDocumentTagProperties(e)
								);
							const r = new u.StructuredDocumentTagContent(),
								s = new n.Paragraph({
									children: [
										new o.Run({
											children: [
												new i.Begin(!0),
												new a.FieldInstruction(t),
												new i.Separate(),
											],
										}),
									],
								});
							r.addChildElement(s);
							const l = new n.Paragraph({
								children: [
									new o.Run({ children: [new i.End()] }),
								],
							});
							r.addChildElement(l), this.root.push(r);
						}
					}
					t.TableOfContents = l;
				},
				5541: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.GridCol = t.TableGrid = void 0);
					const n = r(459),
						o = r(2451);
					class i extends o.XmlComponent {
						constructor(e) {
							super("w:tblGrid");
							for (const t of e) this.root.push(new a(t));
						}
					}
					t.TableGrid = i;
					class s extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments), (this.xmlKeys = { w: "w:w" });
						}
					}
					class a extends o.XmlComponent {
						constructor(e) {
							super("w:gridCol"),
								void 0 !== e &&
									this.root.push(
										new s({
											w: (0, n.twipsMeasureValue)(e),
										})
									);
						}
					}
					t.GridCol = a;
				},
				5: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(4113), t),
						o(r(204), t),
						o(r(704), t),
						o(r(9003), t),
						o(r(5295), t);
				},
				204: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(7203), t),
						o(r(3282), t);
				},
				3282: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TDirection =
							t.TextDirection =
							t.VerticalMerge =
							t.VerticalMergeType =
							t.GridSpan =
							t.TableCellBorders =
								void 0);
					const n = r(5328),
						o = r(459),
						i = r(2451);
					class s extends i.IgnoreIfEmptyXmlComponent {
						constructor(e) {
							super("w:tcBorders"),
								e.top &&
									this.root.push(
										new n.BorderElement("w:top", e.top)
									),
								e.start &&
									this.root.push(
										new n.BorderElement("w:start", e.start)
									),
								e.left &&
									this.root.push(
										new n.BorderElement("w:left", e.left)
									),
								e.bottom &&
									this.root.push(
										new n.BorderElement(
											"w:bottom",
											e.bottom
										)
									),
								e.end &&
									this.root.push(
										new n.BorderElement("w:end", e.end)
									),
								e.right &&
									this.root.push(
										new n.BorderElement("w:right", e.right)
									);
						}
					}
					t.TableCellBorders = s;
					class a extends i.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { val: "w:val" });
						}
					}
					class u extends i.XmlComponent {
						constructor(e) {
							super("w:gridSpan"),
								this.root.push(
									new a({ val: (0, o.decimalNumber)(e) })
								);
						}
					}
					var c, l;
					(t.GridSpan = u),
						((c =
							t.VerticalMergeType ||
							(t.VerticalMergeType = {})).CONTINUE = "continue"),
						(c.RESTART = "restart");
					class p extends i.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { val: "w:val" });
						}
					}
					class h extends i.XmlComponent {
						constructor(e) {
							super("w:vMerge"),
								this.root.push(new p({ val: e }));
						}
					}
					(t.VerticalMerge = h),
						((l =
							t.TextDirection ||
							(t.TextDirection =
								{})).BOTTOM_TO_TOP_LEFT_TO_RIGHT = "btLr"),
						(l.LEFT_TO_RIGHT_TOP_TO_BOTTOM = "lrTb"),
						(l.TOP_TO_BOTTOM_RIGHT_TO_LEFT = "tbRl");
					class d extends i.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { val: "w:val" });
						}
					}
					class f extends i.XmlComponent {
						constructor(e) {
							super("w:textDirection"),
								this.root.push(new d({ val: e }));
						}
					}
					t.TDirection = f;
				},
				5957: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableCellProperties = void 0);
					const n = r(4087),
						o = r(2451),
						i = r(8613),
						s = r(3148),
						a = r(5295),
						u = r(3282);
					class c extends o.IgnoreIfEmptyXmlComponent {
						constructor(e) {
							super("w:tcPr"),
								e.width &&
									this.root.push(
										new a.TableWidthElement(
											"w:tcW",
											e.width
										)
									),
								e.columnSpan &&
									this.root.push(
										new u.GridSpan(e.columnSpan)
									),
								e.verticalMerge
									? this.root.push(
											new u.VerticalMerge(e.verticalMerge)
									  )
									: e.rowSpan &&
									  e.rowSpan > 1 &&
									  this.root.push(
											new u.VerticalMerge(
												u.VerticalMergeType.RESTART
											)
									  ),
								e.borders &&
									this.root.push(
										new u.TableCellBorders(e.borders)
									),
								e.shading &&
									this.root.push(new i.Shading(e.shading)),
								e.margins &&
									this.root.push(
										new s.TableCellMargin(
											s.TableCellMarginElementType.TABLE_CELL,
											e.margins
										)
									),
								e.textDirection &&
									this.root.push(
										new u.TDirection(e.textDirection)
									),
								e.verticalAlign &&
									this.root.push(
										new n.VerticalAlignElement(
											e.verticalAlign
										)
									);
						}
					}
					t.TableCellProperties = c;
				},
				7203: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableCell = void 0);
					const n = r(4827),
						o = r(2451),
						i = r(5957);
					class s extends o.XmlComponent {
						constructor(e) {
							super("w:tc"),
								(this.options = e),
								this.root.push(new i.TableCellProperties(e));
							for (const t of e.children) this.root.push(t);
						}
						prepForXml(e) {
							return (
								this.root[this.root.length - 1] instanceof
									n.Paragraph ||
									this.root.push(new n.Paragraph({})),
								super.prepForXml(e)
							);
						}
					}
					t.TableCell = s;
				},
				704: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(816), t),
						o(r(2687), t),
						o(r(1935), t),
						o(r(3043), t),
						o(r(4767), t);
				},
				3043: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableBorders = void 0);
					const n = r(5328),
						o = r(2451),
						i = {
							style: n.BorderStyle.NONE,
							size: 0,
							color: "auto",
						},
						s = {
							style: n.BorderStyle.SINGLE,
							size: 4,
							color: "auto",
						};
					class a extends o.XmlComponent {
						constructor(e) {
							super("w:tblBorders"),
								e.top
									? this.root.push(
											new n.BorderElement("w:top", e.top)
									  )
									: this.root.push(
											new n.BorderElement("w:top", s)
									  ),
								e.left
									? this.root.push(
											new n.BorderElement(
												"w:left",
												e.left
											)
									  )
									: this.root.push(
											new n.BorderElement("w:left", s)
									  ),
								e.bottom
									? this.root.push(
											new n.BorderElement(
												"w:bottom",
												e.bottom
											)
									  )
									: this.root.push(
											new n.BorderElement("w:bottom", s)
									  ),
								e.right
									? this.root.push(
											new n.BorderElement(
												"w:right",
												e.right
											)
									  )
									: this.root.push(
											new n.BorderElement("w:right", s)
									  ),
								e.insideHorizontal
									? this.root.push(
											new n.BorderElement(
												"w:insideH",
												e.insideHorizontal
											)
									  )
									: this.root.push(
											new n.BorderElement("w:insideH", s)
									  ),
								e.insideVertical
									? this.root.push(
											new n.BorderElement(
												"w:insideV",
												e.insideVertical
											)
									  )
									: this.root.push(
											new n.BorderElement("w:insideV", s)
									  );
						}
					}
					(t.TableBorders = a),
						(a.NONE = {
							top: i,
							bottom: i,
							left: i,
							right: i,
							insideHorizontal: i,
							insideVertical: i,
						});
				},
				3148: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableCellMargin = t.TableCellMarginElementType =
							void 0);
					const n = r(2451),
						o = r(5295);
					var i;
					((i =
						t.TableCellMarginElementType ||
						(t.TableCellMarginElementType = {})).TABLE =
						"w:tblCellMar"),
						(i.TABLE_CELL = "w:tcMar");
					class s extends n.IgnoreIfEmptyXmlComponent {
						constructor(
							e,
							{
								marginUnitType: t = o.WidthType.DXA,
								top: r,
								left: n,
								bottom: i,
								right: s,
							}
						) {
							super(e),
								void 0 !== r &&
									this.root.push(
										new o.TableWidthElement("w:top", {
											type: t,
											size: r,
										})
									),
								void 0 !== n &&
									this.root.push(
										new o.TableWidthElement("w:left", {
											type: t,
											size: n,
										})
									),
								void 0 !== i &&
									this.root.push(
										new o.TableWidthElement("w:bottom", {
											type: t,
											size: i,
										})
									),
								void 0 !== s &&
									this.root.push(
										new o.TableWidthElement("w:right", {
											type: t,
											size: s,
										})
									);
						}
					}
					t.TableCellMargin = s;
				},
				2687: function (e, t, r) {
					"use strict";
					var n =
						(this && this.__rest) ||
						function (e, t) {
							var r = {};
							for (var n in e)
								Object.prototype.hasOwnProperty.call(e, n) &&
									t.indexOf(n) < 0 &&
									(r[n] = e[n]);
							if (
								null != e &&
								"function" ==
									typeof Object.getOwnPropertySymbols
							) {
								var o = 0;
								for (
									n = Object.getOwnPropertySymbols(e);
									o < n.length;
									o++
								)
									t.indexOf(n[o]) < 0 &&
										Object.prototype.propertyIsEnumerable.call(
											e,
											n[o]
										) &&
										(r[n[o]] = e[n[o]]);
							}
							return r;
						};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableFloatProperties =
							t.TableFloatOptionsAttributes =
							t.RelativeVerticalPosition =
							t.RelativeHorizontalPosition =
							t.TableAnchorType =
								void 0);
					const o = r(459),
						i = r(2451),
						s = r(4767);
					var a, u, c;
					((c =
						t.TableAnchorType || (t.TableAnchorType = {})).MARGIN =
						"margin"),
						(c.PAGE = "page"),
						(c.TEXT = "text"),
						((u =
							t.RelativeHorizontalPosition ||
							(t.RelativeHorizontalPosition = {})).CENTER =
							"center"),
						(u.INSIDE = "inside"),
						(u.LEFT = "left"),
						(u.OUTSIDE = "outside"),
						(u.RIGHT = "right"),
						((a =
							t.RelativeVerticalPosition ||
							(t.RelativeVerticalPosition = {})).CENTER =
							"center"),
						(a.INSIDE = "inside"),
						(a.BOTTOM = "bottom"),
						(a.OUTSIDE = "outside"),
						(a.INLINE = "inline"),
						(a.TOP = "top");
					class l extends i.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									horizontalAnchor: "w:horzAnchor",
									verticalAnchor: "w:vertAnchor",
									absoluteHorizontalPosition: "w:tblpX",
									relativeHorizontalPosition: "w:tblpXSpec",
									absoluteVerticalPosition: "w:tblpY",
									relativeVerticalPosition: "w:tblpYSpec",
									bottomFromText: "w:bottomFromText",
									topFromText: "w:topFromText",
									leftFromText: "w:leftFromText",
									rightFromText: "w:rightFromText",
								});
						}
					}
					t.TableFloatOptionsAttributes = l;
					class p extends i.XmlComponent {
						constructor(e) {
							var {
									leftFromText: t,
									rightFromText: r,
									topFromText: i,
									bottomFromText: a,
									absoluteHorizontalPosition: u,
									absoluteVerticalPosition: c,
								} = e,
								p = n(e, [
									"leftFromText",
									"rightFromText",
									"topFromText",
									"bottomFromText",
									"absoluteHorizontalPosition",
									"absoluteVerticalPosition",
								]);
							super("w:tblpPr"),
								this.root.push(
									new l(
										Object.assign(
											{
												leftFromText:
													void 0 === t
														? void 0
														: (0,
														  o.twipsMeasureValue)(
																t
														  ),
												rightFromText:
													void 0 === r
														? void 0
														: (0,
														  o.twipsMeasureValue)(
																r
														  ),
												topFromText:
													void 0 === i
														? void 0
														: (0,
														  o.twipsMeasureValue)(
																i
														  ),
												bottomFromText:
													void 0 === a
														? void 0
														: (0,
														  o.twipsMeasureValue)(
																a
														  ),
												absoluteHorizontalPosition:
													void 0 === u
														? void 0
														: (0,
														  o.signedTwipsMeasureValue)(
																u
														  ),
												absoluteVerticalPosition:
													void 0 === c
														? void 0
														: (0,
														  o.signedTwipsMeasureValue)(
																c
														  ),
											},
											p
										)
									)
								),
								p.overlap &&
									this.root.push(
										new s.TableOverlap(p.overlap)
									);
						}
					}
					t.TableFloatProperties = p;
				},
				1935: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableLayout = t.TableLayoutType = void 0);
					const n = r(2451);
					var o;
					((o =
						t.TableLayoutType || (t.TableLayoutType = {})).AUTOFIT =
						"autofit"),
						(o.FIXED = "fixed");
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { type: "w:type" });
						}
					}
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:tblLayout"),
								this.root.push(new i({ type: e }));
						}
					}
					t.TableLayout = s;
				},
				4767: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableOverlap = t.OverlapType = void 0);
					const n = r(2451);
					var o;
					((o = t.OverlapType || (t.OverlapType = {})).NEVER =
						"never"),
						(o.OVERLAP = "overlap");
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { val: "w:val" });
						}
					}
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:tblOverlap"),
								this.root.push(new i({ val: e }));
						}
					}
					t.TableOverlap = s;
				},
				816: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableProperties = void 0);
					const n = r(2451),
						o = r(4827),
						i = r(8613),
						s = r(5295),
						a = r(3043),
						u = r(3148),
						c = r(2687),
						l = r(1935);
					class p extends n.IgnoreIfEmptyXmlComponent {
						constructor(e) {
							super("w:tblPr"),
								e.style &&
									this.root.push(
										new n.StringValueElement(
											"w:tblStyle",
											e.style
										)
									),
								e.float &&
									this.root.push(
										new c.TableFloatProperties(e.float)
									),
								void 0 !== e.visuallyRightToLeft &&
									this.root.push(
										new n.OnOffElement(
											"w:bidiVisual",
											e.visuallyRightToLeft
										)
									),
								e.width &&
									this.root.push(
										new s.TableWidthElement(
											"w:tblW",
											e.width
										)
									),
								e.alignment &&
									this.root.push(
										new o.Alignment(e.alignment)
									),
								e.indent &&
									this.root.push(
										new s.TableWidthElement(
											"w:tblInd",
											e.indent
										)
									),
								e.borders &&
									this.root.push(
										new a.TableBorders(e.borders)
									),
								e.shading &&
									this.root.push(new i.Shading(e.shading)),
								e.layout &&
									this.root.push(new l.TableLayout(e.layout)),
								e.cellMargin &&
									this.root.push(
										new u.TableCellMargin(
											u.TableCellMarginElementType.TABLE,
											e.cellMargin
										)
									);
						}
					}
					t.TableProperties = p;
				},
				9003: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(5348), t),
						o(r(5367), t),
						o(r(6408), t);
				},
				6408: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableRowHeight =
							t.TableRowHeightAttributes =
							t.HeightRule =
								void 0);
					const n = r(459),
						o = r(2451);
					var i;
					((i = t.HeightRule || (t.HeightRule = {})).AUTO = "auto"),
						(i.ATLEAST = "atLeast"),
						(i.EXACT = "exact");
					class s extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									value: "w:val",
									rule: "w:hRule",
								});
						}
					}
					t.TableRowHeightAttributes = s;
					class a extends o.XmlComponent {
						constructor(e, t) {
							super("w:trHeight"),
								this.root.push(
									new s({
										value: (0, n.twipsMeasureValue)(e),
										rule: t,
									})
								);
						}
					}
					t.TableRowHeight = a;
				},
				5367: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableRowProperties = void 0);
					const n = r(2451),
						o = r(6408);
					class i extends n.IgnoreIfEmptyXmlComponent {
						constructor(e) {
							super("w:trPr"),
								void 0 !== e.cantSplit &&
									this.root.push(
										new n.OnOffElement(
											"w:cantSplit",
											e.cantSplit
										)
									),
								void 0 !== e.tableHeader &&
									this.root.push(
										new n.OnOffElement(
											"w:tblHeader",
											e.tableHeader
										)
									),
								e.height &&
									this.root.push(
										new o.TableRowHeight(
											e.height.value,
											e.height.rule
										)
									);
						}
					}
					t.TableRowProperties = i;
				},
				5348: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableRow = void 0);
					const n = r(2451),
						o = r(204),
						i = r(5367);
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:tr"),
								(this.options = e),
								this.root.push(new i.TableRowProperties(e));
							for (const t of e.children) this.root.push(t);
						}
						get CellCount() {
							return this.options.children.length;
						}
						get cells() {
							return this.root.filter(
								(e) => e instanceof o.TableCell
							);
						}
						addCellToIndex(e, t) {
							this.root.splice(t + 1, 0, e);
						}
						addCellToColumnIndex(e, t) {
							const r = this.columnIndexToRootIndex(t, !0);
							this.addCellToIndex(e, r - 1);
						}
						rootIndexToColumnIndex(e) {
							if (e < 1 || e >= this.root.length)
								throw new Error(
									"cell 'rootIndex' should between 1 to " +
										(this.root.length - 1)
								);
							let t = 0;
							for (let r = 1; r < e; r++)
								t += this.root[r].options.columnSpan || 1;
							return t;
						}
						columnIndexToRootIndex(e, t = !1) {
							if (e < 0)
								throw new Error(
									"cell 'columnIndex' should not less than zero"
								);
							let r = 0,
								n = 1;
							for (; r <= e; ) {
								if (n >= this.root.length) {
									if (t) return this.root.length;
									throw new Error(
										"cell 'columnIndex' should not great than " +
											(r - 1)
									);
								}
								const e = this.root[n];
								(n += 1),
									(r += (e && e.options.columnSpan) || 1);
							}
							return n - 1;
						}
					}
					t.TableRow = s;
				},
				5295: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.TableWidthElement = t.WidthType = void 0);
					const n = r(459),
						o = r(2451);
					var i;
					!(function (e) {
						(e.AUTO = "auto"),
							(e.DXA = "dxa"),
							(e.NIL = "nil"),
							(e.PERCENTAGE = "pct");
					})((i = t.WidthType || (t.WidthType = {})));
					class s extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									type: "w:type",
									size: "w:w",
								});
						}
					}
					class a extends o.XmlComponent {
						constructor(e, { type: t = i.AUTO, size: r }) {
							super(e);
							let o = r;
							t === i.PERCENTAGE &&
								"number" == typeof r &&
								(o = `${r}%`),
								this.root.push(
									new s({
										type: t,
										size: (0, n.measurementOrPercentValue)(
											o
										),
									})
								);
						}
					}
					t.TableWidthElement = a;
				},
				4113: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Table = void 0);
					const n = r(2451),
						o = r(5541),
						i = r(204),
						s = r(704);
					class a extends n.XmlComponent {
						constructor({
							rows: e,
							width: t,
							columnWidths: r = Array(
								Math.max(...e.map((e) => e.CellCount))
							).fill(100),
							margins: n,
							indent: a,
							float: u,
							layout: c,
							style: l,
							borders: p,
							alignment: h,
							visuallyRightToLeft: d,
						}) {
							super("w:tbl"),
								this.root.push(
									new s.TableProperties({
										borders: null != p ? p : {},
										width: null != t ? t : { size: 100 },
										indent: a,
										float: u,
										layout: c,
										style: l,
										alignment: h,
										cellMargin: n,
										visuallyRightToLeft: d,
									})
								),
								this.root.push(new o.TableGrid(r));
							for (const t of e) this.root.push(t);
							e.forEach((t, r) => {
								if (r === e.length - 1) return;
								let n = 0;
								t.cells.forEach((t) => {
									if (
										t.options.rowSpan &&
										t.options.rowSpan > 1
									) {
										const o = new i.TableCell({
											rowSpan: t.options.rowSpan - 1,
											columnSpan: t.options.columnSpan,
											borders: t.options.borders,
											children: [],
											verticalMerge:
												i.VerticalMergeType.CONTINUE,
										});
										e[r + 1].addCellToColumnIndex(o, n);
									}
									n += t.options.columnSpan || 1;
								});
							});
						}
					}
					t.Table = a;
				},
				699: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(3841), t),
						o(r(2415), t);
				},
				9357: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DeletedNumberOfPagesSection =
							t.DeletedNumberOfPages =
							t.DeletedPage =
								void 0);
					const n = r(5321),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { space: "xml:space" });
						}
					}
					class s extends o.XmlComponent {
						constructor() {
							super("w:delInstrText"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								),
								this.root.push("PAGE");
						}
					}
					t.DeletedPage = s;
					class a extends o.XmlComponent {
						constructor() {
							super("w:delInstrText"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								),
								this.root.push("NUMPAGES");
						}
					}
					t.DeletedNumberOfPages = a;
					class u extends o.XmlComponent {
						constructor() {
							super("w:delInstrText"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								),
								this.root.push("SECTIONPAGES");
						}
					}
					t.DeletedNumberOfPagesSection = u;
				},
				2415: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DeletedTextRun = void 0);
					const n = r(2451),
						o = r(7559),
						i = r(6724),
						s = r(3178),
						a = r(2076),
						u = r(7044),
						c = r(9357),
						l = r(3849);
					class p extends n.XmlComponent {
						constructor(e) {
							super("w:del"),
								this.root.push(
									new u.ChangeAttributes({
										id: e.id,
										author: e.author,
										date: e.date,
									})
								),
								(this.deletedTextRunWrapper = new h(e)),
								this.addChildElement(
									this.deletedTextRunWrapper
								);
						}
					}
					t.DeletedTextRun = p;
					class h extends n.XmlComponent {
						constructor(e) {
							if (
								(super("w:r"),
								this.root.push(new o.RunProperties(e)),
								e.children)
							)
								for (const t of e.children)
									if ("string" != typeof t) this.root.push(t);
									else
										switch (t) {
											case a.PageNumber.CURRENT:
												this.root.push(new s.Begin()),
													this.root.push(
														new c.DeletedPage()
													),
													this.root.push(
														new s.Separate()
													),
													this.root.push(new s.End());
												break;
											case a.PageNumber.TOTAL_PAGES:
												this.root.push(new s.Begin()),
													this.root.push(
														new c.DeletedNumberOfPages()
													),
													this.root.push(
														new s.Separate()
													),
													this.root.push(new s.End());
												break;
											case a.PageNumber
												.TOTAL_PAGES_IN_SECTION:
												this.root.push(new s.Begin()),
													this.root.push(
														new c.DeletedNumberOfPagesSection()
													),
													this.root.push(
														new s.Separate()
													),
													this.root.push(new s.End());
												break;
											default:
												this.root.push(
													new l.DeletedText(t)
												);
										}
							else
								e.text &&
									this.root.push(new l.DeletedText(e.text));
							if (e.break)
								for (let t = 0; t < e.break; t++)
									this.root.splice(1, 0, new i.Break());
						}
					}
				},
				3849: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DeletedText = void 0);
					const n = r(5321),
						o = r(2451);
					class i extends o.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { space: "xml:space" });
						}
					}
					class s extends o.XmlComponent {
						constructor(e) {
							super("w:delText"),
								this.root.push(
									new i({ space: n.SpaceType.PRESERVE })
								),
								this.root.push(e);
						}
					}
					t.DeletedText = s;
				},
				3841: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.InsertedTextRun = void 0);
					const n = r(2451),
						o = r(7559),
						i = r(7044);
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:ins"),
								this.root.push(
									new i.ChangeAttributes({
										id: e.id,
										author: e.author,
										date: e.date,
									})
								),
								this.addChildElement(new o.TextRun(e));
						}
					}
					t.InsertedTextRun = s;
				},
				7044: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ChangeAttributes = void 0);
					const n = r(2451);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									id: "w:id",
									author: "w:author",
									date: "w:date",
								});
						}
					}
					t.ChangeAttributes = o;
				},
				459: (e, t) => {
					"use strict";
					function r(e) {
						if (isNaN(e))
							throw new Error(
								`Invalid value '${e}' specified. Must be an integer.`
							);
						return Math.floor(e);
					}
					function n(e) {
						const t = r(e);
						if (t < 0)
							throw new Error(
								`Invalid value '${e}' specified. Must be a positive integer.`
							);
						return t;
					}
					function o(e, t) {
						const r = 2 * t;
						if (e.length !== r || isNaN(Number("0x" + e)))
							throw new Error(
								`Invalid hex value '${e}'. Expected ${r} digit hex value`
							);
						return e;
					}
					function i(e) {
						const t = e.slice(-2);
						if (!s.includes(t))
							throw new Error(
								`Invalid unit '${t}' specified. Valid units are ${s.join(
									", "
								)}`
							);
						const r = e.substring(0, e.length - 2);
						if (isNaN(Number(r)))
							throw new Error(
								`Invalid value '${r}' specified. Expected a valid number.`
							);
						return `${Number(r)}${t}`;
					}
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.dateTimeValue =
							t.pointMeasureValue =
							t.eighthPointMeasureValue =
							t.measurementOrPercentValue =
							t.percentageValue =
							t.twipsMeasureValue =
							t.signedHpsMeasureValue =
							t.hpsMeasureValue =
							t.signedTwipsMeasureValue =
							t.hexColorValue =
							t.positiveUniversalMeasureValue =
							t.universalMeasureValue =
							t.uCharHexNumber =
							t.shortHexNumber =
							t.longHexNumber =
							t.unsignedDecimalNumber =
							t.decimalNumber =
								void 0),
						(t.decimalNumber = r),
						(t.unsignedDecimalNumber = n),
						(t.longHexNumber = function (e) {
							return o(e, 4);
						}),
						(t.shortHexNumber = function (e) {
							return o(e, 2);
						}),
						(t.uCharHexNumber = function (e) {
							return o(e, 1);
						}),
						(t.universalMeasureValue = i);
					const s = ["mm", "cm", "in", "pt", "pc", "pi"];
					function a(e) {
						const t = i(e);
						if (parseFloat(t) < 0)
							throw new Error(
								`Invalid value '${t}' specified. Expected a positive number.`
							);
						return t;
					}
					function u(e) {
						if ("%" !== e.slice(-1))
							throw new Error(
								`Invalid value '${e}'. Expected percentage value (eg '55%')`
							);
						const t = e.substring(0, e.length - 1);
						if (isNaN(Number(t)))
							throw new Error(
								`Invalid value '${t}' specified. Expected a valid number.`
							);
						return `${Number(t)}%`;
					}
					(t.positiveUniversalMeasureValue = a),
						(t.hexColorValue = function (e) {
							return "auto" === e
								? e
								: o(
										"#" === e.charAt(0)
											? e.substring(1)
											: e,
										3
								  );
						}),
						(t.signedTwipsMeasureValue = function (e) {
							return "string" == typeof e ? i(e) : r(e);
						}),
						(t.hpsMeasureValue = function (e) {
							return "string" == typeof e ? a(e) : n(e);
						}),
						(t.signedHpsMeasureValue = function (e) {
							return "string" == typeof e ? i(e) : r(e);
						}),
						(t.twipsMeasureValue = function (e) {
							return "string" == typeof e ? a(e) : n(e);
						}),
						(t.percentageValue = u),
						(t.measurementOrPercentValue = function (e) {
							return "number" == typeof e
								? r(e)
								: "%" === e.slice(-1)
								? u(e)
								: i(e);
						}),
						(t.eighthPointMeasureValue = n),
						(t.pointMeasureValue = n),
						(t.dateTimeValue = function (e) {
							return e.toISOString();
						});
				},
				4087: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(1729), t);
				},
				1729: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.VerticalAlignElement =
							t.VerticalAlignAttributes =
							t.VerticalAlign =
								void 0);
					const n = r(2451);
					var o;
					((o = t.VerticalAlign || (t.VerticalAlign = {})).BOTH =
						"both"),
						(o.BOTTOM = "bottom"),
						(o.CENTER = "center"),
						(o.TOP = "top");
					class i extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = { verticalAlign: "w:val" });
						}
					}
					t.VerticalAlignAttributes = i;
					class s extends n.XmlComponent {
						constructor(e) {
							super("w:vAlign"),
								this.root.push(new i({ verticalAlign: e }));
						}
					}
					t.VerticalAlignElement = s;
				},
				7518: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Attributes = void 0);
					const n = r(2852);
					class o extends n.XmlAttributeComponent {
						constructor() {
							super(...arguments),
								(this.xmlKeys = {
									val: "w:val",
									color: "w:color",
									fill: "w:fill",
									space: "w:space",
									sz: "w:sz",
									type: "w:type",
									rsidR: "w:rsidR",
									rsidRPr: "w:rsidRPr",
									rsidSect: "w:rsidSect",
									w: "w:w",
									h: "w:h",
									top: "w:top",
									right: "w:right",
									bottom: "w:bottom",
									left: "w:left",
									header: "w:header",
									footer: "w:footer",
									gutter: "w:gutter",
									linePitch: "w:linePitch",
									pos: "w:pos",
								});
						}
					}
					t.Attributes = o;
				},
				8198: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.BaseXmlComponent = void 0),
						(t.BaseXmlComponent = class {
							constructor(e) {
								this.rootKey = e;
							}
						});
				},
				2852: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.XmlAttributeComponent = void 0);
					const n = r(8198);
					class o extends n.BaseXmlComponent {
						constructor(e) {
							super("_attr"), (this.root = e);
						}
						prepForXml(e) {
							const t = {};
							return (
								Object.keys(this.root).forEach((e) => {
									const r = this.root[e];
									if (void 0 !== r) {
										const n =
											(this.xmlKeys && this.xmlKeys[e]) ||
											e;
										t[n] = r;
									}
								}),
								{ _attr: t }
							);
						}
						set(e) {
							this.root = e;
						}
					}
					t.XmlAttributeComponent = o;
				},
				3247: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ImportedRootElementAttributes =
							t.ImportedXmlComponent =
							t.convertToXmlComponent =
								void 0);
					const n = r(7888),
						o = r(2451);
					function i(e) {
						switch (e.type) {
							case void 0:
							case "element":
								const t = new a(e.name, e.attributes),
									r = e.elements || [];
								for (const e of r) {
									const r = i(e);
									void 0 !== r && t.push(r);
								}
								return t;
							case "text":
								return e.text;
							default:
								return;
						}
					}
					t.convertToXmlComponent = i;
					class s extends o.XmlAttributeComponent {}
					class a extends o.XmlComponent {
						static fromXmlString(e) {
							return i((0, n.xml2js)(e, { compact: !1 }));
						}
						constructor(e, t) {
							super(e), t && this.root.push(new s(t));
						}
						push(e) {
							this.root.push(e);
						}
					}
					t.ImportedXmlComponent = a;
					class u extends o.XmlComponent {
						constructor(e) {
							super(""), (this._attr = e);
						}
						prepForXml(e) {
							return { _attr: this._attr };
						}
					}
					t.ImportedRootElementAttributes = u;
				},
				2451: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(7473), t),
						o(r(7518), t),
						o(r(2852), t),
						o(r(3247), t),
						o(r(3093), t),
						o(r(9372), t),
						o(r(2631), t),
						o(r(8198), t);
				},
				9372: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.InitializableXmlComponent = void 0);
					const n = r(2451);
					class o extends n.XmlComponent {
						constructor(e, t) {
							super(e), t && (this.root = t.root);
						}
					}
					t.InitializableXmlComponent = o;
				},
				2631: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.StringContainer =
							t.NumberValueElement =
							t.StringValueElement =
							t.HpsMeasureElement =
							t.OnOffElement =
								void 0);
					const n = r(2451),
						o = r(459);
					class i extends n.XmlComponent {
						constructor(e, t = !0) {
							super(e),
								!0 !== t &&
									this.root.push(
										new n.Attributes({ val: t })
									);
						}
					}
					t.OnOffElement = i;
					class s extends n.XmlComponent {
						constructor(e, t) {
							super(e),
								this.root.push(
									new n.Attributes({
										val: (0, o.hpsMeasureValue)(t),
									})
								);
						}
					}
					t.HpsMeasureElement = s;
					class a extends n.XmlComponent {
						constructor(e, t) {
							super(e),
								this.root.push(new n.Attributes({ val: t }));
						}
					}
					t.StringValueElement = a;
					class u extends n.XmlComponent {
						constructor(e, t) {
							super(e),
								this.root.push(new n.Attributes({ val: t }));
						}
					}
					t.NumberValueElement = u;
					class c extends n.XmlComponent {
						constructor(e, t) {
							super(e), this.root.push(t);
						}
					}
					t.StringContainer = c;
				},
				7473: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.IgnoreIfEmptyXmlComponent =
							t.XmlComponent =
							t.EMPTY_OBJECT =
								void 0);
					const n = r(8198);
					t.EMPTY_OBJECT = Object.seal({});
					class o extends n.BaseXmlComponent {
						constructor(e) {
							super(e), (this.root = new Array());
						}
						prepForXml(e) {
							var r;
							const o = this.root
								.map((t) =>
									t instanceof n.BaseXmlComponent
										? t.prepForXml(e)
										: t
								)
								.filter((e) => void 0 !== e);
							return {
								[this.rootKey]: o.length
									? 1 === o.length &&
									  (null === (r = o[0]) || void 0 === r
											? void 0
											: r._attr)
										? o[0]
										: o
									: t.EMPTY_OBJECT,
							};
						}
						addChildElement(e) {
							return this.root.push(e), this;
						}
					}
					(t.XmlComponent = o),
						(t.IgnoreIfEmptyXmlComponent = class extends o {
							prepForXml(e) {
								const t = super.prepForXml(e);
								if (
									t &&
									("object" != typeof t[this.rootKey] ||
										Object.keys(t[this.rootKey]).length)
								)
									return t;
							}
						});
				},
				3093: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.WORKAROUND3 = void 0),
						(t.WORKAROUND3 = "");
				},
				1797: function (e, t, r) {
					"use strict";
					var n =
						(this && this.__awaiter) ||
						function (e, t, r, n) {
							return new (r || (r = Promise))(function (o, i) {
								function s(e) {
									try {
										u(n.next(e));
									} catch (e) {
										i(e);
									}
								}
								function a(e) {
									try {
										u(n.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function u(e) {
									var t;
									e.done
										? o(e.value)
										: ((t = e.value),
										  t instanceof r
												? t
												: new r(function (e) {
														e(t);
												  })).then(s, a);
								}
								u((n = n.apply(e, t || [])).next());
							});
						};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.ImportDotx = void 0);
					const o = r(5733),
						i = r(7888),
						s = r(7158),
						a = r(1117),
						u = r(6276),
						c = r(9522),
						l = r(2451),
						p = {
							"http://schemas.openxmlformats.org/officeDocument/2006/relationships/header":
								"header",
							"http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer":
								"footer",
							"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image":
								"image",
							"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink":
								"hyperlink",
						};
					var h;
					!(function (e) {
						(e.HEADER = "header"),
							(e.FOOTER = "footer"),
							(e.IMAGE = "image"),
							(e.HYPERLINK = "hyperlink");
					})(h || (h = {})),
						(t.ImportDotx = class {
							extract(e) {
								return n(this, void 0, void 0, function* () {
									const t = yield o.loadAsync(e),
										r = yield t.files[
											"word/document.xml"
										].async("text"),
										n = yield t.files[
											"word/_rels/document.xml.rels"
										].async("text"),
										i = this.extractDocumentRefs(r),
										s = this.findReferenceFiles(n),
										a = new u.Media();
									return {
										headers: yield this.createHeaders(
											t,
											i,
											s,
											a,
											0
										),
										footers: yield this.createFooters(
											t,
											i,
											s,
											a,
											i.headers.length
										),
										currentRelationshipId:
											i.footers.length + i.headers.length,
										styles: yield t.files[
											"word/styles.xml"
										].async("text"),
										titlePageIsDefined:
											this.checkIfTitlePageIsDefined(r),
										media: a,
									};
								});
							}
							createFooters(e, t, r, o, a) {
								return n(this, void 0, void 0, function* () {
									const u = t.footers
										.map((t, u) =>
											n(
												this,
												void 0,
												void 0,
												function* () {
													const n = r.find(
														(e) => e.id === t.id
													);
													if (null === n || !n)
														throw new Error(
															`Can not find target file for id ${t.id}`
														);
													const c = yield e.files[
															`word/${n.target}`
														].async("text"),
														p = (0, i.xml2js)(c, {
															compact: !1,
															captureSpacesBetweenElements:
																!0,
														});
													if (!p.elements) return;
													const h = p.elements.reduce(
															(e, t) =>
																"w:ftr" ===
																t.name
																	? t
																	: e
														),
														d = (0,
														l.convertToXmlComponent)(
															h
														),
														f = new s.FooterWrapper(
															o,
															a + u,
															d
														);
													return (
														yield this.addRelationshipToWrapper(
															n,
															e,
															f,
															o
														),
														{
															type: t.type,
															footer: f,
														}
													);
												}
											)
										)
										.filter((e) => !!e);
									return Promise.all(u);
								});
							}
							createHeaders(e, t, r, o, s) {
								return n(this, void 0, void 0, function* () {
									const u = t.headers
										.map((t, u) =>
											n(
												this,
												void 0,
												void 0,
												function* () {
													const n = r.find(
														(e) => e.id === t.id
													);
													if (null === n || !n)
														throw new Error(
															`Can not find target file for id ${t.id}`
														);
													const c = yield e.files[
															`word/${n.target}`
														].async("text"),
														p = (0, i.xml2js)(c, {
															compact: !1,
															captureSpacesBetweenElements:
																!0,
														});
													if (!p.elements) return;
													const h = p.elements.reduce(
															(e, t) =>
																"w:hdr" ===
																t.name
																	? t
																	: e
														),
														d = (0,
														l.convertToXmlComponent)(
															h
														),
														f = new a.HeaderWrapper(
															o,
															s + u,
															d
														);
													return (
														yield this.addRelationshipToWrapper(
															n,
															e,
															f,
															o
														),
														{
															type: t.type,
															header: f,
														}
													);
												}
											)
										)
										.filter((e) => !!e);
									return Promise.all(u);
								});
							}
							addRelationshipToWrapper(e, t, r, o) {
								return n(this, void 0, void 0, function* () {
									const n =
										t.files[`word/_rels/${e.target}.rels`];
									if (!n) return;
									const i = yield n.async("text"),
										s = this.findReferenceFiles(i).filter(
											(e) => e.type === h.IMAGE
										),
										a = this.findReferenceFiles(i).filter(
											(e) => e.type === h.HYPERLINK
										);
									for (const e of s) {
										const n = yield t.files[
												`word/${e.target}`
											].async("nodebuffer"),
											i = o.addMedia(n, {
												width: 100,
												height: 100,
											});
										r.Relationships.createRelationship(
											e.id,
											"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
											`media/${i.fileName}`
										);
									}
									for (const e of a)
										r.Relationships.createRelationship(
											e.id,
											"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
											e.target,
											c.TargetModeType.EXTERNAL
										);
								});
							}
							findReferenceFiles(e) {
								const t = (0, i.xml2js)(e, { compact: !0 });
								return (
									Array.isArray(t.Relationships.Relationship)
										? t.Relationships.Relationship
										: [t.Relationships.Relationship]
								)
									.map((e) => {
										if (void 0 === e._attributes)
											throw Error(
												"relationship element has no attributes"
											);
										return {
											id: this.parseRefId(
												e._attributes.Id
											),
											type: p[e._attributes.Type],
											target: e._attributes.Target,
										};
									})
									.filter((e) => null !== e.type);
							}
							extractDocumentRefs(e) {
								const t = (0, i.xml2js)(e, { compact: !0 })[
										"w:document"
									]["w:body"]["w:sectPr"],
									r = t["w:headerReference"];
								let n;
								n =
									void 0 === r
										? []
										: Array.isArray(r)
										? r
										: [r];
								const o = n.map((e) => {
										if (void 0 === e._attributes)
											throw Error(
												"header reference element has no attributes"
											);
										return {
											type: e._attributes["w:type"],
											id: this.parseRefId(
												e._attributes["r:id"]
											),
										};
									}),
									s = t["w:footerReference"];
								let a;
								return (
									(a =
										void 0 === s
											? []
											: Array.isArray(s)
											? s
											: [s]),
									{
										headers: o,
										footers: a.map((e) => {
											if (void 0 === e._attributes)
												throw Error(
													"footer reference element has no attributes"
												);
											return {
												type: e._attributes["w:type"],
												id: this.parseRefId(
													e._attributes["r:id"]
												),
											};
										}),
									}
								);
							}
							checkIfTitlePageIsDefined(e) {
								return (
									void 0 !==
									(0, i.xml2js)(e, { compact: !0 })[
										"w:document"
									]["w:body"]["w:sectPr"]["w:titlePg"]
								);
							}
							parseRefId(e) {
								const t = /^rId(\d+)$/.exec(e);
								if (null === t)
									throw new Error("Invalid ref id");
								return parseInt(t[1], 10);
							}
						});
				},
				1057: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						o(r(1797), t);
				},
				341: function (e, t, r) {
					"use strict";
					var n =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, n) {
										void 0 === n && (n = r),
											Object.defineProperty(e, n, {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											});
								  }
								: function (e, t, r, n) {
										void 0 === n && (n = r), (e[n] = t[r]);
								  }),
						o =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(
											t,
											r
										) ||
										n(t, e, r);
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.Document = void 0);
					var i = r(7559);
					Object.defineProperty(t, "Document", {
						enumerable: !0,
						get: function () {
							return i.File;
						},
					}),
						o(r(7559), t),
						o(r(6117), t),
						o(r(1057), t),
						o(r(5524), t);
				},
				4927: (e, t, r) => {
					function n(e) {
						try {
							if (!r.g.localStorage) return !1;
						} catch (e) {
							return !1;
						}
						var t = r.g.localStorage[e];
						return null != t && "true" === String(t).toLowerCase();
					}
					e.exports = function (e, t) {
						if (n("noDeprecation")) return e;
						var r = !1;
						return function () {
							if (!r) {
								if (n("throwDeprecation")) throw new Error(t);
								n("traceDeprecation")
									? console.trace(t)
									: console.warn(t),
									(r = !0);
							}
							return e.apply(this, arguments);
						};
					};
				},
				9881: (e) => {
					e.exports = {
						isArray: function (e) {
							return Array.isArray
								? Array.isArray(e)
								: "[object Array]" ===
										Object.prototype.toString.call(e);
						},
					};
				},
				7888: (e, t, r) => {
					var n = r(1229),
						o = r(1388),
						i = r(6501),
						s = r(4673);
					e.exports = {
						xml2js: n,
						xml2json: o,
						js2xml: i,
						json2xml: s,
					};
				},
				6501: (e, t, r) => {
					var n,
						o,
						i = r(4740),
						s = r(9881).isArray;
					function a(e, t, r) {
						return (
							(!r && e.spaces ? "\n" : "") +
							Array(t + 1).join(e.spaces)
						);
					}
					function u(e, t, r) {
						if (t.ignoreAttributes) return "";
						"attributesFn" in t && (e = t.attributesFn(e, o, n));
						var i,
							s,
							u,
							c,
							l = [];
						for (i in e)
							e.hasOwnProperty(i) &&
								null !== e[i] &&
								void 0 !== e[i] &&
								((c =
									t.noQuotesForNativeAttributes &&
									"string" != typeof e[i]
										? ""
										: '"'),
								(s = (s = "" + e[i]).replace(/"/g, "&quot;")),
								(u =
									"attributeNameFn" in t
										? t.attributeNameFn(i, s, o, n)
										: i),
								l.push(
									t.spaces && t.indentAttributes
										? a(t, r + 1, !1)
										: " "
								),
								l.push(
									u +
										"=" +
										c +
										("attributeValueFn" in t
											? t.attributeValueFn(s, i, o, n)
											: s) +
										c
								));
						return (
							e &&
								Object.keys(e).length &&
								t.spaces &&
								t.indentAttributes &&
								l.push(a(t, r, !1)),
							l.join("")
						);
					}
					function c(e, t, r) {
						return (
							(n = e),
							(o = "xml"),
							t.ignoreDeclaration
								? ""
								: "<?xml" + u(e[t.attributesKey], t, r) + "?>"
						);
					}
					function l(e, t, r) {
						if (t.ignoreInstruction) return "";
						var i;
						for (i in e) if (e.hasOwnProperty(i)) break;
						var s =
							"instructionNameFn" in t
								? t.instructionNameFn(i, e[i], o, n)
								: i;
						if ("object" == typeof e[i])
							return (
								(n = e),
								(o = s),
								"<?" + s + u(e[i][t.attributesKey], t, r) + "?>"
							);
						var a = e[i] ? e[i] : "";
						return (
							"instructionFn" in t &&
								(a = t.instructionFn(a, i, o, n)),
							"<?" + s + (a ? " " + a : "") + "?>"
						);
					}
					function p(e, t) {
						return t.ignoreComment
							? ""
							: "\x3c!--" +
									("commentFn" in t
										? t.commentFn(e, o, n)
										: e) +
									"--\x3e";
					}
					function h(e, t) {
						return t.ignoreCdata
							? ""
							: "<![CDATA[" +
									("cdataFn" in t
										? t.cdataFn(e, o, n)
										: e.replace("]]>", "]]]]><![CDATA[>")) +
									"]]>";
					}
					function d(e, t) {
						return t.ignoreDoctype
							? ""
							: "<!DOCTYPE " +
									("doctypeFn" in t
										? t.doctypeFn(e, o, n)
										: e) +
									">";
					}
					function f(e, t) {
						return t.ignoreText
							? ""
							: ((e = (e = (e = "" + e).replace(/&amp;/g, "&"))
									.replace(/&/g, "&amp;")
									.replace(/</g, "&lt;")
									.replace(/>/g, "&gt;")),
							  "textFn" in t ? t.textFn(e, o, n) : e);
					}
					function m(e, t, r, i) {
						return e.reduce(function (e, s) {
							var c = a(t, r, i && !e);
							switch (s.type) {
								case "element":
									return (
										e +
										c +
										(function (e, t, r) {
											(n = e), (o = e.name);
											var i = [],
												s =
													"elementNameFn" in t
														? t.elementNameFn(
																e.name,
																e
														  )
														: e.name;
											i.push("<" + s),
												e[t.attributesKey] &&
													i.push(
														u(
															e[t.attributesKey],
															t,
															r
														)
													);
											var a =
												(e[t.elementsKey] &&
													e[t.elementsKey].length) ||
												(e[t.attributesKey] &&
													"preserve" ===
														e[t.attributesKey][
															"xml:space"
														]);
											return (
												a ||
													(a =
														"fullTagEmptyElementFn" in
														t
															? t.fullTagEmptyElementFn(
																	e.name,
																	e
															  )
															: t.fullTagEmptyElement),
												a
													? (i.push(">"),
													  e[t.elementsKey] &&
															e[t.elementsKey]
																.length &&
															(i.push(
																m(
																	e[
																		t
																			.elementsKey
																	],
																	t,
																	r + 1
																)
															),
															(n = e),
															(o = e.name)),
													  i.push(
															t.spaces &&
																(function (
																	e,
																	t
																) {
																	var r;
																	if (
																		e.elements &&
																		e
																			.elements
																			.length
																	)
																		for (
																			r = 0;
																			r <
																			e
																				.elements
																				.length;
																			++r
																		)
																			switch (
																				e
																					.elements[
																					r
																				][
																					t
																						.typeKey
																				]
																			) {
																				case "text":
																					if (
																						t.indentText
																					)
																						return !0;
																					break;
																				case "cdata":
																					if (
																						t.indentCdata
																					)
																						return !0;
																					break;
																				case "instruction":
																					if (
																						t.indentInstruction
																					)
																						return !0;
																					break;
																				default:
																					return !0;
																			}
																	return !1;
																})(e, t)
																? "\n" +
																		Array(
																			r +
																				1
																		).join(
																			t.spaces
																		)
																: ""
													  ),
													  i.push("</" + s + ">"))
													: i.push("/>"),
												i.join("")
											);
										})(s, t, r)
									);
								case "comment":
									return e + c + p(s[t.commentKey], t);
								case "doctype":
									return e + c + d(s[t.doctypeKey], t);
								case "cdata":
									return (
										e +
										(t.indentCdata ? c : "") +
										h(s[t.cdataKey], t)
									);
								case "text":
									return (
										e +
										(t.indentText ? c : "") +
										f(s[t.textKey], t)
									);
								case "instruction":
									var g = {};
									return (
										(g[s[t.nameKey]] = s[t.attributesKey]
											? s
											: s[t.instructionKey]),
										e +
											(t.indentInstruction ? c : "") +
											l(g, t, r)
									);
							}
						}, "");
					}
					function g(e, t, r) {
						var n;
						for (n in e)
							if (e.hasOwnProperty(n))
								switch (n) {
									case t.parentKey:
									case t.attributesKey:
										break;
									case t.textKey:
										if (t.indentText || r) return !0;
										break;
									case t.cdataKey:
										if (t.indentCdata || r) return !0;
										break;
									case t.instructionKey:
										if (t.indentInstruction || r) return !0;
										break;
									case t.doctypeKey:
									case t.commentKey:
									default:
										return !0;
								}
						return !1;
					}
					function b(e, t, r, i, s) {
						(n = e), (o = t);
						var c =
							"elementNameFn" in r ? r.elementNameFn(t, e) : t;
						if (null == e || "" === e)
							return ("fullTagEmptyElementFn" in r &&
								r.fullTagEmptyElementFn(t, e)) ||
								r.fullTagEmptyElement
								? "<" + c + "></" + c + ">"
								: "<" + c + "/>";
						var l = [];
						if (t) {
							if ((l.push("<" + c), "object" != typeof e))
								return (
									l.push(">" + f(e, r) + "</" + c + ">"),
									l.join("")
								);
							e[r.attributesKey] &&
								l.push(u(e[r.attributesKey], r, i));
							var p =
								g(e, r, !0) ||
								(e[r.attributesKey] &&
									"preserve" ===
										e[r.attributesKey]["xml:space"]);
							if (
								(p ||
									(p =
										"fullTagEmptyElementFn" in r
											? r.fullTagEmptyElementFn(t, e)
											: r.fullTagEmptyElement),
								!p)
							)
								return l.push("/>"), l.join("");
							l.push(">");
						}
						return (
							l.push(y(e, r, i + 1, !1)),
							(n = e),
							(o = t),
							t &&
								l.push((s ? a(r, i, !1) : "") + "</" + c + ">"),
							l.join("")
						);
					}
					function y(e, t, r, n) {
						var o,
							i,
							u,
							m = [];
						for (i in e)
							if (e.hasOwnProperty(i))
								for (
									u = s(e[i]) ? e[i] : [e[i]], o = 0;
									o < u.length;
									++o
								) {
									switch (i) {
										case t.declarationKey:
											m.push(c(u[o], t, r));
											break;
										case t.instructionKey:
											m.push(
												(t.indentInstruction
													? a(t, r, n)
													: "") + l(u[o], t, r)
											);
											break;
										case t.attributesKey:
										case t.parentKey:
											break;
										case t.textKey:
											m.push(
												(t.indentText
													? a(t, r, n)
													: "") + f(u[o], t)
											);
											break;
										case t.cdataKey:
											m.push(
												(t.indentCdata
													? a(t, r, n)
													: "") + h(u[o], t)
											);
											break;
										case t.doctypeKey:
											m.push(a(t, r, n) + d(u[o], t));
											break;
										case t.commentKey:
											m.push(a(t, r, n) + p(u[o], t));
											break;
										default:
											m.push(
												a(t, r, n) +
													b(u[o], i, t, r, g(u[o], t))
											);
									}
									n = n && !m.length;
								}
						return m.join("");
					}
					e.exports = function (e, t) {
						t = (function (e) {
							var t = i.copyOptions(e);
							return (
								i.ensureFlagExists("ignoreDeclaration", t),
								i.ensureFlagExists("ignoreInstruction", t),
								i.ensureFlagExists("ignoreAttributes", t),
								i.ensureFlagExists("ignoreText", t),
								i.ensureFlagExists("ignoreComment", t),
								i.ensureFlagExists("ignoreCdata", t),
								i.ensureFlagExists("ignoreDoctype", t),
								i.ensureFlagExists("compact", t),
								i.ensureFlagExists("indentText", t),
								i.ensureFlagExists("indentCdata", t),
								i.ensureFlagExists("indentAttributes", t),
								i.ensureFlagExists("indentInstruction", t),
								i.ensureFlagExists("fullTagEmptyElement", t),
								i.ensureFlagExists(
									"noQuotesForNativeAttributes",
									t
								),
								i.ensureSpacesExists(t),
								"number" == typeof t.spaces &&
									(t.spaces = Array(t.spaces + 1).join(" ")),
								i.ensureKeyExists("declaration", t),
								i.ensureKeyExists("instruction", t),
								i.ensureKeyExists("attributes", t),
								i.ensureKeyExists("text", t),
								i.ensureKeyExists("comment", t),
								i.ensureKeyExists("cdata", t),
								i.ensureKeyExists("doctype", t),
								i.ensureKeyExists("type", t),
								i.ensureKeyExists("name", t),
								i.ensureKeyExists("elements", t),
								i.checkFnExists("doctype", t),
								i.checkFnExists("instruction", t),
								i.checkFnExists("cdata", t),
								i.checkFnExists("comment", t),
								i.checkFnExists("text", t),
								i.checkFnExists("instructionName", t),
								i.checkFnExists("elementName", t),
								i.checkFnExists("attributeName", t),
								i.checkFnExists("attributeValue", t),
								i.checkFnExists("attributes", t),
								i.checkFnExists("fullTagEmptyElement", t),
								t
							);
						})(t);
						var r = [];
						return (
							(n = e),
							(o = "_root_"),
							t.compact
								? r.push(y(e, t, 0, !0))
								: (e[t.declarationKey] &&
										r.push(c(e[t.declarationKey], t, 0)),
								  e[t.elementsKey] &&
										e[t.elementsKey].length &&
										r.push(
											m(e[t.elementsKey], t, 0, !r.length)
										)),
							r.join("")
						);
					};
				},
				4673: (e, t, r) => {
					var n = r(6501);
					e.exports = function (e, t) {
						e instanceof Buffer && (e = e.toString());
						var r = null;
						if ("string" == typeof e)
							try {
								r = JSON.parse(e);
							} catch (e) {
								throw new Error(
									"The JSON structure is invalid"
								);
							}
						else r = e;
						return n(r, t);
					};
				},
				4740: (e, t, r) => {
					var n = r(9881).isArray;
					e.exports = {
						copyOptions: function (e) {
							var t,
								r = {};
							for (t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
							return r;
						},
						ensureFlagExists: function (e, t) {
							(e in t && "boolean" == typeof t[e]) || (t[e] = !1);
						},
						ensureSpacesExists: function (e) {
							(!("spaces" in e) ||
								("number" != typeof e.spaces &&
									"string" != typeof e.spaces)) &&
								(e.spaces = 0);
						},
						ensureAlwaysArrayExists: function (e) {
							("alwaysArray" in e &&
								("boolean" == typeof e.alwaysArray ||
									n(e.alwaysArray))) ||
								(e.alwaysArray = !1);
						},
						ensureKeyExists: function (e, t) {
							(e + "Key" in t &&
								"string" == typeof t[e + "Key"]) ||
								(t[e + "Key"] = t.compact ? "_" + e : e);
						},
						checkFnExists: function (e, t) {
							return e + "Fn" in t;
						},
					};
				},
				1229: (e, t, r) => {
					var n,
						o,
						i = r(6099),
						s = r(4740),
						a = r(9881).isArray;
					function u(e) {
						var t = Number(e);
						if (!isNaN(t)) return t;
						var r = e.toLowerCase();
						return "true" === r || ("false" !== r && e);
					}
					function c(e, t) {
						var r;
						if (n.compact) {
							if (
								(!o[n[e + "Key"]] &&
									(a(n.alwaysArray)
										? -1 !==
										  n.alwaysArray.indexOf(n[e + "Key"])
										: n.alwaysArray) &&
									(o[n[e + "Key"]] = []),
								o[n[e + "Key"]] &&
									!a(o[n[e + "Key"]]) &&
									(o[n[e + "Key"]] = [o[n[e + "Key"]]]),
								e + "Fn" in n &&
									"string" == typeof t &&
									(t = n[e + "Fn"](t, o)),
								"instruction" === e &&
									("instructionFn" in n ||
										"instructionNameFn" in n))
							)
								for (r in t)
									if (t.hasOwnProperty(r))
										if ("instructionFn" in n)
											t[r] = n.instructionFn(t[r], r, o);
										else {
											var i = t[r];
											delete t[r],
												(t[
													n.instructionNameFn(r, i, o)
												] = i);
										}
							a(o[n[e + "Key"]])
								? o[n[e + "Key"]].push(t)
								: (o[n[e + "Key"]] = t);
						} else {
							o[n.elementsKey] || (o[n.elementsKey] = []);
							var s = {};
							if (((s[n.typeKey] = e), "instruction" === e)) {
								for (r in t) if (t.hasOwnProperty(r)) break;
								(s[n.nameKey] =
									"instructionNameFn" in n
										? n.instructionNameFn(r, t, o)
										: r),
									n.instructionHasAttributes
										? ((s[n.attributesKey] =
												t[r][n.attributesKey]),
										  "instructionFn" in n &&
												(s[n.attributesKey] =
													n.instructionFn(
														s[n.attributesKey],
														r,
														o
													)))
										: ("instructionFn" in n &&
												(t[r] = n.instructionFn(
													t[r],
													r,
													o
												)),
										  (s[n.instructionKey] = t[r]));
							} else
								e + "Fn" in n && (t = n[e + "Fn"](t, o)),
									(s[n[e + "Key"]] = t);
							n.addParent && (s[n.parentKey] = o),
								o[n.elementsKey].push(s);
						}
					}
					function l(e) {
						var t;
						if (
							("attributesFn" in n &&
								e &&
								(e = n.attributesFn(e, o)),
							(n.trim ||
								"attributeValueFn" in n ||
								"attributeNameFn" in n ||
								n.nativeTypeAttributes) &&
								e)
						)
							for (t in e)
								if (
									e.hasOwnProperty(t) &&
									(n.trim && (e[t] = e[t].trim()),
									n.nativeTypeAttributes && (e[t] = u(e[t])),
									"attributeValueFn" in n &&
										(e[t] = n.attributeValueFn(e[t], t, o)),
									"attributeNameFn" in n)
								) {
									var r = e[t];
									delete e[t],
										(e[n.attributeNameFn(t, e[t], o)] = r);
								}
						return e;
					}
					function p(e) {
						var t = {};
						if (
							e.body &&
							("xml" === e.name.toLowerCase() ||
								n.instructionHasAttributes)
						) {
							for (
								var r,
									i =
										/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;
								null !== (r = i.exec(e.body));

							)
								t[r[1]] = r[2] || r[3] || r[4];
							t = l(t);
						}
						if ("xml" === e.name.toLowerCase()) {
							if (n.ignoreDeclaration) return;
							(o[n.declarationKey] = {}),
								Object.keys(t).length &&
									(o[n.declarationKey][n.attributesKey] = t),
								n.addParent &&
									(o[n.declarationKey][n.parentKey] = o);
						} else {
							if (n.ignoreInstruction) return;
							n.trim && (e.body = e.body.trim());
							var s = {};
							n.instructionHasAttributes && Object.keys(t).length
								? ((s[e.name] = {}),
								  (s[e.name][n.attributesKey] = t))
								: (s[e.name] = e.body),
								c("instruction", s);
						}
					}
					function h(e, t) {
						var r;
						if (
							("object" == typeof e &&
								((t = e.attributes), (e = e.name)),
							(t = l(t)),
							"elementNameFn" in n && (e = n.elementNameFn(e, o)),
							n.compact)
						) {
							var i;
							if (
								((r = {}),
								!n.ignoreAttributes &&
									t &&
									Object.keys(t).length)
							)
								for (i in ((r[n.attributesKey] = {}), t))
									t.hasOwnProperty(i) &&
										(r[n.attributesKey][i] = t[i]);
							!(e in o) &&
								(a(n.alwaysArray)
									? -1 !== n.alwaysArray.indexOf(e)
									: n.alwaysArray) &&
								(o[e] = []),
								o[e] && !a(o[e]) && (o[e] = [o[e]]),
								a(o[e]) ? o[e].push(r) : (o[e] = r);
						} else
							o[n.elementsKey] || (o[n.elementsKey] = []),
								((r = {})[n.typeKey] = "element"),
								(r[n.nameKey] = e),
								!n.ignoreAttributes &&
									t &&
									Object.keys(t).length &&
									(r[n.attributesKey] = t),
								n.alwaysChildren && (r[n.elementsKey] = []),
								o[n.elementsKey].push(r);
						(r[n.parentKey] = o), (o = r);
					}
					function d(e) {
						n.ignoreText ||
							((e.trim() || n.captureSpacesBetweenElements) &&
								(n.trim && (e = e.trim()),
								n.nativeType && (e = u(e)),
								n.sanitize &&
									(e = e
										.replace(/&/g, "&amp;")
										.replace(/</g, "&lt;")
										.replace(/>/g, "&gt;")),
								c("text", e)));
					}
					function f(e) {
						n.ignoreComment ||
							(n.trim && (e = e.trim()), c("comment", e));
					}
					function m(e) {
						var t = o[n.parentKey];
						n.addParent || delete o[n.parentKey], (o = t);
					}
					function g(e) {
						n.ignoreCdata ||
							(n.trim && (e = e.trim()), c("cdata", e));
					}
					function b(e) {
						n.ignoreDoctype ||
							((e = e.replace(/^ /, "")),
							n.trim && (e = e.trim()),
							c("doctype", e));
					}
					function y(e) {
						e.note = e;
					}
					e.exports = function (e, t) {
						var r = i.parser(!0, {}),
							a = {};
						if (
							((o = a),
							(n = (function (e) {
								return (
									(n = s.copyOptions(e)),
									s.ensureFlagExists("ignoreDeclaration", n),
									s.ensureFlagExists("ignoreInstruction", n),
									s.ensureFlagExists("ignoreAttributes", n),
									s.ensureFlagExists("ignoreText", n),
									s.ensureFlagExists("ignoreComment", n),
									s.ensureFlagExists("ignoreCdata", n),
									s.ensureFlagExists("ignoreDoctype", n),
									s.ensureFlagExists("compact", n),
									s.ensureFlagExists("alwaysChildren", n),
									s.ensureFlagExists("addParent", n),
									s.ensureFlagExists("trim", n),
									s.ensureFlagExists("nativeType", n),
									s.ensureFlagExists(
										"nativeTypeAttributes",
										n
									),
									s.ensureFlagExists("sanitize", n),
									s.ensureFlagExists(
										"instructionHasAttributes",
										n
									),
									s.ensureFlagExists(
										"captureSpacesBetweenElements",
										n
									),
									s.ensureAlwaysArrayExists(n),
									s.ensureKeyExists("declaration", n),
									s.ensureKeyExists("instruction", n),
									s.ensureKeyExists("attributes", n),
									s.ensureKeyExists("text", n),
									s.ensureKeyExists("comment", n),
									s.ensureKeyExists("cdata", n),
									s.ensureKeyExists("doctype", n),
									s.ensureKeyExists("type", n),
									s.ensureKeyExists("name", n),
									s.ensureKeyExists("elements", n),
									s.ensureKeyExists("parent", n),
									s.checkFnExists("doctype", n),
									s.checkFnExists("instruction", n),
									s.checkFnExists("cdata", n),
									s.checkFnExists("comment", n),
									s.checkFnExists("text", n),
									s.checkFnExists("instructionName", n),
									s.checkFnExists("elementName", n),
									s.checkFnExists("attributeName", n),
									s.checkFnExists("attributeValue", n),
									s.checkFnExists("attributes", n),
									n
								);
							})(t)),
							(r.opt = { strictEntities: !0 }),
							(r.onopentag = h),
							(r.ontext = d),
							(r.oncomment = f),
							(r.onclosetag = m),
							(r.onerror = y),
							(r.oncdata = g),
							(r.ondoctype = b),
							(r.onprocessinginstruction = p),
							r.write(e).close(),
							a[n.elementsKey])
						) {
							var u = a[n.elementsKey];
							delete a[n.elementsKey],
								(a[n.elementsKey] = u),
								delete a.text;
						}
						return a;
					};
				},
				1388: (e, t, r) => {
					var n = r(4740),
						o = r(1229);
					e.exports = function (e, t) {
						var r, i, s;
						return (
							(r = (function (e) {
								var t = n.copyOptions(e);
								return n.ensureSpacesExists(t), t;
							})(t)),
							(i = o(e, r)),
							(s =
								"compact" in r && r.compact
									? "_parent"
									: "parent"),
							("addParent" in r && r.addParent
								? JSON.stringify(
										i,
										function (e, t) {
											return e === s ? "_" : t;
										},
										r.spaces
								  )
								: JSON.stringify(i, null, r.spaces)
							)
								.replace(/\u2028/g, "\\u2028")
								.replace(/\u2029/g, "\\u2029")
						);
					};
				},
				255: (e) => {
					var t = {
						"&": "&amp;",
						'"': "&quot;",
						"'": "&apos;",
						"<": "&lt;",
						">": "&gt;",
					};
					e.exports = function (e) {
						return e && e.replace
							? e.replace(/([&"<>'])/g, function (e, r) {
									return t[r];
							  })
							: e;
					};
				},
				3479: (e, t, r) => {
					var n = r(4155),
						o = r(255),
						i = r(2830).Stream;
					function s(e, t, r) {
						r = r || 0;
						var n,
							i,
							a = ((n = t), new Array(r || 0).join(n || "")),
							u = e;
						if (
							"object" == typeof e &&
							(u = e[(i = Object.keys(e)[0])]) &&
							u._elem
						)
							return (
								(u._elem.name = i),
								(u._elem.icount = r),
								(u._elem.indent = t),
								(u._elem.indents = a),
								(u._elem.interrupt = u),
								u._elem
							);
						var c,
							l = [],
							p = [];
						function h(e) {
							Object.keys(e).forEach(function (t) {
								l.push(
									(function (e, t) {
										return e + '="' + o(t) + '"';
									})(t, e[t])
								);
							});
						}
						switch (typeof u) {
							case "object":
								if (null === u) break;
								u._attr && h(u._attr),
									u._cdata &&
										p.push(
											("<![CDATA[" + u._cdata).replace(
												/\]\]>/g,
												"]]]]><![CDATA[>"
											) + "]]>"
										),
									u.forEach &&
										((c = !1),
										p.push(""),
										u.forEach(function (e) {
											"object" == typeof e
												? "_attr" == Object.keys(e)[0]
													? h(e._attr)
													: p.push(s(e, t, r + 1))
												: (p.pop(),
												  (c = !0),
												  p.push(o(e)));
										}),
										c || p.push(""));
								break;
							default:
								p.push(o(u));
						}
						return {
							name: i,
							interrupt: !1,
							attributes: l,
							content: p,
							icount: r,
							indents: a,
							indent: t,
						};
					}
					function a(e, t, r) {
						if ("object" != typeof t) return e(!1, t);
						var n = t.interrupt ? 1 : t.content.length;
						function o() {
							for (; t.content.length; ) {
								var o = t.content.shift();
								if (void 0 !== o) {
									if (i(o)) return;
									a(e, o);
								}
							}
							e(
								!1,
								(n > 1 ? t.indents : "") +
									(t.name ? "</" + t.name + ">" : "") +
									(t.indent && !r ? "\n" : "")
							),
								r && r();
						}
						function i(t) {
							return (
								!!t.interrupt &&
								((t.interrupt.append = e),
								(t.interrupt.end = o),
								(t.interrupt = !1),
								e(!0),
								!0)
							);
						}
						if (
							(e(
								!1,
								t.indents +
									(t.name ? "<" + t.name : "") +
									(t.attributes.length
										? " " + t.attributes.join(" ")
										: "") +
									(n
										? t.name
											? ">"
											: ""
										: t.name
										? "/>"
										: "") +
									(t.indent && n > 1 ? "\n" : "")
							),
							!n)
						)
							return e(!1, t.indent ? "\n" : "");
						i(t) || o();
					}
					(e.exports = function (e, t) {
						"object" != typeof t && (t = { indent: t });
						var r,
							o,
							u = t.stream ? new i() : null,
							c = "",
							l = !1,
							p = t.indent
								? !0 === t.indent
									? "    "
									: t.indent
								: "",
							h = !0;
						function d(e) {
							h ? n.nextTick(e) : e();
						}
						function f(e, t) {
							if (
								(void 0 !== t && (c += t),
								e && !l && ((u = u || new i()), (l = !0)),
								e && l)
							) {
								var r = c;
								d(function () {
									u.emit("data", r);
								}),
									(c = "");
							}
						}
						function m(e, t) {
							a(f, s(e, p, p ? 1 : 0), t);
						}
						function g() {
							if (u) {
								var e = c;
								d(function () {
									u.emit("data", e),
										u.emit("end"),
										(u.readable = !1),
										u.emit("close");
								});
							}
						}
						return (
							d(function () {
								h = !1;
							}),
							t.declaration &&
								((o = {
									version: "1.0",
									encoding:
										(r = t.declaration).encoding || "UTF-8",
								}),
								r.standalone && (o.standalone = r.standalone),
								m({ "?xml": { _attr: o } }),
								(c = c.replace("/>", "?>"))),
							e && e.forEach
								? e.forEach(function (t, r) {
										var n;
										r + 1 === e.length && (n = g), m(t, n);
								  })
								: m(e, g),
							u ? ((u.readable = !0), u) : c
						);
					}),
						(e.exports.element = e.exports.Element =
							function () {
								var e = Array.prototype.slice.call(arguments),
									t = {
										_elem: s(e),
										push: function (e) {
											if (!this.append)
												throw new Error(
													"not assigned to a parent!"
												);
											var t = this,
												r = this._elem.indent;
											a(
												this.append,
												s(
													e,
													r,
													this._elem.icount +
														(r ? 1 : 0)
												),
												function () {
													t.append(!0);
												}
											);
										},
										close: function (e) {
											void 0 !== e && this.push(e),
												this.end && this.end();
										},
									};
								return t;
							});
				},
				9862: () => {},
				964: () => {},
				2961: (e) => {
					e.exports = {
						nanoid: (e = 21) => {
							let t = "",
								r = e;
							for (; r--; )
								t +=
									"ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
										(64 * Math.random()) | 0
									];
							return t;
						},
						customAlphabet: (e, t) => () => {
							let r = "",
								n = t;
							for (; n--; )
								r += e[(Math.random() * e.length) | 0];
							return r;
						},
					};
				},
			},
			t = {};
		function r(n) {
			var o = t[n];
			if (void 0 !== o) return o.exports;
			var i = (t[n] = { exports: {} });
			return e[n].call(i.exports, i, i.exports, r), i.exports;
		}
		return (
			(r.g = (function () {
				if ("object" == typeof globalThis) return globalThis;
				try {
					return this || new Function("return this")();
				} catch (e) {
					if ("object" == typeof window) return window;
				}
			})()),
			r(341)
		);
	})();
});

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs =
	saveAs ||
	(function (view) {
		"use strict";
		// IE <10 is explicitly unsupported
		if (
			typeof view === "undefined" ||
			(typeof navigator !== "undefined" &&
				/MSIE [1-9]\./.test(navigator.userAgent))
		) {
			return;
		}
		var doc = view.document,
			// only get URL when necessary in case Blob.js hasn't overridden it yet
			get_URL = function () {
				return view.URL || view.webkitURL || view;
			},
			save_link = doc.createElementNS(
				"http://www.w3.org/1999/xhtml",
				"a"
			),
			can_use_save_link = "download" in save_link,
			click = function (node) {
				var event = new MouseEvent("click");
				node.dispatchEvent(event);
			},
			is_safari = /constructor/i.test(view.HTMLElement) || view.safari,
			is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent),
			throw_outside = function (ex) {
				(view.setImmediate || view.setTimeout)(function () {
					throw ex;
				}, 0);
			},
			force_saveable_type = "application/octet-stream",
			// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
			arbitrary_revoke_timeout = 1000 * 40, // in ms
			revoke = function (file) {
				var revoker = function () {
					if (typeof file === "string") {
						// file is an object URL
						get_URL().revokeObjectURL(file);
					} else {
						// file is a File
						file.remove();
					}
				};
				setTimeout(revoker, arbitrary_revoke_timeout);
			},
			dispatch = function (filesaver, event_types, event) {
				event_types = [].concat(event_types);
				var i = event_types.length;
				while (i--) {
					var listener = filesaver["on" + event_types[i]];
					if (typeof listener === "function") {
						try {
							listener.call(filesaver, event || filesaver);
						} catch (ex) {
							throw_outside(ex);
						}
					}
				}
			},
			auto_bom = function (blob) {
				// prepend BOM for UTF-8 XML and text/* types (including HTML)
				// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
				if (
					/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
						blob.type
					)
				) {
					return new Blob([String.fromCharCode(0xfeff), blob], {
						type: blob.type,
					});
				}
				return blob;
			},
			FileSaver = function (blob, name, no_auto_bom) {
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				// First try a.download, then web filesystem, then object URLs
				var filesaver = this,
					type = blob.type,
					force = type === force_saveable_type,
					object_url,
					dispatch_all = function () {
						dispatch(
							filesaver,
							"writestart progress write writeend".split(" ")
						);
					},
					// on any filesys errors revert to saving with object URLs
					fs_error = function () {
						if (
							(is_chrome_ios || (force && is_safari)) &&
							view.FileReader
						) {
							// Safari doesn't allow downloading of blob urls
							var reader = new FileReader();
							reader.onloadend = function () {
								var url = is_chrome_ios
									? reader.result
									: reader.result.replace(
											/^data:[^;]*;/,
											"data:attachment/file;"
									  );
								var popup = view.open(url, "_blank");
								if (!popup) view.location.href = url;
								url = undefined; // release reference before dispatching
								filesaver.readyState = filesaver.DONE;
								dispatch_all();
							};
							reader.readAsDataURL(blob);
							filesaver.readyState = filesaver.INIT;
							return;
						}
						// don't create more object URLs than needed
						if (!object_url) {
							object_url = get_URL().createObjectURL(blob);
						}
						if (force) {
							view.location.href = object_url;
						} else {
							var opened = view.open(object_url, "_blank");
							if (!opened) {
								// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
								view.location.href = object_url;
							}
						}
						filesaver.readyState = filesaver.DONE;
						dispatch_all();
						revoke(object_url);
					};
				filesaver.readyState = filesaver.INIT;

				if (can_use_save_link) {
					object_url = get_URL().createObjectURL(blob);
					setTimeout(function () {
						save_link.href = object_url;
						save_link.download = name;
						click(save_link);
						dispatch_all();
						revoke(object_url);
						filesaver.readyState = filesaver.DONE;
					});
					return;
				}

				fs_error();
			},
			FS_proto = FileSaver.prototype,
			saveAs = function (blob, name, no_auto_bom) {
				return new FileSaver(
					blob,
					name || blob.name || "download",
					no_auto_bom
				);
			};
		// IE 10+ (native saveAs)
		if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
			return function (blob, name, no_auto_bom) {
				name = name || blob.name || "download";

				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				return navigator.msSaveOrOpenBlob(blob, name);
			};
		}

		FS_proto.abort = function () {};
		FS_proto.readyState = FS_proto.INIT = 0;
		FS_proto.WRITING = 1;
		FS_proto.DONE = 2;

		FS_proto.error =
			FS_proto.onwritestart =
			FS_proto.onprogress =
			FS_proto.onwrite =
			FS_proto.onabort =
			FS_proto.onerror =
			FS_proto.onwriteend =
				null;

		return saveAs;
	})(
		(typeof self !== "undefined" && self) ||
			(typeof window !== "undefined" && window) ||
			this.content
	);
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
	module.exports.saveAs = saveAs;
} else if (
	typeof define !== "undefined" &&
	define !== null &&
	define.amd !== null
) {
	define("FileSaver.js", function () {
		return saveAs;
	});
}
