class RemoveColumnsFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :percentage
	remove_column :projects, :status
	remove_column :projects, :time_left
  end
end
