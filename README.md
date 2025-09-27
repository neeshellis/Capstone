# Capstone - Visitor Accommodaton Application
Capstone BackEnd development.

GIT
I created a new Repository in GitHub called Capstone.  I then created two seperate branches named FrontEnd and BackEnd.  I used the BackEnd branch to then develop this Backend application for myCapstone Project.

I created a full MVC BackEnd application in Visual Code. I had the following dependancies - axios, dotenv, express, mysql2, sequelize in my package.json file.  I created a file dbConnect.js. in my application so I could connect to a database.  

I then created a new Capstone SQL database in my Mac Terminal. Returning to Visual Code I activated the SQL server which I had previously connected to MySQL WorkBench GUI, there I could see my new database called myCapstone in the MySQL Workbench window.

I used WorkBench as my GUI to show the database stucture with 6 models - User, Accommodation, Booking, Review, Activies and Contact which I had created first in Visual Code.  Initally to test the application I used ThunderClient to carry out the CRUD functions for each model.  Once working correctly, I created a JSON dataset using a LLM, and an InitialController in the controllers folder to link the JSON data through to my database. 

To run this data and populate the myCapstone database, I had to ensure the Sql server was running in the VC terminal using the command json-server data.json, then started up the node package manager with the command run npm start.

Throughout this process I committed regularly to GitHub referencing the stages each time.

<!-- Next step was to use the physical structure of my Capstone application to create 6 x models, 6 x controllers and 6 x routes (all in their respective folders) and an Initial Controller to manage the data sets to be captured eventually through my FrontEnd. -->



<!-- My goal is to create three further models, namely Review, Activities and Contact if time allows -->



<!-- The project is running on the main branch in GitHub. -->


<!-- The database I am using is SQL and the GUI is MySQL WorkBench. Initially I created a new Reviews database in my Mac terminal having initially connected to my SQL server. -->



In Visual Code I then created each table in individual files under the models folder.  I repeated this with a componant for each table, and a routes files for each model with the CRUD commands. The server.js file when activated links the newly created Database to the Routes for each Model.

The database comprises of three model tables - Users, Bookings, Reviews.
The object of the database is to hold information for users utilizing an accommodation website.  The application provides three choices of accommodation to book and a reviews page where customers can leave their feedback having completed their stay.

The Users table contains the guests personal details. This table does not have a Foreign Key.
The Bookings table contains a Foreign Key linking back to the Users table through userID, the guests name, the accommodation of their choice and the datein, dateout and number of nights for their stay.
The final table Reviews contains feedback from the guests.  This has two foreign keys - one to the Users table and one to the Bookings Table, along with a review and a rating field.

The website has a login/sign up button for those who would like to book accommodation through the site.  Users can access this on the NavBar, or when they place a booking for one of the three accommodation offerings, the Book button will open up the Login/Signup window first to capture their username/password and their personal details for the User table.  Once this is complete the user will return to the bookings page.  Here the user can select their accommodation choice and the dates of their stay. This will populate the Bookings Table.

The reviews page is where previously registered users can log back in and leave a review. This Review table links to both the booking and user table through a foreign key.


