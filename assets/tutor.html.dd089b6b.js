import{_ as r,u as s,o,c as n,a as e,t,d as i,e as c}from"./app.43db386a.js";const d={computed:{frontmatter(){return s().value}}},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=i(),u={style:{"white-space":"pre-wrap"}},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; tutor (search) --find</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>search</code>: item to search for, or &#39;list&#39; to list available tutorials</li><li><code>--find {string}</code>: Search tutorial for a phrase</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Begin the tutorial</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> tutor begin
</code></pre></div><p>Search a tutorial by phrase</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> tutor -f <span class="token string">&quot;<span class="token variable">$in</span>&quot;</span>
</code></pre></div>`,9);function f(g,m,x,b,v,a){return o(),n("div",null,[e("h1",l,[h,p,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),_])}var S=r(d,[["render",f],["__file","tutor.html.vue"]]);export{S as default};
