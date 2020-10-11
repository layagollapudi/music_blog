from flask import Blueprint

bp = Blueprint("blog", __name__)

from app.api import blog
from app.api import auth
