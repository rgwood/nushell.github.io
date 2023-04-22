import{_ as t,p as o,q as p,Q as a,t as s,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; merge (value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>value</code>: the new value to merge with</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>You may provide a column structure to merge</p><p>When merging tables, row 0 of the input table is overwritten with values from row 0 of the provided table, then repeating this process with row 1, and so on.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Add an &#39;index&#39; column to the input table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a b c<span class="token punctuation">]</span> <span class="token operator">|</span> wrap name <span class="token operator">|</span> merge <span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> wrap index <span class="token punctuation">)</span>
╭───┬──────╮
│ <span class="token comment"># │ name │</span>
├───┼──────┤
│ <span class="token number">1</span> │ a    │
│ <span class="token number">2</span> │ b    │
│ <span class="token number">3</span> │ c    │
╰───┴──────╯

</code></pre></div><p>Merge two records</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>a: <span class="token number">1</span>, b: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span>c: <span class="token number">3</span><span class="token punctuation">}</span>
╭───┬───╮
│ a │ <span class="token number">1</span> │
│ b │ <span class="token number">2</span> │
│ c │ <span class="token number">3</span> │
╰───┴───╯
</code></pre></div><p>Merge two tables, overwriting overlapping columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>columnA: A0 columnB: B0<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> merge <span class="token punctuation">[</span><span class="token punctuation">{</span>columnA: <span class="token string">&#39;A0*&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
╭───┬─────────┬─────────╮
│ <span class="token comment"># │ columnA │ columnB │</span>
├───┼─────────┼─────────┤
│ <span class="token number">0</span> │ A0*     │ B0      │
╰───┴─────────┴─────────╯

</code></pre></div>`,14);function m(n,h){return o(),p("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for filters")]),a("div",u,e(n.$frontmatter.filters),1),d])}const g=t(c,[["render",m],["__file","merge.html.vue"]]);export{g as default};
