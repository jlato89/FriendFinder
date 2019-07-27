var friends = require('../data/friends');

module.exports = app => {
   app.get('/api/friends', (req, res) => {
      res.json(friends);
   });

   app.post('/api/friends', (req, res) => {
      var newFriend = {
         name: req.body.name,
         photo: req.body.photo,
         scores: req.body.scores.map(Number)
      };

      if (!newFriend.name || !newFriend.photo || newFriend.scores.length < 10) {
         return res.status(400).send('Please fill out entire form');
      }

      var bestFriend = friendFinder(newFriend, friends);

      friends.push(newFriend);
      res.json(friends[bestFriend]);
   });
};

//* FUNCTIONS
function friendFinder(newFriend, friends, bestFriend) {
   // Find difference between scores and output them to an array
   var poolDifArray = [];

   for (let i = 0; i < friends.length; i++) {
      var userScoreArray = newFriend.scores;
      var poolScoreArray = friends[i].scores;
      var poolDif = 0;

      for (let i = 0; i < 10; i++) {
         var userScore = userScoreArray[i];
         var poolScore = poolScoreArray[i];
         var diff = Math.abs(userScore - poolScore);
         poolDif += diff;
      }
      poolDifArray.push(poolDif);
   }

   // Determine who is the best match
   var bestFriend = poolDifArray.reduce(
      (iMin, x, i, arr) => (x < arr[iMin] ? i : iMin),
      0
   );

   return bestFriend;
}
