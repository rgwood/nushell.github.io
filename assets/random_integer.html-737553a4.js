import{_ as s,p as r,q as o,Q as a,t as n,v as t,a1 as d}from"./framework-344bb0e4.js";const c={},i={id:"frontmatter-title-for-random",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-random","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random integer (range)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>range</code>: Range of values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate an unconstrained random integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer

</code></pre></div><p>Generate a random integer less than or equal to 500</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token punctuation">..</span><span class="token number">500</span>

</code></pre></div><p>Generate a random integer greater than or equal to 100000</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token number">100000</span><span class="token punctuation">..</span>

</code></pre></div><p>Generate a random integer between 1 and 10</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span>

</code></pre></div>`,13);function g(e,m){return r(),o("div",null,[a("h1",i,[l,n(),a("code",null,t(e.$frontmatter.title),1),n(" for random")]),a("div",p,t(e.$frontmatter.random),1),h])}const _=s(c,[["render",g],["__file","random_integer.html.vue"]]);export{_ as default};
