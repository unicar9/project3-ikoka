# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "ikoka koka koka planting...."

User.destroy_all
u1 = User.create name:"unicar", email:"unicar9@gmail.com", password:"panda", avatar:"https://fillmurray.com/100/100", is_admin:true
u2 = User.create name:"panda", email:"panda@gmail.com", password:"panda", avatar:"https://fillmurray.com/100/100", is_admin:true
u3 = User.create name:"lingxiao", email:"lingxiao@gmail.com", password:"panda", avatar:"https://robohash.org/lingxiao?size=100x100&set=set2&bgset=bg1"
u4 = User.create name:"zhuzhu", email:"zhuzhu@gmail.com", password:"panda", avatar:"https://robohash.org/zhuzhu?size=100x100&set=set2&bgset=bg1"

Chatroom.destroy_all
c1 = Chatroom.create topic:"Welcome to iKoka", description:"iKoka is awesome!", cover:"http://lorempixel.com/400/200/abstract/1"
c2 = Chatroom.create topic:"The Last of Us rocks!", description:"Waiting for the sequel", cover:"http://lorempixel.com/400/200/abstract/2"
c3 = Chatroom.create topic:"Wdi22", description:"Waiting for the sequel", cover:"http://lorempixel.com/400/200/abstract/3"
c4 = Chatroom.create topic:"Show me the Wave", description:"Waiting for the sequel", cover:"http://lorempixel.com/400/200/abstract/4"
c5 = Chatroom.create topic:"我是真的大妈", description:"Waiting for the sequel", cover:"http://lorempixel.com/400/200/abstract/5"

Message.destroy_all
m1 = Message.create content:"I love iKoka"
m2 = Message.create content:"I love playing the legend of Zelda"

u1.messages << m1
u2.messages << m2
c1.messages << m1 << m2


puts "...planted.... ikoka koka koka......"
