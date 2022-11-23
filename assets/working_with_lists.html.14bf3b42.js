import{_ as p,r as c,o as l,c as i,a,b as e,w as t,e as o,d as s}from"./app.ef551336.js";const r={},d=o(`<h1 id="working-with-lists" tabindex="-1"><a class="header-anchor" href="#working-with-lists" aria-hidden="true">#</a> Working with lists</h1><h2 id="creating-lists" tabindex="-1"><a class="header-anchor" href="#creating-lists" aria-hidden="true">#</a> Creating lists</h2><p>A list is an ordered collection of values. You can create a <code>list</code> with square brackets, surrounded values separated by spaces and/or commas (for readability). For example, <code>[foo bar baz]</code> or <code>[foo, bar, baz]</code>.</p><h2 id="updating-lists" tabindex="-1"><a class="header-anchor" href="#updating-lists" aria-hidden="true">#</a> Updating lists</h2><p>You can <code>update</code> and <code>insert</code> values into lists as they flow through the pipeline, for example let&#39;s insert the value <code>10</code> into the middle of a list:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [1, 2, 3, 4] | insert 2 10
</code></pre></div><p>We can also use <code>update</code> to replace the 2nd element with the value <code>10</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [1, 2, 3, 4] | update 1 10
</code></pre></div><p>In addition to <code>insert</code> and <code>update</code>, we also have <code>prepend</code> and <code>append</code>. These let you insert to the beginning of a list or at the end of the list, respectively.</p><p>For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>yellow green<span class="token punctuation">]</span>
<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$colors</span> <span class="token operator">|</span> prepend red<span class="token punctuation">)</span>
<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$colors</span> <span class="token operator">|</span> append purple<span class="token punctuation">)</span>
<span class="token variable">$colors</span> <span class="token comment"># [red yellow green purple]</span>
</code></pre></div><h2 id="iterating-over-lists" tabindex="-1"><a class="header-anchor" href="#iterating-over-lists" aria-hidden="true">#</a> Iterating over lists</h2>`,12),u=s("To iterate over the items in a list, use the "),k=a("code",null,"each",-1),m=s(" command with a "),h=s("block"),b=s(" of Nu code that specifies what to do to each item. The block parameter (e.g. "),g=a("code",null,"|it|",-1),_=s(" in "),v=a("code",null,"{ |it| print $it }",-1),f=s(") is normally the current list item, but the "),$=a("code",null,"--numbered",-1),x=s(" ("),w=a("code",null,"-n",-1),y=s(") flag can change it to have "),T=a("code",null,"index",-1),q=s(" and "),A=a("code",null,"item",-1),F=s(" values if needed. For example:"),I=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token variable">$names</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> $<span class="token string">&quot;Hello, (<span class="token variable">$it</span>)!&quot;</span> <span class="token punctuation">}</span>
<span class="token comment"># Outputs &quot;Hello, Mark!&quot; and three more similar lines.</span>

<span class="token variable">$names</span> <span class="token operator">|</span> each <span class="token parameter variable">-n</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> $<span class="token string">&quot;(<span class="token variable">$it</span>.index + 1) - (<span class="token variable">$it</span>.item)&quot;</span> <span class="token punctuation">}</span>
<span class="token comment"># Outputs &quot;1 - Mark&quot;, &quot;2 - Tami&quot;, etc.</span>
</code></pre></div>`,1),M=s("The "),z=a("code",null,"where",-1),C=s(" command can be used to create a subset of a list, effectively filtering the list based on a condition."),N=o(`<p>The following example gets all the colors whose names end in &quot;e&quot;.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red orange yellow green blue purple<span class="token punctuation">]</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># The block passed to \`where\` must evaluate to a boolean.</span>
<span class="token comment"># This outputs the list [orange blue purple].</span>
</code></pre></div><p>In this example, we keep only values higher than <code>7</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span> <span class="token number">10</span> <span class="token number">8</span> <span class="token number">6</span> <span class="token number">7</span><span class="token punctuation">]</span>
<span class="token variable">$scores</span> <span class="token operator">|</span> where <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># [10 8]</span>
</code></pre></div>`,4),E=s("The "),V=a("code",null,"reduce",-1),Y=o(" command computes a single value from a list. It uses a block which takes 2 parameters: the current item (conventionally named <code>it</code>) and an accumulator (conventionally named <code>acc</code>). To specify an initial value for the accumulator, use the <code>--fold</code> (<code>-f</code>) flag. To change <code>it</code> to have <code>index</code> and <code>item</code> values, add the <code>--numbered</code> (<code>-n</code>) flag. For example:",19),B=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">8</span> <span class="token number">4</span><span class="token punctuation">]</span>
$<span class="token string">&quot;total = (<span class="token variable">$scores</span> | reduce { |it, acc| <span class="token variable">$acc</span> + <span class="token variable">$it</span> })&quot;</span> <span class="token comment"># total = 15</span>

$<span class="token string">&quot;total = (<span class="token variable">$scores</span> | math sum)&quot;</span> <span class="token comment"># easier approach, same result</span>

$<span class="token string">&quot;product = (<span class="token variable">$scores</span> | reduce --fold 1 { |it, acc| <span class="token variable">$acc</span> * <span class="token variable">$it</span> })&quot;</span> <span class="token comment"># total = 96</span>

<span class="token variable">$scores</span> <span class="token operator">|</span> reduce <span class="token parameter variable">-n</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span>.item + <span class="token variable">$it</span>.index * <span class="token variable">$it</span>.item <span class="token punctuation">}</span> <span class="token comment"># 3 + 1*8 + 2*4 = 19</span>
</code></pre></div><h2 id="accessing-the-list" tabindex="-1"><a class="header-anchor" href="#accessing-the-list" aria-hidden="true">#</a> Accessing the list</h2><p>To access a list item at a given index, use the <code>$name.index</code> form where <code>$name</code> is a variable that holds a list.</p><p>For example, the second element in the list below can be accessed with <code>$names.1</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token variable">$names</span>.1 <span class="token comment"># gives Tami</span>
</code></pre></div><p>If the index is in some variable <code>$index</code> we can use the <code>get</code> command to extract the item from the list.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token builtin class-name">let</span> index <span class="token operator">=</span> <span class="token number">1</span>
<span class="token variable">$names</span> <span class="token operator">|</span> get <span class="token variable">$index</span> <span class="token comment"># gives Tami</span>
</code></pre></div>`,7),H=s("The "),J=a("code",null,"length",-1),D=s(" command returns the number of items in a list. For example, "),L=a("code",null,"[red green blue] | length",-1),O=s(" outputs "),R=a("code",null,"3",-1),S=s("."),U=s("The "),W=a("code",null,"is-empty",-1),Z=s(" command determines whether a string, list, or table is empty. It can be used with lists as follows:"),j=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red green blue<span class="token punctuation">]</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> is-empty <span class="token comment"># false</span>

<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> is-empty <span class="token comment"># true</span>
</code></pre></div><p>The <code>in</code> and <code>not-in</code> operators are used to test whether a value is in a list. For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red green blue<span class="token punctuation">]</span>
<span class="token string">&#39;blue&#39;</span> <span class="token keyword">in</span> <span class="token variable">$colors</span> <span class="token comment"># true</span>
<span class="token string">&#39;yellow&#39;</span> <span class="token keyword">in</span> <span class="token variable">$colors</span> <span class="token comment"># false</span>
<span class="token string">&#39;gold&#39;</span> not-in <span class="token variable">$colors</span> <span class="token comment"># true</span>
</code></pre></div>`,3),G=s("The "),K=a("code",null,"any",-1),P=s(" command determines if any item in a list matches a given condition. For example:"),Q=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Do any color names end with &quot;e&quot;?</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> any <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span> <span class="token comment"># true</span>

<span class="token comment"># Is the length of any color name less than 3?</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> any <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token comment"># false</span>

<span class="token comment"># Are any scores greater than 7?</span>
<span class="token variable">$scores</span> <span class="token operator">|</span> any <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># true</span>

<span class="token comment"># Are any scores odd?</span>
<span class="token variable">$scores</span> <span class="token operator">|</span> any <span class="token variable">$it</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment"># true</span>
</code></pre></div>`,1),X=s("The "),ss=a("code",null,"all",-1),as=s(" command determines if every item in a list matches a given condition. For example:"),ns=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Do all color names end with &quot;e&quot;?</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> all <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span> <span class="token comment"># false</span>

<span class="token comment"># Is the length of all color names greater than or equal to 3?</span>
<span class="token variable">$colors</span> <span class="token operator">|</span> all <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">3</span> <span class="token comment"># true</span>

<span class="token comment"># Are all scores greater than 7?</span>
<span class="token variable">$scores</span> <span class="token operator">|</span> all <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># false</span>

<span class="token comment"># Are all scores even?</span>
<span class="token variable">$scores</span> <span class="token operator">|</span> all <span class="token variable">$it</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment"># false</span>
</code></pre></div><h2 id="converting-the-list" tabindex="-1"><a class="header-anchor" href="#converting-the-list" aria-hidden="true">#</a> Converting the list</h2>`,2),es=s("The "),ts=a("code",null,"flatten",-1),os=s(" command creates a new list from an existing list by adding items in nested lists to the top-level list. This can be called multiple times to flatten lists nested at any depth. For example:"),ps=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">4</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token comment"># [1 2 3 4 5 6]</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token operator">|</span> flatten <span class="token operator">|</span> flatten <span class="token comment"># [1 2 3 4 5 6 7 8]</span>
</code></pre></div>`,1),cs=s("The "),ls=a("code",null,"wrap",-1),is=s(" command converts a list to a table. Each list value will be converted to a separate row with a single column:"),rs=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> zones <span class="token operator">=</span> <span class="token punctuation">[</span>UTC CET Europe/Moscow Asia/Yekaterinburg<span class="token punctuation">]</span>

<span class="token comment"># Show world clock for selected time zones</span>
<span class="token variable">$zones</span> <span class="token operator">|</span> wrap <span class="token string">&#39;Zone&#39;</span> <span class="token operator">|</span> upsert Time <span class="token punctuation">{</span><span class="token operator">|</span>it<span class="token operator">|</span> <span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> to-timezone <span class="token variable">$it</span>.Zone <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y.%m.%d %H:%M&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre></div>`,1);function ds(us,ks){const n=c("RouterLink");return l(),i("div",null,[d,a("p",null,[u,e(n,{to:"/book/commands/each.html"},{default:t(()=>[k]),_:1}),m,e(n,{to:"/book/types_of_data.html#blocks"},{default:t(()=>[h]),_:1}),b,g,_,v,f,$,x,w,y,T,q,A,F]),I,a("p",null,[M,e(n,{to:"/book/commands/where.html"},{default:t(()=>[z]),_:1}),C]),N,a("p",null,[E,e(n,{to:"/book/commands/reduce.html"},{default:t(()=>[V]),_:1}),Y]),B,a("p",null,[H,e(n,{to:"/book/commands/length.html"},{default:t(()=>[J]),_:1}),D,L,O,R,S]),a("p",null,[U,e(n,{to:"/book/commands/is-empty.html"},{default:t(()=>[W]),_:1}),Z]),j,a("p",null,[G,e(n,{to:"/book/commands/any.html"},{default:t(()=>[K]),_:1}),P]),Q,a("p",null,[X,e(n,{to:"/book/commands/all.html"},{default:t(()=>[ss]),_:1}),as]),ns,a("p",null,[es,e(n,{to:"/book/commands/flatten.html"},{default:t(()=>[ts]),_:1}),os]),ps,a("p",null,[cs,e(n,{to:"/book/commands/wrap.html"},{default:t(()=>[ls]),_:1}),is]),rs])}const hs=p(r,[["render",ds],["__file","working_with_lists.html.vue"]]);export{hs as default};
