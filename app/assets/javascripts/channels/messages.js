//= require p5
//= require p5.dom
//= require p5.sound

// create msgs
var msgs = msgs || [];



App.messages = App.cable.subscriptions.create('MessagesChannel', {
  // received is a reserved function, when new content is in the channel
  received: function(data){
    // data is the received new content(one new message submitted by one user) that is being broadcasted in the channel
    // which we configured in messages_controller.rb
    // data = {
    //   message: message.content,
    //   user: message.user
    // }

    var m = {
      content: data.message,
      velocityX: randy(-2, 2),
      velocityY: randy(-2, 2),
      x: 400,
      y: 400,
      shape: Math.floor(randy(0, 3)),
      size: randy(40, 80),
      freq: randy(440, 800),
      hue: randy(0, 255)
    }
    msgs.push(m);
    env.play();
    wave.freq(m.freq);
  }

});
