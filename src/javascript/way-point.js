!(function () {
  "use strict";
  var e = 0,
    r = {};
  function i(t) {
    if (!t) throw new Error("No options passed to Waypoint constructor");
    if (!t.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!t.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = i.Adapter.extend({}, i.defaults, t)),
      (this.element = this.options.element),
      (this.adapter = new i.Adapter(this.element)),
      (this.callback = t.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = i.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = i.Context.findOrCreateByElement(this.options.context)),
      i.offsetAliases[this.options.offset] &&
        (this.options.offset = i.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (r[this.key] = this),
      (e += 1);
  }
  (i.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (i.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (i.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete r[this.key];
    }),
    (i.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (i.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (i.prototype.next = function () {
      return this.group.next(this);
    }),
    (i.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (i.invokeAll = function (t) {
      var e,
        i = [];
      for (e in r) i.push(r[e]);
      for (var n = 0, o = i.length; n < o; n++) i[n][t]();
    }),
    (i.destroyAll = function () {
      i.invokeAll("destroy");
    }),
    (i.disableAll = function () {
      i.invokeAll("disable");
    }),
    (i.enableAll = function () {
      for (var t in (i.Context.refreshAll(), r)) r[t].enabled = !0;
      return this;
    }),
    (i.refreshAll = function () {
      i.Context.refreshAll();
    }),
    (i.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (i.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (i.adapters = []),
    (i.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (i.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = i);
})(),
  (function () {
    "use strict";
    function e(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    var i = 0,
      n = {},
      d = window.Waypoint,
      t = window.onload;
    function o(t) {
      (this.element = t),
        (this.Adapter = d.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = {
          vertical: {},
          horizontal: {},
        }),
        (t.waypointContextKey = this.key),
        (n[t.waypointContextKey] = this),
        (i += 1),
        d.windowContext ||
          ((d.windowContext = !0), (d.windowContext = new o(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    (o.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (o.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key]);
      }),
      (o.prototype.createThrottledResizeHandler = function () {
        var t = this;
        function e() {
          t.handleResize(), (t.didResize = !1);
        }
        this.adapter.on("resize.waypoints", function () {
          t.didResize || ((t.didResize = !0), d.requestAnimationFrame(e));
        });
      }),
      (o.prototype.createThrottledScrollHandler = function () {
        var t = this;
        function e() {
          t.handleScroll(), (t.didScroll = !1);
        }
        this.adapter.on("scroll.waypoints", function () {
          (t.didScroll && !d.isTouch) ||
            ((t.didScroll = !0), d.requestAnimationFrame(e));
        });
      }),
      (o.prototype.handleResize = function () {
        d.Context.refreshAll();
      }),
      (o.prototype.handleScroll = function () {
        var t,
          e,
          i = {},
          n = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (t in n) {
          var o,
            r = n[t],
            s = r.newScroll > r.oldScroll ? r.forward : r.backward;
          for (o in this.waypoints[t]) {
            var l,
              a,
              h = this.waypoints[t][o];
            null !== h.triggerPoint &&
              ((l = r.oldScroll < h.triggerPoint),
              (a = r.newScroll >= h.triggerPoint),
              ((l && a) || (!l && !a)) &&
                (h.queueTrigger(s), (i[h.group.id] = h.group)));
          }
        }
        for (e in i) i[e].flushTriggers();
        this.oldScroll = {
          x: n.horizontal.newScroll,
          y: n.vertical.newScroll,
        };
      }),
      (o.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? d.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (o.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (o.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? d.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (o.prototype.destroy = function () {
        var t,
          e = [];
        for (t in this.waypoints)
          for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
        for (var n = 0, o = e.length; n < o; n++) e[n].destroy();
      }),
      (o.prototype.refresh = function () {
        var t,
          e,
          i = this.element == this.element.window,
          n = i ? void 0 : this.adapter.offset(),
          o = {};
        for (e in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: i ? 0 : n.left,
            contextScroll: i ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: i ? 0 : n.top,
            contextScroll: i ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var r,
            s = t[e];
          for (r in this.waypoints[e]) {
            var l,
              a = this.waypoints[e][r],
              h = a.options.offset,
              p = a.triggerPoint,
              u = 0,
              c = null == p;
            a.element !== a.element.window &&
              (u = a.adapter.offset()[s.offsetProp]),
              "function" == typeof h
                ? (h = h.apply(a))
                : "string" == typeof h &&
                  ((h = parseFloat(h)),
                  -1 < a.options.offset.indexOf("%") &&
                    (h = Math.ceil((s.contextDimension * h) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (a.triggerPoint = Math.floor(u + l - h)),
              (l = p < s.oldScroll),
              (h = a.triggerPoint >= s.oldScroll),
              (p = !l && !h),
              !c && l && h
                ? (a.queueTrigger(s.backward), (o[a.group.id] = a.group))
                : ((!c && p) || (c && s.oldScroll >= a.triggerPoint)) &&
                  (a.queueTrigger(s.forward), (o[a.group.id] = a.group));
          }
        }
        return (
          d.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (o.findOrCreateByElement = function (t) {
        return o.findByElement(t) || new o(t);
      }),
      (o.refreshAll = function () {
        for (var t in n) n[t].refresh();
      }),
      (o.findByElement = function (t) {
        return n[t.waypointContextKey];
      }),
      (window.onload = function () {
        t && t(), o.refreshAll();
      }),
      (d.requestAnimationFrame = function (t) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          e
        ).call(window, t);
      }),
      (d.Context = o);
  })(),
  (function () {
    "use strict";
    function r(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function s(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    var e = {
        vertical: {},
        horizontal: {},
      },
      i = window.Waypoint;
    function n(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (e[this.axis][this.name] = this);
    }
    (n.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (n.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {
          up: [],
          down: [],
          left: [],
          right: [],
        };
      }),
      (n.prototype.flushTriggers = function () {
        for (var t in this.triggerQueues) {
          var e = this.triggerQueues[t];
          e.sort("up" === t || "left" === t ? s : r);
          for (var i = 0, n = e.length; i < n; i += 1) {
            var o = e[i];
            (!o.options.continuous && i !== e.length - 1) || o.trigger([t]);
          }
        }
        this.clearTriggerQueues();
      }),
      (n.prototype.next = function (t) {
        this.waypoints.sort(r);
        t = i.Adapter.inArray(t, this.waypoints);
        return t === this.waypoints.length - 1 ? null : this.waypoints[t + 1];
      }),
      (n.prototype.previous = function (t) {
        this.waypoints.sort(r);
        t = i.Adapter.inArray(t, this.waypoints);
        return t ? this.waypoints[t - 1] : null;
      }),
      (n.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (n.prototype.remove = function (t) {
        t = i.Adapter.inArray(t, this.waypoints);
        -1 < t && this.waypoints.splice(t, 1);
      }),
      (n.prototype.first = function () {
        return this.waypoints[0];
      }),
      (n.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (n.findOrCreate = function (t) {
        return e[t.axis][t.name] || new n(t);
      }),
      (i.Group = n);
  })(),
  (function () {
    "use strict";
    var t = window.Waypoint;
    function i(t) {
      return t === t.window;
    }
    function n(t) {
      return i(t) ? t : t.defaultView;
    }
    function e(t) {
      (this.element = t), (this.handlers = {});
    }
    (e.prototype.innerHeight = function () {
      return i(this.element)
        ? this.element.innerHeight
        : this.element.clientHeight;
    }),
      (e.prototype.innerWidth = function () {
        return i(this.element)
          ? this.element.innerWidth
          : this.element.clientWidth;
      }),
      (e.prototype.off = function (t, e) {
        function i(t, e, i) {
          for (var n = 0, o = e.length - 1; n < o; n++) {
            var r = e[n];
            (i && i !== r) || t.removeEventListener(r);
          }
        }
        var t = t.split("."),
          n = t[0],
          o = t[1],
          r = this.element;
        if (o && this.handlers[o] && n)
          i(r, this.handlers[o][n], e), (this.handlers[o][n] = []);
        else if (n)
          for (var s in this.handlers)
            i(r, this.handlers[s][n] || [], e), (this.handlers[s][n] = []);
        else if (o && this.handlers[o]) {
          for (var l in this.handlers[o]) i(r, this.handlers[o][l], e);
          this.handlers[o] = {};
        }
      }),
      (e.prototype.offset = function () {
        if (!this.element.ownerDocument) return null;
        var t = this.element.ownerDocument.documentElement,
          e = n(this.element.ownerDocument),
          i = {
            top: 0,
            left: 0,
          };
        return {
          top:
            (i = this.element.getBoundingClientRect
              ? this.element.getBoundingClientRect()
              : i).top +
            e.pageYOffset -
            t.clientTop,
          left: i.left + e.pageXOffset - t.clientLeft,
        };
      }),
      (e.prototype.on = function (t, e) {
        var i = t.split("."),
          t = i[0],
          i = i[1] || "__default",
          i = (this.handlers[i] = this.handlers[i] || {});
        (i[t] = i[t] || []).push(e), this.element.addEventListener(t, e);
      }),
      (e.prototype.outerHeight = function (t) {
        var e = this.innerHeight();
        return (
          t &&
            !i(this.element) &&
            ((t = window.getComputedStyle(this.element)),
            (e += parseInt(t.marginTop, 10)),
            (e += parseInt(t.marginBottom, 10))),
          e
        );
      }),
      (e.prototype.outerWidth = function (t) {
        var e = this.innerWidth();
        return (
          t &&
            !i(this.element) &&
            ((t = window.getComputedStyle(this.element)),
            (e += parseInt(t.marginLeft, 10)),
            (e += parseInt(t.marginRight, 10))),
          e
        );
      }),
      (e.prototype.scrollLeft = function () {
        var t = n(this.element);
        return t ? t.pageXOffset : this.element.scrollLeft;
      }),
      (e.prototype.scrollTop = function () {
        var t = n(this.element);
        return t ? t.pageYOffset : this.element.scrollTop;
      }),
      (e.extend = function () {
        var t = Array.prototype.slice.call(arguments);
        for (var e = 1, i = t.length; e < i; e++)
          !(function (t, e) {
            if ("object" == typeof t && "object" == typeof e)
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          })(t[0], t[e]);
        return t[0];
      }),
      (e.inArray = function (t, e, i) {
        return null == e ? -1 : e.indexOf(t, i);
      }),
      (e.isEmptyObject = function (t) {
        for (var e in t) return !1;
        return !0;
      }),
      t.adapters.push({
        name: "noframework",
        Adapter: e,
      }),
      (t.Adapter = e);
  })();
