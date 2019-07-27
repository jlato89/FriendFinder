var friends = require('../data/friends');

module.exports = app => {
   app.get('/api/friends', (req, res) => {
      res.json(friends);
   });

   app.post('/api/friends', (req, res) => {
      var scores = req.body.scores.map(Number);
      var newFriend = {
         name: req.body.name,
         photo: req.body.photo,
         scores: scores
      };

      if (!newFriend.name || !newFriend.photo || newFriend.scores.length < 10) {
         return res.status(400).send('Please fill out entire form');
      }   

      var bestFriend = friendFinder(newFriend, friends);

      // console.log('bestFriend: ' + bestFriend);
      friends.push(newFriend);
      res.json(friends[bestFriend]);
      // res.json(true)
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
      // console.log('userScore: ' + userScoreArray);
      // console.log('poolScore: ' + poolScoreArray);

      for (let i = 0; i < 10; i++) {
         var userScore = userScoreArray[i];
         var poolScore = poolScoreArray[i];
         var diff = Math.abs(userScore - poolScore);
         poolDif += diff;
         // console.log('Diff: '+diff);
      }
      poolDifArray.push(poolDif);
      // console.log('poolDif: ' + poolDif);
      // console.log('----------');
   }
   // console.log('poolDifArray: ' + poolDifArray);

   // Determine who is the best match
   var bestFriend = poolDifArray.reduce(
      (iMin, x, i, arr) => (x < arr[iMin] ? i : iMin),
      0
   );

   // console.log('bestFriend: ' + bestFriend);
   return bestFriend;
}
