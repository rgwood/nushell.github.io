import{_ as i,M as l,p as r,q as h,Q as e,t,N as n,U as o,a1 as s}from"./framework-344bb0e4.js";const u={},d=s(`<h1 id="thinking-in-nu" tabindex="-1"><a class="header-anchor" href="#thinking-in-nu" aria-hidden="true">#</a> Thinking in Nu</h1><p>To help you understand - and get the most out of - Nushell, we&#39;ve put together this section on &quot;thinking in Nushell&quot;. By learning to think in Nushell and use the patterns it provides, you&#39;ll hit fewer issues getting started and be better setup for success.</p><p>So what does it mean to think in Nushell? Here are some common topics that come up with new users of Nushell.</p><h2 id="nushell-isn-t-bash" tabindex="-1"><a class="header-anchor" href="#nushell-isn-t-bash" aria-hidden="true">#</a> Nushell isn&#39;t bash</h2><p>Nushell is both a programming language and a shell and because of this has its own way of working with files, directories, websites, and more. We&#39;ve modeled this to work closely with what you may be familiar with other shells. Pipelines work by attaching two commands together:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | length
</code></pre></div><p>Nushell, for example, also has support for other common capabilities like getting the exit code from previously run commands.</p><p>While it does have these amenities, Nushell isn&#39;t bash. The bash way of working, and the POSIX style in general, is not one that Nushell supports. For example, in bash, you might use:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">&gt;</span> output.txt
</code></pre></div><p>In Nushell, we use the <code>&gt;</code> as the greater-than operator. This fits better with the language aspect of Nushell. Instead, you pipe to a command that has the job of saving content:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; &quot;hello&quot; | save output.txt
</code></pre></div><p><strong>Thinking in Nushell:</strong> The way Nushell views data is that data flows through the pipeline until it reaches the user or is handled by a final command. You can simply type data, from strings to JSON-style lists and records, and follow it with <code>|</code> to send it through the pipeline. Nushell uses commands to do work and produce more data. Learning these commands and when to use them helps you compose many kinds of pipelines.</p><h2 id="think-of-nushell-as-a-compiled-language" tabindex="-1"><a class="header-anchor" href="#think-of-nushell-as-a-compiled-language" aria-hidden="true">#</a> Think of Nushell as a compiled language</h2><p>An important part of Nushell&#39;s design and specifically where it differs from many dynamic languages is that Nushell converts the source you give it into something to run, and then runs the result. It doesn&#39;t have an <code>eval</code> feature which allows you to continue pulling in new source during runtime. This means that tasks like including files to be part of your project need to be known paths, much like includes in compiled languages like C++ or Rust.</p><p>For example, the following doesn&#39;t make sense in Nushell, and will fail to execute if run as a script:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&quot;def abc [] { 1 + 2 }&quot; | save output.nu
source &quot;output.nu&quot;
abc
</code></pre></div><p>The <code>source</code> command will grow the source that is compiled, but the <code>save</code> from the earlier line won&#39;t have had a chance to run. Nushell runs the whole block as if it were a single file, rather than running one line at a time. In the example, since the output.nu file is not created until after the &#39;compilation&#39; step, the <code>source</code> command is unable to read definitions from it during parse time.</p><p>Another common issue is trying to dynamically create the filename to source from:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; source $&quot;($my_path)/common.nu&quot;
</code></pre></div><p>This would require the evaluator to run and evaluate the string, but unfortunately Nushell needs this information at compile-time.</p><p><strong>Thinking in Nushell:</strong> Nushell is designed to use a single compile step for all the source you send it, and this is separate from evaluation. This will allow for strong IDE support, accurate error messages, an easier language for third-party tools to work with, and in the future even fancier output like being able to compile Nushell directly to a binary file.</p>`,21),c=e("h2",{id:"variables-are-immutable",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variables-are-immutable","aria-hidden":"true"},"#"),t(" Variables are immutable")],-1),m=e("p",null,`Another common surprise for folks coming from other languages is that Nushell variables are immutable (and indeed some people have started to call them "constants" to reflect this). Coming to Nushell you'll want to spend some time becoming familiar with working in a more functional style, as this tends to help write code that works best with immutable variables.`,-1),p=e("code",null,"each",-1),g=e("code",null,"par-each",-1),f=e("p",null,[t(`Just because Nushell variables are immutable doesn't mean things don't change. Nushell makes heavy use of the technique of "shadowing". Shadowing means creating a new variable with the same name as a previously declared variable. For example, say you had an `),e("code",null,"$x"),t(" in scope, and you wanted a new "),e("code",null,"$x"),t(" that was one greater:")],-1),b=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`let x = $x + 1
`)])],-1),w=e("p",null,[t("This new "),e("code",null,"x"),t(" is visible to any code that follows this line. Careful use of shadowing can make for an easier time working with variables, though it's not required.")],-1),v=e("code",null,"-n",-1),y=e("code",null,"each",-1),x=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | enumerate | each { |it| $"Number ($it.index) is size ($it.item.size)" }
`)])],-1),_=e("code",null,"reduce",-1),k=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; [one, two, three, four, five, six] | reduce {|curr, max|
    if ($curr | str length) &gt; ($max | str length) {
        $curr
    } else {
        $max
    }
}
</code></pre></div><p><strong>Thinking in Nushell:</strong> If you&#39;re used to using mutable variables for different tasks, it will take some time to learn how to do each task in a more functional style. Nushell has a set of built-in capabilities to help with many of these patterns, and learning them will help you write code in a more Nushell-style. The added benefit of speeding up your scripts by running parts of your code in parallel is a nice bonus.</p><h2 id="nushell-s-environment-is-scoped" tabindex="-1"><a class="header-anchor" href="#nushell-s-environment-is-scoped" aria-hidden="true">#</a> Nushell&#39;s environment is scoped</h2><p>Nushell takes multiple design cues from compiled languages. One such cue is that languages should avoid global mutable state. Shells have commonly used global mutation to update the environment, but Nushell steers clear of this approach.</p><p>In Nushell, blocks control their own environment. Changes to the environment are scoped to the block where they happen.</p><p>In practice, this lets you write some concise code for working with subdirectories, for example, if you wanted to build each sub-project in the current directory, you could run:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | each { |it|
    cd $it.name
    make
}
</code></pre></div><p>The <code>cd</code> command changes the <code>PWD</code> environment variables, and this variable change does not escape the block, allowing each iteration to start from the current directory and enter the next subdirectory.</p>`,8),N=e("code",null,"def-env",-1),T=e("code",null,"load-env",-1),q=e("code",null,"*",-1),$=e("code",null,"def-env",-1),I=e("p",null,[e("strong",null,"Thinking in Nushell:"),t(" - The coding best practice of no global mutable variables extends to the environment in Nushell. Using the built-in helper commands will let you more easily work with the environment in Nushell. Taking advantage of the fact that environments are scoped to blocks can also help you write more concise scripts and interact with external commands without adding things into a global environment you don't need.")],-1);function C(S,B){const a=l("RouterLink");return r(),h("div",null,[d,e("p",null,[t("For more in-depth explanation, check "),n(a,{to:"/book/how_nushell_code_gets_run.html"},{default:o(()=>[t("How Nushell Code Gets Run")]),_:1}),t(".")]),c,m,e("p",null,[t("You might wonder why Nushell uses immutable variables. Early on in Nushell's development we decided to see how long we could go using a more data-focused, functional style in the language. More recently, we added a key bit of functionality into Nushell that made these early experiments show their value: parallelism. By switching from "),n(a,{to:"/commands/docs/each.html"},{default:o(()=>[p]),_:1}),t(" to "),n(a,{to:"/commands/docs/par-each.html"},{default:o(()=>[g]),_:1}),t(" in any Nushell script, you're able to run the corresponding block of code in parallel over the input. This is possible because Nushell's design leans heavily on immutability, composition, and pipelining.")]),f,b,w,e("p",null,[t("Loop counters are another common pattern for mutable variables and are built into most iterating commands, for example you can get both each item and an index of each item using the "),v,t(" flag on "),n(a,{to:"/commands/docs/each.html"},{default:o(()=>[y]),_:1}),t(":")]),x,e("p",null,[t("You can also use the "),n(a,{to:"/commands/docs/reduce.html"},{default:o(()=>[_]),_:1}),t(" command to work in the same way you might mutate a variable in a loop. For example, if you wanted to find the largest string in a list of strings, you might do:")]),k,e("p",null,[t("Having the environment scoped like this makes commands more predictable, easier to read, and when the time comes, easier to debug. Nushell also provides helper commands like "),n(a,{to:"/commands/docs/def-env.html"},{default:o(()=>[N]),_:1}),t(", "),n(a,{to:"/commands/docs/load-env.html"},{default:o(()=>[T]),_:1}),t(", as convenient ways of doing batches of updates to the environment.")]),e("p",null,[q,t(" - there is one exception here, where "),n(a,{to:"/commands/docs/def-env.html"},{default:o(()=>[$]),_:1}),t(" allows you to create a command that participates in the caller's environment")]),I])}const V=i(u,[["render",C],["__file","thinking_in_nu.html.vue"]]);export{V as default};
