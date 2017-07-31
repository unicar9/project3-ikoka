// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// press ENTER key to send messages instead of SUBMIT submit button
$(document).ready(function() {

  $('input[type=text]').keydown(function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      $("form").submit();
      $(this).val('');
    }
  });

});
