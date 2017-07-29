class MessagesController < ApplicationController
  def create
    message = Message.new message_params
    message.user = @current_user

    if message.save
      # broadcast to the room over the websockets channel
      ActionCable.server.broadcast 'messages', message: message.content, user: message.user.name

      head :ok

    else
      redirect_to chatrooms_path
    end
  end


  private
  def message_params
    params.require(:message).permit(:content, :chatroom_id)
  end
end
