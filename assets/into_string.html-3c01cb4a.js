import{_ as t,p as o,q as r,Q as a,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-conversions",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d={class:"command-title"},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into string ...rest --decimals</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: for a data structure input, convert data at the given cell paths</li><li><code>--decimals {int}</code>: decimal digits to which to round</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert integer to string and append three decimal places</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token number">3</span>
<span class="token number">5.000</span>
</code></pre></div><p>convert decimal to string and round to nearest integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1.7</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token number">0</span>
<span class="token number">2</span>
</code></pre></div><p>convert decimal to string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1.7</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token number">1</span>
<span class="token number">1.7</span>
</code></pre></div><p>convert decimal to string and limit to 2 decimals</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1.734</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token number">2</span>
<span class="token number">1.73</span>
</code></pre></div><p>try to convert decimal to string and provide negative decimal points</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1.734</span> <span class="token operator">|</span> into string <span class="token parameter variable">-d</span> <span class="token parameter variable">-2</span>

</code></pre></div><p>convert decimal to string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">4.3</span> <span class="token operator">|</span> into string
<span class="token number">4.3</span>
</code></pre></div><p>convert string to string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> into string
<span class="token number">1234</span>
</code></pre></div><p>convert boolean to string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token boolean">true</span> <span class="token operator">|</span> into string
<span class="token boolean">true</span>
</code></pre></div><p>convert filepath to string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> Cargo.toml <span class="token operator">|</span> get name <span class="token operator">|</span> into string

</code></pre></div><p>convert filesize to string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 1KiB <span class="token operator">|</span> into string
<span class="token number">1,024</span> B
</code></pre></div>`,25);function h(s,u){return o(),r("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for conversions")]),a("div",d,e(s.$frontmatter.conversions),1),g])}const b=t(c,[["render",h],["__file","into_string.html.vue"]]);export{b as default};
