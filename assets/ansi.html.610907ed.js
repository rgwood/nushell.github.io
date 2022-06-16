import{_ as e,o as a,c as s,e as n}from"./app.43db386a.js";const t={},o=n(`<p>Output ANSI codes to change color.</p><p>For escape sequences: Escape: <code>\\x1b[</code> is not required for --escape parameter</p><p>Format: <code>#(;#)m</code></p><p>Example: 1;31m for bold red or 2;37;41m for dimmed white fg with red bg There can be multiple text formatting sequence numbers separated by a ; and ending with an m where the # is of the following values:</p><p>attributes</p><ul><li>0 reset / normal display</li><li>1 bold or increased intensity</li><li>2 faint or decreased intensity</li><li>3 italic on (non-mono font)</li><li>4 underline on</li><li>5 slow blink on</li><li>6 fast blink on</li><li>7 reverse video on</li><li>8 nondisplayed (invisible) on</li><li>9 strike-through on</li></ul><div class="language-text ext-text"><pre class="language-text"><code>    foreground/bright colors    background/bright colors
    30/90    black              40/100    black
    31/91    red                41/101    red
    32/92    green              42/102    green
    33/93    yellow             43/103    yellow
    34/94    blue               44/104    blue
    35/95    magenta            45/105    magenta
    36/96    cyan               46/106    cyan
    37/97    white              47/107    white
    https://en.wikipedia.org/wiki/ANSI_escape_code
</code></pre></div><p>OSC: <code>\\x1b]</code> is not required for --osc parameter</p><p>Example: <code>echo [(ansi -o &#39;0&#39;) &#39;some title&#39; (char bel)] | str collect</code></p><p>Format:</p><ul><li>0 Set window title and icon name</li><li>1 Set icon name</li><li>2 Set window title</li><li>4 Set/read color palette</li><li>9 iTerm2 Grown notifications</li><li>10 Set foreground color (x11 color spec)</li><li>11 Set background color (x11 color spec)</li><li>... others</li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ansi <span class="token punctuation">(</span>code<span class="token punctuation">)</span> <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="subcommands" tabindex="-1"><a class="header-anchor" href="#subcommands" aria-hidden="true">#</a> Subcommands</h2><ul><li>ansi strip - strip ansi escape sequences from string</li></ul><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(code)</code> the name of the code to use like &#39;green&#39; or &#39;reset&#39; to reset the color</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-e, --escape <code>&lt;any&gt;</code>: escape sequence without the escape character(s)</li><li>-o, --osc <code>&lt;any&gt;</code>: operating system command (ocs) escape sequence without the escape character(s)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Change color to green</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ansi green
</code></pre></div><p>Reset the color</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ansi reset
</code></pre></div><p>Use ansi to color text (rb = red bold, gb = green bold, pb = purple bold)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>ansi rb<span class="token punctuation">)</span> Hello <span class="token string">&quot; &quot;</span> <span class="token punctuation">(</span>ansi gb<span class="token punctuation">)</span> Nu <span class="token string">&quot; &quot;</span> <span class="token punctuation">(</span>ansi pb<span class="token punctuation">)</span> World<span class="token punctuation">]</span> <span class="token operator">|</span> str collect
</code></pre></div><p>Use ansi to color text (rb = red bold, gb = green bold, pb = purple bold)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>ansi -e <span class="token string">&#39;3;93;41m&#39;</span><span class="token punctuation">)</span> Hello <span class="token punctuation">(</span>ansi reset<span class="token punctuation">)</span> <span class="token string">&quot; &quot;</span> <span class="token punctuation">(</span>ansi gb<span class="token punctuation">)</span> Nu <span class="token string">&quot; &quot;</span> <span class="token punctuation">(</span>ansi pb<span class="token punctuation">)</span> World<span class="token punctuation">]</span> <span class="token operator">|</span> str collect
</code></pre></div>`,28),l=[o];function c(i,p){return a(),s("div",null,l)}var d=e(t,[["render",c],["__file","ansi.html.vue"]]);export{d as default};
