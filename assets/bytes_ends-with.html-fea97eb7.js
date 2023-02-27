import{_ as n,p as o,q as c,Q as a,t as s,v as t,a1 as p}from"./framework-344bb0e4.js";const r={},i={id:"frontmatter-title-for-bytes",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-bytes","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes ends-with (pattern) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match</li><li><code>...rest</code>: for a data structure input, check if bytes at the given cell paths end with the pattern</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if binary ends with <code>0x[AA]</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes ends-with 0x<span class="token punctuation">[</span>AA<span class="token punctuation">]</span>
</code></pre></div><p>Checks if binary ends with <code>0x[FF AA AA]</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes ends-with 0x<span class="token punctuation">[</span>FF AA AA<span class="token punctuation">]</span>
</code></pre></div><p>Checks if binary ends with <code>0x[11]</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes ends-with 0x<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span>
</code></pre></div>`,11);function u(e,b){return o(),c("div",null,[a("h1",i,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for bytes")]),a("div",l,t(e.$frontmatter.bytes),1),h])}const A=n(r,[["render",u],["__file","bytes_ends-with.html.vue"]]);export{A as default};
