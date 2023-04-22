import{_ as t,p as o,q as e,Q as n,t as a,v as p,a1 as c}from"./framework-344bb0e4.js";const r={},u={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},l=n("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),k={class:"command-title"},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr group-by </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Group by and perform an aggregation</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr into-df
    <span class="token operator">|</span> dfr group-by a
    <span class="token operator">|</span> dfr agg <span class="token punctuation">[</span>
        <span class="token punctuation">(</span>dfr col b <span class="token operator">|</span> dfr min <span class="token operator">|</span> dfr as <span class="token string">&quot;b_min&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>dfr col b <span class="token operator">|</span> dfr max <span class="token operator">|</span> dfr as <span class="token string">&quot;b_max&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>dfr col b <span class="token operator">|</span> dfr <span class="token function">sum</span> <span class="token operator">|</span> dfr as <span class="token string">&quot;b_sum&quot;</span><span class="token punctuation">)</span>
     <span class="token punctuation">]</span>
╭───┬───┬───────┬───────┬───────╮
│ <span class="token comment"># │ a │ b_min │ b_max │ b_sum │</span>
├───┼───┼───────┼───────┼───────┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │     <span class="token number">2</span> │     <span class="token number">4</span> │     <span class="token number">6</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │     <span class="token number">4</span> │     <span class="token number">6</span> │    <span class="token number">10</span> │
╰───┴───┴───────┴───────┴───────╯

</code></pre></div><p>Group by and perform an aggregation</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr into-lazy
    <span class="token operator">|</span> dfr group-by a
    <span class="token operator">|</span> dfr agg <span class="token punctuation">[</span>
        <span class="token punctuation">(</span>dfr col b <span class="token operator">|</span> dfr min <span class="token operator">|</span> dfr as <span class="token string">&quot;b_min&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>dfr col b <span class="token operator">|</span> dfr max <span class="token operator">|</span> dfr as <span class="token string">&quot;b_max&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span>dfr col b <span class="token operator">|</span> dfr <span class="token function">sum</span> <span class="token operator">|</span> dfr as <span class="token string">&quot;b_sum&quot;</span><span class="token punctuation">)</span>
     <span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr collect
╭───┬───┬───────┬───────┬───────╮
│ <span class="token comment"># │ a │ b_min │ b_max │ b_sum │</span>
├───┼───┼───────┼───────┼───────┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │     <span class="token number">2</span> │     <span class="token number">4</span> │     <span class="token number">6</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │     <span class="token number">4</span> │     <span class="token number">6</span> │    <span class="token number">10</span> │
╰───┴───┴───────┴───────┴───────╯

</code></pre></div>`,7);function m(s,d){return o(),e("div",null,[n("h1",u,[l,a(),n("code",null,p(s.$frontmatter.title),1),a(" for lazyframe")]),n("div",k,p(s.$frontmatter.lazyframe),1),i])}const f=t(r,[["render",m],["__file","dfr_group-by.html.vue"]]);export{f as default};
