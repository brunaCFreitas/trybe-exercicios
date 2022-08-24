// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];



function bigName(names) {
    let bigName = names[0];
    for(const name of names) {
        if(bigName.length < name.length) {
            bigName = name;
        }
    }
    return bigName;
}

console.log(bigName(names));