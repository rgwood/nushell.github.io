import{_ as s,o as r,c as o,a as e,t,d as n,e as d}from"./app.62da7227.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=n(),p={style:{"white-space":"pre-wrap"}},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; mkdir ...rest --show-created-paths</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the name(s) of the path(s) to create</li><li><code>--show-created-paths</code>: show the path(s) created.</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Make a directory named foo</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> foo
</code></pre></div><p>Make multiple directories and show the paths created</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-s</span> foo/bar foo2
</code></pre></div>`,9);function u(a,f){return r(),o("div",null,[e("h1",i,[h,l,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),m])}const g=s(c,[["render",u],["__file","mkdir.html.vue"]]);export{g as default};
