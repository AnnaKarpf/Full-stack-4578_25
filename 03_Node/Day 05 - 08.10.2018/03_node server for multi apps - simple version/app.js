const path = require('path');
const express = require('express');

const app = express();
const basePath = path.join(__dirname + "/dist");


app.use(express.static(`${basePath}/app1`));
app.use(express.static(`${basePath}/app2`));

app.get(`/app1`, (req, res) => {
    res.sendFile(`${basePath}/app1/index.html`);
});


app.get(`/app2`, (req, res) => {
    res.sendFile(`${basePath}/app2/index.html`);
});


const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`OK`);
});