import{_ as s,u as n,o as r,c as o,a,t,d as p,e as c}from"./app.43db386a.js";const i={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),h={style:{"white-space":"pre-wrap"}},g=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str capitalize ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally capitalize text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Capitalize contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;good day&#39;</span> <span class="token operator">|</span> str capitalize
</code></pre></div><p>Capitalize contents</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;anton&#39;</span> <span class="token operator">|</span> str capitalize
</code></pre></div><p>Capitalize a column in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu_test, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str capitalize lang
</code></pre></div>`,11);function _(m,k,f,x,b,e){return r(),o("div",null,[a("h1",l,[d,u,a("code",null,t(e.frontmatter.title),1)]),a("div",h,t(e.frontmatter.usage),1),g])}var z=s(i,[["render",_],["__file","str_capitalize.html.vue"]]);export{z as default};
