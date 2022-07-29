import{_ as s,o as r,c as n,a as e,t,d as o,e as c}from"./app.f96f0b62.js";const i={},p={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; parse (pattern) --regex</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match. Eg) &quot;{foo}: {bar}&quot;</li><li><code>--regex</code>: use full regex syntax for patterns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a string into two named columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse <span class="token string">&quot;{foo} {bar}&quot;</span>
</code></pre></div><p>Parse a string using regex pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse -r <span class="token string">&#39;(?P&lt;foo&gt;\\w+) (?P&lt;bar&gt;\\w+)&#39;</span>
</code></pre></div>`,9);function g(a,m){return r(),n("div",null,[e("h1",p,[l,d,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}var _=s(i,[["render",g],["__file","parse.html.vue"]]);export{_ as default};
