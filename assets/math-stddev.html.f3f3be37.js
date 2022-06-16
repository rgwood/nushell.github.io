import{_ as a,o as s,c as e,e as n}from"./app.43db386a.js";const t={},p=n(`<p>Finds the stddev of a list of numbers or tables</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> math stddev <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-s, --sample: calculate sample standard deviation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the stddev of a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math stddev
</code></pre></div><p>Get the sample stddev of a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math stddev -s
</code></pre></div>`,10),l=[p];function o(c,r){return s(),e("div",null,l)}var i=a(t,[["render",o],["__file","math-stddev.html.vue"]]);export{i as default};
