(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{925:function(t,e,s){"use strict";s.r(e);var a=s(35),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operators"}},[t._v("#")]),t._v(" Operators")]),t._v(" "),s("p",[t._v("Nushell supports the following operators for common math, logic, and string operations:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Operator")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("+")])]),t._v(" "),s("td",[t._v("add")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-")])]),t._v(" "),s("td",[t._v("subtract")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[t._v("multiply")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("/")])]),t._v(" "),s("td",[t._v("divide")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("**")])]),t._v(" "),s("td",[t._v("exponentiation (power)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("mod")])]),t._v(" "),s("td",[t._v("modulo")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("==")])]),t._v(" "),s("td",[t._v("equal")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("!=")])]),t._v(" "),s("td",[t._v("not equal")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<")])]),t._v(" "),s("td",[t._v("less than")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<=")])]),t._v(" "),s("td",[t._v("less than or equal")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(">")])]),t._v(" "),s("td",[t._v("greater than")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(">=")])]),t._v(" "),s("td",[t._v("greater than or equal")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("=~")])]),t._v(" "),s("td",[t._v("regex match / string contains another")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("!~")])]),t._v(" "),s("td",[t._v("inverse regex match / string does "),s("em",[t._v("not")]),t._v(" contain another")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("in")])]),t._v(" "),s("td",[t._v("value in list")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("not-in")])]),t._v(" "),s("td",[t._v("value not in list")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("&&")])]),t._v(" "),s("td",[t._v("and two Boolean values")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("||")])]),t._v(" "),s("td",[t._v("or two Boolean values")])])])]),t._v(" "),s("p",[t._v("Parentheses can be used for grouping to specify evaluation order or for calling commands and using the results in an expression.")]),t._v(" "),s("h2",{attrs:{id:"order-of-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#order-of-operations"}},[t._v("#")]),t._v(" Order of operations")]),t._v(" "),s("p",[t._v("Math operations are evaluated in the follow order (from highest precedence to lowest):")]),t._v(" "),s("ul",[s("li",[t._v("Parentheses ("),s("code",[t._v("()")]),t._v(")")]),t._v(" "),s("li",[t._v("Multiply ("),s("code",[t._v("*")]),t._v(") and Divide ("),s("code",[t._v("/")]),t._v(") and Power ("),s("code",[t._v("**")]),t._v(")")]),t._v(" "),s("li",[t._v("Add ("),s("code",[t._v("+")]),t._v(") and Subtract ("),s("code",[t._v("-")]),t._v(")")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> 3 * (1 + 2)\n9\n")])])]),s("h2",{attrs:{id:"regular-expression-string-contains-operators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regular-expression-string-contains-operators"}},[t._v("#")]),t._v(" Regular Expression / string-contains Operators")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("=~")]),t._v(" and "),s("code",[t._v("!~")]),t._v(" operators provide a convenient way to evaluate "),s("a",{attrs:{href:"https://cheatography.com/davechild/cheat-sheets/regular-expressions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("regular expressions"),s("OutboundLink")],1),t._v(". You don't need to know regular expressions to use them - they're also an easy way to check whether 1 string contains another.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("string =~ pattern")]),t._v(" returns "),s("strong",[t._v("true")]),t._v(" if "),s("code",[t._v("string")]),t._v(" contains a match for "),s("code",[t._v("pattern")]),t._v(", and "),s("strong",[t._v("false")]),t._v(" otherwise.")]),t._v(" "),s("li",[s("code",[t._v("string !~ pattern")]),t._v(" returns "),s("strong",[t._v("false")]),t._v(" if "),s("code",[t._v("string")]),t._v(" contains a match for "),s("code",[t._v("pattern")]),t._v(", and "),s("strong",[t._v("true")]),t._v(" otherwise.")])]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("foobarbaz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns true")]),t._v("\nfoobarbaz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("~ bar "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v(" ^nu "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# returns all files whose names start with "nu"')]),t._v("\n")])])]),s("p",[t._v("Both operators use "),s("a",{attrs:{href:"https://docs.rs/regex/latest/regex/struct.Regex.html#method.is_match",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Rust regex crate's "),s("code",[t._v("is_match()")]),t._v(" function"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"case-sensitivity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-sensitivity"}},[t._v("#")]),t._v(" Case Sensitivity")]),t._v(" "),s("p",[t._v("Operators are usually case-sensitive when operating on strings. There are a few ways to do case-insensitive work instead:")]),t._v(" "),s("ol",[s("li",[t._v("In the regular expression operators, specify the "),s("code",[t._v("(?i)")]),t._v(" case-insensitive mode modifier:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(?i)foo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns true")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Use the "),s("RouterLink",{attrs:{to:"/book/commands/str_contains.html"}},[s("code",[t._v("str contains")])]),t._v(" command's "),s("code",[t._v("--insensitive")]),t._v(" flag:")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str contains --insensitive "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Convert strings to lowercase with "),s("RouterLink",{attrs:{to:"/book/commands/str_downcase.html"}},[s("code",[t._v("str downcase")])]),t._v(" before comparing:")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str downcase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Foo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str downcase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);