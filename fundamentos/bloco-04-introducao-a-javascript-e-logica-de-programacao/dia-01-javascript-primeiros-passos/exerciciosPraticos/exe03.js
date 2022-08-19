/*
Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/

let a = 2, b = 62, c = 90;
console.log(a, b, c);

if(a > b && a > c) {
    console.log(`O maior número é o ${a}`);
} else if(b > a && b > c) {
    console.log(`O maior número é o ${b}`);
} else {
    console.log(`O maior número é o ${c}`);
}