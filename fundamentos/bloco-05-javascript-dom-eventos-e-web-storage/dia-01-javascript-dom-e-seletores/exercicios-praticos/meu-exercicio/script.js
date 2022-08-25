const titulo = document.querySelector('#header-container');
titulo.style.background = '#52b16a';

const urgente = document.querySelectorAll(".emergency-tasks h3" );

for(let i = 0; i < urgente.length; i += 1) {
    urgente[i].style.background = "#aa66f4";
}

const naoUrgente = document.querySelectorAll('.no-emergency-tasks h3');

for(let i = 0; i < naoUrgente.length; i += 1) {
    naoUrgente[i].style.background = '#000000';
}

const div1 = document.querySelectorAll('.emergency-tasks div');

for(let i = 0; i < div1.length; i+= 1) {
    div1[i].style.background = '#f59e83';
}

const div2 = document.querySelectorAll('.no-emergency-tasks div');

for(let i = 0; i < div1.length; i+= 1) {
    div2[i].style.background = '#f9db5e';
}

const rodape = document.querySelector('#footer-container');
rodape.style.background = "#113633";