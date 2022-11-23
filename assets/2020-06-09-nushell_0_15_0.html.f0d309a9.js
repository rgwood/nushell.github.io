import{_ as n,r,o as s,c as i,a as e,b as t,d as a,e as d}from"./app.ef551336.js";const h="/assets/0_15_0_prettier_errors.de65d7bf.png",c={},l=e("h1",{id:"nushell-0-15-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-15-0","aria-hidden":"true"},"#"),a(" Nushell 0.15.0")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing 0.15 of Nu - and it has a few last-minute surprises we hope you'll find as much fun as we do.",-1),g=e("p",null,"As many of you know, this release was delayed as part of a wide-spread effort to elevate Black voices and raise awareness of police violence, a movement which has now grown worldwide. We encourage you to take time to understand what this movement stands for, why it's happening, and to get involved where you can.",-1),m=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),w=a("Nu 0.15.0 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.15.0",target:"_blank",rel:"noopener noreferrer"},y=a("pre-built binaries"),b=a(" or from "),v={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},x=a("crates.io"),k=a(". If you have Rust installed you can install it using "),_=e("code",null,"cargo install nu",-1),j=a("."),q=d(`<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="per-directory-environment-variables-samhedin" tabindex="-1"><a class="header-anchor" href="#per-directory-environment-variables-samhedin" aria-hidden="true">#</a> Per-directory environment variables (samhedin)</h2><p>Right before the announcement of 0.15, we had a surprise feature land - per-directory environment variables. This allows you to configure some environment variables specific to the directory (including subdirectories) that you&#39;re currently in, and Nu will set these environment variables as you <code>cd</code> into the directory and unset them as you <code>cd</code> out.</p><p>How it works:</p><p>In your config, create a new config setting called <code>nu_env_dirs</code> and set it to a list of directories you want to allow to control their own environments:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; config --set [nu_env_dirs [&quot;/home/sam&quot;, &quot;/home/sam/github&quot;, &quot;/home/sam/github/test&quot;]
</code></pre></div><p>Note: after setting the above config settings, restart Nu so that they can be picked up.</p><p>Once set, you can now create a <code>.nu-env</code> file in the directory that you want to control the environment in:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open .nu-env
[env]
var = &quot;value&quot;
anothervar = &quot;anothervalue&quot;
</code></pre></div><p>With this file in place, you can <code>cd</code> into one of the directories you&#39;ve configured and see the new environment variables now available.</p><h2 id="improvements-to-auto-complete-aaronc81" tabindex="-1"><a class="header-anchor" href="#improvements-to-auto-complete-aaronc81" aria-hidden="true">#</a> Improvements to auto-complete (AaronC81)</h2><p>Starting with 0.15, you can now get autocompletions for external commands in your PATH.</p><p>Additionally, auto-completing a filepath with a space now is handled with cleaner logic than in previous versions.</p><h2 id="argument-invocation-jonathandturner-cjpearce" tabindex="-1"><a class="header-anchor" href="#argument-invocation-jonathandturner-cjpearce" aria-hidden="true">#</a> Argument invocation (jonathandturner, cjpearce)</h2><p>You&#39;re now able to run a pipeline inside of another command as an argument, and then use the results that come out.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $(ls | where size &gt; 10kb | count)
3
</code></pre></div><h2 id="string-interpolation-jonathandturner" tabindex="-1"><a class="header-anchor" href="#string-interpolation-jonathandturner" aria-hidden="true">#</a> String interpolation (jonathandturner)</h2><p>We also support string interpolation, or building a string from text and running commands. For example, if we wanted to print out the current path to the history file with a message, we could do:</p><p>{% raw %}</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo \`My current history path is {{$nu.history-path}}\`
My current history path is /home/jonathant/.local/share/nu/history.txt
</code></pre></div><p>{% endraw %}</p><h2 id="prettier-errors-jonathandturner-brendanzab" tabindex="-1"><a class="header-anchor" href="#prettier-errors-jonathandturner-brendanzab" aria-hidden="true">#</a> Prettier errors (jonathandturner, brendanzab)</h2><p>We&#39;ve switched from language-reporting to codespan, giving us nicer looking errors:</p><p><img src="`+h+`" alt="image of a prettier error message"></p><h2 id="big-history-by-default-aeosynth-lightclient" tabindex="-1"><a class="header-anchor" href="#big-history-by-default-aeosynth-lightclient" aria-hidden="true">#</a> Big history by default (aeosynth, lightclient)</h2><p>Let&#39;s start with 100k line history. You can also configure the history size using the new &quot;history_size&quot; config setting.</p><h2 id="command-updates" tabindex="-1"><a class="header-anchor" href="#command-updates" aria-hidden="true">#</a> Command updates</h2><h3 id="alias-now-has-a-save-flag-to-save-the-alias-to-your-config-startup-1ntegr8" tabindex="-1"><a class="header-anchor" href="#alias-now-has-a-save-flag-to-save-the-alias-to-your-config-startup-1ntegr8" aria-hidden="true">#</a> <code>alias</code> now has a <code>--save</code> flag to save the alias to your config startup (1ntEgr8)</h3><p>Ever have an alias you wanted to save but then had to look up all the steps to do so? Haven&#39;t we all.</p><p>With 0.15, it&#39;s easy to save an alias you like by using the <code>--save</code> flag.</p><h3 id="add-str-to-decimal-k-brk-routrohan" tabindex="-1"><a class="header-anchor" href="#add-str-to-decimal-k-brk-routrohan" aria-hidden="true">#</a> Add <code>str to-decimal</code> (k-brk, routrohan)</h3><p>You can now easily parse decimal (sometimes called real or floating point numbers) using the new <code>str</code> subcommand.</p><h3 id="fetch-now-can-take-username-password-he4d" tabindex="-1"><a class="header-anchor" href="#fetch-now-can-take-username-password-he4d" aria-hidden="true">#</a> <code>fetch</code> now can take username/password (he4d)</h3><p>Like its counterpart <code>post</code>, <code>fetch</code> can now accept a username/password to login to fetch URL contents.</p><h3 id="average-now-works-over-tables-andrasio" tabindex="-1"><a class="header-anchor" href="#average-now-works-over-tables-andrasio" aria-hidden="true">#</a> <code>average</code> now works over tables (andrasio)</h3><p>In addition to using <code>average</code> on a column, you can now run it over a whole table.</p><h3 id="start-now-supports-glob-paths-arashout" tabindex="-1"><a class="header-anchor" href="#start-now-supports-glob-paths-arashout" aria-hidden="true">#</a> <code>start</code> now supports glob paths (arashout)</h3><p>You can now pass multiple values to <code>start</code> at one time using the new glob support.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; start file*.rs
</code></pre></div><h3 id="plugins-no-longer-scan-whole-path-jonathandturner-fdncred" tabindex="-1"><a class="header-anchor" href="#plugins-no-longer-scan-whole-path-jonathandturner-fdncred" aria-hidden="true">#</a> Plugins no longer scan whole PATH (jonathandturner, fdncred)</h3><p>As we looking into startup times, we saw that scanning the whole PATH for plugins is quite costly. Even more, few people had used the feature to put plugins in a different directory than the <code>nu</code> application itself.</p><p>With 0.15, by default we will only look in the directory of the <code>nu</code> application. You can still manually store your plugins elsewhere by adding directories to the new &quot;plugin_dirs&quot; config setting.</p><h3 id="echo-now-will-iterate-over-a-range-jonathandturner" tabindex="-1"><a class="header-anchor" href="#echo-now-will-iterate-over-a-range-jonathandturner" aria-hidden="true">#</a> <code>echo</code> now will iterate over a range (jonathandturner)</h3><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo 1..3
\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 0 \u2502 1
 1 \u2502 2
 2 \u2502 3
\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div><h3 id="where-command-speedups-jonathandturner" tabindex="-1"><a class="header-anchor" href="#where-command-speedups-jonathandturner" aria-hidden="true">#</a> <code>where</code> command speedups (jonathandturner)</h3><p>We did some work to optimize how command blocks are executed, which helps to speed up <code>where</code> quite a bit for long running queries.</p><h3 id="du-can-now-be-canceled-with-ctrl-c-josephtlyons" tabindex="-1"><a class="header-anchor" href="#du-can-now-be-canceled-with-ctrl-c-josephtlyons" aria-hidden="true">#</a> <code>du</code> can now be canceled with ctrl-c (JosephTLyons)</h3><p>For those long-running <code>du</code> runs that you want to stop short, you can now use <code>ctrl-c</code> to exit back to Nu.</p><h3 id="with-env-shorthand-now-works-with-quoted-strings-as-well-k-brk" tabindex="-1"><a class="header-anchor" href="#with-env-shorthand-now-works-with-quoted-strings-as-well-k-brk" aria-hidden="true">#</a> <code>with-env</code> shorthand now works with quoted strings as well (k-brk)</h3><p>Now support: passing a string as a value in environment shorthands:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; FOO=&quot;My Bar&quot; command arg1 arg2
</code></pre></div><h3 id="add-config-option-for-rm-always-trash-filalex77" tabindex="-1"><a class="header-anchor" href="#add-config-option-for-rm-always-trash-filalex77" aria-hidden="true">#</a> Add config option for &quot;rm_always_trash&quot; (filalex77)</h3><p>If you&#39;d prefer to always <code>rm</code> to the recycle bin instead of permanently deleting, you can enable the new &quot;rm_always_trash&quot; config setting.</p><h3 id="parse-now-also-takes-a-regex-flag-filalex77" tabindex="-1"><a class="header-anchor" href="#parse-now-also-takes-a-regex-flag-filalex77" aria-hidden="true">#</a> <code>parse</code> now also takes a <code>--regex</code> flag (filalex77)</h3><p>For when you need to do a bit more serious parsing work, you can now use regex from inside of the <code>parse</code> command.</p><h3 id="various-improvements-to-auto-pivot-fdncred-samboy218" tabindex="-1"><a class="header-anchor" href="#various-improvements-to-auto-pivot-fdncred-samboy218" aria-hidden="true">#</a> Various improvements to auto-pivot (fdncred, Samboy218)</h3><p>Previously, we always auto-pivoted the single row. Now, you can configure whether or not you want the row to pivot before it&#39;s displayed, including a new heuristic mode that will attempt to only pivot the row if necessary.</p><h3 id="histogram-now-has-a-count-josephtlyons" tabindex="-1"><a class="header-anchor" href="#histogram-now-has-a-count-josephtlyons" aria-hidden="true">#</a> <code>histogram</code> now has a count (JosephTLyons)</h3><p>You&#39;ll now be able to see the count of each of the rows in the histogram.</p><h3 id="format-can-now-access-variables-as-well-as-column-names-jonathandturner" tabindex="-1"><a class="header-anchor" href="#format-can-now-access-variables-as-well-as-column-names-jonathandturner" aria-hidden="true">#</a> <code>format</code> can now access variables as well as column names (jonathandturner)</h3><p>Previously, <code>format</code> would only allow you to pass in column names. This meant that also printing a variable&#39;s value was a bit convoluted. With 0.15, you can pass in either a column name, or a variable (including a full variable path like <code>$nu.history-path</code>)</p><h3 id="to-json-now-has-pretty-printing-support-josephtlyons" tabindex="-1"><a class="header-anchor" href="#to-json-now-has-pretty-printing-support-josephtlyons" aria-hidden="true">#</a> <code>to json</code> now has pretty printing support (JosephTLyons)</h3><p>You can now get <code>to json</code> to give you pretty-printed output, using the new <code>--pretty &lt;indent size&gt;</code> flag.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $nu | to json --pretty 2
</code></pre></div><h3 id="consumers-of-nu-cli-can-now-register-custom-commands-daschl" tabindex="-1"><a class="header-anchor" href="#consumers-of-nu-cli-can-now-register-custom-commands-daschl" aria-hidden="true">#</a> Consumers of <code>nu-cli</code> can now register custom commands (daschl)</h3><p>If you&#39;re building applications and want to use <code>nu</code> as a library instead of directly as a cli, it&#39;s now possible to pass in your own set of custom commands that Nu will enable as internal commands.</p><h2 id="doc-and-book-updates" tabindex="-1"><a class="header-anchor" href="#doc-and-book-updates" aria-hidden="true">#</a> Doc and book updates</h2><p>Contributor &quot;zombie110year&quot; has been working on translating the book to Simplified Chinese. If you&#39;d like to help, let us know!</p><p>Also thanks to mhmdanas, andrasio, shiena, q-b, jzaefferer, Samboy218, ryepesg, 0xABAD, sseering, hilias, Dimagog, and fdncred for contributing to the book and continuing to help make it better.</p><h2 id="bugfixes-and-polish-daschl-josephtlyons-utam0k-arashout-andrasio-fdncred-johnae-jonathandturner-thegedge-shaaraddalvi-notryanb-emnudge-kelli314-coolshaurya-johnterickson-klnusbaum-adminxvii-delapouite-hdhoang" tabindex="-1"><a class="header-anchor" href="#bugfixes-and-polish-daschl-josephtlyons-utam0k-arashout-andrasio-fdncred-johnae-jonathandturner-thegedge-shaaraddalvi-notryanb-emnudge-kelli314-coolshaurya-johnterickson-klnusbaum-adminxvii-delapouite-hdhoang" aria-hidden="true">#</a> Bugfixes and polish (daschl, JosephTLyons, utam0k, arashout, andrasio, fdncred, johnae, jonathandturner, thegedge, shaaraddalvi, notryanb, EmNudge, Kelli314, coolshaurya, johnterickson, klnusbaum, AdminXVII, Delapouite, hdhoang)</h2><p>There are <em>far</em> too many improvements and bugfixes to list here, but another <em>huge</em> thank you to everyone who has helped fix an issue, report an issue, chatted with us on twitter and discord, and just shared your love for Nu with others.</p><h1 id="looking-forward" tabindex="-1"><a class="header-anchor" href="#looking-forward" aria-hidden="true">#</a> Looking forward</h1><p>With 0.15, we&#39;ve closed another set of gaps in what people need in a shell. We&#39;re looking to continue improving completions, as well as growing the parser to support Nu scripts not just line-by-line, but as whole source files. We&#39;re also working on improving jupyter support, file encoding for better support across languages, and more.</p>`,75);function N(A,I){const o=r("ExternalLinkIcon");return s(),i("div",null,[l,u,p,g,m,e("p",null,[w,e("a",f,[y,t(o)]),b,e("a",v,[x,t(o)]),k,_,j]),q])}const W=n(c,[["render",N],["__file","2020-06-09-nushell_0_15_0.html.vue"]]);export{W as default};
