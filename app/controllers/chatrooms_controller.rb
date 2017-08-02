class ChatroomsController < ApplicationController
  before_action :check_if_logged_in, except: [:index]
  before_action :get_chatroom, only: [:show, :add_user]

  def add_user
    @user = User.find_by name:params[:name]
    message = Message.new
    message.content = "#{user.name} has joined this chatroom!!!!!"
    message.user = @user
    message.chatroom = @chatroom
    if message.save
      ActionCable.server.broadcast 'messages', message: message.content, user: message.user.name

      head :ok
    end

    # render :json => @user
  end

  def index
    @chatroom = Chatroom.new
    @chatrooms = Chatroom.all
  end

  def show

    @message = Message.new
    @messages = @chatroom.messages
    @users = @chatroom.users

    respond_to do |format|
      format.html {}
      format.json { render :json => { :messages => @messages,
                                      :users => @users }}
    end
  end

  def new

  end

  def create
    @chatroom = Chatroom.new chatroom_params
    @chatroom.cover = "/assets/cover#{[1,2,3].sample}.png"
    @chatroom.save

    @message = Message.create content:"#{@current_user.name} created this world", chatroom_id:@chatroom.id, user_id:@current_user.id

    redirect_to chatroom_path(@chatroom)

  end

  private
  def get_chatroom
    @chatroom = Chatroom.find params["id"]
  end

  def chatroom_params
    params.require(:chatroom).permit(:topic, :description)
  end
end
