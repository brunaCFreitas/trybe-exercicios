# Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que:
# 1- Lê todas essas informações;
# 2- Aplique um filtro, mantendo somente as pesssoas que estão reprovadas
# 3- Escreva seus nomes em outro arquivo
# Considere que a nota mínima para aprovação é 6.

with open("notas.txt", "w") as file:
    file.write("João, 5.0\n")
    file.write("Maria, 10.0\n")
    file.write("José, 4.0\n")
    file.write("Paulo, 6.0\n")
    file.write("Ana, 7.0\n")
    file.write("Carlos, 8.0\n")
    file.write("Marta, 9.0\n")
    file.write("Lucas, 3.0\n")
    file.write("Pedro, 2.0\n")
    file.write("Juliana, 1.0\n")

with open("notas.txt", "r") as file:
    notas = file.readlines()

with open("reprovados.txt", "w") as file:
    for nota in notas:
        nome, nota = nota.split(",")
        if float(nota) < 6:
            file.write(nome + "\n")

with open("reprovados.txt", "r") as file:
    reprovados = file.readlines()
    print(reprovados)
