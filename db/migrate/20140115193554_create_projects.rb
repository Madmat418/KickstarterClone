class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name, :null => false
      t.string :description, :null => false
      t.integer :owner_id, :null => false
      t.integer :goal, :null => false
      t.datetime :end_time, :null => false
      t.integer :current_funding

      t.timestamps
    end

    add_index :projects, :owner_id
    add_index :projects, :end_time
  end
end
