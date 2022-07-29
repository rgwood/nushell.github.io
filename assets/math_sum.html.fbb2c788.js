import{_ as t,o as n,c as o,a,t as s,d as r,e as c}from"./app.f96f0b62.js";const p={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math sum </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sum a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> math <span class="token function">sum</span>
</code></pre></div><p>Get the disk usage for the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get size <span class="token operator">|</span> math <span class="token function">sum</span>
</code></pre></div>`,7);function m(e,_){return n(),o("div",null,[a("h1",i,[l,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var g=t(p,[["render",m],["__file","math_sum.html.vue"]]);export{g as default};
