from .deck import Deck
from .card import ACE_OF_SPADES


class GameState:
    def __init__(self, players):
        self.players = players
        self.no_of_players = len(players)
        
        self.pool = []
        self.leading_suit = 0

        self.deck = Deck()
        self.hands = {}
        for player in self.players:
            self.hands[player] = []
        
        self.index = 0
        self.winners = []
    
    def serialize(self):
        temp = {}
        for hand in self.hands:
            temp[hand] = [card.serialize() for card in self.hands[hand]]
            
        return {
            'pool': [card[1].serialize() for card in self.pool],
            'leading_suit': self.leading_suit,
            'hands': temp,
            'turn': self.players[self.index]
        }
    
    def deal_cards(self):
        while not self.deck.is_empty():
            self.hands[self.players[self.index]].append(self.deck.draw_card())
            self.next_turn()
    
    def start_game(self):
        self.deck.shuffle()
        self.deal_cards()
        
        for index, player in enumerate(self.players):
            if ACE_OF_SPADES in self.hands.get(player):
                self.next_turn(index)
                break
        self.leading_suit = 1
    
    def next_turn(self, i=None):
        if i is not None: 
            self.index = i
        else:
            self.index = (self.index + 1) % self.no_of_players