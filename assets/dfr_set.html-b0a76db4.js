import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr set </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Shifts the values by a given period</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr <span class="token builtin class-name">shift</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> mask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> <span class="token operator">|</span> dfr is-null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$s</span> <span class="token operator">|</span> dfr <span class="token builtin class-name">set</span> <span class="token number">0</span> <span class="token parameter variable">--mask</span> <span class="token variable">$mask</span>
╭───┬───╮
│ <span class="token comment"># │ 0 │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">0</span> │
│ <span class="token number">1</span> │ <span class="token number">0</span> │
│ <span class="token number">2</span> │ <span class="token number">1</span> │
│ <span class="token number">3</span> │ <span class="token number">2</span> │
│ <span class="token number">4</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div>`,5);function k(s,m){return p(),o("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for dataframe")]),a("div",u,e(s.$frontmatter.dataframe),1),d])}const f=t(c,[["render",k],["__file","dfr_set.html.vue"]]);export{f as default};
