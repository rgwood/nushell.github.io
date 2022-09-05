import{_ as t,o as r,c as n,a as e,t as s,d as o,e as c}from"./app.62da7227.js";const l={},i={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),d={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; url scheme ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally operate by cell path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the scheme of a URL</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com&#39;</span> <span class="token operator">|</span> url scheme
</code></pre></div><p>You get an empty string if there is no scheme</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;test&#39;</span> <span class="token operator">|</span> url scheme
</code></pre></div>`,9);function u(a,_){return r(),n("div",null,[e("h1",i,[h,p,e("code",null,s(a.$frontmatter.title),1)]),e("div",d,s(a.$frontmatter.usage),1),m])}const f=t(l,[["render",u],["__file","url_scheme.html.vue"]]);export{f as default};
