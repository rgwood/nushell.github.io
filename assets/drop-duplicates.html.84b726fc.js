import{_ as e,z as o,A as p,X as a,C as n,D as t,a6 as c}from"./framework.3d018c9f.js";const r={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop-duplicates </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>drop duplicates</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> drop-duplicates
</code></pre></div>`,5);function h(s,m){return o(),p("div",null,[a("h1",l,[i,n(),a("code",null,t(s.$frontmatter.title),1),n(" for dataframe")]),a("div",d,t(s.$frontmatter.dataframe),1),u])}const k=e(r,[["render",h],["__file","drop-duplicates.html.vue"]]);export{k as default};
