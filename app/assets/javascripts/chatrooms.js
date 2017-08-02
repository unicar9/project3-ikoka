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
            title: item.email
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
    .done(function(res){

      if (res) {
        $('#user-search-results').empty();
        for (var i = 0; i < res.length; i++) {
          var $userdiv = $('<div>').appendTo('#user-search-results');
          $('<img>').attr('src', res[i].avatar).addClass('ui avatar image').appendTo($userdiv);
          $('<span>').text(res[i].name).appendTo($userdiv);
          $('<a>').text('add').addClass('add-user right floated ui mini button').appendTo($userdiv);
        }
      } else {

        $('#user-search-results').empty();
        $('<p>').text('No matching results').appendTo('#user-search-results')
      }

    })
    .fail(function(xhr,err,whatever){
      console.log(xhr, err, whatever);
    });

  });

  // add users to current chatroom============================
  $(document).on('click', '.add-user', function(){

    var userEmail = $(this).prev().text();
    console.log(userEmail);
    $.ajax({
      method: "POST",
      url: ' #{ /chatrooms/:id } ' ,
      data: {
        email: userEmail
      }
    })
    .done(function(res){
      $('.ui.modal.search-invite').modal('hide');
    });
  });

}); // end of ready
