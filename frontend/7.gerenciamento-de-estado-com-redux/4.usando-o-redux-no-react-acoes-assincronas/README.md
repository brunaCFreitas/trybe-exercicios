# DIA 4 - USANDO O REDUX NO REACT - AÇÕES ASSÍNCRONAS

Neste dia, focamos no fluxo de dados de uma aplicação `Redux`. O Redux suporta somente o fluxo **síncrono** de dados, ou seja, apenas informações e dados já prontos na nossa aplicação.

*Uma `action` é um objeto JavaScript que descreve algum evento que **já aconteceu**, esse objeto é enviado para o `reducer` para que o estado global seja atualizado.*

Mas, e se fosse necessário uma `action` *assíncrona*, a qual precisa fazer uma requisição para uma **API**, de forma que os devidos dados necessários estejam presentes para, somente então, alterar o estado global?

A função responsável por alterar o estado global é o `reducer`, que é uma função síncrona e pura. Isso significa que a função reducer não admite assincronicidade (por promises, por exemplo) nem efeitos colaterais.

Para que a gente consiga assincronicidade no Redux, podemos criar actions assíncronas (também chamadas de thunks). E isso é possível através da biblioteca `redux-thunk`.

O que foi abordado:

* Criar *actions* assíncronas na sua aplicação com Redux.
* Utilização da biblioteca *redux-thunk*.
* Entender o que é um *middleware* no `Redux`.