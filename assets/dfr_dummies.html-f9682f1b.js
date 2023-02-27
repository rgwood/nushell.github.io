import{_ as t,p as o,q as r,Q as a,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),l={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr dummies </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create new dataframe with dummy variables from a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr dummies
</code></pre></div><p>Create new dataframe with dummy variables from a series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr dummies
</code></pre></div>`,7);function m(s,f){return o(),r("div",null,[a("h1",d,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for dataframe")]),a("div",l,e(s.$frontmatter.dataframe),1),u])}const k=t(c,[["render",m],["__file","dfr_dummies.html.vue"]]);export{k as default};
