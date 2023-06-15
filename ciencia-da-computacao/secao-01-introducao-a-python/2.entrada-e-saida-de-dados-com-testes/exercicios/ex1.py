# Faça um programa que receba um nome e imprima o mesmo na vertical
# em escada invertida.


def vertical_inverted_ladder(name):
    for removed_letters in range(len(name)):
        for index in range(len(name) - removed_letters):
            print(name[index], end='')
        print()


if __name__ == '__main__':
    name = input('Digite seu nome: ')
    vertical_inverted_ladder(name)
