import{_ as t,u as e,o,c as p,a,t as s,d as c,e as r}from"./app.43db386a.js";const i={computed:{frontmatter(){return e().value}}},u={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; min </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Min aggregation for a group by</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> to-df
    <span class="token operator">|</span> group-by a
    <span class="token operator">|</span> agg <span class="token punctuation">(</span>col b <span class="token operator">|</span> min<span class="token punctuation">)</span>
</code></pre></div>`,5);function m(_,g,f,b,x,n){return o(),p("div",null,[a("h1",u,[l,d,a("code",null,s(n.frontmatter.title),1)]),a("div",h,s(n.frontmatter.usage),1),k])}var y=t(i,[["render",m],["__file","min.html.vue"]]);export{y as default};
