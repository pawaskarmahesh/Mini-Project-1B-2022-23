import random
import sqlite3
import pyperclip

all_chars_numbers = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+"

def generate_password():
    length = int(input("How long do you want your password to be? "))
    special_chars = input("Do you want special characters? (y/n) ")
    numbers = input("Do you want numbers? (y/n) ")
    uppercase = input("Do you want uppercase letters? (y/n) ")
    lowercase = input("Do you want lowercase letters? (y/n) ")
    chars = ""
    if special_chars == "y":
        chars += "!@#$%^&*()_+"
    if numbers == "y":
        chars += "1234567890"
    if uppercase == "y":
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if lowercase == "y":
        chars += "abcdefghijklmnopqrstuvwxyz"
    if chars == "":
        chars = all_chars_numbers
    password = ""
    for i in range(length):
        password += random.choice(chars)
    print(password)
    copy = input("Do you want to copy the password to clipboard? (y/n) ")
    if copy == "y":
        pyperclip.copy(password)
        print("Password copied to clipboard.")
    store = input("Do you want to store the password in database? (y/n) ")
    if store == "y":
        name = input("Under what name do you want to store the password? ")
        store_password(password, name)

def store_password(password, name):
    conn = sqlite3.connect("passwords.db")
    c = conn.cursor()
    c.execute("""CREATE TABLE IF NOT EXISTS passwords (
        for text,
        password text
    )""")
    c.execute("INSERT INTO passwords VALUES (?, ?)", (name, password))
    conn.commit()
    conn.close()

def delete_last_password():
    conn = sqlite3.connect("passwords.db")
    c = conn.cursor()
    c.execute("DELETE FROM passwords WHERE rowid = (SELECT MAX(rowid) FROM passwords)")
    conn.commit()
    conn.close()

def getPassword():
    name = input("Which password do you want to retrieve? ")
    conn = sqlite3.connect("passwords.db")
    c = conn.cursor()
    c.execute("SELECT password FROM passwords WHERE for = ?", (name,))
    if c.fetchone() == None:
        print("Password doesn't exist.")
        return
    else:
        c.execute("SELECT password FROM passwords WHERE for = ?", (name,))
        password = c.fetchone()[0]
        pyperclip.copy(password)
        print("Password copied to clipboard.")
