// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     return 'Os valores devem ser númericos';
//   }
//   return value1 + value2;
// };

// console.log(sum(2, 3)); // 5
// console.log(sum(2, '3')); // 23

// // Fluxo de exceção throw - Para a excecução caso encontre o erro sem devolver nenhuma mensagem de output

// const sum2 = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
//   return value1 + value2;
// };

// console.log(sum2(2, '3'));


// // Refatoração - try e catch - mostra uma mensagem de erro no output

// const verifyIsNumber = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('ERRO! OS valores devem ser númericos');
//   }
// };

// const sum3 = (value1, value2) => {
//   try {
//     verifyIsNumber(value1, value2);
//     return value1 + value2;
//   } catch (error) {
//     return error.message;
//   }
// };

// console.log(sum3(2, '3'));

const obj = {
  chave1: 'a',
  chave2: 'b',
  chave3: 'c'
};

console.log(Object.keys(obj))