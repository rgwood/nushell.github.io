import{_ as o,o as i,c as s,a as e,t,d as r,e as d}from"./app.ef551336.js";const l={},n={id:"frontmatter-title-for-dataframe",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),f=r(),h=r(" for dataframe"),m={class:"command-title"},p=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; open-df (file) --lazy --type --delimiter --no-header --infer-schema --skip-rows --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>file</code>: file path to load values from</li><li><code>--lazy</code>: creates a lazy dataframe</li><li><code>--type {string}</code>: File type: csv, tsv, json, parquet, arrow. If omitted, derive from file extension</li><li><code>--delimiter {string}</code>: file delimiter character. CSV file</li><li><code>--no-header</code>: Indicates if file doesn&#39;t have header. CSV file</li><li><code>--infer-schema {number}</code>: Number of rows to infer the schema of the file. CSV file</li><li><code>--skip-rows {number}</code>: Number of rows to skip from file. CSV file</li><li><code>--columns {list&lt;string&gt;}</code>: Columns to be selected from csv file. CSV and Parquet file</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Takes a file name and creates a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> test.csv
</code></pre></div>`,7);function u(a,_){return i(),s("div",null,[e("h1",n,[c,f,e("code",null,t(a.$frontmatter.title),1),h]),e("div",m,t(a.$frontmatter.dataframe),1),p])}const v=o(l,[["render",u],["__file","open-df.html.vue"]]);export{v as default};
