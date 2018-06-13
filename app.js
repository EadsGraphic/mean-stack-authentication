const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
const db = require('./config/database');
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect(db.mongoURI, {
        useMongoClient: true
    })
    .then(() => console.log('Successfully connected to MongoDB...'))
    .catch(err => console.log(err));

const app = express();
const users = require('./routes/users');
// Port Number
const port = process.env.port || 8080;

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

// Catch All Endpoint
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Listen Function
app.listen(port, function() {
  console.log('Server started on port ' + port);
});
