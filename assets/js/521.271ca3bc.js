(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{1007:function(s,a,t){"use strict";t.r(a);var e=t(35),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nu-のインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nu-のインストール"}},[s._v("#")]),s._v(" Nu のインストール")]),s._v(" "),t("p",[s._v("今のところ Nu をインストールするもっともよい方法は、"),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("crates.io"),t("OutboundLink")],1),s._v("からインストールするか、ビルド済のバイナリーを"),t("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("リリースページ"),t("OutboundLink")],1),s._v("からダウンロードするか、ソースからビルドすることです。\nDocker を利用してビルド済のコンテナをプルしてくる方法もあります。")]),s._v(" "),t("h2",{attrs:{id:"ビルド済みのバイナリー"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ビルド済みのバイナリー"}},[s._v("#")]),s._v(" ビルド済みのバイナリー")]),s._v(" "),t("p",[s._v("ビルド済の Nu は"),t("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("リリースページ"),t("OutboundLink")],1),s._v("からダウンロードできます。もし、macOS で"),t("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Homebrew"),t("OutboundLink")],1),s._v(" を利用しているなら、"),t("code",[s._v("brew install nushell")]),s._v("を実行して、バイナリーをインストールできます。")]),s._v(" "),t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),t("p",[t("strong",[s._v("Note")]),s._v(" Nu は Windows 10 で動作しますが、現在のところ 7/8.1 はサポートされていません。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("リリースページ"),t("OutboundLink")],1),s._v("から"),t("code",[s._v(".zip")]),s._v("ファイルをダウンロードして、例えば次の箇所に解凍します。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Program Files\n")])])]),t("p",[s._v("そして、"),t("code",[s._v("nu")]),s._v("フォルダを PATH に追加します。これが済めば、"),t("code",[s._v("nu")]),s._v("コマンドで Nu を起動できます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nu\nC:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])])]),t("p",[s._v("もし、"),t("a",{attrs:{href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows Terminal"),t("OutboundLink")],1),s._v("を使っているなら、次のようにして"),t("code",[s._v("nu")]),s._v("をデフォルトシェルに指定できます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"guid"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hidden"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Nu Shell"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commandline"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nu.exe"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("この設定を Terminal Settings の"),t("code",[s._v('"profiles"')]),s._v("に追加します。そして、"),t("code",[s._v('"defaultProfile"')]),s._v("を次のように変更します。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"defaultProfile"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),s._v(",\n")])])]),t("p",[s._v("これで"),t("code",[s._v("nu")]),s._v("が Windows Terminal の起動時にロードされます。")]),s._v(" "),t("h2",{attrs:{id:"事前準備"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事前準備"}},[s._v("#")]),s._v(" 事前準備")]),s._v(" "),t("p",[s._v("Nu をインストールする前に、システムに必要なツールがそろっているか確認する必要があります。現在、Rust のツールチェインといくつかの依存関係が必要です。")]),s._v(" "),t("h3",{attrs:{id:"コンパイラスイートのインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#コンパイラスイートのインストール"}},[s._v("#")]),s._v(" コンパイラスイートのインストール")]),s._v(" "),t("p",[s._v("Rust が適切に機能するには、互換性のあるコンパイラスイートがシステムにインストールされている必要があります。推奨されるコンパイラスイートは次のとおりです。")]),s._v(" "),t("ul",[t("li",[s._v("Linux: GCC or Clang")]),s._v(" "),t("li",[s._v("macOS: Clang (install Xcode)")]),s._v(" "),t("li",[s._v("Windows: "),t("a",{attrs:{href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Visual Studio Community Edition"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("Linux と macOS の場合、コンパイラのインストールが完了すれば、"),t("code",[s._v("rustup")]),s._v("での Rust のインストールの準備が整います。")]),s._v(" "),t("p",[s._v("Windows の場合、Visual Studio Community Edition をインストールするときに、「C ++ビルドツール」をインストールする必要があります。\nオプショナルなインストールとして提供されている"),t("code",[s._v("link.exe")]),s._v("が必要なためです。これで次のステップに進む準備ができました。")]),s._v(" "),t("h3",{attrs:{id:"rust-のインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rust-のインストール"}},[s._v("#")]),s._v(" Rust のインストール")]),s._v(" "),t("p",[s._v("Rust がシステムにまだインストールされていない場合は、"),t("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("rustup"),t("OutboundLink")],1),s._v("を利用して Rust をインストールする方法がベストです。Rustup は、異なる Rust のバージョンのインストールを管理するツールです。")]),s._v(" "),t("p",[s._v("Nu は現在、"),t("strong",[s._v("最新の stable(1.46 or later)")]),s._v(" バージョンの Rust を必要とします。\n"),t("code",[s._v("rustup")]),s._v('で正しい version を選択するのが良い方法です。\n最初に"rustup"を実行すると、インストールする Rust のバージョンを尋ねられます。')]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Current installation options:\n\ndefault "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" triple: x86_64-unknown-linux-gnu\ndefault toolchain: stable\nprofile: default\nmodify "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" variable: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Proceed with installation "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Customize installation\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Cancel installation\n")])])]),t("p",[s._v("準備ができたら、1 を押してからエンターを押します。")]),s._v(" "),t("p",[s._v("もし、"),t("code",[s._v("rustup")]),s._v("を経由して Rust をインストールしたくない場合、他の方法でもインストールすることができます。(例えば、Linux ディストリビューションのパッケージから)\nその場合でも Rust の 1.46 以上のバージョンがインストールされるようにしてください。")]),s._v(" "),t("h2",{attrs:{id:"依存関係"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依存関係"}},[s._v("#")]),s._v(" 依存関係")]),s._v(" "),t("h3",{attrs:{id:"debian-ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu"}},[s._v("#")]),s._v(" Debian / Ubuntu")]),s._v(" "),t("p",[s._v('"pkg-config"および"libssl-dev"パッケージをインストールしてください。')]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pkg-config libssl-dev\n")])])]),t("p",[t("code",[s._v("rawkey")]),s._v("や"),t("code",[s._v("clipboard")]),s._v('機能を使用する Linux ユーザーは"libx11-dev"および"libxcb-composite0-dev"パッケージをインストールする必要があります。')]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libxcb-composite0-dev libx11-dev\n")])])]),t("h3",{attrs:{id:"rhel-based-distros"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rhel-based-distros"}},[s._v("#")]),s._v(" RHEL based distros")]),s._v(" "),t("p",[s._v('"libxcb", "openssl-devel"および"libX11-devel"パッケージをインストールする必要があります。')]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libxcb openssl-devel libX11-devel\n")])])]),t("h3",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[s._v("#")]),s._v(" macOS")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Homebrew"),t("OutboundLink")],1),s._v('を利用して、"openssl"と"cmake"をインストールしてください。')]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssl cmake\n")])])]),t("h2",{attrs:{id:"crates-ioからのインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crates-ioからのインストール"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("crates.io"),t("OutboundLink")],1),s._v("からのインストール")]),s._v(" "),t("p",[s._v("必要となる依存関係が準備できたら、Rust コンパイラーに付属している"),t("code",[s._v("cargo")]),s._v("を使って、Nu をインストールできます。"),t("br"),s._v("\ncargo は Nu とそのソースの依存関係をダウンロードし、ビルドしたあと、実行できるように cargo の bin path にインストールします。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nu\n")])])]),t("p",[s._v("これでおしまいです！"),t("code",[s._v("cargo")]),s._v("は Nu のソースコードとその依存関係をダウンロードしてビルドし、"),t("code",[s._v("cargo")]),s._v("のバイナリーパスにインストールすることで Nu を実行できるようにします。")]),s._v(" "),t("p",[s._v("より多くの機能をインストールするには、次のようにします。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nu --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra\n")])])]),t("p",[s._v("すべての機能を利用するための最も簡単な方法は Nu をチェックアウトして、Rust ツールを利用してビルドすることです。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/nushell/nushell.git\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nushell\nnushell"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --path "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra\n")])])]),t("p",[s._v("上で示したすべての依存関係がシステムにあることを確認してください。"),t("br"),s._v("\nインストールが完了すると、"),t("code",[s._v("nu")]),s._v("コマンドで Nu を実行できます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ nu\n/home/jt/Source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("h2",{attrs:{id:"ソースからビルド"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ソースからビルド"}},[s._v("#")]),s._v(" ソースからビルド")]),s._v(" "),t("p",[s._v("github のソースから直接ビルドすることもできます。こうすることで、最新の機能やバグ修正にすぐにアクセスすることができます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/nushell/nushell.git\n")])])]),t("p",[s._v("Git でメインの nushell リポジトリをクローンし、Nu をビルドして実行できます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nushell\nnushell"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo build --workspace --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" cargo run --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra\n")])])]),t("p",[s._v("リリースモードで Nu をビルドし実行することもできます。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("nushell"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo build --release --workspace --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" cargo run --release --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra\n")])])]),t("p",[s._v('Rust に慣れている人は、"run"がデフォルトでビルドを行うのに、なぜ"build"と"run"の両方を行うのか疑問に思うかもしれません。'),t("br"),s._v("\nこれは Cargo の新しい"),t("code",[s._v("default-run")]),s._v("オプションの欠点を回避し、全てのプラグインがビルドされるようにするためですが、将来的には必要なくなるかもしれません。")]),s._v(" "),t("h2",{attrs:{id:"ログインシェルとして設定するには"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ログインシェルとして設定するには"}},[s._v("#")]),s._v(" ログインシェルとして設定するには")]),s._v(" "),t("p",[t("strong",[s._v("!!! Nu は開発中なので、日常使いのシェルとしての安定性を欠く可能性があります!!!")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("chsh")]),t("OutboundLink")],1),s._v("コマンドを使用して、ログインシェルを設定できます。\n一部の Linux ディストリビューションには"),t("code",[s._v("/etc/shells")]),s._v("に有効なシェルのリストが記載されており、Nu がホワイトリストに登録されるまで変更ができません。\n"),t("code",[s._v("shells")]),s._v("ファイルを更新していない場合は次のようなエラーが表示される場合があります。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("chsh: /home/username/.cargo/bin/nu is an invalid shell\n")])])]),t("p",[s._v("Nu バイナリを"),t("code",[s._v("shells")]),s._v("ファイルに追加することにより、許可されたシェルのリストに Nu を追加できます。\n追加するパスは"),t("code",[s._v("which nu")]),s._v("コマンドで見つけることができます。通常は"),t("code",[s._v("$HOME/.cargo/bin/nu")]),s._v("です。")])])}),[],!1,null,null,null);a.default=r.exports}}]);