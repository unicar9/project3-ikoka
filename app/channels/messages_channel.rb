class MessagesChannel < ApplicationCable::Channel

  def subscribed
    stream_from 'messages'
    # stream_from "private_channel_#{}"


  end


end
