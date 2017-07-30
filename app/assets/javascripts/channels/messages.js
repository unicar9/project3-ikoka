var msgs = msgs || [];

App.messages = App.cable.subscriptions.create('MessagesChannel', {
  // received is a reserved function, when new content is in the channel
  received: function(data){
    // return $('#messages').append( this.renderMessage(data) );
    var m = {
      content: data.message,
      velocityX: 3,
      velocityY: 3,
      x: 400,
      y: 400
    }
    msgs.push(m)
  },

  // renderMessage: function(msg){
  //   return "<p><Strong>" + msg.user + ": </Strong>" + msg.message + "</p></br>"
  //
  // }

});
