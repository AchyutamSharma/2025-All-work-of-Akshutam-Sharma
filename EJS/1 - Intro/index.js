import express from "express";

const app = express();
const port = 3000;

function getWeekdayName(date) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekdays[date.getDay()];
}

let today = new Date();
console.log(getWeekdayName(today));

app.get("/",(req,res)=>{
  res.render("index.ejs",{
    dayType: `a ${getWeekdayName(today)}`,
    advice: "its time to work hard",
  });
});

app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});

