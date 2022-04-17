(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{994:function(e,t,d){"use strict";d.r(t);var v=d(34),n=Object(v.a)({},(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h1",{attrs:{id:"vergleich-zu-bash"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#vergleich-zu-bash"}},[e._v("#")]),e._v(" Vergleich zu Bash")]),e._v(" "),d("p",[e._v("Hinweis: Diese Tabelle geht von Nu 0.59 oder neuer aus.")]),e._v(" "),d("table",[d("thead",[d("tr",[d("th",[e._v("Bash")]),e._v(" "),d("th",[e._v("Nu")]),e._v(" "),d("th",[e._v("Funktion")])])]),e._v(" "),d("tbody",[d("tr",[d("td",[d("code",[e._v("ls")])]),e._v(" "),d("td",[d("code",[e._v("ls")])]),e._v(" "),d("td",[e._v("Auflisten der Dateien des aktuellen Pfads")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("ls <dir>")])]),e._v(" "),d("td",[d("code",[e._v("ls <dir>")])]),e._v(" "),d("td",[e._v("Auflisten der Dateien am angegebenen Pfad")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("ls pattern*")])]),e._v(" "),d("td",[d("code",[e._v("ls pattern*")])]),e._v(" "),d("td",[e._v("Auflisten von Dateien, die dem gegebenen Schema/Pattern folgen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("ls -la")])]),e._v(" "),d("td",[d("code",[e._v("ls --long --all")]),e._v(" or "),d("code",[e._v("ls -la")])]),e._v(" "),d("td",[e._v("Auflisten aller Dateien (inklusive versteckte) mit allen verfügbaren Informationen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("ls -d */")])]),e._v(" "),d("td",[d("code",[e._v("ls | where type == Dir")])]),e._v(" "),d("td",[e._v("Auflisten von Ordnern")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("find . -name *.rs")])]),e._v(" "),d("td",[d("code",[e._v("ls **/*.rs")])]),e._v(" "),d("td",[e._v("Rekursives auflisten aller Dateien, die zum gegebenen Schema/Pattern passen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("cd <directory>")])]),e._v(" "),d("td",[d("code",[e._v("cd <directory>")])]),e._v(" "),d("td",[e._v("Wechseln an den angegebenen Pfad")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("cd")])]),e._v(" "),d("td",[d("code",[e._v("cd")])]),e._v(" "),d("td",[e._v("Wechseln in den HOME-Ordner")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("cd -")])]),e._v(" "),d("td",[d("code",[e._v("cd -")])]),e._v(" "),d("td",[e._v("Wechseln an den vorherigen Pfad")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("mkdir <path>")])]),e._v(" "),d("td",[d("code",[e._v("mkdir <path>")])]),e._v(" "),d("td",[e._v("Erzeugen des angegebenen Pfads")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("mkdir -p <path>")])]),e._v(" "),d("td",[d("code",[e._v("mkdir <path>")])]),e._v(" "),d("td",[e._v("Erzeugen des angegebenen Pfads und weiterer Ordner wenn nötig")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("touch test.txt")])]),e._v(" "),d("td",[d("code",[e._v("touch test.txt")])]),e._v(" "),d("td",[e._v("Erstellen einer Datei")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("> <path>")])]),e._v(" "),d("td",[d("code",[e._v("| save <path>")])]),e._v(" "),d("td",[e._v("Speichern eines String in eine Datei")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v(">> <path>")])]),e._v(" "),d("td",[d("code",[e._v("| save --append <path>")])]),e._v(" "),d("td",[e._v("Anhängen eines Strings an eine Datei")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("cat <path>")])]),e._v(" "),d("td",[d("code",[e._v("open --raw <path>")])]),e._v(" "),d("td",[e._v("Einlesen des Inhalts der angegebenen Datei (in Textform)")])]),e._v(" "),d("tr",[d("td"),e._v(" "),d("td",[d("code",[e._v("open <path>")])]),e._v(" "),d("td",[e._v("Einlesen einer Datei in Form von strukturierten Daten")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("mv <source> <dest>")])]),e._v(" "),d("td",[d("code",[e._v("mv <source> <dest>")])]),e._v(" "),d("td",[e._v("Bewegen einer Datei an einen neuen Ort")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("cp <source> <dest>")])]),e._v(" "),d("td",[d("code",[e._v("cp <source> <dest>")])]),e._v(" "),d("td",[e._v("Kopieren einer Datei an einen Ort")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("cp -r <source> <dest>")])]),e._v(" "),d("td",[d("code",[e._v("cp -r <source> <dest>")])]),e._v(" "),d("td",[e._v("Kopieren eines Ordners an einen Ort (rekursiv)")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("rm <path>")])]),e._v(" "),d("td",[d("code",[e._v("rm <path>")])]),e._v(" "),d("td",[e._v("Entfernen der angegebenen Datei")])]),e._v(" "),d("tr",[d("td"),e._v(" "),d("td",[d("code",[e._v("rm -t <path>")])]),e._v(" "),d("td",[e._v("Angegebene Datei in den Papierkorb des Systems werfen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("rm -rf <path>")])]),e._v(" "),d("td",[d("code",[e._v("rm -r <path>")])]),e._v(" "),d("td",[e._v("Entfernen des angegebenen Pfads rekursiv")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("chmod")])]),e._v(" "),d("td",[d("code",[e._v("<Noch nicht möglich>")])]),e._v(" "),d("td",[e._v("Ändern von Dateiattributen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("date -d <date>")])]),e._v(" "),d("td",[d("code",[e._v('"<date>" | into datetime -f <format>')])]),e._v(" "),d("td",[e._v("Datum ausgeben ("),d("a",{attrs:{href:"https://docs.rs/chrono/0.4.15/chrono/format/strftime/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dokumentation des Formats"),d("OutboundLink")],1),e._v(")")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("sed")])]),e._v(" "),d("td",[d("code",[e._v("str find-replace")])]),e._v(" "),d("td",[e._v("Suchen und ersetzen eines Pattern in einem String")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("grep <pattern>")])]),e._v(" "),d("td",[d("code",[e._v("where $it =~ <substring>")]),e._v(" or "),d("code",[e._v("find <substring>")])]),e._v(" "),d("td",[e._v("Filtern von Strings die den Substring beinhalten")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("man <command>")])]),e._v(" "),d("td",[d("code",[e._v("help <command>")])]),e._v(" "),d("td",[e._v("Hilfe zu einem Befehl ansehen")])]),e._v(" "),d("tr",[d("td"),e._v(" "),d("td",[d("code",[e._v("help commands")])]),e._v(" "),d("td",[e._v("Alle verfügbaren Befehle anzeigen")])]),e._v(" "),d("tr",[d("td"),e._v(" "),d("td",[d("code",[e._v("help --find <string>")])]),e._v(" "),d("td",[e._v("Nach einem Text in allen verfügbaren Befehlen suchen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("command1 && command2")])]),e._v(" "),d("td",[d("code",[e._v("command1; command2")])]),e._v(" "),d("td",[e._v("Ausführen eines Befehls und wenn Ausführung erfolgreich wird ein weiterer Befehl ausgeführt")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("stat $(which git)")])]),e._v(" "),d("td",[d("code",[e._v("stat (which git).path")])]),e._v(" "),d("td",[e._v("Ausgabe eines Befehls als Eingabe für einen anderen Befehl verwenden")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("echo $PATH")])]),e._v(" "),d("td",[d("code",[e._v("echo $env.PATH")])]),e._v(" "),d("td",[e._v("Aktuelle PATH-Variable anzeigen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("<update ~/.bashrc>")])]),e._v(" "),d("td",[d("code",[e._v("vim $nu.config-path")])]),e._v(" "),d("td",[e._v("PATH permanent ändern")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("export PATH = $PATH:/usr/other/bin")])]),e._v(" "),d("td",[d("code",[e._v("let-env PATH = ($env.PATH | append /usr/other/bin)")])]),e._v(" "),d("td",[e._v("PATH temporär ändern")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("export")])]),e._v(" "),d("td",[d("code",[e._v("echo $env")])]),e._v(" "),d("td",[e._v("Anzeigen der aktuellen Umgebungsvariablen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("<update ~/.bashrc>")])]),e._v(" "),d("td",[d("code",[e._v("vim $nu.config-path")])]),e._v(" "),d("td",[e._v("Umgebungsvariablen permanent ändern")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("FOO=BAR ./bin")])]),e._v(" "),d("td",[d("code",[e._v("FOO=BAR ./bin")])]),e._v(" "),d("td",[e._v("Umgebungsvariablen temporär ändern")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("export FOO=BAR")])]),e._v(" "),d("td",[d("code",[e._v("let-env FOO = BAR")])]),e._v(" "),d("td",[e._v("Umgebungsvariable für aktuelle Sitzung setzen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("echo $FOO")])]),e._v(" "),d("td",[d("code",[e._v("echo $env.FOO")])]),e._v(" "),d("td",[e._v("Umgebungsvariablen nutzen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("unset FOO")])]),e._v(" "),d("td",[d("code",[e._v("hide FOO")])]),e._v(" "),d("td",[e._v("Umgebungsvariable für aktuelle Sitzung verbergen")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v('alias s="git status -sb"')])]),e._v(" "),d("td",[d("code",[e._v("alias s = git status -sb")])]),e._v(" "),d("td",[e._v("Alias temporär definieren")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("<update ~/.bashrc>")])]),e._v(" "),d("td",[d("code",[e._v("vim $nu.config-path")])]),e._v(" "),d("td",[e._v("Alias permanent hinzufügen und ändern (für neue Shells)")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("bash -c <commands>")])]),e._v(" "),d("td",[d("code",[e._v("nu -c <commands>")])]),e._v(" "),d("td",[e._v("Ausführen einer Pipeline an Befehlen (benötigt 0.9.1 oder neuer)")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("bash <script file>")])]),e._v(" "),d("td",[d("code",[e._v("nu <script file>")])]),e._v(" "),d("td",[e._v("Ausführen einer Skriptdatei (benötigt 0.9.1 oder neuer)")])]),e._v(" "),d("tr",[d("td",[d("code",[e._v("\\")])]),e._v(" "),d("td",[d("code",[e._v("(")]),e._v(" gefolgt von "),d("code",[e._v(")")])]),e._v(" "),d("td",[e._v("Fortsetzen von Zeilen")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);