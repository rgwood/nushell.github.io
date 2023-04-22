import{_ as r,p as n,q as d,Q as e,t,v as s,a1 as l}from"./framework-344bb0e4.js";const i={},o={id:"frontmatter-title-for-filesystem",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filesystem","aria-hidden":"true"},"#",-1),c={class:"command-title"},h=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; start (path)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: path to open</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Open a text file with the default text editor</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> start file.txt

</code></pre></div><p>Open an image with the default image viewer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> start file.jpg

</code></pre></div><p>Open the current directory with the default file manager</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> start <span class="token builtin class-name">.</span>

</code></pre></div><p>Open a pdf with the default pdf viewer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> start file.pdf

</code></pre></div><p>Open a website with default browser</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> start https://www.nushell.sh

</code></pre></div>`,15);function f(a,g){return n(),d("div",null,[e("h1",o,[p,t(),e("code",null,s(a.$frontmatter.title),1),t(" for filesystem")]),e("div",c,s(a.$frontmatter.filesystem),1),h])}const m=r(i,[["render",f],["__file","start.html.vue"]]);export{m as default};
