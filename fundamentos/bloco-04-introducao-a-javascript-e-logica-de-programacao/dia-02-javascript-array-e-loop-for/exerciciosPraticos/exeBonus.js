let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 1; index < numbers.length; index += 1) {
    for(let index2 = 0; index2 < index; index2 += 1) {
        if(numbers[index] < numbers[index2]) {
            let position = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = position;
        }
    }
}
console.log(numbers);

// 10. Ordene o array numbers em ordem decrescente e imprima seus valores;

for (index = 1; index < numbers.length; index += 1) {
    for(index2 = 0; index2 < index; index2 +=1 ) {
        if(numbers[index] > numbers[index2]) {
            position = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = position;
        }
    }
}

console.log(numbers);

// 11. Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

let numeros2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let i = 0; i < numeros2.length; i += 1) {
    if(i + 1 < numeros2.length) {
        novoArray.push(numeros2[i] * numeros2[i + 1]);
    } else {
        novoArray.push(numeros2[i] * 2);
    
    }   
}

console.log(novoArray);