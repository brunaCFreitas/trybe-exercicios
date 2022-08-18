/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let pecaXadrez = "cavalo";

switch (pecaXadrez.toLocaleLowerCase()) {
    case 'rei':
        console.log(`Rei - Pode movimentar uma casa para qualquer direção`);
        break;
    case 'bispo':
        console.log(`Bisco - Pode movimentar para a diagonal`);
        break
    case 'rainha':
        console.log(`Rainha - Pode fazer movimentos para a diagonal, horizontal e vertical`);
        break;
    case 'cavalo':
        console.log(`Cavalo - Pode movimentar em L e pular sobre as peças`);
        break;
    case 'torre':
        console.log(`Torre - Pode fazer movimentos horizontais e verticais`);
        break;
    case 'peão':
        console.log(`Peão - Pode se movimentar apenas uma casa para fernte, no primeiro movimento podem ser duas casas`);
        break;
    default:
        console.log(`Erro, pela inválida!`);
        break;
};

