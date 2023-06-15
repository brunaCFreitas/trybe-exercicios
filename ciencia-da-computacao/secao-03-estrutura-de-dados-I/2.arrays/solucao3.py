# Problema - Melhor par de passeios turísticos
# Dado um array de números inteiros que representam
# uma avaliação a respeito de um ponto turistico.
# E seus índices representam a distância entre os pontos
# turísticos. Calcule a máxima pontuação obtida a partir
# de um par de pontos turísticos. Para calcular a pontuação
# some as avaliações de dois pontos e em seguida subtraia a
# distância entre eles.

spots = [8, 1, 5, 2, 6]
spots2 = [4, 1, 5, 2, 6]


def max_score(array):
    answer = -1
    previous = -1

    for j in range(1, len(array)):
        i = j - 1
        previous = max(previous, array[i] + i)
        answer = max(answer, previous + array[j] - j)
    return answer


print(max_score(spots))
print(max_score(spots2))
