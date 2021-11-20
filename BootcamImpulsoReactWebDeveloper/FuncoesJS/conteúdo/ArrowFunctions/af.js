//Sintaxe Arrow Function

//função "normal":
const helloWorld = function(){
    return "Hello World";
}

// ---->

//Arrow Functions
const helloWorldAF1 = () => {
    return "Hello World";
}

const helloWorldAF2 = () => "Hello World";

//quando tem uma linha só não precisa colocar as chaves e nem o return
//se tiver APENAS UM parâmetro pode dispensar os ()

//outros exemplos:

//ex1:
const soma = (a,b) => a+b;
soma(4,6);
//10

//ex2:
const soma = a => 1;
soma(4);
//4

//--------------------------------------------------
//Arrow Funcion NÃO faz HOISTING
//quando for usar hoisting usar a forma comum:
soma(2,4);

function soma(a,b){
    return a+b;
}

/*
FORMA ERRADA DE FAZER:

soma(2,4)
const soma = (a,b) => a+b

VAI DAR ERRO
*/

//-------------------------------------------------
//RESTRIÇÕES
/*
 - 'this' sempre será o objeto global. Métodos para modificar seu valor não irão funcionar; (call, apply e bind não irá funcionar)

 - Não existe o objeto 'arguments';

 - o constructor (Ex: MeuObjeto()) tbm não pode ser utilizado.

 DICA: para métodos sempre utilize uma função comum
*/