import datetime
import speech_recognition as sr
import pyautogui
import webbrowser as wb
import wikipedia
import pywhatkit
import AppKit
import requests
import clipboard
import pyjokes
import string
import random
import time as tt



def speak(text, speed=200, voice="com.apple.speech.synthesis.voice.Karen"):
    speech = AppKit.NSSpeechSynthesizer.alloc().init()
    speech.setVoice_(voice)
    speech.setRate_(speed)
    speech.startSpeakingString_(text)
    while speech.isSpeaking():
        continue

def screenshot():
    name_img = tt.time()
    name_img = 'C:\\Users\\khush\\OneDrive\\Desktop\\aira_2\\Exalt\\screenshots\\{name_img}.png'
    img = pyautogui.screenshot(name_img)
    img.show()

def time():
    current_time = datetime.datetime.now().strftime("%I:%M %p")
    speak("The current time is", speed=150)
    pyautogui.sleep(2)
    speak(current_time, speed=150)



def date():
    year = int(datetime.datetime.now().year)
    month = int(datetime.datetime.now().month)
    date = int(datetime.datetime.now().day)
    current_time = datetime.datetime.now().strftime("%I:%M %p")
    month_name = datetime.date(1900, month, 1).strftime('%B')
    speak("Today is {} {} {}, and the current time is {}".format(date, month_name, year, current_time))

def passwordgen():
    s1 = string.ascii_uppercase
    s2 = string.ascii_lowercase
    s3 = string.digits
    s4 = string.punctuation

    passlen = 8
    s = []
    s.extend(list(s1))
    s.extend(list(s2))
    s.extend(list(s3))
    s.extend(list(s4))

    random.shuffle(s)
    newpass = ("".join(s[0:passlen]))
    print(newpass)
    speak(newpass)


def wishme():
    voice = "com.apple.speech.synthesis.voice.Karen"
    speak("My name is Aira . please tell me how may i help you", voice=voice)
    pyautogui.sleep(2)
    
    hour = datetime.datetime.now().hour
    if hour >= 6 and hour <12:
        speak("Good Morning ma'am!", voice=voice)
    elif hour >=12 and hour <18:
        speak("Good afternoon ma'am!", voice=voice)
    elif hour >=18 and hour <24:
        speak("Good Evening ma'am!", voice=voice)
    else:
       speak("Aira at your service, please tell me how can I help you?", voice=voice)
       


def takeCommandMIC():
    r= sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening....")
        r.pause_threshold = 1
        try:
            audio = r.listen(source, timeout=5, phrase_time_limit=5)
        except sr.WaitTimeoutError:
            speak("Sorry, I didn't hear anything. Please try again.")
            return "None"
        try:
            print("Recognizing...")
            query = r.recognize_google(audio, language="en-IN")
            print("user said:" +query)
        except sr.UnknownValueError:
            speak("Sorry, I couldn't understand what you said. Please try again.")
            return "None"
        except sr.RequestError:
            speak("Sorry, there was an error in the speech recognition service. Please try again later.")
            return "None"
    return query.lower()



def sendwhatsmsg(phone_no, message):
    try:
        url = f"https://web.whatsapp.com/send?phone={phone_no}&text={message}"
        chrome_path = "open -a /Applications/Google\ Chrome.app %s"
        wb.get(chrome_path).open(url)
        pyautogui.sleep(10)
        pyautogui.press('enter')
        speak("Message has been sent.")
    except Exception as e:
        print(e)
        speak("Unable to send the message.")


def searchgoogle():
    speak('What should I search for?')
    search = takeCommandMIC()
    if search != "None":
        wb.open(f'https://www.google.com//search?q={search}')


def anysearch():
    speak('You are on the way please say in detail again?')
    search = takeCommandMIC()
    if search != "None":
        wb.open(f'https://www.google.com//search?q={search}')


def text2speech():
    text = clipboard.paste()
    print(text)
    speak(text)


if __name__ == "__main__":
    wishme()
    while True:
        query = takeCommandMIC().lower()

        if 'time' in query:
            time()

        elif 'date' in query:
            date()

        elif 'message' in query:
            user_name = {
               'computer':'+91 9665596851'
            }
            try:
               speak("to whom you want to send the message? ")
               name = takeCommandMIC()
               phone_no = user_name[name]
               speak("what is the message?")
               Message = takeCommandMIC()
               sendwhatsmsg(phone_no, Message)
               speak("message has been send")
            except Exception as e:
               print(e)
               speak("unable to send the Message")
               

        elif 'wikipedia' in query:
            speak('Searching Wikipedia...')
            query = query.replace("wikipedia", "")
            results = wikipedia.summary(query, sentences=2)
            speak("According to Wikipedia")
            print(results)
            speak(results)
            
            
        elif 'open google' in query:
            searchgoogle()


        elif 'open youtube' in query:
            speak("What should I search on youtube")
            topic = takeCommandMIC()
            pywhatkit.playonyt(topic)


        
        elif 'weather' in query:
            city = 'Thane'
            url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid=382962ca87c1d84b2159fe2425532d8f'
            
            res = requests.get(url)
            data = res.json()

            weather = data['weather'][0]['main']
            temp = data['main']['temp']
            desp = data['weather'][0]['description']
            temp = round((temp - 32) *5/9)
            print(weather)
            print(temp)
            print(desp)
            speak(f'weather in {city} is like')
            speak('Temperature : {} degree celcius'. format(temp))
            speak('weather is {}'.format(desp))


        elif 'joke' in query:
            speak(pyjokes.get_joke())

        elif 'read' in query:
            text2speech()

        elif 'password' in query:
            passwordgen()

        elif 'screenshot' in query:
            screenshot()
        
        elif 'remember that' in query:
            speak("what should i remember?")
            data = takeCommandMIC()
            speak("you told me to remember that"+data)
            remember = open('data.txt','w')
            remember.write(data)
            remember.close()
        
        elif 'do you remember anything' in query:
            remember = open('data.txt', 'r')
            speak("you told me to remember that"+remember.read())
        elif 'name' in query:
            speak("My name is Aira . i am build by AI using python and arduino")
        
        elif 'for me' in query:
            speak("I can perform more than 50 task, which will defenetely help you in your day to day life ")

        elif 'age' in query:
            speak("my age is 19 and i am studying in python school")

        elif 'stay' in query:
            speak("I stay in thane")

        

        


#question based on what, where, how, when......




        elif 'what' in query:
            anysearch()

        elif 'where' in query:
            anysearch()

        elif 'when' in query:
            anysearch()

        elif 'how' in query:
            anysearch()

        elif 'which' in query:
            anysearch()

        elif 'why' in query:
            anysearch()

        elif 'who' in query:
            anysearch()

        elif 'is' in query:
            anysearch()

        elif 'the' in query:
            anysearch()

        elif 'say' in query:
            anysearch()

        elif 'in' in query:
            anysearch()

        elif 'details' in query:
            anysearch()

        elif 'do' in query:
            anysearch()

        elif 'you' in query:
            anysearch()

        elif 'offline' in query:
            quit()