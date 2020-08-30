from flask import Blueprint, Response
from flask import flash, g, render_template, redirect, request, url_for

from werkzeug.exceptions import abort
from .db.data import BlogPost


bp = Blueprint("blog", __name__)

"""
Route to get posts from mongo.

Query parameters can be provided for more filtration, which include
:title = title of the blog post
:author = name of the author
:date = date on which the post was written
:song_title = name of the song which the post is about
:song_artist = name of the artist who the post is about
"""
@bp.route("/", methods=["GET"])
def get_all_blog_posts():
    # Get and populate argument dictionary for mongo query
    args = {}
    if request.args.get('title'): args['title'] = request.args.get('title')
    if request.args.get('author'): args['author'] = request.args.get('author')
    if request.args.get('date'): args['date'] = request.args.get('date')
    if request.args.get('song_title'): args['song_title'] = request.args.get('song_title')
    if request.args.get('song_artist'): args['song_artist'] = request.args.get('song_artist')

    posts = BlogPost.objects(**args).to_json()
    return Response(posts, mimetype="application/json", status=200)


"""
Route to get ordered posts from mongo, sorted by the provided filtration_key.

Query parameters can be provided for more filtration, which include
:title = title of the blog post
:author = name of the author
:date = date on which the post was written
:song_title = name of the song which the post is about
:song_artist = name of the artist who the post is about
"""
@bp.route("/ordered/<string:filter_key>", methods=["GET"])
def get_ordered_blog_posts(filter_key):
    # Get and populate argument dictionary for mongo query
    args = {}
    if request.args.get('title'): args['title'] = request.args.get('title')
    if request.args.get('author'): args['author'] = request.args.get('author')
    if request.args.get('date'): args['date'] = request.args.get('date')
    if request.args.get('song_title'): args['song_title'] = request.args.get('song_title')
    if request.args.get('song_artist'): args['song_artist'] = request.args.get('song_artist')

    posts = BlogPost.objects(**args).to_json()
    return Response(posts, mimetype="application/json", status=200)
