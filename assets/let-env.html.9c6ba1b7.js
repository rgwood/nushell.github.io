import{_ as s,o as r,c as o,a as e,t,d as n,e as i}from"./app.ef551336.js";const l={},d={id:"frontmatter-title-for-env",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title-for-env","aria-hidden":"true"},"#",-1),h=n(),p=n(" for env"),_={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; let-env (var_name) (initial_value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>var_name</code>: variable name</li><li><code>initial_value</code>: equals sign followed by value</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create an environment variable and display it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env MY_ENV_VAR <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$env</span>.MY_ENV_VAR
</code></pre></div>`,7);function m(a,v){return r(),o("div",null,[e("h1",d,[c,h,e("code",null,t(a.$frontmatter.title),1),p]),e("div",_,t(a.$frontmatter.env),1),u])}const b=s(l,[["render",m],["__file","let-env.html.vue"]]);export{b as default};
