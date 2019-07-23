var express = require('express');
// var path = require('path');

// Tells node that we are creating an "express" server
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
require('./app/routing/apiRoutes');
require('./app/routing/htmlRoutes');

//Listener
app.listen(PORT, function() {
   console.log('App listening on PORT: ' + PORT);
});