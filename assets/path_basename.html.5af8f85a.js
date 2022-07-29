import{_ as n,o as t,c as o,a,t as s,d as p,e as c}from"./app.f96f0b62.js";const r={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=p(),d={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path basename --columns --replace</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li><li><code>--replace {string}</code>: Return original path with basename replaced by this string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get basename of a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/joe/test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">basename</span>
</code></pre></div><p>Get basename of a path by column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span>/home/joe<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> path <span class="token function">basename</span> -c <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div><p>Replace basename of a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/joe/test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">basename</span> -r <span class="token string">&#39;spam.png&#39;</span>
</code></pre></div>`,11);function m(e,g){return t(),o("div",null,[a("h1",l,[i,h,a("code",null,s(e.$frontmatter.title),1)]),a("div",d,s(e.$frontmatter.usage),1),u])}var k=n(r,[["render",m],["__file","path_basename.html.vue"]]);export{k as default};
