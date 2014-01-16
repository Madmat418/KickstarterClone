class SupportsController < ApplicationController
  def create
    support_params = {user_id: current_user.id, reward_id: params[:reward_id]}
    @support = Support.new(support_params)
    if @support.save
      flash[:message] = "Thanks for your support"
    else
      flash[:errors] = @support.errors.full_messages
    end
    reward = Reward.find(@support.reward_id)
    redirect_to project_url(reward.project_id)
  end
end
