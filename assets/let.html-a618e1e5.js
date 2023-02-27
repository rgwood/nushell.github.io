import{_ as t,p as o,q as r,Q as a,t as s,v as n,a1 as l}from"./framework-344bb0e4.js";const c={},p={id:"frontmatter-title-for-core",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; let (var_name) (initial_value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>var_name</code>: variable name</li><li><code>initial_value</code>: equals sign followed by value</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command is a parser keyword. For details, check: https://www.nushell.sh/book/thinking_in_nu.html</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set a variable to a value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token number">10</span>
</code></pre></div><p>Set a variable to the result of an expression</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token number">10</span> + <span class="token number">100</span>
</code></pre></div><p>Set a variable based on the condition</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token keyword">if</span> <span class="token boolean">false</span> <span class="token punctuation">{</span> <span class="token parameter variable">-1</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token number">1</span> <span class="token punctuation">}</span>
</code></pre></div>`,13);function u(e,m){return o(),r("div",null,[a("h1",p,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for core")]),a("div",d,n(e.$frontmatter.core),1),h])}const b=t(c,[["render",u],["__file","let.html.vue"]]);export{b as default};
