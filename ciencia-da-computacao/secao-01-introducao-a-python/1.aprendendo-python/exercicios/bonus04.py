# Bônus: 4- Um posto esta vendendo combustíveis com a seguinte tabela
# de descontos:
# Álcool:
# até 20 litros, desconto de 3% por litro
# acima de 20 litros, desconto de 5% por litro
# Gasolina:
# até 20 litros, desconto de 4% por litro
# acima de 20 litros, desconto de 6% por litro

# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule
# e imprima o valor a ser pagopelo cliente sabendo-se que o preço do litro da
# gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.


def posto_combustivel(litros, tipo):
    if tipo == "A":
        if litros <= 20:
            return litros * 1.90 * 0.97
        else:
            return litros * 1.90 * 0.95
    elif tipo == "G":
        if litros <= 20:
            return litros * 2.50 * 0.96
        else:
            return litros * 2.50 * 0.94
    else:
        return "Tipo invalido"


print(posto_combustivel(20, "A"))
print(posto_combustivel(20, "G"))
print(posto_combustivel(21, "A"))
print(posto_combustivel(21, "G"))
