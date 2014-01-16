class CreateSupports < ActiveRecord::Migration
  def change
    create_table :supports do |t|
      t.integer :project_id, :null => false
      t.integer :user_id, :null => false
      t.integer :amount, :null => false
      t.text    :reward, :null => false
      t.timestamps
    end

    add_index :supports, :project_id
    add_index :supports, :user_id
  end
end
