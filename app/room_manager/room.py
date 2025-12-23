from .player import Player


class Room:
    MAX_PLAYERS = 4
    
    def __init__(self, room_id):
        self.room_id = room_id
        self.players = []
        
        self.started = False
    
    def serialize(self):
        return {
            'room_id': self.room_id,
            'players': [p.name for p in self.players],
            'max_players': self.MAX_PLAYERS,
            'started': self.started
        }
    
    def start_game(self):
        self.started = True
    
    def add_player(self, sid, username):
        if not self.started and len(self.players) < self.MAX_PLAYERS:
            self.players.append(Player(sid, username))
        
    def is_full(self):
        return len(self.players) == self.MAX_PLAYERS