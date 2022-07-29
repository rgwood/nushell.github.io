import{_ as l,o as c,c as r,a as s,b as a,w as o,e as t,d as e,r as d}from"./app.f96f0b62.js";const p={},i=t(`<h1 id="\u5904\u7406\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5904\u7406\u5B57\u7B26\u4E32</h1><p>Nushell \u4E2D\u7684\u5B57\u7B26\u4E32\u7528\u4E8E\u4FDD\u5B58\u6587\u672C\u6570\u636E\u4EE5\u4FBF\u540E\u7EED\u4F7F\u7528\uFF0C\u5176\u4E2D\u53EF\u4EE5\u5305\u62EC\u6587\u4EF6\u540D\u3001\u6587\u4EF6\u8DEF\u5F84\u3001\u5217\u540D\u4EE5\u53CA\u66F4\u591A\u3002\u5B57\u7B26\u4E32\u662F\u5982\u6B64\u5730\u666E\u904D\uFF0C\u4EE5\u81F3\u4E8E Nushell \u63D0\u4F9B\u4E86\u51E0\u79CD\u5904\u7406\u5B83\u4EEC\u7684\u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u4ECE\u4E2D\u9009\u62E9\u6700\u5408\u9002\u7684\u3002</p><h2 id="\u5355\u5F15\u53F7\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5355\u5F15\u53F7\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5355\u5F15\u53F7\u5B57\u7B26\u4E32</h2><p>Nushell \u4E2D\u6700\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u662F\u5355\u5F15\u53F7\u5B57\u7B26\u4E32\u3002\u8FD9\u79CD\u5B57\u7B26\u4E32\u4F7F\u7528<code>&#39;</code>\u5B57\u7B26\u6765\u5305\u88F9\u6587\u672C\u3002\u4E0B\u9762\u662F\u4F5C\u4E3A\u5355\u5F15\u53F7\u5B57\u7B26\u4E32\u7684<code>hello world</code>\u793A\u4F8B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello world&#39;</span>
hello world
</code></pre></div><p>\u5355\u5F15\u53F7\u5B57\u7B26\u4E32\u4E0D\u4F1A\u5BF9\u5B83\u4EEC\u6240\u7ED9\u4E88\u7684\u6587\u672C\u505A\u4EFB\u4F55\u4E8B\u60C5\uFF0C\u8FD9\u4F7F\u5F97\u5B83\u4EEC\u6210\u4E3A\u5BB9\u7EB3\u5E7F\u6CDB\u6587\u672C\u6570\u636E\u7684\u7406\u60F3\u9009\u62E9\u3002</p><h2 id="\u53CC\u5F15\u53F7\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5F15\u53F7\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u53CC\u5F15\u53F7\u5B57\u7B26\u4E32</h2><p>\u5BF9\u4E8E\u66F4\u590D\u6742\u7684\u5B57\u7B26\u4E32\uFF0CNushell \u4E5F\u63D0\u4F9B\u53CC\u5F15\u53F7\u5B57\u7B26\u4E32\u3002\u8FD9\u4E9B\u5B57\u7B26\u4E32\u4F7F\u7528<code>&quot;</code>\u5B57\u7B26\u6765\u5305\u88F9\u6587\u672C\u3002\u5B83\u4EEC\u8FD8\u652F\u6301\u4F7F\u7528<code>\\</code>\u5B57\u7B26\u5728\u6587\u672C\u4E2D\u8F6C\u4E49\u3002</p><p>\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u8F6C\u4E49\u5B57\u7B26\u548C\u53CC\u5F15\u53F7\u5B57\u7B26\u4E32\u5199\u51FA\u6587\u5B57 hello\uFF0C\u7136\u540E\u6362\u884C\uFF0C\u518D\u5199\u4E0A world\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;hello<span class="token entity" title="\\n">\\n</span>world&quot;</span>
hello
world
</code></pre></div><p>\u8F6C\u4E49\u5B57\u7B26\u8BA9\u4F60\u5FEB\u901F\u6DFB\u52A0\u4E00\u4E2A\u975E\u6B64\u96BE\u4EE5\u8F93\u5165\u7684\u5B57\u7B26\u3002</p><p>Nushell \u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8F6C\u4E49\u5B57\u7B26\uFF1A</p><ul><li><code>\\&quot;</code> - \u53CC\u5F15\u53F7</li><li><code>\\&#39;</code> - \u5355\u5F15\u53F7</li><li><code>\\\\</code> - \u53CD\u659C\u6760</li><li><code>\\/</code> - \u659C\u6760</li><li><code>\\b</code> - \u9000\u683C\u5B57\u7B26</li><li><code>\\f</code> - \u6362\u9875\u7B26</li><li><code>\\r</code> - \u56DE\u8F66\u7B26</li><li><code>\\n</code> - \u6362\u884C\u7B26 (line feed)</li><li><code>\\t</code> - \u5236\u8868\u7B26</li><li><code>\\uXXXX</code> - Unicode \u5B57\u7B26 (\u7528 Unicode \u5B57\u7B26\u7684\u7F16\u53F7\u66FF\u6362 XXXX)</li></ul><h2 id="\u5B57\u7B26\u4E32\u63D2\u503C" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u63D2\u503C" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u63D2\u503C</h2><p>\u66F4\u590D\u6742\u7684\u5B57\u7B26\u4E32\u7528\u4F8B\u8FD8\u9700\u8981\u4E00\u79CD\u65B0\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF1A\u5B57\u7B26\u4E32\u63D2\u503C\u3002\u8FD9\u662F\u4E00\u79CD\u4ECE\u539F\u59CB\u6587\u672C\u548C\u6267\u884C\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u4E2D\u6784\u5EFA\u6587\u672C\u7684\u65B9\u6CD5\u3002\u5B57\u7B26\u4E32\u63D2\u503C\u5C06\u8FD9\u4E9B\u7ED3\u679C\u7ED3\u5408\u5728\u4E00\u8D77\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u5B57\u7B26\u4E32\u63D2\u503C\u4F7F\u7528 <code>$&quot; &quot;</code> \u548C <code>$&#39; &#39;</code> \u4F5C\u4E3A\u5305\u88F9\u63D2\u503C\u6587\u672C\u7684\u65B9\u5F0F\u3002</p><p>\u4F8B\u5982\uFF0C\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u53EB\u505A<code>$name</code>\u7684\u53D8\u91CF\uFF0C\u6211\u4EEC\u60F3\u95EE\u5019\u8FD9\u4E2A\u53D8\u91CF\u4E2D\u6240\u5305\u542B\u7684\u4EBA\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span>
<span class="token operator">&gt;</span> $<span class="token string">&quot;greetings, (<span class="token variable">$name</span>)&quot;</span>
greetings, Alice
</code></pre></div><p>\u901A\u8FC7\u4F7F\u7528<code>()</code>\u5305\u88F9\u8868\u8FBE\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD0\u884C\u5B83\u4EEC\u5E76\u4F7F\u7528\u7ED3\u679C\u6765\u5E2E\u52A9\u751F\u6210\u5B57\u7B26\u4E32\u3002</p><p>\u5B57\u7B26\u4E32\u63D2\u503C\u6709\u5355\u5F15\u53F7\uFF1A<code>$&#39; &#39;</code> \u548C\u53CC\u5F15\u53F7\uFF1A<code>$&quot; &quot;</code> \u8FD9\u4E24\u79CD\u5F62\u5F0F\uFF0C\u5206\u522B\u5BF9\u5E94\u4E8E\u5355\u5F15\u53F7\u548C\u53CC\u5F15\u53F7\u5B57\u7B26\u4E32 \u2014\u2014 \u5355\u5F15\u53F7\u5B57\u7B26\u4E32\u63D2\u503C\u4E0D\u652F\u6301\u8F6C\u4E49\u5B57\u7B26\uFF0C\u800C\u53CC\u5F15\u53F7\u5B57\u7B26\u4E32\u63D2\u503C\u652F\u6301\u3002</p><p>\u4ECE 0.61 \u7248\u5F00\u59CB\uFF0C\u5B57\u7B26\u4E32\u63D2\u503C\u652F\u6301\u8F6C\u4E49\u5C0F\u62EC\u53F7\uFF0C\u6240\u4EE5<code>(</code>\u548C<code>)</code>\u5B57\u7B26\u53EF\u4EE5\u5728\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528\uFF0C\u800C Nushell \u4E0D\u4F1A\u8BD5\u56FE\u8BA1\u7B97\u5B83\u4EEC\u4E4B\u95F4\u51FA\u73B0\u7684\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> $<span class="token string">&quot;2 + 2 is (2 + 2) \\(you guessed it!)&quot;</span>
<span class="token number">2</span> + <span class="token number">2</span> is <span class="token number">4</span> <span class="token punctuation">(</span>you guessed it<span class="token operator">!</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5206\u5272\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5206\u5272\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5206\u5272\u5B57\u7B26\u4E32</h2>`,23),h=s("code",null,"split row",-1),u=e("\u547D\u4EE4\u4ECE\u4E00\u4E2A\u57FA\u4E8E\u5206\u9694\u7B26\u7684\u5B57\u7B26\u4E32\u521B\u5EFA\u4E00\u4E2A\u5217\u8868\u3002 \u4F8B\u5982\uFF0C"),_=s("code",null,'let colors = ("red,green,blue" | split row ",")',-1),g=e(" \u521B\u5EFA\u5217\u8868"),k=s("code",null,"[red green blue]",-1),b=e("\u3002"),m=s("code",null,"split column",-1),f=e("\u547D\u4EE4\u5C06\u4ECE\u4E00\u4E2A\u57FA\u4E8E\u5206\u9694\u7B26\u7684\u5B57\u7B26\u4E32\u4E2D\u521B\u5EFA\u4E00\u4E2A\u8868\u3002\u4F8B\u5982\uFF0C"),x=s("code",null,'let colors = ("red,green,blue" | split column ",")',-1),v=e(" \u521B\u5EFA\u4E00\u4E2A\u8868\u683C\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u5143\u7D20\u6DFB\u52A0\u4E00\u5217\u3002"),w=e("\u6700\u540E, "),q=s("code",null,"split chars",-1),N=e("\u547D\u4EE4\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u5206\u5272\u6210\u4E00\u4E2A\u5B57\u7B26\u5217\u8868\u3002"),y=t(`<h2 id="str-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#str-\u547D\u4EE4" aria-hidden="true">#</a> <code>str</code> \u547D\u4EE4</h2><p>\u8BB8\u591A\u5B57\u7B26\u4E32\u51FD\u6570\u662F<code>str</code>\u547D\u4EE4\u7684\u5B50\u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528<code>help str</code>\u6765\u83B7\u5F97\u4E00\u4E2A\u5B8C\u6574\u7684 <code>str</code> \u547D\u4EE4\u5217\u8868\u3002</p><p>\u4F8B\u5982, \u4F60\u53EF\u4EE5\u4F7F\u7528<code>str contains</code>\u6765\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u67D0\u4E2A\u7279\u5B9A\u7684\u5B57\u7B26\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">|</span> str contains <span class="token string">&quot;w&quot;</span>
<span class="token boolean">true</span>
</code></pre></div><h3 id="\u4FEE\u526A\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u526A\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u4FEE\u526A\u5B57\u7B26\u4E32</h3>`,5),$=e("\u4F60\u53EF\u4EE5\u7528 "),X=s("code",null,"str trim",-1),B=e(" \u547D\u4EE4\u4FEE\u526A\u5B57\u7B26\u4E32\u7684\u4E24\u4FA7\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C"),V=s("code",null,"str trim",-1),W=e(" \u547D\u4EE4\u4F1A\u4FEE\u526A\u5B57\u7B26\u4E32\u4E24\u8FB9\u7684\u7A7A\u767D\u3002\u6BD4\u5982\uFF1A"),C=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;       My   string   &#39;</span> <span class="token operator">|</span> str trim
My   string
</code></pre></div><p>\u4F60\u53EF\u4EE5\u7528 <code>--right</code> \u548C <code>--left</code> \u9009\u9879\u6765\u6307\u5B9A\u5BF9\u54EA\u4E00\u8FB9\u8FDB\u884C\u4FEE\u526A\u3002</p><p>\u8981\u4FEE\u526A\u4E00\u4E2A\u7279\u5B9A\u7684\u5B57\u7B26\uFF0C\u4F7F\u7528 <code>--char &lt;Character&gt;</code> \u6765\u6307\u5B9A\u8981\u4FEE\u526A\u7684\u5B57\u7B26\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F20\u5165\u4E86\u6240\u6709\u9009\u9879\u7684\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim -r -c <span class="token string">&#39;=&#39;</span>
<span class="token operator">==</span><span class="token operator">=</span> Nu shell
</code></pre></div><h3 id="\u5B50\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B50\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B50\u5B57\u7B26\u4E32</h3><p>\u5B50\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5207\u7247\uFF0C\u5B83\u4EEC\u6709\u8D77\u59CB\u70B9\u548C\u7ED3\u675F\u70B9\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528\u5B50\u4E32\u7684\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;o&#39;</span>
<span class="token number">4</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;r&#39;</span>
<span class="token number">8</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;4,8&#39;</span>
o Wo
</code></pre></div><h3 id="\u5B57\u7B26\u4E32\u586B\u5145" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u586B\u5145" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u586B\u5145</h3>`,9),H=e("\u4F7F\u7528 "),A=s("code",null,"str lpad",-1),L=e(" \u548C "),M=s("code",null,"str rpad",-1),P=e(" \u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u7ED9\u5B57\u7B26\u4E32\u6DFB\u52A0\u586B\u5145\u3002\u586B\u5145\u4F1A\u7ED9\u5B57\u7B26\u4E32\u6DFB\u52A0\u5B57\u7B26\uFF0C\u76F4\u5230\u5B83\u8FBE\u5230\u4E00\u5B9A\u7684\u957F\u5EA6\u3002\u6BD4\u5982\uFF1A"),R=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">10</span> -c <span class="token string">&#39;0&#39;</span>
0000001234
<span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> str rpad -l <span class="token number">10</span> -c <span class="token string">&#39;0&#39;</span> <span class="token operator">|</span> str length
<span class="token number">10</span>
</code></pre></div><h3 id="\u53CD\u8F6C\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u53CD\u8F6C\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u53CD\u8F6C\u5B57\u7B26\u4E32</h3>`,2),T=e("\u53CD\u8F6C\u5B57\u7B26\u4E32\u53EF\u4EE5\u901A\u8FC7 "),U=s("code",null,"str reverse",-1),E=e(" \u547D\u4EE4\u8F7B\u677E\u5B8C\u6210\uFF1A"),S=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell&#39;</span> <span class="token operator">|</span> str reverse
llehsuN
<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;Nushell&#39;</span> <span class="token string">&#39;is&#39;</span> <span class="token string">&#39;cool&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str reverse
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 llehsuN \u2502
\u2502 <span class="token number">1</span> \u2502 si      \u2502
\u2502 <span class="token number">2</span> \u2502 looc    \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="\u89E3\u6790\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u89E3\u6790\u5B57\u7B26\u4E32</h2>`,2),j=e("\u901A\u8FC7 "),z=s("code",null,"parse",-1),D=e(" \u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u89E3\u6790\u6210\u82E5\u5E72\u5217\u3002\u6BD4\u5982\uFF1A"),F=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell is the best&#39;</span> <span class="token operator">|</span> parse <span class="token string">&#39;{shell} is {type}&#39;</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502  shell  \u2502   type   \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Nushell \u2502 the best \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
<span class="token operator">&gt;</span> <span class="token string">&#39;Bash is kinda cringe&#39;</span> <span class="token operator">|</span> parse --regex <span class="token string">&#39;(?P&lt;shell&gt;\\w+) is (?P&lt;type&gt;[\\w\\s]+)&#39;</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 shell \u2502     type     \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Bash  \u2502 kinda cringe \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="\u5B57\u7B26\u4E32\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u8F6C\u6362" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u8F6C\u6362</h2><p>\u6709\u591A\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5176\u4ED6\u7C7B\u578B\u6216\u8005\u53CD\u4E4B\u3002</p><h3 id="\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</h3>`,4),G=e("\u4F7F\u7528 "),I=s("code",null,"into string",-1),J=e("\u3002\u4F8B\u5982\uFF1A"),K=s("code",null,"123 | into string",-1),O=s("li",null,[e("\u901A\u8FC7\u5B57\u7B26\u4E32\u63D2\u503C\u3002\u4F8B\u5982\uFF1A"),s("code",null,"$'(123)'")],-1),Q=e("\u4F7F\u7528 "),Y=s("code",null,"build-string",-1),Z=e("\u3002\u4F8B\u5982\uFF1A"),ss=s("code",null,"build-string (123)",-1),es=s("h3",{id:"\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5176\u4ED6\u7C7B\u578B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5176\u4ED6\u7C7B\u578B","aria-hidden":"true"},"#"),e(" \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5176\u4ED6\u7C7B\u578B")],-1),ns=e("\u4F7F\u7528 "),as=s("code",null,"into <type>",-1),os=e("\u3002\u4F8B\u5982\uFF1A"),ts=s("code",null,"'123' | into int",-1),ls=s("h2",{id:"\u5B57\u7B26\u4E32\u7740\u8272",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5B57\u7B26\u4E32\u7740\u8272","aria-hidden":"true"},"#"),e(" \u5B57\u7B26\u4E32\u7740\u8272")],-1),cs=e("\u4F60\u53EF\u4EE5\u901A\u8FC7 "),rs=s("code",null,"ansi",-1),ds=e(" \u547D\u4EE4\u7ED9\u5B57\u7B26\u4E32\u7740\u8272\u3002\u4F8B\u5982\uFF1A"),ps=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">$&#39;(ansi purple_bold)This text is a bold purple!(ansi reset)&#39;</span>
</code></pre></div><p><code>ansi purple_bold</code> \u4F7F\u6587\u672C\u7D2B\u8272\u52A0\u7C97</p><p><code>ansi reset</code> \u5C06\u7740\u8272\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C\u3002(\u63D0\u793A: \u4F60\u5E94\u8BE5\u603B\u662F\u7528 <code>ansi reset</code> \u6765\u7ED3\u675F\u7740\u8272\u7684\u5B57\u7B26\u4E32)</p>`,3);function is(hs,us){const n=d("RouterLink");return c(),r("div",null,[i,s("p",null,[a(n,{to:"/book/commands/split_row.html"},{default:o(()=>[h]),_:1}),u,_,g,k,b]),s("p",null,[a(n,{to:"/book/commands/split_column.html"},{default:o(()=>[m]),_:1}),f,x,v]),s("p",null,[w,a(n,{to:"/book/commands/split_chars.html"},{default:o(()=>[q]),_:1}),N]),y,s("p",null,[$,a(n,{to:"/book/commands/str_trim.html"},{default:o(()=>[X]),_:1}),B,a(n,{to:"/book/commands/str_trim.html"},{default:o(()=>[V]),_:1}),W]),C,s("p",null,[H,a(n,{to:"/book/commands/str_lpad.html"},{default:o(()=>[A]),_:1}),L,a(n,{to:"/book/commands/str_rpad.html"},{default:o(()=>[M]),_:1}),P]),R,s("p",null,[T,a(n,{to:"/book/commands/str_reverse.html"},{default:o(()=>[U]),_:1}),E]),S,s("p",null,[j,a(n,{to:"/book/commands/parse.html"},{default:o(()=>[z]),_:1}),D]),F,s("ol",null,[s("li",null,[G,a(n,{to:"/book/commands/into_string.html"},{default:o(()=>[I]),_:1}),J,K]),O,s("li",null,[Q,a(n,{to:"/book/commands/build-string.html"},{default:o(()=>[Y]),_:1}),Z,ss])]),es,s("ol",null,[s("li",null,[ns,a(n,{to:"/book/commands/into.html"},{default:o(()=>[as]),_:1}),os,ts])]),ls,s("p",null,[cs,a(n,{to:"/book/commands/ansi.html"},{default:o(()=>[rs]),_:1}),ds]),ps])}var gs=l(p,[["render",is],["__file","working_with_strings.html.vue"]]);export{gs as default};
