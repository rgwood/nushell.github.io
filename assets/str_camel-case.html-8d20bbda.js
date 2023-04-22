import{_ as t,p as r,q as c,Q as a,t as e,v as n,a1 as o}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str camel-case ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: For a data structure input, convert strings at the given cell paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert a string to camelCase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;NuShell&#39;</span> <span class="token operator">|</span> str camel-case
nuShell
</code></pre></div><p>convert a string to camelCase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;this-is-the-first-case&#39;</span> <span class="token operator">|</span> str camel-case
thisIsTheFirstCase
</code></pre></div><p>convert a string to camelCase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;this_is_the_second_case&#39;</span> <span class="token operator">|</span> str camel-case
thisIsTheSecondCase
</code></pre></div><p>convert a column from a table to camelCase</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu_test, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str camel-case lang
╭───┬────────┬──────╮
│ <span class="token comment"># │  lang  │ gems │</span>
├───┼────────┼──────┤
│ <span class="token number">0</span> │ nuTest │  <span class="token number">100</span> │
╰───┴────────┴──────╯

</code></pre></div>`,13);function u(s,g){return r(),c("div",null,[a("h1",l,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for strings")]),a("div",d,n(s.$frontmatter.strings),1),h])}const _=t(p,[["render",u],["__file","str_camel-case.html.vue"]]);export{_ as default};
