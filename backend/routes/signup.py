from flask import request, jsonify
from backend.db import mongo
def signup():
    data = request.get_json()
    mongo.db.users.insert_one(data)
    return jsonify({
        'status': 200,
        'message': 'You have signed up successfully'
    })