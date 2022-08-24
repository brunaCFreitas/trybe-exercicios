let food = ['hamburguer', 'bife', 'acaraje'];

// Exemplo de for / in

for(let position in food) {
    console.log(position);
};
// Resultado: 0 1 2 (indices do array food)

// Exemplo de for / of

for (let value of food) {
    console.log(value);
};

//Resultado: hamburguer, bife, acaraje