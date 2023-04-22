import{_ as t,p as r,q as o,Q as a,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const p={},d={id:"frontmatter-title-for-hash",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-hash","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; encode base64 ...rest --character-set</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: For a data structure input, encode data at the given cell paths</li><li><code>--character-set {string}</code>: specify the character rules for encoding the input. Valid values are &#39;standard&#39;, &#39;standard-no-padding&#39;, &#39;url-safe&#39;, &#39;url-safe-no-padding&#39;,&#39;binhex&#39;, &#39;bcrypt&#39;, &#39;crypt&#39;, &#39;mutf7&#39;</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Encode binary data</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>09 F9 <span class="token number">11</span> 02 9D <span class="token number">74</span> E3 5B D8 <span class="token number">41</span> <span class="token number">56</span> C5 <span class="token number">63</span> <span class="token number">56</span> <span class="token number">88</span> C0<span class="token punctuation">]</span> <span class="token operator">|</span> encode base64
<span class="token assign-left variable">CfkRAp1041vYQVbFY1aIwA</span><span class="token operator">==</span>
</code></pre></div><p>Encode a string with default settings</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Some Data&#39;</span> <span class="token operator">|</span> encode base64
U29tZSBEYXRh
</code></pre></div><p>Encode a string with the binhex character set</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Some Data&#39;</span> <span class="token operator">|</span> encode base64 --character-set binhex
7epXB5&quot;%A@4J
</code></pre></div>`,11);function u(e,g){return r(),o("div",null,[a("h1",d,[l,s(),a("code",null,n(e.$frontmatter.title),1),s(" for hash")]),a("div",i,n(e.$frontmatter.hash),1),h])}const m=t(p,[["render",u],["__file","encode_base64.html.vue"]]);export{m as default};
