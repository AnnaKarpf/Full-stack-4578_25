const path = require('path');
const fs = require('fs'); // fs = file system
const express = require('express');

const app = express();
const basePath = path.join(__dirname + "/dist");


app.get(`/`, (req, res) => {
    let linkList = "";

    //read `links.html` file and save the page content to resPage
    let resPage=fs.readFileSync("links.html","utf-8");

    fs.readdir(basePath, (err, folderNameArray) => {
        folderNameArray.forEach((folderName) => {
            linkList += `<li><a href="/${folderName}" target="blank">${folderName}</a></li>`;
        })

        res.send(resPage.replace("placeHolder", linkList));
    });
});



/**
 * function readdir(path: PathLike, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;
 * Asynchronous readdir - read a directory.
 */
fs.readdir(basePath, (err, folderNameArray) => {
    
    for (folderName of folderNameArray) {
        
        let temp=folderName;
        app.use(express.static(`${basePath}/${temp}`));

        app.get(`/${temp}`, (req, res) => {
            res.sendFile(`${basePath}/${temp}/index.html`);
        });
    }
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`OK`);
});
















