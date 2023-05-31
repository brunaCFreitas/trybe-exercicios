# 6- Crie uma função que receba os três lados de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.


def tipo_triangulo(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b and b == c:
            return "equilatero"
        elif a == b or b == c or a == c:
            return "isosceles"
        else:
            return "escaleno"
    else:
        return "nao e triangulo"


print(tipo_triangulo(1, 1, 1))
print(tipo_triangulo(1, 2, 2))
print(tipo_triangulo(1, 2, 3))
