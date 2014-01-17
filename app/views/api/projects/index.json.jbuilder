json.array! @projects do |project|
  json.id project.id
  json.name project.name
  json.description project.description
  json.owner_id project.owner_id
  json.goal project.goal
  json.end_time project.end_time
end

