import uuid
from flask import Flask
from flask_socketio import SocketIO

from .routes import main_bp


sio = SocketIO()

def create_app():
    app = Flask(__name__)
    app.secret_key = uuid.uuid4()
    
    app.register_blueprint(main_bp)
    
    sio.init_app(app)
    
    return app