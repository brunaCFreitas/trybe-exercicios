# Checklist de configuração do Redux

* Para conectarmos o `Redux` ao `React` precisamos fazer algumas configurações, definidas pelo próprio Redux. Preparamos um checklist abaixo que poderá servir como um guia para quando você for implementar uma aplicação que utilize o Redux.

## Antes de começar 

* [ ] - pensar como será o formato do seu estado global.
* [ ] - pensar quais actions serão necessárias na sua aplicação.

## Instalação

* [ ] - npx create-react-app my-app-redux;
* [ ] - npm install –save redux react-redux;
* [ ] - npm install –save @redux-devtools/extension

## Criar dentro do diretório `src`:

* [ ] - diretório redux

## Criar dentro do diretório `redux`:

* [ ] - diretório actions;
* [ ] - diretório reducers;
* [ ] - arquivo index.js - que poderá ter o nome de store.js também.
 
## Criar dentro do diretório `actions`:

* [ ] - arquivo index.js

## Criar dentro do arquivo `redux/index.js`:

* [ ] - importar o createStore
* [ ] - configurar o Redux DevTools
* [ ] - importar o rootReducer
* [ ] - criar e exportar a store

## Criar dentro do arquivo `redux/reducers/index.js`:

* [ ] - estado inicial
* [ ] - criar função reducer com switch retornando apenas a opção default
* [ ] - criar rootReducer usando o combineReducers
* [ ] - exportar rootReducer

## No arquivo `./src/index.js`:

* [ ] - importar a store
* [ ] - importar o Provider, para fornecer os estados a todos os componentes encapsulados pelo <App />

## No arquivo `redux/actions/index.js`:

* [ ] - criar e exportar os actionTypes
* [ ] - criar e export os actions creators necessários

## Nos reducers:

* [ ] - criar os casos para cada action criada, retornando o devido estado atualizado

## Nos componentes que irão ler o estado:

* [ ] - criar a função mapStateToProps
* [ ] - exportar usando o connect

## Nos componentes que irão modificar o estado:

* [ ] - acessar a função dispatch diretamente das props do componente
* [ ] - exportar usando o connect
