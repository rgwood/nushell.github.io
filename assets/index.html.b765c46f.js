import{_ as n,o as e,c as s,e as a}from"./app.62da7227.js";const t={},p=a(`<h1 id="einfuhrung" tabindex="-1"><a class="header-anchor" href="#einfuhrung" aria-hidden="true">#</a> Einf\xFChrung</h1><p>Hallo und herzlich Willkommen beim Nushell Projekt. Das Ziel diese Projekts ist es, die Philosophie von Unix Shells, wo Pipes einfache Befehle miteinander verbinden, mit modernen Ans\xE4tzen zu verbinden.</p><p>Nu ist von vielen Seiten beeinflusst: traditionelle Shells wie Bash, objektbasierte Shells wie PowerShell, funktionale Programmierung, Systems Programming und viele Weitere. Aber statt die eierlegende Wollmilchsau zu sein, liegt der Fokus von Nu darauf, die angebotenen Funktionen gut zu beherrschen:</p><ul><li>Flexible cross-plattform Shell mit einem modernen Verhalten</li><li>Ausgaben von Kommandozeilenprogrammen mit einer Shell zu verarbeiten, die Struktur von Daten versteht</li><li>Ein Interface besitzen, das den modernen Bed\xFCrfnissen gerecht wird</li></ul><p>Der einfachste Weg zu verstehen, was Nu alles leisten kann, ist entlang von Beispielen. Los geht&#39;s!</p><p>Das Erste was auff\xE4llt, wenn ein Befehl wie <code>ls</code> ausgef\xFChrt wird, ist, dass anstatt eines Blocks von Text eine strukturierte Tabelle als Ausgabe erscheint.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment">#  \u2502         name          \u2502 type \u2502   size    \u2502  modified   \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  <span class="token number">0</span> \u2502 <span class="token number">404</span>.html              \u2502 <span class="token function">file</span> \u2502     <span class="token number">429</span> B \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">1</span> \u2502 CONTRIBUTING.md       \u2502 <span class="token function">file</span> \u2502     <span class="token number">955</span> B \u2502 <span class="token number">8</span> mins ago  \u2502
\u2502  <span class="token number">2</span> \u2502 Gemfile               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">3</span> \u2502 Gemfile.lock          \u2502 <span class="token function">file</span> \u2502   <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">4</span> \u2502 LICENSE               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">5</span> \u2502 README.md             \u2502 <span class="token function">file</span> \u2502     <span class="token number">213</span> B \u2502 <span class="token number">3</span> days ago  \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>Diese Tabelle ist mehr als nur eine andere Darstellungsform. Wie Tabellen in Spreadsheets erlaubt es diese Tabelle mit den Daten interaktiver zu arbeiten.</p><p>Um das zu demonstrieren, wird der Inhalt der Tabelle zun\xE4chst nach der Gr\xF6\xDFe sortiert. Um das zu realisieren, wird die Ausgabe von <code>ls</code> genommen und in ein Befehl gegeben, der Tabellen auf Basis von Daten in einer Spalte neu anordnen kann.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment">#  \u2502         name          \u2502 type \u2502   size    \u2502  modified   \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  <span class="token number">0</span> \u2502 Gemfile.lock          \u2502 <span class="token function">file</span> \u2502   <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">1</span> \u2502 SUMMARY.md            \u2502 <span class="token function">file</span> \u2502   <span class="token number">3.7</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">2</span> \u2502 Gemfile               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">3</span> \u2502 LICENSE               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">4</span> \u2502 CONTRIBUTING.md       \u2502 <span class="token function">file</span> \u2502     <span class="token number">955</span> B \u2502 <span class="token number">9</span> mins ago  \u2502
\u2502  <span class="token number">5</span> \u2502 books.md              \u2502 <span class="token function">file</span> \u2502     <span class="token number">687</span> B \u2502 <span class="token number">3</span> days ago  \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>Um das Ganze zu realisieren, mussten hierzu nicht Argumente an <code>ls</code> \xFCbergeben werden. Stattdessen wird der <code>sort-by</code> Befehl verwendet, den Nu bereitstellt, um Daten zu sortieren. Damit die gr\xF6\xDFten Dateien oben erscheinen wurde zus\xE4tzlich die Option <code>reverse</code> angegeben.</p><p>Nu stellt sehr viele Befehle bereit, die mit Tabellen arbeiten k\xF6nnen. Beispielsweise kann die Ausgabe von <code>ls</code> auch derart gefiltert werden, dass nur Datei mit einer Gr\xF6\xDFe von mehr als einem Kilobyte angezeigt werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502       name        \u2502 type \u2502  size   \u2502  modified  \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Gemfile           \u2502 <span class="token function">file</span> \u2502 <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">1</span> \u2502 Gemfile.lock      \u2502 <span class="token function">file</span> \u2502 <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">2</span> \u2502 LICENSE           \u2502 <span class="token function">file</span> \u2502 <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">3</span> \u2502 SUMMARY.md        \u2502 <span class="token function">file</span> \u2502 <span class="token number">3.7</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Wie in der Unix-Philosophie, erlauben Befehle, die untereinander Daten austauschen k\xF6nnen, viele verschiedene Kombinationen um Aufgaben zu l\xF6sen. Wie in folgendem Beispiel:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
\u256D\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502  <span class="token comment">#  \u2502 pid  \u2502         name         \u2502 status  \u2502  cpu  \u2502    mem    \u2502 virtual  \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   <span class="token number">0</span> \u2502 <span class="token number">7570</span> \u2502 nu                   \u2502 Running \u2502  <span class="token number">1.96</span> \u2502  <span class="token number">23.2</span> MiB \u2502 <span class="token number">32.8</span> GiB \u2502
\u2502   <span class="token number">1</span> \u2502 <span class="token number">3533</span> \u2502 remindd              \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502 <span class="token number">103.6</span> MiB \u2502 <span class="token number">32.3</span> GiB \u2502
\u2502   <span class="token number">2</span> \u2502 <span class="token number">3495</span> \u2502 TVCacheExtension     \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502  <span class="token number">11.9</span> MiB \u2502 <span class="token number">32.2</span> GiB \u2502
\u2502   <span class="token number">3</span> \u2502 <span class="token number">3490</span> \u2502 MusicCacheExtension  \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502  <span class="token number">12.9</span> MiB \u2502 <span class="token number">32.2</span> GiB \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>Der <code>ps</code> Befehl erlaubt es auf Linux-Systemen alle laufenden Prozesse, deren Status und Name abzufragen. Des Weiteren gibt er Informationen zu CPU-Last der einzelnen Prozesse an.</p><p>Was macht man, wenn man nur Prozesse sehen m\xF6chte, die aktuelle aktiv die CPU nutzen? Wie zuvor beim <code>ls</code> Befehl, kann mit der durch <code>ps</code> zur\xFCckgegebenen Tabelle gearbeitet werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 pid  \u2502      name      \u2502 status  \u2502  cpu   \u2502    mem    \u2502 virtual  \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 <span class="token number">1583</span> \u2502 Terminal       \u2502 Running \u2502  <span class="token number">20.69</span> \u2502 <span class="token number">127.8</span> MiB \u2502 <span class="token number">33.0</span> GiB \u2502
\u2502 <span class="token number">1</span> \u2502  <span class="token number">579</span> \u2502 photoanalysisd \u2502 Running \u2502 <span class="token number">139.50</span> \u2502  <span class="token number">99.9</span> MiB \u2502 <span class="token number">32.3</span> GiB \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Bis jetzt wurden <code>ls</code> und <code>ps</code> genutzt, um Dateien und Prozesse aufzulisten. Nu besitzt aber noch viele weitere Befehle die n\xFCtzliche Informationen in Tabellenform ausgeben. Dazu wird nun ein Block auf die Befehle <code>date</code> und <code>sys</code> geworfen.</p><p>Wenn <code>date now</code> aufgerufen wird, werden Informationen zum aktuellen Datum und der aktuellen Uhrzeit ausgegeben.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 <span class="token parameter variable">-08:00</span>
</code></pre></div><p>Um das Datum in Tabellenform zu bekommen, kann es zus\xE4tzlich in <code>date to-table</code> gegeben werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 year \u2502 month \u2502 day \u2502 hour \u2502 minute \u2502 second \u2502 timezone \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 <span class="token number">2022</span> \u2502     <span class="token number">3</span> \u2502   <span class="token number">7</span> \u2502   <span class="token number">14</span> \u2502     <span class="token number">45</span> \u2502      <span class="token number">3</span> \u2502 <span class="token parameter variable">-08:00</span>   \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Der Aufruf von <code>sys</code> gibt Informationen zum System aus, auf dem Nu l\xE4uft:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token function">host</span>  \u2502 <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> \u2502
\u2502 cpu   \u2502 <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    \u2502
\u2502 disks \u2502 <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    \u2502
\u2502 mem   \u2502 <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> \u2502
\u2502 temp  \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     \u2502
\u2502 net   \u2502 <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Diese Ausgabe unterscheidet sich nun von den vorherigen. Der <code>sys</code> Befehl gibt eine Tabelle zur\xFCck, die selbst strukturierte Tabellen in den Zellen enth\xE4lt anstatt nur einfache Werte. Um auf die Daten zuzugreifen, wird der <em>get</em> Befehl verwendet:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 name           \u2502 Debian GNU/Linux       \u2502
\u2502 os version     \u2502 <span class="token number">11</span>                     \u2502
\u2502 kernel version \u2502 <span class="token number">5.10</span>.92-v8+            \u2502
\u2502 <span class="token function">hostname</span>       \u2502 lifeless               \u2502
\u2502 <span class="token function">uptime</span>         \u2502 19day 21hr 34min 45sec \u2502
\u2502 sessions       \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Der <code>get</code> Befehl erlaubt es, in die Inhalte einer Tabellenzelle einzutauchen. Hier wird beispielsweise die Spalte &quot;host&quot; n\xE4her betrachtet, die Informationen \xFCber den Host, auf dem Nu l\xE4uft, enth\xE4lt. Der Name des Betriebssystem (OS), die CPU und mehr. Nun sollen die Namen der Nutzer auf dem System ausgegeben werden:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 jt \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Aktuelle existiert nur ein Nutzer namens &quot;jt&quot;. Wie zu sehen ist, kann ein ganzer Pfad f\xFCr Spalten angegeben werden - nicht nur der Name der Spalte. Nu wird den Pfad nehmen und durch die entsprechenden Daten in der Tabelle gehen.</p><p>Und noch etwas anderes ist anders. Anstatt einer Tabelle mit Daten wurde nur ein einzelnes Element ausgegeben: der String &quot;jt&quot;. Nu arbeitet sowohl mit Tabellen voller Daten als auch mit Strings. Strings sind ein wichtiger Bestandteil, um mit Befehlen au\xDFerhalb von Nu zu arbeiten.</p><p>Nun soll aufgezeigt werden, wie mit Strings au\xDFerhalb von Nu gearbeitet wird. Dazu wird das vorige Beispiel erweitert. Die Daten werden an den externen <code>echo</code> Befehl weitergegeben (das <code>^</code> teilt Nu mit, dass nicht der eingebaute <code>echo</code> Befehl verwendet werden soll):</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div><p>Das sieht jetzt genau gleich aus wie die Ausgabe zuvor. Was soll das? Es ist \xE4hnlich aber mit einem entscheidenden Unterschied: <code>^echo</code> wurde aufgerufen. Das erlaubt es uns Daten aus Nu heraus an beliebige Befehle au\xDFerhalb von Nu zu geben wie <code>echo</code> oder <code>git</code>.</p><p><em>Hinweis: Hilfe zu allen in Nu eingebauten Befehlen kann mit dem Befehl <code>help</code> angezeigt werden</em>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
Explore and manipulate paths.

There are three ways to represent a path:

* As a path literal, e.g., <span class="token string">&#39;/home/viking/spam.txt&#39;</span>
* As a structured path: a table with <span class="token string">&#39;parent&#39;</span>, <span class="token string">&#39;stem&#39;</span>, and <span class="token string">&#39;extension&#39;</span> <span class="token punctuation">(</span>and
* <span class="token string">&#39;prefix&#39;</span> on Windows<span class="token punctuation">)</span> columns. This <span class="token function">format</span> is produced by the <span class="token string">&#39;path parse&#39;</span>
  subcommand.
* As an inner list of path parts, e.g., <span class="token string">&#39;[[ / home viking spam.txt ]]&#39;</span><span class="token builtin class-name">.</span>
  Splitting into parts is <span class="token keyword">done</span> by the <span class="token variable"><span class="token variable">\`</span>path <span class="token function">split</span><span class="token variable">\`</span></span> command.

All subcommands accept all three variants as an input. Furthermore, the <span class="token string">&#39;path
join&#39;</span> subcommand can be used to <span class="token function">join</span> the structured path or path parts back into
the path literal.

Usage:
  <span class="token operator">&gt;</span> path

Subcommands:
  path <span class="token function">basename</span> - Get the final component of a path
  path <span class="token function">dirname</span> - Get the parent directory of a path
  path exists - Check whether a path exists
  path <span class="token function">expand</span> - Try to <span class="token function">expand</span> a path to its absolute form
  path <span class="token function">join</span> - Join a structured path or a list of path parts.
  path parse - Convert a path into structured data.
  path relative-to - Get a path as relative to another path.
  path <span class="token function">split</span> - Split a path into parts by a separator.
  path <span class="token builtin class-name">type</span> - Get the <span class="token builtin class-name">type</span> of the object a path refers to <span class="token punctuation">(</span>e.g., file, dir, symlink<span class="token punctuation">)</span>

Flags:
  -h, <span class="token parameter variable">--help</span>
      Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,36),o=[p];function l(i,r){return e(),s("div",null,o)}const u=n(t,[["render",l],["__file","index.html.vue"]]);export{u as default};
