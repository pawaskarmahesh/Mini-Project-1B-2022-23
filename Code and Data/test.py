import cv2  # Webcam
from cvzone.HandTrackingModule import HandDetector  # Hand Detection
from cvzone.ClassificationModule import Classifier  # Importing Classifier


import numpy as np
import math

# INITIALIZING THE WEBCAM
# Capture object:
cap = cv2.VideoCapture(0)  # 0 is the id number for webcam
detector = HandDetector(maxHands=1)  # number of hands to be detected
classifier = Classifier("Model/keras_model.h5", "Model/labels.txt")

offset = 10  # The value for spacing for exactly cropping the image
imgSize = 300  # The fixed size of the image


labels = ["0", "1", "2", "3", "4", "5",
          "6", "7", "8", "9", "A", "B",
          "C", "D", "E", "F", "G", "H",
          "I", "J", "K", "L", "M", "N",
          "O", "P", "Q", "R", "S", "T",
          "U", "V", "W", "X", "Y", "Z"]

while True:
    success, img = cap.read()
    imgOutput = img.copy()
    hands, img = detector.findHands(img)
    if hands:
        hand = hands[0]  # Only one hand
        x, y, w, h = hand['bbox']  # Bounding box: x, y, width and height

        # Creating a background image:
        imgWhite = np.ones((imgSize, imgSize, 3),
                           np.uint8) * 255  # Creating an image of size 300x300 by entering the datatype
        # unsigned integers of 8 bit becoz the image will of 0 to 255

        # Image Crop:
        imgCrop = img[y - offset:y + h + offset, x - offset:x + w + offset]

        # Putting the cropped image into the white background:
        imgCropShape = imgCrop.shape

        aspectRatio = h / w
        # Adjusting the width of the image, so it can be in centre
        if aspectRatio > 1:
            k = imgSize / h
            wCal = math.ceil(k * w)
            imgResize = cv2.resize(imgCrop, (wCal, imgSize))
            imgResizeShape = imgResize.shape
            wGap = math.ceil((imgSize - wCal) / 2)
            imgWhite[:, wGap:wCal + wGap] = imgResize
            prediction, index = classifier.getPrediction(imgWhite, draw=False)
            print(prediction, index)

        # Adjusting the height of the image, so it can be in centre
        else:
            k = imgSize / w
            hCal = math.ceil(k * h)
            imgResize = cv2.resize(imgCrop, (imgSize, hCal))
            imgResizeShape = imgResize.shape
            hGap = math.ceil((imgSize - hCal) / 2)
            imgWhite[hGap:hCal + hGap, :] = imgResize
            prediction, index = classifier.getPrediction(imgWhite, draw=False)
            print(prediction, index)

        cv2.rectangle(imgOutput, (x-offset, y-offset-50), (x-offset+90, y-offset-50+50), (255, 0, 255), cv2.FILLED)
        cv2.putText(imgOutput, labels[index], (x, y-20), cv2.FONT_HERSHEY_COMPLEX, 1.7, (255, 255, 255), 2)
        cv2.rectangle(imgOutput, (x-offset, y-offset), (x+w+offset, y+h+offset), (255, 0, 255), 4)

        cv2.imshow("Image Crop", imgCrop)
        cv2.imshow("Image White", imgWhite)

    cv2.imshow("Image", imgOutput)
    cv2.waitKey(1)

