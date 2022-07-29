import{_ as o,o as r,c as i,a as e,b as s,d as a,e as t,r as l}from"./app.f96f0b62.js";var c="/assets/0_6_0_starship_prompt.8752b28c.png";const p={},h=e("h1",{id:"nushell-0-6-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-6-0","aria-hidden":"true"},"#"),a(" Nushell 0.6.0")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),d=e("p",null,"We're happy to announce the 0.6.0 release of Nu. This release has a bunch of new features, bugfixes, and general improvements.",-1),m=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),g=a("Nu 0.6.0 is available as "),b={href:"https://github.com/nushell/nushell/releases/tag/0.6.0",target:"_blank",rel:"noopener noreferrer"},f=a("pre-built binaries"),w=a(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},_=a("crates.io"),y=a(". If you have Rust installed you can install it using "),v=e("code",null,"cargo install nu",-1),x=a(" (or if you want all the features "),N=e("code",null,"cargo install nu --all-features",-1),j=a(")."),I=e("h1",{id:"starship-support-southclaws-jonathandturner",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#starship-support-southclaws-jonathandturner","aria-hidden":"true"},"#"),a(" Starship support (Southclaws, jonathandturner)")],-1),W=e("p",null,[e("img",{src:c,alt:"Example of starship prompt"}),e("em",null,"Welcome to the starship!")],-1),z=a("Having a configurable prompt has been a regularly requested feature, dating back to our first release of Nu. With 0.6.0, we're excited to show off the ability to integrate with "),S={href:"https://starship.rs/",target:"_blank",rel:"noopener noreferrer"},T=a("starship"),A=a(". Starship is a powerful prompt being built in Rust, and it includes tons of fun features."),B=a("To use the Starship support, enable the starship feature (the binary releases will have this on by default). After this, you'll want to "),O={href:"https://starship.rs/config/",target:"_blank",rel:"noopener noreferrer"},C=a("configure starship"),E=a(" to meet your needs."),q=t(`<p>Here&#39;s the config I use in the screenshot above:</p><div class="language-text ext-text"><pre class="language-text"><code>\u276F cat ~/.config/starship.toml
add_newline = false

[git_branch]
symbol = &quot;\u{1F4D9} &quot;

[git_status]
disabled = true
</code></pre></div><p>To enable Starship support, make sure to enable the <code>starship</code> feature, or to use the all-features build:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cargo install nu --features starship-prompt
</code></pre></div><p>or</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cargo install nu --all-features
</code></pre></div><h1 id="stable-rust-est31" tabindex="-1"><a class="header-anchor" href="#stable-rust-est31" aria-hidden="true">#</a> Stable Rust (est31)</h1><p>Nu now works on stable Rust!</p><p>Contributor est31 did a ton of work soon after our first Nu release, but it wasn&#39;t until just recently that it fully paid off. With the Rust 1.39 release, Nu now fully works on stable Rust! We&#39;re excited for what this means for package authors, as they will now have a stable dependency they can use to build Nu from, rather than tracking nightly.</p><h1 id="new-website-new-blog-sebastian-xyz" tabindex="-1"><a class="header-anchor" href="#new-website-new-blog-sebastian-xyz" aria-hidden="true">#</a> New website! New blog! (sebastian-xyz)</h1><p>We&#39;re starting to work on an actual website, complete with a blog. In fact, where you&#39;re seeing this now is on our new site. We&#39;re excited to finally have something more official, and looking forward to growing the website in the weeks to come.</p>`,11),R=a("If you're a web developer or designer and you want to help out, please join us! You can find us on the "),L={href:"https://github.com/nushell/nushell.github.io",target:"_blank",rel:"noopener noreferrer"},P=a("website repo"),Y=a(" and "),F={href:"https://github.com/nushell/blog",target:"_blank",rel:"noopener noreferrer"},K=a("blog repo"),M=a("."),D=t(`<h1 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features" aria-hidden="true">#</a> New features</h1><h2 id="histogram-andrasio" tabindex="-1"><a class="header-anchor" href="#histogram-andrasio" aria-hidden="true">#</a> histogram (andrasio)</h2><p>As we extend Nu&#39;s ability to function as a shell, we also wanted to include some features that help with doing some data analysis on structured data you&#39;re working with. In this release is a new <code>histogram</code> feature which gives a quick histogram of the data you&#39;re looking at:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> tests/fixtures/formats/caco3_plastics.csv <span class="token operator">|</span> histogram origin
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 origin   \u2502 frequency</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 COLOMBIA \u2502 ***********************************************************************************************
   \u2502          \u2502 *****
 <span class="token number">1</span> \u2502 SPAIN    \u2502 ************************************************************
 <span class="token number">2</span> \u2502 TURKEY   \u2502 ********************
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><h2 id="split-by-andrasio" tabindex="-1"><a class="header-anchor" href="#split-by-andrasio" aria-hidden="true">#</a> split-by (andrasio)</h2><p>When working with tables inside of tables, it&#39;s sometimes helpful to be able to group and regroup data so that the end result can be easily processed or charted. With this release, we&#39;ve add a new command: <code>split-by</code>. Split-by is similar to <code>group-by</code>, in a way you can think of it as a re-group as it will create new groups to wrap your existing groups.</p><p>To see how this works, let&#39;s say we have some shipping data, and we want to group these by the region:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> tests/fixtures/formats/caco3_plastics.csv <span class="token operator">|</span> group-by origin

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 SPAIN          \u2502 COLOMBIA       \u2502 TURKEY
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table <span class="token number">5</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> rows<span class="token punctuation">]</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Next, let&#39;s say we know that inside of these new columns is a table that has a column called <code>shipped_at</code>. What we want to do is to <code>group-by</code> again, but this time use that new column to create new groups:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/home/jonathan/Source/nushell<span class="token punctuation">(</span>better_duration<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token function">open</span> tests/fixtures/formats/caco3_plastics.csv <span class="token operator">|</span> group-by origin <span class="token operator">|</span> split-by shipped_at
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token number">18</span>/03/2016  \u2502 <span class="token number">27</span>/07/2016  \u2502 <span class="token number">24</span>/06/2016  \u2502 07/07/2016     \u2502 01/01/1900     \u2502 01/11/2016     \u2502 04/10/2016
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>row SPAIN<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>row SPAIN<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>row SPAIN<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>row COLOMBIA<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>row COLOMBIA<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>row COLOMBIA<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>row TURKEY<span class="token punctuation">]</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>What we have as a result is a kind of (row, column) grouping of the table data, which would allow you to graph for each date on one axis, and for each origin on the other.</p><h2 id="default-and-compact-andrasio" tabindex="-1"><a class="header-anchor" href="#default-and-compact-andrasio" aria-hidden="true">#</a> default and compact (andrasio)</h2><p>One of the sticky issues working with tables is that sometimes you&#39;ll have gaps in the data. Perhaps there just isn&#39;t a value for that row.</p><p>To help with that, we&#39;ve added two new commands: <code>default</code> and <code>compact</code>.</p><p>Default, as the name implies, will allow you to give blank spots a default value. Compact instead will allow you to remove a row if there&#39;s a blank in that position.</p><p>Here&#39;s an example of default:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> amigos.json <span class="token operator">|</span> get amigos
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name      \u2502 rusty_luck</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Yehuda    \u2502          <span class="token number">1</span>
 <span class="token number">1</span> \u2502 Jonathan  \u2502          <span class="token number">1</span>
 <span class="token number">2</span> \u2502 Andres    \u2502          <span class="token number">1</span>
 <span class="token number">3</span> \u2502 GorbyPuff \u2502
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>We can default the missing column from the table like this:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> amigos.json <span class="token operator">|</span> get amigos <span class="token operator">|</span> default rusty_luck <span class="token number">1</span> giving:

\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name     \u2502 rusty_luck</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Yehuda   \u2502          <span class="token number">1</span>
 <span class="token number">1</span> \u2502 Jonathan \u2502          <span class="token number">1</span>
 <span class="token number">2</span> \u2502 Andres   \u2502          <span class="token number">1</span>
 <span class="token number">3</span> \u2502 GorbyPuff\u2502          <span class="token number">1</span>
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><h2 id="format-jonathandturner" tabindex="-1"><a class="header-anchor" href="#format-jonathandturner" aria-hidden="true">#</a> format (jonathandturner)</h2><p>To add to the abilities of outputting tables of various into readable strings, we&#39;ve recently added the <code>format</code> command. This allows you to convert table data into a string by following a formatting pattern:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">format</span> <span class="token string">&quot;name is {name}&quot;</span>
\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment">#  \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 name is .azure
  <span class="token number">1</span> \u2502 name is features.toml
  <span class="token number">2</span> \u2502 name is Cargo.toml
  <span class="token number">3</span> \u2502 name is LICENSE
  <span class="token number">4</span> \u2502 name is target
  <span class="token number">5</span> \u2502 name is images
  <span class="token number">6</span> \u2502 name is tests
</code></pre></div><h2 id="from-xlsx-jonathandturner" tabindex="-1"><a class="header-anchor" href="#from-xlsx-jonathandturner" aria-hidden="true">#</a> from-xlsx (jonathandturner)</h2><p>We now have an early start at Excel support. With it, you can now import Excel files as tables.</p><h1 id="on-going-improvements" tabindex="-1"><a class="header-anchor" href="#on-going-improvements" aria-hidden="true">#</a> On-going improvements</h1><p>Lots of improvements to existing commands this time around.</p><h2 id="simple-and-full-ls-jonathandturner" tabindex="-1"><a class="header-anchor" href="#simple-and-full-ls-jonathandturner" aria-hidden="true">#</a> Simple and full <code>ls</code> (jonathandturner)</h2><p>To make <code>ls</code> work better on smaller terminals (including the bog standard 80x24 login size), we&#39;ve shrunk <code>ls</code> a tiny bit by default. Have no worry, though, the original columns and more are available in the new <code>ls --full</code>.</p><h2 id="fuzzy-matching-bndbsh" tabindex="-1"><a class="header-anchor" href="#fuzzy-matching-bndbsh" aria-hidden="true">#</a> Fuzzy matching (bndbsh)</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token string">&quot;yml&quot;</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 name        \u2502 <span class="token builtin class-name">type</span> \u2502 size  \u2502 accessed   \u2502 modified
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 .gitpod.yml \u2502 File \u2502 <span class="token number">780</span> B \u2502 a week ago \u2502 a week ago
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>A long-requested feature is the ability to match strings a bit more fuzzily. With 0.6.0, you&#39;ll be able to do just that with the new <code>=~</code> (fuzzy match to include) and <code>!~</code> (fuzzy match to exclude) commands.</p><h2 id="from-csv-now-with-separator-drmason13" tabindex="-1"><a class="header-anchor" href="#from-csv-now-with-separator-drmason13" aria-hidden="true">#</a> <code>from-csv</code>, now with separator (drmason13)</h2><p>Sometimes you might find a .csv file in the wild that uses a different separator than comma. You can now configure <code>from-csv</code> to use a different character as the separator using, for example, <code>from-csv --separator &quot;;&quot;</code>.</p><h2 id="nth-can-take-multiple-row-numbers-andrasio" tabindex="-1"><a class="header-anchor" href="#nth-can-take-multiple-row-numbers-andrasio" aria-hidden="true">#</a> nth can take multiple row numbers (andrasio)</h2><p>You can now pass multiple row numbers to <code>nth</code>. For example <code>nth 1 3 5</code> will return those three separate rows as a new table.</p><h2 id="column-paths-can-now-include-row-numbers-wycats-andrasio" tabindex="-1"><a class="header-anchor" href="#column-paths-can-now-include-row-numbers-wycats-andrasio" aria-hidden="true">#</a> Column paths can now include row numbers (wycats, andrasio)</h2><p>Sometimes when you&#39;re trying to get to data inside an inner table, you want to describe travelling through a particular row to get there. With recent improvements, you can now include the row number in the column path (assuming it is not the first part of the path).</p><h2 id="duration-support-jonathandturner-aloso" tabindex="-1"><a class="header-anchor" href="#duration-support-jonathandturner-aloso" aria-hidden="true">#</a> Duration support (jonathandturner, Aloso)</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="token function">ls</span> <span class="token operator">|</span> where accessed <span class="token operator">&lt;</span> 1w
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 name          \u2502 type      \u2502 size     \u2502 accessed    \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Cargo.toml    \u2502 File      \u2502   <span class="token number">4.7</span> KB \u2502 an hour ago \u2502 an hour ago
 <span class="token number">1</span> \u2502 Makefile.toml \u2502 File      \u2502    <span class="token number">449</span> B \u2502 <span class="token number">2</span> days ago  \u2502 <span class="token number">2</span> days ago
 <span class="token number">2</span> \u2502 README.md     \u2502 File      \u2502  <span class="token number">19.5</span> KB \u2502 an hour ago \u2502 an hour ago
 <span class="token number">3</span> \u2502 Cargo.lock    \u2502 File      \u2502 <span class="token number">170.7</span> KB \u2502 an hour ago \u2502 an hour ago
 <span class="token number">4</span> \u2502 crates        \u2502 Directory \u2502   <span class="token number">4.1</span> KB \u2502 an hour ago \u2502 an hour ago
 <span class="token number">5</span> \u2502 TODO.md       \u2502 File      \u2502   <span class="token number">1.3</span> KB \u2502 an hour ago \u2502 an hour ago
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>It&#39;s now possible to use duration values in Nu. This allows us to check for files accessed less than a week ago, as you see in the example above.</p><h2 id="renamed-read-to-parse-jonathandturner" tabindex="-1"><a class="header-anchor" href="#renamed-read-to-parse-jonathandturner" aria-hidden="true">#</a> Renamed <code>read</code> to <code>parse</code> (jonathandturner)</h2><p>To help with at-a-glance readability, we&#39;ve renamed <code>read</code> to <code>parse</code>. While <code>read</code> felt more friendly, it could easily be confused for reading input, reading a file, etc.</p><h1 id="general-improvements-wycats-thegedge-drmason13-jonathandturner-uma1317-jesterornot-andrasio-burniintree" tabindex="-1"><a class="header-anchor" href="#general-improvements-wycats-thegedge-drmason13-jonathandturner-uma1317-jesterornot-andrasio-burniintree" aria-hidden="true">#</a> General improvements (wycats, thegedge, drmason13, jonathandturner, uma1317, JesterOrNot, andrasio, BurNiinTRee)</h1><p>There has been a ton of work behind the scenes on Nu itself. We now have a much-improved internal debugging system and better module separation courtesy of wycats. There are also a number of general cleanups and bugfixes that have gone into the release.</p><h1 id="survey-results" tabindex="-1"><a class="header-anchor" href="#survey-results" aria-hidden="true">#</a> Survey results</h1>`,45),V=a("We recently ran a survey to ask Nu users/non-users what they thought of Nu. If you're interested, definitely check out the "),H={href:"https://www.nushell.sh/blog/2019-11-23-nushell-survey-results.html",target:"_blank",rel:"noopener noreferrer"},G=a("results of the survey"),J=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),a(" Looking ahead")],-1),U=a(`We're still hard at work on "MVP #2". It will be the next milestone on our way to the eventual 1.0. If you'd like to help with code, docs, translation, testing, or just want to come chat and throw ideas around, we'd love to have you! You can find us on `),Q=e("a",{href:""},"discord",-1),X=a(", "),Z={href:"https://twitter.com/nu_shell",target:"_blank",rel:"noopener noreferrer"},$=a("twitter"),ee=a(", and "),ae={href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"},ne=a("github"),se=a(".");function te(oe,re){const n=l("ExternalLinkIcon");return r(),i("div",null,[h,u,d,m,e("p",null,[g,e("a",b,[f,s(n)]),w,e("a",k,[_,s(n)]),y,v,x,N,j]),I,W,e("p",null,[z,e("a",S,[T,s(n)]),A]),e("p",null,[B,e("a",O,[C,s(n)]),E]),q,e("p",null,[R,e("a",L,[P,s(n)]),Y,e("a",F,[K,s(n)]),M]),D,e("p",null,[V,e("a",H,[G,s(n)])]),J,e("p",null,[U,Q,X,e("a",Z,[$,s(n)]),ee,e("a",ae,[ne,s(n)]),se])])}var le=o(p,[["render",te],["__file","2019-11-26-nushell-0_6_0.html.vue"]]);export{le as default};
