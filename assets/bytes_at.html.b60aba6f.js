import{_ as e,o as t,c as p,a as s,t as n,d as o,e as c}from"./app.f96f0b62.js";const r={},l={id:"frontmatter-title",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=o(),k={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes at (range) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>range</code>: the indexes to get bytes</li><li><code>...rest</code>: optionally get bytes by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get a subbytes <code>0x[10 01]</code> from the bytes <code>0x[33 44 55 10 01 13]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">10</span> 01 <span class="token number">13</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes at <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre></div><p>Alternatively, you can use the form</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">10</span> 01 <span class="token number">13</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes at <span class="token string">&#39;3,4&#39;</span>
</code></pre></div><p>Drop the last <code>n</code> characters from the string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">10</span> 01 <span class="token number">13</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes at <span class="token string">&#39;,-3&#39;</span>
</code></pre></div><p>Get the remaining characters from a starting index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">10</span> 01 <span class="token number">13</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes at <span class="token string">&#39;3,&#39;</span>
</code></pre></div><p>Get the characters from the beginning until ending index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  0x<span class="token punctuation">[</span><span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">10</span> 01 <span class="token number">13</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes at <span class="token string">&#39;,4&#39;</span>
</code></pre></div><p>Or the characters from the beginning until ending index inside a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB ColC<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>0x<span class="token punctuation">[</span><span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span><span class="token punctuation">]</span> 0x<span class="token punctuation">[</span><span class="token number">17</span> <span class="token number">18</span> <span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes at <span class="token string">&quot;1,&quot;</span> ColB ColC
</code></pre></div>`,17);function b(a,h){return t(),p("div",null,[s("h1",l,[u,i,s("code",null,n(a.$frontmatter.title),1)]),s("div",k,n(a.$frontmatter.usage),1),d])}var g=e(r,[["render",b],["__file","bytes_at.html.vue"]]);export{g as default};
