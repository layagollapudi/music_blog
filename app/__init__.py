import os

from flask import Flask
from flask_cors import CORS

from app.db.db import initialize_db
from app.api import bp

"""
Create and configure an instance of the Flask application.
"""
def create_app(test_config=None):

    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    app.register_blueprint(bp)

    app.config['MONGODB_SETTINGS'] = {
        'host': 'mongodb://localhost/test'
    }
    initialize_db(app)

    app.add_url_rule("/", endpoint="index")
    return app
