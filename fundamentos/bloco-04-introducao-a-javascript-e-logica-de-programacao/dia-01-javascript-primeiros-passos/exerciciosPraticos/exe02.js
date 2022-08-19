/*
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/

const num1 = 39;
const num2 = 39;

if (num1 > num2){
    console.log(`o número maior é o número ${num1}`);
} else if (num2 > num1) {
    console.log(`o número maior é o número ${num2}`);
} else if( num1 == num2) {
    console.log(`os números são iguais. ${num1} e ${num2}`);
}