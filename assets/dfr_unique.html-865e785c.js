import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-dataframe-or-lazyframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe-or-lazyframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr unique </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns unique values from a series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr unique
╭───┬───╮
│ <span class="token comment"># │ 0 │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">2</span> │
╰───┴───╯

</code></pre></div><p>Creates a is unique expression from a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> unique

</code></pre></div>`,7);function m(e,f){return r(),o("div",null,[a("h1",l,[d,s(),a("code",null,n(e.$frontmatter.title),1),s(" for dataframe or lazyframe")]),a("div",i,n(e.$frontmatter.dataframe_or_lazyframe),1),u])}const _=t(p,[["render",m],["__file","dfr_unique.html.vue"]]);export{_ as default};
