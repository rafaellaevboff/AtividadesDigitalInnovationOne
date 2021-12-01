console.log("Declarar array:")
let nomeArray = [];

console.log("\nAdicionar elemento no último índice no array:")
nomeArray.push(3);
nomeArray.push(4);
nomeArray.push(2);
console.log(nomeArray);

console.log("\nRemover último elemento do array:")
nomeArray.pop();
console.log(nomeArray);

console.log("\nAdicionar elementos no último índice no array:")
nomeArray.push(2);
nomeArray.push(5);
console.log(nomeArray)

console.log("\nRemover elemento no primeiro índice no array:")
nomeArray.shift()
console.log(nomeArray)

console.log("\nAdicionar elemento no primeiro índice no array:")
nomeArray.unshift(9)
console.log(nomeArray)

console.log("\nSaber se um elemento existe no array:")
nomeArray.includes(3)
console.log(nomeArray.includes(3))

console.log("\nSaber se todos os elemento são um determinado valor no array:")
nomeArray.every(item => item === 5)
console.log(nomeArray.every(item => item === 5))

console.log("\nSaber se algum os elemento é um determinado valor no array:")
nomeArray.every(item => item === 5)
console.log(nomeArray.some(item => item === 5))

console.log("\nReverter a ordem dos valorer no array:")
nomeArray.reverse()
console.log(nomeArray.reverse())

console.log("\nSaber tamanho do array:")
nomeArray.length
console.log(nomeArray.length)