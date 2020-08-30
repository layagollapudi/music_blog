from .db import db

class BlogPost(db.Document):
    _id = db.ObjectIdField(required=True, primary_key=True)
    title = db.StringField(required=True, unique=True)
    author = db.StringField(required=True)
    content = db.StringField(required=True)
    date = db.DateTimeField()
    song_title = db.StringField()
    song_artist = db.StringField()
    spotify_link = db.StringField()
    youtube_link = db.StringField()
    meta = {'collection': 'musicBlog'}
