! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HandLock = e() : t.HandLock = e()
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function (t) {
            return t
        }, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t["default"]
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "/js/", e(e.s = 59)
    }([function (t, e) {
        var n = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        var r = n(29)("wks"),
            o = n(20),
            i = n(2).Symbol,
            u = "function" == typeof i;
        (t.exports = function (t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }).store = r
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e, n) {
        var r = n(11);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e, n) {
        t.exports = !n(10)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        var r = n(2),
            o = n(0),
            i = n(13),
            u = n(8),
            c = function (t, e, n) {
                var a, f, s, l = t & c.F,
                    p = t & c.G,
                    h = t & c.S,
                    d = t & c.P,
                    v = t & c.B,
                    y = t & c.W,
                    m = p ? o : o[e] || (o[e] = {}),
                    g = m.prototype,
                    _ = p ? r : h ? r[e] : (r[e] || {}).prototype;
                p && (n = e);
                for (a in n)(f = !l && _ && void 0 !== _[a]) && a in m || (s = f ? _[a] : n[a], m[a] = p && "function" != typeof _[a] ? n[a] : v && f ? i(s, r) : y && _[a] == s ? function (t) {
                    var e = function (e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, r)
                        }
                        return t.apply(this, arguments)
                    };
                    return e.prototype = t.prototype, e
                }(s) : d && "function" == typeof s ? i(Function.call, s) : s, d && ((m.virtual || (m.virtual = {}))[a] = s, t & c.R && g && !g[a] && u(g, a, s)))
            };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function (t, e, n) {
        var r = n(3),
            o = n(44),
            i = n(32),
            u = Object.defineProperty;
        e.f = n(4) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return u(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e, n) {
        var r = n(6),
            o = n(18);
        t.exports = n(4) ? function (t, e, n) {
            return r.f(t, e, o(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e, n) {
        var r = n(45),
            o = n(23);
        t.exports = function (t) {
            return r(o(t))
        }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e, n) {
        var r = n(22);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        var r = n(50),
            o = n(25);
        t.exports = Object.keys || function (t) {
            return r(t, o)
        }
    }, function (t, e) {
        t.exports = !0
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function (t, e, n) {
        var r = n(6).f,
            o = n(7),
            i = n(1)("toStringTag");
        t.exports = function (t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    }, function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function (t, e, n) {
        t.exports = {
            "default": n(73),
            __esModule: !0
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e, n) {
        var r = n(11),
            o = n(2).document,
            i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, n) {
        var r = n(3),
            o = n(92),
            i = n(25),
            u = n(28)("IE_PROTO"),
            c = function () {},
            a = function () {
                var t, e = n(24)("iframe"),
                    r = i.length;
                for (e.style.display = "none", n(43).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script>"), t.close(), a = t.F; r--;) delete a.prototype[i[r]];
                return a()
            };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[u] = t) : n = a(), void 0 === e ? n : o(n, e)
        }
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e, n) {
        var r = n(29)("keys"),
            o = n(20);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t))
        }
    }, function (t, e, n) {
        var r = n(2),
            o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        t.exports = function (t) {
            return o[t] || (o[t] = {})
        }
    }, function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function (t, e, n) {
        var r = n(23);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, e, n) {
        var r = n(11);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e, n) {
        var r = n(2),
            o = n(0),
            i = n(16),
            u = n(34),
            c = n(6).f;
        t.exports = function (t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || c(e, t, {
                value: u.f(t)
            })
        }
    }, function (t, e, n) {
        e.f = n(1)
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function o(t, e, n) {
            var r = t.getBoundingClientRect();
            return {
                x: 2 * (e - r.left),
                y: 2 * (n - r.top)
            }
        }

        function i(t, e) {
            var n = e.x - t.x,
                r = e.y - t.y;
            return Math.sqrt(n * n + r * r)
        }

        function u(t, e, n, r, o) {
            t.fillStyle = e, t.beginPath(), t.arc(n, r, o, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
        }

        function c(t, e, n, r, o) {
            t.strokeStyle = e, t.beginPath(), t.arc(n, r, o, 0, 2 * Math.PI, !0), t.closePath(), t.stroke()
        }

        function a(t, e, n, r, o, i) {
            t.strokeStyle = e, t.beginPath(), t.moveTo(n, r), t.lineTo(o, i), t.stroke(), t.closePath()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var f = n(41),
            s = r(f),
            l = n(21),
            p = r(l),
            h = n(37),
            d = r(h),
            v = n(36),
            y = r(v),
            m = n(38),
            g = r(m),
            _ = n(39),
            b = r(_),
            x = {
                container: null,
                focusColor: "#e06555",
                fgColor: "#d6dae5",
                bgColor: "#fff",
                n: 3,
                innerRadius: 20,
                outerRadius: 50,
                touchRadius: 70,
                render: !0,
                customStyle: !1,
                minPoints: 4
            },
            w = function () {
                function t(e) {
                    (0, g["default"])(this, t), e = (0, y["default"])({}, x, e), this.options = e, this.path = [], e.render && this.render()
                }
                return (0, b["default"])(t, null, [{
                    key: "ERR_NOT_ENOUGH_POINTS",
                    get: function () {
                        return "not enough points"
                    }
                }, {
                    key: "ERR_USER_CANCELED",
                    get: function () {
                        return "user canceled"
                    }
                }, {
                    key: "ERR_NO_TASK",
                    get: function () {
                        return "no task"
                    }
                }]), (0, b["default"])(t, [{
                    key: "render",
                    value: function () {
                        if (this.circleCanvas) return !1;
                        var t = this.options,
                            e = t.container || document.createElement("div");
                        t.container || t.customStyle || ((0, y["default"])(e.style, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            lineHeight: "100%",
                            overflow: "hidden",
                            backgroundColor: t.bgColor
                        }), document.body.appendChild(e)), this.container = e;
                        var n = e.getBoundingClientRect(),
                            r = n.width,
                            o = n.height,
                            i = document.createElement("canvas");
                        i.width = i.height = 2 * Math.min(r, o), t.customStyle || (0, y["default"])(i.style, {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(0.5)"
                        });
                        var u = i.cloneNode(!0),
                            c = i.cloneNode(!0);
                        return e.appendChild(u), e.appendChild(c), e.appendChild(i), this.lineCanvas = u, this.moveCanvas = c, this.circleCanvas = i, this.container.addEventListener("touchmove", function (t) {
                            return t.preventDefault()
                        }, {
                            passive: !1
                        }), this.clearPath(), !0
                    }
                }, {
                    key: "clearPath",
                    value: function () {
                        this.circleCanvas || this.render();
                        var t = this.circleCanvas,
                            e = this.lineCanvas,
                            n = this.moveCanvas,
                            r = t.getContext("2d"),
                            o = e.getContext("2d"),
                            i = n.getContext("2d"),
                            c = t.width,
                            a = this.options,
                            f = a.n,
                            s = a.fgColor,
                            l = a.innerRadius;
                        r.clearRect(0, 0, c, c), o.clearRect(0, 0, c, c), i.clearRect(0, 0, c, c);
                        for (var p = Math.round(c / (f + 1)), h = [], d = 1; d <= f; d++)
                            for (var v = 1; v <= f; v++) {
                                var y = p * d,
                                    m = p * v;
                                u(r, s, m, y, l);
                                var g = {
                                    x: m,
                                    y: y
                                };
                                g.pos = [d, v], h.push(g)
                            }
                        this.circles = h
                    }
                }, {
                    key: "cancel",
                    value: function () {
                        function e() {
                            return n.apply(this, arguments)
                        }
                        var n = (0, d["default"])(s["default"].mark(function r() {
                            return s["default"].wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.recordingTask) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", this.recordingTask.cancel());
                                    case 2:
                                        return e.abrupt("return", p["default"].resolve({
                                            err: new Error(t.ERR_NO_TASK)
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, r, this)
                        }));
                        return e
                    }()
                }, {
                    key: "record",
                    value: function () {
                        function e() {
                            return n.apply(this, arguments)
                        }
                        var n = (0, d["default"])(s["default"].mark(function r() {
                            var e, n, f, l, h, d, v, y, m, g, _, b = this;
                            return s["default"].wrap(function (r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!this.recordingTask) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return", this.recordingTask.promise);
                                    case 2:
                                        return e = this.circleCanvas, n = this.lineCanvas, f = this.moveCanvas, l = this.options, h = e.getContext("2d"), d = n.getContext("2d"), v = f.getContext("2d"), e.addEventListener("touchstart", function () {
                                            b.clearPath()
                                        }), y = [], m = function (t) {
                                            for (var e = t.changedTouches[0], n = e.clientX, r = e.clientY, s = l.bgColor, p = l.focusColor, m = l.innerRadius, g = l.outerRadius, _ = l.touchRadius, x = o(f, n, r), w = 0; w < b.circles.length; w++) {
                                                var E = b.circles[w],
                                                    O = E.x,
                                                    j = E.y;
                                                if (i(E, x) < _) {
                                                    if (u(h, s, O, j, g), u(h, p, O, j, m), c(h, p, O, j, g), y.length) {
                                                        var S = y[y.length - 1],
                                                            k = S.x,
                                                            P = S.y;
                                                        a(d, p, O, j, k, P)
                                                    }
                                                    var R = b.circles.splice(w, 1);
                                                    y.push(R[0]);
                                                    break
                                                }
                                            }
                                            if (y.length) {
                                                var T = y[y.length - 1],
                                                    M = T.x,
                                                    C = T.y,
                                                    L = x.x,
                                                    A = x.y;
                                                v.clearRect(0, 0, f.width, f.height), a(v, p, M, C, L, A)
                                            }
                                        }, e.addEventListener("touchstart", m), e.addEventListener("touchmove", m), g = {}, _ = new p["default"](function (n, r) {
                                            g.cancel = function () {
                                                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    i = b.recordingTask.promise;
                                                return r.err = r.err || new Error(t.ERR_USER_CANCELED), e.removeEventListener("touchstart", m), e.removeEventListener("touchmove", m), document.removeEventListener("touchend", o), n(r), b.recordingTask = null, i
                                            };
                                            var o = function i(r) {
                                                if (v.clearRect(0, 0, f.width, f.height), y.length) {
                                                    e.removeEventListener("touchstart", m), e.removeEventListener("touchmove", m), document.removeEventListener("touchend", i);
                                                    var o = null;
                                                    y.length < l.minPoints && (o = new Error(t.ERR_NOT_ENOUGH_POINTS));
                                                    var u = {
                                                        err: o,
                                                        records: y.map(function (t) {
                                                            return t.pos.join("")
                                                        }).join("")
                                                    };
                                                    n(u), b.recordingTask = null
                                                }
                                            };
                                            document.addEventListener("touchend", o)
                                        }), g.promise = _, this.recordingTask = g, r.abrupt("return", _);
                                    case 13:
                                    case "end":
                                        return r.stop()
                                }
                            }, r, this)
                        }));
                        return e
                    }()
                }]), t
            }();
        e["default"] = w
    }, function (t, e, n) {
        t.exports = {
            "default": n(68),
            __esModule: !0
        }
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(21),
            o = function (t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }(r);
        e["default"] = function (t) {
            return function () {
                var e = t.apply(this, arguments);
                return new o["default"](function (t, n) {
                    function r(i, u) {
                        try {
                            var c = e[i](u),
                                a = c.value
                        } catch (t) {
                            return void n(t)
                        }
                        if (!c.done) return o["default"].resolve(a).then(function (t) {
                            r("next", t)
                        }, function (t) {
                            r("throw", t)
                        });
                        t(a)
                    }
                    return r("next")
                })
            }
        }
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0, e["default"] = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(61),
            o = function (t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }(r);
        e["default"] = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o["default"])(t, r.key, r)
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }()
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        e.__esModule = !0;
        var o = n(65),
            i = r(o),
            u = n(64),
            c = r(u),
            a = "function" == typeof c["default"] && "symbol" == typeof i["default"] ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof c["default"] && t.constructor === c["default"] && t !== c["default"].prototype ? "symbol" : typeof t
            };
        e["default"] = "function" == typeof c["default"] && "symbol" === a(i["default"]) ? function (t) {
            return void 0 === t ? "undefined" : a(t)
        } : function (t) {
            return t && "function" == typeof c["default"] && t.constructor === c["default"] && t !== c["default"].prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
        }
    }, function (t, e, n) {
        t.exports = n(113)
    }, function (t, e, n) {
        var r = n(12),
            o = n(1)("toStringTag"),
            i = "Arguments" == r(function () {
                return arguments
            }()),
            u = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            };
        t.exports = function (t) {
            var e, n, c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = u(e = Object(t), o)) ? n : i ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
        }
    }, function (t, e, n) {
        t.exports = n(2).document && document.documentElement
    }, function (t, e, n) {
        t.exports = !n(4) && !n(10)(function () {
            return 7 != Object.defineProperty(n(24)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        var r = n(12);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(16),
            o = n(5),
            i = n(51),
            u = n(8),
            c = n(7),
            a = n(14),
            f = n(85),
            s = n(19),
            l = n(49),
            p = n(1)("iterator"),
            h = !([].keys && "next" in [].keys()),
            d = function () {
                return this
            };
        t.exports = function (t, e, n, v, y, m, g) {
            f(n, e, v);
            var _, b, x, w = function (t) {
                    if (!h && t in S) return S[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                },
                E = e + " Iterator",
                O = "values" == y,
                j = !1,
                S = t.prototype,
                k = S[p] || S["@@iterator"] || y && S[y],
                P = k || w(y),
                R = y ? O ? w("entries") : P : void 0,
                T = "Array" == e ? S.entries || k : k;
            if (T && (x = l(T.call(new t))) !== Object.prototype && (s(x, E, !0), r || c(x, p) || u(x, p, d)), O && k && "values" !== k.name && (j = !0, P = function () {
                    return k.call(this)
                }), r && !g || !h && !j && S[p] || u(S, p, P), a[e] = P, a[E] = d, y)
                if (_ = {
                        values: O ? P : w("values"),
                        keys: m ? P : w("keys"),
                        entries: R
                    }, g)
                    for (b in _) b in S || i(S, b, _[b]);
                else o(o.P + o.F * (h || j), e, _);
            return _
        }
    }, function (t, e, n) {
        var r = n(17),
            o = n(18),
            i = n(9),
            u = n(32),
            c = n(7),
            a = n(44),
            f = Object.getOwnPropertyDescriptor;
        e.f = n(4) ? f : function (t, e) {
            if (t = i(t), e = u(e, !0), a) try {
                return f(t, e)
            } catch (t) {}
            if (c(t, e)) return o(!r.f.call(t, e), t[e])
        }
    }, function (t, e, n) {
        var r = n(50),
            o = n(25).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return r(t, o)
        }
    }, function (t, e, n) {
        var r = n(7),
            o = n(31),
            i = n(28)("IE_PROTO"),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function (t, e, n) {
        var r = n(7),
            o = n(9),
            i = n(78)(!1),
            u = n(28)("IE_PROTO");
        t.exports = function (t, e) {
            var n, c = o(t),
                a = 0,
                f = [];
            for (n in c) n != u && r(c, n) && f.push(n);
            for (; e.length > a;) r(c, n = e[a++]) && (~i(f, n) || f.push(n));
            return f
        }
    }, function (t, e, n) {
        t.exports = n(8)
    }, function (t, e, n) {
        var r, o, i, u = n(13),
            c = n(81),
            a = n(43),
            f = n(24),
            s = n(2),
            l = s.process,
            p = s.setImmediate,
            h = s.clearImmediate,
            d = s.MessageChannel,
            v = 0,
            y = {},
            m = function () {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var e = y[t];
                    delete y[t], e()
                }
            },
            g = function (t) {
                m.call(t.data)
            };
        p && h || (p = function (t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return y[++v] = function () {
                c("function" == typeof t ? t : Function(t), e)
            }, r(v), v
        }, h = function (t) {
            delete y[t]
        }, "process" == n(12)(l) ? r = function (t) {
            l.nextTick(u(m, t, 1))
        } : d ? (o = new d, i = o.port2, o.port1.onmessage = g, r = u(i.postMessage, i, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (r = function (t) {
            s.postMessage(t + "", "*")
        }, s.addEventListener("message", g, !1)) : r = "onreadystatechange" in f("script") ? function (t) {
            a.appendChild(f("script")).onreadystatechange = function () {
                a.removeChild(this), m.call(t)
            }
        } : function (t) {
            setTimeout(u(m, t, 1), 0)
        }), t.exports = {
            set: p,
            clear: h
        }
    }, function (t, e, n) {
        var r = n(30),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function (t, e) {}, function (t, e, n) {
        "use strict";
        var r = n(99)(!0);
        n(46)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function (t, e, n) {
        n(102);
        for (var r = n(2), o = n(8), i = n(14), u = n(1)("toStringTag"), c = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], a = 0; a < 5; a++) {
            var f = c[a],
                s = r[f],
                l = s && s.prototype;
            l && !l[u] && o(l, u, f), i[f] = i.Array
        }
    }, function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(41),
            i = r(o),
            u = n(21),
            c = r(u),
            a = n(37),
            f = r(a),
            s = n(62),
            l = r(s),
            p = n(36),
            h = r(p),
            d = n(38),
            v = r(d),
            y = n(67),
            m = r(y),
            g = n(39),
            _ = r(g),
            b = n(66),
            x = r(b),
            w = n(35),
            E = r(w),
            O = {
                update: {
                    beforeRepeat: function () {},
                    afterRepeat: function () {}
                },
                check: {
                    checked: function () {}
                }
            },
            j = function (t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, v["default"])(this, e), t.update = (0, h["default"])({}, O.update, t.update), t.check = (0, h["default"])({}, O.check, t.check), (0, m["default"])(this, (e.__proto__ || (0, l["default"])(e)).call(this, t))
                }
                return (0, x["default"])(e, t), (0, _["default"])(e, null, [{
                    key: "ERR_PASSWORD_MISMATCH",
                    get: function () {
                        return "password mismatch!"
                    }
                }, {
                    key: "MODE_UPDATE",
                    get: function () {
                        return "update"
                    }
                }, {
                    key: "MODE_CHECK",
                    get: function () {
                        return "check"
                    }
                }]), (0, _["default"])(e, [{
                    key: "update",
                    value: function () {
                        function t() {
                            return n.apply(this, arguments)
                        }
                        var n = (0, f["default"])(i["default"].mark(function r() {
                            var t, n, o, u;
                            return i["default"].wrap(function (r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (this.mode === e.MODE_UPDATE) {
                                            r.next = 4;
                                            break
                                        }
                                        return r.next = 3, this.cancel();
                                    case 3:
                                        this.mode = e.MODE_UPDATE;
                                    case 4:
                                        return t = this.options.update.beforeRepeat, n = this.options.update.afterRepeat, r.next = 7, this.record();
                                    case 7:
                                        if (o = r.sent, !o.err || o.err.message !== e.ERR_USER_CANCELED) {
                                            r.next = 10;
                                            break
                                        }
                                        return r.abrupt("return", c["default"].resolve(o));
                                    case 10:
                                        if (!o.err) {
                                            r.next = 14;
                                            break
                                        }
                                        return this.update(), t.call(this, o), r.abrupt("return", c["default"].resolve(o));
                                    case 14:
                                        return t.call(this, o), r.next = 17, this.record();
                                    case 17:
                                        if (u = r.sent, !u.err || u.err.message !== e.ERR_USER_CANCELED) {
                                            r.next = 20;
                                            break
                                        }
                                        return r.abrupt("return", c["default"].resolve(u));
                                    case 20:
                                        return u.err || o.records === u.records || (u.err = new Error(e.ERR_PASSWORD_MISMATCH)), this.update(), n.call(this, u), r.abrupt("return", c["default"].resolve(u));
                                    case 24:
                                    case "end":
                                        return r.stop()
                                }
                            }, r, this)
                        }));
                        return t
                    }()
                }, {
                    key: "check",
                    value: function () {
                        function t(t) {
                            return n.apply(this, arguments)
                        }
                        var n = (0, f["default"])(i["default"].mark(function r(t) {
                            var n, o;
                            return i["default"].wrap(function (r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (this.mode === e.MODE_CHECK) {
                                            r.next = 4;
                                            break
                                        }
                                        return r.next = 3, this.cancel();
                                    case 3:
                                        this.mode = e.MODE_CHECK;
                                    case 4:
                                        return n = this.options.check.checked, r.next = 7, this.record();
                                    case 7:
                                        if (o = r.sent, !o.err || o.err.message !== e.ERR_USER_CANCELED) {
                                            r.next = 10;
                                            break
                                        }
                                        return r.abrupt("return", c["default"].resolve(o));
                                    case 10:
                                        return o.err || t === o.records || (o.err = new Error(e.ERR_PASSWORD_MISMATCH)), n.call(this, o), this.check(t), r.abrupt("return", c["default"].resolve(o));
                                    case 14:
                                    case "end":
                                        return r.stop()
                                }
                            }, r, this)
                        }));
                        return t
                    }()
                }]), e
            }(E["default"]);
        e["default"] = j
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Locker = e.Recorder = void 0;
        var o = n(35),
            i = r(o),
            u = n(58),
            c = r(u);
        e.Recorder = i["default"], e.Locker = c["default"]
    }, function (t, e, n) {
        t.exports = {
            "default": n(69),
            __esModule: !0
        }
    }, function (t, e, n) {
        t.exports = {
            "default": n(70),
            __esModule: !0
        }
    }, function (t, e, n) {
        t.exports = {
            "default": n(71),
            __esModule: !0
        }
    }, function (t, e, n) {
        t.exports = {
            "default": n(72),
            __esModule: !0
        }
    }, function (t, e, n) {
        t.exports = {
            "default": n(74),
            __esModule: !0
        }
    }, function (t, e, n) {
        t.exports = {
            "default": n(75),
            __esModule: !0
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        e.__esModule = !0;
        var o = n(63),
            i = r(o),
            u = n(60),
            c = r(u),
            a = n(40),
            f = r(a);
        e["default"] = function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, f["default"])(e)));
            t.prototype = (0, c["default"])(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (i["default"] ? (0, i["default"])(t, e) : t.__proto__ = e)
        }
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(40),
            o = function (t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }(r);
        e["default"] = function (t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== (void 0 === e ? "undefined" : (0, o["default"])(e)) && "function" != typeof e ? t : e
        }
    }, function (t, e, n) {
        n(103), t.exports = n(0).Object.assign
    }, function (t, e, n) {
        n(104);
        var r = n(0).Object;
        t.exports = function (t, e) {
            return r.create(t, e)
        }
    }, function (t, e, n) {
        n(105);
        var r = n(0).Object;
        t.exports = function (t, e, n) {
            return r.defineProperty(t, e, n)
        }
    }, function (t, e, n) {
        n(106), t.exports = n(0).Object.getPrototypeOf
    }, function (t, e, n) {
        n(107), t.exports = n(0).Object.setPrototypeOf
    }, function (t, e, n) {
        n(54), n(55), n(56), n(108), t.exports = n(0).Promise
    }, function (t, e, n) {
        n(109), n(54), n(110), n(111), t.exports = n(0).Symbol
    }, function (t, e, n) {
        n(55), n(56), t.exports = n(34).f("iterator")
    }, function (t, e) {
        t.exports = function () {}
    }, function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function (t, e, n) {
        var r = n(9),
            o = n(53),
            i = n(100);
        t.exports = function (t) {
            return function (e, n, u) {
                var c, a = r(e),
                    f = o(a.length),
                    s = i(u, f);
                if (t && n != n) {
                    for (; f > s;)
                        if ((c = a[s++]) != c) return !0
                } else
                    for (; f > s; s++)
                        if ((t || s in a) && a[s] === n) return t || s || 0;
                return !t && -1
            }
        }
    }, function (t, e, n) {
        var r = n(15),
            o = n(27),
            i = n(17);
        t.exports = function (t) {
            var e = r(t),
                n = o.f;
            if (n)
                for (var u, c = n(t), a = i.f, f = 0; c.length > f;) a.call(t, u = c[f++]) && e.push(u);
            return e
        }
    }, function (t, e, n) {
        var r = n(13),
            o = n(84),
            i = n(82),
            u = n(3),
            c = n(53),
            a = n(101),
            f = {},
            s = {},
            e = t.exports = function (t, e, n, l, p) {
                var h, d, v, y, m = p ? function () {
                        return t
                    } : a(t),
                    g = r(n, l, e ? 2 : 1),
                    _ = 0;
                if ("function" != typeof m) throw TypeError(t + " is not iterable!");
                if (i(m)) {
                    for (h = c(t.length); h > _; _++)
                        if ((y = e ? g(u(d = t[_])[0], d[1]) : g(t[_])) === f || y === s) return y
                } else
                    for (v = m.call(t); !(d = v.next()).done;)
                        if ((y = o(v, g, d.value, e)) === f || y === s) return y
            };
        e.BREAK = f, e.RETURN = s
    }, function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function (t, e, n) {
        var r = n(14),
            o = n(1)("iterator"),
            i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function (t, e, n) {
        var r = n(12);
        t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
    }, function (t, e, n) {
        var r = n(3);
        t.exports = function (t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t["return"];
                throw void 0 !== i && r(i.call(t)), e
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(26),
            o = n(18),
            i = n(19),
            u = {};
        n(8)(u, n(1)("iterator"), function () {
            return this
        }), t.exports = function (t, e, n) {
            t.prototype = r(u, {
                next: o(1, n)
            }), i(t, e + " Iterator")
        }
    }, function (t, e, n) {
        var r = n(1)("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i["return"] = function () {
                o = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    u = i[r]();
                u.next = function () {
                    return {
                        done: n = !0
                    }
                }, i[r] = function () {
                    return u
                }, t(i)
            } catch (t) {}
            return n
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function (t, e, n) {
        var r = n(15),
            o = n(9);
        t.exports = function (t, e) {
            for (var n, i = o(t), u = r(i), c = u.length, a = 0; c > a;)
                if (i[n = u[a++]] === e) return n
        }
    }, function (t, e, n) {
        var r = n(20)("meta"),
            o = n(11),
            i = n(7),
            u = n(6).f,
            c = 0,
            a = Object.isExtensible || function () {
                return !0
            },
            f = !n(10)(function () {
                return a(Object.preventExtensions({}))
            }),
            s = function (t) {
                u(t, r, {
                    value: {
                        i: "O" + ++c,
                        w: {}
                    }
                })
            },
            l = function (t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!a(t)) return "F";
                    if (!e) return "E";
                    s(t)
                }
                return t[r].i
            },
            p = function (t, e) {
                if (!i(t, r)) {
                    if (!a(t)) return !0;
                    if (!e) return !1;
                    s(t)
                }
                return t[r].w
            },
            h = function (t) {
                return f && d.NEED && a(t) && !i(t, r) && s(t), t
            },
            d = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: l,
                getWeak: p,
                onFreeze: h
            }
    }, function (t, e, n) {
        var r = n(2),
            o = n(52).set,
            i = r.MutationObserver || r.WebKitMutationObserver,
            u = r.process,
            c = r.Promise,
            a = "process" == n(12)(u);
        t.exports = function () {
            var t, e, n, f = function () {
                var r, o;
                for (a && (r = u.domain) && r.exit(); t;) {
                    o = t.fn, t = t.next;
                    try {
                        o()
                    } catch (r) {
                        throw t ? n() : e = void 0, r
                    }
                }
                e = void 0, r && r.enter()
            };
            if (a) n = function () {
                u.nextTick(f)
            };
            else if (i) {
                var s = !0,
                    l = document.createTextNode("");
                new i(f).observe(l, {
                    characterData: !0
                }), n = function () {
                    l.data = s = !s
                }
            } else if (c && c.resolve) {
                var p = c.resolve();
                n = function () {
                    p.then(f)
                }
            } else n = function () {
                o.call(r, f)
            };
            return function (r) {
                var o = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = o), t || (t = o, n()), e = o
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(15),
            o = n(27),
            i = n(17),
            u = n(31),
            c = n(45),
            a = Object.assign;
        t.exports = !a || n(10)(function () {
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function (t) {
                e[t] = t
            }), 7 != a({}, t)[n] || Object.keys(a({}, e)).join("") != r
        }) ? function (t, e) {
            for (var n = u(t), a = arguments.length, f = 1, s = o.f, l = i.f; a > f;)
                for (var p, h = c(arguments[f++]), d = s ? r(h).concat(s(h)) : r(h), v = d.length, y = 0; v > y;) l.call(h, p = d[y++]) && (n[p] = h[p]);
            return n
        } : a
    }, function (t, e, n) {
        var r = n(6),
            o = n(3),
            i = n(15);
        t.exports = n(4) ? Object.defineProperties : function (t, e) {
            o(t);
            for (var n, u = i(e), c = u.length, a = 0; c > a;) r.f(t, n = u[a++], e[n]);
            return t
        }
    }, function (t, e, n) {
        var r = n(9),
            o = n(48).f,
            i = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            c = function (t) {
                try {
                    return o(t)
                } catch (t) {
                    return u.slice()
                }
            };
        t.exports.f = function (t) {
            return u && "[object Window]" == i.call(t) ? c(t) : o(r(t))
        }
    }, function (t, e, n) {
        var r = n(5),
            o = n(0),
            i = n(10);
        t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t],
                u = {};
            u[t] = e(n), r(r.S + r.F * i(function () {
                n(1)
            }), "Object", u)
        }
    }, function (t, e, n) {
        var r = n(8);
        t.exports = function (t, e, n) {
            for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
            return t
        }
    }, function (t, e, n) {
        var r = n(11),
            o = n(3),
            i = function (t, e) {
                if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
                try {
                    r = n(13)(Function.call, n(47).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function (t, n) {
                    return i(t, n), e ? t.__proto__ = n : r(t, n), t
                }
            }({}, !1) : void 0),
            check: i
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(2),
            o = n(0),
            i = n(6),
            u = n(4),
            c = n(1)("species");
        t.exports = function (t) {
            var e = "function" == typeof o[t] ? o[t] : r[t];
            u && e && !e[c] && i.f(e, c, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    }, function (t, e, n) {
        var r = n(3),
            o = n(22),
            i = n(1)("species");
        t.exports = function (t, e) {
            var n, u = r(t).constructor;
            return void 0 === u || void 0 == (n = r(u)[i]) ? e : o(n)
        }
    }, function (t, e, n) {
        var r = n(30),
            o = n(23);
        t.exports = function (t) {
            return function (e, n) {
                var i, u, c = String(o(e)),
                    a = r(n),
                    f = c.length;
                return a < 0 || a >= f ? t ? "" : void 0 : (i = c.charCodeAt(a), i < 55296 || i > 56319 || a + 1 === f || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i : t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    }, function (t, e, n) {
        var r = n(30),
            o = Math.max,
            i = Math.min;
        t.exports = function (t, e) {
            return t = r(t), t < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function (t, e, n) {
        var r = n(42),
            o = n(1)("iterator"),
            i = n(14);
        t.exports = n(0).getIteratorMethod = function (t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(76),
            o = n(87),
            i = n(14),
            u = n(9);
        t.exports = n(46)(Array, "Array", function (t, e) {
            this._t = u(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function (t, e, n) {
        var r = n(5);
        r(r.S + r.F, "Object", {
            assign: n(91)
        })
    }, function (t, e, n) {
        var r = n(5);
        r(r.S, "Object", {
            create: n(26)
        })
    }, function (t, e, n) {
        var r = n(5);
        r(r.S + r.F * !n(4), "Object", {
            defineProperty: n(6).f
        })
    }, function (t, e, n) {
        var r = n(31),
            o = n(49);
        n(94)("getPrototypeOf", function () {
            return function (t) {
                return o(r(t))
            }
        })
    }, function (t, e, n) {
        var r = n(5);
        r(r.S, "Object", {
            setPrototypeOf: n(96).set
        })
    }, function (t, e, n) {
        "use strict";
        var r, o, i, u = n(16),
            c = n(2),
            a = n(13),
            f = n(42),
            s = n(5),
            l = n(11),
            p = n(22),
            h = n(77),
            d = n(80),
            v = n(98),
            y = n(52).set,
            m = n(90)(),
            g = c.TypeError,
            _ = c.process,
            b = c.Promise,
            _ = c.process,
            x = "process" == f(_),
            w = function () {},
            E = !! function () {
                try {
                    var t = b.resolve(1),
                        e = (t.constructor = {})[n(1)("species")] = function (t) {
                            t(w, w)
                        };
                    return (x || "function" == typeof PromiseRejectionEvent) && t.then(w) instanceof e
                } catch (t) {}
            }(),
            O = function (t, e) {
                return t === e || t === b && e === i
            },
            j = function (t) {
                var e;
                return !(!l(t) || "function" != typeof (e = t.then)) && e
            },
            S = function (t) {
                return O(b, t) ? new k(t) : new o(t)
            },
            k = o = function (t) {
                var e, n;
                this.promise = new t(function (t, r) {
                    if (void 0 !== e || void 0 !== n) throw g("Bad Promise constructor");
                    e = t, n = r
                }), this.resolve = p(e), this.reject = p(n)
            },
            P = function (t) {
                try {
                    t()
                } catch (t) {
                    return {
                        error: t
                    }
                }
            },
            R = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    m(function () {
                        for (var r = t._v, o = 1 == t._s, i = 0; n.length > i;) ! function (e) {
                            var n, i, u = o ? e.ok : e.fail,
                                c = e.resolve,
                                a = e.reject,
                                f = e.domain;
                            try {
                                u ? (o || (2 == t._h && C(t), t._h = 1), !0 === u ? n = r : (f && f.enter(), n = u(r), f && f.exit()), n === e.promise ? a(g("Promise-chain cycle")) : (i = j(n)) ? i.call(n, c, a) : c(n)) : a(r)
                            } catch (t) {
                                a(t)
                            }
                        }(n[i++]);
                        t._c = [], t._n = !1, e && !t._h && T(t)
                    })
                }
            },
            T = function (t) {
                y.call(c, function () {
                    var e, n, r, o = t._v;
                    if (M(t) && (e = P(function () {
                            x ? _.emit("unhandledRejection", o, t) : (n = c.onunhandledrejection) ? n({
                                promise: t,
                                reason: o
                            }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
                        }), t._h = x || M(t) ? 2 : 1), t._a = void 0, e) throw e.error
                })
            },
            M = function (t) {
                if (1 == t._h) return !1;
                for (var e, n = t._a || t._c, r = 0; n.length > r;)
                    if (e = n[r++], e.fail || !M(e.promise)) return !1;
                return !0
            },
            C = function (t) {
                y.call(c, function () {
                    var e;
                    x ? _.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            L = function (t) {
                var e = this;
                e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), R(e, !0))
            },
            A = function (t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw g("Promise can't be resolved itself");
                        (e = j(t)) ? m(function () {
                            var r = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                e.call(t, a(A, r, 1), a(L, r, 1))
                            } catch (t) {
                                L.call(r, t)
                            }
                        }): (n._v = t, n._s = 1, R(n, !1))
                    } catch (t) {
                        L.call({
                            _w: n,
                            _d: !1
                        }, t)
                    }
                }
            };
        E || (b = function (t) {
            h(this, b, "Promise", "_h"), p(t), r.call(this);
            try {
                t(a(A, this, 1), a(L, this, 1))
            } catch (t) {
                L.call(this, t)
            }
        }, r = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, r.prototype = n(95)(b.prototype, {
            then: function (t, e) {
                var n = S(v(this, b));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = x ? _.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && R(this, !1), n.promise
            },
            "catch": function (t) {
                return this.then(void 0, t)
            }
        }), k = function () {
            var t = new r;
            this.promise = t, this.resolve = a(A, t, 1), this.reject = a(L, t, 1)
        }), s(s.G + s.W + s.F * !E, {
            Promise: b
        }), n(19)(b, "Promise"), n(97)("Promise"), i = n(0).Promise, s(s.S + s.F * !E, "Promise", {
            reject: function (t) {
                var e = S(this);
                return (0, e.reject)(t), e.promise
            }
        }), s(s.S + s.F * (u || !E), "Promise", {
            resolve: function (t) {
                if (t instanceof b && O(t.constructor, this)) return t;
                var e = S(this);
                return (0, e.resolve)(t), e.promise
            }
        }), s(s.S + s.F * !(E && n(86)(function (t) {
            b.all(t)["catch"](w)
        })), "Promise", {
            all: function (t) {
                var e = this,
                    n = S(e),
                    r = n.resolve,
                    o = n.reject,
                    i = P(function () {
                        var n = [],
                            i = 0,
                            u = 1;
                        d(t, !1, function (t) {
                            var c = i++,
                                a = !1;
                            n.push(void 0), u++, e.resolve(t).then(function (t) {
                                a || (a = !0, n[c] = t, --u || r(n))
                            }, o)
                        }), --u || r(n)
                    });
                return i && o(i.error), n.promise
            },
            race: function (t) {
                var e = this,
                    n = S(e),
                    r = n.reject,
                    o = P(function () {
                        d(t, !1, function (t) {
                            e.resolve(t).then(n.resolve, r)
                        })
                    });
                return o && r(o.error), n.promise
            }
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(2),
            o = n(7),
            i = n(4),
            u = n(5),
            c = n(51),
            a = n(89).KEY,
            f = n(10),
            s = n(29),
            l = n(19),
            p = n(20),
            h = n(1),
            d = n(34),
            v = n(33),
            y = n(88),
            m = n(79),
            g = n(83),
            _ = n(3),
            b = n(9),
            x = n(32),
            w = n(18),
            E = n(26),
            O = n(93),
            j = n(47),
            S = n(6),
            k = n(15),
            P = j.f,
            R = S.f,
            T = O.f,
            M = r.Symbol,
            C = r.JSON,
            L = C && C.stringify,
            A = h("_hidden"),
            N = h("toPrimitive"),
            F = {}.propertyIsEnumerable,
            D = s("symbol-registry"),
            I = s("symbols"),
            G = s("op-symbols"),
            U = Object.prototype,
            H = "function" == typeof M,
            W = r.QObject,
            K = !W || !W.prototype || !W.prototype.findChild,
            B = i && f(function () {
                return 7 != E(R({}, "a", {
                    get: function () {
                        return R(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function (t, e, n) {
                var r = P(U, e);
                r && delete U[e], R(t, e, n), r && t !== U && R(U, e, r)
            } : R,
            Y = function (t) {
                var e = I[t] = E(M.prototype);
                return e._k = t, e
            },
            J = H && "symbol" == typeof M.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof M
            },
            q = function (t, e, n) {
                return t === U && q(G, e, n), _(t), e = x(e, !0), _(n), o(I, e) ? (n.enumerable ? (o(t, A) && t[A][e] && (t[A][e] = !1), n = E(n, {
                    enumerable: w(0, !1)
                })) : (o(t, A) || R(t, A, w(1, {})), t[A][e] = !0), B(t, e, n)) : R(t, e, n)
            },
            z = function (t, e) {
                _(t);
                for (var n, r = m(e = b(e)), o = 0, i = r.length; i > o;) q(t, n = r[o++], e[n]);
                return t
            },
            Q = function (t, e) {
                return void 0 === e ? E(t) : z(E(t), e)
            },
            X = function (t) {
                var e = F.call(this, t = x(t, !0));
                return !(this === U && o(I, t) && !o(G, t)) && (!(e || !o(this, t) || !o(I, t) || o(this, A) && this[A][t]) || e)
            },
            V = function (t, e) {
                if (t = b(t), e = x(e, !0), t !== U || !o(I, e) || o(G, e)) {
                    var n = P(t, e);
                    return !n || !o(I, e) || o(t, A) && t[A][e] || (n.enumerable = !0), n
                }
            },
            Z = function (t) {
                for (var e, n = T(b(t)), r = [], i = 0; n.length > i;) o(I, e = n[i++]) || e == A || e == a || r.push(e);
                return r
            },
            $ = function (t) {
                for (var e, n = t === U, r = T(n ? G : b(t)), i = [], u = 0; r.length > u;) !o(I, e = r[u++]) || n && !o(U, e) || i.push(I[e]);
                return i
            };
        H || (M = function () {
            if (this instanceof M) throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0),
                e = function (n) {
                    this === U && e.call(G, n), o(this, A) && o(this[A], t) && (this[A][t] = !1), B(this, t, w(1, n))
                };
            return i && K && B(U, t, {
                configurable: !0,
                set: e
            }), Y(t)
        }, c(M.prototype, "toString", function () {
            return this._k
        }), j.f = V, S.f = q, n(48).f = O.f = Z, n(17).f = X, n(27).f = $, i && !n(16) && c(U, "propertyIsEnumerable", X, !0), d.f = function (t) {
            return Y(h(t))
        }), u(u.G + u.W + u.F * !H, {
            Symbol: M
        });
        for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) h(tt[et++]);
        for (var tt = k(h.store), et = 0; tt.length > et;) v(tt[et++]);
        u(u.S + u.F * !H, "Symbol", {
            "for": function (t) {
                return o(D, t += "") ? D[t] : D[t] = M(t)
            },
            keyFor: function (t) {
                if (J(t)) return y(D, t);
                throw TypeError(t + " is not a symbol!")
            },
            useSetter: function () {
                K = !0
            },
            useSimple: function () {
                K = !1
            }
        }), u(u.S + u.F * !H, "Object", {
            create: Q,
            defineProperty: q,
            defineProperties: z,
            getOwnPropertyDescriptor: V,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: $
        }), C && u(u.S + u.F * (!H || f(function () {
            var t = M();
            return "[null]" != L([t]) || "{}" != L({
                a: t
            }) || "{}" != L(Object(t))
        })), "JSON", {
            stringify: function (t) {
                if (void 0 !== t && !J(t)) {
                    for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                    return e = r[1], "function" == typeof e && (n = e), !n && g(e) || (e = function (t, e) {
                        if (n && (e = n.call(this, t, e)), !J(e)) return e
                    }), r[1] = e, L.apply(C, r)
                }
            }
        }), M.prototype[N] || n(8)(M.prototype, N, M.prototype.valueOf), l(M, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
    }, function (t, e, n) {
        n(33)("asyncIterator")
    }, function (t, e, n) {
        n(33)("observable")
    }, function (t, e) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(t) {
            if (s === setTimeout) return setTimeout(t, 0);
            if ((s === n || !s) && setTimeout) return s = setTimeout, setTimeout(t, 0);
            try {
                return s(t, 0)
            } catch (e) {
                try {
                    return s.call(null, t, 0)
                } catch (e) {
                    return s.call(this, t, 0)
                }
            }
        }

        function i(t) {
            if (l === clearTimeout) return clearTimeout(t);
            if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
            try {
                return l(t)
            } catch (e) {
                try {
                    return l.call(null, t)
                } catch (e) {
                    return l.call(this, t)
                }
            }
        }

        function u() {
            v && h && (v = !1, h.length ? d = h.concat(d) : y = -1, d.length && c())
        }

        function c() {
            if (!v) {
                var t = o(u);
                v = !0;
                for (var e = d.length; e;) {
                    for (h = d, d = []; ++y < e;) h && h[y].run();
                    y = -1, e = d.length
                }
                h = null, v = !1, i(t)
            }
        }

        function a(t, e) {
            this.fun = t, this.array = e
        }

        function f() {}
        var s, l, p = t.exports = {};
        ! function () {
            try {
                s = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                s = n
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                l = r
            }
        }();
        var h, d = [],
            v = !1,
            y = -1;
        p.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            d.push(new a(t, e)), 1 !== d.length || v || o(c)
        }, a.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = f, p.addListener = f, p.once = f, p.off = f, p.removeListener = f, p.removeAllListeners = f, p.emit = f, p.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, p.cwd = function () {
            return "/"
        }, p.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, p.umask = function () {
            return 0
        }
    }, function (t, e, n) {
        (function (e) {
            var r = "object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this,
                o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
                i = o && r.regeneratorRuntime;
            if (r.regeneratorRuntime = void 0, t.exports = n(114), o) r.regeneratorRuntime = i;
            else try {
                delete r.regeneratorRuntime
            } catch (t) {
                r.regeneratorRuntime = void 0
            }
        }).call(e, n(57))
    }, function (t, e, n) {
        (function (e, n) {
            ! function (e) {
                "use strict";

                function r(t, e, n, r) {
                    var o = e && e.prototype instanceof i ? e : i,
                        u = Object.create(o.prototype),
                        c = new d(r || []);
                    return u._invoke = s(t, n, c), u
                }

                function o(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }

                function i() {}

                function u() {}

                function c() {}

                function a(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        t[e] = function (t) {
                            return this._invoke(e, t)
                        }
                    })
                }

                function f(t) {
                    function e(n, r, i, u) {
                        var c = o(t[n], t, r);
                        if ("throw" !== c.type) {
                            var a = c.arg,
                                f = a.value;
                            return f && "object" == typeof f && _.call(f, "__await") ? Promise.resolve(f.__await).then(function (t) {
                                e("next", t, i, u)
                            }, function (t) {
                                e("throw", t, i, u)
                            }) : Promise.resolve(f).then(function (t) {
                                a.value = t, i(a)
                            }, u)
                        }
                        u(c.arg)
                    }

                    function r(t, n) {
                        function r() {
                            return new Promise(function (r, o) {
                                e(t, n, r, o)
                            })
                        }
                        return i = i ? i.then(r, r) : r()
                    }
                    "object" == typeof n && n.domain && (e = n.domain.bind(e));
                    var i;
                    this._invoke = r
                }

                function s(t, e, n) {
                    var r = j;
                    return function (i, u) {
                        if (r === k) throw new Error("Generator is already running");
                        if (r === P) {
                            if ("throw" === i) throw u;
                            return y()
                        }
                        for (n.method = i, n.arg = u;;) {
                            var c = n.delegate;
                            if (c) {
                                var a = l(c, n);
                                if (a) {
                                    if (a === R) continue;
                                    return a
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === j) throw r = P, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = k;
                            var f = o(t, e, n);
                            if ("normal" === f.type) {
                                if (r = n.done ? P : S, f.arg === R) continue;
                                return {
                                    value: f.arg,
                                    done: n.done
                                }
                            }
                            "throw" === f.type && (r = P, n.method = "throw", n.arg = f.arg)
                        }
                    }
                }

                function l(t, e) {
                    var n = t.iterator[e.method];
                    if (n === m) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator["return"] && (e.method = "return", e.arg = m, l(t, e), "throw" === e.method)) return R;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return R
                    }
                    var r = o(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, R;
                    var i = r.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = m), e.delegate = null, R) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, R)
                }

                function p(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function h(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function d(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(p, this), this.reset(!0)
                }

                function v(t) {
                    if (t) {
                        var e = t[x];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                r = function o() {
                                    for (; ++n < t.length;)
                                        if (_.call(t, n)) return o.value = t[n], o.done = !1, o;
                                    return o.value = m, o.done = !0, o
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: y
                    }
                }

                function y() {
                    return {
                        value: m,
                        done: !0
                    }
                }
                var m, g = Object.prototype,
                    _ = g.hasOwnProperty,
                    b = "function" == typeof Symbol ? Symbol : {},
                    x = b.iterator || "@@iterator",
                    w = b.toStringTag || "@@toStringTag",
                    E = "object" == typeof t,
                    O = e.regeneratorRuntime;
                if (O) return void(E && (t.exports = O));
                O = e.regeneratorRuntime = E ? t.exports : {}, O.wrap = r;
                var j = "suspendedStart",
                    S = "suspendedYield",
                    k = "executing",
                    P = "completed",
                    R = {},
                    T = {};
                T[x] = function () {
                    return this
                };
                var M = Object.getPrototypeOf,
                    C = M && M(M(v([])));
                C && C !== g && _.call(C, x) && (T = C);
                var L = c.prototype = i.prototype = Object.create(T);
                u.prototype = L.constructor = c, c.constructor = u, c[w] = u.displayName = "GeneratorFunction", O.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === u || "GeneratorFunction" === (e.displayName || e.name))
                }, O.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c, w in t || (t[w] = "GeneratorFunction")), t.prototype = Object.create(L), t
                }, O.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, a(f.prototype), O.AsyncIterator = f, O.async = function (t, e, n, o) {
                    var i = new f(r(t, e, n, o));
                    return O.isGeneratorFunction(e) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, a(L), L[w] = "Generator", L.toString = function () {
                    return "[object Generator]"
                }, O.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, O.values = v, d.prototype = {
                    constructor: d,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.method = "next", this.arg = m, this.tryEntries.forEach(h), !t)
                            for (var e in this) "t" === e.charAt(0) && _.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = m)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0],
                            e = t.completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        function e(e, r) {
                            return i.type = "throw", i.arg = t, n.next = e, r && (n.method = "next", n.arg = m), !!r
                        }
                        if (this.done) throw t;
                        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return e("end");
                            if (o.tryLoc <= this.prev) {
                                var u = _.call(o, "catchLoc"),
                                    c = _.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && _.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, R) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), R
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), h(n), R
                        }
                    },
                    "catch": function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    h(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, n) {
                        return this.delegate = {
                            iterator: v(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = m), R
                    }
                }
            }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
        }).call(e, n(57), n(112))
    }])
});