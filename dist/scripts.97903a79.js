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
    g2Hq: [
      function(require, module, exports) {
        var e = document.body.querySelector(".loader"),
          n = document.body.querySelector(".canvas");
        window.addEventListener(
          "load",
          function() {
            e.classList.add("hidden"), n.classList.remove("hidden");
          },
          !1
        );
        var t = [
            {
              image: document.body.querySelector(".background"),
              x_index: 0,
              y_index: 0,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-1"),
              x_index: -0.4,
              y_index: -0.2,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-2"),
              x_index: -0.4,
              y_index: -0.15,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-3"),
              x_index: -0.4,
              y_index: -0.15,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-4"),
              x_index: -0.3,
              y_index: -0.1,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".seagull-5"),
              x_index: -0.3,
              y_index: -0.1,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 0 }
            },
            {
              image: document.body.querySelector(".guy"),
              x_index: -0.5,
              y_index: -0.25,
              position: { x: 0, y: 0 },
              base_offset: { x: 0, y: 20 }
            }
          ],
          o = 0.3,
          i = 1.5,
          a = 23,
          d = !1,
          s = { x: 0, y: 0 },
          y = { x: 0, y: 0 },
          x = { x: null, y: null },
          r = { x: 0, y: 0 };
        function c() {
          TWEEN.update();
          var e = -0.15 * y.y + -1.2 * r.y,
            o = 0.15 * y.x + 1.2 * r.x;
          (n.style.transform = "rotateX(" + e + "deg) rotateY(" + o + "deg)"),
            t.forEach(function(e, n) {
              (e.position = u(e)),
                (e.image.style.transform = "translateX("
                  .concat(e.position.x, "px) translateY(")
                  .concat(e.position.y, "px)"));
            }),
            requestAnimationFrame(c);
        }
        function u(e) {
          var n = y.x * e.x_index * o,
            t = y.y * e.y_index * o,
            a = r.x * e.x_index * i,
            d = r.y * e.y_index * i,
            s = { x: e.base_offset.x + n + a, y: e.base_offset.y + t + d };
          return console.log(s.x), s;
        }
        function m(e) {
          (d = !0),
            "touchstart" === e.type
              ? ((s.x = e.touches[0].clientX), (s.y = e.touches[0].clientY))
              : "mousedown" === e.type &&
                ((s.x = e.clientX), (s.y = e.clientY));
        }
        function l(e) {
          if ((e.preventDefault(), !0 === d)) {
            var n = 0,
              t = 0;
            "touchmove" === e.type
              ? ((n = e.touches[0].clientX), (t = e.touches[0].clientY))
              : "mousemove" === e.type && ((n = e.clientX), (t = e.clientY)),
              (y.x = n - s.x),
              (y.y = t - s.y);
          }
        }
        function f() {
          (d = !1), TWEEN.removeAll();
          new TWEEN.Tween(y)
            .to({ x: 0, y: 0 }, 300)
            .easing(TWEEN.Easing.Back.Out)
            .start();
        }
        function w() {
          window.DeviceOrientationEvent &&
            DeviceOrientationEvent.requestPermission &&
            DeviceOrientationEvent.requestPermission();
        }
        requestAnimationFrame(c),
          window.addEventListener("touchstart", m),
          window.addEventListener("mousedown", m),
          window.addEventListener("mousemove", l),
          window.addEventListener("touchmove", l),
          window.addEventListener("touchend", function(e) {
            f();
          }),
          window.addEventListener("mouseup", function(e) {
            f();
          }),
          window.addEventListener("deviceorientation", function(e) {
            x.x || x.y || ((x.x = e.beta), (x.y = e.gamma)),
              0 === window.orientation
                ? ((r.x = e.gamma - x.y), (r.y = e.beta - x.x))
                : 90 === window.orientation
                ? ((r.x = e.beta - x.x), (r.y = -e.gamma + x.y))
                : -90 === window.orientation
                ? ((r.x = -e.beta + x.x), (r.y = e.gamma - x.y))
                : ((r.x = -e.gamma + x.y), (r.y = -e.beta + x.x)),
              Math.abs(r.x) > a && (r.x < 0 ? (r.x = -a) : (r.x = a)),
              Math.abs(r.y) > a && (r.y < 0 ? (r.y = -a) : (r.y = a));
          }),
          window.addEventListener("orientationchange", function(e) {
            (x.x = 0), (x.y = 0);
          }),
          window.addEventListener("touchend", function() {
            w();
          });
      },
      {}
    ]
  },
  {},
  ["g2Hq"],
  null
);
//# sourceMappingURL=/scripts.97903a79.js.map
