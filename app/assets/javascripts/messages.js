// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {

  $('textarea').keydown(function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      $("form").submit();
      $('textarea').val('');
    }
  });

});