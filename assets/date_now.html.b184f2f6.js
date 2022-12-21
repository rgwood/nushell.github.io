import{_ as n,z as o,A as r,X as a,C as t,D as s,a6 as c}from"./framework.3d018c9f.js";const p={},d={id:"frontmatter-title-for-date",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-date","aria-hidden":"true"},"#",-1),l={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date now </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the current date and display it in a given format string.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div><p>Get the time duration from 2019-04-30 to now</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>date now<span class="token punctuation">)</span> - <span class="token number">2019</span>-05-01
</code></pre></div><p>Get the time duration since a more accurate time</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>date now<span class="token punctuation">)</span> - <span class="token number">2019</span>-05-01T04:12:05.20+08:00
</code></pre></div><p>Get current time in full RFC3339 format with timezone</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> debug
</code></pre></div>`,11);function h(e,g){return o(),r("div",null,[a("h1",d,[i,t(),a("code",null,s(e.$frontmatter.title),1),t(" for date")]),a("div",l,s(e.$frontmatter.date),1),u])}const f=n(p,[["render",h],["__file","date_now.html.vue"]]);export{f as default};
