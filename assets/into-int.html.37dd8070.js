import{_ as a,o as s,c as n,e}from"./app.43db386a.js";const t={},p=e(`<p>Convert value to integer</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> into int <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: column paths to convert to int (for table input)</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to integer in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;-5&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1.5</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into int num
</code></pre></div><p>Convert string to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert decimal to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">5.9</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert decimal string to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;5.9&#39;</span> <span class="token operator">|</span> into int
</code></pre></div><p>Convert file size to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> 4KB <span class="token operator">|</span> into int
</code></pre></div><p>Convert bool to integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$false</span> <span class="token variable">$true</span> <span class="token operator">|</span> into int
</code></pre></div>`,20),o=[p];function c(l,i){return s(),n("div",null,o)}var u=a(t,[["render",c],["__file","into-int.html.vue"]]);export{u as default};
