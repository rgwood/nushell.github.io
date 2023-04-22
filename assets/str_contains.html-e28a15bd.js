import{_ as e,p as o,q as p,Q as n,t as a,v as t,a1 as c}from"./framework-344bb0e4.js";const l={},r={id:"frontmatter-title-for-strings",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str contains (string) ...rest --ignore-case --not</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>string</code>: the substring to find</li><li><code>...rest</code>: For a data structure input, check strings at the given cell paths, and replace with result</li><li><code>--ignore-case</code> <code>(-i)</code>: search is case insensitive</li><li><code>--not</code> <code>(-n)</code>: does not contain</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Check if input contains string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str contains <span class="token string">&#39;.rb&#39;</span>
<span class="token boolean">true</span>
</code></pre></div><p>Check if input contains string case insensitive</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str contains <span class="token parameter variable">-i</span> <span class="token string">&#39;.RB&#39;</span>
<span class="token boolean">true</span>
</code></pre></div><p>Check if input contains string in a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>test <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token string">&#39;e&#39;</span> ColA
╭───┬──────┬──────╮
│ <span class="token comment"># │ ColA │ ColB │</span>
├───┼──────┼──────┤
│ <span class="token number">0</span> │ <span class="token boolean">true</span> │  <span class="token number">100</span> │
╰───┴──────┴──────╯

</code></pre></div><p>Check if input contains string in a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>test <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token parameter variable">-i</span> <span class="token string">&#39;E&#39;</span> ColA
╭───┬──────┬──────╮
│ <span class="token comment"># │ ColA │ ColB │</span>
├───┼──────┼──────┤
│ <span class="token number">0</span> │ <span class="token boolean">true</span> │  <span class="token number">100</span> │
╰───┴──────┴──────╯

</code></pre></div><p>Check if input contains string in a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token punctuation">[</span><span class="token punctuation">[</span>ColA ColB<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>test hello<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token string">&#39;e&#39;</span> ColA ColB
╭───┬──────┬──────╮
│ <span class="token comment"># │ ColA │ ColB │</span>
├───┼──────┼──────┤
│ <span class="token number">0</span> │ <span class="token boolean">true</span> │ <span class="token boolean">true</span> │
╰───┴──────┴──────╯

</code></pre></div><p>Check if input string contains &#39;banana&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">|</span> str contains <span class="token string">&#39;banana&#39;</span>
<span class="token boolean">false</span>
</code></pre></div><p>Check if list contains string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>one two three<span class="token punctuation">]</span> <span class="token operator">|</span> str contains o
╭───┬───────╮
│ <span class="token number">0</span> │ <span class="token boolean">true</span>  │
│ <span class="token number">1</span> │ <span class="token boolean">true</span>  │
│ <span class="token number">2</span> │ <span class="token boolean">false</span> │
╰───┴───────╯

</code></pre></div><p>Check if list does not contain string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>one two three<span class="token punctuation">]</span> <span class="token operator">|</span> str contains <span class="token parameter variable">-n</span> o
╭───┬───────╮
│ <span class="token number">0</span> │ <span class="token boolean">false</span> │
│ <span class="token number">1</span> │ <span class="token boolean">false</span> │
│ <span class="token number">2</span> │ <span class="token boolean">true</span>  │
╰───┴───────╯

</code></pre></div>`,21);function k(s,g){return o(),p("div",null,[n("h1",r,[i,a(),n("code",null,t(s.$frontmatter.title),1),a(" for strings")]),n("div",u,t(s.$frontmatter.strings),1),d])}const b=e(l,[["render",k],["__file","str_contains.html.vue"]]);export{b as default};
