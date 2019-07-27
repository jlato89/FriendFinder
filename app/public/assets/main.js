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

         $('.modal-content').empty();
         $('.modal-content').append(closeBtn, resultName, resultImage);
         $('.modal').show();
      }
      //! Clear answers when done testing
   }).fail(function(err) {
      console.log(err);
      var closeBtn = $('<span>');
      closeBtn.addClass('close');
      closeBtn.html('&times;');

      var formError = $('<h1>');
      formError.text(err.responseText);

      $('.modal-content').empty();
      $('.modal-content').append(closeBtn, formError);
      $('.modal').show();
   });
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//    modal.style.display = 'block';
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
   modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = 'none';
   }
};
