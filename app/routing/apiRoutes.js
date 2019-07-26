var friends = require('../data/friends');

module.exports = app => {
   app.get('/api/friends', (req, res) => {
      res.json(friends);
   });

   app.post('/api/friends', (req, res) => {
      var scores = req.body.scores.map(Number);

      if (!req.body.name || !req.body.photo || scores.length < 10) {
         return res.status(400).json({ msg: 'Please fill out entire form' });
         // res.json(false); //! unable to send false so main.js can run callback code. Need to find out why.
      }

      var newFriend = {
         name: req.body.name,
         photo: req.body.photo,
         scores: scores
      };

      friends.push(newFriend);
      res.json(friends);
   });
};
