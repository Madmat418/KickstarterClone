class SessionsController < ApplicationController
  before_filter :require_no_current_user!, :only => [:create, :new]
  before_filter :require_current_user!, :only => [:destroy]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user])
    if @user
      reset_session
      log_in(@user)
      redirect_to root_url
    else
      flash.now[:message] = "Invalid username and password combination"
      render :new
    end
  end

  def destroy
    log_out
    flash[:message] = "Successfully logged out"
    redirect_to root_url
  end



end
