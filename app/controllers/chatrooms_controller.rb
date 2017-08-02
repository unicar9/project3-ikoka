class ChatroomsController < ApplicationController
  before_action :check_if_logged_in, except: [:index]
  before_action :get_chatroom, only: [:show, :add_user]

  def add_user
    user = User.find_by name:params[:name]
    message = Message.new
    message.content = "#{user.name} has joined this chatroom!!!!!"
    message.user = user
    message.chatroom = @chatroom
    if message.save
      ActionCable.server.broadcast 'messages', message: message.content, user: message.user.name

      head :ok
    end
  end

  def index
    @chatrooms = Chatroom.all
  end

  def show

    @message = Message.new
    @messages = @chatroom.messages

    respond_to do |format|
      format.html {}
      format.json {  render :json => @messages}
    end
  end

  def new

  end

  def create
    @chatroom = Chatroom.create chatroom_params
    @message = Message.create content:"#{@current_user.name} created this world", chatroom_id:@chatroom.id, user_id:@current_user.id
    @chatroom.save
    redirect_to chatroom_path(@chatroom)

  end

  private
  def get_chatroom
    @chatroom = Chatroom.find params["id"]
  end

  def chatroom_params
    params.require(:chatroom).permit(:topic, :description, :cover)
  end
end
