* First step: init the folder as a npm project.   
Command:
```
 npm init -y
 ```
 Output:
 ```json
Wrote to C:\Users\Jbt\Desktop\CRUD\package.json:

{
  "name": "CRUD",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
* Install `express` and `body-parser` package   
Command:
```
npm i -s express
npm i -s body-parser
 ```

curl -v -X POST -H "Content-type: application/json" -d "{\"price\":\"3000\", \"size\":\"small\" }"  localhost:4500/addBike


Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> POST /addBike HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 33
>
* upload completely sent off: 33 out of 33 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 23
< ETag: W/"17-oZS7RJ6N02DtH6hBpUAe79ZkPLw"
< Date: Thu, 11 Oct 2018 15:09:38 GMT
< Connection: keep-alive
<
Bike addedd to the file* Connection #0 to host localhost left intact


C:\Users\Jbt>curl -v -X POST -H "Content-type: application/json" -d  "{\"frame_colors\": [\"Silver, gray or bare metal\"],\"thumb\": \"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg\",\"id\": 120343,\"title\": \"2004 Trek 7300 FX\",\"serial\": \"tbi0407c25dl064\",\"manufacturer_name\": \"Trek\",\"frame_model\": \"7300 FX\",\"year\":2020}" localhost:4500/api/bike
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> POST /addBike HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 261
>
* upload completely sent off: 261 out of 261 bytes
< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 33
< ETag: W/"21-6Q4JCwchD4VpomIU8+BJueNRA1I"
< Date: Thu, 11 Oct 2018 17:03:15 GMT
< Connection: keep-alive
<
Year must be between 1993 to 2018* Connection #0 to host localhost left intact


curl -v -X POST -H "Content-type: application/json" -d  "{\"frame_colors\": [\"Silver, gray or bare metal\"],\"thumb\": \"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg\",\"id\": 120343,\"title\": \"2004 Trek 7300 FX\",\"serial\": \"tbi0407c25dl064\",\"manufacturer_name\": \"Trek\",\"frame_model\": \"7300 FX\",\"year\":2016}" localhost:4500/api/bike

Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> POST /addBike HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 261
>
* upload completely sent off: 261 out of 261 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 23
< ETag: W/"17-oZS7RJ6N02DtH6hBpUAe79ZkPLw"
< Date: Thu, 11 Oct 2018 17:04:19 GMT
< Connection: keep-alive
<
Bike addedd to the file* Connection #0 to host localhost left intact




curl -X GET -v localhost:4500/api/bike

C:\Users\Jbt>curl -X GET -v localhost:4500/api/bike
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> GET /api/bike HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 257
< ETag: W/"101-bFFwfCv46aT4VVyxcD+wlHxRXlU"
< Date: Thu, 11 Oct 2018 18:25:45 GMT
< Connection: keep-alive
<
[{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":120343,"title":"2004 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2016}]* Connection #0 to host localhost left intact


curl -v -X POST -H "Content-type: application/json" -d  "{\"frame_colors\": [\"Silver, gray or bare metal\"],\"thumb\": \"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg\",\"id\": 13,\"title\": \"2004 Trek 7300 FX\",\"serial\": \"tbi0407c25dl064\",\"manufacturer_name\": \"Trek\",\"frame_model\": \"7300 FX\",\"year\":2016}" localhost:4500/api/bike

Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> POST /api/bike HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 257
>
* upload completely sent off: 257 out of 257 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 23
< ETag: W/"17-oZS7RJ6N02DtH6hBpUAe79ZkPLw"
< Date: Thu, 11 Oct 2018 18:26:51 GMT
< Connection: keep-alive
<
Bike addedd to the file* Connection #0 to host localhost left intact

C:\Users\Jbt>curl -X GET -v localhost:4500/api/bike
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> GET /api/bike HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 509
< ETag: W/"1fd-drK7rrly0TwfVwcL1plc0Iz96BY"
< Date: Thu, 11 Oct 2018 18:26:59 GMT
< Connection: keep-alive
<
[{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":120343,"title":"2004 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2016},{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":13,"title":"2004 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2016}]* Connection #0 to host localhost left intact


curl -v -X PUT -H "Content-type: application/json" -d "{\"title\": \"2018 Trek 7300 FX\",\"year\":2018}" localhost:4500/api/bike?id=13

0 FX\",\"year\":2018}" localhost:4500/api/bike?id=13
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> PUT /api/bike?id=13 HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 42
>
* upload completely sent off: 42 out of 42 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 23
< ETag: W/"17-BSaGRNQ+5XA/grcRURX2eqsMWbg"
< Date: Thu, 11 Oct 2018 18:28:52 GMT
< Connection: keep-alive
<
Bike edited in the file* Connection #0 to host localhost left intact

C:\Users\Jbt>curl -X GET -v localhost:4500/api/bike
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 4500 (#0)
> GET /api/bike HTTP/1.1
> Host: localhost:4500
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 509
< ETag: W/"1fd-HA/iHbQPxAR0IaX1MwVWY+TCkVk"
< Date: Thu, 11 Oct 2018 18:28:59 GMT
< Connection: keep-alive
<
[{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":120343,"title":"2004 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2016},{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":13,"title":"2018 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2018}]* Connection #0 to host localhost left intact


curl -v -X DELETE localhost:4500/api/bike?id=13