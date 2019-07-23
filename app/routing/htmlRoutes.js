var path = require('path');

module.exports = function(app) {

   // Survey redirect
   app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname, '../public/survey.html'));
   });

   // Catch all that redirects to the Home Page
   app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../public/home.html'));
   });
}