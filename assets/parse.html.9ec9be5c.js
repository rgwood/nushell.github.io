import{_ as t,o as r,c as o,a,t as e,d as n,e as p}from"./app.ef551336.js";const c={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),g=n(),d=n(" for strings"),h={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; parse (pattern) --regex</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match. Eg) &quot;{foo}: {bar}&quot;</li><li><code>--regex</code>: use full regex syntax for patterns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a string into two named columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse <span class="token string">&quot;{foo} {bar}&quot;</span>
</code></pre></div><p>Parse a string using regex pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hi there&quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;(?P&lt;foo&gt;\\w+) (?P&lt;bar&gt;\\w+)&#39;</span>
</code></pre></div><p>Parse a string using fancy-regex named capture group pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;foo bar.&quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;\\s*(?&lt;name&gt;\\w+)(?=\\.)&#39;</span>
</code></pre></div><p>Parse a string using fancy-regex capture group pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;foo! bar.&quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;(\\w+)(?=\\.)|(\\w+)(?=!)&#39;</span>
</code></pre></div><p>Parse a string using fancy-regex look behind pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot; @another(foo bar)   &quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;\\s*(?&lt;=[() ])(@\\w+)(\\([^)]*\\))?\\s*&#39;</span>
</code></pre></div><p>Parse a string using fancy-regex look ahead atomic group pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;abcd&quot;</span> <span class="token operator">|</span> parse <span class="token parameter variable">-r</span> <span class="token string">&#39;^a(bc(?=d)|b)cd$&#39;</span>
</code></pre></div>`,17);function k(s,b){return r(),o("div",null,[a("h1",l,[i,g,a("code",null,e(s.$frontmatter.title),1),d]),a("div",h,e(s.$frontmatter.strings),1),u])}const f=t(c,[["render",k],["__file","parse.html.vue"]]);export{f as default};
