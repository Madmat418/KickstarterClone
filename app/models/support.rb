# == Schema Information
#
# Table name: supports
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  user_id    :integer          not null
#  amount     :integer          not null
#  reward     :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Support < ActiveRecord::Base
  # attr_accessible :title, :body
end
