;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['general-chart-properties-dialog'],
  {
    '++0f': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>'
    },
    '2x13': function (e, t, n) {
      e.exports = {
        wrapper: 'wrapper-DggvOZTm',
        container: 'container-DggvOZTm',
        tab: 'tab-DggvOZTm',
        active: 'active-DggvOZTm',
        title: 'title-DggvOZTm',
        icon: 'icon-DggvOZTm',
        titleText: 'titleText-DggvOZTm',
        nested: 'nested-DggvOZTm',
        isTablet: 'isTablet-DggvOZTm',
        isMobile: 'isMobile-DggvOZTm',
      }
    },
    An2S: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'b', function () {
          return u
        })
      var i = n('mrSG'),
        l = n('q1tI'),
        a = n.n(l),
        o = n('TSYQ'),
        s = n.n(o),
        r = n('Iivm'),
        c = n('++0f'),
        m = n('2x13')
      function h(e) {
        return { isMobile: 'mobile' === e, isTablet: 'tablet' === e }
      }
      function d(e) {
        const { mode: t, className: n } = e,
          l = Object(i.a)(e, ['mode', 'className']),
          { isMobile: o, isTablet: r } = h(t),
          c = s()(m.container, r && m.isTablet, o && m.isMobile, n)
        return a.a.createElement('div', Object.assign({}, l, { className: c, 'data-role': 'dialog-sidebar' }))
      }
      function p(e) {
        return a.a.createElement('div', Object.assign({ className: m.wrapper }, e))
      }
      function u(e) {
        const { mode: t, title: n, icon: l, isActive: o, onClick: d } = e,
          p = Object(i.a)(e, ['mode', 'title', 'icon', 'isActive', 'onClick']),
          { isMobile: u, isTablet: b } = h(t)
        return a.a.createElement(
          'div',
          Object.assign({}, p, { className: s()(m.tab, b && m.isTablet, u && m.isMobile, o && m.active), onClick: d }),
          a.a.createElement(r.a, { className: m.icon, icon: l }),
          !b &&
            a.a.createElement(
              'span',
              { className: m.title },
              a.a.createElement('span', { className: m.titleText }, n),
              u && a.a.createElement(r.a, { className: m.nested, icon: c }),
            ),
        )
      }
    },
    KKsp: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var i = n('q1tI'),
        l = n('TSYQ'),
        a = n.n(l),
        o = n('NOPy')
      function s(e) {
        const { size: t = 'normal', className: n } = e
        return i.createElement('div', {
          className: a()(
            o.separator,
            'small' === t && o.small,
            'normal' === t && o.normal,
            'large' === t && o.large,
            n,
          ),
        })
      }
    },
    NOPy: function (e, t, n) {
      e.exports = {
        separator: 'separator-eqcGT_ow',
        small: 'small-eqcGT_ow',
        normal: 'normal-eqcGT_ow',
        large: 'large-eqcGT_ow',
      }
    },
    PI1I: function (e, t, n) {
      'use strict'
      n.r(t)
      n('YFKU')
      var i = n('q1tI'),
        l = n('i8i4'),
        a = n('mwqF'),
        o = n('bvfV'),
        s = n('ycFu'),
        r = n('ybVX'),
        c = n('Q+1u'),
        m = n('Vdly'),
        h = n.n(m),
        d = n('VNzU'),
        p = n('/KDZ'),
        u = (n('bSeV'), n('K+KL')),
        b = n('N5tr'),
        g = n('KKsp'),
        y = n('Iivm'),
        T = n('EsvI'),
        _ = (n('HbRj'), n('fZEr'))
      const v = window.t("Do you really want to delete Color Theme '{name}' ?")
      var C = n('+EG+'),
        S = n('2uTr'),
        f = (n('EsMY'), n('i/MG')),
        k = n('JWMC'),
        A = n('8d0Q'),
        w = n('utEQ')
      function E(e) {
        const { themeName: t, chartWidgetCollection: n, onRemove: l, manager: a } = e,
          [o, s] = Object(A.b)(),
          r = i.useCallback(
            () =>
              (function (e, t, n) {
                window.is_authenticated &&
                  Object(_.a)(
                    {
                      text: v.format({ name: e }),
                      onConfirm: ({ dialogClose: n }) => {
                        Object(T.removeTheme)(e), t && t(e), n()
                      },
                    },
                    n,
                  )
              })(t, l, a),
            [t, l, a],
          ),
          c = i.useCallback(() => {
            Object(T.loadTheme)(t, !1, !1, n).then(() => {
              window.saver.saveChartSilently(), Object(k.trackEvent)('GUI', 'Switch to custom theme')
            })
          }, [t, n])
        return i.createElement(
          'div',
          Object.assign({}, s),
          i.createElement(b.b, {
            className: w.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: c,
            toolbox: i.createElement(f.a, { hidden: !Modernizr.mobiletouch && !o, onClick: r }),
          }),
        )
      }
      var P = n('HWhk')
      const x = window.t('Template'),
        B = window.t('Apply Defaults'),
        N = (Object(S.appendEllipsis)(window.t('Save As')), window.t('Apply to all'))
      class O extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._manager = null),
            (this._handleApplyDefaults = () => {
              const { model: e, chartWidgetCollection: t } = this.props
              e.restorePreferences()
              const n = Object(T.getCurrentTheme)().name
              Object(T.loadTheme)(n, !0, !0, t, void 0, void 0, !0)
            }),
            (this._handleSaveAs = () => {
              0
            }),
            (this._handleRemoveTheme = (e) => {
              this.setState({ themes: this.state.themes.filter((t) => t !== e) })
            }),
            (this._syncThemeList = () => {
              0
            }),
            (this.state = { themes: [] }),
            this._syncThemeList()
        }
        render() {
          return i.createElement(
            C.b.Consumer,
            null,
            (e) => (
              (this._manager = e),
              i.createElement(p.a, { rule: 'screen and (max-width: 768px)' }, (e) =>
                i.createElement(
                  u.a,
                  {
                    id: 'series-theme-manager',
                    className: !e && w.themesButtonText,
                    hideArrowButton: e,
                    'data-name': 'theme-select',
                    buttonChildren: this._getPlaceHolderItem(e),
                  },
                  this._getThemeItems(e),
                ),
              )
            ),
          )
        }
        _getPlaceHolderItem(e) {
          return e ? i.createElement(y.a, { className: w.themesButtonIcon, icon: P }) : x
        }
        _getThemeItems(e) {
          const { isApplyToAllVisible: t, chartWidgetCollection: n, applyToAllCallback: l } = this.props,
            { themes: a } = this.state
          return i.createElement(
            i.Fragment,
            null,
            e && t && i.createElement(b.b, { className: w.defaultsButtonItem, isActive: !1, label: N, onClick: l }),
            i.createElement(b.b, {
              className: w.defaultsButtonItem,
              isActive: !1,
              label: B,
              onClick: this._handleApplyDefaults,
            }),
            !1,
            a.length > 0 &&
              i.createElement(
                i.Fragment,
                null,
                i.createElement(g.a, { key: 'separator' }),
                a.map((e) =>
                  i.createElement(E, {
                    key: e,
                    themeName: e,
                    onRemove: this._handleRemoveTheme,
                    chartWidgetCollection: n,
                    manager: this._manager,
                  }),
                ),
              ),
          )
        }
      }
      var I = n('tWVy'),
        M = n('yqnI'),
        D = n('uhCe'),
        z = n('An2S'),
        W = n('tmL0')
      const L = {
        areaSymbolMinTick: 'normal',
        areaSymbolTimezone: 'normal',
        barSymbolMinTick: 'normal',
        barSymbolTimezone: 'normal',
        baselineSymbolMinTick: 'normal',
        baselineSymbolTimezone: 'normal',
        candleSymbolMinTick: 'normal',
        candleSymbolTimezone: 'normal',
        dateFormat: 'normal',
        haSymbolMinTick: 'normal',
        haSymbolTimezone: 'normal',
        hiloSymbolMinTick: 'normal',
        hiloSymbolTimezone: 'normal',
        hollowCandleSymbolMinTick: 'normal',
        hollowCandleSymbolTimezone: 'normal',
        kagiAtrLength: 'normal',
        kagiReversalAmount: 'normal',
        kagiStyle: 'normal',
        kagiSymbolMinTick: 'normal',
        kagiSymbolTimezone: 'normal',
        lineSymbolMinTick: 'normal',
        lineSymbolTimezone: 'normal',
        lockScale: 'normal',
        mainSeriesSymbolAreaPriceSource: 'normal',
        mainSeriesSymbolBaseLevelPercentage: 'normal',
        mainSeriesSymbolBaseLinePriceSource: 'normal',
        mainSeriesSymbolLinePriceSource: 'normal',
        mainSeriesSymbolStyleType: 'normal',
        navButtons: 'big',
        paneButtons: 'big',
        pbLb: 'normal',
        pbSymbolMinTick: 'normal',
        pbSymbolTimezone: 'normal',
        pnfAtrLength: 'normal',
        pnfBoxSize: 'normal',
        pnfReversalAmount: 'normal',
        pnfSources: 'normal',
        pnfStyle: 'normal',
        pnfSymbolMinTick: 'normal',
        pnfSymbolTimezone: 'normal',
        rangeSymbolMinTick: 'normal',
        rangeSymbolTimezone: 'normal',
        renkoAtrLength: 'normal',
        renkoBoxSize: 'normal',
        renkoStyle: 'normal',
        renkoSymbolMinTick: 'normal',
        renkoSymbolTimezone: 'normal',
        scalesPlacement: 'normal',
        symbolLastValueLabel: 'big',
        symbolTextSource: 'normal',
      }
      var V = n('yMyk'),
        j = n('U0JK')
      function R(e) {
        return i.createElement(y.a, { className: V.backButton, icon: j, onClick: e.onClick })
      }
      var q = n('sXZi')
      class K extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._renderChildren = ({ requestResize: e, isSmallWidth: t }) => (
              (this._requestResize = e),
              i.createElement('div', { className: q.content }, this._renderTabs(t), this._renderTabContent(t))
            )),
            (this._renderApplyToAllButton = () =>
              i.createElement(p.a, { rule: D.a.TabletNormal }, (e) => this._renderApplyToAll(e))),
            (this._renderFooterLeft = () => {
              const { model: e, chartWidgetCollection: t } = this.props,
                { isApplyToAllVisible: n } = this.state
              return i.createElement(O, {
                model: e,
                isApplyToAllVisible: n,
                applyToAllCallback: this._handleApplyToAll,
                chartWidgetCollection: t,
              })
            }),
            (this._createTabClickHandler = (e) => () => this._selectPage(e)),
            (this._selectPage = (e) => {
              const { activePage: t } = this.state
              e !== t &&
                (t && t.definitions.unsubscribe(this._onChangeActivePageDefinitions),
                h.a.setValue('properties_dialog.last_page_id', e.id),
                e.definitions.subscribe(this._onChangeActivePageDefinitions),
                this.setState({ activePage: e, tableKey: Date.now() }, () => {
                  this._requestResize && this._requestResize()
                }))
            }),
            (this._onChangeActivePageDefinitions = () => {
              M.a.logNormal('Definition collection was updated'),
                this.setState({ tableKey: Date.now() }, () => {
                  this._requestResize && this._requestResize()
                })
            }),
            (this._handleCancel = () => {
              this.props.onCancel(), this.props.onClose()
            }),
            (this._handleSubmit = () => {
              this.props.onSubmit(), this.props.onClose()
            }),
            (this._handleScroll = () => {
              I.a.fire()
            }),
            (this._handleApplyToAll = () => {
              const { chartWidgetCollection: e, model: t } = this.props,
                { isApplyToAllVisible: n } = this.state
              n && e.applyPreferencesToAllCharts(t)
            }),
            (this._syncApplyToAllVisibility = () => {
              const { chartWidgetCollection: e } = this.props
              this.setState({ isApplyToAllVisible: Object(d.isMultipleLayout)(e.layout.value()) })
            }),
            (this._handleBackClick = () => {
              const { activePage: e } = this.state
              e && e.definitions.unsubscribe(this._onChangeActivePageDefinitions), this.setState({ activePage: null })
            })
          const { pages: t, activePageId: n } = e
          let l = t.find((e) => e.id === n)
          if (!l) {
            const e = h.a.getValue('properties_dialog.last_page_id'),
              n = t.find((t) => t.id === e)
            l = n || t[0]
          }
          this.state = {
            activePage: l,
            isApplyToAllVisible: Object(d.isMultipleLayout)(e.chartWidgetCollection.layout.value()),
            tableKey: Date.now(),
          }
        }
        componentDidMount() {
          const { chartWidgetCollection: e } = this.props,
            { activePage: t } = this.state
          e.layout.subscribe(this._syncApplyToAllVisibility),
            t && t.definitions.subscribe(this._onChangeActivePageDefinitions)
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e } = this.props,
            { activePage: t } = this.state
          t && t.definitions.unsubscribe(this._onChangeActivePageDefinitions),
            e.layout.unsubscribe(this._syncApplyToAllVisibility)
        }
        render() {
          const { isOpened: e, onClose: t } = this.props,
            { activePage: n } = this.state
          return i.createElement(p.a, { rule: D.a.TabletSmall }, (l) =>
            i.createElement(s.a, {
              className: q.withSidebar,
              dataName: 'series-properties-dialog',
              onClose: t,
              isOpened: e,
              title: null !== n && l ? n.title : window.t('Chart settings'),
              footerLeftRenderer: this._renderFooterLeft,
              additionalButtons: this._renderApplyToAllButton(),
              additionalHeaderElement:
                null !== n && l ? i.createElement(R, { onClick: this._handleBackClick }) : void 0,
              onSubmit: this._handleSubmit,
              onCancel: this._handleCancel,
              render: this._renderChildren,
              submitOnEnterKey: !1,
            }),
          )
        }
        _renderTabContent(e) {
          const { pages: t } = this.props,
            n = this._getCurrentPage(e)
          if (n) {
            const e = t.find((e) => e.id === n.id),
              l = e ? e.definitions.value() : []
            return i.createElement(
              W.a,
              { className: q.tabContent, onScroll: this._handleScroll },
              i.createElement(
                r.b.Provider,
                { value: L },
                i.createElement(
                  c.a,
                  { key: this.state.tableKey },
                  l.map((e) => i.createElement(o.a, { key: e.id, definition: e })),
                ),
              ),
            )
          }
          return null
        }
        _renderTabs(e) {
          const { pages: t } = this.props,
            { activePage: n } = this.state
          if (n && e) return null
          const l = this._getCurrentPage(e)
          return i.createElement(p.a, { rule: D.a.TabletNormal }, (e) =>
            i.createElement(p.a, { rule: D.a.TabletSmall }, (n) => {
              const a = n ? 'mobile' : e ? 'tablet' : void 0
              return i.createElement(
                z.a,
                { mode: a, onScroll: this._handleScroll },
                t.map((e) =>
                  i.createElement(z.b, {
                    key: e.id,
                    mode: a,
                    'data-name': e.id,
                    title: e.title,
                    icon: e.icon,
                    onClick: this._createTabClickHandler(e),
                    isActive: l ? e.id === l.id : void 0,
                  }),
                ),
              )
            }),
          )
        }
        _renderApplyToAll(e) {
          const { isApplyToAllVisible: t } = this.state
          return (
            !e &&
            t &&
            i.createElement(
              'span',
              { className: q.applyToAllButton },
              i.createElement(a.a, { appearance: 'stroke', onClick: this._handleApplyToAll }, window.t('Apply to all')),
            )
          )
        }
        _getCurrentPage(e) {
          const { pages: t } = this.props,
            { activePage: n } = this.state
          let i = null
          return n ? (i = n) : !e && t.length && (i = t[0]), i
        }
      }
      var Z = n('FQhm'),
        U = n('sQaR')
      n.d(t, 'GeneralChartPropertiesDialogRenderer', function () {
        return G
      })
      const F = window.t('Chart settings')
      class G extends U.a {
        constructor(e) {
          super(),
            (this._handleClose = () => {
              l.unmountComponentAtNode(this._container), this._setVisibility(!1), this._onClose && this._onClose()
            }),
            (this._handleSubmit = () => {}),
            (this._handleCancel = () => {
              this._model.undoToCheckpoint(this._checkpoint)
            }),
            (this._propertyPages = e.propertyPages),
            (this._model = e.model),
            (this._activePageId = e.activePageId),
            (this._onClose = e.onClose),
            (this._chartWidgetCollection = e.chartWidgetCollection),
            (this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint))
        }
        hide(e) {
          e ? this._handleCancel() : this._handleSubmit(), this._handleClose()
        }
        isVisible() {
          return this.visible().value()
        }
        show() {
          l.render(
            i.createElement(K, {
              title: F,
              isOpened: !0,
              onSubmit: this._handleSubmit,
              onClose: this._handleClose,
              onCancel: this._handleCancel,
              pages: this._propertyPages,
              model: this._model,
              activePageId: this._activePageId,
              chartWidgetCollection: this._chartWidgetCollection,
            }),
            this._container,
          ),
            this._setVisibility(!0),
            Z.emit('edit_object_dialog', { objectType: 'mainSeries', scriptTitle: this._model.mainSeries().title() })
        }
        _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e
        }
      }
    },
    U0JK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.2" d="M17 21l-7.5-7.5L17 6"/></svg>'
    },
    sXZi: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
        withSidebar: 'withSidebar-1e-cIUlp',
        content: 'content-1e-cIUlp',
        tabContent: 'tabContent-1e-cIUlp',
        applyToAllButton: 'applyToAllButton-1e-cIUlp',
      }
    },
    utEQ: function (e, t, n) {
      e.exports = {
        themesButtonText: 'themesButtonText-3vn5WLwC',
        themesButtonIcon: 'themesButtonIcon-3vn5WLwC',
        defaultsButtonText: 'defaultsButtonText-3vn5WLwC',
        defaultsButtonItem: 'defaultsButtonItem-3vn5WLwC',
      }
    },
    yMyk: function (e, t, n) {
      e.exports = { backButton: 'backButton-ukxmTk5_' }
    },
  },
])
