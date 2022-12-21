import{_ as n,z as r,A as o,X as a,C as e,D as t,a6 as c}from"./framework.3d018c9f.js";const p={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str pascal-case ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally convert text to PascalCase by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert a string to PascalCase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;nu-shell&#39;</span> <span class="token operator">|</span> str pascal-case
</code></pre></div><p>convert a string to PascalCase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;this-is-the-first-case&#39;</span> <span class="token operator">|</span> str pascal-case
</code></pre></div><p>convert a string to PascalCase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;this_is_the_second_case&#39;</span> <span class="token operator">|</span> str pascal-case
</code></pre></div><p>convert a column from a table to PascalCase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu_test, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str pascal-case lang
</code></pre></div>`,13);function u(s,g){return r(),o("div",null,[a("h1",l,[i,e(),a("code",null,t(s.$frontmatter.title),1),e(" for strings")]),a("div",d,t(s.$frontmatter.strings),1),h])}const m=n(p,[["render",u],["__file","str_pascal-case.html.vue"]]);export{m as default};
