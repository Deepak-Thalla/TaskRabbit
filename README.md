# Flash Card Screen
## Introduction
This is a Flash cards app created using react, express and MongoDb
## Key Features
Users can
- Create a flash card
- Can view all the flash cards
## Technologies used
This project was created using the following technologies.
#### Frontend
+ React Js
+ React-router-dom
+ Axios (for making api calls)
+ Bootstrap & CSS Module (for User Interface)
#### Backend
+ Express
+ Node Js
#### Database
+ MongoDb
## Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.


Please follow [This tutorial](https://www.youtube.com/watch?v=oC6sKlhz0OE) to install mongodb and [Create a Database].
``
$ Now enter mongosh in command prompt in windows.
$ use cardsdb; (to create database).
$ db.createCollection("cardsCollection"); [to create collection in the database].
``

+ Open the project in your prefered code editor.
+ Go to terminal -> New terminal (If you are using VS code)
+ Split your terminal into two (run the client on one terminal and the server on the other terminal)
In the first terminal


``
$ npm install (to install client-side dependencies)
$ nodemon server2 (to start the server)
``


In the second terminal
``
$ npm run build (to connect the react bundles to the server)
``

 #### goto the Browser and type the url 
``
$http://localhost:3500/
``
