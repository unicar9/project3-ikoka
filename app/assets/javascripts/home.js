// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
  if ( $('body.home.welcome').length ) {
    console.log("we are in welcome page");

    var s = function(sketch) {

      // setup() executes only once and at the very beginning
      sketch.setup = function() {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);

      };

      // draw() executes over and over once setup() has executed
      sketch.draw = function() {
        if (sketch.mouseIsPressed) {
          sketch.fill(0);
        } else {
          sketch.fill(255);
        }
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
      };

      // keyPressed() executes when a key is pressed
      sketch.keyPressed = function() {

      };

      // mousePressed() executes when a mouse button is pressed
      sketch.mousePressed = function() {
      };

      sketch.windowResized = function() {
        // this function executes everytime the window size changes

        // set the sketch width and height to the 5 pixels less than
        // windowWidth and windowHeight. This gets rid of the scroll bars.
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);

      };
    };
    var homeCanvas = new p5(s);
    // create a new p5 canvas instance


  } // end of if
}); // end of ready
