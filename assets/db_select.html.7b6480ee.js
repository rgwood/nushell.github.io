import{_ as t,u as r,o as n,c as o,a as e,t as s,d as c,e as d}from"./app.43db386a.js";const l={computed:{frontmatter(){return r().value}}},p={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},b=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db select ...select</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...select</code>: Select expression(s) on the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>selects a column from a database</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> db.mysql <span class="token operator">|</span> db <span class="token keyword">select</span> a <span class="token operator">|</span> db describe
</code></pre></div><p>selects columns from a database</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> db.mysql <span class="token operator">|</span> db <span class="token keyword">select</span> a b c <span class="token operator">|</span> db describe
</code></pre></div>`,9);function m(_,f,g,k,x,a){return n(),o("div",null,[e("h1",p,[i,h,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),b])}var y=t(l,[["render",m],["__file","db_select.html.vue"]]);export{y as default};
