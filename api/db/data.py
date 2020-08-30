from .db import db

class BlogPost(db.Document):
    _id = db.ObjectIdField(required=True, primary_key=True)
    title = db.StringField(required=True, unique=True)
    author = db.StringField(required=True)
    content = db.StringField(required=True)
    date = db.DateTimeField()
    song_titles = db.ListField(db.StringField())
    song_artists = db.ListField(db.StringField())
    spotify_links = db.ListField(db.StringField())
    youtube_links = db.ListField(db.StringField())
    meta = {'collection': 'musicBlog'}
