# DevRev | Air

## Aim
DevRev-Air is an airline management web application consisting of flight & seat availability details, managing flight schedules, fare tariffs, and passenger reservation details. The airline service inventory divides into three classes (economy, premium, and business) each with up to 20 seat bookings along with prices and availability details. Users can not only sort flights based on different parameters like price, travel duration, etc but also can book and pay for tickets with their credit/debit cards, and can cancel flights too.

## Features of the Website

* Authentication:
  * Sign up for the website by the user.
  * User login with email and password.

* Authorization:
  * A user can only book and cancel tickets after logged in successfully.

* Ticket Booking functionalities:
  * Search for tickets with necessary parameters.
  * Filter the search for flights by alphabetical order, price, or duration.
  * Book and purchase tickets using credit cards or debit cards.

* Responsive website.
* Model-View-Controller architecture.


## Languages and Frameworks Used
```
- EJS
- CSS3
- Javascript
- NodeJS
- ExpressJS
- MongoDB
- Bootstrap
```
## High-Level Design

![System-Design](https://user-images.githubusercontent.com/60184336/213012912-082dad38-bd89-413c-898d-81cc3b746293.png)

## Database Schemas

<img width="471" alt="DB-schema" src="https://user-images.githubusercontent.com/60184336/213012971-20b9616e-6284-4c53-94bf-d0c6e6cef01f.PNG">

## Screenshots of the Website
### 1. Sign-up Page
![Sign-Up](https://user-images.githubusercontent.com/60184336/211133935-af800571-8917-49e1-8dad-5bd6345e38ca.png)

### 2. Login Page
![LogIn](https://user-images.githubusercontent.com/60184336/211133941-d10f72c5-6c5a-423b-9ca9-f428f56ce192.png)

### 3. Search for Flights with necessary parameters 
![Search Flight](https://user-images.githubusercontent.com/60184336/211133948-e89cabf6-d9ea-4f77-bc54-01bfdb4e9650.png)

### 4. All flight details according to From destination and To destination
<img width="960" alt="All Flight Details" src="https://user-images.githubusercontent.com/60184336/211133957-d9ccc54b-934a-4536-a3d2-f4d62142fae1.png">

### 5. Itinerary of the trip
![Review](https://user-images.githubusercontent.com/60184336/211133966-4225f2e2-6444-4856-a66d-7cbe1155c15c.png)

### 6. Additional information of the user and Payment details
![info_pay](https://user-images.githubusercontent.com/60184336/213096581-e4bd1b47-caea-454d-84ee-fc76fec2772f.png)

### 7. Successfully booked the flight and display all the bookings of the user
![booking](https://user-images.githubusercontent.com/60184336/213014035-a6167c91-44fc-4e9f-999b-19e40d3d6171.png)

### 8. Boarding Pass of the user for the flight
![Boarding pass](https://user-images.githubusercontent.com/60184336/211133983-5314084d-5f12-4bba-9b86-9a3bc72adb7d.png)

### 9. Cancel the flight ticket
![Cancel Tickets](https://user-images.githubusercontent.com/60184336/211133994-2bb2e10c-1147-4bb2-8dde-1a2cd4ccc181.png)

### 10. User logged out successfully
![logout](https://user-images.githubusercontent.com/60184336/213014478-559054ce-0def-49e6-b284-6006c2ea0121.png)


## Steps for Installation & Setup  
### 1. NodeJS Installation & Setup  
  - Download and Install NodeJS in your system.
  - Use this [link](https://nodejs.org/en/download/) to download the NodeJS Installer.
  - You can also watch the [video](https://www.youtube.com/watch?v=__7eOCxJyow) to download the NodeJS Installer step-by-step.
  - After successfully installing NodeJS Installer open Command Prompt.
  - Check if NodeJS is installed successfully in your system or not by typing the command in the Command Prompt:
   ```
   node -v   
   ```
   <img width="301" alt="Capture1" src="https://user-images.githubusercontent.com/60184336/211131035-bd02469d-9682-481b-97c4-ce867f85808d.PNG">
   
  - If you get to see the NodeJS version, the download is successful otherwise not. Please try again!
  
  ### 2. MongoDB Setup
  - Create an account in [MongoDB Atlas](https://www.mongodb.com/).
  - Select an Organization and click on New Project.      
  - Give a Project name and create project.   
  - Click on Build a Database.
  - Select Free Shared Cluster, select AWS cloud provider and select the nearest location and click on Create Cluster.
  - Set a username and password and click on the create user button.
  - Go to Database Access to check Database users.
  - Go to Network Access and select ALLOW ACCESS FROM ANYWHERE and click confirm.
  - Go to the Database and click on the connect button.
  - Select Connect your application.
  - Copy the DATABASE-CONNECTION-STRING for future use.
  
    <img width="475" alt="Capture" src="https://user-images.githubusercontent.com/60184336/211132190-a3b70553-7c55-4f0b-8b34-1c45595081e1.PNG">
  
  ### 3. Project Installation & Setup  
   - Clone or Download this repository.
   ```
   git clone https://github.com/arijit69-web/DevRev-Air.git
   ```
   - Open Command Prompt and change the folder to DevRev AirLine Management System
   - After changing the directory write a command to install node_modules and dependencies.
   ```
   npm install
   ```
   - After installing all the dependencies create a file 'config.env' and inside that file add the following :
   ```
   MONGO_URI = < DATABASE-CONNECTION-STRING >
   ```
   - Run the project 
   ```
   node app.js
   ```
   <img width="470" alt="RunProject" src="https://user-images.githubusercontent.com/60184336/211133008-ed2d76ef-766c-40b3-8674-2e6619af8aa5.PNG">
   
   - Once everything has been downloaded and installed successfully, a message will appear :
   ```diff
   + Server live @ PORT 80
   + Database Connected
   ```
   - Open any browser Google Chrome or Microsoft Edge and search the URL : http://localhost/

 







