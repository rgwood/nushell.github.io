import{_ as n,o as t,c as r,a,t as s,d as o,e as p}from"./app.f96f0b62.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),h={style:{"white-space":"pre-wrap"}},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math round --precision</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--precision {number}</code>: digits of precision</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply the round function to a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1.5</span> <span class="token number">2.3</span> -3.1<span class="token punctuation">]</span> <span class="token operator">|</span> math round
</code></pre></div><p>Apply the round function with precision specified</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1.555</span> <span class="token number">2.333</span> -3.111<span class="token punctuation">]</span> <span class="token operator">|</span> math round -p <span class="token number">2</span>
</code></pre></div>`,9);function m(e,_){return t(),r("div",null,[a("h1",i,[d,l,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var g=n(c,[["render",m],["__file","math_round.html.vue"]]);export{g as default};
