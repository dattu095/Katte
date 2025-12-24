import uuid
from flask import Flask

from .sockets import sio
from .routes import main_bp


def create_app():
    app = Flask(__name__)
    app.secret_key = str(uuid.uuid4())

    app.register_blueprint(main_bp)

    sio.init_app(app)

    return app
