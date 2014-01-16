# == Schema Information
#
# Table name: supports
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  reward_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Support < ActiveRecord::Base
  attr_accessible :user_id, :reward_id


  belongs_to :user
  belongs_to :reward
end
