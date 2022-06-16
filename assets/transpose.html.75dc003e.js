import{_ as e,u as t,o,c as p,a,t as n,d as c,e as r}from"./app.43db386a.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; transpose ...rest --header-row --ignore-titles --as-record</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the names to give columns once transposed</li><li><code>--header-row</code>: treat the first row as column names</li><li><code>--ignore-titles</code>: don&#39;t transpose the column names into values</li><li><code>--as-record</code>: transfer to record if the result is a table and contains only one row</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Transposes the table contents with default column names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c1 c2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> transpose
</code></pre></div><p>Transposes the table contents with specified column names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c1 c2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> transpose key val
</code></pre></div><p>Transposes the table without column names and specify a new column name</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c1 c2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> transpose -i val
</code></pre></div><p>Transfer back to record with -d flag</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>c1: <span class="token number">1</span>, c2: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> transpose <span class="token operator">|</span> transpose -i -r -d
</code></pre></div>`,13);function m(g,b,f,_,v,s){return o(),p("div",null,[a("h1",i,[u,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),k])}var w=e(l,[["render",m],["__file","transpose.html.vue"]]);export{w as default};
