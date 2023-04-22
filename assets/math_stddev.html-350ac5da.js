import{_ as t,p as o,q as r,Q as a,t as s,v as n,a1 as p}from"./framework-344bb0e4.js";const c={},d={id:"frontmatter-title-for-math",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),i={class:"command-title"},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math stddev --sample</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--sample</code> <code>(-s)</code>: calculate sample standard deviation (i.e. using N-1 as the denominator)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Compute the standard deviation of a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math stddev
<span class="token number">1.4142135623730951</span>
</code></pre></div><p>Compute the sample standard deviation of a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math stddev <span class="token parameter variable">-s</span>
<span class="token number">1.5811388300841898</span>
</code></pre></div>`,9);function h(e,u){return o(),r("div",null,[a("h1",d,[l,s(),a("code",null,n(e.$frontmatter.title),1),s(" for math")]),a("div",i,n(e.$frontmatter.math),1),m])}const k=t(c,[["render",h],["__file","math_stddev.html.vue"]]);export{k as default};
