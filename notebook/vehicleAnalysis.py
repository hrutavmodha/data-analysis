from pandas import read_csv as readcsv, Series as series, DataFrame as df
from numpy import mean
vehicles = readcsv("data/vehicles.csv")
def topSold(n: int):
    tops = vehicles.sort_values(by = "Monthly Sales (Units)", ascending = False)
    return tops[: n]
def topBattery(n):
    batbymile = vehicles.sort_values(by = "Battery / Mileage", ascending = False)
    return batbymile[0: n]
def latestModel(n):
    latest = vehicles.sort_values(by = "Launch Year", ascending = False)
    return latest[0: n]
def petrolCars():
    return len(vehicles[vehicles["Fuel Type"] == "Petrol"])
def dieselCars():
    return len(vehicles[vehicles["Fuel Type"] == "Diesel"])
def electricCars(): 
    return len(vehicles[vehicles["Is EV?"] == "Yes"])
def avgSales():
    return mean(vehicles["Monthly Sales (Units)"])