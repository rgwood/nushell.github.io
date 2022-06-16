import{_ as a,o as e,c as s,e as n}from"./app.43db386a.js";const t={},l=n(`<p>View the contents of the current or given path.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(path)</code> a path to get the directory contents from</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-a, --all: Show hidden files</li><li>-l, --long: List all available columns for each entry</li><li>-s, --short-names: Only print the file names and not the path</li><li>-d, --du: Display the apparent directory size in place of the directory metadata size</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List all files in the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
</code></pre></div><p>List all files in a subdirectory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> subdir
</code></pre></div><p>List all rust files</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.rs
</code></pre></div>`,14),i=[l];function r(o,c){return e(),s("div",null,i)}var h=a(t,[["render",r],["__file","ls.html.vue"]]);export{h as default};
