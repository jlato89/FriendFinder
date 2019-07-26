var friends = require('../data/friends');


module.exports = function(app) {

   app.get('/api/friends', function(req, res) {
      res.json(friends);
   });

   app.post('/api/friends', function(req, res) {
      var scores = req.body.scores.map(Number);

      // Check to see if all questions were answered
      var scoresNull = scores.some(function(val) {
         return val === null;
      });
      console.log('scores: '+ scores);
      console.log('scoreNull: '+scoresNull);
      
      if (!req.body.name || !req.body.photo  || scoresNull) {
         return res.status(400).json({ msg: 'Please fill out entire form'});
         // res.json(false); //! unable to send false so main.js can run callback code. Need to find out why.
      } else {
         var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: scores
         }
         
         friends.push(newFriend);
         res.json(friends);
      }
   });
};