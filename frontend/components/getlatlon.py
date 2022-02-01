from geopy.geocoders import Nominatim

app = Nominatim(user_agent="tutorial")


def getlatlon(address_str):
    full_addr = address_str + ", Washington, D.C."
    location = app.geocode(full_addr).raw
    lat = location['lat']
    lon = location['lon']

    return [float(lat), float(lon)]
