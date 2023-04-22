import{_ as d,M as s,p as r,q as c,Q as e,t as n,N as t,U as o,a1 as i}from"./framework-344bb0e4.js";const h={},u=i(`<h1 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> Environment</h1><p>A common task in a shell is to control the environment that external applications will use. This is often done automatically, as the environment is packaged up and given to the external application as it launches. Sometimes, though, we want to have more precise control over what environment variables an application sees.</p><p>You can see the current environment variables in the $env variable:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>~&gt; $env | table -e
╭──────────────────────────────────┬───────────────────────────────────────────╮
│                                  │ ╭──────┬────────────────────────────────╮ │
│ ENV_CONVERSIONS                  │ │      │ ╭─────────────┬──────────────╮ │ │
│                                  │ │ PATH │ │ from_string │ &lt;Closure 32&gt; │ │ │
│                                  │ │      │ │ to_string   │ &lt;Closure 34&gt; │ │ │
│                                  │ │      │ ╰─────────────┴──────────────╯ │ │
│                                  │ │      │ ╭─────────────┬──────────────╮ │ │
│                                  │ │ Path │ │ from_string │ &lt;Closure 36&gt; │ │ │
│                                  │ │      │ │ to_string   │ &lt;Closure 38&gt; │ │ │
│                                  │ │      │ ╰─────────────┴──────────────╯ │ │
│                                  │ ╰──────┴────────────────────────────────╯ │
│ HOME                             │ /Users/jelle                              │
│ LSCOLORS                         │ GxFxCxDxBxegedabagaced                    │
| ...                              | ...                                       |
╰──────────────────────────────────┴───────────────────────────────────────────╯
</code></pre></div><p>In Nushell, environment variables can be any value and have any type. You can see the type of an env variable with the describe command, for example: <code>$env.PROMPT_COMMAND | describe</code>.</p><p>To send environment variables to external applications, the values will need to be converted to strings. See <a href="#environment-variable-conversions">Environment variable conversions</a> on how this works.</p>`,6),v=e("h2",{id:"setting-environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-environment-variables","aria-hidden":"true"},"#"),n(" Setting environment variables")],-1),m=e("p",null,"There are several ways to set an environment variable:",-1),g={id:"let-env",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#let-env","aria-hidden":"true"},"#",-1),p=e("code",null,"let-env",-1),f=e("code",null,"let-env",-1),b=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = 'BAR'
`)])],-1),x=e("p",null,[n("'let-env' is similar to the "),e("strong",null,"export"),n(" command in Bash.")],-1),O=e("p",null,[n("So, if you want to extend the Windows "),e("code",null,"Path"),n(" variable, for example, you could do that as follows.")],-1),w=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`let-env Path = ($env.Path | prepend 'C:\\path\\you\\want\\to\\add')
`)])],-1),y=e("code",null,"append",-1),N={id:"load-env",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#load-env","aria-hidden":"true"},"#",-1),R=e("code",null,"load-env",-1),A=e("code",null,"load-env",-1),S=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> load-env { "BOB": "FOO", "JAY": "BAR" }
`)])],-1),B=e("h3",{id:"one-shot-environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#one-shot-environment-variables","aria-hidden":"true"},"#"),n(" One-shot environment variables")],-1),k={id:"calling-a-command-defined-with-def-env",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#calling-a-command-defined-with-def-env","aria-hidden":"true"},"#",-1),C=e("code",null,"def-env",-1),V=e("h3",{id:"using-module-s-exports",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-module-s-exports","aria-hidden":"true"},"#"),n(" Using module's exports")],-1),$=i(`<h2 id="reading-environment-variables" tabindex="-1"><a class="header-anchor" href="#reading-environment-variables" aria-hidden="true">#</a> Reading environment variables</h2><p>Individual environment variables are fields of a record that is stored in the <code>$env</code> variable and can be read with <code>$env.VARIABLE</code>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; $env.FOO
BAR
</code></pre></div><h2 id="scoping" tabindex="-1"><a class="header-anchor" href="#scoping" aria-hidden="true">#</a> Scoping</h2><p>When you set an environment variable, it will be available only in the current scope (the block you&#39;re in and any block inside of it).</p><p>Here is a small example to demonstrate the environment scoping:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let-env FOO = &quot;BAR&quot;
&gt; do {
    let-env FOO = &quot;BAZ&quot;
    $env.FOO == &quot;BAZ&quot;
}
true
&gt; $env.FOO == &quot;BAR&quot;
true
</code></pre></div><h2 id="changing-directory" tabindex="-1"><a class="header-anchor" href="#changing-directory" aria-hidden="true">#</a> Changing directory</h2>`,8),I=e("code",null,"cd",-1),T=e("code",null,"cd",-1),P=e("code",null,"PWD",-1),q=e("h2",{id:"single-use-environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#single-use-environment-variables","aria-hidden":"true"},"#"),n(" Single-use environment variables")],-1),Y=e("p",null,"A common shorthand to set an environment variable once is available, inspired by Bash and others:",-1),L=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> FOO=BAR $env.FOO
BAR
`)])],-1),M=e("code",null,"with-env",-1),H=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> with-env { FOO: BAR } { $env.FOO }
BAR
`)])],-1),D=e("code",null,"with-env",-1),U=e("h2",{id:"permanent-environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#permanent-environment-variables","aria-hidden":"true"},"#"),n(" Permanent environment variables")],-1),W=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`# In config.nu
let-env FOO = 'BAR'
`)])],-1),j=e("h2",{id:"defining-environment-from-custom-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defining-environment-from-custom-commands","aria-hidden":"true"},"#"),n(" Defining environment from custom commands")],-1),Z=e("code",null,"def-env",-1),G=e("code",null,"def",-1),J=e("code",null,"export def",-1),Q=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> def-env foo [] {
    let-env FOO = 'BAR'
}

> foo

> $env.FOO
BAR
`)])],-1),z=e("h2",{id:"environment-variable-conversions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#environment-variable-conversions","aria-hidden":"true"},"#"),n(" Environment variable conversions")],-1),K=e("code",null,"ENV_CONVERSIONS",-1),X={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"env.nu",-1),ne=e("code",null,"config.nu",-1),te=e("code",null,"ENV_CONVERSIONS",-1),ae=e("code",null,"from_string",-1),oe=e("code",null,"to_string",-1),ie=e("code",null,"ENV_CONVERSIONS",-1),se=i(`<p>Let&#39;s illustrate the conversions with an example. Put the following in your config.nu:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env ENV_CONVERSIONS = {
    # ... you might have Path and PATH already there, add:
    FOO : {
        from_string: { |s| $s | split row &#39;-&#39; }
        to_string: { |v| $v | str join &#39;-&#39; }
    }
}
</code></pre></div><p>Now, within a Nushell instance:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; with-env { FOO : &#39;a-b-c&#39; } { nu }  # runs Nushell with FOO env. var. set to &#39;a-b-c&#39;

&gt; $env.FOO
  0   a
  1   b
  2   c
</code></pre></div><p>You can see the <code>$env.FOO</code> is now a list in a new Nushell instance with the updated config. You can also test the conversion manually by</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; do $env.ENV_CONVERSIONS.FOO.from_string &#39;a-b-c&#39;
</code></pre></div><p>Now, to test the conversion list -&gt; string, run:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; nu -c &#39;$env.FOO&#39;
a-b-c
</code></pre></div><p>Because <code>nu</code> is an external program, Nushell translated the <code>[ a b c ]</code> list according to <code>ENV_CONVERSIONS.FOO.to_string</code> and passed it to the <code>nu</code> process. Running commands with <code>nu -c</code> does not load the config file, therefore the env conversion for <code>FOO</code> is missing and it is displayed as a plain string -- this way we can verify the translation was successful. You can also run this step manually by <code>do $env.ENV_CONVERSIONS.FOO.to_string [a b c]</code></p><p><em>(Important! The environment conversion string -&gt; value happens <strong>after</strong> the env.nu and config.nu are evaluated. All environment variables in env.nu and config.nu are still strings unless you set them manually to some other values.)</em></p><h2 id="removing-environment-variables" tabindex="-1"><a class="header-anchor" href="#removing-environment-variables" aria-hidden="true">#</a> Removing environment variables</h2>`,11),le=e("code",null,"hide-env",-1),de=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = 'BAR'
...
> hide-env FOO
`)])],-1),re=e("p",null,"The hiding is also scoped which both allows you to remove an environment variable temporarily and prevents you from modifying a parent environment from within a child scope:",-1),ce=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = 'BAR'
> do {
    hide-env FOO
    # $env.FOO does not exist
  }
> $env.FOO
BAR
`)])],-1);function he(ue,ve){const a=s("RouterLink"),l=s("ExternalLinkIcon");return r(),c("div",null,[u,e("p",null,[n("The environment is initially created from the Nu "),t(a,{to:"/book/configuration.html"},{default:o(()=>[n("configuration files")]),_:1}),n(" and from the environment that Nu is run inside of.")]),v,m,e("h3",g,[_,n(),t(a,{to:"/commands/docs/let-env.html"},{default:o(()=>[p]),_:1})]),e("p",null,[n("Using the "),t(a,{to:"/commands/docs/let-env.html"},{default:o(()=>[f]),_:1}),n(" command is the most straightforward method")]),b,x,O,w,e("p",null,[n("Here we've prepended our folder to the existing folders in the Path, so it will have the highest priority. If you want to give it the lowest priority instead, you can use the "),t(a,{to:"/commands/docs/append.html"},{default:o(()=>[y]),_:1}),n(" command.")]),e("h3",N,[F,n(),t(a,{to:"/commands/docs/load-env.html"},{default:o(()=>[R]),_:1})]),e("p",null,[n("If you have more than one environment variable you'd like to set, you can use "),t(a,{to:"/commands/docs/load-env.html"},{default:o(()=>[A]),_:1}),n(" to create a table of name/value pairs and load multiple variables at the same time:")]),S,B,e("p",null,[n("These are defined to be active only temporarily for a duration of executing a code block. See "),t(a,{to:"/book/environment.html#single-use-environment-variables"},{default:o(()=>[n("Single-use environment variables")]),_:1}),n(" for details.")]),e("h3",k,[E,n(" Calling a command defined with "),t(a,{to:"/commands/docs/def-env.html"},{default:o(()=>[C]),_:1})]),e("p",null,[n("See "),t(a,{to:"/book/environment.html#defining-environment-from-custom-commands"},{default:o(()=>[n("Defining environment from custom commands")]),_:1}),n(" for details.")]),V,e("p",null,[n("See "),t(a,{to:"/book/modules.html"},{default:o(()=>[n("Modules")]),_:1}),n(" for details.")]),$,e("p",null,[n("Common task in a shell is to change directory with the "),t(a,{to:"/commands/docs/cd.html"},{default:o(()=>[I]),_:1}),n(" command. In Nushell, calling "),t(a,{to:"/commands/docs/cd.html"},{default:o(()=>[T]),_:1}),n(" is equivalent to setting the "),P,n(" environment variable. Therefore, it follows the same rules as other environment variables (for example, scoping).")]),q,Y,L,e("p",null,[n("You can also use "),t(a,{to:"/commands/docs/with-env.html"},{default:o(()=>[M]),_:1}),n(" to do the same thing more explicitly:")]),H,e("p",null,[n("The "),t(a,{to:"/commands/docs/with-env.html"},{default:o(()=>[D]),_:1}),n(' command will temporarily set the environment variable to the value given (here: the variable "FOO" is given the value "BAR"). Once this is done, the '),t(a,{to:"/book/types_of_data.html#blocks"},{default:o(()=>[n("block")]),_:1}),n(" will run with this new environment variable set.")]),U,e("p",null,[n("You can also set environment variables at startup so they are available for the duration of Nushell running. To do this, set an environment variable inside "),t(a,{to:"/book/configuration.html"},{default:o(()=>[n("the Nu configuration file")]),_:1}),n(". For example:")]),W,j,e("p",null,[n("Due to the scoping rules, any environment variables defined inside a custom command will only exist inside the command's scope. However, a command defined as "),t(a,{to:"/commands/docs/def-env.html"},{default:o(()=>[Z]),_:1}),n(" instead of "),t(a,{to:"/commands/docs/def.html"},{default:o(()=>[G]),_:1}),n(" (it applies also to "),t(a,{to:"/commands/docs/export_def.html"},{default:o(()=>[J]),_:1}),n(", see "),t(a,{to:"/book/modules.html"},{default:o(()=>[n("Modules")]),_:1}),n(") will preserve the environment on the caller's side:")]),Q,z,e("p",null,[n("You can set the "),K,n(" environment variable to convert other environment variables between a string and a value. For example, the "),e("a",X,[n("default environment config"),t(l)]),n(" includes conversion of PATH (and Path used on Windows) environment variables from a string to a list. After both "),ee,n(" and "),ne,n(" are loaded, any existing environment variable specified inside "),te,n(" will be translated according to its "),ae,n(" field into a value of any type. External tools require environment variables to be strings, therefore, any non-string environment variable needs to be converted first. The conversion of value -> string is set by the "),oe,n(" field of "),ie,n(" and is done every time an external command is run.")]),se,e("p",null,[n("You can remove an environment variable only if it was set in the current scope via "),t(a,{to:"/commands/docs/hide_env.html"},{default:o(()=>[le]),_:1}),n(":")]),de,re,ce,e("p",null,[n("You can check "),t(a,{to:"/book/modules.html"},{default:o(()=>[n("Modules")]),_:1}),n(" for more details about hiding.")])])}const ge=d(h,[["render",he],["__file","environment.html.vue"]]);export{ge as default};
