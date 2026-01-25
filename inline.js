(() => {
  const newObject = {
    203: (e, t, n) => {
      n.d(t, {
        A: () => s
      });
      var o = n(65494)
        , i = n(7992)
        , a = n(7455)
        , r = n(91926)
        , l = n(22155);
      const s = ({ isFullscreen: e, onClickFullscreen: t, onClickExitFullscreen: n }) => l.createElement(i.E, {
        content: e ? a.I.player_vod_controllers_miniscreen_tooltip_label : a.I.player_vod_controllers_fullscreen_tooltip_label
      }, l.createElement(o.b, {
        icon: l.createElement(r.x, {
          symbolType: e ? r.B.ICONS_PLAYER_FULLSCREEN_EXIT : r.B.ICONS_PLAYER_FULLSCREEN,
          "aria-label": "",
          "aria-hidden": !0
        }),
        onClick: e ? n : t
      }))
    }
    ,
    626: (e, t, n) => {
      n.d(t, {
        J: () => d
      });
      var o = n(39015)
        , i = n(94649)
        , a = n(42303)
        , r = n(93960)
        , l = n(93636)
        , s = n(22155);
      const c = ({ href: e, longBanner: t, onClick: n, onImpression: o }) => {
        const i = (0,
          l.T)(o, []);
        return s.createElement(r.S, {
          ref: i,
          thumbnailBaseUrl: t.url,
          alt: t.altText,
          linkTo: e,
          onClick: n
        })
      }
        , d = ({ planAppealBannerUi: e, moduleIndex: t = 0, trackingReferrer: n, onClick: r, onImpression: l }) => {
          const { isFirstView: d, ref: m } = (0,
            o.L)();
          if (e.type === i.P7.Placeholder)
            return s.createElement("div", {
              className: "com-partner-service-PlanAppealLongBanner__placeholder"
            });
          const { banner: u, bannerHash: _, id: p } = e
            , v = a.w.bySubscriptionPageId({
              subscriptionPageId: p,
              trackingReferrer: n ?? void 0
            });
          return s.createElement("div", {
            ref: m
          }, s.createElement(c, {
            href: v,
            longBanner: u,
            onClick: () => {
              r({
                subscriptionPageId: p,
                linkTo: v,
                creativeId: u.id,
                bannerHash: _,
                moduleIndex: t,
                isFirstView: d
              })
            }
            ,
            onImpression: () => {
              l({
                subscriptionPageId: p,
                linkTo: v,
                creativeId: u.id,
                bannerHash: _,
                moduleIndex: t,
                isFirstView: d
              })
            }
          }))
        }
    }
    ,
    9052: (e, t, n) => {
      n.d(t, {
        Y: () => u
      });
      var o = n(77385)
        , i = n(4732)
        , a = n(17596)
        , r = n(9769)
        , l = n(64132)
        , s = n(73693)
        , c = n(23384)
        , d = n(89001)
        , m = n(22155);
      const u = ({ container: e, connectionLimitStatus: t, onClose: n }) => m.createElement(r.aF, {
        modalSize: r.rI.LegacyFit,
        backgroundDesignType: r.oR.Basic,
        avoidFocusTrap: !1,
        canScroll: !0,
        container: e,
        onClose: n
      }, m.createElement(d.w, {
        text: o.S.playback_connection_limit_reached_title
      }), m.createElement(c.D, null, m.createElement("p", null, (0,
        i.H)(o.S.playback_connection_limit_reached_message, {
          max: String(t.err.maxConnections)
        }))), m.createElement(s.N, {
          actionType: s.X.Confirm
        }, m.createElement(l.p, {
          actionType: s.X.Confirm
        }, m.createElement(a.jn, {
          onClick: n
        }, o.S.playback_connection_limit_reached_button))))
    }
    ,
    17811: (e, t, n) => {
      n.d(t, {
        x: () => d
      });
      var o = n(92668)
        , i = n(62281)
        , a = n(91926)
        , r = n(90355)
        , l = n(30395)
        , s = n.n(l)
        , c = n(22155);
      const d = ({ volume: e, isFullscreenInBrowser: t, isFullscreen: n, shouldHideWideModeButton: l, onChangeVolume: d, onClickFullscreen: m, onClickExitFullscreen: u, onClickFullscreenInBrowser: _ }) => c.createElement("div", {
        className: "com-video_ad-VideoAdController"
      }, l ? null : ((e, t) => {
        const n = e ? "miniscreen" : "fullscreen";
        return c.createElement("button", {
          type: "button",
          className: s()("com-video_ad-VideoAdController__button", "com-video_ad-VideoAdController__tooltip-wrapper"),
          onClick: () => t(!e)
        }, c.createElement("span", {
          className: "com-video_ad-VideoAdController__tooltip"
        }, c.createElement(r.m, null, i.m[`video_ad_controller_${n}_in_browser_tooltip_label`])), c.createElement("span", {
          className: "com-video_ad-VideoAdController__icon"
        }, e ? c.createElement(a.x, {
          symbolType: a.B.ICONS_PLAYER_DEFAULT,
          "aria-label": i.m.video_ad_controller_miniscreen_in_browser_label
        }) : c.createElement(a.x, {
          symbolType: a.B.ICONS_PLAYER_WIDE,
          "aria-label": i.m.video_ad_controller_fullscreen_in_browser_label
        })))
      }
      )(t, _), ((e, t, n) => {
        const o = e ? n : t
          , l = e ? "miniscreen" : "fullscreen";
        return c.createElement("button", {
          type: "button",
          className: s()("com-video_ad-VideoAdController__button", "com-video_ad-VideoAdController__tooltip-wrapper"),
          onClick: o
        }, c.createElement("span", {
          className: "com-video_ad-VideoAdController__tooltip"
        }, c.createElement(r.m, null, i.m[`video_ad_controller_${l}_tooltip_label`])), c.createElement("span", {
          className: "com-video_ad-VideoAdController__icon"
        }, e ? c.createElement(a.x, {
          symbolType: a.B.ICONS_PLAYER_FULLSCREEN_EXIT,
          "aria-label": i.m.video_ad_controller_miniscreen_label
        }) : c.createElement(a.x, {
          symbolType: a.B.ICONS_PLAYER_FULLSCREEN,
          "aria-label": i.m.video_ad_controller_fullscreen_label
        })))
      }
      )(n, m, u), c.createElement("div", {
        className: "com-video_ad-VideoAdController__volume"
      }, c.createElement(o.f, {
        value: e,
        onChange: d
      })))
    }
    ,
    26273: (e, t, n) => {
      n.d(t, {
        Ku: () => s,
        LO: () => c,
        yP: () => d
      });
      var o = n(54106)
        , i = n(72391)
        , a = n(30395)
        , r = n.n(a)
        , l = n(22155);
      let s = function (e) {
        return e.NORMAL = "NORMAL",
          e.WIDE_MODE = "WIDE_MODE",
          e.WITH_SIDE_PANEL = "WITH_SIDE_PANEL",
          e.WITH_SCHEDULE_GROUP_MODULE = "WITH_SCHEDULE_GROUP_MODULE",
          e
      }({});
      const c = {
        DEFAULT: "default",
        WITH_TICKET_PANEL: "withTicketPanel",
        WITH_PLAN_APPEAL_BANNER: "withPlanAppealBanner"
      }
        , d = ({ children: e, designType: t, belowPlayerSize: n = c.DEFAULT }) => {
          const a = l.useContext(o.mh) === i.b.MOBILE;
          return l.useEffect(() => {
            if ("function" == typeof Event)
              window.dispatchEvent(new Event("resize"));
            else {
              const e = document.createEvent("Event");
              e.initEvent("resize", !1, !1),
                window.dispatchEvent(e)
            }
          }
            , [t]),
            a ? l.createElement(l.Fragment, null, e) : l.createElement("div", {
              className: r()("com-vod-VODResponsiveMainContent", {
                "com-vod-VODResponsiveMainContent--wide-mode": t === s.WIDE_MODE,
                "com-vod-VODResponsiveMainContent--with-side-panel": t === s.WITH_SIDE_PANEL,
                "com-vod-VODResponsiveMainContent--with-schedule-group-module": t === s.WITH_SCHEDULE_GROUP_MODULE,
                "com-vod-VODResponsiveMainContent--with-ticket-panel": n === c.WITH_TICKET_PANEL,
                "com-vod-VODResponsiveMainContent--with-partner-service-banner": n === c.WITH_PLAN_APPEAL_BANNER
              })
            }, l.createElement("div", {
              className: "com-vod-VODResponsiveMainContent__container"
            }, l.createElement("div", {
              className: "com-vod-VODResponsiveMainContent__inner"
            }, e)))
        }
    }
    ,
    30452: (e, t, n) => {
      n.d(t, {
        n: () => i
      });
      var o = n(22155);
      const i = ({ duration: e, currentPosition: t }) => {
        const n = 0 === t || 0 === e ? 0 : t / e * 100;
        return o.createElement("div", {
          className: "com-video_ad-VideoAdProgressBar"
        }, o.createElement("div", {
          className: "com-video_ad-VideoAdProgressBar__progress_current",
          style: {
            width: `${n}%`
          }
        }))
      }
    }
    ,
    33154: (e, t, n) => {
      n.d(t, {
        K: () => o.Ku,
        y: () => o.yP
      });
      var o = n(26273)
    }
    ,
    37544: (e, t, n) => {
      n.d(t, {
        i: () => l
      });
      var o = n(30395)
        , i = n.n(o)
        , a = n(22155)
        , r = n(70316);
      const l = ({ className: e = "", container: t, forwardedRef: n, isShown: o, leftJSX: l, rightJSX: s, seekbarJSX: c }) => (0,
        r.createPortal)(a.createElement("div", {
          ref: n,
          className: i()("com-vod-VideoControlBar", e, {
            "com-vod-VideoControlBar--fade-in": o,
            "com-vod-VideoControlBar--fade-out": !o
          })
        }, a.createElement("div", {
          className: "com-vod-VideoControlBar__seekbar"
        }, c), a.createElement("div", {
          className: "com-vod-VideoControlBar__left"
        }, l), a.createElement("div", {
          className: "com-vod-VideoControlBar__right"
        }, s)), t)
    }
    ,
    41754: (e, t, n) => {
      n.d(t, {
        S: () => l
      });
      var o = n(93636)
        , i = n(68e3)
        , a = n(17596)
        , r = n(22155);
      const l = ({ linkText: e, url: t, buttonText: n, onClickLink: l, onInViewImpression: s }) => {
        const c = (0,
          o.T)(s, []);
        return r.createElement("div", {
          className: "com-m-VODExternalLinkBlock",
          ref: c
        }, r.createElement("p", {
          className: "com-m-VODExternalLinkBlock__text"
        }, e), r.createElement("div", {
          className: "com-m-VODExternalLinkBlock__link-wrapper"
        }, r.createElement(a.tA, {
          size: a.Mp.NORMAL,
          href: t,
          onClick: l
        }, r.createElement("span", {
          className: "com-m-VODExternalLinkBlock__link"
        }, n || i.h.external_link_block_button_text))))
      }
    }
    ,
    48848: (e, t, n) => {
      n.d(t, {
        C: () => j
      });
      var o = n(30685)
        , i = n(8922)
        , a = n(85668)
        , r = n(43083)
        , l = n(86319)
        , s = n(22155);
      const c = ({ featureModule: e, designType: t, onClickFeatureListItem: n, onImpressionFeatureListItem: o, onTryToAddToMyListOnFeatureListItem: i, onTryToDeleteFromMyListOnFeatureListItem: a }) => {
        const r = (0,
          s.useCallback)(({ abemaHash: e, isFirstView: t, positionIndex: o }) => {
            n({
              abemaHash: e,
              isFirstView: t,
              positionIndex: o,
              isHorizontalScroll: !1
            })
          }
            , [n])
          , c = (0,
            s.useCallback)(({ abemaHash: e, isFirstView: t, positionIndex: n }) => {
              o({
                abemaHash: e,
                isFirstView: t,
                positionIndex: n,
                isHorizontalScroll: !1
              })
            }
              , [o])
          , d = (0,
            s.useCallback)(({ contentId: e, contentType: t, abemaHash: n, isFirstView: o, positionIndex: a }) => {
              i({
                contentId: e,
                contentType: t,
                abemaHash: n,
                isFirstView: o,
                positionIndex: a,
                isHorizontalScroll: !1
              })
            }
              , [i])
          , m = (0,
            s.useCallback)(({ contentId: e, contentType: t, abemaHash: n, isFirstView: o, positionIndex: i }) => {
              a({
                contentId: e,
                contentType: t,
                abemaHash: n,
                isFirstView: o,
                positionIndex: i,
                isHorizontalScroll: !1
              })
            }
              , [a]);
        return s.createElement(l.w, {
          featureModule: e,
          designType: t,
          onClickFeatureListItem: r,
          onImpressionFeatureListItem: c,
          onTryToAddToMyListOnFeatureListItem: d,
          onTryToDeleteFromMyListOnFeatureListItem: m
        })
      }
        , d = ({ featureModule: e, viewCountMap: t, onClickListItem: n, onImpressionListItem: o, onTryToAddToMyListOnListItem: i, onTryToDeleteFromMyListOnListItem: l }) => null === e ? s.createElement(r.x, {
          designType: a.C.LARGE
        }) : s.createElement(c, {
          featureModule: e,
          viewCountMap: t,
          designType: a.C.LARGE,
          onImpressionFeatureListItem: o,
          onClickFeatureListItem: n,
          onTryToAddToMyListOnFeatureListItem: i,
          onTryToDeleteFromMyListOnFeatureListItem: l
        });
      function m({ genreId: e, subGenreId: t, subSubGenreId: n, titleId: o, seasonId: i, programId: a }) {
        return (0,
          s.useMemo)(() => null === e ? null : {
            spotGroupId: "vod_episode_slot_bottom_web_pc",
            spotKey: [e, t, n, o].filter(e => null != e).join(","),
            seriesId: o ?? void 0,
            seasonId: i ?? void 0,
            programId: a ?? void 0
          }, [e, t, n, o, i, a])
      }
      var u = n(80611)
        , _ = n(30395)
        , p = n.n(_);
      const v = ({ shownPlayerAside: e, playerSection: t, playerAsideSection: n, detailSection: o, contentListSection: a, featureModuleNextToPlayer: r, viewCountMap: l, genreId: c, subGenreId: _, subSubGenreId: v, programId: b, titleId: y, seasonId: I, hideFeatureAreaNextToPlayer: f = !1, playerAsideDesignType: E, onClickFeatureAreaListItem: h, onImpressionFeatureAreaListItem: C, onTryToAddToMyListOnFeatureAreaListItem: g, onTryToDeleteFromMyListOnFeatureAreaListItem: T }) => {
        const w = m({
          genreId: c,
          subGenreId: _,
          subSubGenreId: v,
          titleId: y,
          seasonId: I,
          programId: b
        });
        return s.createElement("div", {
          className: "com-vod-VODRecommendedContentsContainerView"
        }, s.createElement("div", {
          className: "com-vod-VODRecommendedContentsContainerView__above"
        }, s.createElement("div", {
          className: p()("com-vod-VODRecommendedContentsContainerView__player-and-details", {
            "com-vod-VODRecommendedContentsContainerView__player-and-details--without-player-aside": !e
          })
        }, s.createElement("div", {
          className: "com-vod-VODRecommendedContentsContainerView__player"
        }, t), s.createElement("div", {
          className: "com-vod-VODRecommendedContentsContainerView__details"
        }, o), s.createElement("div", {
          className: "com-vod-VODRecommendedContentsContainerView__episode-list"
        }, a)), e ? s.createElement("div", {
          className: p()("com-vod-VODRecommendedContentsContainerView__player-aside-recommended", {
            "com-vod-VODRecommendedContentsContainerView__player-aside-recommended--wide": E === u.K.WIDE,
            "com-vod-VODRecommendedContentsContainerView__player-aside-recommended--narrow": E === u.K.NARROW
          })
        }, n, f ? null : s.createElement(d, {
          featureModule: r,
          viewCountMap: l,
          onClickListItem: h,
          onImpressionListItem: C,
          onTryToAddToMyListOnListItem: g,
          onTryToDeleteFromMyListOnListItem: T
        })) : null), null !== w ? s.createElement(i.A, {
          moduleParams: w
        }) : null)
      }
        , b = ({ shownPlayerAside: e, playerSection: t, playerAsideSection: n, detailSection: o, contentListSection: a, featureModuleNextToPlayer: r, viewCountMap: l, genreId: c, subGenreId: u, subSubGenreId: _, programId: v, titleId: b, seasonId: y, isWideMode: I, onClickFeatureAreaListItem: f, onImpressionFeatureAreaListItem: E, onTryToAddToMyListOnFeatureAreaListItem: h, onTryToDeleteFromMyListOnFeatureAreaListItem: C }) => {
          const g = m({
            genreId: c,
            subGenreId: u,
            subSubGenreId: _,
            titleId: b,
            seasonId: y,
            programId: v
          });
          return s.createElement("div", {
            className: "com-vod-VODRecommendedContentsContainerViewEpisode"
          }, s.createElement("div", {
            className: p()("com-vod-VODRecommendedContentsContainerViewEpisode__above", {
              "com-vod-VODRecommendedContentsContainerViewEpisode__above--show-player-aside": e
            })
          }, s.createElement("div", {
            className: p()("com-vod-VODRecommendedContentsContainerViewEpisode__player", {
              "com-vod-VODRecommendedContentsContainerViewEpisode__player--wide-mode": I
            })
          }, t), s.createElement("div", {
            className: "com-vod-VODRecommendedContentsContainerViewEpisode__details-and-episode-list"
          }, s.createElement("div", {
            className: "com-vod-VODRecommendedContentsContainerViewEpisode__details"
          }, o), s.createElement("div", {
            className: "com-vod-VODRecommendedContentsContainerViewEpisode__episode-list"
          }, a)), e ? s.createElement("div", {
            className: p()("com-vod-VODRecommendedContentsContainerViewEpisode__player-aside-recommended", {
              "com-vod-VODRecommendedContentsContainerViewEpisode__player-aside-recommended--wide-mode": I
            })
          }, n, !0 === I ? null : s.createElement(d, {
            featureModule: r,
            viewCountMap: l,
            onClickListItem: f,
            onImpressionListItem: E,
            onTryToAddToMyListOnListItem: h,
            onTryToDeleteFromMyListOnListItem: C
          })) : null), null !== g ? s.createElement(i.A, {
            moduleParams: g
          }) : null)
        }
        ;
      var y = n(19584)
        , I = n(27603)
        , f = n(9972);
      var E = n(69174)
        , h = n(62817)
        , C = n(41390)
        , g = n(39019);
      var T = n(60015)
        , w = n(50384)
        , S = n(14291);
      function k({ featureAreaStore: e, createEpisodeAudienceListObservable: t }) {
        return e.featureAreaModules$.pipe((0,
          T.Z)(({ result: e }) => {
            if (e.ok) {
              const n = e.val.modules.reduce((e, t) => e.concat(t.items.map(e => e.id)), []);
              return t({
                episodeIdList: n
              })
            }
            return (0,
              w.of)(e)
          }
          ), (0,
            S.T)(e => new Map((e.val?.audiences ?? []).map(e => [e.sourceId, e.viewCount]))))
      }
      var O = n(4780)
        , L = n(68702)
        , N = n(99064);
      var P = n(77942);
      function A(e) {
        const t = e.filter(P.t)
          , n = t.at(0)
          , o = t.filter(e => e.itemUiType === n?.itemUiType).flatMap(e => e.items).filter(e => {
            return t = e.contentType,
              null !== (0,
                N.o)(t);
            var t
          }
          ).slice(0, 8);
        return null != n ? new L.z({
          ...n,
          items: o
        }) : null
      }
      var V = n(68761);
      var D = n(16019)
        , R = n(64307)
        , F = n(10261);
      function x(e, t, n) {
        return (t = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || !e)
              return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t || "default");
              if ("object" != typeof o)
                return o;
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
      class M extends E.VA {
        constructor() {
          super(E.oD.SINGLE),
            x(this, "_subscription", void 0),
            x(this, "_featureAreaContext", void 0),
            this._subscription = null,
            this._featureAreaContext = null
        }
        get initialState() {
          return {
            featureModuleNextToPlayer: null,
            viewCountMap: new Map
          }
        }
        activate() {
          this._featureAreaContext = new C.P,
            this._featureAreaContext.activate();
          const e = new R.yU;
          e.add(function ({ featureAreaStore: e, viewCountMap$: t, store: n }) {
            return (0,
              V.z)([e.featureAreaModules$.pipe((0,
                S.T)(({ result: e }) => A(e.val?.modules ?? []))), t]).subscribe({
                  next: ([e, t]) => {
                    n.set({
                      featureModuleNextToPlayer: e,
                      viewCountMap: t
                    })
                  }
                  ,
                  error: O.H
                })
          }({
            featureAreaStore: this._featureAreaContext.store,
            viewCountMap$: k({
              featureAreaStore: this._featureAreaContext.store,
              createEpisodeAudienceListObservable: e => (0,
                F.H)((0,
                  g.VS)({
                    sourceType: D.k.PROGRAM,
                    sourceIds: e.episodeIdList
                  }))
            }),
            store: this
          })),
            this._subscription = e
        }
        deactivate() {
          this._featureAreaContext?.destroy(),
            this._featureAreaContext = null,
            this._subscription?.unsubscribe(),
            this._subscription = null
        }
        initialize({ genreId: e, subGenreId: t, subSubGenreId: n, programId: o, titleId: i, seasonId: a, skipFetchingFeatureArea: r = !1 }) {
          this.set(this.initialState),
            r || (this.activate(),
              this._featureAreaContext?.intent.fetchFeatureAreaModules({
                spotGroupId: "vod_episode_slot",
                limit: 5,
                spotKey: [e, t, n, i].filter(e => null != e).join(","),
                seriesId: i ?? void 0,
                seasonId: a ?? void 0,
                programId: o ?? void 0,
                include: ["liveEvent"]
              }, {
                shouldInitialize: !0
              }))
        }
        fetch() { }
      }
      let H;
      (0,
        h.sd)(() => {
          H = new M
        }
        );
      const B = () => H;
      function $() {
        return $ = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
        }
          ,
          $.apply(null, arguments)
      }
      const G = ({ shownPlayerAside: e, playerSection: t, playerAsideSection: n, detailSection: o, contentListSection: i, genreId: a, subGenreId: r, subSubGenreId: l, programId: c, titleId: d, seasonId: m, hideFeatureAreaNextToPlayer: _ = !1, featureModuleNextToPlayer: p, viewCountMap: E, playerAsideDesignType: h = u.K.WIDE, isWideMode: C = !1, isEpisode: g = !1 }) => {
        s.useEffect(() => (void 0 !== a && B().initialize({
          genreId: a,
          programId: c ?? null,
          subGenreId: r ?? null,
          subSubGenreId: l ?? null,
          titleId: d ?? null,
          seasonId: m ?? null,
          skipFetchingFeatureArea: _
        }),
          () => {
            B().deactivate()
          }
        ), [a, c, d, _, r, l, m]);
        const T = s.useCallback(({ abemaHash: e, isFirstView: t, positionIndex: n, isHorizontalScroll: o }) => {
          !function ({ abemaHash: e, isFirstView: t, positionIndex: n, verticalPosition: o, platformVerticalPosition: i, isHorizontalScroll: a }) {
            f.h.setDataLayer4GTM((0,
              I.h)({
                event: "click_module_via_server",
                abema_hash: e,
                is_firstview: t,
                position_index: n,
                vertical_position: String(o),
                platform_vertical_position: String(i),
                is_horizontal_scroll: a
              }))
          }({
            abemaHash: e,
            isFirstView: t,
            isHorizontalScroll: o,
            positionIndex: n,
            verticalPosition: 0,
            platformVerticalPosition: 0
          })
        }
          , [])
          , w = s.useCallback(({ abemaHash: e, isFirstView: t, positionIndex: n, isHorizontalScroll: o }) => {
            !function ({ abemaHash: e, isFirstView: t, positionIndex: n, verticalPosition: o, platformVerticalPosition: i, isHorizontalScroll: a }) {
              f.h.setDataLayer4GTM((0,
                I.h)({
                  event: "view_module_via_server",
                  abema_hash: e,
                  is_firstview: t,
                  position_index: n,
                  vertical_position: String(o),
                  platform_vertical_position: String(i),
                  is_horizontal_scroll: a
                }))
            }({
              abemaHash: e,
              isFirstView: t,
              isHorizontalScroll: o,
              positionIndex: n,
              verticalPosition: 0,
              platformVerticalPosition: 0
            })
          }
            , [])
          , S = s.useCallback(({ abemaHash: e, isFirstView: t, positionIndex: n, isHorizontalScroll: o, contentId: i, contentType: a }) => {
            !function ({ abemaHash: e, isFirstView: t, positionIndex: n, platformVerticalPosition: o, verticalPosition: i, isHorizontalScroll: a, myListParams: r }) {
              f.h.setDataLayer4GTM((0,
                I.h)({
                  event: "add_my_list_module",
                  abema_hash: e,
                  position_index: n,
                  is_firstview: t,
                  vertical_position: String(i),
                  platform_vertical_position: String(o),
                  is_horizontal_scroll: a,
                  my_list_content_id: r.contentId,
                  my_list_content_type: y.D[r.contentType]
                }))
            }({
              abemaHash: e,
              isFirstView: t,
              isHorizontalScroll: o,
              positionIndex: n,
              verticalPosition: 0,
              platformVerticalPosition: 0,
              myListParams: {
                contentId: i,
                contentType: a
              }
            })
          }
            , [])
          , k = s.useCallback(({ abemaHash: e, isFirstView: t, positionIndex: n, isHorizontalScroll: o, contentId: i, contentType: a }) => {
            !function ({ abemaHash: e, isFirstView: t, positionIndex: n, platformVerticalPosition: o, verticalPosition: i, isHorizontalScroll: a, myListParams: r }) {
              f.h.setDataLayer4GTM((0,
                I.h)({
                  event: "cancel_my_list_module",
                  abema_hash: e,
                  position_index: n,
                  is_firstview: t,
                  vertical_position: String(i),
                  platform_vertical_position: String(o),
                  is_horizontal_scroll: a,
                  my_list_content_id: r.contentId,
                  my_list_content_type: y.D[r.contentType]
                }))
            }({
              abemaHash: e,
              isFirstView: t,
              isHorizontalScroll: o,
              positionIndex: n,
              verticalPosition: 0,
              platformVerticalPosition: 0,
              myListParams: {
                contentId: i,
                contentType: a
              }
            })
          }
            , [])
          , O = {
            playerSection: t,
            playerAsideSection: n,
            detailSection: o,
            contentListSection: i,
            shownPlayerAside: e,
            featureModuleNextToPlayer: p,
            viewCountMap: E,
            genreId: a ?? null,
            subGenreId: r ?? null,
            subSubGenreId: l ?? null,
            titleId: d ?? null,
            seasonId: m ?? null,
            programId: c ?? null,
            onClickFeatureAreaListItem: T,
            onImpressionFeatureAreaListItem: w,
            onTryToAddToMyListOnFeatureAreaListItem: S,
            onTryToDeleteFromMyListOnFeatureAreaListItem: k
          };
        return g ? s.createElement(b, $({}, O, {
          isWideMode: C
        })) : s.createElement(v, $({}, O, {
          hideFeatureAreaNextToPlayer: _,
          playerAsideDesignType: h
        }))
      }
        , z = s.memo(G)
        , j = (0,
          o.Q)(z, B)
    }
    ,
    49968: (e, t, n) => {
      n.d(t, {
        N: () => o,
        w: () => i
      });
      const o = "5hsmVZcEB"
        , i = 5
    }
    ,
    62281: (e, t, n) => {
      n.d(t, {
        m: () => o
      });
      const o = (0,
        n(80883).Y)({
          video_ad_single_ad_text: "CM",
          video_ad_multiple_ads_text: "{{total}}本中{{current}}本目のCM",
          video_ad_skip_text: "スキップ",
          video_ad_controller_fullscreen_label: "フルスクリーンにする",
          video_ad_controller_miniscreen_label: "フルスクリーンを解除する",
          video_ad_controller_miniscreen_tooltip_label: "ブラウザ表示",
          video_ad_controller_fullscreen_tooltip_label: "フルスクリーン",
          video_ad_controller_fullscreen_in_browser_label: "ワイド表示にする",
          video_ad_controller_miniscreen_in_browser_label: "デフォルト表示にする",
          video_ad_controller_miniscreen_in_browser_tooltip_label: "デフォルト表示",
          video_ad_controller_fullscreen_in_browser_tooltip_label: "ワイド表示",
          video_ad_mini_player_survey: "ミニプレイヤー時は\nアンケートに回答できません"
        })
    }
    ,
    62464: (e, t, n) => {
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
    }
    ,
    72517: (e, t, n) => {
      n.d(t, {
        W: () => D,
        G: () => R
      });
      var o = n(98184)
        , i = n(18182)
        , a = n(4780);
      function r(e, t, n) {
        return (t = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || !e)
              return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t || "default");
              if ("object" != typeof o)
                return o;
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
      class l extends Error {
        constructor(e) {
          super(void 0, e),
            Object.setPrototypeOf(this, l.prototype),
            Error.captureStackTrace?.(this, l)
        }
      }
      class s extends Error {
        constructor(e) {
          super(),
            r(this, "value", void 0),
            Object.setPrototypeOf(this, s.prototype),
            Error.captureStackTrace?.(this, s),
            this.value = e
        }
      }
      var c = n(59717)
        , d = n(64307)
        , m = n(5252)
        , u = n(62141)
        , _ = n(88677)
        , p = n(74843)
        , v = n(86696);
      function b(e, t, n) {
        return (t = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || !e)
              return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t || "default");
              if ("object" != typeof o)
                return o;
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
      class y {
        constructor({ playbackStarted$: e, playbackCompleted$: t, paused$: n, gateway: o, repository: i }) {
          b(this, "_playbackStarted$", void 0),
            b(this, "_playbackCompleted$", void 0),
            b(this, "_paused$", void 0),
            b(this, "_gateway", void 0),
            b(this, "_repository", void 0),
            this._playbackStarted$ = e,
            this._playbackCompleted$ = t,
            this._paused$ = n,
            this._gateway = o,
            this._repository = i
        }
        activate() {
          const e = new d.yU;
          return e.add(function ({ playbackStarted$: e, gateway: t, repository: n }) {
            return e.pipe((0,
              p.n)(() => t.reportPlaybackContinued())).subscribe({
                next: e => {
                  n.writePollingResult(e)
                }
                ,
                error: e => {
                  const t = (0,
                    c.KC)(new l({
                      cause: e
                    }));
                  n.writePollingResult(t)
                }
              })
          }({
            playbackStarted$: this._playbackStarted$,
            gateway: this._gateway,
            repository: this._repository
          })),
            e.add(function ({ playbackCompleted$: e, paused$: t, gateway: n, repository: o }) {
              return o.pollingInterval$.pipe((0,
                p.n)(n => (0,
                  m.Y)((0,
                    i.l6)(n)).pipe((0,
                      v.Q)((0,
                        u.h)(e, t)))), (0,
                          p.n)(() => n.reportPlaybackContinued())).subscribe({
                            next: e => {
                              o.writePollingResult(e)
                            }
                            ,
                            error: e => {
                              const t = (0,
                                c.KC)(new l({
                                  cause: e
                                }));
                              o.writePollingResult(t)
                            }
                          })
            }({
              playbackCompleted$: this._playbackCompleted$,
              paused$: this._paused$,
              gateway: this._gateway,
              repository: this._repository
            })),
            e.add(function ({ playbackCompleted$: e, gateway: t }) {
              const n = new d.yU(() => {
                t.reportPlaybackAborted({
                  isPageDismissal: !1
                }).catch(a.H)
              }
              );
              return n.add((0,
                u.h)(e, (0,
                  _.R)(window, "pagehide")).pipe((0,
                    p.n)(e => t.reportPlaybackAborted({
                      isPageDismissal: e instanceof Event
                    }))).subscribe({
                      error: a.H
                    })),
                n
            }({
              playbackCompleted$: this._playbackCompleted$,
              gateway: this._gateway
            })),
            e
        }
      }
      const I = {
        fromJSON: e => ({
          interval: f(e.interval) ? globalThis.Number(e.interval) : 0,
          max: f(e.max) ? globalThis.Number(e.max) : 0
        }),
        toJSON(e) {
          const t = {};
          return 0 !== e.interval && (t.interval = Math.round(e.interval)),
            0 !== e.max && (t.max = Math.round(e.max)),
            t
        }
      };
      function f(e) {
        return null != e
      }
      var E = n(12857)
        , h = n(80298)
        , C = n(5209)
        , g = n(29376)
        , T = n(42525)
        , w = n(88999);
      function S(e, t, n) {
        return (t = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || !e)
              return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t || "default");
              if ("object" != typeof o)
                return o;
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
      class k {
        constructor({ contentType: e, contentId: t }) {
          S(this, "_contentType", void 0),
            S(this, "_contentId", void 0),
            this._contentType = e,
            this._contentId = t
        }
        async reportPlaybackContinued() {
          try {
            const e = (0,
              E.A)("/v1/video/streams/:type/:id", {
                type: this._contentType,
                id: this._contentId
              })
              , t = (0,
                T.K)({
                  path: e,
                  method: "POST"
                })
              , n = await (0,
                w.GO)(t);
            switch (n.status) {
              case C.OK:
                {
                  const e = await n.json()
                    , t = I.fromJSON(e);
                  return (0,
                    c.TC)(t)
                }
              case C.j7:
                {
                  const e = await n.json()
                    , t = I.fromJSON(e);
                  return (0,
                    c.KC)(new s(t))
                }
              default:
                {
                  const e = new h.j({
                    status: n.status,
                    url: n.url
                  });
                  return (0,
                    c.KC)(new l({
                      cause: e
                    }))
                }
            }
          } catch (e) {
            return (0,
              c.KC)(new l({
                cause: e
              }))
          }
        }
        reportPlaybackAborted(e = {
          isPageDismissal: !1
        }) {
          try {
            const t = (0,
              E.A)("/v1/video/streams/:type/:id", {
                type: this._contentType,
                id: this._contentId
              })
              , n = (0,
                T.K)({
                  path: t,
                  method: "DELETE"
                });
            return (e.isPageDismissal ? (0,
              g.u)(n, {
                body: null
              }) : (0,
                w.GO)(n)).then(e => {
                  if (e.status === C.iq)
                    return (0,
                      c.TC)(void 0);
                  {
                    const t = new h.j({
                      status: e.status,
                      url: e.url
                    });
                    return (0,
                      c.KC)(new l({
                        cause: t
                      }))
                  }
                }
                )
          } catch (e) {
            return Promise.resolve((0,
              c.KC)(new l({
                cause: e
              })))
          }
        }
      }
      var O = n(63638)
        , L = n(14291)
        , N = n(57011);
      function P(e, t, n) {
        return (t = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || !e)
              return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t || "default");
              if ("object" != typeof o)
                return o;
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
      class A {
        constructor() {
          P(this, "_pollingResult$", void 0),
            this._pollingResult$ = new O.B
        }
        get pollingInterval$() {
          return this._pollingResult$.pipe((0,
            L.T)(e => e.ok ? e.val.interval : e.err instanceof s ? e.err.value.interval : e.err instanceof l ? 150 : null), (0,
              N.p)(e => null !== e))
        }
        get pollingResult$() {
          return this._pollingResult$.asObservable()
        }
        writePollingResult(e) {
          this._pollingResult$.next(e)
        }
      }
      function V(e, t, n) {
        return (t = function (e) {
          var t = function (e, t) {
            if ("object" != typeof e || !e)
              return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t || "default");
              if ("object" != typeof o)
                return o;
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
      const D = {
        TIMESHIFT: "timeshift",
        SVOD: "svod",
        PSSVOD: "pssvod",
        LE_PREMIUM: "le_premium",
        LE_PPV: "le_ppv",
        LE_PARTNER_SERVICE_SUBSCRIPTION: "le_partner_service_subscription"
      };
      class R {
        constructor({ contentType: e, contentId: t, playbackStarted$: n, playbackCompleted$: o, paused$: i }) {
          V(this, "_subscription", void 0),
            V(this, "_epic", void 0),
            V(this, "_store", void 0),
            this._subscription = null;
          const a = function ({ contentType: e, contentId: t }) {
            return new k({
              contentType: e,
              contentId: t
            })
          }({
            contentType: e,
            contentId: t
          })
            , r = new A;
          this._epic = new y({
            playbackStarted$: n,
            playbackCompleted$: o,
            paused$: i,
            gateway: a,
            repository: r
          }),
            this._store = function (e) {
              return {
                get limitViolationStatus$() {
                  return e.pollingResult$.pipe((0,
                    N.p)(e => e.ok || !e.ok && e.err instanceof s), (0,
                      L.T)(e => {
                        if (e.ok)
                          return (0,
                            c.TC)(void 0);
                        const t = e.err.value.max;
                        return (0,
                          c.KC)({
                            maxConnections: t
                          })
                      }
                      ))
                }
              }
            }(r)
        }
        activate() {
          if (null !== this._subscription)
            throw new Error(o.A$);
          this._subscription = this._epic.activate()
        }
        destroy() {
          if (null === this._subscription)
            throw new Error(o.i$);
          this._subscription.unsubscribe(),
            this._subscription = null
        }
        get store() {
          return this._store
        }
      }
    }
    ,
    76450: (e, t, n) => {
      n.d(t, {
        c: () => s
      });
      var o = n(65494)
        , i = n(7992)
        , a = n(7455)
        , r = n(91926)
        , l = n(22155);
      const s = ({ disabled: e, isPlayback: t, isPlaybackComplete: n, hasNoFurtherContentDuringChasePlay: s, onClickPlayback: c, onClickPause: d, onClickReplay: m }) => n ? l.createElement(i.E, {
        content: a.I.player_vod_controllers_play_tooltip_label,
        disabled: e,
        isLeftEdge: !0
      }, l.createElement(o.b, {
        disabled: e,
        icon: l.createElement(r.x, {
          symbolType: r.B.ICONS_PLAYER_REPLAY,
          "aria-label": "",
          "aria-hidden": !0
        }),
        onClick: () => m(0)
      })) : t ? l.createElement(i.E, {
        content: a.I.player_vod_controllers_pause_tooltip_label,
        disabled: e,
        isLeftEdge: !0
      }, l.createElement(o.b, {
        disabled: e,
        icon: l.createElement(r.x, {
          symbolType: r.B.ICONS_ACTION_DOWNLOAD_PAUSE,
          "aria-label": "",
          "aria-hidden": !0
        }),
        onClick: d
      })) : s ? l.createElement(i.E, {
        content: a.I.player_vod_controllers_play_tooltip_label,
        disabled: !0,
        isLeftEdge: !0
      }, l.createElement(o.b, {
        disabled: !0,
        icon: l.createElement(r.x, {
          symbolType: r.B.ICONS_PLAYER_PLAY,
          "aria-label": "",
          "aria-hidden": !0
        })
      })) : l.createElement(i.E, {
        content: a.I.player_vod_controllers_play_tooltip_label,
        disabled: e,
        isLeftEdge: !0
      }, l.createElement(o.b, {
        disabled: e,
        icon: l.createElement(r.x, {
          symbolType: r.B.ICONS_PLAYER_PLAY,
          "aria-label": "",
          "aria-hidden": !0
        }),
        onClick: c
      }))
    }
    ,
    78380: (e, t, n) => {
      n.d(t, {
        e: () => k
      });
      var o = n(26950)
        , i = n(28818)
        , a = n(38983)
        , r = n(55985)
        , l = n(62817)
        , s = n(16937)
        , c = n(56427);
      const d = "true"
        , m = "false"
        , u = new Map;
      function _() {
        return "true" === function () {
          const e = (0,
            s.sD)()
            , t = (0,
              c.W)({
                userId: e.currentUser().id,
                featureId: r.$k
              })
            , n = u.get(t);
          if (null != n)
            return n;
          const o = e.stringVariation(r.$k, r.fm);
          return u.set(t, o),
            (0,
              a.uk)({
                featureId: r.$k,
                value: o
              }),
            o
        }() ? d : m
      }
      (0,
        l.sd)(() => () => u.clear());
      var p = n(22155);
      const v = ({ loadingProgressResultOfBanner: e, onClickBanner: t, onImpressionBanner: n }) => {
        const a = (0,
          o.DE)();
        if (e.isLoading || !a)
          return p.createElement("div", {
            className: "com-feature-area-FeatureOrganizationPlanBannerContainerView-placeholder"
          });
        if (_() === m)
          return null;
        const { value: r } = e;
        if (!r.ok)
          return null;
        const l = r.val.at(0);
        if (null == l)
          return null;
        const s = l.items.at(0);
        return null == s ? null : p.createElement("div", {
          className: "com-feature-area-FeatureOrganizationPlanBannerContainerView"
        }, p.createElement(i.n, {
          featureItem: s,
          itemIndex: 0,
          onClick: t,
          onView: n
        }))
      }
        ;
      var b = n(98184)
        , y = n(4780)
        , I = n(41390)
        , f = n(33216);
      var E = n(59717)
        , h = n(69384)
        , C = n(14291);
      function g({ moduleParams: e }) {
        const [t, n] = (0,
          p.useState)({
            isLoading: !0
          })
          , o = (0,
            p.useRef)(!1);
        return (0,
          p.useEffect)(() => {
            o.current || ((0,
              b.G5)(new I.P, ({ intent: t, store: n }) => (t.fetchFeatureAreaModules(e, {
                shouldInitialize: !0
              }),
                (0,
                  h._)(n.featureAreaModules$.pipe((0,
                    C.T)(({ result: e }) => e.ok ? (0,
                      E.TC)(e.val.modules.filter(e => e.itemUiType === f.s.BANNER)) : e))))).then(e => {
                        n({
                          isLoading: !1,
                          value: e
                        })
                      }
                      ).catch(y.H),
              o.current = !0)
          }
            , [e]),
          t
      }
      var T = n(27603)
        , w = n(9972);
      function S({ moduleParams: e }) {
        const t = g({
          moduleParams: e
        })
          , n = (0,
            p.useCallback)(({ abemaHash: e }) => {
              !function ({ abemaHash: e }) {
                w.h.setDataLayer4GTM((0,
                  T.h)({
                    event: "click_module_via_server",
                    abema_hash: e,
                    position_index: 0,
                    vertical_position: String(0),
                    platform_vertical_position: String(0)
                  }))
              }({
                abemaHash: e
              })
            }
              , [])
          , o = (0,
            p.useCallback)(({ abemaHash: e }) => {
              !function ({ abemaHash: e }) {
                w.h.setDataLayer4GTM((0,
                  T.h)({
                    event: "view_module_via_server",
                    abema_hash: e,
                    position_index: 0,
                    vertical_position: String(0),
                    platform_vertical_position: String(0)
                  }))
              }({
                abemaHash: e
              })
            }
              , []);
        return p.createElement(v, {
          loadingProgressResultOfBanner: t,
          onClickBanner: n,
          onImpressionBanner: o
        })
      }
      const k = (0,
        p.memo)(S)
    }
    ,
    80611: (e, t, n) => {
      n.d(t, {
        K: () => o
      });
      const o = {
        WIDE: "wide",
        NARROW: "narrow"
      }
    }
    ,
    91968: (e, t, n) => {
      n.d(t, {
        g: () => l
      });
      var o = n(53035)
        , i = n(62281)
        , a = n(4732)
        , r = n(22155);
      const l = ({ isAdLabelShown: e, remainingTime: t, total: n, current: l }) => {
        const s = (0,
          r.useMemo)(() => n > 1 ? (0,
            a.H)(i.m.video_ad_multiple_ads_text, {
              total: String(n),
              current: String(l)
            }) : i.m.video_ad_single_ad_text, [n, l]);
        return r.createElement("div", {
          className: "com-video_ad-AdTimer"
        }, e && r.createElement("p", {
          className: "com-video_ad-AdTimer__cm-label"
        }, s), r.createElement("p", {
          className: "com-video_ad-AdTimer__current-position"
        }, r.createElement("time", {
          dateTime: (0,
            o.N)(t)
        }, (0,
          o.f)(t))))
      }
    }
    ,
    93960: (e, t, n) => {
      n.d(t, {
        S: () => r
      });
      var o = n(9918)
        , i = n(72853)
        , a = n(22155);
      const r = (0,
        a.forwardRef)(function ({ linkTo: e, thumbnailBaseUrl: t, alt: n, onClick: r }, l) {
          return a.createElement("div", {
            className: "com-shared-feature-area-TVBannerItem",
            ref: l
          }, a.createElement(i.N, {
            to: e,
            className: "com-shared-feature-area-TVBannerItem__link",
            designType: i.v.NONE,
            onClick: r
          }, a.createElement(o.d, {
            className: "com-shared-feature-area-TVBannerItem__img",
            alt: n,
            baseUrl: t,
            width: 1280,
            height: 102,
            lazy: !0
          }), a.createElement("div", {
            className: "com-shared-feature-area-TVBannerItem__img-border"
          })))
        })
    }
  };

  (globalThis.__LOADABLE_LOADED_CHUNKS__ = globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([[4999], newObject]);
})();
