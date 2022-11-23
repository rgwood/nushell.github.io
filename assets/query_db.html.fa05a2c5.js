import{_ as r,o,c as n,a as e,t,d as s,e as d}from"./app.ef551336.js";const c={},i={id:"frontmatter-title-for-database",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),l=s(),p=s(" for database"),u={class:"command-title"},_=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; query db (SQL)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>SQL</code>: SQL to execute against the database</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Execute SQL against a SQLite database</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.db <span class="token operator">|</span> query db <span class="token string">&quot;SELECT * FROM Bar&quot;</span>
</code></pre></div>`,7);function f(a,m){return o(),n("div",null,[e("h1",i,[h,l,e("code",null,t(a.$frontmatter.title),1),p]),e("div",u,t(a.$frontmatter.database),1),_])}const g=r(c,[["render",f],["__file","query_db.html.vue"]]);export{g as default};
