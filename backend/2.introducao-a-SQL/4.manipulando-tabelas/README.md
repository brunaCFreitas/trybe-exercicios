# DIA 4 - MANIPULANDO TABELAS

Neste dia aprendemos a realizar inserções, alterações e exclusões em uma tabela.

Comandos:

**INSERT, UPDATE e DELETE.**

Todos os conceitos apresentados para se operar as informações em um banco de dados podem ser resumidos pelo conceito de [CRUD](https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD).

* **Adicionar** novas informações ao banco de dados, utilizamos o conceito **C** REATE com o comando:
  `INSERT INTO banco.tabela (coluna1, coluna2) VALUES (‘valor_A’, ‘valor_B’);`
* **Obter** as informações armazenadas no bando de dados, utilizamos o conceito **R** EAD, com o comando:
  `SELECT colunaA, colunaB FROM banco.tabela;`
* **Atualizar** informações existentes no banco de dados, utilizamos o conceito **U** PDATE com o comando:
  `UPDATE banco.tabela SET coluna1='valor' WHERE alguma_condicao;`
* **Remover** informações existentes no banco de dados, utilizamos o conceito **D** ELETE com o comando:
  `DELETE FROM banco.tabela WHERE alguma_condicao;`
