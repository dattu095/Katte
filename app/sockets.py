from flask import session, request
from flask_socketio import SocketIO, join_room, emit

from .room_manager import RoomManager

sio = SocketIO()

room_manager = RoomManager()


@sio.on("connect")
def handle_connect():
    username = session.get("username")
    room_id = session.get("room_id")

    room = room_manager.get_room(room_id)
    room.add_player(request.sid, username)

    join_room(room_id)

    emit("state", room.serialize(), to=room_id)
    print(f"{room.serialize()}")

    if room.is_full():
        room.start_game()
        emit("state", room.serialize(), to=room_id)
        print(f"{room.serialize()}")

@sio.on('play_card')
def handle_play_card(card):
    username = session.get('username')
    room_id = session.get('room_id')
    
    room = room_manager.get_room(room_id)
    
    room.game_state.play_card(username, card)
    
    emit("state", room.serialize(), to=room_id)
    print(f"{room.game_state.pool}")
    print(f"{room.serialize()}")