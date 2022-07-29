import{_ as t,o as r,c as n,a as e,t as s,d as o,e as c}from"./app.f96f0b62.js";const d={},p={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes reverse ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally matches prefix of text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Reverse bytes <code>0x[1F FF AA AA]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes reverse
</code></pre></div><p>Reverse bytes <code>0x[FF AA AA]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes reverse
</code></pre></div>`,9);function _(a,m){return r(),n("div",null,[e("h1",p,[i,l,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var x=t(d,[["render",_],["__file","bytes_reverse.html.vue"]]);export{x as default};
