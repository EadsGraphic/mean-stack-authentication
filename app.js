const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function() {
  console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', function(err) {
  console.log('Database Error ' + err);
});

const app = express();
const users = require('./routes/users');
// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.use('/users', users);

// Index Router
app.get('/', function(req, res) {
  res.send('Invalid endpoint');
});

// Listen Function
app.listen(port, function() {
  console.log('Server started on port ' + port);
});
