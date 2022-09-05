import{_ as o,r as a,o as i,c as l,a as t,b as n,w as c,e as s,d as e}from"./app.62da7227.js";const p={},u=s(`<h1 id="farben-und-themen-in-nu" tabindex="-1"><a class="header-anchor" href="#farben-und-themen-in-nu" aria-hidden="true">#</a> Farben und Themen in Nu</h1><p>In vielen Teilen von Nushells Oberfl\xE4che sind die Farben anpassbar. Dies wird in der Konfigurationsdatei <code>config.nu</code> erstellt. Ein Hashtag in der Konfigurationsdatei kommentiert den danach folgenden Text aus.</p><ol><li>Tabellen Rahmen</li><li>Werte einfacher Typen</li><li>Formen (Kommandozeilen Syntax)</li><li>Prompt</li><li>LS_COLORS</li></ol><h2 id="tabellen-rahmen" tabindex="-1"><a class="header-anchor" href="#tabellen-rahmen" aria-hidden="true">#</a> <code>Tabellen Rahmen</code></h2><hr><p>Tabellen Rahmen werden mit der Einstellung <code>table_mode</code> in der <code>config.nu</code> konfiguriert. Hier ein Beispiel:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    table_mode: rounded
<span class="token punctuation">}</span>
</code></pre></div><p>Dies sind die aktuellen Optionen f\xFCr <code>table_mode</code>:</p><ul><li><code>rounded</code> # das ist nat\xFCrlich der beste \u{1F603}</li><li><code>basic</code></li><li><code>compact</code></li><li><code>compact_double</code></li><li><code>light</code></li><li><code>thin</code></li><li><code>with_love</code></li><li><code>reinforced</code></li><li><code>heavy</code></li><li><code>none</code></li><li><code>other</code></li></ul><h3 id="farb-symbolik" tabindex="-1"><a class="header-anchor" href="#farb-symbolik" aria-hidden="true">#</a> <code>Farb-Symbolik</code></h3><hr><ul><li><code>r</code> - Normale Farbe Abk\xFCrzung f\xFCr rot</li><li><code>rb</code> - Normale Farbe rot mit <code>b</code> f\xFCr <code>bold</code>, fette Schrift</li><li><code>red</code> - Normale Farbe rot</li><li><code>red_bold</code> - Normale Farbe rot mit fetter Schrift</li><li><code>&quot;#ff0000&quot;</code> - &quot;#hex&quot; Format Vordergrund-Farbe rot (Anf\xFChrungszeichen ben\xF6tigt)</li><li><code>{ fg: &quot;#ff0000&quot; bg: &quot;#0000ff&quot; attr: b }</code> - &quot;komplettes #hex&quot; Format Vordergrund rot in &quot;#hex&quot; Format mit einem blauen Hintergund in &quot;#hex&quot; Format mit <code>b</code> als Abk\xFCrzung f\xFCr fette Schrift.</li></ul><h3 id="attribute" tabindex="-1"><a class="header-anchor" href="#attribute" aria-hidden="true">#</a> <code>Attribute</code></h3><hr><table><thead><tr><th>Code</th><th>Bedeutung</th></tr></thead><tbody><tr><td>l</td><td>blink</td></tr><tr><td>b</td><td>bold</td></tr><tr><td>d</td><td>dimmed</td></tr><tr><td>h</td><td>hidden</td></tr><tr><td>i</td><td>italic</td></tr><tr><td>r</td><td>reverse</td></tr><tr><td>s</td><td>strikethrough</td></tr><tr><td>u</td><td>underline</td></tr><tr><td>n</td><td>nothing</td></tr><tr><td></td><td>defaults to nothing</td></tr></tbody></table><h3 id="normale-farben-and-abkurzungen" tabindex="-1"><a class="header-anchor" href="#normale-farben-and-abkurzungen" aria-hidden="true">#</a> <code>Normale Farben</code> and <code>Abk\xFCrzungen</code></h3><table><thead><tr><th>Code</th><th>Name</th></tr></thead><tbody><tr><td>g</td><td>green</td></tr><tr><td>gb</td><td>green_bold</td></tr><tr><td>gu</td><td>green_underline</td></tr><tr><td>gi</td><td>green_italic</td></tr><tr><td>gd</td><td>green_dimmed</td></tr><tr><td>gr</td><td>green_reverse</td></tr><tr><td>gbl</td><td>green_blink</td></tr><tr><td>gst</td><td>green_strike</td></tr><tr><td>lg</td><td>light_green</td></tr><tr><td>lgb</td><td>light_green_bold</td></tr><tr><td>lgu</td><td>light_green_underline</td></tr><tr><td>lgi</td><td>light_green_italic</td></tr><tr><td>lgd</td><td>light_green_dimmed</td></tr><tr><td>lgr</td><td>light_green_reverse</td></tr><tr><td>lgbl</td><td>light_green_blink</td></tr><tr><td>lgst</td><td>light_green_strike</td></tr><tr><td>r</td><td>red</td></tr><tr><td>rb</td><td>red_bold</td></tr><tr><td>ru</td><td>red_underline</td></tr><tr><td>ri</td><td>red_italic</td></tr><tr><td>rd</td><td>red_dimmed</td></tr><tr><td>rr</td><td>red_reverse</td></tr><tr><td>rbl</td><td>red_blink</td></tr><tr><td>rst</td><td>red_strike</td></tr><tr><td>lr</td><td>light_red</td></tr><tr><td>lrb</td><td>light_red_bold</td></tr><tr><td>lru</td><td>light_red_underline</td></tr><tr><td>lri</td><td>light_red_italic</td></tr><tr><td>lrd</td><td>light_red_dimmed</td></tr><tr><td>lrr</td><td>light_red_reverse</td></tr><tr><td>lrbl</td><td>light_red_blink</td></tr><tr><td>lrst</td><td>light_red_strike</td></tr><tr><td>u</td><td>blue</td></tr><tr><td>ub</td><td>blue_bold</td></tr><tr><td>uu</td><td>blue_underline</td></tr><tr><td>ui</td><td>blue_italic</td></tr><tr><td>ud</td><td>blue_dimmed</td></tr><tr><td>ur</td><td>blue_reverse</td></tr><tr><td>ubl</td><td>blue_blink</td></tr><tr><td>ust</td><td>blue_strike</td></tr><tr><td>lu</td><td>light_blue</td></tr><tr><td>lub</td><td>light_blue_bold</td></tr><tr><td>luu</td><td>light_blue_underline</td></tr><tr><td>lui</td><td>light_blue_italic</td></tr><tr><td>lud</td><td>light_blue_dimmed</td></tr><tr><td>lur</td><td>light_blue_reverse</td></tr><tr><td>lubl</td><td>light_blue_blink</td></tr><tr><td>lust</td><td>light_blue_strike</td></tr><tr><td>b</td><td>black</td></tr><tr><td>bb</td><td>black_bold</td></tr><tr><td>bu</td><td>black_underline</td></tr><tr><td>bi</td><td>black_italic</td></tr><tr><td>bd</td><td>black_dimmed</td></tr><tr><td>br</td><td>black_reverse</td></tr><tr><td>bbl</td><td>black_blink</td></tr><tr><td>bst</td><td>black_strike</td></tr><tr><td>ligr</td><td>light_gray</td></tr><tr><td>ligrb</td><td>light_gray_bold</td></tr><tr><td>ligru</td><td>light_gray_underline</td></tr><tr><td>ligri</td><td>light_gray_italic</td></tr><tr><td>ligrd</td><td>light_gray_dimmed</td></tr><tr><td>ligrr</td><td>light_gray_reverse</td></tr><tr><td>ligrbl</td><td>light_gray_blink</td></tr><tr><td>ligrst</td><td>light_gray_strike</td></tr><tr><td>y</td><td>yellow</td></tr><tr><td>yb</td><td>yellow_bold</td></tr><tr><td>yu</td><td>yellow_underline</td></tr><tr><td>yi</td><td>yellow_italic</td></tr><tr><td>yd</td><td>yellow_dimmed</td></tr><tr><td>yr</td><td>yellow_reverse</td></tr><tr><td>ybl</td><td>yellow_blink</td></tr><tr><td>yst</td><td>yellow_strike</td></tr><tr><td>ly</td><td>light_yellow</td></tr><tr><td>lyb</td><td>light_yellow_bold</td></tr><tr><td>lyu</td><td>light_yellow_underline</td></tr><tr><td>lyi</td><td>light_yellow_italic</td></tr><tr><td>lyd</td><td>light_yellow_dimmed</td></tr><tr><td>lyr</td><td>light_yellow_reverse</td></tr><tr><td>lybl</td><td>light_yellow_blink</td></tr><tr><td>lyst</td><td>light_yellow_strike</td></tr><tr><td>p</td><td>purple</td></tr><tr><td>pb</td><td>purple_bold</td></tr><tr><td>pu</td><td>purple_underline</td></tr><tr><td>pi</td><td>purple_italic</td></tr><tr><td>pd</td><td>purple_dimmed</td></tr><tr><td>pr</td><td>purple_reverse</td></tr><tr><td>pbl</td><td>purple_blink</td></tr><tr><td>pst</td><td>purple_strike</td></tr><tr><td>lp</td><td>light_purple</td></tr><tr><td>lpb</td><td>light_purple_bold</td></tr><tr><td>lpu</td><td>light_purple_underline</td></tr><tr><td>lpi</td><td>light_purple_italic</td></tr><tr><td>lpd</td><td>light_purple_dimmed</td></tr><tr><td>lpr</td><td>light_purple_reverse</td></tr><tr><td>lpbl</td><td>light_purple_blink</td></tr><tr><td>lpst</td><td>light_purple_strike</td></tr><tr><td>c</td><td>cyan</td></tr><tr><td>cb</td><td>cyan_bold</td></tr><tr><td>cu</td><td>cyan_underline</td></tr><tr><td>ci</td><td>cyan_italic</td></tr><tr><td>cd</td><td>cyan_dimmed</td></tr><tr><td>cr</td><td>cyan_reverse</td></tr><tr><td>cbl</td><td>cyan_blink</td></tr><tr><td>cst</td><td>cyan_strike</td></tr><tr><td>lc</td><td>light_cyan</td></tr><tr><td>lcb</td><td>light_cyan_bold</td></tr><tr><td>lcu</td><td>light_cyan_underline</td></tr><tr><td>lci</td><td>light_cyan_italic</td></tr><tr><td>lcd</td><td>light_cyan_dimmed</td></tr><tr><td>lcr</td><td>light_cyan_reverse</td></tr><tr><td>lcbl</td><td>light_cyan_blink</td></tr><tr><td>lcst</td><td>light_cyan_strike</td></tr><tr><td>w</td><td>white</td></tr><tr><td>wb</td><td>white_bold</td></tr><tr><td>wu</td><td>white_underline</td></tr><tr><td>wi</td><td>white_italic</td></tr><tr><td>wd</td><td>white_dimmed</td></tr><tr><td>wr</td><td>white_reverse</td></tr><tr><td>wbl</td><td>white_blink</td></tr><tr><td>wst</td><td>white_strike</td></tr><tr><td>dgr</td><td>dark_gray</td></tr><tr><td>dgrb</td><td>dark_gray_bold</td></tr><tr><td>dgru</td><td>dark_gray_underline</td></tr><tr><td>dgri</td><td>dark_gray_italic</td></tr><tr><td>dgrd</td><td>dark_gray_dimmed</td></tr><tr><td>dgrr</td><td>dark_gray_reverse</td></tr><tr><td>dgrbl</td><td>dark_gray_blink</td></tr><tr><td>dgrst</td><td>dark_gray_strike</td></tr></tbody></table><h3 id="hex-format" tabindex="-1"><a class="header-anchor" href="#hex-format" aria-hidden="true">#</a> <code>&quot;#hex&quot;</code> Format</h3><hr><p>Das &quot;#hex&quot; Format ist gebr\xE4uchlich um Farben zu repr\xE4sentieren. Es besteht immer aus dem <code>#</code> gefolgt von 6 Zeichen. Die ersten zwei sind f\xFCr <code>rot</code>, die n\xE4chsten zwei f\xFCr <code>gr\xFCn</code> und die letzten zwei f\xFCr <code>blau</code>. Es ist wichtig, dass dieser Text mit Anf\xFChrungszeichen geschrieben wird, damit Nushell es nicht f\xFCr einen Kommentar h\xE4lt.</p><p>Beispiel: Die prim\xE4re Farbe <code>rot</code> ist <code>&quot;#ff0000&quot;</code> oder <code>&quot;#FF0000&quot;</code>. Gross- und Kleinschreibung sollten hier keine Rolle spielen.</p><p>Dieses <code>&quot;#hex&quot;</code> Format erlaubt es, 24-bit Echtfarben f\xFCr verschiedene Bereiche von Nushell zu spezifizieren.</p><h2 id="volles-hex-format" tabindex="-1"><a class="header-anchor" href="#volles-hex-format" aria-hidden="true">#</a> <code>Volles &quot;#hex&quot;</code> Format</h2><hr><p>Das <code>volle &quot;#hex&quot;</code> Format ist eine Interpretation des <code>&quot;#hex&quot;</code> Formats, welches den Vordergrund, Hintergrund und Attribute in einer Zeile spezifizieren kann.</p><p>Beispiel: <code>{ fg: &quot;#ff0000&quot; bg: &quot;#0000ff&quot; attr: b }</code></p><ul><li>Vordergrund rot in &quot;#hex&quot; format</li><li>Hiuntergund blau in &quot;#hex&quot; format</li><li>Attribute in fetter Schrift als Abk\xFCrzung spezifiziert</li></ul><h2 id="primitive-typen" tabindex="-1"><a class="header-anchor" href="#primitive-typen" aria-hidden="true">#</a> <code>Primitive Typen</code></h2><hr><p>Werte primitiver Typen sind z.B. <code>int</code> und <code>string</code>. Primitive Typen und Formen k\xF6nnen ebenfalls mit verschiedenster Farben symbolisiert werden.</p><p>Hier die aktuelle Liste von Primitiven Typen. Nicht alle davon sind konfigurierbar. Die konfigurierbaren sind mit * markiert.</p><table><thead><tr><th>primitive</th><th>default color</th><th>configurable</th></tr></thead><tbody><tr><td><code>any</code></td><td></td><td></td></tr><tr><td><code>binary</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>block</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>bool</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>cellpath</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>condition</code></td><td></td><td></td></tr><tr><td><code>custom</code></td><td></td><td></td></tr><tr><td><code>date</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>duration</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>expression</code></td><td></td><td></td></tr><tr><td><code>filesize</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>float</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>glob</code></td><td></td><td></td></tr><tr><td><code>import</code></td><td></td><td></td></tr><tr><td><code>int</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>list</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>nothing</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>number</code></td><td></td><td></td></tr><tr><td><code>operator</code></td><td></td><td></td></tr><tr><td><code>path</code></td><td></td><td></td></tr><tr><td><code>range</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>record</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>signature</code></td><td></td><td></td></tr><tr><td><code>string</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>table</code></td><td></td><td></td></tr><tr><td><code>var</code></td><td></td><td></td></tr><tr><td><code>vardecl</code></td><td></td><td></td></tr><tr><td><code>variable</code></td><td></td><td></td></tr></tbody></table><h4 id="spezielle-primitives-keine-wirklichen-primitiven-typen-denn-sie-existieren-nur-fur-die-farbgebung" tabindex="-1"><a class="header-anchor" href="#spezielle-primitives-keine-wirklichen-primitiven-typen-denn-sie-existieren-nur-fur-die-farbgebung" aria-hidden="true">#</a> Spezielle &quot;primitives&quot; (keine wirklichen Primitiven Typen, denn sie existieren nur f\xFCr die Farbgebung)</h4><table><thead><tr><th>primitive</th><th>default color</th><th>configurable</th></tr></thead><tbody><tr><td><code>leading_trailing_space_bg</code></td><td>Color::Rgb(128, 128, 128))</td><td>*</td></tr><tr><td><code>header</code></td><td>Color::Green.bold()</td><td>*</td></tr><tr><td><code>empty</code></td><td>Color::Blue.normal()</td><td>*</td></tr><tr><td><code>row_index</code></td><td>Color::Green.bold()</td><td>*</td></tr><tr><td><code>hints</code></td><td>Color::DarkGray.normal()</td><td>*</td></tr></tbody></table><p>Hier ein kleines Beispiel, wie diese Werte angewendet werden k\xF6nnen.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        separator: purple
        leading_trailing_space_bg: <span class="token string">&quot;#ffffff&quot;</span>
        header: gb
        date: wd
        filesize: c
        row_index: cb
        bool: red
        int: green
        duration: blue_bold
        range: purple
        float: red
        string: white
        nothing: red
        binary: red
        cellpath: cyan
        hints: dark_gray
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Hier ein anderes Beispiel, welches mehrere Farben Schreibweisen sowie Kommentare verwendet.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        separator: <span class="token string">&quot;#88b719&quot;</span> <span class="token comment"># Dies setzt nur die Vordergrundsfarbe wie in PR #486</span>
        leading_trailing_space_bg: white <span class="token comment"># Dies setzt nur die Vordergrundsfarbe im urspr\xFCnglichen Stil</span>
        header: <span class="token punctuation">{</span> <span class="token comment"># Analog PR #489</span>
            fg: <span class="token string">&quot;#B01455&quot;</span>, <span class="token comment"># Hinweis, Bei Werten mit hex Farben, werden Anf\xFChrungszeichen ben\xF6tigt</span>
            bg: <span class="token string">&quot;#ffb900&quot;</span>,<span class="token comment"># Hinweis, Kommas werden nicht ben\xF6tigt, es k\xF6nnte auch alles auf eine Zeile passen</span>
            attr: bli <span class="token comment"># Hinweis, Um diesen Wert sind keine Anf\xFChrungszeichen, hier geht es auch ohne</span>
        <span class="token punctuation">}</span>
        date: <span class="token string">&quot;#75507B&quot;</span>
        filesize: <span class="token string">&quot;#729fcf&quot;</span>
        row_index: <span class="token punctuation">{</span>
            <span class="token comment"># Hinweis, Dies ist eine andere M\xF6glichkeit, nur den Vordergrund anzugeben, ohne Angabe von bg oder attr</span>
            fg: <span class="token string">&quot;#e50914&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="formen-werte" tabindex="-1"><a class="header-anchor" href="#formen-werte" aria-hidden="true">#</a> <code>Formen</code> Werte</h2><p>Wie oben bereits erw\xE4hnt, ist <code>Formen</code> oder <code>shapes</code> ein Begriff, der angibt, wie Syntax eingef\xE4rbt wird.</p><p>Hier die aktuelle Formen Liste.</p><table><thead><tr><th>shape</th><th>default style</th><th>configurable</th></tr></thead><tbody><tr><td><code>shape_block</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_bool</code></td><td>fg(Color::LightCyan)</td><td>*</td></tr><tr><td><code>shape_custom</code></td><td>bold()</td><td>*</td></tr><tr><td><code>shape_external</code></td><td>fg(Color::Cyan)</td><td>*</td></tr><tr><td><code>shape_externalarg</code></td><td>fg(Color::Green).bold()</td><td>*</td></tr><tr><td><code>shape_filepath</code></td><td>fg(Color::Cyan)</td><td>*</td></tr><tr><td><code>shape_flag</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_float</code></td><td>fg(Color::Purple).bold()</td><td>*</td></tr><tr><td><code>shape_garbage</code></td><td>fg(Color::White).on(Color::Red).bold()</td><td>*</td></tr><tr><td><code>shape_globpattern</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_int</code></td><td>fg(Color::Purple).bold()</td><td>*</td></tr><tr><td><code>shape_internalcall</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_list</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_literal</code></td><td>fg(Color::Blue)</td><td>*</td></tr><tr><td><code>shape_nothing</code></td><td>fg(Color::LightCyan)</td><td>*</td></tr><tr><td><code>shape_operator</code></td><td>fg(Color::Yellow)</td><td>*</td></tr><tr><td><code>shape_range</code></td><td>fg(Color::Yellow).bold()</td><td>*</td></tr><tr><td><code>shape_record</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_signature</code></td><td>fg(Color::Green).bold()</td><td>*</td></tr><tr><td><code>shape_string</code></td><td>fg(Color::Green)</td><td>*</td></tr><tr><td><code>shape_string_interpolation</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_table</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_variable</code></td><td>fg(Color::Purple)</td><td>*</td></tr></tbody></table><p>Hier ein kleines Beispiel wie Farben auf diese Teile angewendet werden. Was nicht spezifiziert wird, erh\xE4lt die Standardfarbe.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        shape_garbage: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#FFFFFF&quot;</span> bg: <span class="token string">&quot;#FF0000&quot;</span> attr: b<span class="token punctuation">}</span>
        shape_bool: green
        shape_int: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#0000ff&quot;</span> attr: b<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="prompt-konfiguration-und-farbgebung" tabindex="-1"><a class="header-anchor" href="#prompt-konfiguration-und-farbgebung" aria-hidden="true">#</a> <code>Prompt</code> Konfiguration und Farbgebung</h2><p>Der Nushell Prompt ist konfigurierbar mit diesen Umgebungsvariablen:</p><ul><li><code>PROMPT_COMMAND</code>: Code der ausgef\xFChrt wird beim Aufsetzen des Prompts (Block)</li><li><code>PROMPT_COMMAND_RIGHT</code>: Code um die rechte Seite, <em>RIGHT</em> prompt (Block), auf zu setzen. (Siehe auch oh-my.nu in nu_scripts)</li><li><code>PROMPT_INDICATOR</code> = &quot;\u3009&quot;: Der Indikator, welcher nach dem Prompt ausgegeben wird (Standardm\xE4ssig das &quot;&gt;&quot; Unicode Symbol)</li><li><code>PROMPT_INDICATOR_VI_INSERT</code> = &quot;: &quot;</li><li><code>PROMPT_INDICATOR_VI_NORMAL</code> = &quot;v &quot;</li><li><code>PROMPT_MULTILINE_INDICATOR</code> = &quot;::: &quot;</li></ul><p>Beispiel: F\xFCr einen einfachen Prompt w\xE4re folgendes m\xF6gllich. Hinweis <code>PROMPT_COMMAND</code> ben\xF6tigt einen <code>block</code> wogegen die anderen einen <code>string</code> erwarten.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> build-string <span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%m/%d/%Y %I:%M:%S%.3f&#39;</span><span class="token punctuation">)</span> <span class="token string">&#39;: &#39;</span> <span class="token punctuation">(</span>pwd <span class="token operator">|</span> path <span class="token function">basename</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre></div><p>Soll der standard <code>PROMPT_INDICATOR</code> ge\xE4ndert werden, sieht das so aus.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;&gt; &quot;</span>
</code></pre></div>`,51),b=e("Den Prompt einf\xE4rben wird duch den "),h=t("code",null,"block",-1),g=e(),_=t("code",null,"PROMPT_COMMAND",-1),k=e(" kontrolliert und individualisiert. In "),m={href:"https://github.com/nushell/nu_scripts/blob/main/prompt/oh-my.nu",target:"_blank",rel:"noopener noreferrer"},f=e("nu_scripts repo"),w=e(" wurde ein recht ausgefallener geschrieben, welcher den git Status darstellt."),v=t("h2",{id:"ls-colors-farben-fur-den-ls-befehl",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ls-colors-farben-fur-den-ls-befehl","aria-hidden":"true"},"#"),e(),t("code",null,"LS_COLORS"),e(" Farben f\xFCr den "),t("code",null,"ls"),e(" Befehl")],-1),y=e("Nushell wird die Umgebungsvariable "),q=t("code",null,"LS_COLORS",-1),C=e(" auf Linu, Mac und Windows respektieren. Diese Einstellung erlaubt es Farben anhand ihres Dateityps zu definieren, wenn ein "),F=t("code",null,"ls",-1),x=e(" ausgef\xFChrt wird. Zum Beispiel k\xF6nnen Verzeichnisse in einer Farbe, _.md Markdown Dateien in einer anderen Farbe, _.toml Dateien in einer dritten Farbe usw. dargestellt werden."),z=t("p",null,"Es gibt verschiedenste Wege um Dateitypen ein zu f\xE4rben.",-1),S={href:"https://github.com/trapd00r/LS_COLORS",target:"_blank",rel:"noopener noreferrer"},T=e("Hier"),O=e(" findet sich eine ausf\xFChrliche Liste, welche ein rudiment\xE4res Verst\xE4ndnis bietet, wie eine ls_colors Datei ein "),R=t("code",null,"dircolors",-1),D=e(" in eine "),P=t("code",null,"LS_COLORS",-1),L=e(" Umgebungsvariable \xFCberf\xFChrt."),M={href:"https://www.linuxhowto.net/how-to-set-colors-for-ls-command/",target:"_blank",rel:"noopener noreferrer"},N=e("Dies"),$=e(" ist eine sehr gute Einf\xFChrung in "),A=t("code",null,"LS_COLORS",-1),I=e(". Es finden sich sicher noch viele mehr im Internet."),B=e("Freunde der "),H=t("code",null,"vivid",-1),W=e(" Anwendung finden Informationen "),V={href:"https://github.com/sharkdp/vivid",target:"_blank",rel:"noopener noreferrer"},E=e("hier"),K=e(". Die Konfiguration in "),G=t("code",null,"config.nu",-1),U=e(" erfolgt so:"),Z=s(`<p><code>let-env LS_COLORS = (vivid generate molokai | str trim)</code></p><p>Ist <code>LS_COLORS</code> nicht gesetzt, wird Nushell auf die eingebaute <code>LS_COLORS</code> Einstellung zur\xFCckgreifen, welche auf den erweiterten 8-bit ANSI Farben aufbaut.</p><h2 id="theming" tabindex="-1"><a class="header-anchor" href="#theming" aria-hidden="true">#</a> Theming</h2><p>Theming kombiniert all die eben beschriebene Farbgebung. Hier ein einfaches Beispiel, welches die F\xE4higkeiten des Themings demonstriert. Dies ist nur ein Ausschnitt der <code>base16</code> Themes, welche im Internet weit verbreitet sind.</p><p>Entscheidend damit Theming funktioniert ist, dass alle Farben und Themen in der <code>config.nu</code> definiert werden <em>bevor</em> die <code>let config =</code> Zeile definiert wird.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Definition von einigen Farben</span>

<span class="token builtin class-name">let</span> base00 <span class="token operator">=</span> <span class="token string">&quot;#181818&quot;</span> <span class="token comment"># Standard Hinergrund</span>
<span class="token builtin class-name">let</span> base01 <span class="token operator">=</span> <span class="token string">&quot;#282828&quot;</span> <span class="token comment"># Heller Hintergrund (Verwendet f\xFCr Status Bar, Linien Nummern und Faltmarken)</span>
<span class="token builtin class-name">let</span> base02 <span class="token operator">=</span> <span class="token string">&quot;#383838&quot;</span> <span class="token comment"># Auswahl Hintergrund</span>
<span class="token builtin class-name">let</span> base03 <span class="token operator">=</span> <span class="token string">&quot;#585858&quot;</span> <span class="token comment"># Kommentare, Verstecktes, Zeilen Hervorhebungen</span>
<span class="token builtin class-name">let</span> base04 <span class="token operator">=</span> <span class="token string">&quot;#b8b8b8&quot;</span> <span class="token comment"># Dunkler Vordergrund (F\xFCr Status Bars)</span>
<span class="token builtin class-name">let</span> base05 <span class="token operator">=</span> <span class="token string">&quot;#d8d8d8&quot;</span> <span class="token comment"># Standard Vordergrund, Einf\xFCgebarken, Trennzeichen, Operatoren</span>
<span class="token builtin class-name">let</span> base06 <span class="token operator">=</span> <span class="token string">&quot;#e8e8e8&quot;</span> <span class="token comment"># Heller Vordergrund (Nicht oft verwendet)</span>
<span class="token builtin class-name">let</span> base07 <span class="token operator">=</span> <span class="token string">&quot;#f8f8f8&quot;</span> <span class="token comment"># Heller Hintergrund (Nicht oft verwendet)</span>
<span class="token builtin class-name">let</span> base08 <span class="token operator">=</span> <span class="token string">&quot;#ab4642&quot;</span> <span class="token comment"># Variablen, XML Tags, Markup Link Text, Markup Listen, Diff gel\xF6scht</span>
<span class="token builtin class-name">let</span> base09 <span class="token operator">=</span> <span class="token string">&quot;#dc9656&quot;</span> <span class="token comment"># Ganzzahlen, Boolean, Konstanten, XML Attribute, Markup Link Url</span>
<span class="token builtin class-name">let</span> base0a <span class="token operator">=</span> <span class="token string">&quot;#f7ca88&quot;</span> <span class="token comment"># Klassen, Markup fett, Such-Text Hintergrund</span>
<span class="token builtin class-name">let</span> base0b <span class="token operator">=</span> <span class="token string">&quot;#a1b56c&quot;</span> <span class="token comment"># Strings, vererbte Klasse, Markup Code, Diff eingef\xFCgt</span>
<span class="token builtin class-name">let</span> base0c <span class="token operator">=</span> <span class="token string">&quot;#86c1b9&quot;</span> <span class="token comment"># Support, Regul\xE4re Ausdr\xFCcke, Escape Zeichen, Markup Quotes</span>
<span class="token builtin class-name">let</span> base0d <span class="token operator">=</span> <span class="token string">&quot;#7cafc2&quot;</span> <span class="token comment"># Funktionen, Methoden, Attribut IDs, \xDCberschriften</span>
<span class="token builtin class-name">let</span> base0e <span class="token operator">=</span> <span class="token string">&quot;#ba8baf&quot;</span> <span class="token comment"># Keyw\xF6rter, Speicher, Selectoren, Markup Italic, Diff ge\xE4ndert</span>
<span class="token builtin class-name">let</span> base0f <span class="token operator">=</span> <span class="token string">&quot;#a16946&quot;</span> <span class="token comment"># Veraltet, \xD6ffnende/Schliessende eingebettete Sprach Tags, z.B. &lt;?php ?&gt;</span>

<span class="token comment"># und nund wird das Theme mit diesen Farbdefinitionen erstellt.</span>

<span class="token builtin class-name">let</span> base16_theme <span class="token operator">=</span> <span class="token punctuation">{</span>
    separator: <span class="token variable">$base03</span>
    leading_trailing_space_bg: <span class="token variable">$base04</span>
    header: <span class="token variable">$base0b</span>
    date: <span class="token variable">$base0e</span>
    filesize: <span class="token variable">$base0d</span>
    row_index: <span class="token variable">$base0c</span>
    bool: <span class="token variable">$base08</span>
    int: <span class="token variable">$base0b</span>
    duration: <span class="token variable">$base08</span>
    range: <span class="token variable">$base08</span>
    float: <span class="token variable">$base08</span>
    string: <span class="token variable">$base04</span>
    nothing: <span class="token variable">$base08</span>
    binary: <span class="token variable">$base08</span>
    cellpath: <span class="token variable">$base08</span>
    hints: dark_gray

    <span class="token comment"># shape_garbage: { fg: $base07 bg: $base08 attr: b} # base16 white on red</span>
    <span class="token comment"># but i like the regular white on red for parse errors</span>
    shape_garbage: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#FFFFFF&quot;</span> bg: <span class="token string">&quot;#FF0000&quot;</span> attr: b<span class="token punctuation">}</span>
    shape_bool: <span class="token variable">$base0d</span>
    shape_int: <span class="token punctuation">{</span> fg: <span class="token variable">$base0e</span> attr: b<span class="token punctuation">}</span>
    shape_float: <span class="token punctuation">{</span> fg: <span class="token variable">$base0e</span> attr: b<span class="token punctuation">}</span>
    shape_range: <span class="token punctuation">{</span> fg: <span class="token variable">$base0a</span> attr: b<span class="token punctuation">}</span>
    shape_internalcall: <span class="token punctuation">{</span> fg: <span class="token variable">$base0c</span> attr: b<span class="token punctuation">}</span>
    shape_external: <span class="token variable">$base0c</span>
    shape_externalarg: <span class="token punctuation">{</span> fg: <span class="token variable">$base0b</span> attr: b<span class="token punctuation">}</span>
    shape_literal: <span class="token variable">$base0d</span>
    shape_operator: <span class="token variable">$base0a</span>
    shape_signature: <span class="token punctuation">{</span> fg: <span class="token variable">$base0b</span> attr: b<span class="token punctuation">}</span>
    shape_string: <span class="token variable">$base0b</span>
    shape_filepath: <span class="token variable">$base0d</span>
    shape_globpattern: <span class="token punctuation">{</span> fg: <span class="token variable">$base0d</span> attr: b<span class="token punctuation">}</span>
    shape_variable: <span class="token variable">$base0e</span>
    shape_flag: <span class="token punctuation">{</span> fg: <span class="token variable">$base0d</span> attr: b<span class="token punctuation">}</span>
    shape_custom: <span class="token punctuation">{</span>attr: b<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># nun werden die regul\xE4ren Konfigurations Einstellungen sowie das &quot;color_config:&quot; Theme angewendet.</span>

<span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  filesize_metric: <span class="token boolean">true</span>
  table_mode: rounded <span class="token comment"># basic, compact, compact_double, light, thin, with_love, rounded, reinforced, heavy, none, other</span>
  use_ls_colors: <span class="token boolean">true</span>
  color_config: <span class="token variable">$base16_theme</span> <span class="token comment"># &lt;-- this is the theme</span>
  use_grid_icons: <span class="token boolean">true</span>
  footer_mode: always <span class="token comment">#always, never, number_of_rows, auto</span>
  animate_prompt: <span class="token boolean">false</span>
  float_precision: <span class="token number">2</span>
  use_ansi_coloring: <span class="token boolean">true</span>
  filesize_format: <span class="token string">&quot;b&quot;</span> <span class="token comment"># b, kb, kib, mb, mib, gb, gib, tb, tib, pb, pib, eb, eib, zb, zib, auto</span>
  edit_mode: emacs <span class="token comment"># vi</span>
  max_history_size: <span class="token number">10000</span>
  log_level: error
<span class="token punctuation">}</span>
</code></pre></div><p>Wer in Sachen Theming aufs ganze gehen will, will bestimmt alle Parameter von LS_COLORS und den Prompt konfigurieren, viel Gl\xFCck!</p>`,7);function Y(X,Q){const d=a("ExternalLinkIcon"),r=a("RouterLink");return i(),l("div",null,[u,t("p",null,[b,h,g,_,k,t("a",m,[f,n(d)]),w]),v,t("p",null,[y,q,C,n(r,{to:"/de/book/commands/ls.html"},{default:c(()=>[F]),_:1}),x]),z,t("p",null,[t("a",S,[T,n(d)]),O,R,D,P,L]),t("p",null,[t("a",M,[N,n(d)]),$,A,I]),t("p",null,[B,H,W,t("a",V,[E,n(d)]),K,G,U]),Z])}const J=o(p,[["render",Y],["__file","coloring_and_theming.html.vue"]]);export{J as default};
