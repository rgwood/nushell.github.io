import{_ as i,r as o,o as r,c,a as e,b as n,w as d,d as s,e as a}from"./app.d8025251.js";const u={},h=e("h1",{id:"installing-nu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-nu","aria-hidden":"true"},"#"),s(" Installing Nu")],-1),p=s("There are lots of ways to get Nu up and running. You can download pre-built binaries from our "),_={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},g=s("release page"),b=s(", "),f={href:"https://repology.org/project/nushell/versions",target:"_blank",rel:"noopener noreferrer"},m=s("use your favourite package manager"),k=s(", or build from source."),w=e("h2",{id:"pre-built-binaries",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pre-built-binaries","aria-hidden":"true"},"#"),s(" Pre-built binaries")],-1),v=s("Nu binaries are published for Linux, macOS, and Windows "),y={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},x=s("with each GitHub release"),q=s(". Just download, extract the binaries, then copy them to a location on your PATH."),N=e("h2",{id:"package-managers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#package-managers","aria-hidden":"true"},"#"),s(" Package managers")],-1),T=e("p",null,"Nu is available via several package managers:",-1),S={href:"https://repology.org/project/nushell/versions",target:"_blank",rel:"noopener noreferrer"},R=e("img",{src:"https://repology.org/badge/vertical-allrepos/nushell.svg",alt:"Packaging status"},null,-1),C=s("For macOS and Linux, "),L={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},W=s("Homebrew"),H=s(" is a popular choice ("),I=e("code",null,"brew install nushell",-1),P=s(")."),O=e("p",null,"For Windows:",-1),V={href:"https://docs.microsoft.com/en-us/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},B=s("Winget"),Y=s(" ("),F=e("code",null,"winget install nushell",-1),E=s(")"),A={href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"},G=s("Chocolatey"),j=s(" ("),D=e("code",null,"choco install nushell",-1),J=s(")"),M={href:"https://scoop.sh/",target:"_blank",rel:"noopener noreferrer"},X=s("Scoop"),U=s(" ("),$=e("code",null,"scoop install nu",-1),z=s(")"),K=a('<p>The main Nushell binary is named <code>nu</code> (or <code>nu.exe</code> on Windows). After installation, you can launch it by typing <code>nu</code>.</p><h2 id="build-from-source" tabindex="-1"><a class="header-anchor" href="#build-from-source" aria-hidden="true">#</a> Build from source</h2><p>You can also build Nu from source. First, you will need to set up the Rust toolchain and its dependencies.</p><h3 id="installing-a-compiler-suite" tabindex="-1"><a class="header-anchor" href="#installing-a-compiler-suite" aria-hidden="true">#</a> Installing a compiler suite</h3><p>For Rust to work properly, you&#39;ll need to have a compatible compiler suite installed on your system. These are the recommended compiler suites:</p>',5),Q=e("li",null,"Linux: GCC or Clang",-1),Z=e("li",null,"macOS: Clang (install Xcode)",-1),ee=s("Windows: MSVC (install "),se={href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"},ne=s("Visual Studio"),te=s(" or the "),ae={href:"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022",target:"_blank",rel:"noopener noreferrer"},oe=s("Visual Studio Build Tools"),le=s(") "),ie=e("ul",null,[e("li",null,'Make sure to install the "Desktop development with C++" workload'),e("li",null,"Any Visual Studio edition will work (Community is free)")],-1),re=e("h3",{id:"installing-rust",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-rust","aria-hidden":"true"},"#"),s(" Installing Rust")],-1),ce=s("If we don't already have Rust on our system, the best way to install it is via "),de={href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"},ue=s("rustup"),he=s(". Rustup is a way of managing Rust installations, including managing using different Rust versions."),pe=a(`<p>Nu currently requires the <strong>latest stable (1.60 or later)</strong> version of Rust. The best way is to let <code>rustup</code> find the correct version for you. When you first open <code>rustup</code> it will ask what version of Rust you wish to install:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Current installation options:

default <span class="token function">host</span> triple: x86_64-unknown-linux-gnu
default toolchain: stable
profile: default
modify <span class="token environment constant">PATH</span> variable: <span class="token function">yes</span>

<span class="token number">1</span><span class="token punctuation">)</span> Proceed with installation <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token punctuation">)</span> Customize installation
<span class="token number">3</span><span class="token punctuation">)</span> Cancel installation
</code></pre></div><p>Once we are ready, we press 1 and then enter.</p><p>If you&#39;d rather not install Rust via <code>rustup</code>, you can also install it via other methods (e.g. from a package in a Linux distro). Just be sure to install a version of Rust that is 1.60 or later.</p><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h3><h4 id="debian-ubuntu" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu" aria-hidden="true">#</a> Debian/Ubuntu</h4><p>You will need to install the &quot;pkg-config&quot; and &quot;libssl-dev&quot; package:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> pkg-config libssl-dev
</code></pre></div><p>Linux users who wish to use the <code>rawkey</code> or <code>clipboard</code> optional features will need to install the &quot;libx11-dev&quot; and &quot;libxcb-composite0-dev&quot; packages:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> libxcb-composite0-dev libx11-dev
</code></pre></div><h4 id="rhel-based-distros" tabindex="-1"><a class="header-anchor" href="#rhel-based-distros" aria-hidden="true">#</a> RHEL based distros</h4><p>You will need to install &quot;libxcb&quot;, &quot;openssl-devel&quot; and &quot;libX11-devel&quot;:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> libxcb openssl-devel libX11-devel
</code></pre></div><h4 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h4>`,14),_e=s("Using "),ge={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},be=s("Homebrew"),fe=s(', you will need to install "openssl" and "cmake" using:'),me=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[s("brew "),e("span",{class:"token function"},"install"),s(` openssl cmake
`)])])],-1),ke={id:"build-using-crates-io",tabindex:"-1"},we=e("a",{class:"header-anchor",href:"#build-using-crates-io","aria-hidden":"true"},"#",-1),ve=s(" Build using "),ye={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},xe=s("crates.io"),qe=s("Nu releases are published as source to the popular Rust package registry "),Ne={href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"},Te=s("crates.io"),Se=s(". This makes it easy to build+install the latest Nu release with "),Re=e("code",null,"cargo",-1),Ce=s(":"),Le=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cargo</span> <span class="token function">install</span> nu
</code></pre></div><p>That&#39;s it! The <code>cargo</code> tool will do the work of downloading Nu and its source dependencies, building it, and installing it into the cargo bin path so we can run it.</p>`,2),We=s("If you want to install with support for "),He=s("dataframes"),Ie=s(", you can install using the "),Pe=e("code",null,"--features=dataframe",-1),Oe=s(" flag."),Ve=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cargo</span> <span class="token function">install</span> nu <span class="token parameter variable">--features</span><span class="token operator">=</span>dataframe
</code></pre></div><p>Once installed, we can run Nu using the <code>nu</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ nu
/home/jt/Source<span class="token operator">&gt;</span>
</code></pre></div><h3 id="building-from-the-github-repository" tabindex="-1"><a class="header-anchor" href="#building-from-the-github-repository" aria-hidden="true">#</a> Building from the GitHub repository</h3><p>We can also build our own Nu from the latest source on GitHub. This gives us immediate access to the latest features and bug fixes. First, clone the repo:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/nushell/nushell.git
</code></pre></div><p>From there, we can build and run Nu with:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> nushell
nushell<span class="token operator">&gt;</span> <span class="token function">cargo</span> build <span class="token parameter variable">--workspace</span> <span class="token operator">&amp;&amp;</span> <span class="token function">cargo</span> run
</code></pre></div><p>You can also build and run Nu in release mode:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>nushell<span class="token operator">&gt;</span> <span class="token function">cargo</span> build <span class="token parameter variable">--release</span> <span class="token parameter variable">--workspace</span> <span class="token operator">&amp;&amp;</span> <span class="token function">cargo</span> run <span class="token parameter variable">--release</span>
</code></pre></div><p>People familiar with Rust may wonder why we do both a &quot;build&quot; and a &quot;run&quot; step if &quot;run&quot; does a build by default. This is to get around a shortcoming of the new <code>default-run</code> option in Cargo, and ensure that all plugins are built, though this may not be required in the future.</p><h2 id="setting-the-login-shell-nix" tabindex="-1"><a class="header-anchor" href="#setting-the-login-shell-nix" aria-hidden="true">#</a> Setting the login shell (*nix)</h2><p><strong>!!! Nu is still in development, and may not be stable for everyday use. !!!</strong></p>`,13),Be=s("To set the login shell you can use the "),Ye={href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"},Fe=e("code",null,"chsh",-1),Ee=s(" command. Some Linux distributions have a list of valid shells located in "),Ae=e("code",null,"/etc/shells",-1),Ge=s(" and will disallow changing the shell until Nu is in the whitelist. You may see an error similar to the one below if you haven't updated the "),je=e("code",null,"shells",-1),De=s(" file:"),Je=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`chsh: /home/username/.cargo/bin/nu is an invalid shell
`)])],-1),Me=e("p",null,[s("You can add Nu to the list of allowed shells by appending your Nu binary to the "),e("code",null,"shells"),s(" file. The path to add can be found with the command "),e("code",null,"which nu"),s(", usually it is "),e("code",null,"$HOME/.cargo/bin/nu"),s(".")],-1),Xe=e("h2",{id:"setting-the-default-shell-windows-terminal",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-the-default-shell-windows-terminal","aria-hidden":"true"},"#"),s(" Setting the default shell (Windows Terminal)")],-1),Ue=s("If you are using "),$e={href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"},ze=s("Windows Terminal"),Ke=s(" you can set "),Qe=e("code",null,"nu",-1),Ze=s(" as your default shell by adding:"),es=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;guid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
  <span class="token string">&quot;hidden&quot;</span><span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;icon&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://www.nushell.sh/icon.png&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Nu Shell&quot;</span>,
  <span class="token string">&quot;commandline&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;nu.exe&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>to <code>&quot;profiles&quot;</code> in your Terminal Settings (JSON-file). The last thing to do is to change the <code>&quot;defaultProfile&quot;</code> to:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;defaultProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
</code></pre></div><p>Now, <code>nu</code> should load on startup of the Windows Terminal.</p>`,4);function ss(ns,ts){const t=o("ExternalLinkIcon"),l=o("RouterLink");return r(),c("div",null,[h,e("p",null,[p,e("a",_,[g,n(t)]),b,e("a",f,[m,n(t)]),k]),w,e("p",null,[v,e("a",y,[x,n(t)]),q]),N,T,e("p",null,[e("a",S,[R,n(t)])]),e("p",null,[C,e("a",L,[W,n(t)]),H,I,P]),O,e("ul",null,[e("li",null,[e("a",V,[B,n(t)]),Y,F,E]),e("li",null,[e("a",A,[G,n(t)]),j,D,J]),e("li",null,[e("a",M,[X,n(t)]),U,$,z])]),K,e("ul",null,[Q,Z,e("li",null,[ee,e("a",se,[ne,n(t)]),te,e("a",ae,[oe,n(t)]),le,ie])]),re,e("p",null,[ce,e("a",de,[ue,n(t)]),he]),pe,e("p",null,[_e,e("a",ge,[be,n(t)]),fe]),me,e("h3",ke,[we,ve,e("a",ye,[xe,n(t)])]),e("p",null,[qe,e("a",Ne,[Te,n(t)]),Se,Re,Ce]),Le,e("p",null,[We,n(l,{to:"/book/dataframes.html"},{default:d(()=>[He]),_:1}),Ie,Pe,Oe]),Ve,e("p",null,[Be,e("a",Ye,[Fe,n(t)]),Ee,Ae,Ge,je,De]),Je,Me,Xe,e("p",null,[Ue,e("a",$e,[ze,n(t)]),Ke,Qe,Ze]),es])}const os=i(u,[["render",ss],["__file","installation.html.vue"]]);export{os as default};
