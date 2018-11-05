let express=require('express');
let app=express();

let myData=[
    {
        "name":"Bob",
        "age":22,
        "image":"book.png"
    },
    {
        "name":"Alice",
        "age":18,
        "image":"logo.png"
    }
]
app.use(express.static("./view"));


app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname+"/view/index.html");
})

app.get("/getImageLink",(req,res)=>{
    res.status(200).send(myData);
})

app.listen(4000, ()=>{console.log("ok")});