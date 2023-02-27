import{_ as t,p as r,q as o,Q as s,t as e,v as n,a1 as p}from"./framework-344bb0e4.js";const l={},c={id:"frontmatter-title-for-default",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),d={class:"command-title"},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str substring (range) ...rest --grapheme-clusters --utf-8-bytes</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>range</code>: the indexes to substring [start end]</li><li><code>...rest</code>: For a data structure input, turn strings at the given cell paths into substrings</li><li><code>--grapheme-clusters</code> <code>(-g)</code>: count indexes and split using grapheme clusters (all visible chars have length 1)</li><li><code>--utf-8-bytes</code> <code>(-b)</code>: count indexes and split using UTF-8 bytes (default; non-ASCII chars have length 2+)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get a substring &quot;nushell&quot; from the text &quot;good nushell&quot; using a range</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token number">5</span><span class="token punctuation">..</span><span class="token number">12</span>
</code></pre></div><p>Alternately, you can pass in a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">12</span><span class="token punctuation">]</span>
</code></pre></div><p>Or a simple comma-separated string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;5,12&#39;</span>
</code></pre></div><p>Drop the last <code>n</code> characters from the string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;,-5&#39;</span>
</code></pre></div><p>Get the remaining characters from a starting index</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;5,&#39;</span>
</code></pre></div><p>Get the characters from the beginning until ending index</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;good nushell&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;,7&#39;</span>
</code></pre></div><p>Count indexes and split using grapheme clusters</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;🇯🇵ほげ ふが ぴよ&#39;</span> <span class="token operator">|</span> str substring <span class="token parameter variable">-g</span> <span class="token number">4</span><span class="token punctuation">..</span><span class="token number">6</span>
</code></pre></div>`,19);function u(a,h){return r(),o("div",null,[s("h1",c,[i,e(),s("code",null,n(a.$frontmatter.title),1),e(" for default")]),s("div",d,n(a.$frontmatter.default),1),g])}const k=t(l,[["render",u],["__file","str_substring.html.vue"]]);export{k as default};
