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
    @user = User.new user_params
    avatar = "https://robohash.org/#{@user.email}?set=set4&size=150x150"
    @user.avatar = avatar
    #give new user a autogenerated avatar if the user hasn't upload an avatar

    if params[:file].present?
      # Then call Cloudinary's upload method, passing in the file in params
      req = Cloudinary::Uploader.upload(params[:file])
      # Using the public_id allows us to use Cloudinary's powerful image transformation methods.
      @user.avatar = req["public_id"]
    end

    @user.save

    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user.id)
    else
      render :new
    end

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

  def user_params
    params.require(:user).permit(:name, :email, :avatar, :password, :password_confirmation)
  end
end