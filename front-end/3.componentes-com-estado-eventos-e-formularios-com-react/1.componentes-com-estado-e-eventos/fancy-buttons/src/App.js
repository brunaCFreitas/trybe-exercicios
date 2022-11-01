import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.imprime1 = this.imprime1.bind(this)
    this.imprime2 = this.imprime2.bind(this)
    this.imprime3 = this.imprime3.bind(this)

    this.state = {
      clickBtn1: 0,
      clickBtn2: 0,
      clickBtn3: 0,
    };
  }

  imprime1() {
    this.setState((estadoAnterior) => ({
      clickBtn1: estadoAnterior.clickBtn1 + 1,
    }))
  }

  imprime2() {
    this.setState((estadoAnterior) => ({
      clickBtn2: estadoAnterior.clickBtn2 + 1,
    }))
  }

  imprime3() {
    this.setState((estadoAnterior) => ({
      clickBtn3: estadoAnterior.clickBtn3 + 1,
    }))
  }

  pegaCorBotao(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  // Ao usar o arrow function nao será necessário usar o constructor
  // imprime1 = () => console.log('Clicou primeiro!');
  // imprime2 = () => console.log('Clicou segundo!');
  // imprime3 = () => console.log('Clicou terceiro!');

  render() {
    const { clickBtn1, clickBtn2, clickBtn3 } = this.state;
    return (
      <div>
        <button
        type='button'
        onClick={ this.imprime1 }
        style={ { backgroundColor: this.pegaCorBotao(clickBtn1) } }
        >
          {`Cliques botão 1: ${clickBtn1}`}
        </button>

        <button
        type='button'
        onClick={ this.imprime2 }
        style={ { backgroundColor: this.pegaCorBotao(clickBtn2) }}
        >
          {`Cliques botão 2: ${clickBtn2}`}
        </button>

        <button
        type='button'
        onClick={ this.imprime3 }
        style={ { backgroundColor: this.pegaCorBotao(clickBtn3) }}
        >
          {`Cliques botão 1: ${clickBtn3}`}
        </button>
      </div>
    );
  }
}

export default App;
