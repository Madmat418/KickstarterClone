class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user])
    if @user
      reset_session
      log_in(@user)
      redirect_to projects_url
    else
      flash.now[:message] = "Invalid username and password combination"
      render :new
    end
  end

  def destroy
    log_out
    flash[:message] = "Successfully logged out"
    redirect_to new_session_url
  end



end
