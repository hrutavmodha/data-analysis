from flask import Flask, jsonify, request
from flask_cors import CORS
from notebook import vehicleAnalysis as va
from backend.routes import signup, login
from backend.db import mongo
app = Flask(__name__)
CORS(app)
mongo.init_app(app, uri = 'mongodb://localhost:27017/data-analysis')
@app.route('/sales', methods = ['GET'])
def getAvgSales():
    return jsonify({
        "averageSales": va.avgSales()
    })
@app.route('/tops', methods = ['GET'])
def getTops():
    return jsonify({
        "top3Brands": va.topSold(3).to_dict(orient='records')
    })
@app.route('/signup', methods = ['POST'])
def register():
    return signup.signup()
@app.route('/login', methods = ['POST'])
def authorize():
    return login.login()
app.run(
    host = "localhost", 
    port = 8000, 
    debug = True
)
print("Server is running on http://localhost:8000")