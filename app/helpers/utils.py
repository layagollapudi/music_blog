import uuid

from flask import request
from datetime import datetime

LIST_ARGS = ['spotify_links', 'youtube_links']
DATE_FORMAT = "%Y-%m-%d"

'''
Returns desired argument dictionary given specific keys.

:request - request object
:keys - list of keys
'''
def make_args_dict(request, keys):
    args = {}

    for key in keys:  # For all the searched "keys" ...
        if key in request.args:
            if key in LIST_ARGS:  # List of arguments :)
                val = request.args.getlist(key)
            else:
                val = request.args.get(key)
                if key == 'date':  # Convert to a datetime object
                    try: val = datetime.strptime(val, DATE_FORMAT)
                    except ValueError: continue
            args[key] = val

    return args


'''
Creates and returns proper-formed JSON given post form body.

:request - request object
'''
def create_blog_post(request):
    body = request.get_json()

    # generate random UUID for the entry :)
    id = uuid.uuid4()
    body['primary_id'] = id

    return body



'''
Edits and saves proper-formed BlogPost object.

:request - request object
:post - BlogPost object
'''
def update_blog_post(request, post):
    body = request.get_json()

    # String fields
    if 'title' in body: post.title = body['title']
    if 'author' in body: post.author = body['author']
    if 'content' in body: post.content = body['content']

    # Date field
    if 'date' in body: post.date = datetime.strptime(body['date'], DATE_FORMAT)

    # TODO: songs dict and links editing ...
    post.save()
    return


'''
Authenticates user-email password combination.

:request - request objects

Returns whether validation was successful or not.
'''
def create_subscriber(request):
    body = request.get_json()

    if 'email_address' not in body:
        return None

    id = uuid.uuid4()
    body['primary_id'] = id

    return body


'''
Authenticates user-email password combination.

:request - request objects
Returns whether validation was successful or not.
'''
def create_admin_user(request):
    body = request.get_json()

    if 'email_address' not in body or 'password' not in body:
        return None

    id = uuid.uuid4()
    return {
        'primary_id': id,
        'email_address': body['email_address']
    }
