import{_ as n,o as t,c as r,a as e,t as s,d as i,e as l}from"./app.f96f0b62.js";const o={},c={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(),h={style:{"white-space":"pre-wrap"}},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; insert (field) (new value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>field</code>: the name of the column to insert</li><li><code>new value</code>: the new value to give the cell(s)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Insert a new value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> insert <span class="token builtin class-name">alias</span> <span class="token string">&#39;Nushell&#39;</span>
</code></pre></div>`,7);function m(a,_){return t(),r("div",null,[e("h1",c,[p,d,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var g=n(o,[["render",m],["__file","insert.html.vue"]]);export{g as default};
