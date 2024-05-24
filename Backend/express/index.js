const express = require("express");
const app  = express();

let port = 3000;//8080
app.listen(port,()=>{
    console.log("app is listening on port :",port);
})
/* app.use((req,res)=>{
   
    console.log("Request recivied")
    res.send("Hello Client")
}) */
/* app.get("/" ,(req,res)=>{
res.send("Root Path")
})
app.get("/About" ,(req,res)=>{
    res.send("Root About")
    })
app.get("/search" ,(req,res)=>{
res.send("Root search")
})
app.get("*" ,(req,res)=>{
    res.send("Root Doesnt exist")
    })
app.post("/",(req,res)=>{
    res.send("You sent a post request")
})
app.get("/s" ,(req,res)=>{
    res.send("Root s")
    }) */
/*      app.get("/" ,(req,res)=>{
res.send("Root Path")
})
 app.get("/:username" ,(req,res)=>{
   let {username,id} = req.params;
res.send(`Welcome @{username}`)
}) */
app.get("/search",(req,res)=>{
  let {q} = req.query;
  if(!q){
    res.send("Nothing searched")
  }
  res.send(`thesse are the search results ${q}`)
})