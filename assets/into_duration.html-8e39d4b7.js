import{_ as t,p as o,q as r,Q as a,t as n,v as e,a1 as p}from"./framework-344bb0e4.js";const c={},i={id:"frontmatter-title-for-conversions",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into duration ...rest --convert</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: for a data structure input, convert data at the given cell paths</li><li><code>--convert {string}</code>: convert duration into another duration</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command does not take leap years into account, and every month is assumed to have 30 days.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to duration in table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;1sec&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;2min&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;3hr&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;4day&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;5wk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into duration value
╭───┬─────────────╮
│ <span class="token comment"># │    value    │</span>
├───┼─────────────┤
│ <span class="token number">0</span> │        1sec │
│ <span class="token number">1</span> │        2min │
│ <span class="token number">2</span> │         3hr │
│ <span class="token number">3</span> │        4day │
│ <span class="token number">4</span> │ 1month 5day │
╰───┴─────────────╯

</code></pre></div><p>Convert string to duration</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;7min&#39;</span> <span class="token operator">|</span> into duration
7min
</code></pre></div><p>Convert string to the requested duration as a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;7min&#39;</span> <span class="token operator">|</span> into duration <span class="token parameter variable">--convert</span> sec
<span class="token number">420</span> sec
</code></pre></div><p>Convert duration to duration</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 420sec <span class="token operator">|</span> into duration
7min
</code></pre></div><p>Convert duration to the requested duration as a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 420sec <span class="token operator">|</span> into duration <span class="token parameter variable">--convert</span> ms
<span class="token number">420000</span> ms
</code></pre></div><p>Convert µs duration to the requested duration as a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1000000</span>µs <span class="token operator">|</span> into duration <span class="token parameter variable">--convert</span> sec
<span class="token number">1</span> sec
</code></pre></div><p>Convert duration to the µs duration as a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 1sec <span class="token operator">|</span> into duration <span class="token parameter variable">--convert</span> µs
<span class="token number">1000000</span> µs
</code></pre></div><p>Convert duration to µs as a string if unit asked for was us</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 1sec <span class="token operator">|</span> into duration <span class="token parameter variable">--convert</span> us
<span class="token number">1000000</span> µs
</code></pre></div>`,23);function h(s,g){return o(),r("div",null,[a("h1",i,[l,n(),a("code",null,e(s.$frontmatter.title),1),n(" for conversions")]),a("div",d,e(s.$frontmatter.conversions),1),u])}const v=t(c,[["render",h],["__file","into_duration.html.vue"]]);export{v as default};
