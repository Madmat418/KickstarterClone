class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user])
    if @user
      current_user = @user
      redirect_to users_url
    else
      flash.now[:message] = "Invalid username and password combination"
      render :new
  end

  def destroy
    log_out
    flash[:message] = "Successfully logged out"
    redirect_to new_session_url
  end



end
