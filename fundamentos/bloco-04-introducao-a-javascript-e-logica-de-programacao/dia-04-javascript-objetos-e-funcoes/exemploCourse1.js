// For in

// Em Objeto

let pizzas = {
sabor: 'Palmito',
preco: 39.90,
bordaCatupiry: true
};

for (let key in pizzas) {
console.log(key); // sabor preco bordaCatupiry - exibe as chaves
console.log(pizzas); // objeto todo x o numero de keys (3x)
console.log(pizzas[key]); // Palimito 39.90 true - exibe os valores
}

// Em Array

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key); // 0 1 2
    console.log(pizzasDoces); // array todo 3 x
    console.log(pizzasDoces[key]); // chocolate, banana, morango
    console.log(key, pizzasDoces[key]); // 0 chocolate, 1 banana, 2 morango
}