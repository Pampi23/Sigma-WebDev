const express = require("express");
const app = express();
const port = 8080
const path = require("path");
const igData = require("./data.json");
app.use(express.static(path.join(__dirname,"public")))

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));


app.listen(port,()=>{
    console.log("listening on port 8080")
})
/* app.get("/",(req,res)=>{
    res.render("home.ejs");
}) */
/* app.get("/",(req,res)=>{
    res.send("hello");
}) */
app.get("/rollDice",(req,res)=>{
 let diceVal =  Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num : diceVal});
})
app.get("/ig/:username",(req,res)=>{
  let {username} = req.params;
  const data = igData[username]
  console.log(data);
    res.render("ig.ejs",{
        data:igData[username]
    })
      
    
})