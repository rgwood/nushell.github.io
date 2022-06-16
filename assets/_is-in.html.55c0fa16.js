import{_ as n,u as t,o as r,c as o,a,t as e,d as p,e as c}from"./app.43db386a.js";const i={computed:{frontmatter(){return t().value}}},l={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; is-in (other)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: right series</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if elements from a series are contained in right series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">3</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> is-in <span class="token variable">$other</span>
</code></pre></div>`,7);function k(_,f,b,g,x,s){return r(),o("div",null,[a("h1",l,[u,d,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),m])}var B=n(i,[["render",k],["__file","_is-in.html.vue"]]);export{B as default};
