import{_ as o,r as l,o as i,c as r,a as e,b as a,d as s,e as t}from"./app.43db386a.js";const c={},u=e("h1",{id:"installing-nu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-nu","aria-hidden":"true"},"#"),s(" Installing Nu")],-1),d=s("The best way currently to get Nu up and running is to install from "),h={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},p=s("crates.io"),g=s(", download pre-built binaries from our "),_={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},b=s("release page"),f=s(", or build from source."),m=e("h2",{id:"pre-built-binaries",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pre-built-binaries","aria-hidden":"true"},"#"),s(" Pre-built binaries")],-1),k=s("You can download Nu pre-built from the "),w={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},v=s("release page"),y=s(". Alternatively, if you use "),x={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},q=s("Homebrew"),N=s(" for macOS or Linux, you can install the binary by running "),R=e("code",null,"brew install nushell",-1),T=s(", and if you use "),C={href:"https://docs.microsoft.com/en-us/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},S=s("Winget"),W=s(" on Windows, you can install Nu by running "),I=e("code",null,"winget install nu",-1),O=s("."),P=e("h3",{id:"windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),s(" Windows")],-1),L=e("p",null,[e("strong",null,"Please note:"),s(" Nu works on Windows 10 and does not currently have Windows 7/8.1 support.")],-1),E=s("Download the current released "),F=e("code",null,".zip",-1),H=s("-file from the "),V={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},Y=s("release page"),B=s(" and extract it for example to:"),A=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Program Files
</code></pre></div><p>And then add the folder of <code>nu</code> to your PATH. Once we have done that, we can run Nu using the <code>nu</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>
</code></pre></div>`,3),D=s("If you are using "),G={href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"},U=s("Windows Terminal"),X=s(" you can set "),z=e("code",null,"nu",-1),J=s(" as your default shell by adding:"),$=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;guid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
  <span class="token string">&quot;hidden&quot;</span><span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;icon&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://www.nushell.sh/icon.png&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Nu Shell&quot;</span>,
  <span class="token string">&quot;commandline&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;nu.exe&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>to <code>&quot;profiles&quot;</code> in your Terminal Settings (JSON-file). The last thing to do is to change the <code>&quot;defaultProfile&quot;</code> to:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;defaultProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
</code></pre></div><p>Now, <code>nu</code> should load on startup of the Windows Terminal.</p><h2 id="getting-ready" tabindex="-1"><a class="header-anchor" href="#getting-ready" aria-hidden="true">#</a> Getting Ready</h2><p>Before we can install Nu, we need to make sure our system has the necessary requirements. Currently, this means making sure we have both the Rust toolchain and local dependencies installed.</p><h3 id="installing-a-compiler-suite" tabindex="-1"><a class="header-anchor" href="#installing-a-compiler-suite" aria-hidden="true">#</a> Installing a compiler suite</h3><p>For Rust to work properly, you&#39;ll need to have a compatible compiler suite installed on your system. These are the recommended compiler suites:</p>`,8),j=e("li",null,"Linux: GCC or Clang",-1),M=e("li",null,"macOS: Clang (install Xcode)",-1),K=s("Windows: "),Q={href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"},Z=s("Visual Studio Community Edition"),ee=e("p",null,[s('For Windows, when you install Visual Studio Community Edition, make sure to install the "C++ build tools" as what we need is '),e("code",null,"link.exe"),s(" which is provided as part of that optional install. With that, we're ready to move to the next step.")],-1),se=e("h3",{id:"installing-rust",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-rust","aria-hidden":"true"},"#"),s(" Installing Rust")],-1),ne=s("If we don't already have Rust on our system, the best way to install it is via "),ae={href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"},te=s("rustup"),oe=s(". Rustup is a way of managing Rust installations, including managing using different Rust versions."),le=t(`<p>Nu currently requires the <strong>latest stable (1.55 or later)</strong> version of Rust. The best way is to let <code>rustup</code> find the correct version for you. When you first open <code>rustup</code> it will ask what version of Rust you wish to install:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Current installation options:

default <span class="token function">host</span> triple: x86_64-unknown-linux-gnu
default toolchain: stable
profile: default
modify <span class="token environment constant">PATH</span> variable: <span class="token function">yes</span>

<span class="token number">1</span><span class="token punctuation">)</span> Proceed with installation <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token punctuation">)</span> Customize installation
<span class="token number">3</span><span class="token punctuation">)</span> Cancel installation
</code></pre></div><p>Once we are ready, we press 1 and then enter.</p><p>If you&#39;d rather not install Rust via <code>rustup</code>, you can also install it via other methods (e.g. from a package in a Linux distro). Just be sure to install a version of Rust that is 1.55 or later.</p><h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h2><h3 id="debian-ubuntu" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu" aria-hidden="true">#</a> Debian/Ubuntu</h3><p>You will need to install the &quot;pkg-config&quot; and &quot;libssl-dev&quot; package:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> pkg-config libssl-dev
</code></pre></div><p>Linux users who wish to use the <code>rawkey</code> or <code>clipboard</code> optional features will need to install the &quot;libx11-dev&quot; and &quot;libxcb-composite0-dev&quot; packages:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> libxcb-composite0-dev libx11-dev
</code></pre></div><h3 id="rhel-based-distros" tabindex="-1"><a class="header-anchor" href="#rhel-based-distros" aria-hidden="true">#</a> RHEL based distros</h3><p>You will need to install &quot;libxcb&quot;, &quot;openssl-devel&quot; and &quot;libX11-devel&quot;:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> libxcb openssl-devel libX11-devel
</code></pre></div><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3>`,14),ie=s("Using "),re={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},ce=s("Homebrew"),ue=s(', you will need to install the "openssl" and "cmake" using:'),de=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[s("brew "),e("span",{class:"token function"},"install"),s(` openssl cmake
`)])])],-1),he={id:"installing-from-crates-io",tabindex:"-1"},pe=e("a",{class:"header-anchor",href:"#installing-from-crates-io","aria-hidden":"true"},"#",-1),ge=s(" Installing from "),_e={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},be=s("crates.io"),fe=t(`<p>Once we have the dependencies Nu needs, we can install it using the <code>cargo</code> command that comes with the Rust compiler.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> cargo <span class="token function">install</span> nu
</code></pre></div><p>That&#39;s it! The cargo tool will do the work of downloading Nu and its source dependencies, building it, and installing it into the cargo bin path so that we can run it.</p><p>If you want to install with more features, you can use:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> cargo <span class="token function">install</span> nu --features<span class="token operator">=</span>extra
</code></pre></div><p>For all the available features, the easiest way is to check out Nu and build it yourself using the same Rust tools:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/nushell/nushell.git
<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> nushell
nushell<span class="token operator">&gt;</span> cargo <span class="token function">install</span> --path <span class="token builtin class-name">.</span> --features<span class="token operator">=</span>extra
</code></pre></div><p>For this to work, make sure you have all the dependencies (shown above) on your system.</p><p>Once installed, we can run Nu using the <code>nu</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ nu
/home/jt/Source<span class="token operator">&gt;</span>
</code></pre></div><h2 id="building-from-source" tabindex="-1"><a class="header-anchor" href="#building-from-source" aria-hidden="true">#</a> Building from source</h2><p>We can also build our own Nu from source directly from github. This gives us immediate access to the latest Nu features and bug fixes.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/nushell/nushell.git
</code></pre></div><p>Git will clone the main nushell repo for us. From there, we can build and run Nu if we are using <code>rustup</code> with:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> nushell
nushell<span class="token operator">&gt;</span> cargo build --workspace --features<span class="token operator">=</span>extra <span class="token operator">&amp;&amp;</span> cargo run --features<span class="token operator">=</span>extra
</code></pre></div><p>You can also build and run Nu in release mode:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>nushell<span class="token operator">&gt;</span> cargo build --release --workspace --features<span class="token operator">=</span>extra <span class="token operator">&amp;&amp;</span> cargo run --release --features<span class="token operator">=</span>extra
</code></pre></div><p>People familiar with Rust may wonder why we do both a &quot;build&quot; and a &quot;run&quot; step if &quot;run&quot; does a build by default. This is to get around a shortcoming of the new <code>default-run</code> option in Cargo, and ensure that all plugins are built, though this may not be required in the future.</p><h2 id="setting-as-your-login-shell" tabindex="-1"><a class="header-anchor" href="#setting-as-your-login-shell" aria-hidden="true">#</a> Setting as your login shell</h2><p><strong>!!! Nu is still in development, and may not be stable for everyday use. !!!</strong></p>`,20),me=s("To set the login shell you can use the "),ke={href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"},we=e("code",null,"chsh",-1),ve=s(" command. Some Linux distributions have a list of valid shells located in "),ye=e("code",null,"/etc/shells",-1),xe=s(" and will disallow changing the shell until Nu is in the whitelist. You may see an error similar to the one below if you haven't updated the "),qe=e("code",null,"shells",-1),Ne=s(" file:"),Re=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`chsh: /home/username/.cargo/bin/nu is an invalid shell
`)])],-1),Te=e("p",null,[s("You can add Nu to the list of allowed shells by appending your Nu binary to the "),e("code",null,"shells"),s(" file. The path to add can be found with the command "),e("code",null,"which nu"),s(", usually it is "),e("code",null,"$HOME/.cargo/bin/nu"),s(".")],-1);function Ce(Se,We){const n=l("ExternalLinkIcon");return i(),r("div",null,[u,e("p",null,[d,e("a",h,[p,a(n)]),g,e("a",_,[b,a(n)]),f]),m,e("p",null,[k,e("a",w,[v,a(n)]),y,e("a",x,[q,a(n)]),N,R,T,e("a",C,[S,a(n)]),W,I,O]),P,L,e("p",null,[E,F,H,e("a",V,[Y,a(n)]),B]),A,e("p",null,[D,e("a",G,[U,a(n)]),X,z,J]),$,e("ul",null,[j,M,e("li",null,[K,e("a",Q,[Z,a(n)])])]),ee,se,e("p",null,[ne,e("a",ae,[te,a(n)]),oe]),le,e("p",null,[ie,e("a",re,[ce,a(n)]),ue]),de,e("h2",he,[pe,ge,e("a",_e,[be,a(n)])]),fe,e("p",null,[me,e("a",ke,[we,a(n)]),ve,ye,xe,qe,Ne]),Re,Te])}var Oe=o(c,[["render",Ce],["__file","installation.html.vue"]]);export{Oe as default};
