const soma = require('./soma');

test('soma dois valores', () => {
  expect(soma(3, 6)).toBe(9);
});

