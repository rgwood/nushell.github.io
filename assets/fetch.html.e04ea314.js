import{_ as s,o as n,c as o,a as e,t,d as r,e as c}from"./app.62da7227.js";const i={},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=r(),p={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fetch (URL) --user --password --timeout --headers --raw --output --bin --append</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>URL</code>: the URL to fetch the contents from</li><li><code>--user {any}</code>: the username when authenticating</li><li><code>--password {any}</code>: the password when authenticating</li><li><code>--timeout {int}</code>: timeout period in seconds</li><li><code>--headers {any}</code>: custom headers you want to add</li><li><code>--raw</code>: fetch contents as text rather than a table</li><li><code>--output {path}</code>: save contents into a file</li><li><code>--bin</code>: if saving into a file, save as raw binary</li><li><code>--append</code>: if saving into a file, append to end of file</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Performs HTTP GET operation.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Fetch content from url.com</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch url.com
</code></pre></div><p>Fetch content from url.com, with username and password</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch <span class="token parameter variable">-u</span> myuser <span class="token parameter variable">-p</span> mypass url.com
</code></pre></div><p>Fetch content from url.com, with custom header</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch <span class="token parameter variable">-H</span> <span class="token punctuation">[</span>my-header-key my-header-value<span class="token punctuation">]</span> url.com
</code></pre></div>`,13);function m(a,f){return n(),o("div",null,[e("h1",d,[l,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),u])}const _=s(i,[["render",m],["__file","fetch.html.vue"]]);export{_ as default};
