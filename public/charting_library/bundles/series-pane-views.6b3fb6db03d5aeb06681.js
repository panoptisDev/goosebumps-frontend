;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['series-pane-views'],
  {
    '+weX': function (t, e, i) {
      'use strict'
      var a = i('aO4+').Point,
        s = i('Zy3/').CompositeRenderer,
        r = i('gQ5K').DateFormatter,
        n = i('4kQX').TimeFormatter,
        l = i('ikwP').calcTextHorizontalShift,
        d = i('Ialn').isRtl,
        o = i('zDbI').CHART_FONT_FAMILY,
        h = i('cPgM').ScaledPaneRenderer
      class _ extends h {
        constructor() {
          super(), (this._data = null)
        }
        setData(t) {
          this._data = t
        }
        hitTest() {
          return null
        }
        _drawImpl(t) {
          if (null !== this._data) {
            var e = Math.round(4.5),
              i = 0
            t.save(), t.setFont('12px ' + o)
            var a = $.t('Last available bar')
            if (this._data.eod) i = t.measureText(a).width
            else {
              var s = t.measureText(this._data.dateString || '').width,
                r = t.measureText(this._data.timeString || '').width
              i = Math.max(s, r)
            }
            var n = this._data.timeString ? 2 : 1,
              h = document.querySelector('html').classList.contains('theme-dark')
            ;(t.fillStyle = h ? '#50535E' : '#2A2E39'), t.translate(this._data.point.x + 0.5, this._data.point.y + 0.5)
            var _ = Math.round(-i / 2) - 8,
              m = -17 * n - 8 - 4 - 5,
              u = Math.round(_ + i + 16)
            if (
              (t.beginPath(),
              t.moveTo(_ + 2, m),
              t.lineTo(u - 2, m),
              t.arcTo(u, m, u, m + 2, 2),
              t.lineTo(u, -11),
              t.arcTo(u, -9, u - 2, -9, 2),
              t.lineTo(6, -9),
              t.lineTo(0, -5),
              t.lineTo(-6, -9),
              t.lineTo(_ + 2, -9),
              t.arcTo(_, -9, _, -11, 2),
              t.lineTo(_, m + 2),
              t.arcTo(_, m, _ + 2, m, 2),
              t.fill(),
              (t.fillStyle = '#F0F3FA'),
              (t.textBaseline = 'middle'),
              (t.textAlign = d() ? 'right' : 'left'),
              this._data.eod)
            ) {
              var T = l(t, i)
              t.fillText(a, _ + 8 + T, m + (-9 - m) / 2)
            } else {
              var c = _ + 8 + (i - s) / 2,
                p = l(t, s)
              if ((t.fillText(this._data.dateString, c + p, m + e + 8), this._data.timeString)) {
                var v = l(t, r),
                  f = _ + 8 + (i - r) / 2
                t.fillText(this._data.timeString, f + v, m + 17 * n - e)
              }
            }
            t.restore()
          }
        }
      }
      t.exports.GotoDateView = class {
        constructor(t, e) {
          ;(this._gotoDateResult = e), (this._series = t), (this._invalidated = !0), (this._renderer = new _())
        }
        update() {
          this._invalidated = !0
        }
        updateImpl() {
          delete this._point, delete this._dateString, delete this._timeString, delete this._eod
          var t = this._series.model().timeScale().timePointToIndex(this._gotoDateResult.timestamp),
            e = this._series.bars(),
            i = null
          if (
            (t < e.firstIndex() && null !== e.first()
              ? ((t = e.firstIndex()), (i = e.first().value))
              : t > e.lastIndex() && null !== e.last()
              ? ((t = e.lastIndex()), (i = e.last().value))
              : (i = e.valueAt(t)),
            null !== i)
          ) {
            var s = this._series.firstValue()
            if (null != s) {
              var l = this._series.priceScale().priceToCoordinate(i[TradingView.HIGH_PLOT], s),
                d = this._series.model().timeScale().indexToCoordinate(t)
              if (((this._point = new a(d, l)), this._gotoDateResult.eod)) this._eod = !0
              else {
                var o = this._series.model().timeScale().indexToUserTime(t)
                ;(this._dateString = new r().format(o)), this._series.isDWM() || (this._timeString = new n().format(o))
              }
            }
          }
        }
        renderer() {
          return (
            this._invalidated && (this.updateImpl(), (this._invalidated = !1)),
            this._point
              ? (this._renderer.setData({
                  point: this._point,
                  dateString: this._dateString,
                  timeString: this._timeString,
                  eod: this._eod,
                }),
                this._renderer)
              : new s()
          )
        }
      }
    },
  },
])
