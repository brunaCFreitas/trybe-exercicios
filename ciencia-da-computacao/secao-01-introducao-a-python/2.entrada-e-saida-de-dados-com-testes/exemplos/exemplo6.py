import json


# with open("pokemon.json") as file:
#     content = file.read()
#     pokemons = json.loads(content)["results"]

# print(pokemons[0])

# outra maneira lendo a partir do arquivo

with open("pokemon.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])


# separando os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# Abrindo o arquivo para escrita

with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    )
    file.write(json_to_write)


# outra maneira direta

with open("grass_pokemons.json", "w") as file:
    json.dump(
        grass_type_pokemons,
        file,
        indent=4
    )
