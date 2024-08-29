#_init_.py
from flask import Flask
from flask_cors import CORS
from .config import Config  # Updated import

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

from app import routes

# Import and register the blueprint
from app.routes import main as main_blueprint
app.register_blueprint(main_blueprint)
