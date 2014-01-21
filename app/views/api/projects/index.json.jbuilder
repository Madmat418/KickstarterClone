json.array! @projects do |project|
  json.id project.id
  json.name project.name
  json.description project.description
  json.owner_id project.owner_id
  json.owner_name project.owner.username
  json.goal project.goal
  json.end_time project.end_time
  json.rewards project.rewards
  json.current_funding project.current_funding
  json.num_supporters project.num_supporters
  json.percentage project.percentage
end

