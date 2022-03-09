(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{930:function(e,n,a){"use strict";a.r(n);var t=a(35),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mathematik"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathematik"}},[e._v("#")]),e._v(" Mathematik")]),e._v(" "),a("p",[e._v("Manchmal müssen lediglich ein paar Zahlen addiert werden, um eine Aufgabe zu erledigen. Nushell bietet dazu einen Satz an grundlegenden mathematischen Funktionen an. Mathematische Ausdrücke sind überall dort verfügbar, wo ein Befehl aufgerufen werden kann.")]),e._v(" "),a("h2",{attrs:{id:"addieren-subtrahieren-multiplizieren-dividieren"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addieren-subtrahieren-multiplizieren-dividieren"}},[e._v("#")]),e._v(" Addieren, Subtrahieren, Multiplizieren, Dividieren")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> 1 + 3\n4\n")])])]),a("p",[e._v("In Nushell, können die Operationen Addition, Subtraktion, Multiplikation und Division mit den dafür üblichen Symbolen "),a("code",[e._v("+")]),e._v(", "),a("code",[e._v("-")]),e._v(", "),a("code",[e._v("*")]),e._v(" und "),a("code",[e._v("/")]),e._v(" aufgerufen werden. Die Reihenfolge der Operatoren wird dabei berücksichtigt. Ein Beispiel: "),a("code",[e._v("1 + 2 * 3")]),e._v(" wird behandelt als "),a("code",[e._v("1 + (2 * 3)")]),e._v(". Was zum nächsten Konzept führt: Klammern.")]),e._v(" "),a("h2",{attrs:{id:"klammern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#klammern"}},[e._v("#")]),e._v(" Klammern")]),e._v(" "),a("p",[e._v("Klammern können verwendet werden, um mathematische Ausdrücke zu gruppieren. Das erlaubt es "),a("code",[e._v("(1 + 2) * 3")]),e._v(" zu verwenden, um beispielsweise die Addition vor der Multiplikation auszuführen.")]),e._v(" "),a("h2",{attrs:{id:"in-und-not-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-und-not-in"}},[e._v("#")]),e._v(" "),a("code",[e._v("in")]),e._v(" und "),a("code",[e._v("not-in")])]),e._v(" "),a("p",[e._v("Um herauszufinden, ob ein Wert in einem Datensatz ist oder nicht, können die Operatoren "),a("code",[e._v("in")]),e._v(" und "),a("code",[e._v("not-in")]),e._v(" verwendet werden.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> 1 in [1 2 3]\ntrue\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> 1 not-in [1 2 3]\nfalse\n")])])]),a("h2",{attrs:{id:"und"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#und"}},[e._v("#")]),e._v(" =~ und !~")]),e._v(" "),a("p",[e._v("Um zu überprüfen, ob ein String innerhalb eines anderen Strings zu finden ist oder nicht, können die Operatoren "),a("code",[e._v("=~")]),e._v(" und "),a("code",[e._v("!~")]),e._v(" verwendet werden.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> "foobar" =~ "foo"\ntrue\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> "foobar" !~ "baz"\ntrue\n')])])]),a("h2",{attrs:{id:"vergleiche"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vergleiche"}},[e._v("#")]),e._v(" Vergleiche")]),e._v(" "),a("p",[e._v("Die folgenden Vergleichsoperatoren sind ebenfalls verfügbar:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<")]),e._v(" - kleiner als")]),e._v(" "),a("li",[a("code",[e._v("<=")]),e._v(" - kleiner gleich")]),e._v(" "),a("li",[a("code",[e._v(">")]),e._v(" - größer als")]),e._v(" "),a("li",[a("code",[e._v(">=")]),e._v(" - größer gleich")]),e._v(" "),a("li",[a("code",[e._v("==")]),e._v(" - gleich")]),e._v(" "),a("li",[a("code",[e._v("!=")]),e._v(" - ungleich")])]),e._v(" "),a("h2",{attrs:{id:"verknupfungsoperatoren"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verknupfungsoperatoren"}},[e._v("#")]),e._v(" Verknüpfungsoperatoren")]),e._v(" "),a("p",[e._v("Nushell unterstützt auch die Operatoren "),a("code",[e._v("&&")]),e._v(' ("und") und '),a("code",[e._v("||")]),e._v(' ("oder") um zwei Operationen die Bool-Werte zurückgeben zu verbinden. Zum Beispiel: '),a("code",[e._v('ls | where name in ["one" "two" "three"] && size > 10kb')])]),e._v(" "),a("h2",{attrs:{id:"reihenfolge-von-operationen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reihenfolge-von-operationen"}},[e._v("#")]),e._v(" Reihenfolge von Operationen")]),e._v(" "),a("p",[e._v("Mathematische Operationen werden in der folgenden Reihenfolge ausgewertet (von der höchsten Priorität zur niedrigsten Priorität):")]),e._v(" "),a("ul",[a("li",[e._v("Klammern ("),a("code",[e._v("()")]),e._v(")")]),e._v(" "),a("li",[e._v("Multiplikation ("),a("code",[e._v("*")]),e._v("), Division ("),a("code",[e._v("/")]),e._v(") und Potenz ("),a("code",[e._v("**")]),e._v(")")]),e._v(" "),a("li",[e._v("Addition ("),a("code",[e._v("+")]),e._v(") und Subtraktion ("),a("code",[e._v("-")]),e._v(")")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> 3 * (1 + 2)\n9\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);