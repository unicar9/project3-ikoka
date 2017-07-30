//= require p5
//= require p5.dom
//= require cable
//= require_self
//= require_tree .


App.messages = App.cable.subscriptions.create('MessagesChannel', {
  // received is a reserved function, when new content is in the channel
  received: function(data){
    // return $('#messages').append( this.renderMessage(data) );
    var msgs = [];

    var m = {
      content: this.renderMessage(data),
      velocityX: 3,
      velocityY: 3,
      x: 300,
      y: 300
    };

    msgs.push(m);

    this.setup();
    this.draw();

  },

  renderMessage: function(msg){
    return msg.message
  },

  setup: function() {
    createCanvas( windowWidth, windowHeight);
  },

  draw: function() {

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

  }





});
