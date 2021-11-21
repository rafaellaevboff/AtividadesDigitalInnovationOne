## EVENTOS

<br/>

### O que são?
 - Eventos são qualquer tipo de ação que o usuário faça em uma página. Sua interação com os elementos da página.

<br/>

 ### Tipos:
 - **eventos do mouse** (mouseover(seria como o hover), mouseout);
 - **eventos de clique** (click-clique simples, dbclick-cliques duplos);
 - **eventos de atualização** (change, load);

 <br/>

 ### Acionar eventos
 #### Event listener
  - Diretamente no JS, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação

  ~~~javascript
  const botao = document.getElementById("meuBotao");

  botao.addEventListener("click", outraFuncao)
  //addEventListener("tipo do evento", oq vai ser feito quando esse evento for acionado)
  ~~~

  <br/>

 #### Atributo HTML
  - especifica a função a ser chamada diretamente no elemento HTML. No HTML se coloca o on antes do nome do evento. Ex: onclick, onmouseover, onchange...

  ~~~html
    <html>
    <body>
        <h1 onclick="mudaTexto(this)">Clique aqui</h1>

        <script>
            function mudaTexto(id){
                id.innerHTML = "Mudei";
            }
        </script>
    </body>
    </html>
  ~~~