# DIA 1 - CICLO DE VIDA EM REACT 

Neste dia aprendemos sobre o `LifeCycle` em React e as suas funções.

As fases do ciclo de vida de componentes:

- A fase de montagem do componente e o uso da função `componentDidMount` responsável por executar uma ação após o componente ser inserido no **DOM**;

- A utilização da função `shouldComponentUpdate` que é responsável por avaliar se uma atualização do componente deve ou não acontecer naquele momento;

- A fase de **update** do componente, que existe ao realizarmos mudanças no state por exemplo, a função `componentDidUpdate`irá executar uma ação após o componente ser atualizado;

- E por fim, na fase de desmontagem,  chamar a função `componentWillUnmount` para realizar uma ação antes de o componente ser desmontado.

### Por que isso é importante?

Imagine que seu componente nem apareceu na tela da pessoa que utiliza sua página e que você já pediu para atualizar algum elemento gráfico contido no componente. Esse elemento gráfico que você tentou acessar ainda não existe, então esse pedido foi um desperdício de tempo e recursos do computador, concorda? Mas qual o problema disso? Se você enquanto pessoa que programa o software não se preocupar com o momento em que cada recurso deve ser utilizado (recursos são finitos), provavelmente vai estar utilizando mal esses recursos.

As funções de ciclo de vida do componente vêm para nos dar o controle necessário para utilizar cada recurso no momento certo e para garantir que a assincronicidade do React não prejudique a lógica do que você está tentando executar. Seja para a chamada de uma API, seja para atualização de algum elemento gráfico, é fundamental respeitar o momento em que seu componente se encontra.