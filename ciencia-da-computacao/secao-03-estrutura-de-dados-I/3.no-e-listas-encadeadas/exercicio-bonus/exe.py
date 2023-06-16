# Exercício 1:
# Remover duplicatas de uma LinkedList.
# Nesta atividade será necessário implementar um algoritmo que
# receba uma LinkedList como argumento e retorne uma nova lista
# sem elementos duplicados.
# Esta função deve respeitar a complexidade O(n).

# Exemplo:

# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3


def delete_duplicates(linked_list):
    list_with_unique_elements = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


# Exercício 2:
# Remover duplicatas de uma DoublyLinkedList, atividade extraída e
# adaptada do LeetCode. Nesta atividade será necessário implementar
# um algoritmo que receba uma DoublyLinkedList como argumento e retorne
# uma nova lista, sem elementos que possuem mais de uma ocorrência.

# Exemplo:

# input: 1 <-> 1 <-> 2
# saída: 2

# input: 1 <-> 1 <-> 2 <-> 3 <-> 3
# saída: 2

# input: 1 <-> 2 <-> 3 <-> 3
# saída: 1 <-> 2


class DoublyLinkedList:
    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


def delete_duplicates2(linked_list):
    list_with_unique_elements = DoublyLinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if linked_list.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements
