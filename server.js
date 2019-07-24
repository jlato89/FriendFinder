var express = require('express');
// var serve = require('express-static')
var path = require('path');

// Tells node that we are creating an "express" server
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, '/app/public')));

// Router
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//Listener
app.listen(PORT, function() {
   console.log('App listening on PORT: ' + PORT);
});