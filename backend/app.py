from flask import Flask, jsonify
from flask_cors import CORS
from ..notebook import vehicleAnalysis as va
app = Flask(__name__)
CORS(app)
# app.
@app.route('/sales', method = 'GET')
def getAvgSales():
    return jsonify({
        "averageSales": va.avgSales()
    })
@app.route('/eCarCount', method = 'GET')
def getECars():
    return jsonify({
        "numberOfECars": va.electricCars()
    })
app.run(
    host = "localhost", 
    port = 8000, 
    debug = True
)