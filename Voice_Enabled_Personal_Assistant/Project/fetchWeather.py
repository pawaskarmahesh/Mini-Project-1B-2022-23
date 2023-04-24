# API KEY: 069126350fbbbf6fcd3f71292166908c
import requests

class fetchWeather:
    def __init__(self, city_name):
        self.API_KEY = "069126350fbbbf6fcd3f71292166908c"
        self.city_name = city_name

    def getWeather(self):
        base_url = "https://api.openweathermap.org/data/2.5/weather?q="
        # complete_URL = base_url + self.city_name + "&appid=" + self.API_KEY + "&units=metric"
        complete_URL = f"{base_url}{self.city_name}&appid={self.API_KEY}&units=metric"
        print(complete_URL)
        res = requests.get(complete_URL)
        data = res.json()
        return data["main"]["temp"]