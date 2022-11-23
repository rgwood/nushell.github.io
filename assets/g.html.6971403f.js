import{_ as t,o,c as l,a as e,t as s,d as n,e as r}from"./app.ef551336.js";const c={},p={id:"frontmatter-title-for-shells",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-shells","aria-hidden":"true"},"#",-1),i=n(),h=n(" for shells"),u={class:"command-title"},g=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; g (shell_number)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>shell_number</code>: shell number to change to</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Lists all open shells</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> g
</code></pre></div><p>Make two directories and enter new shells for them, use <code>g</code> to jump to the specific shell</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> foo bar<span class="token punctuation">;</span> enter foo<span class="token punctuation">;</span> enter <span class="token punctuation">..</span>/bar<span class="token punctuation">;</span> g <span class="token number">1</span>
</code></pre></div><p>Use <code>shells</code> to show all the opened shells and run <code>g 2</code> to jump to the third one</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells<span class="token punctuation">;</span> g <span class="token number">2</span>
</code></pre></div><p>Make two directories and enter new shells for them, use <code>g -</code> to jump to the last used shell</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> foo bar<span class="token punctuation">;</span> enter foo<span class="token punctuation">;</span> enter <span class="token punctuation">..</span>/bar<span class="token punctuation">;</span> g -
</code></pre></div>`,13);function m(a,f){return o(),l("div",null,[e("h1",p,[d,i,e("code",null,s(a.$frontmatter.title),1),h]),e("div",u,s(a.$frontmatter.shells),1),g])}const k=t(c,[["render",m],["__file","g.html.vue"]]);export{k as default};
