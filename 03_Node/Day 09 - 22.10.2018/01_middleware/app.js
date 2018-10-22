let express=require("express");

let app=express();


let middlware=(req,res,nextStep)=>{
    console.log("in the middlware");

    if(req.query.id){
        nextStep();
    }
    else{
        res.status(400).send("please add id to the url");
    }
};


app.get("/app1",middlware,(req, res)=>{
    console.log("in app1");
    res.status(200).send("ok app1");
})

app.get("/app2",middlware,(req, res)=>{
    console.log("in app2");
    res.status(200).send("ok app2");
})


app.get("/app3",(req, res)=>{
    console.log("in app3");
    res.status(200).send("ok app3");
})




app.listen(6000, ()=>{console.log("ok")})