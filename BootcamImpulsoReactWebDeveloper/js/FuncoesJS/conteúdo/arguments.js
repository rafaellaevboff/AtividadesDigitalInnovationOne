function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
//EX: findMax(1,2,3,6,90,1)
//90
//Um array com todos os parâmetros passados quando a função foi invocada

function showArgs(){
    return arguments;
}