parcelRequire = (function(e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function(r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function(e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function(r, t) {
      e[r] = [
        function(e, r) {
          r.exports = t;
        },
        {}
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function() {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    pBGv: [
      function(require, module, exports) {
        var t,
          e,
          n = (module.exports = {});
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === r || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        function u(t) {
          if (e === clearTimeout) return clearTimeout(t);
          if ((e === o || !e) && clearTimeout)
            return (e = clearTimeout), clearTimeout(t);
          try {
            return e(t);
          } catch (n) {
            try {
              return e.call(null, t);
            } catch (n) {
              return e.call(this, t);
            }
          }
        }
        !(function() {
          try {
            t = "function" == typeof setTimeout ? setTimeout : r;
          } catch (n) {
            t = r;
          }
          try {
            e = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (n) {
            e = o;
          }
        })();
        var c,
          s = [],
          l = !1,
          a = -1;
        function f() {
          l &&
            c &&
            ((l = !1),
            c.length ? (s = c.concat(s)) : (a = -1),
            s.length && h());
        }
        function h() {
          if (!l) {
            var t = i(f);
            l = !0;
            for (var e = s.length; e; ) {
              for (c = s, s = []; ++a < e; ) c && c[a].run();
              (a = -1), (e = s.length);
            }
            (c = null), (l = !1), u(t);
          }
        }
        function m(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function(t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          s.push(new m(t, e)), 1 !== s.length || l || i(h);
        }),
          (m.prototype.run = function() {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function(t) {
            return [];
          }),
          (n.binding = function(t) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function() {
            return "/";
          }),
          (n.chdir = function(t) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function() {
            return 0;
          });
      },
      {}
    ],
    MxHY: [
      function(require, module, exports) {
        var process = require("process");
        var t = require("process");
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var n = "18.5.0",
          e = function() {
            (this._tweens = {}), (this._tweensAddedDuringUpdate = {});
          };
        e.prototype = {
          getAll: function() {
            return Object.keys(this._tweens).map(
              function(t) {
                return this._tweens[t];
              }.bind(this)
            );
          },
          removeAll: function() {
            this._tweens = {};
          },
          add: function(t) {
            (this._tweens[t.getId()] = t),
              (this._tweensAddedDuringUpdate[t.getId()] = t);
          },
          remove: function(t) {
            delete this._tweens[t.getId()],
              delete this._tweensAddedDuringUpdate[t.getId()];
          },
          update: function(t, n) {
            var e = Object.keys(this._tweens);
            if (0 === e.length) return !1;
            for (t = void 0 !== t ? t : i.now(); e.length > 0; ) {
              this._tweensAddedDuringUpdate = {};
              for (var s = 0; s < e.length; s++) {
                var r = this._tweens[e[s]];
                r &&
                  !1 === r.update(t) &&
                  ((r._isPlaying = !1), n || delete this._tweens[e[s]]);
              }
              e = Object.keys(this._tweensAddedDuringUpdate);
            }
            return !0;
          }
        };
        var i = new e();
        (i.Group = e),
          (i._nextId = 0),
          (i.nextId = function() {
            return i._nextId++;
          }),
          "undefined" == typeof self && void 0 !== t && t.hrtime
            ? (i.now = function() {
                var n = t.hrtime();
                return 1e3 * n[0] + n[1] / 1e6;
              })
            : "undefined" != typeof self &&
              void 0 !== self.performance &&
              void 0 !== self.performance.now
            ? (i.now = self.performance.now.bind(self.performance))
            : void 0 !== Date.now
            ? (i.now = Date.now)
            : (i.now = function() {
                return new Date().getTime();
              }),
          (i.Tween = function(t, n) {
            (this._isPaused = !1),
              (this._pauseStart = null),
              (this._object = t),
              (this._valuesStart = {}),
              (this._valuesEnd = {}),
              (this._valuesStartRepeat = {}),
              (this._duration = 1e3),
              (this._repeat = 0),
              (this._repeatDelayTime = void 0),
              (this._yoyo = !1),
              (this._isPlaying = !1),
              (this._reversed = !1),
              (this._delayTime = 0),
              (this._startTime = null),
              (this._easingFunction = i.Easing.Linear.None),
              (this._interpolationFunction = i.Interpolation.Linear),
              (this._chainedTweens = []),
              (this._onStartCallback = null),
              (this._onStartCallbackFired = !1),
              (this._onUpdateCallback = null),
              (this._onRepeatCallback = null),
              (this._onCompleteCallback = null),
              (this._onStopCallback = null),
              (this._group = n || i),
              (this._id = i.nextId());
          }),
          (i.Tween.prototype = {
            getId: function() {
              return this._id;
            },
            isPlaying: function() {
              return this._isPlaying;
            },
            isPaused: function() {
              return this._isPaused;
            },
            to: function(t, n) {
              return (
                (this._valuesEnd = Object.create(t)),
                void 0 !== n && (this._duration = n),
                this
              );
            },
            duration: function(t) {
              return (this._duration = t), this;
            },
            start: function(t) {
              for (var n in (this._group.add(this),
              (this._isPlaying = !0),
              (this._isPaused = !1),
              (this._onStartCallbackFired = !1),
              (this._startTime =
                void 0 !== t
                  ? "string" == typeof t
                    ? i.now() + parseFloat(t)
                    : t
                  : i.now()),
              (this._startTime += this._delayTime),
              this._valuesEnd)) {
                if (this._valuesEnd[n] instanceof Array) {
                  if (0 === this._valuesEnd[n].length) continue;
                  this._valuesEnd[n] = [this._object[n]].concat(
                    this._valuesEnd[n]
                  );
                }
                void 0 !== this._object[n] &&
                  (void 0 === this._valuesStart[n] &&
                    (this._valuesStart[n] = this._object[n]),
                  this._valuesStart[n] instanceof Array == !1 &&
                    (this._valuesStart[n] *= 1),
                  (this._valuesStartRepeat[n] = this._valuesStart[n] || 0));
              }
              return this;
            },
            stop: function() {
              return this._isPlaying
                ? (this._group.remove(this),
                  (this._isPlaying = !1),
                  (this._isPaused = !1),
                  null !== this._onStopCallback &&
                    this._onStopCallback(this._object),
                  this.stopChainedTweens(),
                  this)
                : this;
            },
            end: function() {
              return this.update(1 / 0), this;
            },
            pause: function(t) {
              return this._isPaused || !this._isPlaying
                ? this
                : ((this._isPaused = !0),
                  (this._pauseStart = void 0 === t ? i.now() : t),
                  this._group.remove(this),
                  this);
            },
            resume: function(t) {
              return this._isPaused && this._isPlaying
                ? ((this._isPaused = !1),
                  (this._startTime +=
                    (void 0 === t ? i.now() : t) - this._pauseStart),
                  (this._pauseStart = 0),
                  this._group.add(this),
                  this)
                : this;
            },
            stopChainedTweens: function() {
              for (var t = 0, n = this._chainedTweens.length; t < n; t++)
                this._chainedTweens[t].stop();
            },
            group: function(t) {
              return (this._group = t), this;
            },
            delay: function(t) {
              return (this._delayTime = t), this;
            },
            repeat: function(t) {
              return (this._repeat = t), this;
            },
            repeatDelay: function(t) {
              return (this._repeatDelayTime = t), this;
            },
            yoyo: function(t) {
              return (this._yoyo = t), this;
            },
            easing: function(t) {
              return (this._easingFunction = t), this;
            },
            interpolation: function(t) {
              return (this._interpolationFunction = t), this;
            },
            chain: function() {
              return (this._chainedTweens = arguments), this;
            },
            onStart: function(t) {
              return (this._onStartCallback = t), this;
            },
            onUpdate: function(t) {
              return (this._onUpdateCallback = t), this;
            },
            onRepeat: function(t) {
              return (this._onRepeatCallback = t), this;
            },
            onComplete: function(t) {
              return (this._onCompleteCallback = t), this;
            },
            onStop: function(t) {
              return (this._onStopCallback = t), this;
            },
            update: function(t) {
              var n, e, i;
              if (t < this._startTime) return !0;
              for (n in (!1 === this._onStartCallbackFired &&
                (null !== this._onStartCallback &&
                  this._onStartCallback(this._object),
                (this._onStartCallbackFired = !0)),
              (e = (t - this._startTime) / this._duration),
              (e = 0 === this._duration || e > 1 ? 1 : e),
              (i = this._easingFunction(e)),
              this._valuesEnd))
                if (void 0 !== this._valuesStart[n]) {
                  var s = this._valuesStart[n] || 0,
                    r = this._valuesEnd[n];
                  r instanceof Array
                    ? (this._object[n] = this._interpolationFunction(r, i))
                    : ("string" == typeof r &&
                        (r =
                          "+" === r.charAt(0) || "-" === r.charAt(0)
                            ? s + parseFloat(r)
                            : parseFloat(r)),
                      "number" == typeof r &&
                        (this._object[n] = s + (r - s) * i));
                }
              if (
                (null !== this._onUpdateCallback &&
                  this._onUpdateCallback(this._object, e),
                1 === e)
              ) {
                if (this._repeat > 0) {
                  for (n in (isFinite(this._repeat) && this._repeat--,
                  this._valuesStartRepeat)) {
                    if (
                      ("string" == typeof this._valuesEnd[n] &&
                        (this._valuesStartRepeat[n] =
                          this._valuesStartRepeat[n] +
                          parseFloat(this._valuesEnd[n])),
                      this._yoyo)
                    ) {
                      var a = this._valuesStartRepeat[n];
                      (this._valuesStartRepeat[n] = this._valuesEnd[n]),
                        (this._valuesEnd[n] = a);
                    }
                    this._valuesStart[n] = this._valuesStartRepeat[n];
                  }
                  return (
                    this._yoyo && (this._reversed = !this._reversed),
                    void 0 !== this._repeatDelayTime
                      ? (this._startTime = t + this._repeatDelayTime)
                      : (this._startTime = t + this._delayTime),
                    null !== this._onRepeatCallback &&
                      this._onRepeatCallback(this._object),
                    !0
                  );
                }
                null !== this._onCompleteCallback &&
                  this._onCompleteCallback(this._object);
                for (var o = 0, u = this._chainedTweens.length; o < u; o++)
                  this._chainedTweens[o].start(
                    this._startTime + this._duration
                  );
                return !1;
              }
              return !0;
            }
          }),
          (i.Easing = {
            Linear: {
              None: function(t) {
                return t;
              }
            },
            Quadratic: {
              In: function(t) {
                return t * t;
              },
              Out: function(t) {
                return t * (2 - t);
              },
              InOut: function(t) {
                return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
              }
            },
            Cubic: {
              In: function(t) {
                return t * t * t;
              },
              Out: function(t) {
                return --t * t * t + 1;
              },
              InOut: function(t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t
                  : 0.5 * ((t -= 2) * t * t + 2);
              }
            },
            Quartic: {
              In: function(t) {
                return t * t * t * t;
              },
              Out: function(t) {
                return 1 - --t * t * t * t;
              },
              InOut: function(t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t * t
                  : -0.5 * ((t -= 2) * t * t * t - 2);
              }
            },
            Quintic: {
              In: function(t) {
                return t * t * t * t * t;
              },
              Out: function(t) {
                return --t * t * t * t * t + 1;
              },
              InOut: function(t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * t * t * t
                  : 0.5 * ((t -= 2) * t * t * t * t + 2);
              }
            },
            Sinusoidal: {
              In: function(t) {
                return 1 - Math.cos((t * Math.PI) / 2);
              },
              Out: function(t) {
                return Math.sin((t * Math.PI) / 2);
              },
              InOut: function(t) {
                return 0.5 * (1 - Math.cos(Math.PI * t));
              }
            },
            Exponential: {
              In: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1);
              },
              Out: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
              },
              InOut: function(t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : (t *= 2) < 1
                  ? 0.5 * Math.pow(1024, t - 1)
                  : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
              }
            },
            Circular: {
              In: function(t) {
                return 1 - Math.sqrt(1 - t * t);
              },
              Out: function(t) {
                return Math.sqrt(1 - --t * t);
              },
              InOut: function(t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              }
            },
            Elastic: {
              In: function(t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : -Math.pow(2, 10 * (t - 1)) *
                    Math.sin(5 * (t - 1.1) * Math.PI);
              },
              Out: function(t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : Math.pow(2, -10 * t) * Math.sin(5 * (t - 0.1) * Math.PI) +
                    1;
              },
              InOut: function(t) {
                return 0 === t
                  ? 0
                  : 1 === t
                  ? 1
                  : (t *= 2) < 1
                  ? -0.5 *
                    Math.pow(2, 10 * (t - 1)) *
                    Math.sin(5 * (t - 1.1) * Math.PI)
                  : 0.5 *
                      Math.pow(2, -10 * (t - 1)) *
                      Math.sin(5 * (t - 1.1) * Math.PI) +
                    1;
              }
            },
            Back: {
              In: function(t) {
                var n = 1.70158;
                return t * t * ((n + 1) * t - n);
              },
              Out: function(t) {
                var n = 1.70158;
                return --t * t * ((n + 1) * t + n) + 1;
              },
              InOut: function(t) {
                var n = 2.5949095;
                return (t *= 2) < 1
                  ? t * t * ((n + 1) * t - n) * 0.5
                  : 0.5 * ((t -= 2) * t * ((n + 1) * t + n) + 2);
              }
            },
            Bounce: {
              In: function(t) {
                return 1 - i.Easing.Bounce.Out(1 - t);
              },
              Out: function(t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              },
              InOut: function(t) {
                return t < 0.5
                  ? 0.5 * i.Easing.Bounce.In(2 * t)
                  : 0.5 * i.Easing.Bounce.Out(2 * t - 1) + 0.5;
              }
            }
          }),
          (i.Interpolation = {
            Linear: function(t, n) {
              var e = t.length - 1,
                s = e * n,
                r = Math.floor(s),
                a = i.Interpolation.Utils.Linear;
              return n < 0
                ? a(t[0], t[1], s)
                : n > 1
                ? a(t[e], t[e - 1], e - s)
                : a(t[r], t[r + 1 > e ? e : r + 1], s - r);
            },
            Bezier: function(t, n) {
              for (
                var e = 0,
                  s = t.length - 1,
                  r = Math.pow,
                  a = i.Interpolation.Utils.Bernstein,
                  o = 0;
                o <= s;
                o++
              )
                e += r(1 - n, s - o) * r(n, o) * t[o] * a(s, o);
              return e;
            },
            CatmullRom: function(t, n) {
              var e = t.length - 1,
                s = e * n,
                r = Math.floor(s),
                a = i.Interpolation.Utils.CatmullRom;
              return t[0] === t[e]
                ? (n < 0 && (r = Math.floor((s = e * (1 + n)))),
                  a(
                    t[(r - 1 + e) % e],
                    t[r],
                    t[(r + 1) % e],
                    t[(r + 2) % e],
                    s - r
                  ))
                : n < 0
                ? t[0] - (a(t[0], t[0], t[1], t[1], -s) - t[0])
                : n > 1
                ? t[e] - (a(t[e], t[e], t[e - 1], t[e - 1], s - e) - t[e])
                : a(
                    t[r ? r - 1 : 0],
                    t[r],
                    t[e < r + 1 ? e : r + 1],
                    t[e < r + 2 ? e : r + 2],
                    s - r
                  );
            },
            Utils: {
              Linear: function(t, n, e) {
                return (n - t) * e + t;
              },
              Bernstein: function(t, n) {
                var e = i.Interpolation.Utils.Factorial;
                return e(t) / e(n) / e(t - n);
              },
              Factorial: (function() {
                var t = [1];
                return function(n) {
                  var e = 1;
                  if (t[n]) return t[n];
                  for (var i = n; i > 1; i--) e *= i;
                  return (t[n] = e), e;
                };
              })(),
              CatmullRom: function(t, n, e, i, s) {
                var r = 0.5 * (e - t),
                  a = 0.5 * (i - n),
                  o = s * s;
                return (
                  (2 * n - 2 * e + r + a) * (s * o) +
                  (-3 * n + 3 * e - 2 * r - a) * o +
                  r * s +
                  n
                );
              }
            }
          }),
          (i.version = n);
        var s = i;
        exports.default = s;
      },
      { process: "pBGv" }
    ],
    g2Hq: [
      function(require, module, exports) {
        "use strict";
        var e = t(require("@tweenjs/tween.js"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var n = document.body.querySelector(".loader"),
          o = document.body.querySelector(".canvas");
        window.addEventListener(
          "load",
          function() {
            n.classList.add("hidden"), o.classList.remove("hidden");
          },
          !1
        );
        var i = [
            {
              image: document.body.querySelector(".background"),
              z_index: -1,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-1"),
              z_index: -0.15,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-2"),
              z_index: -0.2,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-3"),
              z_index: -0.3,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-4"),
              z_index: -0.5,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-5"),
              z_index: -0.6,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".guy"),
              z_index: 0.2,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 20 }
            }
          ],
          a = 0.1,
          d = 2,
          s = 17,
          u = !1,
          r = { x: 0, y: 0 },
          y = { x: 0, y: 0 },
          c = { x: null, y: null },
          x = { x: 0, y: 0 };
        function l() {
          e.default.update();
          var t = -0.15 * y.y + -1.2 * x.y,
            n = 0.15 * y.x + 1.2 * x.x;
          (o.style.transform = "rotateX(" + t + "deg) rotateY(" + n + "deg)"),
            i.forEach(function(e, t) {
              (e.position = m(e)),
                (e.image.style.transform = "translate3d("
                  .concat(e.position.x, "px, ")
                  .concat(e.position.y, "px, 0)"));
            }),
            requestAnimationFrame(l);
        }
        function m(e) {
          var t = y.x * e.z_index * a,
            n = y.y * e.z_index * a,
            o = x.x * e.z_index * d,
            i = x.y * e.z_index * d;
          return { x: e.base_offset.x + t + o, y: e.base_offset.y + n + i };
        }
        function f(e) {
          (u = !0),
            "touchstart" === e.type
              ? ((r.x = e.touches[0].clientX), (r.y = e.touches[0].clientY))
              : "mousedown" === e.type &&
                ((r.x = e.clientX), (r.y = e.clientY));
        }
        function w(e) {
          if ((e.preventDefault(), !0 === u)) {
            var t = 0,
              n = 0;
            "touchmove" === e.type
              ? ((t = e.touches[0].clientX), (n = e.touches[0].clientY))
              : "mousemove" === e.type && ((t = e.clientX), (n = e.clientY)),
              (y.x = t - r.x),
              (y.y = n - r.y);
          }
        }
        function v() {
          (u = !1),
            e.default.removeAll(),
            new e.default.Tween(y)
              .to({ x: 0, y: 0 }, 300)
              .easing(e.default.Easing.Back.Out)
              .start();
        }
        function b() {
          window.DeviceOrientationEvent &&
            DeviceOrientationEvent.requestPermission &&
            DeviceOrientationEvent.requestPermission();
        }
        requestAnimationFrame(l),
          window.addEventListener("touchstart", f),
          window.addEventListener("mousedown", f),
          window.addEventListener("mousemove", w),
          window.addEventListener("touchmove", w),
          window.addEventListener("touchend", function(e) {
            v();
          }),
          window.addEventListener("mouseup", function(e) {
            v();
          }),
          window.addEventListener("deviceorientation", function(e) {
            c.x || c.y || ((c.x = e.beta), (c.y = e.gamma)),
              0 === window.orientation
                ? ((x.x = e.gamma - c.y), (x.y = e.beta - c.x))
                : 90 === window.orientation
                ? ((x.x = e.beta - c.x), (x.y = -e.gamma + c.y))
                : -90 === window.orientation
                ? ((x.x = -e.beta + c.x), (x.y = e.gamma - c.y))
                : ((x.x = -e.gamma + c.y), (x.y = -e.beta + c.x)),
              Math.abs(x.x) > s && (x.x < 0 ? (x.x = -s) : (x.x = s)),
              Math.abs(x.y) > s && (x.y < 0 ? (x.y = -s) : (x.y = s));
          }),
          window.addEventListener("orientationchange", function(e) {
            (c.x = 0), (c.y = 0);
          }),
          window.addEventListener("touchend", function() {
            b();
          });
      },
      { "@tweenjs/tween.js": "MxHY" }
    ]
  },
  {},
  ["g2Hq"],
  null
);
//# sourceMappingURL=scripts.ed50c16f.js.map
