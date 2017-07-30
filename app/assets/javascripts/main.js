//= require p5
//= require p5.dom
var msgs = msgs || [];

$.getJSON('#{ /chatrooms/:id }').done(function(res){
  for (var i = 0; i < res.length; i++) {
    var m = {
      content: res[i].content,
      velocityX: 3,
      velocityY: 3,
      x: 400,
      y: 400
    };
    msgs.push(m);
  }
})

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

          if(m.x >= sketch.windowWidth || m.x <= 0) {
            m.velocityX *= -1
          }

          if(m.y >= sketch.windowHeight || m.y <= 0) {
            m.velocityY *= -1
          }

        }
      };

    };
    var canvas = new p5(s, 'messages');

    // var setup = function(){
    //
    //   createCanvas( windowWidth, windowHeight);
    //
    //   background(125);
    //   colorMode(HSB, 255);
    //
    //   textAlign(CENTER);
    //   textSize(50);
    // };
    //
    // var draw = function() {
    //   background(125);
    //
    //
    //   for (var i = 0; i < msgs.length; i++) {
    //     var m = msgs[i];
    //     m.x += m.velocityX;
    //     m.y += m.velocityY;
    //     text(m.content, m.x, m.y );
    //
    //     if(m.x >= windowWidth || m.x <= 0) {
    //       m.velocityX *= -1
    //     }
    //
    //     if(m.y >= windowHeight|| m.y <= 0) {
    //       m.velocityY *= -1
    //     }
    //
    //   }
    //
    // };

  }

});
