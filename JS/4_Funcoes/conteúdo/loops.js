// IF/ELSE ID/ELSE
//ex1:
function numeroPositivo(num){
    let resultado;

    if(num<0){
        resultado = false;
    }else{
        resultado= true;
    }

    return resultado;
}
console.log(numeroPositivo(2))
//true
console.log(numeroPositivo(-2))
//false

//ex2:
function numP(num){
    let result;
    const ehNegativo = num < 0

    if(ehNegativo){
        result = false;
    }else{
        result= true;
    }

    return result;
}
console.log(numP(2))
//true
console.log(numP(-2))
//false

//ex3:
function numPositivo(num){
    let res;
    const ehNegativo = num < 0

    if(ehNegativo){
        res = false;
    }
    res= true;

    return res;
}
console.log(numPositivo(2))
//true
console.log(numPositivo(-2))
//false

//ex4:
function positivo(num){
    const ehNegativo = num < 0;
    const maiorQ10 = num > 10

    if(ehNegativo){
        return "NÚMERO POSITIVO";
    } else if(!ehNegativo && maiorQ10){
        "NÚMERO POSITIVO E MAIOR QUE 10";
    }
    return "Esse num é positivo!"
}

//---------------------------------------------------------------------------------------------
//SWITCH/CASE (faz comparação de tipo e valor)
function getAnimal(id){
    switch(id){
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}
getAnimal(1)//cão
getAnimal(7)//peixe
getAnimal("1")//peixe


//---------------------------------------------------------------------------------------------
//FOR
function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i < arr.lenght; i++){
        multiplicaPorDois().push(arr[i] * 2);
    }

    return multiplicados;
}
const meusNumeros = [2,33,456,356,40]
multiplicaPorDois(meusNumeros)


//FOR...IN
//ex1:
function forInExemplo1(obj){
    for(prop in obj){
        console.log(prop);
    }
}
const meuObjeto1 = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}
forInExemplo1(meuObjeto1);
//nome
//idade
//cidade

//ex2:
function forInExemplo2(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}
const meuObjeto2 = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}
forInExemplo2(meuObjeto2);
//João
//20
//Salvador


//FOR...OF
//ex1:
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}
const palavra = "abacaxi";
logLetras(palavra)
//a
//b
//a
//c
//a
//x
//i

//ex2:
function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}
const nums = [30,20,233,2]
logNumeros(nums)
//30
//20
//233
//2

//-----------------------------------------------
//WHILE (faz até que a condição se torne falsa)
function exemploWhile(){
    let num = 0;

    while(num <= 5){
        console.log(num);
        num++;
    }
}
exemploWhile();
//0
//1
//2
//3
//4
//5

//-------------------------------------------------
//DO...WHILE (faz até que a condição se torne falsa, porém a PRIMEIRA execução SEMPRE OCORRE)
//ex1:
function exemploDoWhile(){
    let num = 0;

    do{
        console.log(num);
        num++;
    }while(num <= 5)

    exemploWhile();
    //0
    //1
    //2
    //3
    //4
    //5
}

//ex2:
function exemploDoWhile(){
    let num = 6;

    do{
        console.log(num);
        num++;
    }while(num <= 5)
    
    exemploWhile();
    //6
}