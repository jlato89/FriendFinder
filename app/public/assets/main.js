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

   // post array to apiRoutes and wait for callback
   $.post('/api/friends', newFriend, function(data) {
      console.log(data);

      if (data) {
         var name = data.name;
         var photo = data.photo;

         var closeBtn = $('<span>');
         closeBtn.addClass('close');
         closeBtn.html('&times;');

         var resultName = $('<h1>');
         resultName.addClass('result-name');
         resultName.text(name);

         var resultImage = $('<img>');
         resultImage.addClass('result-image');
         resultImage.attr('src', photo);

         $('.error').empty();
         $('.error').append(closeBtn, resultName, resultImage);
         $('.modal').show();
      }
      //! Clear answers when done testing
   }).fail(function(err) {

      var closeBtn = $('<span>');
      closeBtn.addClass('close');
      closeBtn.html('&times;');

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
// var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName('close')[0];

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//    if (event.target == modal) {
//       modal.style.display = 'none';
//    }
// };

// $(window).on('click', function(event) {
//    var modal = $(event.target).attr('myModal');
//    console.log(event.target);
//    if (event.target == modal) {
//       $('#myModal').hide
//    }
// })
