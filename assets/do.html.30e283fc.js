import{_ as a,o as s,c as e,e as n}from"./app.43db386a.js";const o={},t=n(`<p>Runs a block, optionally ignoring errors.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token operator">&lt;</span>block<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;block&gt;</code> the block to run</li><li>...args: the parameter(s) for the block</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-i, --ignore-errors: ignore errors as the block runs</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Run the block</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> hello <span class="token punctuation">}</span>
</code></pre></div><p>Run the block and ignore errors</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> -i <span class="token punctuation">{</span> thisisnotarealcommand <span class="token punctuation">}</span>
</code></pre></div><p>Run the block with a parameter</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span> <span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span> + <span class="token number">100</span> <span class="token punctuation">}</span> <span class="token number">55</span>
</code></pre></div>`,14),p=[t];function r(l,c){return s(),e("div",null,p)}var d=a(o,[["render",r],["__file","do.html.vue"]]);export{d as default};
