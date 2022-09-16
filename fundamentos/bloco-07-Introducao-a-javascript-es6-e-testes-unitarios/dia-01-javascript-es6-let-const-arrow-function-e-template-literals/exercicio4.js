const frase = 'Antônio foi ao banheiro e não sabemos o que aconteceu';

const palavraMaior = (frase) => {
  const palavras = frase.split(' ');
  let maiorPalavra = palavras.shift();
  for (const palavra of palavras) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }
  return maiorPalavra;
}

console.log(`A maior palavra é ${palavraMaior(frase)}`);


// Bônus

const maiorPalavra = (frase) => frase
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .shift();
  

console.log(`A maior palavra bônus é ${maiorPalavra(frase)}`);
