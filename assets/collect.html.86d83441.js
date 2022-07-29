import{_ as t,o as n,c as o,a as e,t as s,d as r,e as c}from"./app.f96f0b62.js";const l={},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; collect (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run once the stream is collected</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Use the second value in the stream</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token operator">|</span> collect <span class="token punctuation">{</span> <span class="token operator">|</span>x<span class="token operator">|</span> <span class="token builtin class-name">echo</span> <span class="token variable">$x</span>.1 <span class="token punctuation">}</span>
</code></pre></div>`,7);function m(a,_){return n(),o("div",null,[e("h1",i,[p,d,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var b=t(l,[["render",m],["__file","collect.html.vue"]]);export{b as default};
