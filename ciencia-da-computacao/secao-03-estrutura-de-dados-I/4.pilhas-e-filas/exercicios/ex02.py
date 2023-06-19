# Pilhas: crie uma classe Stack, onde deve conter
# as operações: push, pop, peek e is_empty.


class Stack:
    def __init__(self):
        self._data = list()

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if len(self._data) == 0:
            return None
        return self._data.pop()

    def peek(self):
        if len(self._data) == 0:
            return None
        return self._data[-1]

    def is_empty(self):
        return len(self._data) == 0
