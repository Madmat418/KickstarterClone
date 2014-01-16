class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      log_in(@user)
      flash[:messages] = "User Creation Successful"
      redirect_to projects_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    render :show
  end
end
