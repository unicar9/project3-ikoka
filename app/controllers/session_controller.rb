class SessionController < ApplicationController
  def create
    user = User.find_by email: params[:email]
    if user.present? and user.authenticate params[:password]
      if params[:remember_me] == '1'
        cookies.permanent[:auth_token] = user.auth_token
      else
        cookies[:auth_token] = user.auth_token
      end
      cookies.signed[:user_id] = user.id
      redirect_to user_path(user)
    else
      flash[:error] = "Incorrect Email and/or Password!"
      render 'new'
    end
  end

  def new
  end

  def destroy
    cookies.delete(:auth_token)
    cookies.signed[:user_id] = nil
    redirect_to root_url
  end
end
