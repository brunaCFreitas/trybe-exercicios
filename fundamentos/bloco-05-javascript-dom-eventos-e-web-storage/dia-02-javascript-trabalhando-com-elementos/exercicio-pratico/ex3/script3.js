// 1. Crie um irmão para elementoOndeVoceEsta

// Recupere o elemento com id pai
const pai = document.getElementById('pai');
// Crie um novo elemento
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
// Adicione o elemento criado como filho do elemento com id `pai`
pai.appendChild(irmaoElementoOndeVoceEsta);

// 2. Crie um filho para elementoOndeVoceEsta

// Recupere o elemento com o id elementoOndeVoceEsta
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// Crie um novo elemento
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
// Adicione o elemento criado como filho do elementoOndeVoceEsta
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// 3. Crie um filho para primeiroFilhoDoFilho

// Recuperee o elemento com o id primeiroFilhoDoFilho
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// Crie um novo elemento
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
// Adicione o elemento criado como filho do primeiroFilhoDoFilho
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// 4. A partir desse filho criado, acesse terceiroFilho
const terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement // primeiroFilhoDoFilho
.parentElement // elementoOndeVoceEsta
.nextElementSibling; // terceiroFilho
console.log(terceiroFilho);