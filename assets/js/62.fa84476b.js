(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{539:function(t,s,a){"use strict";a.r(s);var e=a(35),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This is the version of the book that works with the version of Nushell in main (0.59 and later).\nFor the 0.44 version of Nushell, you should read the "),a("RouterLink",{attrs:{to:"/old_book/"}},[t._v("0.44 version of the book")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Hello, and welcome to the Nushell project. The goal of this project is to take the Unix philosophy of shells, where pipes connect simple commands together, and bring it to the modern style of development.")]),t._v(" "),a("p",[t._v("Nu takes cues from a lot of familiar territory: traditional shells like bash, object based shells like PowerShell, gradually typed languages like TypeScript, functional programming, systems programming, and more. But rather than trying to be a jack of all trades, Nu focuses its energy on doing a few things well:")]),t._v(" "),a("ul",[a("li",[t._v("Being a flexible cross-platform shell with a modern feel")]),t._v(" "),a("li",[t._v("Solving problems as a modern programming language that allows you to work the structure of your data, wherever it may be")]),t._v(" "),a("li",[t._v("Giving clear error messages and clean IDE support")])]),t._v(" "),a("p",[t._v("The easiest way to see what Nu can do is to start with some examples, so let's dive in.")]),t._v(" "),a("p",[t._v("The first thing you'll notice when you run a command like "),a("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[a("code",[t._v("ls")])]),t._v(" is that instead of a block of text coming back, you get a structured table.")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  │         name          │ type │   size    │  modified   │")]),t._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(".html              │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("429")]),t._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ CONTRIBUTING.md       │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("955")]),t._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" mins ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ Gemfile               │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ Gemfile.lock          │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.9")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" │ LICENSE               │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" │ README.md             │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("213")]),t._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("The table is more than just showing the directory in a different way. Just like tables in a spreadsheet, this table allows us to work with the data more interactively.")]),t._v(" "),a("p",[t._v("The first thing we'll do is to sort our table by size. To do this, we'll take the output from "),a("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[a("code",[t._v("ls")])]),t._v(" and feed it into a command that can sort tables based on the contents of a column.")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sort-by size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" reverse\n╭────┬───────────────────────┬──────┬───────────┬─────────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  │         name          │ type │   size    │  modified   │")]),t._v("\n├────┼───────────────────────┼──────┼───────────┼─────────────┤\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ Gemfile.lock          │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.9")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ SUMMARY.md            │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.7")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ Gemfile               │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ LICENSE               │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" │ CONTRIBUTING.md       │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("955")]),t._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" mins ago  │\n│  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" │ books.md              │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("687")]),t._v(" B │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago  │\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("You can see that to make this work we didn't pass commandline arguments to "),a("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[a("code",[t._v("ls")])]),t._v(". Instead, we used the "),a("code",[t._v("sort-by")]),t._v(" command that Nu provides to do the sorting of the output of the "),a("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[a("code",[t._v("ls")])]),t._v(" command. To see the biggest files on top, we also used "),a("RouterLink",{attrs:{to:"/book/commands/reverse.html"}},[a("code",[t._v("reverse")])]),t._v(".")],1),t._v(" "),a("p",[t._v("Nu provides many commands that can work on tables. For example, we could filter the contents of the "),a("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[a("code",[t._v("ls")])]),t._v(" table so that it only shows files over 1 kilobyte:")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 1kb\n╭───┬───────────────────┬──────┬─────────┬────────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │       name        │ type │  size   │  modified  │")]),t._v("\n├───┼───────────────────┼──────┼─────────┼────────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ Gemfile           │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ Gemfile.lock      │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.9")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ LICENSE           │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ SUMMARY.md        │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.7")]),t._v(" KiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" days ago │\n╰───┴───────────────────┴──────┴─────────┴────────────╯\n")])])]),a("p",[t._v("Just as in the Unix philosophy, being able to have commands talk to each other gives us ways to mix-and-match in many different combinations. Let's look at a different command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮\n│  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │")]),t._v("\n├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤\n│   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7570")]),t._v(" │ nu                   │ Running │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.96")]),t._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.2")]),t._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.8")]),t._v(" GiB │\n│   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3533")]),t._v(" │ remindd              │ Sleep   │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("103.6")]),t._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.3")]),t._v(" GiB │\n│   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3495")]),t._v(" │ TVCacheExtension     │ Sleep   │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.9")]),t._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.2")]),t._v(" GiB │\n│   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3490")]),t._v(" │ MusicCacheExtension  │ Sleep   │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.9")]),t._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.2")]),t._v(" GiB │\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("You may be familiar with the "),a("RouterLink",{attrs:{to:"/book/commands/ps.html"}},[a("code",[t._v("ps")])]),t._v(" command if you've used Linux. With it, we can get a list of all the current processes that the system is running, what their status is, and what their name is. We can also see the CPU load for the processes.")],1),t._v(" "),a("p",[t._v("What if we wanted to show the processes that were actively using the CPU? Just like we did with the "),a("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[a("code",[t._v("ls")])]),t._v(" command earlier, we can also work with the table that the "),a("RouterLink",{attrs:{to:"/book/commands/ps.html"}},[a("code",[t._v("ps")])]),t._v(" command gives back to us:")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where cpu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │")]),t._v("\n├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1583")]),t._v(" │ Terminal       │ Running │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.69")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.8")]),t._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33.0")]),t._v(" GiB │\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("579")]),t._v(" │ photoanalysisd │ Running │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("139.50")]),t._v(" │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99.9")]),t._v(" MiB │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.3")]),t._v(" GiB │\n╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯\n")])])]),a("p",[t._v("So far, we've been using "),a("RouterLink",{attrs:{to:"/book/commands/ls.html"}},[a("code",[t._v("ls")])]),t._v(" and "),a("RouterLink",{attrs:{to:"/book/commands/ps.html"}},[a("code",[t._v("ps")])]),t._v(" to list files and processes. Nu also offers other commands that can create tables of useful information. Next, let's explore "),a("RouterLink",{attrs:{to:"/book/commands/date.html"}},[a("code",[t._v("date")])]),t._v(" and "),a("RouterLink",{attrs:{to:"/book/commands/sys.html"}},[a("code",[t._v("sys")])]),t._v(".")],1),t._v(" "),a("p",[t._v("Running "),a("code",[t._v("date now")]),t._v(" gives us information about the current day and time:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" now\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("-03-07 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":14:51.684619600 -08:00\n")])])]),a("p",[t._v("To get the date as a table we can feed it into "),a("code",[t._v("date to-table")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" to-table\n╭───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ year │ month │ day │ hour │ minute │ second │ timezone │")]),t._v("\n├───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" │   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" │     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v(" │      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" │ -08:00   │\n╰───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────╯\n")])])]),a("p",[t._v("Running "),a("RouterLink",{attrs:{to:"/book/commands/sys.html"}},[a("code",[t._v("sys")])]),t._v(" gives information about the system that Nu is running on:")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys\n╭───────┬───────────────────╮\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v("  │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("record "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" │\n│ cpu   │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    │\n│ disks │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    │\n│ mem   │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("record "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" │\n│ temp  │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     │\n│ net   │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    │\n╰───────┴───────────────────╯\n")])])]),a("p",[t._v("This is a bit different than the tables we saw before. The "),a("RouterLink",{attrs:{to:"/book/commands/sys.html"}},[a("code",[t._v("sys")])]),t._v(" command gives us a table that contains structured tables in the cells instead of simple values. To take a look at this data, we need to "),a("em",[t._v("get")]),t._v(" the column to view:")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v("\n╭────────────────┬────────────────────────╮\n│ name           │ Debian GNU/Linux       │\n│ os version     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("                     │\n│ kernel version │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.10")]),t._v(".92-v8+            │\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v("       │ lifeless               │\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uptime")]),t._v("         │ 19day 21hr 34min 45sec │\n│ sessions       │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("          │\n╰────────────────┴────────────────────────╯\n")])])]),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/book/commands/get.html"}},[a("code",[t._v("get")])]),t._v(" command lets us jump into the contents of a column of the table. Here, we're looking into the \"host\" column, which contains information about the host that Nu is running on. The name of the OS, the hostname, the CPU, and more. Let's get the name of the users on the system:")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get host.sessions.name\n╭───┬────╮\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ jt │\n╰───┴────╯\n")])])]),a("p",[t._v("Right now, there's just one user on the system named \"jt\". You'll notice that we can pass a column path (the "),a("code",[t._v("host.sessions")]),t._v(" part) and not just the name of the column. Nu will take the column path and go to the corresponding bit of data in the table.")]),t._v(" "),a("p",[t._v('You might have noticed something else that\'s different. Rather than having a table of data, we have just a single element: the string "jt". Nu works with both tables of data as well as strings. Strings are an important part of working with commands outside of Nu.')]),t._v(" "),a("p",[t._v("Let's see how strings work outside of Nu in action. We'll take our example from before and run the external "),a("code",[t._v("echo")]),t._v(" command (the "),a("code",[t._v("^")]),t._v(" tells Nu to not use the built-in "),a("RouterLink",{attrs:{to:"/book/commands/echo.html"}},[a("code",[t._v("echo")])]),t._v(" command):")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get host.sessions.name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" each "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ^echo "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\njt\n")])])]),a("p",[t._v("If this looks very similar to what we had before, you have a keen eye! It is similar, but with one important difference: we've called "),a("code",[t._v("^echo")]),t._v(" with the value we saw earlier. This allows us to pass data out of Nu into "),a("code",[t._v("echo")]),t._v(" (or any command outside of Nu, like "),a("code",[t._v("git")]),t._v(" for example).")]),t._v(" "),a("h3",{attrs:{id:"getting-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-help"}},[t._v("#")]),t._v(" Getting Help")]),t._v(" "),a("p",[t._v("Help text for any of Nu's builtin commands can be discovered with the "),a("RouterLink",{attrs:{to:"/book/commands/help.html"}},[a("code",[t._v("help")])]),t._v(" command. To see all commands, run "),a("code",[t._v("help commands")]),t._v(". You can also search for a topic by doing "),a("code",[t._v("help -f <topic>")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" path\nExplore and manipulate paths.\n\nThere are three ways to represent a path:\n\n* As a path literal, e.g., "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/viking/spam.txt'")]),t._v("\n* As a structured path: a table with "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'parent'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stem'")]),t._v(", and "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'extension'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("and\n* "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefix'")]),t._v(" on Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" columns. This "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v(" is produced by the "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path parse'")]),t._v("\n  subcommand.\n* As an inner list of path parts, e.g., "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[[ / home viking spam.txt ]]'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n  Splitting into parts is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v(" by the "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("path "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" command.\n\nAll subcommands accept all three variants as an input. Furthermore, the "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path\njoin'")]),t._v(" subcommand can be used to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" the structured path or path parts back into\nthe path literal.\n\nUsage:\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" path\n\nSubcommands:\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("basename")]),t._v(" - Get the final component of a path\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" - Get the parent directory of a path\n  path exists - Check whether a path exists\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expand")]),t._v(" - Try to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expand")]),t._v(" a path to its absolute form\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" - Join a structured path or a list of path parts.\n  path parse - Convert a path into structured data.\n  path relative-to - Get a path as relative to another path.\n  path "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),t._v(" - Split a path into parts by a separator.\n  path "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" - Get the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" of the object a path refers to "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e.g., file, dir, symlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nFlags:\n  -h, --help\n      Display this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);