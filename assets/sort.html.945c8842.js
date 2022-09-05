import{_ as e,o as t,c as o,a as s,t as n,d as p,e as r}from"./app.62da7227.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sort --reverse --insensitive --values</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--reverse</code>: Sort in reverse order</li><li><code>--insensitive</code>: Sort string-based columns case-insensitively</li><li><code>--values</code>: If input is a single record, sort the record by values, ignored if input is not a single record</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sort the list by increasing value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span>
</code></pre></div><p>sort the list by decreasing value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
</code></pre></div><p>sort a list of strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span>
</code></pre></div><p>sort a list of strings in reverse</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
</code></pre></div><p>Sort strings (case-insensitive)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-i</span>
</code></pre></div><p>Sort strings (reversed case-insensitive)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span>
</code></pre></div><p>Sort record by key</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>b: <span class="token number">3</span>, a: <span class="token number">4</span><span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">sort</span>
</code></pre></div><p>Sort record by value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token number">4</span>, b: <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">sort</span>
</code></pre></div>`,21);function k(a,g){return t(),o("div",null,[s("h1",l,[i,u,s("code",null,n(a.$frontmatter.title),1)]),s("div",d,n(a.$frontmatter.usage),1),h])}const v=e(c,[["render",k],["__file","sort.html.vue"]]);export{v as default};
