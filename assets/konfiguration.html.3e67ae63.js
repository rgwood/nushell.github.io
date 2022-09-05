import{_ as l,r as o,o as s,c as u,a as n,b as i,w as a,d as e,e as r}from"./app.62da7227.js";const c={},h=n("h1",{id:"konfiguration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#konfiguration","aria-hidden":"true"},"#"),e(" Konfiguration")],-1),g=n("h2",{id:"nushell-konfiguration-mittels-config-nu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nushell-konfiguration-mittels-config-nu","aria-hidden":"true"},"#"),e(" Nushell Konfiguration mittels "),n("code",null,"config.nu")],-1),f=n("p",null,[e("Nushell nutzt ein Konfigurationssystem, das ein Nushell-Skript beim Start ausf\xFChrt. Die Konfigurationsdatei wird f\xFCr Nushell "),n("code",null,"config.nu"),e(" genannt. Der Pfad zu dieser Konfigurationsdatei kann durch den Aufruf von "),n("code",null,"echo $nu.config-path"),e(" herausgefunden werden. Es handelt sich dabei um eine Datei, die abgearbeitet wird und in jedem Schritt Definitionen, Umgebungsvariablen und mehr zum globalen Namespace hinzuf\xFCgt.")],-1),p=e("Ein Beispiel f\xFCr eine Nushell "),m=n("code",null,"config.nu",-1),_=e(" kann "),b={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},k=e("hier"),w=e(" in unserem Repository gefunden werden."),N=r(`<h3 id="config-konfigurieren" tabindex="-1"><a class="header-anchor" href="#config-konfigurieren" aria-hidden="true">#</a> <code>$config</code> konfigurieren</h3><p>Die zentralen Konfigurationen von Nushell sind in der globalen <code>$config</code> Variable festgehalten. Dieser Eintrag kann wie folgt erstellt werden:</p><div class="language-text ext-text"><pre class="language-text"><code>let $config = {
  ...
}
</code></pre></div><p>Es ist auch m\xF6glich <code>$config</code> zu \xFCberschreiben und zu \xE4ndern:</p><div class="language-text ext-text"><pre class="language-text"><code>let $config = ($config | update &lt;field name&gt; &lt;field value&gt;)
</code></pre></div><h3 id="umgebung" tabindex="-1"><a class="header-anchor" href="#umgebung" aria-hidden="true">#</a> Umgebung</h3><p>Die Shell-Umgebung kann durch Aufrufe von <code>let-env</code> in der <code>config.nu</code>-Datei ge\xE4ndert werden. Es gibt einige wichtige Nushell-spezifischen Einstellungen:</p><ul><li><code>LS_COLORS</code>: Setzt die Farben f\xFCr Dateitypen in ls</li><li><code>PROMPT_COMMAND</code>: Befehle, die ausgef\xFChrt werden, um die Prompt zu erzeugen (Block oder String)</li><li><code>PROMPT_COMMAND_RIGHT</code>: Befehle, die ausgef\xFChrt werden, um die Prompt zu erzeugen (Block)</li><li><code>PROMPT_INDICATOR = &quot;\u3009&quot;</code>: Indikator, der der Prompt folgt (default: &quot;&gt;&quot;-like Unicode symbol)</li><li><code>PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;</code></li><li><code>PROMPT_INDICATOR_VI_NORMAL = &quot;\u3009 &quot;</code></li><li><code>PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;</code></li></ul><h3 id="farbkonfiguration" tabindex="-1"><a class="header-anchor" href="#farbkonfiguration" aria-hidden="true">#</a> Farbkonfiguration</h3>`,9),v=e("Mehr Informationen zu Farbeinstellungen und Themes kann im "),x=e("entsprechenden Kapitel"),D=e(" gefunden werden."),P=r(`<h2 id="nushell-als-login-shell" tabindex="-1"><a class="header-anchor" href="#nushell-als-login-shell" aria-hidden="true">#</a> Nushell als Login-Shell</h2><p>Um Nushell als Login-Shell zu verwenden, muss die <code>$env</code> Variable konfiguriert werden, damit es m\xF6glich ist, externe Befehle als Login-Shell auszuf\xFChren.</p><p>Der komplette Satz an Umgebungsvariablen kann erzeugt werden, wenn Nu in einer anderen Shell, wie beispielsweise Bash, ausgef\xFChrt wird. In diese Nu-Sitzung kann ein Befehl wie der folgende verwendet werden, um <code>$env</code> zu setzen:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; env | each { echo $&quot;let-env ($it.name) = &#39;($it.raw)&#39;&quot; } | str collect (char nl)
</code></pre></div><p>Das wird <code>let-env</code> Zeilen ausgeben - eine f\xFCr jede Umgebungsvariable - inklusive der n\xF6tigen Werte.</p><p>Als n\xE4chstes, muss auf manchen Distributionen sichergestellt werden, dass Nu in der Liste der Shells in /etc/shells ist:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>Damit sollte es m\xF6glich sein, Nu als Login-Shell mit <code>chsh</code> festzulegen. Nach dem Ausloggen und erneutem Einloggen sollte Nu als Shell gr\xFC\xDFen.</p><h3 id="konfiguration-mittels-login-nu" tabindex="-1"><a class="header-anchor" href="#konfiguration-mittels-login-nu" aria-hidden="true">#</a> Konfiguration mittels <code>login.nu</code></h3><p>Wenn Nushell als Login-Shell benutzt wird, kann eine spezifische Konfigurationsdatei angelegt werden, die nur in diesem Fall ausgelesen wird. Hierf\xFCr muss eine Datei namens <code>login.nu</code> im Standard-Konfigurationsverzeichnis abgelegt sein.</p><p>Die Datei <code>login.nu</code> wird nach <code>env.nu</code> und <code>config.nu</code> eingelesen, so dass diese Konfigurationen \xFCberschrieben werden k\xF6nnen.</p><p>Der Pfad zu dieser Konfigurationsdatei steht in <code>$nu.loginshell-path</code>.</p><h3 id="macos-usr-bin-open-als-open-behalten" tabindex="-1"><a class="header-anchor" href="#macos-usr-bin-open-als-open-behalten" aria-hidden="true">#</a> macOS: <code>/usr/bin/open</code> als <code>open</code> behalten</h3><p>Manche Tools (z.B. Emacs) vertrauen darauf, dass <code>open</code> Dateien auf dem Mac \xF6ffnet. Da Nushell einen eigenen <code>open</code> Befehl hat, der eine andere Semantik hat und <code>/usr/bin/open</code> verbirgt, werden diese Tools einen Fehler werfen, wenn sie verwendet werden. Eine M\xF6glichkeit, dieses Problem zu umgehen, ist es, einen eigenen Befehl und einen <code>alias</code> in <code>config.nu</code> zu definieren:</p><div class="language-text ext-text"><pre class="language-text"><code>def nuopen [arg, --raw (-r)] { if $raw { open -r $arg } else { open $arg } }
alias open = ^open
</code></pre></div><h2 id="konfiguration-der-prompt" tabindex="-1"><a class="header-anchor" href="#konfiguration-der-prompt" aria-hidden="true">#</a> Konfiguration der Prompt</h2><p>Die Konfiguration der Prompt wird durch das Setzen der Umgebungsvariable <code>PROMPT_COMMAND</code> bzw. <code>PROMPT_COMMAND_RIGHT</code> durchgef\xFChrt. Diese akzeptieren entweder einen String oder einen Codeblock der ausgef\xFChrt wird.</p><div class="language-text ext-text"><pre class="language-text"><code>let-env PROMPT_COMMAND = &quot;Hallo Nu&quot;  # Die Hauptprompt auf einen festen String setzen
let-env PROMPT_COMMAND_RIGHT = {pwd} # Den rechte Promptteil mit dem aktuellen Verzeichnis anzeigen
</code></pre></div><p>Dar\xFCber hinaus wird als Markierung ein Promptindikator gesetzt, welcher den aktuellen Modus oder einen Zeilenumbruch anzeigt:</p><ul><li><code>PROMPT_INDICATOR = &quot;\u3009&quot;</code>: Indikator, der der Prompt folgt (default: &quot;&gt;&quot;-like Unicode symbol)</li><li><code>PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;</code></li><li><code>PROMPT_INDICATOR_VI_NORMAL = &quot;\u3009 &quot;</code></li><li><code>PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;</code></li></ul>`,20),z=e("Mehr Dokumentation zu fertigen Prompts von Drittanbietern kann "),M=e("hier"),I=e(" gefunden werden.");function O(R,T){const d=o("ExternalLinkIcon"),t=o("RouterLink");return s(),u("div",null,[h,g,f,n("p",null,[p,m,_,n("a",b,[k,i(d)]),w]),N,n("p",null,[v,i(t,{to:"/book/coloring_and_theming.html"},{default:a(()=>[x]),_:1}),D]),P,n("p",null,[z,i(t,{to:"/de/book/3rdpartyprompts.html"},{default:a(()=>[M]),_:1}),I])])}const q=l(c,[["render",O],["__file","konfiguration.html.vue"]]);export{q as default};
