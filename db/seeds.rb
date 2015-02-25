# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.create(title: "How many licks to the center of a penny?", content: "I really need to know, my little brother's tongue is getting tired.")
Answer.create(question_id: 1, title: "Really??", content: "This is a bad idea, you should talk to your mother..")
