import{_ as n,r,o as i,c as s,a as e,b as a,d as t,e as l}from"./app.ef551336.js";const d="/assets/0_21_bar_charts.b56f59f7.gif",c="/assets/0_21_line_chart.3f85fd94.png",h={},u=e("h1",{id:"nushell-0-21",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-21","aria-hidden":"true"},"#"),t(" Nushell 0.21")],-1),p=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),m=e("p",null,"Today, we're releasing 0.21 of Nu. In this version, we introduce a charting functionality for quickly exploring data, stability improvements, and some general command cleanups.",-1),f=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),g=t("Nu 0.21 is available as "),_={href:"https://github.com/nushell/nushell/releases/tag/0.21.0",target:"_blank",rel:"noopener noreferrer"},w=t("pre-built binaries"),b=t(" or from "),y={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=t("crates.io"),k=t(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),N=t("."),I=l('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-functionality" tabindex="-1"><a class="header-anchor" href="#new-functionality" aria-hidden="true">#</a> New functionality</h2><h3 id="charting-andrasio" tabindex="-1"><a class="header-anchor" href="#charting-andrasio" aria-hidden="true">#</a> Charting (andrasio)</h3><p><img src="'+d+`" alt="animation of building different types of bar charts"></p><p><em>New charting functionality</em></p><p>Nushell now supports bar and line charts for when you want to quickly take a look at data you&#39;re exploring. You can reach these through the new <code>chart</code> command.</p><p>Here&#39;s an example of using <code>chart</code> to chart out contributions to a git repository:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; git log &quot;--pretty=format:%h&lt;nu&gt;%aN&lt;nu&gt;%s&lt;nu&gt;%aD&quot; | lines | split column &quot;&lt;nu&gt;&quot; sha1 author desc merged_at | where author == &quot;Andr\xE9s N. Robalino&quot; | update merged_at { get merged_at | str to-datetime } | reverse | chart line merged_at -f &quot;%b-%Y&quot;
</code></pre></div><p><img src="`+c+'" alt="line chart of github contributions"></p><p><em>Line chart of GitHub contributions</em></p><h3 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements" aria-hidden="true">#</a> Improvements</h3><ul><li><code>rm -f</code> no longer complains if the path can&#39;t be found (luccasmg)</li><li><code>benchmark</code> now randomizes the environment for more accurate results (tumdum)</li><li><code>select</code> now works with columns that have spaces (JonathanArns)</li><li>math with duration now properly handles overflow (samualvanderwaal)</li><li><code>mv</code> now properly fails if you try to move a directory into itself (luccasmg)</li><li>smarter auto-conversion to string where possible, helping with commands like <code>clip</code> (gillespiecd)</li><li>added left and right padding for strings via <code>str lpad</code> and <code>str rpad</code> (fdncred)</li><li>blink and strikethrough added to colors (fdncred)</li><li>initial WASI support (jonathandturner)</li><li>inf/nan handled in CSV (gillespiecd)</li><li>new <code>xpath</code> command that can search XML documents (fdncred, andrasio)</li><li>rustyline paste mode no longer assumes bracketed paste (wcarss)</li></ul><h3 id="internal-improvements-fdncred-gillespiecd-jonathandturner-josephtlyons-andrasio" tabindex="-1"><a class="header-anchor" href="#internal-improvements-fdncred-gillespiecd-jonathandturner-josephtlyons-andrasio" aria-hidden="true">#</a> Internal improvements (fdncred, gillespiecd, jonathandturner, JosephTLyons, andrasio)</h3><p>Windows builds now use a bigger stack, suggestions have been cleaned up, cleaned up unused files in nu-data, some redundant dependencies were simplified, variable scope was improved to make way for variables, internal names for <code>describe</code> have been improved, nu-protocol got a tidy, added example to <code>update</code>, fix for panics in <code>str to-datetime</code>, internal name of <code>to md</code> corrected, <code>empty?</code> got a rewrite, integers are now parsed as BigInt, decimals are now parsed as BigDecimal, cleanup of old files in the root, more tests added,</p><h1 id="looking-forward" tabindex="-1"><a class="header-anchor" href="#looking-forward" aria-hidden="true">#</a> Looking forward</h1>',17),q=t("We recently finished the Nushell survey and will be working on processing the results, which will help us plan the next few months. Also, if you haven't heard, Nushell is part of the "),L={href:"http://couchbase.sh",target:"_blank",rel:"noopener noreferrer"},j=t("new Couchbase CLI experience"),A=t(". There are also lots of big plans for improving core parts of the system, including line editing, completions, and more. If you're interested in helping out, come chat with us on "),B={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},C=t("discord"),T=t(".");function V(W,E){const o=r("ExternalLinkIcon");return i(),s("div",null,[u,p,m,f,e("p",null,[g,e("a",_,[w,a(o)]),b,e("a",y,[v,a(o)]),k,x,N]),I,e("p",null,[q,e("a",L,[j,a(o)]),A,e("a",B,[C,a(o)]),T])])}const D=n(h,[["render",V],["__file","2020-10-13-nushell_0_21.html.vue"]]);export{D as default};
