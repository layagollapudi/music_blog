from flask_mongoengine import MongoEngine, BaseQuerySet
from passlib.apps import custom_app_context as pwd_context

db = MongoEngine()

def initialize_db(app):
    db.init_app(app)

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
    image_link = db.StringField()
    meta = {'collection': 'musicBlog', 'queryset_class': BaseQuerySet}

class Subscriber(db.Document):
    primary_id = db.UUIDField(binary=False, required=True, primary_key=True)
    email_address = db.StringField(required=True)
    meta = {'collection': 'subscriberInfo', 'queryset_class': BaseQuerySet}

class AdminUser(db.Document):
    primary_id = db.UUIDField(binary=False, required=True, primary_key=True)
    email_address = db.StringField(required=True)
    password_hash = db.StringField(required=True)
    meta = {'collection': 'AdminUserInfo', 'queryset_class': BaseQuerySet}

    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)
