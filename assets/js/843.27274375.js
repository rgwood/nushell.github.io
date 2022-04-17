(window.webpackJsonp=window.webpackJsonp||[]).push([[843],{1350:function(a,s,t){"use strict";t.r(s);var e=t(34),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"自定义命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义命令"}},[a._v("#")]),a._v(" 自定义命令")]),a._v(" "),t("p",[a._v("Nu 具备组合长管道的能力使你对数据和系统有很强的控制力，但它的代价是需要大量的键盘输入。不过理想情况下，你可以保存精心设计的管道以便反复使用。")]),a._v(" "),t("p",[a._v("这就是自定义命令(custom commands)的作用。")]),a._v(" "),t("p",[a._v("下面看一个自定义命令的例子：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("在这个定义中，我们定义了"),t("code",[a._v("greet")]),a._v("命令，它需要一个参数"),t("code",[a._v("name")]),a._v("。在这个参数后面是自定义命令运行时将执行的代码块。当被调用时，自定义命令将把传递给"),t("code",[a._v("name")]),a._v("的值设置为"),t("code",[a._v("$name")]),a._v("变量，该变量在块内是可用的。")]),a._v(" "),t("p",[a._v("要运行上述命令，我们可以像调用内置命令一样调用它：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" greet "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"world"')]),a._v("\n")])])]),t("p",[a._v("当我们这样做的时候，就会得到输出，如同我们使用内置命令一样：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("───┬───────\n 0 │ hello\n 1 │ world\n───┴───────\n")])])]),t("h2",{attrs:{id:"命令名称"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令名称"}},[a._v("#")]),a._v(" 命令名称")]),a._v(" "),t("p",[a._v("在 Nushell 中，命令名是一串字符或一个带引号的字符串。下面是一些有效命令名的例子："),t("code",[a._v("greet")]),a._v(", "),t("code",[a._v("get-size")]),a._v(", "),t("code",[a._v("mycommand123")]),a._v(", "),t("code",[a._v('"mycommand"')]),a._v(", "),t("code",[a._v("😊")]),a._v(", 和"),t("code",[a._v("123")]),a._v("。")]),a._v(" "),t("p",[t("em",[a._v("注意：在 Nushell 中，通常的做法是用"),t("code",[a._v("-")]),a._v("来分隔命令的多个单词，以提高可读性。")]),a._v(" 例如，使用 "),t("code",[a._v("get-size")]),a._v(" 而不是 "),t("code",[a._v("getsize")]),a._v(" 或者 "),t("code",[a._v("get_size")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"子命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子命令"}},[a._v("#")]),a._v(" 子命令")]),a._v(" "),t("p",[a._v("你也可以使用空格来定义命令的子命令(subcommand)。例如，如果我们想给"),t("code",[a._v("str")]),a._v('添加一个新的子命令，可以通过命名我们的子命令以 "str "开头来做到。比如：')]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"str mycommand"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" hello\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("现在我们可以像调用"),t("code",[a._v("str")]),a._v("的内置子命令一样调用我们的自定义命令：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" str mycommand\n")])])]),t("h2",{attrs:{id:"参数类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数类型"}},[a._v("#")]),a._v(" 参数类型")]),a._v(" "),t("p",[a._v("在定义自定义命令时，你可以为每个参数命名并选择性地设置其类型。例如，你可以把上面的内容写成：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name: string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("参数的类型是可选的。Nushell 支持不添加类型，此时会把参数类型当作"),t("code",[a._v("any")]),a._v("。如果你在参数上标注了一个类型，Nushell 将在你调用函数的时候检查该类型。")]),a._v(" "),t("p",[a._v("例如，假设你需要输入一个"),t("code",[a._v("int")]),a._v("类型：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name: int"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\ngreet world\n")])])]),t("p",[a._v("如果我们尝试运行上述内容，Nushell 会告诉我们，类型不匹配：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("error: Type Error\n  ┌─ shell:6:7\n  │\n5 │ greet world\n  │       ^^^^^ Expected int, found world\n")])])]),t("p",[a._v("这可以帮助指导你的用户只使用支持的类型来调用你所定义的命令。")]),a._v(" "),t("p",[a._v("目前可以支持的类型是（从 0.59.0 版本开始）：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("any")])]),a._v(" "),t("li",[t("code",[a._v("block")])]),a._v(" "),t("li",[t("code",[a._v("cell-path")])]),a._v(" "),t("li",[t("code",[a._v("duration")])]),a._v(" "),t("li",[t("code",[a._v("path")])]),a._v(" "),t("li",[t("code",[a._v("expr")])]),a._v(" "),t("li",[t("code",[a._v("filesize")])]),a._v(" "),t("li",[t("code",[a._v("glob")])]),a._v(" "),t("li",[t("code",[a._v("int")])]),a._v(" "),t("li",[t("code",[a._v("math")])]),a._v(" "),t("li",[t("code",[a._v("number")])]),a._v(" "),t("li",[t("code",[a._v("operator")])]),a._v(" "),t("li",[t("code",[a._v("range")])]),a._v(" "),t("li",[t("code",[a._v("cond")])]),a._v(" "),t("li",[t("code",[a._v("bool")])]),a._v(" "),t("li",[t("code",[a._v("signature")])]),a._v(" "),t("li",[t("code",[a._v("string")])]),a._v(" "),t("li",[t("code",[a._v("variable")])])]),a._v(" "),t("h2",{attrs:{id:"可选位置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选位置参数"}},[a._v("#")]),a._v(" 可选位置参数")]),a._v(" "),t("p",[a._v("默认情况下，位置参数(positional parameters)是必须的。如果没有传递位置参数，我们将遇到一个报错：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  × Missing required positional argument.\n   ╭─[entry #23:1:1]\n 1 │ greet\n   ·      ▲\n   ·      ╰── missing name\n   ╰────\n  help: Usage: greet <name>\n")])])]),t("p",[a._v("我们可以在一个位置参数的名字后面加上一个问号（"),t("code",[a._v("?")]),a._v("），将其标记为可选参数。比如：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name?: string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\ngreet\n")])])]),t("p",[a._v("使一个位置参数成为可选参数并不改变它在命令体中被访问的名称。如上例所示，尽管参数列表中有"),t("code",[a._v("?")]),a._v("的后缀，但它仍然以"),t("code",[a._v("$name")]),a._v("的形式被访问。")]),a._v(" "),t("p",[a._v("当一个可选参数没有被传递，它在命令体中的值等于"),t("code",[a._v("null")]),a._v("和"),t("code",[a._v("$nothing")]),a._v("。我们可以利用这一点来对没有传递参数的情况进行处理：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name?: string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" null"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello, I don\'t know your name!"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\ngreet\n")])])]),t("p",[a._v("如果必需的和可选的位置参数一起使用，那么必需的参数必须先出现在定义中。")]),a._v(" "),t("h2",{attrs:{id:"标志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标志"}},[a._v("#")]),a._v(" 标志")]),a._v(" "),t("p",[a._v("除了传递位置参数之外, 你还可以通过为自定义命令定义标志(flags)来传递命名参数。")]),a._v(" "),t("p",[a._v("比如：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  name: string\n  --age: int\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$age")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("在上面的"),t("code",[a._v("greet")]),a._v("定义中，我们定义了"),t("code",[a._v("name")]),a._v("位置参数以及"),t("code",[a._v("age")]),a._v("标志。这允许"),t("code",[a._v("greet")]),a._v("的调用者也可以选择传递"),t("code",[a._v("age")]),a._v("参数。")]),a._v(" "),t("p",[a._v("你可以用以下方法调用上述内容：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" greet world --age "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),t("p",[a._v("或者：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" greet --age "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" world\n")])])]),t("p",[a._v("或者甚至完全不使用标志：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> greet world\n")])])]),t("p",[a._v("标志也可以指定一个缩写版本，这允许你传递一个更简单的标志，如同传递一个更容易阅读的全写标志那样。")]),a._v(" "),t("p",[a._v("让我们扩展前面的例子，为"),t("code",[a._v("age")]),a._v("添加一个缩写标志：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  name: string\n  --age "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("-a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": int\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$age")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("em",[a._v("注意：")]),a._v(" 标志是以其全称命名的，所以上面的例子的命令体内需要使用"),t("code",[a._v("$age")]),a._v("而不是"),t("code",[a._v("$a")]),a._v("。")]),a._v(" "),t("p",[a._v("现在，我们可以使用缩写标志来调用这个新的定义：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> greet -a 10 hello\n")])])]),t("h2",{attrs:{id:"剩余参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#剩余参数"}},[a._v("#")]),a._v(" 剩余参数")]),a._v(" "),t("p",[a._v("在某些情况下, 你可能想定义一个需要任意数量的位置参数的命令。我们可以用一个剩余参数(rest parameter)来实现这一点，通过下面的"),t("code",[a._v("...")]),a._v("语法：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".name: string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello all:"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$n")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\ngreet earth mars jupiter venus\n")])])]),t("p",[a._v("我们可以使用任意数量的参数来调用上述"),t("code",[a._v("greet")]),a._v("命令的定义，包括完全没有参数，所有的参数都将被收集到"),t("code",[a._v("$name")]),a._v("列表中。")]),a._v(" "),t("p",[a._v("剩余参数可以和位置参数一起使用：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("vip: string, "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".name: string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello to our VIP"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$vip")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"and hello to everybody else:"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$n")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#     $vip          $name")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#     ---- ------------------------")]),a._v("\ngreet moon earth mars jupiter venus\n")])])]),t("h2",{attrs:{id:"为命令添加文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为命令添加文档"}},[a._v("#")]),a._v(" 为命令添加文档")]),a._v(" "),t("p",[a._v("为了更好地帮助用户使用你的自定义命令，也可以为其添加额外的命令和参数描述。")]),a._v(" "),t("p",[a._v("以我们之前的例子为例：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  name: string\n  --age "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("-a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": int\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$age")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("一旦定义完毕，我们可以运行"),t("code",[a._v("help greet")]),a._v("来获得该命令的帮助信息：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Usage:\n  > greet <name> {flags}\n\nParameters:\n  <name>\n\nFlags:\n  -h, --help: Display this help message\n  -a, --age <integer>\n")])])]),t("p",[a._v("你可以看到我们定义的参数和标志，以及所有命令都会得到的"),t("code",[a._v("-h")]),a._v("帮助标志。")]),a._v(" "),t("p",[a._v("为了改进这个帮助，我们可以在定义中加入描述，这些描述将在帮助中显示出来：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# A greeting command that can greet the caller")]),a._v("\ndef greet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  name: string      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# The name of the person to greet")]),a._v("\n  --age "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("-a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": int   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# The age of the person")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$age")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("我们给定义和参数添加的注释会作为描述出现在命令的"),t("code",[a._v("help")]),a._v("中。")]),a._v(" "),t("p",[a._v("现在，如果我们运行"),t("code",[a._v("help greet")]),a._v("，就会得到一些更友好的帮助文本：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("A greeting command that can greet the caller\n\nUsage:\n  > greet <name> {flags}\n\nParameters:\n  <name> The name of the person to greet\n\nFlags:\n  -h, --help: Display this help message\n  -a, --age <integer>: The age of the person\n")])])]),t("h2",{attrs:{id:"管道输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管道输出"}},[a._v("#")]),a._v(" 管道输出")]),a._v(" "),t("p",[a._v("自定义命令会像内置命令一样流式输出。例如，假设我们想重构这个管道：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get name\n")])])]),t("p",[a._v("让我们把"),t("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[t("code",[a._v("ls")])]),a._v("移到我们编写的命令中：")],1),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def my-ls "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("我们就可以像使用"),t("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[t("code",[a._v("ls")])]),a._v("一样使用这个命令的输出：")],1),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> my-ls | get name\n───┬───────────────────────\n 0 │ myscript.nu\n 1 │ myscript2.nu\n 2 │ welcome_to_nushell.md\n───┴───────────────────────\n")])])]),t("p",[a._v("这让我们可以很容易地创建自定义命令并处理它们的输出。注意，我们不像其他语言那样使用返回语句，取而代之的是我们创建管道，而其输出数据流可以连接到其他管道。")]),a._v(" "),t("h2",{attrs:{id:"管道输入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管道输入"}},[a._v("#")]),a._v(" 管道输入")]),a._v(" "),t("p",[a._v("如同其他命令一样，自定义命令也可以从管道中获取输入，这个输入会自动传递给自定义命令所使用的代码块。")]),a._v(" "),t("p",[a._v("让我们创建一个把所有接收值都加倍的命令：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("def double "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  each "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("it"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" * "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("现在，如果我们在一个管道中调用上述命令，就可以看到它对输入的处理结果：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> [1 2 3] | double\n───┬─────\n 0 │ 2\n 1 │ 4\n 2 │ 6\n───┴─────\n")])])]),t("h2",{attrs:{id:"持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[a._v("#")]),a._v(" 持久化")]),a._v(" "),t("p",[a._v("关于如何持久化自定义命令，以便在你启动 Nushell 时它们是可用的，请参阅"),t("RouterLink",{attrs:{to:"/zh-CN/book/configuration.html"}},[a._v("配置章节")]),a._v("并添加你的启动脚本。")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);