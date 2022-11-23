import{_ as n,o,c as l,a,t as s,d as t,e as r}from"./app.ef551336.js";const c={},i={id:"frontmatter-title-for-core",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),p=t(),h=t(" for core"),u={class:"command-title"},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; alias (name) (initial_value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: name of the alias</li><li><code>initial_value</code>: equals sign followed by value</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Alias ll to ls -l</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">alias</span> ll <span class="token operator">=</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>
</code></pre></div><p>Make an alias that makes a list of all custom commands</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">alias</span> customs <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$nu</span>.scope.commands <span class="token operator">|</span> where is_custom <span class="token operator">|</span> get <span class="token builtin class-name">command</span><span class="token punctuation">)</span>
</code></pre></div>`,11);function _(e,f){return o(),l("div",null,[a("h1",i,[d,p,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.core),1),m])}const k=n(c,[["render",_],["__file","alias.html.vue"]]);export{k as default};
