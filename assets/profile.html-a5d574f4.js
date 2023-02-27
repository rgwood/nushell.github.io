import{_ as o,p as n,q as r,Q as e,t,v as s,a1 as i}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-debug",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-debug","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; profile (closure) --source --values --max-depth</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>closure</code>: the closure to run</li><li><code>--source</code> <code>(-)</code>: Collect source code in the report</li><li><code>--values</code> <code>(-)</code>: Collect values in the report</li><li><code>--max-depth {int}</code>: How many levels of blocks to step into (default: 1)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>The command collects run time of every pipeline element, recursively stepping into child closures until a maximum depth. Optionally, it also collects the source code and intermediate values.</p><p>Current known limitations are:</p><ul><li>profiling data from subexpressions is not tracked</li><li>it does not step into loop iterations</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Profile some code, stepping into the <code>spam</code> command and collecting source.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def spam <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;spam&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> profile <span class="token punctuation">{</span> spam <span class="token operator">|</span> str length <span class="token punctuation">}</span> <span class="token parameter variable">-d</span> <span class="token number">2</span> <span class="token parameter variable">--source</span>
</code></pre></div>`,11);function h(a,m){return n(),r("div",null,[e("h1",c,[p,t(),e("code",null,s(a.$frontmatter.title),1),t(" for debug")]),e("div",d,s(a.$frontmatter.debug),1),u])}const g=o(l,[["render",h],["__file","profile.html.vue"]]);export{g as default};
