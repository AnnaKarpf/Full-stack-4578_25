const path = require('path'); //path is a part of GLOBAL
const express = require('express');  //installed from npm


//Creates an Express application
const app = express();

// Normalize a string path, reducing '..' and '.' parts.
const basePath = path.join(__dirname + "/dist");


// app.use can add middleware - for app level (not for a specific controller)
app.use(express.static(`${basePath}/project`));


app.get(`/`, (req, res) => {
    res.sendFile(`${basePath}/project/index.html`);
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`OK`);
});