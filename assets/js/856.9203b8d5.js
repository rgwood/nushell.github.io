(window.webpackJsonp=window.webpackJsonp||[]).push([[856],{1365:function(t,s,a){"use strict";a.r(s);var e=a(34),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"加载数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载数据"}},[t._v("#")]),t._v(" 加载数据")]),t._v(" "),a("p",[t._v("之前我们使用了"),a("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[a("code",[t._v("ls")])]),t._v("、"),a("RouterLink",{attrs:{to:"/book/commands/ps.html"}},[a("code",[t._v("ps")])]),t._v("、"),a("RouterLink",{attrs:{to:"/book/commands/date.html"}},[a("code",[t._v("date")])]),t._v("和"),a("RouterLink",{attrs:{to:"/book/commands/sys.html"}},[a("code",[t._v("sys")])]),t._v("等命令来加载关于文件、进程、日期时间和系统本身的信息。每条命令都会给我们提供一个信息表，以对其进行探索。我们也可以通过其他方式将数据载入表格以供使用。")],1),t._v(" "),a("h2",{attrs:{id:"打开文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开文件"}},[t._v("#")]),t._v(" 打开文件")]),t._v(" "),a("p",[t._v("Nu 在处理数据方面最强大的能力之一是"),a("RouterLink",{attrs:{to:"/book/commands/open.html"}},[a("code",[t._v("open")])]),t._v("命令。它是一个多功能命令，可以处理许多不同的数据格式。为了说明这一点让我们试着打开一个 JSON 文件：")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> open editors/vscode/package.json\n──────────────────┬───────────────────────────────────────────────────────────────────────────────\n name             │ lark\n description      │ Lark support for VS Code\n author           │ Lark developers\n license          │ MIT\n version          │ 1.0.0\n repository       │ [row type url]\n publisher        │ vscode\n categories       │ [table 0 rows]\n keywords         │ [table 1 rows]\n engines          │ [row vscode]\n activationEvents │ [table 1 rows]\n main             │ ./out/extension\n contributes      │ [row configuration grammars languages]\n scripts          │ [row compile postinstall test vscode:prepublish watch]\n devDependencies  │ [row @types/mocha @types/node tslint typescript vscode vscode-languageclient]\n──────────────────┴───────────────────────────────────────────────────────────────────────────────\n")])])]),a("p",[t._v("与"),a("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[a("code",[t._v("ls")])]),t._v('类似，打开一个 Nu 支持的文件类型，会返回一些不仅仅是文本（或一个字节流）的东西。这里我们打开了一个来自 JavaScript 项目的 "package.json" 文件。Nu 可以识别 JSON 文本并将其解析为一个数据表。')],1),t._v(" "),a("p",[t._v("如果我们想查看当前项目的版本，我们可以使用"),a("RouterLink",{attrs:{to:"/book/commands/get.html"}},[a("code",[t._v("get")])]),t._v("命令：")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> open editors/vscode/package.json | get version\n1.0.0\n")])])]),a("p",[t._v("Nu 目前支持直接从以下格式加载表数据：")]),t._v(" "),a("ul",[a("li",[t._v("csv")]),t._v(" "),a("li",[t._v("eml")]),t._v(" "),a("li",[t._v("ics")]),t._v(" "),a("li",[t._v("ini")]),t._v(" "),a("li",[t._v("json")]),t._v(" "),a("li",[t._v("nuon")]),t._v(" "),a("li",[t._v("ods")]),t._v(" "),a("li",[t._v("ssv")]),t._v(" "),a("li",[t._v("toml")]),t._v(" "),a("li",[t._v("tsv")]),t._v(" "),a("li",[t._v("url")]),t._v(" "),a("li",[t._v("vcf")]),t._v(" "),a("li",[t._v("xlsx / xls")]),t._v(" "),a("li",[t._v("xml")]),t._v(" "),a("li",[t._v("yaml / yml")])]),t._v(" "),a("p",[t._v("但是，当你加载其他的文本文件时会发生什么呢？让我们试一试：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" README.md\n")])])]),a("p",[t._v("我们会看到该文件的内容，如果文件太大则会得到一个方便的滚动视图来查看文件，然后再跳回终端。为了提高可读性，Nu 还将语法高亮显示常见的文件格式，如源码文件、Markdown 等等。")]),t._v(" "),a("p",[t._v("本质上，这些文本文件对 Nu 来说就是一个大字符串。接下来，我们将讨论如何处理这些字符串，以便从中获得我们需要的数据。")]),t._v(" "),a("h2",{attrs:{id:"处理字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理字符串"}},[t._v("#")]),t._v(" 处理字符串")]),t._v(" "),a("p",[t._v("处理来自 Nu 外部数据时一个普遍情况是，它并不总是以 Nu 理解的格式出现。通常这些数据是以字符串的形式提供给我们的。")]),t._v(" "),a("p",[t._v("想象一下，我们得到了这个数据文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> open people.txt\nOctavia | Butler | Writer\nBob | Ross | Painter\nAntonio | Vivaldi | Composer\n")])])]),a("p",[t._v("我们想要的数据都由管道（"),a("code",[t._v("|")]),t._v("）符号隔开，每人单独一行。由于 Nu 没有默认的以管道分隔的文件格式，所以我们必须自己来解析。")]),t._v(" "),a("p",[t._v("当我们引入这个文件时，我们需要做的第一件事是确保后续每次只处理一行：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> open people.txt | lines\n───┬──────────────────────────────\n 0 │ Octavia | Butler | Writer\n 1 │ Bob | Ross | Painter\n 2 │ Antonio | Vivaldi | Composer\n───┴──────────────────────────────\n")])])]),a("p",[t._v("可以看到，我们正在处理这些行，因为我们又回到了一个表中。下一步是看看是否可以把行分割成更有用的东西。为此，我们将使用"),a("RouterLink",{attrs:{to:"/book/commands/split.html"}},[a("code",[t._v("split")])]),t._v("命令。"),a("RouterLink",{attrs:{to:"/book/commands/split.html"}},[a("code",[t._v("split")])]),t._v("，顾名思义，为我们提供了一种分割字符串的方法。我们将使用"),a("RouterLink",{attrs:{to:"/book/commands/split.html"}},[a("code",[t._v("split")])]),t._v("的"),a("code",[t._v("column")]),t._v("子命令，将内容分成多列。我们会告诉它分隔符是什么，剩下的就由它来完成：")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> open people.txt | lines | split column "|"\n───┬──────────┬───────────┬───────────\n # │ column1  │ column2   │ column3\n───┼──────────┼───────────┼───────────\n 0 │ Octavia  │  Butler   │  Writer\n 1 │ Bob      │  Ross     │  Painter\n 2 │ Antonio  │  Vivaldi  │  Composer\n───┴──────────┴───────────┴───────────\n')])])]),a("p",[t._v("这看起来差不多了，只是还有一些额外的空白字符，让我们 "),a("RouterLink",{attrs:{to:"/book/commands/str_trim.html"}},[a("code",[t._v("trim")])]),t._v(" 掉这些空格：")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> open people.txt | lines | split column "|" | str trim\n───┬─────────┬─────────┬──────────\n # │ column1 │ column2 │ column3\n───┼─────────┼─────────┼──────────\n 0 │ Octavia │ Butler  │ Writer\n 1 │ Bob     │ Ross    │ Painter\n 2 │ Antonio │ Vivaldi │ Composer\n───┴─────────┴─────────┴──────────\n')])])]),a("p",[t._v("还不错，"),a("RouterLink",{attrs:{to:"/book/commands/split.html"}},[a("code",[t._v("split")])]),t._v("命令返回给我们可以使用的数据，还预设了默认的列名：")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> open people.txt | lines | split column "|" | str trim | get column1\n───┬─────────\n 0 │ Octavia\n 1 │ Bob\n 2 │ Antonio\n───┴─────────\n')])])]),a("p",[t._v("我们也可以用自定义的列名代替默认的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> open people.txt | lines | split column "|" first_name last_name job | str trim\n───┬────────────┬───────────┬──────────\n # │ first_name │ last_name │ job\n───┼────────────┼───────────┼──────────\n 0 │ Octavia    │ Butler    │ Writer\n 1 │ Bob        │ Ross      │ Painter\n 2 │ Antonio    │ Vivaldi   │ Composer\n───┴────────────┴───────────┴──────────\n')])])]),a("p",[t._v("现在，我们的数据加载到一个表中了，我们可以使用之前对表所用的各种命令来处理它：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> open people.txt | lines | split column "|" first_name last_name job | str trim | sort-by first_name\n───┬────────────┬───────────┬──────────\n # │ first_name │ last_name │ job\n───┼────────────┼───────────┼──────────\n 0 │ Antonio    │ Vivaldi   │ Composer\n 1 │ Bob        │ Ross      │ Painter\n 2 │ Octavia    │ Butler    │ Writer\n───┴────────────┴───────────┴──────────\n')])])]),a("p",[t._v("其他可用于字符串的命令有：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("str")])]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/lines.html"}},[a("code",[t._v("lines")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/size.html"}},[a("code",[t._v("size")])])],1)]),t._v(" "),a("p",[t._v("如果我们已经知道待处理的数据具有 Nu 能够理解的格式，则可以使用一些辅助命令，例如，我们打开一个 Rust 的 Cargo.lock 文件：")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[t._v("> open Cargo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lock\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This file is automatically @generated by Cargo.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# It is not intended for manual editing.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"adhoc_derive"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("version")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1.2"')]),t._v("\n")])])]),a("p",[t._v('"Cargo.lock" 实际上是一个 .toml 文件，但是文件扩展名不是 .toml。没关系，我们可以使用 '),a("code",[t._v("from toml")]),t._v(" 命令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> open Cargo.lock | from toml\n──────────┬───────────────────\n metadata │ [row 107 columns]\n package  │ [table 130 rows]\n──────────┴───────────────────\n")])])]),a("p",[t._v("每种 Nu 能打开并理解的结构化数据文本格式都有对应的 "),a("code",[t._v("from")]),t._v(" 命令可以使用，只需要把支持的格式作为子命令传给 "),a("code",[t._v("from")]),t._v(" 就可以了。")]),t._v(" "),a("h2",{attrs:{id:"以原始模式打开"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以原始模式打开"}},[t._v("#")]),t._v(" 以原始模式打开")]),t._v(" "),a("p",[t._v("虽然能够打开一个文件并立即使用其数据表很有帮助，但这并不总是我们想要的。为了获得原始文本，"),a("RouterLink",{attrs:{to:"/book/commands/open.html"}},[a("code",[t._v("open")])]),t._v("命令可以接受一个可选的"),a("code",[t._v("--raw")]),t._v("标志：")],1),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[t._v("> open Cargo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toml --raw\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nu"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("version")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1.3"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("authors")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yehuda Katz <wycats@gmail.com>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jonathan Turner <jonathan.d.turner@gmail.com>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("description")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A shell for the GitHub era"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("license")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIT"')]),t._v("\n")])])]),a("h2",{attrs:{id:"获取-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-urls"}},[t._v("#")]),t._v(" 获取 URLs")]),t._v(" "),a("p",[t._v("除了从文件系统中加载文件，你还可以通过使用"),a("RouterLink",{attrs:{to:"/book/commands/fetch.html"}},[a("code",[t._v("fetch")])]),t._v("命令来加载 URLs。这将从互联网上获取 URL 的内容并返回：")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> fetch https://blog.rust-lang.org/feed.xml\n──────┬───────────────────\n feed │ {record 2 fields}\n──────┴───────────────────\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);