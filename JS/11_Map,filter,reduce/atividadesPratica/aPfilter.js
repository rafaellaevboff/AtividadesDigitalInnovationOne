//Filtre e retorne todos os números pares de um array.

console.log("Mostrar números pares")

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function filtrarPares(arr){
    return arr.filter(callback)
}
function callback(item){
    return item % 2 === 0;
}
console.log(filtrarPares(nums))

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(nums.filter((num) => num%2 === 0))

//ÍMPARES:
console.log("Mostrar números ímpares")

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function filtrarImpares(arr){
    return arr.filter(callback)
}
function callback(item){
    return item % 2 !== 0;
}
console.log(filtrarImpares(nums))

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(nums.filter((num) => num%2 !== 0))