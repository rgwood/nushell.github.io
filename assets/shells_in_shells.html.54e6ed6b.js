import{_ as n,r as s,o as a,c as r,a as i,b as l,w as c,e as t,d as e}from"./app.43db386a.js";const h={},d=t(`<h1 id="shells-in-shells" tabindex="-1"><a class="header-anchor" href="#shells-in-shells" aria-hidden="true">#</a> Shells in shells</h1><h2 id="working-in-multiple-directories" tabindex="-1"><a class="header-anchor" href="#working-in-multiple-directories" aria-hidden="true">#</a> Working in multiple directories</h2><p>While it&#39;s common to work in one directory, it can be handy to work in multiple places at the same time. For this, Nu offers the concept of &quot;shells&quot;. As the name implies, they&#39;re a way of running multiple shells in one, allowing you to quickly jump between working directories and more.</p><p>To get started, let&#39;s enter a directory:</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jonathant/Source/nushell(master)&gt; enter ../book
/home/jonathant/Source/book(master)&gt; ls
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502 name               \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 404.html           \u2502 File \u2502  429 B \u2502 2 hours ago
  1 \u2502 CONTRIBUTING.md    \u2502 File \u2502  955 B \u2502 2 hours ago
  2 \u2502 Gemfile            \u2502 File \u2502 1.1 KB \u2502 2 hours ago
  3 \u2502 Gemfile.lock       \u2502 File \u2502 6.9 KB \u2502 2 hours ago
</code></pre></div><p>Entering is similar to changing directories (as we saw with the <code>cd</code> command). This allows you to jump into a directory to work in it. Instead of changing the directory, we now are in two directories. To see this more clearly, we can use the <code>shells</code> command to list the current directories we have active:</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jonathan/Source/book(master)&gt; shells
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 active \u2502 name       \u2502 path
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502        \u2502 filesystem \u2502 /home/jonathant/Source/nushell/
 1 \u2502 X      \u2502 filesystem \u2502 /home/jonathant/Source/book
 2 \u2502        \u2502 filesystem \u2502 /home/jonathant/Source/music/
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>The <code>shells</code> command shows us there are three shells currently active: our original &quot;nushell&quot; source directory and now this new &quot;book&quot; directory.</p><p>We can jump between these shells with the <code>n</code>, <code>p</code> and <code>g</code> shortcuts, short for &quot;next&quot;, &quot;previous&quot; and &quot;goto&quot;:</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jonathant/Source/book(master)&gt; n
/home/jonathant/Source/nushell(master)&gt; p
/home/jonathant/Source/book(master)&gt; g 2
/home/jonathant/Source/music(master)&gt;
</code></pre></div><p>We can see the directory changing, but we&#39;re always able to get back to a previous directory we were working on. This allows us to work in multiple directories in the same session.</p><h2 id="exiting-the-shell" tabindex="-1"><a class="header-anchor" href="#exiting-the-shell" aria-hidden="true">#</a> Exiting the shell</h2><p>You can leave a shell you have <code>enter</code>ed using the <code>exit</code> command. If this is the last open shell, Nu will quit.</p><p>You can always quit Nu, even if multiple shells are active by passing the <code>--now</code> flag to the exit command. Like so: <code>exit --now</code></p><h2 id="going-beyond-directories" tabindex="-1"><a class="header-anchor" href="#going-beyond-directories" aria-hidden="true">#</a> Going beyond directories</h2><p>Nu can also create shells from other things aside from paths in a filesystem. Let&#39;s say, for example, you&#39;re working with a large data set and don&#39;t want to lose your place inside of it.</p>`,16),u=e("To see how this works, let's do the following exercise. Currently, we list the "),p=e("Nu plugins"),g=e(` we have developed in the "Cargo.toml" file. Let's say we just created a new plugin in the src/plugins directory called "doc.rs", and we're interested to know if it's listed in the "Cargo.toml" as well so that it can be compiled and installed correctly for Nu.`),m=t(`<p>Let&#39;s <code>enter</code> the file &quot;Cargo.toml&quot; from Nu&#39;s source code:</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jonathant/Source/nushell(master)&gt; enter Cargo.toml
/&gt; ls
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 bin                \u2502 [table 18 rows]
 build-dependencies \u2502 [row nu-build serde toml]
 dependencies       \u2502 [row 29 columns]
 dev-dependencies   \u2502 [row nu-test-support]
 features           \u2502 [row 19 columns]
 package            \u2502 [row 12 columns]
 workspace          \u2502 [row members]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>For the moment we&#39;ve only <code>enter</code>ed the file and we can see what&#39;s in it from the table <code>ls</code> gives back. If you pay close attention, this time we&#39;ve entered a file format that Nu understands (.toml). Nu also projects the contents of the file in a filesystem-like so we can explore it as if it were a regular filesystem.</p><p>Before we continue, let&#39;s check the active shells:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; shells
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 active \u2502 name                                        \u2502 path
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502        \u2502 filesystem                                  \u2502 /home/jonathant/Source/nushell/
 1 \u2502 X      \u2502 {/home/jonathant/Source/nushell/Cargo.toml} \u2502 /
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We can observe that we have two active shells and telling us we are currently inside of &quot;Cargo.toml&quot; with a default root path &quot;/&quot;. Let&#39;s view the contents again:</p><div class="language-text ext-text"><pre class="language-text"><code>/&gt; ls
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 bin                \u2502 [table 18 rows]
 build-dependencies \u2502 [row nu-build serde toml]
 dependencies       \u2502 [row 29 columns]
 dev-dependencies   \u2502 [row nu-test-support]
 features           \u2502 [row 19 columns]
 package            \u2502 [row 12 columns]
 workspace          \u2502 [row members]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>What we&#39;re looking for might be inside of the &quot;bin&quot; column. So let&#39;s go into there:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cd bin
/bin&gt; ls
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502 name                        \u2502 path                                       \u2502 required-features
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 fail                        \u2502 crates/nu-test-support/src/bins/fail.rs    \u2502 [table 1 rows]
  1 \u2502 chop                        \u2502 crates/nu-test-support/src/bins/chop.rs    \u2502 [table 1 rows]
  2 \u2502 cococo                      \u2502 crates/nu-test-support/src/bins/cococo.rs  \u2502 [table 1 rows]
  3 \u2502 nonu                        \u2502 crates/nu-test-support/src/bins/nonu.rs    \u2502 [table 1 rows]
  4 \u2502 iecho                       \u2502 crates/nu-test-support/src/bins/iecho.rs   \u2502 [table 1 rows]
  5 \u2502 nu_plugin_core_textview     \u2502 src/plugins/nu_plugin_core_textview.rs     \u2502 [table 1 rows]
</code></pre></div><p>From here, we can always jump back to the directory we were working in before using p (for previous).</p><div class="language-text ext-text"><pre class="language-text"><code>/bin&gt; p
</code></pre></div><p>Let&#39;s verify the shells again:</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jonathant/Source/nushell/(simple_list_view)&gt; shells
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 active \u2502 name                                        \u2502 path
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 X      \u2502 filesystem                                  \u2502 /home/jonathant/Source/nushell/
 1 \u2502        \u2502 {/home/jonathant/Source/nushell/Cargo.toml} \u2502 /bin
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500


</code></pre></div><p>We are back at the directory we were working in before entering the file &quot;Cargo.toml&quot;.</p>`,14);function w(f,b){const o=s("RouterLink");return a(),r("div",null,[d,i("p",null,[u,l(o,{to:"/old_book/plugins.html"},{default:c(()=>[p]),_:1}),g]),m])}var v=n(h,[["render",w],["__file","shells_in_shells.html.vue"]]);export{v as default};
