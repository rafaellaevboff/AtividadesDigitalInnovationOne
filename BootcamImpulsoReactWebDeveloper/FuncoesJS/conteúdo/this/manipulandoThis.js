//CALL
//ex1:
const pessoa = {
    nome: "Miguel",
};

const animal = {
    nome: "Murphy",
};

function getSomething(){
    console.log(this.nome)
}

getSomething.call(pessoa)
//Miguel
getSomething.call(animal)
//Murphy

//call vai chamar o objeto que quer que a função se refira

//ex2:
const myObj = {
    num1: 2,
    num2: 4,
}

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);
//12

//------------------------------------------------------
//APPLY
//ex1:
const pessoa1 = {
    nome: 'Miguel',
}

const animal1 = {
    nome: 'Godi',
}

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa1);
//Miguel
getSomething.apply(animal1);
//Godi

//ex2:
//ex2:
const myObjeto = {
    num01: 2,
    num02: 4,
}

function soma2(a,b){
    console.log(this.num01 + this.num02 + a + b);
}

soma2.apply(myObjeto, [1 , 5]);
//12

//------------------------------------------------------
//BIND
//ex1:
const retornaNomes = function(){
    return this.nome;
}
let bruno = retornaNomes.bind({nome: 'Bruno'});
console.log(bruno());
//Bruno

//clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro