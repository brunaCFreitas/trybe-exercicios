const { consultaCep } = require('./consultaCep');

test('Verifica se retorna logradouro', async () => {
  expect(await consultaCep('36061220')).toEqual('Rua José Zacarias dos Santos');
});