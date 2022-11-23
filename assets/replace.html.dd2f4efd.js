import{_ as r,o as n,c as o,a,t,d as s,e as c}from"./app.ef551336.js";const i={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),p=s(),h=s(" for dataframe"),m={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; replace --pattern --replace</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pattern {string}</code>: Regex pattern to be matched</li><li><code>--replace {string}</code>: replacing string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Replaces string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abc abc abc<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> replace <span class="token parameter variable">-p</span> ab <span class="token parameter variable">-r</span> AB
</code></pre></div>`,7);function u(e,_){return n(),o("div",null,[a("h1",d,[l,p,a("code",null,t(e.$frontmatter.title),1),h]),a("div",m,t(e.$frontmatter.dataframe),1),f])}const b=r(i,[["render",u],["__file","replace.html.vue"]]);export{b as default};
