(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(t,s,a){"use strict";a.r(s);var e=a(0),i=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("Streuungsparameter geben an, wie zerstreut deine Daten sind und helfen bei der Bestimmung der statistischen Signifikanz.")]),t._m(1),t._m(2),t._m(3),a("p",[t._v("Diese Formel gilt für diskrete, mindestens intervallskalierte oder binäre Zufallsvariablen.")]),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("V")]),a("mi",[t._v("a")]),a("mi",[t._v("r")]),a("mo",[t._v("(")]),a("mi",[t._v("X")]),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("mi",[t._v("E")]),a("mo",[t._v("(")]),a("mo",[t._v("(")]),a("mi",[t._v("X")]),a("mo",[t._v("−")]),a("mi",[t._v("E")]),a("mo",[t._v("(")]),a("mi",[t._v("X")]),a("mo",[t._v(")")]),a("msup",[a("mo",[t._v(")")]),a("mn",[t._v("2")])],1),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("msub",[a("mo",[t._v("∑")]),a("mrow",[a("mi",[t._v("j")]),a("mo",[t._v("≥")]),a("mn",[t._v("1")])],1)],1),a("mo",[t._v("(")]),a("msub",[a("mi",[t._v("x")]),a("mi",[t._v("j")])],1),a("mo",[t._v("−")]),a("mi",[t._v("μ")]),a("msup",[a("mo",[t._v(")")]),a("mn",[t._v("2")])],1),a("mo",[t._v("⋅")]),a("mi",[t._v("f")]),a("mo",[t._v("(")]),a("msub",[a("mi",[t._v("x")]),a("mi",[t._v("j")])],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("    Var(X) = E((X - E(X))^2) = \\sum_{j \\geq 1} (x_j - \\mu)^2 \\cdot f(x_j)\n")])],1)],1)],1),t._m(4)])])]),a("p",[a("em",[t._v("Das heißt:")]),t._v(" Die Varianz von X ist die summierte Differenz zwischen den Werten und dem arithmetischen Mittel ("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("x")]),a("mi",[t._v("j")])],1),a("mo",[t._v("−")]),a("mi",[t._v("μ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x_j - \\mu")])],1)],1)],1),t._m(5)]),t._v(") quadriert in Verbindung mit der Auftrittswahrscheinlichkeit des Wertes ("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v("(")]),a("msub",[a("mi",[t._v("x")]),a("mi",[t._v("j")])],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(x_j)")])],1)],1)],1),t._m(6)]),t._v(").")]),t._m(7),a("p",[t._v("Diese Formel gilt für stetige Zufallsvariablen.")]),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("V")]),a("mi",[t._v("a")]),a("mi",[t._v("r")]),a("mo",[t._v("(")]),a("mi",[t._v("X")]),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("mi",[t._v("E")]),a("mo",[t._v("(")]),a("mo",[t._v("(")]),a("mi",[t._v("X")]),a("mo",[t._v("−")]),a("mi",[t._v("E")]),a("mo",[t._v("(")]),a("mi",[t._v("X")]),a("mo",[t._v(")")]),a("msup",[a("mo",[t._v(")")]),a("mn",[t._v("2")])],1),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("msubsup",[a("mo",[t._v("∫")]),a("mrow",[a("mo",[t._v("−")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∞")])],1),a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("∞")])],1)],1),a("mo",[t._v("(")]),a("mi",[t._v("x")]),a("mo",[t._v("−")]),a("mi",[t._v("μ")]),a("msup",[a("mo",[t._v(")")]),a("mn",[t._v("2")])],1),a("mo",[t._v("⋅")]),a("mi",[t._v("f")]),a("mo",[t._v("(")]),a("mi",[t._v("x")]),a("mo",[t._v(")")]),a("mi",[t._v("d")]),a("mi",[t._v("x")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("    Var(X) = E((X - E(X))^2) = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 \\cdot f(x) dx\n")])],1)],1)],1),t._m(8)])])]),a("p",[a("em",[t._v("Das heißt:")]),t._v(" Die Varianz von X ist die Differenz der Flächeninhalte zwischen den Werten und dem arithmetischen Mittel ("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("x")]),a("mo",[t._v("−")]),a("mi",[t._v("μ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x - \\mu")])],1)],1)],1),t._m(9)]),t._v(") in Verbindung mit der Auftrittswahrscheinlichkeit des Wertes ("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v("(")]),a("mi",[t._v("x")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(x)")])],1)],1)],1),t._m(10)]),t._v(") in der Ableitung nach "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("x")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x")])],1)],1)],1),t._m(11)]),t._v(".")]),t._m(12),t._m(13),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("σ")]),a("mo",[t._v("=")]),a("mo",[t._v("+")]),a("msqrt",[a("mrow",[a("mi",[t._v("V")]),a("mi",[t._v("a")]),a("mi",[t._v("r")]),a("mo",[t._v("(")]),a("mi",[t._v("x")]),a("mo",[t._v(")")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("    \\sigma = +\\sqrt{Var(x)}\n")])],1)],1)],1),t._m(14)])])]),t._m(15),t._m(16),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("Z")]),a("mo",[t._v("=")]),a("mfrac",[a("mrow",[a("mi",[t._v("X")]),a("mo",[t._v("−")]),a("msub",[a("mi",[t._v("μ")]),a("mrow",[a("mi",[t._v("x")])],1)],1)],1),a("mrow",[a("msub",[a("mi",[t._v("σ")]),a("mrow",[a("mi",[t._v("x")])],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("    Z = \\frac{X - \\mu_\\mathcal{x}}{\\sigma_\\mathcal{x}}\n")])],1)],1)],1),t._m(17)])])]),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("E")]),a("mo",[t._v("(")]),a("mi",[t._v("Z")]),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("    E(Z) = 0\n")])],1)],1)],1),t._m(18)])])]),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("V")]),a("mi",[t._v("a")]),a("mi",[t._v("r")]),a("mo",[t._v("(")]),a("mi",[t._v("Z")]),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("    Var(Z) = 1\n")])],1)],1)],1),t._m(19)])])]),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"streuungsparameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streuungsparameter","aria-hidden":"true"}},[this._v("#")]),this._v(" Streuungsparameter")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"varianz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#varianz","aria-hidden":"true"}},[this._v("#")]),this._v(" Varianz")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Die Varianz gibt an … "),s("code",[this._v("TODO")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"diskrete-zufallsvariablen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diskrete-zufallsvariablen","aria-hidden":"true"}},[this._v("#")]),this._v(" Diskrete Zufallsvariablen")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.050005em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.463782em","vertical-align":"-1.413777em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.413em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"1.177669em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mrel"},[t._v("≥")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),a("span",{staticStyle:{top:"-0.000005000000000032756em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",[a("span",{staticClass:"op-symbol large-op mop"},[t._v("∑")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit"},[t._v("μ")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.413em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("⋅")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.58333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.8694379999999999em","vertical-align":"-0.286108em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[this._v("x")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[this._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[this._v("j")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[this._v("​")])]),this._v("​")])])]),s("span",{staticClass:"mbin"},[this._v("−")]),s("span",{staticClass:"mord mathit"},[this._v("μ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.036108em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"stetige-zufallsvariablen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stetige-zufallsvariablen","aria-hidden":"true"}},[this._v("#")]),this._v(" Stetige Zufallsvariablen")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.36em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.330581em","vertical-align":"-0.970581em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.413em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mop"},[a("span",{staticClass:"op-symbol large-op mop",staticStyle:{"margin-right":"0.44445em",top:"-0.0011249999999999316em"}},[t._v("∫")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.91225em","margin-left":"-0.44445em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("∞")])])])]),a("span",{staticStyle:{top:"-0.974em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("∞")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit"},[t._v("μ")]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.413em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("⋅")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mord mathit"},[t._v("d")]),a("span",{staticClass:"mord mathit"},[t._v("x")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.58333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.7777700000000001em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[this._v("x")]),s("span",{staticClass:"mbin"},[this._v("−")]),s("span",{staticClass:"mord mathit"},[this._v("μ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[this._v("f")]),s("span",{staticClass:"mopen"},[this._v("(")]),s("span",{staticClass:"mord mathit"},[this._v("x")]),s("span",{staticClass:"mclose"},[this._v(")")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[this._v("x")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"standardabweichung"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standardabweichung","aria-hidden":"true"}},[this._v("#")]),this._v(" Standardabweichung")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("TODO")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.9838800000000001em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.24001em","vertical-align":"-0.2561299999999999em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("σ")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord"},[t._v("+")]),a("span",{staticClass:"sqrt mord"},[a("span",{staticClass:"sqrt-sign",staticStyle:{top:"-0.09388000000000007em"}},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[a("span",{staticClass:"delimsizing size1"},[t._v("√")])])]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")])])]),a("span",{staticStyle:{top:"-0.90388em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped sqrt-line"})]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),t._v("​")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"standardisierung"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standardisierung","aria-hidden":"true"}},[this._v("#")]),this._v(" Standardisierung")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("TODO")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.36033em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.19633em","vertical-align":"-0.8360000000000001em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("Z")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("σ")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("x")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("μ")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("x")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base displaystyle textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[this._v("E")]),s("span",{staticClass:"mopen"},[this._v("(")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[this._v("Z")]),s("span",{staticClass:"mclose"},[this._v(")")]),s("span",{staticClass:"mrel"},[this._v("=")]),s("span",{staticClass:"mord mathrm"},[this._v("0")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("Z")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"quantile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quantile","aria-hidden":"true"}},[this._v("#")]),this._v(" Quantile")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("TODO")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"kovarianz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kovarianz","aria-hidden":"true"}},[this._v("#")]),this._v(" Kovarianz")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("TODO")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"korrelation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#korrelation","aria-hidden":"true"}},[this._v("#")]),this._v(" Korrelation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("TOOD")])])}],!1,null,null,null);s.default=i.exports}}]);