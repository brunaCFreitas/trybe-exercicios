const {
  encode,
  decode
} = require('./encode.js');

describe('Testes da função encode', () => {
  test('Teste se a função encode é uma função', () => {
    expect(encode).toBeInstanceOf(Function);
  });

  test('Teste se a função encode ao receber as vogais ["a", "e", "i", "o", "u"] as converte para [1, 2, 3, 4 , 5].', () => {
    expect(encode('ana')).toEqual('1n1');
    expect(encode('ele')).toEqual('2l2');
    expect(encode('isis')).toEqual('3s3s');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('unu')).toEqual('5n5');
  });

  test('Teste se outras letras não são convertidas em números', () => {
    expect(encode('Bruna')).toEqual('Br5n1');
  });
});

describe('Testes da função decode', () => {
  test('Teste se a função decode é uma função', () => {
    expect(decode).toBeInstanceOf(Function);
  });

  test('Teste se a função decode ao receber [1, 2, 3, 4, 5] estes são convertidos para as vogais a, e, i, o e u, respectivamente', () => {
    expect(decode('1n1')).toEqual('ana');
    expect(decode('2l2')).toEqual('ele');
    expect(decode('3s3s')).toEqual('isis');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('5n5')).toEqual('unu');
  });


  test('Teste se outros números não são convertidos em letras', () => {
    expect(decode('Br5n1')).toEqual('Bruna');
  });

  test('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });

});
