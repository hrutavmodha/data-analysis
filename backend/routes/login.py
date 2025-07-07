import os
from flask import request, jsonify
from backend.db import mongo
import jwt
from pathlib import Path
from dotenv import load_dotenv
load_dotenv(dotenv_path=Path(__file__).resolve().parents[1]/'.env')
def login():
    client = request.get_json()
    result = mongo.db.users.find_one(client)
    if client == result:
        token = jwt.encode({'email': client['email']}, os.getenv('SECRET'), algorithm='HS256')
        return jsonify({
            'status': 200,
            'message': 'You have logged in successfully',
            'token': token
        })
    else:
        return jsonify({
            'status': 401,
            'message': 'Unauthorized'
        })