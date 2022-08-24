// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorNumero(array) {
    let menorNumero = 0;
    let index = 0;

    for (let indice in array) {
        if (array[indice] < menorNumero) {
            index = indice;
        }
    }
    return index;
}

console.log(indiceMenorNumero(array));

// ou 

let menorValor = Math.min(...array);
let indice = array.indexOf(menorValor);
console.log(indice);