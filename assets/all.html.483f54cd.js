import{_ as t,z as p,A as o,X as a,C as n,D as e,a6 as c}from"./framework.3d018c9f.js";const l={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; all (predicate)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>predicate</code>: the expression, or block, that must evaluate to a boolean</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Check if each row&#39;s status is the string &#39;UP&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>status<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>UP<span class="token punctuation">]</span> <span class="token punctuation">[</span>UP<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> all status <span class="token operator">==</span> UP
</code></pre></div><p>Check that all of the values are even, using the built-in $it variable</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> all <span class="token punctuation">(</span><span class="token variable">$it</span> mod <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>
</code></pre></div><p>Check that all of the values are even, using a block</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> all <span class="token punctuation">{</span><span class="token operator">|</span>e<span class="token operator">|</span> <span class="token variable">$e</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">}</span>
</code></pre></div>`,11);function h(s,k){return p(),o("div",null,[a("h1",r,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",u,e(s.$frontmatter.filters),1),d])}const b=t(l,[["render",h],["__file","all.html.vue"]]);export{b as default};
