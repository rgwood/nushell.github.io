import{_ as o,M as r,p as i,q as l,R as p,Q as a,t as e,N as s,a1 as t}from"./framework-344bb0e4.js";const c={},d=a("h1",{id:"nushell-0-32",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#nushell-0-32","aria-hidden":"true"},"#"),e(" Nushell 0.32")],-1),h=a("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=a("p",null,"Today, we're releasing 0.32 of Nu. This release contains a large amount of usability improvements.",-1),m=a("h1",{id:"where-to-get-it",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),g={href:"https://github.com/nushell/nushell/releases/tag/0.32.0",target:"_blank",rel:"noopener noreferrer"},b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},f=a("code",null,"cargo install nu",-1),k=a("p",null,[e("If you want all the goodies, you can install "),a("code",null,"cargo install nu --features=extra"),e(".")],-1),v=a("p",null,[e("If you'd like to try the experimental paging feature in this release, you can install with "),a("code",null,"cargo install nu --features=table-pager"),e(".")],-1),w=a("p",null,[e("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),a("code",null,"cargo install nu_plugin_<plugin name>"),e(".")],-1),x=a("h1",{id:"what-s-new",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),e(" What's New")],-1),y=a("em",null,"lot",-1),_={href:"https://youtu.be/AqYxhJKblvY",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/nushell/nu_scripts",target:"_blank",rel:"noopener noreferrer"},N=t(`<h2 id="new-expression-syntax-jt" tabindex="-1"><a class="header-anchor" href="#new-expression-syntax-jt" aria-hidden="true">#</a> New expression syntax (jt)</h2><p>We&#39;ve simplified our expression/subexpression logic to make it much more predictable and universal. The parser will now automatically handle by command calls and expressions in the same way, so that you don&#39;t have to remember to use <code>=</code> to switch from one mode to the next.</p><p>Before 0.32:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token number">10</span> + <span class="token number">3</span>
<span class="token number">13</span>
</code></pre></div><p>With 0.32:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">10</span> + <span class="token number">3</span>
<span class="token number">13</span>
</code></pre></div><p>You can also use any value as an expression, including variables or strings:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;hello world&quot;</span>
hello world
</code></pre></div><p>Subexpressions also follow a similar simplification. We&#39;ve removed the previous <code>$()</code> style, replacing it with <code>()</code>. This allows you to put subexpressions anywhere that you want.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">10</span> * <span class="token punctuation">(</span><span class="token number">3</span> + <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">50</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">((</span>ls <span class="token operator">|</span> length<span class="token punctuation">)</span> / <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">7</span>
</code></pre></div><p>This allows parens to mean &quot;do this first&quot; in both math expression and command calls.</p><h2 id="subexpressions-and-column-paths-jt" tabindex="-1"><a class="header-anchor" href="#subexpressions-and-column-paths-jt" aria-hidden="true">#</a> Subexpressions and column paths (jt)</h2><p>The new subexpressions can also use &quot;column paths&quot;, or paths that start from the current value and travel to a subset of the structured data inside.</p><p>For example, you could combine column paths with some subtraction to find when you last booted your system:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>date now<span class="token punctuation">)</span> - <span class="token punctuation">(</span>sys<span class="token punctuation">)</span>.host.uptime
<span class="token number">2021</span>-05-31 09:00:24.124736365 +12:00
</code></pre></div><h2 id="new-string-interpolation-jt" tabindex="-1"><a class="header-anchor" href="#new-string-interpolation-jt" aria-hidden="true">#</a> New string interpolation (jt)</h2><p>We&#39;ve also updated string interpolation to match the expression/subexpression simplification mentioned above. The same &quot;parens mean do this first&quot; pattern applies:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> $<span class="token string">&quot;the result is (3 + 2)&quot;</span>
the result is <span class="token number">5</span>
</code></pre></div><p>For interpolation that uses column paths, wrap the entire column path in a pair of parens:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> $<span class="token string">&quot;uptime is (sys).host.uptime&quot;</span>
<span class="token function">uptime</span> is <span class="token punctuation">[</span>row <span class="token function">host</span> cpu mem temp<span class="token punctuation">]</span>.host.uptime

<span class="token operator">&gt;</span> $<span class="token string">&quot;uptime is ((sys).host.uptime)&quot;</span>
<span class="token function">uptime</span> is 1day 19hr 57min 7sec
</code></pre></div><p>As part of this change, we removed the previous backtick string interpolation form.</p><h2 id="environment-loading-lily-mara" tabindex="-1"><a class="header-anchor" href="#environment-loading-lily-mara" aria-hidden="true">#</a> Environment loading (lily-mara)</h2><p>In Nushell, we&#39;ve worked hard to limit the amount of mutation that will happen in the system. This helps developers focus on the task at hand, and not have to think about non-local effects from the code they&#39;re running.</p><p>At the same time, we&#39;ve also wanted to support virtual environment systems like <code>virtualenv</code>, <code>conda</code>, and others. Traditionally these systems updated the global environment from inside of their activate/deactivate commands.</p><p>With 0.32, we feel like we&#39;ve managed to come up with a solution that meets both the Nushell philosophy of limiting mutation while also giving the freedom to port virtual environment scripts to Nushell.</p><p>We call it &quot;environment loading&quot;. Here, rather than having commands mutate the global environment, they instead return a table of changes they&#39;d like to apply to the environment. This table can be then loaded into the current scope, effectively separating the &quot;what&quot; of the update from the &quot;when&quot;.</p><p>Let&#39;s try this by creating a table of three new environment variables we&#39;ll load:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def activate <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>name, value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>FOO, BAR<span class="token punctuation">]</span> <span class="token punctuation">[</span>DEBUG, TRUE<span class="token punctuation">]</span> <span class="token punctuation">[</span>CURRENTENV, NUSHELL<span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

load-env <span class="token punctuation">(</span>activate<span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.env.FOO
</code></pre></div><p>The changes to the environment are still scoped to the block you&#39;re inside of. In the example above, because we&#39;re at the top level, we can safely shadow the previous environment values.</p><h2 id="locale-improvements-fdncred" tabindex="-1"><a class="header-anchor" href="#locale-improvements-fdncred" aria-hidden="true">#</a> Locale improvements (fdncred)</h2><p>When you have <code>filesize_format = &quot;B&quot;</code> set in your config.toml file you should be able to see the thousands separators based on your locale. i.e. some locales use <code>,</code> other locales use <code>.</code> and i&#39;m not sure if there are others.</p><p>This is with the <code>de_DE</code> locale on linux: (note the number separators) <img src="https://user-images.githubusercontent.com/343840/119736601-93ff4b00-be43-11eb-9f17-0d9303e89cd6.png" alt="image"></p><p>This is with <code>en-US</code> on windows: <img src="https://user-images.githubusercontent.com/343840/119736671-b2fddd00-be43-11eb-91c0-512cad551d5d.png" alt="image"></p><h2 id="better-line-editing-support-schrieveslaach-fdncred" tabindex="-1"><a class="header-anchor" href="#better-line-editing-support-schrieveslaach-fdncred" aria-hidden="true">#</a> Better line editing support (schrieveslaach, fdncred)</h2><h3 id="partial-completions" tabindex="-1"><a class="header-anchor" href="#partial-completions" aria-hidden="true">#</a> Partial completions</h3><p>With 0.32, you can use ctrl+right arrow to do a partial completion from a completion hint.</p><h3 id="delete-word" tabindex="-1"><a class="header-anchor" href="#delete-word" aria-hidden="true">#</a> Delete word</h3><p>You can also use alt+backspace to delete whole words.</p><h3 id="and-more" tabindex="-1"><a class="header-anchor" href="#and-more" aria-hidden="true">#</a> And more</h3>`,40),T={href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/keybindings.yml",target:"_blank",rel:"noopener noreferrer"},j=t(`<h2 id="explicit-block-parameters-jt" tabindex="-1"><a class="header-anchor" href="#explicit-block-parameters-jt" aria-hidden="true">#</a> Explicit block parameters (jt)</h2><p>You can now name block parameters. You can use this to help make working with blocks easier to read.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>row<span class="token operator">|</span> <span class="token builtin class-name">echo</span> <span class="token variable">$row</span>.name <span class="token punctuation">}</span>
</code></pre></div><h2 id="do-supports-passing-arguments-stepnivik" tabindex="-1"><a class="header-anchor" href="#do-supports-passing-arguments-stepnivik" aria-hidden="true">#</a> <code>do</code> supports passing arguments (stepnivik)</h2><p>You can now pass arguments to give the running block as part of a <code>do</code> call:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span> <span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span> + <span class="token number">100</span><span class="token punctuation">}</span> <span class="token number">55</span>
<span class="token number">155</span>
</code></pre></div><h2 id="new-for-in-command-jt" tabindex="-1"><a class="header-anchor" href="#new-for-in-command-jt" aria-hidden="true">#</a> New <code>for..in</code> command (jt)</h2><p>With the new <code>for..in</code> command, you can write more natural iterating loops:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token variable">$x</span> <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">(</span><span class="token variable">$x</span> + <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
───┬────
 <span class="token number">0</span> │ <span class="token number">11</span>
 <span class="token number">1</span> │ <span class="token number">12</span>
 <span class="token number">2</span> │ <span class="token number">13</span>
───┴────
</code></pre></div><h2 id="flags-can-now-use-equals-andrasio" tabindex="-1"><a class="header-anchor" href="#flags-can-now-use-equals-andrasio" aria-hidden="true">#</a> Flags can now use equals (andrasio)</h2><p>You can now use <code>=</code> between a flag and its value.</p><p>For example, in addition to:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token parameter variable">--separator</span> <span class="token string">&#39;:&#39;</span> <span class="token number">1</span> <span class="token number">10</span>
<span class="token number">1</span>:2:3:4:5:6:7:8:9:10
</code></pre></div><p>You can also write:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token parameter variable">--separator</span><span class="token operator">=</span><span class="token string">&#39;:&#39;</span> <span class="token number">1</span> <span class="token number">10</span>
<span class="token number">1</span>:2:3:4:5:6:7:8:9:10
</code></pre></div><h2 id="other-improvements" tabindex="-1"><a class="header-anchor" href="#other-improvements" aria-hidden="true">#</a> Other improvements</h2><h3 id="simple-string-concatenation-jt" tabindex="-1"><a class="header-anchor" href="#simple-string-concatenation-jt" aria-hidden="true">#</a> Simple string concatenation (jt)</h3><p>You can now create a new string by concatenating two strings <code>&quot;hello &quot; + &quot;world&quot;</code>.</p><h3 id="path-relative-to-kubouch" tabindex="-1"><a class="header-anchor" href="#path-relative-to-kubouch" aria-hidden="true">#</a> Path relative-to (kubouch)</h3><p>Implements path relative-to subcommand. It converts the input path as a relative to the argument path, like this:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;eggs/bacon/sausage/spam&#39;</span> <span class="token operator">|</span> path relative-to <span class="token string">&#39;eggs/bacon/sausage&#39;</span>
spam
</code></pre></div>`,21),I={href:"https://github.com/nushell/nushell/pull/3441",target:"_blank",rel:"noopener noreferrer"},W=a("code",null,"path",-1),Y=t(`<h3 id="negative-indexing-for-range-alexshadley" tabindex="-1"><a class="header-anchor" href="#negative-indexing-for-range-alexshadley" aria-hidden="true">#</a> Negative indexing for range (alexshadley)</h3><p>You can now pass negative ranges to the <code>range</code> command, and it will work from the back of the input.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo [1 2 3 4 5] | range (-3..)
</code></pre></div><p>Will return <code>[3, 4, 5]</code>.</p><h3 id="default-integer-is-now-signed-64-bit-jt" tabindex="-1"><a class="header-anchor" href="#default-integer-is-now-signed-64-bit-jt" aria-hidden="true">#</a> Default integer is now signed 64-bit (jt)</h3><p>In 0.32, adds a new primitive data type for i64 and makes it the default integer type.</p><h3 id="improved-filename-support-ahkrr-fdncred" tabindex="-1"><a class="header-anchor" href="#improved-filename-support-ahkrr-fdncred" aria-hidden="true">#</a> Improved filename support (ahkrr, fdncred)</h3>`,7),E={href:"https://github.com/nushell/nushell/pull/3524",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/nushell/nushell/pull/3489",target:"_blank",rel:"noopener noreferrer"},B=a("h3",{id:"sqlite-improvements-garfield96",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#sqlite-improvements-garfield96","aria-hidden":"true"},"#"),e(" sqlite improvements (Garfield96)")],-1),A={href:"https://github.com/nushell/nushell/pull/3522",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/nushell/nushell/pull/3523",target:"_blank",rel:"noopener noreferrer"},F=t('<h3 id="seq-is-now-more-nu-like-fdncred" tabindex="-1"><a class="header-anchor" href="#seq-is-now-more-nu-like-fdncred" aria-hidden="true">#</a> <code>seq</code> is now more nu-like (fdncred)</h3><p>The <code>seq</code> command is now more nushell friendly by returning numbers when it can and strings when it must. This will definitely break some scripts.</p><p><img src="https://user-images.githubusercontent.com/343840/117849029-83e34b00-b249-11eb-8ecf-ec026ea468f7.png" alt="image"></p><h3 id="case-insensitive-completions-are-now-the-default-on-windows-sympatron" tabindex="-1"><a class="header-anchor" href="#case-insensitive-completions-are-now-the-default-on-windows-sympatron" aria-hidden="true">#</a> Case-insensitive completions are now the default on Windows (Sympatron)</h3><p>Since Windows filenames are case-insensitive, This changes to case-insensitive completion matching by default. All other platforms still use case-sensitive matching by default.</p><h3 id="porting-commands-to-the-new-engine-efx-lhkipp-elferherrera" tabindex="-1"><a class="header-anchor" href="#porting-commands-to-the-new-engine-efx-lhkipp-elferherrera" aria-hidden="true">#</a> Porting commands to the new engine (efx, LhKipp, elferherrera)</h3><p>More commands have been updated to use the new engine-p engine.</p><h3 id="char-now-has-more-characters-fdncred-kubouch" tabindex="-1"><a class="header-anchor" href="#char-now-has-more-characters-fdncred-kubouch" aria-hidden="true">#</a> <code>char</code> now has more characters (fdncred, kubouch)</h3>',8),L=a("code",null,"char",-1),R={href:"https://github.com/nushell/nushell/pull/3457",target:"_blank",rel:"noopener noreferrer"},V=a("p",null,[e("You can use "),a("code",null,"char --list"),e(" to see the full list of available character and ansi values.")],-1),O=a("h3",{id:"protect-against-bad-config-more-defensively-fdncred",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#protect-against-bad-config-more-defensively-fdncred","aria-hidden":"true"},"#"),e(" Protect against bad config more defensively (fdncred)")],-1),P={href:"https://github.com/nushell/nushell/pull/3510",target:"_blank",rel:"noopener noreferrer"},U=t('<h3 id="better-glob-support-for-rm-lily-mara" tabindex="-1"><a class="header-anchor" href="#better-glob-support-for-rm-lily-mara" aria-hidden="true">#</a> Better glob support for <code>rm</code> (lily-mara)</h3><p>The <code>*</code> wildcard should not attempt to delete files with a leading dot unless the more explicit <code>.*</code> is used. <code>rm *</code> should also not attempt to delete the current directory or its parent directory (. and ..), either. With this release, these should now be followed.</p><h1 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h1><ul><li>The previous math mode command <code>=</code> has been replaced by a smarter parser that can autodetect math mode based on the first token. Math mode calls like <code>= 10 / 2</code> are now simply <code>10 / 2</code>.</li><li>Invocations of the style <code>$()</code> have now been replaced by <code>()</code> subexpressions. <code>$(= 2 + 3)</code> is now <code>(2 + 3)</code></li><li>String interpolation of the style:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable"><span class="token variable">`</span>the result is <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token operator">=</span> <span class="token number">1</span> + <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token variable">`</span></span>\n</code></pre></div><p>Are now replaced with:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$<span class="token string">&quot;the result is (1 + 2)&quot;</span>\n</code></pre></div><ul><li><code>seq</code> will now return numbers when possible</li><li>The default integer is now signed 64-bit integer and not big integers.</li><li>The <code>unit</code> type has now been split into <code>filesize</code> and <code>duration</code> for better utility.</li></ul><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>Nushell 0.32 is the first version of Nushell that begins to show what the 1.0 Nushell language will feel like. The easier, and more uniform, expression and subexpression syntax will let us continue to evolve towards a language that&#39;s both easier to read and easier to write.</p><p>There are some long-standing issues in the engine that are preventing improved completions, and we&#39;d like to address these issues and begin work on smarter completions.</p><p>Elferherrera has also been hard at work on a dataframe implementation that we&#39;re exploring for inclusion into Nushell. You can try this out by compiling with the <code>dataframe</code> feature. If you check it out, let us know how it goes.</p>',12);function C(D,M){const n=r("ExternalLinkIcon");return i(),l("div",null,[d,h,u,p(" more "),m,a("p",null,[e("Nu 0.32 is available as "),a("a",g,[e("pre-built binaries"),s(n)]),e(" or from "),a("a",b,[e("crates.io"),s(n)]),e(". If you have Rust installed you can install it using "),f,e(".")]),k,v,w,x,a("p",null,[e("There are a "),y,e(" of new changes in this release of Nu. You can check these out by in this blog post, or, if you like, there is also an accompanying "),a("a",_,[e("YouTube video of 0.32 features"),s(n)]),e(" as well as updated "),a("a",q,[e("Nushell samples"),s(n)]),e(".")]),N,a("p",null,[e("For a full list of updated line editing capabilities, check out the update "),a("a",T,[e("sample keybinding file"),s(n)]),e(".")]),j,a("p",null,[e("There are also additional "),a("a",I,[W,e("-related fixes"),s(n)]),e(".")]),Y,a("p",null,[e("Filename "),a("a",E,[e("quoting for #"),s(n)]),e(". Pipes are "),a("a",$,[e("also now escaped"),s(n)])]),B,a("p",null,[e("A panic in "),a("a",A,[e("sqlite support has been fixed"),s(n)]),e(" and the support rusqlite crate "),a("a",S,[e("has been updated"),s(n)]),e(".")]),F,a("p",null,[e("The "),L,e(" command now supports an "),a("a",R,[e("additional set of characters"),s(n)]),e(". It also supports the path separator character.")]),V,O,a("p",null,[e("Nushell is now more resilient if it encounters "),a("a",P,[e("a bad config file"),s(n)]),e(".")]),U])}const G=o(c,[["render",C],["__file","2021-06-01-nushell_0_32.html.vue"]]);export{G as default};
