import{_ as t,u as n,o as r,c as o,a,t as e,d as c,e as p}from"./app.43db386a.js";const i={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),h={style:{"white-space":"pre-wrap"}},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str screaming-snake-case ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally convert text to SCREAMING_SNAKE_CASE by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert a string to SCREAMING_SNAKE_CASE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&quot;NuShell&quot;</span> <span class="token operator">|</span> str screaming-snake-case
</code></pre></div><p>convert a string to SCREAMING_SNAKE_CASE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&quot;this_is_the_second_case&quot;</span> <span class="token operator">|</span> str screaming-snake-case
</code></pre></div><p>convert a string to SCREAMING_SNAKE_CASE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;this-is-the-first-case&quot;</span> <span class="token operator">|</span> str screaming-snake-case
</code></pre></div><p>convert a column from a table to SCREAMING_SNAKE_CASE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lang, gems<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu_test, <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str screaming-snake-case lang
</code></pre></div>`,13);function _(m,k,S,f,v,s){return r(),o("div",null,[a("h1",l,[d,u,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),g])}var x=t(i,[["render",_],["__file","str_screaming-snake-case.html.vue"]]);export{x as default};
