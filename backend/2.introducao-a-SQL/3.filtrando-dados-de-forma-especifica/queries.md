# WHERE

```sql

SELECT * FROM sakila.actor;

-- Buscar actor com nome JOHNNY
SELECT * FROM sakila.actor
WHERE first_name = 'JOHNNY';

-- Buscar actor com nome JOHNNY e sobrenome CAGE
SELECT * FROM sakila.actor
WHERE first_name = 'JOHNNY' AND last_name = 'CAGE';

-- Quero o título e tempo que cada filme ficou alugado por exatamente 6 dias

--Resposta:
SELECT title, rental_duration FROM sakila.film
WHERE rental_duration = 6


-- Quero o título e tempo que cada filme ficou alugado por exatamente 6 dias e somente com a classificação R

--Resposta:
SELECT title, rental_duration, rating from SAKILA.FILM
WHERE rental_duration = 6 and rating = 'R';

-- Além de R queremos também incluir os filmes com classificação PG-13 ou R.

--Resposta:
SELECT title, rental_duration, rating from SAKILA.FILM
WHERE rental_duration = 6
AND (rating = 'PG-13' OR rating = 'R');

```

---

# IN & NOT

```sql
-- Maneira lenta de encontrar registros
SELECT * FROM sakila.film
WHERE title = 'AFFAIR PREJUDICE'
OR title = 'AFRICAN EGG'
OR title = 'AGENT TRUMAN'
OR title = 'AIRPLANE SIERRA';
SELECT * FROM sakila.film
-- Como evitar o cenário anterior usando o IN
WHERE title IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

-- como negar o resultado anterior
SELECT * FROM sakila.film
WHERE title NOT IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

-- Como eu poderia trazer nome e sobrenome de todos atores que não têm os seguintes sobrenomes: 'PECK' e HACKMAN'?
SELECT first_name,last_name FROM sakila.actor
WHERE last_name NOT IN ('PECK', 'HACKMAN');

```

---

# BETWEEN

```sql
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 and 130
ORDER BY length;

SELECT * FROM sakila.actor
WHERE first_name BETWEEN 'BELA' AND 'DUSTIN' 
ORDER BY first_name;

SELECT * FROM sakila.rental
WHERE return_date BETWEEN '2005-05-27' AND '2005-06-03'

```

---

# DATAS

```sql
SELECT now();  -- data e tempo de agora
SELECT curdate(); -- data de agora
SELECT curtime(); -- tempo de agora
SELECT year(now()); -- Ano atual
SELECT month(now()); -- mês atual
SELECT day(now()); -- dia atual

SELECT * FROM sakila.rental
WHERE date(rental_date) = '2005-05-26';

SELECT * FROM sakila.rental
WHERE rental_date BETWEEN CAST('2005-05-26 00:00:00' AS datetime) AND cast('2005-05-27 23:59:59' AS datetime);
```

---

# LIKE

```sql
SELECT * FROM sakila.customer
WHERE first_name LIKE '%FER%';

-- nomes que contem 'rey'
SELECT * FROM sakila.actor WHERE first_name LIKE '%rey%';
-- nomes finalizados com 'dra'
SELECT first_name FROM sakila.actor WHERE first_name LIKE '%dra';
-- nomes iniciando com 'jun'
SELECT first_name FROM sakila.actor WHERE first_name LIKE 'jun%';
-- Nomes que iniciam com 'J' e terminar com 'E'
SELECT * FROM sakila.actor WHERE first_name LIKE 'J%E';
-- Nomes que iniciam com RA a partir da segunda letra
SELECT * FROM sakila.actor WHERE first_name LIKE '_RA%';
-- Nomes que iniciam com ME a partir da terceira letra
SELECT first_name FROM sakila.actor WHERE first_name LIKE '__ME%';
-- Nomes com exatamente 3 caracteres
SELECT first_name FROM sakila.actor WHERE first_name LIKE '___';
-- Nomes com 3 caracteres que iniciam com B
SELECT first_name FROM sakila.actor WHERE first_name LIKE 'B__';

```