class ChatroomsController < ApplicationController
  before_action :check_if_logged_in
  before_action :get_chatroom, only: [:show]

  def index
    @chatrooms = Chatroom.all
  end

  def show

    @message = Message.new
  end

  def create
  end

  private
  def get_chatroom
    @chatroom = Chatroom.find params["id"]
  end
end
