class Api::SupportsController < ApplicationController
  def create
    support_params = {user_id: current_user.id, reward_id: params[:reward_id]}
    @support = Support.new(support_params)
    if @support.save
      flash[:message] = "Thanks for your support"
    else
      flash[:errors] = @support.errors.full_messages
    end
    render :new
  end
  
  def index
    if params[:reward_id] == 0
	  @supports = Support.all
	else
      @supports = Support.where(reward_id: params[:reward_id])
	end
	render :index
  end
end
