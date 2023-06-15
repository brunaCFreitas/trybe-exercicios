# Problema - Contém Duplicado
# Dado um array de números, verifique se o mesmo
# possui algum elemento duplicado. Sua função
# deve retornar True se algum elmento aparecer
# pelo menos duas vezes no array, e Falso caso
# todos os elementos sejam distintos.

test1 = [1, 2, 3, 1]  # True
test2 = []  # False
test3 = [1, 2, 3, 4]  # False
test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]  # True


def contains_duplicate(nums):
    nums.sort()
    for i in range(len(nums) - 1):
        if nums[i] == nums[i + 1]:
            return True
    return False


print(contains_duplicate(test1))
print(contains_duplicate(test2))
print(contains_duplicate(test3))
print(contains_duplicate(test4))
