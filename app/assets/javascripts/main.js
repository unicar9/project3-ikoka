
// == msgs array to store all messages in this chatroom =====
var msgs = msgs || [];

// our friend randy, randy returns a float this time
var randy = function(min, max) {
  return (Math.random() * (max - min) + min);
};

// function to get a triangle with a center point (and a size)
var getTri = function(x, y, side){
  var points = {};
  points.x1 = x;
  points.y1 = y + side * Math.sin((Math.PI / 3)) / 2;
  points.x2 = x - side/2;
  points.y2 = y - side * Math.sin((Math.PI / 3)) / 2;
  points.x3 = x + side/2;
  points.y3 = y - side * Math.sin((Math.PI / 3)) / 2;
  return points;
  // return a object of 3 sets of cordinates
};


$(document).ready(function() {

  // ---- initialize semantic dropdown -----
  $('.ui.dropdown').dropdown();

  /* ------------------------------
  | following code only excute on |
  |      chatromms#show page      |
  ------------------------------ */
  if ( $('body.chatrooms.show').length ) {
    console.log("We're on chatrooms#show");

    var wave;

    var canvasWidth = $('#messages').width();

    // ======= ajax call to fetch message history =====
    $.getJSON('#{ /chatrooms/:id }').done(function(res){

      for (var i = 0; i < res.length; i++) {
        var size = randy(10, 60);

        var m = {
          content: res[i].content,
          velocityX: randy(-3, 3),
          velocityY: randy(-3, 3),
          x: randy(0, canvasWidth),
          y: randy(0, 800),
          shape: Math.floor(randy(0, 3)),
          size: size,
          sound: false
        };
        msgs.push(m);
      }
    });
    // ======= ajax call to fetch message history =====



    // ========= define the function to create new p5 instance ===========
    var s = function(sketch) {
      // var notes = [60, 64, 67, 72];
      // var freq = sketch.midiToFreq(notes[Math.floor(randy(0, 5))]);
      // console.log(notes[Math.floor(randy(0, 5))]);

      sketch.setup = function() {
        sketch.createCanvas( canvasWidth, 800 );

        wave = new p5.Oscillator('sine');
        wave.start();
        sketch.rectMode(sketch.RADIUS);
        sketch.ellipseMode(sketch.RADIUS);
        sketch.textAlign(sketch.LEFT, sketch.CENTER);
      };

      sketch.draw = function() {

        sketch.background(255);

        for (var i = 0; i < msgs.length; i++) {

          var m = msgs[i];
          m.x += m.velocityX;
          m.y += m.velocityY;
          sketch.text(m.content, m.x, m.y );


          if (m.sound) {

            wave.amp(1, 0.5);
            wave.freq(m.freq);
            console.log(m.freq);
          }

          if (m.shape === 0) {
            // sketch.noFill();

            sketch.rect(m.x, m.y, m.size, m.size ).noFill();
            sketch.stroke(193);
          }
          if (m.shape === 1) {
            // sketch.noFill();
            var points = getTri(m.x, m.y, m.size);
            // sketch.triangle(m.x, m.y, (m.x + m.size/2), (m.y - m.size), (m.x - m.size/2), (m.y - m.size));
            sketch.triangle(points.x1, points.y1, points.x2, points.y2, points.x3, points.y3);
            sketch.stroke(123);
          }
          if (m.shape === 2) {
            // sketch.noFill();
            sketch.ellipse(m.x, m.y, m.size, m.size);
            sketch.stroke(123);
          }

          if(m.x >= canvasWidth || m.x <= 0) {
            m.velocityX *= -1
          }

          if(m.y >= 600 || m.y <= 0) {
            m.velocityY *= -1
          }


        } // for loop


      }; // draw func

    };

    // create a new p5 instance
    var canvas = new p5(s, 'messages');

  }

}); // end of document ready
