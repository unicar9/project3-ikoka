
// == msgs array to store all messages in this chatroom =====
var msgs = msgs || [];

var wave, env;
env = new p5.Env();
env.setADSR(0.001, 0.2, 0.2, 0.5);
env.setRange(1, 0);
wave = new p5.Oscillator('sine');
wave.amp(env);
wave.start();


// our friend randy, randy returns a float this time
var randy = function(min, max) {
  return (Math.random() * (max - min) + min);
};

// function to get a triangle with a center point (and the length of side)
var getTri = function(x, y, side){
  var points = {};
  points.x1 = x;
  points.y1 = y + side * Math.sin((Math.PI / 3)) / 2;
  points.x2 = x - side/2;
  points.y2 = y - side * Math.sin((Math.PI / 3)) / 2;
  points.x3 = x + side/2;
  points.y3 = y - side * Math.sin((Math.PI / 3)) / 2;
  return points;
  // return a object of 3 sets of x-y coordinates, each represents a point of the triangle
};


$(document).ready(function() {

  // ---- initialize semantic-ui actions -----
  $('.ui.dropdown').dropdown();

  $('.special.cards .image').dimmer({
    on: 'hover'
  });
  //------------------------------------------

  //------ create new chatroom modal ----------
  $('#new-chatroom').on('click', function(){
    $('.ui.modal.new-chatroom').modal('show');
  });

  $('#save-chatroom').on('click', function(){
    $('.ui.modal.new-chatroom').modal('hide');
  });
  //------------------------------------------

  /* ------------------------------
  | following code only excute on |
  |      chatromms#show page      |
  ------------------------------ */
  if ( $('body.chatrooms.show').length ) {
    console.log("We're on chatrooms#show");


    var canvasWidth = $('#messages').width();

    // ======= ajax call to fetch message history =====
    $.getJSON('#{ /chatrooms/:id }').done(function(res){

      for (var i = 0; i < res.length; i++) {
        var size = randy(10, 60);
        var speedRotation = randy(-3, 3);
        var hue = randy(0, 255);


        var m = {
          content: res[i].content,
          velocityX: randy(-3, 3),
          velocityY: randy(-3, 3),
          x: randy(0, canvasWidth),
          y: randy(0, 600),
          shape: Math.floor(randy(0, 3)),
          size: size,
          hue: hue,
          speedRotation: speedRotation
        };
        msgs.push(m);
      }
    });
    // ======= ajax call to fetch message history =====



    // ========= define the function to create new p5 instance ===========
    var s = function(sketch) {

      var bg;

      sketch.setup = function() {

        // create canvas based on the parent element (ui segment)'s width
        sketch.createCanvas( canvasWidth, 600 );

        // mode RADIUS allow drawing the shape (rect ellipse) staring from the center points
        sketch.rectMode(sketch.RADIUS);
        sketch.ellipseMode(sketch.RADIUS);

        // set text alignment: horizontally left align, vertically center align
        sketch.textAlign(sketch.LEFT, sketch.CENTER);

        // set color mode HSB
        sketch.colorMode(sketch.HSB, 255);

        // set canvas background
        bg = sketch.loadImage("/assets/gradient-bg-3.jpg");

      };

      sketch.draw = function() {

        sketch.background(bg);

        for (var i = 0; i < msgs.length; i++) {

          var m = msgs[i];
          m.x += m.velocityX;
          m.y += m.velocityY;
          sketch.stroke(m.hue, 200, 255);
          sketch.text(m.content, m.x, m.y );


          if (m.shape === 0) {
            sketch.rect(m.x, m.y, m.size, m.size ).noFill();
          }
          if (m.shape === 1) {
            var points = getTri(m.x, m.y, m.size);   // using the msg's x,y coordinate(m.x, m.y) and size value(m.size) to genereate a triangle
            sketch.triangle(points.x1, points.y1, points.x2, points.y2, points.x3, points.y3).noFill();
          }
          if (m.shape === 2) {
            sketch.ellipse(m.x, m.y, m.size, m.size).noFill();
          }

          if(m.x >= canvasWidth || m.x <= 0) {
            m.velocityX *= -1
          }

          if(m.y >= 600 || m.y <= 0) {
            m.velocityY *= -1
          }

        } // for loop

      }; // draw func

    } // s func

    // create a new p5 instance
    var canvas = new p5(s, 'messages');

  } // if
  /* ------------------------------
  |   above code only excute on   |
  |     chatromms#show page       |
  ------------------------------ */

}); // end of document ready
