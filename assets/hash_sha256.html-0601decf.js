import{_ as t,p as o,q as r,Q as a,t as e,v as n,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-hash",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title-for-hash","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; hash sha256 ...rest --binary</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally sha256 hash data by cell path</li><li><code>--binary</code> <code>(-b)</code>: Output binary instead of hexadecimal representation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the sha256 hash of a string, hex-encoded</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;abcdefghijklmnopqrstuvwxyz&#39;</span> <span class="token operator">|</span> <span class="token builtin class-name">hash</span> sha256
71c480df93d6ae2f1efad1447c66c9525e316218cf51fc8d9ed832f2daf18b73
</code></pre></div><p>Return the sha256 hash of a string, as binary</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;abcdefghijklmnopqrstuvwxyz&#39;</span> <span class="token operator">|</span> <span class="token builtin class-name">hash</span> sha256 <span class="token parameter variable">--binary</span>
Length: <span class="token number">32</span> <span class="token punctuation">(</span>0x20<span class="token punctuation">)</span> bytes <span class="token operator">|</span> printable whitespace ascii_other non_ascii
00000000:   <span class="token number">71</span> c4 <span class="token number">80</span> <span class="token function">df</span>  <span class="token number">93</span> d6 ae 2f  1e fa d1 <span class="token number">44</span>  7c <span class="token number">66</span> c9 <span class="token number">52</span>   q××××××/•××D<span class="token operator">|</span>f×R
00000010:   5e <span class="token number">31</span> <span class="token number">62</span> <span class="token number">18</span>  cf <span class="token number">51</span> fc 8d  9e d8 <span class="token number">32</span> f2  da f1 8b <span class="token number">73</span>   ^1b•×Q××××2××××s

</code></pre></div><p>Return the sha256 hash of a file&#39;s contents</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> ./nu_0_24_1_windows.zip <span class="token operator">|</span> <span class="token builtin class-name">hash</span> sha256

</code></pre></div>`,11);function u(s,f){return o(),r("div",null,[a("h1",l,[h,e(),a("code",null,n(s.$frontmatter.title),1),e(" for hash")]),a("div",i,n(s.$frontmatter.hash),1),d])}const m=t(c,[["render",u],["__file","hash_sha256.html.vue"]]);export{m as default};
