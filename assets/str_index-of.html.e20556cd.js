import{_ as n,o as t,c as r,a as s,t as e,d as o,e as p}from"./app.f96f0b62.js";const i={},c={id:"frontmatter-title",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),h={style:{"white-space":"pre-wrap"}},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str index-of (pattern) ...rest --range --end</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to find index of</li><li><code>...rest</code>: optionally returns index of pattern in string by column paths</li><li><code>--range {any}</code>: optional start and/or end index</li><li><code>--end</code>: search from the end of the string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns index of pattern in string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;.rb&#39;</span>
</code></pre></div><p>Returns index of pattern in string with start index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;.rb.rb&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;.rb&#39;</span> -r <span class="token string">&#39;1,&#39;</span>
</code></pre></div><p>Returns index of pattern in string with end index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;6&#39;</span> -r <span class="token string">&#39;,4&#39;</span>
</code></pre></div><p>Returns index of pattern in string with start and end index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;3&#39;</span> -r <span class="token string">&#39;1,4&#39;</span>
</code></pre></div><p>Alternatively you can use this form</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;3&#39;</span> -r <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre></div><p>Returns index of pattern in string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;/this/is/some/path/file.txt&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;/&#39;</span> -e
</code></pre></div>`,17);function u(a,f){return t(),r("div",null,[s("h1",c,[d,l,s("code",null,e(a.$frontmatter.title),1)]),s("div",h,e(a.$frontmatter.usage),1),g])}var k=n(i,[["render",u],["__file","str_index-of.html.vue"]]);export{k as default};
