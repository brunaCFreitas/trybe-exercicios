### 1. Sumarizar todos os gastos por categoria

```sql
SELECT SUM(valor) * -1 as total, categoria FROM banco.conta
GROUP BY categoria, tipo_movimento
HAVING tipo_movimento = 'saída';
```

---

### 2. Sumarizar todos os gastos por categoria exibindo apenas o cliente que começa com o nome José
### ordenando pelo maior valor e limitando em 2

```sql
SELECT SUM(valor) as total, nome_cliente, categoria FROM conta
GROUP BY categoria, nome_cliente, tipo_movimento
HAVING nome_cliente LIKE 'José%' AND tipo_movimento = 'saída'
ORDER BY total DESC LIMIT 2;
```

---

### 3. Exibir total de receita e total de despesas

```sql
SELECT 
	SUM(IF(tipo_movimento = 'saída', valor, 0)) as total_despesa,
    SUM(IF(tipo_movimento = 'entrada', valor, 0)) as total_receita,
    nome_cliente
FROM conta
GROUP BY nome_cliente;
```

---

### 4 Exibir total de receita e total de despesas (apenas clientes ativos)

```sql
SELECT 
    SUM(IF(tipo_movimento = 'entrada', valor, 0)) AS receita,
    SUM(IF(tipo_movimento = 'saída', valor, 0)) * - 1 AS despesa,
    nome_cliente,
    ativo
FROM
    conta
GROUP BY nome_cliente , ativo
HAVING ativo
```

---

### 5. Exibir valor médio gasto (não deve exibir salário no retorno da consulta)

```sql
SELECT AVG(IF(tipo_movimento = 'saída', valor, 0)) * -1 total_gasto, categoria FROM conta
GROUP BY categoria
HAVING categoria <> 'salário';
```