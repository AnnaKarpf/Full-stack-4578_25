const path = require('path'); //path is a part of GLOBAL


// Normalize a string path, reducing '..' and '.' parts.
// When multiple slashes are found, they're replaced by a single one; 
//when the path contains a trailing slash, 
//it is preserved. On Windows backslashes are used.
const basePath = path.join(__dirname + "\\dist");

console.log("__dirname: ", __dirname+ "\\dist");
console.log("basePath: ", basePath);



const manipulatePath = path.join(__dirname + "\\..\\dist");

console.log("__dirname: ", __dirname + "\\..\\dist");
console.log("manipulatePath: ", manipulatePath);


/*
OUTPUT:
______________________
__dirname: C:\Users\Jbt\00_Path\dist
basePath:  C:\Users\Jbt\00_Path\dist


__dirname:       C:\Users\Jbt\00_Path\..\dist
manipulatePath:  C:\Users\Jbt\dist
*/