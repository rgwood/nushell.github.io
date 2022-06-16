import{_ as e,o as a,c as s,e as r}from"./app.43db386a.js";const o={},n=r(`<h1 id="variables-y-subexpresiones" tabindex="-1"><a class="header-anchor" href="#variables-y-subexpresiones" aria-hidden="true">#</a> Variables y Subexpresiones</h1><p>En Nushell hay dos tipos de expresiones de evaluaci\xF3n: variables y subexpresiones. Cuando lees expresiones que empiezan con el signo d\xF3lar (<code>$</code>) sabes que trabajas con una expresi\xF3n de evaluaci\xF3n. Esto indica que cuando Nushell toma el valor en esta posici\xF3n, necesitar\xE1 ejecutar un paso de evaluaci\xF3n para procesar la expresi\xF3n y posterioremente usar el valor del resultado. Ambas formas de expresi\xF3n de evaluaci\xF3n soportan un modo simple y una forma ruta (<code>path</code>) para trabajar con datos m\xE1s complejos.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>La variable es el m\xE1s simple de ambas expresiones de evaluaci\xF3n. Durante la evaluaci\xF3n, una variable es remplazada for su valor.</p><p>Si creamos una variable, podemos imprimir su contenido al usar <code>$</code> para referir a la misma:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let mi-valor = 4
&gt; echo $mi-valor
4
</code></pre></div><h2 id="variables-rutas-paths" tabindex="-1"><a class="header-anchor" href="#variables-rutas-paths" aria-hidden="true">#</a> Variables rutas (paths)</h2><p>Una variable ruta funciona al llegar dentro del contenido de una variable, navegando columnas dentro de la misma para alcanzar un valor final. Supongamos que en vez de <code>4</code>, hayamos asignado una tabla como valor:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let mi-valor = [[nombre]; [pruebausuario]]
</code></pre></div><p>Podemos usar variables ruta para evaluar la variable <code>$mi-valor</code> y obtener el valor de la columna <code>nombre</code> con un solo paso:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $mi-valor.nombre
pruebausuario
</code></pre></div><h2 id="subexpresiones" tabindex="-1"><a class="header-anchor" href="#subexpresiones" aria-hidden="true">#</a> Subexpresiones</h2><p>Siempre puedes evaluar subexpresiones y usar su resultado envolviendo la expresi\xF3n entre par\xE9ntesis <code>()</code>.</p><p>Los par\xE9ntesis contienen una tuber\xEDa que se ejecutar\xE1 hasta completar, y su valor final ser\xE1 usado. Por ejemplo, <code>(ls)</code> ejecutar\xEDa el comando <code>ls</code>, devolviendo como resultado la tabla y <code>(git branch --show-current)</code> ejecutar\xE1 el comando externo git y devolver una cadena con el nombre de la rama actual. Tambi\xE9n puedes usar par\xE9ntesis para ejecutar expresiones matem\xE1ticas como <code>(2 + 3)</code>.</p><p>Subexpresiones tambi\xE9n pueden ser tuber\xEDas y no solamente comandos individuales. Si desearamos una lista de nombres de archivos superiores a diez kilobytes, podemos utilizar subexpresiones para ejecutar una tuber\xEDa y asignar el resultado a una variable:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let nombres-de-archivos-grandes = (ls | where size &gt; 10kb)
&gt; echo $nombres-de-archivos-grandes
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502    name    \u2502 type \u2502   size   \u2502   modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Cargo.lock \u2502 File \u2502 155.3 KB \u2502 17 hours ago
 1 \u2502 README.md  \u2502 File \u2502  15.9 KB \u2502 17 hours ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="subexpresiones-y-rutas" tabindex="-1"><a class="header-anchor" href="#subexpresiones-y-rutas" aria-hidden="true">#</a> Subexpresiones y rutas</h2><p>Subexpresiones tambi\xE9n soportan rutas. Por ejemplo, supongamos que queremos una lista de nombres de archivos en el directorio actual. Una manera de hacerlo es con una tuber\xEDa:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name
</code></pre></div><p>Pero tambi\xE9n podemos hacer una acci\xF3n similar con un solo paso usando una subexpresi\xF3n de ruta:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo (ls).name
</code></pre></div><p>Todo depende de las necesidades del c\xF3digo o estilo particular que trabaje mejor para ti.</p>`,22),i=[n];function t(l,d){return a(),s("div",null,i)}var c=e(o,[["render",t],["__file","variables_y_subexpresiones.html.vue"]]);export{c as default};
