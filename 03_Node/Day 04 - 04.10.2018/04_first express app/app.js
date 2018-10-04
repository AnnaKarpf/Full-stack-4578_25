const express = require('express');

//The express() function is a top-level function exported by the express module.
//Creates an Express application. 
const app = express();

app.get("/", (req,res)=>{
  res.send("<h1>Welcome to our first app</h1>")
});

app.listen(9000,()=> {console.log("server is listening on port 9000");});