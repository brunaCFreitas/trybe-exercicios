const fetch = require('node-fetch'); // biblioteca q possibilita o fetch no node.

// const getRandomAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const request = fetch(url) // o retorno é uma promise
//     .then((response) => response.json()) // transforma a resposta em um obj JS
//     .then(({ slip: { id, advice } }) => console.log(advice)) // desestrutura o obj recebido pegando apenas a propriedade desejada
//     .catch((error) => console.log('Ops, algo deu errado!', error.errno)); // caso ocorra um erro ele trata mostrando a msg do mesmo.
// };

// getRandomAdvice();

//utilizando o async e await

const getRandomAdvice = async () => {
  try {
    const url = 'https://api.adviceslip.com/advice';
    const request = await fetch(url);
    const json = await request.json();
    const { slip } = json;
    const { id, advice } = slip;
    return advice;
  } catch(error) {
    console.log('Ops, algo deu errado!');
  }
};

getRandomAdvice();