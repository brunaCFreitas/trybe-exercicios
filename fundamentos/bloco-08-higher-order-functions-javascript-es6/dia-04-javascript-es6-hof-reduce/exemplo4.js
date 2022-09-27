// Faça uma função que some todos os números pares do array:

// Usando o filter e o reduce

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pegaPar = (numero) => numero % 2 === 0;

const somaPares = (acumulador, numero) => acumulador + numero;

const somaNumeros = (array) => array.filter(pegaPar).reduce(somaPares);

console.log(somaNumeros(numbers)); // 152


// Usando apenas o reduce

const sumPair = (acumulador, numero) => ((numero % 2 === 0) ? acumulador + numero : acumulador);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152