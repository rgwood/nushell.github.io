import{_ as n,o as t,c as o,a,t as s,d as c,e as r}from"./app.62da7227.js";const l={},p={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; watch (path) (block) --debounce-ms --glob --recursive --verbose</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: the path to watch. Can be a file or directory</li><li><code>block</code>: A Nu block of code to run whenever a file changes. The block will be passed <code>operation</code>, <code>path</code>, and <code>new_path</code> (for renames only) arguments in that order</li><li><code>--debounce-ms {int}</code>: Debounce changes for this many milliseconds (default: 100). Adjust if you find that single writes are reported as multiple events</li><li><code>--glob {string}</code>: Only report changes for files that match this glob pattern (default: all files)</li><li><code>--recursive {bool}</code>: Watch all directories under <code>&lt;path&gt;</code> recursively. Will be ignored if <code>&lt;path&gt;</code> is a file (default: true)</li><li><code>--verbose</code>: Operate in verbose mode (default: false)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Run <code>cargo test</code> whenever a Rust file changes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">watch</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--glob</span><span class="token operator">=</span>**/*.rs <span class="token punctuation">{</span> <span class="token function">cargo</span> <span class="token builtin class-name">test</span> <span class="token punctuation">}</span>
</code></pre></div><p>Watch all changes in the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">watch</span> <span class="token builtin class-name">.</span> <span class="token punctuation">{</span> <span class="token operator">|</span>op, path, new_path<span class="token operator">|</span> $<span class="token string">&quot;(<span class="token variable">$op</span>) (<span class="token variable">$path</span>) (<span class="token variable">$new_path</span>)&quot;</span><span class="token punctuation">}</span>
</code></pre></div><p>Log all changes in a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">watch</span> /foo/bar <span class="token punctuation">{</span> <span class="token operator">|</span>op, path<span class="token operator">|</span> $<span class="token string">&quot;(<span class="token variable">$op</span>) - (<span class="token variable">$path</span>)(char nl)&quot;</span> <span class="token operator">|</span> save <span class="token parameter variable">--append</span> changes_in_bar.log <span class="token punctuation">}</span>
</code></pre></div>`,11);function g(e,b){return t(),o("div",null,[a("h1",p,[i,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const k=n(l,[["render",g],["__file","watch.html.vue"]]);export{k as default};
