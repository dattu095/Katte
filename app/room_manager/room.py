from .player import Player
from .game_state import GameState


class Room:
    MAX_PLAYERS = 4
    
    def __init__(self, room_id):
        self.room_id = room_id
        self.players = []
        
        self.started = False
        
        self.game_state = None
    
    def serialize(self):
        return {
            'room_id': self.room_id,
            'players': [p.name for p in self.players],
            'max_players': self.MAX_PLAYERS,
            'started': self.started,
            'game_state': self.game_state.serialize() if self.game_state else None
        }
    
    def start_game(self):
        self.started = True
        self.game_state = GameState([p.name for p in self.players])
        self.game_state.start_game()
    
    def add_player(self, sid, username):
        if not self.started and len(self.players) < self.MAX_PLAYERS:
            self.players.append(Player(sid, username))
        
    def is_full(self):
        return len(self.players) == self.MAX_PLAYERS