import{_ as t,u as n,o,c as r,a,t as s,d as p,e as c}from"./app.43db386a.js";const l={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: starting from the back, the number of rows to remove</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Remove the last item of a list/table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> drop
</code></pre></div><p>Remove zero item of a list/table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> drop <span class="token number">0</span>
</code></pre></div><p>Remove the last two items of a list/table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> drop <span class="token number">2</span>
</code></pre></div>`,11);function g(_,f,b,k,v,e){return o(),r("div",null,[a("h1",d,[i,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var w=t(l,[["render",g],["__file","drop.html.vue"]]);export{w as default};
