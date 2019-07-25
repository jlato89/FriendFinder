$('#submit').on('click', function(event) {
   event.preventDefault();

   // User validation check for missing fields
   var nameEmpty =
      $('#survey-name').filter(function() {
         return $.trim(this.value).length === 0;
      }).length > 0;

   var photoEmpty =
      $('#survey-photo').filter(function() {
         return $.trim(this.value).length === 0;
      }).length > 0;

   var questionEmpty =
      $('[name="score"]').filter(function() {
         return $.trim(this.value).length === 0;
      }).length > 0;   
   

      console.log('name: '+ nameEmpty);
      console.log('photo: '+ photoEmpty);
      console.log('questions: '+ questionEmpty);
      
   if (nameEmpty || photoEmpty || questionEmpty) {
      console.log('Please fill out all questions.');
   } else {
      var scores = $('[name="score"]')
         .map(function() {
            return parseInt($(this).val());
         })
         .get();

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

      $.post('/api/friends', newFriend);
   }
});
