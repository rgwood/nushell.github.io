import{_ as o,p as t,q as r,Q as a,t as s,v as n,a1 as p}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-core",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; overlay use (name) (as) --prefix --reload</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: Module name to use overlay for</li><li><code>as</code>: as keyword followed by a new name</li><li><code>--prefix</code> <code>(-p)</code>: Prepend module name to the imported commands and aliases</li><li><code>--reload</code> <code>(-r)</code>: If the overlay already exists, reload its definitions and environment.</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command is a parser keyword. For details, check: https://www.nushell.sh/book/thinking_in_nu.html</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create an overlay from a module</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    overlay use spam
    foo

</code></pre></div><p>Create an overlay from a module and rename it</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    overlay use spam as spam_new
    foo

</code></pre></div><p>Create an overlay with a prefix</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;export def foo { &quot;foo&quot; }&#39;</span>
    overlay use <span class="token parameter variable">--prefix</span> spam
    spam foo

</code></pre></div><p>Create an overlay from a file</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;export-env { let-env FOO = &quot;foo&quot; }&#39;</span> <span class="token operator">|</span> save spam.nu
    overlay use spam.nu
    <span class="token variable">$env</span>.FOO

</code></pre></div>`,15);function h(e,m){return t(),r("div",null,[a("h1",c,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for core")]),a("div",d,n(e.$frontmatter.core),1),u])}const k=o(l,[["render",h],["__file","overlay_use.html.vue"]]);export{k as default};
