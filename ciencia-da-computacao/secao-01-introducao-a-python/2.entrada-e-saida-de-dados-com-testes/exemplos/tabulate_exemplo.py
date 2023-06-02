from tabulate import tabulate

titles = ["Animes", "Temporadas"]

data = [
    ["Digimon Evolution (2020)", 1],
    ["The Promised Neverland", 1],
    ["Attack on Titan", 4],
    ["Jujutsu Kaisen", 1],
]

print(tabulate(data, headers=titles, tablefmt="fancy_grid", numalign="center"))
