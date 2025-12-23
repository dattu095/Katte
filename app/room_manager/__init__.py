import random
import string

from .room import Room


class RoomManager:
    def __init__(self):
        self.rooms = {}
    
    def _generate_id(self):
        id = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
        if id in self.rooms:
            return self._generate_id()
        return id
    
    def create_room(self):
        room_id = self._generate_id()
        room = Room(room_id)
        
        self.rooms[room_id] = room
        return room_id

    def get_room(self, room_id):
        return self.rooms.get(room_id)