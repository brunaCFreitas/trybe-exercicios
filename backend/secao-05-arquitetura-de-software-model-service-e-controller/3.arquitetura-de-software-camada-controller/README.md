# Dia 3 - Arquitetura de Software - Camada Controller

Hoje vamos continuar nossos estudos da `arquitetura MSC` entrando em detalhes de como funciona a camada `Controller`, a qual será o portão de entrada do mundo externo à nossa aplicação. Dentro dessa camada vamos validar se as requisições contêm os dados necessários para que a camada `Service` realize seu trabalho, chamar o `Service` apropriado para atender a requisição e responde-la de acordo com o resultado que for obtido.

### Você será capaz de:

* Identificar os componentes de software pertencentes a camada `Controller`;
* Desenvolver `middlewares` responsáveis pela validação dos dados de entrada;
* Criar testes de unidade para os componentes da camada `Controller`;
* Construir respostas adequadas às requisições baseado nas resposta da camada `Service`.


## Por que isso é importante?

Você tem estudado sobre `arquitetura de software` nas últimas aulas e visto como funcionam as camadas `Model` e `Service` dentro do modelo arquitetural `MSC`. Hoje nos aprofundaremos na camada `Controller` que tem como responsabilidade receber as requisições de uma aplicação `front-end` ou cliente REST, e.g. `Thunder Client`, realizar as validações sobre os dados enviados na requisição, realizar as chamadas aos componentes da camada `Service` necessários para atender a requisição e, por fim, responder a requisição de forma apropriada.
