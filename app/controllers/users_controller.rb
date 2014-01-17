class UsersController < ApplicationController
  # before_filter :require_current_user!, :only => [:show]
 #  before_filter :require_no_current_user!, :only => [:create, :new]

  def new
    render :new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      log_in(@user)
      flash[:messages] = "User Creation Successful"
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    render :show
  end
end
