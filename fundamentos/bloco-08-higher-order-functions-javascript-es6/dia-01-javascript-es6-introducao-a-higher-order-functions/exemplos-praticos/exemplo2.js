// Funções com as operações desejadas

const soma = (num1,  num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const mult = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;


// Função que recebe como parametro as operações desejadas e chama as respectivasd funções de operação

const calculator = (func) => func(10, 5);

console.log(calculator(soma)); // 15
console.log(calculator(sub)); // 5
console.log(calculator(mult)); // 50
console.log(calculator(div)); // 2