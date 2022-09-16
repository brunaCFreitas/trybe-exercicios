const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  return frase.replace('x', nome);
}

console.log(substituaX('Bruna'));

// método Tryber da Função 1

const SubistituirX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split('x');
  return `${fraseArray[0]}${nome}${fraseArray[1]}`;
}

console.log(SubistituirX('Dudu'));

// Função 2

const minhasSkill2 = () => {
  const skills = ['HTML', 'CSS', 'JS'];
  return `${substituaX('Bianca')}\nMinhas três habilidades são: \n${skills.join(', ')}`;
};

console.log(minhasSkill2());

// Função 2 método trybe

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;

  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    resultado = `${resultado}
    - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};

console.log(minhasSkills(substituaX('Bebeto')));