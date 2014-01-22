json.array! @rewards do |reward|
  json.id reward.id
  json.project_id reward.project_id
  json.support_amount reward.support_amount
  json.supporter_reward reward.supporter_reward
end
  