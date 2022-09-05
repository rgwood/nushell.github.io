import{_ as t,o as r,c as n,a as e,t as a,d as o,e as i}from"./app.62da7227.js";const l={},c={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str reverse ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally reverse text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Reverse a single string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell&#39;</span> <span class="token operator">|</span> str reverse
</code></pre></div><p>Reverse multiple strings in a list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;Nushell&#39;</span> <span class="token string">&#39;is&#39;</span> <span class="token string">&#39;cool&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str reverse
</code></pre></div>`,9);function g(s,_){return r(),n("div",null,[e("h1",c,[p,d,e("code",null,a(s.$frontmatter.title),1)]),e("div",h,a(s.$frontmatter.usage),1),u])}const f=t(l,[["render",g],["__file","str_reverse.html.vue"]]);export{f as default};
