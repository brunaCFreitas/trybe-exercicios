# SESSÃO 8 - Projeto Jogo de Trivia

## Projeto em grupo

* O objetivo é colocar em prática tudo o que você aprendeu sobre `React e Redux` ⚛️ até aqui, enquanto pratica a organização de um projeto em equipe com a metodologia agile `Kanban`.

### O que deverá ser desenvolvido?

Você deverá desenvolver um jogo de perguntas e respostas baseado no jogo Trivia, parecido um show do milhão americano, utilizando `React e Redux`.

O app começa com uma tela na qual a pessoa que joga coloca seu **nome** e seu **e-mail**. O e-mail será usado para buscar a foto associada no site *Gravatar*, se houver.

Logo após, ela é redirecionada para o jogo em que deve escolher uma das respostas disponíveis para cada uma das perguntas. A resposta deve ser *marcada* antes de o contador de tempo chegar a **zero**; caso contrário, a resposta deve ser considerada como *errada*.

Cada acerto dá pontos que deverão ser computados num **placar**, no *header* da aplicação, à pessoa que joga. Após **5 perguntas respondidas**, a pessoa que joga é redirecionada para uma tela de *score*, em que o texto mostrado vai depender do número de acertos. No fim de cada jogo, a pessoa que joga pode acessar o *ranking* com as melhores pontuações.

A pessoa que joga pode *configurar* algumas opções para o jogo em uma tela de configurações acessível a partir do header do app.

