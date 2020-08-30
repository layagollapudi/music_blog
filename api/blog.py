from flask import Blueprint, Response
from flask import flash, g, jsonify, render_template, redirect, request, url_for
from werkzeug.exceptions import abort

from .db.data import BlogPost
from .helpers.utils import *


bp = Blueprint("blog", __name__)

"""
Route to get all posts from mongo.

Query parameters can be provided for more filtration, which include:
> title = title of the blog post
> author = name of the author
> date = date on which the post was written
> song_titles = name of the song which the post is about
> song_artists = name of the artist who the post is about
"""
@bp.route("/", methods=["GET"])
def get_blog_posts():
    # Get and populate argument dictionary for mongo query
    query_params = ['title', 'author', 'date', 'song_titles', 'song_artists']
    args = make_args_dict(request, query_params)

    posts = BlogPost.objects(**args).to_json()
    return Response(posts, mimetype="application/json", status=200)


"""
Route to get ordered posts from mongo provided a particular key.
:order_key - key by which to sort entries

Query parameters can be provided for more filtration, which include:
> title = title of the blog post
> author = name of the author
> date = date on which the post was written
> song_title = name of the song which the post is about
> song_artist = name of the artist who the post is about
"""
@bp.route("/ordered/<string:order_key>", methods=["GET"])
def get_all_blog_posts(order_key):
    # Get and populate argument dictionary for mongo query
    query_params = ['title', 'author', 'date', 'song_title', 'song_artist']
    args = make_args_dict(request, query_params)

    # We don't want to order on a key that we are filtering on, so we remove it from the dict
    if order_key in args: del args[order_key]

    return Response({}, mimetype="application/json", status=200)
