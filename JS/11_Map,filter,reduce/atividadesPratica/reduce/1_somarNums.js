// 1- Some todos os números de um array
const arr = [1,2,3,4,5,6,7,8,9]
function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({prev}); //vai ser basicamente um acumulador
        console.log({current});
        return prev + current;
    })
}
console.log(somaNumeros(arr))

const arr = [1,2,3,4,5,6,7,8,9]
function somar(arr){
    return arr.reduce(function(acumulador, proxValor){
    return acumulador += proxValor;
})
}
console.log(somar(arr))