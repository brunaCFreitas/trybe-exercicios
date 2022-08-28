// 1. Acesse o elementoOndeVoceEsta
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2.  Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

// 4. Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir do elementoOndeVoceEsta
const textElement = elementoOndeVoceEsta.nextSibling;

// 7. Agora acesse o terceiroFilho a partir do elementoOndeVoceEsta
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8. agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;