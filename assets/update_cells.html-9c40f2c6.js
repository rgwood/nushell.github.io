import{_ as e,p,q as o,Q as s,t as a,v as t,a1 as c}from"./framework-344bb0e4.js";const l={},u={id:"frontmatter-title-for-filters",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; update cells (closure) --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>closure</code>: the closure to run an update for each cell</li><li><code>--columns {table}</code>: list of columns to update</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Update the zero value cells to empty strings.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&quot;2021-04-16&quot;</span>, <span class="token string">&quot;2021-06-10&quot;</span>, <span class="token string">&quot;2021-09-18&quot;</span>, <span class="token string">&quot;2021-10-15&quot;</span>, <span class="token string">&quot;2021-11-16&quot;</span>, <span class="token string">&quot;2021-11-17&quot;</span>, <span class="token string">&quot;2021-11-18&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span>          <span class="token number">37</span>,            <span class="token number">0</span>,            <span class="token number">0</span>,            <span class="token number">0</span>,           <span class="token number">37</span>,            <span class="token number">0</span>,            <span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span> <span class="token operator">|</span> update cells <span class="token punctuation">{</span> <span class="token operator">|</span>value<span class="token operator">|</span>
          <span class="token keyword">if</span> <span class="token variable">$value</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;&quot;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token variable">$value</span>
          <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
╭───┬────────────┬────────────┬────────────┬────────────┬────────────┬────────────┬────────────╮
│ <span class="token comment"># │ 2021-04-16 │ 2021-06-10 │ 2021-09-18 │ 2021-10-15 │ 2021-11-16 │ 2021-11-17 │ 2021-11-18 │</span>
├───┼────────────┼────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ <span class="token number">0</span> │         <span class="token number">37</span> │            │            │            │         <span class="token number">37</span> │            │            │
╰───┴────────────┴────────────┴────────────┴────────────┴────────────┴────────────┴────────────╯

</code></pre></div><p>Update the zero value cells to empty strings in 2 last columns.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&quot;2021-04-16&quot;</span>, <span class="token string">&quot;2021-06-10&quot;</span>, <span class="token string">&quot;2021-09-18&quot;</span>, <span class="token string">&quot;2021-10-15&quot;</span>, <span class="token string">&quot;2021-11-16&quot;</span>, <span class="token string">&quot;2021-11-17&quot;</span>, <span class="token string">&quot;2021-11-18&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span>          <span class="token number">37</span>,            <span class="token number">0</span>,            <span class="token number">0</span>,            <span class="token number">0</span>,           <span class="token number">37</span>,            <span class="token number">0</span>,            <span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span> <span class="token operator">|</span> update cells <span class="token parameter variable">-c</span> <span class="token punctuation">[</span><span class="token string">&quot;2021-11-18&quot;</span>, <span class="token string">&quot;2021-11-17&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token operator">|</span>value<span class="token operator">|</span>
            <span class="token keyword">if</span> <span class="token variable">$value</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token variable">$value</span>
            <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
╭───┬────────────┬────────────┬────────────┬────────────┬────────────┬────────────┬────────────╮
│ <span class="token comment"># │ 2021-04-16 │ 2021-06-10 │ 2021-09-18 │ 2021-10-15 │ 2021-11-16 │ 2021-11-17 │ 2021-11-18 │</span>
├───┼────────────┼────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ <span class="token number">0</span> │         <span class="token number">37</span> │          <span class="token number">0</span> │          <span class="token number">0</span> │          <span class="token number">0</span> │         <span class="token number">37</span> │            │            │
╰───┴────────────┴────────────┴────────────┴────────────┴────────────┴────────────┴────────────╯

</code></pre></div>`,9);function d(n,m){return p(),o("div",null,[s("h1",u,[r,a(),s("code",null,t(n.$frontmatter.title),1),a(" for filters")]),s("div",i,t(n.$frontmatter.filters),1),k])}const b=e(l,[["render",d],["__file","update_cells.html.vue"]]);export{b as default};
