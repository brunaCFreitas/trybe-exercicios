**Resolução do Exercício 1**

Identificação das Entidades:

* **Entidade 1:** Animal;
* **Entidade 2:** Cuidador;
* **Entidade 3:** Gerente;
* **Entidade 4:** Cuidador e Animal;

Identificação dos Atributos:

* **Animal:** animal_id, nome, especie, sexo, idade e localização;
* **Cuidador:** cuidador_id, nome, gerente_id;
* **Gerente:** gerente_id e nome;
* **Cuidador e Animal:** cuidador_id e animal_id;

Identificar os Relacionamentos:

* Um animal pode ter um ou mais cuidadores;
* Um cuidador pode cuidar de um ou mais animais;
* Um gerente pode gerenciar uma ou mais cuidadores;
* Um cuidador possui um gerente;

![Diagrama de relacionamentos do banco de dados Zoológico](https://content-assets.betrybe.com/prod/Diagrama%20de%20relacionamentos%20do%20banco%20de%20dados%20Zool%C3%B3gico.png)

![Diagrama de relacionamentos detalhados das tabelas gerente, cuidador, animal e animal_cuidador](https://content-assets.betrybe.com/prod/Diagrama%20de%20relacionamentos%20detalhados%20das%20tabelas%20gerente,%20cuidador,%20animal%20e%20animal_cuidador.png)

* Crie o banco de dados usando os comandos `DROP SCHEMA IF EXISTS`, `CREATE` e `USE` para derrubar um banco de dados de mesmo nome caso ele já exista, recria-lo e garantir que este banco de dados seja o banco que receberá os comandos a seguir.

```sql
1 DROP SCHEMA IF EXISTS zoologico;
2 CREATE SCHEMA zoologico;
3 USE zoologico;
```

* Crie a tabela de animais

```sql
1 CREATE TABLE animal(
2    animal_id INT PRIMARY KEY AUTO_INCREMENT,
3    nome VARCHAR(50) NOT NULL,
4    especie VARCHAR(50) NOT NULL,
5    sexo VARCHAR(50) NOT NULL,
6    idade INT NOT NULL,
7    localizacao VARCHAR(50) NOT NULL
8 );
```

* Crie a tabela de gerentes

```sql
1 CREATE TABLE gerente(
2    gerente_id INT PRIMARY KEY AUTO_INCREMENT,
3    nome VARCHAR(50) NOT NULL
4 );
```

* Crie a tabela de cuidador relacionando cada cuidador a seu gerente usando uma chave estrangeira (foreign key)

```sql
1 CREATE TABLE cuidador(
2    cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
3    nome VARCHAR(50) NOT NULL,
4    gerente_id INT NOT NULL,
5    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
6 );
```

* Crie a tabela de relação entre os animais e seus cuidadores

```sql
1 CREATE TABLE animal_cuidador(
2    animal_id INT,
3    cuidador_id INT,
4    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
5    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
6    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
7 );
```
