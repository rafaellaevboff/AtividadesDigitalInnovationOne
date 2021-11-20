//estrutura
function nome(parametros){

}


//função anônima
const somar = function(a,b){
    return a + b;
}
somar(1,2)//3
somar(5,4)//9


//função autoinvocável(IIFE)
//Uma função entre () seguida de outro (), que representa a sua chamada
//Exemplos:

(
function(){
    let name = "DIO";
    return name;
}
)();
//DIO

(
    function(a,b){
        return a+b;
    }
)(1,2)
//3

const soma3 = (
    function(a,b){
        return a+b;
    }
)(1,2)
//console.log(soma3)
//3

//CALBACKS
const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1+num2
}

const sub = function(num1, num2){
    return num1-num2
}

const resultSoma = calc(soma,1,2);
const resultSub = calc(sub,1,2);

console.log(resultSoma);
console.log(resultSub);