import{_ as n,z as r,A as d,X as a,C as s,D as t,a6 as o}from"./framework.3d018c9f.js";const c={},i={id:"frontmatter-title-for-hash",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-hash","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; decode base64 ...rest --character-set --binary</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally base64 decode data by column paths</li><li><code>--character-set {string}</code>: specify the character rules for encoding the input. Valid values are &#39;standard&#39;, &#39;standard-no-padding&#39;, &#39;url-safe&#39;, &#39;url-safe-no-padding&#39;,&#39;binhex&#39;, &#39;bcrypt&#39;, &#39;crypt&#39;</li><li><code>--binary</code>: Output a binary value instead of decoding payload as UTF-8</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>Will attempt to decode binary payload as an UTF-8 string by default. Use the \`--binary(-b)\` argument to force binary output.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Base64 decode a value and output as UTF-8 string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;U29tZSBEYXRh&#39;</span> <span class="token operator">|</span> decode base64
</code></pre></div><p>Base64 decode a value and output as binary</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;U29tZSBEYXRh&#39;</span> <span class="token operator">|</span> decode base64 <span class="token parameter variable">--binary</span>
</code></pre></div>`,11);function u(e,b){return r(),d("div",null,[a("h1",i,[l,s(),a("code",null,t(e.$frontmatter.title),1),s(" for hash")]),a("div",h,t(e.$frontmatter.hash),1),p])}const f=n(c,[["render",u],["__file","decode_base64.html.vue"]]);export{f as default};
