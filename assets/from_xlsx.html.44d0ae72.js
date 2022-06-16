import{_ as s,u as r,o as n,c as o,a as e,t,d as c,e as l}from"./app.43db386a.js";const i={computed:{frontmatter(){return r().value}}},d={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},x=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from xlsx --sheets</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--sheets {list&lt;string&gt;}</code>: Only convert specified sheets</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert binary .xlsx data to a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> --raw test.xlsx <span class="token operator">|</span> from xlsx
</code></pre></div><p>Convert binary .xlsx data to a table, specifying the tables</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> --raw test.xlsx <span class="token operator">|</span> from xlsx -s <span class="token punctuation">[</span>Spreadsheet1<span class="token punctuation">]</span>
</code></pre></div>`,9);function f(m,_,g,b,v,a){return n(),o("div",null,[e("h1",d,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),x])}var y=s(i,[["render",f],["__file","from_xlsx.html.vue"]]);export{y as default};
