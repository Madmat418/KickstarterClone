json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.supports user.supports
  json.rewards user.rewards
  json.supported_projects user.supported_projects
  json.created_projects user.created_projects
end

