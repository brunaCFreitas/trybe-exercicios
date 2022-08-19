let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); // 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask); // Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask); // Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no fim da lista
console.log(tasksList); // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift('Acordar'); //Adiciona mais uma tarefa no inicio da lista
console.log(tasksList); // ['Acordar', 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.pop();  // remove a última tarefa
console.log(tasksList); // [ 'Acordar', 'Tomar café', 'Reunião', 'Brincar com o cachorro' ]

tasksList.shift(); // Remove o primeiro item da lista
console.log(tasksList); //[ 'Tomar café', 'Reunião', 'Brincar com o cachorro' ]

let indexOfTask = tasksList.indexOf('Reunião'); // Mostra qual o index da palavra no array
console.log(indexOfTask) // 1