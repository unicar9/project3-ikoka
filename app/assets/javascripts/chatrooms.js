// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
  // $('.ui.sidebar')
  // .sidebar('overlay')
  // .sidebar('toggle');

  $(".launch.button").mouseenter(function(){
		$(this).stop().animate({width: '120px'}, 300,
             function(){$(this).find('.text').show();});
	}).mouseleave(function (event){
		$(this).find('.text').hide();
		$(this).stop().animate({width: '70px'}, 300);
	});
  $(".ui.sidebar").sidebar()
                  .sidebar('attach events','.ui.launch.button');
}); // end of ready
