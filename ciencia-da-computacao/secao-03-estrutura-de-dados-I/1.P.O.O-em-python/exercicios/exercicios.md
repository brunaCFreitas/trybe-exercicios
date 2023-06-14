## Exercício 1: Implemente a classe com base no diagrama

![Diagrama de classes da TV](https://content-assets.betrybe.com/prod/a88d931d-f826-492b-a580-b26a6aae69f2-Diagrama%20de%20classes%20da%20TV.png)


Implemente uma classe que contenha os seguintes atributos e métodos:

Atributos:

* `volume` - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
* `canal` - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
* `tamanho` - será inicializado com o valor do parâmetro;
* `ligada` - será inicializado com o valor de `False`, pois está inicialmente desligado.

Todos os atributos devem ser privados.

Métodos:

* `aumentar_volume` - aumenta o volume de 1 em 1 até o máximo de 99;
* `diminuir_volume` - diminui o volume de 1 em 1 até o mínimo de 0;
* `modificar_canal` - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção (`ValueError`) caso o valor esteja fora dos limites;
* `ligar_desligar` - alterna o estado da TV entre ligado e desligado (`True`/`False`).


## Exercício 2: Implemente uma classe `Estatistica`

Implemente uma classe chamada `Estatistica`. Ela deve possuir um atributo `numbers` (uma lista de números) três métodos: um que calcula a média, um que calcula a mediana mediana e outro que calcula a moda de uma lista de números.

🐦 Dica: Você pode utilizar `sorted` para te auxiliar no método `mediana`. 🐦 Dica: Você pode utilizar `collections.Counter` para te auxiliar no método da `moda`.


![Diagrama de classes da Estatística](https://content-assets.betrybe.com/prod/9f3d4b0b-258e-435e-a9cf-65e7491b2d39-Diagrama%20de%20classes%20da%20Estat%C3%ADstica.png)


## Exercício 3: Implemente as classes das figuras geométricas

Com base no diagrama abaixo, implemente as classes das figuras geométricas.

![Diagrama de classes das figuras geométricas](https://content-assets.betrybe.com/prod/a1d519fc-ee3d-4db1-b2f3-f127eac1905b-Diagrama%20de%20classes%20das%20figuras%20geom%C3%A9tricas.png)


Você deverá implementar as seguintes classes:

* `FiguraGeometrica`, uma classe abstrata com os seguintes métodos abstratos
  * `area`
  * `perimetro`
* `Quadrado`, que herda de `FiguraGeometrica` e adiciona o atributo `lado`
* `Retangulo`, que herda de `FiguraGeometrica` e adiciona os atributos `base` e `altura`
* `Circulo`, que herda de `FiguraGeometrica` e adiciona o atributo `raio`
