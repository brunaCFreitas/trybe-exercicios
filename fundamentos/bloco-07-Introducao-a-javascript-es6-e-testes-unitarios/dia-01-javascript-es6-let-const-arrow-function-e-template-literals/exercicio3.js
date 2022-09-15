const fatorial = (numero) => {
  let result = 1;
  for (let index = 2; index <= numero; index += 1) {
    result *= index;
  }

  return result;
};

console.log(`Este é o fatorial de 4 = ${fatorial(4)}`);

// recursiva

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(`O fatorial de 5 é ${factorial(5)}`);

// outro modo

const f = (numero) => {
  let resultado = numero;
  for (let index = 1; index < numero; index += 1) {
    resultado *= index;
  }
  return resultado;
}

console.log(`o fatorial de 5 é ${f(5)} no teste 2`);