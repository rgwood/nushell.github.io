import{_ as n,p as o,q as r,Q as a,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const p={},l={id:"frontmatter-title-for-formats",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),i={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from csv --separator --comment --quote --escape --noheaders --flexible --no-infer --trim</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--separator {string}</code>: a character to separate columns, defaults to &#39;,&#39;</li><li><code>--comment {string}</code>: a comment character to ignore lines starting with it</li><li><code>--quote {string}</code>: a quote character to ignore separators in strings, defaults to &#39;&quot;&#39;</li><li><code>--escape {string}</code>: an escape character for strings containing the quote character</li><li><code>--noheaders</code> <code>(-n)</code>: don&#39;t treat the first row as column names</li><li><code>--flexible</code> <code>(-)</code>: allow the number of fields in records to be variable</li><li><code>--no-infer</code> <code>(-)</code>: no field type inferencing</li><li><code>--trim {string}</code>: drop leading and trailing whitespaces around headers names and/or field values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert comma-separated data to a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;ColA,ColB
1,2&quot;</span> <span class="token operator">|</span> from csv
╭───┬──────┬──────╮
│ <span class="token comment"># │ ColA │ ColB │</span>
├───┼──────┼──────┤
│ <span class="token number">0</span> │    <span class="token number">1</span> │    <span class="token number">2</span> │
╰───┴──────┴──────╯

</code></pre></div><p>Convert comma-separated data to a table, ignoring headers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--noheaders</span>

</code></pre></div><p>Convert semicolon-separated data to a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--separator</span> <span class="token string">&#39;;&#39;</span>

</code></pre></div><p>Convert comma-separated data to a table, ignoring lines starting with &#39;#&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--comment</span> <span class="token string">&#39;#&#39;</span>

</code></pre></div><p>Convert comma-separated data to a table, dropping all possible whitespaces around header names and field values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--trim</span> all

</code></pre></div><p>Convert comma-separated data to a table, dropping all possible whitespaces around header names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--trim</span> headers

</code></pre></div><p>Convert comma-separated data to a table, dropping all possible whitespaces around field values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--trim</span> fields

</code></pre></div>`,19);function h(e,g){return o(),r("div",null,[a("h1",l,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for formats")]),a("div",i,t(e.$frontmatter.formats),1),m])}const f=n(p,[["render",h],["__file","from_csv.html.vue"]]);export{f as default};
