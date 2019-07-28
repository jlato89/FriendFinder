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

   // console.log(newFriend);

   // post array to apiRoutes and wait for callback
   $.post('/api/friends', newFriend, function(data) {
      // console.log(data);

      if (data) {
         var name = data.name;
         var photo = data.photo;

         var resultName = $('<h1>');
         resultName.addClass('result-name');
         resultName.text(name);

         var resultImage = $('<img>');
         resultImage.addClass('result-image');
         resultImage.attr('src', photo);

         $('.error').empty();
         $('.error').append(resultName, resultImage);
         $('.modal').show();
      }
   }).fail(function(err) {

      var formError = $('<h1>');
      formError.text(err.responseText);

      $('.error').html(formError);
      $('.modal').show();
   });
});

// Close popup modal
$('.close').on('click', function() {
   $('#myModal').hide();
})

// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = 'none';
   }
};

//! COULDNT GET THE BELOW CODE TO WORK, SO WENT WITH PLAIN JS ABOVE
// $(window).on('click', function(event) {
//    var target = $('#myModal')
//    if (target.hasId('myModal')) {
//       console.log('recieved click');
//       $('#myModal').hide
//    }
// })
