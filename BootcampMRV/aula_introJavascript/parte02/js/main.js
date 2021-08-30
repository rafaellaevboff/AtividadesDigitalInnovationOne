var listaFrutas = ["maçã", "pêra", "laranja"]

console.log(listaFrutas);
alert(listaFrutas[1]);//pera

listaFrutas.push("uva");//adiciona uva na lista
console.log(listaFrutas);

listaFrutas.pop();//tira último elemento
console.log(listaFrutas);

console.log(listaFrutas.length);

console.log(listaFrutas.reverse());

console.log(listaFrutas.toString());

console.log(listaFrutas[0]); //retorna primeiro elemento
console.log(listaFrutas.toString()[0]);//retorna primeira letra

console.log(listaFrutas.join(" | "))