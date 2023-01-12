import{_ as t,z as o,A as c,X as a,C as e,D as n,a6 as p}from"./framework.3d018c9f.js";const r={},i={id:"frontmatter-title-for-core",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; use (module) (members)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>module</code>: Module or module file</li><li><code>members</code>: Which members of the module to import</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command is a parser keyword. For details, check: https://www.nushell.sh/book/thinking_in_nu.html</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Define a custom command in a module and call it</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use spam foo<span class="token punctuation">;</span> foo
</code></pre></div><p>Define a custom command that participates in the environment in a module and call it</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module foo <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def-env bar <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> let-env FOO_BAR <span class="token operator">=</span> <span class="token string">&quot;BAZ&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use foo bar<span class="token punctuation">;</span> bar<span class="token punctuation">;</span> <span class="token variable">$env</span>.FOO_BAR
</code></pre></div>`,11);function h(s,m){return o(),c("div",null,[a("h1",i,[l,e(),a("code",null,n(s.$frontmatter.title),1),e(" for core")]),a("div",u,n(s.$frontmatter.core),1),d])}const k=t(r,[["render",h],["__file","use.html.vue"]]);export{k as default};
