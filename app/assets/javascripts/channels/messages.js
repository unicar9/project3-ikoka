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

    var wave = new p5.Oscillator('sine');


    var m = {
      content: data.message,
      velocityX: randy(-3, 3),
      velocityY: randy(-3, 3),
      x: 400,
      y: 400,
      shape: Math.floor(randy(0, 3)),
      size: randy(10, 100),
      freq: wave.freq(randy(440, 880)),
      sound: true
    }
    msgs.push(m)
  }

});
