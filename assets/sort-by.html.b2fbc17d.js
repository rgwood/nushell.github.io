import{_ as p,z as o,A as r,X as a,C as n,D as e,a6 as t}from"./framework.3d018c9f.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sort-by ...columns --reverse --insensitive --natural</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...columns</code>: the column(s) to sort by</li><li><code>--reverse</code>: Sort in reverse order</li><li><code>--insensitive</code>: Sort string-based columns case-insensitively</li><li><code>--natural</code>: Sort alphanumeric string-based columns naturally</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sort the list by increasing value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by
</code></pre></div><p>sort the list by decreasing value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-r</span>
</code></pre></div><p>sort a list of strings</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by
</code></pre></div><p>sort a list of strings in reverse</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-r</span>
</code></pre></div><p>sort a list of alphanumeric strings naturally</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>test1 test11 test2<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-n</span>
</code></pre></div><p>Sort strings (case-insensitive)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-i</span>
</code></pre></div><p>Sort strings (reversed case-insensitive)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span>
</code></pre></div><p>Sort a table by its column (reversed order)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>fruit count<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>apple <span class="token number">9</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>pear <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>orange <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by fruit <span class="token parameter variable">-r</span>
</code></pre></div>`,21),k={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),b={class:"command-title"},m=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sort-by ...sort expression --reverse --nulls-last</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...sort expression</code>: sort expression for the dataframe</li><li><code>--reverse {list&lt;bool&gt;}</code>: Reverse sorting. Default is false</li><li><code>--nulls-last</code>: nulls are shown last in the dataframe</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Sort dataframe by one column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> sort-by a
</code></pre></div><p>Sort column using two columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> sort-by <span class="token punctuation">[</span>a b<span class="token punctuation">]</span> <span class="token parameter variable">-r</span> <span class="token punctuation">[</span>false true<span class="token punctuation">]</span>
</code></pre></div>`,9);function g(s,f){return o(),r("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",u,e(s.$frontmatter.filters),1),d,a("h1",k,[h,n(),a("code",null,e(s.$frontmatter.title),1),n(" for lazyframe")]),a("div",b,e(s.$frontmatter.lazyframe),1),m])}const y=p(c,[["render",g],["__file","sort-by.html.vue"]]);export{y as default};
