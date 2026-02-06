(() => {
  const rateFunction = (e, n, i) => {
    i.d(n, {
      e: () => A
    });
    var t, o = i(57837), a = i(65723), r = i(87716), s = i(77371), l = i(77903), d = i(58694), c = i(30395), u = i.n(c), _ = i(22155), m = function (e) {
      var n = e.target;
      if ((0,
        r._)(n, HTMLButtonElement)) {
        var i = n.previousSibling;
        (0,
          r._)(i, HTMLInputElement) && i.click()
      }
    }, v = function (e) {
      var n = e.id
        , i = e.className
        , t = e.label
        , o = (0,
          l._)(e, ["id", "className", "label"]);
      return (0,
        a.jsxs)("div", {
          className: u()(i, "com-a-RadioButton", {
            "com-a-RadioButton--checked": o.checked
          }),
          children: [(0,
            a.jsx)("input", (0,
              s._)({
                type: "radio",
                id: n,
                className: "com-a-RadioButton__radio"
              }, o)), (0,
                a.jsx)("button", {
                  tabIndex: -1,
                  className: "com-a-RadioButton__button",
                  onClick: m,
                  children: (0,
                    a.jsx)(d.Qp, {
                      className: "com-a-RadioButton__checkmark",
                      label: ""
                    })
                }), (0,
                  a.jsx)("label", {
                    className: "com-a-RadioButton__label",
                    htmlFor: n,
                    children: void 0 === t ? "" : t
                  })]
        })
    }, p = i(95885), I = i(42204), b = i(82301), h = function (e, n, i) {
      var t = e.target;
      t && t.value && ("string" == typeof t.value || "number" == typeof t.value) && i(n, t.value)
    }, f = function (e) {
      var n = e.settings
        , i = e.onChangeSetting
        , t = (0,
          _.useContext)(p.mh) === I.b.MOBILE;
      return (0,
        a.jsx)("div", {
          className: u()("com-vod-VODSettingsBlock", {
            "com-vod-VODSettingsBlock--mobile": t
          }),
          children: (0,
            a.jsx)(b.m, {
              children: Object.keys(n).map(function (e) {
                var t;
                return t = n[e],
                  (0,
                    a.jsxs)("div", {
                      className: "com-vod-VODSettingsBlock__setting",
                      children: [(0,
                        a.jsx)("span", {
                          className: "com-vod-VODSettingsBlock__setting-name",
                          children: t.label
                        }), (0,
                          a.jsx)("ul", {
                            className: "com-vod-VODSettingsBlock__check-items",
                            children: t.items.map(function (n) {
                              return (0,
                                a.jsx)("li", {
                                  className: "com-vod-VODSettingsBlock__check-item",
                                  children: (0,
                                    a.jsx)(v, {
                                      id: "vod-setting-".concat(e, "-").concat(n.value),
                                      name: "vod-setting-".concat(e),
                                      checked: t.value === n.value,
                                      value: n.value,
                                      onChange: function (n) {
                                        return h(n, e, i)
                                      },
                                      label: n.label
                                    })
                                }, "vod-setting-".concat(e, "-").concat(n.value))
                            })
                          })]
                    }, "vod-setting-".concat(e))
              })
            })
        })
    }, y = i(68728), x = i(64837), C = i(15479);
    var T = Array.from(new Set(JSON.parse(document.documentElement.dataset.playbackRates ?? "[1.0,1.3,1.5,1.7,2.0]"))).sort((a, b) => a - b);
    var L = {};
    if (!T.includes(1))
      T.unshift(1);
    T.forEach(e => {
      L[e] = C.B.ICONS_CONDITION_FAST_FORWARD_1X;
    });
    var A = function (e) {
      var n = e.playbackRate
        , i = e.onChangePlaybackRate;
      return (0,
        a.jsxs)("div", {
          className: "com-vod-VideoControlPlaybackRate",
          children: [(0,
            a.jsx)("div", {
              className: "com-vod-VideoControlPlaybackRate__select-playback-rate",
              children: (0,
                a.jsx)(f, {
                  settings: {
                    playbackRate: {
                      label: y.I.player_vod_settings_playback_rate_type_label,
                      items: T.map(function (e) {
                        return {
                          label: (0,
                            x.H)(y.I.player_vod_settings_playback_rate_item_label, {
                              rate: String(e)
                            }),
                          value: e
                        }
                      }),
                      value: n
                    }
                  },
                  onChangeSetting: function (e, n) {
                    "playbackRate" === e && void 0 !== i && i(Number(n))
                  }
                })
            }), (0,
              a.jsx)("div", {
                className: "com-vod-VideoControlPlaybackRate__icon",
                children: (0,
                  a.jsx)(C.x, {
                    "aria-label": (0,
                      x.H)(y.I.player_vod_settings_playback_rate_item_label, {
                        rate: String(n)
                      }),
                    symbolType: L[n]
                  })
              })]
        })
    }
  };
  const commentsFetchFunction = (e, t, n) => {
    n.d(t, {
      lK: () => C,
      p4: () => v,
      f5: () => f,
      Gy: () => _,
      TJ: () => p
    });
    var i = n(77371)
      , o = n(55699)
      , a = n(78089)
      , r = n(53304)
      , l = n(41901)
      , s = n(57837)
      , c = n(46337)
      , u = function () {
        function e(t) {
          (0,
            r._)(this, e),
            (0,
              s._)(this, "_createdAtMs", void 0),
            (0,
              s._)(this, "_id", void 0),
            (0,
              s._)(this, "_message", void 0),
            (0,
              s._)(this, "_userId", void 0),
            (0,
              s._)(this, "_isOwner", void 0),
            this._createdAtMs = t.createdAtMs,
            this._id = t.id,
            this._message = t.message,
            this._userId = t.userId,
            this._isOwner = t.isOwner,
            Object.freeze(this)
        }
        return (0,
          l._)(e, [{
            key: "createdAtMs",
            get: function () {
              return (0,
                c.h)(this._createdAtMs, 0)
            }
          }, {
            key: "id",
            get: function () {
              return (0,
                c.h)(this._id, "")
            }
          }, {
            key: "message",
            get: function () {
              return (0,
                c.h)(this._message, "")
            }
          }, {
            key: "userId",
            get: function () {
              return (0,
                c.h)(this._userId, "")
            }
          }, {
            key: "isOwner",
            get: function () {
              return !0 === this._isOwner
            }
          }]),
          e
      }()
      , m = n(48906);
    function d() {
      return (0,
        o.z5)().userProfileValue.userId
    }
    function h(e, t) {
      var n = t();
      if (e)
        e.slice().reverse().forEach(e => window.dispatchEvent(new CustomEvent("new-comment", { detail: e })));
      return (e || []).map(function (e) {
        return new u(Object.assign({
          isOwner: n === e.userId
        }, e))
      })
    }
    function v(e) {
      var t = e.slotId
        , n = e.since
        , i = e.until
        , o = e.limit
        , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
      m.P.get({
        slotId: t,
        since: n,
        until: i,
        limit: o
      }).subscribe({
        next: function (e) {
          var n = e.body.comments;
          a.A.fetchComments$.next({
            slotId: t,
            comments: h(n, r)
          })
        },
        error: function (e) {
          return a.A.fetchCommentsError$.next(e)
        }
      })
    }
    function p(e) {
      var t = e.slotId
        , n = e.since
        , i = e.until
        , o = e.limit
        , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
      m.P.get({
        slotId: t,
        since: n,
        until: i,
        limit: o
      }).subscribe({
        next: function (e) {
          var n = e.body.comments;
          a.A.fetchNewComments$.next({
            slotId: t,
            comments: h(n, r)
          })
        },
        error: function (e) {
          return a.A.fetchNewCommentsError$.next(e)
        }
      })
    }
    function C(e) {
      var t = e.slotId
        , n = e.since
        , i = e.until
        , o = e.limit
        , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
      m.P.get({
        slotId: t,
        since: n,
        until: i,
        limit: o
      }).subscribe({
        next: function (e) {
          var n = e.body.comments;
          a.A.fetchPastComments$.next({
            slotId: t,
            comments: h(n, r)
          })
        },
        error: function (e) {
          return a.A.fetchPastCommentsError$.next(e)
        }
      })
    }
    function _(e) {
      var t = e.message
        , n = e.twitter
        , o = e.slotId
        , r = e.programId
        , l = e.position
        , s = e.elapsed
        , c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
      m.P.save((0,
        i._)({
          message: t,
          slotId: o,
          position: l
        }, n ? {
          share: {
            twitter: n,
            elapsed: s
          }
        } : {})).subscribe({
          next: function (e) {
            var n = e.body;
            if (n) {
              var i = n.id
                , l = new u({
                  createdAtMs: n.createdAtMs,
                  id: i,
                  message: t,
                  userId: c(),
                  isOwner: !0
                });
              a.A.postComment$.next({
                message: t,
                slotId: o,
                programId: r,
                elapsed: s
              }),
                a.A.fetchNewComments$.next({
                  slotId: o,
                  comments: [l]
                })
            }
          },
          error: function (e) {
            var t = e.meta;
            return a.A.postCommentError$.next(t.status)
          }
        })
    }
    function f(e) {
      m.P.saveReport(e).subscribe({
        next: function () {
          return a.A.postReport$.next(e)
        },
        error: function (e) {
          return a.A.postReportError$.next(e)
        }
      })
    }
  };
  const archiveCommentsFetchFunction = (t, e, n) => {
    n.d(e, {
      n: () => A
    });
    var i = n(53304)
      , r = n(41901)
      , o = n(57837)
      , a = n(65715)
      , s = n(95424)
      , u = n(87716)
      , c = n(82249)
      , l = n(5835)
      , d = n(32030)
      , h = n(68470)
      , v = function () {
        function t(e, n, r, a) {
          (0,
            i._)(this, t),
            (0,
              o._)(this, "_intent", void 0),
            (0,
              o._)(this, "_gateway", void 0),
            (0,
              o._)(this, "_repo", void 0),
            this._intent = e,
            this._gateway = n,
            this._repo = r
        }
        return (0,
          r._)(t, [{
            key: "activate",
            value: function () {
              var t, e, n, i, r, o, a, s, v, p, b, f, _, m, y, C, S, g, k, x, P, w, E, $, I = this._intent.dispatcher(), A = this._gateway, T = this._repo, N = new d.yU;
              return N.add((t = I,
                e = T,
                t.slotId$.subscribe({
                  next: function (t) {
                    e.writeSlotId(t)
                  },
                  error: c.H
                }))),
                N.add((n = I,
                  i = A,
                  r = T,
                  n.fetchAllCount$.pipe((0,
                    h.Z)(function (t) {
                      return i.fetchCount({
                        slotId: t
                      })
                    })).subscribe({
                      next: function (t) {
                        (0,
                          l.Bi)(t, function (t) {
                            r.writeAllCount(t)
                          }, function (t) {
                            ((0,
                              u._)(t, Error) || (0,
                                u._)(t, RangeError)) && r.writeAllCountError(Number(t.message))
                          })
                      },
                      error: c.H
                    }))),
                N.add((o = I,
                  a = A,
                  s = T,
                  o.fetchCount$.pipe((0,
                    h.Z)(function (t) {
                      return a.fetchCount(t)
                    })).subscribe({
                      next: function (t) {
                        (0,
                          l.Bi)(t, function (t) {
                            s.writeCount(t)
                          }, function (t) {
                            ((0,
                              u._)(t, Error) || (0,
                                u._)(t, RangeError)) && s.writeCountError(Number(t.message))
                          })
                      },
                      error: c.H
                    }))),
                N.add((v = I,
                  p = T,
                  v.updateCommentFilter$.subscribe({
                    next: function (t) {
                      p.updateCommentFilter(t)
                    },
                    error: c.H
                  }))),
                N.add((b = I,
                  f = T,
                  b.putElapsed$.subscribe({
                    next: function (t) {
                      f.writeElapsed(t)
                    },
                    error: c.H
                  }))),
                N.add((_ = I,
                  m = T,
                  _.putCurrentPosition$.subscribe({
                    next: function (t) {
                      m.writeCurrentPosition(t)
                    },
                    error: c.H
                  }))),
                N.add((y = I,
                  C = T,
                  y.clearComments$.subscribe({
                    next: function () {
                      C.clearComments()
                    },
                    error: c.H
                  }))),
                N.add((S = I,
                  g = A,
                  k = T,
                  S.fetchPastComments$.pipe((0,
                    h.Z)(function (t) {
                      return g.fetchComments(t)
                    })).subscribe({
                      next: function (t) {
                        (0,
                          l.Bi)(t, function (t) {
                            k.addPastComments(t)
                          }, function (t) {
                            ((0,
                              u._)(t, Error) || (0,
                                u._)(t, RangeError)) && k.writeCommentsError(Number(t.message))
                          })
                      },
                      error: c.H
                    }))),
                N.add((x = I,
                  P = A,
                  w = T,
                  x.fetchNewComments$.pipe((0,
                    h.Z)(function (t) {
                      return P.fetchComments(t)
                    })).subscribe({
                      next: function (t) {
                        (0,
                          l.Bi)(t, function (t) {
                            w.addNewComments(t)
                          }, function (t) {
                            ((0,
                              u._)(t, Error) || (0,
                                u._)(t, RangeError)) && w.writeCommentsError(Number(t.message))
                          })
                      },
                      error: c.H
                    }))),
                N.add((E = I,
                  $ = T,
                  E.clearCommentCount$.subscribe({
                    next: function () {
                      $.writeCount(0)
                    },
                    error: c.H
                  }))),
                N
            }
          }]),
          t
      }()
      , p = n(99519)
      , b = n(46716)
      , f = n(46337)
      , _ = function () {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0,
            i._)(this, t),
            (0,
              o._)(this, "id", void 0),
            (0,
              o._)(this, "userId", void 0),
            (0,
              o._)(this, "isOwner", void 0),
            (0,
              o._)(this, "message", void 0),
            (0,
              o._)(this, "createdAtMs", void 0),
            (0,
              o._)(this, "elapsedMs", void 0),
            this.id = (0,
              f.h)(e.id, ""),
            this.userId = (0,
              f.h)(e.userId, ""),
            this.isOwner = (0,
              f.h)(e.isOwner, !1),
            this.message = (0,
              f.h)(e.message, ""),
            this.createdAtMs = (0,
              f.h)(e.createdAtMs, 0),
            this.elapsedMs = (0,
              f.h)(e.elapsedMs, 0),
            Object.freeze(this)
        }
        return (0,
          r._)(t, null, [{
            key: "fromObject",
            value: function (e) {
              return new t({
                id: (0,
                  f.h)(e.id, ""),
                userId: (0,
                  f.h)(e.userId, ""),
                isOwner: (0,
                  f.h)(e.isOwner, !1),
                message: (0,
                  f.h)(e.message, ""),
                createdAtMs: (0,
                  f.h)(e.createdAtMs, 0),
                elapsedMs: (0,
                  f.h)(e.elapsedMs, 0)
              })
            }
          }]),
          t
      }()
      , m = n(59717)
      , y = function () {
        function t(e) {
          (0,
            i._)(this, t),
            (0,
              o._)(this, "_driver", void 0),
            this._driver = e
        }
        return (0,
          r._)(t, [{
            key: "fetchCount",
            value: function (t) {
              var e = "/v1/slots/".concat(t.slotId, "/archiveCommentStats")
                , n = t.until ? new URLSearchParams([["until", String(t.until)]]) : ""
                , i = "".concat(e, "?").concat(n);
              return this._driver.getWithCacheInvalidation(i, {}).then(function (t) {
                var e = t.status;
                if (e === b.OK)
                  return t;
                throw Error(String(e))
              }).then(p.z).then(function (t) {
                return t.count || 0
              }).then(m.TC, m.KC)
            }
          }, {
            key: "fetchComments",
            value: function (t) {
              var e = "/v1/slots/".concat(t.slotId, "/archiveComments")
                , n = new URLSearchParams;
              void 0 !== t.until && n.set("until", t.until.toString()),
                void 0 !== t.since && n.set("since", t.since.toString()),
                n.set("limit", t.limit.toString());
              var i = "".concat(e, "?").concat(n);
              return this._driver.getWithCacheInvalidation(i, {}).then(function (t) {
                var e = t.status;
                if (e === b.OK)
                  return t;
                throw Error(String(e))
              }).then(p.z).then(function (e) {
                return (e.comments && e.comments.length > 0 ? e.comments : []).reverse().map(function (e) {
                  window.dispatchEvent(new CustomEvent("new-comment", { detail: e }));
                  var n = Object.assign({}, e, {
                    isOwner: t.userId === e.userId
                  });
                  return _.fromObject(n)
                })
              }).then(m.TC, m.KC)
            }
          }]),
          t
      }()
      , C = n(58679)
      , S = n(10283)
      , g = n(7738)
      , k = n(3429)
      , x = n(77989)
      , P = n(4025)
      , w = function () {
        function t(e) {
          (0,
            i._)(this, t),
            (0,
              o._)(this, "_blockUserIdList", void 0),
            (0,
              o._)(this, "_slotIdSubject", void 0),
            (0,
              o._)(this, "_allCountSubject", void 0),
            (0,
              o._)(this, "_countSubject", void 0),
            (0,
              o._)(this, "_elapsedSubject", void 0),
            (0,
              o._)(this, "_currentPositionSubject", void 0),
            (0,
              o._)(this, "_commentsSubject", void 0),
            (0,
              o._)(this, "_allCountErrorSubject", void 0),
            (0,
              o._)(this, "_countErrorSubject", void 0),
            (0,
              o._)(this, "_commentsErrorSubject", void 0),
            this._blockUserIdList = [],
            this._slotIdSubject = new P.t(e.slotId),
            this._allCountSubject = new P.t(e.allCount),
            this._countSubject = new P.t(e.count),
            this._elapsedSubject = new P.t(e.elapsed),
            this._currentPositionSubject = new P.t(e.currentPosition),
            this._commentsSubject = new P.t(e.comments),
            this._allCountErrorSubject = new P.t(e.allCountError),
            this._countErrorSubject = new P.t(e.countError),
            this._commentsErrorSubject = new P.t(e.commentsError)
        }
        return (0,
          r._)(t, [{
            key: "slotId",
            get: function () {
              return this._slotIdSubject.getValue()
            }
          }, {
            key: "allCount",
            get: function () {
              return this._allCountSubject.getValue()
            }
          }, {
            key: "count",
            get: function () {
              return this._countSubject.getValue()
            }
          }, {
            key: "comments",
            get: function () {
              return this._commentsSubject.getValue()
            }
          }, {
            key: "elapsed",
            get: function () {
              return this._elapsedSubject.getValue()
            }
          }, {
            key: "currentPosition",
            get: function () {
              return this._currentPositionSubject.getValue()
            }
          }, {
            key: "allCountError",
            get: function () {
              return this._allCountErrorSubject.getValue()
            }
          }, {
            key: "countError",
            get: function () {
              return this._countErrorSubject.getValue()
            }
          }, {
            key: "commentsError",
            get: function () {
              return this._commentsErrorSubject.getValue()
            }
          }, {
            key: "writeSlotId",
            value: function (t) {
              this._slotIdSubject.next(t)
            }
          }, {
            key: "onUpdateSlotId",
            value: function () {
              return this._slotIdSubject.asObservable()
            }
          }, {
            key: "writeAllCount",
            value: function (t) {
              this._allCountSubject.next(t)
            }
          }, {
            key: "onUpdateAllCount",
            value: function () {
              return this._allCountSubject.asObservable()
            }
          }, {
            key: "writeCount",
            value: function (t) {
              this._countSubject.next(t)
            }
          }, {
            key: "onUpdateCount",
            value: function () {
              return this._countSubject.asObservable()
            }
          }, {
            key: "writeElapsed",
            value: function (t) {
              this._elapsedSubject.next(t)
            }
          }, {
            key: "onUpdateElapsed",
            value: function () {
              return this._elapsedSubject.asObservable()
            }
          }, {
            key: "writeCurrentPosition",
            value: function (t) {
              this._currentPositionSubject.next(t)
            }
          }, {
            key: "onUpdateCurrentPosition",
            value: function () {
              return this._currentPositionSubject.asObservable()
            }
          }, {
            key: "onUpdateComments",
            value: function () {
              return this._commentsSubject.asObservable()
            }
          }, {
            key: "addPastComments",
            value: function (t) {
              var e = I(t, this.comments, this._blockUserIdList);
              this._commentsSubject.next(e)
            }
          }, {
            key: "addNewComments",
            value: function (t) {
              var e = I(this.comments, t, this._blockUserIdList);
              this._commentsSubject.next(e)
            }
          }, {
            key: "updateCommentFilter",
            value: function (t) {
              this._blockUserIdList = t;
              var e = this.comments.filter($(this._blockUserIdList));
              this._commentsSubject.next(e)
            }
          }, {
            key: "clearComments",
            value: function () {
              this._commentsSubject.next([])
            }
          }, {
            key: "writeAllCountError",
            value: function (t) {
              this._allCountErrorSubject.next(t)
            }
          }, {
            key: "onUpdateAllCountError",
            value: function () {
              return this._allCountErrorSubject.asObservable()
            }
          }, {
            key: "writeCountError",
            value: function (t) {
              this._countErrorSubject.next(t)
            }
          }, {
            key: "onUpdateCountError",
            value: function () {
              return this._countErrorSubject.asObservable()
            }
          }, {
            key: "writeCommentsError",
            value: function (t) {
              this._commentsErrorSubject.next(t)
            }
          }, {
            key: "onUpdateCommentsError",
            value: function () {
              return this._commentsErrorSubject.asObservable()
            }
          }]),
          t
      }();
    function E(t, e, n) {
      return e === n.findIndex(function (e) {
        return e.id === t.id
      })
    }
    function $(t) {
      return function (e) {
        return !t.find(function (t) {
          return t === e.userId
        })
      }
    }
    function I(t, e, n) {
      var i = (0,
        S._)(t).concat((0,
          S._)(e)).filter(E).filter($(n))
        , r = i.length - x.Kx;
      return r > 0 ? i.slice(r) : i
    }
    var A = function () {
      function t(e) {
        var n, r;
        (0,
          i._)(this, t),
          (0,
            o._)(this, "_subscription", void 0),
          (0,
            o._)(this, "_gateway", void 0),
          (0,
            o._)(this, "_intent", void 0),
          (0,
            o._)(this, "_repo", void 0),
          (0,
            o._)(this, "_store", void 0),
          (0,
            o._)(this, "_playerObserver", void 0),
          this._subscription = null,
          this._gateway = new y(s.bx),
          this._intent = (n = {
            slotId$: new C.B,
            open$: new C.B,
            close$: new C.B,
            fetchAllCount$: new C.B,
            fetchCount$: new C.B,
            fetchPastComments$: new C.B,
            fetchNewComments$: new C.B,
            updateCommentFilter$: new C.B,
            putElapsed$: new C.B,
            clearComments$: new C.B,
            seek$: new C.B,
            changePlaying$: new C.B,
            putCurrentPosition$: new C.B,
            clearCommentCount$: new C.B
          },
          {
            dispatcher: function () {
              return n
            },
            setSlotId: function (t) {
              n.slotId$.next(t)
            },
            open: function () {
              n.open$.next()
            },
            close: function () {
              n.close$.next()
            },
            fetchAllCount: function (t) {
              n.fetchAllCount$.next(t)
            },
            fetchCount: function (t) {
              n.fetchCount$.next(t)
            },
            fetchNewComments: function (t) {
              n.fetchNewComments$.next(t)
            },
            fetchPastComments: function (t) {
              n.fetchPastComments$.next(t)
            },
            updateCommentFilter: function (t) {
              n.updateCommentFilter$.next(t)
            },
            putElapsed: function (t) {
              n.putElapsed$.next(t)
            },
            clearComments: function () {
              n.clearComments$.next()
            },
            seek: function () {
              n.seek$.next()
            },
            changePlaying: function (t) {
              n.changePlaying$.next(t)
            },
            putCurrentPosition: function (t) {
              n.putCurrentPosition$.next(t)
            },
            clearCommentCount: function () {
              n.clearCommentCount$.next()
            }
          }),
          this._repo = new w({
            blockUserIdList: (g.fD.get(k.ZX) || "").split(","),
            slotId: null,
            comments: [],
            allCount: 0,
            count: 0,
            elapsed: null,
            currentPosition: 0,
            allCountError: 0,
            countError: 0,
            commentsError: 0
          }),
          this._store = (r = this._repo,
          {
            get slotId() {
              return r.slotId
            },
            get slotId$() {
              return r.onUpdateSlotId()
            },
            get allCount() {
              return r.allCount
            },
            get allCount$() {
              return r.onUpdateAllCount()
            },
            get count() {
              return r.count
            },
            get count$() {
              return r.onUpdateCount()
            },
            get elapsed() {
              return r.elapsed
            },
            get elapsed$() {
              return r.onUpdateElapsed()
            },
            get currentPosition() {
              return r.currentPosition
            },
            get currentPosition$() {
              return r.onUpdateCurrentPosition()
            },
            get comments() {
              return r.comments
            },
            get comments$() {
              return r.onUpdateComments()
            },
            get allCountError() {
              return r.allCountError
            },
            get allCountError$() {
              return r.onUpdateCountError()
            },
            get countError() {
              return r.countError
            },
            get countError$() {
              return r.onUpdateCountError()
            },
            get commentsError() {
              return r.commentsError
            },
            get commentsError$() {
              return r.onUpdateCommentsError()
            }
          }),
          this._playerObserver = e
      }
      return (0,
        r._)(t, [{
          key: "destroy",
          value: function () {
            var t = this._subscription;
            if (!t)
              throw TypeError(a.i$);
            t.unsubscribe(),
              this._subscription = null
          }
        }, {
          key: "activate",
          value: function () {
            var t, e;
            if (null !== this._subscription)
              throw TypeError(a.A$);
            this._subscription = (t = this._intent,
              e = this._gateway,
              new v(t, e, this._repo, this._playerObserver).activate())
          }
        }, {
          key: "intent",
          get: function () {
            return this._intent
          }
        }, {
          key: "store",
          get: function () {
            return this._store
          }
        }]),
        t
    }()
  };


  if (Array.isArray(globalThis.__LOADABLE_LOADED_CHUNKS__)) {
    globalThis.__LOADABLE_LOADED_CHUNKS__.originalPush = globalThis.__LOADABLE_LOADED_CHUNKS__.push;
    globalThis.__LOADABLE_LOADED_CHUNKS__.push = replaceFunction;
  } else {
    const array = [];
    globalThis.__LOADABLE_LOADED_CHUNKS__ = new Proxy(array, {
      get(target, prop) {
        return Reflect.get(target, prop);
      },
      set(target, prop, value) {
        if (prop === 'push' && target.hasSetPush !== true) {
          globalThis.__LOADABLE_LOADED_CHUNKS__.originalPush = value;
          target.hasSetPush = true;
          globalThis.__LOADABLE_LOADED_CHUNKS__.push = replaceFunction;
          return true;
        }
        return Reflect.set(target, prop, value);
      }
    });
  }

  function replaceFunction(item) {
    if (item.length === 2) {
      switch (item[0][0]) {
        case '477':
          item[1][71477] = rateFunction;
          break;
        case '9401':
          item[1][66090] = commentsFetchFunction;
          break;
        case '8044':
          item[1][24804] = archiveCommentsFetchFunction;
          break;
      }
    }
    return globalThis.__LOADABLE_LOADED_CHUNKS__.originalPush(item);
  }
})();
