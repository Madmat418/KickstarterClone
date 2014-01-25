class Api::ProjectsController < ApplicationController
  def new
    @project = Project.new
    render :new
  end

  def create	
    params[:project][:owner_id] = current_user.id
    @project = Project.new(params[:project])
    if @project.save

      flash[:message] = "Project successfully created"
      render :show
    else
      flash.now[:errors] = @project.errors.full_messages
      render :new
    end

  end

  def show
    @project = Project.find(params[:id])
    @rewards = @project.rewards.sort_by {|reward| reward.support_amount}
    render :show
  end

  def index
    if params[:category_id] == '0'
      @projects = Project.all
    else
      @projects = Project.where(category_id: params[:category_id].to_i)  
    end
	render :index
  end
end
