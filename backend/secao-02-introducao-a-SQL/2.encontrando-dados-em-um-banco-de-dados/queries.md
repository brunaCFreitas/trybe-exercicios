# DISTINCT

```sql
SELECT store_id FROM sakila.customer;
SELECT distinct store_id FROM sakila.customer;

SELECT first_name FROM sakila.actor;
SELECT distinct first_name FROM sakila.actor;

SELECT last_name FROM sakila.actor;
SELECT distinct first_name FROM sakila.actor;

SELECT distinct first_name, last_name FROM sakila.actor;

```

---

# LIMIT

```sql
SELECT * FROM sakila.country;
SELECT * FROM country LIMIT 5;

SELECT * FROM country
ORDER BY country_id
LIMIT 10 offset 8;
```

---

# COUNT

```sql
SELECT COUNT(*)
FROM sakila.address;

SELECT COUNT(address)
FROM sakila.address;

SELECT COUNT(address2)
FROM sakila.address;

# OE: Perguntar como seria possível montar uma query para descobrir
# a quantidade de cidades únicas cadastradas na tabela address
# Resposta:
SELECT COUNT(DISTINCT city_id)
FROM sakila.address;

# Perguntar: como seria possível encontrar a quantidade de cidades e quantidade de distritos cadastrados?

# Resposta:
SELECT COUNT(city_id), COUNT(district)
FROM sakila.address;
```

---

# ORDER BY

```sql
SELECT * FROM sakila.actor
ORDER BY first_name;

SELECT * FROM sakila.actor
ORDER BY first_name;

SELECT * FROM sakila.customer
ORDER BY customer_id;

SELECT * FROM sakila.customer
ORDER BY customer_id ASC;
SELECT * FROM sakila.customer
ORDER BY customer_id DESC;

#uma ou mais colunas
SELECT first_name, email FROM sakila.customer
ORDER BY first_name, email;
```

---

# EXTRA BIBLIOTECAS

```sql

-- 1. Eu quero somente os nomes dos livros cadastrados na biblioteca
SELECT nome FROM faculdade.biblioteca;
-- 2. Eu quero saber quantos livros temos cadastrados em nossa biblioteca
SELECT count(*) FROM faculdade.biblioteca;
-- 3. Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro 'Um livro do Ano' e 'Novas conquistas novas responsabilidades'
SELECT * FROM faculdade.biblioteca LIMIT 4 OFFSET 2;
-- 4. Quero os livros mais recentes primeiro, e também em ordem alfabética
SELECT * FROM faculdade.biblioteca
ORDER BY Ano_lancamento desc, nome;
-- 5. Eu quero todas as informações com maior estoque na biblioteca. Somente o com o maior estoque
SELECT * FROM faculdade.biblioteca
ORDER BY quantidade DESC LIMIT 1;
-- 6. Eu quero criar um lista com os 3 livros mais vendidos. Como poderia encontrar isso?
SELECT * FROM biblioteca
ORDER BY vendas DESC LIMIT 3;
```