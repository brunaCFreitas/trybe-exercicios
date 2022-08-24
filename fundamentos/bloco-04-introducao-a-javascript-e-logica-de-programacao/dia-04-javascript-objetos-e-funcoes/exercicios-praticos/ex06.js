// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N

function somaNumeros(n) {
    let soma = 0;
    for(let indice = 0; indice <= n; indice += 1) {
        soma += indice;
    }
    return soma;
}

console.log(somaNumeros(5));