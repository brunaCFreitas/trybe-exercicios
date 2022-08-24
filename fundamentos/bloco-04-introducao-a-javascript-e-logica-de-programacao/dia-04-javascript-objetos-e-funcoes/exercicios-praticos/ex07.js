// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.


function palavraTerminaEm(palavra, final) {
    return palavra.endsWith(final);
}


console.log(palavraTerminaEm('trybe', 'be'));
console.log(palavraTerminaEm('bruna', 'br'));