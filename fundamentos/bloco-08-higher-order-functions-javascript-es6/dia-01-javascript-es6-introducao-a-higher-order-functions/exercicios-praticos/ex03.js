// Exercício - Corretor automático de exame

// Arrays com as repostas corretas e o gabarito

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

/// Função que verifica as repostas e retorna as pontuações

const compareAnswers = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  }
  if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, callback) => {
  let counter = 0;
 for( let i = 0; i < rightAnswers.length; i += 1) {
  const pointReturn = callback(rightAnswers[i], studentAnswers[i]);
  counter += pointReturn;
 }
 return `Resultado final: ${counter} pontos`
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));