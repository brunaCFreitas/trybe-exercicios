function handleSubmit(event) {
  event.preventDefault();
}

function clearFilds() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput = '';
    userInput.checked = false;
  }
  textArea = '';
}

function enableSubmit() {
  const buttonSubmit = document.getElementById('button-submit');
  const agreement = document.querySelector('#agreement');
  buttonSubmit.disabled = !agreement.checked;
}

window.onload = function () {
  const buttonSubmit = document.getElementById('button-submit');
  buttonSubmit.addEventListener('click', handleSubmit);
  const buttonClear = document.getElementById('button-clear');
  buttonClear.addEventListener('click', clearFilds);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
}