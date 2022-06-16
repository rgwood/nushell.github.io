import{_ as t,u as n,o as r,c as o,a as e,t as s,d as l,e as c}from"./app.43db386a.js";const p={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=l(),u={style:{"white-space":"pre-wrap"}},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; shells </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Enter a new shell at parent path &#39;..&#39; and show all opened shells</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> enter <span class="token punctuation">..</span><span class="token punctuation">;</span> shells
</code></pre></div><p>Show currently active shell</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> where active <span class="token operator">==</span> <span class="token boolean">true</span>
</code></pre></div>`,7);function g(m,f,x,v,k,a){return r(),o("div",null,[e("h1",d,[h,i,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),_])}var w=t(p,[["render",g],["__file","shells.html.vue"]]);export{w as default};
