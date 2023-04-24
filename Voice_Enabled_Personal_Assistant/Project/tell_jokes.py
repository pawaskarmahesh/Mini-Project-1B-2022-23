import requests

class Tell_Jokes:

    def fetch_joke(self):
        fetch_url = "https://official-joke-api.appspot.com/jokes/random"

        # fetch joke
        res = requests.get(fetch_url)
        response = res.json()
        return response['setup'],  response['punchline']


Tell_Jokes().fetch_joke()