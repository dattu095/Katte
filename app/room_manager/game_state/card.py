from enum import Enum


class CardValue(Enum):
    two = 2
    three = 3
    four = 4
    five = 5
    six = 6
    seven = 7
    eight = 8
    nine = 9
    ten = 10
    jack = 11
    queen = 12
    king = 13
    ace = 14


class CardSuit(Enum):
    Spades = 1
    Hearts = 2
    Clubs = 3
    Diamonds = 4


class Card:
    def __init__(self, value, suit):
        self.value = CardValue(value)
        self.suit = CardSuit(suit)

    def __str__(self):
        return f"{self.value.name} of {self.suit.name}"

    def serialize(self):
        return {
            "value": self.value.value,
            "value_name": self.value.name,
            "suit": self.suit.value,
            "suit_name": self.suit.name,
        }

    def __eq__(self, other):
        return self.value == other.value and self.suit == other.suit


ACE_OF_SPADES = Card(14, 1)
