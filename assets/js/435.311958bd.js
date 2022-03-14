(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{909:function(e,a,s){"use strict";s.r(a);var t=s(35),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"variables-and-subexpressions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables-and-subexpressions"}},[e._v("#")]),e._v(" Variables and Subexpressions")]),e._v(" "),s("p",[e._v("There are two types of evaluation expressions in Nushell: variables and subexpressions. You know that you're looking at an evaluation expression because it begins with a dollar sign ("),s("code",[e._v("$")]),e._v("). This indicates that when Nushell gets the value in this position, it will need to run an evaluation step to process the expression and then use the resulting value. Both evaluation expression forms support a simple form and a 'path' form for working with more complex data.")]),e._v(" "),s("h2",{attrs:{id:"variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),s("p",[e._v("The simpler of the two evaluation expressions is the variable. During evaluation, a variable is replaced by its value.")]),e._v(" "),s("p",[e._v("If we create a variable, we can print its contents by using "),s("code",[e._v("$")]),e._v(" to refer to it:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> let my-value = 4\n> echo $my-value\n4\n")])])]),s("p",[e._v("Variables in Nushell are immutable, that means that you can not change its value after declaration.\nThey can be shadowed in nested block, that results in:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> let my-value = 4\n> do { let my-value = 5; echo $my-value }\n5\n> echo $my-value\n4\n")])])]),s("h2",{attrs:{id:"variable-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variable-paths"}},[e._v("#")]),e._v(" Variable paths")]),e._v(" "),s("p",[e._v("A variable path works by reaching inside of the contents of a variable, navigating columns inside of it, to reach a final value. Let's say instead of "),s("code",[e._v("4")]),e._v(", we had assigned a table value:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> let my-value = [[name]; [testuser]]\n")])])]),s("p",[e._v("We can use a variable path to evaluate the variable "),s("code",[e._v("$my-value")]),e._v(" and get the value from the "),s("code",[e._v("name")]),e._v(" column in a single step:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> echo $my-value.name\ntestuser\n")])])]),s("h2",{attrs:{id:"subexpressions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subexpressions"}},[e._v("#")]),e._v(" Subexpressions")]),e._v(" "),s("p",[e._v("You can always evaluate a subexpression and use its result by wrapping the expression with parentheses "),s("code",[e._v("()")]),e._v(". Note that previous versions of Nushell (prior to 0.32) used "),s("code",[e._v("$()")]),e._v(".")]),e._v(" "),s("p",[e._v("The parentheses contain a pipeline that will run to completion, and the resulting value will then be used. For example, "),s("code",[e._v("(ls)")]),e._v(" would run the "),s("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[s("code",[e._v("ls")])]),e._v(" command and give back the resulting table and "),s("code",[e._v("(git branch --show-current)")]),e._v(" runs the external git command and returns a string with the name of the current branch. You can also use parentheses to run math expressions like "),s("code",[e._v("(2 + 3)")]),e._v(".")],1),e._v(" "),s("p",[e._v("Subexpressions can also be pipelines and not just single commands. If we wanted to get a list of filenames larger than ten kilobytes, we can use an subexpression to run a pipeline and assign this to a variable:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> let names-of-big-files = (ls | where size > 10kb)\n> echo $names-of-big-files\n───┬────────────┬──────┬──────────┬──────────────\n # │    name    │ type │   size   │   modified   \n───┼────────────┼──────┼──────────┼──────────────\n 0 │ Cargo.lock │ File │ 155.3 KB │ 17 hours ago \n 1 │ README.md  │ File │  15.9 KB │ 17 hours ago \n───┴────────────┴──────┴──────────┴──────────────\n")])])]),s("h2",{attrs:{id:"subexpressions-and-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subexpressions-and-paths"}},[e._v("#")]),e._v(" Subexpressions and paths")]),e._v(" "),s("p",[e._v("Subexpressions also support paths. For example, let's say we wanted to get a list of the filenames in the current directory. One way to do this is to use a pipeline:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> ls | get name\n")])])]),s("p",[e._v("We can do a very similar action in a single step using a subexpression path:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> echo (ls).name\n")])])]),s("p",[e._v("It depends on the needs of the code and your particular style which form works best for you.")]),e._v(" "),s("h2",{attrs:{id:"short-hand-subexpressions-row-conditions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#short-hand-subexpressions-row-conditions"}},[e._v("#")]),e._v(" Short-hand subexpressions (row conditions)")]),e._v(" "),s("p",[e._v("Nushell supports accessing columns in a subexpression using a simple short-hand. You may have already used this functionality before. If, for example, we wanted to only see rows from "),s("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[s("code",[e._v("ls")])]),e._v(" where the entry is at least ten kilobytes we can write:")],1),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> ls | where size > 10kb\n")])])]),s("p",[e._v("The "),s("code",[e._v("where size > 10kb")]),e._v(" is a command with two parts: the command name "),s("RouterLink",{attrs:{to:"/book/commands/where.html"}},[s("code",[e._v("where")])]),e._v(" and the short-hand expression "),s("code",[e._v("size > 10kb")]),e._v(". We say short-hand because "),s("code",[e._v("size")]),e._v(" here is the shortened version of writing "),s("code",[e._v("$it.size")]),e._v(". This could also be written in any of the following ways:")],1),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> ls | where $it.size > 10kb\n> ls | where ($it.size > 10kb)\n> ls | where {|$it| $it.size > 10kb }\n")])])]),s("p",[e._v("For short-hand syntax to work, the column name must appear on the left-hand side of the operation (like "),s("code",[e._v("size")]),e._v(" in "),s("code",[e._v("size > 10kb")]),e._v(").")])])}),[],!1,null,null,null);a.default=n.exports}}]);