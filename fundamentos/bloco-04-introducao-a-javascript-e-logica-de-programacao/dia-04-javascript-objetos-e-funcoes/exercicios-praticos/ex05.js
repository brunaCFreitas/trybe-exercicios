// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array = [2, 3, 2, 5, 8, 2, 3];

let acumuladores = {};
let maiorValor = array[0];

for(let numero of array) {
    if(!acumuladores[numero]) {
        acumuladores[numero] = 0;
    }

    acumuladores[numero]++;
    
    if(acumuladores[maiorValor] < acumuladores[numero]){
        maiorValor = numero;
    }
}

console.log(maiorValor);
console.log(acumuladores);