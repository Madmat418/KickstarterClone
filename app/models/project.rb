# == Schema Information
#
# Table name: projects
#
#  id              :integer          not null, primary key
#  name            :string(255)      not null
#  description     :string(255)      not null
#  owner_id        :integer          not null
#  goal            :integer          not null
#  end_time        :datetime         not null
#  current_funding :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Project < ActiveRecord::Base
  attr_accessible :description, :goal, :name, :owner_id, :end_time
  after_initialize :start_funding

  validates :description, :goal, :name, :owner_id,
              :current_funding, :presence => true

  def start_funding
    self.current_funding = 0
  end

  def add_funding(amount)
    self.current_funding += amount
  end

  def is_successful?
    self.current_funding >= self.goal
  end
end
