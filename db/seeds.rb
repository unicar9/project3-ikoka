# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "ikoka koka koka planting...."

User.destroy_all
u1 = User.create name:"unicar", email:"unicar9@gmail.com", password:"panda", avatar:"https://fillmurray.com/100/100",is_admin:true
u2 = User.create name:"panda", email:"panda@gmail.com", password:"panda", avatar:"https://fillmurray.com/100/100"


Chatroom.destroy_all
c1 = Chatroom.create topic:"Welcome to iKoka", description:"iKoka is awesome!", cover:"http://fillmurray.com/400/200"
c2 = Chatroom.create topic:"The Last of Us rocks!", description:"Waiting for the sequel", cover:"http://fillmurray.com/400/200"

Message.destroy_all
m1 = Message.create content:"I love iKoka"
m2 = Message.create content:"I love playing the legend of Zelda"

u1.messages << m1
u2.messages << m2
c1.messages << m1 << m2


puts "...planted.... ikoka koka koka......"
