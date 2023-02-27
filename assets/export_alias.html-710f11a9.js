import{_ as r,p as n,q as o,Q as a,t as s,v as t,a1 as l}from"./framework-344bb0e4.js";const i={},c={id:"frontmatter-title-for-core",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export alias (name) (initial_value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: name of the alias</li><li><code>initial_value</code>: equals sign followed by value</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command is a parser keyword. For details, check: https://www.nushell.sh/book/thinking_in_nu.html</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>export an alias of ll to ls -l, from a module</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">export</span> <span class="token builtin class-name">alias</span> ll <span class="token operator">=</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>
</code></pre></div>`,9);function m(e,u){return n(),o("div",null,[a("h1",c,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for core")]),a("div",h,t(e.$frontmatter.core),1),p])}const _=r(i,[["render",m],["__file","export_alias.html.vue"]]);export{_ as default};
