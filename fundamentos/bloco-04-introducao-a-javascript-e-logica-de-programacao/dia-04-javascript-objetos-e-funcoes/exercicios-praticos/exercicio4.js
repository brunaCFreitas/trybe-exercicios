/*
Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
*/

function soma(a, b) {
    return a + b;
}

function subtracao (a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function maiorNumero(a, b) {
    if(a > b) {
        return a;
    }

    return b;
}

function maiorDeTres(a, b, c) {
    if(a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    }
    
    return c;
}

function statusNumero(a) {
    if (a > 0) {
        return 'positive';
    } else if (a < 0) {
        return 'negative';
    }

    return 'zero';
}

function eTriangulo(a, b, c) {
    if(a < 0 || b < 0 || c < 0) {
        return 'Valor informado inválido'
    }

    if (a + b + c === 180) {
        return true;
    }

    return false;
}

console.log(soma(2, 5));
console.log(subtracao(5, 2));
console.log(multiplicacao(2, 5));
console.log(divisao(6, 3));
console.log(modulo(4, 2));
console.log(maiorNumero(9, 3));
console.log(maiorDeTres(15, 6, 80));
console.log(statusNumero(1));
console.log(statusNumero(-2));
console.log(statusNumero(0));
console.log(eTriangulo(90, 45, 45));
console.log(eTriangulo(90, 45, -45));
