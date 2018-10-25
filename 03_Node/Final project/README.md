# Book store

### Project description:
* This app is a website of `Books store`
* Every client can see the books and filter them
* Every signed-in client can add a book to his cart
* Only the manager can add a new book

### See live demo:
TODO

### Source of book data:
https://www.googleapis.com/books/v1/volumes?q=a&maxResults=40&fields=items(id%2CvolumeInfo(authors%2Cdescription%2CimageLinks(thumbnail)%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))

### This project uses the following technologies:
* `Mongo` - database
* `NodeJs` - server side
* `Angular` - client side

### To run this project in your local computer, you need:
* MongoDB
* Node
* Angular cli

### Steps to run this app in the local coomputer
* Run the mongo server in the computer:
```
cd "C:\Program Files\MongoDB\Server\3.4\bin"
mongod
```
* Clone this project to your computer
* Change the current path in the cli to the project path
* To run the node server, wtite this commands:
```
cd server
npm i
npm start
```
* To run the angular client, wtite this commands:
```
cd client
npm i
ng serve --open
```

# Step 1 - create the DB models


### Users
```json
 {
        firstName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 15
        },
        lastName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 15
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            minlength: 2,
            maxlength: 15
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 10
        },
        cart: {
            type: []
        }
}
```

### Books
```json
{
    id: {
        type: String,
        required: true,
        unique: true,
        minlength: 12,
        maxlength: 12
    },
    volumeInfo: {
        title: {
            type: String,
            required: true,
            minlength: 1
        },
        subtitle: {
            type: String
        },
        authors: {
            type: []
        },
        publisher: {
            type: String
        },
        publishedDate: {
            type: String
        },
        description: {
            type: String
        },
        pageCount: {
            type: Number,
            min: 1
        },
        imageLinks: {
            thumbnail: {
                type: String
            }
        }
}
```

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
### Users Controller -    
for the following requests we will use this user info:
```json
{
        firstName:"Bob",
        lastName: "Bryce",
        userName: "BobB",
        password: "abcde"
}
```
*Note:* the password must be sent to the server with a hash256 format
```
src password: abcde
hash256 password: 36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c
```
* Post - with valid data for a new user
```       
curl -v -X POST -H "Content-type: application/json" -d  "{\"firstName\":\"Bob\",\"lastName\": \"Bryce\",\"userName\": \"BobB\",\"password\":\"36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c\"}" localhost:6000/api/users
```
```
> POST /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 136
>
* upload completely sent off: 136 out of 136 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< xx-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViY2UxODFmOGZmN2JlMjk3NDZhY2YzNSIsImlhdCI6MTU0MDIzMzI0N30.AR4tFm6PwB_FGWE7Btx1EEjA8H74bwdDZA4J1pk7NcU
< Content-Type: application/json; charset=utf-8
< Content-Length: 185
< ETag: W/"b9-blSZhfr+qQI5vNtnWCGMhjuLj5w"
< Date: Mon, 22 Oct 2018 18:34:07 GMT
< Connection: keep-alive
<
{"cart":[],"_id":"5bce181f8ff7be29746acf35","firstName":"Bob","lastName":"Bryce","userName":"BobB","password":"36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c","__v":0}
```
* Post- with invalid data for a new user (the userName is not unique)
```       
curl -v -X POST -H "Content-type: application/json" -d  "{\"firstName\":\"Bob\",\"lastName\": \"Bryce\",\"userName\": \"BobB\",\"password\":\"36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c\"}" localhost:6000/api/users
```
```
> POST /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 136
>
* upload completely sent off: 136 out of 136 bytes
< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 166
< ETag: W/"a6-yDxE4gxuvRFBUhDUb18MkGvqi1w"
< Date: Mon, 22 Oct 2018 18:44:41 GMT
< Connection: keep-alive
<
{"driver":true,"name":"MongoError","index":0,"code":11000,"errmsg":"E11000 duplicate key error collection: bookStore.users index: userName_1 dup key: { : \"BobB\" }"}
```

* Post- with invalid data for a new user (the userName to short)
```       
curl -v -X POST -H "Content-type: application/json" -d  "{\"firstName\":\"Bob\",\"lastName\": \"Bryce\",\"userName\": \"a\",\"password\":\"36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c\"}" localhost:6000/api/users
```
```
> POST /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 133
>
* upload completely sent off: 133 out of 133 bytes
< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 517
< ETag: W/"205-qoWGKVImj5e9T/cVnd1myzQlfFM"
< Date: Mon, 22 Oct 2018 18:46:30 GMT
< Connection: keep-alive
<
{"errors":{"userName":{"message":"Path `userName` (`a`) is shorter than the minimum allowed length (2).","name":"ValidatorError","properties":{"message":"Path `userName` (`a`) is shorter than the minimum allowed length (2).","type":"minlength","minlength":2,"path":"userName","value":"a"},"kind":"minlength","path":"userName","value":"a"}},"_message":"User validation failed","message":"User validation failed: userName: Path `userName` (`a`) is shorter than the minimum allowed length (2).","name":"ValidationError"}
```


* Get - with valid password and userName
```       
curl -v -X GET -H "xx-auth: 36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42cBobB" localhost:6000/api/users
```
```
> GET /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
> xx-auth: 36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42cBobB
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< xx-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWJjZTE4MWY4ZmY3YmUyOTc0NmFjZjM1IiwiaWF0IjoxNTQwNDgwMTMyfQ.5Z7cob_ydFoEsRmuy5LyrZFiu3Yt17bHj79MH5w5KFk
< Content-Type: text/html; charset=utf-8
< Content-Length: 26
< ETag: W/"1a-lntZxpO/NYZB2ktprU25dMf3tHs"
< Date: Thu, 25 Oct 2018 15:08:52 GMT
< Connection: keep-alive
<
{"status":"login success"}
```

* Get - with invalid userName
```       
curl -v -X GET -H "xx-auth: 36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42cALICE" localhost:6000/api/users
```
```
> GET /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
> xx-auth: 36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42cALICE
>
< HTTP/1.1 401 Unauthorized
< X-Powered-By: Express
< Date: Mon, 22 Oct 2018 18:42:52 GMT
< Connection: keep-alive
< Content-Length: 0
```



* Put - with valid token
```       
curl -v -X PUT -H "xx-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWJjZTE4MWY4ZmY3YmUyOTc0NmFjZjM1IiwiaWF0IjoxNTQwNDgwMTMyfQ.5Z7cob_ydFoEsRmuy5LyrZFiu3Yt17bHj79MH5w5KFk"  -H "Content-Type: application/json" -d  "{\"bookId\":\"1234a\"}" localhost:6000/api/users
```

```
> PUT /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
> xx-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWJjZTE4MWY4ZmY3YmUyOTc0NmFjZjM1IiwiaWF0IjoxNTQwNDgwMTMyfQ.5Z7cob_ydFoEsRmuy5LyrZFiu3Yt17bHj79MH5w5KFk
> Content-Type: application/json
> Content-Length: 18
>
* upload completely sent off: 18 out of 18 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 32
< ETag: W/"20-lvV+6WnlrlGbfChN0aJrcnJVlto"
< Date: Thu, 25 Oct 2018 15:25:51 GMT
< Connection: keep-alive
<
{"status":"addedd successfully"}
```

* Put - with no token
```       
curl -v -X PUT -H "Content-Type: application/json" -d  "{\"bookId\":\"1234a\"}" localhost:6000/api/users
```
```
> PUT /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
> Content-Type: application/json
> Content-Length: 18
>
* upload completely sent off: 18 out of 18 bytes
< HTTP/1.1 401 Unauthorized
< X-Powered-By: Express
< Date: Thu, 25 Oct 2018 15:27:59 GMT
< Connection: keep-alive
please add a token to the request
```
* Put - with invalid token
```       
curl -v -X PUT -H "xx-auth: aaaaaaaaaa"  -H "Content-Type: application/json" -d  "{\"bookId\":\"1234a\"}" localhost:6000/api/users
```
```
> PUT /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*





> xx-auth: aaaaaaaaaa
> Content-Type: application/json
> Content-Length: 18
>
* upload completely sent off: 18 out of 18 bytes
< HTTP/1.1 401 Unauthorized
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 29
< ETag: W/"1d-u4H+rYEaqeEIvVnIMRIrqPjsgEg"
< Date: Thu, 25 Oct 2018 15:32:47 GMT
< Connection: keep-alive
<
invalid token in this request
```
### Book Controller -
for the following requests we will use this manager info:
```json
{
        firstName:"Alice",
        lastName: "Bryce",
        userName: "manager",
        password: "abcde"
}
```
*Note:* the password must be sent to the server with a hash256 format
```
src password: abcde
hash256 password: 36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c
```

* Get - all books
```
curl -v -X GET localhost:6000/api/books
```
```
> GET /api/books HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 27202
< ETag: W/"6a42-VCKA8E7zDQLgHESJW9DKLlMRs3c"
< Date: Thu, 25 Oct 2018 16:00:08 GMT
< Connection: keep-alive
{"items":[{"volumeInfo":{"imageLinks":{"thumbnail":"http://books.google.com/books/content?id=fug5AQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"authors":["Josiah Willard Gibbs"],"title":"A Manual Hebrew and English Lexicon, Including the Biblical Chaldee","subtitle":"Designed Particularly for Beginners","publishedDate":"1828","pageCount":210},"_id":"5bd1e72018be551bb85d0a90","id":"fug5AQAAMAAJ","__v":0}]}
```

* Get - specific book (with id fug5AQAAMAAJ)
```
curl -v -X GET localhost:6000/api/books/id/fug5AQAAMAAJ
```
```
> GET /api/books/id/fug5AQAAMAAJ HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 419
< ETag: W/"1a3-SDAXCGrOqHskO4j0JOhhp2RON+o"
< Date: Thu, 25 Oct 2018 16:46:19 GMT
< Connection: keep-alive
<
{"volumeInfo":{"imageLinks":{"thumbnail":"http://books.google.com/books/content?id=fug5AQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"authors":["Josiah Willard Gibbs"],"title":"A Manual Hebrew and English Lexicon, Including the Biblical Chaldee","subtitle":"Designed Particularly for Beginners","publishedDate":"1828","pageCount":210},"_id":"5bd1e72018be551bb85d0a90","id":"fug5AQAAMAAJ","__v":0}
```

* Post- with invalid data for a new user (to create the manager)
```       
curl -v -X POST -H "Content-type: application/json" -d  "{\"firstName\":\"Alice\",\"lastName\": \"Bryce\",\"userName\": \"manager\",\"password\":\"36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c\"}" localhost:6000/api/users
```
```
> POST /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 141
>
* upload completely sent off: 141 out of 141 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< xx-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWJkMWYzZjM2YTdlOGExNTdjYjg0YzhjIiwiaWF0IjoxNTQwNDg2MTMxfQ.i68cuM_DH6PaMtLaqD_vjdcJsKqShU3bqEfxVv6JBw4
< Content-Type: application/json; charset=utf-8
< Content-Length: 190
< ETag: W/"be-Ym11i5pRW20WCZcwMCxsowHO6jM"
< Date: Thu, 25 Oct 2018 16:48:51 GMT
< Connection: keep-alive
<
{"cart":[],"_id":"5bd1f3f36a7e8a157cb84c8c","firstName":"Alice","lastName":"Bryce","userName":"manager","password":"36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c","__v":0}
```


* Get - login as manager to get the token (and use this token to add a new book)
```       
curl -v -X GET -H "xx-auth: 36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42cmanager" localhost:6000/api/users
```
```
> GET /api/users HTTP/1.1
> Host: localhost:6000
> User-Agent: curl/7.55.1
> Accept: */*
> xx-auth: 36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42cmanager
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< xx-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWJkMWYzZjM2YTdlOGExNTdjYjg0YzhjIiwiaWF0IjoxNTQwNDg2MjIwfQ.340y7dPsriXuM1Pgi8WXXsaabmcMpeTiOmfnQBfG6S8
< Content-Type: text/html; charset=utf-8
< Content-Length: 26
< ETag: W/"1a-lntZxpO/NYZB2ktprU25dMf3tHs"
< Date: Thu, 25 Oct 2018 16:50:20 GMT
< Connection: keep-alive
<
{"status":"login success"}
```

* Post - add a new book (with the manager's token)
```       
POST /api/books HTTP/1.1
HOST: localhost:6000
xx-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWJkMWYzZjM2YTdlOGExNTdjYjg0YzhjIiwiaWF0IjoxNTQwNDg2MjIwfQ.340y7dPsriXuM1Pgi8WXXsaabmcMpeTiOmfnQBfG6S8
content-type: application/json
content-length: 1285

{
  "id": "_QpfBwAAQBAJ",
  "volumeInfo": {
    "title": "Winter",
    "authors": [
      "Marissa Meyer"
    ],
    "publisher": "Feiwel & Friends",
    "publishedDate": "2015-11-10",
    "description": "The #1 New York Times Bestselling Series! Princess Winter is admired by the Lunar people for her grace and kindness, and despite the scars that mar her face, her beauty is said to be even more breathtaking than that of her stepmother, Queen Levana. Winter despises her stepmother, and knows Levana won't approve of her feelings for her childhood friend--the handsome palace guard, Jacin. But Winter isn't as weak as Levana believes her to be and she's been undermining her stepmother's wishes for years. Together with the cyborg mechanic, Cinder, and her allies, Winter might even have the power to launch a revolution and win a war that's been raging for far too long. Can Cinder, Scarlet, Cress, and Winter defeat Levana and find their happily ever afters? Fans will not want to miss this thrilling conclusion to Marissa Meyer's national bestselling Lunar Chronicles series.",
    "pageCount": 400,
    "imageLinks": {
      "thumbnail": "http://books.google.com/books/content?id=_QpfBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
  }
}
```
```
x-powered-by:Express
content-type:application/json; charset=utf-8
content-length:1232
etag:W/"4d0-qE7X58m9ttUpRumQqICimX7Kf7c"
date:Thu, 25 Oct 2018 17:12:57 GMT
connection:keep-alive
{
"volumeInfo": {
"imageLinks": {
"thumbnail": "http://books.google.com/books/content?id=_QpfBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
},
"authors": [
  "Marissa Meyer"
],
"title": "Winter",
"publisher": "Feiwel & Friends",
"publishedDate": "2015-11-10",
"description": "The #1 New York Times Bestselling Series! Princess Winter is admired by the Lunar people for her grace and kindness, and despite the scars that mar her face, her beauty is said to be even more breathtaking than that of her stepmother, Queen Levana. Winter despises her stepmother, and knows Levana won't approve of her feelings for her childhood friend--the handsome palace guard, Jacin. But Winter isn't as weak as Levana believes her to be and she's been undermining her stepmother's wishes for years. Together with the cyborg mechanic, Cinder, and her allies, Winter might even have the power to launch a revolution and win a war that's been raging for far too long. Can Cinder, Scarlet, Cress, and Winter defeat Levana and find their happily ever afters? Fans will not want to miss this thrilling conclusion to Marissa Meyer's national bestselling Lunar Chronicles series.",
"pageCount": 400
},
"_id": "5bd1f9993ef73b0504b30576",
"id": "_QpfBwAAQBAJ",
"__v": 0
}
```
# Step 4 - create the angular client
