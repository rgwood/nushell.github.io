import{_ as n,o,c as r,a as e,t as s,d as t,e as l}from"./app.ef551336.js";const i={},c={id:"frontmatter-title-for-platform",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-platform","aria-hidden":"true"},"#",-1),d=t(),h=t(" for platform"),u={class:"command-title"},f=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; kill (pid) ...rest --force --quiet --signal</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pid</code>: process id of process that is to be killed</li><li><code>...rest</code>: rest of processes to kill</li><li><code>--force</code>: forcefully kill the process</li><li><code>--quiet</code>: won&#39;t print anything to the console</li><li><code>--signal {int}</code>: signal decimal number to be sent instead of the default 15 (unsupported on Windows)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Kill the pid using the most memory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> sort-by mem <span class="token operator">|</span> last <span class="token operator">|</span> <span class="token function">kill</span> <span class="token variable">$in</span>.pid
</code></pre></div><p>Force kill a given pid</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">kill</span> <span class="token parameter variable">--force</span> <span class="token number">12345</span>
</code></pre></div><p>Send INT signal</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">kill</span> <span class="token parameter variable">-s</span> <span class="token number">2</span> <span class="token number">12345</span>
</code></pre></div>`,11);function m(a,k){return o(),r("div",null,[e("h1",c,[p,d,e("code",null,s(a.$frontmatter.title),1),h]),e("div",u,s(a.$frontmatter.platform),1),f])}const _=n(i,[["render",m],["__file","kill.html.vue"]]);export{_ as default};
