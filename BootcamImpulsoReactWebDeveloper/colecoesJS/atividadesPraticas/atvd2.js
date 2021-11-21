/*
Atividade 2: Sets
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/

const meuArray = [30,40,50,4,330,90,56,78];
function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}
console.log(valoresUnicos(meuArray));

//[...mySet]  spread -> ele pegou cada elemento do Set e colocou dentro de um Array ([a,b,c,d,e,f]), se colocasse só [mySet] ele iria colocar o set todo dentro do array e n cada elemento separado([Set(x){a,b,c,d,e,f}])