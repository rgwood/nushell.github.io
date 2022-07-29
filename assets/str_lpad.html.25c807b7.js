import{_ as t,o as n,c as r,a,t as e,d as o,e as p}from"./app.f96f0b62.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str lpad ...rest --length --character</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally check if string contains pattern by column paths</li><li><code>--length {int}</code>: length to pad to</li><li><code>--character {string}</code>: character to pad with</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Left-pad a string with asterisks until it&#39;s 10 characters wide</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;nushell&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">10</span> -c <span class="token string">&#39;*&#39;</span>
</code></pre></div><p>Left-pad a string with zeroes until it&#39;s 10 character wide</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;123&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">10</span> -c <span class="token string">&#39;0&#39;</span>
</code></pre></div><p>Use lpad to truncate a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;123456789&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">3</span> -c <span class="token string">&#39;0&#39;</span>
</code></pre></div><p>Use lpad to pad Unicode</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;\u2589&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">10</span> -c <span class="token string">&#39;\u2589&#39;</span>
</code></pre></div>`,13);function u(s,k){return n(),r("div",null,[a("h1",l,[i,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",h,e(s.$frontmatter.usage),1),g])}var m=t(c,[["render",u],["__file","str_lpad.html.vue"]]);export{m as default};
