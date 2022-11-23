import{_ as t,o as p,c as o,a,t as n,d as e,e as c}from"./app.ef551336.js";const l={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u=e(),k=e(" for filters"),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; each while (block) --numbered</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run</li><li><code>--numbered</code>: iterate with an index</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Multiplies elements below three by two</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token keyword">while</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$it</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span> <span class="token variable">$it</span> * <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> null <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><p>Output elements till reaching &#39;stop&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> stop <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token keyword">while</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$it</span> <span class="token operator">==</span> <span class="token string">&#39;stop&#39;</span> <span class="token punctuation">{</span> null <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> $<span class="token string">&quot;Output: (<span class="token variable">$it</span>)&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><p>Iterate over each element, print the matching value and its index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token keyword">while</span> <span class="token parameter variable">-n</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$it</span>.item <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token punctuation">{</span> $<span class="token string">&quot;value (<span class="token variable">$it</span>.item) at (<span class="token variable">$it</span>.index)!&quot;</span><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> null <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div>`,11);function m(s,b){return p(),o("div",null,[a("h1",r,[i,u,a("code",null,n(s.$frontmatter.title),1),k]),a("div",d,n(s.$frontmatter.filters),1),h])}const g=t(l,[["render",m],["__file","each_while.html.vue"]]);export{g as default};
