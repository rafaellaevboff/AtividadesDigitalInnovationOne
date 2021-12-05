function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar no botão! Clique aqui para ser redirecionado para o perfil do GitHub da Rafaella.<b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar no botão!");
}

function redirecionar(){
    window.open("https://github.com/rafaellaevboff");//abre em uma nova aba
    window.location.href = "https://github.com/rafaellaevboff"; //vai abrir na mesma aba da página
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse.";
    //document.getElementById("moverMouse").innerHTML = "Obrigada por passar o mouse."
    //alert("trocar texto"); //quando passa o mouse em cima do texto ele dá esse alert
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui."
    //document.getElementById("moverMouse").innerHTML = "Passe o mouse aqui."
}

function load(){
    alert("Página carregada.")
    //quando o body carregar vai mandar esse alert
}

function funcaoChange(elemento){
    console.log(elemento.value);
}