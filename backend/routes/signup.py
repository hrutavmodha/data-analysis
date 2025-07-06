from flask import request, jsonify
from flask_pymongo import PyMongo
from backend.db import mongo
def signup():
    data = request.get_json()
    mongo.db.users.insert_one(data)
    return jsonify({
        "message": "You have signed up successfully"
    })