class AddTimeLeftToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :time_left, :string
  end
end
