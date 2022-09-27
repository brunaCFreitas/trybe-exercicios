// Exercício Nova Pessoa Contratada

const createPerson = (name) => {
  const person = {
    nameFull: name,
    email: `${name.replace(' ', '_').toLowerCase()}@trybe.com` 
  }

  return person;
}


const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(createPerson));