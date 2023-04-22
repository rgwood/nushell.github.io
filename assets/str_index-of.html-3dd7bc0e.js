import{_ as t,p as r,q as p,Q as s,t as n,v as e,a1 as o}from"./framework-344bb0e4.js";const i={},c={id:"frontmatter-title-for-strings",tabindex:"-1"},l=s("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},g=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str index-of (string) ...rest --grapheme-clusters --utf-8-bytes --range --end</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>string</code>: the string to find in the input</li><li><code>...rest</code>: For a data structure input, search strings at the given cell paths, and replace with result</li><li><code>--grapheme-clusters</code> <code>(-g)</code>: count indexes using grapheme clusters (all visible chars have length 1)</li><li><code>--utf-8-bytes</code> <code>(-b)</code>: count indexes using UTF-8 bytes (default; non-ASCII chars have length 2+)</li><li><code>--range {any}</code>: optional start and/or end index</li><li><code>--end</code> <code>(-e)</code>: search from the end of the input</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns index of string in input</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;.rb&#39;</span>
<span class="token number">10</span>
</code></pre></div><p>Count length using grapheme clusters</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;🇯🇵ほげ ふが ぴよ&#39;</span> <span class="token operator">|</span> str index-of <span class="token parameter variable">-g</span> <span class="token string">&#39;ふが&#39;</span>
<span class="token number">4</span>
</code></pre></div><p>Returns index of string in input with start index</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;.rb.rb&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;.rb&#39;</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;1,&#39;</span>
<span class="token number">3</span>
</code></pre></div><p>Returns index of string in input with end index</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;6&#39;</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;,4&#39;</span>
<span class="token parameter variable">-1</span>
</code></pre></div><p>Returns index of string in input with start and end index</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;3&#39;</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;1,4&#39;</span>
<span class="token number">2</span>
</code></pre></div><p>Alternatively you can use this form</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;3&#39;</span> <span class="token parameter variable">-r</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token number">2</span>
</code></pre></div><p>Returns index of string in input</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;/this/is/some/path/file.txt&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;/&#39;</span> <span class="token parameter variable">-e</span>
<span class="token number">18</span>
</code></pre></div>`,19);function h(a,u){return r(),p("div",null,[s("h1",c,[l,n(),s("code",null,e(a.$frontmatter.title),1),n(" for strings")]),s("div",d,e(a.$frontmatter.strings),1),g])}const b=t(i,[["render",h],["__file","str_index-of.html.vue"]]);export{b as default};
