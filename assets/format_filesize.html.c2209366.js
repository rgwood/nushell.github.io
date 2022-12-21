import{_ as n,z as r,A as o,X as a,C as s,D as t,a6 as i}from"./framework.3d018c9f.js";const c={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; format filesize (format value) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>format value</code>: the format into which convert the file sizes</li><li><code>...rest</code>: optinally find and replace text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the size row to KB</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">format</span> filesize KB size
</code></pre></div><p>Convert the apparent row to B</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">du</span> <span class="token operator">|</span> <span class="token function">format</span> filesize B apparent
</code></pre></div><p>Convert the size data to MB</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 4Gb <span class="token operator">|</span> <span class="token function">format</span> filesize MB
</code></pre></div>`,11);function f(e,u){return r(),o("div",null,[a("h1",l,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for strings")]),a("div",p,t(e.$frontmatter.strings),1),h])}const g=n(c,[["render",f],["__file","format_filesize.html.vue"]]);export{g as default};
