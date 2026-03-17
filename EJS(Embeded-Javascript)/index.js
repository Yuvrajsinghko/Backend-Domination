import ejs from "ejs";
import express from "express";

const app = express();


app.get("/", (req, res) => {
    res.render("index.ejs",{
        dayType:"a weekDay",
        advice:"it's time to work hard"
    })
});

app.listen(3000, () => {
  console.log(`The server is listening at port ${3000}`);
});