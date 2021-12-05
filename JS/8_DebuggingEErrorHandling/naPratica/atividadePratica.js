/*
Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros!");

        else if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object!");

        else if(typeof num !== 'number') throw new TypeError("num precisa ser do tipo number!");

        if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

        return arr
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError")
            console.log(e.name);
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Este erro é um TypeError")
            console.log(e.name);
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("Este erro é um RangeError")
            console.log(e.name);
            console.log(e.message);
        }
        else{
            console.log("Ocorreu um tipo de erro não esperado: ")
            console.log(e.stack);
        }
    }
}

console.log(validaArray());
console.log("\n")
console.log(validaArray(5, 10));
console.log("\n")
console.log(validaArray([2,3,4], 'a'));
console.log("\n")
console.log(validaArray([5,6,9], 6));
console.log("\n")
console.log(validaArray([5,6,9,3,7,1], 6));