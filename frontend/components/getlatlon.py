# function for converting address string to latitude and longitude

# import geopandas
# import geopy

from geopy.geocoders import Nominatim
# locator = Nominatim(user_agent="myGeocoder")
app = Nominatim(user_agent="tutorial")

def getlatlon(address_str):
    full_addr = address_str + ", Washington, D.C."
    location = app.geocode(full_addr).raw
    lat = location['lat']
    lon = location['lon']

    return [float(lat), float(lon)]

# Test:
# print(getlatlon("1139 6th St. NE"))
