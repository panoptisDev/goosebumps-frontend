;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['load-chart-dialog'],
  {
    '8h+f': function (e, t, o) {
      e.exports = {
        container: 'container-1NQ91aze',
        list: 'list-1NQ91aze',
        overlayScrollWrap: 'overlayScrollWrap-1NQ91aze',
        scroll: 'scroll-1NQ91aze',
      }
    },
    EgWQ: function (e, t, o) {
      'use strict'
      o.r(t)
      var n = o('q1tI'),
        i = o.n(n),
        r = o('i8i4'),
        a = o('Eyy1'),
        c = o('YFKU'),
        l = o('Vdly'),
        s = o('qFKp'),
        d = o('g89m'),
        u = o('mrSG'),
        m = o('TSYQ'),
        h = o.n(m),
        f = o('9dlw'),
        g = o('Iksw'),
        b = o('Iivm'),
        v = o('e5nO'),
        p = o('UjII'),
        O = o('HjiN')
      function S(e) {
        const { sortDirection: t, children: o } = e,
          r = Object(u.a)(e, ['sortDirection', 'children']),
          a = Object(n.useRef)(null),
          [c, l] = Object(n.useState)(!1)
        return i.a.createElement(
          'div',
          Object.assign({}, r, {
            ref: a,
            className: m(O.sortButton, 'apply-common-tooltip', 'common-tooltip-vertical'),
            onClick: function () {
              l(!c)
            },
          }),
          i.a.createElement(b.a, { className: O.icon, icon: 0 === t ? v : p }),
          i.a.createElement(
            f.a,
            {
              doNotCloseOn: a.current,
              isOpened: c,
              onClose: () => {
                l(!1)
              },
              position: Object(g.e)(a.current, { verticalMargin: -35, verticalAttachEdge: 0 }),
            },
            o,
          ),
        )
      }
      var j = o('N5tr'),
        y = o('H2qI')
      function E(e) {
        const {
            label: t,
            listSortField: o,
            itemSortField: i,
            listSortDirection: r,
            itemSortDirection: a,
            onClick: c,
            className: l,
          } = e,
          s = Object(u.a)(e, [
            'label',
            'listSortField',
            'itemSortField',
            'listSortDirection',
            'itemSortDirection',
            'onClick',
            'className',
          ]),
          d = i === o && a === r
        return n.createElement(
          j.b,
          Object.assign({}, s, {
            className: m(y.container, l),
            label: n.createElement(
              'div',
              { className: y.labelWrap },
              n.createElement(b.a, { className: y.icon, icon: 0 === a ? v : p }),
              n.createElement('span', { className: y.text }, t),
            ),
            isActive: d,
            onClick: function () {
              c(i, a)
            },
            'data-active': d.toString(),
            'data-sort-field': i,
            'data-sort-direction': 0 === a ? 'asc' : 'desc',
          }),
        )
      }
      var w = o('QHWU'),
        C = o('IePd')
      function F(e) {
        const { children: t, className: o } = e
        return i.a.createElement('div', { className: h()(C.container, o) }, t)
      }
      function D(e) {
        const { title: t } = e
        return i.a.createElement('div', { className: C.title }, t)
      }
      var N = o('ivNn')
      var T = o('iR1w'),
        x = o('cvc5'),
        k = o.n(x),
        R = o('Ialn'),
        I = o('9S1y'),
        M = o('n9z6')
      var L = o('0lNN'),
        A = o('8h+f')
      function B(e) {
        const { className: t, onScroll: o, onTouchStart: r, reference: a, children: c, scrollbar: l } = e,
          d = Object(u.a)(e, ['className', 'onScroll', 'onTouchStart', 'reference', 'children', 'scrollbar']),
          [m, f] = Object(I.a)(),
          [g, b, v, p] = Object(M.a)()
        return (
          Object(n.useEffect)(() => {
            const e = () => {}
            return s.isFF
              ? (document.addEventListener('wheel', () => e),
                () => {
                  document.removeEventListener('wheel', e)
                })
              : e
          }, []),
          i.a.createElement(
            k.a,
            { onMeasure: m },
            i.a.createElement(
              'div',
              Object.assign({}, 'overlay' === l && b, { className: h()(A.container, t), onTouchStart: r, onScroll: o }),
              'overlay' === l && i.a.createElement(L.a, Object.assign({}, g, { className: A.overlayScrollWrap })),
              i.a.createElement(
                T.a,
                Object.assign(
                  {
                    ref: a,
                    className: h()('native' === l ? A.scroll : A.list),
                    outerRef: 'overlay' === l ? v : void 0,
                    onItemsRendered: p,
                    layout: 'vertical',
                    width: '100%',
                    height: (null == f ? void 0 : f.height) || 0,
                    children: c,
                    direction: Object(R.isRtl)() ? 'rtl' : 'ltr',
                  },
                  d,
                ),
              ),
            ),
          )
        )
      }
      var z = o('mNbo')
      var K = o('gM3K'),
        W = o('pPtI'),
        P = o('+EG+'),
        Q = o('fZEr')
      var q = o('gQ5K'),
        _ = o('4kQX'),
        J = o('1LIl'),
        V = o('H9Gg'),
        U = o('iJYK')
      const H = Object(c.t)("Do you really want to delete Chart Layout '{0}' ?")
      const Y = new q.DateFormatter('dd-MM-yyyy'),
        X = new _.TimeFormatter('%h:%m')
      function G(e) {
        const {
            chart: t,
            chartWidgetCollection: o,
            trackEvent: r,
            localFavorites: a,
            onClose: c,
            searchString: l,
            onClickRemove: s,
            onRemoveCanceled: d,
            isSelected: u,
          } = e,
          [m, f] = Object(n.useState)(() => t.active()),
          g = (function (e) {
            const t = e.chartId ? `/chart/${e.chartId}/` : '/chart/',
              o = new URL(t, location.href)
            return (
              e.symbol && o.searchParams.append('symbol', e.symbol),
              e.interval && o.searchParams.append('interval', e.interval),
              e.style && o.searchParams.append('style', e.style),
              Object(z.b)(o.href)
            )
          })({ chartId: t.url }),
          b = Object(n.useContext)(P.b),
          v = Object(n.useMemo)(() => new Date(1e3 * t.modified), [t]),
          p = Object(n.useMemo)(() => Object(V.a)(l), [l]),
          O = h()(U.highlight, m && U.active)
        return (
          Object(n.useEffect)(
            () => (
              o && o.metaInfo.id.subscribe(j),
              () => {
                o && o.metaInfo.id.unsubscribe(j)
              }
            ),
            [],
          ),
          i.a.createElement(K.a, {
            url: g,
            title: i.a.createElement(J.a, { className: O, queryString: l, rules: p, text: t.title }),
            subtitle: i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(J.a, { className: O, queryString: l, rules: p, text: t.description }),
              ' ',
              '(',
              Y.format(v).replace(/-/g, '.'),
              ' ',
              X.formatLocal(v),
              ')',
            ),
            onClick: function (e) {
              0
              t.openAction(), !1
            },
            onClickFavorite: function () {
              0
              const e = Object.assign({}, a)
              e[t.id] ? delete e[t.id] : (e[t.id] = !0)
              t.favoriteAction(e)
            },
            onClickRemove: function () {
              !(function (e, t, o, n) {
                Object(Q.a)(
                  {
                    text: e,
                    onConfirm: ({ dialogClose: e }) => {
                      t(), e()
                    },
                    onClose: () => {
                      o()
                    },
                  },
                  n,
                )
              })(H.format(t.title), S, d, b)
            },
            isFavorite: Boolean(a[t.id]),
            isActive: m,
            isSelected: u,
            'data-name': 'load-chart-dialog-item',
          })
        )
        function S() {
          t.deleteAction().then(() => s(t.id))
        }
        function j(e) {
          f(t.id === e)
        }
      }
      var Z = o('tWVy'),
        $ = o('/3z9')
      var ee = o('YCUu')
      const te = { sortField: 'modified', sortDirection: 1 },
        oe = (function (e) {
          const { paddingTop: t = 0, paddingBottom: o = 0 } = e
          return Object(n.forwardRef)((e, n) => {
            var { style: r } = e,
              a = Object(u.a)(e, ['style'])
            const { height: c = 0 } = r
            return i.a.createElement(
              'div',
              Object.assign(
                {
                  ref: n,
                  style: Object.assign(Object.assign({}, r), {
                    height: (Object(N.isNumber)(c) ? c : parseFloat(c)) + t + o + 'px',
                  }),
                },
                a,
              ),
            )
          })
        })({ paddingBottom: 6 })
      function ne(e) {
        let t
        try {
          t = Object(W.getTranslatedResolution)(e)
        } catch (o) {
          t = e
        }
        return t
      }
      function ie(e) {
        const { charts: t, onClose: o, favoriteChartsService: r, chartWidgetCollection: c } = e,
          [u, m] = Object(n.useState)(''),
          [h, f] = Object(n.useState)(u),
          [g, b] = Object(n.useState)([]),
          v = Object(n.useRef)(null),
          [p, O] = Object(n.useState)(() => r.get()),
          [j, y] = Object(n.useState)(() => l.getJSON('loadChartDialog.viewState', te)),
          C = Object(n.useRef)(null),
          N = Object(n.useRef)(null),
          T = Object(n.useMemo)(
            () => t.map((e) => Object.assign(Object.assign({}, e), { description: `${e.symbol}, ${ne(e.interval)}` })),
            [t],
          )
        Object(n.useEffect)(() => {
          s.CheckMobile.any() || Object(a.ensureNotNull)(C.current).focus()
        }, [])
        const x = Object(n.useRef)()
        Object(n.useEffect)(
          () => (
            (x.current = setTimeout(() => {
              m(h)
            }, 300)),
            () => {
              clearTimeout(x.current)
            }
          ),
          [h],
        ),
          Object(n.useEffect)(
            () => (
              r.getOnChange().subscribe(null, P),
              () => {
                r.getOnChange().unsubscribe(null, P)
              }
            ),
            [],
          )
        const k = Object(n.useCallback)(() => !0, []),
          R = Object(n.useMemo)(() => {
            return Object(V.c)({
              data: T.filter((e) => !g.includes(e.id)).sort(
                ((e = j.sortDirection),
                (t, o) => {
                  if (p[t.id] && !p[o.id]) return -1
                  if (!p[t.id] && p[o.id]) return 1
                  const n = 0 === e ? 1 : -1
                  return 'modified' === j.sortField ? n * (t.modified - o.modified) : n * t.title.localeCompare(o.title)
                }),
              ),
              rules: Object(V.a)(u),
              queryString: u,
              primaryKey: 'title',
              secondaryKey: 'description',
            })
            var e
          }, [u, j, g, p]),
          {
            selectedItemIndex: I,
            setSelectedItemIndex: M,
            handleKeyboardSelection: L,
          } = (function (e, t, o) {
            const [i, r] = Object(n.useState)(-1)
            return (
              Object(n.useEffect)(() => {
                var e
                ;-1 !== i && (null === (e = o.current) || void 0 === e || e.scrollToItem(i))
              }, [i]),
              {
                selectedItemIndex: i,
                setSelectedItemIndex: r,
                handleKeyboardSelection: function (o) {
                  switch (Object($.hashFromEvent)(o)) {
                    case 40:
                      if (i === e - 1) return
                      r(i + 1)
                      break
                    case 38:
                      if (0 === i) return
                      if (-1 === i) return void r(i + 1)
                      r(i - 1)
                      break
                    case 13:
                      t(o)
                  }
                },
              }
            )
          })(
            R.length,
            function (e) {
              const t = R[I]
              if (-1 === I || !t) return
              0
              t.openAction(), !1
            },
            N,
          )
        return i.a.createElement(d.a, {
          ref: v,
          onClose: o,
          onClickOutside: o,
          onKeyDown: L,
          isOpened: !0,
          className: ee.dialog,
          title: window.t('Load layout'),
          dataName: 'load-layout-dialog',
          render: function () {
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(w.a, { reference: C, onChange: z, placeholder: window.t('Search') }),
              i.a.createElement(
                F,
                null,
                i.a.createElement(D, { title: window.t('Layout name') }),
                i.a.createElement(
                  S,
                  {
                    sortDirection: j.sortDirection,
                    title: window.t('Sort by layout name, date changed'),
                    'data-name': 'load-chart-dialog-sort-button',
                  },
                  i.a.createElement(E, {
                    label: window.t('Layout name (A to Z)'),
                    listSortField: j.sortField,
                    itemSortField: 'title',
                    listSortDirection: j.sortDirection,
                    itemSortDirection: 0,
                    onClick: q,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                  i.a.createElement(E, {
                    label: window.t('Layout name (Z to A)'),
                    listSortField: j.sortField,
                    itemSortField: 'title',
                    listSortDirection: j.sortDirection,
                    itemSortDirection: 1,
                    onClick: q,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                  i.a.createElement(E, {
                    label: window.t('Date modified (oldest first)'),
                    listSortField: j.sortField,
                    itemSortField: 'modified',
                    listSortDirection: j.sortDirection,
                    itemSortDirection: 0,
                    onClick: q,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                  i.a.createElement(E, {
                    label: window.t('Date modified (newest first)'),
                    listSortField: j.sortField,
                    itemSortField: 'modified',
                    listSortDirection: j.sortDirection,
                    itemSortDirection: 1,
                    onClick: q,
                    'data-name': 'load-chart-dialog-sort-menu-item',
                  }),
                ),
              ),
              i.a.createElement(B, {
                scrollbar: 'native',
                reference: N,
                itemCount: R.length,
                itemSize: 52,
                className: ee.contentList,
                onScroll: A,
                innerElementType: oe,
                itemKey: (e) => (p[R[e].id] ? 'f_' : '') + R[e].id,
                children: ({ style: e, index: t }) =>
                  i.a.createElement(
                    'div',
                    { style: e },
                    i.a.createElement(G, {
                      chart: R[t],
                      onClose: o,
                      chartWidgetCollection: c,
                      trackEvent: K,
                      onRemoveCanceled: Q,
                      localFavorites: p,
                      searchString: u,
                      onClickRemove: W,
                      isSelected: t === I,
                    }),
                  ),
              }),
            )
          },
          forceCloseOnEsc: k,
        })
        function A() {
          Z.a.fire()
        }
        function z(e) {
          const t = e.currentTarget.value
          f(t), M(-1)
        }
        function K(e) {
          0
        }
        function W(e) {
          b([e, ...g])
        }
        function P(e) {
          O(e)
        }
        function Q() {
          Object(a.ensureNotNull)(v.current).focus()
        }
        function q(e, t) {
          const o = { sortField: e, sortDirection: t }
          y(o), l.setValue('loadChartDialog.viewState', JSON.stringify(o), { forceFlush: !0 }), K()
        }
      }
      var re = o('sQaR')
      o.d(t, 'LoadChartDialogRenderer', function () {
        return ae
      })
      class ae extends re.a {
        constructor(e) {
          super(), (this._options = e)
        }
        show() {
          r.render(
            n.createElement(ie, Object.assign({}, this._options, { onClose: () => this.hide() })),
            this._container,
          ),
            this._setVisibility(!0)
        }
        hide() {
          r.unmountComponentAtNode(this._container), this._setVisibility(!1)
        }
      }
    },
    H2qI: function (e, t, o) {
      e.exports = {
        container: 'container-xPtOXn4t',
        labelWrap: 'labelWrap-xPtOXn4t',
        icon: 'icon-xPtOXn4t',
        text: 'text-xPtOXn4t',
      }
    },
    HjiN: function (e, t, o) {
      e.exports = { sortButton: 'sortButton-Srpxcu6T', icon: 'icon-Srpxcu6T' }
    },
    IePd: function (e, t, o) {
      e.exports = { container: 'container-30_lleAw', title: 'title-30_lleAw' }
    },
    Iksw: function (e, t, o) {
      'use strict'
      o.d(t, 'c', function () {
        return n
      }),
        o.d(t, 'a', function () {
          return i
        }),
        o.d(t, 'd', function () {
          return r
        }),
        o.d(t, 'b', function () {
          return a
        }),
        o.d(t, 'e', function () {
          return s
        })
      var n,
        i,
        r,
        a,
        c = o('Eyy1')
      !(function (e) {
        ;(e[(e.Top = 0)] = 'Top'), (e[(e.Bottom = 1)] = 'Bottom')
      })(n || (n = {})),
        (function (e) {
          ;(e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right')
        })(i || (i = {})),
        (function (e) {
          ;(e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'), (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop')
        })(r || (r = {})),
        (function (e) {
          ;(e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'), (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft')
        })(a || (a = {}))
      const l = {
        verticalAttachEdge: n.Bottom,
        horizontalAttachEdge: i.Left,
        verticalDropDirection: r.FromTopToBottom,
        horizontalDropDirection: a.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
      }
      function s(e, t) {
        return (o, s) => {
          const d = Object(c.ensureNotNull)(e).getBoundingClientRect(),
            {
              verticalAttachEdge: u = l.verticalAttachEdge,
              verticalDropDirection: m = l.verticalDropDirection,
              horizontalAttachEdge: h = l.horizontalAttachEdge,
              horizontalDropDirection: f = l.horizontalDropDirection,
              horizontalMargin: g = l.horizontalMargin,
              verticalMargin: b = l.verticalMargin,
            } = t,
            v = u === n.Top ? -1 * b : b,
            p = h === i.Right ? d.right : d.left,
            O = u === n.Top ? d.top : d.bottom
          return { x: p - (f === a.FromRightToLeft ? o : 0) + g, y: O - (m === r.FromBottomToTop ? s : 0) + v }
        }
      }
    },
    UjII: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 7v13.5M4.5 16.5l4 4 4-4"/></svg>'
    },
    YCUu: function (e, t, o) {
      e.exports = { dialog: 'dialog-1xjtlTJV', contentList: 'contentList-1xjtlTJV' }
    },
    e5nO: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 20.5V7M12.5 11l-4-4-4 4"/></svg>'
    },
    iJYK: function (e, t, o) {
      e.exports = { highlight: 'highlight-1aROqc2m', active: 'active-1aROqc2m' }
    },
  },
])
