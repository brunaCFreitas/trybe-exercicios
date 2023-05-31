# Bônus: 1- Dada uma lsita, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def menor_elemento(lista):
    menor = lista[0]
    for i in lista:
        if i < menor:
            menor = i
    return menor


print(menor_elemento(numeros))
