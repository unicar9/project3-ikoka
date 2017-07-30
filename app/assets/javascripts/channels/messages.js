App.messages = App.cable.subscriptions.create('MessagesChannel', {
  // received is a reserved function, when new content is in the channel
  received: function(data){
    return $('#messages').append( this.renderMessage(data) );
  },

  renderMessage: function(msg){
    // return "<p><Strong>" + msg.user + ": </Strong>" + msg.message + "</p></br>"
    var msgs = [];
    var m = {
      content: msg.message,
      velocityX: 3,
      velocityY: 3,
      x: windowWidth/2,
      y: windowHeight/2
    };

    var setup = function(){

      createCanvas( windowWidth, windowHeight);

      background(255);
      colorMode(HSB, 255);

      // input = createInput('');
      // input.position(20, 65);
      //
      // button = createButton('submit');
      // button.position(input.x + input.width, 65);
      // button.mousePressed(greet);
      //
      // greeting = createElement('h4', 'Type something...');
      // greeting.position(20, 5);

      textAlign(CENTER);
      textSize(50);
    };

    msgs.push(m);

    var draw = function() {
      background(255);


      for (var i = 0; i < msgs.length; i++) {
        var m = msgs[i];
        m.x += m.velocityX;
        m.y += m.velocityY;
        text(m.content, m.x, m.y );

        if(m.x >= windowWidth || m.x <= 0) {
          m.velocityX *= -1
        }

        if(m.y >= windowHeight|| m.y <= 0) {
          m.velocityY *= -1
        }

      }

    };







  }

});
