import{_ as n,p as o,q as l,Q as a,t as e,v as t,a1 as r}from"./framework-344bb0e4.js";const p={},i={id:"frontmatter-title-for-platform",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#frontmatter-title-for-platform","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ansi link ...rest --text</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: for a data structure input, add links to all strings at the given cell paths</li><li><code>--text {string}</code>: Link text. Uses uri as text if absent. In case of tables, records and lists applies this text to all elements</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a link to open some file</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;file:///file.txt&#39;</span> <span class="token operator">|</span> ansi <span class="token function">link</span> <span class="token parameter variable">--text</span> <span class="token string">&#39;Open Me!&#39;</span>
Open Me<span class="token operator">!</span>
</code></pre></div><p>Create a link without text</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;https://www.nushell.sh/&#39;</span> <span class="token operator">|</span> ansi <span class="token function">link</span>
https://www.nushell.sh/
</code></pre></div><p>Format a table column into links</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>url text<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>https://example.com Text<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> ansi <span class="token function">link</span> url

</code></pre></div>`,11);function u(s,k){return o(),l("div",null,[a("h1",i,[c,e(),a("code",null,t(s.$frontmatter.title),1),e(" for platform")]),a("div",d,t(s.$frontmatter.platform),1),h])}const m=n(p,[["render",u],["__file","ansi_link.html.vue"]]);export{m as default};
