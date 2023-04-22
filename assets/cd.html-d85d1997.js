import{_ as n,p as r,q as o,Q as a,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const d={},i={id:"frontmatter-title-for-filesystem",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filesystem","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; cd (path)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: the path to change to</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Change to your home directory</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> ~

</code></pre></div><p>Change to a directory via abbreviations</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> d/s/9

</code></pre></div><p>Change to the previous working directory ($OLDPWD)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> -

</code></pre></div>`,11);function m(e,u){return r(),o("div",null,[a("h1",i,[l,s(),a("code",null,t(e.$frontmatter.title),1),s(" for filesystem")]),a("div",h,t(e.$frontmatter.filesystem),1),p])}const f=n(d,[["render",m],["__file","cd.html.vue"]]);export{f as default};
