import{_ as t,z as o,A as r,X as a,C as e,D as n,a6 as p}from"./framework.3d018c9f.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; where (row_condition) --closure</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>row_condition</code>: Filter condition</li><li><code>--closure {closure(any, int)}</code>: use with a closure instead (deprecated: use &#39;filter&#39; command instead)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command works similar to &#39;filter&#39; but allows extra shorthands for working with tables, known as &quot;row conditions&quot;. On the other hand, reading the condition from a variable is not supported.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Filter rows of a table according to a condition</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: <span class="token number">1</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> where a <span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre></div><p>Filter items of a list according to a condition</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> where <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">}</span>
</code></pre></div><p>List all files in the current directory with sizes greater than 2kb</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 2kb
</code></pre></div><p>List only the files in the current directory</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">file</span>
</code></pre></div><p>List all files with names that contain &quot;Car&quot;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token string">&quot;Car&quot;</span>
</code></pre></div><p>List all files that were modified in the last two weeks</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where modified <span class="token operator">&gt;=</span> <span class="token punctuation">(</span>date now<span class="token punctuation">)</span> - 2wk
</code></pre></div>`,19);function u(s,k){return o(),r("div",null,[a("h1",l,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for filters")]),a("div",d,n(s.$frontmatter.filters),1),h])}const f=t(c,[["render",u],["__file","where.html.vue"]]);export{f as default};
