

// == msgs array to store all messages in this chatroom =====
var msgs = msgs || [];


// our friend randy, randy returns a float this time
  var randy = function(min, max) {
    return (Math.random() * (max - min) + min);
  };

  // ---- initialize semantic dropdown -----
  $('.ui.dropdown')
    .dropdown()
  ;
  // ---- initialize semantic dropdown -----


  /* ------------------------------
  | following code only excute on |
  |      chatromms#show page      |
  ------------------------------ */
$(document).ready(function() {

  if ( $('body.chatrooms.show').length ) {
    console.log("We're on chatrooms#show");

    var wave;


    var canvasWidth = $('#messages').width();

    // ======= ajax call to fetch message history =====
    $.getJSON('#{ /chatrooms/:id }').done(function(res){


      for (var i = 0; i < res.length; i++) {
        var size = randy(10, 60);
        var notes = [60, 64, 67, 72];
        var freq = notes[Math.floor(randy(0, 5))];

        var m = {
          content: res[i].content,
          velocityX: randy(-3, 3),
          velocityY: randy(-3, 3),
          x: randy(0, canvasWidth),
          y: randy(0, 800),
          shape: Math.floor(randy(0, 3)),
          size: size,
          freq: freq
        };
        msgs.push(m);
      }
    });
    // ======= ajax call to fetch message history =====


    // ========= define the function to create new p5 instance ===========
    var s = function(sketch) {

      sketch.setup = function() {
        sketch.createCanvas( canvasWidth, 800 );

        wave = new p5.Oscillator('sine');
      };

      sketch.draw = function() {
        sketch.background(255);

        for (var i = 0; i < msgs.length; i++) {

          var m = msgs[i];
          m.x += m.velocityX;
          m.y += m.velocityY;
          sketch.text(m.content, m.x, m.y );
          if (m.shape === 0) {
            // sketch.noFill();

            sketch.rect(m.x, m.y, m.size, m.size ).noFill();
            sketch.stroke(193);
          }
          if (m.shape === 1) {
            // sketch.noFill();
            sketch.triangle(m.x, m.y, (m.x + m.size/2), (m.y - m.size), (m.x - m.size/2), (m.y - m.size));
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

          wave.start();
          sketch.frameRate(24);
          wave.amp(1, 0.5);
          wave.freq(m.freq);
          // wave.amp(0, 0.5);

        } // for loop
      };

    };

    // create a new p5 instance
    var canvas = new p5(s, 'messages');

  }

}); // document ready
