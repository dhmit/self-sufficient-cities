from geopy.geocoders import Nominatim

app = Nominatim(user_agent="app")


# pylint: disable-msg=W0703
def address_to_coordinates(address):
    """Getting latitude and longitude from address"""

    try:
        full_addr = address + ", Washington, D.C."
        found = app.geocode(full_addr)
        if not found:
            # try again without adding Washington, D.C.
            found = app.geocode(address)
        if not found:
            return []
        location = found.raw
        lat = location["lat"]
        lon = location["lon"]
        return [lat, lon]
    except (AttributeError, Exception):
        return []
