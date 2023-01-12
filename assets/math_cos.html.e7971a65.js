import{_ as n,z as r,A as o,X as a,C as s,D as t,a6 as c}from"./framework.3d018c9f.js";const p={},d={id:"frontmatter-title-for-math",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math cos --degrees</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--degrees</code>: Use degrees instead of radians</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply the cosine to pi</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> math pi <span class="token operator">|</span> math cos
</code></pre></div><p>Apply the cosine to a list of angles in degrees</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">90</span> <span class="token number">180</span> <span class="token number">270</span> <span class="token number">360</span><span class="token punctuation">]</span> <span class="token operator">|</span> math cos <span class="token parameter variable">-d</span>
</code></pre></div>`,9);function m(e,u){return r(),o("div",null,[a("h1",d,[i,s(),a("code",null,t(e.$frontmatter.title),1),s(" for math")]),a("div",l,t(e.$frontmatter.math),1),h])}const g=n(p,[["render",m],["__file","math_cos.html.vue"]]);export{g as default};
