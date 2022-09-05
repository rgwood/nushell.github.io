import{_ as e,o as t,c as p,a as n,t as s,d as o,e as c}from"./app.62da7227.js";const u={},r={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),d={style:{"white-space":"pre-wrap"}},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; is-unique </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create mask indicating unique values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> is-unique
</code></pre></div><p>Create mask indicating duplicated rows in a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> is-unique
</code></pre></div>`,7);function m(a,h){return t(),p("div",null,[n("h1",r,[i,l,n("code",null,s(a.$frontmatter.title),1)]),n("div",d,s(a.$frontmatter.usage),1),k])}const _=e(u,[["render",m],["__file","_is-unique.html.vue"]]);export{_ as default};
