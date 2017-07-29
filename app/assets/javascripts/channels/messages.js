App.messages = App.cable.subscriptions.create('MessagesChannel', {
  // received is a reserved function, when new content is in the channel
  received: function(data){
    return $('#messages').append( this.renderMessage(data) );
  },

  renderMessage: function(msg){
    return "<p><Strong>" + msg.user + ": </Strong>" + msg.message + "</p></br>"
  }

});
