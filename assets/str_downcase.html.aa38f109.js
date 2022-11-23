import{_ as t,o,c,a,t as n,d as e,e as p}from"./app.ef551336.js";const r={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d=e(),u=e(" for strings"),h={class:"command-title"},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str downcase ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally downcase text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;NU&#39;</span> <span class="token operator">|</span> str downcase
</code></pre></div><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;TESTa&#39;</span> <span class="token operator">|</span> str downcase
</code></pre></div><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Test ABC<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str downcase ColA
</code></pre></div><p>Downcase contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Test ABC<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str downcase ColA ColB
</code></pre></div>`,13);function k(s,_){return o(),c("div",null,[a("h1",l,[i,d,a("code",null,n(s.$frontmatter.title),1),u]),a("div",h,n(s.$frontmatter.strings),1),g])}const f=t(r,[["render",k],["__file","str_downcase.html.vue"]]);export{f as default};
