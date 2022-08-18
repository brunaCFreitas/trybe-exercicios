/*
 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
 Um ângulo será considerado inválido se não tiver um valor positivo.
 */

 let angulo1 = 35, angulo2 = 55, angulo3 = 90;
 console.log(angulo1, angulo2, angulo3);

 let soma = angulo1 + angulo2 + angulo3;
 let verificaAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

 if (verificaAngulosPositivos) {
    if (soma === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
 } else {
    console.log("Erro: ângulo informado invalido");
 }