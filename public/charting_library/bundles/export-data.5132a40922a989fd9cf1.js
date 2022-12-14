;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['export-data'],
  {
    SIoL: function (e, t, s) {
      'use strict'
      s.r(t),
        s.d(t, 'exportData', function () {
          return r
        })
      s('YFKU')
      var n = s('Eyy1'),
        o = s('ZJKN'),
        i = s('k9/m'),
        l = s('23IT')
      const c = { includeTime: !0, includeUserTime: !1, includeSeries: !0, includedStudies: 'all' }
      function r(e, t = {}) {
        const s = Object.assign({}, c, t),
          l = { schema: [], data: [] },
          r = e.timeScale().points(),
          u = e.mainSeries(),
          h = (function (e, t) {
            const s = e.allStudies().filter((e) => e.showInObjectTree())
            if ('all' === t) return s
            return s.filter((e) => t.includes(e.id()))
          })(e, s.includedStudies),
          p = (function (e, t, s, l) {
            const c = Object(n.ensureNotNull)(void 0 !== s ? e.indexOf(s, !0) : e.firstIndex()),
              r = Object(n.ensureNotNull)(void 0 !== l ? e.indexOf(l, !0) : e.lastIndex())
            let a = r,
              u = c
            for (const n of t) {
              const e = n.search(c, i.PlotRowSearchMode.NearestRight)
              null !== e && e.index < a && (a = e.index)
              const t = n.search(r, i.PlotRowSearchMode.NearestLeft)
              null !== t && t.index > u && (u = t.index)
            }
            return Object(n.assert)(a <= u, 'Range must contain at least 1 time point'), new o.BarsRange(a, u)
          })(r, [u.bars()], s.from, s.to),
          m = p.firstBar(),
          w = p.lastBar()
        s.includeTime && l.schema.push({ type: 'time' })
        const b = l.schema.length
        s.includeUserTime && l.schema.push({ type: 'userTime' })
        const O = l.schema.length
        s.includeSeries &&
          (l.schema.push(d('open')), l.schema.push(d('high')), l.schema.push(d('low')), l.schema.push(d('close')))
        let T = l.schema.length
        const g = []
        for (const n of h) {
          const e = a(n)
          g.push(e), l.schema.push(...e.fields)
        }
        const N = l.schema.length
        if (0 === N) return l
        for (let n = m; n <= w; ++n) {
          const e = new Float64Array(N)
          e.fill(NaN), l.data.push(e)
        }
        if (s.includeTime) for (let o = m; o <= w; ++o) l.data[o - m][0] = Object(n.ensureNotNull)(r.valueAt(o))
        if (s.includeUserTime) {
          const t = e.timeScale()
          for (let e = m; e <= w; ++e) l.data[e - m][b] = Object(n.ensureNotNull)(t.indexToUserTime(e)).getTime() / 1e3
        }
        if (s.includeSeries) {
          u.bars()
            .range(m, w)
            .each((e, t) => {
              const s = l.data[e - m]
              return (s[O] = f(t[1])), (s[O + 1] = f(t[2])), (s[O + 2] = f(t[3])), (s[O + 3] = f(t[4])), !1
            })
        }
        for (let n = 0; n < h.length; ++n) {
          const e = h[n],
            t = g[n]
          for (let s = 0; s < t.fields.length; ++s) {
            const n = t.fieldPlotOffsets[s],
              o = t.fieldToPlotIndex[s],
              i = m - n,
              c = w - n,
              r = T + s
            e.data()
              .range(i, c)
              .each((e, t) => ((l.data[e - i][r] = f(t[o])), !1))
          }
          T += t.fields.length
        }
        return l
      }
      function a(e) {
        const t = e.metaInfo(),
          s = { fieldToPlotIndex: [], fieldPlotOffsets: [], fields: [] },
          o = e.id(),
          i = e.title(!1, void 0, !1)
        for (let c = 0; c < t.plots.length; ++c) {
          const r = t.plots[c]
          let a,
            d = ''
          if (
            Object(l.isLinePlot)(r) ||
            Object(l.isShapesPlot)(r) ||
            Object(l.isCharsPlot)(r) ||
            Object(l.isArrowsPlot)(r)
          )
            a = Object(n.ensureDefined)(t.styles)[r.id]
          else if (Object(l.isOhlcPlot)(r))
            switch (((a = t.ohlcPlots && t.ohlcPlots[r.target]), r.type)) {
              case 'ohlc_open':
                d = ` (${window.t('Open')})`
                break
              case 'ohlc_high':
                d = ' (' + window.t('High')
                break
              case 'ohlc_low':
                d = ` (${window.t('Low')})`
                break
              case 'ohlc_close':
                d = ` (${window.t('Close')})`
            }
          if (void 0 === a || a.isHidden || void 0 === a.title) continue
          const f = `${a.title}${d}`
          s.fields.push(u(o, i, f)), s.fieldToPlotIndex.push(c + 1), s.fieldPlotOffsets.push(e.offset(r.id))
        }
        return s
      }
      function u(e, t, s) {
        return { type: 'value', sourceType: 'study', sourceId: e, sourceTitle: t, plotTitle: s }
      }
      function d(e) {
        return { type: 'value', sourceType: 'series', plotTitle: e }
      }
      function f(e) {
        return null != e ? e : NaN
      }
    },
  },
])
