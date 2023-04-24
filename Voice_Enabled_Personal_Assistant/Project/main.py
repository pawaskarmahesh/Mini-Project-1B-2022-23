import speech_recognition as sr
import pyttsx3
import pywhatkit
import datetime
import speedtest
# import pyjokes
import qrcode
from AppOpener import open, close

# local imports
import fetchWeather
import web_search
import tell_jokes
import password_generator
import search_files

class Coco:
    def __init__(self):
        self.isRunning = True
        self.listener = sr.Recognizer()
        self.engine = pyttsx3.init()
        self.voices = self.engine.getProperty('voices')
        self.engine.setProperty('voice', self.voices[1].id)
        # self.voice_rate = 135
        # self.engine.setProperty('rate', self.voice_rate)
        self.mic = sr.Microphone(device_index=1)
        self.t_command = ""
        self.st = speedtest.Speedtest()

        # app handling
        self.app_to_open = self.app_to_close = ""
        
        # run loop while isRunning is not false
        while self.isRunning:
            self.run_coco()

    def talk(self, text):
        self.engine.say(text)
        self.engine.runAndWait()

    def take_command(self):
        command = ""
        cmd_list = []
        try:
            with self.mic as source:
                print('listening...')
                voice = self.listener.listen(source, phrase_time_limit=5)
                command = self.listener.recognize_google(voice)
                command = command.lower()
                cmd_list = list(command.split())
        except:
            pass
        return cmd_list


    def run_coco(self):
        cmd = self.take_command()
        print(cmd)
        print(self.t_command)
        if 'play' in cmd or 'song' in cmd:
            self.talk("Which song do you want me to play ?")
            cmd.clear()
            cmd_ = self.take_command()
            song = ' '.join(cmd_)
            self.talk('playing ' + song)
            pywhatkit.playonyt(song)
        if 'time' in cmd:
            time = datetime.datetime.now().strftime('%I:%M %p')
            self.talk('Current time is ' + time)
        elif 'joke' in cmd:
            joke = tell_jokes.Tell_Jokes().fetch_joke()
            print(joke)
            self.talk(joke)
        elif 'weather' in cmd:
            self.talk("Which Location ?")
            location_is = self.take_command()
            print(location_is)
            weather = fetchWeather.fetchWeather(location_is).getWeather()
            self.talk(f"temperature is {weather} degree celsius")
        elif 'search' in cmd and 'web' in cmd:
            self.talk("What do you want to search ?")
            _search_query = self.take_command()
            print(_search_query)
            web_search.google_search(_search_query).search()
            if 'close' in cmd:
                web_search.google_search.close()
        elif 'qr' in cmd:
            self.talk("What message to store ?")
            msg = input("Enter The Message: \n")
            img = qrcode.make(msg)
            self.talk("With what name should I save it ?")
            qrcode_name = input("Enter the name to give: ")
            img.save(f"C:/Users/bhave/OneDrive/Desktop/test-modi/generated_QR/{qrcode_name}.png")
            self.talk("Saved in the generated_QR code folder!")
        elif 'open' in cmd:
            self.talk("Which app do you want to open ?")
            self.app_to_open = self.app_to_close = input("Enter the app name: ")
            try:
                open(self.app_to_open)
                self.talk(f"Opening {self.app_to_open}")
            except:
                self.talk("Sorry! there was some problem!")
        elif 'close' in cmd:
            self.talk(f"Closing {self.app_to_open}")
            close(self.app_to_open)
        elif 'generate' in cmd and 'password' in cmd:
            self.talk("Generating Password!")
            password_generator.generate_password()
        elif 'get' in cmd and 'password' in cmd:
            password_generator.getPassword()
        elif 'search' in cmd and 'file' in cmd:
            search_files.searchFile()
        elif 'goodbye' in cmd or 'goodbye' in self.t_command:
            self.talk("See you soon!")
            self.isRunning = False
        else:
            self.talk("Sorry! Could not get you!")

Coco()
