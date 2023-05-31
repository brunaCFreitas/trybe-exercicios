frase = "O módulo de CS é bom demais, as dicas pythônicas fazem ficar melhor"

vogais = "aeiou"

lista_v2 = [letra for letra in frase if letra in vogais]

print(lista_v2)

lista_c2 = [letra for letra in frase if letra not in vogais]
print(lista_c2)

set_v2 = {letra for letra in frase if letra in vogais}
print(set_v2)
