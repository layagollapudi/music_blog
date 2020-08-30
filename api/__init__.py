import os

from flask import Flask
from .db.db import initialize_db
from .db.data import BlogPost

from api import blog

"""
Create and configure an instance of the Flask application.
"""
def create_app(test_config=None):

    app = Flask(__name__, instance_relative_config=True)
    app.register_blueprint(blog.bp)

    app.config['MONGODB_SETTINGS'] = {
        'host': 'mongodb://localhost/test'
    }
    initialize_db(app)

    app.add_url_rule("/", endpoint="index")
    return app
