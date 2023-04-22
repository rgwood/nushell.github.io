import{_ as r,p as n,q as o,Q as a,t as e,v as t,a1 as l}from"./framework-344bb0e4.js";const p={},c={id:"frontmatter-title-for-default",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str trim ...rest --char --left --right</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: For a data structure input, trim strings at the given cell paths</li><li><code>--char {string}</code>: character to trim (default: whitespace)</li><li><code>--left</code> <code>(-l)</code>: trims characters only from the beginning of the string</li><li><code>--right</code> <code>(-r)</code>: trims characters only from the end of the string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Trim whitespace</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nu shell &#39;</span> <span class="token operator">|</span> str trim
Nu shell
</code></pre></div><p>Trim a specific character</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">|</span> str trim
Nu shell
</code></pre></div><p>Trim whitespace from the beginning of string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39; Nu shell &#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-l</span>
Nu shell
</code></pre></div><p>Trim a specific character</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span>
 Nu shell
</code></pre></div><p>Trim whitespace from the end of string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39; Nu shell &#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-r</span>
 Nu shell
</code></pre></div><p>Trim a specific character</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-r</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span>
<span class="token operator">==</span><span class="token operator">=</span> Nu shell
</code></pre></div>`,17);function g(s,m){return n(),o("div",null,[a("h1",c,[i,e(),a("code",null,t(s.$frontmatter.title),1),e(" for default")]),a("div",d,t(s.$frontmatter.default),1),h])}const f=r(p,[["render",g],["__file","str_trim.html.vue"]]);export{f as default};
