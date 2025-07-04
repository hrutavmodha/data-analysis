from flask import Flask, jsonify
from flask_cors import CORS
from notebook import vehicleAnalysis as va
app = Flask(__name__)
CORS(app)
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
app.run(
    host = "localhost", 
    port = 8000, 
    debug = True
)