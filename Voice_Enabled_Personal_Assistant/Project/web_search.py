from selenium import webdriver

class google_search:
    def __init__(self, search_query):
        self.search_query = search_query
        self.driver_path = "C:/Users/bhave/Downloads/chromedriver_win32/chromedriver.exe"
        self.driver = webdriver.Chrome(self.driver_path)

    def search(self):
        self.driver.get("https://www.google.com")
        search_box = self.driver.find_element(by="name", value="q")
        search_box.send_keys(self.search_query)
        search_box.submit()
    
    def close(self):
        self.driver.close()