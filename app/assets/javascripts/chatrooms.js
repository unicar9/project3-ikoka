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


  /******* invite friends modal **********/
  $('#invite-friends').on('click', function(){
    $('.ui.modal.search-invite').modal('show');
  });


  $('.ui.search').search({
    apiSettings: {
      url: '/users/search?term={query}'
    },
    fields: {
      title   : 'name'
    },
    minCharacters : 3
  });


  $('#user-search-button').on('click', function(){

    console.log('clicked');
    var query = $('#user-search-input').val();

    $.ajax({
      method: "GET",
      url: "/users/search",
      data: { term: query  }
    })
    .done(function(data){

      for (var i = 0; i < data.length; i++) {
        var $userdiv = $('<div>').appendTo('#user-search-results');
        $('<span>').text(data[i].name).appendTo($userdiv);
        $('<a>').text('add').addClass('add-user').appendTo($userdiv);
      }

    });

  });

  $(document).on('click', '.add-user', function(){

    var username = $(this).prev().text();
    console.log(username);
    $.ajax({
      method: "POST",
      url: ' #{ /chatrooms/:id } ' ,
      data: {
        name: username
      }
    })
    .done(function(res){
      $('.ui.modal.search-invite').modal('hide');
    });
  })

}); // end of ready
