import{_ as n,o as r,c as o,a,t as s,d as t,e as c}from"./app.ef551336.js";const i={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),p=t(),u=t(" for dataframe"),h={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; cumulative (type) --reverse</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>type</code>: rolling operation</li><li><code>--reverse</code>: Reverse cumulative calculation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Cumulative sum for a series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> cumulative <span class="token function">sum</span>
</code></pre></div>`,7);function f(e,_){return r(),o("div",null,[a("h1",l,[d,p,a("code",null,s(e.$frontmatter.title),1),u]),a("div",h,s(e.$frontmatter.dataframe),1),m])}const v=n(i,[["render",f],["__file","cumulative.html.vue"]]);export{v as default};
