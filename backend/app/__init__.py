from flask import Flask
from flask_cors import CORS
from .config import Config
def create_app():
    app = Flask(__name__)

    # CORS configuration
    cors = CORS(app, resources={
        r"/api/*": {  # Adjust the route as needed
            "origins": ["https://example.com", "https://anotherdomain.com"],  # Allowed origins
            "methods": ["GET", "POST"],  # Allowed methods
            "allow_headers": ["Content-Type", "Authorization"]  # Allowed headers
        }
    })

    app.config.from_object(Config)

    with app.app_context():
        from app import routes  # Import routes here to avoid circular imports

        # Import and register the blueprint
        from app.routes import main as main_blueprint
        app.register_blueprint(main_blueprint)

    return app