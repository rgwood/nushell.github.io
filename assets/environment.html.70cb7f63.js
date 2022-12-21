import{_ as p,z as d,A as i,X as s,C as n,T as a,$ as o,a6 as t,Q as c}from"./framework.3d018c9f.js";const r={},u=s("h1",{id:"环境",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#环境","aria-hidden":"true"},"#"),n(" 环境")],-1),h=s("p",null,"Shell 中的一个常见任务是控制外部应用程序将使用的环境变量。这通常是自动完成的，因为环境被打包，并在外部应用程序启动时提供给它。但有时，我们希望更精确地控制一个应用程序看到的环境变量。",-1),_=s("code",null,"env",-1),k=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`   #           name                 type                value                 raw
──────────────────────────────────────────────────────────────────────────────────────────
  16   DISPLAY              string               :0                   :0
  17   EDITOR               string               nvim                 nvim
  28   LANG                 string               en_US.UTF-8          en_US.UTF-8
  35   PATH                 list<unknown>        [list 16 items]      /path1:/path2:/...
  36   PROMPT_COMMAND       block                <Block 197>
`)])],-1),g=s("code",null,"type",-1),v=s("code",null,"value",-1),b=s("code",null,"$env",-1),m=s("code",null,"$env.PATH | length",-1),O=s("code",null,"raw",-1),f=s("h2",{id:"设置环境变量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#设置环境变量","aria-hidden":"true"},"#"),n(" 设置环境变量")],-1),E=s("p",null,"有几种方法可以设置环境变量：",-1),A={id:"let-env",tabindex:"-1"},N=s("a",{class:"header-anchor",href:"#let-env","aria-hidden":"true"},"#",-1),x=s("code",null,"let-env",-1),F=t(`<p>使用<code>let-env</code>命令是最直接的方法：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env FOO <span class="token operator">=</span> <span class="token string">&#39;BAR&#39;</span>
</code></pre></div><p><code>let-env</code> 类似于 bash 中的 <strong>export</strong> 命令。</p><p>因此，如果你想扩展<code>PATH</code>变量，你可以这样做：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env <span class="token environment constant">PATH</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token environment constant">PATH</span> <span class="token operator">|</span> prepend <span class="token string">&#39;/path/you/want/to/add&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>在这里，我们把指定文件夹前置添加到<code>PATH</code>中的现有路径中，所以它将有最高的优先级。 如果你想给它最低的优先级，你可以使用<code>append</code>命令。</p>`,6),B={id:"load-env",tabindex:"-1"},R=s("a",{class:"header-anchor",href:"#load-env","aria-hidden":"true"},"#",-1),C=s("code",null,"load-env",-1),S=t(`<p>如果你有一个以上的环境变量需要设置，你可以使用<code>load-env</code>并创建一个键/值对记录(Record)，以用于加载多个环境变量：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> load-env <span class="token punctuation">{</span> <span class="token string">&quot;BOB&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;FOO&quot;</span>, <span class="token string">&quot;JAY&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;BAR&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="一次性环境变量" tabindex="-1"><a class="header-anchor" href="#一次性环境变量" aria-hidden="true">#</a> 一次性环境变量</h3>`,3),V={id:"调用def-env定义的命令",tabindex:"-1"},$=s("a",{class:"header-anchor",href:"#调用def-env定义的命令","aria-hidden":"true"},"#",-1),w=s("code",null,"def-env",-1),P=s("h3",{id:"使用模块导出",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用模块导出","aria-hidden":"true"},"#"),n(" 使用模块导出")],-1),q=t(`<h2 id="读取环境变量" tabindex="-1"><a class="header-anchor" href="#读取环境变量" aria-hidden="true">#</a> 读取环境变量</h2><p>单个环境变量是记录的一个字段，存储在 <code>$env</code> 变量中，可以用 <code>$env.VARIABLE</code> 读取：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; $env.FOO
BAR
</code></pre></div><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><p>当你设置环境变量时，它将只在当前作用域内可用（变量所在的块和它里面的任何块）。</p><p>这里有一个小例子来演示环境变量作用域：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env FOO <span class="token operator">=</span> <span class="token string">&quot;BAR&quot;</span>
<span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span>
    let-env FOO <span class="token operator">=</span> <span class="token string">&quot;BAZ&quot;</span>
    <span class="token variable">$env</span>.FOO <span class="token operator">==</span> <span class="token string">&quot;BAZ&quot;</span>
<span class="token punctuation">}</span>
<span class="token boolean">true</span>
<span class="token operator">&gt;</span> <span class="token variable">$env</span>.FOO <span class="token operator">==</span> <span class="token string">&quot;BAR&quot;</span>
<span class="token boolean">true</span>
</code></pre></div><h2 id="目录切换" tabindex="-1"><a class="header-anchor" href="#目录切换" aria-hidden="true">#</a> 目录切换</h2>`,8),T=s("code",null,"cd",-1),I=s("code",null,"cd",-1),z=s("code",null,"PWD",-1),D=t(`<h2 id="一次性环境变量-1" tabindex="-1"><a class="header-anchor" href="#一次性环境变量-1" aria-hidden="true">#</a> 一次性环境变量</h2><p>在 Bash 和其他软件的启发下，有一个常用的简便方法，可以设置一次性环境变量：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token assign-left variable">FOO</span><span class="token operator">=</span>BAR <span class="token builtin class-name">echo</span> <span class="token variable">$env</span>.FOO
BAR
</code></pre></div>`,3),y=s("code",null,"with-env",-1),H=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> with-env <span class="token punctuation">{</span> FOO: BAR <span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$env</span>.FOO <span class="token punctuation">}</span>
BAR
</code></pre></div>`,1),L=s("code",null,"with-env",-1),M=s("h2",{id:"永久性环境变量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#永久性环境变量","aria-hidden":"true"},"#"),n(" 永久性环境变量")],-1),U=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># In config.nu</span>
let-env FOO <span class="token operator">=</span> <span class="token string">&#39;BAR&#39;</span>
</code></pre></div><h2 id="从自定义命令中定义环境变量" tabindex="-1"><a class="header-anchor" href="#从自定义命令中定义环境变量" aria-hidden="true">#</a> 从自定义命令中定义环境变量</h2>`,2),W=s("code",null,"def-env",-1),Y=s("code",null,"def",-1),Z=s("code",null,"export def",-1),j=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def-env foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    let-env FOO <span class="token operator">=</span> <span class="token string">&#39;BAR&#39;</span>
<span class="token punctuation">}</span>

<span class="token operator">&gt;</span> foo

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.FOO
BAR
</code></pre></div><h2 id="环境变量转换" tabindex="-1"><a class="header-anchor" href="#环境变量转换" aria-hidden="true">#</a> 环境变量转换</h2>`,2),G=s("code",null,"ENV_CONVERSIONS",-1),J={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},Q=s("code",null,"PATH",-1),X=s("code",null,"Path",-1),K=s("code",null,"env.nu",-1),nn=s("code",null,"config.nu",-1),sn=s("code",null,"ENV_CONVERSIONS",-1),an=s("code",null,"from_string",-1),en=s("code",null,"ENV_CONVERSIONS",-1),on=s("code",null,"to_string",-1),tn=t(`<p>让我们用一个例子来说明转换的情况。 把以下内容放在你的<code>config.nu</code>中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env ENV_CONVERSIONS <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># ... you might have Path and PATH already there, add:</span>
    FOO <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        from_string: <span class="token punctuation">{</span> <span class="token operator">|</span>s<span class="token operator">|</span> <span class="token variable">$s</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&#39;-&#39;</span> <span class="token punctuation">}</span>
        to_string: <span class="token punctuation">{</span> <span class="token operator">|</span><span class="token function">v</span><span class="token operator">|</span> <span class="token variable">$v</span> <span class="token operator">|</span> str <span class="token function">join</span> <span class="token string">&#39;-&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>现在，在一个 Nushell 实例内执行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> with-env <span class="token punctuation">{</span> FOO <span class="token builtin class-name">:</span> <span class="token string">&#39;a-b-c&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span> nu <span class="token punctuation">}</span>  <span class="token comment"># runs Nushell with FOO env. var. set to &#39;a-b-c&#39;</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.FOO
  <span class="token number">0</span>   a
  <span class="token number">1</span>   b
  <span class="token number">2</span>   c
</code></pre></div><p>你可以看到<code>$env.FOO</code>现在是一个新的 Nushell 实例中的列表，配置已经更新。 你也可以通过以下方式手动测试转换：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token variable">$env</span>.ENV_CONVERSIONS.FOO.from_string <span class="token string">&#39;a-b-c&#39;</span>
</code></pre></div><p>现在，为了测试列表-&gt;字符串的转换，运行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu <span class="token parameter variable">-c</span> <span class="token string">&#39;$env.FOO&#39;</span>
a-b-c
</code></pre></div><p>因为<code>nu</code>是一个外部程序，Nushell 根据<code>ENV_CONVERSIONS.FOO.to_string</code>翻译了 <code>[ a b c ]</code> 列表，并把它传递给<code>nu</code>进程。 用<code>nu -c</code>运行命令不会加载配置文件，因此<code>FOO</code>的环境转换没有了，它被显示为一个普通的字符串 —— 这样我们可以验证转换是否成功。 你也可以通过<code>do $env.ENV_CONVERSIONS.FOO.to_string [a b c]</code>手动运行这个步骤。</p>`,9),cn=s("code",null,"env",-1),ln=s("code",null,"raw",-1),pn=s("code",null,"ENV_CONVERSIONS.<name>.to_string",-1),dn=s("code",null,"value",-1),rn=s("code",null,"FOO",-1),un=s("code",null,"ENV_CONVERSIONS.<name>.from_string",-1),hn=s("code",null,"to_string",-1),_n=s("code",null,"PROMPT_COMMAND",-1),kn=s("code",null,"raw",-1),gn=s("code",null,"PATH",-1),vn=s("code",null,"Path",-1),bn=t('<p><em>(重要! 环境转换字符串-&gt;值发生在 <code>env.nu</code> 和 <code>config.nu</code> 被运行<strong>之后</strong>。<code>env.nu</code> 和 <code>config.nu</code> 中的所有环境变量仍然是字符串，除非你手动将它们设置为一些其他的值。)</em></p><h2 id="删除环境变量" tabindex="-1"><a class="header-anchor" href="#删除环境变量" aria-hidden="true">#</a> 删除环境变量</h2>',2),mn=s("code",null,"hide",-1),On=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env FOO <span class="token operator">=</span> <span class="token string">&#39;BAR&#39;</span>
<span class="token punctuation">..</span>.
<span class="token operator">&gt;</span> hide FOO
</code></pre></div><p>隐藏也是有作用域的，这既允许你暂时删除一个环境变量，又可以防止你从子作用域内修改父环境：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env FOO <span class="token operator">=</span> <span class="token string">&#39;BAR&#39;</span>
<span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span>
    hide FOO
    <span class="token comment"># $env.FOO does not exist</span>
  <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> <span class="token variable">$env</span>.FOO
BAR
</code></pre></div>`,3);function fn(En,An){const e=c("RouterLink"),l=c("ExternalLinkIcon");return d(),i("div",null,[u,h,s("p",null,[n("你可以使用"),a(e,{to:"/book/commands/env.html"},{default:o(()=>[_]),_:1}),n("命令查看当前环境变量：")]),k,s("p",null,[n("在 Nushell 中，环境变量可以是任何值，并且有任何类型（见"),g,n("列）。 Nushell 中使用的环境变量的实际值在"),v,n("列下。 你可以直接使用"),b,n("变量查询该值，例如，"),m,n("。 最后的"),O,n("列显示了将被发送到外部应用程序的实际值（详见 "),a(e,{to:"/zh-CN/book/environment.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E8%BD%AC%E6%8D%A2"},{default:o(()=>[n("环境变量转换")]),_:1}),n(" ）。")]),s("p",null,[n("环境最初是由 Nu 的 "),a(e,{to:"/zh-CN/book/configuration.html"},{default:o(()=>[n("配置文件")]),_:1}),n(" 和 Nu 的运行环境创建的。")]),f,E,s("h3",A,[N,n(),a(e,{to:"/book/commands/let-env.html"},{default:o(()=>[x]),_:1})]),F,s("h3",B,[R,n(),a(e,{to:"/book/commands/load-env.html"},{default:o(()=>[C]),_:1})]),S,s("p",null,[n("这些变量被定义为只在执行代码块的过程中临时有效。 详情请看 "),a(e,{to:"/zh-CN/book/environment.html#%E4%B8%80%E6%AC%A1%E6%80%A7%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},{default:o(()=>[n("一次性环境变量")]),_:1}),n(" 。")]),s("h3",V,[$,n(" 调用"),a(e,{to:"/book/commands/def-env.html"},{default:o(()=>[w]),_:1}),n("定义的命令")]),s("p",null,[n("详情见 "),a(e,{to:"/zh-CN/book/environment.html#%E4%BB%8E%E8%87%AA%E5%AE%9A%E4%B9%89%E5%91%BD%E4%BB%A4%E4%B8%AD%E5%AE%9A%E4%B9%89%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},{default:o(()=>[n("从自定义命令中定义环境")]),_:1}),n("。")]),P,s("p",null,[n("参见 "),a(e,{to:"/zh-CN/book/modules.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},{default:o(()=>[n("模块")]),_:1}),n(" 部分了解更多详情。")]),q,s("p",null,[n("Shell 中常见的任务是用"),a(e,{to:"/book/commands/cd.html"},{default:o(()=>[T]),_:1}),n("命令来改变目录。 在 Nushell 中，调用"),I,n("等同于设置"),z,n("环境变量。 因此，它遵循与其他环境变量相同的规则（例如，作用域）。")]),D,s("p",null,[n("你也可以使用"),a(e,{to:"/book/commands/with-env.html"},{default:o(()=>[y]),_:1}),n("来更明确地做同样的事情：")]),H,s("p",null,[a(e,{to:"/book/commands/with-env.html"},{default:o(()=>[L]),_:1}),n('命令将暂时把环境变量设置为给定的值（这里：变量 "FOO" 被赋为 "BAR" 值）。一旦这样做了，'),a(e,{to:"/zh-CN/book/types_of_data.html#%E5%9D%97"},{default:o(()=>[n("块")]),_:1}),n(" 将在这个新的环境变量设置下运行。")]),M,s("p",null,[n("你也可以在启动时设置环境变量，使它们在 Nushell 运行期间都可用。 要做到这一点，请在 "),a(e,{to:"/zh-CN/book/configuration.html"},{default:o(()=>[n("Nu 配置文件")]),_:1}),n(" 中设置一个环境变量。 比如：")]),U,s("p",null,[n("由于作用域规则，在自定义命令中定义的任何环境变量都只存在于该命令的作用域内。 然而，用"),a(e,{to:"/book/commands/def-env.html"},{default:o(()=>[W]),_:1}),n("而不是"),a(e,{to:"/book/commands/def.html"},{default:o(()=>[Y]),_:1}),n("定义的命令（它也适用于"),Z,n("，见 "),a(e,{to:"/zh-CN/book/modules.html"},{default:o(()=>[n("模块")]),_:1}),n("）将在调用者一方保留环境设置：")]),j,s("p",null,[n("你可以通过设置"),G,n("环境变量，来在字符串和值之间转换其他环境变量。 例如，"),s("a",J,[n("默认环境配置"),a(l)]),n("包括将"),Q,n("（和 Windows 上使用的"),X,n("）环境变量从一个字符串转换为一个列表。 在 "),K,n(" 和 "),nn,n(" 配置文件加载后，任何在"),sn,n("内指定的现有环境变量将根据其"),an,n("字段被转换为任何类型的值。 外部工具要求环境变量是字符串，因此，任何非字符串的环境变量需要先进行转换： 值->字符串的转换由"),en,n("的"),on,n("字段设置，每次运行外部命令时都会进行转换。")]),tn,s("p",null,[n("如果我们回头看一下"),a(e,{to:"/book/commands/env.html"},{default:o(()=>[cn]),_:1}),n("命令，"),ln,n("列显示由"),pn,n("翻译的值，"),dn,n("列显示 Nushell 中使用的值（在"),rn,n("的情况下是"),un,n("的结果）。 如果这个值不是字符串，并且没有"),hn,n("的转换，它就不会被传递给外部（见"),_n,n("的"),kn,n("列）。 一个例外是"),gn,n("（Windows 上的"),vn,n("）。默认情况下，它在启动时将字符串转换为列表，在运行外部程序时，如果没有指定手动转换，则从列表转换为字符串。")]),bn,s("p",null,[n("只有当一个环境变量被设置在当前作用域中时，你才能通过 "),a(e,{to:"/book/commands/hide.html"},{default:o(()=>[mn]),_:1}),n(" 命令“删除”它：")]),On,s("p",null,[n("关于隐藏的更多细节，请参考 "),a(e,{to:"/zh-CN/book/modules.html#%E9%9A%90%E8%97%8F"},{default:o(()=>[n("模块")]),_:1})])])}const xn=p(r,[["render",fn],["__file","environment.html.vue"]]);export{xn as default};
