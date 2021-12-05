## Definição de assíncrono: não ocorre/efetiva ao mesmo tempo
## JS roda de maneira síncrona

</br>

## O que são "Promisses"
### Objeto de processamento assíncrono 
### Seu valor e desconhecido inicialente e ela pode ser resolvida ou rejeitada
### Exemplo do ingresso de cinema e a sessão, o ingresso é uma promessa de ir à sessão de cinema. Se tudo ocorrer bem poderá assistir o filme, senão não vai poder.

### Uma promisse pode ter três estados:
- Pending (pendente)
- Fulfilled (completado)
- Rejected (rejeitado)

</br>

## Estrutura de uma promisse:
~~~~javascript
const myPromisse = new Promisse((resolve, reject)=>{
    window.setTimeout(()=>{
        resolve(console.log('RESOLVIDA'))
    }, 2000);
});
~~~~

</br>

## Como manipular Promisses
~~~~javascript
const myPromisse = new Promisse((resolve, reject)=>{
    window.setTimeout(()=>{
        resolve(console.log('RESOLVIDA'))
    }, 2000);
});

await myPromisse
    .then((result)=> result + ' passando pelo then')
    .then((result)=> result + ' e agora acabou')
    .catch((err)=> console.log(err.message))

    //após 2 segundos retornará o valor
    //"Resolvida passando pelo then e agora acabou"
~~~~

</br>

## async e await
### Async existe para declarar uma função assíncrona
### await será usado na função assíncrona, foi criada especialmente para lidar com promisses. Basicamente ele faz o código rodar só após a promisse ser resolvida
### EX1: preciso que uma promisse seja resolvida para rodar o cálculo de alguns números.
### EX2:

~~~~javascript
async function resolvePromisse(){
    const myPromisse = new Promisse((resolve, reject)=>{
        window.setTimeout(()=>{
            resolve('RESOLVIDA')
        }, 3000);
    });

    const resolved = await myPromisse
        .then((result)=> result + ' passando pelo then')
        .then((result)=> result + ' e agora acabou')
        .catch((err)=> console.log(err.message))

        return resolved;
}
~~~~

### O resultado de uma promisse vai ser outra promisse. Abaixo rodar no console:
~~~~console
resolvePromisse()
-> Promisse{<pending>}

await resolvePromisse()
-> "Resolvida passadno pelo then e agora acabou!"
~~~~

## Usar try/catch para rodar uma promisse:
~~~~javascript
async function resolvePromisse(){
    const myPromisse = new Promisse((resolve, reject)=>{
        window.setTimeout(()=>{
            resolve('RESOLVIDA')
        }, 3000);
    });

    let result;

    try{
        result = await myPromisse
            .then((result)=> result + ' passando pelo then')
            .then((result)=> result + ' e agora acabou')
    }catch(err){
        console.log(err.message)
    } 

    return result;
}
~~~~