import{_ as n,p as o,q as r,Q as e,t,v as s,a1 as d}from"./framework-344bb0e4.js";const c={},p={id:"frontmatter-title-for-system",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title-for-system","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; complete </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>In order to capture stdout, stderr, and exit_code, externally piped in commands need to be wrapped with <code>do</code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Run the external command to completion, capturing stdout and exit_code</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ^external arg1 <span class="token operator">|</span> complete
</code></pre></div><p>Run external command to completion, capturing, stdout, stderr and exit_code</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span> ^external arg1 <span class="token punctuation">}</span> <span class="token operator">|</span> complete
</code></pre></div>`,9);function m(a,u){return o(),r("div",null,[e("h1",p,[i,t(),e("code",null,s(a.$frontmatter.title),1),t(" for system")]),e("div",l,s(a.$frontmatter.system),1),h])}const g=n(c,[["render",m],["__file","complete.html.vue"]]);export{g as default};
