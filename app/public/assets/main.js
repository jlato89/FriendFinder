$('#submit').on('click', function(event) {
   event.preventDefault();

   var questionEmpty =
      $('[name="score"]').filter(function() {
         return $.trim(this.value).length === 0;
      }).length > 0;

   var inputEmpty =
      $(':input').filter(function() {
         return $.trim(this.value).length === 0;
      }).length > 0;

   if (questionEmpty || inputEmpty) {
      console.log('Please fill out all questions.');
   } else {
      var scores = $('[name="score"]')
         .map(function() {
            return $(this).val();
         })
         .get();

      // console.log('scoreRaw: ' + scoreRaw);
      // var scores = scoreRaw.map(Number);

      // Here we grab the form elements
      var newFriend = {
         name: $('#survey-name')
            .val()
            .trim(),
         photo: $('#survey-photo')
            .val()
            .trim(),
         scores: scores
      };

      console.log(newFriend);

      // $.post('/api/friends', newFriend);
   }
});
