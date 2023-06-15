# Problema - Criança com maior número de doces
# Dado um array de doces (candies) e um valor
# inteiro extra_candies, onde o candies[i]
# representa o número de doces que a enésima
# criança possii. Para cada criança, verifique
# se há uma maneira de distribuir doces extras
# de modo que ela possa ter o maior número de
# doces entre todas as outras crianças. Observe
# que várias crianças podem ter o maior número
# de doces.

candies = [2, 3, 5, 1, 3]
extra_candies = 3


def kid_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


print(kid_with_candies(candies, extra_candies))
