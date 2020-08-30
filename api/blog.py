from flask import Blueprint, Response
from flask import flash, g, render_template, redirect, request, url_for

from werkzeug.exceptions import abort
from .db.data import BlogPost


bp = Blueprint("blog", __name__)

"""
Route to get ALL posts from mongo
"""
@bp.route("/", methods=["GET"])
def get_all_blog_posts():
    posts = BlogPost.objects().to_json()
    return Response(posts, mimetype="application/json", status=200)
