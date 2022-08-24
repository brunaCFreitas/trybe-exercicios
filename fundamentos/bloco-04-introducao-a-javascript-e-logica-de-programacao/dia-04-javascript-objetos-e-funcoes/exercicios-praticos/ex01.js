// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(palavra) {
    for( let indice in palavra) {
        if(palavra[indice] != palavra[(palavra.length - 1) - indice]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('bruna'));