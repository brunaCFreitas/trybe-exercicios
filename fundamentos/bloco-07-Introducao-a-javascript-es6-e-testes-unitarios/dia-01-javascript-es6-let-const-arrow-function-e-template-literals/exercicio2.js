const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  const arrayOrder = array.sort((a, b) => a - b);
  return arrayOrder;
}

const novoArray = sortOddsAndEvens(oddsAndEvens);

console.log(`Os números ${novoArray} se encontram ordenados de forma crescente!`);

// simoplificado

const oddsAndEvens2 = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens2.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);