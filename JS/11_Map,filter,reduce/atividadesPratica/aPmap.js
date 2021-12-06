//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

//COM THIS:

const maca ={
    value:2,
}
const laranja ={
    value:3,
}
const nums = [1, 2];

function mapThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}
console.log('this -> maçã', mapThis(nums, maca))
console.log('this -> laranja', mapThis(nums, laranja))


//SEM THIS
const arrayM = [2,4,6,8,10]

//Multiplicando por 2:
function mapSemThis1(arr){
    return arr.map(function(num){
        return num * 2
    });
}
console.log(mapSemThis1(arrayM))

//Multiplicando pelo próprio número:
function mapSemThis2(arr){
    return arr.map(function(num){
        return num * num
    });
}
console.log(mapSemThis2(arrayM))
console.log(arrayM); //verificar que o array original nãon foi modificado