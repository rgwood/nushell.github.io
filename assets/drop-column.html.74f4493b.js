import{_ as a,o as s,c as n,e}from"./app.43db386a.js";const t={},o=e(`<p>Remove the last number of columns. If you want to remove columns by name, try &#39;reject&#39;.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> drop <span class="token function">column</span> <span class="token punctuation">(</span>columns<span class="token punctuation">)</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(columns)</code> starting from the end, the number of columns to remove</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Remove the last column of a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lib, extension<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu-lib, rs<span class="token punctuation">]</span> <span class="token punctuation">[</span>nu-core, rb<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> drop <span class="token function">column</span>
</code></pre></div>`,10),c=[o];function p(l,r){return s(),n("div",null,c)}var i=a(t,[["render",p],["__file","drop-column.html.vue"]]);export{i as default};
