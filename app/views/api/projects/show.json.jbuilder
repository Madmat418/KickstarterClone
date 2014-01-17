json.name @project.name
json.goal @project.goal
json.current_funding @project.current_funding
json.num_supports @project.num_supporters
json.owner_id @project.owner_id
json.rewards do
  json.array! @rewards do |reward|
    json.support_amount reward.support_amount
    json.supporter_reward reward.supporter_reward
  end
end
