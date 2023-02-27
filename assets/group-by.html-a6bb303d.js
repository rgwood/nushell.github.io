import{_ as n,p as r,q as o,Q as a,t as s,v as t,a1 as p}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-default",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; group-by (grouper)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>grouper</code>: the grouper value to use</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Group items by the &quot;type&quot; column&#39;s values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> group-by <span class="token builtin class-name">type</span>
</code></pre></div><p>You can also group by raw values by leaving out the argument</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span> <span class="token string">&#39;3&#39;</span> <span class="token string">&#39;1&#39;</span> <span class="token string">&#39;3&#39;</span> <span class="token string">&#39;2&#39;</span> <span class="token string">&#39;1&#39;</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> group-by
</code></pre></div>`,9);function h(e,g){return r(),o("div",null,[a("h1",c,[i,s(),a("code",null,t(e.$frontmatter.title),1),s(" for default")]),a("div",d,t(e.$frontmatter.default),1),u])}const m=n(l,[["render",h],["__file","group-by.html.vue"]]);export{m as default};
