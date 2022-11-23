import{_ as l,r as a,o as d,c as u,a as e,b as t,w as s,e as r,d as n}from"./app.ef551336.js";const h={},o=r(`<h1 id="denken-in-nushell" tabindex="-1"><a class="header-anchor" href="#denken-in-nushell" aria-hidden="true">#</a> Denken in Nushell</h1><p>Um Nushell besser zu verstehen und das Beste aus ihr herauszuholen, ist dieses Kapitel &quot;Denken in Nushell&quot; zusammengestellt worden. Denken in Nushell und Verstehen ihres zugrundeliegenden Modells, hilft beim Einstieg und auf dem Weg zum Erfolg.</p><p>Was bedeutet denn nun Denken in Nushell? Hier einige Themen, die f\xFCr neue Benutzer besonders von Interesse sind.</p><h2 id="nushell-ist-nicht-bash" tabindex="-1"><a class="header-anchor" href="#nushell-ist-nicht-bash" aria-hidden="true">#</a> Nushell ist nicht bash</h2><p>Nushell ist sowohl eine Programmiersprache, als auch eine Shell. Deswegen hat sie ihre eigene Art mit Dateien, Verzeichnissen, Webseite und mehr umzugehen. Einiges ist jedoch so modelliert, wie es auch von anderen Shells her bekannt ist. Zum Beispiel Pipelines verbinden zwei Befehle:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | length
</code></pre></div><p>Nushell hat auch andere F\xE4higkeiten, wie, aufnehmen des exit codes eines zuvor ausgef\xFChrten Befehls. Trotz dieser Vorz\xFCge ist Nushell nicht Bash. In einer Bash, oder bei POSIX kompatiblen Shells ganz generell, verwendet man z.B.:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &quot;hello&quot; &gt; output.txt
</code></pre></div><p>In Nushell is das <code>&gt;</code> ein gr\xF6sser-als Operator, was eher dem Programmiersprachen Aspekt von Nushell entspricht. Stattdessen wird eine Pipe zu einem Befehl gef\xFChrt, der die Aufgabe des Speicherns \xFCbernimmt:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &quot;hello&quot; | save output.txt
</code></pre></div><p><strong>Denken in Nushell:</strong> In Nushell werden die Daten durch die Pipeline weitergereicht, bis sie den Benutzer oder einen abschliessenden Befehl erreichen. Nushell verwendet Befehle, die die Arbeit machen. Diese Befehle zu lernen und wann anzuwenden, hilft beim Zusammenstellen vieler verschiedenster Pipelines.</p><h2 id="nushell-wie-eine-compilierte-programmiersprache-verstehen" tabindex="-1"><a class="header-anchor" href="#nushell-wie-eine-compilierte-programmiersprache-verstehen" aria-hidden="true">#</a> Nushell wie eine compilierte Programmiersprache verstehen</h2><p>Ein wichtiger Teil der in Nushell anders ist als in vielen dynamischen Sprachen, ist dass Nushell den Quellcode zuerst komplett interpretiert, bevor er ausgef\xFChrt wird. Es gibt kein <code>eval</code> Feature, das es erlauben w\xFCrde, kontinuierlich neuen Code w\xE4hrend der Ausf\xFChrung hinzu zu f\xFCgen. Das heisst alle Befehle, aber auch Dateien m\xFCssen bekannte Pfade sein, \xE4hnlich wie bei includes in kompilierten Sprachen wie C++ oder Rust.</p><p>Zum Beispiel macht folgendes in Nushell keinen Sinn und wird einen Fehler erzeugen:</p><div class="language-text ext-text"><pre class="language-text"><code>echo &quot;def abc [] { 1 + 2 }&quot; | save output.nu
source &quot;output.nu&quot;
abc
</code></pre></div><p>Der <code>source</code> Befehl will das output Skript ausf\xFChren, aber der <code>save</code> Befehl m\xFCsste daf\xFCr bereits ausgef\xFChrt worden sein. Nushell f\xFChrt den ganzen Block aus, als w\xE4re es eine Datei, anstatt Zeile f\xFCr Zeile. Da die output.nu erst erstellt werden muss, bevor sie ausgef\xFChrt werden kann, k\xF6nnen die drei Zeilen nicht im voraus <code>kompiliert</code> werden.</p><p>Ein anderes Problem ist, einen Dateinamen dynamisch erzeugen zu wollen um ihn auszuf\xFChren:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; source $&quot;($my_path)/common.nu&quot;
</code></pre></div><p>Dies w\xFCrde voraussetzen, dass Nushell die Eingabe auswerten kann um sie dann auszuf\xFChren, jedoch wird diese Information zur Kompilierzeit ben\xF6tigt.</p><p><strong>Denken in Nushell</strong> Nushell kompiliert also jede Eingabe zuerst, bevor sie ausgewertet wird. Dies erlaubt starke Integration in eine IDE, akurate Fehlermeldungen, einen einfacheren Umgang mit der Sprache f\xFCr externe Tools und in der Zukunft so originelle Ausgaben wie die M\xF6glichkeit, Nushell Skripte direkt zu bin\xE4r Dateien zu kompilieren.</p><h2 id="variablen-sind-unveranderbar" tabindex="-1"><a class="header-anchor" href="#variablen-sind-unveranderbar" aria-hidden="true">#</a> Variablen sind unver\xE4nderbar</h2><p>Eine andere \xDCberraschung f\xFCr Benutzer aus anderen Sprachen ist, dass in Nushell Variablen unver\xE4nderbar sind. (Einige haben bereits angefangen sie Konstanten zu nennen, um diesem Umstand gerechter zu werden) Es macht sicher Sinn, sich mit der Funktionalen Programmierung auseinander zu setzen, wenn man mit Nushell arbeiten will, da dies am besten funktioniert, wenn man mit unver\xE4nderlichen Variablen arbeitet.</p>`,22),c=n("Was ist denn der Grund warum Nushell unver\xE4nderliche Variablen verwendet? Zu Beginn der Entwicklung von Nushell wurde entschieden, auf einen Daten fokusierten, funktionalen Stil zu setzen. Erst k\xFCrzlich wurde eine Funktionalit\xE4t zu Nushell hinzugef\xFCgt, die den Vorteil dieser fr\xFChen Experimente zeigt: Parallelit\xE4t Beim Wechsel von "),g=e("code",null,"each",-1),m=n(" zu "),b=e("code",null,"par-each",-1),p=n(" in jedem Nushell Skript, ist es nun m\xF6gliche jeden Block Code parallel auszuf\xFChren. Dies ist m\xF6glich, weil Nushells Design stark auf Unver\xE4nderbarkeit, Kompositionen und Pipelining."),f=e("p",null,[n('Nur weil in Nushell die Variablen unver\xE4nderbar sind bedeutet jedoch nicht, dass sich nicht ver\xE4ndern kann. Nushell macht starken Gebraucht der "Shadowing" Technik. Shadowing oder "Beschattung" bedeutet, eine neue Variable erstellen, mit dem gleichen Namen einer zuvor deklarierten Variablen. Zum Beispiel wenn eine Variable '),e("code",null,"$x"),n(" in den G\xFCltigkeitsbereich geholt wird, und eine neue "),e("code",null,"$x"),n(" um 1 gr\xF6sser definiert werden soll:")],-1),k=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`let x = $x + 1
`)])],-1),v=e("p",null,[n("Dieses neue "),e("code",null,"x"),n(" ist sichtbar f\xFCr allen Code, der nach dieser Zeile folgt. Vorsichtiges Verwenden von Beschattung, kann die Benutzung von Variablen vereinfachen, auch wenn es keine Voraussetzung ist.")],-1),w=n("Schleifenz\xE4hler sind ein anderes h\xE4ufiges Muster f\xFCr ver\xE4nderliche Variablen und sind in die meisten iterativen Befehle eingebaut. Zum Beispiel kann sowohl jedes Element wie auch dessen Index mit dem "),_=e("code",null,"-n",-1),z=n(" Flag von "),x=e("code",null,"each",-1),N=n(" erreicht werden:"),B=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | each -n { |it| $"Number ($it.index) is size ($it.item.size)" }
`)])],-1),D=n("Mit dem "),V=e("code",null,"reduce",-1),S=n(" kann eine \xE4hnliche Funktionalit\xE4t erreicht werden wie man es von Variablen in Schleifen kennt. Zum Beispiel, wenn der l\xE4ngste Text in einer Liste von Texten gesucht wird:"),E=r(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; [one, two, three, four, five, six] | reduce {|curr, max|
    if ($curr | str length) &gt; ($max | str length) {
        $curr
    } else {
        $max
    }
}
</code></pre></div><p><strong>Denken in Nushell</strong> wer sich ver\xE4nderbare Variablen gewohnt ist, braucht eine gewisse Zeit, um sich einen mehr Funktionalen Stil anzugew\xF6hnen. Nushell hat einige eingebaute F\xE4higkeiten um mit diesem Modell umzugehen. Diese zu kennen hilft um Code im Nushell Stil zu schreiben. Dass damit Teile des Codes parallel ausgef\xFChrt werden k\xF6nnen ist ein toller Mehrwert.</p><h2 id="nushells-umgebung-hat-gultigkeitsbereiche" tabindex="-1"><a class="header-anchor" href="#nushells-umgebung-hat-gultigkeitsbereiche" aria-hidden="true">#</a> Nushells Umgebung hat G\xFCltigkeitsbereiche</h2><p>Nushell verwendet verschiedene Ans\xE4tze aus kompilierten Sprachen. Eine dieser Ans\xE4tze ist, dass globale ver\xE4nderliche Zust\xE4nde vermieden werden sollten. Traditionell haben Shells global ver\xE4nderbare Variablen verwendet, um die Umgebung zu kontrollieren. Nushell steuert hier in eine andere Richtung.</p><p>In Nushell kontrollieren Bl\xF6cke die Umgebung. \xC4nderungen an der Umgebung gelten nur f\xFCr den Block in der sie stattfinden.</p><p>In der Praxis ist damit pr\xE4ziserer Code m\xF6glich, um zum Beispiel mit Unterverzeichnissen zu arbeiten. Wie hier, wenn jedes Sub-Projekt des aktuellen Verzeichnisses erstellt werden soll:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | each { |it|
    cd $it.name
    make
}
</code></pre></div><p>Der <code>cd</code> Befehl wechselt die <code>PWD</code> Umgebungsvariable, was wiederum nur f\xFCr den aktuellen Block gilt. Jede Iteration startet deshalb wieder im gleichen Start-Verzeichnis.</p>`,8),P=n("Mit diesen G\xFCltigkeitsbereichen, lassen sich besser vorhersehbare Befehle schreiben, welche einfacher zu lesen sind. Es erleichtert ebenfalls die Fehlersuche. Nushell stellt auch Hilfsbefehle zur Verf\xFCgung wie "),U=e("code",null,"def-env",-1),Z=n(", "),$=e("code",null,"load-env",-1),q=n("), als einfachen Weg ganze Stapel von Umgebungsupdates durch zu f\xFChren."),I=e("code",null,"*",-1),F=n(" - Es gibt hier eine Ausnahme. "),T=e("code",null,"def-env",-1),j=n(" erlaubt es einem Befehl an der Umgebung teilzuhaben, von der aus er aufgerufen wurde."),A=e("p",null,[e("strong",null,"Denken in Nushell"),n(" - Das bew\xE4hrte Verfahren keine globalen ver\xE4nderlichen Variablen zu benutzen, erweitert sich in Nushell auf die Umgebung. Die eingebauten Hilfs-Befehle helfen dabei, einfacher mit der Umgebung zu arbeiten. Die Vorteile zu nutzen, dass die Umgebung so eingechr\xE4nkt ist auf Bl\xF6cke, kann helfen pr\xE4zisere Skripte zu schreiben, die mit externen Befehlen arbeiten, ohne globale Umgebungsvariablen benutzen zu m\xFCssen.")],-1);function C(W,M){const i=a("RouterLink");return d(),u("div",null,[o,e("p",null,[c,t(i,{to:"/book/commands/each.html"},{default:s(()=>[g]),_:1}),m,t(i,{to:"/book/commands/par-each.html"},{default:s(()=>[b]),_:1}),p]),f,k,v,e("p",null,[w,_,z,t(i,{to:"/book/commands/each.html"},{default:s(()=>[x]),_:1}),N]),B,e("p",null,[D,t(i,{to:"/book/commands/reduce.html"},{default:s(()=>[V]),_:1}),S]),E,e("p",null,[P,t(i,{to:"/book/commands/def-env.html"},{default:s(()=>[U]),_:1}),Z,t(i,{to:"/book/commands/load-env.html"},{default:s(()=>[$]),_:1}),q]),e("p",null,[I,F,t(i,{to:"/book/commands/def-env.html"},{default:s(()=>[T]),_:1}),j]),A])}const K=l(h,[["render",C],["__file","thinking_in_nushell.html.vue"]]);export{K as default};
