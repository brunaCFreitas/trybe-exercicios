# DIA 2 - RTL - MOCKS E INPUTS

As *Mock functions* são ferramentas que nos permitem **simular** o comportamento de funções reais.

* **Imagine o seguinte cenário:** em um teste, você tem funções com retornos variáveis, como, por exemplo, requisições para APIs, além de outras funções de retorno aleatório. Não há como testar se de fato elas, ou a lógica que depende delas, estão funcionando. Se pensarmos em uma requisição para uma API, ela pode estar fora do ar ou, a depender do retorno, o teste, às vezes, passará, e, às vezes, não.

Para contornar esse problema, podemos *simular* esses comportamentos no contexto do teste. No `Jest` e na `RTL`, as *Mock functions* simulam o comportamento de uma função real apenas no escopo do teste e nos dão controle sobre qual retorno essa função envia, quantas vezes ela foi chamada, entre outras coisas.

Conceitos estudados:

* Utilização de *mock functions* para simular funções e seus retornos;
* Criação mocks de APIs utilizando *fetch*;
* Teste de inputs.