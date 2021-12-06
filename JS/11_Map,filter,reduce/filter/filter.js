//colocar o array em um filtro e os elementos que corresponderem serão passados
//cria um noo array e não modifica o array original

array.filter(callback, thisArg)
//Callback: função a ser executada em cada elemento
//thisArg (opcional): valor de 'this' dentro da função de callback

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi']
console.log(frutas.filter((fruta) => fruta.includes('maçã')))
//retornará: ['maça fuji', 'maça verde'];