import express from "express"
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const Mypassword = "doremon99";
var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

function passwordChecker(req,res,next){
  const { password } = req.body;
  console.log(password);
  // const userPassword = req.body.password;---- This is wrong way to use derive the password 
  if (Mypassword === password) {
    userIsAuthorised = true;
  }else {
    userIsAuthorised = false;
  }
  next();
}


app.post("/check",passwordChecker,(req,res)=>{
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});