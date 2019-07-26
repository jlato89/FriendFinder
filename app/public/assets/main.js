$('#submit').on('click', function(event) {
   event.preventDefault();

      var scores = $('[name="score"]')
         .map(function() {
            return $(this).val();
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

      $.post('/api/friends', newFriend, function(data) {
         if (!data) {
            alert('Please fill out the entire form'); //! change this to a modal msg
         }
      });
});