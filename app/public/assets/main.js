$('#submit').on('click', function(event) {
   event.preventDefault();

   var scoreRaw = $('[name="score"]')
      .map(function() {
         return parseInt($(this).val());
      })
      .get();

      console.log('scoreRaw: '+ scoreRaw);
   var scores = scoreRaw.map(Number);

   // Here we grab the form elements
   var newFriend = {
   name: $('#survey-name').val().trim(),
   photo: $('#survey-photo').val().trim(),
   scores: scores
   };

   console.log(newFriend);
});

// $.post('/api/friends', newFriend);