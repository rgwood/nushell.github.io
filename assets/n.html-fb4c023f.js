import{_ as n,p as o,q as r,Q as e,t,v as s,a1 as c}from"./framework-344bb0e4.js";const l={},d={id:"frontmatter-title-for-shells",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title-for-shells","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; n </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Make two directories and enter new shells for them, use <code>n</code> to jump to the next shell</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> foo bar<span class="token punctuation">;</span> enter foo<span class="token punctuation">;</span> enter <span class="token punctuation">..</span>/bar<span class="token punctuation">;</span> n

</code></pre></div><p>Run <code>n</code> several times and note the changes of current directory</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> n

</code></pre></div>`,7);function u(a,f){return o(),r("div",null,[e("h1",d,[i,t(),e("code",null,s(a.$frontmatter.title),1),t(" for shells")]),e("div",h,s(a.$frontmatter.shells),1),p])}const _=n(l,[["render",u],["__file","n.html.vue"]]);export{_ as default};
