const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// devolve o valor

for (const property in coolestTvShow) {
  console.log(coolestTvShow[property]); 
}

// devolve a chave

for (const property in coolestTvShow) {
  console.log(property);  
}

// Usando o Object.values

console.log(Object.values(coolestTvShow));