const myFizzBuzz = require('./fizzBuzz.js');

describe('Implemente testes para a função myFizzBuzz: ', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado: fizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado: fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado: buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado: número', () => {
    expect(myFizzBuzz(1)).toBe(1);
  });

  test('Faça uma chamada com um parâmetro que não é um número e certifique se o retorno é o esperado: false', () => {
    expect(myFizzBuzz('1')).toBe(false);
  });
  
});