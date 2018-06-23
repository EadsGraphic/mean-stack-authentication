// *******************************
//       Express.js Imports
// *******************************

const express = require('express');
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To MongoDB
// Database Config File (Switch to Dev or Prod)
const db = require('./config/database');
mongoose.Promise = global.Promise;

// Connect to MongooseODM to MongoDB
mongoose.connect(db.database, {
        useMongoClient: true
    })
    .then(() => console.log('Successfully Connected'))
    .catch(err => console.log(err));


// Initializes Express.js
const app = express();
app.use(helmet());

// Users Routes Module
const users = require('./routes/users');

// Port Number
const port = process.env.PORT || '3000';

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser Middleware
app.use(bodyParser.json());

// Passport.js Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.use('/users', users);

// Index Router
app.get('/', function(req, res) {
    res.send('Invalid endpoint');
});

// Catch All Endpoint
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Listen Function
app.listen(port, function() {
    console.log('Server started on port ' + port);
});
