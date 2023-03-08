const readline = require('readline-sync');

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

const weigh = readline.questionInt('Weight: ');
const height = readline.questionInt('Height: ');

const bmi = handleBMI(weigh, height);

console.log(`BMI: ${bmi.toFixed(2)}`);
