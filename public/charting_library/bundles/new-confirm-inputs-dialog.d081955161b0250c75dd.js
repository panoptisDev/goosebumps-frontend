;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['new-confirm-inputs-dialog'],
  {
    iqv3: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('i8i4'),
        s = n('q1tI'),
        i = n.n(s),
        r = (n('bSeV'), n('YFKU'), n('ycFu')),
        l = n('tWVy'),
        u = n('tmL0'),
        c = n('5Ssy'),
        a = n('tc+8'),
        m = n.n(a),
        p = n('aIyQ'),
        d = n.n(p),
        f = n('qFKp'),
        b = n('jOdQ')
      function y(e) {
        const { title: t, studyMetaInfo: n, model: o, confirmInputsType: a, onCancel: p, onSubmit: y, onClose: h } = e,
          [_, C] = Object(s.useState)(!0),
          I = Object(s.useMemo)(function () {
            const e = Object.assign({}, n.defaults.inputs)
            return new m.a({ inputs: e })
          }, []),
          S = Object(s.useMemo)(function () {
            const e = new d.a()
            return {
              isInputsStudy: !0,
              symbolsResolved: () => e,
              resolvedSymbolInfoBySymbol: () => null,
              tempProperties: I,
            }
          }, []),
          w = Object(s.useRef)(null)
        return (
          Object(s.useEffect)(() => {
            if (!f.CheckMobile.any() && _ && 'symbol' === a && w.current) {
              const e = w.current.querySelector('input')
              e && e.focus()
            }
          }, [_]),
          i.a.createElement(r.a, {
            dataName: 'confirm-inputs-dialog',
            title: t,
            isOpened: _,
            onSubmit: function () {
              y(I.state().inputs), E()
            },
            onCancel: p,
            onClickOutside: E,
            onClose: E,
            render: () =>
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement('div', { className: b.separator }),
                i.a.createElement(
                  u.a,
                  { className: b.scrollable, onScroll: O },
                  i.a.createElement(c.a, { reference: w, property: I, model: o, study: S, inputs: j() }),
                ),
              ),
            defaultActionOnClose: 'none',
            submitButtonText: window.t('Apply'),
            submitOnEnterKey: !1,
          })
        )
        function O() {
          l.a.fire()
        }
        function E() {
          C(!1), h()
        }
        function j() {
          return 'symbol' === a ? n.inputs.filter((e) => e.id === n.symbolInputId()) : n.inputs.filter((e) => e.confirm)
        }
      }
      n.d(t, 'ConfirmInputsDialogRenderer', function () {
        return h
      })
      class h {
        constructor(e, t, n, s, i, r) {
          ;(this._container = document.createElement('div')),
            (this._handleClose = () => {
              o.unmountComponentAtNode(this._container), this._onClose()
            }),
            (this._title = e),
            (this._studyMetaInfo = t),
            (this._model = n),
            (this._confirmInputsType = s),
            (this._onSubmit = i),
            (this._onClose = r)
        }
        show() {
          o.render(
            s.createElement(y, {
              title: this._title,
              studyMetaInfo: this._studyMetaInfo,
              model: this._model,
              confirmInputsType: this._confirmInputsType,
              onSubmit: this._onSubmit,
              onCancel: () => {},
              onClose: this._handleClose,
            }),
            this._container,
          )
        }
      }
    },
    jOdQ: function (e, t, n) {
      e.exports = { separator: 'separator-3wSrFLTr', scrollable: 'scrollable-3wSrFLTr' }
    },
  },
])
