import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const secret = "WakandaForever";
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is listening at port${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  const { password } = req.body;
console.log(password);


  if (password === secret) {
    res.sendFile(__dirname + "/public/secret.html");
  }else{
    res.redirect("/")
  }
});
