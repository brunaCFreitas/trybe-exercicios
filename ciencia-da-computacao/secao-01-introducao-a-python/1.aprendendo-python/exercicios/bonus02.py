# Bônus: 2- Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um trinângulo retângulo com n asteriscos de base


def triangulo_retangulo(n):
    for i in range(1, n + 1):
        print("*" * i)


triangulo_retangulo(5)
