# README

# iKoka

## Overview

iKoka(爱好家) is a websocket powered chatroom where users can chat in real-time. Also, when users send messages, it will generate random audio and visual effects built with p5.js. You can experience the live site with your friends [here](http://ikoka-ga.herokuapp.com).
All comments and suggestions are welcome.(●´∀｀●)ﾉ

This project is the final project of General Assembly Sydney Web Development Immersive course and it is a group project by: [Weijia Li](https://github.com/unicar9) and [Lingxiao Wang](https://github.com/douMax)

## Features:

* Users can send message when they join a chatroom and the message text will move around on screen randomly along with a random shape and a random colour

* New message will trigger a music note based on a random frequency which comes from p5.sound.js library

* Each message has a lifespan of 30 seconds and it will gradually fade away.

* Users can create a chatroom, and invite other registered users by searching username. Every new chatroom will have a random cover image and a random background image every time the page reloads.

* We placed some easter eggs to pay tribute to Luke, Edge and every fellow students in Wdi22. We felt very honored to have all of you in the class!!!!


## Screenshots:

[Live site](http://ikoka-ga.herokuapp.com)

![ikoka](http://i.imgur.com/f5QaMYx.png)

![ikoka](http://i.imgur.com/ggwchEe.png)

![ikoka](http://i.imgur.com/h0DO1sL.png)

![ikoka](http://i.imgur.com/rArXqlY.png)

![ikoka](http://i.imgur.com/Lp8TbgD.png)



## Bugs:

* When inviting new users to the chatroom, if more than one results match the search query, the add buttons of each result will not align vertically

## Framework and Libraries Used:

* Ruby on Rails: we built the website's back-end using Ruby on Rails
* Websocket: we use Rails 5 Action Cable to enable real-time communications
* [p5.js](p5js.org): p5.js is used to create creative visual effects
* [p5.dom](https://p5js.org/reference/#/libraries/p5.dom): p5.dom is used to allow interact with HTML objects
* [p5.sound](https://p5js.org/reference/#/libraries/p5.sound): p5.sound library is used to generate a random music note when a new message is sent
* [Semantic-UI](https://semantic-ui.com/): We used Semantic-UI as the main css framework to build the user interface
* [Croppie JS](https://foliotek.github.io/Croppie/): is used to create a UI for users to crop and resize the image before uploading
* [jQuery-UI](https://jqueryui.com/): enables users to drag and drop their local images to the browser and upload directly


## Wishlist:

* Email notification and verification: send email when signup, reset password via email, share chatroom via email
* Automatically broadcast a message to the room when new user enters the room(subscribe to the channel)
* Display the users list of the chatroom based on their active status
* Allow user to quit a chatroom
* Limit the number of history messages when enter a chatroom
* Connect the web app with Arduino development board and use sensors as extra input devises to generate audio/visual effects

## Acknowledgments:

The following libraries and online resources were used to make our website enjoyable and colourful:
* The homepage's background particle effect is created using [particles.js](http://vincentgarreau.com/particles.js/). It is a lightweight, powerful and easy to use Javascript library to create particles effects.
* The auto-generated user avatar image is from [ROBOHASH](https://robohash.org/).

We would like to thank Luke Hammer for introducing us to p5.js and encouraging us in the field of creative coding. We would also like to thank Luke and Edge for pointing us to the right direction, and helping us find solutions to our problems during the project week. Finally, thanks to everyone in Wdi22 for all the crazy and wonderful final projects.
