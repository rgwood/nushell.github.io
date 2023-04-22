import{_ as n,p as r,q as l,Q as a,t as s,v as t,a1 as i}from"./framework-344bb0e4.js";const o={},c={id:"frontmatter-title-for-core",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; help aliases ...rest --find</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the name of alias to get help on</li><li><code>--find {string}</code>: string to find in alias names and usage</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>show all aliases</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> aliases

</code></pre></div><p>show help for single alias</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> aliases my-alias

</code></pre></div><p>search for string in alias names and usages</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> aliases <span class="token parameter variable">--find</span> my-alias

</code></pre></div>`,11);function g(e,m){return r(),l("div",null,[a("h1",c,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for core")]),a("div",h,t(e.$frontmatter.core),1),p])}const f=n(o,[["render",g],["__file","help_aliases.html.vue"]]);export{f as default};
