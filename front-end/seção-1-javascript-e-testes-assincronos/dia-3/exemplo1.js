const fetch = require('node-fetch');

const consultaCep = async (cep) => {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const request = await fetch(url);
    const requestJson = await request.json();
    console.log(requestJson);
    const { logradouro } = requestJson;
    console.log(logradouro);
    return logradouro;
  } catch(error) {
    return error.mesage;
  }
};

consultaCep('36026460'); // Rua Barão de Aquino