import{_ as p,p as o,q as e,Q as n,t as a,v as t,a1 as c}from"./framework-344bb0e4.js";const u={},l={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),k={class:"command-title"},i=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr join </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Join two lazy dataframes</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> df_a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;b&quot;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-lazy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> df_b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span> <span class="token string">&quot;bar&quot;</span> <span class="token string">&quot;ham&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token string">&quot;let&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;var&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;const&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-lazy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df_a</span> <span class="token operator">|</span> dfr <span class="token function">join</span> <span class="token variable">$df_b</span> a foo <span class="token operator">|</span> dfr collect
╭───┬───┬───┬───┬─────┬─────╮
│ <span class="token comment"># │ a │ b │ c │ bar │ ham │</span>
├───┼───┼───┼───┼─────┼─────┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ a │ <span class="token number">0</span> │ a   │ <span class="token builtin class-name">let</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │ b │ <span class="token number">1</span> │ c   │ var │
│ <span class="token number">2</span> │ <span class="token number">1</span> │ c │ <span class="token number">2</span> │ a   │ <span class="token builtin class-name">let</span> │
│ <span class="token number">3</span> │ <span class="token number">1</span> │ c │ <span class="token number">3</span> │ a   │ <span class="token builtin class-name">let</span> │
╰───┴───┴───┴───┴─────┴─────╯

</code></pre></div><p>Join one eager dataframe with a lazy dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> df_a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;b&quot;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;c&quot;</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> df_b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span> <span class="token string">&quot;bar&quot;</span> <span class="token string">&quot;ham&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&quot;a&quot;</span> <span class="token string">&quot;let&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;var&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token string">&quot;c&quot;</span> <span class="token string">&quot;const&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-lazy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df_a</span> <span class="token operator">|</span> dfr <span class="token function">join</span> <span class="token variable">$df_b</span> a foo
╭───┬───┬───┬───┬─────┬─────╮
│ <span class="token comment"># │ a │ b │ c │ bar │ ham │</span>
├───┼───┼───┼───┼─────┼─────┤
│ <span class="token number">0</span> │ <span class="token number">1</span> │ a │ <span class="token number">0</span> │ a   │ <span class="token builtin class-name">let</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │ b │ <span class="token number">1</span> │ c   │ var │
│ <span class="token number">2</span> │ <span class="token number">1</span> │ c │ <span class="token number">2</span> │ a   │ <span class="token builtin class-name">let</span> │
│ <span class="token number">3</span> │ <span class="token number">1</span> │ c │ <span class="token number">3</span> │ a   │ <span class="token builtin class-name">let</span> │
╰───┴───┴───┴───┴─────┴─────╯

</code></pre></div>`,7);function m(s,b){return o(),e("div",null,[n("h1",l,[r,a(),n("code",null,t(s.$frontmatter.title),1),a(" for lazyframe")]),n("div",k,t(s.$frontmatter.lazyframe),1),i])}const q=p(u,[["render",m],["__file","dfr_join.html.vue"]]);export{q as default};
