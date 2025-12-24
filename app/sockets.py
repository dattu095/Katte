from flask import session, request
from flask_socketio import SocketIO, join_room, emit

from .room_manager import RoomManager
from .room_manager.game_state.card import Card

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
def handle_play_card(data):
    card = Card(data.get('value'), data.get('suit'))
    print(f"{session.get('username')} Played {card}")