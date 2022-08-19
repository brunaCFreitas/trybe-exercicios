var numero = 7;

for(let i = 1; i <= 9; i++){
    console.log('');
    console.log(numero * i);
}

var listaDeNomes = ['Joana', 'Maria' ,'Lucas'];

for (let indice = 0; indice < listaDeNomes.length; indice++) {
    let mensagem = `Boas vindas, ${listaDeNomes[indice]}!`;
    console.log(mensagem);
}

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}