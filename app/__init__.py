import uuid
from flask import Flask
from flask_socketio import SocketIO


sio = SocketIO()

def create_app():
    app = Flask(__name__)
    app.secret_key = uuid.uuid4()
    
    sio.init_app(app)
    
    return app