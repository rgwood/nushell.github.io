import{_ as e,o as a,c as o,e as t}from"./app.43db386a.js";const d={},n=t(`<h1 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h1><p>Sometimes, you just need to add a few numbers when you&#39;re working on a task. Nu offers a set of basic math operations that you can use. Math expressions are available wherever you can call a command.</p><h2 id="add-subtract-multiply-divide" tabindex="-1"><a class="header-anchor" href="#add-subtract-multiply-divide" aria-hidden="true">#</a> Add, Subtract, Multiply, Divide</h2><div class="language-text ext-text"><pre class="language-text"><code>&gt; 1 + 3
4
</code></pre></div><p>In Nu, you can do the usual add, subtract, multiply and divide with the operators <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code> respectively. Operator precedence is respected, so <code>1 + 2 * 3</code> will be treated as <code>1 + (2 * 3)</code>. Which leads us to another concept: parentheses.</p><h2 id="parentheses" tabindex="-1"><a class="header-anchor" href="#parentheses" aria-hidden="true">#</a> Parentheses</h2><p>You can use parentheses to group math expression in math mode. This allows you to write <code>(1 + 2) * 3</code> if you want the addition to have higher precedence.</p><h2 id="in-and-not-in" tabindex="-1"><a class="header-anchor" href="#in-and-not-in" aria-hidden="true">#</a> <code>in</code> and <code>not-in</code></h2><p>You can check if a value is in a set of values or not using the <code>in</code> and <code>not-in</code> operators.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; 1 in [1 2 3]
true
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; 1 not-in [1 2 3]
false
</code></pre></div><h2 id="and" tabindex="-1"><a class="header-anchor" href="#and" aria-hidden="true">#</a> =~ and !~</h2><p>You can check to see if a string is inside of another string, or not inside of another string, using <code>=~</code> and <code>!~</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; &quot;foobar&quot; =~ &quot;foo&quot;
true
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; &quot;foobar&quot; !~ &quot;baz&quot;
true
</code></pre></div><h2 id="comparisons" tabindex="-1"><a class="header-anchor" href="#comparisons" aria-hidden="true">#</a> Comparisons</h2><p>The following comparisons are also available:</p><ul><li><code>&lt;</code> - less than</li><li><code>&lt;=</code> - less than or equal to</li><li><code>&gt;</code> - greater than</li><li><code>&gt;=</code> - greater than or equal to</li><li><code>==</code> - equal to</li><li><code>!=</code> - not equal to</li></ul><h2 id="compound-operators" tabindex="-1"><a class="header-anchor" href="#compound-operators" aria-hidden="true">#</a> Compound operators</h2><p>Nushell also supports <code>&amp;&amp;</code> and <code>||</code> to join two operations that return boolean values, using &#39;and&#39; and &#39;or&#39; respectively. For example: <code>ls | where name in [&quot;one&quot; &quot;two&quot; &quot;three&quot;] &amp;&amp; size &gt; 10kb</code></p><h2 id="order-of-operations" tabindex="-1"><a class="header-anchor" href="#order-of-operations" aria-hidden="true">#</a> Order of operations</h2><p>Math operations are evaluated in the follow order (from highest precedence to lowest):</p><ul><li>Parentheses (<code>()</code>)</li><li>Multiply (<code>*</code>) and Divide (<code>/</code>)</li><li>Add (<code>+</code>) and Subtract (<code>-</code>)</li></ul><div class="language-text ext-text"><pre class="language-text"><code>&gt; 3 * (1 + 2)
9
</code></pre></div><h2 id="short-hand-math-mode" tabindex="-1"><a class="header-anchor" href="#short-hand-math-mode" aria-hidden="true">#</a> Short-hand math mode</h2><p>A variation of math mode that Nushell supports is called &quot;short-hand&quot; math mode. This is because it gives you a way of accessing columns using a simple short-hand.</p><p>You may have already used this functionality before. If, for example, we wanted to only see rows from <code>ls</code> where the entry is at least ten kilobytes, we can write:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | where size &gt; 10kb
</code></pre></div><p>The <code>where size &gt; 10kb</code> is a command with two parts: the command name <code>where</code> and the short-hand math expression <code>size &gt; 10kb</code>. We say short-hand because <code>size</code> here is the shortened version of writing <code>$it.size</code>. If we look at the fully expanded form, we would see:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | where {|$it| $it.size &gt; 10kb }
</code></pre></div><p>Rather than having to type all this out every time a command needs to work with column data, we use this short-hand mode to access column data.</p><p>For the expansion to work, the column name must appear on the left-hand side of the operation. Above, <code>size</code> appears on the left-hand side of the comparison, which allows the expression to expand into the full math mode block.</p>`,32),s=[n];function r(i,c){return a(),o("div",null,s)}var l=e(d,[["render",r],["__file","math.html.vue"]]);export{l as default};
