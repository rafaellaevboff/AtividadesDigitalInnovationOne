//Solução 01
function verificarPalindromo(string){
    if(!string) return "String não existente"; //se não existe/nula

    return string.split("").reverse().join("") === string;
    //split vai transformar a string em um array com todas as letras e o reverse vai inverter as letras de lugar
    //join junta todos os elementos do array
}

console.log(verificarPalindromo(""))
console.log(verificarPalindromo("itati"))
console.log(verificarPalindromo("cachorro"))

//Solução 02