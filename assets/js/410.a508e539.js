(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{876:function(e,n,a){"use strict";a.r(n);var t=a(35),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),a("p",[e._v("A common task in a shell is to control the environment that external applications will use. This is often done automatically, as the environment is packaged up and given to the external application as it launches. Sometimes, though, we want to have more precise control over what environment variables an application sees.")]),e._v(" "),a("p",[e._v("You can see the current environment variables using the "),a("code",[e._v("env")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   #           name                 type                value                 raw\n──────────────────────────────────────────────────────────────────────────────────────────\n  16   DISPLAY              string               :0                   :0\n  17   EDITOR               string               nvim                 nvim\n  28   LANG                 string               en_US.UTF-8          en_US.UTF-8\n  35   PATH                 list<unknown>        [list 16 items]      /path1:/path2:/...\n  36   PROMPT_COMMAND       block                <Block 197>          <Block 197>\n")])])]),a("p",[e._v("In Nushell, environment variables can be any value and have any type (see the "),a("code",[e._v("type")]),e._v(" column).\nThe actual value of the env. variable used within Nushell is under the "),a("code",[e._v("value")]),e._v(" column.\nYou can query the value directly using the "),a("code",[e._v("$env")]),e._v(" variable, for example, "),a("code",[e._v("$env.PATH | length")]),e._v(".\nThe last "),a("code",[e._v("raw")]),e._v(" column shows the actual value that will be sent to external applications (check "),a("a",{attrs:{href:"#environment-variable-conversions"}},[e._v("ENV_CONVERSIONS")]),e._v(" for details).")]),e._v(" "),a("h2",{attrs:{id:"single-use-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-use-environment-variables"}},[e._v("#")]),e._v(" Single-use environment variables")]),e._v(" "),a("p",[e._v("The environment is created from the settings in the Nu configuration and from the environment that Nu is run inside of.  You can update the environment permanently using the techniques listed in the "),a("RouterLink",{attrs:{to:"/book/configuration.html"}},[e._v("configuration")]),e._v(" chapter.")],1),e._v(" "),a("p",[e._v("A common shorthand, inspired by Bash and others, is also available. You can write the above example as:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> FOO=BAR echo $env.FOO\nBAR\n")])])]),a("p",[e._v("You can also temporarily update an environment variable when you run a command or pipeline of commands.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> with-env [FOO BAR] { echo $env.FOO }\nBAR\n")])])]),a("p",[e._v("The "),a("code",[e._v("with-env")]),e._v(' command will temporarily set the environment variable to the value given (here: the variable "FOO" is given the value "BAR").  Once this is done, the block will run with this new environment variable set.')]),e._v(" "),a("h2",{attrs:{id:"scoped-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoped-environment-variables"}},[e._v("#")]),e._v(" Scoped environment variables")]),e._v(" "),a("p",[e._v("You can also set environment variables that will be available in the current scope (the block you're in and any block inside of it).")]),e._v(" "),a("p",[e._v("To do so, you can use the "),a("code",[e._v("let-env")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> let-env FOO = 'BAR'\n")])])]),a("p",[e._v("let-env is similar to the "),a("strong",[e._v("export")]),e._v(" command in bash.")]),e._v(" "),a("p",[e._v("If you have more than one environment variable you'd like to set, you can create a table of name/value pairs and load multiple variables at the same time.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> load-env { "BOB": "FOO", "JAY": "BAR" }\n')])])]),a("h2",{attrs:{id:"permanent-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permanent-environment-variables"}},[e._v("#")]),e._v(" Permanent environment variables")]),e._v(" "),a("p",[e._v("You can also set environment variables that are set at startup and are available for the duration of Nushell running. These can be set in the "),a("code",[e._v("env")]),e._v(" section of the "),a("RouterLink",{attrs:{to:"/book/configuration.html"}},[e._v("config")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"defining-environment-from-custom-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-environment-from-custom-commands"}},[e._v("#")]),e._v(" Defining environment from custom commands")]),e._v(" "),a("p",[e._v("Due to the scoping rules, any environment variables defined inside a custom command will only exist inside the command's scope.\nHowever, a command defined as "),a("code",[e._v("def-env")]),e._v(" instead of "),a("code",[e._v("def")]),e._v(" (it applies also to "),a("code",[e._v("export def")]),e._v(", see "),a("RouterLink",{attrs:{to:"/book/modules.html"}},[e._v("Modules")]),e._v(") will preserve the environment on the caller's side:")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> def-env foo [] {\n    let-env FOO = 'BAR'\n}\n\n> foo\n\n> $env.FOO\nBAR\n")])])]),a("h2",{attrs:{id:"environment-variable-conversions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variable-conversions"}},[e._v("#")]),e._v(" Environment variable conversions")]),e._v(" "),a("p",[e._v("(Section text is WIP)\nYou can use the "),a("code",[e._v("ENV_CONVERSIONS")]),e._v(" environment variable to convert between a string and a value.\nThere are some examples in "),a("code",[e._v("default_config.nu")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"removing-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-environment-variables"}},[e._v("#")]),e._v(" Removing environment variables")]),e._v(" "),a("p",[e._v("You can remove an environment variable only if it was set in the current scope:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> let-env FOO = 'BAR'\n...\n> hide FOO\n")])])]),a("p",[e._v("If you want to remove an environment variable stemming from a parent scope, you can "),a("code",[e._v("hide")]),e._v(" it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> let-env FOO = 'BAR'\n> do {\n    hide FOO\n    # $nu.env.FOO does not exist\n  }\n> $env.FOO\nBAR\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);