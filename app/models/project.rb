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

  validates :description, :goal, :name, :owner_id,
            :presence => true

  has_many :rewards
  has_many :supports, :through => :rewards, :source => :supports
  has_many :supporters, :through => :supports, :source => :user


  def current_funding
    current_funding = 0
    return 0 if self.supports.length == 0
    supporters = self.supports.map {|support| support.reward.support_amount}
    supporters.each {|amount| current_funding += amount}
    return current_funding
  end

  def num_supporters
    self.supporters.length
  end

  def is_successful?
    self.current_funding >= self.goal
  end
end
