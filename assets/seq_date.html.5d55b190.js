import{_ as t,z as r,A as o,X as a,C as s,D as n,a6 as p}from"./framework.3d018c9f.js";const i={},d={id:"frontmatter-title-for-generators",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#frontmatter-title-for-generators","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq date --output-format --input-format --begin-date --end-date --increment --days --reverse</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--output-format {string}</code>: prints dates in this format (defaults to %Y-%m-%d)</li><li><code>--input-format {string}</code>: give argument dates in this format (defaults to %Y-%m-%d)</li><li><code>--begin-date {string}</code>: beginning date range</li><li><code>--end-date {string}</code>: ending date</li><li><code>--increment {int}</code>: increment dates by this number</li><li><code>--days {int}</code>: number of days to print</li><li><code>--reverse</code>: print dates in reverse</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>print the next 10 days in YYYY-MM-DD format with newline separator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">--days</span> <span class="token number">10</span>
</code></pre></div><p>print the previous 10 days in YYYY-MM-DD format with newline separator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">--days</span> <span class="token number">10</span> <span class="token parameter variable">-r</span>
</code></pre></div><p>print the previous 10 days starting today in MM/DD/YYYY format with newline separator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">--days</span> <span class="token number">10</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;%m/%d/%Y&#39;</span> <span class="token parameter variable">-r</span>
</code></pre></div><p>print the first 10 days in January, 2020</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">-b</span> <span class="token string">&#39;2020-01-01&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;2020-01-10&#39;</span>
</code></pre></div><p>print every fifth day between January 1st 2020 and January 31st 2020</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token function">date</span> <span class="token parameter variable">-b</span> <span class="token string">&#39;2020-01-01&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;2020-01-31&#39;</span> <span class="token parameter variable">-n</span> <span class="token number">5</span>
</code></pre></div>`,15);function u(e,g){return r(),o("div",null,[a("h1",d,[c,s(),a("code",null,n(e.$frontmatter.title),1),s(" for generators")]),a("div",l,n(e.$frontmatter.generators),1),h])}const f=t(i,[["render",u],["__file","seq_date.html.vue"]]);export{f as default};
