# PetTracker

This was my attempt at creating a pet tracking web app as fast as possible. 

I wanted to challenge myself to see how fast I could create this funky little idea.

In total, both the front end (Angular 9, Bootstrap) and the back end (Node, Express, MongoDB/Mongoose, REST APIs) took a total of 2 hours, 10 minutes and 3 seconds to complete.

There is almost no validation on front end or back end except 'required' for all fields and a basic type restriction (i.e age must be a number, name must be a string). 

## Development server

Run `npm start` for a dev server. 

You will need to create a .env file to connected to a MongoDB, using Mongoose.

My .env file simply contained: DB_CONNECTION=mongodb+srv://MYUSERNAME:MYPASSWORD@MYDBNAME.ejvnp.mongodb.net/MYDBNAME?retryWrites=true&w=majority

Replace 'MYUSERNAME', 'MYPASSWORD', and 'MYDBNAME' with the relevant details from MongoDB.

You should get 'connected to db' in the console if the project runs successfully and is connected to the DB.

Dev server located on port 3000.
