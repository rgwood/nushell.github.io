import{_ as e,p as o,q as p,Q as a,t as s,v as t,a1 as r}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr get-hour </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns hour from a date</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> dt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;2020-08-04T16:39:18+00:00&#39;</span> <span class="token operator">|</span> into datetime <span class="token parameter variable">-z</span> <span class="token string">&#39;UTC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$dt</span> <span class="token variable">$dt</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> dfr get-hour
╭───┬────╮
│ <span class="token comment"># │ 0  │</span>
├───┼────┤
│ <span class="token number">0</span> │ <span class="token number">16</span> │
│ <span class="token number">1</span> │ <span class="token number">16</span> │
╰───┴────╯

</code></pre></div>`,5);function f(n,h){return o(),p("div",null,[a("h1",l,[i,s(),a("code",null,t(n.$frontmatter.title),1),s(" for dataframe")]),a("div",d,t(n.$frontmatter.dataframe),1),u])}const m=e(c,[["render",f],["__file","dfr_get-hour.html.vue"]]);export{m as default};
