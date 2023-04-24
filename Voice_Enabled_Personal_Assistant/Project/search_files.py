import os

def searchFile():
    rootDir = ""
    whichDir = input("Which directory do you want to search in? (1 - root, 2 - user, 3 - home) ")
    if whichDir == "1":
        rootDir = "C:\\"
    elif whichDir == "2":
        rootDir = "C:\\Users\\bhave\\"
    elif whichDir == "3":
        rootDir = "C:\\Users\\bhave\\OneDrive\\"
    fileToSearch = input("Which file do you want to search for? ")

    continueSearch = ""

    print("searching for file...")
    for dirName, subdirList, fileList in os.walk(rootDir):
        for fname in fileList:
            if fname == fileToSearch:
                print("file found!")
                print("path: " + os.path.join(dirName, fname))
                # append the path to a text file in new line
                with open("paths.txt", "a") as f:
                    f.write(f"\n {os.path.join(dirName, fname)}")
                continueSearch = input("Do you want to continue searching? (y/n) ")
                if continueSearch == "n":
                    break
        if continueSearch == "n":
            break