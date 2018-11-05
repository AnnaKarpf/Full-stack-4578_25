let express=require('express');
let app=express();


app.use(express.static("./view"));


app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname+"/view/index.html");
})

app.get("/getImageLink",(req,res)=>{
    res.status(200).send({"links":["book.png","logo.png"]});
})

app.listen(4200, ()=>{console.log("ok")});