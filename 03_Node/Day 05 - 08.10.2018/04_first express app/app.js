const express = require('express');

//The express() function is a top-level function exported by the express module.
//Creates an Express application. 
const app = express();

app.get("/", (req,res)=>{
  res.send("<h1>Welcome to our first app</h1>")
});

let port= proccess.env.PORT || 9000;
app.listen(port,()=> {console.log("server is listening");});