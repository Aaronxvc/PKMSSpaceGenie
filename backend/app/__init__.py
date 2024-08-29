# /workspaces/PKMSSpaceGenie/backend/app/__init__.py

from flask import Flask

def create_app():
    app = Flask(__name__)

    # Import and register blueprints
    from .routes import main
    app.register_blueprint(main)

    return app
