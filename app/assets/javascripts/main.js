//= require p5
//= require p5.dom
var msgs = msgs || [];

var randy = function(min, max) {
  return (Math.random() * (max - min) + min);
};

/* -------------------------
| one message:             |
| has following properties |
---------------------------*/

var msgProps = {
  content: 'haha',
  velocityX: randy(-3, 3),
  velocityY: randy(-3, 3),
  x: randy(0, 800),
  y: randy(0, 800)
}



$.getJSON('#{ /chatrooms/:id }').done(function(res){


  for (var i = 0; i < res.length; i++) {
    var size = randy(10, 60);
    var m = {
      content: res[i].content,
      velocityX: randy(-3, 3),
      velocityY: randy(-3, 3),
      x: randy(0, 800),
      y: randy(0, 800),
      shape: Math.floor(randy(0, 3)),
      size: size
    };
    msgs.push(m);
  }
});



$(document).ready(function(){


  if ( $('body.chatrooms.show').length ) {

    console.log("We're on chatrooms#show");



    var s = function(sketch) {


      sketch.setup = function() {
        sketch.createCanvas( 800, 800 );
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
            sketch.triangle(m.x, m.y, (m.x + m.size/2), (m.y - m.size), (m.x - m.size/2), (m.y - m.size)).noFill();
            sketch.stroke(123);
          }
          if (m.shape === 2) {
            // sketch.noFill();

            sketch.ellipse(m.x, m.y, m.size, m.size).noFill();
            sketch.stroke(123);
          }


          if(m.x >= 800 || m.x <= 0) {
            m.velocityX *= -1
          }

          if(m.y >= 800 || m.y <= 0) {
            m.velocityY *= -1
          }

        } // for loop
      };

    };
    var canvas = new p5(s, 'messages');
  }

});
