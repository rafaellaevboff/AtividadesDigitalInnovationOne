const darkModeClass = 'dark-mode'
const botao         = document.getElementById("mode-selector");
const titulo        = document.getElementById("page-title");
const body          = document.getElementsByTagName("body")[0]; //vai retornar uma lista, por isso o [0] pra indicar que é aqle body, se for no inspecionar som o [0] vai aparecer uma lista
const footer        = document.getElementsByTagName("footer")[0];
botao.addEventListener("click", mudarModo);

function mudarModo(){
    mudaClasses();
    mudarTextos();
}

function mudaClasses(){
    botao.classList.toggle(darkModeClass);
    titulo.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function mudarTextos(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode;
        titulo.innerHTML = lightMode + " ON";
        return;
    }

    botao.innerHTML = darkMode;
    titulo.innerHTML = darkMode + " ON";
}

