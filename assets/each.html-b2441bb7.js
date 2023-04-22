import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; each (closure) --keep-empty</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>closure</code>: the closure to run</li><li><code>--keep-empty</code> <code>(-k)</code>: keep empty result cells</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Since tables are lists of records, passing a table into &#39;each&#39; will iterate over each record, not necessarily each cell within it.</p><p>Avoid passing single records to this command. Since a record is a one-row structure, &#39;each&#39; will only run once, behaving similar to &#39;do&#39;. To iterate over a record&#39;s values, try converting it to a table with &#39;transpose&#39; first.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Multiplies elements in the list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">|</span>e<span class="token operator">|</span> <span class="token number">2</span> * <span class="token variable">$e</span> <span class="token punctuation">}</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">4</span> │
│ <span class="token number">2</span> │ <span class="token number">6</span> │
╰───┴───╯

</code></pre></div><p>Produce a list of values in the record, converted to string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>major:2, minor:1, patch:4<span class="token punctuation">}</span> <span class="token operator">|</span> values <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">||</span> into string <span class="token punctuation">}</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">1</span> │
│ <span class="token number">2</span> │ <span class="token number">4</span> │
╰───┴───╯

</code></pre></div><p>Produce a list that has &quot;two&quot; for each 2 in the input</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">|</span>e<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$e</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span> <span class="token string">&quot;two&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
╭───┬─────╮
│ <span class="token number">0</span> │ two │
│ <span class="token number">1</span> │ two │
╰───┴─────╯

</code></pre></div><p>Iterate over each element, producing a list showing indexes of any 2s</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> enumerate <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">|</span>e<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$e</span>.item <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span> $<span class="token string">&quot;found 2 at (<span class="token variable">$e</span>.index)!&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
╭───┬───────────────╮
│ <span class="token number">0</span> │ found <span class="token number">2</span> at <span class="token number">1</span><span class="token operator">!</span> │
╰───┴───────────────╯

</code></pre></div><p>Iterate over each element, keeping null results</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> each --keep-empty <span class="token punctuation">{</span><span class="token operator">|</span>e<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$e</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span> <span class="token string">&quot;found 2!&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
╭───┬──────────╮
│ <span class="token number">0</span> │          │
│ <span class="token number">1</span> │ found <span class="token number">2</span><span class="token operator">!</span> │
│ <span class="token number">2</span> │          │
╰───┴──────────╯

</code></pre></div>`,18);function d(s,h){return p(),o("div",null,[a("h1",l,[u,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",i,e(s.$frontmatter.filters),1),k])}const b=t(r,[["render",d],["__file","each.html.vue"]]);export{b as default};
