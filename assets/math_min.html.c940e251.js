import{_ as e,z as o,A as p,X as a,C as s,D as t,a6 as c}from"./framework.3d018c9f.js";const r={},i={id:"frontmatter-title-for-math",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),m={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math min </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Compute the minimum of a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>-50 <span class="token number">100</span> <span class="token number">25</span><span class="token punctuation">]</span> <span class="token operator">|</span> math min
</code></pre></div><p>Compute the minima of the columns of a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: <span class="token number">1</span> b: <span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">2</span> b: -1<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> math min
</code></pre></div>`,7);function u(n,d){return o(),p("div",null,[a("h1",i,[l,s(),a("code",null,t(n.$frontmatter.title),1),s(" for math")]),a("div",m,t(n.$frontmatter.math),1),h])}const _=e(r,[["render",u],["__file","math_min.html.vue"]]);export{_ as default};
