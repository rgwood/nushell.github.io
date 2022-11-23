import{_ as t,o as r,c as o,a,t as s,d as n,e as i}from"./app.ef551336.js";const l={},c={id:"frontmatter-title-for-platform",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-platform","aria-hidden":"true"},"#",-1),p=n(),g=n(" for platform"),h={class:"command-title"},f=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ansi gradient ...column path --fgstart --fgend --bgstart --bgend</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...column path</code>: optionally, draw gradients using text from column paths</li><li><code>--fgstart {string}</code>: foreground gradient start color in hex (0x123456)</li><li><code>--fgend {string}</code>: foreground gradient end color in hex</li><li><code>--bgstart {string}</code>: background gradient start color in hex</li><li><code>--bgend {string}</code>: background gradient end color in hex</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>draw text in a gradient with foreground start and end colors</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello, Nushell! This is a gradient.&#39;</span> <span class="token operator">|</span> ansi gradient <span class="token parameter variable">--fgstart</span> 0x40c9ff <span class="token parameter variable">--fgend</span> 0xe81cff
</code></pre></div><p>draw text in a gradient with foreground start and end colors and background start and end colors</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello, Nushell! This is a gradient.&#39;</span> <span class="token operator">|</span> ansi gradient <span class="token parameter variable">--fgstart</span> 0x40c9ff <span class="token parameter variable">--fgend</span> 0xe81cff <span class="token parameter variable">--bgstart</span> 0xe81cff <span class="token parameter variable">--bgend</span> 0x40c9ff
</code></pre></div><p>draw text in a gradient by specifying foreground start color - end color is assumed to be black</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello, Nushell! This is a gradient.&#39;</span> <span class="token operator">|</span> ansi gradient <span class="token parameter variable">--fgstart</span> 0x40c9ff
</code></pre></div><p>draw text in a gradient by specifying foreground end color - start color is assumed to be black</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello, Nushell! This is a gradient.&#39;</span> <span class="token operator">|</span> ansi gradient <span class="token parameter variable">--fgend</span> 0xe81cff
</code></pre></div>`,13);function u(e,m){return r(),o("div",null,[a("h1",c,[d,p,a("code",null,s(e.$frontmatter.title),1),g]),a("div",h,s(e.$frontmatter.platform),1),f])}const k=t(l,[["render",u],["__file","ansi_gradient.html.vue"]]);export{k as default};
