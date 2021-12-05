/*
Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
*/

const pessoa1 = {
    nome: "Felipe",
    idade: 20,
    parentesco: "irmão"
}
const pessoa2 = {
    nome: "Ana",
    idade: 40,
    parentesco: "mãe"
}
const pessoa3 = {
    nome: "Paulo",
    idade: 43,
    parentesco: "pai"
}
const pessoa4 = {
    nome: "Roberta",
    idade: 20,
    parentesco: "tia"
}

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log("CALL")
console.log(calculaIdade.call(pessoa1, 30))
console.log(calculaIdade.call(pessoa2, 20))
console.log(calculaIdade.call(pessoa3, 10))
console.log(calculaIdade.call(pessoa4, 05))

console.log("\nAPPLY")
console.log(calculaIdade.apply(pessoa1, [5]))
console.log(calculaIdade.apply(pessoa2, [10]))
console.log(calculaIdade.apply(pessoa3, [35]))
console.log(calculaIdade.apply(pessoa4, [15]))