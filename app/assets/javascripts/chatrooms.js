// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {

  // launch button animation and toggle sidebar=========================
  $(".launch.button").mouseenter(function(){
		$(this).stop().animate({width: '120px'}, 300,
             function(){$(this).find('.text').show();});
	}).mouseleave(function (event){
		$(this).find('.text').hide();
		$(this).stop().animate({width: '70px'}, 300);
	});
  $(".ui.sidebar").sidebar({
                    context: $('.pushcontext')
                  })
                  .sidebar('attach events','.ui.launch.button');


  /******* invite friends modal **********/
  $('#invite-friends').on('click', function(){
    $('.ui.modal.search-invite').modal('show');
  });


  // semantic ui autocomplete search=========================
  $('.ui.search').search({
    apiSettings: {
      url: '/users/search?term={query}',
      minCharacters : 3,
      onResponse: function(results) {
        var response = {
          results: []
        };
        $.each(results, function(index, item) {
          response.results.push({
            title: item.name
          });
        });
        return response
      },
    },
  });
  // semantic ui autocomplete search=========================


  // list search results with add buttons ======================

  $('#user-search-button').on('click', function(){

    console.log('clicked');
    var query = $('#user-search-input').val();

    $.ajax({
      method: "GET",
      url: "/users/search",
      data: { term: query  }
    })
    .done(function(data){

      $('#user-search-results').empty();
      for (var i = 0; i < data.length; i++) {
        var $userdiv = $('<div>').appendTo('#user-search-results');
        $('<img>').attr('src', data[i].avatar).addClass('ui avatar image').appendTo($userdiv);
        $('<span>').text(data[i].name).appendTo($userdiv);
        $('<a>').text('add').addClass('add-user right floated ui mini button').appendTo($userdiv);
      }

    });

  });

  // add users to current chatroom============================

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
