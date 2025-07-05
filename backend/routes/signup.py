from flask import request
def signup():
    data = request.get_json()
    print(f"Data received:\n{data}")