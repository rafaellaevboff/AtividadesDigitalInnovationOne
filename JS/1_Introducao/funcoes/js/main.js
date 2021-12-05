//SOMAR
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(10,10));

//REPLACE
function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
}
alert(setReplace("Sou japonesa", "japonesa", "brasileira"));

//VALIDAR IDADE
var validar = 0;//variável global
function validarIdade(idade){
    //var validar; variável local
    if(idade >= 18){
        validar = true;
    }else{
        validar = false
    }
    return validar;
}
//ou fazer direto return true - return false no if/else
var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));
console.log(validar)