class SessionController < ApplicationController
  def create
    user = User.find_by email: params[:email]
    if user.present? and user.authenticate params[:password]
      session[:user_id] = user.id
      redirect_to new_chatroom_path
    else
      flash[:error] = "Incorrect E-mail address and/or Password!"
      redirect_to login_path
    end
  end

  def new
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
