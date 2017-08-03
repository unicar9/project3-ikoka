// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {

  //------ semantic-ui new chatroom modal ----------
  $('.new-chatroom-action-card').on('click', function(){
    console.log('clicked');
    $('.ui.modal.new-chatroom').modal('show');
  });

  $('#save-chatroom').on('click', function(){
    $('.ui.modal.new-chatroom').modal('hide');
  });
  //------------------------------------------


}); // end of ready
