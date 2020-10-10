from flask import Blueprint, Response
from flask import flash, g, jsonify, render_template, redirect, request, url_for
from werkzeug.exceptions import abort

from app.api import bp
from app.db.db import BlogPost
from app.helpers.utils import *


"""
Route to get all posts from mongo.

Query parameters can be provided for more filtration, which include:
> title [type: str] = title of the blog post
> author [type: str] = name of the author
> date [type: str] = date on which the post was written
"""
@bp.route("/", methods=["GET"])
def get_blog_posts():
    # Get and populate argument dictionary for mongo query
    query_params = ['title', 'author', 'date']
    args = make_args_dict(request, query_params)

    posts = BlogPost.objects(**args)

    if posts is None or len(posts) == 0:
        return Response(f"No entry with provided query parameters found.", status=404)

    return Response(posts.to_json(), mimetype="application/json", status=200)


"""
Route to get specific post from mongo.

URL parameter includes
:primary_id = the UUID associated with post in mongo - is a unique id.

No query parameters needed, just one object should be responded with.
"""
@bp.route("/<uuid:primary_id>", methods=["GET"])
def get_blog_post(primary_id):
    args = {'primary_id': primary_id}
    post = BlogPost.objects(**args).first()

    if post is None:
        return Response(f"No entry with id {str(primary_id)} found.", status=404)

    return Response(post.to_json(), mimetype="application/json", status=200)


"""
Route to create posts and save them to mongo.

Post form should include:
> title = title of the blog post
> author = name of the author
> date = date on which the post was written
> content = string of post body content

Post form also can include:
> songs = key-val dict of artist to song
> spotify_links = list of spotify links to reference in posts
> youtube_links = list of youtube links to reference in posts
> image_link = string containing link to image used for post

"""
@bp.route("/create", methods=["POST"])
def write_blog_post():
    body = create_blog_post(request)
    post = BlogPost(**body).save()

    return Response(str(post.primary_id), mimetype="application/json", status=200)


"""
Route to edit an existent post and save to mongo.

Post form can include:
> title = title of the blog post
> author = name of the author
> date = date on which the post was written
> content = string of post body content
> songs = key-val dict of artist to song
> spotify_links = list of spotify links to reference in posts
> youtube_links = list of youtube links to reference in posts
> image_link = string containing link to image used for post

"""
@bp.route("/edit/<uuid:primary_id>", methods=["PUT"])
def edit_blog_post(primary_id):
    args = {'primary_id': primary_id}
    post = BlogPost.objects(**args).first()

    if post is None:
        return Response(f"No entry with id {str(primary_id)} found.", status=404)

    update_blog_post(request, post)
    return Response(str(post.primary_id), mimetype="application/json", status=200)



"""
Route to delete an existent post and save to mongo.
"""
@bp.route("/delete/<uuid:primary_id>", methods=["DELETE"])
def delete_blog_post(primary_id):
    args = {'primary_id': primary_id}
    post = BlogPost.objects(**args).first()

    if post is None:
        return Response(f"No entry with id {str(primary_id)} found.", status=404)

    post.delete()  # Delete single post
    return Response(str(post.primary_id), mimetype="application/json", status=200)
