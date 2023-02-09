# SESSÃO 9 - Context API e React Hooks

- Nesta seção vamos manipular os **estados** utilizando as `Hooks`e o `Context API` que são recursos do próprio `REACT`.

## Nesta seção aprendemos:

- As principais `Hooks`: *useState()* e *useEffect()*.
- Context API
- Custom Hooks

### Contextualizando: 

Existem duas formas de se criar um componente React:

* Definindo uma *classe* que estende a classe React.Component.
* Definindo uma *função* que retorna o que é renderizado.

- Mas, qual é a **diferença** entre essas duas formas?

A *classe* te dá mais ferramentas, entretanto, é um pouco mais complicada de se criar.

Quando o `React` foi lançado, os componentes funcionais eram muito *limitados*. Não era possível utilizar **estados** nesses componentes, nem realizar operações nas diferentes etapas do **ciclo de vida**. A única forma de fazer isso era utilizando *componentes de classe*, assim poderíamos, por exemplo, definir estados, acessar contextos ou usar métodos de ciclo de vida de componente.

Assim sendo, por vezes, seria ótimo se pudéssemos fazer tudo isso de forma mais simples, com um *componente funcional*. Isso foi possível a partir da **versão 16.8**, com o lançamento dos `Hooks no React`.
