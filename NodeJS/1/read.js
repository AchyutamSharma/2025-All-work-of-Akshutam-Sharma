const fs = require("fs");
fs.readFile("message.txt","utf8",(err,data)=>{
  if(err) throw err;
  console.log(data);
});
// utf8 is use for changing your buffer into string