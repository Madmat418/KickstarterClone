json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.supports user.supports
  json.rewards user.rewards
  json.supported_projects user.supported_projects do |project|
    json.id project.id
    json.name project.name
    json.goal project.goal
    json.current_funding project.current_funding
    json.num_supporters project.num_supporters
    json.owner_id project.owner_id
    json.owner_name project.owner.username
    json.status project.status
    json.ongoing project.ongoing
    json.time_left project.time_left
  end
  json.created_projects user.created_projects do |project|
    json.id project.id
    json.name project.name
    json.goal project.goal
    json.current_funding project.current_funding
    json.num_supporters project.num_supporters
    json.owner_id project.owner_id
    json.owner_name project.owner.username
    json.status project.status
    json.ongoing project.ongoing
    json.time_left project.time_left
  end
end

