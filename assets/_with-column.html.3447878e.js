import{_ as t,u as e,o as p,c as o,a,t as s,d as c,e as r}from"./app.43db386a.js";const u={computed:{frontmatter(){return e().value}}},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),k={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; with-column ...series or expressions --name</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...series or expressions</code>: series to be added or expressions used to define the new columns</li><li><code>--name {string}</code>: new column name</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Adds a series to the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> to-df
    <span class="token operator">|</span> with-column <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df<span class="token punctuation">)</span> --name c
</code></pre></div><p>Adds a series to the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> to-lazy
    <span class="token operator">|</span> with-column <span class="token punctuation">[</span>
        <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> * <span class="token number">2</span> <span class="token operator">|</span> as <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> * <span class="token number">3</span> <span class="token operator">|</span> as <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token operator">|</span> collect
</code></pre></div>`,9);function m(_,b,f,g,x,n){return p(),o("div",null,[a("h1",l,[i,d,a("code",null,s(n.frontmatter.title),1)]),a("div",k,s(n.frontmatter.usage),1),h])}var w=t(u,[["render",m],["__file","_with-column.html.vue"]]);export{w as default};
