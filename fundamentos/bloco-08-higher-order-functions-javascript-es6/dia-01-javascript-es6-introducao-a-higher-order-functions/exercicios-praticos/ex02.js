// Exercício Sorteador de Loteria

// Verifica se o número apostado (numberBet) é igual ao número sortado (numberDraw)
const checkNumber = (numberBet, numberDraw) => numberBet === numberDraw;

//Sorteia o número e chama a funão que verifica o número quando está é passada como param
const sortNumberResult = (numberBet, callback) => {
  const numberDraw = Math.floor((Math.random() * 5) +1);
  // retorna a verificação dos números com a mensagem atribuida de acordo com a condição no op ternário
  return callback(numberBet, numberDraw) ? 'Lucky day, you won!': 'Try Again!';
}

console.log(sortNumberResult(2, checkNumber));