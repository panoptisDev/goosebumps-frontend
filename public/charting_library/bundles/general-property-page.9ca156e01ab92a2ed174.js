;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['general-property-page'],
  {
    '+jnJ': function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return s
      }),
        i.d(t, 'b', function () {
          return a
        })
      i('YFKU'), i('EsMY')
      var s,
        r = i('m/cY'),
        n = i('Vdly')
      function o(e) {
        return e === s.AlwaysOn || e === s.AlwaysOff ? e : s.VisibleOnMouseOver
      }
      function a(e, t) {
        let i, a
        function l() {
          if (!i) {
            i = Object(r.a)()
            let s = n.getValue(e)
            void 0 === s && void 0 !== t && (s = n.getValue(t)),
              i.setValue(o(s)),
              i.subscribe(i, (t) => {
                n.setValue(e, o(t.value()))
              })
          }
          return i
        }
        return {
          property: l,
          availableValues: function () {
            return [
              { id: s.VisibleOnMouseOver, value: s.VisibleOnMouseOver, title: window.t('Visible on Mouse Over') },
              { id: s.AlwaysOn, value: s.AlwaysOn, title: window.t('Always Visible') },
              { id: s.AlwaysOff, value: s.AlwaysOff, title: window.t('Always Invisible') },
            ]
          },
          actualBehavior: function () {
            if (!a) {
              a = Object(r.a)()
              const e = l(),
                t = () => {
                  let t = e.value()
                  t !== s.AlwaysOn &&
                    t !== s.AlwaysOff &&
                    (t = Modernizr.mobiletouch ? s.AlwaysOn : s.VisibleOnMouseOver),
                    a && a.setValue(t)
                }
              e.subscribe(a, t), t()
            }
            return a
          },
        }
      }
      !(function (e) {
        ;(e.AlwaysOn = 'alwaysOn'), (e.VisibleOnMouseOver = 'visibleOnMouseOver'), (e.AlwaysOff = 'alwaysOff')
      })(s || (s = {}))
    },
    '1ANp': function (e, t, i) {
      'use strict'
      i.d(t, 'c', function () {
        return r
      }),
        i.d(t, 'd', function () {
          return n
        }),
        i.d(t, 'b', function () {
          return o
        }),
        i.d(t, 'a', function () {
          return a
        })
      var s = i('+jnJ')
      const r = 'NavigationButtons.visibility',
        { property: n, availableValues: o, actualBehavior: a } = Object(s.b)(r)
    },
    '34BO': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 7H7v14h2v3h1v-3h2V7h-2V4H9v3zM8 8v12h3V8H8zm9 1h-2v10h2v3h1v-3h2V9h-2V6h-1v3zm-1 1v8h3v-8h-3z"/></svg>'
    },
    '5lPo': function (e, t, i) {
      'use strict'
      i.r(t)
      var s = i('Eyy1'),
        r = i('Kxc7'),
        n = (i('N22A'), i('hY0g')),
        o = i.n(n),
        a = i('HSjo'),
        l = i('1yQO'),
        c = i('1ANp'),
        d = i('RspR'),
        h = i('MWAT'),
        u = i('zqjM'),
        b = i('x2L+')
      const p = window.t('Show Buy/Sell Buttons')
      var g = i('qFKp')
      const w = window.t('Symbol'),
        y = window.t('OHLC Values'),
        O = window.t('Bar Change Values'),
        v = window.t('Indicator Titles'),
        P = window.t('Indicator Arguments'),
        m = window.t('Indicator Values'),
        j = window.t('Background'),
        C = (window.t('Wrap text'), window.t('Show Open market status'))
      g.CheckMobile.any()
      function f(e, t, i, s, n) {
        const l = [],
          c = [],
          d = Object(a.k)(
            {
              checked: Object(a.b)(e, t.showSeriesTitle, 'Change Symbol Description Visibility'),
              option: Object(a.b)(e, i.property, 'Change Symbol Legend Format'),
            },
            { id: 'symbolTextSource', title: w, options: new o.a(i.values) },
          )
        if ((c.push(d), null !== s)) {
          const t = Object(a.c)(
            { checked: Object(a.b)(e, s, 'Change show open market status') },
            { id: 'showOpenMarketStatus', title: C },
          )
          c.push(t)
        }
        const h = Object(a.c)(
          { checked: Object(a.b)(e, t.showSeriesOHLC, 'Change OHLC Values Visibility') },
          { id: 'ohlcTitle', title: y },
        )
        c.push(h)
        const u = Object(a.c)(
          { checked: Object(a.b)(e, t.showBarChange, 'Change Bar Change Visibility') },
          { id: 'barChange', title: O },
        )
        c.push(u), l.push(Object(a.l)(c, 'seriesLegendVisibilityGroup'))
        const b = (function (e, t) {
          return null !== t && r.enabled('buy_sell_buttons')
            ? Object(a.c)(
                {
                  checked: Object(a.a)(e, t.showSellBuyButtons, 'Change buy/sell buttons visibility'),
                },
                { id: 'tradingSellBuyPanel', title: p },
              )
            : null
        })(e, n)
        null !== b && l.push(Object(a.l)([b], 'sellBuyButtonsLegendVisibilityGroup'))
        const g = [],
          f = Object(a.c)(
            { checked: Object(a.b)(e, t.showStudyArguments, 'Change Indicator Arguments Visibility') },
            { id: 'studyArguments', title: P },
          ),
          S = Object(a.d)(
            { checked: Object(a.b)(e, t.showStudyTitles, 'Change Indicator Titles Visibility') },
            { id: 'studyTitles', title: v },
            [f],
          )
        g.push(S)
        const _ = Object(a.c)(
          { checked: Object(a.b)(e, t.showStudyValues, 'Change Indicator Values Visibility') },
          { id: 'studyValues', title: m },
        )
        g.push(_), l.push(Object(a.l)(g, 'studiesLegendVisibilityGroup'))
        const V = []
        const L = Object(a.r)(
          {
            checked: Object(a.b)(e, t.showBackground, 'Change Legend Background Visibility'),
            transparency: Object(a.b)(e, t.backgroundTransparency, 'Change Legend Background Transparency'),
          },
          { id: 'legendBgTransparency', title: j },
        )
        return V.push(L), l.push(Object(a.l)(V, 'generalLegendGroup')), l
      }
      var S = i('oXaB'),
        _ = i('Z5lT'),
        V = i('GDWD')
      const L = window.t('Symbol Name Label'),
        k = window.t('Symbol Last Price Label'),
        M = (window.t('Symbol Previous Day Close Price Label (Intraday Only)'), window.t('Indicator Name Label')),
        B = window.t('Indicator Last Value Label'),
        x =
          (window.t('Financials Name Label'),
          window.t('Financials Last Value Label'),
          window.t('Bid and Ask Labels'),
          window.t('Pre/Post Market Price Label'),
          window.t('High and low price labels')),
        A = window.t('Average close price label'),
        z = window.t('Countdown To Bar Close'),
        D = window.t('Currency'),
        T = window.t('Unit'),
        H = window.t('Plus Button'),
        R = window.t('Scales Placement'),
        G = window.t('Date Format'),
        N = window.t('Lock Price to Bar Ratio'),
        E = window.t('No Overlapping Labels'),
        W = [
          {
            value: S.PriceAxisLastValueMode.LastPriceAndPercentageValue,
            title: window.t('Price and Percentage Value'),
          },
          { value: S.PriceAxisLastValueMode.LastValueAccordingToScale, title: window.t('Value according to Scale') },
        ]
      const F = window.t('Background'),
        I = window.t('Vert Grid Lines'),
        U = window.t('Horz Grid Lines'),
        q = window.t('Session Breaks'),
        J = window.t('Scales text'),
        K = window.t('Scales lines'),
        Y = window.t('Crosshair'),
        Q = window.t('Watermark'),
        Z = window.t('Top Margin'),
        X = window.t('Navigation Buttons'),
        $ = window.t('Pane Buttons'),
        ee = window.t('Bottom Margin'),
        te = window.t('Right Margin'),
        ie = window.t('bars', { context: 'unit' })
      var se = i('e1ZQ'),
        re = i('3t3b'),
        ne = i('gQ5K'),
        oe = i('+6ja')
      const ae = {
        symbol: i('34BO'),
        legend: i('ggCF'),
        scales: i('Iilx'),
        appearance: i('DyO1'),
        events: i('iUxq'),
        trading: i('WS5G'),
      }
      i.d(t, 'ChartPropertyDefinitionsViewModel', function () {
        return ge
      })
      const le = window.t('Symbol'),
        ce = window.t('Status line'),
        de = window.t('Scales'),
        he = window.t('Appearance')
      window.t('Events'), window.t('Trading')
      let ue = null
      function be() {
        const e = new Date(Date.UTC(1997, 8, 29))
        return se.a.map((t) => ({ value: t, title: new ne.DateFormatter(t).format(e) }))
      }
      const pe = [
        { id: 'symbol-text-source-description', value: 'description', title: window.t('Description') },
        { id: 'symbol-text-source-ticker', value: 'ticker', title: window.t('Ticker') },
        {
          id: 'symbol-text-source-ticker-and-description',
          value: 'ticker-and-description',
          title: window.t('Ticker and description'),
        },
      ]
      class ge {
        constructor(e, t, i) {
          ;(this._propertyPages = null),
            (this._maxRightOffsetPropertyObject = null),
            (this._isDestroyed = !1),
            (this._undoModel = e),
            (this._model = this._undoModel.model()),
            (this._series = this._model.mainSeries()),
            (this._chartWidgetProperties = t),
            (this._options = i),
            (this._seriesPropertyDefinitionViewModel = this._createSeriesViewModel()),
            (this._legendPropertyPage = this._createLegendPropertyPage()),
            (this._scalesPropertyPage = this._createScalesPropertyPage()),
            (this._appearancePropertyPage = this._createAppearancePropertyPage()),
            (this._tradingPropertyPage = this._createTradingPropertyPage()),
            (this._eventsPropertyPage = this._createEventsPropertyPage()),
            this._series.onStyleChanged().subscribe(this, this._updateDefinitions),
            this._series.priceScaleChanged().subscribe(this, this._updateDefinitions)
        }
        destroy() {
          null !== this._propertyPages &&
            this._propertyPages
              .filter((e, t) => 0 !== t)
              .forEach((e) => {
                Object(a.u)(e.definitions.value())
              }),
            this._seriesPropertyDefinitionViewModel.destroy(),
            this._series.onStyleChanged().unsubscribe(this, this._updateDefinitions),
            this._series.priceScaleChanged().unsubscribe(this, this._updateDefinitions)
          Object(s.ensureNotNull)(this._model.timeScale()).maxRightOffsetChanged().unsubscribeAll(this),
            (this._isDestroyed = !0)
        }
        propertyPages() {
          return null === this._propertyPages
            ? this._seriesPropertyDefinitionViewModel.propertyPages().then((e) => {
                if (this._isDestroyed) throw new Error('ChartPropertyDefinitionsViewModel already destroyed')
                return (
                  null === this._propertyPages &&
                    ((this._propertyPages = [...e]),
                    this._propertyPages.push(
                      this._legendPropertyPage,
                      this._scalesPropertyPage,
                      this._appearancePropertyPage,
                    ),
                    null !== this._tradingPropertyPage && this._propertyPages.push(this._tradingPropertyPage),
                    null !== this._eventsPropertyPage && this._propertyPages.push(this._eventsPropertyPage)),
                  this._propertyPages
                )
              })
            : Promise.resolve(this._propertyPages)
        }
        _updateDefinitions() {
          Object(a.u)(this._scalesPropertyPage.definitions.value())
          const e = this._createScalesDefinitions()
          this._scalesPropertyPage.definitions.setValue(e)
        }
        _createSeriesViewModel() {
          const e = {
            property: this._model.properties().timezone,
            values: oe.availableTimezones.map((e) => ({ value: e.id, title: e.title })),
          }
          return new u.a(this._series, this._undoModel, 'symbol', le, ae.symbol, e)
        }
        _createLegendPropertyPage() {
          const e = this._chartWidgetProperties.childs().paneProperties.childs().legendProperties.childs(),
            t = { property: this._series.properties().childs().statusViewStyle.childs().symbolTextSource, values: pe },
            i = f(this._undoModel, e, t, this._options.marketStatusWidgetEnabled ? b.b : null, ue)
          return Object(l.a)(i, 'legend', ce, ae.legend)
        }
        _createScalesPropertyPage() {
          const e = this._createScalesDefinitions()
          return Object(l.a)(e, 'scales', de, ae.scales)
        }
        _createScalesDefinitions() {
          const e = this._chartWidgetProperties.childs().scalesProperties.childs(),
            t = {
              property: this._model.properties().priceScaleSelectionStrategyName,
              values: Object(h.allPriceScaleSelectionStrategyInfo)().map((e) => ({ value: e.name, title: e.title })),
            },
            i = { property: re.dateFormatProperty, values: be() },
            s = this._model.mainSeriesScaleRatioProperty()
          return (function (e, t, i, s) {
            const n = s.seriesPriceScale.properties().childs(),
              l = [],
              c = []
            if (s.seriesHasClosePrice) {
              const t = Object(a.c)(
                  { checked: Object(a.b)(e, i.showSymbolLabels, 'Show Symbol Labels') },
                  { id: 'symbolNameLabel', title: L },
                ),
                s = Object(a.k)(
                  {
                    checked: Object(a.b)(e, i.showSeriesLastValue, 'Change Symbol Last Value Visibility'),
                    option: Object(a.b)(e, i.seriesLastValueMode, 'Change Symbol Last Value Mode'),
                  },
                  { id: 'symbolLastValueLabel', title: k, options: new o.a(W) },
                )
              c.push(t, s)
            }
            const d = t.highLowAvgPrice,
              h = Object(a.c)(
                {
                  checked: Object(a.b)(
                    e,
                    d.childs().highLowPriceLabelsVisible,
                    'Change high/low price labels visibility',
                  ),
                },
                { id: 'highLowPriceLabels', title: x },
              ),
              u = Object(a.c)(
                {
                  checked: Object(a.b)(
                    e,
                    d.childs().averageClosePriceLabelVisible,
                    'Change average close price label visibility',
                  ),
                },
                { id: 'averageClosePriceLabels', title: A },
              )
            c.push(h, u)
            const b = Object(a.c)(
                { checked: Object(a.b)(e, i.showStudyPlotLabels, 'Show Study Plots Labels') },
                { id: 'studyNameLabel', title: M },
              ),
              p = Object(a.c)(
                { checked: Object(a.b)(e, i.showStudyLastValue, 'Change Indicator Last Value Visibility') },
                { id: 'studyLastValueLabel', title: B },
              )
            c.push(b, p)
            const g = Object(a.c)(
              { checked: Object(a.b)(e, n.alignLabels, 'Change No Overlapping Labels') },
              { id: 'noOverlappingLabels', title: E },
            )
            if ((c.push(g), s.countdownEnabled)) {
              const i = Object(a.c)(
                { checked: Object(a.b)(e, t.showCountdown, 'Change Show Countdown') },
                { id: 'countdown', title: z },
              )
              c.push(i)
            }
            if (s.currencyConversionEnabled) {
              const t = Object(a.c)(
                { checked: Object(a.b)(e, i.showCurrency, 'Change Currency Label Visibility') },
                { id: 'scalesCurrency', title: D },
              )
              c.push(t)
            }
            if (s.unitConversionEnabled) {
              const t = Object(a.c)(
                { checked: Object(a.b)(e, i.showUnit, 'Change Unit Label Visibility') },
                { id: 'scalesUnit', title: T },
              )
              c.push(t)
            }
            if (e.crossHairSource().isMenuEnabled()) {
              const t = Object(a.c)(
                { checked: Object(a.b)(e, V.addPlusButtonProperty, 'Plus Button') },
                { id: 'addPlusButton', title: H },
              )
              c.push(t)
            }
            l.push(Object(a.l)(c, 'generalScalesLabelsGroup'))
            const w = Object(a.j)(
                {
                  checked: Object(a.w)(e, n.lockScale, s.seriesPriceScale, 'Change lock scale'),
                  value: Object(a.y)(e, s.mainSeriesScaleRatioProperty, 'Change Price to Bar Ratio', [
                    Object(_.c)(7),
                    (e) => e,
                  ]),
                },
                {
                  id: 'lockScale',
                  title: N,
                  min: new o.a(s.mainSeriesScaleRatioProperty.getMinValue()),
                  max: new o.a(s.mainSeriesScaleRatioProperty.getMaxValue()),
                  step: new o.a(s.mainSeriesScaleRatioProperty.getStepChangeValue()),
                },
              ),
              y = Object(a.k)(
                { option: Object(a.x)(e, s.scalesPlacementPropertyObj.property) },
                { id: 'scalesPlacement', title: R, options: new o.a(s.scalesPlacementPropertyObj.values) },
              )
            if ((l.push(w, y), r.enabled('scales_date_format'))) {
              const t = Object(a.k)(
                { option: Object(a.b)(e, s.dateFormatPropertyObj.property, 'Change Date Format') },
                { id: 'dateFormat', title: G, options: new o.a(s.dateFormatPropertyObj.values) },
              )
              l.push(t)
            }
            return l
          })(this._undoModel, this._series.properties().childs(), e, {
            disableSeriesPrevCloseValueProperty: this._series.isDWMProperty(),
            seriesHasClosePrice: this._series.hasClosePrice(),
            seriesPriceScale: this._series.priceScale(),
            mainSeriesScaleRatioProperty: s,
            scalesPlacementPropertyObj: t,
            dateFormatPropertyObj: i,
            currencyConversionEnabled: this._options.currencyConversionEnabled,
            unitConversionEnabled: this._options.unitConversionEnabled,
            countdownEnabled: this._options.countdownEnabled,
          })
        }
        _createMaxOffsetPropertyObject() {
          const e = Object(s.ensureNotNull)(this._model.timeScale()),
            t = new o.a(Math.floor(e.maxRightOffset()))
          e.maxRightOffsetChanged().subscribe(this, (e) => {
            t.setValue(Math.floor(e))
          }),
            (this._maxRightOffsetPropertyObject = { property: e.defaultRightOffsetProperty(), min: new o.a(0), max: t })
        }
        _createAppearancePropertyPage() {
          const e = this._chartWidgetProperties.childs(),
            t = e.paneProperties.childs(),
            i = e.scalesProperties.childs(),
            n = this._model.watermarkSource()
          let h = null
          null !== n && (h = n.properties().childs())
          const u = { property: c.d(), values: c.b() },
            b = { property: d.c(), values: d.b() },
            p = this._model.sessions().properties().childs().graphics.childs().vertlines.childs().sessBreaks.childs()
          null === this._maxRightOffsetPropertyObject && this._createMaxOffsetPropertyObject()
          const g = Object(s.ensureNotNull)(this._maxRightOffsetPropertyObject),
            w = (function (e, t, i, s, n, l, c, d, h) {
              const u = [],
                b = Object(a.e)(
                  {
                    color: Object(a.v)(e, t.background, null, 'Change Chart Background Color'),
                    gradientColor1: Object(a.v)(
                      e,
                      t.backgroundGradientStartColor,
                      null,
                      'Change Chart Background Color',
                    ),
                    gradientColor2: Object(a.v)(e, t.backgroundGradientEndColor, null, 'Change Chart Background Color'),
                    type: Object(a.b)(e, t.backgroundType, 'Change Chart Background Type'),
                  },
                  { id: 'chartBackground', title: F, noAlpha: !0 },
                ),
                p = t.vertGridProperties.childs(),
                g = Object(a.i)(
                  {
                    color: Object(a.v)(e, p.color, null, 'Change Vert Grid Lines Color'),
                    style: Object(a.b)(e, p.style, 'Change Vert Grid Lines Style'),
                  },
                  { id: 'vertGridLine', title: I },
                ),
                w = t.horzGridProperties.childs(),
                y = Object(a.i)(
                  {
                    color: Object(a.v)(e, w.color, null, 'Change Horz Grid Lines Color'),
                    style: Object(a.b)(e, w.style, 'Change Horz Grid Lines Style'),
                  },
                  { id: 'horizGridLine', title: U },
                ),
                O = Object(a.i)(
                  {
                    disabled: Object(a.b)(e, l, 'Change Intraday Interval Property'),
                    checked: Object(a.b)(e, n.visible, 'Change Sessions Breaks Visibility'),
                    color: Object(a.v)(e, n.color, null, 'Change Sessions Breaks Color'),
                    width: Object(a.b)(e, n.width, 'Change Sessions Breaks Width'),
                    style: Object(a.b)(e, n.style, 'Change Sessions Breaks Style'),
                  },
                  { id: 'sessionBeaks', title: q },
                ),
                v = Object(a.q)(
                  {
                    color: Object(a.v)(e, s.textColor, null, 'Change Scales Text Color'),
                    size: Object(a.b)(e, s.fontSize, 'Change Scales Font Size'),
                  },
                  { id: 'scalesText', title: J },
                ),
                P = Object(a.i)(
                  { color: Object(a.v)(e, s.lineColor, null, 'Change Scales Lines Color') },
                  { id: 'scalesLine', title: K },
                ),
                m = t.crossHairProperties.childs(),
                j = Object(a.i)(
                  {
                    color: Object(a.v)(e, m.color, m.transparency, 'Change Crosshair Color'),
                    width: Object(a.b)(e, m.width, 'Change Crosshair Width'),
                    style: Object(a.b)(e, m.style, 'Change Crosshair Style'),
                  },
                  { id: 'crossHair', title: Y },
                )
              if ((u.push(b, g, y, O, v, P, j), null !== i)) {
                const t = Object(a.e)(
                  {
                    checked: Object(a.b)(e, i.visibility, 'Change Symbol Watermark Visibility'),
                    color: Object(a.v)(e, i.color, null, 'Change Symbol Watermark Color'),
                  },
                  { id: 'watermark', title: Q },
                )
                u.push(t)
              }
              const C = Object(a.k)(
                { option: Object(a.b)(e, d.property, 'Change Navigation Buttons Visibility') },
                {
                  id: 'navButtons',
                  title: X,
                  options: new o.a(d.values),
                },
              )
              u.push(C)
              const f = Object(a.k)(
                { option: Object(a.b)(e, h.property, 'Change Pane Buttons Visibility') },
                { id: 'paneButtons', title: $, options: new o.a(h.values) },
              )
              u.push(f)
              const S = Object(a.j)(
                  { value: Object(a.b)(e, t.topMargin, 'Change Top Margin', [_.b]) },
                  {
                    type: 0,
                    id: 'paneTopMargin',
                    title: Z,
                    min: new o.a(0),
                    max: new o.a(25),
                    step: new o.a(1),
                    unit: new o.a('%'),
                  },
                ),
                V = Object(a.j)(
                  { value: Object(a.b)(e, t.bottomMargin, 'Change Bottom Margin', [_.b]) },
                  {
                    type: 0,
                    id: 'paneBottomMargin',
                    title: ee,
                    min: new o.a(0),
                    max: new o.a(25),
                    step: new o.a(1),
                    unit: new o.a('%'),
                  },
                ),
                L = Object(a.j)(
                  { value: Object(a.b)(e, c.property, 'Change Right Margin', [_.b]) },
                  {
                    type: 0,
                    id: 'paneRightMargin',
                    title: te,
                    min: c.min,
                    max: c.max,
                    step: new o.a(1),
                    unit: new o.a(ie),
                  },
                ),
                k = [Object(a.l)(u, 'generalAppearanceGroup'), S, V]
              return r.enabled('chart_property_page_right_margin_editor') && k.push(L), k
            })(this._undoModel, t, h, i, p, this._series.isDWMProperty(), g, u, b)
          return Object(l.a)(w, 'appearance', he, ae.appearance)
        }
        _createTradingPropertyPage() {
          return null
        }
        _createEventsPropertyPage() {
          return null
        }
      }
    },
    DyO1: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 16.5l-1 1v4h4l1-1m-4-4l2 2m-2-2l9-9m-5 13l-2-2m2 2l9-9m-11 7l9-9m0 0l-2-2m2 2l2 2m-4-4l.94-.94a1.5 1.5 0 0 1 2.12 0l1.88 1.88a1.5 1.5 0 0 1 0 2.12l-.94.94"/></svg>'
    },
    Iilx: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 20.5a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h14m-16-2v-14m16 16L21 17m3.5 3.5L21 24M8.5 4.5L12 8M8.5 4.5L5 8"/></svg>'
    },
    RspR: function (e, t, i) {
      'use strict'
      i.d(t, 'c', function () {
        return n
      }),
        i.d(t, 'b', function () {
          return o
        }),
        i.d(t, 'a', function () {
          return a
        })
      var s = i('+jnJ'),
        r = i('1ANp')
      const { property: n, availableValues: o, actualBehavior: a } = Object(s.b)('PaneButtons.visibility', r.c)
    },
    WS5G: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M24.068 9a.569.569 0 0 1 .73.872L19 14.842l-5.798-4.97a.569.569 0 0 1 .73-.872l4.751 3.887.317.26.317-.26L24.068 9zm1.47-.67a1.569 1.569 0 0 0-2.103-.104L19 11.854l-4.435-3.628a1.569 1.569 0 0 0-2.014 2.405l6.124 5.249.325.279.325-.28 6.124-5.248a1.569 1.569 0 0 0 .088-2.3zm-11.484 9.728a.57.57 0 0 0 .688-.91L9 12.636l-5.742 4.512a.57.57 0 0 0 .688.91l4.76-3.462.294-.214.294.214 4.76 3.462zm1.446.649a1.57 1.57 0 0 1-2.034.16L9 15.618l-4.466 3.249a1.57 1.57 0 0 1-1.894-2.505l6.051-4.755.309-.243.309.243 6.051 4.755c.74.581.806 1.68.14 2.345z"/></svg>'
    },
    ggCF: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" d="M6 13h12v1H6zM6 17h12v1H6zM6 21h12v1H6z"/><rect width="17" height="3" stroke="currentColor" rx="1.5" x="5.5" y="6.5"/></svg>'
    },
    iUxq: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 4h1v2h6V4h1v2h2.5A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H10V4zm8 3H7.5A1.5 1.5 0 0 0 6 8.5v11A1.5 1.5 0 0 0 7.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 7H18zm-3 2h-2v2h2V9zm-7 4h2v2H8v-2zm12-4h-2v2h2V9zm-7 4h2v2h-2v-2zm-3 4H8v2h2v-2zm3 0h2v2h-2v-2zm7-4h-2v2h2v-2z"/></svg>'
    },
  },
])
