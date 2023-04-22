import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-math",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math cos --degrees</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--degrees</code> <code>(-d)</code>: Use degrees instead of radians</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply the cosine to π</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> math pi <span class="token operator">|</span> math cos
<span class="token parameter variable">-1</span>
</code></pre></div><p>Apply the cosine to a list of angles in degrees</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">90</span> <span class="token number">180</span> <span class="token number">270</span> <span class="token number">360</span><span class="token punctuation">]</span> <span class="token operator">|</span> math cos <span class="token parameter variable">-d</span>
╭───┬─────────╮
│ <span class="token number">0</span> │  <span class="token number">1.0000</span> │
│ <span class="token number">1</span> │  <span class="token number">0.0000</span> │
│ <span class="token number">2</span> │ <span class="token parameter variable">-1.0000</span> │
│ <span class="token number">3</span> │  <span class="token number">0.0000</span> │
│ <span class="token number">4</span> │  <span class="token number">1.0000</span> │
╰───┴─────────╯

</code></pre></div>`,9);function m(e,u){return r(),o("div",null,[a("h1",l,[d,s(),a("code",null,n(e.$frontmatter.title),1),s(" for math")]),a("div",i,n(e.$frontmatter.math),1),h])}const k=t(c,[["render",m],["__file","math_cos.html.vue"]]);export{k as default};
