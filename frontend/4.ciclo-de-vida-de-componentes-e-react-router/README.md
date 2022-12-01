# SESSÃO 4 - CICLO DE VIDA DE COMPONENTES E REACT ROUTER 

Nesta sessão aprendemos os conceitos de `Lifecycle` ou ciclo de vida de um componente e as funções responsáveis pelas ações em cada fase deste ciclo.

Aprendemos também sobre `React Routes`.

As fases do ciclo de vida de componentes:

- A fase de montagem do componente e o uso da função `componentDidMount` responsável por executar uma ação após o componente ser inserido no **DOM**;

- A utilização da função `shouldComponentUpdate` que é responsável por avaliar se uma atualização do componente deve ou não acontecer naquele momento;

- A fase de **update** do componente, que existe ao realizarmos mudanças no state por exemplo, a função `componentDidUpdate`irá executar uma ação após o componente ser atualizado;

- E por fim, na fase de desmontagem,  chamar a função `componentWillUnmount` para realizar uma ação antes de o componente ser desmontado.
