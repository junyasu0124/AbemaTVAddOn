(() => {
  const rateFunction = (e, t, n) => {
    n.d(t, {
      e: () => y
    });
    var o = n(73459)
      , i = n(30395)
      , a = n.n(i)
      , r = n(22155);
    function l() {
      return l = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
      }
        ,
        l.apply(null, arguments)
    }
    const s = e => {
      const t = e.target;
      if (t instanceof HTMLButtonElement) {
        const e = t.previousSibling;
        e instanceof HTMLInputElement && e.click()
      }
    }
      , c = ({ id: e, className: t, label: n = "", ...i }) => r.createElement("div", {
        className: a()(t, "com-a-RadioButton", {
          "com-a-RadioButton--checked": i.checked
        })
      }, r.createElement("input", l({
        type: "radio",
        id: e,
        className: "com-a-RadioButton__radio"
      }, i)), r.createElement("button", {
        tabIndex: -1,
        className: "com-a-RadioButton__button",
        onClick: s
      }, r.createElement(o.Qp, {
        className: "com-a-RadioButton__checkmark",
        label: ""
      })), r.createElement("label", {
        className: "com-a-RadioButton__label",
        htmlFor: e
      }, n));
    var d = n(90355);
    const m = ({ settings: e, onChangeSetting: t }) => r.createElement("div", {
      className: "com-vod-VODSettingsBlock"
    }, r.createElement(d.m, null, Object.keys(e).map(n => ((e, t, n) => r.createElement("div", {
      className: "com-vod-VODSettingsBlock__setting",
      key: `vod-setting-${e}`
    }, r.createElement("span", {
      className: "com-vod-VODSettingsBlock__setting-name"
    }, t.label), r.createElement("ul", {
      className: "com-vod-VODSettingsBlock__check-items"
    }, t.items.map(o => r.createElement("li", {
      className: "com-vod-VODSettingsBlock__check-item",
      key: `vod-setting-${e}-${o.value}`
    }, r.createElement(c, {
      id: `vod-setting-${e}-${o.value}`,
      name: `vod-setting-${e}`,
      checked: t.value === o.value,
      value: o.value,
      onChange: t => ((e, t, n) => {
        const o = e.target;
        o && o.value && ("string" != typeof o.value && "number" != typeof o.value || n(t, o.value))
      }
      )(t, e, n),
      label: o.label
    }))))))(n, e[n], t))));
    var u = n(7455)
      , _ = n(4732)
      , p = n(91926);
    const v = Array.from(new Set(JSON.parse(document.documentElement.dataset.playbackRates ?? "[1.0,1.3,1.5,1.7,2.0]"))).sort((a, b) => a - b);
    if (!v.includes(1))
      v.unshift(1);
    const b = {};
    v.forEach(e => {
      b[e] = p.B.ICONS_CONDITION_FAST_FORWARD_1X;
    });
    const y = ({ playbackRate: e, onChangePlaybackRate: t }) => {
      return r.createElement("div", {
        className: "com-vod-VideoControlPlaybackRate"
      }, r.createElement("div", {
        className: "com-vod-VideoControlPlaybackRate__select-playback-rate"
      }, r.createElement(m, {
        settings: (n = e,
        {
          playbackRate: {
            label: u.I.player_vod_settings_playback_rate_type_label,
            items: v.map(e => ({
              label: (0,
                _.H)(u.I.player_vod_settings_playback_rate_item_label, {
                  rate: String(e)
                }),
              value: e
            })),
            value: n
          }
        }),
        onChangeSetting: (e, n) => {
          "playbackRate" === e && void 0 !== t && t(Number(n))
        }
      })), r.createElement("div", {
        className: "com-vod-VideoControlPlaybackRate__icon"
      }, r.createElement(p.x, {
        "aria-label": (0,
          _.H)(u.I.player_vod_settings_playback_rate_item_label, {
            rate: String(e)
          }),
        symbolType: b[e]
      })));
      var n
    }
  };
  const commentsFetchFunction = (e, t, n) => {
    n.d(t, {
      p4: () => u,
      TJ: () => d,
      lK: () => h,
      Gy: () => p,
      f5: () => v
    });
    var a = n(61584)
      , o = n(11662)
      , i = n(46337);
    function l(e, t, n) {
      return (t = function (e) {
        var t = function (e, t) {
          if ("object" != typeof e || !e)
            return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var a = n.call(e, t || "default");
            if ("object" != typeof a)
              return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : t + ""
      }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
        e
    }
    class s {
      get createdAtMs() {
        return (0,
          i.h)(this._createdAtMs, 0)
      }
      get id() {
        return (0,
          i.h)(this._id, "")
      }
      get message() {
        return (0,
          i.h)(this._message, "")
      }
      get userId() {
        return (0,
          i.h)(this._userId, "")
      }
      get isOwner() {
        return !0 === this._isOwner
      }
      constructor(e) {
        l(this, "_createdAtMs", void 0),
          l(this, "_id", void 0),
          l(this, "_message", void 0),
          l(this, "_userId", void 0),
          l(this, "_isOwner", void 0),
          this._createdAtMs = e.createdAtMs,
          this._id = e.id,
          this._message = e.message,
          this._userId = e.userId,
          this._isOwner = e.isOwner,
          Object.freeze(this)
      }
    }
    var r = n(14101);
    function c() {
      return (0,
        a.z5)().userProfileValue.userId
    }
    function m(e, t) {
      const n = t();
      if (e)
        e.slice().reverse().forEach(e => window.dispatchEvent(new CustomEvent("new-comment", { detail: e })));
      return (e || []).map(e => {
        return new s(Object.assign({
          isOwner: n === e.userId
        }, e))
      }
      );
    }
    function u({ slotId: e, since: t, until: n, limit: a }, i = c) {
      r.P.get({
        slotId: e,
        since: t,
        until: n,
        limit: a
      }).subscribe({
        next: ({ body: { comments: t } }) => {
          o.A.fetchComments$.next({
            slotId: e,
            comments: m(t, i)
          })
        }
        ,
        error: e => o.A.fetchCommentsError$.next(e)
      })
    }
    function d({ slotId: e, since: t, until: n, limit: a }, i = c) {
      r.P.get({
        slotId: e,
        since: t,
        until: n,
        limit: a
      }).subscribe({
        next: ({ body: { comments: t } }) => {
          o.A.fetchNewComments$.next({
            slotId: e,
            comments: m(t, i)
          })
        }
        ,
        error: e => o.A.fetchNewCommentsError$.next(e)
      })
    }
    function h({ slotId: e, since: t, until: n, limit: a }, i = c) {
      r.P.get({
        slotId: e,
        since: t,
        until: n,
        limit: a
      }).subscribe({
        next: ({ body: { comments: t } }) => {
          o.A.fetchPastComments$.next({
            slotId: e,
            comments: m(t, i)
          })
        }
        ,
        error: e => o.A.fetchPastCommentsError$.next(e)
      })
    }
    function p({ message: e, twitter: t, slotId: n, programId: a, position: i, elapsed: l }, m = c) {
      r.P.save({
        message: e,
        slotId: n,
        position: i,
        ...t ? {
          share: {
            twitter: t,
            elapsed: l
          }
        } : {}
      }).subscribe({
        next: ({ body: t }) => {
          if (!t)
            return;
          const { id: i, createdAtMs: r } = t
            , c = new s({
              createdAtMs: r,
              id: i,
              message: e,
              userId: m(),
              isOwner: !0
            });
          o.A.postComment$.next({
            message: e,
            slotId: n,
            programId: a,
            elapsed: l
          }),
            o.A.fetchNewComments$.next({
              slotId: n,
              comments: [c]
            })
        }
        ,
        error: ({ meta: e }) => o.A.postCommentError$.next(e.status)
      })
    }
    function v(e) {
      r.P.saveReport(e).subscribe({
        next: () => o.A.postReport$.next(e),
        error: e => o.A.postReportError$.next(e)
      })
    }
  };
  const archiveCommentsFetchFunction = (t, e, i) => {
    i.d(e, {
      n: () => j
    });
    var n = i(98184)
      , r = i(79313)
      , s = i(4780)
      , o = i(14594)
      , a = i(64307)
      , c = i(60015);
    function u(t, e, i) {
      return (e = function (t) {
        var e = function (t, e) {
          if ("object" != typeof t || !t)
            return t;
          var i = t[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(t, e || "default");
            if ("object" != typeof n)
              return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == typeof e ? e : e + ""
      }(e)) in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i,
        t
    }
    class l {
      constructor(t, e, i, n) {
        u(this, "_intent", void 0),
          u(this, "_gateway", void 0),
          u(this, "_repo", void 0),
          this._intent = t,
          this._gateway = e,
          this._repo = i
      }
      activate() {
        const t = this._intent.dispatcher()
          , e = this._gateway
          , i = this._repo
          , n = new a.yU;
        return n.add(function (t, e) {
          const i = t.slotId$.subscribe({
            next: t => {
              e.writeSlotId(t)
            }
            ,
            error: s.H
          });
          return i
        }(t, i)),
          n.add(function (t, e, i) {
            const n = t.fetchAllCount$.pipe((0,
              c.Z)(t => e.fetchCount({
                slotId: t
              }))).subscribe({
                next: t => {
                  (0,
                    o.Bi)(t, t => {
                      i.writeAllCount(t)
                    }
                      , t => {
                        (t instanceof Error || t instanceof RangeError) && i.writeAllCountError(Number(t.message))
                      }
                    )
                }
                ,
                error: s.H
              });
            return n
          }(t, e, i)),
          n.add(function (t, e, i) {
            const n = t.fetchCount$.pipe((0,
              c.Z)(t => e.fetchCount(t))).subscribe({
                next: t => {
                  (0,
                    o.Bi)(t, t => {
                      i.writeCount(t)
                    }
                      , t => {
                        (t instanceof Error || t instanceof RangeError) && i.writeCountError(Number(t.message))
                      }
                    )
                }
                ,
                error: s.H
              });
            return n
          }(t, e, i)),
          n.add(function (t, e) {
            const i = t.updateCommentFilter$.subscribe({
              next: t => {
                e.updateCommentFilter(t)
              }
              ,
              error: s.H
            });
            return i
          }(t, i)),
          n.add(function (t, e) {
            const i = t.putElapsed$.subscribe({
              next: t => {
                e.writeElapsed(t)
              }
              ,
              error: s.H
            });
            return i
          }(t, i)),
          n.add(function (t, e) {
            const i = t.putCurrentPosition$.subscribe({
              next: t => {
                e.writeCurrentPosition(t)
              }
              ,
              error: s.H
            });
            return i
          }(t, i)),
          n.add(function (t, e) {
            const i = t.clearComments$.subscribe({
              next: () => {
                e.clearComments()
              }
              ,
              error: s.H
            });
            return i
          }(t, i)),
          n.add(function (t, e, i) {
            const n = t.fetchPastComments$.pipe((0,
              c.Z)(t => e.fetchComments(t))).subscribe({
                next: t => {
                  (0,
                    o.Bi)(t, t => {
                      i.addPastComments(t)
                    }
                      , t => {
                        (t instanceof Error || t instanceof RangeError) && i.writeCommentsError(Number(t.message))
                      }
                    )
                }
                ,
                error: s.H
              });
            return n
          }(t, e, i)),
          n.add(function (t, e, i) {
            const n = t.fetchNewComments$.pipe((0,
              c.Z)(t => e.fetchComments(t))).subscribe({
                next: t => {
                  (0,
                    o.Bi)(t, t => {
                      i.addNewComments(t)
                    }
                      , t => {
                        (t instanceof Error || t instanceof RangeError) && i.writeCommentsError(Number(t.message))
                      }
                    )
                }
                ,
                error: s.H
              });
            return n
          }(t, e, i)),
          n.add(function (t, e) {
            return t.clearCommentCount$.subscribe({
              next: () => {
                e.writeCount(0)
              }
              ,
              error: s.H
            })
          }(t, i)),
          n
      }
    }
    var d = i(78614)
      , h = i(5209)
      , p = i(46337);
    function b(t, e, i) {
      return (e = function (t) {
        var e = function (t, e) {
          if ("object" != typeof t || !t)
            return t;
          var i = t[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(t, e || "default");
            if ("object" != typeof n)
              return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == typeof e ? e : e + ""
      }(e)) in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i,
        t
    }
    class m {
      static fromObject(t) {
        const e = (0,
          p.h)(t.id, "")
          , i = (0,
            p.h)(t.userId, "")
          , n = (0,
            p.h)(t.isOwner, !1)
          , r = (0,
            p.h)(t.message, "")
          , s = (0,
            p.h)(t.createdAtMs, 0)
          , o = (0,
            p.h)(t.elapsedMs, 0);
        return new m({
          id: e,
          userId: i,
          isOwner: n,
          message: r,
          createdAtMs: s,
          elapsedMs: o
        })
      }
      constructor(t = {}) {
        b(this, "id", void 0),
          b(this, "userId", void 0),
          b(this, "isOwner", void 0),
          b(this, "message", void 0),
          b(this, "createdAtMs", void 0),
          b(this, "elapsedMs", void 0),
          this.id = (0,
            p.h)(t.id, ""),
          this.userId = (0,
            p.h)(t.userId, ""),
          this.isOwner = (0,
            p.h)(t.isOwner, !1),
          this.message = (0,
            p.h)(t.message, ""),
          this.createdAtMs = (0,
            p.h)(t.createdAtMs, 0),
          this.elapsedMs = (0,
            p.h)(t.elapsedMs, 0),
          Object.freeze(this)
      }
    }
    var v = i(59717);
    function y(t, e, i) {
      return (e = function (t) {
        var e = function (t, e) {
          if ("object" != typeof t || !t)
            return t;
          var i = t[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(t, e || "default");
            if ("object" != typeof n)
              return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == typeof e ? e : e + ""
      }(e)) in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i,
        t
    }
    class f {
      constructor(t) {
        y(this, "_driver", void 0),
          this._driver = t
      }
      fetchCount(t) {
        const e = `${`/v1/slots/${t.slotId}/archiveCommentStats`}?${t.until ? new URLSearchParams([["until", String(t.until)]]) : ""}`;
        return this._driver.getWithCacheInvalidation(e, {}).then(t => {
          const e = t.status;
          if (e === h.OK)
            return t;
          throw new Error(String(e))
        }
        ).then(d.z).then(t => t.count || 0).then(v.TC, v.KC)
      }
      fetchComments(t) {
        const e = `/v1/slots/${t.slotId}/archiveComments`
          , i = new URLSearchParams;
        void 0 !== t.until && i.set("until", t.until.toString()),
          void 0 !== t.since && i.set("since", t.since.toString()),
          i.set("limit", t.limit.toString());
        const n = `${e}?${i}`;
        return this._driver.getWithCacheInvalidation(n, {}).then(t => {
          const e = t.status;
          if (e === h.OK)
            return t;
          throw new Error(String(e))
        }
        ).then(d.z).then(e => (e.comments && e.comments.length > 0 ? e.comments : []).reverse().map(e => {
          window.dispatchEvent(new CustomEvent("new-comment", { detail: e }));
          const i = Object.assign({}, e, {
            isOwner: t.userId === e.userId
          });
          return m.fromObject(i)
        }
        )).then(v.TC, v.KC)
      }
    }
    var _ = i(63638);
    function C() {
      const t = {
        slotId$: new _.B,
        open$: new _.B,
        close$: new _.B,
        fetchAllCount$: new _.B,
        fetchCount$: new _.B,
        fetchPastComments$: new _.B,
        fetchNewComments$: new _.B,
        updateCommentFilter$: new _.B,
        putElapsed$: new _.B,
        clearComments$: new _.B,
        seek$: new _.B,
        changePlaying$: new _.B,
        putCurrentPosition$: new _.B,
        clearCommentCount$: new _.B
      };
      return {
        dispatcher: () => t,
        setSlotId: function (e) {
          t.slotId$.next(e)
        },
        open: function () {
          t.open$.next()
        },
        close: function () {
          t.close$.next()
        },
        fetchAllCount: function (e) {
          t.fetchAllCount$.next(e)
        },
        fetchCount: function (e) {
          t.fetchCount$.next(e)
        },
        fetchNewComments: function (e) {
          t.fetchNewComments$.next(e)
        },
        fetchPastComments: function (e) {
          t.fetchPastComments$.next(e)
        },
        updateCommentFilter: function (e) {
          t.updateCommentFilter$.next(e)
        },
        putElapsed: function (e) {
          t.putElapsed$.next(e)
        },
        clearComments: function () {
          t.clearComments$.next()
        },
        seek: function () {
          t.seek$.next()
        },
        changePlaying: function (e) {
          t.changePlaying$.next(e)
        },
        putCurrentPosition: function (e) {
          t.putCurrentPosition$.next(e)
        },
        clearCommentCount: function () {
          t.clearCommentCount$.next()
        }
      }
    }
    var S = i(52963)
      , g = i(13284)
      , P = i(71615)
      , w = i(4025);
    function x(t, e, i) {
      return (e = function (t) {
        var e = function (t, e) {
          if ("object" != typeof t || !t)
            return t;
          var i = t[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(t, e || "default");
            if ("object" != typeof n)
              return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == typeof e ? e : e + ""
      }(e)) in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i,
        t
    }
    class E {
      constructor(t) {
        x(this, "_blockUserIdList", void 0),
          x(this, "_slotIdSubject", void 0),
          x(this, "_allCountSubject", void 0),
          x(this, "_countSubject", void 0),
          x(this, "_elapsedSubject", void 0),
          x(this, "_currentPositionSubject", void 0),
          x(this, "_commentsSubject", void 0),
          x(this, "_allCountErrorSubject", void 0),
          x(this, "_countErrorSubject", void 0),
          x(this, "_commentsErrorSubject", void 0),
          this._blockUserIdList = [],
          this._slotIdSubject = new w.t(t.slotId),
          this._allCountSubject = new w.t(t.allCount),
          this._countSubject = new w.t(t.count),
          this._elapsedSubject = new w.t(t.elapsed),
          this._currentPositionSubject = new w.t(t.currentPosition),
          this._commentsSubject = new w.t(t.comments),
          this._allCountErrorSubject = new w.t(t.allCountError),
          this._countErrorSubject = new w.t(t.countError),
          this._commentsErrorSubject = new w.t(t.commentsError)
      }
      get slotId() {
        return this._slotIdSubject.getValue()
      }
      get allCount() {
        return this._allCountSubject.getValue()
      }
      get count() {
        return this._countSubject.getValue()
      }
      get comments() {
        return this._commentsSubject.getValue()
      }
      get elapsed() {
        return this._elapsedSubject.getValue()
      }
      get currentPosition() {
        return this._currentPositionSubject.getValue()
      }
      get allCountError() {
        return this._allCountErrorSubject.getValue()
      }
      get countError() {
        return this._countErrorSubject.getValue()
      }
      get commentsError() {
        return this._commentsErrorSubject.getValue()
      }
      writeSlotId(t) {
        this._slotIdSubject.next(t)
      }
      onUpdateSlotId() {
        return this._slotIdSubject.asObservable()
      }
      writeAllCount(t) {
        this._allCountSubject.next(t)
      }
      onUpdateAllCount() {
        return this._allCountSubject.asObservable()
      }
      writeCount(t) {
        this._countSubject.next(t)
      }
      onUpdateCount() {
        return this._countSubject.asObservable()
      }
      writeElapsed(t) {
        this._elapsedSubject.next(t)
      }
      onUpdateElapsed() {
        return this._elapsedSubject.asObservable()
      }
      writeCurrentPosition(t) {
        this._currentPositionSubject.next(t)
      }
      onUpdateCurrentPosition() {
        return this._currentPositionSubject.asObservable()
      }
      onUpdateComments() {
        return this._commentsSubject.asObservable()
      }
      addPastComments(t) {
        const e = A(t, this.comments, this._blockUserIdList);
        this._commentsSubject.next(e)
      }
      addNewComments(t) {
        const e = A(this.comments, t, this._blockUserIdList);
        this._commentsSubject.next(e)
      }
      updateCommentFilter(t) {
        this._blockUserIdList = t;
        const e = this.comments.filter(T(this._blockUserIdList));
        this._commentsSubject.next(e)
      }
      clearComments() {
        this._commentsSubject.next([])
      }
      writeAllCountError(t) {
        this._allCountErrorSubject.next(t)
      }
      onUpdateAllCountError() {
        return this._allCountErrorSubject.asObservable()
      }
      writeCountError(t) {
        this._countErrorSubject.next(t)
      }
      onUpdateCountError() {
        return this._countErrorSubject.asObservable()
      }
      writeCommentsError(t) {
        this._commentsErrorSubject.next(t)
      }
      onUpdateCommentsError() {
        return this._commentsErrorSubject.asObservable()
      }
    }
    function $() {
      const t = function (t) {
        return new E(t)
      }({
        blockUserIdList: (S.fD.get(g.ZX) || "").split(","),
        slotId: null,
        comments: [],
        allCount: 0,
        count: 0,
        elapsed: null,
        currentPosition: 0,
        allCountError: 0,
        countError: 0,
        commentsError: 0
      });
      return t
    }
    function I(t, e, i) {
      return e === i.findIndex(e => e.id === t.id)
    }
    function T(t) {
      return e => !t.find(t => t === e.userId)
    }
    function A(t, e, i) {
      const n = [...t, ...e].filter(I).filter(T(i))
        , r = n.length - P.Kx;
      return r > 0 ? n.slice(r) : n
    }
    function k(t, e, i) {
      return (e = function (t) {
        var e = function (t, e) {
          if ("object" != typeof t || !t)
            return t;
          var i = t[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(t, e || "default");
            if ("object" != typeof n)
              return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == typeof e ? e : e + ""
      }(e)) in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i,
        t
    }
    class j {
      constructor(t) {
        var e, i;
        k(this, "_subscription", void 0),
          k(this, "_gateway", void 0),
          k(this, "_intent", void 0),
          k(this, "_repo", void 0),
          k(this, "_store", void 0),
          k(this, "_playerObserver", void 0),
          this._subscription = null,
          this._gateway = (e = r.bx,
            new f(e)),
          this._intent = C(),
          this._repo = $(),
          this._store = (i = this._repo,
          {
            get slotId() {
              return i.slotId
            },
            get slotId$() {
              return i.onUpdateSlotId()
            },
            get allCount() {
              return i.allCount
            },
            get allCount$() {
              return i.onUpdateAllCount()
            },
            get count() {
              return i.count
            },
            get count$() {
              return i.onUpdateCount()
            },
            get elapsed() {
              return i.elapsed
            },
            get elapsed$() {
              return i.onUpdateElapsed()
            },
            get currentPosition() {
              return i.currentPosition
            },
            get currentPosition$() {
              return i.onUpdateCurrentPosition()
            },
            get comments() {
              return i.comments
            },
            get comments$() {
              return i.onUpdateComments()
            },
            get allCountError() {
              return i.allCountError
            },
            get allCountError$() {
              return i.onUpdateCountError()
            },
            get countError() {
              return i.countError
            },
            get countError$() {
              return i.onUpdateCountError()
            },
            get commentsError() {
              return i.commentsError
            },
            get commentsError$() {
              return i.onUpdateCommentsError()
            }
          }),
          this._playerObserver = t
      }
      destroy() {
        const t = this._subscription;
        if (!t)
          throw new TypeError(n.i$);
        t.unsubscribe(),
          this._subscription = null
      }
      activate() {
        if (null !== this._subscription)
          throw new TypeError(n.A$);
        var t, e, i, r;
        this._subscription = (t = this._intent,
          e = this._gateway,
          i = this._repo,
          r = this._playerObserver,
          new l(t, e, i, r).activate())
      }
      get intent() {
        return this._intent
      }
      get store() {
        return this._store
      }
    }
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
        case 4999:
          item[1][62464] = rateFunction;
          break;
        case 2782:
          item[1][30131] = commentsFetchFunction;
          break;
        case 7503:
          item[1][97269] = archiveCommentsFetchFunction;
          break;
      }
    }
    return globalThis.__LOADABLE_LOADED_CHUNKS__.originalPush(item);
  }
})();
