# Filas: crie uma classe Queue, onde deve conter
# as operações: enqueue, dequeue, peek e is_empty.


class Queue:
    def __init__(self):
        self._data = list()

    def enqueue(self, value):
        self._data.append(value)

    def dequeue(self):
        if len(self._data) == 0:
            return None
        return self._data.pop(0)

    def peek(self):
        if len(self._data) == 0:
            return None
        return self._data[0]

    def is_empty(self):
        return len(self._data) == 0
