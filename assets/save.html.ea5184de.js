import{_ as n,o,c as r,a,t as s,d as t,e as p}from"./app.ef551336.js";const c={},l={id:"frontmatter-title-for-filesystem",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filesystem","aria-hidden":"true"},"#",-1),d=t(),h=t(" for filesystem"),u={class:"command-title"},f=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; save (filename) --stderr --raw --append</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>filename</code>: the filename to use</li><li><code>--stderr {path}</code>: the filename used to save stderr, only works with <code>-r</code> flag</li><li><code>--raw</code>: save file as raw binary</li><li><code>--append</code>: append input to the end of the file</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Save a string to foo.txt in the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;save me&#39;</span> <span class="token operator">|</span> save foo.txt
</code></pre></div><p>Append a string to the end of foo.txt</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;append me&#39;</span> <span class="token operator">|</span> save <span class="token parameter variable">--append</span> foo.txt
</code></pre></div><p>Save a record to foo.json in the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> a: <span class="token number">1</span>, b: <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token operator">|</span> save foo.json
</code></pre></div><p>Save a running program&#39;s stderr to foo.txt</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token parameter variable">-i</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">|</span> save foo.txt <span class="token parameter variable">--stderr</span> foo.txt
</code></pre></div><p>Save a running program&#39;s stderr to separate file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token parameter variable">-i</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">|</span> save foo.txt <span class="token parameter variable">--stderr</span> bar.txt
</code></pre></div>`,15);function g(e,m){return o(),r("div",null,[a("h1",l,[i,d,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.filesystem),1),f])}const k=n(c,[["render",g],["__file","save.html.vue"]]);export{k as default};
