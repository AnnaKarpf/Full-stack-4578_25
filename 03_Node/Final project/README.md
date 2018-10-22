# Book store

### Project description:
* This app is a website of `Books store`
* Every client can see the books and filter them
* Every signed-in client can add a book to his cart
* Only the manager can add a new book

### See live demo:
TODO

### This project uses the following technologies:
* `Mongo` - database
* `NodeJs` - server side
* `Angular` - client side

### To run this project in your local computer, you need:
* MongoDB
* Node
* Angular cli


# Step 1 - create the DB models


### Users
firstName
lastName
userName
password
cart

### Books
id
title
subtitle
authors
publisher
publishedDate
description
pageCount


# Step 2 - create the node server
The server side will use `express` as a web server.   
The server will contain the following controllers:
* Books Controller
    * `Get` - return all the books from the db
    * `Get` - a specific book - by the book id
    * `Post` - add a new book - *only by the manager*
* Users Controller
    * `Get` - this will serve all the login requests (will get from the header the user details, and return a token if the user exists)
    * `Post` - add a new user  - this will serve all the sign-up requests
    * `Put` - will update the user's cart with a new book that the user added to his cart - *only by a logged in user*

# Step 3 - test the node server with `curl`


# Step 4 - create the angular client