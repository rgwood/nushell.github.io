import{_ as r,z as o,A as n,X as a,C as t,D as s,a6 as d}from"./framework.3d018c9f.js";const c={},i={id:"frontmatter-title-for-core",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; metadata (expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>expression</code>: the expression you want metadata for</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the metadata of a variable</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> metadata <span class="token variable">$a</span>
</code></pre></div><p>Get the metadata of the input</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> metadata
</code></pre></div>`,9);function m(e,f){return o(),n("div",null,[a("h1",i,[l,t(),a("code",null,s(e.$frontmatter.title),1),t(" for core")]),a("div",h,s(e.$frontmatter.core),1),p])}const _=r(c,[["render",m],["__file","metadata.html.vue"]]);export{_ as default};
