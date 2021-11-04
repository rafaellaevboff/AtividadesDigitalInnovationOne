console.log("Criar objeto com elementos:");
let pessoa = {
    nome: 'Rafaella',
    idade: 18,
    endereco: "Rua Fátima"
}
console.log(pessoa)
// 'nome' e 'idade' = chaves(keys)
// 'Rafaella' e '18' = valores(values)

//Criar objeto vazio:
let objetoTeste = {};

console.log("\nSaber o tipo:");
console.log(typeof objetoTeste);

console.log("\nAdicionar chave com valor:");
objetoTeste.name = "julia";
console.log(objetoTeste);
objetoTeste.age = 19;
console.log(objetoTeste);
//ou
objetoTeste["numIrmaos"] = 3;
console.log(objetoTeste);

console.log("\nVer os valores de um objeto:");
console.log(Object.values(objetoTeste));

console.log("\nVer as chaves de um objeto:");
console.log(Object.keys(objetoTeste));

console.log("\nSaber o valor de uma determinada chave:");
console.log(objetoTeste.name);
//ou
console.log(objetoTeste["name"]);