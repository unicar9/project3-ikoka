# README

# iKoka

## Overview

iKoka 爱好家 is a websocket powered chatroom where users' messages will generate random audio and visual effects with p5.js. You can experience the live site [here](http://ikoka-ga.herokuapp.com). All comments and advises are welcome.

This project is the final project of General Assembly Sydney Web Development Immersive course and it is a group project by: [Weijia Li](https://github.com/unicar9) and [Lingxiao Wang](https://github.com/douMax)

## Features:

* User can send message to the chatroom and the message text will floating on the chatroom canvas with a random shape and a random colour

* New message will trigger a note with random frequency using p5.sound library

* Each message have a lifespan of 30 seconds. After 30 seconds the message fades away.

* User can create a chatroom, and invite other users by searching username. New chatroom will have a random cover image and a random background image every time the page reloads.

* We placed some easter eggs to pay attributes Luke, Edge and every fellow students of Wdi22. Really good to have all of you in the course!!!!


## Screenshots:

[Live site](http://ikoka-ga.herokuapp.com)

![ikoka](http://i.imgur.com/f5QaMYx.png)

![ikoka](http://i.imgur.com/ggwchEe.png)

![ikoka](http://i.imgur.com/h0DO1sL.png)

![ikoka](http://i.imgur.com/rArXqlY.png)

![ikoka](http://i.imgur.com/Lp8TbgD.png)



## Bugs:

* When inviting new users to the chatroom, if more than one results match the search query, the add buttons of each result will not align vertically
* On heroku live version: Cropping and resizing avatar image will cause problems


## Framework and Libraries Used:

* Ruby on Rails: we built the website's backend using Ruby on Rails
* Websocket: we use Rails' built-in Websocket to manage the users' connection to the chatroom and broadcast the messages
* [p5.js](p5js.org): p5.js is used to create visual effects
* [p5.dom](https://p5js.org/reference/#/libraries/p5.dom): p5.dom is used to allow interact with HTML objects
* [p5.sound](https://p5js.org/reference/#/libraries/p5.sound): p5.sound library is used to generate sound when new message is sent
* [Semantic-UI](https://semantic-ui.com/): We use Semantic-UI as the main css framework to build the user interface
* [Croppie JS](https://foliotek.github.io/Croppie/): is used for users to crop and resize the image before saving as their avatar
* [jQuery-UI](https://jqueryui.com/): enables users to drag and drop their own images as avatar


## Whishlist:

* Email notification and verification: send email when signup, reset password via email, share chatroom via email
* Automatically broadcast a message to the room when new user enters the room(subscribe to the channel)
* Display the users list of the chatroom based on their active status
* Allow user to quit a chatroom
* Limit the number of history messages when enter a chatroom
* Connect the web app with Arduino development board and use sensors as extra input source to generate audio/visual effects

## Acknowledgments:

The following libraries and online resources that make our site joyful and colourful:
* The homepage's background effect is created using [particles.js](http://vincentgarreau.com/particles.js/), a lightweight, powerful and easy to use Javascript library to create particles
* The auto-generated user avatar image is created using [ROBOHASH](https://robohash.org/)

We would like to thank Luke Hammer for introducing us to p5.js and encouraging us in creative coding. Big thanks to Luke and Matthew Edge-Williams for pointing us to the right direction, and finding solutions to our problems during the project. Thanks to everyone in Wdi22 for all the crazy final project ideas.
