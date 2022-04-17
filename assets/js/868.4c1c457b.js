(window.webpackJsonp=window.webpackJsonp||[]).push([[868],{1375:function(s,a,t){"use strict";t.r(a);var e=t(34),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"变量和子表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量和子表达式"}},[s._v("#")]),s._v(" 变量和子表达式")]),s._v(" "),t("p",[s._v("在 Nushell 中有两种类型的求值表达式：变量和子表达式。如果你看到一个以美元符号（"),t("code",[s._v("$")]),s._v('）开头的字符串的话，你就应该知道你看到的是一个求值表达式。这表明当 Nushell 运行到此处时需要执行一个求值操作来处理这个表达式并使用此结果值。这两种求值表达式都支持一个简单形式和一个"路径"形式，用于处理更复杂的数据。')]),s._v(" "),t("h2",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),t("p",[s._v("在两种求值表达式中比较简单的是变量。在求值过程中，变量被其值所取代。")]),s._v(" "),t("p",[s._v("如果我们创建了一个变量，我们可以通过使用"),t("code",[s._v("$")]),s._v("来引用它并打印其内容：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" my-value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$my")]),s._v("-value\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])])]),t("p",[s._v("Nushell 中的变量是不可变的，这意味着你不能在声明后修改它的值。\n不过它们可以在嵌套块中被隐藏，这导致：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" my-value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" my-value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$my")]),s._v("-value "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$my")]),s._v("-value\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])])]),t("h2",{attrs:{id:"变量路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量路径"}},[s._v("#")]),s._v(" 变量路径")]),s._v(" "),t("p",[s._v("变量路径通过深入变量的内容，找到其中的列，并最终获得一个值。比如，对于前面的例子如果我们不是赋值"),t("code",[s._v("4")]),s._v("，而是赋值了一个表的值：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" my-value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("testuser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("我们可以使用一个变量路径来访问变量"),t("code",[s._v("$my-value")]),s._v("并只用一步从"),t("code",[s._v("name")]),s._v("列获得数值：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$my")]),s._v("-value.name\ntestuser\n")])])]),t("h2",{attrs:{id:"子表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子表达式"}},[s._v("#")]),s._v(" 子表达式")]),s._v(" "),t("p",[s._v("你总是可以通过用圆括号"),t("code",[s._v("()")]),s._v("来执行一个子表达式并使用其结果。请注意，Nushell 以前的版本（0.32 以前）使用"),t("code",[s._v("$()")]),s._v("。")]),s._v(" "),t("p",[s._v("括号中包含了一个流水线，该流水线将被执行完毕然后使用结果值。例如，"),t("code",[s._v("(ls)")]),s._v("将运行"),t("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[t("code",[s._v("ls")])]),s._v("命令并返回结果表，"),t("code",[s._v("(git branch --show-current)")]),s._v("运行外部"),t("code",[s._v("git")]),s._v("命令并返回一个包含当前分支名称的字符串。你也可以使用括号来运行数学表达式，如"),t("code",[s._v("(2 + 3)")]),s._v("。")],1),s._v(" "),t("p",[s._v("子表达式也可以是管道，而不仅仅是单个命令。如果我们想得到一个大于 10KB 的文件名列表，我们可以使用子表达式来运行一个管道，并将其赋值给一个变量：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" names-of-big-files "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 10kb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$names")]),s._v("-of-big-files\n───┬────────────┬──────┬──────────┬──────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │    name    │ type │   size   │   modified")]),s._v("\n───┼────────────┼──────┼──────────┼──────────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Cargo.lock │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("155.3")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" hours ago\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ README.md  │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.9")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" hours ago\n───┴────────────┴──────┴──────────┴──────────────\n")])])]),t("h2",{attrs:{id:"子表达式和路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子表达式和路径"}},[s._v("#")]),s._v(" 子表达式和路径")]),s._v(" "),t("p",[s._v("子表达式也支持路径，例如，假设我们想获得当前目录下的文件名列表，其中一个办法是使用管道：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get name\n")])])]),t("p",[s._v("我们也可以使用子表达式路径只需一步即可：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ls"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".name\n")])])]),t("p",[s._v("这取决于代码的需要和你特有的最适合你的风格。")]),s._v(" "),t("h2",{attrs:{id:"简化子表达式-行条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简化子表达式-行条件"}},[s._v("#")]),s._v(" 简化子表达式 (行条件)")]),s._v(" "),t("p",[s._v("Nushell 支持使用一种简化的方式访问子表达式中的列，你可能已经使用过这个功能了。例如，如果我们想只看到"),t("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[t("code",[s._v("ls")])]),s._v("中大小至少为 10KB 的行，我们可以通过：")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 10kb\n")])])]),t("p",[t("code",[s._v("where size > 10kb")]),s._v("是一个由两部分组成的命令：命令名"),t("RouterLink",{attrs:{to:"/book/commands/where.html"}},[t("code",[s._v("where")])]),s._v("和简化的表达式"),t("code",[s._v("size > 10kb")]),s._v("。我们说简化是因为这里的"),t("code",[s._v("size")]),s._v("是"),t("code",[s._v("$it.size")]),s._v("的简洁版。也可以用以下任何一种方式来写：")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(".size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 10kb\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(".size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 10kb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(".size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 10kb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("为了使简化语法正常工作，列名必须出现在操作的左侧（如"),t("code",[s._v("size > 10kb")]),s._v("中的"),t("code",[s._v("size")]),s._v("）。")])])}),[],!1,null,null,null);a.default=r.exports}}]);