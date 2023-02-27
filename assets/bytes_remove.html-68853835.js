import{_ as t,p as o,q as p,Q as a,t as s,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-bytes",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title-for-bytes","aria-hidden":"true"},"#",-1),i={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes remove (pattern) ...rest --end --all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to find</li><li><code>...rest</code>: for a data structure input, remove bytes from data at the given cell paths</li><li><code>--end</code> <code>(-e)</code>: remove from end of binary</li><li><code>--all</code> <code>(-a)</code>: remove occurrences of finding binary</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Remove contents</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span><span class="token number">10</span> AA FF AA FF<span class="token punctuation">]</span> <span class="token operator">|</span> bytes remove 0x<span class="token punctuation">[</span><span class="token number">10</span> AA<span class="token punctuation">]</span>
</code></pre></div><p>Remove all occurrences of find binary</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span><span class="token number">10</span> AA <span class="token number">10</span> BB <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes remove <span class="token parameter variable">-a</span> 0x<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
</code></pre></div><p>Remove occurrences of find binary from end</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span><span class="token number">10</span> AA <span class="token number">10</span> BB CC AA <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes remove <span class="token parameter variable">-e</span> 0x<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
</code></pre></div><p>Remove all occurrences of find binary in table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB ColC<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>0x<span class="token punctuation">[</span><span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes remove 0x<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> ColA ColC
</code></pre></div>`,13);function k(n,m){return o(),p("div",null,[a("h1",l,[u,s(),a("code",null,e(n.$frontmatter.title),1),s(" for bytes")]),a("div",i,e(n.$frontmatter.bytes),1),d])}const h=t(r,[["render",k],["__file","bytes_remove.html.vue"]]);export{h as default};
