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