class Api::CategoriesController < ApplicationController
  def index
    puts '-------------------------------------------------'
    @categories = Category.all
	render :index
  end
end
