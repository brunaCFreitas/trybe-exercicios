# 5- Considere que a cobertura da tinta é de 1 litro para cada 3 metros
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir
# do tamanho de uma parede(em m²).


def calcula_latas_tinta(metros):
    litros = metros / 3
    latas = litros / 18
    preco = latas * 80
    return f" latas: {latas}, preco: {preco}"


print(calcula_latas_tinta(54))
