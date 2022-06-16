import{_ as n,u as t,o,c as r,a,t as s,d as l,e as c}from"./app.43db386a.js";const p={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=l(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; let (var_name) (initial_value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>var_name</code>: variable name</li><li><code>initial_value</code>: equals sign followed by value</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set a variable to a value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token number">10</span>
</code></pre></div><p>Set a variable to the result of an expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token number">10</span> + <span class="token number">100</span>
</code></pre></div><p>Set a variable based on the condition</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> x <span class="token operator">=</span> <span class="token keyword">if</span> <span class="token boolean">false</span> <span class="token punctuation">{</span> -1 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token number">1</span> <span class="token punctuation">}</span>
</code></pre></div>`,13);function g(k,_,b,v,x,e){return o(),r("div",null,[a("h1",i,[d,h,a("code",null,s(e.frontmatter.title),1)]),a("div",u,s(e.frontmatter.usage),1),m])}var w=n(p,[["render",g],["__file","let.html.vue"]]);export{w as default};
