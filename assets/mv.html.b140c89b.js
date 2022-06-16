import{_ as s,u as o,o as r,c as n,a as e,t,d as i,e as c}from"./app.43db386a.js";const d={computed:{frontmatter(){return o().value}}},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=i(),m={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; mv (source) (destination) --verbose --interactive</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>source</code>: the location to move files/directories from</li><li><code>destination</code>: the location to move files/directories to</li><li><code>--verbose</code>: make mv to be verbose, showing files been moved.</li><li><code>--interactive</code>: ask user to confirm action</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rename a file</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> before.txt after.txt
</code></pre></div><p>Move a file into a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> test.txt my/subdirectory
</code></pre></div><p>Move many files into a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> *.txt my/subdirectory
</code></pre></div>`,11);function f(v,g,_,b,x,a){return r(),n("div",null,[e("h1",l,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",m,t(a.frontmatter.usage),1),u])}var y=s(d,[["render",f],["__file","mv.html.vue"]]);export{y as default};
