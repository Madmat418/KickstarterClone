class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :project_id,       :null => false
      t.integer :support_amount,   :null => false
      t.string  :supporter_reward, :null => false

      t.timestamps
    end

    add_index :rewards, :project_id
  end
end
