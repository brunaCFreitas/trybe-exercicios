/*
3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
"Player 1 won" ou "A Ties" ou "Player 2 won". 
*/

let jogador1 = ['Pedra', 'Papel', 'Tesoura'];
let jogador2 = ['Tesoura', 'Pedra', 'Papel'];

let pontosJogador1 = 0;
let pontosJogador2 = 0;
let empates = 0;


for(let index = 0; index < jogador1.length; index += 1) {
    for(let index2 = 0; index2 < jogador2.length; index2 += 1) {
        if (jogador1[index] === 'Pedra' && jogador2[index2] === 'Papel') {
            pontosJogador2 += 1;
        } else if(jogador1[index] === 'Pedra' && jogador2[index2] === 'Tesoura') {
            pontosJogador1 += 1;
        } else if (jogador1[index] === 'Pedra' && jogador2[index2] === 'Pedra') {
            empates += 1;
        }
    }
}

console.log(pontosJogador1, pontosJogador2, empates);