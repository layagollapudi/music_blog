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
    body = create_subscriber(request)
    if not body:
        return Response(f"Bad post request, missing some or all of expected parameters.", status=404)

    subscriber = Subscriber(**body).save()
    return Response(str(subscriber.email_address), mimetype="application/json", status=200)


"""
Route to verify login credentials
"""
@bp.route("/login", methods=["POST"])
def login():
    body = request.get_json()
    if 'email_address' not in body or 'password' not in body:
        return None

    email_address = body['email_address']
    password = body['password']

    user = AdminUser.objects(**{'email_address': email_address}).first()
    if not user:
        return Response(f"An account with the provided email address does not exist.", status=404)
    if not user.verify_password(password):
        return Response(f"Password was incorrect.", status=404)

    return Response(str(saved.email_address), mimetype="application/json", status=200)
