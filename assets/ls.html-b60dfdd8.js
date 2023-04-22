import{_ as t,p as o,q as l,Q as a,t as e,v as n,a1 as p}from"./framework-344bb0e4.js";const c={},i={id:"frontmatter-title-for-filesystem",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filesystem","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ls (pattern) --all --long --short-names --full-paths --du --directory --mime-type</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the glob pattern to use</li><li><code>--all</code> <code>(-a)</code>: Show hidden files</li><li><code>--long</code> <code>(-l)</code>: Get all available columns for each entry (slower; columns are platform-dependent)</li><li><code>--short-names</code> <code>(-s)</code>: Only print the file names, and not the path</li><li><code>--full-paths</code> <code>(-f)</code>: display paths as absolute paths</li><li><code>--du</code> <code>(-d)</code>: Display the apparent directory size (&quot;disk usage&quot;) in place of the directory metadata size</li><li><code>--directory</code> <code>(-D)</code>: List the specified directory itself instead of its contents</li><li><code>--mime-type</code> <code>(-m)</code>: Show mime-type in type column instead of &#39;file&#39; (based on filenames only; files&#39; contents are not examined)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List visible files in the current directory</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>

</code></pre></div><p>List visible files in a subdirectory</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> subdir

</code></pre></div><p>List visible files with full path in the parent directory</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token parameter variable">-f</span> <span class="token punctuation">..</span>

</code></pre></div><p>List Rust files</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.rs

</code></pre></div><p>List files and directories whose name do not contain &#39;bar&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token parameter variable">-s</span> <span class="token operator">|</span> where name <span class="token operator">!</span>~ bar

</code></pre></div><p>List all dirs in your home directory</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token parameter variable">-a</span> ~ <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">dir</span>

</code></pre></div><p>List all dirs in your home directory which have not been modified in 7 days</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token parameter variable">-as</span> ~ <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">dir</span> and modified <span class="token operator">&lt;</span> <span class="token punctuation">((</span>date now<span class="token punctuation">)</span> - 7day<span class="token punctuation">)</span>

</code></pre></div><p>List given paths and show directories themselves</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;/path/to/directory&#39;</span> <span class="token string">&#39;/path/to/file&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token function">ls</span> <span class="token parameter variable">-D</span> <span class="token variable">$in</span> <span class="token punctuation">}</span> <span class="token operator">|</span> flatten

</code></pre></div>`,21);function u(s,f){return o(),l("div",null,[a("h1",i,[r,e(),a("code",null,n(s.$frontmatter.title),1),e(" for filesystem")]),a("div",d,n(s.$frontmatter.filesystem),1),h])}const g=t(c,[["render",u],["__file","ls.html.vue"]]);export{g as default};
