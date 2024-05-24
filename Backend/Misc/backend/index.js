const express = require("express")
let app = express();
const port = 8080;

app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send(`standard GEt Response Welcome ${user}`);
})
app.post("/register",(req,res)=>{
    res.send("standard POST Response");
    console.log(req.body);
    
})


app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})