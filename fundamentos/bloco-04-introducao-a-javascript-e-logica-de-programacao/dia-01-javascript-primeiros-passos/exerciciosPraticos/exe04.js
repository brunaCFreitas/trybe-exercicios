/*
Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".
*/

let numero = -5;

if (numero > 0) {
    console.log(`${numero} - positive`);
} else if (numero < 0) {
    console.log(`${numero} - negative`);
} else {
    console.log(`${numero} - zero`)
}

