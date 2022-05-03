var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  var w, v, y, x, g, e, m, t;
  function T(t, e, i, s) {
    i === s && (i = s - (s - e) / 1e6),
      t === e && (e = t + (i - t) / 1e6),
      (this.a = t),
      (this.b = e),
      (this.c = i),
      (this.d = s),
      (this.da = s - t),
      (this.ca = i - t),
      (this.ba = e - t);
  }
  function b(t, e, i, s) {
    var r = { a: t },
      n = {},
      o = {},
      a = { c: s },
      h = (t + e) / 2,
      l = (i + s) / 2,
      c = ((i = ((c = (e + i) / 2) + l) / 2) - (e = (h + c) / 2)) / 8;
    return (
      (r.b = h + (t - h) / 4),
      (n.b = e + c),
      (r.c = n.a = (r.b + n.b) / 2),
      (n.c = o.a = (e + i) / 2),
      (o.b = i - c),
      (a.b = l + (s - l) / 4),
      (o.c = a.a = (o.b + a.b) / 2),
      [r, n, o, a]
    );
  }
  function u(t, e, i, s, r, n) {
    var o,
      a,
      h,
      l,
      c,
      p,
      u,
      f,
      d = {},
      _ = [],
      m = n || t[0];
    for (a in ((r =
      "string" == typeof r
        ? "," + r + ","
        : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
    null == e && (e = 1),
    t[0]))
      _.push(a);
    if (1 < t.length) {
      for (f = t[t.length - 1], u = !0, o = _.length; -1 < --o; )
        if (((a = _[o]), 0.05 < Math.abs(m[a] - f[a]))) {
          u = !1;
          break;
        }
      u &&
        ((t = t.concat()),
        n && t.unshift(n),
        t.push(t[1]),
        (n = t[t.length - 3]));
    }
    for (v.length = y.length = x.length = 0, o = _.length; -1 < --o; )
      (a = _[o]),
        (g[a] = -1 !== r.indexOf("," + a + ",")),
        (d[a] = (function (t, e, i, s) {
          var r,
            n,
            o,
            a,
            h,
            l,
            c = [];
          if (s)
            for (n = (t = [s].concat(t)).length; -1 < --n; )
              "string" == typeof (l = t[n][e]) &&
                "=" === l.charAt(1) &&
                (t[n][e] = s[e] + Number(l.charAt(0) + l.substr(2)));
          if ((r = t.length - 2) < 0)
            return (c[0] = new T(t[0][e], 0, 0, t[0][e])), c;
          for (n = 0; n < r; n++)
            (o = t[n][e]),
              (a = t[n + 1][e]),
              (c[n] = new T(o, 0, 0, a)),
              i &&
                ((h = t[n + 2][e]),
                (v[n] = (v[n] || 0) + (a - o) * (a - o)),
                (y[n] = (y[n] || 0) + (h - a) * (h - a)));
          return (c[n] = new T(t[n][e], 0, 0, t[n + 1][e])), c;
        })(t, a, g[a], n));
    for (o = v.length; -1 < --o; )
      (v[o] = Math.sqrt(v[o])), (y[o] = Math.sqrt(y[o]));
    if (!s) {
      for (o = _.length; -1 < --o; )
        if (g[a])
          for (p = (h = d[_[o]]).length - 1, l = 0; l < p; l++)
            (c = h[l + 1].da / y[l] + h[l].da / v[l] || 0),
              (x[l] = (x[l] || 0) + c * c);
      for (o = x.length; -1 < --o; ) x[o] = Math.sqrt(x[o]);
    }
    for (o = _.length, l = i ? 4 : 1; -1 < --o; )
      (function (t, e, i, s, r) {
        for (
          var n,
            o,
            a,
            h,
            l,
            c,
            p,
            u,
            f,
            d = t.length - 1,
            _ = 0,
            m = t[0].a,
            g = 0;
          g < d;
          g++
        )
          (n = (a = t[_]).a),
            (o = a.d),
            (l = t[_ + 1].d),
            (l = r
              ? ((p = v[g]),
                (f = (((u = y[g]) + p) * e * 0.25) / ((!s && x[g]) || 0.5)),
                o -
                  ((h = o - (o - n) * (s ? 0.5 * e : 0 !== p ? f / p : 0)) +
                    ((((f = o + (l - o) * (s ? 0.5 * e : 0 !== u ? f / u : 0)) -
                      h) *
                      ((3 * p) / (p + u) + 0.5)) /
                      4 || 0)))
              : o -
                ((h = o - (o - n) * e * 0.5) + (f = o + (l - o) * e * 0.5)) /
                  2),
            (f += l),
            (a.c = l = h += l),
            (a.b = 0 !== g ? m : (m = a.a + 0.6 * (a.c - a.a))),
            (a.da = o - n),
            (a.ca = l - n),
            (a.ba = m - n),
            i
              ? ((c = b(n, m, l, o)),
                t.splice(_, 1, c[0], c[1], c[2], c[3]),
                (_ += 4))
              : _++,
            (m = f);
        ((a = t[_]).b = m),
          (a.c = m + 0.4 * (a.d - m)),
          (a.da = a.d - a.a),
          (a.ca = a.c - a.a),
          (a.ba = m - a.a),
          i &&
            ((c = b(a.a, m, a.c, a.d)), t.splice(_, 1, c[0], c[1], c[2], c[3]));
      })((h = d[(a = _[o])]), e, i, s, g[a]),
        u && (h.splice(0, l), h.splice(h.length - l, l));
    return d;
  }
  function f(t, e) {
    var i,
      s,
      r,
      n,
      o = [],
      a = [],
      h = 0,
      l = 0,
      c = (e = e >> 0 || 6) - 1,
      p = [],
      u = [];
    for (i in t)
      !(function (t, e, i) {
        for (
          var s, r, n, o, a, h, l, c, p, u, f = 1 / i, d = t.length;
          -1 < --d;

        )
          for (
            n = (p = t[d]).a,
              o = p.d - n,
              a = p.c - n,
              h = p.b - n,
              r = 0,
              l = 1;
            l <= i;
            l++
          )
            (s =
              r -
              (r =
                ((u = f * l) * u * o + 3 * (c = 1 - u) * (u * a + c * h)) * u)),
              (e[(u = d * i + l - 1)] = (e[u] || 0) + s * s);
      })(t[i], o, e);
    for (r = o.length, s = 0; s < r; s++)
      (h += Math.sqrt(o[s])),
        (u[(n = s % e)] = h),
        n == c &&
          ((l += h),
          (p[(n = (s / e) >> 0)] = u),
          (a[n] = l),
          (h = 0),
          (u = []));
    return { length: l, lengths: a, segments: p };
  }
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (s, c, m) {
      function g(t) {
        for (var e = [], i = t.length, s = 0; s !== i; e.push(t[s++]));
        return e;
      }
      function v(t, e, i) {
        var s,
          r,
          n = t.cycle;
        for (s in n)
          (r = n[s]),
            (t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
        delete t.cycle;
      }
      var y = function (t, e, i) {
          m.call(this, t, e, i),
            (this._cycle = 0),
            (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._repeat && this._uncache(!0),
            (this.render = y.prototype.render);
        },
        x = 1e-10,
        T = m._internals,
        b = T.isSelector,
        w = T.isArray,
        t = (y.prototype = m.to({}, 0.1, {})),
        P = [];
      (y.version = "2.0.2"),
        (t.constructor = y),
        (t.kill()._gc = !1),
        (y.killTweensOf = y.killDelayedCallsTo = m.killTweensOf),
        (y.getTweensOf = m.getTweensOf),
        (y.lagSmoothing = m.lagSmoothing),
        (y.ticker = m.ticker),
        (y.render = m.render),
        (t.invalidate = function () {
          return (
            (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._yoyoEase = null),
            this._uncache(!0),
            m.prototype.invalidate.call(this)
          );
        }),
        (t.updateTo = function (t, e) {
          var i,
            s = this.ratio,
            r = this.vars.immediateRender || t.immediateRender;
          for (i in (e &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay)),
          t))
            this.vars[i] = t[i];
          if (this._initted || r)
            if (e) (this._initted = !1), r && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                m._onPluginEvent("_onDisable", this),
              0.998 < this._time / this._duration)
            ) {
              e = this._totalTime;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(e, !0, !1);
            } else if (
              ((this._initted = !1), this._init(), 0 < this._time || r)
            )
              for (var n, o = 1 / (1 - s), a = this._firstPT; a; )
                (n = a.s + a.c), (a.c *= o), (a.s = n - a.c), (a = a._next);
          return this;
        }),
        (t.render = function (t, e, i) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var s,
            r,
            n,
            o,
            a,
            h,
            l,
            c = this._dirty ? this.totalDuration() : this._totalDuration,
            p = this._time,
            u = this._totalTime,
            f = this._cycle,
            d = this._duration,
            _ = this._rawPrevTime;
          if (
            (c - 1e-7 <= t && 0 <= t
              ? ((this._totalTime = c),
                (this._cycle = this._repeat),
                this._yoyo && 0 != (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = d),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((s = !0),
                  (r = "onComplete"),
                  (i = i || this._timeline.autoRemoveChildren)),
                0 !== d ||
                  (!this._initted && this.vars.lazy && !i) ||
                  (this._startTime === this._timeline._duration && (t = 0),
                  (_ < 0 ||
                    (t <= 0 && -1e-7 <= t) ||
                    (_ === x && "isPause" !== this.data)) &&
                    _ !== t &&
                    ((i = !0), x < _ && (r = "onReverseComplete")),
                  (this._rawPrevTime = h = !e || t || _ === t ? t : x)))
              : t < 1e-7
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== u || (0 === d && 0 < _)) &&
                  ((r = "onReverseComplete"), (s = this._reversed)),
                t < 0 &&
                  ((this._active = !1),
                  0 !== d ||
                    (!this._initted && this.vars.lazy && !i) ||
                    (0 <= _ && (i = !0),
                    (this._rawPrevTime = h = !e || t || _ === t ? t : x))),
                this._initted || (i = !0))
              : ((this._totalTime = this._time = t),
                0 !== this._repeat &&
                  ((a = d + this._repeatDelay),
                  (this._cycle = (this._totalTime / a) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / a &&
                    u <= t &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * a),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    ((this._time = d - this._time),
                    (l = this._yoyoEase || this.vars.yoyoEase) &&
                      (this._yoyoEase ||
                        (!0 !== l || this._initted
                          ? (this._yoyoEase = l =
                              !0 === l
                                ? this._ease
                                : l instanceof Ease
                                ? l
                                : Ease.map[l])
                          : ((l = this.vars.ease),
                            (this._yoyoEase = l =
                              l
                                ? l instanceof Ease
                                  ? l
                                  : "function" == typeof l
                                  ? new Ease(l, this.vars.easeParams)
                                  : Ease.map[l] || m.defaultEase
                                : m.defaultEase))),
                      (this.ratio = l
                        ? 1 - l.getRatio((d - this._time) / d)
                        : 0))),
                  this._time > d
                    ? (this._time = d)
                    : this._time < 0 && (this._time = 0)),
                this._easeType && !l
                  ? ((o = this._time / d),
                    (1 === (c = this._easeType) || (3 === c && 0.5 <= o)) &&
                      (o = 1 - o),
                    3 === c && (o *= 2),
                    1 === (a = this._easePower)
                      ? (o *= o)
                      : 2 === a
                      ? (o *= o * o)
                      : 3 === a
                      ? (o *= o * o * o)
                      : 4 === a && (o *= o * o * o * o),
                    1 === c
                      ? (this.ratio = 1 - o)
                      : 2 === c
                      ? (this.ratio = o)
                      : this._time / d < 0.5
                      ? (this.ratio = o / 2)
                      : (this.ratio = 1 - o / 2))
                  : l || (this.ratio = this._ease.getRatio(this._time / d))),
            p !== this._time || i || f !== this._cycle)
          ) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = p),
                  (this._totalTime = u),
                  (this._rawPrevTime = _),
                  (this._cycle = f),
                  T.lazyTweens.push(this),
                  void (this._lazy = [t, e])
                );
              !this._time || s || l
                ? s &&
                  this._ease._calcEnd &&
                  !l &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                : (this.ratio = this._ease.getRatio(this._time / d));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== p &&
                    0 <= t &&
                    (this._active = !0)),
                0 === u &&
                  (2 === this._initted && 0 < t && this._init(),
                  this._startAt &&
                    (0 <= t
                      ? this._startAt.render(t, !0, i)
                      : (r = r || "_dummyGS")),
                  !this.vars.onStart ||
                    (0 === this._totalTime && 0 !== d) ||
                    e ||
                    this._callback("onStart")),
                n = this._firstPT;
              n;

            )
              n.f
                ? n.t[n.p](n.c * this.ratio + n.s)
                : (n.t[n.p] = n.c * this.ratio + n.s),
                (n = n._next);
            this._onUpdate &&
              (t < 0 &&
                this._startAt &&
                this._startTime &&
                this._startAt.render(t, !0, i),
              e || (this._totalTime === u && !r) || this._callback("onUpdate")),
              this._cycle !== f &&
                (e ||
                  this._gc ||
                  (this.vars.onRepeat && this._callback("onRepeat"))),
              !r ||
                (this._gc && !i) ||
                (t < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  this._startTime &&
                  this._startAt.render(t, !0, i),
                s &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e && this.vars[r] && this._callback(r),
                0 === d &&
                  this._rawPrevTime === x &&
                  h !== x &&
                  (this._rawPrevTime = 0));
          } else
            u !== this._totalTime &&
              this._onUpdate &&
              (e || this._callback("onUpdate"));
        }),
        (y.to = function (t, e, i) {
          return new y(t, e, i);
        }),
        (y.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new y(t, e, i)
          );
        }),
        (y.fromTo = function (t, e, i, s) {
          return (
            (s.startAt = i),
            (s.immediateRender =
              0 != s.immediateRender && 0 != i.immediateRender),
            new y(t, e, s)
          );
        }),
        (y.staggerTo = y.allTo =
          function (t, e, i, s, r, n, o) {
            s = s || 0;
            function a() {
              i.onComplete &&
                i.onComplete.apply(i.onCompleteScope || this, arguments),
                r.apply(o || i.callbackScope || this, n || P);
            }
            var h,
              l,
              c,
              p,
              u = 0,
              f = [],
              d = i.cycle,
              _ = i.startAt && i.startAt.cycle;
            for (
              w(t) ||
                ("string" == typeof t && (t = m.selector(t) || t),
                b(t) && (t = g(t))),
                t = t || [],
                s < 0 && ((t = g(t)).reverse(), (s *= -1)),
                h = t.length - 1,
                c = 0;
              c <= h;
              c++
            ) {
              for (p in ((l = {}), i)) l[p] = i[p];
              if (
                (d &&
                  (v(l, t, c),
                  null != l.duration && ((e = l.duration), delete l.duration)),
                _)
              ) {
                for (p in ((_ = l.startAt = {}), i.startAt))
                  _[p] = i.startAt[p];
                v(l.startAt, t, c);
              }
              (l.delay = u + (l.delay || 0)),
                c === h && r && (l.onComplete = a),
                (f[c] = new y(t[c], e, l)),
                (u += s);
            }
            return f;
          }),
        (y.staggerFrom = y.allFrom =
          function (t, e, i, s, r, n, o) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              y.staggerTo(t, e, i, s, r, n, o)
            );
          }),
        (y.staggerFromTo = y.allFromTo =
          function (t, e, i, s, r, n, o, a) {
            return (
              (s.startAt = i),
              (s.immediateRender =
                0 != s.immediateRender && 0 != i.immediateRender),
              y.staggerTo(t, e, s, r, n, o, a)
            );
          }),
        (y.delayedCall = function (t, e, i, s, r) {
          return new y(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (y.set = function (t, e) {
          return new y(t, 0, e);
        }),
        (y.isTweening = function (t) {
          return 0 < m.getTweensOf(t, !0).length;
        });
      var n = function (t, e) {
          for (var i = [], s = 0, r = t._first; r; )
            r instanceof m
              ? (i[s++] = r)
              : (e && (i[s++] = r), (s = (i = i.concat(n(r, e))).length)),
              (r = r._next);
          return i;
        },
        p = (y.getAllTweens = function (t) {
          return n(s._rootTimeline, t).concat(n(s._rootFramesTimeline, t));
        });
      (y.killAll = function (t, e, i, s) {
        null == e && (e = !0), null == i && (i = !0);
        for (
          var r, n, o = p(0 != s), a = o.length, h = e && i && s, l = 0;
          l < a;
          l++
        )
          (n = o[l]),
            (h ||
              n instanceof c ||
              ((r = n.target === n.vars.onComplete) && i) ||
              (e && !r)) &&
              (t
                ? n.totalTime(n._reversed ? 0 : n.totalDuration())
                : n._enabled(!1, !1));
      }),
        (y.killChildTweensOf = function (t, e) {
          if (null != t) {
            var i,
              s,
              r,
              n,
              o,
              a = T.tweenLookup;
            if (
              ("string" == typeof t && (t = m.selector(t) || t),
              b(t) && (t = g(t)),
              w(t))
            )
              for (n = t.length; -1 < --n; ) y.killChildTweensOf(t[n], e);
            else {
              for (r in ((i = []), a))
                for (s = a[r].target.parentNode; s; )
                  s === t && (i = i.concat(a[r].tweens)), (s = s.parentNode);
              for (o = i.length, n = 0; n < o; n++)
                e && i[n].totalTime(i[n].totalDuration()),
                  i[n]._enabled(!1, !1);
            }
          }
        });
      function r(t, e, i, s) {
        (e = !1 !== e), (i = !1 !== i);
        for (
          var r, n, o = p((s = !1 !== s)), a = e && i && s, h = o.length;
          -1 < --h;

        )
          (n = o[h]),
            (a ||
              n instanceof c ||
              ((r = n.target === n.vars.onComplete) && i) ||
              (e && !r)) &&
              n.paused(t);
      }
      return (
        (y.pauseAll = function (t, e, i) {
          r(!0, t, e, i);
        }),
        (y.resumeAll = function (t, e, i) {
          r(!1, t, e, i);
        }),
        (y.globalTimeScale = function (t) {
          var e = s._rootTimeline,
            i = m.ticker.time;
          return arguments.length
            ? ((e._startTime =
                i - ((i - e._startTime) * e._timeScale) / (t = t || x)),
              (e = s._rootFramesTimeline),
              (i = m.ticker.frame),
              (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
              (e._timeScale = s._rootTimeline._timeScale = t))
            : e._timeScale;
        }),
        (t.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                  this._cycle * (this._duration + this._repeatDelay),
                e
              )
            : this._time / this.duration();
        }),
        (t.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this._totalTime / this.totalDuration();
        }),
        (t.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              t > this._duration && (t = this._duration),
              this._yoyo && 0 != (1 & this._cycle)
                ? (t =
                    this._duration -
                    t +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (t += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(t, e))
            : this._time;
        }),
        (t.duration = function (t) {
          return arguments.length
            ? s.prototype.duration.call(this, t)
            : this._duration;
        }),
        (t.totalDuration = function (t) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (t.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), this._uncache(!0))
            : this._repeat;
        }),
        (t.repeatDelay = function (t) {
          return arguments.length
            ? ((this._repeatDelay = t), this._uncache(!0))
            : this._repeatDelay;
        }),
        (t.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        y
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (c, p, u) {
        function f(t) {
          p.call(this, t),
            (this._labels = {}),
            (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
            (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
            (this._sortChildren = !0),
            (this._onUpdate = this.vars.onUpdate);
          var e,
            i,
            s = this.vars;
          for (i in s)
            (e = s[i]),
              y(e) &&
                -1 !== e.join("").indexOf("{self}") &&
                (s[i] = this._swapSelfInParams(e));
          y(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger);
        }
        function d(t) {
          var e,
            i = {};
          for (e in t) i[e] = t[e];
          return i;
        }
        function _(t, e, i) {
          var s,
            r,
            n = t.cycle;
          for (s in n)
            (r = n[s]),
              (t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
          delete t.cycle;
        }
        function m(t) {
          for (var e = [], i = t.length, s = 0; s !== i; e.push(t[s++]));
          return e;
        }
        var g = 1e-10,
          t = u._internals,
          e = (f._internals = {}),
          v = t.isSelector,
          y = t.isArray,
          x = t.lazyTweens,
          T = t.lazyRender,
          o = _gsScope._gsDefine.globals,
          r = (e.pauseCallback = function () {}),
          e = (f.prototype = new p());
        return (
          (f.version = "2.0.2"),
          (e.constructor = f),
          (e.kill()._gc = e._forcingPlayhead = e._hasPause = !1),
          (e.to = function (t, e, i, s) {
            var r = (i.repeat && o.TweenMax) || u;
            return e ? this.add(new r(t, e, i), s) : this.set(t, i, s);
          }),
          (e.from = function (t, e, i, s) {
            return this.add(((i.repeat && o.TweenMax) || u).from(t, e, i), s);
          }),
          (e.fromTo = function (t, e, i, s, r) {
            var n = (s.repeat && o.TweenMax) || u;
            return e ? this.add(n.fromTo(t, e, i, s), r) : this.set(t, s, r);
          }),
          (e.staggerTo = function (t, e, i, s, r, n, o, a) {
            var h,
              l,
              c = new f({
                onComplete: n,
                onCompleteParams: o,
                callbackScope: a,
                smoothChildTiming: this.smoothChildTiming,
              }),
              p = i.cycle;
            for (
              "string" == typeof t && (t = u.selector(t) || t),
                v((t = t || [])) && (t = m(t)),
                (s = s || 0) < 0 && ((t = m(t)).reverse(), (s *= -1)),
                l = 0;
              l < t.length;
              l++
            )
              (h = d(i)).startAt &&
                ((h.startAt = d(h.startAt)),
                h.startAt.cycle && _(h.startAt, t, l)),
                p &&
                  (_(h, t, l),
                  null != h.duration && ((e = h.duration), delete h.duration)),
                c.to(t[l], e, h, l * s);
            return this.add(c, r);
          }),
          (e.staggerFrom = function (t, e, i, s, r, n, o, a) {
            return (
              (i.immediateRender = 0 != i.immediateRender),
              (i.runBackwards = !0),
              this.staggerTo(t, e, i, s, r, n, o, a)
            );
          }),
          (e.staggerFromTo = function (t, e, i, s, r, n, o, a, h) {
            return (
              (s.startAt = i),
              (s.immediateRender =
                0 != s.immediateRender && 0 != i.immediateRender),
              this.staggerTo(t, e, s, r, n, o, a, h)
            );
          }),
          (e.call = function (t, e, i, s) {
            return this.add(u.delayedCall(0, t, e, i), s);
          }),
          (e.set = function (t, e, i) {
            return (
              (i = this._parseTimeOrLabel(i, 0, !0)),
              null == e.immediateRender &&
                (e.immediateRender = i === this._time && !this._paused),
              this.add(new u(t, 0, e), i)
            );
          }),
          (f.exportRoot = function (t, e) {
            null == (t = t || {}).smoothChildTiming &&
              (t.smoothChildTiming = !0);
            var i,
              s,
              r,
              n,
              o = new f(t),
              t = o._timeline;
            for (
              null == e && (e = !0),
                t._remove(o, !0),
                o._startTime = 0,
                o._rawPrevTime = o._time = o._totalTime = t._time,
                r = t._first;
              r;

            )
              (n = r._next),
                (e && r instanceof u && r.target === r.vars.onComplete) ||
                  ((s = r._startTime - r._delay) < 0 && (i = 1), o.add(r, s)),
                (r = n);
            return t.add(o, 0), i && o.totalDuration(), o;
          }),
          (e.add = function (t, e, i, s) {
            var r, n, o, a, h, l;
            if (
              ("number" != typeof e &&
                (e = this._parseTimeOrLabel(e, 0, !0, t)),
              !(t instanceof c))
            ) {
              if (t instanceof Array || (t && t.push && y(t))) {
                for (
                  i = i || "normal", s = s || 0, r = e, n = t.length, o = 0;
                  o < n;
                  o++
                )
                  y((a = t[o])) && (a = new f({ tweens: a })),
                    this.add(a, r),
                    "string" != typeof a &&
                      "function" != typeof a &&
                      ("sequence" === i
                        ? (r = a._startTime + a.totalDuration() / a._timeScale)
                        : "start" === i && (a._startTime -= a.delay())),
                    (r += s);
                return this._uncache(!0);
              }
              if ("string" == typeof t) return this.addLabel(t, e);
              if ("function" != typeof t)
                throw (
                  "Cannot add " +
                  t +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              t = u.delayedCall(0, t);
            }
            if (
              (p.prototype.add.call(this, t, e),
              t._time &&
                ((r = Math.max(
                  0,
                  Math.min(
                    t.totalDuration(),
                    (this.rawTime() - t._startTime) * t._timeScale
                  )
                )),
                1e-5 < Math.abs(r - t._totalTime) && t.render(r, !1, !1)),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (l = (h = this).rawTime() > t._startTime; h._timeline; )
                l && h._timeline.smoothChildTiming
                  ? h.totalTime(h._totalTime, !0)
                  : h._gc && h._enabled(!0, !1),
                  (h = h._timeline);
            return this;
          }),
          (e.remove = function (t) {
            if (t instanceof c) {
              this._remove(t, !1);
              var e = (t._timeline = t.vars.useFrames
                ? c._rootFramesTimeline
                : c._rootTimeline);
              return (
                (t._startTime =
                  (t._paused ? t._pauseTime : e._time) -
                  (t._reversed
                    ? t.totalDuration() - t._totalTime
                    : t._totalTime) /
                    t._timeScale),
                this
              );
            }
            if (t instanceof Array || (t && t.push && y(t))) {
              for (var i = t.length; -1 < --i; ) this.remove(t[i]);
              return this;
            }
            return "string" == typeof t
              ? this.removeLabel(t)
              : this.kill(null, t);
          }),
          (e._remove = function (t, e) {
            return (
              p.prototype._remove.call(this, t, e),
              this._last
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (e.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (e.insert = e.insertMultiple =
            function (t, e, i, s) {
              return this.add(t, e || 0, i, s);
            }),
          (e.appendMultiple = function (t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
          }),
          (e.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (e.addPause = function (t, e, i, s) {
            s = u.delayedCall(0, r, i, s || this);
            return (
              (s.vars.onComplete = s.vars.onReverseComplete = e),
              (s.data = "isPause"),
              (this._hasPause = !0),
              this.add(s, t)
            );
          }),
          (e.removeLabel = function (t) {
            return delete this._labels[t], this;
          }),
          (e.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (e._parseTimeOrLabel = function (t, e, i, s) {
            var r, n;
            if (s instanceof c && s.timeline === this) this.remove(s);
            else if (s && (s instanceof Array || (s.push && y(s))))
              for (n = s.length; -1 < --n; )
                s[n] instanceof c &&
                  s[n].timeline === this &&
                  this.remove(s[n]);
            if (
              ((r =
                "number" != typeof t || e
                  ? 99999999999 < this.duration()
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              "string" == typeof e)
            )
              return this._parseTimeOrLabel(
                e,
                i && "number" == typeof t && null == this._labels[e]
                  ? t - r
                  : 0,
                i
              );
            if (
              ((e = e || 0),
              "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
            )
              null == t && (t = r);
            else {
              if (-1 === (n = t.indexOf("=")))
                return null == this._labels[t]
                  ? i
                    ? (this._labels[t] = r + e)
                    : e
                  : this._labels[t] + e;
              (e =
                parseInt(t.charAt(n - 1) + "1", 10) * Number(t.substr(n + 1))),
                (t =
                  1 < n ? this._parseTimeOrLabel(t.substr(0, n - 1), 0, i) : r);
            }
            return Number(t) + e;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              !1 !== e
            );
          }),
          (e.stop = function () {
            return this.paused(!0);
          }),
          (e.gotoAndPlay = function (t, e) {
            return this.play(t, e);
          }),
          (e.gotoAndStop = function (t, e) {
            return this.pause(t, e);
          }),
          (e.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s,
              r,
              n,
              o,
              a,
              h,
              l,
              c = this._time,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              u = this._startTime,
              f = this._timeScale,
              d = this._paused;
            if (
              (c !== this._time && (t += this._time - c),
              p - 1e-7 <= t && 0 <= t)
            )
              (this._totalTime = this._time = p),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((r = !0),
                  (o = "onComplete"),
                  (a = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && -1e-7 <= t) ||
                      this._rawPrevTime < 0 ||
                      this._rawPrevTime === g) &&
                    this._rawPrevTime !== t &&
                    this._first &&
                    ((a = !0),
                    this._rawPrevTime > g && (o = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : g),
                (t = p + 1e-4);
            else if (t < 1e-7)
              if (
                (((this._totalTime = this._time = 0) !== c ||
                  (0 === this._duration &&
                    this._rawPrevTime !== g &&
                    (0 < this._rawPrevTime ||
                      (t < 0 && 0 <= this._rawPrevTime)))) &&
                  ((o = "onReverseComplete"), (r = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((a = r = !0), (o = "onReverseComplete"))
                    : 0 <= this._rawPrevTime && this._first && (a = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : g),
                  0 === t && r)
                )
                  for (s = this._first; s && 0 === s._startTime; )
                    s._duration || (r = !1), (s = s._next);
                (t = 0), this._initted || (a = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !e) {
                if (c <= t)
                  for (s = this._first; s && s._startTime <= t && !h; )
                    s._duration ||
                      "isPause" !== s.data ||
                      s.ratio ||
                      (0 === s._startTime && 0 === this._rawPrevTime) ||
                      (h = s),
                      (s = s._next);
                else
                  for (s = this._last; s && s._startTime >= t && !h; )
                    s._duration ||
                      ("isPause" === s.data && 0 < s._rawPrevTime && (h = s)),
                      (s = s._prev);
                h &&
                  ((this._time = t = h._startTime),
                  (this._totalTime =
                    t +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = t;
            }
            if ((this._time !== c && this._first) || i || a || h) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== c &&
                    0 < t &&
                    (this._active = !0)),
                0 === c &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    e ||
                    this._callback("onStart")),
                c <= (l = this._time))
              )
                for (
                  s = this._first;
                  s &&
                  ((n = s._next), l === this._time && (!this._paused || d));

                )
                  (s._active || (s._startTime <= l && !s._paused && !s._gc)) &&
                    (h === s && this.pause(),
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i)),
                    (s = n);
              else
                for (
                  s = this._last;
                  s &&
                  ((n = s._prev), l === this._time && (!this._paused || d));

                ) {
                  if (
                    s._active ||
                    (s._startTime <= c && !s._paused && !s._gc)
                  ) {
                    if (h === s) {
                      for (h = s._prev; h && h.endTime() > this._time; )
                        h.render(
                          h._reversed
                            ? h.totalDuration() -
                                (t - h._startTime) * h._timeScale
                            : (t - h._startTime) * h._timeScale,
                          e,
                          i
                        ),
                          (h = h._prev);
                      (h = null), this.pause();
                    }
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i);
                  }
                  s = n;
                }
              this._onUpdate &&
                (e || (x.length && T(), this._callback("onUpdate"))),
                o &&
                  (this._gc ||
                    (u !== this._startTime && f === this._timeScale) ||
                    !(0 === this._time || p >= this.totalDuration()) ||
                    (r &&
                      (x.length && T(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[o] && this._callback(o)));
            }
          }),
          (e._hasPausedChild = function () {
            for (var t = this._first; t; ) {
              if (t._paused || (t instanceof f && t._hasPausedChild()))
                return !0;
              t = t._next;
            }
            return !1;
          }),
          (e.getChildren = function (t, e, i, s) {
            s = s || -9999999999;
            for (var r = [], n = this._first, o = 0; n; )
              n._startTime < s ||
                (n instanceof u
                  ? !1 !== e && (r[o++] = n)
                  : (!1 !== i && (r[o++] = n),
                    !1 !== t &&
                      (o = (r = r.concat(n.getChildren(!0, e, i))).length))),
                (n = n._next);
            return r;
          }),
          (e.getTweensOf = function (t, e) {
            var i,
              s,
              r = this._gc,
              n = [],
              o = 0;
            for (
              r && this._enabled(!0, !0), s = (i = u.getTweensOf(t)).length;
              -1 < --s;

            )
              (i[s].timeline === this || (e && this._contains(i[s]))) &&
                (n[o++] = i[s]);
            return r && this._enabled(!1, !0), n;
          }),
          (e.recent = function () {
            return this._recent;
          }),
          (e._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (e.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r; )
              r._startTime >= i && (r._startTime += t), (r = r._next);
            if (e) for (s in n) n[s] >= i && (n[s] += t);
            return this._uncache(!0);
          }),
          (e._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                s = i.length,
                r = !1;
              -1 < --s;

            )
              i[s]._kill(t, e) && (r = !0);
            return r;
          }),
          (e.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; -1 < --i; )
              e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0);
          }),
          (e.invalidate = function () {
            for (var t = this._first; t; ) t.invalidate(), (t = t._next);
            return c.prototype.invalidate.call(this);
          }),
          (e._enabled = function (t, e) {
            if (t === this._gc)
              for (var i = this._first; i; ) i._enabled(t, !0), (i = i._next);
            return p.prototype._enabled.call(this, t, e);
          }),
          (e.totalTime = function (t, e, i) {
            this._forcingPlayhead = !0;
            var s = c.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), s;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (e.totalDuration = function (t) {
            if (arguments.length)
              return t && this.totalDuration()
                ? this.timeScale(this._totalDuration / t)
                : this;
            if (this._dirty) {
              for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                (e = r._prev),
                  r._dirty && r.totalDuration(),
                  r._startTime > n &&
                  this._sortChildren &&
                  !r._paused &&
                  !this._calculatingDuration
                    ? ((this._calculatingDuration = 1),
                      this.add(r, r._startTime - r._delay),
                      (this._calculatingDuration = 0))
                    : (n = r._startTime),
                  r._startTime < 0 &&
                    !r._paused &&
                    ((s -= r._startTime),
                    this._timeline.smoothChildTiming &&
                      ((this._startTime += r._startTime / this._timeScale),
                      (this._time -= r._startTime),
                      (this._totalTime -= r._startTime),
                      (this._rawPrevTime -= r._startTime)),
                    this.shiftChildren(-r._startTime, !1, -9999999999),
                    (n = 0)),
                  s < (i = r._startTime + r._totalDuration / r._timeScale) &&
                    (s = i),
                  (r = e);
              (this._duration = this._totalDuration = s), (this._dirty = !1);
            }
            return this._totalDuration;
          }),
          (e.paused = function (t) {
            if (!t)
              for (var e = this._first, i = this._time; e; )
                e._startTime === i &&
                  "isPause" === e.data &&
                  (e._rawPrevTime = 0),
                  (e = e._next);
            return c.prototype.paused.apply(this, arguments);
          }),
          (e.usesFrames = function () {
            for (var t = this._timeline; t._timeline; ) t = t._timeline;
            return t === c._rootFramesTimeline;
          }),
          (e.rawTime = function (t) {
            return t &&
              (this._paused ||
                (this._repeat && 0 < this.time() && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(t) - this._startTime) * this._timeScale;
          }),
          f
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (e, a, t) {
        function i(t) {
          e.call(this, t),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._cycle = 0),
            (this._yoyo = !0 === this.vars.yoyo),
            (this._dirty = !0);
        }
        var S = 1e-10,
          s = a._internals,
          k = s.lazyTweens,
          C = s.lazyRender,
          h = _gsScope._gsDefine.globals,
          l = new t(null, null, 1, 0),
          t = (i.prototype = new e());
        return (
          (t.constructor = i),
          (t.kill()._gc = !1),
          (i.version = "2.0.2"),
          (t.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              e.prototype.invalidate.call(this)
            );
          }),
          (t.addCallback = function (t, e, i, s) {
            return this.add(a.delayedCall(0, t, i, s), e);
          }),
          (t.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    s = i.length,
                    r = this._parseTimeOrLabel(e);
                  -1 < --s;

                )
                  i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this;
          }),
          (t.removePause = function (t) {
            return this.removeCallback(e._internals.pauseCallback, t);
          }),
          (t.tweenTo = function (t, e) {
            e = e || {};
            var i,
              s,
              r,
              n = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              },
              o = (e.repeat && h.TweenMax) || a;
            for (s in e) n[s] = e[s];
            return (
              (n.time = this._parseTimeOrLabel(t)),
              (i =
                Math.abs(Number(n.time) - this._time) / this._timeScale ||
                0.001),
              (r = new o(this, i, n)),
              (n.onStart = function () {
                r.target.paused(!0),
                  r.vars.time === r.target.time() ||
                    i !== r.duration() ||
                    r.isFromTo ||
                    r
                      .duration(
                        Math.abs(r.vars.time - r.target.time()) /
                          r.target._timeScale
                      )
                      .render(r.time(), !0, !0),
                  e.onStart &&
                    e.onStart.apply(
                      e.onStartScope || e.callbackScope || r,
                      e.onStartParams || []
                    );
              }),
              r
            );
          }),
          (t.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (i.immediateRender = !1 !== i.immediateRender);
            i = this.tweenTo(e, i);
            return (
              (i.isFromTo = 1),
              i.duration(Math.abs(i.vars.time - t) / this._timeScale || 0.001)
            );
          }),
          (t.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s,
              r,
              n,
              o,
              a,
              h,
              l,
              c = this._time,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              u = this._duration,
              f = this._totalTime,
              d = this._startTime,
              _ = this._timeScale,
              m = this._rawPrevTime,
              g = this._paused,
              v = this._cycle;
            if (
              (c !== this._time && (t += this._time - c),
              p - 1e-7 <= t && 0 <= t)
            )
              this._locked ||
                ((this._totalTime = p), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((r = !0),
                  (o = "onComplete"),
                  (a = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && -1e-7 <= t) || m < 0 || m === S) &&
                    m !== t &&
                    this._first &&
                    ((a = !0), S < m && (o = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : S),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (this._time = t = 0)
                  : (t = (this._time = u) + 1e-4);
            else if (t < 1e-7)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                ((this._time = 0) !== c ||
                  (0 === u &&
                    m !== S &&
                    (0 < m || (t < 0 && 0 <= m)) &&
                    !this._locked)) &&
                  ((o = "onReverseComplete"), (r = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((a = r = !0), (o = "onReverseComplete"))
                    : 0 <= m && this._first && (a = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    u || !e || t || this._rawPrevTime === t ? t : S),
                  0 === t && r)
                )
                  for (s = this._first; s && 0 === s._startTime; )
                    s._duration || (r = !1), (s = s._next);
                (t = 0), this._initted || (a = !0);
              }
            else if (
              (0 === u && m < 0 && (a = !0),
              (this._time = this._rawPrevTime = t),
              this._locked ||
                ((this._totalTime = t),
                0 !== this._repeat &&
                  ((P = u + this._repeatDelay),
                  (this._cycle = (this._totalTime / P) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / P &&
                    f <= t &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * P),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    (this._time = u - this._time),
                  this._time > u
                    ? (t = (this._time = u) + 1e-4)
                    : this._time < 0
                    ? (this._time = t = 0)
                    : (t = this._time))),
              this._hasPause && !this._forcingPlayhead && !e)
            ) {
              if (c <= (t = this._time) || (this._repeat && v !== this._cycle))
                for (s = this._first; s && s._startTime <= t && !h; )
                  s._duration ||
                    "isPause" !== s.data ||
                    s.ratio ||
                    (0 === s._startTime && 0 === this._rawPrevTime) ||
                    (h = s),
                    (s = s._next);
              else
                for (s = this._last; s && s._startTime >= t && !h; )
                  s._duration ||
                    ("isPause" === s.data && 0 < s._rawPrevTime && (h = s)),
                    (s = s._prev);
              h &&
                h._startTime < u &&
                ((this._time = t = h._startTime),
                (this._totalTime =
                  t + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== v && !this._locked) {
              var y = this._yoyo && 0 != (1 & v),
                x = y === (this._yoyo && 0 != (1 & this._cycle)),
                T = this._totalTime,
                b = this._cycle,
                w = this._rawPrevTime,
                P = this._time;
              if (
                ((this._totalTime = v * u),
                this._cycle < v ? (y = !y) : (this._totalTime += u),
                (this._time = c),
                (this._rawPrevTime = 0 === u ? m - 1e-4 : m),
                (this._cycle = v),
                (this._locked = !0),
                this.render((c = y ? 0 : u), e, 0 === u),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = b),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                c !== this._time)
              )
                return;
              if (
                (x &&
                  ((this._cycle = v),
                  (this._locked = !0),
                  this.render((c = y ? u + 1e-4 : -1e-4), !0, !1)),
                (this._locked = !1),
                this._paused && !g)
              )
                return;
              (this._time = P),
                (this._totalTime = T),
                (this._cycle = b),
                (this._rawPrevTime = w);
            }
            if ((this._time !== c && this._first) || i || a || h) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== f &&
                    0 < t &&
                    (this._active = !0)),
                0 === f &&
                  this.vars.onStart &&
                  ((0 === this._totalTime && this._totalDuration) ||
                    e ||
                    this._callback("onStart")),
                c <= (l = this._time))
              )
                for (
                  s = this._first;
                  s &&
                  ((n = s._next), l === this._time && (!this._paused || g));

                )
                  (s._active ||
                    (s._startTime <= this._time && !s._paused && !s._gc)) &&
                    (h === s && this.pause(),
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i)),
                    (s = n);
              else
                for (
                  s = this._last;
                  s &&
                  ((n = s._prev), l === this._time && (!this._paused || g));

                ) {
                  if (
                    s._active ||
                    (s._startTime <= c && !s._paused && !s._gc)
                  ) {
                    if (h === s) {
                      for (h = s._prev; h && h.endTime() > this._time; )
                        h.render(
                          h._reversed
                            ? h.totalDuration() -
                                (t - h._startTime) * h._timeScale
                            : (t - h._startTime) * h._timeScale,
                          e,
                          i
                        ),
                          (h = h._prev);
                      (h = null), this.pause();
                    }
                    s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i);
                  }
                  s = n;
                }
              this._onUpdate &&
                (e || (k.length && C(), this._callback("onUpdate"))),
                o &&
                  (this._locked ||
                    this._gc ||
                    (d !== this._startTime && _ === this._timeScale) ||
                    !(0 === this._time || p >= this.totalDuration()) ||
                    (r &&
                      (k.length && C(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[o] && this._callback(o)));
            } else
              f !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (t.getActive = function (t, e, i) {
            for (
              var s,
                r = [],
                n = this.getChildren(
                  (t = null == t ? !0 : t),
                  (e = null == e ? !0 : e),
                  (i = null == i ? !1 : i)
                ),
                o = 0,
                a = n.length,
                h = 0;
              h < a;
              h++
            )
              (s = n[h]).isActive() && (r[o++] = s);
            return r;
          }),
          (t.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            for (var e = this.getLabelsArray(), i = e.length, s = 0; s < i; s++)
              if (e[s].time > t) return e[s].name;
            return null;
          }),
          (t.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; -1 < --i; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (t.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (t.invalidate = function () {
            return (this._locked = !1), e.prototype.invalidate.call(this);
          }),
          (t.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration() || 0;
          }),
          (t.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (t.totalDuration = function (t) {
            return arguments.length
              ? -1 !== this._repeat && t
                ? this.timeScale(this.totalDuration() / t)
                : this
              : (this._dirty &&
                  (e.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (t.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (t.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (t.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (t.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (t.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          i
        );
      },
      !0
    ),
    (w = 180 / Math.PI),
    (v = []),
    (y = []),
    (x = []),
    (g = {}),
    (e = _gsScope._gsDefine.globals),
    (m = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.8",
      API: 2,
      global: !0,
      init: function (t, e, i) {
        (this._target = t),
          e instanceof Array && (e = { values: e }),
          (this._func = {}),
          (this._mod = {}),
          (this._props = []),
          (this._timeRes =
            null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
        var s,
          r,
          n,
          o,
          a,
          h = e.values || [],
          l = {},
          c = h[0],
          p = e.autoRotate || i.vars.orientToBezier;
        for (s in ((this._autoRotate = p
          ? p instanceof Array
            ? p
            : [["x", "y", "rotation", (!0 !== p && Number(p)) || 0]]
          : null),
        c))
          this._props.push(s);
        for (n = this._props.length; -1 < --n; )
          (s = this._props[n]),
            this._overwriteProps.push(s),
            (r = this._func[s] = "function" == typeof t[s]),
            (l[s] = r
              ? t[
                  s.indexOf("set") ||
                  "function" != typeof t["get" + s.substr(3)]
                    ? s
                    : "get" + s.substr(3)
                ]()
              : parseFloat(t[s])),
            a || (l[s] !== h[0][s] && (a = l));
        if (
          ((this._beziers =
            "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
              ? u(
                  h,
                  isNaN(e.curviness) ? 1 : e.curviness,
                  !1,
                  "thruBasic" === e.type,
                  e.correlate,
                  a
                )
              : (function (t, e, i) {
                  var s,
                    r,
                    n,
                    o,
                    a,
                    h,
                    l,
                    c,
                    p,
                    u,
                    f,
                    d = {},
                    _ = "cubic" === (e = e || "soft") ? 3 : 2,
                    m = "soft" === e,
                    g = [];
                  if (
                    null == (t = m && i ? [i].concat(t) : t) ||
                    t.length < 1 + _
                  )
                    throw "invalid Bezier data";
                  for (p in t[0]) g.push(p);
                  for (h = g.length; -1 < --h; ) {
                    for (
                      d[(p = g[h])] = a = [], c = t.length, l = u = 0;
                      l < c;
                      l++
                    )
                      (s =
                        null == i
                          ? t[l][p]
                          : "string" == typeof (f = t[l][p]) &&
                            "=" === f.charAt(1)
                          ? i[p] + Number(f.charAt(0) + f.substr(2))
                          : Number(f)),
                        m &&
                          1 < l &&
                          l < c - 1 &&
                          (a[u++] = (s + a[u - 2]) / 2),
                        (a[u++] = s);
                    for (c = u - _ + 1, l = u = 0; l < c; l += _)
                      (s = a[l]),
                        (r = a[l + 1]),
                        (n = a[l + 2]),
                        (o = 2 == _ ? 0 : a[l + 3]),
                        (a[u++] = f =
                          3 == _
                            ? new T(s, r, n, o)
                            : new T(s, (2 * r + s) / 3, (2 * r + n) / 3, n));
                    a.length = u;
                  }
                  return d;
                })(h, e.type, l)),
          (this._segCount = this._beziers[s].length),
          this._timeRes &&
            ((e = f(this._beziers, this._timeRes)),
            (this._length = e.length),
            (this._lengths = e.lengths),
            (this._segments = e.segments),
            (this._l1 = this._li = this._s1 = this._si = 0),
            (this._l2 = this._lengths[0]),
            (this._curSeg = this._segments[0]),
            (this._s2 = this._curSeg[0]),
            (this._prec = 1 / this._curSeg.length)),
          (p = this._autoRotate))
        )
          for (
            this._initialRotations = [],
              p[0] instanceof Array || (this._autoRotate = p = [p]),
              n = p.length;
            -1 < --n;

          ) {
            for (o = 0; o < 3; o++)
              (s = p[n][o]),
                (this._func[s] =
                  "function" == typeof t[s] &&
                  t[
                    s.indexOf("set") ||
                    "function" != typeof t["get" + s.substr(3)]
                      ? s
                      : "get" + s.substr(3)
                  ]);
            (s = p[n][2]),
              (this._initialRotations[n] =
                (this._func[s]
                  ? this._func[s].call(this._target)
                  : this._target[s]) || 0),
              this._overwriteProps.push(s);
          }
        return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
      },
      set: function (t) {
        var e,
          i,
          s,
          r,
          n,
          o,
          a,
          h,
          l,
          c = this._segCount,
          p = this._func,
          u = this._target,
          f = t !== this._startRatio;
        if (this._timeRes) {
          if (
            ((h = this._lengths),
            (l = this._curSeg),
            (t *= this._length),
            (b = this._li),
            t > this._l2 && b < c - 1)
          ) {
            for (a = c - 1; b < a && (this._l2 = h[++b]) <= t; );
            (this._l1 = h[b - 1]),
              (this._li = b),
              (this._curSeg = l = this._segments[b]),
              (this._s2 = l[(this._s1 = this._si = 0)]);
          } else if (t < this._l1 && 0 < b) {
            for (; 0 < b && (this._l1 = h[--b]) >= t; );
            0 === b && t < this._l1 ? (this._l1 = 0) : b++,
              (this._l2 = h[b]),
              (this._li = b),
              (this._curSeg = l = this._segments[b]),
              (this._s1 = l[(this._si = l.length - 1) - 1] || 0),
              (this._s2 = l[this._si]);
          }
          if (
            ((e = b),
            (t -= this._l1),
            (b = this._si),
            t > this._s2 && b < l.length - 1)
          ) {
            for (a = l.length - 1; b < a && (this._s2 = l[++b]) <= t; );
            (this._s1 = l[b - 1]), (this._si = b);
          } else if (t < this._s1 && 0 < b) {
            for (; 0 < b && (this._s1 = l[--b]) >= t; );
            0 === b && t < this._s1 ? (this._s1 = 0) : b++,
              (this._s2 = l[b]),
              (this._si = b);
          }
          n = (b + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        } else
          n =
            (t - (e = t < 0 ? 0 : 1 <= t ? c - 1 : (c * t) >> 0) * (1 / c)) * c;
        for (i = 1 - n, b = this._props.length; -1 < --b; )
          (s = this._props[b]),
            (o =
              (n * n * (r = this._beziers[s][e]).da +
                3 * i * (n * r.ca + i * r.ba)) *
                n +
              r.a),
            this._mod[s] && (o = this._mod[s](o, u)),
            p[s] ? u[s](o) : (u[s] = o);
        if (this._autoRotate)
          for (
            var d, _, m, g, v, y, x, T = this._autoRotate, b = T.length;
            -1 < --b;

          )
            (s = T[b][2]),
              (y = T[b][3] || 0),
              (x = !0 === T[b][4] ? 1 : w),
              (r = this._beziers[T[b][0]]),
              (d = this._beziers[T[b][1]]),
              r &&
                d &&
                ((r = r[e]),
                (d = d[e]),
                (_ = r.a + (r.b - r.a) * n),
                (_ += ((g = r.b + (r.c - r.b) * n) - _) * n),
                (g += (r.c + (r.d - r.c) * n - g) * n),
                (m = d.a + (d.b - d.a) * n),
                (m += ((v = d.b + (d.c - d.b) * n) - m) * n),
                (v += (d.c + (d.d - d.c) * n - v) * n),
                (o = f
                  ? Math.atan2(v - m, g - _) * x + y
                  : this._initialRotations[b]),
                this._mod[s] && (o = this._mod[s](o, u)),
                p[s] ? u[s](o) : (u[s] = o));
      },
    })),
    (t = m.prototype),
    (m.bezierThrough = u),
    (m.cubicToQuadratic = b),
    (m._autoCSS = !0),
    (m.quadraticToCubic = function (t, e, i) {
      return new T(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }),
    (m._cssRegister = function () {
      var f,
        d,
        _,
        t = e.CSSPlugin;
      t &&
        ((t = t._internals),
        (f = t._parseToProxy),
        (d = t._setPluginRatio),
        (_ = t.CSSPropTween),
        t._registerComplexSpecialProp("bezier", {
          parser: function (t, e, i, s, r, n) {
            e instanceof Array && (e = { values: e }), (n = new m());
            var o,
              a,
              h,
              l = e.values,
              c = l.length - 1,
              p = [],
              u = {};
            if (c < 0) return r;
            for (o = 0; o <= c; o++)
              (h = f(t, l[o], s, r, n, c !== o)), (p[o] = h.end);
            for (a in e) u[a] = e[a];
            return (
              (u.values = p),
              ((r = new _(t, "bezier", 0, 0, h.pt, 2)).data = h),
              (r.plugin = n),
              (r.setRatio = d),
              0 === u.autoRotate && (u.autoRotate = !0),
              !u.autoRotate ||
                u.autoRotate instanceof Array ||
                ((o = !0 === u.autoRotate ? 0 : Number(u.autoRotate)),
                (u.autoRotate =
                  null != h.end.left
                    ? [["left", "top", "rotation", o, !1]]
                    : null != h.end.x && [["x", "y", "rotation", o, !1]])),
              u.autoRotate &&
                (s._transform || s._enableTransforms(!1),
                (h.autoRotate = s._target._gsTransform),
                (h.proxy.rotation = h.autoRotate.rotation || 0),
                s._overwriteProps.push("rotation")),
              n._onInitTween(h.proxy, u, s._tween),
              r
            );
          },
        }));
    }),
    (t._mod = function (t) {
      for (var e, i = this._overwriteProps, s = i.length; -1 < --s; )
        (e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e);
    }),
    (t._kill = function (t) {
      var e,
        i,
        s = this._props;
      for (e in this._beziers)
        if (e in t)
          for (
            delete this._beziers[e], delete this._func[e], i = s.length;
            -1 < --i;

          )
            s[i] === e && s.splice(i, 1);
      if ((s = this._autoRotate))
        for (i = s.length; -1 < --i; ) t[s[i][2]] && s.splice(i, 1);
      return this._super._kill.call(this, t);
    }),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (n, R) {
        var u,
          b,
          P,
          p,
          A = function () {
            n.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = A.prototype.setRatio);
          },
          l = _gsScope._gsDefine.globals,
          f = {},
          t = (A.prototype = new n("css"));
        ((t.constructor = A).version = "2.0.2"),
          (A.API = 2),
          (A.defaultTransformPerspective = 0),
          (A.defaultSkewType = "compensated"),
          (A.defaultSmoothOrigin = !0),
          (A.suffixMap = {
            top: (t = "px"),
            right: t,
            bottom: t,
            left: t,
            width: t,
            height: t,
            fontSize: t,
            padding: t,
            margin: t,
            perspective: t,
            lineHeight: "",
          });
        function o(t, e) {
          return e.toUpperCase();
        }
        function a(t, e) {
          return Q.createElementNS
            ? Q.createElementNS(e || "http://www.w3.org/1999/xhtml", t)
            : Q.createElement(t);
        }
        function h(t) {
          return L.test(
            "string" == typeof t ? t : (t.currentStyle || t.style).filter || ""
          )
            ? parseFloat(RegExp.$1) / 100
            : 1;
        }
        function d(t) {
          _gsScope.console && console.log(t);
        }
        function w(t, e) {
          var i,
            s,
            r = (e = e || J).style;
          if (void 0 !== r[t]) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1),
              i = ["O", "Moz", "ms", "Ms", "Webkit"],
              s = 5;
            -1 < --s && void 0 === r[i[s] + t];

          );
          return 0 <= s
            ? ((st = "-" + (rt = 3 === s ? "ms" : i[s]).toLowerCase() + "-"),
              rt + t)
            : null;
        }
        function _(t, e) {
          var i,
            s,
            r = {};
          if ((e = e || nt(t, null)))
            if ((i = e.length))
              for (; -1 < --i; )
                (-1 !== (s = e[i]).indexOf("-transform") && Xt !== s) ||
                  (r[s.replace(H, o)] = e.getPropertyValue(s));
            else
              for (i in e)
                (-1 !== i.indexOf("Transform") && At !== i) || (r[i] = e[i]);
          else if ((e = t.currentStyle || t.style))
            for (i in e)
              "string" == typeof i &&
                void 0 === r[i] &&
                (r[i.replace(H, o)] = e[i]);
          return (
            it || (r.opacity = h(t)),
            (t = jt(t, e, !1)),
            (r.rotation = t.rotation),
            (r.skewX = t.skewX),
            (r.scaleX = t.scaleX),
            (r.scaleY = t.scaleY),
            (r.x = t.x),
            (r.y = t.y),
            Mt &&
              ((r.z = t.z),
              (r.rotationX = t.rotationX),
              (r.rotationY = t.rotationY),
              (r.scaleZ = t.scaleZ)),
            r.filters && delete r.filters,
            r
          );
        }
        function m(t, e, i, s, r) {
          var n,
            o,
            a,
            h = {},
            l = t.style;
          for (o in i)
            "cssText" !== o &&
              "length" !== o &&
              isNaN(o) &&
              (e[o] !== (n = i[o]) || (r && r[o])) &&
              -1 === o.indexOf("Origin") &&
              ("number" == typeof n || "string" == typeof n) &&
              ((h[o] =
                "auto" !== n || ("left" !== o && "top" !== o)
                  ? ("" !== n && "auto" !== n && "none" !== n) ||
                    "string" != typeof e[o] ||
                    "" === e[o].replace(z, "")
                    ? n
                    : 0
                  : ht(t, o)),
              void 0 !== l[o] && (a = new vt(l, o, l[o], a)));
          if (s) for (o in s) "className" !== o && (h[o] = s[o]);
          return { difs: h, firstMPT: a };
        }
        function k(t, e) {
          return "string" ==
            typeof (t = "function" == typeof t ? t(X, E) : t) &&
            "=" === t.charAt(1)
            ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
            : parseFloat(t) - parseFloat(e) || 0;
        }
        function S(t, e) {
          var i =
            "string" == typeof (t = "function" == typeof t ? t(X, E) : t) &&
            "=" === t.charAt(1);
          return null ==
            (t =
              "string" == typeof t && "v" === t.charAt(t.length - 2)
                ? (i ? t.substr(0, 2) : 0) +
                  window[
                    "inner" + ("vh" === t.substr(-2) ? "Height" : "Width")
                  ] *
                    (parseFloat(i ? t.substr(2) : t) / 100)
                : t)
            ? e
            : i
            ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
            : parseFloat(t) || 0;
        }
        function C(t, e, i, s) {
          var r, n, o;
          return (o =
            (o =
              null == (t = "function" == typeof t ? t(X, E) : t)
                ? e
                : "number" == typeof t
                ? t
                : ((r = 360),
                  (n = t.split("_")),
                  (o =
                    ((o = "=" === t.charAt(1))
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(n[0].substr(2))
                      : parseFloat(n[0])) *
                      (-1 === t.indexOf("rad") ? 1 : $) -
                    (o ? 0 : e)),
                  n.length &&
                    (s && (s[i] = e + o),
                    -1 !== t.indexOf("short") &&
                      (o %= r) !== o % 180 &&
                      (o = o < 0 ? o + r : o - r),
                    -1 !== t.indexOf("_cw") && o < 0
                      ? (o = ((o + 3599999999640) % r) - ((o / r) | 0) * r)
                      : -1 !== t.indexOf("ccw") &&
                        0 < o &&
                        (o = ((o - 3599999999640) % r) - ((o / r) | 0) * r)),
                  e + o)) < 1e-6 && -1e-6 < o
              ? 0
              : o);
        }
        function c(t, e, i) {
          return (
            (255 *
              (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
                ? e + (i - e) * t * 6
                : t < 0.5
                ? i
                : 3 * t < 2
                ? e + (i - e) * (2 / 3 - t) * 6
                : e) +
              0.5) |
            0
          );
        }
        function i(t, e) {
          var i,
            s,
            r,
            n = t.match(dt) || [],
            o = 0,
            a = "";
          if (!n.length) return t;
          for (i = 0; i < n.length; i++)
            (s = n[i]),
              (o += (r = t.substr(o, t.indexOf(s, o) - o)).length + s.length),
              3 === (s = ft(s, e)).length && s.push(1),
              (a +=
                r +
                (e
                  ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3]
                  : "rgba(" + s.join(",")) +
                ")");
          return a + t.substr(o);
        }
        var O,
          g,
          v,
          D,
          y,
          T,
          E,
          X,
          M = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          Y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          z = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          F = /(?:\d|\-|\+|=|#|\.)*/g,
          L = /opacity *= *([^)]*)/i,
          I = /opacity:([^;]*)/i,
          r = /alpha\(opacity *=.+?\)/i,
          B = /^(rgb|hsl)/,
          N = /([A-Z])/g,
          H = /-([a-z])/gi,
          W = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          j = /(?:Left|Right|Width)/i,
          G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          U = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          V = /,(?=[^\)]*(?:\(|$))/gi,
          q = /[\s,\(]/i,
          Z = Math.PI / 180,
          $ = 180 / Math.PI,
          K = {},
          e = { style: {} },
          Q = _gsScope.document || {
            createElement: function () {
              return e;
            },
          },
          J = a("div"),
          tt = a("img"),
          s = (A._internals = { _specialProps: f }),
          et = (_gsScope.navigator || {}).userAgent || "",
          it =
            ((Et = et.indexOf("Android")),
            (Ot = a("a")),
            (v =
              -1 !== et.indexOf("Safari") &&
              -1 === et.indexOf("Chrome") &&
              (-1 === Et || 3 < parseFloat(et.substr(Et + 8, 2)))),
            (y = v && parseFloat(et.substr(et.indexOf("Version/") + 8, 2)) < 6),
            (D = -1 !== et.indexOf("Firefox")),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(et) ||
              /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(et)) &&
              (T = parseFloat(RegExp.$1)),
            !!Ot &&
              ((Ot.style.cssText = "top:1px;opacity:.55;"),
              /^0.55/.test(Ot.style.opacity))),
          st = "",
          rt = "",
          nt = (
            "undefined" != typeof window
              ? window
              : Q.defaultView || { getComputedStyle: function () {} }
          ).getComputedStyle,
          ot = (A.getStyle = function (t, e, i, s, r) {
            var n;
            return it || "opacity" !== e
              ? (!s && t.style[e]
                  ? (n = t.style[e])
                  : (i = i || nt(t))
                  ? (n =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(N, "-$1").toLowerCase()))
                  : t.currentStyle && (n = t.currentStyle[e]),
                null == r ||
                (n && "none" !== n && "auto" !== n && "auto auto" !== n)
                  ? n
                  : r)
              : h(t);
          }),
          at = (s.convertToPixels = function (t, e, i, s, r) {
            if ("px" === s || (!s && "lineHeight" !== e)) return i;
            if ("auto" === s || !i) return 0;
            var n,
              o,
              a,
              h = j.test(e),
              l = t,
              c = J.style,
              p = i < 0,
              u = 1 === i;
            if ((p && (i = -i), u && (i *= 100), "lineHeight" !== e || s))
              if ("%" === s && -1 !== e.indexOf("border"))
                n = (i / 100) * (h ? t.clientWidth : t.clientHeight);
              else {
                if (
                  ((c.cssText =
                    "border:0 solid red;position:" +
                    ot(t, "position") +
                    ";line-height:0;"),
                  "%" !== s &&
                    l.appendChild &&
                    "v" !== s.charAt(0) &&
                    "rem" !== s)
                )
                  c[h ? "borderLeftWidth" : "borderTopWidth"] = i + s;
                else {
                  if (
                    ((l = t.parentNode || Q.body),
                    -1 !== ot(l, "display").indexOf("flex") &&
                      (c.position = "absolute"),
                    (o = l._gsCache),
                    (a = R.ticker.frame),
                    o && h && o.time === a)
                  )
                    return (o.width * i) / 100;
                  c[h ? "width" : "height"] = i + s;
                }
                l.appendChild(J),
                  (n = parseFloat(J[h ? "offsetWidth" : "offsetHeight"])),
                  l.removeChild(J),
                  h &&
                    "%" === s &&
                    !1 !== A.cacheWidths &&
                    (((o = l._gsCache = l._gsCache || {}).time = a),
                    (o.width = (n / i) * 100)),
                  0 !== n || r || (n = at(t, e, i, s, !0));
              }
            else
              (o = nt(t).lineHeight),
                (t.style.lineHeight = i),
                (n = parseFloat(nt(t).lineHeight)),
                (t.style.lineHeight = o);
            return u && (n /= 100), p ? -n : n;
          }),
          ht = (s.calculateOffset = function (t, e, i) {
            if ("absolute" !== ot(t, "position", i)) return 0;
            var s = "left" === e ? "Left" : "Top",
              i = ot(t, "margin" + s, i);
            return (
              t["offset" + s] - (at(t, e, parseFloat(i), i.replace(F, "")) || 0)
            );
          }),
          lt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          ct = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          pt = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            var i,
              s = (t = null == t || "" === t ? "0 0" : t).split(" "),
              r =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : s[0],
              n =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : s[1];
            if (3 < s.length && !e) {
              for (
                s = t.split(", ").join(",").split(","), t = [], i = 0;
                i < s.length;
                i++
              )
                t.push(pt(s[i]));
              return t.join(",");
            }
            return (
              null == n
                ? (n = "center" === r ? "50%" : "0")
                : "center" === n && (n = "50%"),
              (t =
                (r =
                  "center" === r ||
                  (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))
                    ? "50%"
                    : r) +
                " " +
                n +
                (2 < s.length ? " " + s[2] : "")),
              e &&
                ((e.oxp = -1 !== r.indexOf("%")),
                (e.oyp = -1 !== n.indexOf("%")),
                (e.oxr = "=" === r.charAt(1)),
                (e.oyr = "=" === n.charAt(1)),
                (e.ox = parseFloat(r.replace(z, ""))),
                (e.oy = parseFloat(n.replace(z, ""))),
                (e.v = t)),
              e || t
            );
          },
          ut = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ft = (A.parseColor = function (t, e) {
            var i, s, r, n, o, a, h, l;
            if (t)
              if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  ut[t])
                )
                  i = ut[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    (t =
                      "#" +
                      (s = t.charAt(1)) +
                      s +
                      (r = t.charAt(2)) +
                      r +
                      (n = t.charAt(3)) +
                      n),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      (t >> 8) & 255,
                      255 & t,
                    ]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = l = t.match(M)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(Y);
                  } else
                    (o = (Number(i[0]) % 360) / 360),
                      (a = Number(i[1]) / 100),
                      (s =
                        2 * (h = Number(i[2]) / 100) -
                        (r = h <= 0.5 ? h * (a + 1) : h + a - h * a)),
                      3 < i.length && (i[3] = Number(i[3])),
                      (i[0] = c(o + 1 / 3, s, r)),
                      (i[1] = c(o, s, r)),
                      (i[2] = c(o - 1 / 3, s, r));
                else i = t.match(M) || ut.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  3 < i.length && (i[3] = Number(i[3]));
              }
            else i = ut.black;
            return (
              e &&
                !l &&
                ((s = i[0] / 255),
                (r = i[1] / 255),
                (n = i[2] / 255),
                (h = ((t = Math.max(s, r, n)) + (e = Math.min(s, r, n))) / 2),
                t === e
                  ? (o = a = 0)
                  : ((l = t - e),
                    (a = 0.5 < h ? l / (2 - t - e) : l / (t + e)),
                    (o =
                      t === s
                        ? (r - n) / l + (r < n ? 6 : 0)
                        : t === r
                        ? (n - s) / l + 2
                        : (s - r) / l + 4),
                    (o *= 60)),
                (i[0] = (o + 0.5) | 0),
                (i[1] = (100 * a + 0.5) | 0),
                (i[2] = (100 * h + 0.5) | 0)),
              i
            );
          }),
          dt =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in ut) dt += "|" + t + "\\b";
        (dt = new RegExp(dt + ")", "gi")),
          (A.colorStringFilter = function (t) {
            var e = t[0] + " " + t[1];
            dt.test(e) &&
              ((e = -1 !== e.indexOf("hsl(") || -1 !== e.indexOf("hsla(")),
              (t[0] = i(t[0], e)),
              (t[1] = i(t[1], e))),
              (dt.lastIndex = 0);
          }),
          R.defaultStringFilter ||
            (R.defaultStringFilter = A.colorStringFilter);
        function _t(t, e, n, o) {
          if (null == t)
            return function (t) {
              return t;
            };
          var a,
            h = e ? (t.match(dt) || [""])[0] : "",
            l = t.split(h).join("").match(x) || [],
            c = t.substr(0, t.indexOf(l[0])),
            p = ")" === t.charAt(t.length - 1) ? ")" : "",
            u = -1 !== t.indexOf(" ") ? " " : ",",
            f = l.length,
            d = 0 < f ? l[0].replace(M, "") : "";
          return f
            ? (a = e
                ? function (t) {
                    var e, i, s, r;
                    if ("number" == typeof t) t += d;
                    else if (o && V.test(t)) {
                      for (
                        r = t.replace(V, "|").split("|"), s = 0;
                        s < r.length;
                        s++
                      )
                        r[s] = a(r[s]);
                      return r.join(",");
                    }
                    if (
                      ((e = (t.match(dt) || [h])[0]),
                      (s = (i = t.split(e).join("").match(x) || []).length),
                      f > s--)
                    )
                      for (; ++s < f; ) i[s] = n ? i[((s - 1) / 2) | 0] : l[s];
                    return (
                      c +
                      i.join(u) +
                      u +
                      e +
                      p +
                      (-1 !== t.indexOf("inset") ? " inset" : "")
                    );
                  }
                : function (t) {
                    var e, i, s;
                    if ("number" == typeof t) t += d;
                    else if (o && V.test(t)) {
                      for (
                        i = t.replace(V, "|").split("|"), s = 0;
                        s < i.length;
                        s++
                      )
                        i[s] = a(i[s]);
                      return i.join(",");
                    }
                    if (((s = (e = t.match(x) || []).length), f > s--))
                      for (; ++s < f; ) e[s] = n ? e[((s - 1) / 2) | 0] : l[s];
                    return c + e.join(u) + p;
                  })
            : function (t) {
                return t;
              };
        }
        function mt(l) {
          return (
            (l = l.split(",")),
            function (t, e, i, s, r, n, o) {
              var a,
                h = (e + "").split(" ");
              for (o = {}, a = 0; a < 4; a++)
                o[l[a]] = h[a] = h[a] || h[((a - 1) / 2) >> 0];
              return s.parse(t, o, r, n);
            }
          );
        }
        function gt(t, e, i, s, r, n) {
          return (
            ((n = new yt(t, e, i, s - i, r, -1, n)).b = i), (n.e = n.xs0 = s), n
          );
        }
        var vt =
            ((s._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e, i, s, r, n, o = this.data, a = o.proxy, h = o.firstMPT;
                h;

              )
                (e = a[h.v]),
                  h.r ? (e = h.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0),
                  (h.t[h.p] = e),
                  (h = h._next);
              if (
                (o.autoRotate &&
                  (o.autoRotate.rotation = o.mod
                    ? o.mod.call(this._tween, a.rotation, this.t, this._tween)
                    : a.rotation),
                1 === t || 0 === t)
              )
                for (h = o.firstMPT, n = 1 === t ? "e" : "b"; h; ) {
                  if ((i = h.t).type) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++)
                        r += i["xn" + s] + i["xs" + (s + 1)];
                      i[n] = r;
                    }
                  } else i[n] = i.s + i.xs0;
                  h = h._next;
                }
            }),
            function (t, e, i, s, r) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = r),
                s && ((s._prev = this)._next = s);
            }),
          yt =
            ((s._parseToProxy = function (t, e, i, s, r, n) {
              var o,
                a,
                h,
                l,
                c = s,
                p = {},
                u = {},
                f = i._transform,
                d = K;
              for (
                i._transform = null,
                  K = e,
                  s = r = i.parse(t, e, s, r),
                  K = d,
                  n &&
                    ((i._transform = f),
                    c && ((c._prev = null), c._prev && (c._prev._next = null)));
                s && s !== c;

              ) {
                if (
                  s.type <= 1 &&
                  ((u[(a = s.p)] = s.s + s.c),
                  (p[a] = s.s),
                  n || ((l = new vt(s, "s", a, l, s.r)), (s.c = 0)),
                  1 === s.type)
                )
                  for (o = s.l; 0 < --o; )
                    (u[(a = s.p + "_" + (h = "xn" + o))] = s.data[h]),
                      (p[a] = s[h]),
                      n || (l = new vt(s, h, a, l, s.rxp[h]));
                s = s._next;
              }
              return { proxy: p, end: u, firstMPT: l, pt: r };
            }),
            (s.CSSPropTween = function (t, e, i, s, r, n, o, a, h, l, c) {
              (this.t = t),
                (this.p = e),
                (this.s = i),
                (this.c = s),
                (this.n = o || e),
                t instanceof yt || p.push(this.n),
                (this.r = a && ("function" == typeof a ? a : Math.round)),
                (this.type = n || 0),
                h && ((this.pr = h), (u = !0)),
                (this.b = void 0 === l ? i : l),
                (this.e = void 0 === c ? i + s : c),
                r && ((this._next = r)._prev = this);
            })),
          xt = (A.parseComplex = function (t, e, i, s, r, n, o, a, h, l) {
            (i = i || n || ""),
              "function" == typeof s && (s = s(X, E)),
              (o = new yt(t, e, 0, 0, o, l ? 2 : 1, null, !1, a, i, s)),
              (s += ""),
              r &&
                dt.test(s + i) &&
                (A.colorStringFilter((s = [i, s])), (i = s[0]), (s = s[1]));
            var c,
              p,
              u,
              f,
              d,
              _,
              m,
              g,
              v,
              y,
              x,
              T,
              b = i.split(", ").join(",").split(" "),
              w = s.split(", ").join(",").split(" "),
              P = b.length,
              S = !1 !== O;
            for (
              (-1 === s.indexOf(",") && -1 === i.indexOf(",")) ||
                ((w =
                  -1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl")
                    ? ((b = b.join(" ").replace(V, ", ").split(" ")),
                      w.join(" ").replace(V, ", ").split(" "))
                    : ((b = b.join(" ").split(",").join(", ").split(" ")),
                      w.join(" ").split(",").join(", ").split(" "))),
                (P = b.length)),
                P !== w.length && (P = (b = (n || "").split(" ")).length),
                o.plugin = h,
                o.setRatio = l,
                c = dt.lastIndex = 0;
              c < P;
              c++
            )
              if (((f = b[c]), (d = w[c] + ""), (g = parseFloat(f)) || 0 === g))
                o.appendXtra(
                  "",
                  g,
                  k(d, g),
                  d.replace(Y, ""),
                  S && -1 !== d.indexOf("px") && Math.round,
                  !0
                );
              else if (r && dt.test(f))
                (x = ")" + ((x = d.indexOf(")") + 1) ? d.substr(x) : "")),
                  (T = -1 !== d.indexOf("hsl") && it),
                  (v = d),
                  (f = ft(f, T)),
                  (d = ft(d, T)),
                  (g = 6 < f.length + d.length) && !it && 0 === d[3]
                    ? ((o["xs" + o.l] += o.l ? " transparent" : "transparent"),
                      (o.e = o.e.split(w[c]).join("transparent")))
                    : (it || (g = !1),
                      T
                        ? o
                            .appendXtra(
                              v.substr(0, v.indexOf("hsl")) +
                                (g ? "hsla(" : "hsl("),
                              f[0],
                              k(d[0], f[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", f[1], k(d[1], f[1]), "%,", !1)
                            .appendXtra(
                              "",
                              f[2],
                              k(d[2], f[2]),
                              g ? "%," : "%" + x,
                              !1
                            )
                        : o
                            .appendXtra(
                              v.substr(0, v.indexOf("rgb")) +
                                (g ? "rgba(" : "rgb("),
                              f[0],
                              d[0] - f[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", f[1], d[1] - f[1], ",", Math.round)
                            .appendXtra(
                              "",
                              f[2],
                              d[2] - f[2],
                              g ? "," : x,
                              Math.round
                            ),
                      g &&
                        ((f = f.length < 4 ? 1 : f[3]),
                        o.appendXtra(
                          "",
                          f,
                          (d.length < 4 ? 1 : d[3]) - f,
                          x,
                          !1
                        ))),
                  (dt.lastIndex = 0);
              else if ((_ = f.match(M))) {
                if (!(m = d.match(Y)) || m.length !== _.length) return o;
                for (p = u = 0; p < _.length; p++)
                  (y = _[p]),
                    (v = f.indexOf(y, u)),
                    o.appendXtra(
                      f.substr(u, v - u),
                      Number(y),
                      k(m[p], y),
                      "",
                      S && "px" === f.substr(v + y.length, 2) && Math.round,
                      0 === p
                    ),
                    (u = v + y.length);
                o["xs" + o.l] += f.substr(u);
              } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + d : d;
            if (-1 !== s.indexOf("=") && o.data) {
              for (x = o.xs0 + o.data.s, c = 1; c < o.l; c++)
                x += o["xs" + c] + o.data["xn" + c];
              o.e = x + o["xs" + c];
            }
            return o.l || ((o.type = -1), (o.xs0 = o.e)), o.xfirst || o;
          }),
          Tt = 9;
        for ((t = yt.prototype).l = t.pr = 0; 0 < --Tt; )
          (t["xn" + Tt] = 0), (t["xs" + Tt] = "");
        (t.xs0 = ""),
          (t._next =
            t._prev =
            t.xfirst =
            t.data =
            t.plugin =
            t.setRatio =
            t.rxp =
              null),
          (t.appendXtra = function (t, e, i, s, r, n) {
            var o = this,
              a = o.l;
            return (
              (o["xs" + a] += n && (a || o["xs" + a]) ? " " + t : t || ""),
              i || 0 === a || o.plugin
                ? (o.l++,
                  (o.type = o.setRatio ? 2 : 1),
                  (o["xs" + o.l] = s || ""),
                  0 < a
                    ? ((o.data["xn" + a] = e + i),
                      (o.rxp["xn" + a] = r),
                      (o["xn" + a] = e),
                      o.plugin ||
                        ((o.xfirst = new yt(
                          o,
                          "xn" + a,
                          e,
                          i,
                          o.xfirst || o,
                          0,
                          o.n,
                          r,
                          o.pr
                        )),
                        (o.xfirst.xs0 = 0)))
                    : ((o.data = { s: e + i }),
                      (o.rxp = {}),
                      (o.s = e),
                      (o.c = i),
                      (o.r = r)))
                : (o["xs" + a] += e + (s || "")),
              o
            );
          });
        function bt(t, e) {
          (this.p = ((e = e || {}).prefix && w(t)) || t),
            ((f[t] = f[this.p] = this).format =
              e.formatter ||
              _t(e.defaultValue, e.color, e.collapsible, e.multi)),
            e.parser && (this.parse = e.parser),
            (this.clrs = e.color),
            (this.multi = e.multi),
            (this.keyword = e.keyword),
            (this.dflt = e.defaultValue),
            (this.pr = e.priority || 0);
        }
        var wt = (s._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var s,
              r = t.split(","),
              n = e.defaultValue;
            for (i = i || [n], s = 0; s < r.length; s++)
              (e.prefix = 0 === s && e.prefix),
                (e.defaultValue = i[s] || n),
                new bt(r[s], e);
          }),
          Pt = (s._registerPluginProp = function (t) {
            var h;
            f[t] ||
              ((h = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin"),
              wt(t, {
                parser: function (t, e, i, s, r, n, o) {
                  var a = l.com.greensock.plugins[h];
                  return a
                    ? (a._cssRegister(), f[i].parse(t, e, i, s, r, n, o))
                    : (d("Error: " + h + " js file not loaded."), r);
                },
              }));
          });
        ((t = bt.prototype).parseComplex = function (t, e, i, s, r, n) {
          var o,
            a,
            h,
            l,
            c,
            p,
            u = this.keyword;
          if (
            (this.multi &&
              (V.test(i) || V.test(e)
                ? ((a = e.replace(V, "|").split("|")),
                  (h = i.replace(V, "|").split("|")))
                : u && ((a = [e]), (h = [i]))),
            h)
          ) {
            for (l = (h.length > a.length ? h : a).length, o = 0; o < l; o++)
              (e = a[o] = a[o] || this.dflt),
                (i = h[o] = h[o] || this.dflt),
                u &&
                  (c = e.indexOf(u)) !== (p = i.indexOf(u)) &&
                  (-1 === p
                    ? (a[o] = a[o].split(u).join(""))
                    : -1 === c && (a[o] += " " + u));
            (e = a.join(", ")), (i = h.join(", "));
          }
          return xt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
        }),
          (t.parse = function (t, e, i, s, r, n, o) {
            return this.parseComplex(
              t.style,
              this.format(ot(t, this.p, P, !1, this.dflt)),
              this.format(e),
              r,
              n
            );
          }),
          (A.registerSpecialProp = function (t, a, h) {
            wt(t, {
              parser: function (t, e, i, s, r, n, o) {
                r = new yt(t, i, 0, 0, r, 2, i, !1, h);
                return (r.plugin = n), (r.setRatio = a(t, e, s._tween, i)), r;
              },
              priority: h,
            });
          }),
          (A.useSVGTransformAttr = !0);
        function St(t, e, i, s, r, n) {
          var o,
            a,
            h,
            l,
            c,
            p,
            u,
            f,
            d,
            _,
            m,
            g,
            v = t._gsTransform,
            y = Wt(t, !0);
          v && ((m = v.xOrigin), (g = v.yOrigin)),
            (!s || (o = s.split(" ")).length < 2) &&
              (0 === (u = t.getBBox()).x &&
                0 === u.y &&
                u.width + u.height === 0 &&
                (u = {
                  x:
                    parseFloat(
                      t.hasAttribute("x")
                        ? t.getAttribute("x")
                        : t.hasAttribute("cx")
                        ? t.getAttribute("cx")
                        : 0
                    ) || 0,
                  y:
                    parseFloat(
                      t.hasAttribute("y")
                        ? t.getAttribute("y")
                        : t.hasAttribute("cy")
                        ? t.getAttribute("cy")
                        : 0
                    ) || 0,
                  width: 0,
                  height: 0,
                }),
              (o = [
                (-1 !== (e = pt(e).split(" "))[0].indexOf("%")
                  ? (parseFloat(e[0]) / 100) * u.width
                  : parseFloat(e[0])) + u.x,
                (-1 !== e[1].indexOf("%")
                  ? (parseFloat(e[1]) / 100) * u.height
                  : parseFloat(e[1])) + u.y,
              ])),
            (i.xOrigin = l = parseFloat(o[0])),
            (i.yOrigin = c = parseFloat(o[1])),
            s &&
              y !== Ht &&
              ((p = y[0]),
              (u = y[1]),
              (f = y[2]),
              (d = y[3]),
              (_ = y[4]),
              (e = y[5]),
              (s = p * d - u * f) &&
                ((h = l * (-u / s) + c * (p / s) - (p * e - u * _) / s),
                (l =
                  i.xOrigin =
                  o[0] =
                  a =
                    l * (d / s) + c * (-f / s) + (f * e - d * _) / s),
                (c = i.yOrigin = o[1] = h))),
            v &&
              (n && ((i.xOffset = v.xOffset), (i.yOffset = v.yOffset), (v = i)),
              r || (!1 !== r && !1 !== A.defaultSmoothOrigin)
                ? ((v.xOffset += (a = l - m) * y[0] + (h = c - g) * y[2] - a),
                  (v.yOffset += a * y[1] + h * y[3] - h))
                : (v.xOffset = v.yOffset = 0)),
            n || t.setAttribute("data-svg-origin", o.join(" "));
        }
        function kt(t) {
          var e,
            i,
            s = this.data,
            r = (_ = -s.rotation * Z) + s.skewX * Z,
            n = 1e5,
            o = ((Math.cos(_) * s.scaleX * n) | 0) / n,
            a = ((Math.sin(_) * s.scaleX * n) | 0) / n,
            h = ((Math.sin(r) * -s.scaleY * n) | 0) / n,
            l = ((Math.cos(r) * s.scaleY * n) | 0) / n,
            c = this.t.style,
            p = this.t.currentStyle;
          if (p) {
            (i = a), (a = -h), (h = -i), (e = p.filter), (c.filter = "");
            var u = this.t.offsetWidth,
              f = this.t.offsetHeight,
              d = "absolute" !== p.position,
              _ =
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                o +
                ", M12=" +
                a +
                ", M21=" +
                h +
                ", M22=" +
                l,
              r = s.x + (u * s.xPercent) / 100,
              n = s.y + (f * s.yPercent) / 100;
            if (
              (null != s.ox &&
                ((r +=
                  (y = (s.oxp ? u * s.ox * 0.01 : s.ox) - u / 2) -
                  (y * o + (x = (s.oyp ? f * s.oy * 0.01 : s.oy) - f / 2) * a)),
                (n += x - (y * h + x * l))),
              d
                ? (_ +=
                    ", Dx=" +
                    ((y = u / 2) - (y * o + (x = f / 2) * a) + r) +
                    ", Dy=" +
                    (x - (y * h + x * l) + n) +
                    ")")
                : (_ += ", sizingMethod='auto expand')"),
              -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                ? (c.filter = e.replace(U, _))
                : (c.filter = _ + " " + e),
              (0 !== t && 1 !== t) ||
                1 != o ||
                0 != a ||
                0 != h ||
                1 != l ||
                (d && -1 === _.indexOf("Dx=0, Dy=0")) ||
                (L.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                (-1 === e.indexOf(e.indexOf("Alpha")) &&
                  c.removeAttribute("filter")),
              !d)
            ) {
              var m,
                g,
                v = T < 8 ? 1 : -1,
                y = s.ieOffsetX || 0,
                x = s.ieOffsetY || 0;
              for (
                s.ieOffsetX = Math.round(
                  (u - ((o < 0 ? -o : o) * u + (a < 0 ? -a : a) * f)) / 2 + r
                ),
                  s.ieOffsetY = Math.round(
                    (f - ((l < 0 ? -l : l) * f + (h < 0 ? -h : h) * u)) / 2 + n
                  ),
                  Tt = 0;
                Tt < 4;
                Tt++
              )
                (g =
                  (i =
                    -1 !== (g = p[(m = ct[Tt])]).indexOf("px")
                      ? parseFloat(g)
                      : at(this.t, m, parseFloat(g), g.replace(F, "")) || 0) !==
                  s[m]
                    ? Tt < 2
                      ? -s.ieOffsetX
                      : -s.ieOffsetY
                    : Tt < 2
                    ? y - s.ieOffsetX
                    : x - s.ieOffsetY),
                  (c[m] =
                    (s[m] = Math.round(
                      i - g * (0 === Tt || 2 === Tt ? 1 : v)
                    )) + "px");
            }
          }
        }
        var Ct,
          Ot,
          Et,
          Rt =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          At = w("transform"),
          Xt = st + "transform",
          Dt = w("transformOrigin"),
          Mt = null !== w("perspective"),
          Yt = (s.Transform = function () {
            (this.perspective = parseFloat(A.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === A.defaultForce3D || !Mt) &&
                (A.defaultForce3D || "auto"));
          }),
          zt = _gsScope.SVGElement,
          Ft = function (t, e, i) {
            var s,
              r = Q.createElementNS("http://www.w3.org/2000/svg", t),
              n = /([a-z])([A-Z])/g;
            for (s in i)
              r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(r), r;
          },
          Lt = Q.documentElement || {},
          It =
            ((Et = T || (/Android/i.test(et) && !_gsScope.chrome)),
            Q.createElementNS &&
              !Et &&
              ((Ot = Ft("svg", Lt)),
              (Ft = (et = Ft("rect", Ot, {
                width: 100,
                height: 50,
                x: 100,
              })).getBoundingClientRect().width),
              (et.style[Dt] = "50% 50%"),
              (et.style[At] = "scaleX(0.5)"),
              (Et = Ft === et.getBoundingClientRect().width && !(D && Mt)),
              Lt.removeChild(Ot)),
            Et),
          Bt = function (t) {
            var e,
              i = a(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              s = this.parentNode,
              r = this.nextSibling,
              n = this.style.cssText;
            if (
              (Lt.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (e = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Bt);
              } catch (t) {}
            else this._originalGetBBox && (e = this._originalGetBBox());
            return (
              r ? s.insertBefore(this, r) : s.appendChild(this),
              Lt.removeChild(i),
              (this.style.cssText = n),
              e
            );
          },
          Nt = function (t) {
            return !(
              !zt ||
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !(function (e) {
                try {
                  return e.getBBox();
                } catch (t) {
                  return Bt.call(e, !0);
                }
              })(t)
            );
          },
          Ht = [1, 0, 0, 1, 0, 0],
          Wt = function (t, e) {
            var i,
              s,
              r,
              n,
              o,
              a,
              h = t._gsTransform || new Yt(),
              l = t.style;
            if (
              (At
                ? (s = ot(t, Xt, null, !0))
                : t.currentStyle &&
                  (s =
                    (s = t.currentStyle.filter.match(G)) && 4 === s.length
                      ? [
                          s[0].substr(4),
                          Number(s[2].substr(4)),
                          Number(s[1].substr(4)),
                          s[3].substr(4),
                          h.x || 0,
                          h.y || 0,
                        ].join(",")
                      : ""),
              (i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s),
              !At ||
                (!(a = !nt(t) || "none" === nt(t).display) && t.parentNode) ||
                (a && ((n = l.display), (l.display = "block")),
                t.parentNode || ((o = 1), Lt.appendChild(t)),
                (i =
                  !(s = ot(t, Xt, null, !0)) ||
                  "none" === s ||
                  "matrix(1, 0, 0, 1, 0, 0)" === s),
                n ? (l.display = n) : a && qt(l, "display"),
                o && Lt.removeChild(t)),
              (h.svg || (t.getCTM && Nt(t))) &&
                (i &&
                  -1 !== (l[At] + "").indexOf("matrix") &&
                  ((s = l[At]), (i = 0)),
                (r = t.getAttribute("transform")),
                i &&
                  r &&
                  ((s =
                    "matrix(" +
                    (r = t.transform.baseVal.consolidate().matrix).a +
                    "," +
                    r.b +
                    "," +
                    r.c +
                    "," +
                    r.d +
                    "," +
                    r.e +
                    "," +
                    r.f +
                    ")"),
                  (i = 0))),
              i)
            )
              return Ht;
            for (r = (s || "").match(M) || [], Tt = r.length; -1 < --Tt; )
              (n = Number(r[Tt])),
                (r[Tt] = (o = n - (n |= 0))
                  ? ((1e5 * o + (o < 0 ? -0.5 : 0.5)) | 0) / 1e5 + n
                  : n);
            return e && 6 < r.length
              ? [r[0], r[1], r[4], r[5], r[12], r[13]]
              : r;
          },
          jt = (s.getTransform = function (t, e, i, s) {
            if (t._gsTransform && i && !s) return t._gsTransform;
            var r,
              n,
              o,
              a,
              h,
              l,
              c,
              p,
              u,
              f,
              d,
              _,
              m,
              g,
              v,
              y,
              x,
              T,
              b,
              w,
              P,
              S,
              k = (i && t._gsTransform) || new Yt(),
              C = k.scaleX < 0,
              O =
                (Mt &&
                  (parseFloat(ot(t, Dt, e, !1, "0 0 0").split(" ")[2]) ||
                    k.zOrigin)) ||
                0,
              E = parseFloat(A.defaultTransformPerspective) || 0;
            if (
              ((k.svg = !(!t.getCTM || !Nt(t))),
              k.svg &&
                (St(
                  t,
                  ot(t, Dt, e, !1, "50% 50%") + "",
                  k,
                  t.getAttribute("data-svg-origin")
                ),
                (Ct = A.useSVGTransformAttr || It)),
              (n = Wt(t)) !== Ht)
            )
              for (r in (16 === n.length
                ? ((w = n[0]),
                  (S = n[1]),
                  (p = n[2]),
                  (u = n[3]),
                  (P = n[4]),
                  (f = n[5]),
                  (d = n[6]),
                  (_ = n[7]),
                  (m = n[8]),
                  (g = n[9]),
                  (v = n[10]),
                  (y = n[12]),
                  (T = n[13]),
                  (b = n[14]),
                  (x = n[11]),
                  (e = Math.atan2(d, v)),
                  k.zOrigin &&
                    ((y = m * (b = -k.zOrigin) - n[12]),
                    (T = g * b - n[13]),
                    (b = v * b + k.zOrigin - n[14])),
                  (k.rotationX = e * $),
                  e &&
                    ((o = P * (l = Math.cos(-e)) + m * (c = Math.sin(-e))),
                    (a = f * l + g * c),
                    (h = d * l + v * c),
                    (m = P * -c + m * l),
                    (g = f * -c + g * l),
                    (v = d * -c + v * l),
                    (x = _ * -c + x * l),
                    (P = o),
                    (f = a),
                    (d = h)),
                  (e = Math.atan2(-p, v)),
                  (k.rotationY = e * $),
                  e &&
                    ((a = S * (l = Math.cos(-e)) - g * (c = Math.sin(-e))),
                    (h = p * l - v * c),
                    (g = S * c + g * l),
                    (v = p * c + v * l),
                    (x = u * c + x * l),
                    (w = o = w * l - m * c),
                    (S = a),
                    (p = h)),
                  (e = Math.atan2(S, w)),
                  (k.rotation = e * $),
                  e &&
                    ((o = w * (l = Math.cos(e)) + S * (c = Math.sin(e))),
                    (a = P * l + f * c),
                    (h = m * l + g * c),
                    (S = S * l - w * c),
                    (f = f * l - P * c),
                    (g = g * l - m * c),
                    (w = o),
                    (P = a),
                    (m = h)),
                  k.rotationX &&
                    359.9 < Math.abs(k.rotationX) + Math.abs(k.rotation) &&
                    ((k.rotationX = k.rotation = 0),
                    (k.rotationY = 180 - k.rotationY)),
                  (e = Math.atan2(P, f)),
                  (k.scaleX =
                    ((1e5 * Math.sqrt(w * w + S * S + p * p) + 0.5) | 0) / 1e5),
                  (k.scaleY =
                    ((1e5 * Math.sqrt(f * f + d * d) + 0.5) | 0) / 1e5),
                  (k.scaleZ =
                    ((1e5 * Math.sqrt(m * m + g * g + v * v) + 0.5) | 0) / 1e5),
                  (w /= k.scaleX),
                  (P /= k.scaleY),
                  (S /= k.scaleX),
                  (f /= k.scaleY),
                  2e-5 < Math.abs(e)
                    ? ((k.skewX = e * $),
                      (P = 0),
                      "simple" !== k.skewType && (k.scaleY *= 1 / Math.cos(e)))
                    : (k.skewX = 0),
                  (k.perspective = x ? 1 / (x < 0 ? -x : x) : 0),
                  (k.x = y),
                  (k.y = T),
                  (k.z = b),
                  k.svg &&
                    ((k.x -= k.xOrigin - (k.xOrigin * w - k.yOrigin * P)),
                    (k.y -= k.yOrigin - (k.yOrigin * S - k.xOrigin * f))))
                : (Mt &&
                    !s &&
                    n.length &&
                    k.x === n[4] &&
                    k.y === n[5] &&
                    (k.rotationX || k.rotationY)) ||
                  ((b = (T = 6 <= n.length) ? n[0] : 1),
                  (w = n[1] || 0),
                  (P = n[2] || 0),
                  (S = T ? n[3] : 1),
                  (k.x = n[4] || 0),
                  (k.y = n[5] || 0),
                  (f = Math.sqrt(b * b + w * w)),
                  (s = Math.sqrt(S * S + P * P)),
                  (T = b || w ? Math.atan2(w, b) * $ : k.rotation || 0),
                  (n = P || S ? Math.atan2(P, S) * $ + T : k.skewX || 0),
                  (k.scaleX = f),
                  (k.scaleY = s),
                  (k.rotation = T),
                  (k.skewX = n),
                  Mt &&
                    ((k.rotationX = k.rotationY = k.z = 0),
                    (k.perspective = E),
                    (k.scaleZ = 1)),
                  k.svg &&
                    ((k.x -= k.xOrigin - (k.xOrigin * b + k.yOrigin * P)),
                    (k.y -= k.yOrigin - (k.xOrigin * w + k.yOrigin * S)))),
              90 < Math.abs(k.skewX) &&
                Math.abs(k.skewX) < 270 &&
                (C
                  ? ((k.scaleX *= -1),
                    (k.skewX += k.rotation <= 0 ? 180 : -180),
                    (k.rotation += k.rotation <= 0 ? 180 : -180))
                  : ((k.scaleY *= -1), (k.skewX += k.skewX <= 0 ? 180 : -180))),
              (k.zOrigin = O),
              k))
                k[r] < 2e-5 && -2e-5 < k[r] && (k[r] = 0);
            return (
              i &&
                (t._gsTransform = k).svg &&
                (Ct && t.style[At]
                  ? R.delayedCall(0.001, function () {
                      qt(t.style, At);
                    })
                  : !Ct &&
                    t.getAttribute("transform") &&
                    R.delayedCall(0.001, function () {
                      t.removeAttribute("transform");
                    })),
              k
            );
          }),
          Gt =
            (s.set3DTransformRatio =
            s.setTransformRatio =
              function (t) {
                var e,
                  i,
                  s,
                  r,
                  n,
                  o,
                  a,
                  h,
                  l,
                  c,
                  p,
                  u,
                  f,
                  d,
                  _,
                  m,
                  g = this.data,
                  v = this.t.style,
                  y = g.rotation,
                  x = g.rotationX,
                  T = g.rotationY,
                  b = g.scaleX,
                  w = g.scaleY,
                  P = g.scaleZ,
                  S = g.x,
                  k = g.y,
                  C = g.z,
                  O = g.svg,
                  E = g.perspective,
                  R = g.force3D,
                  A = g.skewY,
                  X = g.skewX;
                if (
                  (A && ((X += A), (y += A)),
                  !(
                    (((1 !== t && 0 !== t) ||
                      "auto" !== R ||
                      (this.tween._totalTime !== this.tween._totalDuration &&
                        this.tween._totalTime)) &&
                      R) ||
                    C ||
                    E ||
                    T ||
                    x ||
                    1 !== P
                  ) ||
                    (Ct && O) ||
                    !Mt)
                )
                  y || X || O
                    ? ((y *= Z),
                      (_ = X * Z),
                      (m = 1e5),
                      (i = Math.cos(y) * b),
                      (r = Math.sin(y) * b),
                      (s = Math.sin(y - _) * -w),
                      (n = Math.cos(y - _) * w),
                      _ &&
                        "simple" === g.skewType &&
                        ((e = Math.tan(_ - A * Z)),
                        (s *= e = Math.sqrt(1 + e * e)),
                        (n *= e),
                        A &&
                          ((e = Math.tan(A * Z)),
                          (i *= e = Math.sqrt(1 + e * e)),
                          (r *= e))),
                      O &&
                        ((S +=
                          g.xOrigin -
                          (g.xOrigin * i + g.yOrigin * s) +
                          g.xOffset),
                        (k +=
                          g.yOrigin -
                          (g.xOrigin * r + g.yOrigin * n) +
                          g.yOffset),
                        Ct &&
                          (g.xPercent || g.yPercent) &&
                          ((p = this.t.getBBox()),
                          (S += 0.01 * g.xPercent * p.width),
                          (k += 0.01 * g.yPercent * p.height)),
                        S < (p = 1e-6) && -p < S && (S = 0),
                        k < p && -p < k && (k = 0)),
                      (d =
                        ((i * m) | 0) / m +
                        "," +
                        ((r * m) | 0) / m +
                        "," +
                        ((s * m) | 0) / m +
                        "," +
                        ((n * m) | 0) / m +
                        "," +
                        S +
                        "," +
                        k +
                        ")"),
                      O && Ct
                        ? this.t.setAttribute("transform", "matrix(" + d)
                        : (v[At] =
                            (g.xPercent || g.yPercent
                              ? "translate(" +
                                g.xPercent +
                                "%," +
                                g.yPercent +
                                "%) matrix("
                              : "matrix(") + d))
                    : (v[At] =
                        (g.xPercent || g.yPercent
                          ? "translate(" +
                            g.xPercent +
                            "%," +
                            g.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        b +
                        ",0,0," +
                        w +
                        "," +
                        S +
                        "," +
                        k +
                        ")");
                else {
                  if (
                    (D &&
                      (b < (p = 1e-4) && -p < b && (b = P = 2e-5),
                      w < p && -p < w && (w = P = 2e-5),
                      !E || g.z || g.rotationX || g.rotationY || (E = 0)),
                    y || X)
                  )
                    (y *= Z),
                      (u = i = Math.cos(y)),
                      (f = r = Math.sin(y)),
                      X &&
                        ((y -= X * Z),
                        (u = Math.cos(y)),
                        (f = Math.sin(y)),
                        "simple" === g.skewType &&
                          ((e = Math.tan((X - A) * Z)),
                          (u *= e = Math.sqrt(1 + e * e)),
                          (f *= e),
                          g.skewY &&
                            ((e = Math.tan(A * Z)),
                            (i *= e = Math.sqrt(1 + e * e)),
                            (r *= e)))),
                      (s = -f),
                      (n = u);
                  else {
                    if (!(T || x || 1 !== P || E || O))
                      return void (v[At] =
                        (g.xPercent || g.yPercent
                          ? "translate(" +
                            g.xPercent +
                            "%," +
                            g.yPercent +
                            "%) translate3d("
                          : "translate3d(") +
                        S +
                        "px," +
                        k +
                        "px," +
                        C +
                        "px)" +
                        (1 !== b || 1 !== w
                          ? " scale(" + b + "," + w + ")"
                          : ""));
                    (i = n = 1), (s = r = 0);
                  }
                  (h = 1),
                    (R = t = o = a = l = c = 0),
                    (_ = E ? -1 / E : 0),
                    (m = g.zOrigin),
                    (p = 1e-6),
                    (X = ","),
                    (A = "0"),
                    (y = T * Z) &&
                      ((u = Math.cos(y)),
                      (l = _ * (o = -(f = Math.sin(y)))),
                      (R = i * f),
                      (t = r * f),
                      (_ *= h = u),
                      (i *= u),
                      (r *= u)),
                    (y = x * Z) &&
                      ((e = s * (u = Math.cos(y)) + R * (f = Math.sin(y))),
                      (y = n * u + t * f),
                      (a = h * f),
                      (c = _ * f),
                      (R = s * -f + R * u),
                      (t = n * -f + t * u),
                      (h *= u),
                      (_ *= u),
                      (s = e),
                      (n = y)),
                    1 !== P && ((R *= P), (t *= P), (h *= P), (_ *= P)),
                    1 !== w && ((s *= w), (n *= w), (a *= w), (c *= w)),
                    1 !== b && ((i *= b), (r *= b), (o *= b), (l *= b)),
                    (m || O) &&
                      (m && ((S += R * -m), (k += t * -m), (C += h * -m + m)),
                      O &&
                        ((S +=
                          g.xOrigin -
                          (g.xOrigin * i + g.yOrigin * s) +
                          g.xOffset),
                        (k +=
                          g.yOrigin -
                          (g.xOrigin * r + g.yOrigin * n) +
                          g.yOffset)),
                      S < p && -p < S && (S = A),
                      k < p && -p < k && (k = A),
                      C < p && -p < C && (C = 0)),
                    (d =
                      g.xPercent || g.yPercent
                        ? "translate(" +
                          g.xPercent +
                          "%," +
                          g.yPercent +
                          "%) matrix3d("
                        : "matrix3d("),
                    (d +=
                      (i < p && -p < i ? A : i) +
                      X +
                      (r < p && -p < r ? A : r) +
                      X +
                      (o < p && -p < o ? A : o)),
                    (d +=
                      X +
                      (l < p && -p < l ? A : l) +
                      X +
                      (s < p && -p < s ? A : s) +
                      X +
                      (n < p && -p < n ? A : n)),
                    x || T || 1 !== P
                      ? ((d +=
                          X +
                          (a < p && -p < a ? A : a) +
                          X +
                          (c < p && -p < c ? A : c) +
                          X +
                          (R < p && -p < R ? A : R)),
                        (d +=
                          X +
                          (t < p && -p < t ? A : t) +
                          X +
                          (h < p && -p < h ? A : h) +
                          X +
                          (_ < p && -p < _ ? A : _) +
                          X))
                      : (d += ",0,0,0,0,1,0,"),
                    (v[At] = d +=
                      S + X + k + X + C + X + (E ? 1 + -C / E : 1) + ")");
                }
              });
        ((t = Yt.prototype).x =
          t.y =
          t.z =
          t.skewX =
          t.skewY =
          t.rotation =
          t.rotationX =
          t.rotationY =
          t.zOrigin =
          t.xPercent =
          t.yPercent =
          t.xOffset =
          t.yOffset =
            0),
          (t.scaleX = t.scaleY = t.scaleZ = 1),
          wt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (t, e, i, s, r, n, o) {
                if (s._lastParsedTransform === o) return r;
                var a,
                  h =
                    (s._lastParsedTransform = o).scale &&
                    "function" == typeof o.scale
                      ? o.scale
                      : 0;
                "function" == typeof o[i] && ((a = o[i]), (o[i] = e)),
                  h && (o.scale = h(X, t));
                var l,
                  c,
                  p,
                  u,
                  f,
                  d,
                  _,
                  m,
                  g = t._gsTransform,
                  v = t.style,
                  y = Rt.length,
                  x = o,
                  T = {},
                  e = "transformOrigin",
                  b = jt(t, P, !0, x.parseTransform),
                  w =
                    x.transform &&
                    ("function" == typeof x.transform
                      ? x.transform(X, E)
                      : x.transform);
                if (
                  ((b.skewType = x.skewType || b.skewType || A.defaultSkewType),
                  (s._transform = b),
                  "rotationZ" in x && (x.rotation = x.rotationZ),
                  w && "string" == typeof w && At)
                )
                  ((c = J.style)[At] = w),
                    (c.display = "block"),
                    (c.position = "absolute"),
                    -1 !== w.indexOf("%") &&
                      ((c.width = ot(t, "width")),
                      (c.height = ot(t, "height"))),
                    Q.body.appendChild(J),
                    (l = jt(J, null, !1)),
                    "simple" === b.skewType &&
                      (l.scaleY *= Math.cos(l.skewX * Z)),
                    b.svg &&
                      ((f = b.xOrigin),
                      (d = b.yOrigin),
                      (l.x -= b.xOffset),
                      (l.y -= b.yOffset),
                      (x.transformOrigin || x.svgOrigin) &&
                        ((w = {}),
                        St(
                          t,
                          pt(x.transformOrigin),
                          w,
                          x.svgOrigin,
                          x.smoothOrigin,
                          !0
                        ),
                        (f = w.xOrigin),
                        (d = w.yOrigin),
                        (l.x -= w.xOffset - b.xOffset),
                        (l.y -= w.yOffset - b.yOffset)),
                      (f || d) &&
                        ((_ = Wt(J, !0)),
                        (l.x -= f - (f * _[0] + d * _[2])),
                        (l.y -= d - (f * _[1] + d * _[3])))),
                    Q.body.removeChild(J),
                    l.perspective || (l.perspective = b.perspective),
                    null != x.xPercent &&
                      (l.xPercent = S(x.xPercent, b.xPercent)),
                    null != x.yPercent &&
                      (l.yPercent = S(x.yPercent, b.yPercent));
                else if ("object" == typeof x) {
                  if (
                    ((l = {
                      scaleX: S(
                        null != x.scaleX ? x.scaleX : x.scale,
                        b.scaleX
                      ),
                      scaleY: S(
                        null != x.scaleY ? x.scaleY : x.scale,
                        b.scaleY
                      ),
                      scaleZ: S(x.scaleZ, b.scaleZ),
                      x: S(x.x, b.x),
                      y: S(x.y, b.y),
                      z: S(x.z, b.z),
                      xPercent: S(x.xPercent, b.xPercent),
                      yPercent: S(x.yPercent, b.yPercent),
                      perspective: S(x.transformPerspective, b.perspective),
                    }),
                    null != (u = x.directionalRotation))
                  )
                    if ("object" == typeof u) for (c in u) x[c] = u[c];
                    else x.rotation = u;
                  "string" == typeof x.x &&
                    -1 !== x.x.indexOf("%") &&
                    ((l.x = 0), (l.xPercent = S(x.x, b.xPercent))),
                    "string" == typeof x.y &&
                      -1 !== x.y.indexOf("%") &&
                      ((l.y = 0), (l.yPercent = S(x.y, b.yPercent))),
                    (l.rotation = C(
                      "rotation" in x
                        ? x.rotation
                        : "shortRotation" in x
                        ? x.shortRotation + "_short"
                        : b.rotation,
                      b.rotation,
                      "rotation",
                      T
                    )),
                    Mt &&
                      ((l.rotationX = C(
                        "rotationX" in x
                          ? x.rotationX
                          : "shortRotationX" in x
                          ? x.shortRotationX + "_short"
                          : b.rotationX || 0,
                        b.rotationX,
                        "rotationX",
                        T
                      )),
                      (l.rotationY = C(
                        "rotationY" in x
                          ? x.rotationY
                          : "shortRotationY" in x
                          ? x.shortRotationY + "_short"
                          : b.rotationY || 0,
                        b.rotationY,
                        "rotationY",
                        T
                      ))),
                    (l.skewX = C(x.skewX, b.skewX)),
                    (l.skewY = C(x.skewY, b.skewY));
                }
                for (
                  Mt &&
                    null != x.force3D &&
                    ((b.force3D = x.force3D), (p = !0)),
                    (_ =
                      b.force3D ||
                      b.z ||
                      b.rotationX ||
                      b.rotationY ||
                      l.z ||
                      l.rotationX ||
                      l.rotationY ||
                      l.perspective) ||
                      null == x.scale ||
                      (l.scaleZ = 1);
                  -1 < --y;

                )
                  (1e-6 < (w = l[(m = Rt[y])] - b[m]) ||
                    w < -1e-6 ||
                    null != x[m] ||
                    null != K[m]) &&
                    ((p = !0),
                    (r = new yt(b, m, b[m], w, r)),
                    m in T && (r.e = T[m]),
                    (r.xs0 = 0),
                    (r.plugin = n),
                    s._overwriteProps.push(r.n));
                return (
                  (w = x.transformOrigin),
                  b.svg &&
                    (w || x.svgOrigin) &&
                    ((f = b.xOffset),
                    (d = b.yOffset),
                    St(t, pt(w), l, x.svgOrigin, x.smoothOrigin),
                    (r = gt(
                      b,
                      "xOrigin",
                      (g ? b : l).xOrigin,
                      l.xOrigin,
                      r,
                      e
                    )),
                    (r = gt(
                      b,
                      "yOrigin",
                      (g ? b : l).yOrigin,
                      l.yOrigin,
                      r,
                      e
                    )),
                    (f === b.xOffset && d === b.yOffset) ||
                      ((r = gt(
                        b,
                        "xOffset",
                        g ? f : b.xOffset,
                        b.xOffset,
                        r,
                        e
                      )),
                      (r = gt(
                        b,
                        "yOffset",
                        g ? d : b.yOffset,
                        b.yOffset,
                        r,
                        e
                      ))),
                    (w = "0px 0px")),
                  (w || (Mt && _ && b.zOrigin)) &&
                    (At
                      ? ((p = !0),
                        (m = Dt),
                        (w = (w || ot(t, m, P, !1, "50% 50%")) + ""),
                        ((r = new yt(v, m, 0, 0, r, -1, e)).b = v[m]),
                        (r.plugin = n),
                        Mt
                          ? ((c = b.zOrigin),
                            (w = w.split(" ")),
                            (b.zOrigin =
                              (2 < w.length && (0 === c || "0px" !== w[2])
                                ? parseFloat(w[2])
                                : c) || 0),
                            (r.xs0 = r.e =
                              w[0] + " " + (w[1] || "50%") + " 0px"),
                            ((r = new yt(b, "zOrigin", 0, 0, r, -1, r.n)).b =
                              c),
                            (r.xs0 = r.e = b.zOrigin))
                          : (r.xs0 = r.e = w))
                      : pt(w + "", b)),
                  p &&
                    (s._transformType =
                      (b.svg && Ct) || (!_ && 3 !== this._transformType)
                        ? 2
                        : 3),
                  a && (o[i] = a),
                  h && (o.scale = h),
                  r
                );
              },
              prefix: !0,
            }
          ),
          wt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          wt("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, s, r, n) {
              e = this.format(e);
              for (
                var o,
                  a,
                  h,
                  l,
                  c,
                  p,
                  u,
                  f,
                  d,
                  _,
                  m = [
                    "borderTopLeftRadius",
                    "borderTopRightRadius",
                    "borderBottomRightRadius",
                    "borderBottomLeftRadius",
                  ],
                  g = t.style,
                  v = parseFloat(t.offsetWidth),
                  y = parseFloat(t.offsetHeight),
                  x = e.split(" "),
                  T = 0;
                T < m.length;
                T++
              )
                this.p.indexOf("border") && (m[T] = w(m[T])),
                  -1 !== (h = a = ot(t, m[T], P, !1, "0px")).indexOf(" ") &&
                    ((h = (a = h.split(" "))[0]), (a = a[1])),
                  (l = o = x[T]),
                  (d = parseFloat(h)),
                  (_ = h.substr((d + "").length)),
                  (p =
                    "" ===
                    (p = (u = "=" === l.charAt(1))
                      ? ((c = parseInt(l.charAt(0) + "1", 10)),
                        (l = l.substr(2)),
                        (c *= parseFloat(l)),
                        l.substr((c + "").length - (c < 0 ? 1 : 0)) || "")
                      : ((c = parseFloat(l)), l.substr((c + "").length)))
                      ? b[i] || _
                      : p) !== _ &&
                    ((f = at(t, "borderLeft", d, _)),
                    (d = at(t, "borderTop", d, _)),
                    (a =
                      "%" === p
                        ? ((h = (f / v) * 100 + "%"), (d / y) * 100 + "%")
                        : "em" === p
                        ? ((h = f / (_ = at(t, "borderLeft", 1, "em")) + "em"),
                          d / _ + "em")
                        : ((h = f + "px"), d + "px")),
                    u &&
                      ((l = parseFloat(h) + c + p),
                      (o = parseFloat(a) + c + p))),
                  (r = xt(g, m[T], h + " " + a, l + " " + o, !1, "0px", r));
              return r;
            },
            prefix: !0,
            formatter: _t("0px 0px 0px 0px", !1, !0),
          }),
          wt(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (t, e, i, s, r, n) {
                return xt(
                  t.style,
                  i,
                  this.format(ot(t, i, P, !1, "0px 0px")),
                  this.format(e),
                  !1,
                  "0px",
                  r
                );
              },
              prefix: !0,
              formatter: _t("0px 0px", !1, !0),
            }
          ),
          wt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, s, r, n) {
              var o,
                a,
                h,
                l,
                c,
                p,
                u = "background-position",
                f = P || nt(t, null),
                d = this.format(
                  (f
                    ? T
                      ? f.getPropertyValue(u + "-x") +
                        " " +
                        f.getPropertyValue(u + "-y")
                      : f.getPropertyValue(u)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                e = this.format(e);
              if (
                (-1 !== d.indexOf("%")) != (-1 !== e.indexOf("%")) &&
                e.split(",").length < 2 &&
                (p = ot(t, "backgroundImage").replace(W, "")) &&
                "none" !== p
              ) {
                for (
                  o = d.split(" "),
                    a = e.split(" "),
                    tt.setAttribute("src", p),
                    h = 2;
                  -1 < --h;

                )
                  (l = -1 !== (d = o[h]).indexOf("%")) !=
                    (-1 !== a[h].indexOf("%")) &&
                    ((c =
                      0 === h
                        ? t.offsetWidth - tt.width
                        : t.offsetHeight - tt.height),
                    (o[h] = l
                      ? (parseFloat(d) / 100) * c + "px"
                      : (parseFloat(d) / c) * 100 + "%"));
                d = o.join(" ");
              }
              return this.parseComplex(t.style, d, e, r, n);
            },
            formatter: pt,
          }),
          wt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (t) {
              return "co" === (t += "").substr(0, 2)
                ? t
                : pt(-1 === t.indexOf(" ") ? t + " " + t : t);
            },
          }),
          wt("perspective", { defaultValue: "0px", prefix: !0 }),
          wt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          wt("transformStyle", { prefix: !0 }),
          wt("backfaceVisibility", { prefix: !0 }),
          wt("userSelect", { prefix: !0 }),
          wt("margin", {
            parser: mt("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          wt("padding", {
            parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          wt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, s, r, n) {
              var o, a;
              return (
                (e =
                  T < 9
                    ? ((o = t.currentStyle),
                      (a = T < 8 ? " " : ","),
                      (o =
                        "rect(" +
                        o.clipTop +
                        a +
                        o.clipRight +
                        a +
                        o.clipBottom +
                        a +
                        o.clipLeft +
                        ")"),
                      this.format(e).split(",").join(a))
                    : ((o = this.format(ot(t, this.p, P, !1, this.dflt))),
                      this.format(e))),
                this.parseComplex(t.style, o, e, r, n)
              );
            },
          }),
          wt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          wt("autoRound,strictUnits", {
            parser: function (t, e, i, s, r) {
              return r;
            },
          }),
          wt("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, s, r, n) {
              var o = ot(t, "borderTopWidth", P, !1, "0px"),
                a = this.format(e).split(" "),
                e = a[0].replace(F, "");
              return (
                "px" !== e &&
                  (o = parseFloat(o) / at(t, "borderTopWidth", 1, e) + e),
                this.parseComplex(
                  t.style,
                  this.format(
                    o +
                      " " +
                      ot(t, "borderTopStyle", P, !1, "solid") +
                      " " +
                      ot(t, "borderTopColor", P, !1, "#000")
                  ),
                  a.join(" "),
                  r,
                  n
                )
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(dt) || ["#000"])[0]
              );
            },
          }),
          wt("borderWidth", {
            parser: mt(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          wt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, s, r, n) {
              var o = t.style,
                t = "cssFloat" in o ? "cssFloat" : "styleFloat";
              return new yt(o, t, 0, 0, r, -1, i, !1, 0, o[t], e);
            },
          });
        function Ut(t) {
          var e,
            i = this.t,
            s = i.filter || ot(this.data, "filter") || "",
            t = (this.s + this.c * t) | 0;
          (e =
            100 == t
              ? -1 === s.indexOf("atrix(") &&
                -1 === s.indexOf("radient(") &&
                -1 === s.indexOf("oader(")
                ? (i.removeAttribute("filter"), !ot(this.data, "filter"))
                : ((i.filter = s.replace(r, "")), !0)
              : e) ||
            (this.xn1 && (i.filter = s = s || "alpha(opacity=" + t + ")"),
            -1 === s.indexOf("pacity")
              ? (0 == t && this.xn1) ||
                (i.filter = s + " alpha(opacity=" + t + ")")
              : (i.filter = s.replace(L, "opacity=" + t)));
        }
        wt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, i, s, r, n) {
            var o = parseFloat(ot(t, "opacity", P, !1, "1")),
              a = t.style,
              h = "autoAlpha" === i;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
              h &&
                1 === o &&
                "hidden" === ot(t, "visibility", P) &&
                0 !== e &&
                (o = 0),
              it
                ? (r = new yt(a, "opacity", o, e - o, r))
                : (((r = new yt(a, "opacity", 100 * o, 100 * (e - o), r)).xn1 =
                    h ? 1 : 0),
                  (a.zoom = 1),
                  (r.type = 2),
                  (r.b = "alpha(opacity=" + r.s + ")"),
                  (r.e = "alpha(opacity=" + (r.s + r.c) + ")"),
                  (r.data = t),
                  (r.plugin = n),
                  (r.setRatio = Ut)),
              h &&
                (((r = new yt(
                  a,
                  "visibility",
                  0,
                  0,
                  r,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== o ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )).xs0 = "inherit"),
                s._overwriteProps.push(r.n),
                s._overwriteProps.push(i)),
              r
            );
          },
        });
        function Vt(t) {
          if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
            this.t.setAttribute("class", 0 === t ? this.b : this.e);
            for (var e = this.data, i = this.t.style; e; )
              e.v ? (i[e.p] = e.v) : qt(i, e.p), (e = e._next);
            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
          } else
            this.t.getAttribute("class") !== this.e &&
              this.t.setAttribute("class", this.e);
        }
        var qt = function (t, e) {
          e &&
            (t.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                t.removeProperty(e.replace(N, "-$1").toLowerCase()))
              : t.removeAttribute(e));
        };
        wt("className", {
          parser: function (t, e, i, s, r, n, o) {
            var a,
              h,
              l,
              c = t.getAttribute("class") || "",
              p = t.style.cssText;
            if (
              (((r = s._classNamePT = new yt(t, i, 0, 0, r, 2)).setRatio = Vt),
              (r.pr = -11),
              (u = !0),
              (r.b = c),
              (a = _(t, P)),
              (i = t._gsClassPT))
            ) {
              for (h = {}, l = i.data; l; ) (h[l.p] = 1), (l = l._next);
              i.setRatio(1);
            }
            return (
              ((t._gsClassPT = r).e =
                "=" !== e.charAt(1)
                  ? e
                  : c.replace(
                      new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
              t.setAttribute("class", r.e),
              (o = m(t, a, _(t), o, h)),
              t.setAttribute("class", c),
              (r.data = o.firstMPT),
              (t.style.cssText = p),
              (r.xfirst = s.parse(t, o.difs, r, n))
            );
          },
        });
        function Zt(t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              s,
              r,
              n = this.t.style,
              o = f.transform.parse;
            if ("all" === this.e) r = !(n.cssText = "");
            else
              for (
                s = (e = this.e.split(" ").join("").split(",")).length;
                -1 < --s;

              )
                (i = e[s]),
                  f[i] &&
                    (f[i].parse === o
                      ? (r = !0)
                      : (i = "transformOrigin" === i ? Dt : f[i].p)),
                  qt(n, i);
            r &&
              (qt(n, At),
              (t = this.t._gsTransform) &&
                (t.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        }
        for (
          wt("clearProps", {
            parser: function (t, e, i, s, r) {
              return (
                ((r = new yt(t, i, 0, 0, r, 2)).setRatio = Zt),
                (r.e = e),
                (r.pr = -10),
                (r.data = s._tween),
                (u = !0),
                r
              );
            },
          }),
            t = "bezier,throwProps,physicsProps,physics2D".split(","),
            Tt = t.length;
          Tt--;

        )
          Pt(t[Tt]);
        ((t = A.prototype)._firstPT =
          t._lastParsedTransform =
          t._transform =
            null),
          (t._onInitTween = function (t, e, i, s) {
            if (!t.nodeType) return !1;
            (this._target = E = t),
              (this._tween = i),
              (this._vars = e),
              (X = s),
              (O = e.autoRound),
              (u = !1),
              (b = e.suffixMap || A.suffixMap),
              (P = nt(t, "")),
              (p = this._overwriteProps);
            var r,
              n,
              o,
              a,
              h,
              l,
              s = t.style;
            if (
              (g &&
                "" === s.zIndex &&
                (("auto" !== (l = ot(t, "zIndex", P)) && "" !== l) ||
                  this._addLazySet(s, "zIndex", 0)),
              "string" == typeof e &&
                ((o = s.cssText),
                (l = _(t, P)),
                (s.cssText = o + ";" + e),
                (l = m(t, l, _(t)).difs),
                !it && I.test(e) && (l.opacity = parseFloat(RegExp.$1)),
                (e = l),
                (s.cssText = o)),
              e.className
                ? (this._firstPT = r =
                    f.className.parse(
                      t,
                      e.className,
                      "className",
                      this,
                      null,
                      null,
                      e
                    ))
                : (this._firstPT = r = this.parse(t, e, null)),
              this._transformType)
            ) {
              for (
                l = 3 === this._transformType,
                  At
                    ? v &&
                      ((g = !0),
                      "" === s.zIndex &&
                        (("auto" !== (e = ot(t, "zIndex", P)) && "" !== e) ||
                          this._addLazySet(s, "zIndex", 0)),
                      y &&
                        this._addLazySet(
                          s,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (l ? "visible" : "hidden")
                        ))
                    : (s.zoom = 1),
                  n = r;
                n && n._next;

              )
                n = n._next;
              (s = new yt(t, "transform", 0, 0, null, 2)),
                this._linkCSSP(s, null, n),
                (s.setRatio = At ? Gt : kt),
                (s.data = this._transform || jt(t, P, !0)),
                (s.tween = i),
                (s.pr = -1),
                p.pop();
            }
            if (u) {
              for (; r; ) {
                for (h = r._next, n = o; n && n.pr > r.pr; ) n = n._next;
                (r._prev = n ? n._prev : a) ? (r._prev._next = r) : (o = r),
                  (r._next = n) ? (n._prev = r) : (a = r),
                  (r = h);
              }
              this._firstPT = o;
            }
            return !0;
          }),
          (t.parse = function (t, e, i, s) {
            var r,
              n,
              o,
              a,
              h,
              l,
              c,
              p,
              u = t.style;
            for (r in e) {
              if (
                ("function" == typeof (h = e[r]) && (h = h(X, E)), (p = f[r]))
              )
                i = p.parse(t, h, r, this, i, s, e);
              else {
                if ("--" === r.substr(0, 2)) {
                  this._tween._propLookup[r] = this._addTween.call(
                    this._tween,
                    t.style,
                    "setProperty",
                    nt(t).getPropertyValue(r) + "",
                    h + "",
                    r,
                    !1,
                    r
                  );
                  continue;
                }
                (a = ot(t, r, P) + ""),
                  (c = "string" == typeof h),
                  "color" === r ||
                  "fill" === r ||
                  "stroke" === r ||
                  -1 !== r.indexOf("Color") ||
                  (c && B.test(h))
                    ? (c ||
                        (h =
                          (3 < (h = ft(h)).length ? "rgba(" : "rgb(") +
                          h.join(",") +
                          ")"),
                      (i = xt(u, r, a, h, !0, "transparent", i, 0, s)))
                    : c && q.test(h)
                    ? (i = xt(u, r, a, h, !0, null, i, 0, s))
                    : ((l =
                        (n = parseFloat(a)) || 0 === n
                          ? a.substr((n + "").length)
                          : ""),
                      ("" !== a && "auto" !== a) ||
                        (l =
                          "width" === r || "height" === r
                            ? ((n = (function (t, e, i) {
                                if ("svg" === (t.nodeName + "").toLowerCase())
                                  return (i || nt(t))[e] || 0;
                                if (t.getCTM && Nt(t))
                                  return t.getBBox()[e] || 0;
                                var s = parseFloat(
                                    "width" === e
                                      ? t.offsetWidth
                                      : t.offsetHeight
                                  ),
                                  r = lt[e],
                                  n = r.length;
                                for (i = i || nt(t, null); -1 < --n; )
                                  (s -=
                                    parseFloat(
                                      ot(t, "padding" + r[n], i, !0)
                                    ) || 0),
                                    (s -=
                                      parseFloat(
                                        ot(t, "border" + r[n] + "Width", i, !0)
                                      ) || 0);
                                return s;
                              })(t, r, P)),
                              "px")
                            : "left" === r || "top" === r
                            ? ((n = ht(t, r, P)), "px")
                            : ((n = "opacity" !== r ? 0 : 1), "")),
                      "" ===
                        (c = (p = c && "=" === h.charAt(1))
                          ? ((o = parseInt(h.charAt(0) + "1", 10)),
                            (h = h.substr(2)),
                            (o *= parseFloat(h)),
                            h.replace(F, ""))
                          : ((o = parseFloat(h)), c ? h.replace(F, "") : "")) &&
                        (c = r in b ? b[r] : l),
                      (h = o || 0 === o ? (p ? o + n : o) + c : e[r]),
                      l === c ||
                        ("" === c && "lineHeight" !== r) ||
                        (!o && 0 !== o) ||
                        !n ||
                        ((n = at(t, r, n, l)),
                        "%" === c
                          ? ((n /= at(t, r, 100, "%") / 100),
                            !0 !== e.strictUnits && (a = n + "%"))
                          : "em" === c ||
                            "rem" === c ||
                            "vw" === c ||
                            "vh" === c
                          ? (n /= at(t, r, 1, c))
                          : "px" !== c && ((o = at(t, r, o, c)), (c = "px")),
                        p && (o || 0 === o) && (h = o + n + c)),
                      p && (o += n),
                      (!n && 0 !== n) || (!o && 0 !== o)
                        ? void 0 !== u[r] &&
                          (h || (h + "" != "NaN" && null != h))
                          ? ((i = new yt(
                              u,
                              r,
                              o || n || 0,
                              0,
                              i,
                              -1,
                              r,
                              !1,
                              0,
                              a,
                              h
                            )).xs0 =
                              "none" !== h ||
                              ("display" !== r && -1 === r.indexOf("Style"))
                                ? h
                                : a)
                          : d("invalid " + r + " tween value: " + e[r])
                        : ((i = new yt(
                            u,
                            r,
                            n,
                            o - n,
                            i,
                            0,
                            r,
                            !1 !== O && ("px" === c || "zIndex" === r),
                            0,
                            a,
                            h
                          )).xs0 = c));
              }
              s && i && !i.plugin && (i.plugin = s);
            }
            return i;
          }),
          (t.setRatio = function (t) {
            var e,
              i,
              s,
              r = this._firstPT;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; r; ) {
                  if (
                    ((e = r.c * t + r.s),
                    r.r ? (e = r.r(e)) : e < 1e-6 && -1e-6 < e && (e = 0),
                    r.type)
                  )
                    if (1 === r.type)
                      if (2 === (s = r.l))
                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === s)
                        r.t[r.p] =
                          r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4;
                      else if (5 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4 +
                          r.xn4 +
                          r.xs5;
                      else {
                        for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++)
                          i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i;
                      }
                    else
                      -1 === r.type
                        ? (r.t[r.p] = r.xs0)
                        : r.setRatio && r.setRatio(t);
                  else r.t[r.p] = e + r.xs0;
                  r = r._next;
                }
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                    (r = r._next);
            else
              for (; r; ) {
                if (2 !== r.type)
                  if (r.r && -1 !== r.type)
                    if (((e = r.r(r.s + r.c)), r.type)) {
                      if (1 === r.type) {
                        for (
                          s = r.l, i = r.xs0 + e + r.xs1, s = 1;
                          s < r.l;
                          s++
                        )
                          i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i;
                      }
                    } else r.t[r.p] = e + r.xs0;
                  else r.t[r.p] = r.e;
                else r.setRatio(t);
                r = r._next;
              }
          }),
          (t._enableTransforms = function (t) {
            (this._transform = this._transform || jt(this._target, P, !0)),
              (this._transformType =
                (this._transform.svg && Ct) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        function $t(t) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        }
        (t._addLazySet = function (t, e, i) {
          e = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
          (e.e = i), (e.setRatio = $t), (e.data = this);
        }),
          (t._linkCSSP = function (t, e, i, s) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (s = !0)),
                i
                  ? (i._next = t)
                  : s || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (t._mod = function (t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
          }),
          (t._kill = function (t) {
            var e,
              i,
              s,
              r = t;
            if (t.autoAlpha || t.alpha) {
              for (i in ((r = {}), t)) r[i] = t[i];
              (r.opacity = 1), r.autoAlpha && (r.visibility = 1);
            }
            for (
              t.className &&
                (e = this._classNamePT) &&
                ((s = e.xfirst) && s._prev
                  ? this._linkCSSP(s._prev, e._next, s._prev._prev)
                  : s === this._firstPT && (this._firstPT = e._next),
                e._next && this._linkCSSP(e._next, e._next._next, s._prev),
                (this._classNamePT = null)),
                e = this._firstPT;
              e;

            )
              e.plugin &&
                e.plugin !== i &&
                e.plugin._kill &&
                (e.plugin._kill(t), (i = e.plugin)),
                (e = e._next);
            return n.prototype._kill.call(this, r);
          });
        var Kt = function (t, e, i) {
          var s, r, n, o;
          if (t.slice) for (r = t.length; -1 < --r; ) Kt(t[r], e, i);
          else
            for (r = (s = t.childNodes).length; -1 < --r; )
              (o = (n = s[r]).type),
                n.style && (e.push(_(n)), i && i.push(n)),
                (1 !== o && 9 !== o && 11 !== o) ||
                  !n.childNodes.length ||
                  Kt(n, e, i);
        };
        return (
          (A.cascadeTo = function (t, e, i) {
            var s,
              r,
              n,
              o,
              a = R.to(t, e, i),
              h = [a],
              l = [],
              c = [],
              p = [],
              u = R._internals.reservedProps;
            for (
              t = a._targets || a.target,
                Kt(t, l, p),
                a.render(e, !0, !0),
                Kt(t, c),
                a.render(0, !0, !0),
                a._enabled(!0),
                s = p.length;
              -1 < --s;

            )
              if ((r = m(p[s], l[s], c[s])).firstMPT) {
                for (n in ((r = r.difs), i)) u[n] && (r[n] = i[n]);
                for (n in ((o = {}), r)) o[n] = l[s][n];
                h.push(R.fromTo(p[s], e, o, r));
              }
            return h;
          }),
          n.activate([A]),
          A
        );
      },
      !0
    ),
    ((t = (t = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.7.0",
      priority: -1,
      API: 2,
      init: function (t, e, i) {
        return (this._tween = i), !0;
      },
    })).prototype)._onInitAllProps = function () {
      var t,
        e,
        i,
        s,
        r = this._tween,
        n = r.vars.roundProps,
        o = {},
        a = r._propLookup.roundProps;
      if ("object" != typeof n || n.push)
        for (
          i = (n = "string" == typeof n ? n.split(",") : n).length;
          -1 < --i;

        )
          o[n[i]] = Math.round;
      else
        for (s in n)
          o[s] = (function (e) {
            var i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
            return function (t) {
              return ((Math.round(t / e) * e * i) | 0) / i;
            };
          })(n[s]);
      for (s in o)
        for (t = r._firstPT; t; )
          (e = t._next),
            t.pg
              ? t.t._mod(o)
              : t.n === s &&
                (2 === t.f && t.t
                  ? (function (t, e) {
                      for (; t; )
                        t.f || t.blob || (t.m = e || Math.round), (t = t._next);
                    })(t.t._firstPT, o[s])
                  : (this._add(t.t, s, t.s, t.c, o[s]),
                    e && (e._prev = t._prev),
                    t._prev
                      ? (t._prev._next = e)
                      : r._firstPT === t && (r._firstPT = e),
                    (t._next = t._prev = null),
                    (r._propLookup[s] = a))),
            (t = e);
      return !1;
    }),
    (t._add = function (t, e, i, s, r) {
      this._addTween(t, e, i, i + s, e, r || Math.round),
        this._overwriteProps.push(e);
    }),
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      init: function (t, e, i, s) {
        var r, n;
        if ("function" != typeof t.setAttribute) return !1;
        for (r in e)
          (n = e[r]),
            "function" == typeof n && (n = n(s, t)),
            this._addTween(
              t,
              "setAttribute",
              t.getAttribute(r) + "",
              n + "",
              r,
              !1,
              r
            ),
            this._overwriteProps.push(r);
        return !0;
      },
    }),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (t, e, i, s) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var r,
          n,
          o,
          a,
          h,
          l = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (r in e)
          "useRadians" !== r &&
            ((a = e[r]),
            "function" == typeof a && (a = a(s, t)),
            (h = (a + "").split("_")),
            (n = h[0]),
            (o = parseFloat(
              "function" != typeof t[r]
                ? t[r]
                : t[
                    r.indexOf("set") ||
                    "function" != typeof t["get" + r.substr(3)]
                      ? r
                      : "get" + r.substr(3)
                  ]()
            )),
            (a = this.finals[r] =
              "string" == typeof n && "=" === n.charAt(1)
                ? o + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))
                : Number(n) || 0),
            (a = a - o),
            h.length &&
              ((n = h.join("_")),
              -1 !== n.indexOf("short") &&
                ((a %= l), a !== a % (l / 2) && (a = a < 0 ? a + l : a - l)),
              -1 !== n.indexOf("_cw") && a < 0
                ? (a = ((a + 9999999999 * l) % l) - ((a / l) | 0) * l)
                : -1 !== n.indexOf("ccw") &&
                  0 < a &&
                  (a = ((a - 9999999999 * l) % l) - ((a / l) | 0) * l)),
            (1e-6 < a || a < -1e-6) &&
              (this._addTween(t, r, o, o + a, r),
              this._overwriteProps.push(r)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (m) {
        function t(t, e) {
          var i = l("easing." + t, function () {}, !0);
          return (
            ((t = i.prototype = new m()).constructor = i), (t.getRatio = e), i
          );
        }
        function e(t, e, i, s, r) {
          return (
            (s = l(
              "easing." + t,
              { easeOut: new e(), easeIn: new i(), easeInOut: new s() },
              !0
            )),
            c(s, t),
            s
          );
        }
        function g(t, e, i) {
          (this.t = t),
            (this.v = e),
            i &&
              ((((this.next = i).prev = this).c = i.v - e),
              (this.gap = i.t - t));
        }
        var i,
          s,
          r,
          n = _gsScope.GreenSockGlobals || _gsScope,
          o = n.com.greensock,
          a = 2 * Math.PI,
          h = Math.PI / 2,
          l = o._class,
          c = m.register || function () {},
          p = function (t, e) {
            var i = l(
                "easing." + t,
                function (t) {
                  (this._p1 = t || 0 === t ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              t = (i.prototype = new m());
            return (
              (t.constructor = i),
              (t.getRatio = e),
              (t.config = function (t) {
                return new i(t);
              }),
              i
            );
          },
          o = e(
            "Back",
            p("BackOut", function (t) {
              return --t * t * ((this._p1 + 1) * t + this._p1) + 1;
            }),
            p("BackIn", function (t) {
              return t * t * ((this._p1 + 1) * t - this._p1);
            }),
            p("BackInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
            })
          ),
          u = l(
            "easing.SlowMo",
            function (t, e, i) {
              (e = e || 0 === e ? e : 0.7),
                null == t ? (t = 0.7) : 1 < t && (t = 1),
                (this._p = 1 !== t ? e : 0),
                (this._p1 = (1 - t) / 2),
                (this._p2 = t),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = !0 === i);
            },
            !0
          ),
          p = (u.prototype = new m());
        return (
          (p.constructor = u),
          (p.getRatio = function (t) {
            var e = t + (0.5 - t) * this._p;
            return t < this._p1
              ? this._calcEnd
                ? 1 - (t = 1 - t / this._p1) * t
                : e - (t = 1 - t / this._p1) * t * t * t * e
              : t > this._p3
              ? this._calcEnd
                ? 1 === t
                  ? 0
                  : 1 - (t = (t - this._p3) / this._p1) * t
                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
              : this._calcEnd
              ? 1
              : e;
          }),
          (u.ease = new u(0.7, 0.7)),
          (p.config = u.config =
            function (t, e, i) {
              return new u(t, e, i);
            }),
          ((p = (i = l(
            "easing.SteppedEase",
            function (t, e) {
              (this._p1 = 1 / (t = t || 1)),
                (this._p2 = t + (e ? 0 : 1)),
                (this._p3 = e ? 1 : 0);
            },
            !0
          )).prototype =
            new m()).constructor = i),
          (p.getRatio = function (t) {
            return (
              t < 0 ? (t = 0) : 1 <= t && (t = 0.999999999),
              (((this._p2 * t) | 0) + this._p3) * this._p1
            );
          }),
          (p.config = i.config =
            function (t, e) {
              return new i(t, e);
            }),
          ((p = (s = l(
            "easing.ExpoScaleEase",
            function (t, e, i) {
              (this._p1 = Math.log(e / t)),
                (this._p2 = e - t),
                (this._p3 = t),
                (this._ease = i);
            },
            !0
          )).prototype =
            new m()).constructor = s),
          (p.getRatio = function (t) {
            return (
              this._ease && (t = this._ease.getRatio(t)),
              (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            );
          }),
          (p.config = s.config =
            function (t, e, i) {
              return new s(t, e, i);
            }),
          ((p = (r = l(
            "easing.RoughEase",
            function (t) {
              for (
                var e,
                  i,
                  s,
                  r,
                  n,
                  o,
                  a = (t = t || {}).taper || "none",
                  h = [],
                  l = 0,
                  c = 0 | (t.points || 20),
                  p = c,
                  u = !1 !== t.randomize,
                  f = !0 === t.clamp,
                  d = t.template instanceof m ? t.template : null,
                  _ = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                -1 < --p;

              )
                (e = u ? Math.random() : (1 / c) * p),
                  (i = d ? d.getRatio(e) : e),
                  (s =
                    "none" === a
                      ? _
                      : "out" === a
                      ? (r = 1 - e) * r * _
                      : "in" === a
                      ? e * e * _
                      : (r = e < 0.5 ? 2 * e : 2 * (1 - e)) * r * 0.5 * _),
                  u
                    ? (i += Math.random() * s - 0.5 * s)
                    : p % 2
                    ? (i += 0.5 * s)
                    : (i -= 0.5 * s),
                  f && (1 < i ? (i = 1) : i < 0 && (i = 0)),
                  (h[l++] = { x: e, y: i });
              for (
                h.sort(function (t, e) {
                  return t.x - e.x;
                }),
                  o = new g(1, 1, null),
                  p = c;
                -1 < --p;

              )
                (n = h[p]), (o = new g(n.x, n.y, o));
              this._prev = new g(0, 0, 0 !== o.t ? o : o.next);
            },
            !0
          )).prototype =
            new m()).constructor = r),
          (p.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t; ) e = e.next;
              e = e.prev;
            } else for (; e.prev && t <= e.t; ) e = e.prev;
            return (this._prev = e).v + ((t - e.t) / e.gap) * e.c;
          }),
          (p.config = function (t) {
            return new r(t);
          }),
          (r.ease = new r()),
          e(
            "Bounce",
            t("BounceOut", function (t) {
              return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            t("BounceIn", function (t) {
              return (t = 1 - t) < 1 / 2.75
                ? 1 - 7.5625 * t * t
                : t < 2 / 2.75
                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : t < 2.5 / 2.75
                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            t("BounceInOut", function (t) {
              var e = t < 0.5;
              return (
                (t =
                  (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
              );
            })
          ),
          e(
            "Circ",
            t("CircOut", function (t) {
              return Math.sqrt(1 - --t * t);
            }),
            t("CircIn", function (t) {
              return -(Math.sqrt(1 - t * t) - 1);
            }),
            t("CircInOut", function (t) {
              return (t *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            })
          ),
          e(
            "Elastic",
            (p = function (t, e, i) {
              var s = l(
                  "easing." + t,
                  function (t, e) {
                    (this._p1 = 1 <= t ? t : 1),
                      (this._p2 = (e || i) / (t < 1 ? t : 1)),
                      (this._p3 =
                        (this._p2 / a) * (Math.asin(1 / this._p1) || 0)),
                      (this._p2 = a / this._p2);
                  },
                  !0
                ),
                t = (s.prototype = new m());
              return (
                (t.constructor = s),
                (t.getRatio = e),
                (t.config = function (t, e) {
                  return new s(t, e);
                }),
                s
              );
            })(
              "ElasticOut",
              function (t) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * t) *
                    Math.sin((t - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            p(
              "ElasticIn",
              function (t) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * --t) *
                  Math.sin((t - this._p3) * this._p2)
                );
              },
              0.3
            ),
            p(
              "ElasticInOut",
              function (t) {
                return (t *= 2) < 1
                  ? this._p1 *
                      Math.pow(2, 10 * --t) *
                      Math.sin((t - this._p3) * this._p2) *
                      -0.5
                  : this._p1 *
                      Math.pow(2, -10 * --t) *
                      Math.sin((t - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          e(
            "Expo",
            t("ExpoOut", function (t) {
              return 1 - Math.pow(2, -10 * t);
            }),
            t("ExpoIn", function (t) {
              return Math.pow(2, 10 * (t - 1)) - 0.001;
            }),
            t("ExpoInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
            })
          ),
          e(
            "Sine",
            t("SineOut", function (t) {
              return Math.sin(t * h);
            }),
            t("SineIn", function (t) {
              return 1 - Math.cos(t * h);
            }),
            t("SineInOut", function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            })
          ),
          l(
            "easing.EaseLookup",
            {
              find: function (t) {
                return m.map[t];
              },
            },
            !0
          ),
          c(n.SlowMo, "SlowMo", "ease,"),
          c(r, "RoughEase", "ease,"),
          c(i, "SteppedEase", "ease,"),
          o
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (u, f) {
    "use strict";
    var d = {},
      _ = u.document,
      m = (u.GreenSockGlobals = u.GreenSockGlobals || u),
      t = m[f];
    if (t)
      return (
        "undefined" != typeof module && module.exports && (module.exports = t)
      );
    function g(t) {
      for (var e = t.split("."), i = m, s = 0; s < e.length; s++)
        i[e[s]] = i = i[e[s]] || {};
      return i;
    }
    function a(t) {
      for (var e = [], i = t.length, s = 0; s !== i; e.push(t[s++]));
      return e;
    }
    function v() {}
    var y,
      e,
      i,
      p = g("com.greensock"),
      x = 1e-10,
      T =
        ((e = Object.prototype.toString),
        (i = e.call([])),
        function (t) {
          return (
            null != t &&
            (t instanceof Array ||
              ("object" == typeof t && !!t.push && e.call(t) === i))
          );
        }),
      b = {},
      w = function (a, h, l, c) {
        (this.sc = b[a] ? b[a].sc : []),
          ((b[a] = this).gsClass = null),
          (this.func = l);
        var p = [];
        (this.check = function (t) {
          for (var e, i, s, r, n = h.length, o = n; -1 < --n; )
            (e = b[h[n]] || new w(h[n], [])).gsClass
              ? ((p[n] = e.gsClass), o--)
              : t && e.sc.push(this);
          if (0 === o && l) {
            if (
              ((s = (i = ("com.greensock." + a).split(".")).pop()),
              (r = g(i.join("."))[s] = this.gsClass = l.apply(l, p)),
              c)
            )
              if (
                ((m[s] = d[s] = r),
                "undefined" != typeof module && module.exports)
              )
                if (a === f)
                  for (n in ((module.exports = d[f] = r), d)) r[n] = d[n];
                else d[f] && (d[f][s] = r);
              else
                "function" == typeof define &&
                  define.amd &&
                  define(
                    (u.GreenSockAMDPath ? u.GreenSockAMDPath + "/" : "") +
                      a.split(".").pop(),
                    [],
                    function () {
                      return r;
                    }
                  );
            for (n = 0; n < this.sc.length; n++) this.sc[n].check();
          }
        }),
          this.check(!0);
      },
      s = (u._gsDefine = function (t, e, i, s) {
        return new w(t, e, i, s);
      }),
      P = (p._class = function (t, e, i) {
        return (
          (e = e || function () {}),
          s(
            t,
            [],
            function () {
              return e;
            },
            i
          ),
          e
        );
      });
    s.globals = m;
    var r,
      n = [0, 0, 1, 1],
      S = P(
        "easing.Ease",
        function (t, e, i, s) {
          (this._func = t),
            (this._type = i || 0),
            (this._power = s || 0),
            (this._params = e ? n.concat(e) : n);
        },
        !0
      ),
      k = (S.map = {}),
      o = (S.register = function (t, e, i, s) {
        for (
          var r,
            n,
            o,
            a,
            h = e.split(","),
            l = h.length,
            c = (i || "easeIn,easeOut,easeInOut").split(",");
          -1 < --l;

        )
          for (
            n = h[l],
              r = s ? P("easing." + n, null, !0) : p.easing[n] || {},
              o = c.length;
            -1 < --o;

          )
            (a = c[o]),
              (k[n + "." + a] =
                k[a + n] =
                r[a] =
                  t.getRatio ? t : t[a] || new t());
      });
    for (
      (r = S.prototype)._calcEnd = !1,
        r.getRatio = function (t) {
          if (this._func)
            return (this._params[0] = t), this._func.apply(null, this._params);
          var e = this._type,
            i = this._power,
            s = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
          return (
            1 === i
              ? (s *= s)
              : 2 === i
              ? (s *= s * s)
              : 3 === i
              ? (s *= s * s * s)
              : 4 === i && (s *= s * s * s * s),
            1 === e ? 1 - s : 2 === e ? s : t < 0.5 ? s / 2 : 1 - s / 2
          );
        },
        l = (h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
      -1 < --l;

    )
      (r = h[l] + ",Power" + l),
        o(new S(null, null, 1, l), r, "easeOut", !0),
        o(new S(null, null, 2, l), r, "easeIn" + (0 === l ? ",easeNone" : "")),
        o(new S(null, null, 3, l), r, "easeInOut");
    (k.linear = p.easing.Linear.easeIn), (k.swing = p.easing.Quad.easeInOut);
    var C = P("events.EventDispatcher", function (t) {
      (this._listeners = {}), (this._eventTarget = t || this);
    });
    ((r = C.prototype).addEventListener = function (t, e, i, s, r) {
      r = r || 0;
      var n,
        o,
        a = this._listeners[t],
        h = 0;
      for (
        this !== X || y || X.wake(),
          null == a && (this._listeners[t] = a = []),
          o = a.length;
        -1 < --o;

      )
        (n = a[o]).c === e && n.s === i
          ? a.splice(o, 1)
          : 0 === h && n.pr < r && (h = o + 1);
      a.splice(h, 0, { c: e, s: i, up: s, pr: r });
    }),
      (r.removeEventListener = function (t, e) {
        var i,
          s = this._listeners[t];
        if (s)
          for (i = s.length; -1 < --i; )
            if (s[i].c === e) return void s.splice(i, 1);
      }),
      (r.dispatchEvent = function (t) {
        var e,
          i,
          s,
          r = this._listeners[t];
        if (r)
          for (
            1 < (e = r.length) && (r = r.slice(0)), i = this._eventTarget;
            -1 < --e;

          )
            (s = r[e]) &&
              (s.up
                ? s.c.call(s.s || i, { type: t, target: i })
                : s.c.call(s.s || i));
      });
    for (
      var h,
        O = u.requestAnimationFrame,
        E = u.cancelAnimationFrame,
        R =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        A = R(),
        l = (h = ["ms", "moz", "webkit", "o"]).length;
      -1 < --l && !O;

    )
      (O = u[h[l] + "RequestAnimationFrame"]),
        (E =
          u[h[l] + "CancelAnimationFrame"] ||
          u[h[l] + "CancelRequestAnimationFrame"]);
    P("Ticker", function (t, e) {
      var s,
        r,
        n,
        o,
        a,
        h = this,
        l = R(),
        i = !(!1 === e || !O) && "auto",
        c = 500,
        p = 33,
        u = function (t) {
          var e,
            i = R() - A;
          c < i && (l += i - p),
            (A += i),
            (h.time = (A - l) / 1e3),
            (i = h.time - a),
            (!s || 0 < i || !0 === t) &&
              (h.frame++, (a += i + (o <= i ? 0.004 : o - i)), (e = !0)),
            !0 !== t && (n = r(u)),
            e && h.dispatchEvent("tick");
        };
      C.call(h),
        (h.time = h.frame = 0),
        (h.tick = function () {
          u(!0);
        }),
        (h.lagSmoothing = function (t, e) {
          return arguments.length
            ? ((c = t || 1e10), void (p = Math.min(e, c, 0)))
            : c < 1e10;
        }),
        (h.sleep = function () {
          null != n &&
            ((i && E ? E : clearTimeout)(n),
            (r = v),
            (n = null),
            h === X && (y = !1));
        }),
        (h.wake = function (t) {
          null !== n
            ? h.sleep()
            : t
            ? (l += -A + (A = R()))
            : 10 < h.frame && (A = R() - c + 5),
            (r =
              0 === s
                ? v
                : i && O
                ? O
                : function (t) {
                    return setTimeout(t, (1e3 * (a - h.time) + 1) | 0);
                  }),
            h === X && (y = !0),
            u(2);
        }),
        (h.fps = function (t) {
          return arguments.length
            ? ((o = 1 / ((s = t) || 60)), (a = this.time + o), void h.wake())
            : s;
        }),
        (h.useRAF = function (t) {
          return arguments.length ? (h.sleep(), (i = t), void h.fps(s)) : i;
        }),
        h.fps(t),
        setTimeout(function () {
          "auto" === i &&
            h.frame < 5 &&
            "hidden" !== (_ || {}).visibilityState &&
            h.useRAF(!1);
        }, 1500);
    }),
      ((r = p.Ticker.prototype = new p.events.EventDispatcher()).constructor =
        p.Ticker);
    var c = P("core.Animation", function (t, e) {
        (this.vars = e = e || {}),
          (this._duration = this._totalDuration = t || 0),
          (this._delay = Number(e.delay) || 0),
          (this._timeScale = 1),
          (this._active = !0 === e.immediateRender),
          (this.data = e.data),
          (this._reversed = !0 === e.reversed),
          $ &&
            (y || X.wake(),
            (e = this.vars.useFrames ? Z : $).add(this, e._time),
            this.vars.paused && this.paused(!0));
      }),
      X = (c.ticker = new p.Ticker());
    ((r = c.prototype)._dirty = r._gc = r._initted = r._paused = !1),
      (r._totalTime = r._time = 0),
      (r._rawPrevTime = -1),
      (r._next = r._last = r._onUpdate = r._timeline = r.timeline = null),
      (r._paused = !1);
    var D = function () {
      y &&
        2e3 < R() - A &&
        ("hidden" !== (_ || {}).visibilityState || !X.lagSmoothing()) &&
        X.wake();
      var t = setTimeout(D, 2e3);
      t.unref && t.unref();
    };
    D(),
      (r.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (r.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (r.resume = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!1);
      }),
      (r.seek = function (t, e) {
        return this.totalTime(Number(t), !1 !== e);
      }),
      (r.restart = function (t, e) {
        return this.reversed(!1)
          .paused(!1)
          .totalTime(t ? -this._delay : 0, !1 !== e, !0);
      }),
      (r.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (r.render = function (t, e, i) {}),
      (r.invalidate = function () {
        return (
          (this._time = this._totalTime = 0),
          (this._initted = this._gc = !1),
          (this._rawPrevTime = -1),
          (!this._gc && this.timeline) || this._enabled(!0),
          this
        );
      }),
      (r.isActive = function () {
        var t,
          e = this._timeline,
          i = this._startTime;
        return (
          !e ||
          (!this._gc &&
            !this._paused &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= i &&
            t < i + this.totalDuration() / this._timeScale - 1e-7)
        );
      }),
      (r._enabled = function (t, e) {
        return (
          y || X.wake(),
          (this._gc = !t),
          (this._active = this.isActive()),
          !0 !== e &&
            (t && !this.timeline
              ? this._timeline.add(this, this._startTime - this._delay)
              : !t && this.timeline && this._timeline._remove(this, !0)),
          !1
        );
      }),
      (r._kill = function (t, e) {
        return this._enabled(!1, !1);
      }),
      (r.kill = function (t, e) {
        return this._kill(t, e), this;
      }),
      (r._uncache = function (t) {
        for (var e = t ? this : this.timeline; e; )
          (e._dirty = !0), (e = e.timeline);
        return this;
      }),
      (r._swapSelfInParams = function (t) {
        for (var e = t.length, i = t.concat(); -1 < --e; )
          "{self}" === t[e] && (i[e] = this);
        return i;
      }),
      (r._callback = function (t) {
        var e = this.vars,
          i = e[t],
          s = e[t + "Params"],
          r = e[t + "Scope"] || e.callbackScope || this;
        switch (s ? s.length : 0) {
          case 0:
            i.call(r);
            break;
          case 1:
            i.call(r, s[0]);
            break;
          case 2:
            i.call(r, s[0], s[1]);
            break;
          default:
            i.apply(r, s);
        }
      }),
      (r.eventCallback = function (t, e, i, s) {
        if ("on" === (t || "").substr(0, 2)) {
          var r = this.vars;
          if (1 === arguments.length) return r[t];
          null == e
            ? delete r[t]
            : ((r[t] = e),
              (r[t + "Params"] =
                T(i) && -1 !== i.join("").indexOf("{self}")
                  ? this._swapSelfInParams(i)
                  : i),
              (r[t + "Scope"] = s)),
            "onUpdate" === t && (this._onUpdate = e);
        }
        return this;
      }),
      (r.delay = function (t) {
        return arguments.length
          ? (this._timeline.smoothChildTiming &&
              this.startTime(this._startTime + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (r.duration = function (t) {
        return arguments.length
          ? ((this._duration = this._totalDuration = t),
            this._uncache(!0),
            this._timeline.smoothChildTiming &&
              0 < this._time &&
              this._time < this._duration &&
              0 !== t &&
              this.totalTime(this._totalTime * (t / this._duration), !0),
            this)
          : ((this._dirty = !1), this._duration);
      }),
      (r.totalDuration = function (t) {
        return (
          (this._dirty = !1),
          arguments.length ? this.duration(t) : this._totalDuration
        );
      }),
      (r.time = function (t, e) {
        return arguments.length
          ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e))
          : this._time;
      }),
      (r.totalTime = function (t, e, i) {
        if ((y || X.wake(), !arguments.length)) return this._totalTime;
        if (this._timeline) {
          if (
            (t < 0 && !i && (t += this.totalDuration()),
            this._timeline.smoothChildTiming)
          ) {
            this._dirty && this.totalDuration();
            var s = this._totalDuration,
              r = this._timeline;
            if (
              (s < t && !i && (t = s),
              (this._startTime =
                (this._paused ? this._pauseTime : r._time) -
                (this._reversed ? s - t : t) / this._timeScale),
              r._dirty || this._uncache(!1),
              r._timeline)
            )
              for (; r._timeline; )
                r._timeline._time !==
                  (r._startTime + r._totalTime) / r._timeScale &&
                  r.totalTime(r._totalTime, !0),
                  (r = r._timeline);
          }
          this._gc && this._enabled(!0, !1),
            (this._totalTime === t && 0 !== this._duration) ||
              (B.length && Q(), this.render(t, e, !1), B.length && Q());
        }
        return this;
      }),
      (r.progress = r.totalProgress =
        function (t, e) {
          var i = this.duration();
          return arguments.length
            ? this.totalTime(i * t, e)
            : i
            ? this._time / i
            : this.ratio;
        }),
      (r.startTime = function (t) {
        return arguments.length
          ? (t !== this._startTime &&
              ((this._startTime = t),
              this.timeline &&
                this.timeline._sortChildren &&
                this.timeline.add(this, t - this._delay)),
            this)
          : this._startTime;
      }),
      (r.endTime = function (t) {
        return (
          this._startTime +
          (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        );
      }),
      (r.timeScale = function (t) {
        if (!arguments.length) return this._timeScale;
        var e, i;
        for (
          t = t || x,
            this._timeline &&
              this._timeline.smoothChildTiming &&
              ((i =
                (e = this._pauseTime) || 0 === e
                  ? e
                  : this._timeline.totalTime()),
              (this._startTime =
                i - ((i - this._startTime) * this._timeScale) / t)),
            this._timeScale = t,
            i = this.timeline;
          i && i.timeline;

        )
          (i._dirty = !0), i.totalDuration(), (i = i.timeline);
        return this;
      }),
      (r.reversed = function (t) {
        return arguments.length
          ? (t != this._reversed &&
              ((this._reversed = t),
              this.totalTime(
                this._timeline && !this._timeline.smoothChildTiming
                  ? this.totalDuration() - this._totalTime
                  : this._totalTime,
                !0
              )),
            this)
          : this._reversed;
      }),
      (r.paused = function (t) {
        if (!arguments.length) return this._paused;
        var e,
          i,
          s = this._timeline;
        return (
          t != this._paused &&
            s &&
            (y || t || X.wake(),
            (i = (e = s.rawTime()) - this._pauseTime),
            !t &&
              s.smoothChildTiming &&
              ((this._startTime += i), this._uncache(!1)),
            (this._pauseTime = t ? e : null),
            (this._paused = t),
            (this._active = this.isActive()),
            !t &&
              0 != i &&
              this._initted &&
              this.duration() &&
              ((e = s.smoothChildTiming
                ? this._totalTime
                : (e - this._startTime) / this._timeScale),
              this.render(e, e === this._totalTime, !0))),
          this._gc && !t && this._enabled(!0, !1),
          this
        );
      });
    var M = P("core.SimpleTimeline", function (t) {
      c.call(this, 0, t),
        (this.autoRemoveChildren = this.smoothChildTiming = !0);
    });
    ((r = M.prototype = new c()).constructor = M),
      (r.kill()._gc = !1),
      (r._first = r._last = r._recent = null),
      (r._sortChildren = !1),
      (r.add = r.insert =
        function (t, e, i, s) {
          var r, n;
          if (
            ((t._startTime = Number(e || 0) + t._delay),
            t._paused &&
              this !== t._timeline &&
              (t._pauseTime =
                this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
            t.timeline && t.timeline._remove(t, !0),
            (t.timeline = t._timeline = this),
            t._gc && t._enabled(!0, !0),
            (r = this._last),
            this._sortChildren)
          )
            for (n = t._startTime; r && r._startTime > n; ) r = r._prev;
          return (
            r
              ? ((t._next = r._next), (r._next = t))
              : ((t._next = this._first), (this._first = t)),
            t._next ? (t._next._prev = t) : (this._last = t),
            (t._prev = r),
            (this._recent = t),
            this._timeline && this._uncache(!0),
            this
          );
        }),
      (r._remove = function (t, e) {
        return (
          t.timeline === this &&
            (e || t._enabled(!1, !0),
            t._prev
              ? (t._prev._next = t._next)
              : this._first === t && (this._first = t._next),
            t._next
              ? (t._next._prev = t._prev)
              : this._last === t && (this._last = t._prev),
            (t._next = t._prev = t.timeline = null),
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
          this
        );
      }),
      (r.render = function (t, e, i) {
        var s,
          r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r; )
          (s = r._next),
            (r._active || (t >= r._startTime && !r._paused && !r._gc)) &&
              (r._reversed
                ? r.render(
                    (r._dirty ? r.totalDuration() : r._totalDuration) -
                      (t - r._startTime) * r._timeScale,
                    e,
                    i
                  )
                : r.render((t - r._startTime) * r._timeScale, e, i)),
            (r = s);
      }),
      (r.rawTime = function () {
        return y || X.wake(), this._totalTime;
      });
    function Y(t) {
      return (
        t &&
        t.length &&
        t !== u &&
        t[0] &&
        (t[0] === u || (t[0].nodeType && t[0].style && !t.nodeType))
      );
    }
    var z = P(
      "TweenLite",
      function (t, e, i) {
        if ((c.call(this, e, i), (this.render = z.prototype.render), null == t))
          throw "Cannot tween a null target.";
        this.target = t = ("string" == typeof t && z.selector(t)) || t;
        var s,
          r,
          n,
          i =
            t.jquery ||
            (t.length &&
              t !== u &&
              t[0] &&
              (t[0] === u || (t[0].nodeType && t[0].style && !t.nodeType))),
          o = this.vars.overwrite;
        if (
          ((this._overwrite = o =
            null == o
              ? q[z.defaultOverwrite]
              : "number" == typeof o
              ? o >> 0
              : q[o]),
          (i || t instanceof Array || (t.push && T(t))) &&
            "number" != typeof t[0])
        )
          for (
            this._targets = n = a(t),
              this._propLookup = [],
              this._siblings = [],
              s = 0;
            s < n.length;
            s++
          )
            (r = n[s])
              ? "string" != typeof r
                ? r.length &&
                  r !== u &&
                  r[0] &&
                  (r[0] === u || (r[0].nodeType && r[0].style && !r.nodeType))
                  ? (n.splice(s--, 1), (this._targets = n = n.concat(a(r))))
                  : ((this._siblings[s] = tt(r, this, !1)),
                    1 === o &&
                      1 < this._siblings[s].length &&
                      et(r, this, null, 1, this._siblings[s]))
                : "string" == typeof (r = n[s--] = z.selector(r)) &&
                  n.splice(s + 1, 1)
              : n.splice(s--, 1);
        else
          (this._propLookup = {}),
            (this._siblings = tt(t, this, !1)),
            1 === o &&
              1 < this._siblings.length &&
              et(t, this, null, 1, this._siblings);
        (this.vars.immediateRender ||
          (0 === e && 0 === this._delay && !1 !== this.vars.immediateRender)) &&
          ((this._time = -x), this.render(Math.min(0, -this._delay)));
      },
      !0
    );
    ((r = z.prototype = new c()).constructor = z),
      (r.kill()._gc = !1),
      (r.ratio = 0),
      (r._firstPT = r._targets = r._overwrittenProps = r._startAt = null),
      (r._notifyPluginsOfEnabled = r._lazy = !1),
      (z.version = "2.0.2"),
      (z.defaultEase = r._ease = new S(null, null, 1, 1)),
      (z.defaultOverwrite = "auto"),
      (z.ticker = X),
      (z.autoSleep = 120),
      (z.lagSmoothing = function (t, e) {
        X.lagSmoothing(t, e);
      }),
      (z.selector =
        u.$ ||
        u.jQuery ||
        function (t) {
          var e = u.$ || u.jQuery;
          return e
            ? (z.selector = e)(t)
            : (_ = _ || u.document)
            ? _.querySelectorAll
              ? _.querySelectorAll(t)
              : _.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            : t;
        });
    function F(t) {
      for (var e, i = this._firstPT; i; )
        (e = i.blob
          ? 1 === t && null != this.end
            ? this.end
            : t
            ? this.join("")
            : this.start
          : i.c * t + i.s),
          i.m
            ? (e = i.m.call(this._tween, e, this._target || i.t, this._tween))
            : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0),
          i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
          (i = i._next);
    }
    function L(t, e, i, s) {
      var r,
        n,
        o,
        a,
        h,
        l,
        c = [],
        p = 0,
        u = "",
        f = 0;
      for (
        c.start = t,
          c.end = e,
          t = c[0] = t + "",
          e = c[1] = e + "",
          i && (i(c), (t = c[0]), (e = c[1])),
          c.length = 0,
          r = t.match(H) || [],
          n = e.match(H) || [],
          s && ((s._next = null), (s.blob = 1), (c._firstPT = c._applyPT = s)),
          a = n.length,
          o = 0;
        o < a;
        o++
      )
        (l = n[o]),
          (u += (h = e.substr(p, e.indexOf(l, p) - p)) || !o ? h : ","),
          (p += h.length),
          f ? (f = (f + 1) % 5) : "rgba(" === h.substr(-5) && (f = 1),
          l === r[o] || r.length <= o
            ? (u += l)
            : (u && (c.push(u), (u = "")),
              (h = parseFloat(r[o])),
              c.push(h),
              (c._firstPT = {
                _next: c._firstPT,
                t: c,
                p: c.length - 1,
                s: h,
                c:
                  ("=" === l.charAt(1)
                    ? parseInt(l.charAt(0) + "1", 10) * parseFloat(l.substr(2))
                    : parseFloat(l) - h) || 0,
                f: 0,
                m: f && f < 4 ? Math.round : 0,
              })),
          (p += l.length);
      return (
        (u += e.substr(p)) && c.push(u),
        (c.setRatio = F),
        W.test(e) && (c.end = null),
        c
      );
    }
    function I(t, e, i, s, r, n, o, a, h) {
      "function" == typeof s && (s = s(h || 0, t));
      var l = typeof t[e],
        h =
          "function" != l
            ? ""
            : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)]
            ? e
            : "get" + e.substr(3),
        i = "get" !== i ? i : h ? (o ? t[h](o) : t[h]()) : t[e],
        h = "string" == typeof s && "=" === s.charAt(1),
        n = {
          t: t,
          p: e,
          s: i,
          f: "function" == l,
          pg: 0,
          n: r || e,
          m: n ? ("function" == typeof n ? n : Math.round) : 0,
          pr: 0,
          c: h
            ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2))
            : parseFloat(s) - i || 0,
        };
      return (
        ("number" == typeof i && ("number" == typeof s || h)) ||
          (o ||
          isNaN(i) ||
          (!h && isNaN(s)) ||
          "boolean" == typeof i ||
          "boolean" == typeof s
            ? ((n.fp = o),
              (n = {
                t: L(
                  i,
                  h
                    ? parseFloat(n.s) +
                        n.c +
                        (n.s + "").replace(/[0-9\-\.]/g, "")
                    : s,
                  a || z.defaultStringFilter,
                  n
                ),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: r || e,
                pr: 0,
                m: 0,
              }))
            : ((n.s = parseFloat(i)), h || (n.c = parseFloat(s) - n.s || 0))),
        n.c
          ? ((n._next = this._firstPT) && (n._next._prev = n),
            (this._firstPT = n))
          : void 0
      );
    }
    var B = [],
      N = {},
      H = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      W = /[\+-]=-?[\.\d]/,
      t = (z._internals = {
        isArray: T,
        isSelector: Y,
        lazyTweens: B,
        blobDif: L,
      }),
      j = (z._plugins = {}),
      G = (t.tweenLookup = {}),
      U = 0,
      V = (t.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
      }),
      q = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0,
      },
      Z = (c._rootFramesTimeline = new M()),
      $ = (c._rootTimeline = new M()),
      K = 30,
      Q = (t.lazyRender = function () {
        var t,
          e = B.length;
        for (N = {}; -1 < --e; )
          (t = B[e]) &&
            !1 !== t._lazy &&
            (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
        B.length = 0;
      });
    ($._startTime = X.time),
      (Z._startTime = X.frame),
      ($._active = Z._active = !0),
      setTimeout(Q, 1),
      (c._updateRoot = z.render =
        function () {
          var t, e, i;
          if (
            (B.length && Q(),
            $.render((X.time - $._startTime) * $._timeScale, !1, !1),
            Z.render((X.frame - Z._startTime) * Z._timeScale, !1, !1),
            B.length && Q(),
            X.frame >= K)
          ) {
            for (i in ((K = X.frame + (parseInt(z.autoSleep, 10) || 120)), G)) {
              for (t = (e = G[i].tweens).length; -1 < --t; )
                e[t]._gc && e.splice(t, 1);
              0 === e.length && delete G[i];
            }
            if (
              (!(i = $._first) || i._paused) &&
              z.autoSleep &&
              !Z._first &&
              1 === X._listeners.tick.length
            ) {
              for (; i && i._paused; ) i = i._next;
              i || X.sleep();
            }
          }
        }),
      X.addEventListener("tick", c._updateRoot);
    function J(t, e, i, s) {
      var r,
        n,
        o = t.vars.onOverwrite;
      return (
        o && (r = o(t, e, i, s)),
        (o = z.onOverwrite) && (n = o(t, e, i, s)),
        !1 !== r && !1 !== n
      );
    }
    var tt = function (t, e, i) {
        var s,
          r,
          n = t._gsTweenID;
        if (
          (G[n || (t._gsTweenID = n = "t" + U++)] ||
            (G[n] = { target: t, tweens: [] }),
          e && (((s = G[n].tweens)[(r = s.length)] = e), i))
        )
          for (; -1 < --r; ) s[r] === e && s.splice(r, 1);
        return G[n].tweens;
      },
      et = function (t, e, i, s, r) {
        var n, o, a;
        if (1 === s || 4 <= s) {
          for (a = r.length, f = 0; f < a; f++)
            if ((o = r[f]) !== e) o._gc || (o._kill(null, t, e) && (n = !0));
            else if (5 === s) break;
          return n;
        }
        for (
          var h,
            l = e._startTime + x,
            c = [],
            p = 0,
            u = 0 === e._duration,
            f = r.length;
          -1 < --f;

        )
          (o = r[f]) === e ||
            o._gc ||
            o._paused ||
            (o._timeline !== e._timeline
              ? ((h = h || it(e, 0, u)), 0 === it(o, h, u) && (c[p++] = o))
              : o._startTime <= l &&
                o._startTime + o.totalDuration() / o._timeScale > l &&
                (((u || !o._initted) && l - o._startTime <= 2e-10) ||
                  (c[p++] = o)));
        for (f = p; -1 < --f; )
          if (
            ((a = (o = c[f])._firstPT),
            2 === s && o._kill(i, t, e) && (n = !0),
            2 !== s || (!o._firstPT && o._initted && a))
          ) {
            if (2 !== s && !J(o, e)) continue;
            o._enabled(!1, !1) && (n = !0);
          }
        return n;
      },
      it = function (t, e, i) {
        for (
          var s = t._timeline, r = s._timeScale, n = t._startTime;
          s._timeline;

        ) {
          if (((n += s._startTime), (r *= s._timeScale), s._paused))
            return -100;
          s = s._timeline;
        }
        return e < (n /= r)
          ? n - e
          : (i && n === e) || (!t._initted && n - e < 2 * x)
          ? x
          : (n += t.totalDuration() / t._timeScale / r) > e + x
          ? 0
          : n - e - x;
      };
    (r._init = function () {
      var t,
        e,
        i,
        s,
        r,
        n,
        o = this.vars,
        a = this._overwrittenProps,
        h = this._duration,
        l = !!o.immediateRender,
        c = o.ease;
      if (o.startAt) {
        for (s in (this._startAt &&
          (this._startAt.render(-1, !0), this._startAt.kill()),
        (r = {}),
        o.startAt))
          r[s] = o.startAt[s];
        if (
          ((r.data = "isStart"),
          (r.overwrite = !1),
          (r.immediateRender = !0),
          (r.lazy = l && !1 !== o.lazy),
          (r.startAt = r.delay = null),
          (r.onUpdate = o.onUpdate),
          (r.onUpdateParams = o.onUpdateParams),
          (r.onUpdateScope = o.onUpdateScope || o.callbackScope || this),
          (this._startAt = z.to(this.target || {}, 0, r)),
          l)
        )
          if (0 < this._time) this._startAt = null;
          else if (0 !== h) return;
      } else if (o.runBackwards && 0 !== h)
        if (this._startAt)
          this._startAt.render(-1, !0),
            this._startAt.kill(),
            (this._startAt = null);
        else {
          for (s in (0 !== this._time && (l = !1), (i = {}), o))
            (V[s] && "autoCSS" !== s) || (i[s] = o[s]);
          if (
            ((i.overwrite = 0),
            (i.data = "isFromStart"),
            (i.lazy = l && !1 !== o.lazy),
            (i.immediateRender = l),
            (this._startAt = z.to(this.target, 0, i)),
            l)
          ) {
            if (0 === this._time) return;
          } else
            this._startAt._init(),
              this._startAt._enabled(!1),
              this.vars.immediateRender && (this._startAt = null);
        }
      if (
        ((this._ease = c =
          c
            ? c instanceof S
              ? c
              : "function" == typeof c
              ? new S(c, o.easeParams)
              : k[c] || z.defaultEase
            : z.defaultEase),
        o.easeParams instanceof Array &&
          c.config &&
          (this._ease = c.config.apply(c, o.easeParams)),
        (this._easeType = this._ease._type),
        (this._easePower = this._ease._power),
        (this._firstPT = null),
        this._targets)
      )
        for (n = this._targets.length, t = 0; t < n; t++)
          this._initProps(
            this._targets[t],
            (this._propLookup[t] = {}),
            this._siblings[t],
            a ? a[t] : null,
            t
          ) && (e = !0);
      else
        e = this._initProps(
          this.target,
          this._propLookup,
          this._siblings,
          a,
          0
        );
      if (
        (e && z._onPluginEvent("_onInitAllProps", this),
        a &&
          (this._firstPT ||
            ("function" != typeof this.target && this._enabled(!1, !1))),
        o.runBackwards)
      )
        for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
      (this._onUpdate = o.onUpdate), (this._initted = !0);
    }),
      (r._initProps = function (t, e, i, s, r) {
        var n, o, a, h, l, c;
        if (null == t) return !1;
        for (n in (N[t._gsTweenID] && Q(),
        this.vars.css ||
          (t.style &&
            t !== u &&
            t.nodeType &&
            j.css &&
            !1 !== this.vars.autoCSS &&
            (function (t, e) {
              var i,
                s = {};
              for (i in t)
                V[i] ||
                  (i in e &&
                    "transform" !== i &&
                    "x" !== i &&
                    "y" !== i &&
                    "width" !== i &&
                    "height" !== i &&
                    "className" !== i &&
                    "border" !== i) ||
                  !(!j[i] || (j[i] && j[i]._autoCSS)) ||
                  ((s[i] = t[i]), delete t[i]);
              t.css = s;
            })(this.vars, t)),
        this.vars))
          if (((c = this.vars[n]), V[n]))
            c &&
              (c instanceof Array || (c.push && T(c))) &&
              -1 !== c.join("").indexOf("{self}") &&
              (this.vars[n] = c = this._swapSelfInParams(c, this));
          else if (
            j[n] &&
            (h = new j[n]())._onInitTween(t, this.vars[n], this, r)
          ) {
            for (
              this._firstPT = l =
                {
                  _next: this._firstPT,
                  t: h,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: n,
                  pg: 1,
                  pr: h._priority,
                  m: 0,
                },
                o = h._overwriteProps.length;
              -1 < --o;

            )
              e[h._overwriteProps[o]] = this._firstPT;
            (h._priority || h._onInitAllProps) && (a = !0),
              (h._onDisable || h._onEnable) &&
                (this._notifyPluginsOfEnabled = !0),
              l._next && (l._next._prev = l);
          } else
            e[n] = I.call(
              this,
              t,
              n,
              "get",
              c,
              n,
              0,
              null,
              this.vars.stringFilter,
              r
            );
        return s && this._kill(s, t)
          ? this._initProps(t, e, i, s, r)
          : 1 < this._overwrite &&
            this._firstPT &&
            1 < i.length &&
            et(t, this, e, this._overwrite, i)
          ? (this._kill(e, t), this._initProps(t, e, i, s, r))
          : (this._firstPT &&
              ((!1 !== this.vars.lazy && this._duration) ||
                (this.vars.lazy && !this._duration)) &&
              (N[t._gsTweenID] = !0),
            a);
      }),
      (r.render = function (t, e, i) {
        var s,
          r,
          n,
          o,
          a,
          h,
          l,
          c = this._time,
          p = this._duration,
          u = this._rawPrevTime;
        if (
          (p - 1e-7 <= t && 0 <= t
            ? ((this._totalTime = this._time = p),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((s = !0),
                (r = "onComplete"),
                (i = i || this._timeline.autoRemoveChildren)),
              0 !== p ||
                (!this._initted && this.vars.lazy && !i) ||
                (this._startTime === this._timeline._duration && (t = 0),
                (u < 0 ||
                  (t <= 0 && -1e-7 <= t) ||
                  (u === x && "isPause" !== this.data)) &&
                  u !== t &&
                  ((i = !0), x < u && (r = "onReverseComplete")),
                (this._rawPrevTime = o = !e || t || u === t ? t : x)))
            : t < 1e-7
            ? ((this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== c || (0 === p && 0 < u)) &&
                ((r = "onReverseComplete"), (s = this._reversed)),
              t < 0 &&
                ((this._active = !1),
                0 !== p ||
                  (!this._initted && this.vars.lazy && !i) ||
                  (0 <= u && (u !== x || "isPause" !== this.data) && (i = !0),
                  (this._rawPrevTime = o = !e || t || u === t ? t : x))),
              (!this._initted || (this._startAt && this._startAt.progress())) &&
                (i = !0))
            : ((this._totalTime = this._time = t),
              this._easeType
                ? ((a = t / p),
                  (1 === (h = this._easeType) || (3 === h && 0.5 <= a)) &&
                    (a = 1 - a),
                  3 === h && (a *= 2),
                  1 === (l = this._easePower)
                    ? (a *= a)
                    : 2 === l
                    ? (a *= a * a)
                    : 3 === l
                    ? (a *= a * a * a)
                    : 4 === l && (a *= a * a * a * a),
                  (this.ratio =
                    1 === h
                      ? 1 - a
                      : 2 === h
                      ? a
                      : t / p < 0.5
                      ? a / 2
                      : 1 - a / 2))
                : (this.ratio = this._ease.getRatio(t / p))),
          this._time !== c || i)
        ) {
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !i &&
              this._firstPT &&
              ((!1 !== this.vars.lazy && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = this._totalTime = c),
                (this._rawPrevTime = u),
                B.push(this),
                void (this._lazy = [t, e])
              );
            this._time && !s
              ? (this.ratio = this._ease.getRatio(this._time / p))
              : s &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            !1 !== this._lazy && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== c &&
                  0 <= t &&
                  (this._active = !0)),
              0 === c &&
                (this._startAt &&
                  (0 <= t
                    ? this._startAt.render(t, !0, i)
                    : (r = r || "_dummyGS")),
                !this.vars.onStart ||
                  (0 === this._time && 0 !== p) ||
                  e ||
                  this._callback("onStart")),
              n = this._firstPT;
            n;

          )
            n.f
              ? n.t[n.p](n.c * this.ratio + n.s)
              : (n.t[n.p] = n.c * this.ratio + n.s),
              (n = n._next);
          this._onUpdate &&
            (t < 0 &&
              this._startAt &&
              -1e-4 !== t &&
              this._startAt.render(t, !0, i),
            e || ((this._time !== c || s || i) && this._callback("onUpdate"))),
            !r ||
              (this._gc && !i) ||
              (t < 0 &&
                this._startAt &&
                !this._onUpdate &&
                -1e-4 !== t &&
                this._startAt.render(t, !0, i),
              s &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !e && this.vars[r] && this._callback(r),
              0 === p &&
                this._rawPrevTime === x &&
                o !== x &&
                (this._rawPrevTime = 0));
        }
      }),
      (r._kill = function (t, e, i) {
        if (
          null == (t = "all" === t ? null : t) &&
          (null == e || e === this.target)
        )
          return (this._lazy = !1), this._enabled(!1, !1);
        e =
          "string" != typeof e
            ? e || this._targets || this.target
            : z.selector(e) || e;
        var s,
          r,
          n,
          o,
          a,
          h,
          l,
          c,
          p,
          u =
            i &&
            this._time &&
            i._startTime === this._startTime &&
            this._timeline === i._timeline,
          f = this._firstPT;
        if ((T(e) || Y(e)) && "number" != typeof e[0])
          for (s = e.length; -1 < --s; ) this._kill(t, e[s], i) && (h = !0);
        else {
          if (this._targets) {
            for (s = this._targets.length; -1 < --s; )
              if (e === this._targets[s]) {
                (a = this._propLookup[s] || {}),
                  (this._overwrittenProps = this._overwrittenProps || []),
                  (r = this._overwrittenProps[s] =
                    t ? this._overwrittenProps[s] || {} : "all");
                break;
              }
          } else {
            if (e !== this.target) return !1;
            (a = this._propLookup),
              (r = this._overwrittenProps =
                t ? this._overwrittenProps || {} : "all");
          }
          if (a) {
            if (
              ((l = t || a),
              (c =
                t !== r &&
                "all" !== r &&
                t !== a &&
                ("object" != typeof t || !t._tempKill)),
              i && (z.onOverwrite || this.vars.onOverwrite))
            ) {
              for (n in l) a[n] && ((p = p || []), p.push(n));
              if ((p || !t) && !J(this, i, e, p)) return !1;
            }
            for (n in l)
              (o = a[n]) &&
                (u && (o.f ? o.t[o.p](o.s) : (o.t[o.p] = o.s), (h = !0)),
                o.pg && o.t._kill(l) && (h = !0),
                (o.pg && 0 !== o.t._overwriteProps.length) ||
                  (o._prev
                    ? (o._prev._next = o._next)
                    : o === this._firstPT && (this._firstPT = o._next),
                  o._next && (o._next._prev = o._prev),
                  (o._next = o._prev = null)),
                delete a[n]),
                c && (r[n] = 1);
            !this._firstPT && this._initted && f && this._enabled(!1, !1);
          }
        }
        return h;
      }),
      (r.invalidate = function () {
        return (
          this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this),
          (this._firstPT =
            this._overwrittenProps =
            this._startAt =
            this._onUpdate =
              null),
          (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
          (this._propLookup = this._targets ? {} : []),
          c.prototype.invalidate.call(this),
          this.vars.immediateRender &&
            ((this._time = -x), this.render(Math.min(0, -this._delay))),
          this
        );
      }),
      (r._enabled = function (t, e) {
        if ((y || X.wake(), t && this._gc)) {
          var i,
            s = this._targets;
          if (s)
            for (i = s.length; -1 < --i; )
              this._siblings[i] = tt(s[i], this, !0);
          else this._siblings = tt(this.target, this, !0);
        }
        return (
          c.prototype._enabled.call(this, t, e),
          !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
            z._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        );
      }),
      (z.to = function (t, e, i) {
        return new z(t, e, i);
      }),
      (z.from = function (t, e, i) {
        return (
          (i.runBackwards = !0),
          (i.immediateRender = 0 != i.immediateRender),
          new z(t, e, i)
        );
      }),
      (z.fromTo = function (t, e, i, s) {
        return (
          (s.startAt = i),
          (s.immediateRender =
            0 != s.immediateRender && 0 != i.immediateRender),
          new z(t, e, s)
        );
      }),
      (z.delayedCall = function (t, e, i, s, r) {
        return new z(e, 0, {
          delay: t,
          onComplete: e,
          onCompleteParams: i,
          callbackScope: s,
          onReverseComplete: e,
          onReverseCompleteParams: i,
          immediateRender: !1,
          lazy: !1,
          useFrames: r,
          overwrite: 0,
        });
      }),
      (z.set = function (t, e) {
        return new z(t, 0, e);
      }),
      (z.getTweensOf = function (t, e) {
        if (null == t) return [];
        var i, s, r, n;
        if (
          ((t = ("string" == typeof t && z.selector(t)) || t),
          (T(t) || Y(t)) && "number" != typeof t[0])
        ) {
          for (i = t.length, s = []; -1 < --i; )
            s = s.concat(z.getTweensOf(t[i], e));
          for (i = s.length; -1 < --i; )
            for (n = s[i], r = i; -1 < --r; ) n === s[r] && s.splice(i, 1);
        } else if (t._gsTweenID)
          for (i = (s = tt(t).concat()).length; -1 < --i; )
            (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
        return s || [];
      }),
      (z.killTweensOf = z.killDelayedCallsTo =
        function (t, e, i) {
          "object" == typeof e && ((i = e), (e = !1));
          for (var s = z.getTweensOf(t, e), r = s.length; -1 < --r; )
            s[r]._kill(i, t);
        });
    var st = P(
      "plugins.TweenPlugin",
      function (t, e) {
        (this._overwriteProps = (t || "").split(",")),
          (this._propName = this._overwriteProps[0]),
          (this._priority = e || 0),
          (this._super = st.prototype);
      },
      !0
    );
    if (
      ((r = st.prototype),
      (st.version = "1.19.0"),
      (st.API = 2),
      (r._firstPT = null),
      (r._addTween = I),
      (r.setRatio = F),
      (r._kill = function (t) {
        var e,
          i = this._overwriteProps,
          s = this._firstPT;
        if (null != t[this._propName]) this._overwriteProps = [];
        else for (e = i.length; -1 < --e; ) null != t[i[e]] && i.splice(e, 1);
        for (; s; )
          null != t[s.n] &&
            (s._next && (s._next._prev = s._prev),
            s._prev
              ? ((s._prev._next = s._next), (s._prev = null))
              : this._firstPT === s && (this._firstPT = s._next)),
            (s = s._next);
        return !1;
      }),
      (r._mod = r._roundProps =
        function (t) {
          for (var e, i = this._firstPT; i; )
            (e =
              t[this._propName] ||
              (null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
              "function" == typeof e &&
              (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
              (i = i._next);
        }),
      (z._onPluginEvent = function (t, e) {
        var i,
          s,
          r,
          n,
          o,
          a = e._firstPT;
        if ("_onInitAllProps" === t) {
          for (; a; ) {
            for (o = a._next, s = r; s && s.pr > a.pr; ) s = s._next;
            (a._prev = s ? s._prev : n) ? (a._prev._next = a) : (r = a),
              (a._next = s) ? (s._prev = a) : (n = a),
              (a = o);
          }
          a = e._firstPT = r;
        }
        for (; a; )
          a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
            (a = a._next);
        return i;
      }),
      (st.activate = function (t) {
        for (var e = t.length; -1 < --e; )
          t[e].API === st.API && (j[new t[e]()._propName] = t[e]);
        return !0;
      }),
      (s.plugin = function (t) {
        if (!(t && t.propName && t.init && t.API))
          throw "illegal plugin definition.";
        var e,
          i = t.propName,
          s = t.priority || 0,
          r = t.overwriteProps,
          n = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps",
          },
          o = P(
            "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function () {
              st.call(this, i, s), (this._overwriteProps = r || []);
            },
            !0 === t.global
          ),
          a = (o.prototype = new st(i));
        for (e in (((a.constructor = o).API = t.API), n))
          "function" == typeof t[e] && (a[n[e]] = t[e]);
        return (o.version = t.version), st.activate([o]), o;
      }),
      (h = u._gsQueue))
    ) {
      for (l = 0; l < h.length; l++) h[l]();
      for (r in b)
        b[r].func || u.console.log("GSAP encountered missing dependency: " + r);
    }
    y = !1;
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  ),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e)
      : "object" == typeof exports
      ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax))
      : e(
          t.ScrollMagic || (t.jQuery && t.jQuery.ScrollMagic),
          t.TweenMax || t.TweenLite,
          t.TimelineMax || t.TimelineLite
        );
  })(this, function (t, a, h) {
    "use strict";
    t.Scene.addOption("tweenChanges", !1, function (t) {
      return !!t;
    }),
      t.Scene.extend(function () {
        var r,
          n = this;
        n.on("progress.plugin_gsap", function () {
          o();
        }),
          n.on("destroy.plugin_gsap", function (t) {
            n.removeTween(t.reset);
          });
        var o = function () {
          var t, e;
          r &&
            ((t = n.progress()),
            (e = n.state()),
            r.repeat && -1 === r.repeat()
              ? "DURING" === e && r.paused()
                ? r.play()
                : "DURING" === e || r.paused() || r.pause()
              : t != r.progress() &&
                (0 === n.duration()
                  ? 0 < t
                    ? r.play()
                    : r.reverse()
                  : n.tweenChanges() && r.tweenTo
                  ? r.tweenTo(t * r.duration())
                  : r.progress(t).pause()));
        };
        (n.setTween = function (t, e, i) {
          var s;
          1 < arguments.length &&
            (arguments.length < 3 && ((i = e), (e = 1)), (t = a.to(t, e, i)));
          try {
            (s = h ? new h({ smoothChildTiming: !0 }).add(t) : t).pause();
          } catch (t) {
            return n;
          }
          return (
            r && n.removeTween(),
            (r = s),
            t.repeat && -1 === t.repeat() && (r.repeat(-1), r.yoyo(t.yoyo())),
            o(),
            n
          );
        }),
          (n.removeTween = function (t) {
            return r && (t && r.progress(0).pause(), r.kill(), (r = void 0)), n;
          });
      });
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["ScrollMagic"], e)
      : "object" == typeof exports
      ? e(require("scrollmagic"))
      : e(t.ScrollMagic || (t.jQuery && t.jQuery.ScrollMagic));
  })(this, function (s) {
    "use strict";
    var m = s._util,
      g = 0;
    s.Scene.extend(function () {
      var e,
        i = this;
      (i.addIndicators = function (t) {
        return (
          e ||
            ((t = m.extend(
              {},
              {
                name: "",
                indent: 0,
                parent: void 0,
                colorStart: "green",
                colorEnd: "red",
                colorTrigger: "blue",
              },
              t
            )),
            g++,
            (e = new r(i, t)),
            i.on("add.plugin_addIndicators", e.add),
            i.on("remove.plugin_addIndicators", e.remove),
            i.on("destroy.plugin_addIndicators", i.removeIndicators),
            i.controller() && e.add()),
          i
        );
      }),
        (i.removeIndicators = function () {
          return (
            e && (e.remove(), this.off("*.plugin_addIndicators"), (e = void 0)),
            i
          );
        });
    }),
      s.Controller.addOption("addIndicators", !1),
      s.Controller.extend(function () {
        var p = this,
          t = p.info(),
          u = t.container,
          f = t.isDocument,
          d = t.vertical,
          _ = { groups: [] };
        this._indicators = _;
        function e() {
          _.updateBoundsPositions();
        }
        function i() {
          _.updateTriggerGroupPositions();
        }
        return (
          u.addEventListener("resize", i),
          f ||
            (window.addEventListener("resize", i),
            window.addEventListener("scroll", i)),
          u.addEventListener("resize", e),
          u.addEventListener("scroll", e),
          (this._indicators.updateBoundsPositions = function (t) {
            for (
              var e,
                i,
                s,
                r = t
                  ? [m.extend({}, t.triggerGroup, { members: [t] })]
                  : _.groups,
                n = r.length,
                o = {},
                a = d ? "left" : "top",
                h = d ? "width" : "height",
                l = d
                  ? m.get.scrollLeft(u) + m.get.width(u) - 15
                  : m.get.scrollTop(u) + m.get.height(u) - 15;
              n--;

            )
              for (
                e = (s = r[n]).members.length,
                  i = m.get[h](s.element.firstChild);
                e--;

              )
                (o[a] = l - i), m.css(s.members[e].bounds, o);
          }),
          (this._indicators.updateTriggerGroupPositions = function (t) {
            for (
              var e,
                i,
                s,
                r,
                n = t ? [t] : _.groups,
                o = n.length,
                t = f ? document.body : u,
                a = f ? { top: 0, left: 0 } : m.get.offset(t, !0),
                h = d ? m.get.width(u) - 15 : m.get.height(u) - 15,
                l = d ? "width" : "height",
                c = d ? "Y" : "X";
              o--;

            )
              (i = (e = n[o]).element),
                (s = e.triggerHook * p.info("size")),
                (r =
                  m.get[l](i.firstChild.firstChild) < s
                    ? "translate" + c + "(-100%)"
                    : ""),
                m.css(i, {
                  top: a.top + (d ? s : h - e.members[0].options.indent),
                  left: a.left + (d ? h - e.members[0].options.indent : s),
                }),
                m.css(i.firstChild.firstChild, {
                  "-ms-transform": r,
                  "-webkit-transform": r,
                  transform: r,
                });
          }),
          (this._indicators.updateTriggerGroupLabel = function (t) {
            var e =
                "trigger" +
                (1 < t.members.length ? "" : " " + t.members[0].options.name),
              t = t.element.firstChild.firstChild;
            t.textContent !== e &&
              ((t.textContent = e), d && _.updateBoundsPositions());
          }),
          (this.addScene = function (t) {
            this._options.addIndicators &&
              t instanceof s.Scene &&
              t.controller() === p &&
              t.addIndicators(),
              this.$super.addScene.apply(this, arguments);
          }),
          (this.destroy = function () {
            u.removeEventListener("resize", i),
              f ||
                (window.removeEventListener("resize", i),
                window.removeEventListener("scroll", i)),
              u.removeEventListener("resize", e),
              u.removeEventListener("scroll", e),
              this.$super.destroy.apply(this, arguments);
          }),
          p
        );
      });
    var r = function (r, n) {
        var o,
          a,
          h = this,
          e = v.bounds(),
          i = v.start(n.colorStart),
          s = v.end(n.colorEnd),
          l = n.parent && m.get.elements(n.parent)[0];
        (n.name = n.name || g),
          (i.firstChild.textContent += " " + n.name),
          (s.textContent += " " + n.name),
          e.appendChild(i),
          e.appendChild(s),
          (h.options = n),
          (h.bounds = e),
          (h.triggerGroup = void 0),
          (this.add = function () {
            (a = r.controller()), (o = a.info("vertical"));
            var t = a.info("isDocument");
            (l = l || (t ? document.body : a.info("container"))),
              t ||
                "static" !== m.css(l, "position") ||
                m.css(l, { position: "relative" }),
              r.on("change.plugin_addIndicators", p),
              r.on("shift.plugin_addIndicators", c),
              _(),
              f(),
              setTimeout(function () {
                a._indicators.updateBoundsPositions(h);
              }, 0);
          }),
          (this.remove = function () {
            var t;
            h.triggerGroup &&
              (r.off("change.plugin_addIndicators", p),
              r.off("shift.plugin_addIndicators", c),
              1 < h.triggerGroup.members.length
                ? ((t = h.triggerGroup).members.splice(t.members.indexOf(h), 1),
                  a._indicators.updateTriggerGroupLabel(t),
                  a._indicators.updateTriggerGroupPositions(t),
                  (h.triggerGroup = void 0))
                : d(),
              u());
          });
        var c = function () {
            f();
          },
          p = function (t) {
            "triggerHook" === t.what && _();
          },
          u = function () {
            e.parentNode.removeChild(e);
          },
          f = function () {
            e.parentNode !== l &&
              ((t = a.info("vertical")),
              m.css(i.firstChild, {
                "border-bottom-width": t ? 1 : 0,
                "border-right-width": t ? 0 : 1,
                bottom: t ? -1 : n.indent,
                right: t ? n.indent : -1,
                padding: t ? "0 8px" : "2px 4px",
              }),
              m.css(s, {
                "border-top-width": t ? 1 : 0,
                "border-left-width": t ? 0 : 1,
                top: t ? "100%" : "",
                right: t ? n.indent : "",
                bottom: t ? "" : n.indent,
                left: t ? "" : "100%",
                padding: t ? "0 8px" : "2px 4px",
              }),
              l.appendChild(e));
            var t = {};
            (t[o ? "top" : "left"] = r.triggerPosition()),
              (t[o ? "height" : "width"] = r.duration()),
              m.css(e, t),
              m.css(s, { display: 0 < r.duration() ? "" : "none" });
          },
          d = function () {
            a._indicators.groups.splice(
              a._indicators.groups.indexOf(h.triggerGroup),
              1
            ),
              h.triggerGroup.element.parentNode.removeChild(
                h.triggerGroup.element
              ),
              (h.triggerGroup = void 0);
          },
          _ = function () {
            var t = r.triggerHook();
            if (
              !(
                h.triggerGroup &&
                Math.abs(h.triggerGroup.triggerHook - t) < 1e-4
              )
            ) {
              for (var e, i = a._indicators.groups, s = i.length; s--; )
                if (((e = i[s]), Math.abs(e.triggerHook - t) < 1e-4))
                  return (
                    h.triggerGroup &&
                      (1 === h.triggerGroup.members.length
                        ? d()
                        : (h.triggerGroup.members.splice(
                            h.triggerGroup.members.indexOf(h),
                            1
                          ),
                          a._indicators.updateTriggerGroupLabel(h.triggerGroup),
                          a._indicators.updateTriggerGroupPositions(
                            h.triggerGroup
                          ))),
                    e.members.push(h),
                    (h.triggerGroup = e),
                    void a._indicators.updateTriggerGroupLabel(e)
                  );
              if (h.triggerGroup) {
                if (1 === h.triggerGroup.members.length)
                  return (
                    (h.triggerGroup.triggerHook = t),
                    void a._indicators.updateTriggerGroupPositions(
                      h.triggerGroup
                    )
                  );
                h.triggerGroup.members.splice(
                  h.triggerGroup.members.indexOf(h),
                  1
                ),
                  a._indicators.updateTriggerGroupLabel(h.triggerGroup),
                  a._indicators.updateTriggerGroupPositions(h.triggerGroup),
                  (h.triggerGroup = void 0);
              }
              !(function () {
                var t = v.trigger(n.colorTrigger),
                  e = {};
                (e[o ? "right" : "bottom"] = 0),
                  (e[o ? "border-top-width" : "border-left-width"] = 1),
                  m.css(t.firstChild, e),
                  m.css(t.firstChild.firstChild, {
                    padding: o ? "0 8px 3px 8px" : "3px 4px",
                  }),
                  document.body.appendChild(t);
                t = { triggerHook: r.triggerHook(), element: t, members: [h] };
                a._indicators.groups.push(t),
                  (h.triggerGroup = t),
                  a._indicators.updateTriggerGroupLabel(t),
                  a._indicators.updateTriggerGroupPositions(t);
              })();
            }
          };
      },
      v = {
        start: function (t) {
          var e = document.createElement("div");
          (e.textContent = "start"),
            m.css(e, {
              position: "absolute",
              overflow: "visible",
              "border-width": 0,
              "border-style": "solid",
              color: t,
              "border-color": t,
            });
          t = document.createElement("div");
          return (
            m.css(t, {
              position: "absolute",
              overflow: "visible",
              width: 0,
              height: 0,
            }),
            t.appendChild(e),
            t
          );
        },
        end: function (t) {
          var e = document.createElement("div");
          return (
            (e.textContent = "end"),
            m.css(e, {
              position: "absolute",
              overflow: "visible",
              "border-width": 0,
              "border-style": "solid",
              color: t,
              "border-color": t,
            }),
            e
          );
        },
        bounds: function () {
          var t = document.createElement("div");
          return (
            m.css(t, {
              position: "absolute",
              overflow: "visible",
              "white-space": "nowrap",
              "pointer-events": "none",
              "font-size": "0.85em",
            }),
            (t.style.zIndex = "9999"),
            t
          );
        },
        trigger: function (t) {
          var e = document.createElement("div");
          (e.textContent = "trigger"), m.css(e, { position: "relative" });
          var i = document.createElement("div");
          m.css(i, {
            position: "absolute",
            overflow: "visible",
            "border-width": 0,
            "border-style": "solid",
            color: t,
            "border-color": t,
          }),
            i.appendChild(e);
          e = document.createElement("div");
          return (
            m.css(e, {
              position: "fixed",
              overflow: "visible",
              "white-space": "nowrap",
              "pointer-events": "none",
              "font-size": "0.85em",
            }),
            (e.style.zIndex = "9999"),
            e.appendChild(i),
            e
          );
        },
      };
  }),
  (
    (_gsScope =
      "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
        ? global
        : this || window)._gsQueue || (_gsScope._gsQueue = [])
  ).push(function () {
    "use strict";
    function n(t, e) {
      var i = "x" === e ? "Width" : "Height",
        s = "scroll" + i,
        r = "client" + i,
        e = document.body;
      return t === h || t === a || t === e
        ? Math.max(a[s], e[s]) - (h["inner" + i] || a[r] || e[r])
        : t[s] - t["offset" + i];
    }
    function r(t, e) {
      var i = "scroll" + ("x" === e ? "Left" : "Top");
      return (
        t === h &&
          (null != t.pageXOffset
            ? (i = "page" + e.toUpperCase() + "Offset")
            : (t = null != a[i] ? a : document.body)),
        function () {
          return t[i];
        }
      );
    }
    function o(t, e) {
      var i = (
          (s =
            (s = "string" == typeof (s = t) ? TweenLite.selector(s) : s)
              .length &&
            s !== h &&
            s[0] &&
            s[0].style &&
            !s.nodeType
              ? s[0]
              : s) === h ||
          (s.nodeType && s.style)
            ? s
            : null
        ).getBoundingClientRect(),
        t = document.body,
        s = !e || e === h || e === t,
        t = s
          ? {
              top:
                a.clientTop -
                (window.pageYOffset || a.scrollTop || t.scrollTop || 0),
              left:
                a.clientLeft -
                (window.pageXOffset || a.scrollLeft || t.scrollLeft || 0),
            }
          : e.getBoundingClientRect(),
        t = { x: i.left - t.left, y: i.top - t.top };
      return !s && e && ((t.x += r(e, "x")()), (t.y += r(e, "y")())), t;
    }
    function s(t, e, i) {
      var s = typeof t;
      return isNaN(t)
        ? "number" == s || ("string" == s && "=" === t.charAt(1))
          ? t
          : "max" === t
          ? n(e, i)
          : Math.min(n(e, i), o(t, e)[i])
        : parseFloat(t);
    }
    var a = (_gsScope.document || {}).documentElement,
      h = _gsScope,
      l = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        global: !0,
        version: "1.9.1",
        init: function (t, e, i) {
          return (
            (this._wdw = t === h),
            (this._target = t),
            (this._tween = i),
            "object" != typeof e
              ? "string" == typeof (e = { y: e }).y &&
                "max" !== e.y &&
                "=" !== e.y.charAt(1) &&
                (e.x = e.y)
              : e.nodeType && (e = { y: e, x: e }),
            (this.vars = e),
            (this._autoKill = !1 !== e.autoKill),
            (this.getX = r(t, "x")),
            (this.getY = r(t, "y")),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            null != e.x
              ? (this._addTween(
                  this,
                  "x",
                  this.x,
                  s(e.x, t, "x") - (e.offsetX || 0),
                  "scrollTo_x",
                  !0
                ),
                this._overwriteProps.push("scrollTo_x"))
              : (this.skipX = !0),
            null != e.y
              ? (this._addTween(
                  this,
                  "y",
                  this.y,
                  s(e.y, t, "y") - (e.offsetY || 0),
                  "scrollTo_y",
                  !0
                ),
                this._overwriteProps.push("scrollTo_y"))
              : (this.skipY = !0),
            !0
          );
        },
        set: function (t) {
          this._super.setRatio.call(this, t);
          var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
            i = this._wdw || !this.skipY ? this.getY() : this.yPrev,
            s = i - this.yPrev,
            r = e - this.xPrev,
            t = l.autoKillThreshold;
          this.x < 0 && (this.x = 0),
            this.y < 0 && (this.y = 0),
            this._autoKill &&
              (!this.skipX &&
                (t < r || r < -t) &&
                e < n(this._target, "x") &&
                (this.skipX = !0),
              !this.skipY &&
                (t < s || s < -t) &&
                i < n(this._target, "y") &&
                (this.skipY = !0),
              this.skipX &&
                this.skipY &&
                (this._tween.kill(),
                this.vars.onAutoKill &&
                  this.vars.onAutoKill.apply(
                    this.vars.onAutoKillScope || this._tween,
                    this.vars.onAutoKillParams || []
                  ))),
            this._wdw
              ? h.scrollTo(this.skipX ? e : this.x, this.skipY ? i : this.y)
              : (this.skipY || (this._target.scrollTop = this.y),
                this.skipX || (this._target.scrollLeft = this.x)),
            (this.xPrev = this.x),
            (this.yPrev = this.y);
        },
      }),
      t = l.prototype;
    (l.max = n),
      (l.getOffset = o),
      (l.buildGetter = r),
      (l.autoKillThreshold = 7),
      (t._kill = function (t) {
        return (
          t.scrollTo_x && (this.skipX = !0),
          t.scrollTo_y && (this.skipY = !0),
          this._super._kill.call(this, t)
        );
      });
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function () {
    "use strict";
    function t() {
      return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin;
    }
    "undefined" != typeof module && module.exports
      ? (require("../TweenLite.min.js"), (module.exports = t()))
      : "function" == typeof define && define.amd && define(["TweenLite"], t);
  })(),
  (function (o, c, u) {
    function a(t, e) {
      return typeof t === e;
    }
    function n(t) {
      var e,
        i = T.className,
        s = y._config.classPrefix || "";
      b && (i = i.baseVal),
        y._config.enableJSClass &&
          ((e = new RegExp("(^|\\s)" + s + "no-js(\\s|$)")),
          (i = i.replace(e, "$1" + s + "js$2"))),
        y._config.enableClasses &&
          ((i += " " + s + t.join(" " + s)),
          b ? (T.className.baseVal = i) : (T.className = i));
    }
    function h(t, e) {
      if ("object" == typeof t) for (var i in t) w(t, i) && h(i, t[i]);
      else {
        var s = (t = t.toLowerCase()).split("."),
          r = y[s[0]];
        if (void 0 !== (r = 2 == s.length ? r[s[1]] : r)) return y;
        (e = "function" == typeof e ? e() : e),
          1 == s.length
            ? (y[s[0]] = e)
            : (!y[s[0]] ||
                y[s[0]] instanceof Boolean ||
                (y[s[0]] = new Boolean(y[s[0]])),
              (y[s[0]][s[1]] = e)),
          n([(e && 0 != e ? "" : "no-") + s.join("-")]),
          y._trigger(t, e);
      }
      return y;
    }
    function f(t) {
      return "function" != typeof c.createElement
        ? c.createElement(t)
        : b
        ? c.createElementNS.call(c, "http://www.w3.org/2000/svg", t)
        : c.createElement.apply(c, arguments);
    }
    function d(t) {
      return t
        .replace(/([a-z])-([a-z])/g, function (t, e, i) {
          return e + i.toUpperCase();
        })
        .replace(/^-/, "");
    }
    function r(t, e, i, s) {
      var r,
        n,
        o,
        a = "modernizr",
        h = f("div"),
        l = ((o = c.body) || ((o = f(b ? "svg" : "body")).fake = !0), o);
      if (parseInt(i, 10))
        for (; i--; )
          ((r = f("div")).id = s ? s[i] : a + (i + 1)), h.appendChild(r);
      return (
        ((o = f("style")).type = "text/css"),
        (o.id = "s" + a),
        (l.fake ? l : h).appendChild(o),
        l.appendChild(h),
        o.styleSheet
          ? (o.styleSheet.cssText = t)
          : o.appendChild(c.createTextNode(t)),
        (h.id = a),
        l.fake &&
          ((l.style.background = ""),
          (l.style.overflow = "hidden"),
          (n = T.style.overflow),
          (T.style.overflow = "hidden"),
          T.appendChild(l)),
        (t = e(h, t)),
        l.fake
          ? (l.parentNode.removeChild(l),
            (T.style.overflow = n),
            T.offsetHeight)
          : h.parentNode.removeChild(h),
        !!t
      );
    }
    function l(t, e, i) {
      var s, r;
      for (r in t)
        if (t[r] in e)
          return !1 === i
            ? t[r]
            : ((s = e[t[r]]),
              a(s, "function")
                ? (function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  })(s, i || e)
                : s);
      return !1;
    }
    function p(t) {
      return t
        .replace(/([A-Z])/g, function (t, e) {
          return "-" + e.toLowerCase();
        })
        .replace(/^ms-/, "-ms-");
    }
    function _(t, e) {
      var i = t.length;
      if ("CSS" in o && "supports" in o.CSS) {
        for (; i--; ) if (o.CSS.supports(p(t[i]), e)) return !0;
        return !1;
      }
      if ("CSSSupportsRule" in o) {
        for (var s = []; i--; ) s.push("(" + p(t[i]) + ":" + e + ")");
        return r(
          "@supports (" +
            (s = s.join(" or ")) +
            ") { #modernizr { position: absolute; } }",
          function (t) {
            return (
              "absolute" ==
              ((e = t),
              (i = null),
              (s = "position"),
              "getComputedStyle" in o
                ? ((r = getComputedStyle.call(o, e, i)),
                  (t = o.console),
                  null !== r
                    ? s && (r = r.getPropertyValue(s))
                    : t &&
                      t[t.error ? "error" : "log"].call(
                        t,
                        "getComputedStyle returning null, its possible modernizr test results are inaccurate"
                      ))
                : (r = !i && e.currentStyle && e.currentStyle[s]),
              r)
            );
            var e, i, s, r;
          }
        );
      }
      return u;
    }
    function m(t, e, i, s) {
      function r() {
        o && (delete R.style, delete R.modElem);
      }
      if (((s = void 0 !== s && s), void 0 !== i)) {
        var n = _(t, i);
        if (void 0 !== n) return n;
      }
      for (
        var o, a, h, l, c, p = ["modernizr", "tspan", "samp"];
        !R.style && p.length;

      )
        (o = !0), (R.modElem = f(p.shift())), (R.style = R.modElem.style);
      for (h = t.length, a = 0; a < h; a++)
        if (
          ((l = t[a]),
          (c = R.style[l]),
          ~("" + l).indexOf("-") && (l = d(l)),
          R.style[l] !== u)
        ) {
          if (s || void 0 === i) return r(), "pfx" != e || l;
          try {
            R.style[l] = i;
          } catch (t) {}
          if (R.style[l] != c) return r(), "pfx" != e || l;
        }
      return r(), !1;
    }
    function s(t, e, i, s, r) {
      var n = t.charAt(0).toUpperCase() + t.slice(1),
        o = (t + " " + C.join(n + " ") + n).split(" ");
      return a(e, "string") || void 0 === e
        ? m(o, e, s, r)
        : l((o = (t + " " + P.join(n + " ") + n).split(" ")), e, i);
    }
    var g = [],
      v = [],
      t = {
        _version: "3.6.0",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0,
        },
        _q: [],
        on: function (t, e) {
          var i = this;
          setTimeout(function () {
            e(i[t]);
          }, 0);
        },
        addTest: function (t, e, i) {
          v.push({ name: t, fn: e, options: i });
        },
        addAsyncTest: function (t) {
          v.push({ name: null, fn: t });
        },
      };
    (y = function () {}).prototype = t;
    var y = new y(),
      x = t._config.usePrefixes
        ? " -webkit- -moz- -o- -ms- ".split(" ")
        : ["", ""];
    t._prefixes = x;
    var T = c.documentElement,
      b = "svg" === T.nodeName.toLowerCase();
    b ||
      (function (t, a) {
        function h() {
          var t = d.elements;
          return "string" == typeof t ? t.split(" ") : t;
        }
        function l(t) {
          var e = f[t[i]];
          return e || ((e = {}), o++, (t[i] = o), (f[o] = e)), e;
        }
        function c(t, e, i) {
          return (
            (e = e || a),
            u
              ? e.createElement(t)
              : !(e = (i = i || l(e)).cache[t]
                  ? i.cache[t].cloneNode()
                  : n.test(t)
                  ? (i.cache[t] = i.createElem(t)).cloneNode()
                  : i.createElem(t)).canHaveChildren ||
                r.test(t) ||
                e.tagUrn
              ? e
              : i.frag.appendChild(e)
          );
        }
        function s(t) {
          var e,
            i,
            s,
            r,
            n,
            o = l((t = t || a));
          return (
            !d.shivCSS ||
              p ||
              o.hasCSS ||
              (o.hasCSS =
                ((r =
                  "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"),
                (n = (s = t).createElement("p")),
                (s = s.getElementsByTagName("head")[0] || s.documentElement),
                (n.innerHTML = "x<style>" + r + "</style>"),
                !!s.insertBefore(n.lastChild, s.firstChild))),
            u ||
              ((e = t),
              (i = o).cache ||
                ((i.cache = {}),
                (i.createElem = e.createElement),
                (i.createFrag = e.createDocumentFragment),
                (i.frag = i.createFrag())),
              (e.createElement = function (t) {
                return d.shivMethods ? c(t, e, i) : i.createElem(t);
              }),
              (e.createDocumentFragment = Function(
                "h,f",
                "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                  h()
                    .join()
                    .replace(/[\w\-:]+/g, function (t) {
                      return (
                        i.createElem(t),
                        i.frag.createElement(t),
                        'c("' + t + '")'
                      );
                    }) +
                  ");return n}"
              )(d, i.frag))),
            t
          );
        }
        var p,
          u,
          e = t.html5 || {},
          r =
            /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          n =
            /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          i = "_html5shiv",
          o = 0,
          f = {};
        !(function () {
          try {
            var t = a.createElement("a");
            (t.innerHTML = "<xyz></xyz>"),
              (p = "hidden" in t),
              (u =
                1 == t.childNodes.length ||
                (function () {
                  a.createElement("a");
                  var t = a.createDocumentFragment();
                  return (
                    void 0 === t.cloneNode ||
                    void 0 === t.createDocumentFragment ||
                    void 0 === t.createElement
                  );
                })());
          } catch (t) {
            u = p = !0;
          }
        })();
        var d = {
          elements:
            e.elements ||
            "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
          version: "3.7.3",
          shivCSS: !1 !== e.shivCSS,
          supportsUnknownElements: u,
          shivMethods: !1 !== e.shivMethods,
          type: "default",
          shivDocument: s,
          createElement: c,
          createDocumentFragment: function (t, e) {
            if (((t = t || a), u)) return t.createDocumentFragment();
            for (
              var i = (e = e || l(t)).frag.cloneNode(),
                s = 0,
                r = h(),
                n = r.length;
              s < n;
              s++
            )
              i.createElement(r[s]);
            return i;
          },
          addElements: function (t, e) {
            var i = d.elements;
            "string" != typeof i && (i = i.join(" ")),
              "string" != typeof t && (t = t.join(" ")),
              (d.elements = i + " " + t),
              s(e);
          },
        };
        (t.html5 = d),
          s(a),
          "object" == typeof module && module.exports && (module.exports = d);
      })(void 0 !== o ? o : this, c);
    var w,
      i,
      e = "Moz O ms Webkit",
      P = t._config.usePrefixes ? e.toLowerCase().split(" ") : [];
    (t._domPrefixes = P),
      (w =
        void 0 === (i = {}.hasOwnProperty) || void 0 === i.call
          ? function (t, e) {
              return e in t && void 0 === t.constructor.prototype[e];
            }
          : function (t, e) {
              return i.call(t, e);
            }),
      (t._l = {}),
      (t.on = function (t, e) {
        this._l[t] || (this._l[t] = []),
          this._l[t].push(e),
          y.hasOwnProperty(t) &&
            setTimeout(function () {
              y._trigger(t, y[t]);
            }, 0);
      }),
      (t._trigger = function (t, e) {
        var i;
        this._l[t] &&
          ((i = this._l[t]),
          setTimeout(function () {
            for (var t = 0; t < i.length; t++) (0, i[t])(e);
          }, 0),
          delete this._l[t]);
      }),
      y._q.push(function () {
        t.addTest = h;
      });
    var S,
      k =
        ((S = !("onblur" in c.documentElement)),
        function (t, e) {
          var i;
          return (
            !!t &&
            (!(i =
              (t = "on" + t) in
              (e = !e || "string" == typeof e ? f(e || "div") : e)) &&
              S &&
              ((e = !e.setAttribute ? f("div") : e).setAttribute(t, ""),
              (i = "function" == typeof e[t]),
              e[t] !== u && (e[t] = u),
              e.removeAttribute(t)),
            i)
          );
        });
    t.hasEvent = k;
    var C = t._config.usePrefixes ? e.split(" ") : [];
    t._cssomPrefixes = C;
    function O(t) {
      var e,
        i = x.length,
        s = o.CSSRule;
      if (void 0 === s) return u;
      if (!t) return !1;
      if (
        (e =
          (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() +
          "_RULE") in s
      )
        return "@" + t;
      for (var r = 0; r < i; r++) {
        var n = x[r];
        if (n.toUpperCase() + "_" + e in s)
          return "@-" + n.toLowerCase() + "-" + t;
      }
      return !1;
    }
    t.atRule = O;
    var E = ((t.testStyles = r), { elem: f("modernizr") });
    y._q.push(function () {
      delete E.elem;
    });
    var R = { style: E.elem.style };
    y._q.unshift(function () {
      delete R.style;
    }),
      (t.testProp = function (t, e, i) {
        return m([t], u, e, i);
      }),
      (t.testAllProps = s),
      (t.prefixed = function (t, e, i) {
        return 0 === t.indexOf("@")
          ? O(t)
          : (-1 != t.indexOf("-") && (t = d(t)), e ? s(t, e, i) : s(t, "pfx"));
      }),
      (t.testAllProps = function (t, e, i) {
        return s(t, u, u, e, i);
      }),
      (function () {
        var t, e, i, s, r, n, o;
        for (o in v)
          if (v.hasOwnProperty(o)) {
            if (
              ((t = []),
              (e = v[o]).name &&
                (t.push(e.name.toLowerCase()),
                e.options && e.options.aliases && e.options.aliases.length))
            )
              for (i = 0; i < e.options.aliases.length; i++)
                t.push(e.options.aliases[i].toLowerCase());
            for (
              s = a(e.fn, "function") ? e.fn() : e.fn, r = 0;
              r < t.length;
              r++
            )
              1 === (n = t[r].split(".")).length
                ? (y[n[0]] = s)
                : (!y[n[0]] ||
                    y[n[0]] instanceof Boolean ||
                    (y[n[0]] = new Boolean(y[n[0]])),
                  (y[n[0]][n[1]] = s)),
                g.push((s ? "" : "no-") + n.join("-"));
          }
      })(),
      n(g),
      delete t.addTest,
      delete t.addAsyncTest;
    for (var A = 0; A < y._q.length; A++) y._q[A]();
    o.Modernizr = y;
  })(window, document),
  (function (n, o, u) {
    var p =
        n.requestAnimationFrame ||
        n.webkitRequestAnimationFrame ||
        n.mozRequestAnimationFrame ||
        n.oRequestAnimationFrame ||
        n.msRequestAnimationFrame ||
        function (t) {
          n.setTimeout(t, 1e3 / 60);
        },
      f = (function () {
        var s = {},
          r = o.createElement("div").style,
          e = (function () {
            for (
              var t = ["t", "webkitT", "MozT", "msT", "OT"],
                e = 0,
                i = t.length;
              e < i;
              e++
            )
              if (t[e] + "ransform" in r)
                return t[e].substr(0, t[e].length - 1);
            return !1;
          })();
        function t(t) {
          return (
            !1 !== e &&
            ("" === e ? t : e + t.charAt(0).toUpperCase() + t.substr(1))
          );
        }
        (s.getTime =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
          (s.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
          }),
          (s.addEvent = function (t, e, i, s) {
            t.addEventListener(e, i, !!s);
          }),
          (s.removeEvent = function (t, e, i, s) {
            t.removeEventListener(e, i, !!s);
          }),
          (s.prefixPointerEvent = function (t) {
            return n.MSPointerEvent
              ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8)
              : t;
          }),
          (s.momentum = function (t, e, i, s, r, n) {
            var o = t - e,
              e = u.abs(o) / i,
              i = e / (n = void 0 === n ? 6e-4 : n);
            return (
              (n = t + ((e * e) / (2 * n)) * (o < 0 ? -1 : 1)) < s
                ? (i =
                    (o = u.abs((n = r ? s - (r / 2.5) * (e / 8) : s) - t)) / e)
                : 0 < n &&
                  ((n = r ? (r / 2.5) * (e / 8) : 0),
                  (i = (o = u.abs(t) + n) / e)),
              { destination: u.round(n), duration: i }
            );
          });
        var i = t("transform");
        return (
          s.extend(s, {
            hasTransform: !1 !== i,
            hasPerspective: t("perspective") in r,
            hasTouch: "ontouchstart" in n,
            hasPointer: !(!n.PointerEvent && !n.MSPointerEvent),
            hasTransition: t("transition") in r,
          }),
          (s.isBadAndroid = (function () {
            var t = n.navigator.appVersion;
            if (!/Android/.test(t) || /Chrome\/\d/.test(t)) return !1;
            t = t.match(/Safari\/(\d+.\d)/);
            return (
              !(t && "object" == typeof t && 2 <= t.length) ||
              parseFloat(t[1]) < 535.19
            );
          })()),
          s.extend((s.style = {}), {
            transform: i,
            transitionTimingFunction: t("transitionTimingFunction"),
            transitionDuration: t("transitionDuration"),
            transitionDelay: t("transitionDelay"),
            transformOrigin: t("transformOrigin"),
            touchAction: t("touchAction"),
          }),
          (s.hasClass = function (t, e) {
            return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className);
          }),
          (s.addClass = function (t, e) {
            var i;
            s.hasClass(t, e) ||
              ((i = t.className.split(" ")).push(e),
              (t.className = i.join(" ")));
          }),
          (s.removeClass = function (t, e) {
            s.hasClass(t, e) &&
              ((e = new RegExp("(^|\\s)" + e + "(\\s|$)", "g")),
              (t.className = t.className.replace(e, " ")));
          }),
          (s.offset = function (t) {
            for (
              var e = -t.offsetLeft, i = -t.offsetTop;
              (t = t.offsetParent);

            )
              (e -= t.offsetLeft), (i -= t.offsetTop);
            return { left: e, top: i };
          }),
          (s.preventDefaultException = function (t, e) {
            for (var i in e) if (e[i].test(t[i])) return !0;
            return !1;
          }),
          s.extend((s.eventType = {}), {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3,
          }),
          s.extend((s.ease = {}), {
            quadratic: {
              style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fn: function (t) {
                return t * (2 - t);
              },
            },
            circular: {
              style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
              fn: function (t) {
                return u.sqrt(1 - --t * t);
              },
            },
            back: {
              style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              fn: function (t) {
                return (t -= 1) * t * (5 * t + 4) + 1;
              },
            },
            bounce: {
              style: "",
              fn: function (t) {
                return (t /= 1) < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              },
            },
            elastic: {
              style: "",
              fn: function (t) {
                return 0 === t
                  ? 0
                  : 1 == t
                  ? 1
                  : 0.4 *
                      u.pow(2, -10 * t) *
                      u.sin(((t - 0.055) * (2 * u.PI)) / 0.22) +
                    1;
              },
            },
          }),
          (s.tap = function (t, e) {
            var i = o.createEvent("Event");
            i.initEvent(e, !0, !0),
              (i.pageX = t.pageX),
              (i.pageY = t.pageY),
              t.target.dispatchEvent(i);
          }),
          (s.click = function (t) {
            var e,
              i = t.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) ||
              ((e = o.createEvent(
                n.MouseEvent ? "MouseEvents" : "Event"
              )).initEvent("click", !0, !0),
              (e.view = t.view || n),
              (e.detail = 1),
              (e.screenX = i.screenX || 0),
              (e.screenY = i.screenY || 0),
              (e.clientX = i.clientX || 0),
              (e.clientY = i.clientY || 0),
              (e.ctrlKey = !!t.ctrlKey),
              (e.altKey = !!t.altKey),
              (e.shiftKey = !!t.shiftKey),
              (e.metaKey = !!t.metaKey),
              (e.button = 0),
              (e.relatedTarget = null),
              (e._constructed = !0),
              i.dispatchEvent(e));
          }),
          (s.getTouchAction = function (t, e) {
            var i = "none";
            return (
              "vertical" === t
                ? (i = "pan-y")
                : "horizontal" === t && (i = "pan-x"),
              e && "none" != i && (i += " pinch-zoom"),
              i
            );
          }),
          (s.getRect = function (t) {
            if (t instanceof SVGElement) {
              var e = t.getBoundingClientRect();
              return {
                top: e.top,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }
            return {
              top: t.offsetTop,
              left: t.offsetLeft,
              width: t.offsetWidth,
              height: t.offsetHeight,
            };
          }),
          s
        );
      })();
    function t(t, e) {
      for (var i in ((this.wrapper =
        "string" == typeof t ? o.querySelector(t) : t),
      (this.scroller = this.wrapper.children[0]),
      (this.scrollerStyle = this.scroller.style),
      (this.options = {
        resizeScrollbars: !0,
        mouseWheelSpeed: 20,
        snapThreshold: 0.334,
        disablePointer: !f.hasPointer,
        disableTouch: f.hasPointer || !f.hasTouch,
        disableMouse: f.hasPointer || f.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: !0,
        directionLockThreshold: 5,
        momentum: !0,
        bounce: !0,
        bounceTime: 600,
        bounceEasing: "",
        preventDefault: !0,
        preventDefaultException: {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/,
        },
        HWCompositing: !0,
        useTransition: !0,
        useTransform: !0,
        bindToWrapper: void 0 === n.onmousedown,
      }),
      e))
        this.options[i] = e[i];
      (this.translateZ =
        this.options.HWCompositing && f.hasPerspective ? " translateZ(0)" : ""),
        (this.options.useTransition =
          f.hasTransition && this.options.useTransition),
        (this.options.useTransform =
          f.hasTransform && this.options.useTransform),
        (this.options.eventPassthrough =
          !0 === this.options.eventPassthrough
            ? "vertical"
            : this.options.eventPassthrough),
        (this.options.preventDefault =
          !this.options.eventPassthrough && this.options.preventDefault),
        (this.options.scrollY =
          "vertical" != this.options.eventPassthrough && this.options.scrollY),
        (this.options.scrollX =
          "horizontal" != this.options.eventPassthrough &&
          this.options.scrollX),
        (this.options.freeScroll =
          this.options.freeScroll && !this.options.eventPassthrough),
        (this.options.directionLockThreshold = this.options.eventPassthrough
          ? 0
          : this.options.directionLockThreshold),
        (this.options.bounceEasing =
          "string" == typeof this.options.bounceEasing
            ? f.ease[this.options.bounceEasing] || f.ease.circular
            : this.options.bounceEasing),
        (this.options.resizePolling =
          void 0 === this.options.resizePolling
            ? 60
            : this.options.resizePolling),
        !0 === this.options.tap && (this.options.tap = "tap"),
        this.options.useTransition ||
          this.options.useTransform ||
          /relative|absolute/i.test(this.scrollerStyle.position) ||
          (this.scrollerStyle.position = "relative"),
        "scale" == this.options.shrinkScrollbars &&
          (this.options.useTransition = !1),
        (this.options.invertWheelDirection = this.options.invertWheelDirection
          ? -1
          : 1),
        3 == this.options.probeType && (this.options.useTransition = !1),
        (this.x = 0),
        (this.y = 0),
        (this.directionX = 0),
        (this.directionY = 0),
        (this._events = {}),
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable();
    }
    function a(t, e, i) {
      var s = o.createElement("div"),
        r = o.createElement("div");
      return (
        !0 === i &&
          ((s.style.cssText = "position:absolute;z-index:9999"),
          (r.style.cssText =
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
        (r.className = "iScrollIndicator"),
        "h" == t
          ? (!0 === i &&
              ((s.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"),
              (r.style.height = "100%")),
            (s.className = "iScrollHorizontalScrollbar"))
          : (!0 === i &&
              ((s.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"),
              (r.style.width = "100%")),
            (s.className = "iScrollVerticalScrollbar")),
        (s.style.cssText += ";overflow:hidden"),
        e || (s.style.pointerEvents = "none"),
        s.appendChild(r),
        s
      );
    }
    function h(t, e) {
      for (var i in ((this.wrapper =
        "string" == typeof e.el ? o.querySelector(e.el) : e.el),
      (this.wrapperStyle = this.wrapper.style),
      (this.indicator = this.wrapper.children[0]),
      (this.indicatorStyle = this.indicator.style),
      (this.scroller = t),
      (this.options = {
        listenX: !0,
        listenY: !0,
        interactive: !1,
        resize: !0,
        defaultScrollbars: !1,
        shrink: !1,
        fade: !1,
        speedRatioX: 0,
        speedRatioY: 0,
      }),
      e))
        this.options[i] = e[i];
      var s, r;
      (this.sizeRatioX = 1),
        (this.sizeRatioY = 1),
        (this.maxPosX = 0),
        (this.maxPosY = 0),
        this.options.interactive &&
          (this.options.disableTouch ||
            (f.addEvent(this.indicator, "touchstart", this),
            f.addEvent(n, "touchend", this)),
          this.options.disablePointer ||
            (f.addEvent(
              this.indicator,
              f.prefixPointerEvent("pointerdown"),
              this
            ),
            f.addEvent(n, f.prefixPointerEvent("pointerup"), this)),
          this.options.disableMouse ||
            (f.addEvent(this.indicator, "mousedown", this),
            f.addEvent(n, "mouseup", this))),
        this.options.fade &&
          ((this.wrapperStyle[f.style.transform] = this.scroller.translateZ),
          (s = f.style.transitionDuration) &&
            ((this.wrapperStyle[s] = f.isBadAndroid ? "0.0001ms" : "0ms"),
            (r = this),
            f.isBadAndroid &&
              p(function () {
                "0.0001ms" === r.wrapperStyle[s] && (r.wrapperStyle[s] = "0s");
              }),
            (this.wrapperStyle.opacity = "0")));
    }
    (t.prototype = {
      version: "5.2.0-snapshot",
      _init: function () {
        this._initEvents(),
          (this.options.scrollbars || this.options.indicators) &&
            this._initIndicators(),
          this.options.mouseWheel && this._initWheel(),
          this.options.snap && this._initSnap(),
          this.options.keyBindings && this._initKeys();
      },
      destroy: function () {
        this._initEvents(!0),
          clearTimeout(this.resizeTimeout),
          (this.resizeTimeout = null),
          this._execEvent("destroy");
      },
      _transitionEnd: function (t) {
        t.target == this.scroller &&
          this.isInTransition &&
          (this._transitionTime(),
          this.resetPosition(this.options.bounceTime) ||
            ((this.isInTransition = !1), this._execEvent("scrollEnd")));
      },
      _start: function (t) {
        if (1 != f.eventType[t.type]) {
          var e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2;
          if (0 !== e) return;
        }
        !this.enabled ||
          (this.initiated && f.eventType[t.type] !== this.initiated) ||
          (!this.options.preventDefault ||
            f.isBadAndroid ||
            f.preventDefaultException(
              t.target,
              this.options.preventDefaultException
            ) ||
            t.preventDefault(),
          (e = t.touches ? t.touches[0] : t),
          (this.initiated = f.eventType[t.type]),
          (this.moved = !1),
          (this.distX = 0),
          (this.distY = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          (this.directionLocked = 0),
          (this.startTime = f.getTime()),
          this.options.useTransition && this.isInTransition
            ? (this._transitionTime(),
              (this.isInTransition = !1),
              (t = this.getComputedPosition()),
              this._translate(u.round(t.x), u.round(t.y)),
              this._execEvent("scrollEnd"))
            : !this.options.useTransition &&
              this.isAnimating &&
              ((this.isAnimating = !1), this._execEvent("scrollEnd")),
          (this.startX = this.x),
          (this.startY = this.y),
          (this.absStartX = this.x),
          (this.absStartY = this.y),
          (this.pointX = e.pageX),
          (this.pointY = e.pageY),
          this._execEvent("beforeScrollStart"));
      },
      _move: function (t) {
        if (this.enabled && f.eventType[t.type] === this.initiated) {
          this.options.preventDefault && t.preventDefault();
          var e,
            i = t.touches ? t.touches[0] : t,
            s = i.pageX - this.pointX,
            r = i.pageY - this.pointY,
            n = f.getTime();
          if (
            ((this.pointX = i.pageX),
            (this.pointY = i.pageY),
            (this.distX += s),
            (this.distY += r),
            (e = u.abs(this.distX)),
            (i = u.abs(this.distY)),
            !(300 < n - this.endTime && e < 10 && i < 10))
          ) {
            if (
              (this.directionLocked ||
                this.options.freeScroll ||
                (e > i + this.options.directionLockThreshold
                  ? (this.directionLocked = "h")
                  : i >= e + this.options.directionLockThreshold
                  ? (this.directionLocked = "v")
                  : (this.directionLocked = "n")),
              "h" == this.directionLocked)
            ) {
              if ("vertical" == this.options.eventPassthrough)
                t.preventDefault();
              else if ("horizontal" == this.options.eventPassthrough)
                return void (this.initiated = !1);
              r = 0;
            } else if ("v" == this.directionLocked) {
              if ("horizontal" == this.options.eventPassthrough)
                t.preventDefault();
              else if ("vertical" == this.options.eventPassthrough)
                return void (this.initiated = !1);
              s = 0;
            }
            (s = this.hasHorizontalScroll ? s : 0),
              (r = this.hasVerticalScroll ? r : 0),
              (e = this.x + s),
              (t = this.y + r),
              (0 < e || e < this.maxScrollX) &&
                (e = this.options.bounce
                  ? this.x + s / 3
                  : 0 < e
                  ? 0
                  : this.maxScrollX),
              (0 < t || t < this.maxScrollY) &&
                (t = this.options.bounce
                  ? this.y + r / 3
                  : 0 < t
                  ? 0
                  : this.maxScrollY),
              (this.directionX = 0 < s ? -1 : s < 0 ? 1 : 0),
              (this.directionY = 0 < r ? -1 : r < 0 ? 1 : 0),
              this.moved || this._execEvent("scrollStart"),
              (this.moved = !0),
              this._translate(e, t),
              300 < n - this.startTime &&
                ((this.startTime = n),
                (this.startX = this.x),
                (this.startY = this.y),
                1 == this.options.probeType && this._execEvent("scroll")),
              1 < this.options.probeType && this._execEvent("scroll");
          }
        }
      },
      _end: function (t) {
        if (this.enabled && f.eventType[t.type] === this.initiated) {
          this.options.preventDefault &&
            !f.preventDefaultException(
              t.target,
              this.options.preventDefaultException
            ) &&
            t.preventDefault();
          t.changedTouches && t.changedTouches[0];
          var e,
            i = f.getTime() - this.startTime,
            s = u.round(this.x),
            r = u.round(this.y),
            n = u.abs(s - this.startX),
            o = u.abs(r - this.startY),
            a = 0,
            h = "";
          if (
            ((this.isInTransition = 0),
            (this.initiated = 0),
            (this.endTime = f.getTime()),
            !this.resetPosition(this.options.bounceTime))
          ) {
            if ((this.scrollTo(s, r), !this.moved))
              return (
                this.options.tap && f.tap(t, this.options.tap),
                this.options.click && f.click(t),
                void this._execEvent("scrollCancel")
              );
            if (this._events.flick && i < 200 && n < 100 && o < 100)
              this._execEvent("flick");
            else {
              if (
                (this.options.momentum &&
                  i < 300 &&
                  ((o = this.hasHorizontalScroll
                    ? f.momentum(
                        this.x,
                        this.startX,
                        i,
                        this.maxScrollX,
                        this.options.bounce ? this.wrapperWidth : 0,
                        this.options.deceleration
                      )
                    : { destination: s, duration: 0 }),
                  (e = this.hasVerticalScroll
                    ? f.momentum(
                        this.y,
                        this.startY,
                        i,
                        this.maxScrollY,
                        this.options.bounce ? this.wrapperHeight : 0,
                        this.options.deceleration
                      )
                    : { destination: r, duration: 0 }),
                  (s = o.destination),
                  (r = e.destination),
                  (a = u.max(o.duration, e.duration)),
                  (this.isInTransition = 1)),
                this.options.snap &&
                  ((e = this._nearestSnap(s, r)),
                  (this.currentPage = e),
                  (a =
                    this.options.snapSpeed ||
                    u.max(
                      u.max(
                        u.min(u.abs(s - e.x), 1e3),
                        u.min(u.abs(r - e.y), 1e3)
                      ),
                      300
                    )),
                  (s = e.x),
                  (r = e.y),
                  (this.directionX = 0),
                  (this.directionY = 0),
                  (h = this.options.bounceEasing)),
                s != this.x || r != this.y)
              )
                return (
                  (0 < s ||
                    s < this.maxScrollX ||
                    0 < r ||
                    r < this.maxScrollY) &&
                    (h = f.ease.quadratic),
                  void this.scrollTo(s, r, a, h)
                );
              this._execEvent("scrollEnd");
            }
          }
        }
      },
      _resize: function () {
        var t = this;
        clearTimeout(this.resizeTimeout),
          (this.resizeTimeout = setTimeout(function () {
            t.refresh();
          }, this.options.resizePolling));
      },
      resetPosition: function (t) {
        var e = this.x,
          i = this.y;
        return (
          !this.hasHorizontalScroll || 0 < this.x
            ? (e = 0)
            : this.x < this.maxScrollX && (e = this.maxScrollX),
          !this.hasVerticalScroll || 0 < this.y
            ? (i = 0)
            : this.y < this.maxScrollY && (i = this.maxScrollY),
          (e != this.x || i != this.y) &&
            (this.scrollTo(e, i, (t = t || 0), this.options.bounceEasing), !0)
        );
      },
      disable: function () {
        this.enabled = !1;
      },
      enable: function () {
        this.enabled = !0;
      },
      refresh: function () {
        f.getRect(this.wrapper),
          (this.wrapperWidth = this.wrapper.clientWidth),
          (this.wrapperHeight = this.wrapper.clientHeight);
        var t = f.getRect(this.scroller);
        (this.scrollerWidth = t.width),
          (this.scrollerHeight = t.height),
          (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
          (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
          (this.hasHorizontalScroll =
            this.options.scrollX && this.maxScrollX < 0),
          (this.hasVerticalScroll =
            this.options.scrollY && this.maxScrollY < 0),
          this.hasHorizontalScroll ||
            ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
          this.hasVerticalScroll ||
            ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
          (this.endTime = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          f.hasPointer &&
            !this.options.disablePointer &&
            ((this.wrapper.style[f.style.touchAction] = f.getTouchAction(
              this.options.eventPassthrough,
              !0
            )),
            this.wrapper.style[f.style.touchAction] ||
              (this.wrapper.style[f.style.touchAction] = f.getTouchAction(
                this.options.eventPassthrough,
                !1
              ))),
          (this.wrapperOffset = f.offset(this.wrapper)),
          this._execEvent("refresh"),
          this.resetPosition();
      },
      on: function (t, e) {
        this._events[t] || (this._events[t] = []), this._events[t].push(e);
      },
      off: function (t, e) {
        !this._events[t] ||
          (-1 < (e = this._events[t].indexOf(e)) &&
            this._events[t].splice(e, 1));
      },
      _execEvent: function (t) {
        if (this._events[t]) {
          var e = 0,
            i = this._events[t].length;
          if (i)
            for (; e < i; e++)
              this._events[t][e].apply(this, [].slice.call(arguments, 1));
        }
      },
      scrollBy: function (t, e, i, s) {
        (t = this.x + t),
          (e = this.y + e),
          this.scrollTo(t, e, (i = i || 0), s);
      },
      scrollTo: function (t, e, i, s) {
        (s = s || f.ease.circular),
          (this.isInTransition = this.options.useTransition && 0 < i);
        var r = this.options.useTransition && s.style;
        !i || r
          ? (r &&
              (this._transitionTimingFunction(s.style),
              this._transitionTime(i)),
            this._translate(t, e))
          : this._animate(t, e, i, s.fn);
      },
      scrollToElement: function (t, e, i, s, r) {
        var n, o;
        (t = t.nodeType ? t : this.scroller.querySelector(t)) &&
          (((n = f.offset(t)).left -= this.wrapperOffset.left),
          (n.top -= this.wrapperOffset.top),
          (o = f.getRect(t)),
          (t = f.getRect(this.wrapper)),
          !0 === i && (i = u.round(o.width / 2 - t.width / 2)),
          !0 === s && (s = u.round(o.height / 2 - t.height / 2)),
          (n.left -= i || 0),
          (n.top -= s || 0),
          (n.left =
            0 < n.left
              ? 0
              : n.left < this.maxScrollX
              ? this.maxScrollX
              : n.left),
          (n.top =
            0 < n.top ? 0 : n.top < this.maxScrollY ? this.maxScrollY : n.top),
          (e =
            null == e || "auto" === e
              ? u.max(u.abs(this.x - n.left), u.abs(this.y - n.top))
              : e),
          this.scrollTo(n.left, n.top, e, r));
      },
      _transitionTime: function (t) {
        if (this.options.useTransition) {
          t = t || 0;
          var e,
            i = f.style.transitionDuration;
          if (i)
            if (
              ((this.scrollerStyle[i] = t + "ms"),
              !t &&
                f.isBadAndroid &&
                ((this.scrollerStyle[i] = "0.0001ms"),
                (e = this),
                p(function () {
                  "0.0001ms" === e.scrollerStyle[i] &&
                    (e.scrollerStyle[i] = "0s");
                })),
              this.indicators)
            )
              for (var s = this.indicators.length; s--; )
                this.indicators[s].transitionTime(t);
        }
      },
      _transitionTimingFunction: function (t) {
        if (
          ((this.scrollerStyle[f.style.transitionTimingFunction] = t),
          this.indicators)
        )
          for (var e = this.indicators.length; e--; )
            this.indicators[e].transitionTimingFunction(t);
      },
      _translate: function (t, e) {
        if (
          (this.options.useTransform
            ? (this.scrollerStyle[f.style.transform] =
                "translate(" + t + "px," + e + "px)" + this.translateZ)
            : ((t = u.round(t)),
              (e = u.round(e)),
              (this.scrollerStyle.left = t + "px"),
              (this.scrollerStyle.top = e + "px")),
          (this.x = t),
          (this.y = e),
          this.indicators)
        )
          for (var i = this.indicators.length; i--; )
            this.indicators[i].updatePosition();
      },
      _initEvents: function (t) {
        var e = t ? f.removeEvent : f.addEvent,
          t = this.options.bindToWrapper ? this.wrapper : n;
        e(n, "orientationchange", this),
          e(n, "resize", this),
          this.options.click && e(this.wrapper, "click", this, !0),
          this.options.disableMouse ||
            (e(this.wrapper, "mousedown", this),
            e(t, "mousemove", this),
            e(t, "mousecancel", this),
            e(t, "mouseup", this)),
          f.hasPointer &&
            !this.options.disablePointer &&
            (e(this.wrapper, f.prefixPointerEvent("pointerdown"), this),
            e(t, f.prefixPointerEvent("pointermove"), this),
            e(t, f.prefixPointerEvent("pointercancel"), this),
            e(t, f.prefixPointerEvent("pointerup"), this)),
          f.hasTouch &&
            !this.options.disableTouch &&
            (e(this.wrapper, "touchstart", this),
            e(t, "touchmove", this),
            e(t, "touchcancel", this),
            e(t, "touchend", this)),
          e(this.scroller, "transitionend", this),
          e(this.scroller, "webkitTransitionEnd", this),
          e(this.scroller, "oTransitionEnd", this),
          e(this.scroller, "MSTransitionEnd", this);
      },
      getComputedPosition: function () {
        var t,
          e = n.getComputedStyle(this.scroller, null),
          e = this.options.useTransform
            ? ((t = +(
                (e = e[f.style.transform].split(")")[0].split(", "))[12] || e[4]
              )),
              +(e[13] || e[5]))
            : ((t = +e.left.replace(/[^-\d.]/g, "")),
              +e.top.replace(/[^-\d.]/g, ""));
        return { x: t, y: e };
      },
      _initIndicators: function () {
        var t,
          e = this.options.interactiveScrollbars,
          i = "string" != typeof this.options.scrollbars,
          s = [],
          r = this;
        (this.indicators = []),
          this.options.scrollbars &&
            (this.options.scrollY &&
              ((t = {
                el: a("v", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1,
              }),
              this.wrapper.appendChild(t.el),
              s.push(t)),
            this.options.scrollX &&
              ((t = {
                el: a("h", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1,
              }),
              this.wrapper.appendChild(t.el),
              s.push(t)));
        for (
          var n = (s = this.options.indicators
            ? s.concat(this.options.indicators)
            : s).length;
          n--;

        )
          this.indicators.push(new h(this, s[n]));
        function o(t) {
          if (r.indicators)
            for (var e = r.indicators.length; e--; ) t.call(r.indicators[e]);
        }
        this.options.fadeScrollbars &&
          (this.on("scrollEnd", function () {
            o(function () {
              this.fade();
            });
          }),
          this.on("scrollCancel", function () {
            o(function () {
              this.fade();
            });
          }),
          this.on("scrollStart", function () {
            o(function () {
              this.fade(1);
            });
          }),
          this.on("beforeScrollStart", function () {
            o(function () {
              this.fade(1, !0);
            });
          })),
          this.on("refresh", function () {
            o(function () {
              this.refresh();
            });
          }),
          this.on("destroy", function () {
            o(function () {
              this.destroy();
            }),
              delete this.indicators;
          });
      },
      _initWheel: function () {
        f.addEvent(this.wrapper, "wheel", this),
          f.addEvent(this.wrapper, "mousewheel", this),
          f.addEvent(this.wrapper, "DOMMouseScroll", this),
          this.on("destroy", function () {
            clearTimeout(this.wheelTimeout),
              (this.wheelTimeout = null),
              f.removeEvent(this.wrapper, "wheel", this),
              f.removeEvent(this.wrapper, "mousewheel", this),
              f.removeEvent(this.wrapper, "DOMMouseScroll", this);
          });
      },
      _wheel: function (t) {
        if (this.enabled) {
          t.preventDefault();
          var e,
            i,
            s,
            r,
            n = this;
          if (
            (void 0 === this.wheelTimeout && n._execEvent("scrollStart"),
            clearTimeout(this.wheelTimeout),
            (this.wheelTimeout = setTimeout(function () {
              n.options.snap || n._execEvent("scrollEnd"),
                (n.wheelTimeout = void 0);
            }, 400)),
            "deltaX" in t)
          )
            i =
              1 === t.deltaMode
                ? ((e = -t.deltaX * this.options.mouseWheelSpeed),
                  -t.deltaY * this.options.mouseWheelSpeed)
                : ((e = -t.deltaX), -t.deltaY);
          else if ("wheelDeltaX" in t)
            (e = (t.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
              (i = (t.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
          else if ("wheelDelta" in t)
            e = i = (t.wheelDelta / 120) * this.options.mouseWheelSpeed;
          else {
            if (!("detail" in t)) return;
            e = i = (-t.detail / 3) * this.options.mouseWheelSpeed;
          }
          if (
            ((e *= this.options.invertWheelDirection),
            (i *= this.options.invertWheelDirection),
            this.hasVerticalScroll || ((e = i), (i = 0)),
            this.options.snap)
          )
            return (
              (s = this.currentPage.pageX),
              (r = this.currentPage.pageY),
              0 < e ? s-- : e < 0 && s++,
              0 < i ? r-- : i < 0 && r++,
              void this.goToPage(s, r)
            );
          (s = this.x + u.round(this.hasHorizontalScroll ? e : 0)),
            (r = this.y + u.round(this.hasVerticalScroll ? i : 0)),
            (this.directionX = 0 < e ? -1 : e < 0 ? 1 : 0),
            (this.directionY = 0 < i ? -1 : i < 0 ? 1 : 0),
            0 < s ? (s = 0) : s < this.maxScrollX && (s = this.maxScrollX),
            0 < r ? (r = 0) : r < this.maxScrollY && (r = this.maxScrollY),
            this.scrollTo(s, r, 0),
            1 < this.options.probeType && this._execEvent("scroll");
        }
      },
      _initSnap: function () {
        (this.currentPage = {}),
          "string" == typeof this.options.snap &&
            (this.options.snap = this.scroller.querySelectorAll(
              this.options.snap
            )),
          this.on("refresh", function () {
            var t,
              e,
              i,
              s,
              r,
              n,
              o,
              a = 0,
              h = 0,
              l = 0,
              c = this.options.snapStepX || this.wrapperWidth,
              p = this.options.snapStepY || this.wrapperHeight;
            if (
              ((this.pages = []),
              this.wrapperWidth &&
                this.wrapperHeight &&
                this.scrollerWidth &&
                this.scrollerHeight)
            ) {
              if (!0 === this.options.snap)
                for (
                  i = u.round(c / 2), s = u.round(p / 2);
                  l > -this.scrollerWidth;

                ) {
                  for (
                    this.pages[a] = [], r = t = 0;
                    r > -this.scrollerHeight;

                  )
                    (this.pages[a][t] = {
                      x: u.max(l, this.maxScrollX),
                      y: u.max(r, this.maxScrollY),
                      width: c,
                      height: p,
                      cx: l - i,
                      cy: r - s,
                    }),
                      (r -= p),
                      t++;
                  (l -= c), a++;
                }
              else
                for (t = (n = this.options.snap).length, e = -1; a < t; a++)
                  (o = f.getRect(n[a])),
                    (0 === a || o.left <= f.getRect(n[a - 1]).left) &&
                      ((h = 0), e++),
                    this.pages[h] || (this.pages[h] = []),
                    (l = u.max(-o.left, this.maxScrollX)),
                    (r = u.max(-o.top, this.maxScrollY)),
                    (i = l - u.round(o.width / 2)),
                    (s = r - u.round(o.height / 2)),
                    (this.pages[h][e] = {
                      x: l,
                      y: r,
                      width: o.width,
                      height: o.height,
                      cx: i,
                      cy: s,
                    }),
                    l > this.maxScrollX && h++;
              this.goToPage(
                this.currentPage.pageX || 0,
                this.currentPage.pageY || 0,
                0
              ),
                this.options.snapThreshold % 1 == 0
                  ? ((this.snapThresholdX = this.options.snapThreshold),
                    (this.snapThresholdY = this.options.snapThreshold))
                  : ((this.snapThresholdX = u.round(
                      this.pages[this.currentPage.pageX][this.currentPage.pageY]
                        .width * this.options.snapThreshold
                    )),
                    (this.snapThresholdY = u.round(
                      this.pages[this.currentPage.pageX][this.currentPage.pageY]
                        .height * this.options.snapThreshold
                    )));
            }
          }),
          this.on("flick", function () {
            var t =
              this.options.snapSpeed ||
              u.max(
                u.max(
                  u.min(u.abs(this.x - this.startX), 1e3),
                  u.min(u.abs(this.y - this.startY), 1e3)
                ),
                300
              );
            this.goToPage(
              this.currentPage.pageX + this.directionX,
              this.currentPage.pageY + this.directionY,
              t
            );
          });
      },
      _nearestSnap: function (t, e) {
        if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
        var i = 0,
          s = this.pages.length,
          r = 0;
        if (
          u.abs(t - this.absStartX) < this.snapThresholdX &&
          u.abs(e - this.absStartY) < this.snapThresholdY
        )
          return this.currentPage;
        for (
          0 < t ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
            0 < e ? (e = 0) : e < this.maxScrollY && (e = this.maxScrollY);
          i < s;
          i++
        )
          if (t >= this.pages[i][0].cx) {
            t = this.pages[i][0].x;
            break;
          }
        for (s = this.pages[i].length; r < s; r++)
          if (e >= this.pages[0][r].cy) {
            e = this.pages[0][r].y;
            break;
          }
        return (
          i == this.currentPage.pageX &&
            ((i += this.directionX) < 0
              ? (i = 0)
              : i >= this.pages.length && (i = this.pages.length - 1),
            (t = this.pages[i][0].x)),
          r == this.currentPage.pageY &&
            ((r += this.directionY) < 0
              ? (r = 0)
              : r >= this.pages[0].length && (r = this.pages[0].length - 1),
            (e = this.pages[0][r].y)),
          { x: t, y: e, pageX: i, pageY: r }
        );
      },
      goToPage: function (t, e, i, s) {
        (s = s || this.options.bounceEasing),
          t >= this.pages.length
            ? (t = this.pages.length - 1)
            : t < 0 && (t = 0),
          e >= this.pages[t].length
            ? (e = this.pages[t].length - 1)
            : e < 0 && (e = 0);
        var r = this.pages[t][e].x,
          n = this.pages[t][e].y;
        (i =
          void 0 === i
            ? this.options.snapSpeed ||
              u.max(
                u.max(
                  u.min(u.abs(r - this.x), 1e3),
                  u.min(u.abs(n - this.y), 1e3)
                ),
                300
              )
            : i),
          (this.currentPage = { x: r, y: n, pageX: t, pageY: e }),
          this.scrollTo(r, n, i, s);
      },
      next: function (t, e) {
        var i = this.currentPage.pageX,
          s = this.currentPage.pageY;
        ++i >= this.pages.length && this.hasVerticalScroll && ((i = 0), s++),
          this.goToPage(i, s, t, e);
      },
      prev: function (t, e) {
        var i = this.currentPage.pageX,
          s = this.currentPage.pageY;
        --i < 0 && this.hasVerticalScroll && ((i = 0), s--),
          this.goToPage(i, s, t, e);
      },
      _initKeys: function (t) {
        var e,
          i = {
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
          };
        if ("object" == typeof this.options.keyBindings)
          for (e in this.options.keyBindings)
            "string" == typeof this.options.keyBindings[e] &&
              (this.options.keyBindings[e] = this.options.keyBindings[e]
                .toUpperCase()
                .charCodeAt(0));
        else this.options.keyBindings = {};
        for (e in i)
          this.options.keyBindings[e] = this.options.keyBindings[e] || i[e];
        f.addEvent(n, "keydown", this),
          this.on("destroy", function () {
            f.removeEvent(n, "keydown", this);
          });
      },
      _key: function (t) {
        if (this.enabled) {
          var e,
            i = this.options.snap,
            s = i ? this.currentPage.pageX : this.x,
            r = i ? this.currentPage.pageY : this.y,
            n = f.getTime(),
            o = this.keyTime || 0;
          switch (
            (this.options.useTransition &&
              this.isInTransition &&
              ((e = this.getComputedPosition()),
              this._translate(u.round(e.x), u.round(e.y)),
              (this.isInTransition = !1)),
            (this.keyAcceleration =
              n - o < 200 ? u.min(this.keyAcceleration + 0.25, 50) : 0),
            t.keyCode)
          ) {
            case this.options.keyBindings.pageUp:
              this.hasHorizontalScroll && !this.hasVerticalScroll
                ? (s += i ? 1 : this.wrapperWidth)
                : (r += i ? 1 : this.wrapperHeight);
              break;
            case this.options.keyBindings.pageDown:
              this.hasHorizontalScroll && !this.hasVerticalScroll
                ? (s -= i ? 1 : this.wrapperWidth)
                : (r -= i ? 1 : this.wrapperHeight);
              break;
            case this.options.keyBindings.end:
              (s = i ? this.pages.length - 1 : this.maxScrollX),
                (r = i ? this.pages[0].length - 1 : this.maxScrollY);
              break;
            case this.options.keyBindings.home:
              r = s = 0;
              break;
            case this.options.keyBindings.left:
              s += i ? -1 : (5 + this.keyAcceleration) >> 0;
              break;
            case this.options.keyBindings.up:
              r += i ? 1 : (5 + this.keyAcceleration) >> 0;
              break;
            case this.options.keyBindings.right:
              s -= i ? -1 : (5 + this.keyAcceleration) >> 0;
              break;
            case this.options.keyBindings.down:
              r -= i ? 1 : (5 + this.keyAcceleration) >> 0;
              break;
            default:
              return;
          }
          i
            ? this.goToPage(s, r)
            : (0 < s
                ? (this.keyAcceleration = s = 0)
                : s < this.maxScrollX &&
                  ((s = this.maxScrollX), (this.keyAcceleration = 0)),
              0 < r
                ? (this.keyAcceleration = r = 0)
                : r < this.maxScrollY &&
                  ((r = this.maxScrollY), (this.keyAcceleration = 0)),
              this.scrollTo(s, r, 0),
              (this.keyTime = n));
        }
      },
      _animate: function (i, s, r, n) {
        var o = this,
          a = this.x,
          h = this.y,
          l = f.getTime(),
          c = l + r;
        (this.isAnimating = !0),
          (function t() {
            var e = f.getTime();
            if (c <= e)
              return (
                (o.isAnimating = !1),
                o._translate(i, s),
                void (
                  o.resetPosition(o.options.bounceTime) ||
                  o._execEvent("scrollEnd")
                )
              );
            (e = n((e - l) / r)),
              o._translate((i - a) * e + a, (s - h) * e + h),
              o.isAnimating && p(t),
              3 == o.options.probeType && o._execEvent("scroll");
          })();
      },
      handleEvent: function (t) {
        switch (t.type) {
          case "touchstart":
          case "pointerdown":
          case "MSPointerDown":
          case "mousedown":
            this._start(t);
            break;
          case "touchmove":
          case "pointermove":
          case "MSPointerMove":
          case "mousemove":
            this._move(t);
            break;
          case "touchend":
          case "pointerup":
          case "MSPointerUp":
          case "mouseup":
          case "touchcancel":
          case "pointercancel":
          case "MSPointerCancel":
          case "mousecancel":
            this._end(t);
            break;
          case "orientationchange":
          case "resize":
            this._resize();
            break;
          case "transitionend":
          case "webkitTransitionEnd":
          case "oTransitionEnd":
          case "MSTransitionEnd":
            this._transitionEnd(t);
            break;
          case "wheel":
          case "DOMMouseScroll":
          case "mousewheel":
            this._wheel(t);
            break;
          case "keydown":
            this._key(t);
            break;
          case "click":
            this.enabled &&
              !t._constructed &&
              (t.preventDefault(), t.stopPropagation());
        }
      },
    }),
      (h.prototype = {
        handleEvent: function (t) {
          switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
              this._start(t);
              break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
              this._move(t);
              break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
              this._end(t);
          }
        },
        destroy: function () {
          this.options.fadeScrollbars &&
            (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
            this.options.interactive &&
              (f.removeEvent(this.indicator, "touchstart", this),
              f.removeEvent(
                this.indicator,
                f.prefixPointerEvent("pointerdown"),
                this
              ),
              f.removeEvent(this.indicator, "mousedown", this),
              f.removeEvent(n, "touchmove", this),
              f.removeEvent(n, f.prefixPointerEvent("pointermove"), this),
              f.removeEvent(n, "mousemove", this),
              f.removeEvent(n, "touchend", this),
              f.removeEvent(n, f.prefixPointerEvent("pointerup"), this),
              f.removeEvent(n, "mouseup", this)),
            this.options.defaultScrollbars &&
              this.wrapper.parentNode &&
              this.wrapper.parentNode.removeChild(this.wrapper);
        },
        _start: function (t) {
          var e = t.touches ? t.touches[0] : t;
          t.preventDefault(),
            t.stopPropagation(),
            this.transitionTime(),
            (this.initiated = !0),
            (this.moved = !1),
            (this.lastPointX = e.pageX),
            (this.lastPointY = e.pageY),
            (this.startTime = f.getTime()),
            this.options.disableTouch || f.addEvent(n, "touchmove", this),
            this.options.disablePointer ||
              f.addEvent(n, f.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || f.addEvent(n, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart");
        },
        _move: function (t) {
          var e,
            i,
            s = t.touches ? t.touches[0] : t,
            r = f.getTime();
          this.moved || this.scroller._execEvent("scrollStart"),
            (this.moved = !0),
            (e = s.pageX - this.lastPointX),
            (this.lastPointX = s.pageX),
            (i = s.pageY - this.lastPointY),
            (this.lastPointY = s.pageY),
            (e = this.x + e),
            (i = this.y + i),
            this._pos(e, i),
            1 == this.scroller.options.probeType && 300 < r - this.startTime
              ? ((this.startTime = r), this.scroller._execEvent("scroll"))
              : 1 < this.scroller.options.probeType &&
                this.scroller._execEvent("scroll"),
            t.preventDefault(),
            t.stopPropagation();
        },
        _end: function (t) {
          var e;
          this.initiated &&
            ((this.initiated = !1),
            t.preventDefault(),
            t.stopPropagation(),
            f.removeEvent(n, "touchmove", this),
            f.removeEvent(n, f.prefixPointerEvent("pointermove"), this),
            f.removeEvent(n, "mousemove", this),
            this.scroller.options.snap &&
              ((e = this.scroller._nearestSnap(
                this.scroller.x,
                this.scroller.y
              )),
              (t =
                this.options.snapSpeed ||
                u.max(
                  u.max(
                    u.min(u.abs(this.scroller.x - e.x), 1e3),
                    u.min(u.abs(this.scroller.y - e.y), 1e3)
                  ),
                  300
                )),
              (this.scroller.x == e.x && this.scroller.y == e.y) ||
                ((this.scroller.directionX = 0),
                (this.scroller.directionY = 0),
                (this.scroller.currentPage = e),
                this.scroller.scrollTo(
                  e.x,
                  e.y,
                  t,
                  this.scroller.options.bounceEasing
                ))),
            this.moved && this.scroller._execEvent("scrollEnd"));
        },
        transitionTime: function (t) {
          t = t || 0;
          var e,
            i = f.style.transitionDuration;
          i &&
            ((this.indicatorStyle[i] = t + "ms"),
            !t &&
              f.isBadAndroid &&
              ((this.indicatorStyle[i] = "0.0001ms"),
              (e = this),
              p(function () {
                "0.0001ms" === e.indicatorStyle[i] &&
                  (e.indicatorStyle[i] = "0s");
              })));
        },
        transitionTimingFunction: function (t) {
          this.indicatorStyle[f.style.transitionTimingFunction] = t;
        },
        refresh: function () {
          this.transitionTime(),
            this.options.listenX && !this.options.listenY
              ? (this.indicatorStyle.display = this.scroller.hasHorizontalScroll
                  ? "block"
                  : "none")
              : this.options.listenY && !this.options.listenX
              ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll
                  ? "block"
                  : "none")
              : (this.indicatorStyle.display =
                  this.scroller.hasHorizontalScroll ||
                  this.scroller.hasVerticalScroll
                    ? "block"
                    : "none"),
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
              ? (f.addClass(this.wrapper, "iScrollBothScrollbars"),
                f.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                this.options.defaultScrollbars &&
                  this.options.customStyle &&
                  (this.options.listenX
                    ? (this.wrapper.style.right = "8px")
                    : (this.wrapper.style.bottom = "8px")))
              : (f.removeClass(this.wrapper, "iScrollBothScrollbars"),
                f.addClass(this.wrapper, "iScrollLoneScrollbar"),
                this.options.defaultScrollbars &&
                  this.options.customStyle &&
                  (this.options.listenX
                    ? (this.wrapper.style.right = "2px")
                    : (this.wrapper.style.bottom = "2px"))),
            f.getRect(this.wrapper),
            this.options.listenX &&
              ((this.wrapperWidth = this.wrapper.clientWidth),
              this.options.resize
                ? ((this.indicatorWidth = u.max(
                    u.round(
                      (this.wrapperWidth * this.wrapperWidth) /
                        (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                    ),
                    8
                  )),
                  (this.indicatorStyle.width = this.indicatorWidth + "px"))
                : (this.indicatorWidth = this.indicator.clientWidth),
              (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
              "clip" == this.options.shrink
                ? ((this.minBoundaryX = 8 - this.indicatorWidth),
                  (this.maxBoundaryX = this.wrapperWidth - 8))
                : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
              (this.sizeRatioX =
                this.options.speedRatioX ||
                (this.scroller.maxScrollX &&
                  this.maxPosX / this.scroller.maxScrollX))),
            this.options.listenY &&
              ((this.wrapperHeight = this.wrapper.clientHeight),
              this.options.resize
                ? ((this.indicatorHeight = u.max(
                    u.round(
                      (this.wrapperHeight * this.wrapperHeight) /
                        (this.scroller.scrollerHeight ||
                          this.wrapperHeight ||
                          1)
                    ),
                    8
                  )),
                  (this.indicatorStyle.height = this.indicatorHeight + "px"))
                : (this.indicatorHeight = this.indicator.clientHeight),
              (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
              "clip" == this.options.shrink
                ? ((this.minBoundaryY = 8 - this.indicatorHeight),
                  (this.maxBoundaryY = this.wrapperHeight - 8))
                : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
              (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
              (this.sizeRatioY =
                this.options.speedRatioY ||
                (this.scroller.maxScrollY &&
                  this.maxPosY / this.scroller.maxScrollY))),
            this.updatePosition();
        },
        updatePosition: function () {
          var t =
              (this.options.listenX &&
                u.round(this.sizeRatioX * this.scroller.x)) ||
              0,
            e =
              (this.options.listenY &&
                u.round(this.sizeRatioY * this.scroller.y)) ||
              0;
          this.options.ignoreBoundaries ||
            (t < this.minBoundaryX
              ? ("scale" == this.options.shrink &&
                  ((this.width = u.max(this.indicatorWidth + t, 8)),
                  (this.indicatorStyle.width = this.width + "px")),
                (t = this.minBoundaryX))
              : t > this.maxBoundaryX
              ? (t =
                  "scale" == this.options.shrink
                    ? ((this.width = u.max(
                        this.indicatorWidth - (t - this.maxPosX),
                        8
                      )),
                      (this.indicatorStyle.width = this.width + "px"),
                      this.maxPosX + this.indicatorWidth - this.width)
                    : this.maxBoundaryX)
              : "scale" == this.options.shrink &&
                this.width != this.indicatorWidth &&
                ((this.width = this.indicatorWidth),
                (this.indicatorStyle.width = this.width + "px")),
            e < this.minBoundaryY
              ? ("scale" == this.options.shrink &&
                  ((this.height = u.max(this.indicatorHeight + 3 * e, 8)),
                  (this.indicatorStyle.height = this.height + "px")),
                (e = this.minBoundaryY))
              : e > this.maxBoundaryY
              ? (e =
                  "scale" == this.options.shrink
                    ? ((this.height = u.max(
                        this.indicatorHeight - 3 * (e - this.maxPosY),
                        8
                      )),
                      (this.indicatorStyle.height = this.height + "px"),
                      this.maxPosY + this.indicatorHeight - this.height)
                    : this.maxBoundaryY)
              : "scale" == this.options.shrink &&
                this.height != this.indicatorHeight &&
                ((this.height = this.indicatorHeight),
                (this.indicatorStyle.height = this.height + "px"))),
            (this.x = t),
            (this.y = e),
            this.scroller.options.useTransform
              ? (this.indicatorStyle[f.style.transform] =
                  "translate(" +
                  t +
                  "px," +
                  e +
                  "px)" +
                  this.scroller.translateZ)
              : ((this.indicatorStyle.left = t + "px"),
                (this.indicatorStyle.top = e + "px"));
        },
        _pos: function (t, e) {
          t < 0 ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
            e < 0 ? (e = 0) : e > this.maxPosY && (e = this.maxPosY),
            (t = this.options.listenX
              ? u.round(t / this.sizeRatioX)
              : this.scroller.x),
            (e = this.options.listenY
              ? u.round(e / this.sizeRatioY)
              : this.scroller.y),
            this.scroller.scrollTo(t, e);
        },
        fade: function (t, e) {
          var i;
          (e && !this.visible) ||
            (clearTimeout(this.fadeTimeout),
            (this.fadeTimeout = null),
            (i = t ? 250 : 500),
            (e = t ? 0 : 300),
            (t = t ? "1" : "0"),
            (this.wrapperStyle[f.style.transitionDuration] = i + "ms"),
            (this.fadeTimeout = setTimeout(
              function (t) {
                (this.wrapperStyle.opacity = t), (this.visible = +t);
              }.bind(this, t),
              e
            )));
        },
      }),
      (t.utils = f),
      "undefined" != typeof module && module.exports
        ? (module.exports = t)
        : "function" == typeof define && define.amd
        ? define(function () {
            return t;
          })
        : (n.IScroll = t);
  })(window, document, Math);
