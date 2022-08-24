// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];

function indiceMaiorValor(array) {
    let maiorValor = array[0];
    let indice = 0;

    for (let i = 0; i < array.length; i += 1) {
        if (maiorValor < array[i]) {
            maiorValor = array[i];
            indice = i;
        }
    }

    return indice;
}

console.log();

// ou

let valorMaximo = Math.max(...array); // ... spread
//Math.max(2, 3, 6, 7, 10, 1).
const maiorIndice = array.findIndex(value => value === valorMaximo);
console.log(maiorIndice);