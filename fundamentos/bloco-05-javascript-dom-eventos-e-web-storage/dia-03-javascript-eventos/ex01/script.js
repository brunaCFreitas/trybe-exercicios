function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* Exercício 1 - 
Crie um calendário dinamicamente.
O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
A tag <ul> deve conter o id 'days';
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
*/

// Crie uma lista com os dias
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Crie a função a ser executada para popular nosso calendário.
function createDaysOfTheMonth() {
  // Armazene o elemento da id days em uma variável, para isso, será utilizado o querySelector.
  let getDaysList = document.querySelector('#days');

  //Crie um loop que popule a ul com nossa lista.
  for (let index = 0; index < decemberDaysList.length; index += 1) {

    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day; // Adicione o valor do dia atual para cada <li> criado.

    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth();

/* Exercício 2 - 
Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
*/
// Crie a função com um parâmetro.
function createHolidayButton(buttonName) {
  // Crie uma variável que armazene o seletor do container do botão.
  let buttonContainer = document.querySelector('.buttons-container');
  // Crie um botão e armazene o valor da id em uma variável.
  let newButton = document.createElement('button');
  // Faça com que o nome do botão seja o mesmo passado por parâmetro à função e o id do botão seja o mesmo que o id armazenado na variável.
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  //  Insira o botão no container selecionado e execute a função usando 'Feriados' como parâmetro.
  buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

/* Exercicio 3 - 
Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
*/

// Crie a função que será responsável por: selecionar todos os elementos com a classe 'holiday', selecionar o botão 'feriados' e adicionar variaveis para armazenar cores
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday'); // selecione o botão "Feriados";
  let getHolidays = document.querySelectorAll('.holiday')// Seleciona todos os feriados como um array de elementos;
  let backgroundColor = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
  let setNewColor = 'white'; // armazena a nova cor que será utilizada ao pressionar o botão.

  //  Adicione um escutador de eventos ao botão, esse escutador deve aguardar um clique.
  getHolidayButton.addEventListener('click', function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) { //  Percorra o array de feriados e adicione as condições para troca de cor.
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
displayHolidays();

/* Exercício 4 - 
Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
Adicione a esse botão o ID "btn-friday";
Adicione esse botão como filho/filha da tag <div> com classe "buttons-container"
*/
// Crie a função e adicione variáveis para armazenar: o 'container' de botões, a criação de um botão e o id do botão.
function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container'); // armazena o container de botões
  let newButton = document.createElement('button'); // cria um botão
  let newButtonID = 'btn-friday'; // armazna o id do botão

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
}
createFridayButton('Sexta-feira');

/* Exercício 5 - 
Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
*/
// Crie a função e dentro dela as variáveis para armazenar: o botão "Sexta-feira", um array de elementos com a classe friday, uma string que será exibida nos dias que são sextas-feiras.
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  // Adicione um escutador de eventos ao botão, esse escutador deve aguardar um clique.
  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
        //caso o texto não tenha sido substituído, ao clicar no botão ele será substituido pelo novo texto;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
        //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
      }
    }
  });
}
let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

/* Exercício 6 - 
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/
// Crie duas funções, uma para cada ação do mouse
// Crie uma variável que selecione o id days para ambas as funções
function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {  // Adicione o addEventListener à variável days,
    event.target.style.fontSize = '30px'; // Ele pega o evento alvo e altera o estilo de fontSize para 30px
    event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px'; // Ele pega o evento alvo e altera o estilo de fontSize para 20px
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
}
dayMouseOver();
dayMouseOut();

/* Exercício 7 - 
Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
*/
// Crie a função e dentro dela crie duas variáveis: uma responsável por armazenar o elemento com classe igual a `my-tasks` e * outra por criar um elemento do tipo `span`.
function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks'); // armazena o elemento com classe igual a 'my-tasks
  let taskName = document.createElement('span');  // armazena a criação de um elemento do tipo 'span'

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName); // Anexando a task como filha de taskContainer
}
newTaskSpan('Projeto');

/* Exercício 8 -
Implemente uma função que adicione uma legenda com cor para a tarefa.
* Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
*/
//  Crie a função que recebe uma cor por parâmetro.
function newTaskDiv(color) {
  // Recupere os elementos que tenham a classe my-tasks.
  let tasksContainer = document.querySelector('.my-tasks'); 
  let newTask = document.createElement('div'); // Crie uma div.

  newTask.className = 'task'; // Adicionando className task à newTask
  newTask.style.backgroundColor = color; // Adicionando a cor recebida por parametro como backgroundCol
  tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
}
newTaskDiv('green');

/* Exercício 9 -
Implemente uma função que selecione uma tarefa.
Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
*/

// Crie uma função e dentro dela crie variáveis para armazenar: os elementos com a classe "task selected" e o elemento com o id "tasks".
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event) { //  Insira um evento de click na variável myTasks
    if (selectedTask.length === 0) {
      event.target.className = 'task selected'; // Altere a classe do alvo
    } else {
      event.target.className = 'task';
    }
  });
}
setTaskClass();

/* Exercício 10 - 
Implemente uma função que atribua a cor da tarefa ao dia do calendário.
Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
*/
// Crie a função e dentro dela salve os seletores em variáveis distintas:
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected'); // Retorna um array com todos os elementos com a classe "task selected"
  let days = document.querySelector('#days'); // Seleciona a primeira ul com id "days"
  let taskDiv = document.querySelector('.task'); // Seleciona o primeiro elemento com a classe "task"
  let taskColor = taskDiv.style.backgroundColor; // Salva o Background Color da classe task na variável "taskColor"
   
  // Atribua um evento à variável days que armazena a <ul>, usando addEventListener
  days.addEventListener('click', function(event){  // Para pegar o evento alvo, precisamos declarar o evento como parâmetro da função
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}
setDayColor();

