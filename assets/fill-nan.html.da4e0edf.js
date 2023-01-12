import{_ as t,z as o,A as p,X as a,C as s,D as e,a6 as l}from"./framework.3d018c9f.js";const c={},r={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fill-nan </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Fills the NaN values with 0</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> NaN <span class="token number">3</span> NaN<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> fill-nan <span class="token number">0</span>
</code></pre></div><p>Fills the NaN values of a whole dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">0.2</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.1</span> NaN<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> fill-nan <span class="token number">0</span>
</code></pre></div>`,7);function h(n,f){return o(),p("div",null,[a("h1",r,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for lazyframe")]),a("div",u,e(n.$frontmatter.lazyframe),1),d])}const m=t(c,[["render",h],["__file","fill-nan.html.vue"]]);export{m as default};
