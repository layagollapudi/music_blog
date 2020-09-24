from .db import db
from flask_mongoengine import BaseQuerySet

class ReferencedSongs(db.EmbeddedDocument):
    artist = db.StringField()
    song_title = db.StringField()
    album_title = db.StringField()

class BlogPost(db.Document):
    primary_id = db.UUIDField(binary=False, required=True, primary_key=True)
    title = db.StringField(required=True)
    author = db.StringField(required=True)
    content = db.StringField(required=True)
    date = db.DateTimeField(required=True)
    songs = db.EmbeddedDocumentListField(ReferencedSongs)
    spotify_links = db.ListField(db.StringField())
    youtube_links = db.ListField(db.StringField())
    meta = {'collection': 'musicBlog', 'queryset_class': BaseQuerySet}
