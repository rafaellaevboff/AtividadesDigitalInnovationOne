//ARRAYS


//SPREAD: uma forma de lidar separadamente com elementos
//oq fazia parte de um array se torna elemento independente:
function sum(x,y,z){
    return x + y +z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));


//REST: combina os argumentos em um Array
//Oq era um elemento independente se torna parte de um array
function confereTamanho(...args){
    console.log(args.length);
}
confereTamanho()//0
confereTamanho(1,2)//2
confereTamanho(3,4,5)//3

//Pré-ES2015
function exponencial(array, num){
    if(num === undefined){
        num = 1;
    }

    const result = [];

    for(let i = 0; i< array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}
exponencial([1,2,3,4])
//1,2,3,4
exponencial([1,2,3,4],4)
//4,8,27,64


//Pós-ES2015
function exponencial2(array, num = 1){
    const result = [];

    for(let i = 0; array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}
exponencial([1,2,3,4])
//[1,2,3,4]
exponencial([1,2,3,4], 4)
//[4,8,27,64]

//----------------------------------------------------------------------------------


//OBJETOS

//OBJECT DESTRUCTURING
//Entre {} é posível filtrar apenas os dados que nos interessam em um objeto
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName:{firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

userId(user);
//42
getFullName(user);
//John Doe