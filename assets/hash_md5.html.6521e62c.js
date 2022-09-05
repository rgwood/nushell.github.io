import{_ as n,o as t,c as r,a,t as s,d as o,e as i}from"./app.62da7227.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),h={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; hash md5 ...rest --binary</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally md5 hash data by cell path</li><li><code>--binary</code>: Output binary instead of hexadecimal representation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>get a hexadecimaly encoded string of the md5 digest of a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;abcdefghijklmnopqrstuvwxyz&#39;</span> <span class="token operator">|</span> <span class="token builtin class-name">hash</span> md5
</code></pre></div><p>get the md5 digest of a string in binary</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;abcdefghijklmnopqrstuvwxyz&#39;</span> <span class="token operator">|</span> <span class="token builtin class-name">hash</span> md5 <span class="token parameter variable">--binary</span>
</code></pre></div><p>md5 encode a file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> ./nu_0_24_1_windows.zip <span class="token operator">|</span> <span class="token builtin class-name">hash</span> md5
</code></pre></div>`,11);function u(e,g){return t(),r("div",null,[a("h1",l,[d,p,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),m])}const b=n(c,[["render",u],["__file","hash_md5.html.vue"]]);export{b as default};
