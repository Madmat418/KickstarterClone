class CreateSupports < ActiveRecord::Migration
  def change
    create_table :supports do |t|
      t.integer  :user_id, :null => false
      t.integer  :reward_id, :null => false
      t.timestamps
    end

    add_index :supports, :user_id
    add_index :supports, :reward_id
  end
end
