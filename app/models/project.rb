# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  description :string(255)      not null
#  owner_id    :integer          not null
#  goal        :integer          not null
#  end_time    :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer
#

class Project < ActiveRecord::Base
  attr_accessible :description, :goal, :name, :owner_id, :end_time, :rewards, :category_id

  validates :description, :goal, :name, :owner_id,
            :presence => true
  belongs_to :category
  has_many :rewards, :inverse_of => :project
  has_many :supports, :through => :rewards, :source => :supports
  has_many :supporters, :through => :supports, :source => :user
  belongs_to :owner,
             :class_name => 'User',
			 :foreign_key => :owner_id
			 
  def rewards=(rewards_hash)
    rewards_array = rewards_hash[:supporter_reward]
	amounts_array = rewards_hash[:support_amount]
	
    rewards_array.each_with_index do |reward, idx|
	  self.rewards.build(:supporter_reward => reward, :support_amount => amounts_array[idx])
    end
  end

  def current_funding
    current_funding = 0
    return 0 if self.supports.length == 0
    supporters = self.supports.map {|support| support.reward.support_amount}
    supporters.each {|amount| current_funding += amount}
    return current_funding
  end
  
  def time_left
    days = this.end_time.day - Time.now.day
	hours = this.end_time.hour - Time.now.hour
	minutes = this.end_time.minute - Time.now.minute
	@time_left = days + " days, #{hours} hours, and #{minutes} minutes"
  end
  
  
  
  def ongoing?
    this.end_time > Time.now
  end
  
  def status
    if this.percentage >= 100
	  @status = 'Successfull'
	elsif ended?
	  @status = 'Unsuccessfull'
	else
	  @status = 'In Progress'
	end
  end
  
  def percentage
    return 100 if self.current_funding >= self.goal
	return (self.current_funding / self.goal) * 100
  end

  def num_supporters
    self.supporters.length
  end

  def is_successful?
    self.percentage >= 100
  end
end
