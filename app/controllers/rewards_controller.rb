class RewardsController < ApplicationController
  def new
    render :new
  end

  def create
    params[:reward][:project_id] = params[:project_id]
    @reward = Reward.new(params[:reward])
    if @reward.save
      flash[:message] = "Reward level added"
    else
      flash[:errors] = @reward.errors.full_messages
    end
    redirect_to project_url(params[:project_id])
  end
end
