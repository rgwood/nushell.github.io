import{_ as t,o as n,c as r,a,t as s,d as o,e as c}from"./app.62da7227.js";const l={},p={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; last (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: starting from the back, the number of rows to return</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the last 2 items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span> <span class="token operator">|</span> last <span class="token number">2</span>
</code></pre></div><p>Get the last item</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span> <span class="token operator">|</span> last
</code></pre></div>`,9);function m(e,_){return n(),r("div",null,[a("h1",p,[i,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const g=t(l,[["render",m],["__file","last.html.vue"]]);export{g as default};
