// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for(let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

console.log(`A soma de todos os números do array é ${soma}`);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = soma / numbers.length;
console.log(`A média aritimetica do array numbers é de ${media}`);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(media > 20) {
    console.log(`Valor maior que 20.`);
} else {
    console.log(`Valor menor ou igual a 20.`)
}

// 5.  Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let temporario = 0;
for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > temporario) {
        temporario = numbers[index];
    } else if (temporario === numbers[index]) {
        temporario = numbers[index];
    }
}

console.log(`O maior número do array é ${temporario}`);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let contaImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        contaImpar += 1;
    } 
    if (contaImpar === 0) {
        console.log(`nenhum valor encontrado.`)
    }
}

console.log(`A quantidade de numeros impares é ${contaImpar}`);

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    } 
}
console.log(`O menor número é: ${menorNumero}`);

// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numeros = [];

for(let index = 1; index <= 25; index += 1) {
    numeros.push(index);
}

console.log(numeros);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < numeros.length; index += 1){
    console.log(numeros[index] / 2);
}