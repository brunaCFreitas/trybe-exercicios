/*
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/

const a = 3, b = 7, c = 5;
console.log(a, b, c);
 let isFalse = false;

if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    isFalse = true;
}
console.log(isFalse);
