## 0 -- Todos os dados de uma pessoa com a transação de maior valor

```sql
SELECT ac.id, ac.name, at.type, tr.amount FROM account as ac
INNER JOIN account_type as at
	ON at.id = ac.type
INNER JOIN transaction as tr
	ON tr.from_account = ac.id
ORDER BY tr.amount DESC LIMIT 1;
``` 
Paulinha

---

### 1 - Trazer os tipos de conta de cada conta ativa.

```sql
SELECT a.type, b.type, a.active
FROM account AS a
INNER JOIN account_type AS b
ON a.type = b.id
WHERE a.active;
```
Daniel Wolter

---

### 2 - Saldo Total de cada tipo de conta

```sql
SELECT SUM(a.amount) AS total, c.type FROM account AS a
INNER JOIN account_type AS c
ON a.type = c.id
GROUP BY c.type;
``` 
Fransuelio

---

### 3 - Contagem de accounts por tipo de conta

```sql
SELECT COUNT(*) total, a.type tipo_conta FROM account ac
INNER JOIN account_type AS a
ON ac.type = a.id
GROUP BY a.type;
``` 
Rita Moura

---

## 4 - Todas as transações da pessoa 3 e seu tipo de conta.

```sql
SELECT c.name, t.amount, t.transaction_date, at.type 
FROM transaction t
INNER JOIN account c
ON c.id = t.from_account
INNER JOIN account_type at
ON c.type = at.id
WHERE from_account = 3;
``` 
Anderson CR

---

### Bônus

## 5 - Todas as transações de cada pessoa para a outra conta, mostrar a data e amount, ordene por data.
```sql
SELECT 
    a.name from_account,
    aa.name to_account,
    t.amount,
    t.transaction_date
FROM
    transaction t
        INNER JOIN
    account a ON t.from_account = a.id
        INNER JOIN
    account aa ON t.to_account = aa.id
    ORDER BY t.transaction_date;
```