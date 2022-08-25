// 1. Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos.
function changeText() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "Ser uma desenvolvedora front-end";
}
changeText();

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeSquareToGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = "rgb(76,164,109)";
}
changeSquareToGreen();

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function changeSquareToWhite() {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = "white";
}
changeSquareToWhite();

// 4. Crie e execute uma função que corrija o texto da tag <h1>.
function correctTitle() {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = "Exercício 5.1 - JavaScript";
}
correctTitle();

// 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase();

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs();