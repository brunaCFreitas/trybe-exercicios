/*
  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByTagName()
 */

  // 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
  function changeText() {
    const paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerText = 'Desejo ser uma desenvolvedora foda!!';
  }
  changeText();

  // 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
  function changeColorYellow() {
    const squareYellow = document.getElementsByClassName('main-content')[0];
    squareYellow.style.backgroundColor = 'rgb(76, 164, 109)';
  }
  changeColorYellow();

  // 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
  function changeColorRed() {
    const squareRed = document.getElementsByClassName('center-content')[0];
    squareRed.style.backgroundColor = 'white';
  }
  changeColorRed();

  // 4. Crie e execute uma função que corrija o texto da tag <h1>.
  function correctTitle() {
    const title = document.getElementsByTagName('h1')[0];
    title.innerText = 'Exercício 5.1 - JavaScript';
  }
  correctTitle();

  // 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
  function paragraphToUpperCase() {
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
  }
  paragraphToUpperCase();

  // 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
  function showParagraphs() {
    let paragraphs = document.getElementsByName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index]);
    }
  }
  showParagraphs();
