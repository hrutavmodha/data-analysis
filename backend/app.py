from flask import Flask, jsonify, request
from flask_cors import CORS
from notebook import vehicleAnalysis as va
from backend.routes.signup import signup
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
    return signup()
app.run(
    host = "localhost", 
    port = 8000, 
    debug = True
)
print("Server is running on http://localhost:8000")