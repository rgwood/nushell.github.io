import{_ as t,o as n,c as o,a,t as s,d as c,e as p}from"./app.62da7227.js";const r={},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=c(),h={style:{"white-space":"pre-wrap"}},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes ends-with (pattern) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match</li><li><code>...rest</code>: optionally matches prefix of text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if binary ends with <code>0x[AA]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes ends-with 0x<span class="token punctuation">[</span>AA<span class="token punctuation">]</span>
</code></pre></div><p>Checks if binary ends with <code>0x[FF AA AA]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes ends-with 0x<span class="token punctuation">[</span>FF AA AA<span class="token punctuation">]</span>
</code></pre></div><p>Checks if binary ends with <code>0x[11]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes ends-with 0x<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span>
</code></pre></div>`,11);function k(e,A){return n(),o("div",null,[a("h1",i,[d,l,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const _=t(r,[["render",k],["__file","bytes_ends-with.html.vue"]]);export{_ as default};
