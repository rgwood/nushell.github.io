import{_ as e,p as o,q as p,Q as a,t as s,v as t,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i={class:"command-title"},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr get-day </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns day from a date</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> dt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;2020-08-04T16:39:18+00:00&#39;</span> <span class="token operator">|</span> into datetime <span class="token parameter variable">-z</span> <span class="token string">&#39;UTC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$dt</span> <span class="token variable">$dt</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> dfr get-day
╭───┬───╮
│ <span class="token comment"># │ 0 │</span>
├───┼───┤
│ <span class="token number">0</span> │ <span class="token number">4</span> │
│ <span class="token number">1</span> │ <span class="token number">4</span> │
╰───┴───╯

</code></pre></div>`,5);function f(n,k){return o(),p("div",null,[a("h1",l,[d,s(),a("code",null,t(n.$frontmatter.title),1),s(" for dataframe")]),a("div",i,t(n.$frontmatter.dataframe),1),u])}const h=e(c,[["render",f],["__file","dfr_get-day.html.vue"]]);export{h as default};
