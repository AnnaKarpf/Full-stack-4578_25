var express = require('express');
var fs = require('fs');

//express function:
//Creates an Express application. 
//The express() function is a top-level function exported by the express module.
var app = express();

fs.writeFileSync("./req.json", "[]");

app.get("/api/test",
    (req, res) => {
        let reqArray=require('./req.json');
        reqArray.push(req.query);
        fs.writeFileSync("./req.json", JSON.stringify(reqArray));
        res.status(200);
        res.send(JSON.stringify(reqArray))
    });

app.listen(3500, () => { console.log("server is listening to port 3500") });

/*
Run the app with the following commands:
___________________________________

node app.js
curl -v http://localhost:3500/api/test
*/