import{_ as r,z as n,A as c,X as e,C as s,D as t,a6 as o}from"./framework.3d018c9f.js";const i={},d={id:"frontmatter-title-for-generators",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-generators","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq char (start) (end)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>start</code>: start of character sequence (inclusive)</li><li><code>end</code>: end of character sequence (inclusive)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sequence a to e</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char a e
</code></pre></div><p>sequence a to e, and put the characters in a pipe-separated string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char a e <span class="token operator">|</span> str <span class="token function">join</span> <span class="token string">&#39;|&#39;</span>
</code></pre></div>`,9);function u(a,f){return n(),c("div",null,[e("h1",d,[l,s(),e("code",null,t(a.$frontmatter.title),1),s(" for generators")]),e("div",h,t(a.$frontmatter.generators),1),p])}const _=r(i,[["render",u],["__file","seq_char.html.vue"]]);export{_ as default};
