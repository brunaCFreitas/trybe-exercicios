const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if(!chosenSimpson) {
    throw new Error('id não encontrado');
  }

  return chosenSimpson;
}

async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const filteredSimpsons = simpsons.filter(({ id }) => Number(id) !== 10 && Number(id) !== 6);

  await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
}

async function main() {
  // await readAll();
  // const simpson = await getSimpsonById(1);
  // console.log(simpson);
  filterSimpsons();
}

main();