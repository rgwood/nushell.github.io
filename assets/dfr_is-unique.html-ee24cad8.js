import{_ as t,p,q as o,Q as n,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-dataframe",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr is-unique </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create mask indicating unique values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr is-unique
╭───┬───────────╮
│ <span class="token comment"># │ is_unique │</span>
├───┼───────────┤
│ <span class="token number">0</span> │ <span class="token boolean">true</span>      │
│ <span class="token number">1</span> │ <span class="token boolean">false</span>     │
│ <span class="token number">2</span> │ <span class="token boolean">false</span>     │
│ <span class="token number">3</span> │ <span class="token boolean">false</span>     │
│ <span class="token number">4</span> │ <span class="token boolean">false</span>     │
│ <span class="token number">5</span> │ <span class="token boolean">false</span>     │
│ <span class="token number">6</span> │ <span class="token boolean">false</span>     │
╰───┴───────────╯

</code></pre></div><p>Create mask indicating duplicated rows in a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr is-unique
╭───┬───────────╮
│ <span class="token comment"># │ is_unique │</span>
├───┼───────────┤
│ <span class="token number">0</span> │ <span class="token boolean">false</span>     │
│ <span class="token number">1</span> │ <span class="token boolean">false</span>     │
│ <span class="token number">2</span> │ <span class="token boolean">false</span>     │
│ <span class="token number">3</span> │ <span class="token boolean">false</span>     │
│ <span class="token number">4</span> │ <span class="token boolean">true</span>      │
╰───┴───────────╯

</code></pre></div>`,7);function d(a,m){return p(),o("div",null,[n("h1",r,[u,s(),n("code",null,e(a.$frontmatter.title),1),s(" for dataframe")]),n("div",i,e(a.$frontmatter.dataframe),1),k])}const f=t(l,[["render",d],["__file","dfr_is-unique.html.vue"]]);export{f as default};
