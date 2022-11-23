import{_ as o,o as r,c as p,a,t as n,d as e,e as t}from"./app.ef551336.js";const c={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d=e(),u=e(" for dataframe"),h={class:"command-title"},m=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into nu --rows --tail</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--rows {number}</code>: number of rows to be shown</li><li><code>--tail</code>: shows tail rows</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Shows head rows from dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> into nu
</code></pre></div><p>Shows tail rows from dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> into nu <span class="token parameter variable">-t</span> <span class="token parameter variable">-n</span> <span class="token number">1</span>
</code></pre></div>`,9),f={id:"frontmatter-title-for-db-expression",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#frontmatter-title-for-db-expression","aria-hidden":"true"},"#",-1),_=e(),b=e(" for db-expression"),g={class:"command-title"},x=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into nu </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Convert a col expression into a nushell value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> field name_1 <span class="token operator">|</span> into nu
</code></pre></div>`,5),v={id:"frontmatter-title-for-expression",tabindex:"-1"},w=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),S=e(),$=e(" for expression"),E={class:"command-title"},B=t(`<h2 id="signature-2" tabindex="-1"><a class="header-anchor" href="#signature-2" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into nu </code></p><h2 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h2><p>Convert a col expression into a nushell value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> into nu
</code></pre></div>`,5);function N(s,V){return r(),p("div",null,[a("h1",i,[l,d,a("code",null,n(s.$frontmatter.title),1),u]),a("div",h,n(s.$frontmatter.dataframe),1),m,a("h1",f,[k,_,a("code",null,n(s.$frontmatter.title),1),b]),a("div",g,n(s.$frontmatter.db_expression),1),x,a("h1",v,[w,S,a("code",null,n(s.$frontmatter.title),1),$]),a("div",E,n(s.$frontmatter.expression),1),B])}const y=o(c,[["render",N],["__file","into_nu.html.vue"]]);export{y as default};
