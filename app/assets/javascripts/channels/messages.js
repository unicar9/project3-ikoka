//= require p5
//= require p5.dom
//= require p5.sound

// create msgs
var msgs = msgs || [];
var alphaEdge = alphaEdge || 0;
var alphaSausage = alphaSausage || 0;
var alphaLuke = alphaLuke || 0;



App.messages = App.cable.subscriptions.create('MessagesChannel', {
  // received is a reserved function, when new content is in the channel
  received: function(data){
    /************************************
    the passed in variable (data) is the
    received new content(one new message
    submitted by one user) that is being
    broadcasted in the channel which we
    configured in messages_controller.rb

    data = {
      message: message.content,
      user: message.user.name
    }
    ************************************/

    /* create a new "m" with
    random properties and
    broadcasted message content,
    then push into msgs array */

    var m = {
      content: data.message,
      user: data.user,
      velocityX: randy(-2, 2),
      velocityY: randy(-2, 2),
      x: 400,
      y: 400,
      shape: Math.floor(randy(0, 3)),
      size: randy(40, 80),
      freq: randy(440, 800),
      hue: randy(0, 255),
      speedRotation: randy(-3,3),
      offsetRotation: randy(0, 360),
      lifespan: 1800
    };

    if(data.message.match(/edge/i) ){
      alphaEdge = 255;
    }
    if(data.message.match(/luke/i) ){
      alphaLuke = 255;
    }
    if(data.message.match(/wdi22/i) ){
      alphaSausage = 255;
    }

    msgs.push(m);
    env.play();
    wave.freq(m.freq);
  }

});
