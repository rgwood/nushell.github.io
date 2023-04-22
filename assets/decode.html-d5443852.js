import{_ as t,p as o,q as r,Q as e,t as s,v as n,a1 as c}from"./framework-344bb0e4.js";const d={},i={id:"frontmatter-title-for-strings",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; decode (encoding)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>encoding</code>: the text encoding to use</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Multiple encodings are supported; here are a few: big5, euc-jp, euc-kr, gbk, iso-8859-1, utf-16, cp1252, latin5</p><p>For a more complete list of encodings please refer to the encoding_rs documentation link at https://docs.rs/encoding_rs/latest/encoding_rs/#statics</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Decode the output of an external command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ^cat myfile.q <span class="token operator">|</span> decode utf-8

</code></pre></div><p>Decode an UTF-16 string into nushell UTF-8 string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>00 <span class="token number">53</span> 00 6F 00 6D 00 <span class="token number">65</span> 00 <span class="token number">20</span> 00 <span class="token number">44</span> 00 <span class="token number">61</span> 00 <span class="token number">74</span> 00 <span class="token number">61</span><span class="token punctuation">]</span> <span class="token operator">|</span> decode utf-16be
Some Data
</code></pre></div>`,12);function u(a,m){return o(),r("div",null,[e("h1",i,[p,s(),e("code",null,n(a.$frontmatter.title),1),s(" for strings")]),e("div",l,n(a.$frontmatter.strings),1),h])}const f=t(d,[["render",u],["__file","decode.html.vue"]]);export{f as default};
