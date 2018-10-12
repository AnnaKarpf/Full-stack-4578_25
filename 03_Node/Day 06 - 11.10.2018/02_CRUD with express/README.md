# Steps to create the app
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
* Add a file named `bikes.js` to define a single bike as a class:
```javascript
class Bike {

    constructor() {
        this.frame_colors;
        this.thumb;
        this.id;
        this.title;
        this.serial;
        this.manufacturer_name;
        this.frame_model;
        this._year;
    }

    set year(value) {
        let currentYear = new Date().getFullYear();
        
        if (value <= currentYear && value >= currentYear - 25)
            this._year = value;
        else
            throw new Error(`Year must be between ${currentYear-25} to ${currentYear}`);
    }


    get year() {
        return this._year;
    }


}


module.exports={
    "BikeClassPointer":Bike
};
```

* Add a file named `app.js`, with the code that creates an `express` app with CRUD actions:
```javascript
// Requires:
let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");

let Bike = require("./bike");

// Create express app:
let app = express();

// Use middlewares (app level - not controller level):
// this middleware takes the content of the request`s body, and parses it to json format
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//check if "bikes.json" file exists
//if not - create this file and init it with an empty array
if (!fs.existsSync("bikes.json")) {
    fs.writeFileSync("bikes.json", "[]");
}

//retuen to the user the array from "bikes.json" file
app.get("/api/bike", (req, res) => {
    let bikeArr =JSON.parse(fs.readFileSync("./bikes.json"));
    res.status(200);
    res.send(bikeArr);
});

//update in "bikes.json" file, the bike with the id that the user sent in the query params
//the data of the updates is in the request`s body
app.put("/api/bike", (req, res) => {

    let bikeArr =JSON.parse(fs.readFileSync("./bikes.json"));

    //pointerToBike points to the bike with the requested id
    let pointerToBike = bikeArr.find(element => element.id == req.query.id);


    //if pointerToBike points to an object - update the object
    //else - send an error
    if (pointerToBike) {
        for (key in req.body) {
            pointerToBike[key] = req.body[key];
        }

        //save the updates to the file
        fs.writeFileSync("bikes.json", JSON.stringify(bikeArr));

        res.status(200);
        res.send("Bike edited in the file");
    } else {
        res.status(400);
        res.send("No such bike in the file");
    }
});

//remove from "bikes.json" file, the bike with the id that the user sent in the query params
app.delete("/api/bike", (req, res) => {

    let bikeArr =JSON.parse(fs.readFileSync("./bikes.json"));
    let filterBikeArr = bikeArr.filter(element => element.id != req.query.id)

    //if the filtered array is shorter than the original array - we moved a bike (delete success)
    //else - send an error
    if (filterBikeArr.length < bikeArr.length) {
        //save the updates to the file
        console.log(filterBikeArr, bikeArr);

        bikeArr=filterBikeArr;
        fs.writeFileSync("bikes.json", JSON.stringify(bikeArr));

        res.status(200);
        res.send("Deleted from the file");
    } 
    else {
        res.status(400);
        res.send("No such bike in the file");
    }
});

//add to "bikes.json" file, a new bike with the data of the request`s body
app.post("/api/bike", (req, res) => {

    let bikeArr =JSON.parse(fs.readFileSync("./bikes.json"));
    let newBike = new Bike.BikeClassPointer();

    try {
        for (key in req.body) {
            newBike[key] = req.body[key];
        }

        bikeArr.push(newBike);

        fs.writeFileSync("bikes.json", JSON.stringify(bikeArr));
        res.status(201);
        res.send("Bike addedd to the file");
    } catch (e) {
        res.status(400);
        res.send(e.message);
    }
});



app.listen(4500, () => {
    console.log("server runs")
});
```
# Run and test the app
* Run the app with this command:
```
node app.js
```
* Send first *POST* request   
request:
```
curl -v -X POST -H "Content-type: application/json" -d  "{\"frame_colors\": [\"Silver, gray or bare metal\"],\"thumb\": \"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg\",\"id\": 120343,\"title\": \"2004 Trek 7300 FX\",\"serial\": \"tbi0407c25dl064\",\"manufacturer_name\": \"Trek\",\"frame_model\": \"7300 FX\",\"year\":2016}" localhost:4500/api/bike
```
output:
```
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
Bike addedd to the file
```
* Send first *GET* request   
request:
```
curl -X GET -v localhost:4500/api/bike
```
output:
```
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
[{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":120343,"title":"2004 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2016}]
```
* Send a second *POST* request   

request:
```
curl -v -X POST -H "Content-type: application/json" -d  "{\"frame_colors\": [\"Silver, gray or bare metal\"],\"thumb\": \"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg\",\"id\": 13,\"title\": \"2004 Trek 7300 FX\",\"serial\": \"tbi0407c25dl064\",\"manufacturer_name\": \"Trek\",\"frame_model\": \"7300 FX\",\"year\":2016}" localhost:4500/api/bike
```
output:
```
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
Bike addedd to the file
```
* Send second *GET* request   
request:
```
curl -X GET -v localhost:4500/api/bike
```
output:
```
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
[{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":120343,"title":"2004 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2016},{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":13,"title":"2004 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2016}]
```
* Send first *PUT* request   
request:
```
curl -v -X PUT -H "Content-type: application/json" -d "{\"title\": \"2018 Trek 7300 FX\",\"year\":2018}" localhost:4500/api/bike?id=13
```
output:
```
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
Bike edited in the file
```
* Send third *GET* request   
requst:
```
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
[{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":120343,"title":"2004 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2016},{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":13,"title":"2018 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2018}]
```
* Send first *DELETE* request   
request:
```
curl -v -X DELETE localhost:4500/api/bike?id=13
```
* Send fourth *GET* request   
requst:
```
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
[{"frame_colors":["Silver, gray or bare metal"],"thumb":"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg","id":120343,"title":"2004 Trek 7300 FX","serial":"tbi0407c25dl064","manufacturer_name":"Trek","frame_model":"7300 FX","_year":2016}]
```