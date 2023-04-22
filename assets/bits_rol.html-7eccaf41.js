import{_ as t,p as r,q as o,Q as e,t as s,v as n,a1 as i}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-bits",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-bits","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bits rol (bits) --signed --number-bytes</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>bits</code>: number of bits to rotate left</li><li><code>--signed</code> <code>(-s)</code>: always treat input number as a signed number</li><li><code>--number-bytes {string}</code>: the word size in number of bytes, it can be 1, 2, 4, 8, auto, default value <code>8</code></li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rotate left a number with 2 bits</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">17</span> <span class="token operator">|</span> bits rol <span class="token number">2</span>
<span class="token number">68</span>
</code></pre></div><p>Rotate left a list of numbers with 2 bits</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits rol <span class="token number">2</span>
╭───┬────╮
│ <span class="token number">0</span> │ <span class="token number">20</span> │
│ <span class="token number">1</span> │ <span class="token number">12</span> │
│ <span class="token number">2</span> │  <span class="token number">8</span> │
╰───┴────╯

</code></pre></div>`,9);function b(a,h){return r(),o("div",null,[e("h1",l,[p,s(),e("code",null,n(a.$frontmatter.title),1),s(" for bits")]),e("div",d,n(a.$frontmatter.bits),1),u])}const f=t(c,[["render",b],["__file","bits_rol.html.vue"]]);export{f as default};
