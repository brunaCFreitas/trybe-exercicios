const soma = require('./soma.js');

describe('Teste os retornos da função soma com os seguintes parâmetros:', () => {
  test('Teste se o retorno de soma(4, 5) é 9', () => {
    expect(soma(4, 5)).toBe(9);
  });

  test('Teste se o retorno de soma(0, 0) é 0', () => {
    expect(soma(0, 0)).toBe(0);
  });

  test('Teste se a função soma lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => soma(4, '5')).toThrowError();
  });

  test('Teste se a mensagem de erro é "parameters must be numbers" quando realiza a chamada soma(4, "5")', () => {
    expect(() => soma(4, '5')).toThrowError('parameters must be numbers')
  });

});