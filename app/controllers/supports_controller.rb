class SupportsController < ApplicationController
  def create
    params[:support][:user_id] = current_user.id
    @support = Support.new(params[:support])
    if @support.save
      flash[:message] = "Thanks for your support"
    else
      flash[:errors] = @support.errors.full_messages
    end
    redirect_to project_url(params[:project_id])
  end
end
