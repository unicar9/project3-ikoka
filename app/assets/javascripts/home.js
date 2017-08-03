// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
  if ( $('body.home.welcome').length ) {
    console.log("we are in welcome page");

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '/assets/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });


  } // end of if
}); // end of ready
