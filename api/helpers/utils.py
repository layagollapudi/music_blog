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

    # For all the searched "keys" ...
    for key in keys:
        if key in request.args:

            # List of arguments :)
            if key in LIST_ARGS:
                val = request.args.getlist(key)
            else:
                val = request.args.get(key)

                # Convert to a datetime object
                if key == 'date':
                    try: val = datetime.strptime(val, DATE_FORMAT)
                    except ValueError: continue

            args[key] = val

    return args


'''
Verifies and returns proper-formed JSON given post form body.

:request - request object
'''
def verifies_blog_post(request):
    body = request.get_json()

    # generate random UUID for the entry :)
    id = uuid.uuid4()
    body['primary_id'] = id

    return body
