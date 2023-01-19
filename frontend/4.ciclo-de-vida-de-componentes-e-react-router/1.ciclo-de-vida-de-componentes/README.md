# DIA 1 - CICLO DE VIDA EM REACT 

Neste dia aprendemos sobre o `LifeCycle` em React e as suas funções.

As fases do ciclo de vida de componentes:

- A fase de montagem do componente e o uso da função `componentDidMount` responsável por executar uma ação após o componente ser inserido no **DOM**;

- A utilização da função `shouldComponentUpdate` que é responsável por avaliar se uma atualização do componente deve ou não acontecer naquele momento;

- A fase de **update** do componente, que existe ao realizarmos mudanças no state por exemplo, a função `componentDidUpdate`irá executar uma ação após o componente ser atualizado;

- E por fim, na fase de desmontagem,  chamar a função `componentWillUnmount` para realizar uma ação antes de o componente ser desmontado.
