//map -> mapeamento

//Não modifica o array, cria um novo array
//Realiza as operações em ordem

//Sintaxe
array.map(callback, thisArg)
callback(item, index, array)
//Callback: função a ser executada em cada elemento
//thisArgs(opcional): valor de 'this' dentro da função de callback


//map X forEach
// valor de retorno e considerar se o array auxiliar vai ser necessário

//usando map:
const array = [1,2,3,4,5];
console.log(array.map((item) => item*2));//retorno: [2,4,6,8,10];

//usando forEach:
const array2 = [1,2,3,4,5];
console.log(array2.forEach((item) => item*2)); //retorna undefined
//caso queira usar o array que resultou tem que colocar em uma constante