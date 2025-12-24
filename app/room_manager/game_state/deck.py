import random

from .card import Card


class Deck:
    def __init__(self):
        self.hand = self._create_deck()

    def create_card(self, value, suit):
        return Card(value, suit)

    def _create_deck(self):
        deck = []
        for suit in range(1, 5):
            for value in range(2, 15):
                deck.append(self.create_card(value, suit))

        return deck

    def shuffle(self):
        random.shuffle(self.hand)

    def draw_card(self):
        return self.hand.pop()

    def is_empty(self):
        return len(self.hand) == 0
