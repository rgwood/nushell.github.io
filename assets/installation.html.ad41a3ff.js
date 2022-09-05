import{_ as o,r as i,o as l,c as r,a as e,b as a,d as n,e as t}from"./app.62da7227.js";const d={},c=e("h1",{id:"nu-installieren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nu-installieren","aria-hidden":"true"},"#"),n(" Nu installieren")],-1),u=n("Der aktuell beste Weg Nu zu bekommen ist, es von "),h={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},p=n("crates.io"),g=n(" zu installieren, Bin\xE4rdateien von unserer "),_={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},b=n("Release-Seite"),k=n(" herunterzuladen oder es selbst zu kompilieren."),m=e("h2",{id:"binardatei",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#binardatei","aria-hidden":"true"},"#"),n(" Bin\xE4rdatei")],-1),f=n("Von der "),v={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},w=n("Release-Seite"),x=n(" kann Nushell bereits kompiliert heruntergeladen werden. Alternativ kann Nushell, wenn "),z={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},S=n("Homebrew"),q=n(" verwendet wird, mit dem Befehl "),N=e("code",null,"brew install nushell",-1),D=n(" installiert werden. Unter Windows k\xF6nnen "),C={href:"https://docs.microsoft.com/en-us/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},W=n("Winget"),R=n(" oder "),P={href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"},V=n("Chocolatey"),B=n(" zur Installation verwendet werden: "),L=e("code",null,"winget install nushell",-1),y=n(" beziehungsweise "),A=e("code",null,"choco install nushell",-1),E=n("."),F=e("h3",{id:"windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),n(" Windows")],-1),H=e("p",null,[e("strong",null,"Achtung:"),n(" Nu funtioniert aktuell auf Windows 10 und hat keine Unterst\xFCtzung f\xFCr Windows 7/8.1.")],-1),T=n("Die aktuelle, ver\xF6ffentlichte "),U=e("code",null,".zip",-1),I=n("-Datei von der "),M={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},O=n("Release-Seite"),G=n(" herunterladen und den Inhalt extrahieren nach:"),J=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Program Files
</code></pre></div><p>Danach den <code>nu</code> beinhaltenden Ordner der Umgebungsvariable PATH hinzuf\xFCgen. Wenn das passiert ist, kann <code>nu</code> wie folgt gestartet werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>
</code></pre></div>`,3),X=n("F\xFCr Nutzer des "),Q={href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"},Z=n("Windows Terminal"),$=n(" kann "),j=e("code",null,"nu",-1),K=n(" als Standard-Shell gesetzt werden, indem:"),Y=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;guid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
  <span class="token string">&quot;hidden&quot;</span><span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;icon&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://www.nushell.sh/icon.png&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Nu Shell&quot;</span>,
  <span class="token string">&quot;commandline&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;nu.exe&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>zu <code>&quot;profiles&quot;</code> in den Terminal Einstellungen (JSON-Datei) hinzuf\xFCgt wird. Zu guter Letzt, muss nur noch <code>&quot;defaultProfile&quot;</code> angepasst werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;defaultProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
</code></pre></div><p>Jetzt sollte sich <code>nu</code> beim Start von Windows Terminal \xF6ffnen.</p><h2 id="vorbereitungen" tabindex="-1"><a class="header-anchor" href="#vorbereitungen" aria-hidden="true">#</a> Vorbereitungen</h2><p>Bevor Nu installiert werden kann, muss sichergestellt werden, dass das System die n\xF6tigen Anforderungen erf\xFCllt. Aktuell bedeutet das sicherzustellen, dass die Rust-Toolchain und lokale Abh\xE4ngigkeiten installiert sind.</p><h3 id="installieren-einer-compiler-suite" tabindex="-1"><a class="header-anchor" href="#installieren-einer-compiler-suite" aria-hidden="true">#</a> Installieren einer Compiler-Suite</h3><p>Damit Rust richtig funktioniert, muss eine kompatible Compiler-Suite auf dem System installiert sein. Die empfohlenen Compiler-Suites sind:</p>`,8),ee=e("li",null,"Linux: GCC oder Clang",-1),ne=e("li",null,"macOS: Clang (Xcode installieren)",-1),se=n("Windows: MSVC (installieren von "),ae={href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"},te=n("Visual Studio Community Edition"),oe=n(" oder der "),ie={href:"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022",target:"_blank",rel:"noopener noreferrer"},le=n("Visual Studio Build Tools"),re=n(") "),de=e("ul",null,[e("li",null,'Sicherstellen, dass "Desktop development with C++" installiert wird'),e("li",null,"Jede Visual Studio Edition sollte funktionieren (Community ist gratis)")],-1),ce=e("h3",{id:"rust-installieren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rust-installieren","aria-hidden":"true"},"#"),n(" Rust installieren")],-1),ue=n("Wenn Rust noch nicht auf dem System installiert ist, ist "),he={href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"},pe=n("rustup"),ge=n(" der beste Weg es zu bekommen. Rustup ist ein Programm um Rust-Installationen zu managen wie beispielsweise verschiedene Rust-Versionen."),_e=t(`<p>Nu ben\xF6tigt aktuell die <strong>latest stable (1.55 oder neuer)</strong> Version von Rust. Der einfachste Weg ist es, <code>rustup</code> die korrekte Version f\xFCr finden zu lassen. Wenn <code>rustup</code> zum ersten Mal gestartet wird, wird nachgefragt, welche Version installiert werden soll:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Current installation options:

default <span class="token function">host</span> triple: x86_64-unknown-linux-gnu
default toolchain: stable
profile: default
modify <span class="token environment constant">PATH</span> variable: <span class="token function">yes</span>

<span class="token number">1</span><span class="token punctuation">)</span> Proceed with installation <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token punctuation">)</span> Customize installation
<span class="token number">3</span><span class="token punctuation">)</span> Cancel installation
</code></pre></div><p>Wenn Sie bereit sind, dr\xFCcken Sie <code>1</code> und dann <code>Enter</code>.</p><p>Wenn Rust nicht via <code>rustup</code> installiert werden soll, k\xF6nnen auch andere Methoden verwendet werden um es zu installieren (z.B. vom Paketmanager der Linux-Distro). Dabei muss sichergestellt werden, dass es sich um Rust-Version 1.55 oder neuer handelt.</p><h2 id="abhangigkeiten" tabindex="-1"><a class="header-anchor" href="#abhangigkeiten" aria-hidden="true">#</a> Abh\xE4ngigkeiten</h2><h3 id="debian-ubuntu" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu" aria-hidden="true">#</a> Debian/Ubuntu</h3><p>Es m\xFCssen die Pakete <code>pkg-config</code> und <code>libssl-dev</code> installiert werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> pkg-config libssl-dev
</code></pre></div><p>Linux-Nutzer die die optionalen Funktionen <code>rawkey</code> und <code>clipboard</code> verwenden m\xF6chten, m\xFCssen au\xDFerdem die Pakete <code>libx11-dev</code> und <code>libxcb-composite0-dev</code> installieren:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> libxcb-composite0-dev libx11-dev
</code></pre></div><h3 id="rhel-basierte-distributionen" tabindex="-1"><a class="header-anchor" href="#rhel-basierte-distributionen" aria-hidden="true">#</a> RHEL basierte Distributionen</h3><p>F\xFCr RHEL basierte Distributionen m\xFCssen die Pakete <code>libxcb</code>, <code>openssl-devel</code> und <code>libX11-devel</code> installiert werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> libxcb openssl-devel libX11-devel
</code></pre></div><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3>`,14),be=n("Mittels "),ke={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},me=n("Homebrew"),fe=n(", m\xFCssen die Pakete "),ve=e("code",null,"openssl",-1),we=n(" und "),xe=e("code",null,"cmake",-1),ze=n(" \xFCber folgenden Befehl installiert werden:"),Se=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[n("brew "),e("span",{class:"token function"},"install"),n(` openssl cmake
`)])])],-1),qe={id:"installieren-von-crates-io",tabindex:"-1"},Ne=e("a",{class:"header-anchor",href:"#installieren-von-crates-io","aria-hidden":"true"},"#",-1),De=n(" Installieren von "),Ce={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},We=n("crates.io"),Re=t(`<p>Wenn alle die Abh\xE4ngigkeitenn, die f\xFCr Nu ben\xF6tigt werden, installiert sind, kann <code>cargo</code> verwendet werden um Nu zu installieren.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cargo</span> <span class="token function">install</span> nu
</code></pre></div><p>Das war&#39;s! Cargo wird Nu und seine anderen Abh\xE4ngigkeiten herunterladen, kompilieren und schlie\xDFlich im cargo <code>bin</code> Pfad installieren, damit es benutzt werden kann.</p><p>Wenn mehr Funktionalit\xE4ten installiert werden sollen, kann der folgende Befehl verwendet werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cargo</span> <span class="token function">install</span> nu <span class="token parameter variable">--features</span><span class="token operator">=</span>extra
</code></pre></div><p>Um alle verf\xFCgbaren Funktionalit\xE4ten zu bekommen, ist es am einfachsten einen Checkout durchzuf\xFChren und es selbst mit Hilfe der Rust-Tools zu kompilieren:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/nushell/nushell.git
<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> nushell
nushell<span class="token operator">&gt;</span> <span class="token function">cargo</span> <span class="token function">install</span> <span class="token parameter variable">--path</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--features</span><span class="token operator">=</span>extra
</code></pre></div><p>Damit das funktioniert, sollte sichergestellt werden, dass alle oben genannten Abh\xE4ngigkeiten auf dem System installiert sind.</p><p>Wenn Nu schlie\xDFlich installiert ist, kann die Shell mit dem <code>nu</code>-Befehl gestartet werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ nu
/home/jt/Source<span class="token operator">&gt;</span>
</code></pre></div><h2 id="kompilieren-von-quelldateien" tabindex="-1"><a class="header-anchor" href="#kompilieren-von-quelldateien" aria-hidden="true">#</a> Kompilieren von Quelldateien</h2><p>Nu kann auch direkt aus den Quelldateien, die auf GitHub verf\xFCgbar sind, kompiliert werden. Das stellt unmittelbar die neuesten Funktionen und Fehlerbehebungen von Nu zur Verf\xFCgung.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/nushell/nushell.git
</code></pre></div><p>Git clont das main nushell Repo. Von da aus, kann Nu, wenn <code>rustup</code> verwendet wird, wie folgt kompiliert und gestartet werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> nushell
nushell<span class="token operator">&gt;</span> <span class="token function">cargo</span> build <span class="token parameter variable">--workspace</span> <span class="token parameter variable">--features</span><span class="token operator">=</span>extra <span class="token operator">&amp;&amp;</span> <span class="token function">cargo</span> run <span class="token parameter variable">--features</span><span class="token operator">=</span>extra
</code></pre></div><p>Nu kann auch in &quot;release&quot; Modus kompiliert und gestartet werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>nushell<span class="token operator">&gt;</span> <span class="token function">cargo</span> build <span class="token parameter variable">--release</span> <span class="token parameter variable">--workspace</span> <span class="token parameter variable">--features</span><span class="token operator">=</span>extra <span class="token operator">&amp;&amp;</span> <span class="token function">cargo</span> run <span class="token parameter variable">--release</span> <span class="token parameter variable">--features</span><span class="token operator">=</span>extra
</code></pre></div><p>Leute, die sich mit Rust auskennen, wundern sich wom\xF6glich, warum hier sowohl ein <code>build</code> als auch ein <code>run</code> durchgef\xFChrt wird, obwohl <code>run</code> standardm\xE4\xDFig auch einen Build durchf\xFChrt. Das ist n\xF6tig, um ein Problem mit der neuen <code>default-run</code>-Option von Cargo zu umgehen, damit alle Plugins kompiliert werden. Dies wird unter Umst\xE4nden in Zukunft nicht mehr n\xF6tig sein.</p><h2 id="als-login-shell-verwenden" tabindex="-1"><a class="header-anchor" href="#als-login-shell-verwenden" aria-hidden="true">#</a> Als Login-Shell verwenden</h2><p><strong>!!! Nu befindet sich noch in der Entwicklung und ist unter Umst\xE4nden nicht stabil genug f\xFCr die t\xE4gliche Nutzung. !!!</strong></p>`,20),Pe=n("Um die Login-Shell festzulegen, kann der Befehl "),Ve={href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"},Be=e("code",null,"chsh",-1),Le=n(" verwendet werden. Manche Linux-Distributionen haben eine Liste von erlaubten Shells in "),ye=e("code",null,"/etc/shells",-1),Ae=n(" und verbieten es die Shell zu \xE4ndern, bis Nu in der Whitelist ist. Wenn die "),Ee=e("code",null,"shells",-1),Fe=n("-Datei nicht abge\xE4ndert wurde, erscheint vielleicht einen \xE4hnlichen Fehler, wie:"),He=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`chsh: /home/username/.cargo/bin/nu is an invalid shell
`)])],-1),Te=e("p",null,[n("Nu kann zur Liste der erlaubte Shells hinzugef\xFCgt werden, indem der Pfad von "),e("code",null,"nu"),n(" der "),e("code",null,"shells"),n("-Datei angef\xFCgt wird. Der Pfad, der hinzugef\xFCgt werden muss, kann mit dem Befehl "),e("code",null,"which nu"),n(" herausgefunden werden. Normalerweise ist es "),e("code",null,"$HOME/.cargo/bin/nu"),n(".")],-1);function Ue(Ie,Me){const s=i("ExternalLinkIcon");return l(),r("div",null,[c,e("p",null,[u,e("a",h,[p,a(s)]),g,e("a",_,[b,a(s)]),k]),m,e("p",null,[f,e("a",v,[w,a(s)]),x,e("a",z,[S,a(s)]),q,N,D,e("a",C,[W,a(s)]),R,e("a",P,[V,a(s)]),B,L,y,A,E]),F,H,e("p",null,[T,U,I,e("a",M,[O,a(s)]),G]),J,e("p",null,[X,e("a",Q,[Z,a(s)]),$,j,K]),Y,e("ul",null,[ee,ne,e("li",null,[se,e("a",ae,[te,a(s)]),oe,e("a",ie,[le,a(s)]),re,de])]),ce,e("p",null,[ue,e("a",he,[pe,a(s)]),ge]),_e,e("p",null,[be,e("a",ke,[me,a(s)]),fe,ve,we,xe,ze]),Se,e("h2",qe,[Ne,De,e("a",Ce,[We,a(s)])]),Re,e("p",null,[Pe,e("a",Ve,[Be,a(s)]),Le,ye,Ae,Ee,Fe]),He,Te])}const Ge=o(d,[["render",Ue],["__file","installation.html.vue"]]);export{Ge as default};
