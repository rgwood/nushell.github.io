import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; every (stride) --skip</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>stride</code>: how many rows to skip between (and including) each row returned</li><li><code>--skip</code> <code>(-s)</code>: skip the rows that would be returned, instead of selecting them</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get every second row</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> every <span class="token number">2</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">3</span> │
│ <span class="token number">2</span> │ <span class="token number">5</span> │
╰───┴───╯

</code></pre></div><p>Skip every second row</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> every <span class="token number">2</span> <span class="token parameter variable">--skip</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">4</span> │
╰───┴───╯

</code></pre></div>`,9);function m(e,h){return r(),o("div",null,[a("h1",l,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for filters")]),a("div",d,n(e.$frontmatter.filters),1),u])}const b=t(c,[["render",m],["__file","every.html.vue"]]);export{b as default};
