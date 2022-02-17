import base64
import random

from geopy.geocoders import Nominatim
from PIL import Image, ImageDraw, ImageFont

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


def meme_generator(text):
    images = ["cute-cat.jpg", "disaster-girl.jpg",
              "doge.jpg", "doge-strong.png",
              "imagination-spongebob.jpg", "kermit.jpg"]
    rand_num = random.randint(0, len(images)) - 1
    random_image = images[rand_num]
    image = Image.open(f"./app/memes/images/{random_image}")
    meme = ImageDraw.Draw(image)
    font = ImageFont.truetype("./app/memes/arialblack.ttf", size=100, index=0, encoding="")
    meme.text((10, 10), text, fill=(255, 0, 0), font=font)
    image_path = f"./app/memes/images/results/{random_image}"
    image.save(image_path)

    with open(image_path, "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode('utf-8')

    return image_data
