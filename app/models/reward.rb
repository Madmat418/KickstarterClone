# == Schema Information
#
# Table name: rewards
#
#  id               :integer          not null, primary key
#  project_id       :integer          not null
#  support_amount   :integer          not null
#  supporter_reward :string(255)      not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Reward < ActiveRecord::Base
  attr_accessible :project_id, :support_amount, :supporter_reward

  validates :project, :support_amount, :supporter_reward, :presence => true

  belongs_to :project, :inverse_of => :rewards
  has_many :supports
end
