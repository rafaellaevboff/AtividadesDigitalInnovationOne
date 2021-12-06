//executa uma função em tds os elementos do array e retorna um valor único
// vários -> função -> um valor

array.reduce(callbackFn, initialValue)
//Callback: função a ser executada a partir do acumulador
//initialValue(opcional): valor sobre o qual o retorno final irá atuar

//SÍNTAXE:
const callbackFn = function(accumulator, currentValue, index, array){
    //do something
}

array.reduce(callbackFn, initialValue)
//Accumulator/prevValue: acumulador de todas as chamadas de callbackFn
//currentValue: elemento atual sendo acessado pela