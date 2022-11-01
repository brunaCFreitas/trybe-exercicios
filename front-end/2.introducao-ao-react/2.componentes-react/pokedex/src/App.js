import React from 'react';
import './App.css';

import Pokedex from './components/Pokedex';
import arrayOfPokemon from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Exercicio de Pokedex</h1>
        <Pokedex pokemonList={ arrayOfPokemon } />
      </div>
    );
  }
}

export default App;
