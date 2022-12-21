import{_ as t,z as o,A as p,X as a,C as n,D as e,a6 as c}from"./framework.3d018c9f.js";const l={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; update (field) (replacement value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>field</code>: the name of the column to update</li><li><code>replacement value</code>: the new value to give the cell(s)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Update a column value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> update name <span class="token string">&#39;Nushell&#39;</span>
</code></pre></div><p>Use in block form for more involved updating logic</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>count fruit<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> update count <span class="token punctuation">{</span><span class="token operator">|</span>f<span class="token operator">|</span> <span class="token variable">$f</span>.count + <span class="token number">1</span><span class="token punctuation">}</span>
</code></pre></div>`,9);function h(s,m){return o(),p("div",null,[a("h1",r,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",u,e(s.$frontmatter.filters),1),d])}const f=t(l,[["render",h],["__file","update.html.vue"]]);export{f as default};
