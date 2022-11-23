import{_ as e,o as a,c as o,e as s}from"./app.ef551336.js";const d={},r=s('<h1 id="tipos-de-dados" tabindex="-1"><a class="header-anchor" href="#tipos-de-dados" aria-hidden="true">#</a> Tipos de dados</h1><p>Tradicionalmente, comandos de shell do Unix comunicavam-se entre si atrav\xE9s de strings de texto. Um comando gerava texto como sa\xEDda atrav\xE9s da sa\xEDda padr\xE3o (normalmente abreviada como &#39;stdout&#39;) e o outro comando lia o texto pela entrada padr\xE3o (ou &#39;stdin&#39;). Desse modo, os dois comandos podiam se comunicar.</p><p>Podemos pensar nesse tipo de comunica\xE7\xE3o como baseada em texto ou baseada em strings.</p><p>Nu adota essa abordagem para seus comandos e a amplia para incluir outros tipos de dados. Atualmente, Nu suporta dois tipos de dados: simples e estruturados.</p><h2 id="dados-simples" tabindex="-1"><a class="header-anchor" href="#dados-simples" aria-hidden="true">#</a> Dados simples</h2><p>Como muitas linguagens de programa\xE7\xE3o, Nu modela dados usando um conjunto de tipos de dados simples e estruturados. Tipos de dados simples incluem inteiros, decimais, strings, booleanos, datas e caminhos. Inclui tamb\xE9m um tipo especial para tamanhos de arquivos.</p><h3 id="inteiros" tabindex="-1"><a class="header-anchor" href="#inteiros" aria-hidden="true">#</a> Inteiros</h3><p>N\xFAmeros inteiros. Exemplos incluem 1, 5 e 100.</p><h3 id="decimais" tabindex="-1"><a class="header-anchor" href="#decimais" aria-hidden="true">#</a> Decimais</h3><p>Decimais s\xE3o n\xFAmeros com um componente fracion\xE1rio. Exemplos incluem 1.5, 2.0 e 15.333.</p><h3 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h3><p>Strings s\xE3o a maneira fundamental de se representar texto. Aparecem entre aspas duplas. Exemplos incluem &quot;Fred&quot;, &quot;myname.txt&quot; e &quot;Lynchburg, VA&quot;.</p><p>Strings no Nu s\xE3o compat\xEDveis com Unicode por padr\xE3o, ent\xE3o pode-se usar texto UTF-8 com facilidade.</p><h3 id="booleanos" tabindex="-1"><a class="header-anchor" href="#booleanos" aria-hidden="true">#</a> Booleanos</h3><p>Booleanos representam os valores verdadeiro ou falso. Ao inv\xE9s de se escrever seus valores diretamente, s\xE3o frequentemente o resultado de uma compara\xE7\xE3o.</p><h3 id="datas" tabindex="-1"><a class="header-anchor" href="#datas" aria-hidden="true">#</a> Datas</h3><p>Datas e hor\xE1rios s\xE3o mantidos juntos no tipo de dado Data. Valores de Data usados pelo sistema s\xE3o compat\xEDceis com fusos hor\xE1rios e usam o fuso UTC por padr\xE3o.</p><h3 id="caminhos" tabindex="-1"><a class="header-anchor" href="#caminhos" aria-hidden="true">#</a> Caminhos</h3><p>Caminhos s\xE3o uma forma independente de plataforma de se representar o caminho de um arquivo num dado sistema operacional. Exemplos incluem /usr/bin e C:\\Users\\file.txt.</p><h3 id="bytes" tabindex="-1"><a class="header-anchor" href="#bytes" aria-hidden="true">#</a> Bytes</h3><p>Tamanhos de arquivos s\xE3o mantidos num tipo especial de inteiros chamado bytes. Exemplos incluem 100, 15kb e 100mb.</p><h2 id="dados-estruturados" tabindex="-1"><a class="header-anchor" href="#dados-estruturados" aria-hidden="true">#</a> Dados estruturados</h2><p>Dados estruturados s\xE3o criados a partir de dados simples. Por exemplo, em vez de um inteiro simples, dados estruturados nos d\xE3o uma maneira de representar m\xFAltiplos inteiros no mesmo valor. Aqui est\xE1 uma lista dos tipos de daods estruturados suportados atualmente: objetos, dados bin\xE1rios, listas e blocos.</p><h3 id="objetos" tabindex="-1"><a class="header-anchor" href="#objetos" aria-hidden="true">#</a> Objetos</h3><p>O tipo de dados Objeto representa o que voc\xEA veria em uma linha de dados em uma tabela. Ele tem diferentes elementos de dados e a cada elemento \xE9 dado um nome de coluna.</p><h3 id="dados-binarios" tabindex="-1"><a class="header-anchor" href="#dados-binarios" aria-hidden="true">#</a> Dados bin\xE1rios</h3><p>Dados bin\xE1rios, como os dados de um arquivo de imagem, s\xE3o um agrupamento cru de bytes.</p><h3 id="listas" tabindex="-1"><a class="header-anchor" href="#listas" aria-hidden="true">#</a> Listas</h3><p>Listas podem guardar mais de um valor. Isso faz com que sejam um bom container para linhas de dados em uma tabela.</p><h3 id="blocos" tabindex="-1"><a class="header-anchor" href="#blocos" aria-hidden="true">#</a> Blocos</h3><p>Blocos representam a bloco de c\xF3digo no Nu. Por exemplo, no comando <code>where { $it.size &gt; 10kb }</code> o bloco \xE9 a por\xE7\xE3o contida entre chaves, <code>{ $it.size &gt; 10kb }</code>. Blocos s\xE3o uma maneira \xFAtil de representar c\xF3digo que pode ser executado em linha de dados.</p>',31),i=[r];function t(n,m){return a(),o("div",null,i)}const u=e(d,[["render",t],["__file","tipos_de_dados.html.vue"]]);export{u as default};
