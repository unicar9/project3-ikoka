# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "ikoka koka koka planting...."

User.destroy_all
u1 = User.create name:"unicar", email:"unicar9@gmail.com", password:"panda", avatar:"https://robohash.org/unicar?size=100x100&set=set2&bgset=bg1", is_admin:true
u2 = User.create name:"panda", email:"panda@gmail.com", password:"panda", avatar:"https://robohash.org/panda?size=100x100&set=set2&bgset=bg1", is_admin:true
u3 = User.create name:"lingxiao", email:"lingxiao@gmail.com", password:"panda", avatar:"https://robohash.org/lingxiao?size=100x100&set=set2&bgset=bg1"
u4 = User.create name:"zhuzhu", email:"zhuzhu@gmail.com", password:"panda", avatar:"https://robohash.org/zhuzhu?size=100x100&set=set2&bgset=bg1"
u5 = User.create name:"dama", email:"wanglingxiao@gmail.com", password:"panda", avatar:"https://robohash.org/dama?size=100x100&set=set2&bgset=bg1"
u6 = User.create name:"gungun", email:"cutepanda@gmail.com", password:"panda", avatar:"https://robohash.org/gungun?size=100x100&set=set2&bgset=bg1"

Chatroom.destroy_all
c1 = Chatroom.create topic:"Welcome to iKoka", description:"iKoka is awesome!", cover:"http://lorempixel.com/400/200/abstract/1"
c2 = Chatroom.create topic:"The Last of Us rocks!", description:"Waiting for the sequel", cover:"http://lorempixel.com/400/200/abstract/2"
c3 = Chatroom.create topic:"Wdi22", description:"Waiting for the sequel", cover:"http://lorempixel.com/400/200/abstract/3"
c4 = Chatroom.create topic:"Show me the Wave", description:"Waiting for the sequel", cover:"http://lorempixel.com/400/200/abstract/4"
c5 = Chatroom.create topic:"我是真的大妈", description:"Waiting for the sequel", cover:"http://lorempixel.com/400/200/abstract/5"

Message.destroy_all
m1 = Message.create content:"I love iKoka"
m2 = Message.create content:"I love playing the legend of Zelda"
m3 = Message.create content:"I am a good man"
m4 = Message.create content:"What is a variable"
m5 = Message.create content:"Thanks for watching"
m6 = Message.create content:"To be or not to be"

u1.messages << m1 << m3 << m4 << m6
u2.messages << m2
c1.messages << m1 << m2

#
# u3.messages << m5
#
# c1.messages << m1 << m2 << m4
# c2.messages << m5 << m6
# c3.messages << m3

puts "...planted.... ikoka koka koka......"
