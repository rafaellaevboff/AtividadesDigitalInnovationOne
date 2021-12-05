## Classes

<br/>

### Element.classList

~~~Html
<div id="meu-elemento" class="classe">
    <!--resto do código aqui-->
</div>
~~~

~~~javascript
const meuElemento = document.getElementById("meu-elemento")

// add
meuElemento.classList.add("novo-estilo")
//adiciona a classe "meu-estilo

// remove
meuElemento.classList.remove("classe")
// remove a classe "classe

// toggle
meuElemento.classList.toggle("dark-mode")
//adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela caso ela faça
~~~

~~~Html
<div id="meu-elemento" class="novo-estilo dark-mode">
    <!--resto do código aqui-->
</div>
~~~

<br/>

### CSS
 - acessando diretamente o CSS de um elemento. Mudar o estilo do elemento através do js
 ~~~javascript
 document.getEelementByTagName("p").style.color= "blue";
 ~~~