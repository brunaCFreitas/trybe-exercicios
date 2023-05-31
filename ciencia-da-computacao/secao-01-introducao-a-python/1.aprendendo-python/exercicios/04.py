# 4- Crie uma função que receba uma lista de nomes e retorne o nome com
# a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda" .

nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maior_nome(lista):
    maior = ""
    for nome in lista:
        if len(nome) > len(maior):
            maior = nome
    return maior


print(maior_nome(nomes))
