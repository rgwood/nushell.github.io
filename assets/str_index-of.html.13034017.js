import{_ as t,o as r,c as o,a as s,t as n,d as e,e as i}from"./app.ef551336.js";const p={},c={id:"frontmatter-title-for-strings",tabindex:"-1"},l=s("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d=e(),g=e(" for strings"),h={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str index-of (string) ...rest --range --end</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>string</code>: the string to find index of</li><li><code>...rest</code>: optionally returns index of string in input by column paths</li><li><code>--range {any}</code>: optional start and/or end index</li><li><code>--end</code>: search from the end of the input</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns index of string in input</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;.rb&#39;</span>
</code></pre></div><p>Returns index of string in input with start index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;.rb.rb&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;.rb&#39;</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;1,&#39;</span>
</code></pre></div><p>Returns index of string in input with end index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;6&#39;</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;,4&#39;</span>
</code></pre></div><p>Returns index of string in input with start and end index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;3&#39;</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;1,4&#39;</span>
</code></pre></div><p>Alternatively you can use this form</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;3&#39;</span> <span class="token parameter variable">-r</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre></div><p>Returns index of string in input</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;/this/is/some/path/file.txt&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;/&#39;</span> <span class="token parameter variable">-e</span>
</code></pre></div>`,17);function f(a,k){return r(),o("div",null,[s("h1",c,[l,d,s("code",null,n(a.$frontmatter.title),1),g]),s("div",h,n(a.$frontmatter.strings),1),u])}const b=t(p,[["render",f],["__file","str_index-of.html.vue"]]);export{b as default};
