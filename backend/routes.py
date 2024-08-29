# /workspaces/PKMSSpaceGenie/backend/app/routes.py

from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "OK"}), 200

@main.route('/api/data', methods=['GET'])
def get_data():
    # Logic to fetch data goes here
    data = {
        "message": "Hello, this is your data!"
    }
    return jsonify(data), 200
