# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

categories = Category.create([{ category: 'Art', id: 1}, { category: 'Comics', id: 2},
{ category: 'Dance', id: 3}, { category: 'Design', id: 4}, { category: 'Fashion', id: 5}, 
{ category: 'Film & Video', id: 6}, { category: 'Food', id: 7}, { category: 'Games', id: 8},
{ category: 'Music', id: 9}, { category: 'Photography', id: 10}, { category: 'Publishing', id: 11},
{ category: 'Technology', id: 12}, { category: 'Theater', id: 13}])
