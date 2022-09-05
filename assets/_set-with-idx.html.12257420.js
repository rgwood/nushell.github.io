import{_ as e,o as t,c as o,a,t as n,d as p,e as c}from"./app.62da7227.js";const i={},r={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),u={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; set-with-idx (value) --indices</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>value</code>: value to be inserted in series</li><li><code>--indices {any}</code>: list of indices indicating where to set the value</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set value in selected rows from series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> series <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$series</span> <span class="token operator">|</span> set-with-idx <span class="token number">6</span> <span class="token parameter variable">-i</span> <span class="token variable">$indices</span>
</code></pre></div>`,7);function k(s,m){return t(),o("div",null,[a("h1",r,[l,d,a("code",null,n(s.$frontmatter.title),1)]),a("div",u,n(s.$frontmatter.usage),1),h])}const b=e(i,[["render",k],["__file","_set-with-idx.html.vue"]]);export{b as default};
