class UsersController < ApplicationController
  before_action :check_if_logged_in, only: [:edit, :update, :destroy]
  before_action :check_if_admin, only: [:index]
  before_action :get_user, only: [:show, :edit, :update]

  def index
    @users = User.all
  end

  def show
  end

  def new
    @user = User.new
  end

  def create
  end

  def edit
    redirect_to root_path unless @current_user == @user
  end

  def update
  end

  def destroy
    @user.destroy
  end

  private

  def get_user
      @user = User.find params["id"]
  end
end
