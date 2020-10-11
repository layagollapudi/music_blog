from flask import Blueprint, Response
from flask import flash, g, jsonify, render_template, redirect, request, url_for
from werkzeug.exceptions import abort

from app.api import bp
from app.helpers.utils import *
from app.db.db import Subscriber, AdminUser

# Subscription routes

"""
Route to subscribe to blog.
"""
@bp.route("/subscribe", methods=["POST"])
def subscribe():
    body = add_subscriber_to_blog(request)
    if not body:
        return Response(f"No email_address entry found.", status=400)

    try:
        post = Subscriber(**body).save()
        return Response(str(post.primary_id), mimetype="application/json", status=200)
    except:
        return Response("Unable to add subscriber", status=500)

# Verification routes

"""
Route to verify login credentials
"""
@bp.route("/login", methods=["POST"])
def login():
    complete_auth_validation(request)
    return {}
