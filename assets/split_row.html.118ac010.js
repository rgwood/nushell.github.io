import{_ as t,o as n,c as r,a,t as s,d as o,e as i}from"./app.f96f0b62.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split row (separator) --number</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: the character that denotes what separates rows</li><li><code>--number {int}</code>: Split into maximum number of items</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a string into rows of char</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;abc&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&#39;&#39;</span>
</code></pre></div><p>Split a string into rows by the specified separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;a--b--c&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&#39;--&#39;</span>
</code></pre></div>`,9);function m(e,g){return n(),r("div",null,[a("h1",p,[l,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var f=t(c,[["render",m],["__file","split_row.html.vue"]]);export{f as default};
