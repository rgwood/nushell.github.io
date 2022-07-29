import{_ as s,o as r,c as n,a,t,d as o,e as l}from"./app.f96f0b62.js";const c={},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),h={style:{"white-space":"pre-wrap"}},m=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from yaml </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts yaml formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a: 1&#39;</span> <span class="token operator">|</span> from yaml
</code></pre></div><p>Converts yaml formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;[ a: 1, b: [1, 2] ]&#39;</span> <span class="token operator">|</span> from yaml
</code></pre></div>`,7);function _(e,f){return r(),n("div",null,[a("h1",d,[i,p,a("code",null,t(e.$frontmatter.title),1)]),a("div",h,t(e.$frontmatter.usage),1),m])}var u=s(c,[["render",_],["__file","from_yaml.html.vue"]]);export{u as default};
