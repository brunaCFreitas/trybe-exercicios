characters_file = open("personages.txt", mode="w")
# Abre o arquivo para escrita (arquivo.estensao, modo=escrita)

characters_file.write("Ryu\n")
characters_file.write("Chun-Li\n")
characters_file.write("Ken\n")
# Escreve no arquivo

print("Brunete", file=characters_file)
# Escreve no arquivo com o print

more_characters = ["Sakura\n", "Blanka\n", "Guile\n"]

characters_file.writelines(more_characters)
# Escreve uma lista de strings no arquivo

characters_file.close()
# Fecha o arquivo

# gerenciador de contexto

with open("personagens2.txt", "w") as file:
    file.write("Dudu\n")
    file.write("Bruna\n")
    file.write("Bianca\n")
    file.write("Maria\n")
    file.write("Ana Clara\n")

    print("Sergio", file=file)

    more_peoples = ["Andreia\n", "Natalia\n"]
    file.writelines(more_peoples)


# leitura
with open("personagens2.txt", "r") as file:
    content = file.read()
    print(content)


with open("personagens2.txt", "w") as file:
    lines = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    file.writelines(lines)


with open("personagens2.txt", "r") as file:
    for line in file:
        print(line, end="")
