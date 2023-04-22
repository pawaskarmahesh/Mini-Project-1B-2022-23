import cv2  # Webcam
from cvzone.HandTrackingModule import HandDetector  # Hand Detection
import numpy as np
import math
import time

# INITIALIZING THE WEBCAM
# Capture object:
cap = cv2.VideoCapture(0)  # 0 is the id number for webcam
detector = HandDetector(maxHands=1)  # number of hands to be detected
offset = 10  # The value for spacing for exactly cropping the image
imgSize = 300  # The fixed size of the image

folder = "Data/9"  # Folder path to in which images will be saved
counter = 0  # Variable to count no. of images saved

while True:
    success, img = cap.read()
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

        # Adjusting the height of the image, so it can be in centre
        else:
            k = imgSize / w
            hCal = math.ceil(k * h)
            imgResize = cv2.resize(imgCrop, (imgSize, hCal))
            imgResizeShape = imgResize.shape
            hGap = math.ceil((imgSize - hCal) / 2)
            imgWhite[hGap:hCal + hGap, :] = imgResize

        cv2.imshow("Image Crop", imgCrop)
        cv2.imshow("Image White", imgWhite)

    cv2.imshow("Image", img)
    key = cv2.waitKey(1)
    # The images will be saved only after pressing the 's' key
    if key == ord("s"):
        counter += 1
        # Naming format of each image
        cv2.imwrite(f"{folder}/Image_{counter}_{time.time()}.jpg", imgWhite)
        print(counter)  # Print no. of images saved
