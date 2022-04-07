(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{506:function(e,a,s){"use strict";s.r(a);var t=s(35),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"nushell-0-5-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-5-0"}},[e._v("#")]),e._v(" Nushell 0.5.0")]),e._v(" "),s("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),s("p",[e._v("Today, we're happy to announce the 0.5.0 release for Nu. We've got lots of new features, including some long-requested ones, in this release.")]),e._v(" "),s("h1",{attrs:{id:"where-to-get-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),s("p",[e._v("Nu 0.5.0 is available as "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0_5_0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),s("OutboundLink")],1),e._v(" or from "),s("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),s("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),s("code",[e._v("cargo +beta install nu")]),e._v(" (or if you want all the features "),s("code",[e._v("cargo +beta install nu --all-features")]),e._v(").")]),e._v(" "),s("h1",{attrs:{id:"nu-as-a-login-shell-jonathandturner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nu-as-a-login-shell-jonathandturner"}},[e._v("#")]),e._v(" Nu as a login shell (jonathandturner)")]),e._v(" "),s("p",[e._v("One of the key features that landed in 0.5.0 is set of new capabilities that work together to allow you to use Nu as a login shell, completely independent of bash or other hosting shells. For this, we've built in support for querying and updating the environment variables and the path.")]),e._v(" "),s("p",[e._v("To get started, you'll need to first copy the environment you're using into the config. Luckily, we've also made some improvements there:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" config --set "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("path "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(":path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" config --set "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("env "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(":env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("Version 0.7.2 and later (added: Dec 24, 2019) :")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("path "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(".path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("env "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(".env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("Once these values are set, you'll be able to use Nu as your login shell.")]),e._v(" "),s("h2",{attrs:{id:"new-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-variables"}},[e._v("#")]),e._v(" New variables")]),e._v(" "),s("p",[e._v("As you saw above, we've added a few new built-in variables. These will let you know what the current values that Nu can see are for your environment, path, and the config itself.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(":env\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(":path\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(":config\n")])])]),s("p",[e._v("Version 0.7.2 and later:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(".env\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(".path\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(".config\n")])])]),s("h2",{attrs:{id:"adding-paths-to-your-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-paths-to-your-path"}},[e._v("#")]),e._v(" Adding paths to your PATH")]),e._v(" "),s("p",[e._v("One of the first things you'll notice is that the new $nu:path is structured. If you run the echo above, you might see something like this:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(":path\n━━━┯━━━━━━━━━━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# │ <value>")]),e._v("\n───┼──────────────────\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ /usr/local/sbin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ /usr/local/bin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ /usr/sbin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ /usr/bin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" │ /sbin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" │ /bin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" │ /usr/games\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" │ /usr/local/games\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" │ /snap/bin\n━━━┷━━━━━━━━━━━━━━━━━━\n")])])]),s("p",[e._v("Version 0.7.2 and later:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(".path\n━━━┯━━━━━━━━━━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# │ <value>")]),e._v("\n───┼──────────────────\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ /usr/local/sbin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ /usr/local/bin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ /usr/sbin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ /usr/bin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" │ /sbin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" │ /bin\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" │ /usr/games\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" │ /usr/local/games\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" │ /snap/bin\n━━━┷━━━━━━━━━━━━━━━━━━\n")])])]),s("p",[e._v("We've added two new commands: "),s("code",[e._v("prepend")]),e._v(" for adding items to the start of a table and "),s("code",[e._v("append")]),e._v(" for adding items to the end of a table. With these commands, we can now query out the path, update it, and save it back.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(":path "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" prepend "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/my/new/directory"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" config --set_into path\n")])])]),s("p",[e._v("Version 0.7.2 and later:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(".path "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" prepend "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/my/new/directory"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" config set_into path\n")])])]),s("h2",{attrs:{id:"adding-variables-to-your-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-variables-to-your-environment"}},[e._v("#")]),e._v(" Adding variables to your environment")]),e._v(" "),s("p",[e._v("You can use a similar set of steps to add new variables, or change existing variables, in your environment.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(":env "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" insert GREETING hello_world "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" config --set_into "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),e._v("\n")])])]),s("p",[e._v("Version 0.7.2 and later:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$nu")]),e._v(".env "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" insert GREETING hello_world "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" config set_into "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),e._v("\n")])])]),s("p",[s("em",[e._v("Note: the previous "),s("code",[e._v("add")]),e._v(" command of previous releases has been renamed "),s("code",[e._v("insert")]),e._v(" to remove confusion with mathematical functions.")])]),e._v(" "),s("h1",{attrs:{id:"on-going-improvements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-going-improvements"}},[e._v("#")]),e._v(" On-going improvements")]),e._v(" "),s("p",[e._v("We're continuing to improve the commands we currently ship as part of Nu. Here are a few you might find helpful:")]),e._v(" "),s("h2",{attrs:{id:"substrings-flare576"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#substrings-flare576"}},[e._v("#")]),e._v(" Substrings (Flare576)")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("str")]),e._v(" command now supports being able to retrieve a substring from the strings given, so you could return, for example, the first 5 characters and stop after that.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" get name\n━━━━┯━━━━━━━━━━━━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  │ <value>")]),e._v("\n────┼────────────────────\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ target\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ CODE_OF_CONDUCT.md\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ .cargo\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ src\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" │ features.toml\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" │ rustfmt.toml\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" get name "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" str --substring "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0,3"')]),e._v("\n━━━━┯━━━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  │ <value>")]),e._v("\n────┼─────────\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ COD\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ .ca\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ src\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" │ fea\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" │ rus\n")])])]),s("h2",{attrs:{id:"recycling-jdvr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recycling-jdvr"}},[e._v("#")]),e._v(" Recycling (jdvr)")]),e._v(" "),s("p",[e._v("Ever wish you could "),s("code",[e._v("rm")]),e._v(" things, but not forever? You can now tell "),s("code",[e._v("rm")]),e._v(" to send items to your platform's recycle bin rather than deleting them forever. As with our other commands, this works across all the platforms that Nu supports.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" myfile.txt --trash\n")])])]),s("h2",{attrs:{id:"parameter-descriptions-jonathandturner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameter-descriptions-jonathandturner"}},[e._v("#")]),e._v(" Parameter descriptions (jonathandturner)")]),e._v(" "),s("p",[e._v("We're also continuing to improve the built-in help system. New in this release are descriptions for the flags and parameters that the command uses. For example, here's a look at what the help for "),s("code",[e._v("rm")]),e._v(" now looks like:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v("\nRemove a "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("\n\nUsage:\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\nparameters:\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" the "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" path to remove\n\nflags:\n  --trash: use the recycle bin on the platform instead of permanently deleting\n  --recursive: delete subdirectories recursively\n")])])]),s("h1",{attrs:{id:"new-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-commands"}},[e._v("#")]),e._v(" New commands")]),e._v(" "),s("p",[e._v("In addition to the new "),s("code",[e._v("append")]),e._v(" and "),s("code",[e._v("prepend")]),e._v(" we mentioned earlier, we've added a few new commands to Nu.")]),e._v(" "),s("h2",{attrs:{id:"average-notryanb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#average-notryanb"}},[e._v("#")]),e._v(" Average (notryanb)")]),e._v(" "),s("p",[e._v("Growing our set of mathematics functions for working with numbers, we now have an "),s("code",[e._v("average")]),e._v(" command which will take the average of values given to it.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" get size "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" average\n")])])]),s("h2",{attrs:{id:"read-jonathandturner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-jonathandturner"}},[e._v("#")]),e._v(" Read (jonathandturner)")]),e._v(" "),s("p",[e._v("We've also introduced a new command to load in strings as tables. This new "),s("code",[e._v("read")]),e._v(" command will take a pattern that describes the columns, their names, and where they are in each row of the string.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" .editorconfig\nroot "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nindent_style "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" space\nindent_size "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("\ncharset "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" utf-8\ntrim_trailing_whitespace "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\ninsert_final_newline "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\nend_of_line "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" lf\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" .editorconfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{variable} = {value}"')]),e._v("\n━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# │ variable                 │ value")]),e._v("\n───┼──────────────────────────┼───────\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" │ root                     │ "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" │ indent_style             │ space\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" │ indent_size              │ "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" │ charset                  │ utf-8\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" │ trim_trailing_whitespace │ "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" │ insert_final_newline     │ "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" │ end_of_line              │ lf\n")])])]),s("h1",{attrs:{id:"bugfixes-jonathandturner-jesterornot-thegedge-andrasio-wycats-notryanb-detegr-t-hart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bugfixes-jonathandturner-jesterornot-thegedge-andrasio-wycats-notryanb-detegr-t-hart"}},[e._v("#")]),e._v(" Bugfixes (jonathandturner, JesterOrNot, thegedge, andrasio, wycats, notryanb, Detegr, t-hart)")]),e._v(" "),s("p",[e._v("As always, we've had lots of bugfixes. A "),s("em",[e._v("huge")]),e._v(' "thank you!" to folks who reported issues, fixed issues, and just generally shared their experience with the shell. It\'s much appreciated and helps to continue making Nu that much better.')]),e._v(" "),s("h1",{attrs:{id:"survey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#survey"}},[e._v("#")]),e._v(" Survey")]),e._v(" "),s("p",[e._v("If you haven't already taken it, we'd love to hear your feedback in a quick (roughly 3 question) "),s("a",{attrs:{href:"https://t.co/nujSjnI0dr?amp=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("survey"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h1",{attrs:{id:"looking-forward"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward"}},[e._v("#")]),e._v(" Looking forward")]),e._v(" "),s("p",[e._v("There are a bunch of areas we're currently working on to make Nu more stable and feature complete. Until this work is finished, please consider Nu to be somewhere in the "),s("em",[e._v("pre-alpha")]),e._v(" to "),s("em",[e._v("alpha")]),e._v(" quality level.")]),e._v(" "),s("p",[e._v("That said, we're excited to merge this work and continue to take steps towards a more full-featured shell. Soon to be coming will be Nu working on stable Rust(!!), some improvements in the Nu internal engine which will make it possible to have better streaming and cleaner commands, and features like aliases.")])])}),[],!1,null,null,null);a.default=n.exports}}]);