class RemoveCurrentFundingFromProjects < ActiveRecord::Migration
  def up
    remove_column :projects, :current_funding
  end

  def down
    add_column :projects, :field_name, :integer
  end
end
