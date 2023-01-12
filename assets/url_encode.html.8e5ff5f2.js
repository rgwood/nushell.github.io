import{_ as n,z as r,A as o,X as a,C as s,D as t,a6 as c}from"./framework.3d018c9f.js";const l={},p={id:"frontmatter-title-for-strings",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; url encode ...rest --all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: For a data structure input, check strings at the given cell paths, and replace with result</li><li><code>--all</code>: encode all non-alphanumeric chars including <code>/</code>, <code>.</code>, <code>:</code></li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Encode a url with escape characters</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;https://example.com/foo bar&#39;</span> <span class="token operator">|</span> url encode
</code></pre></div><p>Encode multiple urls with escape characters in list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;https://example.com/foo bar&#39;</span> <span class="token string">&#39;https://example.com/a&gt;b&#39;</span> <span class="token string">&#39;中文字/eng/12 34&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> url encode
</code></pre></div><p>Encode all non anphanumeric chars with all flag</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;https://example.com/foo bar&#39;</span> <span class="token operator">|</span> url encode <span class="token parameter variable">--all</span>
</code></pre></div>`,11);function u(e,g){return r(),o("div",null,[a("h1",p,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for strings")]),a("div",i,t(e.$frontmatter.strings),1),h])}const f=n(l,[["render",u],["__file","url_encode.html.vue"]]);export{f as default};
