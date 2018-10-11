// Requires:
let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");

// Create express app:
let app = express();

// Use middlewares (app level - not controller level):
// this middleware takes the content of the request`s body, and parses it to json format
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


if (!fs.existsSync("bikes.json")) {
    fs.writeFileSync("bikes.json", "[]");
}

app.post("/addBike", (req, res) => {
    try {
        let bikeArr = require("./bikes.json");

        bikeArr.push(req.body);

        fs.writeFileSync("bikes.json", JSON.stringify(bikeArr));
        res.status(201);
        res.send("Bike addedd to the file");
    }
    catch(e){
        res.status(400);
        res.send(e.message);
    }
});

app.listen(4500, () => {
    console.log("server runs")
});