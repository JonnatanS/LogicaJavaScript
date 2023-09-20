const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragon",
  "Legolas",
  "Gimli",
];

console.log(arr);
// Adicionar Elementos
// Adiciona no Final
// push

let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// Adiciona no começo
// unshift

tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

//Remover Elementos
// pop

let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// Remover no começo
// shift

ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por um Elemento
// includes

const inclui = arr.includes("Gandalf");
console.log(inclui);

// Pesquisa pelo indice
// indexOf

const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
// slice

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat

const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição dos elementos
// splice

const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos
// for

for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
