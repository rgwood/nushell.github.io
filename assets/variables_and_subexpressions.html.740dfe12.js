import{_ as i,r as l,o as r,c as d,a as e,b as a,w as n,e as o,d as s}from"./app.43db386a.js";const h={},c=o(`<h1 id="variables-and-subexpressions" tabindex="-1"><a class="header-anchor" href="#variables-and-subexpressions" aria-hidden="true">#</a> Variables and Subexpressions</h1><p>There are two types of evaluation expressions in Nushell: variables and subexpressions. You know that you&#39;re looking at an evaluation expression because it begins with a dollar sign (<code>$</code>). This indicates that when Nushell gets the value in this position, it will need to run an evaluation step to process the expression and then use the resulting value. Both evaluation expression forms support a simple form and a &#39;path&#39; form for working with more complex data.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>The simpler of the two evaluation expressions is the variable. During evaluation, a variable is replaced by its value.</p><p>If we create a variable, we can print its contents by using <code>$</code> to refer to it:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my-value = 4
&gt; echo $my-value
4
</code></pre></div><p>Variables in Nushell are immutable, that means that you can not change its value after declaration. They can be shadowed in nested block, that results in:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my-value = 4
&gt; do { let my-value = 5; echo $my-value }
5
&gt; echo $my-value
4
</code></pre></div><h2 id="variable-paths" tabindex="-1"><a class="header-anchor" href="#variable-paths" aria-hidden="true">#</a> Variable paths</h2><p>A variable path works by reaching inside of the contents of a variable, navigating columns inside of it, to reach a final value. Let&#39;s say instead of <code>4</code>, we had assigned a table value:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my-value = [[name]; [testuser]]
</code></pre></div><p>We can use a variable path to evaluate the variable <code>$my-value</code> and get the value from the <code>name</code> column in a single step:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $my-value.name
testuser
</code></pre></div><h2 id="subexpressions" tabindex="-1"><a class="header-anchor" href="#subexpressions" aria-hidden="true">#</a> Subexpressions</h2><p>You can always evaluate a subexpression and use its result by wrapping the expression with parentheses <code>()</code>. Note that previous versions of Nushell (prior to 0.32) used <code>$()</code>.</p>`,15),u=s("The parentheses contain a pipeline that will run to completion, and the resulting value will then be used. For example, "),p=e("code",null,"(ls)",-1),g=s(" would run the "),b=e("code",null,"ls",-1),x=s(" command and give back the resulting table and "),m=e("code",null,"(git branch --show-current)",-1),_=s(" runs the external git command and returns a string with the name of the current branch. You can also use parentheses to run math expressions like "),v=e("code",null,"(2 + 3)",-1),f=s("."),w=o(`<p>Subexpressions can also be pipelines and not just single commands. If we wanted to get a list of filenames larger than ten kilobytes, we can use an subexpression to run a pipeline and assign this to a variable:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let names-of-big-files = (ls | where size &gt; 10kb)
&gt; echo $names-of-big-files
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502    name    \u2502 type \u2502   size   \u2502   modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Cargo.lock \u2502 File \u2502 155.3 KB \u2502 17 hours ago
 1 \u2502 README.md  \u2502 File \u2502  15.9 KB \u2502 17 hours ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="subexpressions-and-paths" tabindex="-1"><a class="header-anchor" href="#subexpressions-and-paths" aria-hidden="true">#</a> Subexpressions and paths</h2><p>Subexpressions also support paths. For example, let&#39;s say we wanted to get a list of the filenames in the current directory. One way to do this is to use a pipeline:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name
</code></pre></div><p>We can do a very similar action in a single step using a subexpression path:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo (ls).name
</code></pre></div><p>It depends on the needs of the code and your particular style which form works best for you.</p><h2 id="short-hand-subexpressions-row-conditions" tabindex="-1"><a class="header-anchor" href="#short-hand-subexpressions-row-conditions" aria-hidden="true">#</a> Short-hand subexpressions (row conditions)</h2>`,9),y=s("Nushell supports accessing columns in a subexpression using a simple short-hand. You may have already used this functionality before. If, for example, we wanted to only see rows from "),k=e("code",null,"ls",-1),$=s(" where the entry is at least ten kilobytes we can write:"),z=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | where size > 10kb
`)])],-1),N=s("The "),T=e("code",null,"where size > 10kb",-1),V=s(" is a command with two parts: the command name "),S=e("code",null,"where",-1),B=s(" and the short-hand expression "),F=e("code",null,"size > 10kb",-1),I=s(". We say short-hand because "),Y=e("code",null,"size",-1),C=s(" here is the shortened version of writing "),E=e("code",null,"$it.size",-1),L=s(". This could also be written in any of the following ways:"),R=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | where $it.size > 10kb
> ls | where ($it.size > 10kb)
> ls | where {|$it| $it.size > 10kb }
`)])],-1),W=e("p",null,[s("For short-hand syntax to work, the column name must appear on the left-hand side of the operation (like "),e("code",null,"size"),s(" in "),e("code",null,"size > 10kb"),s(").")],-1);function A(D,K){const t=l("RouterLink");return r(),d("div",null,[c,e("p",null,[u,p,g,a(t,{to:"/book/commands/ls.html"},{default:n(()=>[b]),_:1}),x,m,_,v,f]),w,e("p",null,[y,a(t,{to:"/book/commands/ls.html"},{default:n(()=>[k]),_:1}),$]),z,e("p",null,[N,T,V,a(t,{to:"/book/commands/where.html"},{default:n(()=>[S]),_:1}),B,F,I,Y,C,E,L]),R,W])}var M=i(h,[["render",A],["__file","variables_and_subexpressions.html.vue"]]);export{M as default};
