window.onload = function () {
    let select = document.querySelector('select[id= "fundo"]');
    select.addEventListener('change', function () {
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;


        localStorage.setItem('5.4-background-color', selected.value);
    })

    let inputFontSize = document.querySelector('input[name= "font-size"]');
    inputFontSize.addEventListener('change', function () {
        let p = document.querySelector('p');
        p.style.fontSize = inputFontSize.value + 'px';
    })

    let changeColorText = document.getElementById('paragrafo');
    changeColorText.addEventListener('change', function () {
        let colorSelected = changeColorText.selectedOptions[0];
        let p = document.querySelector('p');
        p.style.color = colorSelected.value;
    })

    let salvedBackgound = localStorage.getItem('5.4-background-color');
    document.body.style.backgroundColor = salvedBackgound;
}