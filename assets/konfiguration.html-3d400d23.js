import{_ as l,M as o,p as s,q as u,Q as n,t as e,N as i,U as a,a1 as r}from"./framework-344bb0e4.js";const c={},g=n("h1",{id:"konfiguration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#konfiguration","aria-hidden":"true"},"#"),e(" Konfiguration")],-1),h=n("h2",{id:"nushell-konfiguration-mittels-config-nu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nushell-konfiguration-mittels-config-nu","aria-hidden":"true"},"#"),e(" Nushell Konfiguration mittels "),n("code",null,"config.nu")],-1),f=n("p",null,[e("Nushell nutzt ein Konfigurationssystem, das ein Nushell-Skript beim Start ausführt. Die Konfigurationsdatei wird für Nushell "),n("code",null,"config.nu"),e(" genannt. Der Pfad zu dieser Konfigurationsdatei kann durch den Aufruf von "),n("code",null,"echo $nu.config-path"),e(" herausgefunden werden. Es handelt sich dabei um eine Datei, die abgearbeitet wird und in jedem Schritt Definitionen, Umgebungsvariablen und mehr zum globalen Namespace hinzufügt.")],-1),p=n("code",null,"config.nu",-1),m={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},b=r(`<h3 id="config-konfigurieren" tabindex="-1"><a class="header-anchor" href="#config-konfigurieren" aria-hidden="true">#</a> <code>$config</code> konfigurieren</h3><p>Die zentralen Konfigurationen von Nushell sind in der globalen <code>$config</code> Variable festgehalten. Dieser Eintrag kann wie folgt erstellt werden:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = {
  ...
}
</code></pre></div><p>Es ist auch möglich <code>$config</code> zu überschreiben und zu ändern:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($config | update &lt;field name&gt; &lt;field value&gt;)
</code></pre></div><h3 id="umgebung" tabindex="-1"><a class="header-anchor" href="#umgebung" aria-hidden="true">#</a> Umgebung</h3><p>Die Shell-Umgebung kann durch Aufrufe von <code>let-env</code> in der <code>config.nu</code>-Datei geändert werden. Es gibt einige wichtige Nushell-spezifischen Einstellungen:</p><ul><li><code>LS_COLORS</code>: Setzt die Farben für Dateitypen in ls</li><li><code>PROMPT_COMMAND</code>: Befehle, die ausgeführt werden, um die Prompt zu erzeugen (Block oder String)</li><li><code>PROMPT_COMMAND_RIGHT</code>: Befehle, die ausgeführt werden, um die Prompt zu erzeugen (Block)</li><li><code>PROMPT_INDICATOR = &quot;〉&quot;</code>: Indikator, der der Prompt folgt (default: &quot;&gt;&quot;-like Unicode symbol)</li><li><code>PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;</code></li><li><code>PROMPT_INDICATOR_VI_NORMAL = &quot;〉 &quot;</code></li><li><code>PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;</code></li></ul><h3 id="farbkonfiguration" tabindex="-1"><a class="header-anchor" href="#farbkonfiguration" aria-hidden="true">#</a> Farbkonfiguration</h3>`,9),_=r(`<h2 id="nushell-als-login-shell" tabindex="-1"><a class="header-anchor" href="#nushell-als-login-shell" aria-hidden="true">#</a> Nushell als Login-Shell</h2><p>Um Nushell als Login-Shell zu verwenden, muss die <code>$env</code> Variable konfiguriert werden, damit es möglich ist, externe Befehle als Login-Shell auszuführen.</p><p>Der komplette Satz an Umgebungsvariablen kann erzeugt werden, wenn Nu in einer anderen Shell, wie beispielsweise Bash, ausgeführt wird. In diese Nu-Sitzung kann ein Befehl wie der folgende verwendet werden, um <code>$env</code> zu setzen:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; env | each { echo $&quot;let-env ($it.name) = &#39;($it.raw)&#39;&quot; } | str join (char nl)
</code></pre></div><p>Das wird <code>let-env</code> Zeilen ausgeben - eine für jede Umgebungsvariable - inklusive der nötigen Werte.</p><p>Als nächstes, muss auf manchen Distributionen sichergestellt werden, dass Nu in der Liste der Shells in /etc/shells ist:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>Damit sollte es möglich sein, Nu als Login-Shell mit <code>chsh</code> festzulegen. Nach dem Ausloggen und erneutem Einloggen sollte Nu als Shell grüßen.</p><h3 id="konfiguration-mittels-login-nu" tabindex="-1"><a class="header-anchor" href="#konfiguration-mittels-login-nu" aria-hidden="true">#</a> Konfiguration mittels <code>login.nu</code></h3><p>Wenn Nushell als Login-Shell benutzt wird, kann eine spezifische Konfigurationsdatei angelegt werden, die nur in diesem Fall ausgelesen wird. Hierfür muss eine Datei namens <code>login.nu</code> im Standard-Konfigurationsverzeichnis abgelegt sein.</p><p>Die Datei <code>login.nu</code> wird nach <code>env.nu</code> und <code>config.nu</code> eingelesen, so dass diese Konfigurationen überschrieben werden können.</p><p>Der Pfad zu dieser Konfigurationsdatei steht in <code>$nu.loginshell-path</code>.</p><h3 id="macos-usr-bin-open-als-open-behalten" tabindex="-1"><a class="header-anchor" href="#macos-usr-bin-open-als-open-behalten" aria-hidden="true">#</a> macOS: <code>/usr/bin/open</code> als <code>open</code> behalten</h3><p>Manche Tools (z.B. Emacs) vertrauen darauf, dass <code>open</code> Dateien auf dem Mac öffnet. Da Nushell einen eigenen <code>open</code> Befehl hat, der eine andere Semantik hat und <code>/usr/bin/open</code> verbirgt, werden diese Tools einen Fehler werfen, wenn sie verwendet werden. Eine Möglichkeit, dieses Problem zu umgehen, ist es, einen eigenen Befehl und einen <code>alias</code> in <code>config.nu</code> zu definieren:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>def nuopen [arg, --raw (-r)] { if $raw { open -r $arg } else { open $arg } }
alias open = ^open
</code></pre></div><h2 id="konfiguration-der-prompt" tabindex="-1"><a class="header-anchor" href="#konfiguration-der-prompt" aria-hidden="true">#</a> Konfiguration der Prompt</h2><p>Die Konfiguration der Prompt wird durch das Setzen der Umgebungsvariable <code>PROMPT_COMMAND</code> bzw. <code>PROMPT_COMMAND_RIGHT</code> durchgeführt. Diese akzeptieren entweder einen String oder einen Codeblock der ausgeführt wird.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env PROMPT_COMMAND = &quot;Hallo Nu&quot;  # Die Hauptprompt auf einen festen String setzen
let-env PROMPT_COMMAND_RIGHT = {pwd} # Den rechte Promptteil mit dem aktuellen Verzeichnis anzeigen
</code></pre></div><p>Darüber hinaus wird als Markierung ein Promptindikator gesetzt, welcher den aktuellen Modus oder einen Zeilenumbruch anzeigt:</p><ul><li><code>PROMPT_INDICATOR = &quot;〉&quot;</code>: Indikator, der der Prompt folgt (default: &quot;&gt;&quot;-like Unicode symbol)</li><li><code>PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;</code></li><li><code>PROMPT_INDICATOR_VI_NORMAL = &quot;〉 &quot;</code></li><li><code>PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;</code></li></ul>`,20);function k(w,N){const d=o("ExternalLinkIcon"),t=o("RouterLink");return s(),u("div",null,[g,h,f,n("p",null,[e("Ein Beispiel für eine Nushell "),p,e(" kann "),n("a",m,[e("hier"),i(d)]),e(" in unserem Repository gefunden werden.")]),b,n("p",null,[e("Mehr Informationen zu Farbeinstellungen und Themes kann im "),i(t,{to:"/book/coloring_and_theming.html"},{default:a(()=>[e("entsprechenden Kapitel")]),_:1}),e(" gefunden werden.")]),_,n("p",null,[e("Mehr Dokumentation zu fertigen Prompts von Drittanbietern kann "),i(t,{to:"/de/book/3rdpartyprompts.html"},{default:a(()=>[e("hier")]),_:1}),e(" gefunden werden.")])])}const x=l(c,[["render",k],["__file","konfiguration.html.vue"]]);export{x as default};
