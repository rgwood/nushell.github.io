import{_ as n,o as r,c as o,a as s,t as e,d as t,e as i}from"./app.ef551336.js";const l={},p={id:"frontmatter-title-for-bits",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title-for-bits","aria-hidden":"true"},"#",-1),d=t(),b=t(" for bits"),h={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bits shl (bits) --signed --number-bytes</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>bits</code>: number of bits to shift left</li><li><code>--signed</code>: always treat input number as a signed number</li><li><code>--number-bytes {string}</code>: the word size in number of bytes, it can be 1, 2, 4, 8, auto, default value <code>8</code></li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Shift left a number by 7 bits</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">|</span> bits shl <span class="token number">7</span>
</code></pre></div><p>Shift left a number with 1 byte by 7 bits</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">|</span> bits shl <span class="token number">7</span> <span class="token parameter variable">-n</span> <span class="token number">1</span>
</code></pre></div><p>Shift left a signed number by 1 bit</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x7F <span class="token operator">|</span> bits shl <span class="token number">1</span> <span class="token parameter variable">-s</span>
</code></pre></div><p>Shift left a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits shl <span class="token number">2</span>
</code></pre></div>`,13);function m(a,f){return r(),o("div",null,[s("h1",p,[c,d,s("code",null,e(a.$frontmatter.title),1),b]),s("div",h,e(a.$frontmatter.bits),1),u])}const k=n(l,[["render",m],["__file","bits_shl.html.vue"]]);export{k as default};
