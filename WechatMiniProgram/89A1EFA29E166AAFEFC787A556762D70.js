var t = require("@babel/runtime/helpers/typeof.js");
!(function (r) {
  var e = Object.prototype,
    n = e.hasOwnProperty,
    o = "function" == typeof Symbol ? Symbol : {},
    i = o.iterator || "@@iterator",
    a = o.asyncIterator || "@@asyncIterator",
    c = o.toStringTag || "@@toStringTag",
    u = "object" === ("undefined" == typeof module ? "undefined" : t(module)),
    h = r.regeneratorRuntime;
  if (h) u && (module.exports = h);
  else {
    (h = r.regeneratorRuntime = u ? module.exports : {}).wrap = y;
    var s = {},
      f = {};
    f[i] = function () {
      return this;
    };
    var l = Object.getPrototypeOf,
      p = l && l(l(O([])));
    p && p !== e && n.call(p, i) && (f = p);
    var d = (w.prototype = g.prototype = Object.create(f));
    (m.prototype = d.constructor = w),
      (w.constructor = m),
      (w[c] = m.displayName = "GeneratorFunction"),
      (h.isGeneratorFunction = function (t) {
        var r = "function" == typeof t && t.constructor;
        return (
          !!r && (r === m || "GeneratorFunction" === (r.displayName || r.name))
        );
      }),
      (h.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, w)
            : ((t.__proto__ = w), c in t || (t[c] = "GeneratorFunction")),
          (t.prototype = Object.create(d)),
          t
        );
      }),
      (h.awrap = function (t) {
        return { __await: t };
      }),
      x(L.prototype),
      (L.prototype[a] = function () {
        return this;
      }),
      (h.AsyncIterator = L),
      (h.async = function (t, r, e, n) {
        var o = new L(y(t, r, e, n));
        return h.isGeneratorFunction(r)
          ? o
          : o.next().then(function (t) {
              return t.done ? t.value : o.next();
            });
      }),
      x(d),
      (d[c] = "Generator"),
      (d[i] = function () {
        return this;
      }),
      (d.toString = function () {
        return "[object Generator]";
      }),
      (h.keys = function (t) {
        var r = [];
        for (var e in t) r.push(e);
        return (
          r.reverse(),
          function e() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in t) return (e.value = n), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (h.values = O),
      (j.prototype = {
        constructor: j,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(_),
            !t)
          )
            for (var r in this)
              "t" === r.charAt(0) &&
                n.call(this, r) &&
                !isNaN(+r.slice(1)) &&
                (this[r] = void 0);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var r = this;
          function e(e, n) {
            return (
              (a.type = "throw"),
              (a.arg = t),
              (r.next = e),
              n && ((r.method = "next"), (r.arg = void 0)),
              !!n
            );
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              a = i.completion;
            if ("root" === i.tryLoc) return e("end");
            if (i.tryLoc <= this.prev) {
              var c = n.call(i, "catchLoc"),
                u = n.call(i, "finallyLoc");
              if (c && u) {
                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return e(i.finallyLoc);
              } else if (c) {
                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
              } else {
                if (!u)
                  throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return e(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, r) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var o = this.tryEntries[e];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === t || "continue" === t) &&
            i.tryLoc <= r &&
            r <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = r),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), s)
              : this.complete(a)
          );
        },
        complete: function (t, r) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === t.type && r && (this.next = r),
            s
          );
        },
        finish: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.finallyLoc === t)
              return this.complete(e.completion, e.afterLoc), _(e), s;
          }
        },
        catch: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.tryLoc === t) {
              var n = e.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                _(e);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (t, r, e) {
          return (
            (this.delegate = { iterator: O(t), resultName: r, nextLoc: e }),
            "next" === this.method && (this.arg = void 0),
            s
          );
        },
      });
  }
  function y(t, r, e, n) {
    var o = r && r.prototype instanceof g ? r : g,
      i = Object.create(o.prototype),
      a = new j(n || []);
    return (
      (i._invoke = (function (t, r, e) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n)
            throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return k();
          }
          for (e.method = o, e.arg = i; ; ) {
            var a = e.delegate;
            if (a) {
              var c = E(a, e);
              if (c) {
                if (c === s) continue;
                return c;
              }
            }
            if ("next" === e.method) e.sent = e._sent = e.arg;
            else if ("throw" === e.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
              e.dispatchException(e.arg);
            } else "return" === e.method && e.abrupt("return", e.arg);
            n = "executing";
            var u = v(t, r, e);
            if ("normal" === u.type) {
              if (((n = e.done ? "completed" : "suspendedYield"), u.arg === s))
                continue;
              return { value: u.arg, done: e.done };
            }
            "throw" === u.type &&
              ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
          }
        };
      })(t, e, a)),
      i
    );
  }
  function v(t, r, e) {
    try {
      return { type: "normal", arg: t.call(r, e) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  function g() {}
  function m() {}
  function w() {}
  function x(t) {
    ["next", "throw", "return"].forEach(function (r) {
      t[r] = function (t) {
        return this._invoke(r, t);
      };
    });
  }
  function L(r) {
    var e;
    this._invoke = function (o, i) {
      function a() {
        return new Promise(function (e, a) {
          !(function e(o, i, a, c) {
            var u = v(r[o], r, i);
            if ("throw" !== u.type) {
              var h = u.arg,
                s = h.value;
              return s && "object" === t(s) && n.call(s, "__await")
                ? Promise.resolve(s.__await).then(
                    function (t) {
                      e("next", t, a, c);
                    },
                    function (t) {
                      e("throw", t, a, c);
                    }
                  )
                : Promise.resolve(s).then(function (t) {
                    (h.value = t), a(h);
                  }, c);
            }
            c(u.arg);
          })(o, i, e, a);
        });
      }
      return (e = e ? e.then(a, a) : a());
    };
  }
  function E(t, r) {
    var e = t.iterator[r.method];
    if (void 0 === e) {
      if (((r.delegate = null), "throw" === r.method)) {
        if (
          t.iterator.return &&
          ((r.method = "return"),
          (r.arg = void 0),
          E(t, r),
          "throw" === r.method)
        )
          return s;
        (r.method = "throw"),
          (r.arg = new TypeError(
            "The iterator does not provide a 'throw' method"
          ));
      }
      return s;
    }
    var n = v(e, t.iterator, r.arg);
    if ("throw" === n.type)
      return (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), s;
    var o = n.arg;
    return o
      ? o.done
        ? ((r[t.resultName] = o.value),
          (r.next = t.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
          (r.delegate = null),
          s)
        : o
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        s);
  }
  function b(t) {
    var r = { tryLoc: t[0] };
    1 in t && (r.catchLoc = t[1]),
      2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
      this.tryEntries.push(r);
  }
  function _(t) {
    var r = t.completion || {};
    (r.type = "normal"), delete r.arg, (t.completion = r);
  }
  function j(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(b, this),
      this.reset(!0);
  }
  function O(t) {
    if (t) {
      var r = t[i];
      if (r) return r.call(t);
      if ("function" == typeof t.next) return t;
      if (!isNaN(t.length)) {
        var e = -1,
          o = function r() {
            for (; ++e < t.length; )
              if (n.call(t, e)) return (r.value = t[e]), (r.done = !1), r;
            return (r.value = void 0), (r.done = !0), r;
          };
        return (o.next = o);
      }
    }
    return { next: k };
  }
  function k() {
    return { value: void 0, done: !0 };
  }
})(
  (function () {
    return this;
  })() || Function("return this")()
);
