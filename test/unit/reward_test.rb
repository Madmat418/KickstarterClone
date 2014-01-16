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

require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
