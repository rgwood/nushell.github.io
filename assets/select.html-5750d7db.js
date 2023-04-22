import{_ as t,p as o,q as r,Q as e,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const l={},p={id:"frontmatter-title-for-filters",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; select ...rest --ignore-errors</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the columns to select from the table</li><li><code>--ignore-errors</code> <code>(-i)</code>: ignore missing data (make all cell path members optional)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This differs from <code>get</code> in that, rather than accessing the given value in the data structure, it removes all non-selected values from the structure. Hence, using <code>select</code> on a table will produce a table, a list will produce a list, and a record will produce a record.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Select a column in a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: a b: b<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">select</span> a
╭───┬───╮
│ <span class="token comment"># │ a │</span>
├───┼───┤
│ <span class="token number">0</span> │ a │
╰───┴───╯

</code></pre></div><p>Select a field in a record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: a b: b<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">select</span> a
╭───┬───╮
│ a │ a │
╰───┴───╯
</code></pre></div><p>Select just the <code>name</code> column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token keyword">select</span> name

</code></pre></div><p>Select the first four rows (this is the same as <code>first 4</code>)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>

</code></pre></div>`,15);function u(a,m){return o(),r("div",null,[e("h1",p,[d,s(),e("code",null,n(a.$frontmatter.title),1),s(" for filters")]),e("div",i,n(a.$frontmatter.filters),1),h])}const g=t(l,[["render",u],["__file","select.html.vue"]]);export{g as default};
