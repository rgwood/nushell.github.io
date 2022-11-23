import{_ as t,o,c as r,a as e,t as s,d as n,e as i}from"./app.ef551336.js";const c={},l={id:"frontmatter-title-for-core",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d=n(),h=n(" for core"),u={class:"command-title"},g=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; register (plugin) (signature) --shell</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>plugin</code>: path of executable for plugin</li><li><code>signature</code>: Block with signature description as json object</li><li><code>--shell {path}</code>: path of shell used to run plugin (cmd, sh, python, etc)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Register <code>nu_plugin_query</code> plugin from ~/.cargo/bin/ dir</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> register ~/.cargo/bin/nu_plugin_query
</code></pre></div><p>Register <code>nu_plugin_query</code> plugin from <code>nu -c</code>(plugin will be available in that nu session only)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> plugin <span class="token operator">=</span> <span class="token punctuation">((</span>which nu<span class="token punctuation">)</span>.path.0 <span class="token operator">|</span> path <span class="token function">dirname</span> <span class="token operator">|</span> path <span class="token function">join</span> <span class="token string">&#39;nu_plugin_query&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> nu <span class="token parameter variable">-c</span> <span class="token string">$&#39;register ($plugin); version&#39;</span>
</code></pre></div>`,11);function _(a,m){return o(),r("div",null,[e("h1",l,[p,d,e("code",null,s(a.$frontmatter.title),1),h]),e("div",u,s(a.$frontmatter.core),1),g])}const k=t(c,[["render",_],["__file","register.html.vue"]]);export{k as default};
