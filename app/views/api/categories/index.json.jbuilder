json.array! @categories do |cat|
  json.id cat.id
  json.category cat.category
  json.projects cat.projects
end