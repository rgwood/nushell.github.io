import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; skip while (predicate)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>predicate</code>: the predicate that skipped element must match</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Skip while the element is negative</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>-2 <span class="token number">0</span> <span class="token number">2</span> -1<span class="token punctuation">]</span> <span class="token operator">|</span> skip <span class="token keyword">while</span> <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">}</span>
╭───┬────╮
│ <span class="token number">0</span> │  <span class="token number">0</span> │
│ <span class="token number">1</span> │  <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token parameter variable">-1</span> │
╰───┴────╯

</code></pre></div><p>Skip while the element is negative using stored condition</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> cond <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>-2 <span class="token number">0</span> <span class="token number">2</span> -1<span class="token punctuation">]</span> <span class="token operator">|</span> skip <span class="token keyword">while</span> <span class="token variable">$cond</span>
╭───┬────╮
│ <span class="token number">0</span> │  <span class="token number">0</span> │
│ <span class="token number">1</span> │  <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token parameter variable">-1</span> │
╰───┴────╯

</code></pre></div><p>Skip while the field value is negative</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: -2<span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">0</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>a: -1<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> skip <span class="token keyword">while</span> <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span>.a <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">}</span>
╭───┬────╮
│ <span class="token comment"># │ a  │</span>
├───┼────┤
│ <span class="token number">0</span> │  <span class="token number">0</span> │
│ <span class="token number">1</span> │  <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token parameter variable">-1</span> │
╰───┴────╯

</code></pre></div>`,11);function d(s,h){return p(),o("div",null,[a("h1",r,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",u,e(s.$frontmatter.filters),1),k])}const b=t(l,[["render",d],["__file","skip_while.html.vue"]]);export{b as default};
