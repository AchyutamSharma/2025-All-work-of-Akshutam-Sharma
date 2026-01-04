import express from "express";
const app = express();
const port = 3000;

app.get("/About",(req,res)=>{
  res.send(`<h1>About Me:-</h1> <br> <h2> My name is Akshutam. I'm a developer of this site.</h2> `);
});

app.get("/",(req,res)=>{
  res.send(`<h1>Home page</h1> <br> <h2> If you need to visit About page go to this domain :    localhost:3000/about .</h2> `);
});

app.listen(port,()=>{
    console.log(`Starting Your Server ${port}....`);    
});