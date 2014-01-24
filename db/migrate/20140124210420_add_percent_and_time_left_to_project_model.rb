class AddPercentAndTimeLeftToProjectModel < ActiveRecord::Migration
  def change
    add_column :projects, :percentage, :integer
	add_column :projects, :status, :string
  end
end
