import{_ as t,p as o,q as p,Q as a,t as n,v as e,a1 as l}from"./framework-344bb0e4.js";const r={},c={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr all-false </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns true if all values are false</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>false <span class="token boolean">false</span> false<span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df <span class="token operator">|</span> dfr all-false
╭───┬───────────╮
│ <span class="token comment"># │ all_false │</span>
├───┼───────────┤
│ <span class="token number">0</span> │ <span class="token boolean">true</span>      │
╰───┴───────────╯

</code></pre></div><p>Checks the result from a comparison</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">2</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr into-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span> <span class="token operator">|</span> dfr all-false
╭───┬───────────╮
│ <span class="token comment"># │ all_false │</span>
├───┼───────────┤
│ <span class="token number">0</span> │ <span class="token boolean">false</span>     │
╰───┴───────────╯

</code></pre></div>`,7);function f(s,k){return o(),p("div",null,[a("h1",c,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for dataframe")]),a("div",d,e(s.$frontmatter.dataframe),1),u])}const h=t(r,[["render",f],["__file","dfr_all-false.html.vue"]]);export{h as default};
