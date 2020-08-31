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
"""
@bp.route("/", methods=["GET"])
def get_blog_posts():
    # Get and populate argument dictionary for mongo query
    query_params = ['title', 'author', 'date']
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
> reverse = if to send order from least->greatest instead (defaults to false)
"""
@bp.route("/ordered/<string:order_key>", methods=["GET"])
def get_all_blog_posts(order_key):
    # Get and populate argument dictionary for mongo query
    query_params = ['title', 'author', 'date']

    # We don't want to order on a key that we are filtering on, so we remove it from the list
    if order_key in query_params:
        query_params.remove(order_key)

    args = make_args_dict(request, query_params)

    # We want to add the needed prefix for ordering directionality
    if 'reverse' in request.args and bool(request.args.get('reverse')) == True:
        order_key = '-' + order_key

    posts = BlogPost.objects(**args).order_by(order_key).to_json()
    return Response(posts, mimetype="application/json", status=200)


"""
Route to create posts and save them to mongo.

Post form should include:
> title = title of the blog post
> author = name of the author
> date = date on which the post was written
> songs = key-val dict of artist to song
"""
@bp.route("/create", methods=["POST"])
def write_blog_post():
    body = verifies_blog_post(request)
    post = BlogPost(**body).save()

    return Response({'primary_id': str(post.primary_id)}, mimetype="application/json", status=200)
