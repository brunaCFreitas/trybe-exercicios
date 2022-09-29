// Busque o maior valor do array

const numbers = [50, 85, -30, 3, 15];

// solução com o for

const maiorNumero = (numeros) => {
  let maior = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
}

console.log(maiorNumero(numbers));

// solução com o reduce

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85