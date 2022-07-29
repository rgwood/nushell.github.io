import{_ as t,o as n,c as r,a as e,t as s,d as o,e as c}from"./app.f96f0b62.js";const l={},d={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sleep (duration) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>duration</code>: time to sleep</li><li><code>...rest</code>: additional time</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sleep for 1sec</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">sleep</span> 1sec
</code></pre></div><p>Sleep for 3sec</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">sleep</span> 1sec 1sec 1sec
</code></pre></div><p>Send output after 1sec</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">sleep</span> 1sec<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token keyword">done</span>
</code></pre></div>`,11);function f(a,g){return n(),r("div",null,[e("h1",d,[i,p,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var m=t(l,[["render",f],["__file","sleep.html.vue"]]);export{m as default};
